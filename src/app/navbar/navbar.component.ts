import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() currentUser?: User;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goHome(): void{
    this.router.navigate(['home'], {state: {data: this.currentUser}})
  }
}
