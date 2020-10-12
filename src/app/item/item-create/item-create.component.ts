import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  newItem = "No Items";

  onAddItem() { 
    this.newItem = "Item added!";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
