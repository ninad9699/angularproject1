import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serviceapi4Service {

  constructor(private http:HttpClient) { }
  sendApiData(dt:any){
    return this.http.post('https://reqres.in/api/users',dt);

  }
  updateApiData(dt1:any,id:any){
    return this.http.put('https://reqres.in/api/users/id'+id,dt1);
  }
  getApiData(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }
  getApiDataid(){
    return this.http.get('https://reqres.in/api/users/2')
  }
  deleteApiData(idd:any){
    return this.http.delete('https://reqres.in/api/users/'+idd)

  }
}

