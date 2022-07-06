const PricingAndStock = () => {
  return (
    <section className="w-64 h-72 mx-auto mt-10 mb-14 text-white text-center text-xl flex flex-col justify-evenly items-center md:w-2/3">
      <h2>$0</h2>
      <p>In Stock: 40 Items</p>
      
      <form className="flex gap-2 w-48 h-11 bg-blueSecondary mt-4 justify-center items-center place-self-center rounded-full">
        <label htmlFor="product-quantity">Quantity: </label>
        <select
          name="product-quantity"
          id="quantity"
          className="cursor-pointer"
        >
          <option value="1">1</option>
        </select>
      </form>

      <article
        id="btns"
        className="flex flex-col mt-8 mx-auto items-center gap-5"
      >
        <button className="w-60 h-14 rounded-full bg-primaryOrange md:transition ease-in-out duration-600 md:hover:bg-primaryOrangeLight">
          Buy Now
        </button>
        <button className="w-60 h-14 rounded-full bg-secondaryOrange md:transition ease-in-out duration-600 md:hover:bg-secondaryOrangeLight">
          Add to Cart
        </button>
      </article>
    </section>
  );
};

export default PricingAndStock;
