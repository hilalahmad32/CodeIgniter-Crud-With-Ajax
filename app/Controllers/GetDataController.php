<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\Student;

class GetDataController extends BaseController
{
    public function index()
    {
        $students=new Student();
        $datas=$students->findAll();
        $output="";
            foreach($datas as $student){
                $output .="<tr>
                <td>{$student["id"]}</td>
                <td>{$student["name"]}</td>
                <td>{$student["country"]}</td>
                <td>{$student["age"]}</td>
                <td><button class='btn btn-primary' data-id='{$student["id"]}' id='edit' data-toggle='modal' data-target='#editStudent'>Edit</button></td>
                <td><button data-id='{$student["id"]}' id='delete' class='btn btn-danger' >Delete</button></td>
            </tr>";
            }
        echo $output;
    }
}
