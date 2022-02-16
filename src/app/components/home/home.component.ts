import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataForm: FormGroup;
  datos: any = [];
  ultimoDato: any = {};

  constructor(private fb: FormBuilder, private dataService: DataServiceService) {
    this.dataForm = this.fb.group({
      nombre: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.obtenerData()
  }

  agregarData() {
    const DATA: any =  {
      nombre: this.dataForm.get('nombre')?.value
    }
    console.log("datos: ", DATA)

    this.dataService.createData(DATA)
    .subscribe((res) => {
      console.log("Respuesta: ", res)
    })
    window.location.reload();
  }

  obtenerData() {
    this.dataService.getAllData()
    .subscribe((res: any) => {
      this.datos = res;
      this.ultimoDato = res.data[res.data.length - 1];
    })
  }



}
