import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.scss']
})
export class ContactoFormComponent implements OnInit {

  suscribe: Subscription;

  constructor(private formBuild:FormBuilder, private contactoService: ContactoService) { }

  modeloContacto = this.formBuild.group(
    {
      usuario: this.formBuild.group({
        nombre: ['', Validators.required],
        correo: ['', Validators.required]
      }),
      conociste: ['', Validators.required],
      inquietudes: ['',Validators.required]
    }
  );

  ngOnInit(): void {
  }

  enviarComentarios() {
    console.log(this.modeloContacto.value)
    this.contactoService.agregacionContacto(this.modeloContacto.value);
    this.modeloContacto.reset();
  }

}




