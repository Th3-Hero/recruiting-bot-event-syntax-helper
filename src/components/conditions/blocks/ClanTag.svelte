<script lang="ts">
    import '../condition-blocks.scss';

    import { isValidClanTag } from "../../../lib/lib";

    export let value: string | null;

    let clanTagInput: string = "";

    const handleUpdate = () => {
        clanTagInput = clanTagInput.trim();
        if (clanTagInput === "" || !isValidClanTag(clanTagInput)) {
            value = null;
            return;
        }
        value = clanTagInput;
    };

</script>

<style>
    input {
        margin: 10px 0 10px 0;
        width: 125px;
    }
</style>

<div class="condition-block">
    <input type="text" class="clan-input" bind:value={clanTagInput} on:change={handleUpdate} placeholder="Enter a clan tag"/>
</div>