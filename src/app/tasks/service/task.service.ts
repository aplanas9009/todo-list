import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MessageService} from '../../messages/service/message.service';
import {Task} from '../model/task';
import {TASKS} from '../model/mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private messageService: MessageService) { }

  getTasks(): Observable<Task[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(TASKS);
  }

  getTaskById(id: number): Observable<Task> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(TASKS.find( task => task.id === id));
  }
}
