import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';


@Injectable({providedIn: 'root'})
export class EmpleadoService {
 
  

  Empleados!: Empleado[];
  nuevaEmpleado = new Empleado(0,new Date,"","","","","");
  url: string = "http://localhost:3000/empleados";

  constructor(public http: HttpClient) { }

  getAllEmpleados( ):Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url);


  }

  getEmpleadobyId(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(this.url+"/"+id); //"http://localhost:3000/empleados/+3"
  }

  addEmpleado(Empleado: Empleado):Observable<any>{
    return this.http.post(this.url,Empleado);
  }

  updateEmpleado(id: number,Empleado: Empleado):Observable<any>{
    console.log("SERVICIO");
    console.log("-------"+id+"-----"+Empleado.nombreEmpleado);
    return this.http.put(this.url + "/" + Empleado.id, Empleado);
  }

  deleteEmpleado(id: number):Observable<any>{
    return this.http.delete(this.url + "/"  + id);
  }
}
