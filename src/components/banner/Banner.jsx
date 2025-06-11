import React from "react";
import banner from "../../assets/banner.jpg"; // Assuming you have a CSS module for styling

const Banner = () => {
  return (
    <div className="h-[600px] w-full rounded-3xl relative overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={banner}
        alt="Banner Image"
      />
      {/* <div className='absolute inset-0 bg-black opacity-30 flex flex-col gap-6 justify-center items-center text-center'>
                <h1 className='text-6xl w-3/4 font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
                
                <p className='text-lg text-white w-3/4'>Join our cooking class to enhance your culinary skills and impress your loved ones with delicious homemade meals. Unleash your inner chef today and create unforgettable memories in the kitchen!</p>
                <div></div>
            </div> */}
      <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center text-center text-white">
        <div className="absolute inset-0 bg-black/35"></div>
        <h1 className="relative text-6xl w-3/4 font-bold">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="relative text-lg w-3/4">
          Join our cooking class to enhance your culinary skills and impress
          your loved ones with delicious homemade meals. Unleash your inner chef
          today and create unforgettable memories in the kitchen!
        </p>
        <div className="relative flex gap-6 mt-4">
            <button className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded-full">Explore Now</button>
            <button className="border-2 border-white font-semibold px-4 py-2 rounded-full">Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
