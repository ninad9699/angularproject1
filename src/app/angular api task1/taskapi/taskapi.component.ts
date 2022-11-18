import { Component } from '@angular/core';
import { Serviceapi4Service } from '../serviceapi4.service';

@Component({
  selector: 'app-taskapi',
  templateUrl: './taskapi.component.html',
  styleUrls: ['./taskapi.component.css']
})
export class TaskapiComponent {
  data:any;

  constructor(private api:Serviceapi4Service) { }

  ngOnInit(): void {
    this.sendData();
    this.updateData();
    this.getData();
    this.getDatabyid();
    this.deleteData();
    
  }
  

sendData(){
  this.data={
    name:'morpheus',
    job:'leader',
  }
  this.api.sendApiData(this.data).subscribe(
    (res:any)=>{
      console.log(res);
      //  console.log(this.data.push(res));
    }
  )
}
updateData(){
  this.data={
    name:'morpheus',
    job:'leader',
  
    
  }
  let id=2
  this.api.updateApiData(this.data,id).subscribe(
    (res:any)=>{
     console.log(res);
    }
  )
}
getData(){
  this.api.getApiData().subscribe(
    (res:any)=>{
      console.log(res.data);
       this.data=res.data;
     
    }
  )
}
getDatabyid(){
  this.api.getApiDataid().subscribe(
    (res:any)=>{
      console.log(res);
    }
  )
}
deleteData(){
  let idd=2;
  this.api.deleteApiData(idd).subscribe(
    (res:any)=>{
      console.log('data deleted');
      console.log(res);
    }
  )
}

}


