<script lang="ts">
    import './shared.scss';
    import { onMount } from "svelte";
    import Sortable from "sortablejs";
    import { isValidClanTag, isValidBrackets } from "./lib";

    let items = ['TEACH', 'or', 'FINES'];
    const options = ['(', ')', 'and', 'or', 'equals'];
    let clanTag = "";
    let sortable: Sortable;

    const addItem = (option: string) => {
        items = [...items, option];
    };

    const addPlayerName = () => {
        if (clanTag.trim() === "") {
            return;
        }
        if (!isValidClanTag(clanTag)) {
            alert("Invalid clan tag. Clan tags are between 2 and 5 characters long and contain only letters, numbers, underscores, and dashes.");
            return;
        }
        items = [...items, clanTag];
        clanTag = "";
    };

    const removeItem = (index: number) => {
        items = items.filter((_, i) => i !== index);
    };

    const copyEventCondition = () => {
        let condition = "";
        for (let item of sortable.toArray()) {
            if (item === "or" || item === "equals") {
                condition += ` ${item} `;
            } else {
                condition += item;
            }
        }
        if (!isValidBrackets(condition)) {
            alert("Invalid brackets. Please make sure every bracket has a matching pair.");
            return;
        }
        let string = `clan matches (${condition})`;
        navigator.clipboard.writeText(string);
        console.log(string);
    };

    const getItemClass = (item: string) => {
        if (item === "(" || item === ")") {
            return "parenthesis";
        } else if (options.includes(item)) {
            return "operator";
        } else {
            return "clan";
        }
    };

    onMount(() => {
        const el: HTMLElement | null = document.getElementById("sortable-list");
        if (el === null) {
            return;
        }
        sortable = Sortable.create(el, {
            animation: 150,
            chosenClass: "chosen",
            dragClass: "drag",
            direction: "horizontal"
        });
    });
</script>


<div class="container">
    <div class="controls">
        <div class="bracket-buttons">
            {#each options as option}
                {#if option === "(" || option === ")"}
                    <button on:click={() => addItem(option)}>{option}</button>
                {/if}
            {/each}
        </div>
        {#each options as option}
            {#if option !== "(" && option !== ")"}
                <button on:click={() => addItem(option)}>{option}</button>
            {/if}
        {/each}
        <input type="text" bind:value={clanTag} placeholder="Enter a clan tag"/>
        <button on:click={addPlayerName}>Add Clan</button>
    </div>

    <ul id="sortable-list">
        {#each items as item, index}
            <li data-id={item} class={getItemClass(item)}>
                {item}
                <button class="remove-button" on:click={() => removeItem(index)}>
                    <span class="material-symbols-outlined">close</span>
                </button>
            </li>
        {/each}
    </ul>
</div>

<button class="copy-button" on:click={copyEventCondition}>Copy Event Condition</button>

<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>