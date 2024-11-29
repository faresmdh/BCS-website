import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "../Supabase";
import { useEffect, useState } from "react";

export default function Register(){

    const [state,setState] = useState(0);
    const [loading,setLoading] = useState(false);
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [cPassword,setCpassword] = useState(null);

    const getUser = async ()=>{
        const loadingToast = toast.loading('يرجى الإنتظار');
        try {
            const { data } = await supabase.auth.getUser();
            if(!data.user){
                toast.dismiss(loadingToast);
                setState(1);
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

    const register = async (e)=>{
        e.preventDefault();
        if(loading) return;
        if(name.length < 6){
            toast.error('إسم غير صالح');
            return;
        }
        if(password != cPassword){
            toast.error('كلمتا السر غير متطابقتين');
            return;
        }
        setLoading(true);
        const loadingToast = toast.loading('جاري إنشاء الحساب');
        try{
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            if(error) {
                console.log(error);
                setLoading(false);
                toast.error('نعتذر لقد حدث خطأ ما');
                toast.dismiss(loadingToast);
                return;
            }
            const { error:insertError } = await supabase
                .from('students')
                .insert({ name: name, email: email });
            
            if(insertError){
                console.log(error);
                setLoading(false);
                toast.error('حدث خطأ أثناء محاولة حفظ معلوماتك');
                toast.dismiss(loadingToast);
                const { error } = await supabase.auth.signOut()
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
        <div className="login-register">
            <div className="lottie">
                <DotLottieReact
                    data={require('../JSON/register.json')}
                    loop
                    autoplay
                    />
            </div>
            <div className="form-container">
                <form onSubmit={register}>
                    <h1>إنشاء حساب</h1>
                    <p>قم بإنشاء حساب على BCS</p>
                    <div className="input-container">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="الإسم الكامل" required onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="input-container">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="البريد الإلكتروني" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="input-container">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder="كلمة المرور" required onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="input-container">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder="تأكيد كلمة المرور" required onChange={(e)=>{setCpassword(e.target.value)}}/>
                    </div>

                    <input type="submit" value="إنشاء الحساب" />
                    <div className="question">
                        <p>تملك حسابا بالفعل؟</p>
                        <Link to='/login'>سجل دخولك</Link>
                    </div>
                </form>
            </div>
        </div>
        
    )
}