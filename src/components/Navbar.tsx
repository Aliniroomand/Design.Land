import { useState } from "react"
import { useSelector } from "react-redux"
// Images
import balloon from "../assets/images/balloon/Balloon_menu_1.png"
import balloon2 from "../assets/images/balloon/Balloon_menu_2.png"
import balloon3 from "../assets/images/balloon/Balloon_menu_3.png"
import balloon4 from "../assets/images/balloon/Balloon_menu_4.png"
import balloon5 from "../assets/images/balloon/Balloon_menu_5.png"
import cross from "../assets/images/Root/crossIcon.svg"
import favorite from "../assets/images/Root/favoriteIcon.svg"
// Hooks
import { useAppSelector } from "./redux/hooks"
// Store

const Navbar = () => {
    const [activeMenu,setActiveMenu]=useState(false)

    const closeHandler=()=>{
            setActiveMenu((prev)=>!prev)
        }
    const count_of_favorites=useAppSelector((store)=>store.favorites.length)    


        return (
            <nav className="">
            <section onClick={closeHandler} className="fixed z-[100] bottom-0 right-0 cursor-pointer w-1/5 h-1/6">
                    <img className="fixed wobble drop-shadow-4xl bottom-[-0px] right-[-45px] w-[100px] " src={balloon} alt="balloon" />
                    <p className="fixed wobble text-2xl  bottom-[70px]  right-[35px]">فهرست</p>
            </section>
                <section  >
                    <section className={`flex top-0 flex-col fixed left-0 md:left-2/3 ${activeMenu?"z-[101]" : "z-[0]" } items-end justify-around h-full w-1/3`}>
                        <section className="top-1/4 h-1/4">
                            <img className={`left-0 hover:rotate-[90deg] duration-500 cursor-pointer z-[101] ${activeMenu?"actived_menu" : "deactived_menu" }`} onClick={closeHandler} src={cross} />
                        </section>
                        <section className={`relative flex flex-col items-center justify-center right-0 h-1/4 w-full bottom-1/4 hover:rotate-[360deg] duration-500 cursor-pointer z-[101]  animate-[bounce_0.5s_ease_infinite_forwards] ${activeMenu?"actived_menu" : "deactived_menu" }`}>
                            <section className=" flex flex-col items-center left-0 top-0">
                                <img className="absolute max-w-[50px]" src={favorite} alt="favoriteIcon" />
                                <h1 className={` w-full left-0  top-1/2 hover:rotate-[360deg] duration-500 cursor-pointer z-[101]  animate-[bounce_0.5s_ease_infinite_forwards] ${activeMenu?"actived_menu" : "deactived_menu" }`}>{count_of_favorites}</h1>
                            </section>
                            <p className={`absolute w-full left-0  top-1/2 hover:rotate-[360deg] duration-500 cursor-pointer z-[101]  animate-[bounce_0.5s_ease_infinite_forwards] text-nowrap ${activeMenu?"actived_menu" : "deactived_menu" }`} >علاقه مندی ها</p>

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
                            <p className="absolute right-[80px] z-50 drop-shadow-text font-bold text-xl group-hover:scale-125 duration-500">تماس  با ما</p>
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