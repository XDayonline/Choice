<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionnaireResource;
use App\Http\Resources\QuestionnaireResourceCollection;
use App\Question;
use App\Questionnaire;
use Illuminate\Http\Request;

class QuestionnaireController extends Controller
{
    /**
     * @param Questionnaire $questionnaire
     * @return QuestionnaireResource
     */
    public function show(Questionnaire $questionnaire): QuestionnaireResource
    {
        return new QuestionnaireResource($questionnaire);
    }

    /**
     * @return QuestionnaireResourceCollection
     */
    public function index(): QuestionnaireResourceCollection
    {
        return new QuestionnaireResourceCollection(Questionnaire::all());
    }

    /**
     * @param Request $request
     * @return QuestionnaireResource
     */
    public function store(Request $request)
    {
        $request ->validate([
            'title' => 'required',
        ]);

        $questionnaire = Questionnaire::create($request->all());
        return new QuestionnaireResource($questionnaire);
    }
}
