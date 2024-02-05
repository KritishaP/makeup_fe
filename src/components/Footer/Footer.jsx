
const Footer = () => {
  return (<>

    {/* <footer className="bg-dark text-light  p-4 h-32">
      <div className="flex justify-around">
        <a href="/" className='text-2xl text-yellow font-krona'>Glamify</a>
        <div className="flex items-center" >
          <a href="/about" className="ml-10">About</a>
          <a href="/" className="ml-10">Skincare</a>
          <a href="/" className="ml-10">Makeup</a>
          <a href="/" className="ml-10">Supplements</a>
          <a href="/contact" className="ml-10">Contact</a>
        </div>

      </div>



    </footer>*/}
    <footer className="bg-dark text-light ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <ul>
          <h2 className="text-orange-300 hover:text-gray-100">Quick Links</h2>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">Home</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">About</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">Products</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">Products</a></li>
        </ul>
        <ul>
          <h2 className="text-orange-300 hover:text-gray-100">Customer Care</h2>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">Help Center</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">How to buy?</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">Privacy Policy</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="/">Refunds and Returns</a></li>
        </ul>
        <ul >
          <h2 className="text-orange-300 hover:text-gray-100">Contact Info</h2>
          <li className="text-gray-400 text-xs hover:underline py-2"> <a href="#">+977 987654321</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"><a href="#">example@gmail.com</a></li>
          <li className="text-gray-400 text-xs hover:underline py-2"> <a href="#">Kathmandu,Nepal</a></li>
        </ul>
        <ul  >
          <h2 className="text-orange-300 hover:text-gray-100  ">Find us </h2>
          <li > <a href="#">
            <i class="fa-brands fa-facebook py-2 hover:text-orange-200"></i>
          </a></li>
          <li><a href="#"><i class="fa-brands fa-square-instagram py-2 hover:text-orange-200"></i></a></li>
          <li> <a href="#"><i class="fa-brands fa-square-x-twitter py-2 hover:text-orange-200"></i></a></li>
        </ul>


      </div>
    </footer>

  </>)
}
export default Footer