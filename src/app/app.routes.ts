import { Routes } from '@angular/router';
import { PaginaProdutosComponent } from './components/pagina-produtos/pagina-produtos.component';
import { DetalhesProdutoComponent } from './components/detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
    {
        path:'', component:PaginaProdutosComponent
    },
    {
        path:'produto/:id',component: DetalhesProdutoComponent
    }
];
