import {baseURL} from "../lib/connect.js";
import {getInit} from "../lib/connect.js";

const categoryStore = {
  getAllCategories: () => {
    let myInit = getInit();
    let req = "/categories/";
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

export default categoryStore;