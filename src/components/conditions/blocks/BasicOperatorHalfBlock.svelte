<script lang="ts">
    import '../condition-blocks.scss';

    import { isValidClanTag } from "../../../lib/lib";

    export let operator: string = "";
    export let value: string | null;

    let inputOne: string = "";

    const handleUpdate = () => {
        inputOne = inputOne.trim();
        if (inputOne === "") {
            value = null;
            return;
        }
        if (!isValidClanTag(inputOne)) {
            value = null;
            return;
        }

        value = `${operator} ${inputOne})`;
    };

</script>

<div class="condition-block">
    <div class="condition-text">{operator}</div>
    <input type="text" class="clan-input" bind:value={inputOne} on:change={handleUpdate} placeholder="TEACH"/>
</div>