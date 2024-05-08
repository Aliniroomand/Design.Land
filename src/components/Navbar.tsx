// Images
import balloon from "../assets/images/balloon/Balloon_menu_1.png"
import balloon2 from "../assets/images/balloon/Balloon_menu_2.png"
import balloon3 from "../assets/images/balloon/Balloon_menu_3.png"
import balloon4 from "../assets/images/balloon/Balloon_menu_4.png"
import balloon5 from "../assets/images/balloon/Balloon_menu_5.png"
import cross from "../assets/images/Root/crossIcon.svg"

import { useState } from "react"

const Navbar = () => {
    const [activeMenu,setActiveMenu]=useState(false)

    const closeHandler=()=>{
            setActiveMenu((prev)=>!prev)
        }
    
    return (
        <nav className="">
            <section onClick={closeHandler} className="fixed z-40 bottom-0 right-0 cursor-pointer w-1/5">
                    <img className="fixed wobble drop-shadow-4xl bottom-[-50px] right-[-45px] w-[170px] " src={balloon} alt="balloon" />
                    <p className="fixed wobble text-2xl  bottom-[70px]  right-[35px]">فهرست</p>
            </section>
                <section  >
                    <img className={`fixed left-0 md:left-2/3 top-1/2 hover:rotate-[90deg] duration-500 cursor-pointer z-[101] ${activeMenu?"actived_menu" : "deactived_menu" }`} onClick={closeHandler} src={cross} />
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