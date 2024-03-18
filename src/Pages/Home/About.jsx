/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress, SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import hero from "../../assets/landing.webp";
import FramerMagnetic from "./Components/FramerMagnetic";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="opacity-0 text-white text-xs rounded-md py-2 absolute z-10 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2">
        {text}
        <div className="border-t-4 mx-auto mt-2"></div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-3 min-h-screen cursor-crosshair space-x-10">
      <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-50 ease-in-out duration-1000 ">
        <img src={hero} alt="landing" />
      </div>
      <div className="lg:col-span-2 space-y-10 flex flex-col justify-center">
        <h1 className="text-[#A6ADBB] text-2xl lg:text-5xl mt-10 font-bold">
          I'm a{" "}
          <span className="text-[#3CD7A1] hover:text-orange-400 ease-in-out duration-500">
            Frontend Developer
          </span>{" "}
          from{" "}
          <span className="text-[#3CD7A1] hover:text-orange-400 ease-in-out duration-500">
            Dhaka, Bangladesh
          </span>
          .
        </h1>
        <p className="text-[#A6ADBB] text-xl">
          I enjoy talking complex problems and turning them into simple and
          beautiful interface designs. I also love the logic and structure of
          coding and always strive to write elegant and efficient code whether
          it be HTML CSS or any other languages. When I'm not coding or pushing
          pixels, you can find me in the gym.
        </p>
        <p className="text-[#A6ADBB] text-xl lg:text-4xl font-bold pb-5 ">
          I'm{" "}
          <span className="text-[#3CD7A1] hover:text-orange-400 duration-500 ease-in-out">
            skilled
          </span>{" "}
          in
        </p>
        <div className="space-y-14 ">
          <div className="flex justify-between text-3xl lg:text-6xl text-[#3CD7A1]">

            <FramerMagnetic>
              <Tooltip text="HTML5">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <FaHtml5 />
                </span>
              </Tooltip>
            </FramerMagnetic>

            <FramerMagnetic>
              <Tooltip text="CSS3">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <FaCss3Alt />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="Tailwind CSS">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <SiTailwindcss />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="DaisyUI">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <SiDaisyui />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="JavaScript">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <IoLogoJavascript />
                </span>
              </Tooltip>
            </FramerMagnetic>




          </div>
          <div className="flex justify-between text-3xl lg:text-6xl text-[#3CD7A1] pt-">

            <FramerMagnetic>
              <Tooltip text="Vite">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <SiVite />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="React">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <FaReact />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="Node.js">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <FaNode />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="Express.js">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <SiExpress />
                </span>
              </Tooltip>
            </FramerMagnetic>
            <FramerMagnetic>
              <Tooltip text="MongoDB">
                <span className="hover:text-orange-400 duration-700 ease-in-out">
                  <SiMongodb />
                </span>
              </Tooltip>
            </FramerMagnetic>




          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
