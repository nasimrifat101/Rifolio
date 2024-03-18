import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#171717]">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
