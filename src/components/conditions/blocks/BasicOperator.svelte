<script lang="ts">
    import '../condition-blocks.scss';

    import { isValidClanTag } from "../../../lib/lib";

    export let operator: string = "";
    export let value: string | null;

    let inputOne: string = "";
    let inputTwo: string = "";

    const handleUpdate = () => {
        inputOne = inputOne.trim();
        inputTwo = inputTwo.trim();
        if (inputOne === "" || inputTwo === "") {
            value = null;
            return;
        }
        if (!isValidClanTag(inputOne) && !isValidClanTag(inputTwo)) {
            value = null;
        }
        value = `(${inputOne} ${operator} ${inputTwo})`;
    };

</script>

<div class="condition-block">
    <input type="text" class="clan-input" bind:value={inputOne} on:change={handleUpdate} placeholder="TEACH"/>
    <div class="condition-text">{operator}</div>
    <input type="text" class="clan-input" bind:value={inputTwo} on:change={handleUpdate} placeholder="FINES"/>
</div>