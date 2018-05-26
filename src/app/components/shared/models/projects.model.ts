export class ProjectModel {
   public id:number;
   public title:string;
   public shortDesc:string;
   public description:string;
   public technolgies:string[];
   public teamStrength:number;
   public role:string;
   public liveUrls:string;
   public duration:string;
   public client:string;
   public workLocation:string;
   public logo:string;

 constructor(id:number,
             projectTitle:string,
             projectdescription:string,
             shortDesc:string,
             technolgies:string[],
             strenth:number,
             role:string,
             liveUrl:string,
             duration:string,
             client:string,
             workLocation:string,
             logo:string){
            this.id=id;
            this.shortDesc=shortDesc;
            this.description=projectdescription;
            this.title=projectTitle;
            this.technolgies=technolgies;
            this.teamStrength=strenth;
            this.role=role;
            this.liveUrls=liveUrl;
            this.duration=duration;
            this.client=client;
            this.workLocation=workLocation;
            this.logo=logo;

 }

}

export class ProjectSlidesModel{
  public projectslide:ProjectModel[];
  constructor(projectslide:ProjectModel[])
  {
   this.projectslide=projectslide;
  }
}