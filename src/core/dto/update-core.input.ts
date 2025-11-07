import { CreateCoreInput } from './create-core.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoreInput extends PartialType(CreateCoreInput) {
  id: number;
}
