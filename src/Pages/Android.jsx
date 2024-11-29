import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Leftbar from "../Components/Leftbar";
import s1 from '../Images/s1.png';

export default function Android(){

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return(
        <div className="landing">
            <Header/>
            <div className="page-container">
                <div className="page">
                    <div className="img-container">
                        <img src={s1} className="bg"/>
                        <img src={s1} className="img"/>
                    </div>
                    <h2>إستمتع بتجربة تطبيق BCS على أندرويد</h2>
                    <p>
                        يعتبر تطبيق BCS على نظام التشغيل أندرويد الحل الأمثل في حال كنت تريد الوصول إلى دروسك، سلاسل الأعمال الموجهة، سلاسل الأعمال التطبيقية... دون الحاجة إلى إتصال بالأنترنيت. 
                         وهو يعتبر الحل الأمثل للطلبة الذين يقومون بتحميل دروسهم ثم نسيان مكان تواجدها، حيث يقوم التطبيق بعرض المقاييس والملفات بطريقة منظمة.
                         <br />
                        بالإضافة إلى كل تلك الخصائص يتميز التطبيق بواجهة مستخدم مميزة، سلسة وسهلة الإستعمال .
                    </p>
                    <h3>مزايا التطبيق</h3>
                    <p>
                        <ul>
                            <li>
                                إمكانية إختيار السنة الجامعية وبالتالي عرض المقاييس المرتبطة بتلك السنة.
                            </li>
                            <li>
                                مقاييس مقسمة إلى سداسي أول وسداسي ثاني
                            </li>
                            <li>
                                ملفات مقسمة إلى Cours, TP, TD, Livres.
                            </li>
                            <li>
                                قارئ ملفات PDF مدمج بالتطبيق وبالتالي لا حاجة لأي تطبيق خارجي.
                            </li>
                            <li>
                                3 لغات (عربية، فرنسية وإنجليزية).
                            </li>
                            <li>
                                دعم الوضع المظلم والوضع النهاري.
                            </li>
                        </ul>
                    </p>
                    <h3>تحميل التطبيق</h3>
                    <p>
                        ما عليك سوى النقر على الرابط أدناه لتحميل التطبيق مباشرة من متجر Google Play:
                        <br />
                        <a href="https://play.google.com/store/apps/details?id=m.ify.computersciencebouira">https://play.google.com/store/apps/details?id=m.ify.computersciencebouira</a>
                    </p>
                </div>
                <Leftbar/>
            </div>
            <Footer/>
        </div>
    )
}