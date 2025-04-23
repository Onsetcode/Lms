import banner from "../../public/banner.png";
function Banner() {
  return (
  <>
 <div className="max-w-screen-2xl container mx-auto  md:px-20  flex flex-col lg:flex-row my-10px">
  {/* right part */}
  <div className=" order-2 md:order-1 w-full   md:w-1/2 mt-12 md:mt-32">
  <div className="space-y-12">
    <h1 className="text-4xl font-bold">Hello,welcome here to learn something <span className="text-pink-600">new everyday!!!</span></h1>
    <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, similique deserunt. Debitis quos dignissimos architecto. Similique, possimus alias. Quis ipsa, error rem fugit vitae dicta!</p>
  
  {/* search input text */}
  <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow" placeholder="Search" />
</label>
</div>

<button className="btn btn-secondary mt-6">Get Started</button>
  </div>
  {/* left part od Banner */}
  <div className="card w-full md:w-1/2 order-1 relative z-0">
          <img className="w-full h-auto" src={banner} alt="Banner" />
        </div>
  {/* close of main box */}
</div>
  </>
  )
}

export default Banner
