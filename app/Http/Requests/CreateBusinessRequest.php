<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateBusinessRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'=>'required|min:6|max:100',
            'password'=>'required|min:3|max:100',
            'description'=>'required',
            'address'=>'required',
            'product'=>'required',
            'date'=>'required',
            'tax_id'=>'required|min:10',
            'avatar'=>'required|mimes:jpeg,jpg,png'
        ];
    }
}
