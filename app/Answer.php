<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $guarded = [];

    protected $fillable = [
        'id',
        'question_id',
        'answer',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function result()
    {
        return $this->hasMany(Result::class);
    }
}
