import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { deleteDoc, doc, Firestore } from 'firebase/firestore';
import { title } from 'process';
import { stringify } from 'querystring';
import { elementAt } from 'rxjs';
import { PlacesService } from 'src/app/services/places.service';
import Place from 'src/interfaces/place.interface';
import { Task } from './task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {
  tasks: Array<Task> = [];
  task:Task={
    title: '',
    status: '',
  };
  
  constructor(private placesService: PlacesService) {
    

    this.placesService.get2doList().subscribe((res) => {
      console.log(res);
      this.tasks=[];
      res.forEach((element) => {
        let theNewTask = element['title'];
          if (theNewTask !== '') {
          this.tasks.push({ title: theNewTask, status: 'open' });
        } 
      });
    });
  }

  ngOnInit() {
    
  }

  addItem() {
    
    this.tasks.forEach((element) => {
      console.log(element);
      
    });
    let theNewTask: string | null = prompt('New task');

    if (theNewTask !== '') {
      this.tasks.push({ title: theNewTask, status: 'open' });
      this.task = { title: theNewTask, status: 'open' };
      this.placesService.addPlace(this.task);
    }
    
  }

  markAsDone(slidingItem: IonItemSliding, task: Task) {
    task.status = 'done';
    setTimeout(() => {
      slidingItem.close();
    }, 1);
  }

  removeTask(slidingItem: IonItemSliding, task: Task) {
    /* var t = task.title; */
    
    task.status = 'removed';
  
    
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    setTimeout(() => {
      slidingItem.close();
    }, 1);

    // eliminar item en la db
    
    
     this.placesService.delete(task) 
   
  }

  onSubmit() {
    /* this.placesService.addPlace(this.item); */
  }
}
