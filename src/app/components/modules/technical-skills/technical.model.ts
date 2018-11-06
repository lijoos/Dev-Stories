export class TechnicalModel{
    public id:number;
    public technologies:string[];
    public techskillRates:number[];
    constructor(id:number,
                technologies:string[],
                techskillRates:number[]
                )
    {
     this.id=id;
     this.technologies=technologies;
     this.techskillRates=techskillRates;
    }
}