import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import supabase from "../Supabase";
import { Link, useParams } from "react-router-dom";
import pdfIcon from '../Images/pdf.png';

export default function Module(){

    const [pdfs,setPdfs] = useState([]);
    const { id } = useParams();

    function downloadPDF(url, filename) {
        // Fetch the PDF file from the URL
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob(); // Get the response as a Blob
          })
          .then((blob) => {
            // Create a link element
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob); // Create a URL for the blob
            link.download = filename; // Set the desired file name
            document.body.appendChild(link); // Append the link to the document
            link.click(); // Trigger the download
            link.remove(); // Remove the link element
          })
          .catch((error) => {
            console.error('Error downloading the file:', error);
          });
      }

    const getPdfs = async ()=>{
        const loadingToast = toast.loading('جاري تحميل الملفات');
        try{
            const { data, error } = await supabase
                .from('pdfs')
                .select()
                .eq('module',id);
            if(error) {
                console.log(error);
                toast.dismiss(loadingToast);
                toast.error('فشل تحميل الملفات');
                return;
            }
            toast.success('تم تحميل الملفات');
            toast.dismiss(loadingToast);
            console.log(data);
            setPdfs(data);
        }catch(error){
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error('فشل تحميل الملفات');
        }
    }

    useEffect(() => {getPdfs()}, []);

    return(
        <div className="module">
                {pdfs.map((pdf,index)=>(
                    <Link to={pdf.url} key={index} target="_blank">
                        <img className='icon' src={pdfIcon}/>
                        <div className="texts">
                            <p>{pdf.title}</p>
                            <span>{pdf.type}</span>
                        </div>
                    </Link>
                ))}
        </div>
    )
}