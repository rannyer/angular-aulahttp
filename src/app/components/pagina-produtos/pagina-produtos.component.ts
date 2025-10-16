import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { CardProdutoComponent } from "../card-produto/card-produto.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-produtos',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent],
  templateUrl: './pagina-produtos.component.html',
  styleUrl: './pagina-produtos.component.css'
})
export class PaginaProdutosComponent implements OnInit {
  produtos:Produto[] = []
  carregando = true;
  erro: string | null = null
  teste:string = ""

  constructor(private produtoService:ProdutoService){}


  ngOnInit(): void {
    this.bucarProdutos()
  }

  bucarProdutos(){
    this.produtoService.listar().subscribe(
      {
        next: (dados) => {
          this.produtos = dados
          this.carregando = false
          console.log(this.produtos)
        },
        error: (err) =>{
          this.erro = err.message,
          this.carregando = false
        }
      },
      
    )
  }
}
