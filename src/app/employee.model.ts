export class Employee{
    name:string="";
    surname:string="";
    age:number=0;
    company:string="";

    constructor(name:string, surname:string, age:number, company:string){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.company=company;
    }
}