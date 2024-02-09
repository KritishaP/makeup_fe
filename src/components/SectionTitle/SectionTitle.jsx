const SectionTitle = ({ text, className }) => {
  return (<>
    <h3 className={`font-krona md:font-semibold text-sm ${className}`}>{text}</h3>
  </>)
}
export default SectionTitle