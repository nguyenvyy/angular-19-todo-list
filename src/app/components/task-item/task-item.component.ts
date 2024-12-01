import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input({ required: true }) task!: {
    name: string;
    id: string;
    isCompleted: boolean;
  };

  @Output() onDelete = new EventEmitter<string>();

  @Output() onToggle = new EventEmitter<string>();

  handleDelete() {
    this.onDelete.emit(this.task.id);
  }

  handleCheckboxChange() {
    this.onToggle.emit(this.task.id);
  }
}
