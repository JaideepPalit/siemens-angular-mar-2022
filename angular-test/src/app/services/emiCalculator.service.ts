import { EMIData } from "../models/emidata.model";
export { EMIData } from "../models/emidata.model";
export class EMICalculatorService{
    calculate(amount:Number,tenure:Number,interestRate:Number){

        
        let data:EMIData={monthlyEmi:10000,interest:1000,total:20000};
        
        return data;

    }
}