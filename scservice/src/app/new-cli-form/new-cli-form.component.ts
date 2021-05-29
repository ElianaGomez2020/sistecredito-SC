import { Component, OnInit } from '@angular/core';
import {client} from './../models/credit.interface'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditosService } from '../creditos/creditos.service';

@Component({
  selector: 'app-new-cli-form',
  templateUrl: './new-cli-form.component.html',
  styleUrls: ['./new-cli-form.component.scss']
})
export class NewCliFormComponent implements OnInit {
  client: client;
  creditForm: FormGroup;
  private isEmail = /\S+@\S\.S+/;
  constructor(private router: Router, private fb:FormBuilder, private creditSvc: CreditosService) { 
  
    const navigation = this.router.getCurrentNavigation();
    this.client = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
    if( typeof this.client === 'undefined'){
      console.log("no hay cliente")
      this.router.navigate(['new'])
    }else{
      this.creditForm.patchValue(this.client);
    }
  }

  onSave(): void {
    console.log('Guardado', this.creditForm.value);
    if (this.creditForm.valid){
      const credits = this.creditForm.value;
      const clientId = this.client?.id || null;
      this.creditSvc.onSaveCredit(credits, clientId);
      this.creditForm.reset();
    }

  }
  onGoBackToList():void{
    this.router.navigate(['list']);

  }

  private initForm():void {
    this.creditForm = this.fb.group({
      name: ['',  [Validators.required]],
      lastName: ['',  [Validators.required]],
      phone: ['',  [Validators.required]] ,
      email:  ['',  [Validators.required, Validators.pattern(this.isEmail)]] ,
      typeId: ['',  [Validators.required]]  ,
      id:  ['',  [Validators.required]] , 
      adress: ['',  [Validators.required]]  ,
      location: ['',  [Validators.required]]  ,
      valueCredit:  ['',  [Validators.required]] ,
      dues: ['',  [Validators.required]] 
    });
  }

}
