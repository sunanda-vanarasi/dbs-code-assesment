import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  baseUrl:string='https://jsonplaceholder.typicode.com/users';
  users:Array<any>=[];
  constructor(public http: HttpClient,private router: Router, private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.getUserDetails();
  }
public  getUserDetails(){
  this.http.get<any[]>(this.baseUrl)
  .subscribe(data => {
    console.log(data);
      this.users= data;
  },
  error => {
    console.error(error);
  }
);
}
public addUser(){
  this.userService.addEdit='Add';
  this.router.navigate(['addEdit']);
}
}
