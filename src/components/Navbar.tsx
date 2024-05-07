// Images
import balloon from "../assets/images/balloon/Balloon_menu_1.png"
import flower from "../assets/images/balloon/Balloon_menu_2.png"
import fruit from "../assets/images/balloon/Balloon_menu_3.png"
import contactUs from '../assets/images/balloon/Balloon_menu_3.png'
import comments from '../assets/images/balloon/Balloon_menu_1.png'
import { useState } from "react"

const Navbar = () => {
    const [activeMenu,setActiveMenu]=useState(false)
    return (
        <nav>
            <section onClick={()=>setActiveMenu((prev)=>!prev)} className="fixed z-40 bottom-0 right-0 cursor-pointer">
                    <img className="fixed w-[160px] bottom-[-50px] right-[-10px] " src={balloon} alt="balloon" />
                    <p className="fixed text-2xl bottom-[70px] right-[60px]">فهرست</p>
            </section>
            <ul className="fixed bottom-[10vh] right-0 items-center rounded z-50">
                <li className=" bottom-0 border-x-black">
                    <img className="fixed w-[160px] bottom-[-50px] right-[-10px] " src={balloon} alt="balloon" />
                    <p className="fixed text-xl bottom-[70px] right-[60px]">دیزاین با بادکنک</p>
                </li>
                <li className=" bottom-0 border-x-black">
                    <p className="">دیزاین گل</p>
                    <img className="h-[150px]" src={flower} alt="flower" />
                </li>
                <li className=" bottom-0 border-x-black">
                    <p className=" ">دیزاین بادکنک</p>
                    <img className="h-[150px]" src={balloon} alt="balloon" />
                </li>
                <li className=" bottom-0 border-x-black">
                    <p className=" ">تماس  با ما</p>
                    <img className="h-[150px]" src={contactUs} alt="contactUs" />
                </li>
                <li className=" bottom-0 border-black">
                    <p className=" ">نظرات مشتریان</p>
                    <img className="h-[150px]" src={comments} alt="comments" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;