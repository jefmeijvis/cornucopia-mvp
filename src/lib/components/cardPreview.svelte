<script lang="ts">
    import type { Card } from "../../domain/card/card";
    import { cardColor } from "../../domain/card/cardColor";
    import { CardController } from "../../domain/card/cardController";
    export let cardData;
    export let card : Card = {} as Card;

    function getSuitColor(suit : string)
    {
        return cardColor.get(suit) ?? "black";
    }
</script>

<div class="card-render">
    <div class="left" style="background-color:{getSuitColor(card.suit)}">
        <h1 class="property-card-suit">{card?.suitName}</h1>
    </div>
    <div class="right">
        <h1 style="color:{getSuitColor(card.suit)}" class="property-card-number">{card?.cardName ?? "?"}</h1>
        <p class="property-card-description">{(new CardController(cardData)).getCardDescription(card.suit,card.card) ?? "?"}</p>
        <p class="mapping-title">OWASP SCP</p>
        <p class="mapping-value">47, 52</p>
        <p class="mapping-title">OWASP ASVS</p>
        <p class="mapping-value">2.5.2, 7.1.2, 7.1.4, 7.2.1, 8.2.1, 8.2.2, 8.2.3, 8.3.6</p>
        <p class="mapping-title">OWASP AppSensor</p>
        <p class="mapping-value">UT1</p>
        <p class="mapping-title">CAPEC</p>
        <p class="mapping-value">-</p>        
        <p class="mapping-title">SAFECODE</p>
        <p class="mapping-value">28</p>
    </div>
</div>

<style>
    .mapping-title, .mapping-value
    {
        font-size: .5rem;
        margin:0;
        margin-left: .25rem;
        margin-right: .25rem;
    }

    .mapping-title
    {
        font-weight: bold;
    }

    .mapping-value
    {
        border-bottom: 1px rgb(192, 192, 192) solid;
    }

    
    .property-card-suit
    {
        transform: rotate(90deg);
        text-orientation: mixed;
        font-size: 1rem;
        padding-top: .70rem;
        font-weight: bold;
        padding-left: 1rem;
        width: 100%;
        white-space: nowrap;
        color:white;
    }


    .property-card-description
    {
        font-size: .65rem;
        padding: .25rem;
    }
    .property-card-number
    {
        margin:0;
        text-align: right;
        padding-right: .5rem;
        font-weight: bold;
        font-size: 2rem;
    }
    .card-render
    {
        overflow: hidden;
        display: flex;
        width : 100%;
        aspect-ratio: 20/32;
        border-radius: 1.2rem;
        background-position: 50% 50%;
        background-size: 117%;
        transition: var(--transition);
        margin-top: 2rem;
        border: 1px rgb(197, 197, 197) solid;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        background-color: white;
    }

    .card-render:hover
    {
        filter: brightness(105%);
    }

    .left
    {
        width: 15%;
        background: rgb(2,0,36);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(255,255,255,0.3) 100%);
    }

    .right
    {
        width: 85%;
    }
</style>