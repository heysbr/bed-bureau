"use client"; // only in Next.js 13 App Router components

import React, { useState } from "react";
import FormSelect from "@/components/forms/FormSelectField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import TextFieldField from "@/components/forms/TextField";
import EmailField from "@/components/forms/EmailField"
import FormContainer from "@/components/layout/FormContainer";
import ForgetPassword from "@/components/forms/ForgetPassword";
import Heading from "@/components/layout/Heading";
import SubHeading from "@/components/layout/SubHeading";
import FormPrimaryButton from "@/components/Buttons/FormPrimaryButton";
import LogoutButton from "@/components/Buttons/LogoutButton";
import Modal from "@/components/modals/Modal";
import { Tab } from "react-bootstrap";
import TableComponent from "@/components/ui/TableComponent";
import SearchField from "@/components/ui/SearchField";

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f4f0" }}>
      <FormContainer>
      <FormSelect/>
      <PrimaryButton/>
      <SecondaryButton/>
      <Heading>This is Heading</Heading>
      <SubHeading>This is Sub Heading</SubHeading>
      <TextFieldField/>
      <EmailField/>
      <ForgetPassword/>
      <FormPrimaryButton/>
      <PrimaryButton/>
      <LogoutButton/>
      <button onClick={()=>setModal(prev=>!prev)}>Click me</button>
      {modal&&(<Modal>Hello World</Modal>)}
      </FormContainer>
      <TableComponent/>
      <SearchField/>
    </div>
  );
}