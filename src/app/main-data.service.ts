import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  constructor() { }

  data:string[] = ["amit","sumit","manish","ankit"]

  getAllData():string[]{
    return this.data
  }

  getByindex(index:number):string{
    return this.data[index]
  }
}
