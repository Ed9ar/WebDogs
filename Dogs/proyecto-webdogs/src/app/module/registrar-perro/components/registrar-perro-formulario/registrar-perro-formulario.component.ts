import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrarPerroService } from '../../services/registrar-perro.service';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})

export class RegistrarPerroFormularioComponent implements OnInit {

  suscribe: Subscription;
modeloPerro:FormGroup;
  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService) { }




  ngOnInit() {
    this.modeloPerro = this.formBuild.group(
    {
      perroId: ['', Validators.required],
      nombrePerro: ['', [Validators.required, Validators.minLength(2)]],
      raza: ['', [Validators.required, Validators.minLength(2)]],
      tamanio: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      correoContacto: ['',  [Validators.required, Validators.email]],
      descripcion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
    }
  );
  }

  registrarPerro() {
    console.log(this.modeloPerro.value)
    this.registrarPerroService.agregacionPerro(this.modeloPerro.value);
    this.modeloPerro.reset();
  }

}


