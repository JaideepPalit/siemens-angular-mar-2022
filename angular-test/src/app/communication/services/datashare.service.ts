import { Observable, Subject } from "rxjs";

export class DataShareService{
    private subject=new Subject<string>();

    publish(data:string){
        this.subject.next(data);
    }

    getObservable():Observable<string>{
        return this.subject.asObservable();
    }
}