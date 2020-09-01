import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
    ){ 
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon:'local_grocery_store',
      routeUrl:'/products',
    }
  }

  ngOnInit(): void {
  }

  // Função que faz a navegação do product para product create
  navigateToProductCreate():void {
    this.router.navigate(['products/create'])
  }
}
