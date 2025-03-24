import MainButton from "../../components/mainButton/MainButton";

const NotFound = () => {
    return ( 
        <div className="flex flex-col gap-5 items-center justify-center p-10">
            <h2 className="bg-red text-white rounded-lg p-5 text-xl">Sorry, this function is not available yet :(. Please wait for Version2 🤍.</h2>
            <MainButton path="/home" buttonText="back"/>
        </div>
        
     );
}
export default NotFound;