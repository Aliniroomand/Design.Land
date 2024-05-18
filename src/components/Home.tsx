// images
import BG from '../assets/images/Root/door bg.jpg'

import signsArrow1 from '../assets/images/Root/signArrow1.png'
import balloon from '../assets/images/Root/balloon design transparent.png'
import signArrowTop from '../assets/images/Root/signArrow3.png'
import flower_design from "../assets/images/Root/transparent_flower design.png"
import fruit_design from "../assets/images/Root/fruit design.png"
import contatct_us from "../assets/images/contact us & comments/call us.png"
import teachingLogo from "../assets/images/teach/transparent teaching.png"
import titleBG from "../assets/images/Root/titleBG.png"

// components
import { Link } from 'react-router-dom'
import PagesTransition from './helper/PageTransition'


const Home = () => {

    return (
        <PagesTransition >
        <>

{/* background */}
            <img className='fixed h-full z-[1] w-screen right-0 bottom-0 md:w-[50%]' src={BG} alt="BG" />
{/*_____background____ */}

{/* selecting Part */}
            <main className='relative w-svw h-svh bg-mainPink ' style={{background:`url:${BG}`}}>

    
        {/*Title part*/}
                <section className='relative z-10 w-full h-1/5 top-0bg '
>
                    <p style={{ backgroundImage: `url(${titleBG})`, backgroundPosition:"center" , backgroundRepeat:"no-repeat" }} className='absolute md:text-5xl lg:text-2xl text-3xl line text-center text-fuchsia-950  w-full font-thin font-[nastaliq] py-6 leading-[3rem] '>به دنیای رنگی دیزاین لند خوش اومدی <br/>کدوم قسمت از هنر ما رو میخای ببینی؟</p>
                </section>
        {/*____Title part_____*/}

        {/* Balloon part */}
        <Link to="/balloon" className='absolute grid place-items-center z-30 w-1/2 h-1/3 bottom-[30%] -right-5 '>
                        {/* <img className="absolute w-full left-0 h-full images_shadow bottom-0 " src={balloon} alt="balloon" /> */}
                        <p  className='absolute bottom-5 text-yellow-400 drop-shadow-8xl md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium text-center '>تماس با ما<br/>و نظرات</p>
                </Link>
        {/*____Balloon part_____*/}

        {/*Flowerpart*/}
                {/* <Link to="/flower" className='absolute grid place-items-center z-30 w-1/3 h-1/6 top-3 right-0 '>
                        <img className="absolute w-full h-full images_shadow  " src={flower_design} alt="flower_design" />
                        <p  className='absolute right-2 text-yellow-400 drop-shadow-8xl md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium text-center text-nowrap'>دیزاین با گل <br/>و گل آرایی</p>
                </Link> */}
        {/*____Flower part_____*/}
        {/*education part*/}
                {/* <Link to="/flower" className='absolute grid place-items-center z-30 w-1/3 h-1/6 top-0 left-0 '>
                        <img className="absolute max-w-full left-0 max-h-full images_shadow top-1/3" src={teachingLogo} alt="teachingLogo" />
                        <p  className='absolute bottom-0 text-yellow-400 drop-shadow-8xl md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium text-center '>آموزش</p>
                </Link> */}
        {/*____education  part_____*/}

        {/*Fruit part*/}
                {/* <Link to="/flower" className='absolute grid place-items-center z-30 w-1/2 h-[40%] bottom-0 left-0 '>
                        <img className="absolute w-full left-0 h-full drop-shadow-8xl bottom-5 " src={fruit_design} alt="fruit_design" />
                        <p  className='absolute bottom-1/5 left-2 text-yellow-400 drop-shadow-8xl md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium text-center '>دیزاین با میوه <br/> و میوه آرایی</p>
                </Link> */}
        {/*____Fruit part______*/}

        {/*Contact part*/}
                {/* <Link to="/flower" className='absolute grid place-items-center z-30 w-1/3 h-1/6 bottom-[45%] left-0 '>
                        <img className="absolute w-full left-0 h-full images_shadow bottom-0 " src={contatct_us} alt="contatct_us" />
                        <p  className='absolute bottom-5 text-yellow-400 drop-shadow-8xl md:text-5xl lg:text-2xl lg:w-4/6 text-xl text_shadow font-medium text-center '>تماس با ما<br/>و نظرات</p>
                </Link> */}
                
    {/*____Contact part_______*/}


  
{/*______selecting Part______ */}
            </main>

        </>
    </PagesTransition>
    );
};

export default Home;