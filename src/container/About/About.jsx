import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { FaFacebookF,FaBirthdayCake,FaLocationArrow,FaUserGraduate, FaCanadianMapleLeaf, FaUsps, FaPhoneVolume } from 'react-icons/fa';
import { MdEmail, MdDoneAll } from "react-icons/md";
FaBirthdayCake

const About = () => {
//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//        images.fetch().then((data) => {
//       setAbouts(data);
//     });
//   }, []);

 const abouts=[
    { title:"Front end developer", description:" I am a good web developer", imgUrl:images.responsive},
    { title:"web development", description:" I am a good web developer", imgUrl:images.about02},
    { title:"web development", description:" I am a good web developer", imgUrl:images.about03},
    { title:"web development", description:" I am a good web developer", imgUrl:images.about04}
 ]

  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2>

      <div className="app__profiles">
      
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profiles"
            
          >
<div className='about_main'>
  <div className='my__image__wraper'>
<div className='my__image__wraper_inner'><img className='my__image' src={images.abhinav} /></div>
  </div>
  <div className='about__me__text'>
    <div>Hi! My name is <span className='my__name'>Abhinav Kumar</span> . I am a Web Developer, and I'm very passionate and dedicated to my work. With 4+ years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</div>
    <div className='my_details'>
      <div className="my_details_1">
        <ul>
      <li>
        <div className='my_detail_row'>
        <div className='my_detail_icon'><FaBirthdayCake  style={{color:"red"}}/></div> 
        <div className='my_detail_title'> Birthday:</div>
        <div className='my_detail_value'>05.02.1983</div>
        </div>
      </li>
      <li>
      <div className='my_detail_row'>
      <div className='my_detail_icon'><FaLocationArrow style={{color:"red"}} /></div> 
        <div className='my_detail_title'> Location:</div>
        <div className='my_detail_value'>bhagalpur, Bihar</div>
        </div>
      </li>
      <li>
      <div className='my_detail_row'>
      <div className='my_detail_icon'><FaUserGraduate style={{color:"red"}}/></div> 
        <div className='my_detail_title'> Study:</div>
        <div className='my_detail_value'>VTU Karnatka</div>
        </div>
      </li>
      <li>
      <div className='my_detail_row'>
        <div className='my_detail_icon'><MdEmail style={{color:"red"}} /></div> 
        <div className='my_detail_title'> Mail:</div>
        <div className='my_detail_value'>abhinavbgp@gmail.com</div>
        </div>
      </li>
        </ul>      
      </div>

      <div className="my_details_1">
        <ul>
      <li>
        <div className='my_detail_row'>
        <div className='my_detail_icon'><MdDoneAll style={{color:"red"}}/></div> 
        <div className='my_detail_title'> Exprience:</div>
        <div className='my_detail_value'>4+ years</div>
        </div>
      </li>
      <li>
      <div className='my_detail_row'>
      <div className='my_detail_icon'><FaCanadianMapleLeaf style={{color:"red"}} /></div> 
        <div className='my_detail_title'> Interest:</div>
        <div className='my_detail_value'>Singing</div>
        </div>
      </li>
      <li>
      <div className='my_detail_row'>
      <div className='my_detail_icon'><FaUsps style={{color:"red"}}/></div> 
        <div className='my_detail_title'> Degree:</div>
        <div className='my_detail_value'>B.E.</div>
        </div>
      </li>
      <li>
      <div className='my_detail_row'>
        <div className='my_detail_icon'><FaPhoneVolume style={{color:"red"}}/></div> 
        <div className='my_detail_title'> Phone:</div>
        <div className='my_detail_value'>+91-9570452922</div>
        </div>
      </li>
        </ul>      
      </div>
      

    </div>
    <div>
      <button type="button" className="about__button" onClick={()=>{}}>
      <a href={images.resume} target="_blank" download className='download_link'> Download CV </a>
          
            </button>
      </div>
  </div>
</div>

         
         
         
          </motion.div>
       </div>
     
    </>
  );
};

// export default About

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
