import { Component, OnInit } from '@angular/core';
import {Task} from '../tasks/model/task';
import {TaskService} from '../tasks/service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe( value => this.tasks = value.slice(0, 4) );
  }
}
