import { Component } from '@angular/core';
import { Request2 } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  requests!:Request2[];
  constructor(private requestService:RequestService){}
  ngOnInit():void{
    this.requestService.getRequests().subscribe((data:Request2[])=>{
      this.requests = data;
    })
  }
  create(){
    
  }
}
