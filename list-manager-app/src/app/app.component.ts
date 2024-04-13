import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ButtonModule } from 'primeng/button';

const ChildComponent = [TaskFormComponent, TaskListComponent]
const UIModule = [ButtonModule]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , [...ChildComponent], [...UIModule]],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
