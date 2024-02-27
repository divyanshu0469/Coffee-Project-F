import image from "../assets/images/g4/g4-img.png"
import LightButton from "./LightButton"

const G4 = () => {
  return (
    <div className="grid grid-cols-2 py-8 text-white bg-right bg-cover bg-G4BG min-h-[124vh] max-lg:flex max-lg:flex-col-reverse max-sm:h-fit">
        <div className='flex flex-col items-center justify-center flex-1'>
            <header className='my-14 font-grand text-9xl max-md:text-7xl max-md:my-8 max-sm:text-6xl'>White<br/>Coffees</header>
            <a href="/app"><LightButton value='Order Now'/></a>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={image} className='w-1/2 my-14 max-md:my-8'/>
              <span className='w-2/3 text-right max-lg:text-center max-md:my-8'>
              White coffees offer a creamy, mild alternative with a velvety texture. Our online selection includes various blends for a smooth, indulgent experience. Order now to enjoy a perfectly balanced cup, crafted to your taste, from the convenience of your home.
              </span>
        </div>
    </div>
  )
}

export default G4