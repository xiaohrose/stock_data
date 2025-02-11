import { PartialType } from '@nestjs/mapped-types';
import { CreateZqDto } from './create-zq.dto';

export class UpdateZqDto extends PartialType(CreateZqDto) {}
