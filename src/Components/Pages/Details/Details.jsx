import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";


const Details = () => {

    const showDetails = useLoaderData();
    const { id } = useParams();
    const [show, setShow] = useState({})
    useEffect(() => {
        const find = showDetails?.find(item => item.id == id)
        setShow(find)

    }, [showDetails, id])


    return (
        <div>

            <h1 className="text-4xl text-center font-bold mt-8">Our Service Details</h1>
            <p className="border-b-2 w-1/2 mx-auto"></p>

            <div className="w-3/4 mx-auto mt-16 mb-10">
                <ShowDetails show={show}></ShowDetails>
            </div>

        </div>
    );
};

export default Details;