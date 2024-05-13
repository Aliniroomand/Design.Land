import PagesTransition from "../helper/PageTransition";
import ReturnButton from "../helper/ReturnButton";

const Balloon_Design = () => {
    return (
        <PagesTransition>
            
        <div className=" h-screen w-screen bg-slate-600">
            Balloon
        </div>
        <ReturnButton/>
        </PagesTransition>
    );
};

export default Balloon_Design;