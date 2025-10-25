import React from 'react';

const Daiysi = ({slice}) => {
    
const img1 =slice[0].pictureURL;
const img2 =slice[1].pictureURL;
const img3 =slice[2].pictureURL;
const img4 =slice[3].pictureURL;
const img5 =slice[4].pictureURL;
const img6 =slice[5].pictureURL;
const img7 =slice[6].pictureURL;
const img8 =slice[7].pictureURL;
const img9 =slice[8].pictureURL;
const img10 =slice[9].pictureURL;
    return (
        <div className='   rounded-3xl'>
            <div className="carousel md:w-[662px] gap-3  2xl:w-[1200px] rounded-box ">
  <div className="carousel-item">
    <img
      src={img1} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img2} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img3} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90 '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img4} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img5} className= 'rounded   2xl:w-90 w-50 h-50 2xl:h-90 '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img6} className='rounded  2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img7} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img8} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img9} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={img10} className='rounded    2xl:w-90 w-50 h-50 2xl:h-90  '
      alt="Burger" />
  </div>
  
</div>
        </div>
    );
};

export default Daiysi;