import { BsBag } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: "123",
    imageurl:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    title: "sneakers",
    gender: "male",
    price: "500",
    material: "leather",
    tipShaped: "rounded",
  },
  {
    id: "1234",
    imageurl:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    title: "sneakers",
    gender: "female",
    price: "500",
  },
  {
    id: "1235",
    imageurl:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    title: "sneakers",
    gender: "female",
    price: "500",
  },
];

const Newarrivals = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-3/4 mx-auto mt-16 ">
        <div>
          <h1 className="font-semibold text-2xl underline">New Arrivals</h1>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-6  ">
            {items.slice(0, 6).map((item, index) => (
              <div key={index} className="group ">
                <img
                  src={item.imageurl}
                  alt="loading"
                  className="h-[400px] w-[400px] rounded-lg"
                  onClick={() =>
                    navigate(`/product/${item.id}`, {
                      state: { product: item },
                    })
                  }
                />
                <h1 className="flex items-center justify-center text-2xl ">
                  {item.title}
                </h1>
                <h2 className="flex items-center justify-center text-2xl">
                  {item.gender}
                </h2>
                <div className=" text-center mt-2 relative">
                  <h2 className="flex items-center justify-center text-xl text-green-600 font-semibold">{` Npr ${item.price}`}</h2>
                  {/* hover */}
                  {(item.material || item.tipShaped) && (
                    <div className=" top-full absolute left-24 mt-1 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-black ">
                      {item.material && (
                        <p className="flex items-center justify-center">
                          Material: {item.material}
                        </p>
                      )}
                      {item.tipShaped && (
                        <p className="items-center justify-center">
                          Tip Shape: {item.tipShaped}
                        </p>
                      )}

                      <div className="flex gap-2 mt-2">
                        <CiHeart className="h-8 w-12 " />
                        <BsBag className="h-10 w-full bg-green-800 p-1 text-white flex-grow" />
                        <CiSearch className="h-8 w-12" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrivals;
