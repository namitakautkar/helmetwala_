import { Component, OnInit } from '@angular/core';
import {Helmet} from '../helmet'
import {HelmetsService} from '../helmets.service';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addhelmet',
  templateUrl: './addhelmet.component.html',
  styleUrls: ['./addhelmet.component.css']
})
export class AddhelmetComponent implements OnInit {

  helmets: Helmet[]

  // helmetForm= new FormGroup({
  //   name: new  FormControl(''),
  //   helmetName: new FormControl(''),
  //   color: new FormControl(''),
  //   photo: new FormControl('')
  // });



  constructor(private helmetser: HelmetsService , private router: Router) { }

  ngOnInit(): void {
    this.helmetser.getHelmet().subscribe(helmets=>{
      this.helmets= helmets
    })
  }

}
