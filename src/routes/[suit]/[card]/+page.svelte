<script lang="ts">
  import type { PageData } from "./$types";
  import CardFound from "$lib/components/cardFound.svelte";
  import CardNotFound from "$lib/components/cardNotFound.svelte";

  export let data: PageData;
  let cardObject = data.card;

  function cardFound() 
    {
    let cards_options = [
      "ATA","AT2","AT3","AT4","AT5","AT6","AT7","AT8","AT9","ATX","ATJ","ATQ","ATK",
      "AZA","AZ2","AZ3","AZ4","AZ5","AZ6","AZ7","AZ8","AZ9","AZX","AZJ","AZQ","AZK",
      "CA","C2","C3","C4","C5","C6","C7","C8","C9","CX","CJ","CQ","CK",
      "CRA","CR2","CR3","CR4","CR5","CR6","CR7","CR8","CR9","CRX","CRJ","CRQ","CRK",
      "SMA","SM2","SM3","SM4","SM5","SM6","SM7","SM8","SM9","SMX","SMJ","SMQ","SMK",
      "VEA","VE2","VE3","VE4","VE5","VE6","VE7","VE8","VE9","VEX","VEJ","VEQ","VEK",
      "JOA","JOB","CORNUCOPIA"]
    let suits_options = ["data-validation-&-encoding","authentication","session-management","authorization","cryptography","cornucopia","wild-card","explanation"]
    return (cards_options.includes(String(cardObject.card).toUpperCase()) && suits_options.includes(cardObject.suit.toLowerCase()))
  }
</script>

<p><a href="/cards">Back to overview</a></p>
{#if cardFound()}
  <CardFound ASVSRoutes={data.ASVSRoutes} cards={data.cards} card={data.card} cardData={data.cardData}  mappingData={data.mappingData} />
{:else}
  <CardNotFound card={data.card} />
{/if}

<style>
  a {
    font-family: var(--font-title);
    color: var(--white);
    margin: 1rem;
  }
</style>
