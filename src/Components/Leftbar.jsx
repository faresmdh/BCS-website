import { Link } from "react-router-dom";
import github from '../Images/github.png';

export default function Leftbar(){
    return(
        <div className="leftbar">
            <div className="card">
                <h2>روابط مهمة</h2>
                <ul>
                    روابط داخل الموقع
                    <li><Link to='/'><i class="fa-solid fa-house"></i>الصفحة الرئيسية</Link></li>
                    <li><Link to='/privacy-policy'><i class="fa-solid fa-fingerprint"></i>سياسة الخصوصية</Link></li>
                    <li><Link to='/user-agreement'><i class="fa-solid fa-user-secret"></i> إتفاقية الإستخدام</Link></li>
                    <li><Link to='/android-app'><i class="fa-brands fa-android"></i> التطبيق على أندرويد</Link></li>
                    <li><Link to='/source-code'><i class="fa-brands fa-github-alt"></i>الكود المصدري</Link></li>
                    <li><Link to='/resources'><i class="fa-solid fa-file-pdf"></i>المصادر الدراسية</Link></li>
                    روابط خارجية
                    <li><Link to='https://github.com/faresmdh' target="_blank"><i class="fa-brands fa-github"></i>صفحتي على Github</Link></li>
                    <li><Link to='https://play.google.com/store/apps/developer?id=MDH+Apps' target="_blank"><i class="fa-brands fa-google-play"></i>حسابي على Google Play</Link></li>
                </ul>
            </div>
            <div className="card">
                <h2>ساهم في تطوير المنصة</h2>
                <Link to='https://github.com/faresmdh' target="_blank"><img src={github} /></Link>
            </div>
        </div>
    )
}