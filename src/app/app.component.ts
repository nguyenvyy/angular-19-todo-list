import { Component } from '@angular/core';
import { uid } from './helper/uid';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [TaskInputComponent, TaskItemComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';

  tasks: { name: string; id: string; isCompleted: boolean }[] = [];

  filter: 'all' | 'completed' | 'active' = 'all';

  get filteredTasks() {
    if (this.filter === 'all') {
      return this.tasks;
    }
    if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.isCompleted);
    }
    if (this.filter === 'active') {
      return this.tasks.filter((task) => !task.isCompleted);
    }
    return this.tasks;
  }

  get numberOfItemLeft() {
    return this.tasks.filter((task) => !task.isCompleted).length;
  }

  get numberOfItemCompleted() {
    return this.tasks.filter((task) => task.isCompleted).length;
  }

  handleTaskSubmit(task: { name: string }) {
    this.tasks.push({
      name: task.name,
      id: uid(),
      isCompleted: false,
    });
  }

  handleTaskDelete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  handleTaskToggle(id: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
  }

  handleFilterChange(filter: string) {
    this.filter = filter as 'all' | 'completed' | 'active';
  }

  handleClearCompleted() {
    this.tasks = this.tasks.filter((task) => !task.isCompleted);
  }
}
