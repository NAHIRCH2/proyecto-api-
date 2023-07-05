import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../sevices/servicio.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detallesrick',
  templateUrl: './detallesrick.page.html',
  styleUrls: ['./detallesrick.page.scss'],
})
export class DetallesrickPage implements OnInit {
  idcentral:any 
  detallpersonaje:any
  constructor(private service: ServicioService,private activatedRoute:ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.idcentral=this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.idcentral).subscribe(respuesta =>{
      this.detallpersonaje=respuesta
    })
  }
}