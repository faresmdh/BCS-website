import { Route, Routes } from "react-router-dom";
import PlatformHeader from "../Components/PlatformHeader";
import Footer from "../Components/Footer";
import './platform.css';
import Semesters from "../Components/Semesters";
import Module from "../Components/Module";

export default function Platform(){
    return(
        <div className="platform">
            <div>
                <PlatformHeader/>
                <Routes>
                    <Route exact path='/' Component={Semesters}/>
                    <Route exact path='module/:id' Component={Module}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}