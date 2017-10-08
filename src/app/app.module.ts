import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

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


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AccountEntriesComponent,
    NotificationComponent,
    GraphComponent,
    ComparisonComponent,
    TypeSelectionComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [forwardRef(() => LayoutService), UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
