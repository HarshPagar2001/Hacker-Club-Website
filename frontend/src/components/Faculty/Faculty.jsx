import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Faculty.css';

import faculty1 from '../../images/profile.jpg';
import faculty2 from '../../images/profile.jpg';
import faculty3 from '../../images/profile.jpg';
import faculty4 from '../../images/profile.jpg';

const Faculty = () => {
  const facultyData = [
    { image: faculty1, name: "Dr. John Doe", position: "Professor of Cybersecurity" },
    { image: faculty2, name: "Ms. Jane Smith", position: "Ethical Hacking Trainer" },
    { image: faculty3, name: "Mr. David Lee", position: "Network Security Expert" },
    { image: faculty4, name: "Mrs. Sarah Connor", position: "Penetration Testing Specialist" },
  ];

  return (
    <div className="faculty-section">
      <h1 className="faculty-heading">Our <span className='hacker'>Faculty</span></h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {facultyData.map((faculty, index) => (
          <SwiperSlide key={index}>
            <div className="faculty-card">
              <div className="faculty-top"></div>
              <div className="faculty-profile-img">
                <img src={faculty.image} alt={faculty.name} />
              </div>
              <div className="faculty-content">
                <h3>{faculty.name}</h3>
                <p>{faculty.position}</p>
                <div className="faculty-icons">
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
                <button className="message-btn">Message</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Faculty;




