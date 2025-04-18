import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from '../cadastro/Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consulta',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {
  listarClientes: Cliente[] = [];
  nomeBusca: string = '';
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'dataNascimento', 'editar','excluir'];

  constructor(
    private service: ClienteService,
    private router: Router
  ){}

  ngOnInit(){
    this.listarClientes = this.service.pesquisarClientes('');
    // console.log("listar", this.listarClientes);
  }

  pesquisar(){
    this.listarClientes =  this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id: string){
    // console.log("editar",id)
    this.router.navigate(['/cadastro'], { queryParams: { "id": id } })
  }

  preparaExcluir(id: string){
    console.log("excluir",id)
  }
}
