import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Router } from '@angular/router';
export const App = 'App';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private localStorageService:LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

}
