import { TechnicalModel } from './technical.model';
import { Injectable } from '@angular/core';
@Injectable()
export class TechnicalService{
technicalSkill:TechnicalModel=new TechnicalModel(1,
                                               ['Angular4', 'Javascript', 'DotNet','Sql Server','css','Html','Node JS'],
                                               [30,15,35,10,2,2,8] )
getTechnicalSkills()
{
return this.technicalSkill;
}
} 