import { Component, Input } from '@angular/core';
import { IItem } from './item';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input()
  item: IItem = {
    id: 0,
    title: "",
    status: false,
    priority: false,
    deadline: new Date()
  }
}
