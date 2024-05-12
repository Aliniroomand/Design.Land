import balloon from '../assets/images/balloon/floated_three_balloons_compressed.png'
import flower1 from '../assets/images/flower designs/flower_1.png'
import flower2 from '../assets/images/flower designs/flower_3.png'
import fruit1 from '../assets/images/fruit design/floated_fruit_compressed.png'
import fruit2 from '../assets/images/fruit design/floated_fruit_compressed2.png'


const FloatedItems = () => {
    return (
        <div className=' fixed bottom-0 left-0 z-10 h-screen w-screen'>
            <img className=' blur-[2.5px] absolute left-0 floated_down_up w-full md:w-1/2' src={balloon} alt="balloon" />
            <img className=' blur-[2.5px] floated_down_up_delay' src={flower1} alt="flower1" />
            <img className=' blur-[2.5px] absolute floated_up_down right-2/4' src={flower2} alt="flower2" />
            <img className=' blur-[2.5px] absolute floated_up_down' src={fruit1} alt="fruit1" />
            <img className=' blur-[2.5px] absolute floated_up_down left-0' src={fruit2} alt="fruit2" />

        </div>
    );
};

export default FloatedItems;