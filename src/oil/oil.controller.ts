import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OilService } from './oil.service';
import { CreateOilDto } from './dto/create-oil.dto';
import { UpdateOilDto } from './dto/update-oil.dto';

@Controller('oil')
export class OilController {
  constructor(private readonly oilService: OilService) {}

  @Post()
  create(@Body() createOilDto: CreateOilDto) {
    return this.oilService.create(createOilDto);
  }

  @Get()
  findAll() {
    return this.oilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOilDto: UpdateOilDto) {
    return this.oilService.update(+id, updateOilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oilService.remove(+id);
  }
}
