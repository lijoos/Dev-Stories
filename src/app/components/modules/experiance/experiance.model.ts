export class ExperianceModel{
    public id:number;
    public year:string;
    public title:string;
    public designation:string;
    public description:string;
    public companyLogo:string;
    constructor(id:number,
                year:string,
                title:string,
                designation:string,
                description:string,
                companyLogo:string
                )
    {
     this.id=id;
     this.year=year;
     this.companyLogo=companyLogo;
     this.description=description;
     this.designation=designation;
     this.title=title;
    }
}