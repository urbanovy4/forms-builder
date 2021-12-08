import {Component, Input, OnInit} from '@angular/core';
import {AvailableStyles, IFormField} from "../../../../shared/models/model";

@Component({
  selector: 'app-styles-list-layout',
  templateUrl: './styles-list-layout.component.html',
  styleUrls: ['./styles-list-layout.component.scss']
})
export class StylesListLayoutComponent implements OnInit {

  @Input('selectedField') selectedField: IFormField;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.selectedField.availableStyles)
  }

}
