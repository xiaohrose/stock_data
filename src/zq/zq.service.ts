import { Injectable } from '@nestjs/common';
import { CreateZqDto } from './dto/create-zq.dto';
import { UpdateZqDto } from './dto/update-zq.dto';

@Injectable()
export class ZqService {
  create(createZqDto: CreateZqDto) {
    return 'This action adds a new zq';
  }

  findAll() {
    return `This action returns all zq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zq`;
  }

  update(id: number, updateZqDto: UpdateZqDto) {
    return `This action updates a #${id} zq`;
  }

  remove(id: number) {
    return `This action removes a #${id} zq`;
  }
}
