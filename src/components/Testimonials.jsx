import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useViewAnimate } from '../hooks/useViewAnimate';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsList = [
  {
    id: 1,
    name: 'Tim Cook',
    role: 'CEO, Apple',
    avatar: '/images/avatars/user-02.jpg',
    quote: 'Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias delectus culpa.'
  },
  {
    id: 2,
    name: 'Sundar Pichai',
    role: 'CEO, Google',
    avatar: '/images/avatars/user-03.jpg',
    quote: 'Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime.'
  },
  {
    id: 3,
    name: 'Satya Nadella',
    role: 'CEO, Microsoft',
    avatar: '/images/avatars/user-01.jpg',
    quote: 'Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio. Voluptatem dignissimos ut.'
  },
  {
    id: 4,
    name: 'Jeff Bezos',
    role: 'CEO, Amazon',
    avatar: '/images/avatars/user-06.jpg',
    quote: 'Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.'
  }
];

export function Testimonials() {
  const testimonialsRef = useViewAnimate();

  return (
    <div className="row testimonials">
      <div className="column lg-12" data-animate-block ref={testimonialsRef}>
        <Swiper
          className="testimonial-slider"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          data-animate-el
          breakpoints={{
            401: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            801: {
              slidesPerView: 2,
              spaceBetween: 32
            },
            1201: {
              slidesPerView: 2,
              spaceBetween: 80
            }
          }}
        >
          {testimonialsList.map((item) => (
            <SwiperSlide key={item.id} className="testimonial-slider__slide">
              <div className="testimonial-slider__author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-slider__avatar"
                />
                <cite className="testimonial-slider__cite">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </cite>
              </div>
              <p>{item.quote}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
