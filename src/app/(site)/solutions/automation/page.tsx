import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Solutions - AI Business Solutions",
  description:
    "Discover how intelligent automation can streamline operations, improve efficiency, and drive business growth.",
};

export default function AutomationPage() {
  return (
    <>
      <Breadcrumb
        pageName="Automation Solutions"
        description="Streamline your business operations with cutting-edge automation technologies."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Unlock Efficiency with Intelligent Automation
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Harness the power of automation to simplify workflows, reduce costs,
            and accelerate business outcomes.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Hero Image */}
      <div className="container mx-auto my-12 px-4">
        <img
          src="/images/automation/hero-automation.png"
          alt="Automation"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Our Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            What Automation Can Do for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workflow Automation */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/icons/workflow.png"
                alt="Workflow Automation Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <img
                src="/images/automation/workflow-automation.png"
                alt="Workflow Automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-600">
                Optimize your processes for faster execution, improved accuracy,
                and seamless collaboration.
              </p>
            </div>

            {/* Robotic Process Automation */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/icons/robot.png"
                alt="Robotic Process Automation Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <img
                src="/images/automation/rpa.png"
                alt="Robotic Process Automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Robotic Process Automation
              </h3>
              <p className="text-gray-600">
                Eliminate repetitive tasks with bots that work tirelessly,
                ensuring consistent and error-free results.
              </p>
            </div>

            {/* AI-Powered Automation */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/icons/ai.png"
                alt="AI-Powered Automation Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <img
                src="/images/automation/ai-powered.png"
                alt="AI-Powered Automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Automation
              </h3>
              <p className="text-gray-600">
                Integrate AI into automation processes to predict outcomes, make
                decisions, and drive smarter operations.
              </p>
            </div>

            {/* Predictive Maintenance */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/icons/predictive.png"
                alt="Predictive Maintenance Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <img
                src="/images/automation/predictive-maintenance.png"
                alt="Predictive Maintenance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Predictive Maintenance
              </h3>
              <p className="text-gray-600">
                Reduce downtime and improve equipment lifespan with data-driven
                insights and automated alerts.
              </p>
            </div>

            {/* Process Optimization */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/icons/optimization.png"
                alt="Process Optimization Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <img
                src="/images/automation/process-optimization.png"
                alt="Process Optimization"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Process Optimization</h3>
              <p className="text-gray-600">
                Identify bottlenecks and implement streamlined solutions for
                enhanced efficiency.
              </p>
            </div>

            {/* Intelligent Document Processing */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/icons/document.png"
                alt="Intelligent Document Processing Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <img
                src="/images/automation/document-processing.png"
                alt="Intelligent Document Processing"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Intelligent Document Processing
              </h3>
              <p className="text-gray-600">
                Automate the extraction, processing, and storage of data from
                documents with high accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Our Automation Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Unlock key advantages that redefine your business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="/images/automation/efficiency.png"
                alt="Efficiency"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Efficiency Boost</h3>
              <p className="text-gray-600">
                Execute tasks faster and with precision, ensuring optimal use of
                resources.
              </p>
            </div>
            <div className="p-6">
              <img
                src="/images/automation/cost-savings.png"
                alt="Cost Savings"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Reduce operational expenses with intelligent process automation.
              </p>
            </div>
            <div className="p-6">
              <img
                src="/images/automation/scalability.png"
                alt="Scalability"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Scalability</h3>
              <p className="text-gray-600">
                Scale operations effortlessly to meet the growing demands of your
                business.
              </p>
            </div>
            <div className="p-6">
              <img
                src="/images/automation/accuracy.png"
                alt="Accuracy"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Improved Accuracy</h3>
              <p className="text-gray-600">
                Eliminate errors and achieve consistent, reliable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="bg-blue-600 py-8 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to Embrace the Power of Automation?
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
