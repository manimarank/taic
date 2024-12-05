import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Inerpulse",
  description: "This is Contact Page for Inerpulse",
  // other metadata
};

const ContactPage: React.FC = () => {
  return (
    <>
 <br/><br/><br/>
      <Contact />
    </>
  );
};

export default ContactPage;
