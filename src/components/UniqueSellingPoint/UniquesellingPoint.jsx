import USP from "../../assets/UniquesellingPoint.jpg"


const UniquesellingPoint = () => {
  return (<>
    <div className="bg-light-grey pt-20 mb-20">
      <div className=" container  mx-auto pt-20 pb-16  flex flex-col md:flex-row items-center ">
        <div className="md:mr-4 mr-0 mb-4 md:mb-0 ">
          <img src={USP}
            alt="serum"

          />
        </div>
        <div  >
          <h2 className=" font-krona mb-4 text-2xl">Elegance that you deserve</h2>
          <p className="text-sm mb-2 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eius veritatis recusandae quo molestias accusantium quaerat dignissimos excepturi omnis officia</p>
          <p className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus sed perspiciatis aliquam at numquam consequatur alias consectetur quasi eveniet minus.</p>


        </div>


      </div>
    </div>

  </>)
}
export default UniquesellingPoint