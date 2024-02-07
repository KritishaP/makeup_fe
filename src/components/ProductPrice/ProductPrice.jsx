const ProductPrice = ({ price, isLarge }) => {
  return (<>
    <div className="relative">
      <div className=" absolute -z-1 bg-light-grey h-10 rounded-full top-0 w-10"></div>
      <p className={`font-krona  pt-2 ml-4  md:text-md  text-${isLarge ? 'lg' : 'sm'}`}>{price} &euro;</p>

    </div>
  </>)
}
export default ProductPrice