import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, Renderer2, HostListener, ElementRef } from '@angular/core';
import { DenunciasService } from './../../../../main-services/denuncias.service';
//import { DenunciaService } from './../../services/denuncia.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { Denuncia } from './../../../../models/denuncias';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})



export class TablaComponent implements OnInit {
  /*denunciasObjeto: object[] = [];
  indice = 0;

  constructor(private denunciaService: DenunciaService) {
    denunciaService.claseDenunciaAgregadaAnunciada$.subscribe(
      d=>{
        this.denunciasObjeto.push(d)
        console.log(`Se agrego ${d}`)
      }
    )
   }

  ngOnInit(): void {
  }*/



  
  denunciasObjeto: Denuncia[] = [];

  modeloDenuncias = this.formBuild.group(
    {
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      ubicacion: ['', Validators.required],
      estatus: ['', Validators.required],
      responsableDenuncia: ['', Validators.required],

    }
  );

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private formBuild:FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private denunciasService: DenunciasService,private renderer: Renderer2, private targetElm: ElementRef) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  estilo = false;

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {

      this.denunciasService.getDenuncias().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
        this.denunciasObjeto = data;
        
    })  ;
  }


  eliminar(id: string){
    console.log(id);
    this.denunciasService.eliminarDenuncia(id);
    this.estilo = !this.estilo;
  }

  editar(denuncias: Denuncia, id: string){
    console.log(id);
    this.denunciasService.editarDenuncia(denuncias, id);
    this.estilo = !this.estilo;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
