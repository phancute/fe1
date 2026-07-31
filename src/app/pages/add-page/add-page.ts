import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-page',
  imports: [ ReactiveFormsModule],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage{
   addForm : FormGroup;

   constructor(private fb : FormBuilder ,
    private http : HttpClient){
      this.addForm = this.fb.group({
           title: [''],
            quantity:[''],
            cover:[''],
            genre:['']
      })
    }
    submitForm(){
      this.http.post('http://localhost:3000/books', this.addForm.value).subscribe({
        next:()=>{},
error:()=>{}
      })
    }


}