import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import {Helmet} from '../mainpages/helmet';
import {map} from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class HelmetsService {

helmets: Observable<Helmet[]>

helmetCollection: AngularFirestoreCollection

  constructor(private afs: AngularFirestore) { 

    this.helmetCollection = afs.collection<Helmet>('helmets');
    //get data and id using map operator
    this.helmets= this.helmetCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data= a.payload.doc.data() as Helmet;
        const id= a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getHelmet(){
    return this.helmets
  }

  addHelmet(helmet: Helmet){
    this.helmetCollection.add(helmet)
  }

}
