<?php

namespace App\Http\Controllers;

use App\Answer;
use App\Http\Resources\AnswerResource;
use App\Http\Resources\AnswerResourceCollection;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    /**
     * @param Answer $answer
     * @return AnswerResource
     */
    public function show(Answer $answer): AnswerResource
    {
        return new AnswerResource($answer);
    }

    /**
     * @return AnswerResourceCollection
     */
    public function index(): AnswerResourceCollection
    {
        return new AnswerResourceCollection(Answer::all());
    }

    /**
     * @param Request $request
     * @return AnswerResource
     */
    public function store(Request $request)
    {
        $request ->validate([
            'question_id' => 'required',
            'answer' => 'required',
        ]);

        $answer = Answer::create($request->all());
        return new AnswerResource($answer);
    }
}
