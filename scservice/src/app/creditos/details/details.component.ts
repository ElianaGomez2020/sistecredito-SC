import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { client } from 'src/app/models/credit.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  client: client = null; 
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }

  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.client = navigation?.extras?.state?.value;    
  }

  ngOnInit(): void {
    if (typeof this.client === 'undefined'){
      this.router.navigate(['list']);
    }
  }
  onGoToEdit(): void{
    this.navigationExtras.state = this.client;
    this.router.navigate(['edit'], this.navigationExtras.state);
    
  }

  onDelete(): void{
    alert('Eliminado')

  }
  onGoBackToList():void{
    this.router.navigate(['list']);

  }

}
