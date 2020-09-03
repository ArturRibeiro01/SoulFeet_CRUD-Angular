import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  baseUrl = "http://localhost:3001/products"
  
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    ){}
    
    
    // Metodo que exibe mensagem de acordo com a ação desejada.
    showMessage(msg: string, isError:boolean = false): void {
      this.snackBar.open(msg, 'Fechar', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition:"top",
      })
    }
    
    //Responsável por inserir novo produto
    create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.baseUrl, product).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
        );
      }
      
      // Faz a leitura da api e retorna o que está no objeto produto
      read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e))
          );;
      }
      
      // Faz a leitura da API e retorna  o ID do Objeto que está na API
      readById(id:string): Observable<Product>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Product>(url);
      }
      
      // FAZ a leitura do que está no Is do produdo e retorna um put para update dos dados
      update(product: Product): Observable<Product> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.http.put<Product>(url, product).pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e))
          );;
      }
      
      // Deleta 
      delete(id:number): Observable<Product> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<Product>(url).pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e))
          );;
      }

      errorHandler(e: any): Observable<any>{
        this.showMessage('Ocorreu um erro',true)
        return EMPTY
      }
    }
    
    