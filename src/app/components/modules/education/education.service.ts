import { EducationModel } from './education.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationService{
    educations:EducationModel[]=[new EducationModel(1,'Master of Computer Application','2013','ER & DCIIT Vellayamabalam Tivandum CUSAT Univercity'),
                                 new EducationModel(2,'Bsc Electronics','2007',' Govt College Mananathavady Kannur University '),
                                 new EducationModel(1,'Higher Secondary ','2005','St Josephs HS kallody ,Kerala State Board'),
                                 new EducationModel(1,'Higher Secondary ','2005','St Josephs HS kallody ,Kerala State Board')]
  getEducations()
  {
  return this.educations.slice();
  }

}