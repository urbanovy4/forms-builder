import {AfterViewInit, Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Portal} from "@angular/cdk/portal";
import {IFormField} from "../../../shared/models/model";

@Component({
  selector: 'app-styles-list',
  templateUrl: './styles-list.component.html',
  styleUrls: ['./styles-list.component.scss']
})
export class StylesListComponent implements AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;

  @Input('selectedField')
  set selectField(field: IFormField) {
    this.selectedField = field;
    // console.log(this.selectedField)
  }

  selectedPortal: Portal<any>;

  selectedField: IFormField;
  constructor() {
  }

  ngAfterViewInit() {
    // this.componentPortal = new ComponentPortal();
  }

}
