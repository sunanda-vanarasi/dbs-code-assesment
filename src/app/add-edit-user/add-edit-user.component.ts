import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
name:String;
email:String;
website:String;
phone:String;
userEdit:any;
userType:String;
baseUrl:string='https://jsonplaceholder.typicode.com/users';
newUserId:number;
editId:number;
  constructor(private router: Router, private route: ActivatedRoute,private userService:UserService,public http: HttpClient) { }

  ngOnInit() {
    if(this.userService.getaddEditUser() ==='Add'){
     this.name="";
     this.email="";
     this.website="";
     this.phone="";
     this.userType="Add";

    }
  else if(this.userService.getaddEditUser() ==='Edit'){
    this.userEdit=this.userService.getUser();
     this.name=this.userEdit.name;
     this.email=this.userEdit.email
     this.website=this.userEdit.website;
     this.phone=this.userEdit.phone;
     this.userType="Edit";
     this.userService.userObject={};
     this.userService.addEdit="";
     this.editId=this.userEdit.id;
    }
  }
public onSubmit(){
if(this.userType==='Add'){
  const body = {name: this.name ,email:this.email, website:this.website,phone:this.phone};
  this.http.post<any>(this.baseUrl, body)
      .subscribe(data => window.alert('User added Successfully with id'+' '+ data.id));
this.router.navigate(['view']);
}
else if(this.userType==='Edit'){
  if(this.userType==='Edit'){
    const body = {name: this.name ,email:this.email, website:this.website,phone:this.phone};
  this.http.put<any>(this.baseUrl+'/'+this.editId, body)
      .subscribe(data=>console.log(data));
    window.alert('User edited Successfully');
    this.router.navigate(['view']);
    }
}
}
public onCancel(){
  this.router.navigate(['view']);
}
}
