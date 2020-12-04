import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrarPerroService } from '../../services/registrar-perro.service';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';
import { Perro } from '../../../../models/perro.model';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';
import { RazaService } from '../../../../main-services/raza.service';

@Component({
  selector: 'app-registrar-perro-formulario',
  templateUrl: './registrar-perro-formulario.component.html',
  styleUrls: ['./registrar-perro-formulario.component.scss']
})

export class RegistrarPerroFormularioComponent implements OnInit {

  suscribe: Subscription;

  razas: object[] = [];

  constructor(private formBuild:FormBuilder ,private registrarPerroService: RegistrarPerroService, private razaService: RazaService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

 
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

  ngOnInit(): void {
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
    console.log(this.modeloPerro.value)
    this.registrarPerroService.insertarPerro(this.modeloPerro.value);
    this.modeloPerro.reset();
  }

}


