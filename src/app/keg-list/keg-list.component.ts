import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg }  from '../models/keg-props.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegsList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }

  constructor() { }

}
