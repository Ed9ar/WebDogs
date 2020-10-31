import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrarPerroService } from '../../services/registrar-perro.service';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})

export class RegistrarPerroFormularioComponent implements OnInit {

  suscribe: Subscription;

  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService) { }

 
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

  ngOnInit() {
  }

  registrarPerro() {
    console.log(this.modeloPerro.value)
    this.registrarPerroService.agregacionPerro(this.modeloPerro.value);
    this.modeloPerro.reset();
  }

}


