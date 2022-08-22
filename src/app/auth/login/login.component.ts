import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.interface';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    codigousuario: [localStorage.getItem('codigousuario') || '', Validators.required],
    claveusuario: ['', Validators.required],
    remember: [false]
  });

  constructor(private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // this.renderButton();
  }

  login() {
    this.usuarioService.login(this.loginForm.value)
      .subscribe(resp => {
        if (this.loginForm.get('remember').value) {
          localStorage.setItem('codigousuario', this.loginForm.get('codigousuario').value);
        } else {
          localStorage.removeItem('codigousuario');
        }
        this.router.navigateByUrl('/');
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });
  }


  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark'
    });
    this.startApp();
  }
  startApp() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '444108463307-v1mi15q12997dnu3q58sivd37cu0a874.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };
  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        this.usuarioService.loginGoogle(id_token).subscribe(
          resp => {
            this.router.navigateByUrl('/');
          }
        );

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
