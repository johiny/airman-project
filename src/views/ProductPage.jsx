import PricingAndStock from "../components/PricingAndStock";
import ProductDescription from "../components/ProductDescription";
import ProductHeader from "../components/ProductHeader";

const ProductPage = () => {
  return (
    <>
      <section className="md:flex md:w-full md:justify-around md:items-center">
        <ProductHeader />
        <PricingAndStock />
      </section>
      <hr />
      <ProductDescription />
    </>
  );
};

export default ProductPage;
