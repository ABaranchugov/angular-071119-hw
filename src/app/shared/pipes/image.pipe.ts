import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  private imagesPath: string = environment.imagesPath;

  public transform(img: string): string {
    return `${this.imagesPath}${img}`;
  }
}
