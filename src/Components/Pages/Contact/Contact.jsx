

const Contact = () => {
    return (
        <div className="mx-auto  mb-14">

            <h1 className="text-3xl text-center mt-8 font-bold text-blue-600">Get In Touch With us</h1>
            <hr className="w-3/12 border-2 mx-auto" />





            <div className="mt-10 flex lg:flex-nowrap flex-wrap lg:px-60  gap-8 ">

                <div className="border-2 bg-green-100 p-10 px-8">

                    <h1 className="text-center text-xl font-bold mt-3">Send Message</h1>

                    <div className="p-4">
                        <h1 className="text-lg font-medium">Name</h1>
                        <input className="px-8 rounded-lg border-2 py-1" required type="text" name="name" placeholder="Name" id="" />
                    </div>

                    <div className="p-4">
                        <h1 className="text-lg font-medium">Email</h1>
                        <input className="px-8 rounded-lg border-2 py-1" required type="email" name="email" placeholder="Email" id="" />
                    </div>

                    <div className="p-4">
                        <h1 className="text-lg font-medium">Address</h1>
                        <input className="px-8 rounded-lg border-2 py-1" type="address" name="address" placeholder="Address" id="" />

                    </div>

                    <div className="p-4">
                        <h1 className="text-lg font-medium">Message</h1>
                        <input type="text" name="message" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs" />
                    </div>


                    <div >
                        <button className="w-1/2 bg-blue-600 text-white rounded-lg p-2 font-medium">Send Message</button>
                    </div>

                </div>


                {/* Address And Contact Box   */}

                <div className="grid lg:grid-cols-2 gap-4 ">

                    <div className="border-2 bg-green-100 w-52 h-52 ">

                        <div className="text-center mt-3 text-xl font-medium">
                            <h1>Office Address</h1>
                        </div>
                        <div className="text-center mt-4">
                            <p>Arobpur Airport Road, Jashore Sador Khulna, Bangladesh</p>

                        </div>

                    </div>

                    <div className="border-2 bg-pink-100 w-52 h-52 ">

                        <div className="text-center mt-3 text-xl font-medium">
                            <h1>Phone Number</h1>
                        </div>

                        <div className="text-center mt-4">
                            <p>+880 189 36 24</p>
                            <p>+880 169 33 64</p>
                            <p>+880 129 36 04</p>
                        </div>

                    </div>

                    <div className="border-2 bg-lime-100 w-52 h-52 ">

                        <div className="text-center mt-3 text-xl font-medium">
                            <h1>Email Address</h1>
                        </div>
                        <div className="text-center mt-4">
                            <p>healthcare21@gmail.com</p>
                            <p>support01@gmail.com</p>
                            <p>event99@yahoo.com</p>

                        </div>
                    </div>

                    <div className="border-2 bg-blue-100 w-52 h-52 ">

                        <div className="text-center mt-3 text-xl font-medium">
                            <h1>Fax Number</h1>
                        </div>
                        <div className="text-center mt-4">
                            <p>011-44-20-12345645</p>
                            <p>033-33-11-12345678</p>
                            <p>077-99-44-12345693</p>


                        </div>

                    </div>

                </div>



            </div>


        </div>


    );
};

export default Contact;