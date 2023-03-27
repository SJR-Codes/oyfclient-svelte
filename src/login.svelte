<script>
    function doLogin() {
        //TODO: think consequences of tampering with history
        /* console.debug("Replacing history")
        history.pushState({ page: 1 }, "out", "");
        history.replaceState({ page: 2 }, "logged in", ""); */

        return false;
    }
</script>

<div id="content" class="oyf-content">
    <form id="login-form">
        <input type="text" name="username" id="username" class="text-input" placeholder="Username" autocomplete="username">
        <br><br>
        <input type="password" name="password" id="password" class="text-input" placeholder="Password" autocomplete="current-password">
        <br><br>
        <button class="button" on:click|preventDefault={doLogin}>Login</button>
    </form>
</div>