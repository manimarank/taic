import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatter from "@/components/Newslatter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Startup Pro",
  description: "Explore our latest articles and insights at Startup Pro",
  // other metadata
};

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Page"
        description="Stay updated with the latest industry news, insights, and articles tailored for startups and innovators."
      />

      <div className="py-16 md:py-20 lg:py-24">
        <BlogList />
      </div>

      <div className="py-16 md:py-20 lg:py-24">
        <NewsLatter />
      </div>
    </>
  );
};

export default BlogPage;

