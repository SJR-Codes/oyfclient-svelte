export const baseURL = "http://localhost:8000";

export function getInit(method="GET", accept="application/json", contentType="application/json", withToken=true, data="" ) {
    let myInit = {
        method: method,
        mode: "cors",
        cache: "default",
        headers: {
            'Accept': accept,
        },
    };

    if ( contentType !== "" ) {
        myInit.headers['Content-Type'] = contentType;
    }
    if ( withToken !== false ) {
        myInit.headers['Authorization'] = "Bearer " + sessionStorage.getItem('token');
    }
    if ( data !== "" ) {
        myInit['body'] = data;
    }

    return myInit;
}
export async function goFetch(request){
    const response = await fetch(request);
    //console.debug("Res: " + response.json())
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();        
}