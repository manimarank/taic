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
            title="We’re on a mission to make building your business"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. "
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
