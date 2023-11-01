import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { IItem, ITEMS } from '../list-item/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: IItem[] = ITEMS;

  addUser(item: IItem) {
    this.items.push(item);
  }
}
