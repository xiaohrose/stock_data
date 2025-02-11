import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZqService } from './zq.service';
import { CreateZqDto } from './dto/create-zq.dto';
import { UpdateZqDto } from './dto/update-zq.dto';

@Controller('zq')
export class ZqController {
  constructor(private readonly zqService: ZqService) {}

  @Post()
  create(@Body() createZqDto: CreateZqDto) {
    return this.zqService.create(createZqDto);
  }

  @Get()
  findAll() {
    return this.zqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZqDto: UpdateZqDto) {
    return this.zqService.update(+id, updateZqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zqService.remove(+id);
  }
}
