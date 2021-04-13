import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUser().then(usuarios => {
      
    });
    // const promise = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola cristhian');
    //   } else {
    //     reject('salio mal');
    //   }
    // });

    // promise.then((message) => {
    //   console.log(message);
    // })
    // .catch(error => console.log('Error en promesa ', error));

    // console.log('fin');
  }

  getUser() {
    return new Promise(resolve=>{
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));
    });
  }

}
