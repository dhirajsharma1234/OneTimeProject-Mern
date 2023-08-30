import { FormEvent, useState } from 'react';
import { fetchDataFromApi1 } from '../api/oneTimeApi';
import { useNavigate } from "react-router-dom";

export type ContentData = {
  content: string;
  url:string
}

const ContentAdd = () => {
  const history = useNavigate();
  const [contents,setContents] = useState<ContentData>({ content: '',url:"" });
  // const [copy,setCopy] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const submitContent = async(e: FormEvent<HTMLFormElement>) =>{
    try {
        e.preventDefault();
        setIsLoading(true);

        const addContent = await fetchDataFromApi1({content:contents.content});
        console.log("Content data: ",addContent);
        setContents(addContent);
        
        // history("/getLink");
    } catch (error) {
      console.log("failed: ",error);
    } finally {
      setIsLoading(false);
    }
  }

  const copyContent = async() =>{
    try {
      const copyCon = await navigator.clipboard.writeText(contents.url);
      console.log("Copy Content: ",copyCon);
      
      // setCopy(true);
    } catch (error) {
      console.log(error);
      
    }
  }

  const generateAnotherLink = () =>{
    setContents({ content: '',url:"" });
    history("/");
  }

  return (
    <>
        <main>
            <div className="content">
                <p className='main-para'>What is it?</p>
                <p className='main-para-content'>If you need to send a password or some other form of simple but sensitive information to someone you can not send it over IM or email. These methods are not secure as anyone with little knowledge can intercept this information during transmission. Using 1ty.me as the "middle man" you can safely and securely transfer this data to your recipient. Visit our about or faq page for more information.</p>
            </div>

            <div className="content2">
               
                {/* <Steps/> */}
            </div>

            {isLoading ? (
              <p className='loader-container'><span className="loader"></span></p>
            ) : (
              contents.url ? (
                <div className="url-wrapped">
                  <p className='url-content'>URL: {contents.url} </p>
                  <div className="url-btn">
                    <button type='button' onClick={copyContent} className='copy-content'>Copy Link</button>
                    <button type='button' onClick={generateAnotherLink} className='generate-link'>Generate Another Link</button>
                  </div>
                </div>
              ) : (
                  <form action="" onSubmit={submitContent} className='form-content'>
                      <textarea name="" id="" cols={150} rows={10} value={contents.content} onChange={(e) => setContents({ content:e.target.value,url:"" })}></textarea><br/>
                      <button type='submit' className='form-btn'>Generate Link</button>
                      <p className='privacy-policy'>Read our Privacy Policy page to see that we take your privacy seriously!</p>
                  </form>
              )
            )}
         
           
        </main>
    </>
  )
}

export default ContentAdd