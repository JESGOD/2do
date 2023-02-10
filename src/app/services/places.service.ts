import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import Place from 'src/interfaces/place.interface';

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
  addPlace(place: Place) {
    const notesRef = collection(this.firestore, '2do');
    return addDoc(notesRef, place)
  } 

  /* addPlace(tasks: Array<Task> = []) {
    const notesRef = collection(this.firestore, '2do');
    return addDoc(notesRef, tasks)
  } */
}