import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, transform } from 'framer-motion';
import BG from '../assets/images/Root/MainPlainBG.png';
import balloon from '../assets/images/Root/balloon_transparent.png';
import flower_design from "../assets/images/Root/flower_transparent.png";
import fruit_design from "../assets/images/Root/fruit_transparent.png";
import contatct_us from "../assets/images/Root/contactUs_transparent.png";
import teachingLogo from "../assets/images/Root/teach_transparent.png";
import PagesTransition from './helper/PageTransition';

const Home: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const BackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

    const linkVariants = {
        hidden: { scale: 0.3  , translateY:"-50%" },
        visible: { scale: 1 , translateY:"0%"  }
    };
// initialing components for every part
    const LinkItem = ({ to, src, alt, text, styleClass }: { to: string, src: string, alt: string, text:any, styleClass: string }) => {
        const itemRef = useRef(null);
        const inView = useInView(itemRef, { once: false });

        return (
            <Link to={to} className={styleClass} ref={itemRef}>
                <motion.img
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={linkVariants}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full left-0 top-0"
                    src={src}
                    alt={alt}
                />
                <motion.p  initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={linkVariants}
                    transition={{ duration: 1 }}
                        className='absolute top-3/4 text-yellow-100 rounded-3xl bg-[#ffffff33] backdrop-blur-[1px] md:text-5xl lg:text-2xl lg:w-4/6 text-2xl font-medium text-center py-5 w-2/4 left-1/4' style={{ textShadow: '0px 0px 5px #000, 0 0 10px #000, 0 0 7px #000, 0 0 13px #000' }}>
                    {text}
                </motion.p>
            </Link>
        );
    };

    return (
        <PagesTransition>
            <main ref={ref} className='relative'>
                {/* Background */}
                <motion.img
                    className='fixed h-full z-[1] w-screen right-0 bottom-0 md:w-[50%]'
                    src={BG}
                    alt="BG"
                    style={{ y: BackgroundY }}
                />

                {/* Title Part */}
                <section className='fixed z-10 w-full h-[20svh] top-0'>
                    <p className='fixed md:text-5xl lg:text-2xl text-3xl text-center bg-[#ffffff3c] backdrop-blur-[1px] text-slate-900 w-full font-semibold font-[nastaliq] py-6 leading-[4rem]' style={{ textShadow: '0px 0px 5px #fff' }}>
                        به دنیای رنگی دیزاین لند خوش اومدی <br />برای دیدن قسمتهای مختلف هنر ما اسکرول کن
                    </p>
                </section>

                {/* Selecting Part */}
                <section className='relative z-20 w-svw h-[80svh] top-[20svh] overflow-y-scroll overflow-x-hidden'>
                    <LinkItem to="balloon" src={balloon} alt="balloon" text={<>دیزاین با بادکنک<br/>و بادکنک آرایی</>} styleClass="absolute z-30 w-full h-[80svh] top-0 wobble" />
                    <LinkItem to="flower" src={flower_design} alt="flower_design" text={<>دیزاین با گل <br/>و گل آرایی</>} styleClass="absolute z-30 w-svw h-[80svh] top-[90svh] right-0 wobble" />
                    <LinkItem to="fruit" src={fruit_design} alt="fruit_design" text={<>دیزاین با میوه <br/> و میوه آرایی</>} styleClass="absolute z-30 w-full h-[80svh] top-[190svh] wobble" />
                    <LinkItem to="/learning" src={teachingLogo} alt="teachingLogo" text="آموزش" styleClass="absolute z-30 w-full h-[80svh] top-[290svh] wobble" />
                    <LinkItem to='commentsAndContact' src={contatct_us} alt="contatct_us" text={<>تماس با ما<br/>و نظرات</> }styleClass="absolute z-30 w-full h-[80svh] top-[390svh] wobble" />
                </section>
            </main>
        </PagesTransition>
    );
};

export default Home;
