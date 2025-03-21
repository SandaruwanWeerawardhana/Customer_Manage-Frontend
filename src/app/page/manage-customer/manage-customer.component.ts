import { Component } from '@angular/core';
import Customer from '../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../service/CustomerService';

@Component({
  selector: 'app-manage-customer',
  imports: [CommonModule],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css',
})
export class ManageCustomerComponent {
  customerList: Customer[] = [];

  constructor(private http: HttpClient, private customerService: CustomerService) {
    this.loadCustomer();
  }

  loadCustomer() {
    this.customerService.loadCustomer().subscribe((dataList: Customer[]) => {
      this.customerList=dataList;
      console.log(dataList);
      
    });
  }
}
