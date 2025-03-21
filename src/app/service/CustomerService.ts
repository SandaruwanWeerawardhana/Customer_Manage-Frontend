import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Customer from "../model/Customer";

@Injectable({
    providedIn:"root"
})

export class CustomerService{
    constructor(private http:HttpClient){}

    loadCustomer():Observable<Customer[]>{
return this.http.get<Customer[]>("http://localhost:8080/customer/get-all");
    }
}