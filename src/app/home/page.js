import Card from "../component/card";
import Navbar from "../component/navbar";

export default function home(){
    return(
        <>
                <Card 
                title="Get Certificate"
                subtitle='Get your Certificate'
                image="image1.jpg"
                description="Click here to generate your certificate. Download and share your achievement with pride!"
                buttonLink={"/certificate"}
                buttonText="Create Certificate"
            />
        </>
    )


}