import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { selectFetchStatus, selectTotalProductsInStore } from "../Redux/Slices/productsSlice";
const MainLayout = () => {
  const status = useSelector((state) => selectFetchStatus(state))
  const productsInStore = useSelector(selectTotalProductsInStore)
    const isLoading = status === 'pending'
    const isError = status === 'rejected'

  return (
    <div>
      {isError ? (
        <>Oh no, there was an error</>
      ) : (
        <>
        {isLoading && productsInStore <= 0 ? <Loader/> : null}
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
   </div>   
  )
};

export default MainLayout;
