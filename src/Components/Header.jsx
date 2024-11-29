import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import { useEffect, useState } from 'react';

export default function Header(){

    const [isVisible, setIsVisible] = useState(""); 
    const [lastScrollY, setLastScrollY] = useState(0); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                document.getElementById('nav-menu').className='';
                setIsVisible("noheader");
            } else {
                setIsVisible("");
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return(
        <header className={isVisible}>
                <Link to="/#home" className="logo">
                    <img src={logo}/>
                    <div>
                        <h1>Bouira Computer Society</h1>
                        <p>printf("Hello! BCS")</p>
                    </div>
                </Link>
                <nav>
                    <ul id='nav-menu'>
                        <i className="fa-solid fa-xmark" id='menu-icon' onClick={()=>{
                            document.getElementById('nav-menu').classList.toggle('toggled');
                        }}></i>
                        <li>
                            <a href="/#home" smooth><i className="fa-solid fa-house"></i>الرئيسية</a>
                        </li>
                        <li>
                            <a href="/#about" smooth><i className="fa-solid fa-laptop"></i>عن BCS</a>
                        </li>
                        <li>
                            <a href="/#dev" smooth><i className="fa-solid fa-user"></i>المطور</a>
                        </li>
                        <li>
                            <a href="/#contact" smooth><i className="fa-solid fa-phone-flip"></i>إتصل بنا</a>
                        </li>
                        <li>
                            <a href="/#download" smooth>
                                <i className="fa-solid fa-cloud-arrow-down"></i>
                                تحميل
                            </a>
                        </li>
                        <button onClick={()=>{
                            window.location.href = '/login';
                        }}>دخول </button>
                    </ul>
                    <i className="fa-solid fa-bars" id='menu-icon' onClick={()=>{
                        document.getElementById('nav-menu').classList.toggle('toggled');
                    }}></i>
                </nav>
            </header>
    )
}