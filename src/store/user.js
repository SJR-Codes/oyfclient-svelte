import {baseURL, goFetch, getInit} from "../lib/connect.js";

const userStore = {
  getUser: () => {
    let myInit = getInit();
    let req = '/users/me';
    const request = new Request(baseURL + req, myInit);
    
    return goFetch(request);
  }
};

export default userStore;