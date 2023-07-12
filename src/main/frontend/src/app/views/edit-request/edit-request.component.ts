import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent {
  id:number=0;
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
      this.name = this.requestService.name;
      this.type = this.requestService.type;
      this.family = this.requestService.family;
      this.gender = this.requestService.gender;
      this.date = this.formatDate(this.animal.admission);
      if (this.animal.image) {
        this.convertImageUrlToFile(this.animal.image)
          .then(file => {
            this.image = file;
          })
          .catch(error => {
            console.error('Error converting image URL to file:', error);
          });
      }
      console.log(this.animal)
    }
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
    
    /*this.requestService.createRequest(requestToSave).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );*/
  }
}
