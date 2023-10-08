import { Link } from "react-router-dom";

const AboutUs = () => {


    return (
        <div>
            <section className="mt-20 mb-20">

                <h1 className="text-4xl font-bold text-center text-blue-600">About <span className="text-green-600">Us</span></h1>
                <hr className="w-1/5 mx-auto border-b-2" />

                <div className="mt-10">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/qxgDnKG/banner-3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-1/2">
                                <h1 className="mb-5 text-4xl font-bold text-green-400">We Provide The Your Health is Our Priority.</h1>

                                <p className="mb-5 text-lg">We are dedicated to providing high-quality, compassionate, and patient-centered healthcare services to our community. Our mission is to promote wellness, prevent illness, and provide advanced medical care to enhance the overall well-being of our patients.</p>

                                <Link to="/about"><button className="btn rounded-2xl text-white btn-sm bg-green-600 text-lg hover:bg-blue-600">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;