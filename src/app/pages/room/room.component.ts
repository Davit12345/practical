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
      href: 'room',
    },
    {
      title: 'About Us',
      active: false,
      href: 'about',
    },
    {
      title: 'Services',
      active: false,
      href: 'service',
    },
    {
      title: 'Our Teams',
      active: false,
      href: 'team',
    },
    {
      title: 'Contact Us',
      active: true,
      href: 'content',
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


}
