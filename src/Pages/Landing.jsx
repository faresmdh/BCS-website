import './landing.css';
import landing1 from '../Images/landing1.png';
import s1 from '../Images/s1.png';
import s2 from '../Images/s2.png';
import s3 from '../Images/s3.png';
import fares from '../Images/fares.jpg';
import qr1 from '../Images/qr1.png';
import qr2 from '../Images/qr2.png';
import qr3 from '../Images/qr3.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import supabase from '../Supabase';

export default function Landing(){

    const location = useLocation();
    const [isSending,setIsSending] = useState(false);
    const [firstname,setFirstname] = useState(null);
    const [lastname,setLastname] = useState(null);
    const [email,setEmail] = useState(null);
    const [message,setMessage] = useState(null);
      
    useEffect(() => {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    }
    }, [location]);

    const sendMessage = async (e)=>{
        e.preventDefault();
        if(isSending){
            return;
        }
        const loadingToast = toast.loading('جاري إرسال الرسالة...');
        try{
            const { error } = await supabase
                .from('messages')
                .insert({ name: firstname + ' ' + lastname , email:email , message:message });
            if(error){
                toast.dismiss(loadingToast);
                toast.error('نعتذر لقد حدث خطأ ما !');
                console.log(error);
                return;
            }
            document.getElementById('contact-form').reset();
            toast.dismiss(loadingToast);
            toast.success('تم إرسال الرسالة بنجاح');
        }catch(error){
            toast.dismiss(loadingToast);
            loadingToast.dismiss();
            toast.error('نعتذر لقد حدث خطأ ما !');
        }
    }

    

    return(
        <div className={"landing"}>
            <Header/>
            <div className="page1" id='home'>
                <div className="texts">
                    <h2>Bouira Computer Society</h2>
                    <p>مرحبا بك في منصة BCS، المنصة تتيح عددا من المراجع التي تفيد طلبة الإعلام الآلي بجامعة آكلي محند أولحاج بالبويرة.</p>
                    <button onClick={()=>{
                        window.location.href = '/login';
                    }}>دخول </button>
                </div>
                <div className="image-container">
                    <img src={landing1}/>
                </div>
            </div>
            <div className="page2" id='about'>
                <h2>عن BCS</h2>
                <p>توفر BCS الخدمات التالية</p>
                <ul>
                    <li>
                        <img src={s1}/>
                        <h3>تطبيق أندرويد</h3>
                        <p>يمكنك الحصول على تطبيق BCS على نظام التشغيل أندرويد من خلال متجر التطبيقات Google Play، أو بالتوجه مباشرة إلى ركن تحميل.</p>
                        <Link to="/android-app"><i class="fa-regular fa-hand-point-left"></i>إقرأ المزيد</Link>
                    </li>
                    <li>
                        <img src={s2}/>
                        <h3>الكود المصدري</h3>
                        <p>كل من تطبيق وموقع BCS هو مفتوح المصدر، ويمكن لأي شخص الحصول على الكود المصدري الخاص بهما.</p>
                        <a href="/source-code"><i class="fa-regular fa-hand-point-left"></i>إقرأ المزيد</a>
                    </li>
                    <li>
                        <img src={s3}/>
                        <h3>مصادر دراسية</h3>
                        <p>توفر المنصة مجموعة واسعة من المصادر الدراسية لطلبة الإعلام الآلي بجامعة آكلي محند أولحاج بالبويرة لكل السنوات الجامعية.   </p>
                        <a href="/resources"><i class="fa-regular fa-hand-point-left"></i>إقرأ المزيد</a>
                    </li>
                </ul>
            </div>
            <div className="page4" id='dev'>
                <div className="texts">
                    <h2>عن المطور</h2>
                </div>
                <div className="developer">
                    <div className="img-container">
                        <img src={fares}/>
                    </div>
                    <div className="texts">
                        <span>مرحبا، أنا :</span>
                        <h3>مداحي فارس</h3>
                        <p>24 سنة، طالب إعلام آلي بجامعة البويرة، مطور تطبيقات أندرويد، مطور تطبيقات ويب.</p>
                        <a href='#dev' onClick={()=>{
                            toast.success('قريبا');
                        }}>Portfolio</a>
                    </div>
                </div>
            </div>
            <div className="page3" id='contact'>
                <h2>إتصل بنا</h2>
                <p>لأي أسئلة، إستفسارات أو إقتراحات لا تتردد في التواصل معنا</p>
                <form id="contact-form" onSubmit={(e)=>{sendMessage(e)}}>
                    <input onChange={(e)=>setFirstname(e.target.value)} required type="text" placeholder="الإسم"/>
                    <input onChange={(e)=>setLastname(e.target.value)} required type="text" placeholder="اللقب"/>
                    <input onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="البريد الإلكتروني"/>
                    <textarea onChange={(e)=>setMessage(e.target.value)} required placeholder="محتوى الرسالة"></textarea>
                    <input type="submit" value="إرسال"/>
                </form>
            </div>
            <div className="page4" id='download'>
                <h2>تحميل</h2>
                <p>احصل على تطبيق BCS والكود المصدري</p>
                <ul>
                    <li>
                        <img src={qr1}/>
                        <Link to="https://play.google.com/store/apps/details?id=m.ify.computersciencebouira">تحميل من جوجل بلاي</Link>
                    </li>
                    <li>
                        <img src={qr2}/>
                        <Link to="https://github.com/faresmdh/BCS">الكود المصدري للتطبيق من جيتهاب</Link>
                    </li>
                    <li>
                        <img src={qr3}/>
                        <Link to="https://github.com/faresmdh/BCS-website">الكود المصدري للموقع من جيتهاب</Link>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}