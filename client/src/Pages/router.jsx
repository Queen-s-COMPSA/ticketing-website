import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingCircle from "../Components/LoadingCircle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Events from "./Events/Events";
const HomePage = lazy(() => import("./Homepage/Homepage"));

const Router = () => {
  return (
    <Routes>
      <Route
        key="Homepage"
        path="/"
        element={
          <Suspense fallback={<LoadingCircle />}>
            <Header />
            <HomePage />
            <Events />
            <Footer />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
