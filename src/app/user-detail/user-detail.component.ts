import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { UserService } from '../user-service.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input()user;
name:string;
email:string;
phone:any;
website:string;
//editFlag:boolean=false;
  constructor(private router: Router, private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.name=this.user.name;
    this.email=this.user.email;
    this.phone=this.user.phone;
    this.website=this.user.website;
  }
  public editUser(user){
    //this.editFlag=true;
    this.userService.addEdit='Edit';
    this.userService.userObject=user;
    this.router.navigate(['addEdit']);
  }

}
