import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titleLabel: string;
  title: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = this.titleLabel;
  }
  logout = () => {
    this.router.navigate(['']);
  }

}
