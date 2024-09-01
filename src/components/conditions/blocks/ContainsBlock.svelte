<script lang="ts">
    import '../condition-blocks.scss';

    import { isValidClanTag } from "../../../lib/lib";

    export let condition: string = "";
    export let value: string | null;

    let input: string = "";

    const handleUpdate = () => {
        input = input.trim();
        if (input === "") {
            value = null;
            return;
        }
        let tags: string[] = input.split(",").map(tag => tag.trim());
        for (let tag of tags) {
            if (!isValidClanTag(tag)) {
                value = null;
                return;
            }
        }
        value = `${condition} (${tags.join(", ")})`;
    };

</script>

<style>
    .contains-input {
        width: 100%;
    }
</style>

<div class="condition-block">
    <div class="condition-text">{condition}</div>
    <input type="text" class="clan-input contains-input" bind:value={input} on:change={handleUpdate} placeholder="TEACH, FINES, RVN-G"/>
</div>