import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactStyleTwo from "@/components/ContactStyleTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us -TransAI",
  description: "Get in touch with AI experts",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Whether you're aiming to streamline operations or enhance strategic decision-making, our expert team is committed to supporting you at every stage of your journey. Partner with us to shape a future where AI fuels innovation and drives success across all industries."
      />

      <ContactStyleTwo />
    </>
  );
};

export default ContactPage;
