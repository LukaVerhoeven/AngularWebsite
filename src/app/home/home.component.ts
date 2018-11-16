import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Rsitems: Object;
  items: any[];
  amountCatergories = 27;

  constructor(private data: DataService, db: AngularFireDatabase) {

    db.list('/items')
      .valueChanges().subscribe(items => {
        this.items = items;
        console.log(this.items);
    });
  }

  ngOnInit() {

    this.data.getItems(0, 'a' , 1).subscribe(data => {
      this.Rsitems =  data;
      console.log(this.Rsitems);
    });
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
