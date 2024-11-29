import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <ul>
                <li>
                    <Link to="/#home"><i class="fa-solid fa-home"></i>الرئيسية</Link>
                </li>
                <li>
                    <Link to="/privacy-policy"><i class="fa-solid fa-fingerprint"></i> سياسة الخصوصية</Link>
                </li>
                <li>
                    <Link to="/user-agreement"><i class="fa-solid fa-user-secret"></i> إتفاقية الإستخدام</Link>
                </li>
                <li>
                    <Link target='_blank' to="https://github.com/faresmdh"><i class="fa-brands fa-github"></i>Github</Link>
                </li>
                <li>
                    <Link target="_blank" to="https://play.google.com/store/apps/developer?id=MDH+Apps"><i class="fa-brands fa-google-play"></i>Google Play</Link>
                </li>
            </ul>
            <div className="made">
                صنع بال <i class="fa-solid fa-heart fa-beat-fade"></i> من طرف مداحي فارس 
            </div>
        </footer>
    )
}