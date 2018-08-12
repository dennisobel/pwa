import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpProvider {
  private offline = {
    bookserviceURL:"http://localhost:3000/bookservice",
    rentalURL:"http://localhost:3000/rental",
    buyspareURL:"http://localhost:3000/buyspare",
    profileURL:"http://localhost:3000/profile",
  }

  private online = {
    bookserviceURL:"https://hidden-depths-95908.herokuapp.com/bookservice",
    rentalURL:"https://hidden-depths-95908.herokuapp.com/rental",
    buyspareURL:"https://hidden-depths-95908.herokuapp.com/buyspare",
    profileURL:"https://hidden-depths-95908.herokuapp.com/profile",    
  }

  constructor(public http: Http) {}

  buyspare(body){
    console.log(body)
    let headers = new Headers()
    headers.append("Accept","application/json")
    headers.append("Content-Type","application/json");
    return this.http.post(this.offline.buyspareURL,body,{headers})
      .map(res => res.json())
  }

  bookservice(body){
    console.log(body)
    let headers = new Headers()
    headers.append("Accept","application/json")
    headers.append("Content-Type","application/json");
    console.log(headers)
    return this.http.post(this.offline.bookserviceURL,body,{headers})
      .map(res => res.json())
  }

  rental(body){
    console.log(body)
    let headers = new Headers()
    headers.append("Accept","application/json")
    headers.append("Content-Type","application/json");
    return this.http.post(this.offline.rentalURL,body,{headers})
      .map(res => res.json())
  }

  postProfile(body){
    let headers = new Headers()
    headers.append("Accept","application/json")
    headers.append("Content-Type","application/json");
    return this.http.post(this.offline.profileURL,body,{headers})
      .map(res => res.json())
  }

}
