import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

// Imports de componentes nativos
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// imports de componentes criados.
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";

// Imports de views criados
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

// Imports de itens do  Angular Material.
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{ FormsModule} from '@angular/forms'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


// Imports de diretivas
import { RedDirective } from './directives/red.directive';
import { YellowDirective } from './directives/yellow.directive';
import { ForDirective } from './directives/for.directive';


// Import de Obsrvables
import { HttpClientModule } from '@angular/common/http';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';


//import de providers
import localePt from "@angular/common/locales/pt";
import {registerLocaleData} from "@angular/common";
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

registerLocaleData(localePt);
  
@NgModule({
  declarations: [
    // Declarations do Angular
    AppComponent,

    // Declarations de componentes criados
    HeaderComponent,
    NavComponent,
    FooterComponent,

    // Declarations de Views criadas
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,

    // Declarations de diretivas
    RedDirective,
    YellowDirective,
    ForDirective,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
  ],

  // Todas imports das declarações.
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    // MAterial
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-BR'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
