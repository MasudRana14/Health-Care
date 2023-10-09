import PropTypes from 'prop-types';




const ShowDetails = ({ show }) => {

    const { name, img, details,price } = show;

    return (
        <div>

            <div>
                <div className="relative flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={img}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">

                        <h6 className="text-3xl font-medium mb-5" >{name}</h6>

                        <h4 className="mb-2 block  text-lg font-normal ">
                           {details}
                        </h4>
                        <p className="text-xl mb-3 font-medium">Price: ${price}.00</p>
                        <a className="inline-block" href="#">
                            <button
                                className="flex btn btn-sm text-white bg-green-600 hover:bg-blue-600"
                                type="button"
                            >
                               
                            Booking Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
};

ShowDetails.propTypes = {
    show: PropTypes.object.isRequired
}


export default ShowDetails;