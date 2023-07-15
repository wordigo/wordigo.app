import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Home/Footers";
import MainLayout from "@/components/Layout/MainLayout";

export default function index() {
  return (
    <Fragment>
      <MainLayout />
      <Contactus />
      <Footer />
    </Fragment>
  );
}
