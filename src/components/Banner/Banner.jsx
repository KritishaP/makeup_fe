
import BannerImg from "../../assets/banner_image.jpg"
import ButtonLink from "../ButtonLink/ButtonLink"

const Banner = () => {
  return (<>
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center mt-0 md:mt-20 mb-10">
      <div  >
        <h1 className="font-krona text-3xl md:text-5xl mb-4 md:mb-10">The new lineup you'll swear by for dullness, dryness and breakouts</h1>
        <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eius veritatis recusandae quo molestias accusantium quaerat dignissimos excepturi omnis officia illum ullam expedita, veniam consequatur ratione ipsam architecto maiores exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, exercitationem?</p>

        <ButtonLink path={'/about'} text={"see more"} isMain={true} />
      </div>

      <div className="ml-0 md:ml-4 mb-4 md:mb-0 py-10 md:py-0 w-2/3 md:w-full">
        <img src={BannerImg} alt="serum"
        />
      </div>
    </div>


  </>)
}
export default Banner