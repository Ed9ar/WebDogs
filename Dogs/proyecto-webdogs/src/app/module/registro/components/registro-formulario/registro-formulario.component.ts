import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.scss']
})
export class RegistroFormularioComponent implements OnInit {
  constructor(private formBuild:FormBuilder) { }


  modeloRegistro = this.formBuild.group(
    {
      nombreUsuario: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      edadUsuario: ['', Validators.required],
      correoUsuario: ['', Validators.required],
      contrasenia: ['',Validators.required],
      motivo: ['',Validators.required]
    }
  );

  ngOnInit(): void {
  }

  registrarUsuario() {
    console.log(this.modeloRegistro.value)

  }

}




  

  
