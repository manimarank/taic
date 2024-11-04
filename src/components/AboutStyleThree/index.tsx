import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

import image_1 from "@/../public/images/about-3/image-1.jpg";
import image_2 from "@/../public/images/about-3/image-2.jpg";
import SingleBrand from "../Brands/SingleBrand";
import brandsData from "../Brands/brandsData";

const AboutStyleThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div>
          <SectionTitle
            title="We’re committed to transforming the way you build your business by harnessing the power of AI."
            paragraph="Transformative AI operates at the intersection of advanced technology and practical applications, leveraging machine learning, natural language processing, computer vision, and other AI techniques to create innovative solutions."
            center
            width="670px"
            mb="60px"
          />
        </div>

        <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <Image src={image_1} alt="about image" />
          </div>

          <div className="w-full">
            <div className="mb-12 block">
              <Image src={image_2} alt="about image" />
            </div>

            <div className="md:pl-10">
              <div className="mb-10">
                <h3 className="text-center text-[28px] font-semibold leading-snug text-black dark:text-white sm:text-[32px] lg:text-left">
                  More than 15k+ companies use our products & services.
                </h3>
              </div>

              <div className="flex w-full items-center">
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    14K+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Happy Clients
                  </p>
                </div>

                <span className="mx-9 inline-block h-[50px] w-px bg-stroke dark:bg-stroke-dark"></span>
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    100%
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <Image src={visionImage} alt="Vision Image" />
          </div>
          <div className="w-full">
            <h2 className="text-4xl font-bold text-center lg:text-left mb-6">Our Vision</h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">              
              We harness artificial intelligence to revolutionize industries, empowering businesses with unmatched efficiency, deep insights, and exponential growth, driven by our multidisciplinary teams of data scientists, engineers, researchers, and domain experts who collaborate to create cutting-edge, customized AI solutions.
            </p>
          </div>
        </div>
        <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <Image src={missionImage} alt="Mission Image" />
          </div>
          <div className="w-full">
            <h2 className="text-4xl font-bold text-center lg:text-left mb-6">Our Mission</h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              To develop cutting-edge AI technologies and solutions that are not only advanced and efficient but also ethical and transparent. We strive to transform businesses by providing tailored AI products and services that address specific industry challenges and drive sustainable success.
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-center">
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStyleThree;
