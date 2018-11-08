import {Component, OnInit} from '@angular/core';
import {Task} from './model/task';
import {TaskService} from './service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks = () => this.taskService.getTasks().subscribe(value => this.tasks = value);

}
