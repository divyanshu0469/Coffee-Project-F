import image1 from '../assets/images/g8/g8-img-1.png'
import image2 from '../assets/images/g8/g8-img-2.png'
import image3 from '../assets/images/g8/g8-img-3.png'
import LightButton from './LightButton'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const G8 = () => {
  return (
    <div id='branch' className="grid items-center justify-center grid-cols-3 py-8 text-center bg-right bg-cover h-[155vh] bg-G8BG max-lg:grid-cols-1 max-sm:h-fit">
        <header className="col-span-3 font-medium font-grand text-8xl max-md:text-7xl max-sm:text-6xl">Our Branches</header>
        <div className='flex flex-col items-center justify-center gap-6 max-lg:hidden'>
            <img src={image1} className='shadow-xl rounded-xl'/>
            <a href="https://www.timeout.com/newyork/restaurants/best-coffee-shops-in-new-york"><LightButton value='New York'/></a>
            <span className='w-1/2'>Located in the heart of the city that never sleeps, our bustling New York location provides an energizing coffee experience, perfect for those on the go.</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 max-lg:hidden'>
            <img src={image2} className='shadow-xl rounded-xl'/>
            <a href="https://www.timeout.com/miami/restaurants/best-miami-coffee-shops-and-cafes"><LightButton value='Miami'/></a>
            <span className='w-1/2'>Embrace the lively energy of Miami at our beachside branch. Indulge in coffee with a tropical twist, complementing the city&apos;s vibrant atmosphere.</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 max-lg:hidden'>
            <img src={image3} className='shadow-xl rounded-xl'/>
            <a href="https://www.timeout.com/paris/en/restaurants/best-cafes-in-paris"><LightButton value='Paris'/></a>
            <span className='w-1/2'>Step into a romantic Parisian rendezvous. Our branch exudes timeless elegance, offering exquisite coffee in a charming setting, inviting you to savor every moment.</span>
        </div>
        
        <div className='hidden max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
          <Carousel>
            <Carousel.Item>
              <div className='hidden max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-6'>
                  <img src={image1} className='shadow-xl rounded-xl'/>
                  <a href="https://www.timeout.com/newyork/restaurants/best-coffee-shops-in-new-york"><LightButton value='New York'/></a>
                  <span className='w-2/3 pb-8'>Located in the heart of the city that never sleeps, our bustling New York location provides an energizing coffee experience, perfect for those on the go.</span>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='hidden max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-6'>
                  <img src={image2} className='shadow-xl rounded-xl'/>
                  <a href="https://www.timeout.com/miami/restaurants/best-miami-coffee-shops-and-cafes"><LightButton value='Miami'/></a>
                  <span className='w-2/3 pb-8'>Embrace the lively energy of Miami at our beachside branch. Indulge in coffee with a tropical twist, complementing the city&apos;s vibrant atmosphere.</span>
              </div>
              
            </Carousel.Item>
            <Carousel.Item>
              <div className='hidden max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-6'>
                  <img src={image3} className='shadow-xl rounded-xl'/>
                  <a href="https://www.timeout.com/paris/en/restaurants/best-cafes-in-paris"><LightButton value='Paris'/></a>
                  <span className='w-2/3 pb-8'>Step into a romantic Parisian rendezvous. Our branch exudes timeless elegance, offering exquisite coffee in a charming setting, inviting you to savor every moment.</span>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>


    </div>
  )
}

export default G8