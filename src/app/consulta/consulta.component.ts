import { Component, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from '../cadastro/Cliente';
import { ClienteService } from '../cliente.service';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';

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
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {
  listarClientes: Cliente[] = [];
  snack: MatSnackBar = inject(MatSnackBar);
  nomeBusca: string = '';
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'dataNascimento', 'editar','excluir'];

  constructor(
    private service: ClienteService,
    private router: Router
  ){}

  mostrarMensagem(mensagem: string){
    this.snack.open(mensagem, "Ok");
  }

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

  preparaExcluir(cliente: Cliente){
    cliente.deletando = true;
  }

  excluir(cliente: Cliente){
    this.service.deletar(cliente);
    this.listarClientes = this.service.pesquisarClientes('');
    this.mostrarMensagem("Item excluido com sucesso.");
  }
}
