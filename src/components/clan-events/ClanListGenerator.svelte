<script lang="ts">
    import '../shared.scss';
    import { EventType, generateListCondition, isValidClanTag } from "../../lib/lib";

    const prompt = `Enter items separated by commas or on separate lines.
Example:
teach, fines, rvng

Example2:
teach
fines
rvng
    `;

    let itemsInput: string = "";
    let condition: string = "Enter clans to see a condition preivew.";
    let validCondition = true;

    const onInputUpdate = () => {
        const itemsArray = itemsInput
            .split(/[\n,]+/)
            .map(item => item.trim())
            .filter(item => item.length > 0);

        // Remove duplicates
        const items = [...new Set(itemsArray)];

        for (const item of items) {
            if (!isValidClanTag(item)) {
                condition = `Invalid clan tag "${ item }". Clan tags are between 2 and 5 characters long and contain only letters, numbers, underscores, and dashes.`
                validCondition = false;
                return;
            }
        }

        try {
            condition = generateListCondition(items, EventType.CLAN);
            validCondition = true;
        } catch (e: unknown) {
            if (typeof e === "object" && e !== null && "message" in e) {
                condition = String((e as { message: string }).message);
            } else {
                condition = "Unknown error";
            }
            validCondition = false;
        }
    };

    const copyEventCondition = () => {
        if (validCondition) {
            navigator.clipboard.writeText(condition);
            console.log(condition);
        }
    };
</script>

<style lang="scss">
    @import '../../theme';

    textarea {
        max-width: 60%;
        width: 60%;
        height: 10em;
        margin-bottom: 25px;
        border: 2px solid $font;
        border-radius: 10px;
        padding: 10px;
        font-family: Inter, sans-serif;
        transition: border-color 0.2s;
    }

    textarea:focus {
        border-color: $orange;
        outline: none;
    }

    .description {
        margin-top: 0;
        margin-bottom: 25px;
    }
</style>

<div class="container">
    <p class="description">Helper for creating a list of clans you wish to receive events for. Saves having to
        <code>or</code> a bunch of clans.</p>
    <textarea bind:value={itemsInput} placeholder={prompt} on:input={onInputUpdate}></textarea>

    <code class="copy-preview" class:code-disabled={!validCondition}>{condition}</code>

    <button class="copy-button" disabled={!validCondition} on:click={copyEventCondition}>Copy Event Condition</button>
</div>

