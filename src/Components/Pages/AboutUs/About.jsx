
const About = () => {
    return (
        <div className="mx-auto">
            <div className="">
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/qxgDnKG/banner-3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2">
                            <h1 className="mb-5 text-5xl font-bold text-green-400">About Our Community Health Care</h1>

                            <p className="mb-5 text-lg">We are dedicated to providing high-quality, compassionate, and patient-centered healthcare services to our community. Our mission is to promote wellness, prevent illness, and provide advanced medical care to enhance the overall well-being of our patients.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* card sections  */}

                <p className="text-2xl text-center mt-14 font-medium">Join us at the Community Health Fair, where we're committed to your well-being. <br /> Our event is designed to promote healthier lifestyles, provide valuable health resources, <br /> and foster a sense of community. We believe that good health is a shared responsibility, <br /> and together, we can achieve it.</p>

            <div className="mt-12 mb-10 ">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default About;