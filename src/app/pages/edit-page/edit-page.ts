import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-edit-page',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css',
})
export class EditPage {
   addForm: FormGroup;
   id: any;
    constructor(
      private fb: FormBuilder,
      private http:  HttpClient,
      private route: ActivatedRoute
    ){
      this.addForm = this.fb.group({
        title: [''],
        quantity:[''],
        cover:[''],
        genre:['']
      })
    }
    ngOnInit(){
      this.id = this.route.snapshot.params['id'];
      this.http.get(`http://localhost:3000/books/` + this.id).subscribe({
        next: (data)=>{
          this.addForm.patchValue(data)
        },
        error: ()=>{},
      })
    }
    submitForm(){
  this.http.put('http://localhost:3000/books/'+ this.id, this.addForm.value).subscribe({
    next:()=>{
    alert('thành công')
    },
    error:()=>{
    }
  })
    }
}
