import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Request2 } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  requests!:Request2[];
  requestToSave!:Request2;
  constructor(private requestService:RequestService, private router:Router){}
  ngOnInit():void{
    this.requestService.getRequests().subscribe((data:Request2[])=>{
      this.requests = data;
    })
  }
  create(){
    this.router.navigate(['create']);
  }
  edit(id:number){
    this.router.navigate(['edit/ '+ id]);
  }
}
