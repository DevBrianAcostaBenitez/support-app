import { Component } from '@angular/core';
import { Request2 } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  name:string = '';
  constructor(private requestService:RequestService){}
  createRequest(){
    
    let requestToSave = {
      id:1,
    name:'Jose',
    subject:'un subject',
    description:'una descripcioin',
    date:new Date()
    };
    this.requestService.createRequest(requestToSave); 
  }

}
