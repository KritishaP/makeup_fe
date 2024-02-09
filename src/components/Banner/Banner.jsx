
import BannerImg from "../../assets/banner_image.jpg"
import ButtonLink from "../ButtonLink/ButtonLink"

const Banner = () => {
  return (<>
    <div className=" container  mx-auto mt-7 md:mt-14  mb-10  md:grid md:grid-cols-2 md:gap-4">
      <div  >
        <h1 className="md:text-2xl font-krona mb-4 text-xl">The new lineup you'll swear by for dullness, dryness and breakouts</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eius veritatis recusandae quo molestias accusantium quaerat dignissimos excepturi omnis officia illum ullam expedita, veniam consequatur ratione ipsam architecto maiores exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, exercitationem?</p>

        <ButtonLink path={'/about'} text={"see more"} isMain={true} />
      </div>

      <div className="my-4">
        <img src={BannerImg} alt="serum"
        />
      </div>
    </div>


  </>)
}
export default Banner