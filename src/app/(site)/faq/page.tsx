import Breadcrumb from "@/components/Common/Breadcrumb";
import FaqSection from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page - Startup Pro",
  description: "This is Faq Page for Startup Pro",
  // other metadata
};

const FaqPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="FAQ Page"
        description="Transformative AI leverages cutting-edge artificial intelligence to drive innovation across industries, offering tailored solutions that optimize operations, enhance decision-making, and unlock new opportunities for growth."
      />

      <FaqSection />
    </>
  );
};

export default FaqPage;
