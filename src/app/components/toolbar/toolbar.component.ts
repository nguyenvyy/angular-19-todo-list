import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input({
    required: true,
  })
  filter!: 'all' | 'completed' | 'active';

  @Input({
    required: true,
  })
  numberOfItemLeft!: number;
  @Input({
    required: true,
  })
  numberOfItemCompleted!: number;

  @Output() onFilterChange = new EventEmitter<string>();

  @Output() onClearCompleted = new EventEmitter<void>();

  handleFilterChange(filter: 'all' | 'completed' | 'active') {
    this.onFilterChange.emit(filter);
  }

  handleClearCompleted() {
    this.onClearCompleted.emit();
  }
}
