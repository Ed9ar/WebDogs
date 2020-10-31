import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DenunciaService } from './../../services/denuncia.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class FormularioComponent implements OnInit {

  anunciada = false;
  confirmada = false;

  subscribe: Subscription;

  modeloDenuncias = this.formBuild.group(
    {
      tituloDenuncia: ['', Validators.required],
      fechaDenuncia: ['', Validators.required],
      idDenuncia: ['', Validators.required],
      ubicacionDenuncia: ['', Validators.required],
      estatusDenuncia: ['', Validators.required],
      anonimatoDenuncia: ['', Validators.required],

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
  }
  
  

}
