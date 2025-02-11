import { PartialType } from '@nestjs/mapped-types';
import { CreateMixinDto } from './create-mixin.dto';

export class UpdateMixinDto extends PartialType(CreateMixinDto) {}
