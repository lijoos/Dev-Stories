import { ProfileModel } from './profile.model';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileSevice{
    profile:ProfileModel=new ProfileModel(1,
                                         'https://lh3.googleusercontent.com/U6WdDPbU44jAAduwZpBYjDMwOyLQaTRlewEGftTLTR-xhdkxUjKfY41E411W76tQbumnPLoL_HHEap1_obS1HYkG731T7J017o7q7JMQrPL2_bUUQ7xqXAVIRwBhfVkQzmQqBo0gOb_PR7F2taoixdFhx3GzzNKOC-7FJVbep07xfCdc1ocQF6Ib-C2YvHT1ZMqNRRNtvekaqW3Nze92DL8NORT84Drakg1TG0gnnU915tSl3RoYaRziGnQl0BUNLSU54S4c_TLXS9V0kJnWfM8waTJPlTVyJ_SG7siQgNWumn7LDn4vFp3KnvZbxwUsjFmbS4axJ_LIZgMbpqkMxIBMIR2qN0olhMOgoAMI0ne_0-9KibmCtmqb9vX77NmjsxEpo0C2Glvk0ikiBBc4uVGWMwkbu3rRr6Wl4Ija19Vv4WZPiFPExFbsUfVm3bAXJ8DieFFSTihvyP-FsO-sBDp38TsOFEg6JPo2Xwz82XZerZHP1X-F8rB6njKfZdl08o_SLkua5VTM9ZfnxoeKyHQp8zHMJ8Er80Q6D4nntyzicf_CYADEDFYYZ0v6qISyFM9YOqUq4kncHU5SLXJkvgpS3pLi3p0J1kuMpF4=w980-h974-no',
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