import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TooButtonDeleteAllComponent } from './components/too-button-delete-all/too-button-delete-all.component';
import { TooInputAddItensComponent } from './components/too-input-add-itens/too-input-add-itens.component';
import { TooListComponent } from './components/too-list/too-list.component';
import { HomeComponent } from './components/pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TooButtonDeleteAllComponent,
    TooInputAddItensComponent,
    TooListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
