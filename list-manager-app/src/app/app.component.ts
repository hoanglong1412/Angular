import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const ChildComponent = [TaskFormComponent, TaskListComponent]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , [...ChildComponent]],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
