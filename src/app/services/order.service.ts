import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  
  addOrder(order:Order){
    let newPath = this.apiUrl + "orders/add"
    this.httpClient.post(newPath,order).subscribe()
  }
}
