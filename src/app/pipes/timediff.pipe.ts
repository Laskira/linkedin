import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'timeDiff'
})
export class TimediffPipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = typeof value === 'string' ? new Date(value) : value;

    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diff / (1000 * 60));
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutos`;
    } else if (diffInHours < 24) {
      return `${diffInHours} horas`;
    } else {
      return `${diffInDays} días`;
    }
  }
}
