import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  storedItems =[];

  onItemAdded(item) {
    this.storedItems.push(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
