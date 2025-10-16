import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!:Produto
  @Output() produtoExcluido = new EventEmitter<void>();


  constructor(
    public service:ProdutoService,
    private router:Router
  ){}

  abrirDetalhes(){
    this.router.navigate(['/produto', this.produto.id])
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
}
