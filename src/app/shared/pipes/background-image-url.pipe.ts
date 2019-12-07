import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImageUrl'
})
export class BackgroundImageUrlPipe implements PipeTransform {
  public transform(img: string): string {
    return `url(${img})`;
  }
}
