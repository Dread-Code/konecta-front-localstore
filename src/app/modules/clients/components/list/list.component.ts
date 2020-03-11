import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input('clientes') clientes: Cliente[];


  constructor() { }

  ngOnInit() {
  }

  getAnoCliente(cliente: Cliente): number {
    const bornDate: Date = cliente.fechaNacimiento;
    const currentDate: Date = new Date();
    return currentDate.getFullYear() - bornDate.getFullYear();
  }

  deleteClient(cliente: Cliente): void {
    this.clientes = this.clientes.filter((c: Cliente) => cliente.id != c.id);
  }

}
