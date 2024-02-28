import CartButton from "../CartButton/CartButton";
import ProductPrice from "../ProductPrice/ProductPrice"
import PropTypes from 'prop-types';
import Image from "./Image";
import Info from "./Info";
import Description from "./Description";

const ProductPreview = ({ name, img, type, category, price, description }) => {
  return (<>
    <div className="flex flex-col mb-10 lg:flex-row items-center justify-center ">
      <Image name={name} img={img} />
      <div >
        <Info type={type} name={name} category={category} />
        <div className="flex my-10 justify-between">
          <ProductPrice price={price} isLarge={true} />
          <CartButton />
        </div>
        <Description description={description} />

      </div>
    </div>
  </>)
}
export default ProductPreview

ProductPreview.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}