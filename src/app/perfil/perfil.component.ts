import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  perfilForm!: FormGroup;
  mensajeError: { [key: string]: string } = {};

  ngOnInit() {
    this.perfilForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  mostrarMensajeError(claseInput: string, mensaje: string) {
    this.mensajeError[claseInput] = mensaje;
  }

  onSubmit() {
    this.mensajeError = {};

    if (this.perfilForm.invalid) {
      this.mostrarMensajeError('name', 'Nombre requerido');
      this.mostrarMensajeError('email', 'Correo no válido');
      this.mostrarMensajeError('password', 'Contraseña requerida');
      return;
    }

    // El formulario es válido, puedes realizar las acciones necesarias aquí
  }
}
