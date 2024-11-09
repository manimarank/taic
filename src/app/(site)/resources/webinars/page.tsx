import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars - AI Business Solutions",
  description: "Join our webinars to gain insights into the latest AI trends and learn how our solutions drive success across industries.",
  // other metadata
};

export default function WebinarsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Webinars"
        description="Explore our webinars to stay informed on cutting-edge AI developments and industry applications."
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Upcoming and On-Demand Webinars</h1>
          <p className="mb-6">
            Our AI Business Company hosts a range of webinars designed to keep you at the forefront of artificial intelligence advancements. These sessions feature industry experts, live demonstrations, and in-depth discussions on how AI can transform your business operations.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Attend Our Webinars?</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>**Expert Insights**: Learn from industry leaders and AI specialists who share valuable knowledge and trends.</li>
            <li>**Real-World Applications**: Discover practical applications of AI technology across various industries.</li>
            <li>**Interactive Q&A Sessions**: Engage with speakers and get your questions answered in real-time.</li>
            <li>**Access to Resources**: Gain exclusive access to webinar recordings, presentations, and additional materials.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Featured Webinars</h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Webinar 1: Leveraging AI for Business Growth</h3>
            <p className="mb-4">
              Explore how AI-driven strategies can enhance business growth and streamline operations. This session covers case studies and actionable steps to implement AI in your organization.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Webinar 2: The Future of AI in Healthcare</h3>
            <p className="mb-4">
              Join our experts as they discuss the transformative impact of AI on healthcare, from diagnostics to personalized treatment plans. Learn how these advancements are shaping the future of medical care.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Webinar 3: Enhancing Customer Experience with AI</h3>
            <p className="mb-4">
              Dive into how AI can be used to personalize customer interactions and create seamless experiences. This webinar highlights key technologies and best practices for implementing AI in customer service.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Webinar 4: AI-Powered Predictive Analytics for Retail</h3>
            <p className="mb-4">
              Understand the role of predictive analytics in retail, from inventory management to sales forecasting. Learn how to leverage AI to make data-driven decisions that boost profitability.
            </p>
          </div>
          <p className="mb-6">
            Our webinars are tailored to help businesses gain a deeper understanding of how AI can be a powerful tool for innovation and efficiency. Whether you’re looking to implement AI or expand your knowledge, our webinars provide the insights you need.
          </p>
          <p>
            Ready to join our next session? <a href="/contact" className="text-blue-600 underline">Contact us</a> for registration details and more information on upcoming webinars.
          </p>
        </div>
      </section>
    </>
  );
}
