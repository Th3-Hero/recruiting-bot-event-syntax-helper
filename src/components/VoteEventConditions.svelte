<script lang="ts">
    import './shared.scss';
    import { type DndEvent, dndzone, type Item } from 'svelte-dnd-action';
    import { flip } from "svelte/animate";
    import { buildCondition, EventType, getItemClass } from "../lib/lib";
    import { onMount } from "svelte";
    import PlayerBlock from "./conditions/blocks/PlayerBlock.svelte";

    let items: Item[] = [
        {id: 1, name: "Mascot NA"},
        {id: 2, name: "or"},
        {id: 3, name: "Mascot EU"}
    ];
    const flipDurationMs = 300;
    const options = ["(", ")", "or"];
    let playerValue: string | null = "";
    let condition: string;
    let validCondition = true;

    const handleDndConsider = (e: CustomEvent<DndEvent>) => {
        items = e.detail.items;
    };

    const handleDndFinalize = (e: CustomEvent<DndEvent>) => {
        items = e.detail.items;
        sortableUpdate();
    };

    const addItem = (name: string | null) => {
        if (name === null) {
            alert("Invalid player. Fields cannot be blank. Player names are between 3 and 24 characters long and contain only letters, numbers, underscores, and dashes.");
            return;
        }
        const newId = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
        items = [...items, {id: newId, name}];
        sortableUpdate();
    };

    const removeItem = (index: number) => {
        items = items.filter((_, i) => i !== index);
        sortableUpdate();
    };

    const copyEventCondition = () => {
        navigator.clipboard.writeText(condition);
        console.log(condition);
    };

    const sortableUpdate = () => {
        try {
            condition = buildCondition(items.map(item => item.name), EventType.VOTE);
            validCondition = true;
        } catch (e: unknown) {
            if (typeof e === "object" && e !== null && "message" in e) {
                condition = String((e as { message: string }).message);
            } else {
                condition = "Unknown error";
            }
            validCondition = false;
        }
    }

    onMount(() => sortableUpdate());
</script>

<div class="page-container">
    <div class="controls">
        <div class="single-condition-button">
            {#each options as option (option)}
                {#if option === "(" || option === ")"}
                    <button class="control-single-button" on:click={() => addItem(option)}>{option}</button>
                {/if}
            {/each}
        </div>
        {#each options as option (option)}
            {#if option !== "(" && option !== ")"}
                <button class="control-single-button" on:click={() => addItem(option)}>{option}</button>
            {/if}
        {/each}

        <div class="control-block">
            <PlayerBlock bind:value={playerValue}/>
            <button class="control-block-add-button" on:click={() => addItem(playerValue)}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>
    </div>

    <div class="container">
        <div class="outer-list-container">
            {#if items.length > 1}
                <div class="fixed-outer-brackets parenthesis">(</div>
            {/if}
            <ul class="sortable-list" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}"
                on:finalize="{handleDndFinalize}">
                {#each items as item, index (item.id)}
                    <li class={getItemClass(item.name)} animate:flip="{{duration: flipDurationMs}}">
                        {item.name}
                        <button class="remove-button" on:click={() => removeItem(index)}>
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    </li>
                {/each}
            </ul>
            {#if items.length > 1}
                <div class="fixed-outer-brackets parenthesis">)</div>
            {/if}
        </div>

        <code class="copy-preview" class:code-disabled={!validCondition}>{condition}</code>

        <button class="copy-button" disabled={!validCondition} on:click={copyEventCondition}>Copy Event Condition
        </button>
    </div>

</div>


<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>