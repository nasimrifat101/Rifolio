import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink to="https://www.linkedin.com/in/nasimrifat10/" target="_blank" className='text-[#A6ADBB] font-medium hover:text-green-300 duration-500'>Linkedin</NavLink>
      </li>
      <li>
        <NavLink to="https://github.com/nasimrifat101" target="_blank" className='text-[#A6ADBB] font-medium hover:text-green-300 duration-500'>GitHub</NavLink>
      </li>
      <li>
        <NavLink to="https://wa.link/u6xfx5" target="_blank" className='text-[#A6ADBB] font-medium hover:text-green-300 duration-500'>WhatsApp</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-screen-2xl mx-auto hidden lg:block cursor-crosshair">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-4xl text-[#A6ADBB] font-bold">RIFAT.</a>
        </div>
        <div className="navbar-end hidden lg:flex list-none space-x-20">
          {navlink}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
