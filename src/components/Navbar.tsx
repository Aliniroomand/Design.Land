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
    const menu_section_ref = document.getElementById("menu_section")

    const closeHandler=()=>{
        if (activeMenu) {
            menu_section_ref?.classList.add("fadeOut");
            setTimeout(() => {
                setActiveMenu(false);
            }, 1000); // Adjust the delay to match the duration of the fadeOut animation
        } else {
            // If the menu is not active, set activeMenu to true
            setActiveMenu(true);
        }
console.log(menu_section_ref?.classList);
    }
    return (
        <nav className="">
            <section onClick={closeHandler} className="fixed z-40 bottom-0 right-0 cursor-pointer w-1/5">
                    <img className="fixed wobble drop-shadow-4xl bottom-[-50px] right-[-10px] w-[170px] " src={balloon} alt="balloon" />
                    <p className="fixed wobble text-2xl  bottom-[70px]  right-[70px]">فهرست</p>
            </section>
            {activeMenu &&
                <section id="menu_section" className=" Nav_menu w-full flex flex-row-reverse slideInRight z-50">
                    <img className="fixed  left-0 top-1/2 hover:rotate-[90deg] duration-500 cursor-pointer" onClick={closeHandler} src={cross} />
                    <ul className=" ">
                        <li className=" h-1/5 wobble_with_delay ">
                            <p className="drop-shadow-xl">دیزاین با بادکنک</p>
                            <img className=" drop-shadow-4xl " src={balloon2} alt="balloon" />
                        </li>
                        <li className=" h-1/5 wobble">
                            <p className="">دیزاین گل</p>
                            <img className=" drop-shadow-4xl  " src={balloon3} alt="flower" />
                        </li>
                        <li className=" h-1/5 wobble_with_delay ">
                            <p className=" ">دیزاین بادکنک</p>
                            <img className=" drop-shadow-4xl  " src={balloon4} alt="balloon" />
                        </li>
                        <li className=" h-1/5 wobble">
                            <p className=" ">تماس  با ما</p>
                            <img className=" drop-shadow-4xl  " src={balloon5} alt="contactUs" />
                        </li>
                        <li className="h-1/5 wobble_with_delay ">
                            <p className=" ">نظرات مشتریان</p>
                            <img className=" drop-shadow-4xl  " src={balloon2} alt="comments" />
                        </li>
                    </ul> 
                </section>

            }
        </nav>
    );
    
};

export default Navbar;