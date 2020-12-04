import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
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

  razas: object[] = [];

  help: Perro[] = [];
  modeloPerro: FormGroup;


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

    /*this.help = [{'nombre': this.modeloPerro.value.nombre,
    'raza': this.modeloPerro.value.raza,
    'tamanio': this.modeloPerro.value.tamanio,
    'edad': this.modeloPerro.value.edad,
    'correoContacto': this.modeloPerro.value.correoContacto,
    'descripcion': this.modeloPerro.value.descripcion,
    'url': 'https://api.thedogapi.com/v1/images/search?breed_ids='+this.modeloPerro.value.raza.split(' ')[0]}];
    console.log("Aqui esta el help");
    console.log(this.help);*/
    //this.razas.push(this.modeloPerro.value)
    //this.razas.push(url:'https://api.thedogapi.com/v1/images/search?breed_ids='+this.modeloPerro.value.raza.split(' ')[0])
    //console.log(this.modeloPerro.value+{'url':'https://api.thedogapi.com/v1/images/search?breed_ids='+this.modeloPerro.value.raza.split(' ')[0]})
    this.registrarPerroService.insertarPerro(this.modeloPerro.value, this.modeloPerro.value.image);
    this.modeloPerro.reset();
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.modeloPerro.patchValue({image: file});
    this.modeloPerro.get('image').updateValueAndValidity();
    console.log(file);
    console.log(this.modeloPerro);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}


