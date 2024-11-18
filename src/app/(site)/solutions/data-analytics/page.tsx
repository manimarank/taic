import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Data Analytics Solutions - AI Business Solutions",
  description:
    "Unlock valuable insights and drive strategic decisions with our AI-powered data analytics solutions.",
};

export default function DataAnalyticsPage() {
  return (
    <>
      <Breadcrumb
        pageName="AI-Powered Data Analytics Solutions"
        description="Unlock the potential of your data with advanced AI-powered analytics solutions."
      />

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Our Data Analytics Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Predictive Analytics */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/automation/predictive-maintenance.png"
                alt="Predictive Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Leverage AI-powered models to forecast trends and anticipate
                outcomes based on historical data.
              </p>
            </div>

            {/* Descriptive Analytics */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/automation/document-processing.png"
                alt="Descriptive Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Descriptive Analytics</h3>
              <p className="text-gray-600">
                Understand past performance and gain insights into what happened
                and why.
              </p>
            </div>

            {/* Prescriptive Analytics */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/automation/rpa.png"
                alt="Prescriptive Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Prescriptive Analytics</h3>
              <p className="text-gray-600">
                Use AI-driven recommendations to determine the best course of
                action for optimal results.
              </p>
            </div>

            {/* Real-Time Data Processing */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/automation/efficiency.png"
                alt="Real-Time Data Processing"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Real-Time Processing</h3>
              <p className="text-gray-600">
                Analyze and process data in real-time to support immediate
                decision-making and responsiveness.
              </p>
            </div>

            {/* Data Visualization */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/automation/process-optimization.png"
                alt="Data Visualization"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
              <p className="text-gray-600">
                Transform complex data into intuitive visuals for better
                communication and decision-making.
              </p>
            </div>

            {/* Big Data Analytics */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/automation/scalability.png"
                alt="Big Data Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Big Data Analytics</h3>
              <p className="text-gray-600">
                Handle and analyze massive datasets efficiently with
                AI-powered tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Our Data Analytics Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our AI-driven solutions deliver tangible benefits to your business:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="/images/automation/accuracy.png"
                alt="Enhanced Decision-Making"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Enhanced Decisions</h3>
              <p className="text-gray-600">
                Make data-backed decisions that improve business outcomes and
                reduce risks.
              </p>
            </div>

            <div className="p-6">
              <img
                src="/images/automation/cost-savings.png"
                alt="Efficiency"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Increased Efficiency</h3>
              <p className="text-gray-600">
                Streamline operations by identifying bottlenecks and improving
                workflows.
              </p>
            </div>

            <div className="p-6">
              <img
                src="/images/automation/scalability.png"
                alt="Proactive Strategies"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Proactive Strategies</h3>
              <p className="text-gray-600">
                Use predictive insights to anticipate market trends and customer
                needs.
              </p>
            </div>

            <div className="p-6">
              <img
                src="/images/automation/document-processing.png"
                alt="Customer Understanding"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Customer Insights</h3>
              <p className="text-gray-600">
                Tailor products and services to meet customer needs and improve
                loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="bg-blue-600 py-8 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to Unlock the Power of Your Data?
        </h3>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200 transition"
        >
          Contact Us Today
        </a>
      </div>
    </>
  );
}
