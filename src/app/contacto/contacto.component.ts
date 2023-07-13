import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  r() {
    window.location.href = '/lol';
  }

  ofer() {
    window.location.href = '/oferta';
  }

  cont() {
    window.location.href = '/contacto';
  }

  usuario() {
    window.location.href = '/perfil';
  }

  bg() {
    window.location.href = '/blog';
  }

  login() {
    window.location.href = '/index';
  }

  si() {
    var usu = (document.getElementById('email') as HTMLInputElement).value;
    var con = (document.getElementById('password') as HTMLInputElement).value;
    if (usu == 'sdelgado11@gmail.com' && con == '12345') {
      window.location.href = '/lol';
    } else {
      alert('No, incorrecto');
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const correo = document.getElementById('email') as HTMLInputElement;
  const contraseña = document.getElementById('password') as HTMLInputElement;
  const form = document.getElementById('form') as HTMLFormElement;
  const listInputs = document.querySelectorAll<HTMLElement>('.form-input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
    }
  });

  function validacionForm() {
    let condicion = true;
    listInputs.forEach((element) => {
      element.lastElementChild!.innerHTML = '';
    });

    if (correo.value.length < 1 || correo.value.trim() === '') {
      mostrarMensajeError('email', 'Correo no válido*');
      condicion = false;
    }
    if (contraseña.value.length < 1 || contraseña.value.trim() === '') {
      mostrarMensajeError('password', 'Contraseña no válida');
      condicion = false;
    }
    return condicion;
  }

  function mostrarMensajeError(claseInput: string, mensaje: string) {
    let elemento = document.querySelector(`.${claseInput}`) as HTMLElement;
    elemento.lastElementChild!.innerHTML = mensaje;
  }

  //function enviarFormulario() {
  //form.reset();
  //alert("Iniciando...");
  //}
});
