import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

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
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'dataNascimento'];

  constructor(private service: ClienteService){}

  ngOnInit(){
    this.listarClientes = this.service.pesquisarClientes('');
    // console.log("listar", this.listarClientes);
  }
}
