// src/app/(site)/services/consulting/page.tsx or src/pages/services/consulting.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting Services - Transformative AI",
  description: "Discover our AI consulting services that help businesses implement transformative AI solutions.",
};

export default function ConsultingPage() {
  return (
    <>
      <Breadcrumb
        pageName="AI Consulting"
        description="Leverage our expertise to bring cutting-edge AI solutions to your business."
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">AI Consulting Services</h1>
          <p className="mb-6">
            At Transformative AI, we specialize in providing expert AI consulting services tailored to your business needs. Our team works closely with you to understand your goals and implement solutions that drive efficiency and innovation.
          </p>
          <p>
            From data strategy to custom AI model development, we support you at every step to ensure seamless integration and measurable results.
          </p>
        </div>
      </section>
    </>
  );
}
