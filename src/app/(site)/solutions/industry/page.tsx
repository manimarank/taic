import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Benefits - AI Business Solutions",
  description: "Explore the transformative benefits of AI technology for various industries and how our tailored solutions drive growth and efficiency.",
};

export default function IndustryBenefitsPage() {
  const industries = [
    {
      image: "/images/industry/metal.jpeg",
      title: "Metal",
      description: (
        <>
          <strong>Challenges:</strong> Equipment breakdowns, safety risks, and high energy costs.{" "}
          <strong>How AI Helps:</strong> Predict failures, reduce downtime, and monitor safety hazards in real-time.{" "}
          <strong>Benefits:</strong> Safer workplaces, efficient operations, and lower energy bills.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/cement.jpeg",
      title: "Cement",
      description: (
        <>
          <strong>Challenges:</strong> Fluctuating quality, energy wastage, and pollution.{" "}
          <strong>How AI Helps:</strong> Optimize raw material use, reduce emissions, and save energy.{" "}
          <strong>Benefits:</strong> Cleaner, consistent, and efficient cement production.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/cold-storage.jpeg",
      title: "Cold Storage",
      description: (
        <>
          <strong>Challenges:</strong> Spoilage and inventory mismanagement.{" "}
          <strong>How AI Helps:</strong> Maintain temperatures, predict stock needs, and reduce waste.{" "}
          <strong>Benefits:</strong> Fresher products, lower losses, and cost savings.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/district-cooling.png",
      title: "District Cooling",
      description: (
        <>
          <strong>Challenges:</strong> Energy waste and high operational costs.{" "}
          <strong>How AI Helps:</strong> Optimize cooling based on demand and predict failures.{" "}
          <strong>Benefits:</strong> Lower costs, energy savings, and eco-friendly cooling.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/power.jpeg",
      title: "Power",
      description: (
        <>
          <strong>Challenges:</strong> Outages, failures, and renewable energy integration.{" "}
          <strong>How AI Helps:</strong> Predict failures, balance energy demand, and manage renewables.{" "}
          <strong>Benefits:</strong> Reliable grids, clean energy, and cost-effective power.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/mining.png",
      title: "Mining",
      description: (
        <>
          <strong>Challenges:</strong> Worker safety, inefficiencies, and resource wastage.{" "}
          <strong>How AI Helps:</strong> Map resources, monitor equipment, and prevent accidents.{" "}
          <strong>Benefits:</strong> Safer operations, smarter extraction, and reduced costs.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/chemicals-fertilizers.png",
      title: "Chemicals & Fertilizers",
      description: (
        <>
          <strong>Challenges:</strong> Leaks, resource waste, and compliance risks.{" "}
          <strong>How AI Helps:</strong> Monitor production, prevent leaks, and ensure regulations.{" "}
          <strong>Benefits:</strong> Safer processes, efficient production, and compliance.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/pharmaceutical.png",
      title: "Pharmaceutical",
      description: (
        <>
          <strong>Challenges:</strong> Slow drug development and supply chain disruptions.{" "}
          <strong>How AI Helps:</strong> Speed up research, ensure quality, and predict delays.{" "}
          <strong>Benefits:</strong> Faster treatments, reliable manufacturing, and stable supply chains.
        </>
      ),
      link: "#",
    },
    {
      image: "/images/industry/smart-cities.png",
      title: "Smart Cities",
      description: (
        <>
          <strong>Challenges:</strong> Traffic, inefficient utilities, and safety concerns.{" "}
          <strong>How AI Helps:</strong> Manage traffic, optimize utilities, and enhance public safety.{" "}
          <strong>Benefits:</strong> Cleaner, safer, and better-connected urban living.
        </>
      ),
      link: "#",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Industry Benefits"
        description="Discover how our AI solutions provide significant advantages across various industries."
      />

      <section className="py-16 md:py-20 lg:py-24 bg-pale-blue">
        <div className="container">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800 font-sans-serif">Industry Benefits of AI Solutions</h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-700 font-light">
            AI technology is transforming industries by addressing specific challenges, enhancing decision-making, and creating a better future for everyone.
          </p>

          {/* Card Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <a
                key={index}
                href={industry.link}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <img
                  src={industry.image}
                  alt={`${industry.title} Image`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-800">{industry.title}</h3>
                  <p className="text-gray-700">{industry.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Closing Statement */}
          <p className="text-lg leading-relaxed text-gray-700 font-light mt-12">
            Ready to see how AI can transform your industry?{" "}
            <a href="/contact" className="text-blue-700 hover:text-blue-900 underline font-medium">
              Contact us today
            </a>{" "}
            to learn more about our customized AI solutions and how they can benefit your business.
          </p>
        </div>
      </section>
    </>
  );
}
