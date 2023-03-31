import {baseURL} from "../lib/connect.js";
import {getInit} from "../lib/connect.js";

const getPhotoStore = {
  getPhoto: (photo_id) => {
    let myInit = getInit();
    let req = ''
    if ( photo_id !== "" ) {
      req = "/photos/"  + photo_id;
    }
    else {
        throw new Error(`Error! ID missing.`);
    }
    const request = new Request(baseURL + req, myInit);
    let apicall = fetch(request)
    .then(function(response) {
      if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });

    return apicall;
  }
};

export default getPhotoStore;