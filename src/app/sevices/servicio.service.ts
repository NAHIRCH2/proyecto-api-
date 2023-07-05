import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RootObject } from '../interfaces/interface';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  rickget(){
    return this.http.get<RootObject>('https://rickandmortyapi.com/api/character')
  }
  
}
