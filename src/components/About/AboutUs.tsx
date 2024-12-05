import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const AboutUs: React.FC = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* Check Icon */}
        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {/* Mission and Vision */}
        <div className="mb-16">
          <SectionTitle
            title="Our Mission"
            paragraph="To empower businesses by providing tailored Odoo ERP solutions that streamline operations, enhance productivity, and drive sustainable growth."
            mb="44px"
          />
          <SectionTitle
            title="Our Vision"
            paragraph="To be a leading provider of innovative ERP solutions, transforming businesses through technology and fostering a culture of continuous improvement."
            mb="44px"
          />
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <SectionTitle
            title="Meet Our Leadership Team"
            paragraph="Our leaders bring a wealth of experience and expertise, guiding Inerpulse LLP towards achieving excellence."
            mb="44px"
          />
          <div className="flex flex-wrap -mx-4">
            {/* CEO */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <Image
                  src="/images/about/manimaran.jpg"
                  alt="CEO"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                 <h3 className="text-xl font-semibold">Manimaran Karumalai</h3>
                <p className="text-body-color">Chief Executive Officer</p>
                <p className="text-body-color mt-2">
                  Manimaran is an experienced engineer who has dedicated nearly a decade to full-time volunteering in a non-profit organization. He brings clarity, simplicity, and efficiency to Inerpulse LLP.
                </p>
              </div>
            </div>
            {/* CTO */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <Image
                  src="/images/about/Vijay.jpg"
                  alt="CTO"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Kandan Munusamy</h3>
                <p className="text-body-color">Chief Technology Officer</p>
                <p className="text-body-color mt-2">
                  Kandan has nearly a decade of experience in ERP systems, specializing in Odoo implementation. He leads our technological strategies to deliver cutting-edge solutions to our clients.
                </p>
              </div>
            </div>
            {/* Marketing Director */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <Image
                  src="/images/about/Pathy.jpg"
                  alt="Marketing Director"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Vengatachalapathy Perisamy</h3>
                <p className="text-body-color">Marketing Director</p>
                <p className="text-body-color mt-2">
                  Pathy leads our marketing strategies, focusing on building strong client relationships and expanding our market presence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <SectionTitle
            title="Our Core Values"
            paragraph="At Inerpulse LLP, our core values define who we are and guide our actions."
            mb="44px"
          />
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <List text="Customer-Centric Approach" />
              <List text="Innovation" />
              <List text="Integrity" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <List text="Collaboration" />
              <List text="Excellence" />
              <List text="Sustainability" />
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="mb-16">
          <SectionTitle
            title="Company Overview"
            paragraph="Founded in 2022 and headquartered in Coimbatore, Tamil Nadu, Inerpulse LLP specializes in delivering comprehensive Odoo ERP solutions tailored to diverse business needs. Our team of experts is dedicated to ensuring seamless ERP implementation, support, and training, empowering businesses to thrive in a competitive landscape."
            mb="44px"
          />
        </div>

        {/* Contact Information */}
        <div className="mb-16">
       <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-body-color">
            We are here to assist you. Reach out to us through any of the following methods.
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-primary text-2xl mr-4" />
            <a href="mailto:info@inerpulse.com" className="text-lg text-body-color">
              info@inerpulse.com
            </a>
          </div>
          <div className="flex items-center mb-6">
            <FaPhone className="text-primary text-2xl mr-4" />
            <a href="tel:+917418303615" className="text-lg text-body-color">
              +91 74183 03615
            </a>
          </div>
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-primary text-2xl mr-4 mt-1" />
            <address className="not-italic text-lg text-body-color">
              99/1A, Perumal Kovil Pathy, Alandurai<br />
              Coimbatore, 641101
            </address>
          </div>
        </div>
      </div>
    </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

