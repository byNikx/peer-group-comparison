import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { LayoutService } from './services/layout/layout.service';
import { UserService } from './services/user/user.service';
import { AccountEntriesComponent } from './components/account-entries/account-entries.component';
import { NotificationComponent } from './components/notification/notification.component';
import { GraphComponent } from './components/graph/graph.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { TypeSelectionComponent } from './components/type-selection/type-selection.component';
import { HomeComponent } from './components/home/home.component';
import { SpendingOverTimeComponent } from './components/spending-over-time/spending-over-time.component';
import { AccountService } from './services/account/account.service';
import { SpendingsService } from './services/spendings/spendings.service';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AccountEntriesComponent,
    NotificationComponent,
    GraphComponent,
    ComparisonComponent,
    TypeSelectionComponent,
    HomeComponent,
    SpendingOverTimeComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    forwardRef(() => LayoutService), 
    UserService, 
    AccountService,
    SpendingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
