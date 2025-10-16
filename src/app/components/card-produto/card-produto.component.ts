import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { CdkObserveContent } from "@angular/cdk/observers";
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, CdkDrag, MatButtonModule, MatIconModule],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!:Produto
  @Output() produtoExcluido = new EventEmitter<void>();
  produtoEdit!:Produto
  mostrandoPop = false

  constructor(
    public service:ProdutoService,
    private router:Router
  ){}

  abrirDetalhes(){
    this.router.navigate(['/produto', this.produto.id])
  }
  abrirPopup(){
    this.produtoEdit = {...this.produto}
    this.mostrandoPop = true
  }

  fecharPopup(){
    this.mostrandoPop = false
  }


  excluir(id:number){
      this.service.deletar(id).subscribe({
        next: () => {
          alert("Excluido!")
          this.produtoExcluido.emit()
        },
        error: (err) => alert(err)
      })
  }
  atualizar(){
    this.service.atualizar(this.produto.id, this.produtoEdit).subscribe({
      next:()=>{
        alert("Produto Atualizado com sucesso")
        this.produto = {...this.produtoEdit};
        this.fecharPopup();
        // this.produtoExcluido.emit()
      },
      error: ()=> alert("Erro")
    })
  }
}
