import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
})
export class UsernamePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (value) {
      return value.user?.name + ' | ' + value.user?.organization;
    }
    return null;
  }
}
