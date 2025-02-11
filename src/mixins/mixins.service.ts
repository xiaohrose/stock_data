import { Injectable } from '@nestjs/common';
import { CreateMixinDto } from './dto/create-mixin.dto';
import { UpdateMixinDto } from './dto/update-mixin.dto';

@Injectable()
export class MixinsService {
  create(createMixinDto: CreateMixinDto) {
    return 'This action adds a new mixin';
  }

  findAll() {
    return `This action returns all mixins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mixin`;
  }

  update(id: number, updateMixinDto: UpdateMixinDto) {
    return `This action updates a #${id} mixin`;
  }

  remove(id: number) {
    return `This action removes a #${id} mixin`;
  }
}
