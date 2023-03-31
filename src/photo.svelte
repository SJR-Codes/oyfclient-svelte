<script>
  export let photo_id = "";
  import photoStore from './store/photo.js';
  //export let photo_id = "";
  let photo;

  //$: makes line reactive -> if value changes it reacts
  if( photo_id != "" ) {
    photo = photoStore.getPhoto(photo_id);
    console.debug("Photo fetched...")
  }
  function getBaseImg(data) {
    console.debug("Base64: " + data);
    let img = "data:image/jpeg;base64," + data;

    return img;
  }
</script>
<div class="photo">
  {#await $photo}
    <p>Loading......</p>
  {:then res}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="{getBaseImg(res)}" alt="photo">
  {:catch error}
    <p style="color: red">Error! {JSON.stringify(error)} </p>
  {/await}
</div>

<style>
  
</style>