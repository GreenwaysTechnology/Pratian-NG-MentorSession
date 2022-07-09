import { Component, OnInit } from '@angular/core';
import { Customer } from '../types/customer.type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ]
})
export class CustomerComponent implements OnInit {

  //customer object
  customer: Customer = {
    id: 1,
    name: 'Subramanian',
    gender: 'Male',
    status: "Available",
    address: {
      city: 'Coimbatore'
    }
  }
  //List 
  //customers:Customer[] = []
  customers: Array<Customer> = [
    {
      id: 1,
      name: 'Subramanian',
      gender: 'Male',
      status: "Available",
      address: {
        city: 'Coimbatore'
      }
    },
    {
      id: 2,
      name: 'Ram',
      gender: 'Male',
      status: "Available",
      address: {
        city: 'Coimbatore'
      }
    },
    {
      id: 3,
      name: 'Geetha',
      gender: 'Female',
      status: "Available",
      address: {
        city: 'Coimbatore'
      }
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
