import { useState } from "react";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Works = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Add this line for debugging
        setdata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleNavigate = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen pb-5 lg:pb-0 cursor-crosshair flex flex-col justify-center">
      <h1 className="text-[#A6ADBB] px-4 text-2xl lg:px-0 lg:text-6xl font-bold pt-8">
        Some of my{" "}
        <span className="text-[#3CD7A1] hover:text-orange-400 duration-500">
          works
        </span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-4 lg:p-0">
        {data.map((item) => (
          <div
            key={item.id}
            className="card card-compact hover:shadow-2xl hover:shadow-orange-400 duration-500"
          >
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#A6ADBB]">{item.name}</h2>
              <p className="text-[#A6ADBB]">{item.description}</p>

              <p
                onClick={() => handleNavigate(item.link)}
                className="text-[#3CD7A1] flex items-center cursor-pointer"
              >
                Check Out{" "}
                <span className="pl-2 ">
                  <FaLocationArrow />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <h1
        onClick={() =>
          window.open("https://github.com/nasimrifat101", "_blank")
        }
        className="hover:text-[#3CD7A1] text-orange-400 duration-500 text-right flex lg:justify-end justify-center items-center font-bold pt-5 cursor-pointer"
      >
        GitHub This Way{" "}
        <span className="text-xl">
          <MdOutlineDoubleArrow />
        </span>
      </h1>
    </div>
  );
};

export default Works;
