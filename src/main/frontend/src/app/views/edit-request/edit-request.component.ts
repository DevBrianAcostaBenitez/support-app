import { Component, Input } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Request2 } from 'src/app/models/request.model';
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent {
  request!:Request2;
  @Input() id!:number;
  name:string = '';
  date:Date =new Date();
  subject:string = '';
  description:string = '';
  constructor(private requestService:RequestService, private route: ActivatedRoute){

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const requestIdParam = params.get('id');
      if (requestIdParam !== null) {
        this.id = +requestIdParam;
        this.requestService.getRequestbyId(this.id);
        this.populateFormWithRequestData();
      }
    });
  }
  
  populateFormWithRequestData(){
    if (this.requestService) {
      this.name = "";
      this.subject = "";
      this.description = "";""
      this.date = this.request.date;
      
      console.log(this.request)
    }
  }
 
  
  formatDate(date: Date): string {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  }

  saveRequest(){
    
    let requestToSave = {
      id:1,
    name:this.name,
    subject:this.date,
    description:this.description,
    date:new Date()
    };
    
    this.requestService.updateRequest(requestToSave).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
