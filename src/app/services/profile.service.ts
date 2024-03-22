import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Profile} from "../models/profile.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(id: number):Observable<Profile>{
    return this.http.get<Profile>(`${environment.apiUrl}/profile/user/${id}`)
  }

  addProfile(profile: Profile):Observable<Profile>{
    return this.http.post<Profile>(`${environment.apiUrl}/profile`, profile)
  }
}
