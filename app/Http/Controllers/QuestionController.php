<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionnaireResource;
use App\Http\Resources\QuestionResource;
use App\Http\Resources\QuestionResourceCollection;
use App\Question;
use App\Questionnaire;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * @param Question $question
     * @return QuestionResource
     */
    public function show(Question $question): QuestionResource
    {
        return new QuestionResource($question);
    }

    /**
     * @return QuestionResourceCollection
     */
    public function index(): QuestionResourceCollection
    {
        return new QuestionResourceCollection(Question::all());
    }

    /**
     * @param Request $request
     * @return QuestionResource
     */
    /*public function store(Request $request)
    {
        $request ->validate([
            'ask' => 'required',
        ]);

        $question = Question::create($request->all());
        return new QuestionResource($question);
    }*/

    /**
     * @param Questionnaire $questionnaire
     * @return QuestionnaireResource
     */
    public function store(Questionnaire $questionnaire)
    {
        $data = request()->validate([
            'question' => 'required',
            'answers' => 'required'
        ]);

        $question = $questionnaire->questions()->create($data['questions']);
        $question->answers()->createMany($data['answers']);

        return new QuestionnaireResource($questionnaire);
    }
}
