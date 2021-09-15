import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CollapseComponent } from './collapse.component';
import { DrawerComponent } from './drawer.component';
import { UserDetailComponent } from './user-detail.component';
import { CollapsePanelComponent } from './collapse-panel.component';
import { CollapseDirective } from './collapse.directive';
import {
  NzAvatarModule,
  NzButtonModule,
  NzCollapseModule,
  NzDividerModule,
  NzDrawerModule,
  NzIconModule,
  NzSkeletonModule,
  NzTypographyModule,
} from 'ng-zorro-antd';
import { SortedItemsPipe } from './sorted-items.pipe';
import { UserEditComponent } from './user-edit.component';
import { MainContentComponent } from './main-content.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CollapseComponent,
    DrawerComponent,
    UserDetailComponent,
    CollapsePanelComponent,
    CollapseDirective,
    SortedItemsPipe,
    UserEditComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCollapseModule,
    NzDrawerModule,
    NzButtonModule,
    NzTypographyModule,
    NzSkeletonModule,
    NzDividerModule,
    NzIconModule,
    NzAvatarModule,
    NzSpaceModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
