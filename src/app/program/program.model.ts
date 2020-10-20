export class Program {

    public title: string;
    public id:string;
    public jsonSummary:string;
    public entries:object[];

    constructor(id:string, title:string,jsonSummary:string){
        this.title = title;
        this.id = id;
        this.jsonSummary=jsonSummary;
        this.entries=[];
    }
    
    
    

}