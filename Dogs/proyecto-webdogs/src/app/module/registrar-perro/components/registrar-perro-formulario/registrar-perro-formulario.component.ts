import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrarPerroService } from '../../services/registrar-perro.service';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';
import { Perro } from '../../../../models/perro.model';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';
import { RazaService } from '../../../../main-services/raza.service';
import { mimeType} from './mime-type.validator';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})

export class RegistrarPerroFormularioComponent implements OnInit {

  suscribe: Subscription;
  selectedFile: File;
  razas: object[] = [];

  help: Perro[] = [];

  modeloPerro:FormGroup;

  imagePreview: string;

  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService, private razaService: RazaService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();


  ngOnInit(): void {
    this.modeloPerro = this.formBuild.group(
      {
        perroId: ['', Validators.required],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        raza: ['', [Validators.required, Validators.minLength(2)]],
        tamanio: ['', Validators.required],
        edad: ['', [Validators.required, Validators.min(1)]],
        correoContacto: ['',  [Validators.required, Validators.email]],
        descripcion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
        image: [null,Validators.required],
      }
    );
    this.razaService.getRaza().pipe(takeUntil(this.destroy$)).subscribe((data2: any[])=>{
      this.razas = data2;
      console.log(data2);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  enviar() {
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

}


