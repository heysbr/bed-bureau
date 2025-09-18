"use client"; // only in Next.js 13 App Router components

import React, {  useState } from "react";
import FormSelect from "@/components/forms/SelectField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import EmailField from "@/components/forms/EmailField";
import FormContainer from "@/components/layout/FormContainer";
import ForgetPassword from "@/components/forms/ForgetPassword";
import Heading from "@/components/layout/Heading";
import SubHeading from "@/components/layout/SubHeading";
import FormPrimaryButton from "@/components/Buttons/FormPrimaryButton";
import LogoutButton from "@/components/Buttons/LogoutButton";
import Modal from "@/components/modals/Modal";
import { Form } from "react-bootstrap";
import TableComponent from "@/components/ui/TableComponent";
import SearchField from "@/components/ui/SearchField";
import TextField from "@/components/forms/TextField";
import Checkbox from "@/components/forms/Checkbox";
import Link from "next/link";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f4f0", margin: "40px" }}>
      <Link href="/login" className="bg-primary text-bg-success px-5 py-2 rounded mx-5">
        Login Page
      </Link>

      <FormContainer>
        <FormSelect />
        <PrimaryButton />
        <SecondaryButton />
        <Heading>This is Heading</Heading>
        <SubHeading>This is Sub Heading</SubHeading>
        <TextField />
        <EmailField />
        <ForgetPassword />
        <FormPrimaryButton />
        <PrimaryButton />
        <LogoutButton />
        <button onClick={() => setModal((prev) => !prev)}>Click me</button>
        {modal && <Modal>Hello World</Modal>}
      </FormContainer>
      <TableComponent />
      <SearchField />
      <Form>
        <TextField label="Full Name" placeholder="Enter your name" required />
        <EmailField required />
        <PrimaryButton />
        <Checkbox />
      </Form>
    </div>
  );
}
