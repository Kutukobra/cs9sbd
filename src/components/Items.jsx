function Items({data}) {
    return (
        <div className="
            grid
            absolute
            md:grid-cols-3 sm:grid-cols-2 grid-cols-1
            gap-2.5
            p-2
            left-1/4
            w-3/4
        ">
            {Array.isArray(data) && data.map((item) => (
                <Item 
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image_url}
                />
            ))}
        </div>
    )
}

function Item({name, price, image}) {
    return (
        <a href="#" className="group overflow-hidden">
            <img
                src={image || "https://media.licdn.com/dms/image/v2/D5603AQFmx_U3iZ_nmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720714725677?e=1751500800&v=beta&t=ZMUrgzYDxE8A26w_IHiJ_WHm4_j5nuVoiD775ZU8i6M"}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">

                <h3 className="mt-4 text-lg font-medium text-gray-900">{}</h3>

                <p className="mt-1.5 text-sm text-gray-700">{price}</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 hover:cursor-pointer"
                >
                    Add to Cart
                </button>
                </form>
            </div>
        </a>

    )
}

export default Items;