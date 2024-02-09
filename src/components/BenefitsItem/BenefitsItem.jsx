import { BanknotesIcon, ShoppingCartIcon, TruckIcon } from "@heroicons/react/24/outline"

const BenefitsItem = ({ item }) => {
  return (<>
    <div className="flex flex-1 ">
      <div className="relative mr-4  ">

        <div className=" absolute -z-1  bg-orange-300 h-10 rounded-full top-0 w-10 ml-4"></div>

        {
          item.title === 'Products' && <ShoppingCartIcon className="h-8 w-8 ml-7 mt-1" />
        }
        {
          item.title === 'Payments' && <BanknotesIcon className="h-8 w-8 ml-7 mt-1" />
        }
        {
          item.title === 'Delivery' && <TruckIcon className="h-8 w-8 ml-7 mt-1" />
        }
      </div>

      <div>
        <h5 className="font-krona text-sm">{item.title}</h5>
        <p className="text-xs">{item.text}</p>
      </div>

    </div>
  </>)
}
export default BenefitsItem