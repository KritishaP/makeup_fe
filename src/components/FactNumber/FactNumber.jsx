import { ShoppingCartIcon, UserGroupIcon, WalletIcon } from "@heroicons/react/24/outline"

const Icon = ({ icon }) => {
  if (icon === 'people') {
    return (
      <UserGroupIcon className="h-12 w-12 mb-4" />
    );
  }

  if (icon === 'revenue') {
    return (
      <WalletIcon className="h-12 w-12 mb-4" />
    );
  }

  if (icon === 'shop') {
    return (
      <ShoppingCartIcon className="h-12 w-12 mb-4" />
    );
  }
};

const FactNumber = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col items-center  w-full md:w-1/3">
      <Icon icon={icon} />
      <div className="text-center">
        <h2 className="text-2xl font-krona">{number}</h2>
        <h4 className="font-krona">{title}</h4>
        <p className="text-xs w-5/6 mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default FactNumber;
