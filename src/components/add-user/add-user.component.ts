import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services';
import { SnackBarUtil } from '../../utils';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  fg: FormGroup;
  firstName: FormControl = new FormControl('', Validators.required);
  lastName: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(8)
  ]);
  dob: FormControl = new FormControl(new Date(), Validators.required);

  constructor(fb: FormBuilder, private userService: UserService, private toast: SnackBarUtil) {
    this.fg = fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dob: this.dob
    });
  }

  ngOnInit() {
    console.log('[AddUserComponent] initialised');
  }

  addUser(event: Event) {
    const { fg } = this;
    event.preventDefault();
    try {
      this.userService.insert(fg.value);
      this.toast.open('Successfully inserted user', 3);
    } catch (error) {
      this.toast.open(error.message, 3);
    }
  }
}
