import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    customer:any={
      name:"",
      address:"",
      salary:0.0
    }

    products:any =[];

    constructor(private http:HttpClient){
      this.getProducts();
    }
    //  name:string


    addcustomer(){
        console.log(this.customer);
    }

    getProducts(){
      this.http.get("https://fakestoreapi.com/products").subscribe(data=>{
        console.log(data);
        this.products=data;
      })
    }

}
