import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MixinsService } from './mixins.service';
import { CreateMixinDto } from './dto/create-mixin.dto';
import { UpdateMixinDto } from './dto/update-mixin.dto';

@Controller('mixins')
export class MixinsController {
  constructor(private readonly mixinsService: MixinsService) {}

  @Post()
  create(@Body() createMixinDto: CreateMixinDto) {
    return this.mixinsService.create(createMixinDto);
  }

  @Get()
  findAll() {
    return this.mixinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mixinsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMixinDto: UpdateMixinDto) {
    return this.mixinsService.update(+id, updateMixinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mixinsService.remove(+id);
  }
}
