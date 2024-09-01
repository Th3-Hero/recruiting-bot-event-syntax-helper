<script>
    import { writable } from "svelte/store";
    import ClanEventConditionBuilder from "./clan-events/ClanEventConditionBuilder.svelte";
    import ClanListGenerator from "./clan-events/ClanListGenerator.svelte";

    const currentPage = writable("clan-events");

    const showClanEvents = () => currentPage.set("clan-events");
    const showClanList = () => currentPage.set("clan-list");

</script>

<style>
    .tabs {
        margin-bottom: 20px;
    }
</style>

<button class="tabs" on:click={showClanEvents}>Clan Event Builder</button>
<button class="tabs" on:click={showClanList}>Clan Event List Generator</button>


{#if $currentPage === "clan-events"}
    <ClanEventConditionBuilder/>
{:else if $currentPage === "clan-list"}
    <ClanListGenerator/>
{/if}