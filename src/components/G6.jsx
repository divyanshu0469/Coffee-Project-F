import image1 from '../assets/images/g6/g6-img-1.png'
import image2 from '../assets/images/g6/g6-img-2.png'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const G6 = () => {

  return (
    <div id='blog' className='grid items-center justify-center grid-cols-2 py-8 text-center bg-right bg-cover h-[124vh] bg-G6BG font-grand max-lg:grid-cols-1 max-sm:h-fit'>
        <span className='col-span-2 text-8xl max-md:text-7xl max-sm:text-6xl max-lg:col-span-1'>Customer Reviews</span>
        <div className='flex flex-col items-center justify-center flex-1 gap-6 max-lg:hidden'>
            <img src={image1} className='w-1/2'/>
            <div className='text-5xl'>John Ptere</div>
            <span className='w-1/2 text-2xl font-mont'>Bold and robust flavors, exactly what I crave! This coffee surpassed my expectations. Every sip is a delight. Highly recommended!</span>
        </div>
        <div className='flex flex-col items-center justify-center flex-1 gap-6 max-lg:hidden'>
            <img src={image2} className='w-1/2'/>
            <div className='text-5xl'>Ella Thomson</div>
            <span className='w-1/2 text-2xl font-mont'>Smooth and indulgent, it's the perfect morning treat. The aroma is heavenly! This coffee elevates my day. A must-have!</span>
        </div>
        <div className='hidden max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
          <Carousel>
            <Carousel.Item>
                <div className='flex flex-col items-center justify-center flex-1 gap-6 '>
                  <img src={image1} className='w-1/2'/>
                  <div className='text-5xl'>John Ptere</div>
                  <span className='w-2/3 pb-8 text-2xl font-mont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid earum ducimus harum pariatur quam perspiciatis. Optio error eius rem.</span>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='flex flex-col items-center justify-center flex-1 gap-6 '>
                  <img src={image2} className='w-1/2'/>
                  <div className='text-5xl'>Ella Thomson</div>
                  <span className='w-2/3 pb-8 text-2xl font-mont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid earum ducimus harum pariatur quam perspiciatis. Optio error eius rem.</span>
                </div>
            </Carousel.Item>
          </Carousel>
        </div>
        

    </div>
  )
}

export default G6