// images
import BG from '../assets/images/Root/new_BG3.jpg'
import balloon from '../assets/images/Root/balloon_transparent.png'
import flower_design from "../assets/images/Root/flower_transparent.png"
import fruit_design from "../assets/images/Root/fruit_transparent.png"
import contatct_us from "../assets/images/Root/contactUs_transparent.png"
import teachingLogo from "../assets/images/Root/teach_transparent.png"

// components
import { Link } from 'react-router-dom'
import PagesTransition from './helper/PageTransition'
//helpers
import {motion , useScroll, useSpring } from "framer-motion" 
import { useRef } from 'react'


const Home = () => {
        
        // for parallax animated 
        const ref=useRef(null)
        const {scrollYProgress}=useScroll({target:ref})
        const y = useSpring(scrollYProgress, {
                stiffness: 100,  
                damping: 30,   
                restDelta: 0.001, 
        });
        
        //________________ for parallax animated ________
    return (
        <PagesTransition >
        <>

{/* background */}
            <img className='fixed h-full z-[1] w-screen right-0 bottom-0 md:w-[50%]' src={BG} alt="BG" />
{/*_____background____ */}

            <main className='relative '>
    
        {/*Title part*/}
                <section className='fixed z-10 w-full h-[20svh] top-0 '
>
                    <p className='fixed md:text-5xl lg:text-2xl text-3xl text-center bg-[#ffffff3c] backdrop-blur-[1px] text-slate-900  w-full font-semibold font-[nastaliq] py-6 leading-[4rem]' style={{ textShadow: '0px 0px 5px #fff' }}>به دنیای رنگی دیزاین لند خوش اومدی <br/>برای دیدن قسمتهای مختلف هنر ما  اسکرول کن</p>
                </section>
        {/*____Title part_____*/}
{/* selecting Part */}
        <section className='relative w-svw h-[80svh] top-[20svh] overflow-y-scroll overflow-x-hidden'>
        {/* Balloon part */}
        <motion.div ref={ref} className='absolute z-30 w-full h-[80svh] top-0 wobble ' style={{ y: y.interpolate({ map: [0, 1], output: [0, -100] }) }}>
                <Link to="balloon" className='absolute z-30 w-full h-[80svh] top-0 wobble '>
                        <img className="absolute  w-full  h-full left-0 images_shadow top-0" src={balloon} alt="balloon" />
                        <p  className='absolute top-3/4 text-yellow-100 rounded-3xl bg-[#ffffff33] backdrop-blur-[1px] md:text-5xl lg:text-2xl lg:w-4/6 text-2xl font-medium text-center py-5 w-2/4 left-1/4' style={{ textShadow: '0px 0px 5px #000 , 0 0 10px #000,0 0 7px #000,0 0 13px #000' }}>دیزاین با بادکنک<br/>و بادکنک آرایی</p>
                </Link>
        </motion.div>
        {/*____Balloon part_____*/}

        {/*Flowerpart*/}
                <Link to="flower" className='absolute z-30 w-svw h-[80svh] top-[80svh] right-0 wobble'>
                        <img className="absolute w-full h-full left-0 images_shadow top-0" src={flower_design} alt="flower_design" />
                        <p  className='absolute top-3/4 text-yellow-100 rounded-3xl bg-[#ffffff33] backdrop-blur-[1px] md:text-5xl lg:text-2xl lg:w-4/6 text-2xl font-medium text-center py-5 w-2/4 left-1/4' style={{ textShadow: '0px 0px 5px #000 , 0 0 10px #000,0 0 7px #000,0 0 13px #000' }}>دیزاین با گل <br/>و گل آرایی</p>
                </Link>
        {/*____Flower part_____*/}

        {/*Fruit part*/}
                <Link to="fruit" className='absolute z-30 w-full h-[80svh] top-[160svh] wobble'>
                        <img className="absolute wobble w-full h-full left-0 images_shadow top-0" src={fruit_design} alt="fruit_design" />
                        <p  className='absolute top-3/4 text-yellow-100 rounded-3xl bg-[#ffffff33] backdrop-blur-[1px] md:text-5xl lg:text-2xl lg:w-4/6 text-2xl font-medium text-center py-5 w-2/4 left-1/4' style={{ textShadow: '0px 0px 5px #000 , 0 0 10px #000,0 0 7px #000,0 0 13px #000' }}>دیزاین با میوه <br/> و میوه آرایی</p>
                </Link>
        {/*____Fruit part______*/}

        {/*education part*/}
                <Link to="/learning" className='absolute z-30 w-full h-[80svh] top-[240svh] wobble '>
                        <img className="absolute wobble w-full h-full left-0 images_shadow top-0" src={teachingLogo} alt="teachingLogo" />
                        <p  className='absolute top-3/4 text-yellow-100 rounded-3xl bg-[#ffffff33] backdrop-blur-[1px] md:text-5xl lg:text-2xl lg:w-4/6 text-3xl font-medium text-center py-5 w-2/4 left-1/4' style={{ textShadow: '0px 0px 5px #000 , 0 0 10px #000,0 0 7px #000,0 0 13px #000' }}>آموزش</p>
                </Link>
        {/*____education  part_____*/}
        {/*Contact part*/}
                <Link to='commentsAndContact' className='absolute z-30 w-full h-[80svh] top-[320svh] wobble'>
                        <img className="absolute wobble w-full h-full left-0 images_shadow top-0" src={contatct_us} alt="contatct_us" />
                        <p  className='absolute top-3/4 text-yellow-100 rounded-3xl bg-[#ffffff33] backdrop-blur-[1px] md:text-5xl lg:text-2xl lg:w-4/6 text-2xl font-medium text-center py-5 w-2/4 left-1/4' style={{ textShadow: '0px 0px 5px #000 , 0 0 10px #000,0 0 7px #000,0 0 13px #000' }}>تماس با ما<br/>و نظرات</p>
                </Link>
                
    {/*____Contact part_______*/}

        </section>
  
{/*______selecting Part______ */}
            </main>

        </>
    </PagesTransition>
    );
};

export default Home;