import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    ListRestoComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFFFbRk40EPxQXwMjzOjwANxi5iYDLRvA'
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
