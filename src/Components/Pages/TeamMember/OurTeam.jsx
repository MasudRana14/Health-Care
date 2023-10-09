
const OurTeam = () => {
    return (
        <div className="mx-auto">
            <h1 className="text-center mt-10 text-3xl font-bold mb-10 underline">Our Team Members</h1>



            <div className="mb-10">

                <div className=" gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/* Card 1  */}
                    <div className="bg-green-100">

                        <div className="flex flex-col items-center p-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/pL8zCpV/19.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Fredrik Andersson</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Event Coordinator</span>
                            <p className="py-3">Oversees the planning and <br /> execution of the health fair.</p>

                        </div>

                    </div>
{/* card 2  */}
                    <div className="bg-blue-100">

             <div className="flex flex-col items-center p-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/0Kwv6c3/20.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Kevin Clark</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Volunteer Coordinator</span>
                            <p className="py-3">Recruits and manages <br /> volunteers who help run the event.</p>

                 </div>

                    </div>
{/* card 3  */}
                    <div className="bg-pink-100">

                        <div className="flex flex-col items-center p-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/ZfLN2VX/17.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Kerry</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Health Educators</span>
                            <p className="py-3">Provide information and <br /> education on various health topics.</p>

                        </div>

                    </div>
{/* card 4 */}
                    <div className="bg-teal-100">

                        <div className="flex flex-col items-center p-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/p18zK8r/26.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Russell Wiltshire</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Registered Nurses (RNs)</span>

                        </div>

                    </div>
{/* card 5 */}
                    <div className="bg-lime-100">

                        <div className="flex flex-col items-center p-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/BTm6KHw/13.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Lawrence Jude</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Pharmacists</span>

                        </div>

                    </div>
{/* card 6 */}
                    <div className="bg-lime-100">

                        <div className="flex flex-col items-center p-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/vVcbQx4/25.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mike Colins</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Mental Health Professionals</span>

                        </div>

                    </div>
                </div>

            </div>

            <div>
                
            </div>

        <h1 className="text-center text-3xl font-semibold mb-16 mt-12 border-2 bg-green-100">We assure you of our best service at all <br /> times vs assuring you of our best services always</h1>

        </div>
    );
};

export default OurTeam;