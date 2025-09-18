"use client"
import Image from "next/image";
import { Stack } from "react-bootstrap";
import BgImage from "@/assets/icons/login_bg.svg";
import Heading from "@/components/layout/Heading";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Logo from "@/assets/icons/bed_bureau_icon.svg";

import { LoginFields } from "@/data/fields";
import FormField from "@/components/forms/FormField";
import { generateSchema } from "@/utils/SchemaGenerator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const schema = generateSchema(LoginFields);
type FormData = z.infer<typeof schema>;

export default function Page() {
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  function submit(data: FormData) {
    alert("form submitted successfully...");
    console.table(data);
    router.push("/manage-client");
  }

  return (
    <Stack direction="horizontal" className="position-relative vh-100 app-bg">
      <Image
        src={Logo}
        alt="logo"
        className="position-absolute"
        style={{ top: "20px", left: "150px" }}
      />
      <Stack className=" w-100 color-primary justify-content-center align-items-center">
        <span className="fs-40 pb-5">
          Welcom to <br />
          <span className="fw-semibold" style={{ color: "#684ABC" }}>
            Bed Bureau
          </span>
        </span>
        <Image src={BgImage} alt="bg-image" />
      </Stack>
      <Stack className=" w-100 justify-content-center p-5 align-items-center">
        <form onSubmit={handleSubmit(submit)} className="  d-flex justify-content-around flex-column h-75 w-75 p-5 bg-white shadow rounded">
          <Heading>Login</Heading>
          {LoginFields.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              register={register}
              error={errors[field.name]?.message}
              // link={field?.link}
              forgetPassword={field?.forget_password}
            />
          ))}
          <PrimaryButton label="Login" type="submit"/>
        </form>
      </Stack>
    </Stack>
  );
}
