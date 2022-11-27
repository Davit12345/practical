import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  currentNav = 'content';
  navList: any = [
    {
      title: 'Home',
      active: false,
      href: 'home',
      target: 'home',
    },
    {
      title: 'About Us',
      active: false,
      href: 'about',
      target: 'about',
    },
    {
      title: 'Services',
      active: false,
      href: 'service',
      target: 'service',
    },
    {
      title: 'Our Teams',
      active: false,
      href: 'team',
      target: 'team',
    },
    {
      title: 'Contact Us',
      active: true,
      href: 'contact',
      target: 'contact',
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  rout(item: any) {
    this.currentNav = item.href;
    this.closeNav();
  }
  openMenu(){
   var a= document.getElementById("mySidenav");
   if(a){
     a.style.width = "250px"
   }
  }
  closeNav(){
   var a= document.getElementById("mySidenav");
   if(a){
     a.style.width = "0"
   }
  }

  scrollToElement(element :any): void {
    console.log(element);
    // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }
}
