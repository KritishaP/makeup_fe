import ButtonLink from "../ButtonLink/ButtonLink"
import SecondaryBannerImg from "../../assets/secondary_banner.png"
const SecondaryBanner = () => {
  return (<>
    <div className="banner__secondary container flex items-center justify-around mx-auto md:px-20 bg-greenish mb-10 ">
      <div className="md:w-96">
        <h3 className="font-krona mb-4 text-white md:text-xl">
          Be natural, <br /> be smart, <br /> be you
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="py-8 "
          width="200 "
          src={SecondaryBannerImg}
          alt="A bundle of cream products standing next to each other"
        />
      </div>
    </div>
  </>)
}
export default SecondaryBanner