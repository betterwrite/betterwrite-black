import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CoreService } from './core.service';
import { CreateCoreInput } from './dto/create-core.input';
import { UpdateCoreInput } from './dto/update-core.input';

@Resolver('Core')
export class CoreResolver {
  constructor(private readonly coreService: CoreService) {}

  @Mutation('createCore')
  create(@Args('createCoreInput') createCoreInput: CreateCoreInput) {
    return this.coreService.create(createCoreInput);
  }

  @Query('core')
  findAll() {
    return this.coreService.findAll();
  }

  @Query('core')
  findOne(@Args('id') id: number) {
    return this.coreService.findOne(id);
  }

  @Mutation('updateCore')
  update(@Args('updateCoreInput') updateCoreInput: UpdateCoreInput) {
    return this.coreService.update(updateCoreInput.id, updateCoreInput);
  }

  @Mutation('removeCore')
  remove(@Args('id') id: number) {
    return this.coreService.remove(id);
  }
}
