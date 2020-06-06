<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Question</div>

                    <div class="card-body">
                        <Vue2InteractDraggable
                            @draggedRight="draggedRight"
                            :interact-max-rotation="15"
                            :interact-out-of-sight-x-coordinate="500"
                            :interact-x-threshold="200"
                        >
                            <div>
                                <h3>Drag me!</h3>
                            </div>
                        </Vue2InteractDraggable>
                        <vue-swing
                            @throwout="throwout"
                            @throwin="throwin"
                            :config="config"
                        >
                            <div class="box">JETTE MOI !!</div>
                        </vue-swing>
                        <ul>
                            <li v-for="question in questions.data" :key="question.id">
                                Question : {{ question.ask }}
                                Réponses : {{ question.answer1 }} ou {{ question.answer2 }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('ExampleComponent mounted.')
        },
        props: {
            questions: Object
        }
    }
</script>
