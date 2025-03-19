import MainButton from "../../components/mainButton/MainButton";
import { Home } from "../home/Home";

const StartPage = () => {
    return ( 
        <section>
            <div>
                <img src="../../../intro-img.png" alt="Screenshots of the app" />
            </div>

            <div>
                <h2>Enjoy Your Movie</h2>
                <h2>Watch Everywhere</h2>
            </div>

            <p>Stream unlimited movies and TV showson your phone,tablet, laptop, and TV.</p>

            {/* <MainButton buttonText="Get Started" path={<Home/>}/> */}

            <a href="https://developer.themoviedb.org/docs/getting-started">
            <img src="../../../public/tmd-logo.svg" alt="logo of TMDB" />
            </a>
        </section>
     );
}
 
export default StartPage;