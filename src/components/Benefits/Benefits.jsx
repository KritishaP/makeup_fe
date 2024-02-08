import BenefitsItem from "../BenefitsItem/BenefitsItem";

const benefits = [
  {
    title: 'Delivery',
    text: 'lorem10 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, autem.Alias, autemAlias, autem',

  },
  {
    title: 'Products',
    text: 'lorem10 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, autem.',

  },
  {
    title: 'Payments',
    text: 'lorem10 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, autem.Alias, autemAlias, autemAlias, autemAlias, autemAlias, autem',

  },

];

const Benefits = () => {
  return (
    <>
      <div className="container mx-auto flex mb-20">
        {benefits.map(item => (
          <BenefitsItem key={item.title} item={item} />
        ))}
      </div>
    </>
  )

}
export default Benefits