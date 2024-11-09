import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services - AI Business Solutions",
  description: "Explore our AI consulting services to accelerate your business growth with cutting-edge technology and expert insights.",
  // other metadata
};

export default function ConsultingPage() {
  return (
    <>
      <Breadcrumb
        pageName="Consulting Services"
        description="Drive your business forward with our tailored AI consulting solutions."
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">AI Consulting Services</h1>
          <p className="mb-6">
            At our AI Business Company, we provide specialized consulting services that enable organizations to harness the power of artificial intelligence. Our team of experienced professionals helps you identify opportunities, develop strategies, and implement AI solutions tailored to your unique business needs.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Consulting Expertise</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>AI Strategy Development: Craft comprehensive strategies that align with your business goals.</li>
            <li>Data Analysis and Preparation: Prepare and analyze data to ensure it is ready for AI integration.</li>
            <li>Custom AI Model Development: Create custom machine learning models to solve complex business problems.</li>
            <li>Implementation and Integration: Seamlessly integrate AI solutions into your existing workflows.</li>
            <li>Ongoing Support and Optimization: Continuous monitoring and improvement of AI systems.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="mb-6">
            Our approach combines deep industry knowledge with cutting-edge technology to deliver tailored solutions that enhance efficiency, drive innovation, and foster business growth. Partner with us to stay ahead in today’s competitive market.
          </p>
          <p>
            Ready to transform your business with AI? <a href="/contact" className="text-blue-600 underline">Contact us today</a> to schedule a consultation and start your AI journey.
          </p>
        </div>
      </section>
    </>
  );
}
