import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IItem } from '../list-item/item';

@Component({
  selector: 'app-create-list-item',
  templateUrl: './create-list-item.component.html',
  styleUrls: ['./create-list-item.component.css']
})
export class CreateListItemComponent {
  creationForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    status: [false],
    priority: [false],
    deadline: [new Date()]
  });

  @Output()
  createEvent = new EventEmitter<IItem>();

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {

    if (this.creationForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const item = this.creationForm.value as IItem;
    console.log(item);

    this.createEvent.emit(item);
  }
}
