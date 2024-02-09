const CopyrightSection = () => {
  const date = new Date()
  const year = date.getFullYear()
  let display = 2023;
  if (year !== display) {
    display = display + '-' + year
  }
  return (<>
    <div className="py-2 bg-dark-grey mt-auto">
      <div className="container px-4">
        <div className="flex items-center justify-center ">
          <div>Copyright &copy; Kritisha Puri, Nepal {display}</div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </>)
}
export default CopyrightSection