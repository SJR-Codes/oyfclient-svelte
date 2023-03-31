import {baseURL} from "../lib/connect.js";
import {getInit} from "../lib/connect.js";

const userStore = {
  getUser: () => {
    let myInit = getInit();
    let req = '/users/me';
    const request = new Request(baseURL + req, myInit);
    let apicall = fetch(request)
    .then(function(response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
/*     .then(function(data) {
      console.log(data);
      return data;
    }) */
    ;

    return apicall;
  }
};

export default userStore;