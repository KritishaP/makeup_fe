import ProductTitle from "../ProductTitle/ProductTitle"
import PropTypes from 'prop-types';
const Info = ({ type, name, category }) => {
  return (
    <>
      <p className="text-orange-400 font-krona text-sm">{type}</p>
      <ProductTitle name={name} isMain={true} />
      <p>{category}</p>
    </>
  )
}

export default Info

Info.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}