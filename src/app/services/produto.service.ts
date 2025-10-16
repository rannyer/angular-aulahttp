import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API_URL = "http://localhost:3000/produtos";

  constructor(private http:HttpClient) { }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API_URL)
    .pipe(catchError(this.tratarErro))
  }

  buscarPorId(id:number): Observable<Produto>{
    return this.http.get<Produto>(`${this.API_URL}/${id}`)
    .pipe(catchError(this.tratarErro))
  }

  salvar(produto:Produto):Observable<Produto>{
      return this.http.post<Produto>(this.API_URL, produto)
      .pipe(catchError(this.tratarErro))
  }

  atualizar(id:number, produto:Produto):Observable<Produto>{
      return this.http.put<Produto>(`${this.API_URL}/${id}`, produto)
      .pipe(catchError(this.tratarErro))
  }

  deletar(id:number):Observable<void>{
      return this.http.delete<void>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.tratarErro))
  }


  private tratarErro(error: HttpErrorResponse){
    console.error("Erro na requisição: ", error)
    return throwError(() => new Error("Erro ao processar a requisição"))
  }

}
