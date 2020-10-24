import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})

export class RegistrarPerroFormularioComponent implements OnInit {

  constructor(private formBuild:FormBuilder) { }


  modeloPerro = this.formBuild.group(
    {
      nombrePerro: ['', Validators.required],
      raza: ['', Validators.required],
      tamanio: ['', Validators.required],
      edad: ['', Validators.required],
      correoContacto: ['', Validators.required],
      descripcion: ['',Validators.required],
      profesor: this.formBuild.group({
        nombre: [''],
        apellido: ['']
      })

    }
  );
  

  ngOnInit(): void {
  }

  registrarPerro() {
    console.log(this.modeloPerro.value)

  }

  // actualizar() {
  //   this.modeloMaterias.patchValue({
  //     nombreMateria: "desarrollo de aplicaciones web",
  //     semestre: "7",
  //     profesor: {
  //       nombre: "Juan",
  //       apellido: "Velez"
  //     }

  //   });
  // }

}


