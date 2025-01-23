import { Component } from '@angular/core';
 import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';

 @Component({
   selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
 })
export class LoginComponent {
  username = '';
  password = '';

  login() {
   console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
   // Aquí iría la lógica de autenticación
 }
 }