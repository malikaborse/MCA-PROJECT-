
const ItemCard = ({ id, name, price, description, image }) => {

    return (
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-4">
            <div className="h-full border-2 border-gray-300 shadow-md border-opacity-60 rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                <div className='relative'>
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-300 transform hover:scale-105" src={image} alt={name} />
                </div>
                <div className="p-6">
                    <h2 className="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">{name}</h2>
                    <h1 className="title-font text-sm font-medium text-gray-900 mb-3 text-justify">{description}</h1>
                    <p className="mb-1 font-bold text-red-500">₹{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
