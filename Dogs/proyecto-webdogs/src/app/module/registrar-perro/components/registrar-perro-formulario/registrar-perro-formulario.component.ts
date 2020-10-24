import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { RegistrarPerroService } from '../../services/registrar-perro.service';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})

export class RegistrarPerroFormularioComponent implements OnInit {

  perroList: any;
  suscribe: Subscription;

  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService,  private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Perros Registrados");
    this.perroList = this.registrarPerroService.get();
  }
  modeloPerro = this.formBuild.group(
    {
      perroId: ['', Validators.required],
      nombrePerro: ['', Validators.required],
      raza: ['', Validators.required],
      tamanio: ['', Validators.required],
      edad: ['', Validators.required],
      correoContacto: ['', Validators.required],
      descripcion: ['',Validators.required],

    }
  );

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


