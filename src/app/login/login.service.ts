import { Injectable } from '@angular/core';
import { Login } from './login';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [
    {
      nombre: 'Mariana Portela',
      rol: 'admin',
      email: 'mariana@example.com',
      password: '123456',
      genero: 'Fenenino'
    },
    {
      nombre: 'Estrella Escobar',
      rol: 'cliente',
      email: 'star@gmail.com',
      password: '123456',
      genero: 'Femenino'
    }, 
    {
      nombre: 'Axcel Martinez',
      rol: 'cliente',
      email: 'axcel@gmail.com',
      password: '123456',
      genero: 'Maculino'
    }, 
    {
      nombre: 'Omar Portela',
      rol: 'invitado',
      email: 'omar@gmail.com',
      password: '123456',
      genero: 'Masculino'
    }, 
  ];

  login(credentials: Login): boolean {
    const user = this.users.find((u) => u.email === credentials.email && u.password === credentials.password);
    console.log(user);
    
    if (user) {
      sessionStorage.setItem('usuarios', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getCurrentUser(): User | null {
    const userString = sessionStorage.getItem('usuarios');
    return userString ? JSON.parse(userString) : null;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
  

}
