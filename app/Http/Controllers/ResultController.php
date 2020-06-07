<?php

namespace App\Http\Controllers;

use App\Answer;
use App\Http\Resources\QuestionResource;
use App\Http\Resources\QuestionResourceCollection;
use App\Http\Resources\ResultResource;
use App\Http\Resources\ResultResourceCollection;
use App\Question;
use App\Result;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Array_;
use PhpParser\Node\Expr\Cast\Object_;
use PHPUnit\Framework\MockObject\Rule\InvokedAtIndex;

class ResultController extends Controller
{
    /**
     * @param Result $result
     * @return ResultResource
     */
    public function show(Result $result):ResultResource
    {
        return new ResultResource($result);
    }

    /**
     * @return ResultResourceCollection
     */
    public function index(): ResultResourceCollection
    {
        return new ResultResourceCollection(Result::all());
    }

    /**
     * @param Request $request
     * @return ResultResource
     */
    /*public function store(Request $request)
    {
        $request ->validate([
            'question_id' => 'required',
            'nb_of_answer1' => 'required',
            'nb_of_answer2' => 'required',
            'percentage_of_answer1' => 'required',
            'percentage_of_answer2' => 'required',
            'total_answers' => 'required',
        ]);

        $result = Result::create($request->all());
        return new ResultResource($result);
    }*/

    public function store(Request $request)
    {
        $request ->validate([
            'question_id' => 'required',
        ]);

        $total_answers = Answer::all()->where('question_id','=',$request->input('question_id'))->count();
        $nb_of_answer1 = Answer::all()->where('question_id','=',1)->where('answer','=',1)->count();
        $nb_of_answer2 = Answer::all()->where('question_id','=',1)->where('answer','=',2)->count();
        $percentage_of_answer1 = ($nb_of_answer1 / $total_answers)*100;
        $display_percentage_of_answer1 = $percentage_of_answer1." %";
        $percentage_of_answer2 = ($nb_of_answer2 / $total_answers)*100;
        $display_percentage_of_answer2 = $percentage_of_answer2." %";

        $result = Result::create([
            'question_id'=> 1,
            'nb_of_answer1'=> $nb_of_answer1,
            'nb_of_answer2'=> $nb_of_answer2,
            '$percentage_of_answer1'=> $display_percentage_of_answer1,
            '$percentage_of_answer2'=> $display_percentage_of_answer2,
            'total_answers'=> $total_answers,
        ]);

        return new ResultResource($result);
    }
}
