import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent {
  name:string = '';
  date:Date =new Date();
  subject:string = '';
  description:string = '';
  constructor(private requestService:RequestService){}
  editRequest(){
    
    let requestToSave = {
      id:1,
    name:this.name,
    subject:this.date,
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
  }
}
