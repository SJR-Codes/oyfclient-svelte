import {baseURL} from "../lib/connect.js";
import {getInit} from "../lib/connect.js";

const photoStore = {
  getAllPhotos: () => {
    let myInit = getInit();
    let req = ''
    /* if ( category_id != false ) {
      req = "/photosbycat/"  + category_id;
    }
    else { */
    req = "/photos/";
    //}
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

export default photoStore;