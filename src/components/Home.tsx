// images
import BG from '../assets/images/Root/mainBG2.png'
import signsStand from '../assets/images/Root/woodenHolder2.png'
import signsArrow1 from '../assets/images/Root/signArrow1.png'
import signsArrow2 from '../assets/images/Root/signArrow2.png'
import signArrowTop from '../assets/images/Root/signArrow3.png'
import FloatedItems from './FloatedItems'


const Home = () => {
    return (
        <>

{/* background */}
            <img className='fixed h-screen z-0 w-screen blur-sm' src={BG} alt="BG" />
{/*_____background____ */}

{/* Arrows Part */}
            <main className='relative w-screen h-screen'>
                <section>
{/* stand */}
                    <img className='absolute z-20 w-1/2 h-full left-1/4 right-1/4' src={signsStand} alt="signsStand" />
                </section>
{/* ____stand___ */}
{/* Arrows */}
                <section className='relative grid place-items-center z-30 w-full h-1/6'>
                    <img className='absolute w-[800px] md:h-full h-full top-0 ' src={signArrowTop} alt="signsArrow1" />
                    <p className='absolute md:text-5xl lg:text-2xl xl text-2xl drop-shadow-3xl text-center h-1/3 top-4 text_shadow  '>خوش اومدی <br/>کدوم قسمت از هنر ما رو میخای ببینی؟</p>
                </section>
                <section className='relative grid place-items-center z-30 w-full h-1/6 top-1/6'>
                    <img className='absolute w-[800px] md:h-full h-2/3 ' src={signsArrow1} alt="signsArrow1" />
                    <p className='absolute md:text-6xl lg:text-4xl text-3xl drop-shadow-3xl text_shadow '>دیزاین با بادکنک</p>
                </section>
                <section className='relative grid place-items-center z-30 w-full h-1/6 top-2/6'>
                    <img className='absolute w-[800px] md:h-full h-2/3 ' src={signsArrow2} alt="signsArrow2" />
                    <p className='absolute md:text-6xl lg:text-4xl text-3xl drop-shadow-3xl text_shadow '>دیزاین با گل و گل آرایی</p>
                </section>
                <section className='relative grid place-items-center z-30 w-full h-1/6 top-3/6'>
                    <img className='absolute w-[800px] md:h-full h-2/3 ' src={signsArrow1} alt="signsArrow2" />
                    <p className='absolute md:text-6xl lg:text-4xl text-3xl drop-shadow-3xl text_shadow '>میوه آرایی و طراحی میوه</p>
                </section>
                <section className='relative grid place-items-center z-30 w-full h-1/6 top-1/6'>
                    <img className='absolute w-[800px] md:h-full h-2/3 ' src={signsArrow2} alt="signsArrow2" />
                    <p className='absolute md:text-6xl lg:text-4xl text-3xl drop-shadow-3xl text_shadow '>نظرات و تماس با ما</p>
                </section>
  
{/* ____Arrows___ */}
{/*______Arrows Part______ */}
            </main>
{/* Floated Items Part */}
            <FloatedItems/>
{/*__________Floated Items Part_______*/}
        </>
    );
};

export default Home;