import { Injectable } from '@nestjs/common';
import { CreateCoreInput } from './dto/create-core.input';
import { UpdateCoreInput } from './dto/update-core.input';

@Injectable()
export class CoreService {
  create(createCoreInput: CreateCoreInput) {
    return 'This action adds a new core';
  }

  findAll() {
    return `This action returns all core`;
  }

  findOne(id: number) {
    return `This action returns a #${id} core`;
  }

  update(id: number, updateCoreInput: UpdateCoreInput) {
    return `This action updates a #${id} core`;
  }

  remove(id: number) {
    return `This action removes a #${id} core`;
  }
}
