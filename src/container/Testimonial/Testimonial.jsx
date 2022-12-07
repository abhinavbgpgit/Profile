import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const [testimonials, setTestimonials] = useState([]);
//   const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const testimonials=[
    { name:"Achla Singh", feedback:" With Abhinav’s help, we were able to increase the functionality of our website dramatically while cutting our costs.  We could not be more happy with our new website! Thanks Abhinav!",company:" Senior Software Consultant ", imgUrl:images.sony},


    { name:"Sumit Kumar", feedback:" I would highly recommend Abhinav's Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.",company:" C.E.O -ExaThought", imgUrl:images.sumit},


    { name:"Pallav Kumar", feedback:" We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Abhinav to anyone looking to build a new website.",company:" Owner- Nee Services", imgUrl:images.pallav},
    
 ]
 const brands=[
    { name:"Achla Singh",  imgUrl:images.skype},
    { name:"Abhnav Kumar",  imgUrl:images.spotify},
    { name:"Pallav Kumar",  imgUrl:images.asus},
    { name:"Pallav Kumar",  imgUrl:images.amazon},
    { name:"Pallav Kumar",  imgUrl:images.adidas},
    
 ]



  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.name}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
