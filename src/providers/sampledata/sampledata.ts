declare function require(url: string);
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class SampledataProvider {
  private products = require('../products.json')
  

  constructor(public http: Http) { }

  

  spareTypes(){
    return [
      "Excavator",
      "Backhoe Loader",
      "Motor Grader",
      "Roller/Compactor"  
    ]
  }

  spareSubTypes(){
    return [
      "CX2010B",
      "CX290B",
      "CX350B",
      "CX470B"
    ]
  }

  spareSubSubTypes(){
    return [
      "Service Kit",
      "Oil Filter",
      "Fuel Filter",
      "Water Separator",
      "Air Filter",
      "Transmission Filter"
    ]
  }

  productsJson(){
    return this.products
  }

}


