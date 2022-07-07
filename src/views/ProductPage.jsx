import { useFetch } from '../hooks/useFetch'
import PricingAndStock from "../components/PricingAndStock";
import ProductDescription from "../components/ProductDescription";
import ProductHeader from "../components/ProductHeader";
import Loader from '../components/Loader';

const ProductPage = () => {
  let url = "https://api-playground-test.herokuapp.com/products/43900"
  let { data, loading, error } = useFetch(url)

  return (
    <>
      {loading && <Loader />}
      <section className="md:flex md:w-full md:justify-around md:items-center">
        <ProductHeader name={data.name} image={data.image} />
        <PricingAndStock price={data.price} />
      </section>
      <hr />
      <ProductDescription description={data.description} manufacturer={data.manufacturer} type={data.type} model={data.model} />
    </>
  );
};

export default ProductPage;
