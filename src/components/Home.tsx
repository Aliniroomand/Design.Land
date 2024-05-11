// images
import BG from '../assets/images/Root/mainBG2.png'
import signsStand from '../assets/images/Root/woodenHolder.png'
import signsArrow1 from '../assets/images/Root/signArrow1.png'
import signsArrow2 from '../assets/images/Root/signArrow2.png'
import signsArrow3 from '../assets/images/Root/signArrow3.png'
import signsArrow4 from '../assets/images/Root/signArrow4.png'

const Home = () => {
    return (
        <>
        {/* background */}
            <img className='fixed h-screen w-screen blur-sm' src={BG} alt="BG" />
        {/*_____background____ */}

        {/* Arrows Part */}
            <main className='relative w-screen h-screen'>
                <section>
        {/* stand */}
                    <img className='absolute z-10 w-1/2 h-full left-1/4 right-1/4' src={signsStand} alt="signsStand" />
                </section>
        {/* ____stand___ */}
        {/* Arrows */}
                <section className='relative grid place-items-center z-20 w-full h-1/4'>
                    <img className='absolute w-[800px] md:h-full h-2/3 ' src={signsArrow1} alt="signsArrow1" />
                    <p className='absolute '>دیزاین با بادکنک</p>
                </section>
                <section>دیزاین با گل</section>
                <section>میوه آرایی و طراحی میوه</section>
                <section>نظرات و تماس با ما</section>
        {/* ____Arrows___ */}
        {/*______Arrows Part______ */}
            </main>
        </>
    );
};

export default Home;