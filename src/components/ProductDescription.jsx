const ProductDescription = () => {
    return ( 
        <section className="flex flex-col justify-around items-center w-11/12 h-80 text-white mx-auto m-10 gap-5 md:flex-row md:w-5/6 ">
            <article className="w-96 h-32 p-2 bg-blueSecondary rounded-md md:w-1/2 md:h-full">
                <h2>Product Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat laoreet sapien id imperdiet. Integer ullamcorper neque vitae venenatis efficitur.</p>
            </article>

            <article className="w-96 h-44 p-2 bg-blueSecondary rounded-md text-center md:w-1/2 md:h-full">
                <h2>Additional Info</h2>
            </article>
        </section>
     );
}
 
export default ProductDescription;