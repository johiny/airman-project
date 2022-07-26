import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Phone, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import LogoLight from '../Components/LogoLight';
import {useNavigate} from "react-router-dom";

const Footer = () => {
    
  const navigate = useNavigate();

  return (

    <div className="flex items-center justify-center p-2 mobile:flex-col mobile:justify-center w-[100%] h-[100%] mobile:w-[100%] mobile:h-[100%] bg-[#251D3A] cursor-pointer" onClick={() => navigate("/")} >
        <LogoLight/>
    </div>
  );
};

export default Footer;