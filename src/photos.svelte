<script>
  import CategorySelect from './categories.svelte';
  import photoStore from './store/photos.js';
  //import Photo from './photo.svelte';

  let selCategory = "";
  let photo_id = "";

	import Modal from './photoModal.svelte';

	let showModal = false;

  //$: makes line reactive -> if value changes it reacts
  $: listPhotos = photoStore.getAllPhotos(selCategory);

  function getBaseImg(data) {
    let img = "data:image/jpeg;base64," + data;

    return img;
  }

  function showPhoto(id) {    
    photo_id = id;    
    showModal = true;
  }

</script>

<div>
  <CategorySelect bind:category={selCategory}/>
</div>
<div class="photoList">
  {#await listPhotos}
    <p>Loading......</p>
  {:then photos}
    {#each photos as { id, thumbnail }}
    <span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img src="{getBaseImg(thumbnail)}" alt="{id} photo" on:click={() => showPhoto(id)}>
    </span>
    {/each}
  {:catch error}
    <p style="color: red">Error! {JSON.stringify(error)} </p>
  {/await}
</div>

<Modal photoId={photo_id} bind:showModal />

<style>
  .photoList{    
    min-height: 160px;
  }
  span {
		margin: 0.5em;
    will-change: filter;
    transition: filter 300ms;
    cursor: pointer;
  }
  span:hover {
    filter: drop-shadow(0 0 2em #11133aaa);
  }
</style>