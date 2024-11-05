import AboutStyleThree from "@/components/AboutStyleThree";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatter from "@/components/Newslatter";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page - Startup Pro",
  description: "This is About page for Startup Pro",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Revolutionizing Industries with Intelligent Solutions: Transforming Tomorrow with AI Today"
      />
      <AboutStyleThree />

      <Video />

      <div className="py-16 md:py-20 lg:py-24">
        <NewsLatter />
      </div>
    </>
  );
};

export default AboutPage;
