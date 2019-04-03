import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	//isTaskCompleted = false;
	@Input() task: Task;
	@Output() onDeleteTask: EventEmitter<number> = new EventEmitter<number>();
	@Output() onCompleteTask: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	deleteTask() {
		const userAnswer = confirm('Подтвердить удаление задачи?');
		if (userAnswer) {
			this.onDeleteTask.emit(this.task.id);
		}
	}

	completeTask() {
		//this.isTaskCompleted = !this.isTaskCompleted;
		this.onCompleteTask.emit(this.task.id);
	}

	ngOnInit() {
	}
}
