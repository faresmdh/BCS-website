import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './login.css';
import { useEffect, useState } from 'react';

export default function Level(){

    const [level,setLevel] = useState('L3 Systemes informatique');

    useEffect(() => {
        console.log(level); // Logs updated value
    }, [level]);

    const save = (e)=>{
        e.preventDefault();
        window.localStorage.setItem('level',level);
        window.location.href = '/login';
    }

    return(
        <div className="login-register">
            <div className="form-container">
                <form onSubmit={save}>
                    <h1> إختر مستواك الجامعي</h1>  
                    <p>سنعرض عليك مقاييس وملفات مرتبطة بمستواك</p>
                    <div className="selectdiv">
                        <label>
                            <select onChange={(e)=>{
                                setLevel(e.target.value);
                            }}>
                                <option value="L1 informatique">L1 informatique</option>
                                <option value="L2 informatique">L2 informatique</option>
                                <option value="L3 Systemes informatique" selected>L3 Systemes informatique</option>
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Hello! World" />
                </form>
            </div>
            <div className="lottie">
                <DotLottieReact
                        data={require('../JSON/level.json')}
                        loop
                        autoplay
                        />
            </div>
        </div>
    )
}