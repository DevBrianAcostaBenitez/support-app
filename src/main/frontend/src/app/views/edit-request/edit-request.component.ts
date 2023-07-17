import { Component, Input } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request2 } from 'src/app/models/request.model';
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss'],
})
export class EditRequestComponent {
  request!: Request2;
  @Input() id!: number;
  name: string = '';
  date: Date = new Date();
  subject: string = '';
  description: string = '';
  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute, private router:Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const requestIdParam = params.get('id');
      if (requestIdParam !== null) {
        
        this.id = +requestIdParam;
        this.requestService
          .getRequestbyId(this.id)
          .subscribe((response) => { 
            this.request = response;
            this.populateFormWithRequestData();}
            );
      }
    });
  }

  populateFormWithRequestData() {
    this.name = this.request.name;
    this.subject = this.request.subject;
    this.description = this.request.description;
    this.date = this.request.date;    
  }

  formatDate(date: Date): string {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  }

  saveRequest() {
    let requestToSave = {
      id: 1,
      name: this.name,
      subject: this.subject,
      description: this.description,
      date: this.date,
    };

    this.requestService.updateRequest(this.id, requestToSave).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate([''])
  }
  redirectHome(){
    this.router.navigate(['']);
  }
}
