import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Leftbar from "../Components/Leftbar";
import s3 from '../Images/s3.png';

export default function Resources(){

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return(
        <div className="landing">
            <Header/>
            <div className="page-container">
                <div className="page">
                    <div className="img-container">
                        <img src={s3} className="bg"/>
                        <img src={s3} className="img"/>
                    </div>
                    <h2>المصادر الدراسية</h2>
                    <p>
                        تتوفر المنصة على مصادر دراسية متنوعة، غير أن هاته المصادر هي مخصصة لطلبة اللإعلام الآلي بجامعة البويرة كل الأطوار. إذا كنت طالبا بجامعة أخرى فلا نظمن لك أن هاته المصادر تتماشى مع نظام الدراسة في جامعتك. 
                        <br />
                        تحتوي المنصة حاليا على مصادر تعليمية خاصة بطلبة الإعلام الآلي سنة ثالثلة ليسانس تخصص نظم معلوماتية فقط على أن يتم تعميم باقي التخصصات لاحقا. 
                        <br />
                        إذا كنت تريد أن تصبح أدمين بالمنصة على أن تظيف المقاييس التي تدرسها مع الملفات الخاصة بها لا تترد في التواصل معي عبر ركن إتصل بنا.
                    </p>
                </div>
                <Leftbar/>
            </div>
            <Footer/>
        </div>
    )
}