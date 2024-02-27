import DarkButton from './DarkButton'
import image from '../assets/images/g2/g2-img.png'

const G2 = () => {
  return (
    <div id='menu2' className="grid grid-cols-2 py-8 text-white bg-right bg-cover max-lg:h-fit h-[124vh] bg-G2BG max-lg:flex max-lg:flex-col-reverse max-sm:h-fit">
        <div className='flex flex-col items-center justify-center flex-1'>
            <header className='my-14 font-grand text-9xl max-md:text-7xl max-md:my-8 max-sm:text-6xl'>Black<br/>Coffee</header>
            <a href="/app"><DarkButton value="Order Now"/></a>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={image} className='w-1/2 my-14 max-md:my-8'/>
              <span className='w-2/3 text-right max-lg:text-center max-md:my-8'>
              Black coffee, a classic favorite, offers a pure, unadulterated coffee experience. Made with freshly ground beans, it&apos;s rich, bold, and aromatic. Order your favorite blend online for a delightful morning ritual.
              </span>
        </div>
    </div>
  )
}

export default G2