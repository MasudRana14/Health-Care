

const Footer = () => {
    return (
        <div>


            <footer className="footer p-10 bg-blue-100 text-base-content">
                <aside>
                   <img className="w-20" src="https://i.ibb.co/NY2DBcw/pngegg.png" alt="" />
                   <h3 className="text-3xl font-bold text-indigo-600">Health <span className="text-lime-600">Care</span></h3>
                </aside>
                <nav>
                    
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Our Event</a>
                    <a className="link link-hover">Price Plan</a>
                </nav>
                <nav>
                   
                    <a className="link link-hover">About Online service</a>
                    <a className="link link-hover">Read Our blog</a>
                    <a className="link link-hover">Add your booking</a>
                   
                </nav>
                <nav>
                  
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Join With Us</a>
                </nav>
            </footer>



        </div>
    );
};

export default Footer;