import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Technology - AI Business Solutions",
  description: "Explore the advanced AI technology solutions we offer to empower businesses and drive innovation.",
};

export default function AITechnologyPage() {
  return (
    <>
      <Breadcrumb
        pageName="AI Technology"
        description="Empowering businesses with cutting-edge AI technology to unlock their true potential."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-blue-50">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Revolutionize Your Business with AI Technology
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Transformative AI empowers businesses with tailored AI solutions
            that drive innovation, efficiency, and growth.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Hero Image */}
      <div className="container mx-auto my-12 px-4">
        <img
          src="/images/ai-technology/ai-technology-hero.png"
          alt="AI Technology"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Our Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Our AI Technology Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Learning */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/ai-technology/machine-learning.png"
                alt="Machine Learning"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Develop and deploy models that uncover patterns, deliver
                insights, and predict outcomes.
              </p>
            </div>

            {/* Natural Language Processing */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/ai-technology/nlp.png"
                alt="Natural Language Processing"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Natural Language Processing
              </h3>
              <p className="text-gray-600">
                Enable advanced text analysis, voice recognition, and chatbots
                for seamless user interactions.
              </p>
            </div>

            {/* Computer Vision */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/ai-technology/computer-vision.png"
                alt="Computer Vision"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-600">
                Process and analyze visual data for object detection, image
                recognition, and automated workflows.
              </p>
            </div>

            {/* Robotic Process Automation */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/ai-technology/rpa.png"
                alt="Robotic Process Automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Robotic Process Automation
              </h3>
              <p className="text-gray-600">
                Automate routine tasks with AI-powered tools, freeing your team
                for strategic work.
              </p>
            </div>

            {/* Deep Learning */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/ai-technology/deep-learning.png"
                alt="Deep Learning"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
              <p className="text-gray-600">
                Solve complex challenges with advanced neural networks for
                accurate decision-making.
              </p>
            </div>

            {/* Predictive Analytics */}
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <img
                src="/images/ai-technology/predictive-analytics.png"
                alt="Predictive Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Predictive Analytics
              </h3>
              <p className="text-gray-600">
                Harness historical data to predict trends and optimize future
                business strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Our Collaborative Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="/images/ai-technology/consultation.png"
                alt="Consultation"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">
                Understand your business goals and craft tailored AI strategies.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="/images/ai-technology/solution-design.png"
                alt="Solution Design"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Solution Design</h3>
              <p className="text-gray-600">
                Build AI solutions that address specific business challenges.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="/images/ai-technology/implementation.png"
                alt="Implementation"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Integrate AI seamlessly into your systems with minimal
                disruption.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="/images/ai-technology/training-support.png"
                alt="Training & Support"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Training & Support</h3>
              <p className="text-gray-600">
                Equip your team with tools and knowledge for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Our AI Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Transformative benefits that redefine how businesses operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="/images/ai-technology/decision-making.png"
                alt="Decision-Making"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Smarter Decisions</h3>
              <p className="text-gray-600">
                Data-driven insights for confident business strategies.
              </p>
            </div>
            <div className="p-6">
              <img
                src="/images/ai-technology/efficiency.png"
                alt="Efficiency"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Higher Efficiency</h3>
              <p className="text-gray-600">
                Optimize workflows and automate repetitive tasks.
              </p>
            </div>
            <div className="p-6">
              <img
                src="/images/ai-technology/customer-experience.png"
                alt="Customer Experience"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Enhanced Experiences</h3>
              <p className="text-gray-600">
                Personalized interactions that delight your customers.
              </p>
            </div>
            <div className="p-6">
              <img
                src="/images/ai-technology/innovation.png"
                alt="Innovation"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Foster Innovation</h3>
              <p className="text-gray-600">
                Stay ahead with AI solutions tailored for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="bg-blue-600 py-8 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to Transform Your Business?
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
