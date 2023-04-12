<script>
  import { baseURL } from "../src/lib/connect.js";
  import { getInit } from "../src/lib/connect.js"; 
  import categoryStore from './store/categories.js';
  let allCategories = categoryStore.getAllCategories();
  let title;
  let errormsg;

  function addCategory() {
    console.debug("Add new category: " + title);

    if( !title ) {
        errormsg = "Error! Enter title for new category.";
        console.error(errormsg)
        return null;
    }

    let data = JSON.stringify({"title": title});
    let myInit = getInit("POST", "application/json", "application/json", true, data );
    const request = new Request(baseURL + "/categories/", myInit);
    let res = fetch(request)
    .then(function(response) {
      if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
      }
      errormsg = "";
      title = "";
      allCategories = categoryStore.getAllCategories();      
    });
  }

</script>

<div class="categorySelect">
  {#await allCategories}
    <p>Loading......</p>
  {:then categories}

    <h3>Categories:</h3>
    <ul>
      {#each categories as { id, title }}
        <li>{title}</li>
      {/each}
    </ul>
    <div>
      <p hidden={!errormsg} style="color: red">{errormsg}</p>
      <input bind:value={title} type="text" placeholder="Add New Category">
      <br><br>
      <button class="button" on:click|preventDefault={addCategory}>add</button>
    </div>

  {:catch error}
    <p style="color: red">{error}</p>
  {/await}
</div>

<style>
  div{margin-bottom: 1em;}
  input {border: solid 1px #2e2d2d; border-radius: 1em; padding: 1em; background-color: #b0b5b3;}
</style>