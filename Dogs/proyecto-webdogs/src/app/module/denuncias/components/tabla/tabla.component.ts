import { Component, ViewChild,  OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, Renderer2, HostListener, ElementRef } from '@angular/core';
import { DenunciasService } from './../../../../main-services/denuncias.service';
//import { DenunciaService } from './../../services/denuncia.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { Denuncia } from './../../../../models/denuncias';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';



export interface PeriodicElement {
  nombre: string;
  id: number;
  edad: number;
  raza: string;
}
//Custom data for table
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombre: 'Max', edad: 3, raza: 'Golden'},
  {id: 2, nombre: 'Trufa', edad: 3, raza: 'Chihuahua'},
  {id: 3, nombre: 'Bolillo', edad: 9, raza: 'Blue terrier'},
  {id: 4, nombre: 'Brownie', edad: 5, raza: 'Maltes'},
  {id: 5, nombre: 'Porfirio', edad: 4, raza: 'Pug'},
  {id: 6, nombre: 'Carbon', edad: 12, raza: 'Shitsu'},
  {id: 7, nombre: 'Quesadilla', edad: 6, raza: 'Bulldog'},
  {id: 8, nombre: 'webdev', edad: 3, raza: 'Labrador'},
  {id: 9, nombre: 'Frafra', edad: 2, raza: 'Gran danes'},
  {id: 10, nombre: 'Ronie', edad: 1, raza: 'Doberman'},
  {id: 11, nombre: 'Kevin', edad: 0, raza: 'Pastor alemán'},
  {id: 12, nombre: 'Kuka', edad: 5, raza: 'Husky'},
  {id: 13, nombre: 'Bucha', edad: 10, raza: 'Boxer'},
  {id: 14, nombre: 'Colate', edad: 12, raza: 'French poodle'},
  {id: 15, nombre: 'Carlota', edad: 13, raza: 'Akita'},
  {id: 16, nombre: 'Kira', edad: 6, raza: 'Schnawser'},
  {id: 17, nombre: 'Charlie', edad: 15, raza: 'Bulldog Frances'},
  {id: 18, nombre: 'Terry', edad: 7, raza: 'Golden'},
  {id: 19, nombre: 'Agamemnon', edad: 7, raza: 'Labrador'},
  {id: 20, nombre: 'Bota', edad: 1, raza: 'Xoloscuincle'},
];

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

  displayedColumns: string[] = ['id', 'nombre', 'edad', 'raza'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  denunciasObjeto: Denuncia[] = [];

  
  //displayedColumns: string[] = ['fecha', 'descripcion', 'ubicacion', 'estatus'];
  //dataSource = new MatTableDataSource<Denuncia>(this.denunciasObjeto);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  

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
  //this.dataSource = new MatTableDataSource<Denuncia>(this.denunciasObjeto);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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
    console.log("EDITAR");
    console.log(denuncias);
    console.log(this.modeloDenuncias.value);
    // descripcion: ['', Validators.required],
    //   fecha: ['', Validators.required],
    //   ubicacion: ['', Validators.required],
    //   estatus: ['', Validators.required],
    if(this.modeloDenuncias.value.responsableDenuncia == ""){
      this.modeloDenuncias.value.responsableDenuncia = denuncias.responsableDenuncia;
    }
    if(this.modeloDenuncias.value.fecha == ""){
      this.modeloDenuncias.value.fecha = denuncias.fecha;
    }
    if(this.modeloDenuncias.value.descripcion == ""){
      this.modeloDenuncias.value.descripcion = denuncias.descripcion;
    }
    if(this.modeloDenuncias.value.ubicacion == ""){
      this.modeloDenuncias.value.ubicacion = denuncias.ubicacion;
    }
    if(this.modeloDenuncias.value.estatus == ""){
      this.modeloDenuncias.value.estatus = denuncias.estatus;
    }

    console.log(this.modeloDenuncias.value);
    this.denunciasService.editarDenuncia(this.modeloDenuncias.value, id);
    this.estilo = !this.estilo;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
