import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { IItem, ITEMS } from '../list-item/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  id: number = 0;
  items: IItem[] = ITEMS;

  addItem(item: IItem) {
    item.id = this.id;
    this.items.push(item);
    this.id++;
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  sortItemsByDateAscending(items: IItem[]): IItem[] {
    return items.sort((a: IItem, b: IItem) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return dateA.getTime() - dateB.getTime();
    });
  }

  sortItemsByDateDescending(items: IItem[]): IItem[] {
    return items.sort((a: IItem, b: IItem) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return dateB.getTime() - dateA.getTime();
    });
  }


  sortItemsByPriority(items: IItem[]): IItem[] {
    return items.sort((a: IItem, b: IItem) => {
      if (a.priority && !b.priority) {
        return -1;
      } else if (!a.priority && b.priority) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
