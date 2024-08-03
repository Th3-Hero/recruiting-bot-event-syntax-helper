<script>
    import ClanEvents from './components/ClanEvents.svelte';
    import VoteEvents from './components/VoteEvents.svelte';
    import ClanList from './components/ClanList.svelte';
    import { writable } from 'svelte/store';

    const currentPage = writable('home');

    const showClanList = () => currentPage.set('clanList');

    const showClanEvents = () => currentPage.set('clan');

    const showVoteEvents = () => currentPage.set('vote');

</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .buttons {
        margin-bottom: 20px;
    }

    button {
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
    }
</style>

<div class="container">
    <div class="buttons">
        <button on:click={showClanList}>Go to Clan List</button>
        <button on:click={showClanEvents}>Go to Clan Events</button>
        <button on:click={showVoteEvents}>Go to Vote Events</button>
    </div>

    {#if $currentPage === "clanList"}
        <ClanList />
    {:else if $currentPage === 'clan'}
        <ClanEvents />
    {:else if $currentPage === 'vote'}
        <VoteEvents />
    {/if}

</div>