import PropTypes from 'prop-types';
const Description = ({ description }) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: description }}  ></p>
    </>
  )
}

export default Description
Description.propTypes = {
  description: PropTypes.string.isRequired,
}