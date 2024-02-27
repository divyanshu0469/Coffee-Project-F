import logo from '../assets/images/g1/logo.png';
import collapse from '../assets/icons/menu.png';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <nav className="flex justify-between flex-1 bg-darkBlue p-6">
        <div className="flex justify-between w-1/2 gap-6 pt-2 text-3xl font-semibold max-lg:hidden [&>*]:text-white"> 
          <a href="/home" className="hover:opacity-75 decoration-lightBlue decoration-4 underline underline-offset-4">Home</a>
          <a href="/about" className="no-underline hover:opacity-75">About</a>
          <a href="/menu" className="no-underline hover:opacity-75">Menu</a>
          <a href="/branch" className="no-underline hover:opacity-75">Branches</a>
          <a href="/contact" className="no-underline hover:opacity-75">Contact</a>
          <a href="/" className="underline underline-offset-4 hover:opacity-75 decoration-4">Login</a>
        </div>
        <a href="/app"><img className="cursor-pointer w-fit hover:opacity-75" src={logo}/></a>

        <div className="hidden max-lg:block">
          <button onClick={toggleMenu}>
            <img className="w-12 max-sm:w-10 hover:opacity-50" src={collapse}/>
          </button>
          {isMenuOpen && (
            <div id="menu" className="bg-lightBlue fixed ml-[-3rem] rounded-xl flex flex-col font-semibold items-center w-fit gap-2 p-2 text-3xl max-sm:ml-[-1rem] max-sm:text-sm max-sm:font-bold"> 
              <a href="/home" className="text-white no-underline hover:text-darkBlue">Home</a>
              <a href="#about" className="text-white no-underline hover:text-darkBlue">About</a>
              <a href="/menu" className="text-white no-underline hover:text-darkBlue">Menu</a>
              <a href="/branch" className="text-white no-underline hover:text-darkBlue">Branches</a>
              <a href="/contact" className="text-white no-underline hover:text-darkBlue">Contact</a>
              <a href="/" className="text-white no-underline hover:text-darkBlue">Login</a>
            </div>
          )}
        </div>

      </nav>
  )
}

export default NavBar