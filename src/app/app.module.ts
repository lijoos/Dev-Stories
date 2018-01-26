import { MaterialModule } from './Modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavabarComponent } from './components/headers/navabar/navabar.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/modules/profile/profile.component';
import { ProjectsComponent } from './components/modules/projects/projects.component';
import { ExperianceComponent } from './components/modules/experiance/experiance.component';
import { EducationComponent } from './components/modules/education/education.component';
import { AchievementsComponent } from './components/modules/achievements/achievements.component';


@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    MainComponent,
    ProfileComponent,
    ProjectsComponent,
    ExperianceComponent,
    EducationComponent,
    AchievementsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
