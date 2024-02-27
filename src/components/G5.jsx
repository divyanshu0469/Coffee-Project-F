import image from '../assets/images/g5/g5-img.png'
import LightButton from './LightButton'

const G5 = () => {
  return (
    <div id='shop' className='flex flex-col items-center flex-1 mb-0 bg-right bg-cover h-[124vh] bg-G5BG font-grand gap-8 max-sm:h-fit'>
        <div className='text-9xl max-md:text-7xl max-sm:text-6xl'>Voucher</div>
        <img className='rounded-xl shadow-xl cursor-pointer w-10/12 hover:opacity-75 hover:scale-[.99]' src={image} />
        <a href="/app"><LightButton value="Get Voucher Now"/></a>
    </div>
  )
}

export default G5