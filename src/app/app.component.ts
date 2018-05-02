import { Component } from '@angular/core';
import { Keg } from './models/keg-props.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterKegsList: Keg[] = [
    new Keg('Notorius', 'Boneyard', 6, 11.5, 'https://cdn.beeradvocate.com/im/beers/70013.jpg'),
    new Keg('Sweet As', 'Goodlife', 5, 6, 'https://www.goodlifebrewing.com/wp-content/uploads/2015/06/Sweet-As-Can.png'),
    new Keg('Milk Stout', 'Left Hand', 5, 6, 'http://lefthandbrewing.com/wp/wp-content/uploads/2013/05/milkstout.png'),
    new Keg('Sage Cider', 'Wildcraft', 6, 7.6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWFQd_BF8ah8G6Op3CoLEio9hTJ7XYVRvDIvGrHc3dtpGV_zH6g'),
    new Keg('Rainier', 'RBC', 2, 4.6, 'http://www.historylink.org/Content/Media/Photos/Large/RainierBeer-banner.jpg'),
    new Keg('Bullseye Brown', 'Barley Browns', 5, 5.1, 'http://static1.squarespace.com/static/52276e2ce4b0862847b03583/t/522a4a5de4b09baf3db1eed6/1518207274958/')
  ]
  selectedKeg = null;

  editKeg(clickedKeg) {
    console.log('clicked');
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    console.log('done');
    this.selectedKeg = null;
  }
}
