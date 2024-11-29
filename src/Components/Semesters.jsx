import toast from 'react-hot-toast';
import folder from '../Images/folder.png';
import png from '../Images/logo.png';
import { useEffect, useState } from 'react';
import supabase from '../Supabase';
import { Link } from 'react-router-dom';




export default function Semesters(){

    const [modules,setModules] = useState([]);

    const getModules = async ()=>{
        const loadingToast = toast.loading('جاري تحميل المقاييس');
        try{
            const { data, error } = await supabase
                .from('modules')
                .select()
                .eq('level',window.localStorage.getItem('level'));
            if(error) {
                console.log(error);
                toast.dismiss(loadingToast);
                toast.error('فشل تحميل المقاييس');
                return;
            }
            toast.success('تم تحميل المقاييس');
            toast.dismiss(loadingToast);
            console.log(data);
            setModules(data);
        }catch(error){
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error('فشل تحميل المقاييس');
        }
    }

    useEffect(() => {getModules()}, []);

    return(
        <div className="semesters">
            <div className="semester">
                <h3>السداسي الأول</h3>
                <div className="cards">
                    {modules.filter(item => item.semestre === 'S1').map((module,index)=>(
                        <Link to={`/platform/module/${module.id}`} key={index}>
                            <img className='icon' src={module.image}/>
                            <p>{module.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="semester">
                <h3>السداسي الثاني</h3>
                <div className="cards">
                    {modules.filter(item => item.semestre === 'S2').map((module,index)=>(
                        <Link to={`/platform/module/${module.id}`} key={index}>
                            <img className='icon' src={module.image}/>
                            <p>{module.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}