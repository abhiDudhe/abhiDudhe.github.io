import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  user={
    fname:'',
    lname:'',
    number:'',
    email:'',
    gender:'',
    reply:'',
    remark:''
  }
  Search:any
  order: string ='f.name';
  selectIndex:any;
  isEdit=false
  userList:any=[];
  
  constructor() { }

  ngOnInit(): void {
  }
// validation(obj ){
  
//   //check number entity
//   //check char name sir name
//   //check email
//   //check gender
//  // if all ok reurn true
//  //else return false
// }
  submit(){
    //validation(this.use
    this.userList.push(this.user)
    this.user={
      fname:'',
      lname:'',
      number:'',
      gender:'',
      email:'',
      reply:'',
      remark:''
    }
     alert("The Data is Successfully Submit")
    console.log("this.userList:-", this.userList)
    
  }
  onEdit(index:any){
    console.log("clicked Edit",index)
    this.isEdit=true;
     this.user = this.userList[index];
     
     }

     update(){
      this.user={
        fname:'',
        lname:'',
        number:'',
        gender:'',
        email:'',
        reply:'',
        remark:''
      }
      this.isEdit=false;
     }
     delete(index:any){
      if (confirm('Are you sure you want to delete this?')) {
        this.userList.splice(index)
   }
      // alert("The Data is  Deleted Successfully ")
       this.userList(index)
     }
  cancle(){
  
    this.user={
      fname:'',
      lname:'',
      number:'',
      gender:'',
      email:'',
      reply:'',
      remark:''
  }
}
}
