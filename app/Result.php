<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $guarded = [];

    protected $fillable = [
        'id',
        'question_id',
        'nb_of_answer1',
        'nb_of_answer2',
        '$percentage_of_answer1',
        '$percentage_of_answer2',
        'total_answers',
    ];
}
