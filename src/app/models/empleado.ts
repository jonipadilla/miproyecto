export class Empleado {
   
    static utlimo_id: number = 0;

    constructor(public id: number, public fecha: Date, public nombreEmpleado: string, public sectorEmpleado: string, public sexo: string, public edad: string, public dni: string){
        Empleado.utlimo_id++;
        id = Empleado.utlimo_id;
      }
   }