<template>
    <div id="app">
        <Tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
            <template slot-scope="scope">
                <div
                    class="pic question"
                    :style="{
            'background-image': `url(https://cn.bing.com//th?id=OHR.${scope.data.id}_UHD.jpg&pid=hp&w=720&h=1280&rs=1&c=4&r=0)`
          }"
                >
                    <div>Tu préfères sortir avec</div>
<!--                    <div>{{questions}}</div>-->
                    <div class="answer">
                        <div class="answer1">une fille</div>
                        <div class="answer2">un garçon</div>
                    </div>
                </div>
            </template>
            <img class="like-pointer" slot="like"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png">
            <img class="nope-pointer" slot="nope"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1200px-NYCS-bull-trans-1.svg.png">
        </Tinder>
        <div class="btns">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1200px-NYCS-bull-trans-1.svg.png"
                @click="decide('nope')">
            <img src="https://uploads.codesandbox.io/uploads/user/992079af-4d21-44ac-8853-43908c0d9b78/LjHi-help.png"
                 @click="decide('help')">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png"
                @click="decide('like')">
        </div>
    </div>
</template>

<script>
    import Tinder from "vue-tinder";
    import source from "../bing";

    export default {
        name: "App",
        components: {Tinder},
        data: () => ({
            queue: [],
            offset: 0,
            history: []
        }),
        created() {
            this.mock();
        },
        methods: {
            mock(count = 5, append = true) {
                const list = [];
                for (let i = 0; i < count; i++) {
                    list.push({id: source[this.offset]});
                    this.offset++;
                }
                if (append) {
                    this.queue = this.queue.concat(list);
                } else {
                    this.queue.unshift(...list);
                }
            },
            onSubmit({item}) {
                if (this.queue.length < 3) {
                    this.mock();
                }
                this.history.push(item);
            },
            async decide(choice) {
                if (choice === "help") {
                    window.open("https://github.com/XDayonline/Choice");
                } else if (choice === "nope") {
                    this.$refs.tinder.decide(choice);
                    console.log("1");
                } else if (choice === "like") {
                    this.$refs.tinder.decide(choice);
                    console.log("2");
                } else {
                    this.$refs.tinder.decide(choice);
                }
            }
        },
        props: {
            questions: Object
        }
    };
</script>

<style>
    html,
    body {
        height: 100%;
    }

    body {
        margin: 0;
        background-color: #20262e;
        overflow: hidden;
    }

    #app .vue-tinder {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 23px;
        margin: auto;
        width: calc(100% - 20px);
        height: calc(100% - 23px - 65px - 47px - 16px);
        min-width: 300px;
        max-width: 355px;
    }

    .nope-pointer,
    .like-pointer {
        position: absolute;
        z-index: 1;
        top: 20px;
        width: 64px;
        height: 64px;
    }

    .nope-pointer {
        right: 10px;
    }

    .like-pointer {
        left: 10px;
    }

    .pic {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .question {
        font-size: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        color: white;
        text-shadow: black 0.1em 0.1em 0.2em;
    }

    .answer{
        display: flex;
        justify-content: space-evenly;
        width: inherit;
        font-size: 30px;
        font-weight: 600;
    }

    .answer1{
        color:#fff700;
    }

    .answer2{
        color:black;
    }

    .btns {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        margin: auto;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 300px;
        max-width: 355px;
    }

    .btns img {
        margin-right: 12px;
        box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
        border-radius: 50%;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .btns img:nth-child(2n + 1) {
        width: 68px;
    }

    .btns img:nth-child(2n) {
        width: 50px;
    }

    .btns img:nth-last-child(1) {
        margin-right: 0;
    }
</style>
