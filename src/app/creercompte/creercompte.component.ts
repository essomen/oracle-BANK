import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.component.html',
  styleUrls: ['./creercompte.component.css']
})
export class CreercompteComponent implements OnInit {
  readonly GET_URL='http://localhost:3000/api/clients';
  readonly POST_URL='http://localhost:3000/api/client/create';
  _id:number;

  clients:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.clients = this.http.get<any>(this.GET_URL);
  }
  ajouterClient(nom, prenom, password, username, type, solde) {



    const aClient ={
      nom:nom,
      prenom:prenom,
      password:password,
      username:username,
      type:type,
      solde:solde
    };

    const req = this.http
      .post(this.POST_URL, aClient)
      .subscribe(res =>{
          console.log(res);
          this.clients = this.http.get<any>(this.GET_URL);

        },
        err=>{
          console.log(err);
        });
  }

  supprimerClient(_id){
    const DELETE_URL= `${"http://localhost:3000/api/client"}/${_id}`;
    return this.http.delete(DELETE_URL).toPromise()
      .then(()=> {
        this.clients = this.http.get<any>(this.GET_URL);

      });

  }

}
