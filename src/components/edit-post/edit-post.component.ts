import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../../models';
import { PostService } from '../../services';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input()
  post: Post = null;

  @Output()
  sendUpdate: EventEmitter<any> = new EventEmitter<any>();

  fg: FormGroup;
  title: FormControl = new FormControl(this.post.title, [
    Validators.required,
    Validators.minLength(4)
  ]);
  content: FormControl = new FormControl(this.post.content, [
    Validators.required,
    Validators.minLength(7)
  ]);

  constructor(fb: FormBuilder, private postService: PostService) {
    this.fg = fb.group({
      title: this.title,
      content: this.content
    });
  }

  ngOnInit() {
    console.log('[EditPostComponent] initialised');
  }

  emitSuccess() {
    this.sendUpdate.emit(`Post with id ${this.post.id} updated`);
  }

  editPost() {
    try {
      const { fg } = this;
      this.post.title = fg.value.title;
      this.post.content = fg.value.content;
      this.postService.update(this.post);
      this.emitSuccess();
    } catch (error) {
      this.sendUpdate.emit(error.message);
    }
  }
}
