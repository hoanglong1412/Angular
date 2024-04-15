import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const ChildComponent = [TaskFormComponent, TaskListComponent, ReactiveFormComponent]
const UIModule = [ButtonModule, CalendarModule]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , [...ChildComponent], [...UIModule]],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
