import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrarPerroService } from '../../services/registrar-perro.service';

import { FileUploader, FileLikeObject } from 'ng2-file-upload';
 

const URL = 'http://localhost:3000/fileupload/';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})



export class RegistrarPerroFormularioComponent implements OnInit {

  suscribe: Subscription;

<<<<<<< Updated upstream
  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService) { }

=======
  razas: object[] = [];

  help: Perro[] = [];

  imagePreview: string;

  selectedFile: File;

  public uploader:FileUploader = new FileUploader({url: 'backend/images/y'});

  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService, private razaService: RazaService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();
>>>>>>> Stashed changes
 
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

  enviar() {
<<<<<<< Updated upstream
    console.log(this.modeloPerro.value)
    this.registrarPerroService.insertarPerro(this.modeloPerro.value);
    this.modeloPerro.reset();
  }

=======
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    fd.append('nombre', this.modeloPerro.value.nombre);
    fd.append('raza', this.modeloPerro.value.raza);
    fd.append('tamanio', this.modeloPerro.value.tamanio);
    fd.append('edad', this.modeloPerro.value.edad);
    fd.append('correoContacto', this.modeloPerro.value.correoContacto);
    fd.append('descripcion', this.modeloPerro.value.descripcion);
    this.registrarPerroService.insertarPerro(fd);
    this.modeloPerro.reset();
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.modeloPerro.patchValue({image: file});
    this.modeloPerro.get('image').updateValueAndValidity();
    this.selectedFile = <File>(event.target as HTMLInputElement).files[0];
    console.log(file);
    console.log(this.modeloPerro);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

>>>>>>> Stashed changes
}


