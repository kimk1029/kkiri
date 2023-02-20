import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  
  async create(createCategoryDto: CreateCategoryDto) { 
    const category = new Category();
    category.name = createCategoryDto.name;
    category.upperLevCatId = +createCategoryDto.upperLevCatId;
    category.showYn = createCategoryDto.showYn;
    await category.save();
    return category;
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Category>> {
    const ctegoryRepository = Category.getRepository();
    return await paginate(query, ctegoryRepository, {
      sortableColumns: ['id'],
      nullSort: 'last',
      searchableColumns: ['upperLevCatId', 'name', 'showYn'],
      defaultSortBy: [['id', 'DESC']],
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    console.log('id number');
    const category = await Category.findOneBy({ id });
    if (!category)
      throw new HttpException('No category matching id.', HttpStatus.BAD_REQUEST);
    if(!updateCategoryDto.name)
      category.name = updateCategoryDto.name;
    if(!isNaN(updateCategoryDto.upperLevCatId))
      category.upperLevCatId = +updateCategoryDto.upperLevCatId;
    if(!updateCategoryDto.showYn)  
      category.showYn = updateCategoryDto.showYn;
    await category.save();
    return category;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
