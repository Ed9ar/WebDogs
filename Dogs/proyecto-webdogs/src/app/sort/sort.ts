import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
//import { DenunciasService } from './../../../../main-services/denuncias.service';
//import { DenunciaService } from './../../services/denuncia.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { Denuncia } from './../../../src/app/models/denuncias';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


export class Sort{

    //sort
    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
    })

    //sort2
    public startSort(property, order, type = ""){
    if(order === "desc"){
      this.sortOrder = -1;
    }
    return (a,b) => {
      if(type === "date"){
        return this.sortData(new Date(a[property]), new Date(b[property]));
      }else{
        return this.collator.compare(a[property], b[property]) * this.sortOrder;
      }
    }
  }
  

  private sortData(a, b){
    if(a<b){
      return -1 * this.sortOrder;
    }else if(a>b){
      return 1 * this.sortOrder;
    }else{
      return 0 * this.sortOrder;
    }
  }
}


  