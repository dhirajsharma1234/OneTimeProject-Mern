import Header from "./header";
import Footer from "./footer";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi2 } from "../api/oneTimeApi";

export interface Content {
  content: string;
  status: number;
}

const ViewNote = () => {
  const { token } = useParams<{ token: string | undefined }>();

  console.log("Token: ",token);
  
  const [viewContent, setViewContent] = useState<Content>({ content: "", status: 0 });
  const [showDataView, setShowDataView] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchDataFromApi2(String(token));

        console.log("FETCHED DATA: ",fetchedData);

        if(fetchedData.status === 200) {
            setViewContent(fetchedData);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);

  const showData = () =>{
       setShowDataView(true);
  }

  const copyNoteToClipBoard = async() =>{
    try {
        const copyCon = await navigator.clipboard.writeText(viewContent.content);
        console.log("Copy Content: ",copyCon);
        
        // setCopy(true);
      } catch (error) {
        console.log(error);
        
      }
  }

  return (
    <>
    <Header/>
    {
        (showDataView )? (                
                    <div className="content-data">
                        <div className="content-dt">
                        <p>Remember</p>
                        <ul>
                            <li>You can not retrieve this note again. This note has been removed and destroyed from the system.</li>
                            <li>Copy the contents to a secure location on your computer before closing this page.</li>
                        </ul>
                      </div>
                      <h3>Your Note</h3>
                      <textarea value={viewContent.content} cols={80} rows={25}></textarea><br/>    
                      <button type="button" onClick={copyNoteToClipBoard} className="content-copy-btn">Copy Note To Clipboard</button>
                    </div>
        ): (
            <main className="message-container">
                <div className="message-contain">
                    <h2 className="message-heading">This message will self destruct!</h2>
                    <p>
                        Once viewed you cannot view this note again. If you need access to this
                        information again, please copy it to a secure location.
                    </p>
                    <button type="button" className="message-btn" onClick={showData}>View Note</button>
                </div>
            </main>
   
           )
    }

    <Footer/>
    </>
  );
};

export default ViewNote;
