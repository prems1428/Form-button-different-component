import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getValue:any=[];
  profileForm!:FormGroup;
  sortDir=1;
  title='crudReactive';
  submitted:boolean=false;
  constructor(){
    this.sortArr('Name');
    this.profileForm = new FormGroup({
      Name:new FormControl(''),
      Age:new FormControl(''),
      Contact:new FormControl('')
    });
   }
submitForm(){
    this.submitted=true;
   }
displayValues(){
  this.getValue.push(this.profileForm.value);
  console.log(this.profileForm.value);
  this.profileForm.reset();
}
sortEvent(event:any) {
  let target = event.currentTarget,
    classList = target.classList;

  if (classList.contains('fa-chevron-up')) {
    classList.remove('fa-chevron-up');
    classList.add('fa-chevron-down');
    this.sortDir=-1;
  } else {
    classList.add('fa-chevron-up');
    classList.remove('fa-chevron-down');
    this.sortDir=1;
  }
  this.sortArr('Name');
}
sortArr(colName:any){
  this.getValue.sort((a:any,b:any)=>{
    a= a[colName].toLowerCase();
    b= b[colName].toLowerCase();
    return a.localeCompare(b) * this.sortDir;
  });
}

}
