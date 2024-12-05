import React from "react";

const services = [
  {
    title: "Implementation",
    description:
      "We ensure a smooth and efficient implementation of Odoo tailored to your unique requirements. Our team takes the time to understand your business processes and configures the system for optimal performance, helping you achieve faster ROI.",
    features: [
      "Business process analysis and mapping",
      "Tailored system configuration",
      "Data migration and testing",
      "Go-live support",
    ],
  },
  {
    title: "Support",
    description:
      "Our dedicated support team is available to address any issues or queries, ensuring uninterrupted operations. We provide quick resolutions, system updates, and proactive monitoring to keep your ERP running smoothly.",
    features: [
      "24/7 customer support",
      "Issue resolution and bug fixes",
      "System performance monitoring",
    ],
  },
  {
    title: "Maintenance",
    description:
      "Regular maintenance is vital for system reliability. We offer proactive maintenance services to ensure your Odoo platform is always up-to-date, secure, and performing at its best.",
    features: [
      "Routine system health checks",
      "Version upgrades",
      "Security patches and updates",
    ],
  },
  {
    title: "Customization",
    description:
      "Every business is unique, and so are its processes. We customize Odoo to align perfectly with your operations, ensuring maximum productivity and efficiency.",
    features: [
      "Module customization",
      "Workflow optimization",
      "Custom feature development",
    ],
  },
  {
    title: "Migration",
    description:
      "Upgrade to the latest Odoo version or migrate from legacy systems without any hassle. Our experts ensure a smooth migration with minimal downtime and no data loss.",
    features: [
      "Data migration and transformation",
      "Legacy system integration",
      "Post-migration testing and support",
    ],
  },
  {
    title: "Training",
    description:
      "Equip your team with the knowledge to harness the full potential of Odoo. We offer tailored training programs for employees at all levels to ensure seamless adoption and efficient use.",
    features: [
      "Role-specific training modules",
      "On-site or remote sessions",
      "Comprehensive user manuals and guides",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-item p-6 border rounded shadow">
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <ul className="list-disc pl-5">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
