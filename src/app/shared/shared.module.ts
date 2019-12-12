import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {FilterPipe} from './pipes/filter.pipe';
import {NgZorroAntdModule, NZ_I18N, ru_RU} from 'ng-zorro-antd';
import ru from '@angular/common/locales/ru';
import {HttpClientModule} from '@angular/common/http';

registerLocaleData(ru);

@NgModule({
  declarations: [
    LoaderComponent,
    FilterPipe
  ],
  imports: [
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    LoaderComponent,
    FilterPipe,
    NgZorroAntdModule,
    HttpClientModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: ru_RU}
  ]
})
export class SharedModule {
}
