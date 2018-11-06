import { ProfileModel } from './profile.model';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileSevice{
    profile:ProfileModel=new ProfileModel(1,
                                         '/assets/icons/profile/CSS3.png',
                                         'Lijo Joseph',
                                         'Full stack Developer',
                                         ' Consultant at Allstate Private Solutions',
                                         'Bengaluru karnataka India',
                                         'Javascipt Ninga programmer',
                                         ['/assets/icons/profile/js.png','/assets/icons/profile/dotnet.png',
                                         '/assets/icons/profile/CSS3.png','/assets/icons/profile/html.png',
                                         '/assets/icons/profile/node.png','/assets/icons/profile/angular.png','/assets/icons/profile/c-sharp.png']);
    getProfileDetails()
    {
      return this.profile;
    }
}