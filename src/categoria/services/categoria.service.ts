import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  //Listar todas as categorias
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  //Buscar pelo id da categoria
  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id }
    });

    if (!categoria) {
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    return categoria;
  }

  //Buscar pela categoria
  async findAllByCategoria(nome_categoria: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: { nome_categoria: ILike(`%${nome_categoria}%`) }
    });
  }

  //Criar uma categoria
  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  //Atualizar a categoria
  async update(categoria: Categoria): Promise<Categoria> {
    await this.findById(categoria.id);
    return await this.categoriaRepository.save(categoria);
  }

  //Deletando a categoria
  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.categoriaRepository.delete(id);
  }
}
