/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./info.css";

import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";

const Info = () => {
  const { x, y } = useMousePosition();
  const [hovered, isHovered] = useState(false);

  const size = hovered ? 400 : 50;

  return (
    <main className="mainn">
      <motion.div
        className="maskk"
        animate={{
          webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => {isHovered(true)}}
          onMouseLeave={() => {isHovered(false)}}
          className="pp"
        >
       
        ooh I forgot to tell you about my academics. I'm a collage graduate in arts.From 2024 I'll be pursuing diploma in cse.
        </p>
      </motion.div>
      <div className="bodyy">
        <p className="pp text-[#A6ADBB]">
        Thank you! If you have any <span className="spann"> inquiries, project proposals,</span> or just want to say hello, feel free to get in touch.
        </p>
      </div>
    </main>
  );
};

export default Info;
