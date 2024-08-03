<script>
    import './shared.scss';

    const prompt = `Enter items separated by commas or on separate lines.
Example:
teach, fines, rvng

Example2:
teach
fines
rvng
    `;

    let itemsInput = "";

    function copyEventCondition() {
        let itemsArray = itemsInput
            .split(/[\n,]+/)
            .map(item => item.trim())
            .filter(item => item.length > 0);
        let string = `clan matches (${itemsArray.join(" or ")})`;
        navigator.clipboard.writeText(string);
        console.log(string);
    }
</script>

<style lang="scss">
    @import '../theme';

    textarea {
        width: 80%;
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

<p class="description">Helper for creating a list of clans you wish to receive events for. Saves having to
    <code>or</code> a bunch of clans.</p>
<textarea bind:value={itemsInput} placeholder={prompt}></textarea>
<button on:click={copyEventCondition}>Copy Event Condition</button>
