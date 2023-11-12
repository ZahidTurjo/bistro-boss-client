/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({img, title,coverTitle}) => {
    return (
        <Parallax
        blur={{ min: 50, max: -50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
            <div className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-gray-500 bg-opacity-50">
      <h1 className="mb-5 text-8xl uppercase font-bold italic">{coverTitle}</h1>
      <p className="mb-5">{title}</p>
      
    </div>
  </div>
</div>
    </Parallax>
   
    );
};

export default Cover;