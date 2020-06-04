import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Helmet} from '../helmet'
import {HelmetsService} from '../helmets.service'
import { fileURLToPath } from 'url';
import * as firebase from 'firebase';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mcategories',
  templateUrl: './mcategories.component.html',
  styleUrls: ['./mcategories.component.css']
})
export class McategoriesComponent implements OnInit {

  // helmetForm= new FormGroup({
  //   name: new  FormControl(''),
  //   helmetName: new FormControl(''),
  //   color: new FormControl(''),
  //   photo: new FormControl('')
  // });

  helmet: Helmet[]

  constructor(private helmetser: HelmetsService,  private router:Router) { }

  ngOnInit(): void {
    this.helmetser.getHelmet().subscribe(helmet=>{
      this.helmet= helmet
    })
  }

  // featuredPhotoSelected(event:any){
  //   // const target: HTMLInputElement= <HTMLInputElement>event.target;
  //   // const files: FileList = target.files;
  //   const file: File= event.target.files[0]
  //   console.log("selected filename: ", file.name)
  // }

  // onSubmit(){
  //   if(this.helmet.name != '' && this.helmet.type != ''){
  //     this.helmetser.addHelmet(this.helmet);
  //     this.helmet.name= '';
  //     this.helmet.type='';
  //     this.helmet.color='';
  //     this.router.navigate(['/mainpage/addhelmet'])
  //   }
  // }

  // onSubmit(){
  //   this.helmetser.getHelmet
  //   this.router.navigate(['/mainpages/addhelmet'])
  // }

}
