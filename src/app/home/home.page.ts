import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../sevices/servicio.service';
import { Result } from '../interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arrayListaName: Result[] = [];
  filteredArray: Result[] = [];
  textobuscar = '';

  constructor(private service: ServicioService) {}

  ngOnInit() {
    this.service.rickget().subscribe((respuesta) => {
      console.log(respuesta);
      this.arrayListaName = respuesta.results;
      this.filteredArray = this.arrayListaName;
    });
  }

  buscar() {
    const searchText = this.textobuscar.trim().toLowerCase();

    this.filteredArray = this.arrayListaName.filter((result) =>
      result.name.toLowerCase().includes(searchText)
    );
  }
}
