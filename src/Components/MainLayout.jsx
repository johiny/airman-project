import React from "react";
import { Outlet } from "react-router-dom";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import Loader from "./Loader";
const MainLayout = () => {
  const { data, isError, isLoading } = useGetAllProducts();

  return (
    <div>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Announce />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : null}
    </div>
  );
};

export default MainLayout;
