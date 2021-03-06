import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ContinueUserRecordById(userId: any, user: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {
   }

   loginUser(email:string, password:string){
    const params = new HttpParams()
                .set('email', email)
                .set('password', password);
    return this.http.get("http://localhost:8095/user/login"+"?email="+email+"&password="+password);
  }


  getUserByUserId(id:any){
    return this.http.get("http://localhost:8095/user/getuserById/"+id);
  
  }

 getloginStatus(email:string, password:string){
    return this.http.get("http://localhost:8095/user/logintest?email="+email+"&password="+password);
  }

  getUserIdByToken(token:any){
    return this.http.get("http://localhost:8095/user/getIdByToken/"+token);
  }
  
  getToken(email:string){
    return this.http.get("http://localhost:8095/user/getToken/"+email);
  }

  getUserId(email:string){
    return this.http.get("http://localhost:8095/user/getuserid?email="+email);
  }
  registerUser(userRegistrationModel:any){
    return this.http.post("http://localhost:8095/user/register",userRegistrationModel);
  }

  forgotPasswordUser(email:string, password:string): Observable<any>{
    const params = new HttpParams()
                .set('email', email)
                .set('password', password);
    return this.http.post("http://localhost:8095/user/forgotpassword", params);
  }

  updateUserRecordById(Id:any,user:any){
    return this.http.put("http://localhost:8095/user/update/"+Id,user);
  }
}
