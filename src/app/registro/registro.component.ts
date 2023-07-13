import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from 'src/app/user.service';
import {FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  celular: string = '';
  contrasenia: string = '';
  contrasenia2: string = '';
  terminosYcondiciones: boolean = false;
  mensajeError: { [key: string]: string } = {};

  enviarFormulario() {
    if (this.validacionForm()) {
      // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
      console.log('¡Formulario válido!');
      alert('Te has registrado correctamente')
    } else {
      console.log('Error');
    }
  }

  validacionForm(): boolean {
    this.mensajeError = {};

    if (this.nombre.length < 1 || this.nombre.trim() === '') {
      this.mostrarMensajeError('myname', 'Nombre no válido*');
      return false;
    }
    if (this.apellidos.length < 1 || this.apellidos.trim() === '') {
      this.mostrarMensajeError('surname', 'Apellido no válido');
      return false;
    }
    if (this.correo.length < 1 || this.correo.trim() === '') {
      this.mostrarMensajeError('email', 'Correo no válido*');
      return false;
    }
    if (
      this.celular.length !== 9 ||
      this.celular.trim() === '' ||
      isNaN(Number(this.celular))
    ) {
      this.mostrarMensajeError('mobile', 'Celular no válido*');
      return false;
    }
    if (this.contrasenia.length < 1 || this.contrasenia.trim() === '') {
      this.mostrarMensajeError('password', 'Contraseña no válida*');
      return false;
    }
    if (this.contrasenia2 !== this.contrasenia) {
      this.mostrarMensajeError('repeatPassword', 'Error en la contraseña*');
      return false;
    }
    if (!this.terminosYcondiciones) {
      this.mostrarMensajeError('termsAndConditions', 'Debe aceptar*');
      return false;
    }

    return true;
  }
  
  mostrarMensajeError(claseInput: string, mensaje: string) {
    this.mensajeError[claseInput] = mensaje;
  }
}
