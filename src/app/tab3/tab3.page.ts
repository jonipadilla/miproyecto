import { Component } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { EmpleadoService } from '../service/Empleado.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isModalOpen = false;
  empleado: Empleado[] = [];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private EmpleadoService: EmpleadoService, private router: Router,public alertController: AlertController) {
    EmpleadoService.getAllEmpleados().subscribe((resp: Empleado[])=>{
      this.empleado = resp;
    });
    console.log(this.empleado);
  }
  ngOnInit(): void {
    this.EmpleadoService.getEmpleadobyId(4).subscribe((Empleado)=>(this.empleado));
  }

}
