import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.sass']
})
export class ListViewComponent implements OnInit {
  list = [];
  item : String ="";
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      name: [name.toLowerCase(), Validators.required],
      email: ['', [
        Validators.required, Validators.email, Validators.minLength(4), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      email_confirm: ['', [
        Validators.required, Validators.email, Validators.minLength(4), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      password: ['', [
        Validators.required, Validators.minLength(minPassLength)
      ]]
    },{validators: this.emailValidator()});
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const email = control.get('email').value;
        const emailConfirm = control.get('email_confirm').value;
        if (email !== emailConfirm) {
            return {'MatchEmail': {value: true}};
        } else {
            return null;
        }
    };
}

emailTextValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.get('email').value;
      const emailConfirm = control.get('email_confirm').value;
      if (email !== emailConfirm) {
          return {'MatchEmail': {value: true}};
      } else {
          return null;
      }
  };
}

  addItem(item){
    console.log(this.list);
    
    if(item){
      this.list.push(item);
    }
  }

}
