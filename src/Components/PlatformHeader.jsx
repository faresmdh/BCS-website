import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import supabase from '../Supabase';
import { useEffect, useState } from "react";

export default function PlatformHeader(){

    const [load,setLoad] = useState(true);
    const [userData,setUserData] = useState(null);

    const fetchData = async ()=>{
        const { data:user } = await supabase.auth.getUser();
        if(!user.user){
            window.location.href = '/login';
            return;
        }
        const { data, error } = await supabase
            .from('students')
            .select()
            .eq('id',user.user.id);
        setUserData(data[0]);
        setLoad(false);
    }

    useEffect(() => {fetchData()}, []);

    return(
        <div className="platform-header">
            <Link to="/platform" className="logo">
                    <img src={logo}/>
                    <div>
                        <h1>Bouira Computer Society</h1>
                        <p>printf("Hello! BCS")</p>
                    </div>
            </Link>
            {load? <i class="fa-solid fa-circle-notch fa-spin"></i> : 
                <div id="profile" className="profile" onClick={()=>{
                    document.getElementById('profile').classList.toggle('profile-activated');
                    document.getElementById('options').classList.toggle('options-activated');
                }}>
                    <div className="texts">
                    <h2>{userData.name}</h2>
                    <span>{userData.email}</span>
                </div>
                <img src={userData.image}/>
                    
                    <div id="options" className="options">
                        <Link to='/level'>
                            <i class="fa-solid fa-layer-group"></i>
                            تغيير المستوى
                        </Link>
                        <button onClick={async ()=>{
                            supabase.auth.signOut();
                            window.localStorage.setItem('level',null);
                            window.location.href = '/login';
                        }}>
                            <i class="fa-solid fa-right-from-bracket"></i>
                            تسجيل الخروج
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}