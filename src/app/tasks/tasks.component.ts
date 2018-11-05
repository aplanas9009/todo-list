import { Component, OnInit } from '@angular/core';
import {Task} from './model/task';
import { TASKS } from './model/mock-tasks';
import {TaskService} from './service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  onSelectTask(task: Task): void {
    this.selectedTask = task;
  }

  getTasks = () => this.taskService.getTasks().subscribe( value => this.tasks = value);

}
