export class ProfileModel{
    public id:number;
    public profileImage:string;
    public profileName:string;
    public profileHeader:string;
    public designation:string;
    public location:string;
    public profileTag:string;
    public technologies:string[];
    constructor(id:number,
                profileImage:string,
                profileName:string,
                profileHeader:string,
                designation:string,
                location:string,
                profileTag:string,
                technologies:string[]
                )
    {
     this.id=id;
     this.profileImage=profileImage;
     this.profileName=profileName;
     this.profileHeader=profileHeader;
     this.designation=designation;
     this.location=location;
     this.profileTag=profileTag;
     this.technologies=technologies;
    }

}