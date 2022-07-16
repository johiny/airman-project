import React from "react";
import { Outlet } from "react-router-dom";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { selectFetchStatus } from "../Redux/Slices/productsSlice";
const MainLayout = () => {
  const status = useSelector((state) => selectFetchStatus(state))
  const isUninitialized = status === 'idle'
    const isLoading = status === 'pending'
    const isError = status === 'rejected'
    const isSuccess = status === 'fulfilled'

  return (
    <div>
      {isError ? (
        <>Oh no, there was an error</>
      ) : (
        <>
        {isLoading ? <Loader/> : null}
          <Announce />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
   </div>   
  )
};

export default MainLayout;
