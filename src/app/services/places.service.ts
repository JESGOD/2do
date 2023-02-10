import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import Place from 'src/interfaces/place.interface';
import { Task } from 'src/app/pages/tasklist/task';
@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private firestore: Firestore) {}

  //lee desde la base de datos
  get2doList() {
    const notesRef = collection(this.firestore, '2do');
    return collectionData(notesRef);
  }

  //inserta en la base de datos
  addPlace(task:Task) {
    const notesRef = collection(this.firestore, '2do');
    return addDoc(notesRef, task);
  }

  delete(task:Task) {
    console.log(task);
    const itemRef = doc(this.firestore,`2do/${task.title}`);
    return deleteDoc(itemRef);
  }
  /* addPlace(tasks: Array<Task> = []) {
    const notesRef = collection(this.firestore, '2do');
    return addDoc(notesRef, tasks)
  } */
}
