import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  projectForm: FormGroup;
  projectStatusList: string[] = ['Critical', 'Stable', 'Finished'];

  constructor(private fb: FormBuilder) {

    this.projectForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      projectStatus: this.fb.group({
        status: ['']
      })
    })
  }

  ngOnInit(): void {
  }

  statusChange(e) {
    console.log('>> evt', e);
    this.projectForm.get('projectStatus').get('status').setValue(e.target.value);
  }

  onSubmit() {
    if(this.projectForm.invalid){
      this.projectForm.markAllAsTouched();
      this.showValidationMsg(this.projectForm);
    }
    console.log('>> ', this.projectForm);
  }

  showValidationMsg(formGroup: FormGroup) {

    return;
    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const control: FormControl = <FormControl>formGroup.controls[key];

        if (Object.keys(control).includes('controls')) {
          const formGroupChild: FormGroup = <FormGroup>formGroup.controls[key];
          this.showValidationMsg(formGroupChild);
        }

        control.markAsTouched();
      }
    }
  }

}
