import { CATEGORIES } from "../../constants/Categories"

const CategoriesBar = () => {
  return (
    <>
      <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
        {
          CATEGORIES.map(cat => (
            <div key={cat.name} className="my-4">
              <h4 className="font-krona mb-2 cursor-pointer hover:text-orange-300">{cat.name}</h4>
              <ul className="ml-4 space-y-2">
                {cat.subCategories.map(subCat => (
                  <li key={subCat} className="cursor-pointer hover:text-orange-300">{subCat}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default CategoriesBar
