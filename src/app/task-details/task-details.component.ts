import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TaskService} from '../tasks/service/task.service';
import {Task} from '../tasks/model/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.getTaskById(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }
}
