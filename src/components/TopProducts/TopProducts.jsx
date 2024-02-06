import ButtonLink from "../ButtonLink/ButtonLink"
import SectionTitle from "../SectionTitle/SectionTitle"

const TopProducts = () => {
  return (<>
    <div className="container mx-auto flex items-center justify-between">
      <SectionTitle text={"Top products"} />
      <ButtonLink path={'/about'} text={"see more"} isMain={true} />
    </div>
    <div className="h-80">

    </div>
  </>)
}
export default TopProducts