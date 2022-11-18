import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../service/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../models/Empleado';


@Component({
  selector: 'app-tab-alta',
  templateUrl: 'tab-alta.page.html',
  styleUrls: ['tab-alta.page.scss']
})


export class TabAltaPage {
  formulario: FormGroup;

  constructor(private EmpleadoService: EmpleadoService,
 private router: Router, FormBuilder: FormBuilder) {
   

 this.formulario = FormBuilder.group<Empleado>({
   id:0,
   nombreEmpleado:'',
   fecha:new Date(),
   sectorEmpleado:'',
   sexo:'',
   dni:'',
   edad:''

  });
 console.log(this.formulario);
  this.formulario.get('nombreEmpleado')?.addValidators([Validators.required, Validators.minLength(4), Validators.maxLength(40)]);

  this.formulario.get('fecha')?.addValidators([Validators.required]);

  this.formulario.get('sectorEmpleado')?.addValidators(Validators.required);
  }

ngOnInit(): void {
}

show(producto: Empleado){
 this.formulario.patchValue(producto);
}

formSubmit(){
 if (this.formulario.valid){
   this.EmpleadoService.addEmpleado(this.formulario.value).subscribe(()=>{
     this.router.navigate(['home']);
   });
 }else{
 }
}
}
