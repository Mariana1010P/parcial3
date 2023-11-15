import { Component } from '@angular/core';

import { Login } from './login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup
  user: Login = new Login()
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }


  ngOnInit() {
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(5)]]
    })

  }

  extractData() {
    this.user.email = this.loginForm.get("email")?.value
    this.user.password = this.loginForm.value.password
  }

  login() {
    if (this.loginForm.valid) {
      this.extractData()
      if (this.loginService.login(this.user)) {
        console.log('Inicio de sesión exitoso');
        this.router.navigateByUrl('dashboard')
      } else {
        console.log('Credenciales incorrectas');
      }
    }
  }


}
