import Cards from "./Cards";
import List from "../../public/List.json"
import { Link } from "react-router-dom";
function Course() {

  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div className="item-center justify-center text-center ">
      {/* unrelevant data h1 */}
    <h1 className="text-2xl md:text-4xl mt-18">
   v
      </h1>
      <h1 className="text-2xl md:text-4xl mt-20">
        We`re delighted to have you{" "}
         <span className="text-pink-500">Here? :)</span> 
      </h1>
      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic consequuntur error tempore animi eius accusantium labore dolorem architecto rem.
      </p>
      <Link to="/">
      <button className="bg-pink-500 text-white px-3 py-2 rounded-lg hover:bg-pink-700 duration-300 mt-6">Back</button>
      </Link>
    </div>
   
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

{
  List.map((item) => (
    <Cards key={item.id} item={item} />
  ))
}
</div>
</div>
   </>
  )
}

export default Course;
