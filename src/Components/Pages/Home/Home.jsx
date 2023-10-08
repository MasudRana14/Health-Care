
import { useLoaderData } from "react-router-dom";
import HealthCard from "../HealthCard/HealthCard";
import HeroSection from "../HeroSection/HeroSection";
import PriceRange from "../PriceRange/PriceRange";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {

    const homeCard = useLoaderData();
    return (
        <div>
            
           <div className="mx-auto w-cover">
           <HeroSection></HeroSection>
           </div>

           <div className="text-center mt-14">
                <h1 className="text-4xl font-bold text-blue-600">Our <span className="text-green-500">Events</span></h1>
                <hr  className="w-1/5 mx-auto border-b-2"/>
                <p className="text-lg mt-6">We provide the highest level of event service to our patients. <br />We serve our patients with utmost care. <br />Our experienced doctors always strive to provide high quality services.</p>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
           {
                homeCard.map(health=> <HealthCard key={health.id} card={health}></HealthCard>)
            }
           </div>

            {/* price section  */}

           <div>
            <PriceRange></PriceRange>
           </div>

           {/* About Us Section  */}

           <div>
            <AboutUs></AboutUs>
           </div>
        </div>
    );
};

export default Home;