import PropTypes from 'prop-types'; // For prop validation

function Cards({ item }) {
  console.log(item);
  
  return (
    <>
      <div className='mt-4 my-6 p-3'>
        <div className="card w-92 bg-base-100  shadow-xl hover:scale-105 duration-200 
        dark:bg-slate-900 dark:text-white dark:border">
          <figure className='w-50px'>
            <img
              src={item.image}
              alt={item.name} // Dynamic alt text for better accessibility
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer rounded-lg border-[2px] px-2 py-1 hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Prop validation
Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
