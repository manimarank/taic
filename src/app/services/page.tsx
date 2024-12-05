import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import ServiceSection from "@/components/Services/ServiceSection";

import { Metadata } from "next";

export const metadata = {
  title: "Our Services | Comprehensive Odoo ERP Solutions",
  description: "Explore our wide range of Odoo ERP services, including implementation, customization, migration, support, and training. Empower your business with Inerpulse LLP.",
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="At Inerpulse LLP, we specialize in delivering comprehensive Odoo ERP solutions tailored to your business needs. From initial implementation to ongoing support and upgrades, our team ensures your ERP system operates seamlessly, empowering your business to thrive."
      />

      <ServiceSection />
    </>
  );
};

export default ContactPage;
