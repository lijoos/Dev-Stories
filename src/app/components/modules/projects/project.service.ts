import { ProjectModel, ProjectSlidesModel } from './../../shared/models/projects.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  
  private  projectsSlides:ProjectSlidesModel[]=[new ProjectSlidesModel([ 
  new ProjectModel(1,'Lorenzo EPR',
                     `Clinical Data Capture (CDC) is used to develop dynamic forms for capturing Patient-related information. 
                     CDC Windows form tool for designing forms as per the User Requirements. 
                     Lorenzo Web application to handle the dynamic forms created using Windows tool. 
                     The client can design forms based on their requirements in real time and can incorporate those forms to relevant patient-related Care Activities. Built from scratch to rigorous NHS specifications, Lorenzo has been real-world tested and developed more extensively than any other EPR. 
                    `,
                    'Patient Management Module of Lorenzo has been developed newly in MVC framework.',
                   ['test','java'],
                   10,
                   'Developer',
                   'live url','duration','client','workLocation','http://www.menteargentina.com/blog/wp-content/uploads/2015/10/healthcare.jpg'
    ),
    new ProjectModel(1,'Shopping Cart',
                    `Shopping Cart is angular4 web application which will help the customers for generating
                    insurance Quote. Shopping Cart is currently available for Auto, Home and renters.
                    Shopping cart helps the customers to finish insurance quote purchase by answering simple
                    questions. Customers will get discounts for the insurance premium based on the various
                    criteria’s.`,
                   'Online Insurence Quote genaration developed in angular 4',
                   ['test','java'],
                   10,
                   'Developer',
                   'live url','duration','client','workLocation','https://s3-media4.fl.yelpcdn.com/bphoto/jF-O24_AgkSPAR2Bm-dNFw/l.jpg'
    ),
    new ProjectModel(1,'Auto Policy',
                    `It is a Web-based reporting system. This system is an inquiry only system. The data is displayed using Microsoft SQL Server Reporting services (SSRS).`,
                    `It is a Web-based reporting system. This system is an inquiry only system. The data is
                                        displayed using`,
                   ['test','java'],
                   10,
                   'Developer',
                   'live url','duration','client','workLocation','https://newsroom.aaa.com/wp-content/uploads/2016/06/AAA-Insurance-Named-Auto-Insurance-Brand-of-the-Year-.jpg'
    )]),
    new ProjectSlidesModel([ 
    new ProjectModel(1,'Clinical Aide APP',
                    `Developing Angular Application for clinical aide. This will help the client to use Clinical Care activities through any different devices (mobile, tab, pc etc.).
                    This app will make use of the public services provided by Lorenzo. Helping the client to interact with our Legacy EPR system as a third party.
                    `,
                    'Clinical Aide APP (Angular App).',
                   ['test','java'],
                   10,
                   'Developer',
                   'live url','duration','client','workLocation','https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg'
    )])]
  constructor() { }
 getProjectDetails(){
  return this.projectsSlides.slice();
 }
}
