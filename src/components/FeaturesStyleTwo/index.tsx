import SectionTitle from "../Common/SectionTitle";
import SingleFeatureStyleTwo from "./SingleFeatureStyleTwo";
import featuresStyleTwoData from "./featuresStyleTwoData";

const FeaturesStyleTwo = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Explore our amazing AI driven solutions"
            paragraph="Personalized strategies to integrate AI seamlessly into your business, Solutions designed to meet your unique challenges and Predictive models that enhance decision-making"
            center
            width="735px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresStyleTwoData.map((feature) => (
              <SingleFeatureStyleTwo key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesStyleTwo;
