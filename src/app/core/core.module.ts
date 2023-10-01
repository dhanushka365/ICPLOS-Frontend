import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    ProfileComponent,
    FooterComponent
  ]
})
export class CoreModule { }
