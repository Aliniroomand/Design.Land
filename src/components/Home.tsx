// images
import BG from '../assets/images/Root/mainBG2.png'
import signsStand from '../assets/images/Root/woodenHolder2.png'
import signsArrow1 from '../assets/images/Root/signArrow1.png'
import signsArrow2 from '../assets/images/Root/signArrow2.png'
import signArrowTop from '../assets/images/Root/signArrow3.png'
import balloon from '../assets/images/balloon/balloon_logo.png'
import flower_design from "../assets/images/flower designs/bride_flower_design.png"
import fruit_design from "../assets/images/fruit design/fruit_nav.png"
import contatct_us from "../assets/images/contact us & comments/call us.png"
// components
import FloatedItems from './helper/FloatedItems'
import { Link } from 'react-router-dom'
import PagesTransition from './helper/PageTransition'


const Home = () => {

    return (
        <PagesTransition >
        <>

{/* background */}
            <img className='fixed h-screen z-0 w-screen blur-sm' src={BG} alt="BG" />
{/*_____background____ */}

{/* Arrows Part */}
            <main className='relative w-screen h-screen'>
                <section>
    {/* stand */}
                    <img className='absolute z-20 w-1/3 sm:w-[10%] h-full left-1/3 sm:right-[45%] ' src={signsStand} alt="signsStand" />
                </section>
    {/* ____stand___ */}
    {/* Arrows */}
        {/*Title Arrow*/}
                <section className='relative grid place-items-center z-30 w-full h-1/6 drop-shadow-4xl '>
                    <img className='absolute w-[800px] md:h-full h-full top-0 lg:w-2/5' src={signArrowTop} alt="signsArrow1" />
                    <p className='absolute md:text-5xl lg:text-2xl xl text-2xl text-center h-1/3 top-4 text_shadow font-semibold '>به دنیای رنگی دیزاین لند خوش اومدی <br/>کدوم قسمت از هنر ما رو میخای ببینی؟</p>
                </section>
        {/*____Title Arrow_____*/}

        {/* Balloon Arrow */}
                <Link to="/balloon" className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] md:h-full lg:w-2/5 h-2/3 drop-shadow-4xl' src={signsArrow1} alt="signsArrow1" />
                    <section className=' w-[800px] px-5 flex items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={balloon} alt="balloon" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-2xl text_shadow font-medium '>دیزاین با بادکنک</p>
                    </section>
                </Link >
        {/*____Balloon Arrow_____*/}

        {/*Flower Arrow*/}
                <Link to="/flower" className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] lg:w-2/5 md:h-full h-2/3 drop-shadow-4xl' src={signsArrow2} alt="signsArrow2" />
                    <section className=' w-[800px] px-5 flex flex-row-reverse items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={flower_design} alt="flower_design" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-2xl text_shadow font-medium '>دیزاین با گل و گل آرایی</p>
                    </section>
                </Link>
        {/*____Flower Arrow_____*/}

        {/*Fruit Arrow*/}
                <Link to="/fruit" className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] lg:w-2/5 md:h-full h-2/3 drop-shadow-4xl' src={signsArrow1} alt="signsArrow2" />
                    <section className=' w-[800px] px-5 flex items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={fruit_design} alt="fruit_design" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium '>دیزاین با میوه و میوه آرایی</p>
                    </section>
                </Link>
        {/*____Fruit Arrow______*/}

        {/*Contact Arrow*/}
                <Link to='/commentsAndContact' className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] md:h-full lg:w-2/5 h-2/3 drop-shadow-4xl' src={signsArrow2} alt="signsArrow1" />
                    <section className=' w-[800px] px-5 flex flex-row-reverse items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={contatct_us} alt="contatct_us" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium '>تماس با ما و نظرات مشتریان</p>
                    </section>
                </Link>
    {/*____Contact Arrow_______*/}

{/* ____Arrows___ */}
  
{/*______Arrows Part______ */}
            </main>
{/* Floated Items Part */}
            <FloatedItems/>
{/*__________Floated Items Part_______*/}
        </>
    </PagesTransition>
    );
};

export default Home;