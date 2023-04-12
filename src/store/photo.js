import {baseURL, goFetch, getInit} from "../lib/connect.js";

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

    return goFetch(request);
  }
};

export default getPhotoStore;