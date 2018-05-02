import { Component, Input } from '@angular/core';
import { Keg }  from '../models/keg-props.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegsList: Keg[];
  constructor() { }

  ngOnInit() {
  }

}
