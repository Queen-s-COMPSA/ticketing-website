//Requiring passport
const passport = require("passport");

// Uses local strategy, IE Local database creds and not a third party
const LocalStrategy = require("passport-local").Strategy;

// Requiring Cesadmin Model
const { admin } = require("../models");

// Serializing User.
// Takes information sent by admin local-strategy "done"'s first parameter.
// From this entire object, extract specific items like id, email, type and store it in the session cookie on the client machine using done()
// Done then passes the specified object data to deserialize
serializeUser((userdata, done) => {
  // Only serialize if
  if (userdata.type !== "admin") return done("pass");
  // Add following fields to session cookie object
  done(null, { id: userdata.id, email: userdata.email, type: userdata.type });
});

// Deserializing User
// Takes the data left over from serializeUser and
deserializeUser(async (userdata, done) => {
  try {
    // If type is not member, dont try to deserialize it, and pass responsibility to other functions
    if (userdata.type !== "admin") return done("pass");

    const adm = await admin.findOne({
      attributes: { exclude: ["password"] },
      where: { id: userdata.id, email: userdata.email },
    });
    // Member not found -> error
    if (adm === null) done(`admin with Email ${userdata.email} not found!!`);
    done(null, { ...adm.dataValues, type: "admin" });
  } catch (err) {
    console.error(err);
    done(err);
  }
});

// Using local Strategy to Log In (IE check creds with db)
use(
  "admin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const adm = await admin.findOne({ where: { email: username } });

        // No admin found with provided email
        if (adm === null) {
          return done(null, false, {
            message: `Incorrect email or password. Please contact system administrator to resolve this issue`,
          });
        }

        // If Password from body is not correct for current admin
        if (!(await adm.validPassword(password, adm.password))) {
          return done(null, false, {
            message: `Incorrect email or password`,
          });
        }

        // Correct credentials
        return done(null, { id: adm.id, email: adm.email, type: "admin" });
      } catch (err) {
        console.error(err);
        done(err);
      }
    }
  )
);

export default passport;
