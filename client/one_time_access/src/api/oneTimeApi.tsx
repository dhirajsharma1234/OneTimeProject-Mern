export type ContentData = {
    content: string,
}

export const fetchDataFromApi1 = async(content: ContentData) =>{
    try {
        const URL = "http://localhost:8001/api/user/create";
        const fetchData = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ content:content.content })
        });

        const response = await fetchData.json();

        console.log(response);

        return response;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const fetchDataFromApi2 = async(token: string) =>{
    try {   
        const fetchData = await fetch(`http://localhost:8001/api/user/${token}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        const response = await fetchData.json();

        // console.log("Response data: ",response);
        

        return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error.message);
    }
}