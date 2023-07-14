import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Request2 } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  name:string = '';
  date:Date =new Date();
  subject:string = '';
  description:string = '';
  constructor(private requestService:RequestService,private router:Router){}
  createRequest(){
    
    let requestToSave = {
      id:1,
    name:this.name,
    subject:this.subject,
    description:this.description,
    date:new Date()
    };
    this.requestService.createRequest(requestToSave).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['']);
  }
  redirectHome(){
    this.router.navigate(['']);
  }
  reset(){
    this.name = '';
    this.date =new Date();
    this.subject = '';
    this.description = '';
  }

}
