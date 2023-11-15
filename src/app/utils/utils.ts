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
      const usuario = JSON.parse(sessionStorage.getItem('usuarios') || '{}');
      
      if (usuario && usuario.role) {
        return usuario.role.toLowerCase() === role.toLowerCase();
      } else {
        return false;
      }
    }
    
  }