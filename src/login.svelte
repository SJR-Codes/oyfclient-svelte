<script>
import {baseURL} from "../src/lib/connect.js";
import {getInit} from "../src/lib/connect.js";
import {goFetch} from "../src/lib/connect.js";

import Photos from './photos.svelte';

let user = { loggedIn: false };
let username = '';
let password = '';
let error = '';

async function doLogin() {
  //TODO: think consequences of tampering with history
  /* console.debug("Replacing history")
  history.pushState({ page: 1 }, "out", "");
  history.replaceState({ page: 2 }, "logged in", ""); */

  console.debug("Trying login...")
  if( username == "" || password == "" ) {
    let err = "Enter username and password, please."
    console.error(err);
    error = err;
  }

  const queryParams = { username: username, password: password }
  const formbody = new URLSearchParams(queryParams).toString();
  let myInit = getInit("POST", "application/json", "application/x-www-form-urlencoded", false, formbody );
  const request = new Request(baseURL + "/auth/jwt/login", myInit);
  
  try {
    let res = await goFetch(request);
    if (res) {
      sessionStorage.setItem('token', res.access_token);
      user.loggedIn = true;
    }
  }
  catch (e) {
    console.error(e);
    error = "Error: Username or password incorrect!";
  }
}
</script>

<div id="content" class="oyf-content">
{#if !user.loggedIn }
  <form id="login-form">
    <input bind:value={username} type="text" name="username" id="username" class="text-input" placeholder="Username" autocomplete="username">
    <br><br>
    <input bind:value={password} type="password" name="password" id="password" class="text-input" placeholder="Password" autocomplete="current-password">
    <br><br>
    <button class="button" on:click|preventDefault={doLogin}>Login</button>
  </form>
  <p hidden={!error} style="color: red">{error}</p>
{:else}
  <Photos />
{/if}
</div>