import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


// Imports de Views
import { HomeComponent } from "./views/home/home.component";

// Imports de ROtas de Clientes
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import {ClientCreateComponent} from './components/client/client-create/client-create.component'

// Imports Rotas de Produtos
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import {ProductCreateComponent} from "./components/product/product-create/product-create.component"
import {ProductUpdateComponent} from "./components/product/product-update/product-update.component"
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path:"clients",
    component: ClientCrudComponent,
  },
  {
    path: "clients/create",
    component: ClientCreateComponent
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent,
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
