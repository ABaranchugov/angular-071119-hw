import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {PhonePipe} from './pipes/phone.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {ImagePipe} from './pipes/image.pipe';
import {BackgroundImageUrlPipe} from './pipes/background-image-url.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    PhonePipe,
    FilterPipe,
    ImagePipe,
    BackgroundImageUrlPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    LoaderComponent,
    FilterPipe,
    ImagePipe,
    BackgroundImageUrlPipe,
    PhonePipe
  ]
})
export class SharedModule {
}
