import logo from '../assets/images/g9/logo.png'
import icon1 from '../assets/icons/fb.png'
import icon2 from '../assets/icons/insta.png'
import icon3 from '../assets/icons/twitter.png'
import icon4 from '../assets/icons/yt.png'

const Footer = () => {
  return (
    <div id='contact' className="grid items-end grid-rows-2 px-20 py-20 bg-right bg-cover h-[80vh] bg-G9BG max-lg:grid-rows-1 max-lg:gap-8 max-sm:px-0 max-lg:items-start max-sm:h-fit">
        <div className='flex flex-row  justify-between max-sm:justify-center max-sm:items-center'>
            <a href="/app"><img className='cursor-pointer h-fit hover:opacity-75 max-sm:hidden' src={logo}/></a>
            <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:grid-rows-2 max-md:text-center'>
                <div className='flex flex-col gap-8 max-lg:items-center'>
                    <span className='text-3xl font-semibold w-fit max-sm:text-xl'>Information.</span>
                    <span className='text-xl font-normal max-sm:text-light'>
                        Premium beans.<br/>Order online.<br/>Your perfect<br/>brew at home.
                    </span>
                </div>
                <div className='flex flex-col gap-8'>
                    <span className='text-3xl font-semibold max-sm:text-xl'>Contact Us.</span>
                    <span className='text-xl font-normal max-sm:text-light'>
                        Want Support ?<br/>
                        Reach us out<br/>
                        <span className='underline underline-offset-4'>coffeetime@gmail.com</span>
                    </span>
                    
                </div>
            </div>
        </div>
        <nav className="flex justify-between flex-1 ">
            <div className="flex justify-between w-1/2 pt-2 text-xl font-semibold font-mont max-lg:hidden">
                <a href="/home" className="text-white no-underline hover:opacity-75">Home</a>
                <a href="/about" className="text-white no-underline hover:opacity-75">About</a>
                <a href="/menu" className="text-white no-underline hover:opacity-75">Menu</a>
                <a href="/branch" className="text-white no-underline hover:opacity-75">Branches</a>
                <a href="/contact" className="text-white no-underline hover:opacity-75">Contact</a>
            </div>
            <ul className='flex justify-between w-1/5 pt-2 max-sm:justify-evenly max-sm:w-full'>
                <li><a href="/app"><img className='hover:opacity-75' src={icon1} /></a></li>
                <li><a href="/app"><img className='hover:opacity-75' src={icon2} /></a></li>
                <li><a href="/app"><img className='hover:opacity-75' src={icon3} /></a></li>
                <li><a href="/app"><img className='hover:opacity-75' src={icon4} /></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Footer