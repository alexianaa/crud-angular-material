import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    // console.log("Cliente: ", cliente);
    const storage = this.obterStorage();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nome: string): Cliente[] {
    return this.obterStorage();
  }

  private obterStorage(): Cliente[] {
    const repositorio_clientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if(repositorio_clientes){
      const clientes: Cliente[] = JSON.parse(repositorio_clientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
