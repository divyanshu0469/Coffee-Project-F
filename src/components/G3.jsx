import LightButton from "./LightButton"
import image from "../assets/images/g3/g3-img.png"

const G3 = () => {
  return (
    <div className="grid grid-cols-2 py-8 text-white bg-right bg-cover h-[12  4vh] bg-G3BG max-lg:flex max-lg:flex-col max-sm:h-fit">
        <div className='flex flex-col items-center justify-center'>
            <img src={image} className='w-1/2 my-14 max-md:my-8'/>
              <span className='w-2/3 my-14 max-lg:text-center max-md:my-8'>
              Hot coffees, an irresistible choice, provide comforting warmth and deep flavor. Choose from an array of blends, order online, and savor the perfect cup of steaming, aromatic delight from the comfort of your home. Elevate your morning ritual with our carefully crafted, freshly brewed hot coffees.
              </span>
        </div>
        <div className='flex flex-col items-center justify-center flex-1'>
            <header className='my-14 font-grand text-9xl max-md:text-7xl max-md:my-8 max-sm:text-6xl'>Hot<br/>Coffees</header>
            <a href="/app"><LightButton value='Order Now'/></a>
        </div>
    </div>
  )
}

export default G3