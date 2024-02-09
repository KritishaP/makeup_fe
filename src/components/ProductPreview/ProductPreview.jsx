import CartButton from "../CartButton/CartButton";
import ProductPrice from "../ProductPrice/ProductPrice"
import ProductTitle from "../ProductTitle/ProductTitle"
import PropTypes from 'prop-types';

const ProductPreview = ({ name, img, type, category, price, description }) => {
  return (<>
    <div className="flex flex-col mb-10 lg:flex-row items-center justify-center ">
      <div className=" flex  items-center justify-center w-3/4 sm:w-2/4 md:w-1/4 lg:w-full lg:mr-10  mb-10 ">
        <img src={`https://${img}`} alt={name} />
      </div>


      <div >
        <p className="text-orange-400 font-krona text-sm">{type.replace(/_/g, ' ')}</p>
        <ProductTitle name={name} isMain={true} />


        <p>{category}</p>
        <div className="flex my-10 justify-between">
          <ProductPrice price={price} isLarge={true} />


          <div>
            Counter
          </div>

          <CartButton />
        </div>

        <p dangerouslySetInnerHTML={{ __html: description }}  ></p>
      </div>
    </div>
  </>)
}
export default ProductPreview

ProductPreview.propType = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}