import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../service/Empleado.service';
import { Empleado } from 'src/app/models/Empleado';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-tab6',
  templateUrl: 'tab-baja.page.html',
  styleUrls: ['tab-baja.page.scss']
})
export class TabBajaPage  implements OnInit{

  empleado: Empleado[] = [];

  constructor(private EmpleadoService: EmpleadoService, private router: Router,public alertController: AlertController) {
    EmpleadoService.getAllEmpleados().subscribe((resp: Empleado[])=>{
      this.empleado = resp;
    });
    console.log(this.empleado);
  }

  ngOnInit(): void {
    this.EmpleadoService.getEmpleadobyId(4).subscribe((Empleado)=>(this.empleado));
  }
  agregarEmpleado(nombre:string, edad:string, sectorEmpleado:string, sexo:string,dni:string){
    console.log("Agregar");
    let EmpleadoA= new Empleado(Empleado.utlimo_id,new Date(),nombre,sectorEmpleado,sexo,edad,dni)
    this.EmpleadoService.addEmpleado(EmpleadoA).subscribe((Empleado)=>this.empleado.push(Empleado))
    }
  
  eliminarEmpleado(id:number){
  console.log(id);
      const alert = this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong> text </strong> !!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
          
        }, {
          text: 'Okay',
          role: 'Okay',
          handler: (blah) => {
            console.log('Confirm Okay');
          }
        }
        

      ]
      
      
    }).then((resp)=>{
    if (resp.isConnected){
      this.EmpleadoService.deleteEmpleado(id).subscribe(()=>{
        this.EmpleadoService.getAllEmpleados().subscribe((resp: Empleado[])=>{
          this.empleado = resp;
        })
      })
    }
  })
  
  }
  modificarEmpleado(id: number, nombreEmpleadox: string, sectorEmpleado2:string,sexo:string,edad_string,dni:string){
      let elementIndex = this.empleado.findIndex((obj => obj.id == id));
      console.log(elementIndex);
      this.empleado[elementIndex].nombreEmpleado = nombreEmpleadox;
      this.empleado[elementIndex].sectorEmpleado=sectorEmpleado2;
    }
  
  async prepararModificar(id:number , nombreEmpleado: string, sectorEmpleado:string, sexo:string,edad:string,dni:string){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sector Empleado',
      inputs: [
        {
          name: 'result',
          type: 'radio',
          label: 'ADMINISTRACION',
          value: 'ADMINISTRACION',
          checked: true
        },
        {
          name: 'result',
          type: 'radio',
          label: 'PRODUCCION',
          value: 'PRODUCCION'
        },
        {
          name: 'result',
          type: 'radio',
          label: 'MANTENIMIENTO',
          value: 'No MANTENIMIENTO'
        }
      ],
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          
          text: 'Ok',
          handler: (value) => {  
            

              this.modificarEmpleado(id,nombreEmpleado,value,sexo,edad,dni);
              sectorEmpleado=value
              let EmpleadoM2= new Empleado(id,new Date(),nombreEmpleado,sectorEmpleado,sexo,edad,dni)
              this.EmpleadoService.updateEmpleado(id,EmpleadoM2).subscribe(()=>{
              } )
            console.log('Confirm Ok');
            this.modificar2(id,nombreEmpleado,sectorEmpleado,sexo,edad,dni);
            
          }
        }
      ]
      
    });
    await alert.present();
  }
    /*    
      
  */
    
  async modificar2(id:number , nombreEmpleado: string, sectorEmpleado:string,sexo:string,edad:string,dni:string){
    const alert = await this.alertController.create({
      header: "Nombre y Apellido",
      message: "Introduce el nombre del Empleado",
      inputs:[
        {
          name: 'result',
          type: 'text',
          placeholder:'nombreEmpleado',
        }  
      ],   
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "cancel-t-button",
          handler: () => {},
        },
        {
          text: "Editar",
          role: "ok",
          cssClass: "add-t-button",
          handler: (placeholder) => {
            this.modificarEmpleado(id,placeholder.result,sectorEmpleado,sexo,edad,dni);
            nombreEmpleado=placeholder.result
            let EmpleadoM= new Empleado(id,new Date(),nombreEmpleado,sectorEmpleado,sexo,edad,dni)
            this.EmpleadoService.updateEmpleado(id,EmpleadoM).subscribe(()=>{
            } )
          }
        },
      ],
    });

    await alert.present();
  }
}
