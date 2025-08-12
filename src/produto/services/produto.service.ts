import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ProdutoService {

    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) { }

     //Listar todos os produtos
    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true
            }
        });
    }

    //Listar produtos por id
    async findById(id: number): Promise<Produto> {

        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        });

        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto;
    }

    // Listar produto por nome
    async findAllBynome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    //Criar produto
    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto);
    }

    //Atualizar produto
    async update(produto: Produto): Promise<Produto> {

        await this.findById(produto.id);

        return await this.produtoRepository.save(produto);
    }

    //Deletar produto
    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.produtoRepository.delete(id);

    }
    
}