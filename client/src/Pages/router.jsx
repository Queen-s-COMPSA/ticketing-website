import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Suspense, lazy, useRef } from "react";
import LoadingCircle from "../Components/LoadingCircle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Events from "./Events/Events";
const HomePage = lazy(() => import("./Homepage/Homepage"));

const Router = () => {
  const eventRef = useRef(null);

  return (
    <Routes>
      <Route
        key="Homepage"
        path="/"
        element={
          <Suspense fallback={<LoadingCircle />}>
            <Header targetRef={eventRef} />
            <HomePage />
            <Events ref={eventRef} />
            <Footer />
          </Suspense>
        }
      />
      <Route
        key="Info"
        path="/info/"
        element={
          <Suspense fallback={<LoadingCircle />}>
            <Header targetRef={eventRef} />
            <HomePage />
            <Events ref={eventRef} />
            <Footer />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
