<script lang="ts">
    import '../condition-blocks.scss';
    import { isValidPlayerName } from "../../../lib/lib";

    export let value: string | null;

    let playerNameInput: string = "";
    let playerRegionSelection: string = "";

    const handleUpdate = () => {
        playerNameInput = playerNameInput.trim();
        playerRegionSelection = playerRegionSelection.trim();
        if (playerNameInput === "" || playerRegionSelection === "" || !isValidPlayerName(playerNameInput)) {
            value = null;
            return;
        }
        value = `${playerNameInput} ${playerRegionSelection}`;
    };

</script>

<style>
    .player-input {
        width: 100%;
        margin: 10px 10px 10px 10px;
    }
</style>

<div class="condition-block">
    <input type="text" class="clan-input player-input" bind:value={playerNameInput} on:change={handleUpdate} placeholder="Mascot"/>
    <select bind:value={playerRegionSelection} on:change={handleUpdate}>
        <option value="" disabled selected>Select region</option>
        <option value="NA">NA</option>
        <option value="EU">EU</option>
        <option value="ASIA">ASIA</option>
    </select>
</div>