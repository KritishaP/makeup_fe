
const Dropdown = ({ type, values, onChange }) => {
  return (
    <div className="flex flex-col p-2">
      <label htmlFor={type} className="font-semiboldbold mb-2 font-krona text-sm">{type} </label>
      <select
        name={type}
        id={type}
        className="focus:ring-2 focus:ring-orange-300 outline-none border-b-2 border-orange-300"
        onChange={onChange}>
        {values.map((value, ind) => (
          <option key={`${ind}-${value}`}>{value}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
