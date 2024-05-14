// images
import BG from '../assets/images/Root/mainBG.jpg'
import signsArrow1 from '../assets/images/Root/signArrow1.png'
import balloon from '../assets/images/Root/balloon design transparent 2.png'
import signArrowTop from '../assets/images/Root/signArrow3.png'
import flower_design from "../assets/images/flower designs/bride_flower_design.png"
import fruit_design from "../assets/images/fruit design/fruit_nav.png"
import contatct_us from "../assets/images/contact us & comments/call us.png"
// components
import { Link } from 'react-router-dom'
import PagesTransition from './helper/PageTransition'


const Home = () => {

    return (
        <PagesTransition >
        <>

{/* background */}
            <img className='fixed h-screen z-0 w-[1500px] ' src={BG} alt="BG" />
{/*_____background____ */}

{/* selecting Part */}
            <main className='relative w-screen h-screen'>

    {/* selecting */}
        {/*Title part*/}
                <section className='relative grid place-items-center z-0 w-full h-1/6 left-1/6  right-1/6 drop-shadow-4xl '>
                    <p className='absolute md:text-5xl lg:text-2xl text-xl text-center h-1/3 w-full top-4 text_shadow text-yellow-400 font-semibold '>به دنیای رنگی دیزاین لند خوش اومدی <br/>کدوم قسمت از هنر ما رو میخای ببینی؟</p>
                </section>
        {/*____Title part_____*/}

        {/* Balloon part */}
                <Link to="/balloon" className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute md:h-full lg:w-2/5 h-full drop-shadow-4xl' src={balloon} alt="balloon" />
                    <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-2xl text_shadow font-medium '>دیزاین با بادکنک</p>
                </Link >
        {/*____Balloon part_____*/}

        {/*Flowerpart*/}
                {/* <Link to="/flower" className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] lg:w-2/5 md:h-full h-2/3 drop-shadow-4xl' src={signsArrow2} alt="signsArrow2" />
                    <section className=' w-[800px] px-5 flex flex-row-reverse items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={flower_design} alt="flower_design" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-2xl text_shadow font-medium '>دیزاین با گل و گل آرایی</p>
                    </section>
                </Link> */}
        {/*____Flower part_____*/}

        {/*Fruit part*/}
                {/* <Link to="/fruit" className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] lg:w-2/5 md:h-full h-2/3 drop-shadow-4xl' src={signsArrow1} alt="signsArrow2" />
                    <section className=' w-[800px] px-5 flex items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={fruit_design} alt="fruit_design" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium '>دیزاین با میوه و میوه آرایی</p>
                    </section>
                </Link> */}
        {/*____Fruit part______*/}

        {/*Contact part*/}
                {/* <Link to='/commentsAndContact' className='relative flex items-center justify-center z-30 w-full h-1/6 top-1/6 hover_animation'>
                    <img className='absolute w-[800px] md:h-full lg:w-2/5 h-2/3 drop-shadow-4xl' src={signsArrow2} alt="signsArrow1" />
                    <section className=' w-[800px] px-5 flex flex-row-reverse items-center justify-evenly md:justify-around lg:w-2/5 gap-0 h-1/2 z-10'>
                        <img className=" h-full images_shadow lg:w-1/6 " src={contatct_us} alt="contatct_us" />
                        <p  className=' w-2/3 md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium '>تماس با ما و نظرات مشتریان</p>
                    </section>
                </Link> */}
    {/*____Contact part_______*/}

{/* ____selecting___ */}
  
{/*______selecting Part______ */}
            </main>

        </>
    </PagesTransition>
    );
};

export default Home;