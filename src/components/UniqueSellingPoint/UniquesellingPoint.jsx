import USP from "../../assets/UniquesellingPoint.jpg"


const UniquesellingPoint = () => {
  return (<>
    <div className=" container  mx-auto   mb-10 mt-14 md:grid md:grid-cols-2 md:gap-4 ">
      <div className="my-4 ">
        <img src={USP}
          alt="serum"
          width={"450"}
        />
      </div>
      <div className="flex flex-col justify-center" >
        <h2 className="md:text-2xl font-krona mb-4 text-xl">Elegance that you deserve</h2>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eius veritatis recusandae quo molestias accusantium quaerat dignissimos excepturi omnis officia</p>
        <p className="text-sm mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus sed perspiciatis aliquam at numquam consequatur alias consectetur quasi eveniet minus.</p>


      </div>


    </div>
  </>)
}
export default UniquesellingPoint