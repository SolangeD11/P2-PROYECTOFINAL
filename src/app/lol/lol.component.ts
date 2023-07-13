import { Component } from '@angular/core';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css'],
})
export class LolComponent {
  no() {
    window.location.href = 'recom.html';
  }

  r() {
    window.location.href = 'lol.html';
  }

  ofer() {
    window.location.href = 'oferta.html';
  }

  publi() {
    window.location.href = 'publi.html';
  }

  cont() {
    window.location.href = 'contacto.html';
  }

  usuario() {
    window.location.href = 'perfil.html';
  }

  bg() {
    window.location.href = '/index';
  }

  login() {
    window.location.href = 'index.html';
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
  function si() {
    var usu = (document.getElementById('email') as HTMLInputElement).value;
    var con = (document.getElementById('password') as HTMLInputElement).value;
    if (usu == 'sdelgado11@gmail.com' && con == '12345') {
      window.location.href = 'Lol.html';
    } else {
      alert('No, incorrecto');
    }
  }
});
