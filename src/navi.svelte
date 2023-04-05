<script>
  import { baseURL } from "../src/lib/connect.js";
  import { getInit } from "../src/lib/connect.js";  
  import { loggedIn } from './store/misc.js';

  import Categories from './categories_setting.svelte';
  import CategorySelect from './categories.svelte';
  let selCategory = "";

  import Modal from './Modal.svelte';
	let showModal = false;
  let handle; //str

  function doShowModal(handel) {
    handle = handel;
    showModal = true;
  }
  function closeModal() {
		showModal = false;
	}

  let files;
  let error;
  let success;

  $: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(files);

		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}

  async function doUpload() {
    if( !files ){
      error = 'Select file to upload, pretty please!';
      return false;
    }
    if( selCategory == '' ){
      error = 'Select category for photo, pretty please!';
      return false;
    }
    //const queryParams = { "upfile": upfile, "category_id": selCategory }
    //const form = new URLSearchParams(queryParams).toString();

    //console.debug("Upfile: " + JSON.stringify(files[0]));
    //console.debug("Category: " + selCategory);

    let form = new FormData();
    form.append('upfile', files[0] /*, optional filename */);
    form.append('category_id', selCategory);
    console.debug("Post form: ");
    // Display the values
    for (const value of form.values()) {
      console.debug(value);
    }

    /* const upload = fetch('http://localhost:8000/upload', {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + sessionStorage.getItem('token'),
      body: form
    }).then((response) => response.json()).then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); */
    
    //TODO: error checking needed here...
    let myInit = getInit("POST", "application/json", "", true, form);
    const request = new Request(baseURL + "/upload/", myInit);
    let res = await fetch(request);

    console.debug(JSON.stringify(res));
    //await getPhoto(res.id);
    success = 'Photo uploaded very sucessfully!';
  }

</script>

<footer>
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="fakelink" on:click={() => doShowModal("upload")}>Upload</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="fakelink" on:click={() => doShowModal("settings")}>Settings</span>
    </p>
</footer>

{#if showModal && handle == "upload" }
  <Modal on:close={closeModal} bind:showModal>
  <div slot="header">
    <h3>Upload new photo:</h3>
  </div>
  {#if error}
  <div class="error">{error}</div>
  {:else if success }
  <div class="success">{success}</div>
  {/if}
  <div>
    <form action="" id="up-form">
      <input bind:files type="file" class="text-input" accept="image/*"><br>
      <br>
      <CategorySelect bind:category={selCategory}/>
      <br>
      <button class="button" on:click|preventDefault={doUpload}>Send</button>
    </form>
  </div>
  </Modal>
{:else if showModal && handle == "settings" }
  <Modal on:close={closeModal} bind:showModal>
    <div slot="header">
      <h3>Settings:</h3>
    </div>
    <div>
      <Categories />
    </div>
  </Modal>
{/if}

<style>
  p {margin: 0 1em 0;}
  footer {border-top: 1px solid #b0b5b3; margin: 1em; padding: 1em 0}
  .fakelink {
    border-radius: 4em;
    font-size: 1rem;
    background-color: #b0b5b3;
    padding: 1em 1em;
    margin: 0 1em 0;
    border: none;
  }
  .fakelink {
    will-change: filter;
    transition: filter 300ms;
    cursor: pointer;
  }
  .fakelink:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .error, .success {border-radius: 1em; margin-top: 1em; padding: 0.5em 1em;}
  .error{background-color: #e2233c;}
  .success{background-color: #238860;}
</style>