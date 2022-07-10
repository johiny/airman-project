import PricingAndStock from "./PricingAndStock";
import ProductHeader from "./ProductHeader";

const MainContent = ({name, image, price}) => {
  return (
    <section className="md:flex md:w-full md:justify-around md:items-center">
      <ProductHeader name={name} image={image} />
      <PricingAndStock price={price} />
    </section>
  );
};

export default MainContent;
