const industries = [
  {
    title: "Manufacturing",
    description:
      "Streamline your production schedules, manage raw materials, and optimize the supply chain with Odoo tailored for manufacturing.",
    features: [
      "Production planning and scheduling",
      "Inventory and warehouse management",
      "Supply chain optimization",
      "Quality control",
    ],
    image: "/images/industries/manufacturing.png",
  },
  {
    title: "E-Commerce",
    description:
      "Simplify your online store management with Odoo's e-commerce solutions. Track orders, manage inventory, and enhance customer experiences.",
    features: [
      "Integrated website and e-commerce platform",
      "Order tracking and invoicing",
      "Inventory synchronization",
      "Customer loyalty programs",
    ],
    image: "/images/industries/ecommerce.png",
  },
  {
    title: "Wholesale and Distribution",
    description:
      "Odoo helps wholesalers and distributors manage inventory, streamline order processing, and optimize warehouse operations.",
    features: [
      "Centralized inventory management",
      "Order processing automation",
      "Real-time stock tracking",
      "Multiple warehouse management",
    ],
    image: "/images/industries/wholesale.png",
  },
  {
    title: "Automotive and Spare Parts:",
    description:
      "Odoo facilitates inventory management, procurement, and distribution processes, supporting automotive component manufacturers, vehicle service centers, and spare parts distributors.",
    features: [
      "Inventory management",
      "Procurement automation",
      "Distribution logistics",
      "Supplier relationship management",
    ],
    image: "/images/industries/automotive.png",
  },
  {
    title: "Textile and Apparel",
    description:
      "Optimize your textile and apparel business with tools to manage production cycles, inventory, and sales operations.",
    features: [
      "Production cycle tracking",
      "Inventory and stock management",
      "Retail and wholesale integrations",
      "Supply chain management",
    ],
    image: "/images/industries/textile.png",
  },
  {
    title: "Pharmaceuticals and Chemicals",
    description:
      "Ensure compliance and streamline your processes with Odoo’s solutions for pharmaceutical and chemical businesses.",
    features: [
      "Batch production tracking",
      "Regulatory compliance management",
      "Inventory and supply chain tracking",
      "Quality assurance",
    ],
    image: "/images/industries/pharma.png",
  },
];
import React from "react";
import Image from "next/image";

const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-lg text-body-color">
            Explore the diverse industries we cater to with our specialized solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-item p-6 border rounded shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={industry.image}
                  alt={`${industry.title} image`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4 text-primary">
                {industry.title}
              </h2>
              <p className="mb-4 text-body-color">{industry.description}</p>
              <ul className="list-disc pl-5 text-body-color">
                {industry.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
