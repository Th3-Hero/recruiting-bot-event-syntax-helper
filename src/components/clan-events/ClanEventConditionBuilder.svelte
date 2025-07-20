<script lang="ts">
    import "../shared.scss";
    import { type DndEvent, dndzone, type Item } from "svelte-dnd-action";
    import { flip } from "svelte/animate";
    import { buildCondition, EventType, getItemClass, isValidClanTag } from "../../lib/lib";
    import { onMount } from "svelte";
    import BasicOperator from "../conditions/blocks/BasicOperator.svelte";
    import BasicOperatorHalfBlock from "../conditions/blocks/BasicOperatorHalfBlock.svelte";
    import ClanTag from "../conditions/blocks/ClanTag.svelte";
    import ContainsBlock from "../conditions/blocks/ContainsBlock.svelte";

    let items: Item[] = [
        {id: 1, name: "TEACH"},
        {id: 2, name: "or"},
        {id: 3, name: "FINES"}
    ];
    const flipDurationMs = 300;
    const options = ["(", ")", "and", "or"];
    let clanTag = "";
    let condition: string;
    let validCondition = true;
    let blockValues = {
        doubleAndOperator: "",
        doubleOrOperator: "",
        halfAndOperator: "",
        halfOrOperator: "",
        containsAll: "",
        containsAny: ""
    };

    const handleDndConsider = (e: CustomEvent<DndEvent>) => {
        items = e.detail.items;
    };

    const handleDndFinalize = (e: CustomEvent<DndEvent>) => {
        items = e.detail.items;
        sortableUpdate();
    };

    const addItem = (name: string | null) => {
        if (name === null || name.trim() === "") {
            alert("Invalid item. Fields cannot be blank.")
            return;
        }
        const newId = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
        items = [...items, {id: newId, name}];
        sortableUpdate();
    };

    const addClanTag = () => {
        if (clanTag.trim() === "") {
            alert("Invalid clan tag. Clan tags cannot be blank.");
            return;
        }
        if (!isValidClanTag(clanTag)) {
            alert("Invalid clan tag. Clan tags are between 2 and 5 characters long and contain only letters, numbers, underscores, and dashes.");
            return;
        }
        addItem(clanTag);
        clanTag = "";
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
            condition = buildCondition(items.map(item => item.name), EventType.CLAN);
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
                {#if option !== "and" && option !== "or"}
                    <button class="control-single-button" on:click={() => addItem(option)}>{option}</button>
                {/if}
            {/each}
        </div>
        <div class="single-condition-button">
            {#each options as option (option)}
                {#if option !== "(" && option !== ")"}
                    <button class="control-single-button" on:click={() => addItem(option)}>{option}</button>
                {/if}
            {/each}
        </div>


        <div class="control-block">
            <ClanTag bind:value={clanTag}/>
            <button class="control-block-add-button" on:click={addClanTag}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>

        <div class="control-block">
            <BasicOperator operator="and" bind:value={blockValues.doubleAndOperator}/>
            <button class="control-block-add-button" on:click={() => addItem(blockValues.doubleAndOperator)}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>
        <div class="control-block">
            <BasicOperator operator="or" bind:value={blockValues.doubleOrOperator}/>
            <button class="control-block-add-button" on:click={() => addItem(blockValues.doubleOrOperator)}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>

        <div class="control-block">
            <BasicOperatorHalfBlock operator="and" bind:value={blockValues.halfAndOperator}/>
            <button class="control-block-add-button" on:click={() => addItem(blockValues.halfAndOperator)}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>
        <div class="control-block">
            <BasicOperatorHalfBlock operator="or" bind:value={blockValues.halfOrOperator}/>
            <button class="control-block-add-button" on:click={() => addItem(blockValues.halfOrOperator)}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>

        <div class="control-block">
            <ContainsBlock condition="any" bind:value={blockValues.containsAny}/>
            <button class="control-block-add-button" on:click={() => addItem(blockValues.containsAny)}>
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>
        <div class="control-block">
            <ContainsBlock condition="all" bind:value={blockValues.containsAll}/>
            <button class="control-block-add-button" on:click={() => addItem(blockValues.containsAll)}>
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

<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>