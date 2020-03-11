import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared/models/cliente.model';
import uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  clientes: Cliente[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getExistingClientsFromLocalStorage();
    console.log(JSON.parse(localStorage.getItem('clientes')));
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required]], // FormControlName
      telefono: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]]
    });
  }


  registerClient(): void {
    if (this.registerForm.invalid) return; // Invalid itera sobre cada atr del obj y va validando si todos son válidos o no.
    const cliente: Cliente = {
      ...this.registerForm.value,
      id: uuid(),
      fechaNacimiento: this.toDate(this.registerForm.get('fechaNacimiento').value)
    };

    this.clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
    // this.registerForm.reset();
    console.log(this.clientes);
  }

  getExistingClientsFromLocalStorage(): void {
    if (localStorage.getItem('clientes')) {
      this.clientes = JSON.parse(localStorage.getItem('clientes'));
      this.clientes.map((c: Cliente) => {
        c.fechaNacimiento = this.toDate(String(c.fechaNacimiento));
        return c;
      });

    }
  }

  toDate(date: string): Date {
    const res: Date = new Date(date);
    return res;
  }

  mostrarName(): void {
    console.log(this.registerForm.get('nombre').value);
  }



}
