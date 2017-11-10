import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { GroenComponent } from "./groen/groen.component";
import { OranjeComponent } from "./oranje/oranje.component";
import { HttpModule, JsonpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, GroenComponent, OranjeComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
