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
    new Keg('Notorius', 'Boneyard', 6, 11.5, 'https://lh4.ggpht.com/piXpS2tucek7AAzRBxVH7GIxVDzd2sOiQJdZFQJM8NCAQhLjlWFPgKMwmexb_g6k6LLrcNeWpdZH7wI-9EOaNHttSNiWFQ=s300'),
    new Keg('Sweet As', 'Goodlife', 5, 6, 'https://cdn.craftbeer.com/wp-content/uploads/2016/02/10170649/sweetas-sm.png'),
    new Keg('Milk Stout', 'Left Hand', 5, 6, 'https://lh3.googleusercontent.com/mIKpdnvTfrEElgpwRgm2m6jInz2fQ6tlLrxHh2GIU1z-PDpLMUdrJwSZZ2vEbawZug-m4vFg3ehH7r5lvscic2V-bzaV=s750'),
    new Keg('Sage Cider', 'Wildcraft', 6, 7.6, 'https://lh5.ggpht.com/O0_DGRt8LcjUdVLwooz8Bvjm-UTqUkH8N9NVps_VqHXteqMuP13Lb6IFfVUsRoM0uO7ljepgu0IjbLNNNb3iWhc9Qu3PBVw=s300'),
    new Keg('Rainier', 'RBC', 2, 4.6, 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102014/rainier.png?itok=JsSEd8ne'),
    new Keg('Bullseye Brown', 'Barley Browns', 5, 5.1, 'http://static1.squarespace.com/static/52276e2ce4b0862847b03583/t/522a4a5de4b09baf3db1eed6/1518207274958/')
  ]

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKeg: Keg) {
    this.masterKegsList.push(newKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
