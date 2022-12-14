import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShortenComponent} from "./pages/shorten/shorten.component";
import {RoomComponent} from "./pages/room/room.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: 'shorten', component: ShortenComponent},
  { path: 'room', component: RoomComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
