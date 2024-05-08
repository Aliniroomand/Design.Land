// Images
import balloon from "../assets/images/balloon/Balloon_menu_1.png"
import balloon2 from "../assets/images/balloon/Balloon_menu_2.png"
import balloon3 from "../assets/images/balloon/Balloon_menu_3.png"
import balloon4 from "../assets/images/balloon/Balloon_menu_4.png"
import balloon5 from "../assets/images/balloon/Balloon_menu_5.png"
import cross from "../assets/images/Root/crossIcon.svg"
import favorite from "../assets/images/Root/favoriteIcon.svg"

import { useState } from "react"
import { useAppSelector } from "./redux/hooks"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store/store"

const Navbar = () => {
    const [activeMenu,setActiveMenu]=useState(false)

    const closeHandler=()=>{
            setActiveMenu((prev)=>!prev)
        }
    const count_of_favorites=useSelector((state:RootState)=>{state.favorites})    
        console.log(count_of_favorites);
        return (
            <nav className="">
                {count_of_favorites}
            <section onClick={closeHandler} className="fixed z-[100] bottom-0 right-0 cursor-pointer w-1/5">
                    <img className="fixed wobble drop-shadow-4xl bottom-[-50px] right-[-45px] w-[170px] " src={balloon} alt="balloon" />
                    <p className="fixed wobble text-2xl  bottom-[70px]  right-[35px]">فهرست</p>
            </section>
                <section  >
                    <section className="flex flex-col fixed left-0 md:left-2/3 z-[101] items-end justify-around h-full">
                    <img className={`left-0  top-1/2 hover:rotate-[90deg] duration-500 cursor-pointer z-[101] ${activeMenu?"actived_menu" : "deactived_menu" }`} onClick={closeHandler} src={cross} />
                        <section className=" flex flex-col items-center justify-center">
                            <img className={`left-0  top-1/2 hover:rotate-[360deg] duration-500 cursor-pointer z-[101]  animate-[bounce_0.5s_ease_infinite_forwards] ${activeMenu?"actived_menu" : "deactived_menu" }`} src={favorite} alt="favoriteIcon" />
                            <p className={`left-0  top-1/2 hover:rotate-[360deg] duration-500 cursor-pointer z-[101]  animate-[bounce_0.5s_ease_infinite_forwards] ${activeMenu?"actived_menu" : "deactived_menu" }`} >علاقه مندی ها</p>
                            <h1 className={`left-0  top-1/2 hover:rotate-[360deg] duration-500 cursor-pointer z-[101]  animate-[bounce_0.5s_ease_infinite_forwards] ${activeMenu?"actived_menu" : "deactived_menu" }`}>{}</h1>
                        </section>    
                    </section>
                    <ul className={ `Nav_menu backdrop-blur-sm	md:w-1/2 ${activeMenu?"actived_menu" : "deactived_menu" }` }>
                        <li className= {`nav_childs_container group`}>
                            <p className="absolute right-[50px] z-50 drop-shadow-text font-bold text-xl group-hover:scale-125 duration-500	 ">دیزاین با بادکنک</p>
                            <img className=" drop-shadow-4xl w-[200px] h-full   group-hover:scale-125 duration-500	 " src={balloon2} alt="balloon" />
                        </li>
                        <li className= {`nav_childs_container group`}>
                            <p className="absolute right-[80px] z-50 drop-shadow-text font-bold text-xl group-hover:scale-125 duration-500">دیزاین با گل</p>
                            <img className=" drop-shadow-4xl w-[200px] h-full group-hover:scale-125 duration-500" src={balloon3} alt="flower" />
                        </li>
                        <li className= {`nav_childs_container group`}>
                            <p className="absolute right-[70px] z-50 drop-shadow-text font-bold text-xl group-hover:scale-125 duration-500 ">دیزاین با میوه</p>
                            <img className=" drop-shadow-4xl w-[200px] h-full group-hover:scale-125 duration-500" src={balloon4} alt="balloon" />
                        </li>
                        <li className= {`nav_childs_container group`}>
                            <p className="absolute right-[95px] z-50 drop-shadow-text font-bold text-xl group-hover:scale-125 duration-500">تماس  با ما</p>
                            <img className=" drop-shadow-4xl w-[200px] h-full group-hover:scale-125 duration-500" src={balloon5} alt="contactUs" />
                        </li>
                        <li className= {`nav_childs_container group`}>
                            <p className="absolute right-[70px] z-50 drop-shadow-text font-bold text-xl group-hover:scale-125 duration-500">نظرات مشتریان</p>
                            <img className=" drop-shadow-4xl w-[200px] h-full group-hover:scale-125 duration-500" src={balloon2} alt="comments" />
                        </li>
                    </ul> 
                </section>
        </nav>
    );
    
};

export default Navbar;