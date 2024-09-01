<script>
    import ClanEvents from "./components/ClanEvents.svelte";
    import VoteEvents from "./components/VoteEventConditions.svelte";
    import { writable } from "svelte/store";
    import Documentation from "./components/Documentation.svelte";

    const currentPage = writable("documentation");

    const showDocumentation = () => currentPage.set("documentation");

    const showClanEvents = () => currentPage.set("clan-events");

    const showVoteEvents = () => currentPage.set("vote-events");

</script>

<style lang="scss">
    @import "./theme";

    .main-container {
        height: 100vh;
        width: 100vw;
    }

    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        border: 3px solid;
        border-color: transparent transparent $font transparent;
    }

    button {
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
    }
</style>

<div class="main-container">
    <div class="navbar">
        <button on:click={showDocumentation}>Documentation</button>
        <button on:click={showClanEvents}>Clan Events</button>
        <button on:click={showVoteEvents}>Vote Events</button>
    </div>


    {#if $currentPage === "documentation"}
        <Documentation/>
    {:else if $currentPage === "clan-events"}
        <ClanEvents/>
    {:else if $currentPage === "vote-events"}
        <VoteEvents/>
    {/if}

</div>