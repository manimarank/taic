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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
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
