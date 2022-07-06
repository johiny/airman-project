const ProductHeader = () => {
  return (
    <section className="w-5/6 h-64 flex flex-col justify-around align-center text-center text-2xl text-white mt-10 mx-auto md:w-5/6 md:h-72 md:mb-20">
      <h2>Product Title</h2>
      <img
        className="w-80 h-auto place-self-center"
        src="./src/assets/producto_ejemplo.jpg"
        alt="product"
      />
    </section>
  );
};

export default ProductHeader;
