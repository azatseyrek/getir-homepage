import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactFlagsSelect from 'react-flags-select';
import {useState} from 'react';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
};

const HeroSection = () => {
  const [selected, setSelected] = useState('US');
  return (
    <div className=" relative  before:bg-gradient-to-r before:from-brand before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="getir_img"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="getir_img_2"
          />
        </div>
      </Slider>
      <div
        className="container
       flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20"
      >
        <div>
          <img
            src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg"
            alt="getir_bi_mutluluk"
          />
          <h3 className="text-3xl mt-8 font-semibold text-white">
            At your door in <br /> minutes
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-100 p-6">
          <h4 className="text-brand font-bold text-center mb-4">
            Login or register
          </h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={['US', 'GB', 'FR', 'DE', 'TR']}
              customLabels={{
                US: '+1',
                GB: '+44',
                FR: '+44',
                DE: '+49',
                TR: '+90',
              }}
              placeholder="Select Language"
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative">
              <input
                required
                type="text"
                className=" h-12 w-full px-4 border-2 border-gray-200 rounded shadow-sm transition-colors peer hover:border-brand focus:border-brand outline-none text-sm pt-2"
              />

              <span className="absolute  top-0 left-0 flex items-center px-4 h-12  mt-auto w-full text-sm text-gray-500 peer-focus:text-brand  peer-focus:text-xs peer-focus:h-5 transition-all peer-valid:text-brand  peer-valid:text-xs peer-valid:h-5 ">
                Mobile Phone
              </span>
            </label>
          </div>
          <button className="bg-yellow-400 text-sm rounded-md h-10 w-full mt-4 text-brand font-semibold shadow-md transition-colors hover:text-yellow-500 hover:bg-brand ">
            Continue with phone number
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
