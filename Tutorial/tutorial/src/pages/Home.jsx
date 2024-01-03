import Header from "../division/Header.jsx";
import TutorialsList from "../components/TutorialsList.jsx";
import BodyContainer from "../components/bodycontainer/BodyContainer.jsx";

import HomeCSS from "./Home.module.css"
export default function Home(){

    return(
        <>
            <div className={HomeCSS.home}>


            <Header/>
            <BodyContainer>

                <TutorialsList/>
            </BodyContainer>
            </div>
        </>
    )
}