<script>
  import { baseURL } from "../src/lib/connect.js";
  import { getInit } from "../src/lib/connect.js"; 
  import categoryStore from './store/categories.js';
  import deleteBtn from '/delete.png'
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
  function delCategory(id) {
    console.debug("Delete category: " + id);
    
    let myInit = getInit("DELETE", "application/json", "application/json", true);
    const request = new Request(baseURL + "/categories/" + id, myInit);
    let res = fetch(request)
    .then(function(response) {
      if (!response.ok) {
        if (response.status == 409) {
          errormsg = "Notice! Category not removed.<br>(Photos connected to it)";
          console.error(errormsg)
          return null;
        }
        //throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.debug(response);
      allCategories = categoryStore.getAllCategories();      
    });

  }

</script>

<div class="categorySelect">
  {#await allCategories}
    <p>Loading......</p>
  {:then categories}

    <h3>Categories:</h3>
    <div>
      {#each categories as { id, title }}
        <div class="listdiv">{title}
          <div>
            <img src="{deleteBtn}" alt="Delete category"  on:click={() => delCategory(id)}/>
          </div>          
        </div>
      {/each}
    </div>
    <div>
      <p hidden={!errormsg} style="color: red">{@html errormsg}</p>
      <input bind:value={title} type="text" placeholder="Add New Category">      
      <button class="button" on:click|preventDefault={addCategory}>add</button>
    </div>

  {:catch error}
    <p style="color: red">{error}</p>
  {/await}
</div>

<style>  
  .listdiv{
    width: 80%;
    border: solid 1px #2e2d2d; 
    border-radius: 1em; 
    padding: 0.4em;
    margin: 1em;
    background-color: #b0b5b3;
    display: flex;
  }
  .listdiv div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  input {border: solid 1px #2e2d2d; border-radius: 1em; padding: 1em; background-color: #b0b5b3;}
  img {
    cursor: pointer;
  }
</style>