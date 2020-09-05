import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ){}

  ngOnInit(): void{
  }
  
  createProduct():void {
    this.productService.create(this.product).subscribe(()=>{
      
      //Mostra a mensagem quando o produto dor criado.
      this.productService.showMessage('Produto criado com sucesso')
      console.log('Criei o produto e retornei para a tela')

      // Volta para a tela de produtos após a criação
      this.router.navigate(['/products'])
    })

  }

  cancel():void {
    //Mostra a mensagem quando o produto dor cancelado
    this.productService.showMessage('Seu Cadastro não foi concluído')
    console.log('Criei o produto e retornei para a tela')

    // Volta para a tela de produtos após a clicar em cancelar
    this.router.navigate(['/products'])
  }
}

