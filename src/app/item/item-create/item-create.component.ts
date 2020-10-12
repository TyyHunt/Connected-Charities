import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  enteredItemType = "";
  enteredColor = "";
  enteredQuantity = "";
  enteredDescription = "";

  onAddItem() { 
    const item = {
      itemType: this.enteredItemType,
      color: this.enteredColor,
      quantity: this.enteredQuantity,
      description: this.enteredDescription
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
