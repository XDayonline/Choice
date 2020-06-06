<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Question;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    return [
        'ask' => $faker->sentence(3),
        'answer1' => $faker->word,
        'answer2' => $faker->word,
        //'questionnaire_id' => $faker->numberBetween(1,100),
    ];
});
