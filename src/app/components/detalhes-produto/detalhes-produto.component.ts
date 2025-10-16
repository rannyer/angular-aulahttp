import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {
  produto!:Produto
  carregando=true

  constructor(
    private route:ActivatedRoute,
    private service:ProdutoService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.buscarPorId(id).subscribe({
      next:(dados) => {
        this.produto = dados;
        this.carregando = false
      },
      error: () => alert("Erro ao carregar a pagina...")
    })


  }



}
