import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(`${this.URL}/api/data`)
  }

  getSingleData(id: string | number) {
    return this.http.get(`${this.URL}/api/data/${id}`)
  } 

  createData(data: any) {
    return this.http.post(`${this.URL}/api/data`, data)
  }
}
