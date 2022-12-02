import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MainPageComponent } from './main-page/main-page.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    MainPageComponent,
    WeatherWidgetComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [MainPageComponent, WeatherWidgetComponent, ToolbarComponent]
})
export class AppModule { }
