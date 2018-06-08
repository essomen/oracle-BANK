import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AjouterpersonnelComponent } from './ajouterpersonnel/ajouterpersonnel.component';
import { ListepersonnelComponent } from './listepersonnel/listepersonnel.component';
import { CreercompteComponent } from './creercompte/creercompte.component';
import { FormulaireversementComponent } from './formulaireversement/formulaireversement.component';
import { FormulairetraitComponent } from './formulairetrait/formulairetrait.component';
import { FormulairevirementComponent } from './formulairevirement/formulairevirement.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



@NgModule({
  declarations: [
    AppComponent,
    AjouterpersonnelComponent,
    ListepersonnelComponent,
    CreercompteComponent,
    FormulaireversementComponent,
    FormulairetraitComponent,
    FormulairevirementComponent,
    AcceuilComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path:"formulairevirement", component:FormulairevirementComponent },
    {path:"formulairetrait", component:FormulairetraitComponent },
    {path:"acceuil", component:AcceuilComponent },
    {path:"creercompte", component:CreercompteComponent },
    {path:"formulaireversement", component:FormulaireversementComponent },
    {path:"listepersonnel", component:ListepersonnelComponent },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
