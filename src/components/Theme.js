import ThemeCard from "./ThemeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const ThemeSwiper = styled(Swiper)`
  height: 150px;
`;

const Theme = ({ tags, onTagsChange }) => {
  const themeTags = tags.filter(tag => tag.sys.id.includes("theme"));
  return (
    <section>
      <ThemeSwiper spaceBetween={10} slidesPerView={1.5} loop={true}>
        {themeTags.map(tag => {
          return (
            <SwiperSlide key={tag.sys.id}>
              <ThemeCard tag={tag} onTagsChange={onTagsChange} />
            </SwiperSlide>
          );
        })}
      </ThemeSwiper>
    </section>
  );
};

export default Theme;
