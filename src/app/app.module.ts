import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccountsModule } from "./accounts/accounts.module";
import { RootComponent } from "./root/root.component";
import { UtilityModule } from "./utility/utility.module";
@NgModule({
    declarations:[RootComponent],
    imports:[BrowserModule,UtilityModule,AccountsModule],
    exports:[],
    providers:[],
    bootstrap:[RootComponent]
})
export class AppModule{

}