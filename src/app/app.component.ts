import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  });


  constructor(private fb: FormBuilder) { }

  // get showNameEditor() {
  //   return this.editor === 'name';
  // }

  // get showProfileEditor() {
  //   return this.editor === 'profile';
  // }

  toggleEditor(type: EditorType) {
    // this.editor = type;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    // this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/