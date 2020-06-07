<template>
    <div class="cards">
        <GameCard
            v-for="(card, index) in cards"
            :key="card"
            :card="card"
            :is-current="index === 0"
        />
    </div>
</template>

<script>
    import GameCard from "./Gamecard";
    export default {
        components: {
            GameCard
        },
        props: {
            cards: {
                type: Array,
                required: true
            }
        }
    };
</script>
