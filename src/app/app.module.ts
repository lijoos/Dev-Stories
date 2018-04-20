import { CarousalComponent } from './components/shared/carousal/carousal.component';
import { MaterialModule } from './Modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap';
import { NavabarComponent } from './components/headers/navabar/navabar.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/modules/profile/profile.component';
import { ProjectsComponent } from './components/modules/projects/projects.component';
import { ExperianceComponent } from './components/modules/experiance/experiance.component';
import { EducationComponent } from './components/modules/education/education.component';
import { AchievementsComponent } from './components/modules/achievements/achievements.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjDescDialogComponent } from './components/shared/proj-desc-dialog/proj-desc-dialog.component';

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
    ProjDescDialogComponent,
    CarousalComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  entryComponents: [ProjDescDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
