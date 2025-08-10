import { BsBag } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div className="bg-black  ">
        <div className="w-3/4 mx-auto flex">
          <img
            src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2024/09/03175513/cropped-logo-_calibershoes_header-1-1.png"
            alt="logoloading"
            height={100}
            width={100}
          />
          <div className="flex h-12 my-6 mx-6">
            <input
              type="text"
              placeholder="Search Products"
              className="w-[600px] flex-grow"
            />

            <select name="" id="" className="border border-gray-500 w-[200px] ">
              <option value="">
                <a href="" className="items-center justify-center flex m-2">
                  hello
                </a>{" "}
              </option>
              <option value="">
                {" "}
                <a href="">d</a>
              </option>
              <option value="">
                <a href="">fd</a>
              </option>
              <option value=""></option>
            </select>
            <CiSearch className="text-white bg-green-500 h-12 w-12" />
          </div>

          <div className="items-center justify-center my-8 flex">
            <a href="#" className="text-white text-xl ml-6">
              LOGIN/REGISTER
            </a>
            <a href="#" className=" relative">
              <CiHeart className="text-white h-8 w-8 " />
              <span className="text-white bg-green-600  absolute top-0 right-0 rounded-full ">
                <h1 className="w-4 items-center justify-center flex">1</h1>
              </span>
            </a>
            <a href="#" className="relative ml-6">
              <BsBag className="h-8 w-8 text-white" />
              <span className="text-white bg-green-600  absolute top-0 right-0 rounded-full ">
                <h1 className="w-4 items-center justify-center flex">1</h1>
              </span>
            </a>
            <h1 className="flex items-center justify-center text-white mx-6 font-semibold">
              NPR <span className="mx-1">0.0</span>
            </h1>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-3/4 mx-auto   font-semibold space-x-8 my-6 uppercase ">
        <a href="#" className="text-gray-500">
          Made in Nepal
        </a>
        <a href="">Home</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Junior</a>
      </div>
    </>
  );
}

export default Navbar;
