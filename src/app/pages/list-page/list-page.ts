import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-page',
  imports: [RouterLink],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {
    books: any[] = [];
    constructor(private http: HttpClient){}
      ngOnInit() {
        this.getBooks();
      }
  getBooks(){
     this.http.get(`http://localhost:3000/books`).subscribe({
      next: (data: any)=>{
          this.books= data;
      },
      error:()=>{}
    })
  }
  deleteBooks(id: number){
     if(!confirm("chắc xóa"))return
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe({
      next:()=>{
        this.books = this.books.filter(
          (books: any) => books.id ! == id,  
        )
        alert("xóa thành công")
      },
      error: ()=>{
        alert("xóa thất bạn")
      }
    });
  }
    }


