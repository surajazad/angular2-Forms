import { Component } from 'angular2/core';
import {ControlGroup, Control, FormBuilder} from 'angular2/common';

@Component({
    selector : 'welcome-app',
    templateUrl: 'app/home/welcome.component.html',
    styleUrls : ['app/home/welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome to Employee Registration Portal";
    employeeForm : ControlGroup;
    formActive = true;
   public empName : string;

    constructor(private _formBuilder: FormBuilder){
      this._buildForm();
    }

    private _buildForm(){
        this.employeeForm = this._formBuilder.group({
            employeeName:this._formBuilder.control(null),
            designation: this._formBuilder.control(null),
            city:this._formBuilder.control(null)
        })
    }

     onClearForm(){
        this._buildForm();
        this.empName = "";
        this.formActive = false;
        setTimeout(()=>{
            this.formActive = true;
        },0);
     }

    onSubmitForm(){
        console.log(this.employeeForm.value);
    }

   
} 