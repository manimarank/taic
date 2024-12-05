import AboutUs from "@/components/About/AboutUs";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | inerpulse",
  description: `This is About Page for Startup Nextjs Template`,
};

const AboutPage = () => {
  const description = `
    Experience the ease of running your business with streamlined, efficient processes.<br /><br />
    With Inerpulse LLP’s Odoo ERP solutions, you gain the power to simplify operations, boost productivity, and focus on what truly matters—growing your business.<br /><br />
    Whether you're managing inventory, tracking sales, or expanding to new markets, our solutions adapt to your needs and scale effortlessly as you grow. Gain clarity, save time, and achieve more with tools designed to make your work easier.<br /><br />
    Inerpulse LLP is here to help you unlock your business’s full potential. Simplify, grow, and succeed with confidence.
  `;

  return (
    <>
     <br/><br/><br/>
    <AboutUs/>

    </>
  );
};

export default AboutPage;
