<script>
  import oyfLogo from '/logos/logo96.png';
</script>

<header>
  <a href="https://github.com/SJR-Codes/OwnYourFiles_foto" target="_blank" rel="noreferrer">
    <img src={oyfLogo} class="logo" alt="OYF Logo" />
  </a>
  <h3>- Svelte client -</h3>
</header>

<style>
  h3 {
    margin-block-start: 0;
    margin-block-end: 1em;
  }
  .logo {
      will-change: filter;
      transition: filter 300ms;
  }
  .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
  