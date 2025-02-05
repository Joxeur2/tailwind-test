import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from './component/test.component';

@Component({
  selector: 'app-root',
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-project';
}
