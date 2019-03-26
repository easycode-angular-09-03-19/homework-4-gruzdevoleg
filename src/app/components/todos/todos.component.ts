import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	@Input() taskId: number;
	@Input() taskText: string;
	@Input() taskComplete: boolean;
	
	tasksArray: Task[] = [
		{
			id: 1,
			text: 'Выгулять собаку',
			completed: false
		},

		{
			id: 2,
			text: 'Убрать в квартире',
			completed: false
		},

		{
			id: 3,
			text: 'Сделать уроки',
			completed: false
		}
	];

	
	constructor() {}

	deleteFromTasksList(taskId: number) {
		for (let i = 0; i < this.tasksArray.length; i++)
			if (this.tasksArray[i].id == taskId) this.tasksArray.splice(i, 1);
	}

	completeTaskInList(taskId: number) {
		for (let i = 0; i < this.tasksArray.length; i++)
			if (this.tasksArray[i].id == taskId) {
				this.tasksArray[i].completed = true;
			} 
	}

	ngOnInit() {
	}
}
