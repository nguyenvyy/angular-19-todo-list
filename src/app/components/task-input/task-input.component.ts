import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [ReactiveFormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss',
})
export class TaskInputComponent {
  taskForm = new FormGroup({
    name: new FormControl(''),
  });

  @Output() onSubmit = new EventEmitter<{
    name: string;
  }>();

  handleSubmit() {
    if (this.taskForm.value.name) {
      this.onSubmit.emit({
        name: this.taskForm.value.name.trim(),
      });
      this.taskForm.reset();
    }
  }
}
