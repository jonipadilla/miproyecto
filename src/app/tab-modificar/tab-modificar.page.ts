import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../service/Empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/Empleado';
import Swal from 'sweetalert2';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-modificar',
  templateUrl: 'tab-modificar.page.html',
  styleUrls: ['tab-modificar.page.scss']
})
export class TabModificarPage {

  formulario: FormGroup;
  id: any;

  constructor(
    private service: EmpleadoService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = formBuilder.group<Empleado>({
      id: 0,
      nombreEmpleado: '',
      fecha: new Date(),
      sectorEmpleado: '',
      sexo: '',
      edad: '',
      dni: ''
    });
    console.log(this.formulario);
    this.formulario.get('id')?.addValidators(Validators.required);
    this.formulario.get('nombreEmpleado')?.addValidators(Validators.required);
    this.formulario.get('fecha')?.addValidators([Validators.required]);

    this.formulario.get('sectorEmpleado')?.addValidators(Validators.required);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any)=>{
      const id = params.id;
      this.service.getEmpleadobyId(id).subscribe((Empleado: Empleado)=>{
        console.log('--------------'+Empleado.fecha.toLocaleDateString);
        this.formulario.patchValue(Empleado);
      });
    });
  }

  updateEmpleado(){
    console.log('-------'+this.id+'-----'+ this.formulario);
		this.service.updateEmpleado(this.id,this.formulario.value).subscribe(()=>{
      this.router.navigate(['/tabs/tab1']);
    });
	}

}
