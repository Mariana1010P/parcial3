export class Utils {
    static getRole(): string {
      const usuario = JSON.parse(sessionStorage.getItem('usuarios')!)
      if (usuario) {
        return usuario.role
      } else {
        return ''
      }
    }
  
    static isRole(role: string): boolean {
      const usuarioString = sessionStorage.getItem('usuarios');
      
      if (usuarioString) {
        const usuario = JSON.parse(usuarioString);
        return usuario && usuario.role && usuario.role.toLowerCase() === role.toLowerCase();
      }
    
      return false;
    }
    
    
  }