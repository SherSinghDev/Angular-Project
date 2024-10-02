import { Component, input, Input,inject } from '@angular/core';
import { MainDataService } from '../main-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  // @Input() item!:{imgSrc:string,title:string}
  @Input() item!:any
  realData:string[] = []
  
  myData:MainDataService = inject(MainDataService)


  constructor(){
    this.realData = this.myData.getAllData()
  }

  byId(index:number){
    return this.myData.getByindex(index)
  }

  getFunction:Function = this.byId


}
