<script lang="ts">
    import {type Card} from "../../domain/card/card"
    interface Props {
        card: '';
    }

    let { card }: Props = $props();
</script>

<p>Unknown card: {String(card).toUpperCase()}</p>

<style>
    p {
        color: red;
    }
</style>
