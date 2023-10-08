import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HealthCard = ({ card }) => {

    const {id, title, img , name, price } = card;


    useEffect(()=>{
        AOS.init({
            duration:1300,
            delay: 80,
            
        });
    },[])

    return (
        <div className="mx-auto mt-14 " data-aos="flip-right">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div>
                    <img className="rounded-t-lg" src={img} alt="" />
                </div>

                <div className="p-5 text-center">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
                    <p className="text-xl mb-3 font-medium">Price: ${price}.00</p>

                    <Link to={`/details/${id}`}><button className="btn btn-sm text-white bg-green-600 hover:bg-blue-600">See Details</button></Link>

                </div>
                
            </div>

        </div>
    );
};

export default HealthCard;