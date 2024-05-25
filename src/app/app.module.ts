// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { TemplateCreationComponent } from './template-creation/template-creation.component';
import { TemplateListingComponent } from './template-listing/template-listing.component';
import { MessageSendingComponent } from './message-sending/message-sending.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateCreationComponent,
    TemplateListingComponent,
    MessageSendingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
