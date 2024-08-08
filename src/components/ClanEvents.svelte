<script>
    import { writable } from "svelte/store";
    import ClanEventConditions from "./clan-events/ClanEventConditions.svelte";
    import ClanList from "./clan-events/ClanList.svelte";

    const currentPage = writable("clan-events");

    const showClanEvents = () => currentPage.set("clan-events");
    const showClanList = () => currentPage.set("clan-list");

</script>

<style>
    .tabs {
        margin-bottom: 20px;
    }
</style>

<button class="tabs" on:click={showClanEvents}>Clan Events</button>
<button class="tabs" on:click={showClanList}>List Generator</button>


{#if $currentPage === "clan-events"}
    <ClanEventConditions/>
{:else if $currentPage === "clan-list"}
    <ClanList/>
{/if}