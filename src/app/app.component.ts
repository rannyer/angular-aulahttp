import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaProdutosComponent } from "./components/pagina-produtos/pagina-produtos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consumindo-http';
}
