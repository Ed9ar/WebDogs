import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Denuncia } from './../../../../models/denuncias';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { DenunciasService } from './../../../../main-services/denuncias.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class EditarComponent implements OnInit {

  /*constructor(private formBuild:FormBuilder, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

  enviar() {
    console.log("enviar")
  }*/

  anunciada = false;
  confirmada = false;

  editarObjeto: Denuncia[] = [];

  denunciaSeleccionada: any;

  editarDenuncias = this.formBuild.group(
    {
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      ubicacion: ['', Validators.required],
      estatus: ['', Validators.required],
      responsableDenuncia: ['', Validators.required],

    }
  );

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private formBuild:FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private denunciasService: DenunciasService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  seleccionDenuncia(denuncia: Denuncia): void{
    this.denunciaSeleccionada = denuncia;
  }

  estilo = false;

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {

      this.denunciasService.getDenuncias().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
        this.editarObjeto = data;
    })  ;
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
