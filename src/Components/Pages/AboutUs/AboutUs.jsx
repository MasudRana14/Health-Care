

const AboutUs = () => {


    return (
        <div className="max-w-7xl mx-auto mt-14 mb-20">
            <h1 className="text-4xl font-bold text-center text-blue-600"> Upcoming <span className="text-green-600">Events</span></h1>
            <hr className="w-1/5 mx-auto border-b-2" />


            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
        {/* Card 1  */}
                <div className="card w-96 bg-blue-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/b1N0jhX/Happy-and-Healthy-Expo.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            Happy and Healthy Expo
                        </h2>
                      
                        
                        <div className="card-actions text-xl justify-end text-green-600">
                            coming soon.!
                        </div>
                    </div>
                </div>
                {/* Card 2  */}
                <div className="card w-96 bg-blue-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/x58LvQB/Fit-for-Life-Festival.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                        Fit for Life Festival
                        </h2>
                      
                        
                        <div className="card-actions text-xl justify-end text-green-600">
                            coming soon.!
                        </div>
                    </div>
                </div>
                {/* Card 3  */}
                <div className="card w-96 bg-blue-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/5BMkP8h/Health-Discovery-Fair.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                        Health Discovery Fair
                        </h2>
                      
                        
                        <div className="card-actions text-xl justify-end text-green-600">
                            coming soon.!
                        </div>
                    </div>
                </div>

               

            </div>


        </div>
    );
};

export default AboutUs;