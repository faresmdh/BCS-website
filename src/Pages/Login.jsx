import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './login.css';
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import supabase from '../Supabase';


export default function Login(){

    const [state,setState] = useState(0);
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    
    const getUser = async ()=>{
        const loadingToast = toast.loading('يرجى الإنتظار');
        try {
            const { data } = await supabase.auth.getUser();
            if(!data.user){
                setState(1);
                toast.dismiss(loadingToast);
            }else if(!window.localStorage.getItem('level')){
                window.location.href = '/level';
            }else{
                window.location.href = '/platform';
            }
        } catch (error) {
            console.error(error);
            toast.error("لقد حدث خطأ ما !");
            toast.dismiss(loadingToast);
        }
    }

    useEffect(() => {getUser()}, []);

    const signIn = async (e)=>{
        e.preventDefault();
        if(loading) return;
        setLoading(true);
        const loadingToast = toast.loading('جاري تسجيل الدخول');
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if(error) {
                console.log(error);
                setLoading(false);
                toast.error('كلمة سر أو بريد إلكتروني خاطئ');
                toast.dismiss(loadingToast);
                return;
            }
            window.location.href = '/level';
        }catch(error){
            console.log(error);
            setLoading(false);
            toast.dismiss(loadingToast);
        }
    }

    return(
        <>
            {state == 0 ? <></> :
            <div className="login-register">
                <div className="form-container">
                    <form onSubmit={signIn}>
                        <h1>تسجيل الدخول</h1>
                        <p>قم بتسجيل الدخول إلى BCS</p>
                        <div className="input-container">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="البريد الإلكتروني" required onChange={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                        </div>
                        <div className="input-container">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="كلمة المرور" required onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                        </div>
                        <input type="submit" value="تسجيل الدخول" />
                        <div className="question">
                            <p>لا تملك حسابا؟</p>
                            <Link to='/register'>أنشئ واحدا</Link>
                        </div>
                    </form>
                </div>
                <div className="lottie">
                    <DotLottieReact
                        data={require('../JSON/login.json')}
                        loop
                        autoplay
                        />
                </div>
            </div>
            }
        </>
    )
}