import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Startup Pro",
  description: "This is Home Blog page for Startup Pro",
  // other metaDescription
};

const BlogPage = () => {
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

export default BlogPage;
