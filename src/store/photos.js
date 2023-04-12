import {baseURL, goFetch, getInit} from "../lib/connect.js";

const photoStore = {
  getAllPhotos: (category_id) => {
    let myInit = getInit();
    let req = ''
    if ( category_id !== "" ) {
      req = "/photosbycat/"  + category_id;
    }
    else {
      req = "/photos/";
    }
    const request = new Request(baseURL + req, myInit);

    return goFetch(request);
  }
};

export default photoStore;