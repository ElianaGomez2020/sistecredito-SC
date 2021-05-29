import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { client } from '../models/credit.interface';
import {AngularFirestoreCollection}  from '@angular/fire/firestore';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CreditosService {

  credits: Observable<client[]>;

  private clientsCollection: AngularFirestoreCollection<client>;

  constructor(private readonly afs: AngularFirestore) { 
    this.clientsCollection = afs.collection<client>('credits')
    this.getCredit();

  }

  onDeleteCredit(clientId:string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const result = this.clientsCollection.doc(clientId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);        
      }
      
    });
  }

  onSaveCredit(client:client, clientId:string): Promise<void>{
    return new Promise(async(resolve, reject) => {
      try {
        const id = clientId || this.afs.createId();
        const data = {id, ...client};
        const result = await this.clientsCollection.doc(id).set(data);
        resolve(result);
        
      } catch (err) {
        reject(err.message)
      }
    })
  }

  private getCredit(): void{
    this.credits = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as client) )
    );
  }
}
