import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.scss']
})
export class ContactoFormComponent implements OnInit {

  constructor(private formBuild:FormBuilder) { }

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

  }

}

  

 
