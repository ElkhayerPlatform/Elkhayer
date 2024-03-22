import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuthenticated!: boolean;
  isMenuOpen = false;
  activeLinkIndex: number | null = null;
  actions : Array<any> = [
    {title: "Situations", link: "/posts"},
    {title: "About", link: "/about"},
    {title: "Contact", link: "/contact"}
  ];
  currentAction: any;
  constructor(protected service:AuthenticationService) { }

  ngOnInit(): void {
    this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthentificated')!);
    if (this.isAuthenticated === null) {
      this.isAuthenticated = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  setActiveLink(index: number) {
    this.activeLinkIndex = index;
  }


  logout(){
    this.service.logout();
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthentificated');
  }
}
