import React from "react";
import Image from "next/image";
import IndustriesSection from "@/components/Industries/IndustriesSection";
import Breadcrumb from "@/components/Common/Breadcrumb"; // Import the Breadcrumb component

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Comprehensive Odoo ERP Solutions",
  description:
    "Explore our wide range of Odoo ERP services, including implementation, customization, migration, support, and training. Empower your business with Inerpulse LLP.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="At Inerpulse LLP, we specialize in delivering comprehensive Odoo ERP solutions tailored to your business needs. From initial implementation to ongoing support and upgrades, our team ensures your ERP system operates seamlessly, empowering your business to thrive."
      />
      <IndustriesSection />
    </>
  );
};

export default ContactPage;
