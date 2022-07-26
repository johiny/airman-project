import  useFetch from "../hooks/useFetch";
import ProductDescription from "../components/ProductDescription";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MainContent from "../components/MainContent";

const ProductPage = () => {
  let url = "https://api-playground-test.herokuapp.com/products/43900";
  let { data, loading, error } = useFetch(url);

  return (
    <>
      {loading && <Loader />}
      {error && !loading ? (
        <Message />
      ) : (
        <>
          <MainContent name={data.name} image={data.image} price={data.price} />
          <hr />
          <ProductDescription
            description={data.description}
            manufacturer={data.manufacturer}
            type={data.type}
            model={data.model}
          />
        </>
      )}
    </>
  );
};

export default ProductPage;
