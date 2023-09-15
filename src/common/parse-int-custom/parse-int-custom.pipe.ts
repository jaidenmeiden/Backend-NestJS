import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntCustomPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (this.isNotInteger(value)) {
      throw new BadRequestException(`${value} is not number!`);
    } else {
      return  parseInt(value, 10);
    }
  }

  isNotInteger(value) {
    return /^[0-9]+$/.test(value) === false;
  }
}
