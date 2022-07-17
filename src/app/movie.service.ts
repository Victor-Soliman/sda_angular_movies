import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  public add(title:string ,description:string , year:string, director:string){
    let body={
      'title':title,
      'description': description,
      'year': year,
      'director': director
    };
    return this.httpClient.post(`${environment.backendAddress}/movie`,body);
  }

  public getAll(){
    return this.httpClient.get(`${environment.backendAddress}/movie`);
  }

  public delete(id: string){
    return this.httpClient.delete(`${environment.backendAddress}/movie/${id}`);
  }

  public update(id:string ,title:string ,description:string , year:string, director:string){
    let body={
      'id' : id,
      'title':title,
      'description': description,
      'year': year,
      'director': director
    };
    return this.httpClient.patch(`${environment.backendAddress}/movie/${id}`,body);
  }
}
