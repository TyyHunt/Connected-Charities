import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items = [{
    itemType: 'Shirt',
    color: 'red',
    quantity: '10',
    description: 'baseball tee-shirt'
},
{
  itemType: 'Pants',
  color: 'blue',
  quantity: '5',
  description: 'mens jeans'
}];

  constructor() { }

  ngOnInit(): void {
  }

}
