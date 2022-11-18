export class EmpleadoModel{
    static utlimo_id: number = 0;

    constructor(public id: number, public fecha: Date, public nombreEmpleado: string, public obraSocial: string, public sexo: string, public edad: string, public dni: string){
      EmpleadoModel.utlimo_id++;
      id = EmpleadoModel.utlimo_id;
    }
}