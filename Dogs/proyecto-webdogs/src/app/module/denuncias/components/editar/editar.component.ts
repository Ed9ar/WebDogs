import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class EditarComponent implements OnInit {

  constructor(private formBuild:FormBuilder, config: NgbModalConfig, private modalService: NgbModal) {
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
  }

}
