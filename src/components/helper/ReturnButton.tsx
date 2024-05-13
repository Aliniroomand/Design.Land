import { useNavigate } from "react-router-dom";
import home from "../../assets/images/Root/Home.svg"
import returnLogo from "../../assets/images/Root/Return.svg"

const ReturnButton = () => {
    const navigate=useNavigate()

    return (
        <section className="fixed z-[100] bottom-0 left-0 cursor-pointer  h-1/6 md:w-1/12 rounded-full bg-lightPink grid place-items-center">
            <img className="w-1/2 h-full hover:scale-150 transition-all duration-300" onClick={()=> navigate("/")} src={home} alt="home" />
            <img className="w-1/2 h-full hover:scale-150 transition-all duration-300" onClick={()=> navigate(-1)} src={returnLogo} alt="returnLogo" />
        </section>
    );
};

export default ReturnButton;