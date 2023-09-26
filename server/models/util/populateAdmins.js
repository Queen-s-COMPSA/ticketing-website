module.exports = async (models) => {
  if ((await models.admin.count()) != 0) {
    return "Admin Accounts Already Exist";
  }

  // Create Admins
  for (var i = 0; i < 5; i++) {
    const email = `admin${i}@example.com`;
    if ((await models.admin.count({ where: { email: email } })) == 0) {
      const adm = await models.admin.create({
        email: email,
        password: `password${i}`,
      });
    }
  }

  return "Admin Population Finished!\n";
};
