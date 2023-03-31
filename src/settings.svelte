<script>
  import userStore from './store/user.js';
  let userInfo = userStore.getUser();
</script>

<div>
  {#await userInfo}
      <p>Loading......</p>
  {:then user}
    <p>Username: {user.email}</p>
  {:catch error}
      <p style="color: red">Error! {JSON.stringify(error)} </p>
  {/await}
</div>

<style>
  div{margin-bottom: 1em;}
</style>