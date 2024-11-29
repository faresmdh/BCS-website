import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Leftbar from "../Components/Leftbar";
import s2 from '../Images/s2.png';

export default function Source(){
    return(
        <div className="landing">
            <Header/>
            <div className="page-container">
                <div className="page">
                    <div className="img-container">
                        <img src={s2} className="bg"/>
                        <img src={s2} className="img"/>
                    </div>
                    <h2>الكود المصدري لBCS</h2>
                    <p>
                        كل من موقع وتطبيق Bouira Computer Society مفتوح المصدر. حيث يمكنك الحصول على الكود المصدري لكلاهما من على Github وذلك عن طريق الروابط أسفل الصفحة.
                        <br />
                        تم بناء تطبيق الأندرويد عن طريق برنامج Android Studio وبإستعمال لغة Kotlin.
                        كما تم بناء الموقع بإستخدام مكتبة جافاسكريبت ReactJS لبناء واجهات المستخدم.
                        <br />
                        كل من التطبيق والموقع مربوطين بقاعدة بيانات من نوع PostgreSQL، كل هذا تم بفضل Supabase.<br/> Supabase هي عبارة عن Backend as a system مفتوحة المصدر ويمكنك إستضافتها على السيرفر الخاص بك كما أنها مناسبة للأشخاص الذين يودون بناء تطبيقات وبرامج متقدمة.
                        إضغط على الرابط للمزيد من التفاصيل عن Supabase :
                        <br />
                        <a href="https://supabase.com/" target="_blank">https://supabase.com</a>
                        <br />
                        <h3>الروابط</h3>
                        الكود المصدري لتطبيق الأندرويد
                        <br />
                        <a href="https://github.com/faresmdh/BCS" target="_blank">https://github.com/faresmdh/BCS</a>
                        <br />
                        الكود المصدري للموقع
                        <br />
                        <a href="https://github.com/faresmdh/BCS-website" target="_blank">https://github.com/faresmdh/BCS-website</a>

                    </p>
                </div>
                <Leftbar/>
            </div>
            <Footer/>
        </div>
    )
}