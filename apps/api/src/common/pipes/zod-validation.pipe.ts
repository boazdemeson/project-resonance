import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: unknown) {
    console.log('PIPE incoming value:', value);
    console.log('PIPE incoming type:', typeof value);

    let parsed = value;

    if (typeof parsed === 'string') {
      try {
        parsed = JSON.parse(parsed);
      } catch (error) {
        console.log('PIPE failed to parse string body:', parsed);
        throw new BadRequestException({
          code: 'validation_error',
          message: 'Request body must be valid JSON',
        });
      }
    }

    const result = this.schema.safeParse(parsed);

    if (!result.success) {
      throw new BadRequestException({
        code: 'validation_error',
        message: result.error.issues.map((i) => i.message).join(', '),
      });
    }

    return result.data;
  }
}