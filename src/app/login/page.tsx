import Image from "next/image";
import { Stack } from "react-bootstrap";
import BgImage from "@/assets/icons/login_bg.svg";
import EmailField from "@/components/forms/EmailField";
import Heading from "@/components/layout/Heading";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Logo from "@/assets/icons/bed_bureau_icon.svg";
import Password from "@/components/forms/Password";

export default function page() {
  return (
    <Stack direction="horizontal" className="position-relative vh-100 app-bg">
      <Image src={Logo} alt="logo"
        className="position-absolute"
        style={{ top: "20px", left: "150px" }}
      />
      <Stack className=" w-100 color-primary justify-content-center align-items-center">
       <span className="fs-40 pb-5">Welcom to <br />
       <span className="fw-semibold" style={{color:"#684ABC"}}>Bed Bureau</span></span> 
        <Image src={BgImage} alt="bg-image" />
      </Stack>
      <Stack className=" w-100 justify-content-center p-5 align-items-center">
        <div className="  d-flex justify-content-around flex-column h-75 w-75 p-5 bg-white shadow rounded">
          <Heading>Login</Heading>
          <EmailField label="Email ID" placeholder="Enter email id"/>
          <Password/>
          <PrimaryButton label="Login"/>
        </div>
      </Stack>
    </Stack>
  );
}
