import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DenunciasService } from './../../../../main-services/denuncias.service';

//import { DenunciaService } from './../../services/denuncia.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Denuncia } from './../../../../models/denuncias';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class FormularioComponent implements OnInit {

  /*anunciada = false;
  confirmada = false;
  subscribe: Subscription;
  modeloDenuncias = this.formBuild.group(
    {
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      ubicacion: ['', Validators.required],
      estatus: ['', Validators.required],
      responsableDenuncia: ['', Validators.required],
    }
  );
  constructor(private formBuild:FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private denunciaService: DenunciaService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }
  ngOnInit(): void {
  }
  enviar() {
    console.log(this.modeloDenuncias.value)
    this.confirmada = true;
    this.denunciaService.agregacionDenuncia(this.modeloDenuncias.value);
    this.modeloDenuncias.reset();
  }*/

  anunciada = false;
  confirmada = false;

  denunciasObjeto: Denuncia[] = [];

  modeloDenuncias:FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private formBuild:FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private denunciasService: DenunciasService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }


  estilo = false;

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.modeloDenuncias = this.formBuild.group(
      {
        descripcion: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
        fecha: ['', Validators.required],
        ubicacion: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
        estatus: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
        responsableDenuncia: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
        correoContacto: ['',  [Validators.required, Validators.email]],
      }
    );
      this.denunciasService.getDenuncias().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
        this.denunciasObjeto = data;
    })  ;
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  enviar() {
    console.log(this.modeloDenuncias.value)
    this.confirmada = true;
    //this.denunciaService.agregacionDenuncia(this.modeloDenuncias.value);
    this.denunciasService.insertarDenuncia(this.modeloDenuncias.value);
    this.estilo = !this.estilo;
    this.modeloDenuncias.reset();
  }



}
