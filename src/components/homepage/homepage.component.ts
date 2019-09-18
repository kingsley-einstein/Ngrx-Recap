import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class Homepage implements OnInit {
  ngOnInit() {
    console.log('Homepage initialised')
  }
}
