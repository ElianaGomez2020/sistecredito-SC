import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //  credits$ = this.creditSvc.credits;
  pageActual:number = 1;
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    }
  };

 
  filterPost = '';
  fakeData = [
    {
      name: 'Eliana',
      lastName: 'Gómez',
      phone: 3132389942,
      email: "elianagomez.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479119,
      adress: "cra 44 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 15000000,
      dues: 24
    },
    {
      name: 'Raphaela ',
      lastName: 'Atehortua',
      phone: 3113334546,
      email: "raphaela@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479219,
      adress: "cra 44 45-66",
      location: "Medellín, La Candelaria",
      valueCredit: 25000000,
      dues: 24 
    },
    {
      name: 'Juan Jose',
      lastName: 'Torres ',
      phone: 3132389942,
      email: "jjts.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479129,
      adress: "cra 56 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 35000000,
      dues: 24
    },
    {
      name: 'Luis',
      lastName: 'Suarez',
      phone: 313242,
      email: "l.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479459,
      adress: "cra 41 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 45000000,
      dues: 24
    },
    {
      name: 'Luis',
      lastName: 'Suarez',
      phone: 313242,
      email: "l.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479459,
      adress: "cra 41 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 45000000,
      dues: 24
    },
    {
      name: 'Luis',
      lastName: 'Suarez',
      phone: 313242,
      email: "l.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479459,
      adress: "cra 41 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 45000000,
      dues: 24
    },
    {
      name: 'Eliana',
      lastName: 'Gómez',
      phone: 3132389942,
      email: "elianagomez.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479119,
      adress: "cra 44 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 15000000,
      dues: 24
    },
    {
      name: 'Raphaela ',
      lastName: 'Atehortua',
      phone: 3113334546,
      email: "raphaela@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479219,
      adress: "cra 44 45-66",
      location: "Medellín, La Candelaria",
      valueCredit: 25000000,
      dues: 24 
    },
    {
      name: 'Juan Jose',
      lastName: 'Torres ',
      phone: 3132389942,
      email: "jjts.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479129,
      adress: "cra 56 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 35000000,
      dues: 24
    },
    {
      name: 'Luis',
      lastName: 'Suarez',
      phone: 313242,
      email: "l.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479459,
      adress: "cra 41 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 45000000,
      dues: 24
    },
    {
      name: 'Luis',
      lastName: 'Suarez',
      phone: 313242,
      email: "l.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479459,
      adress: "cra 41 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 45000000,
      dues: 24
    },
    {
      name: 'Luis',
      lastName: 'Suarez',
      phone: 313242,
      email: "l.s@outlook.com",
      typeId: "Cédula de cuidadanía",
      id: 1128479459,
      adress: "cra 41 45-99",
      location: "Medellín, La Candelaria",
      valueCredit: 45000000,
      dues: 24
    }
  ]


constructor(private router: Router) { }

  ngOnInit(): void {


  }

  onGoToEdit(item:any): void{
    this.navigationExtras.state.value= item;
    this.router.navigate(['edit'], this.navigationExtras)
    getData();

  }


  onGoToSee(item:any): void{
    this.navigationExtras.state.value= item;
    this.router.navigate(['details'], this.navigationExtras)
  }

  onGoToDelete(item:any):void{
    alert("Eliminado")
  }

}
function getData() {
  throw new Error('Function not implemented.');
}

