const ProductTitle = ({ name, isMain }) => {
  return (<>
    <h5 className={`font-krona text-${isMain ? 'base' : 'sm'} `}>{name}</h5>
  </>)
}
export default ProductTitle