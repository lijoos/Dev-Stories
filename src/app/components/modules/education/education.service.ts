import { EducationModel } from './education.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationService{
  // constructor(db:AngularFireDatabase){
  //   db.list('education').subscribe(education=>{
      
  //   })
 // }
    educations:EducationModel[]=[new EducationModel(1,'Master of Computer Application','2013','ER & DCIIT Vellayamabalam Tivandum CUSAT Univercity'),
                                 new EducationModel(2,'Bsc Electronics','2010',' Govt College Mananathavady Kannur University '),
                                 new EducationModel(1,'Higher Secondary ','2007','St Josephs HS kallody ,Kerala State Board'),
                                 new EducationModel(1,'SSLC (10th Standard) ','2005','Fr G K M HS Kaniyaram ,Kerala State Board')]
  getEducations()
  {
  return this.educations.slice();
  }

}