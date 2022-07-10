const ProductDescription = ({description, manufacturer, type, model}) => {
  return (
    <article className="w-11/12 h-80 flex flex-col justify-around items-center rounded-md bg-blueSecondary text-white text-center mx-auto m-10 gap-5 md:w-5/6 md:justify-evenly">
      <article>
        <h2>Product Description</h2>
        <p>{description}</p>
      </article>
      <table className="w-full h-1/2 grid-cols-3 md:w-1/2 md:h-auto">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Type</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{manufacturer}</td>
            <td>{type}</td>
            <td>{model}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default ProductDescription;
