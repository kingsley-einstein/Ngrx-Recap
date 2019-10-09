import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService, UserService } from '../../services';
import { SnackBarUtil } from '../../utils';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  fg: FormGroup;
  title: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  content: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(7)
  ]);
  author: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);


  constructor(private postService: PostService, private userService: UserService, private toast: SnackBarUtil, private fb: FormBuilder) {
    this.fg = fb.group({
      title: this.title,
      content: this.content,
      author: this.author
    });
  }

  addPost(event: Event) {
    try {
      const {
        fg: {
          value
        }
      } = this;
      event.preventDefault();
      this.postService.insert(
        this.userService.getByEmail(value.author),
        value.title,
        value.content
      );
      this.toast.open('Post successfully created', 3);
    } catch (error) {
      this.toast.open(error.message, 3);
    }
  }
}
