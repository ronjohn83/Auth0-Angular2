import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'app works!';

  constructor(private auth: Auth){
        
    }
}
