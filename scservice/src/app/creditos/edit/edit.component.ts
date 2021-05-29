import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  template: `<app-new-cli-form></app-new-cli-form>`,
  styleUrls: ['./edit.component.scss']
})



export class EditComponent  {
  // client: client;
  // creditForm: FormGroup;
  // private isEmail = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
  // constructor(private router: Router, private fb:FormBuilder) { 
  
  //   const navigation = this.router.getCurrentNavigation();
  //   this.client = navigation?.extras?.state?.value;
  //   this.initForm();
  // }

  // ngOnInit(): void {
  //   this.initForm();
  //   if( typeof this.client === 'undefined'){
  //     console.log("no hay cliente")
  //     this.router.navigate(['new'])
  //   }else{
  //     this.creditForm.patchValue(this.client);
  //   }
  // }

  // onSave(): void {
  //   console.log('Guardado', this.creditForm.value);
  // }
  // onGoBackToList():void{
  //   this.router.navigate(['list']);

  // }

  // private initForm():void {
  //   this.creditForm = this.fb.group({
  //     name: ['',  [Validators.required]],
  //     lastName: ['',  [Validators.required]],
  //     phone: ['',  [Validators.required]] ,
  //     email:  ['',  [Validators.required, Validators.pattern(this.isEmail)]] ,
  //     typeId: ['',  [Validators.required]]  ,
  //     id:  ['',  [Validators.required]] , 
  //     adress: ['',  [Validators.required]]  ,
  //     location: ['',  [Validators.required]]  ,
  //     valueCredit:  ['',  [Validators.required]] ,
  //     dues: ['',  [Validators.required]] 
  //   });
  // }


}
