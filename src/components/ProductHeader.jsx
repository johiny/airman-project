const ProductHeader = ({name, image}) => {
  return (
    <section className="w-5/6 h-1/2 flex flex-col justify-around align-center text-center text-2xl text-white mt-10 mx-auto md:mb-10">
      <h2>{name}</h2>
      <img
        className="w-1/2 h-auto mt-5 place-self-center"
        src={image}
        alt="product"
      />
    </section>
  );
};

export default ProductHeader;
