import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  newPost = "";

  onAddItem() { 
    this.newPost = "Post added!";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
