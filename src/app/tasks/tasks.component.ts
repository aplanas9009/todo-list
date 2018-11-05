import { Component, OnInit } from '@angular/core';
import {Task} from './model/task';
import { TASKS } from './model/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onSelectTask(task: Task): void {
    this.selectedTask = task;
  }

}
