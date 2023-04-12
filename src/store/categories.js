import {baseURL, goFetch, getInit} from "../lib/connect.js";

const categoryStore = {
  getAllCategories: () => {
    let myInit = getInit();
    let req = "/categories/";
    const request = new Request(baseURL + req, myInit);

    return goFetch(request);
  }
};

export default categoryStore;