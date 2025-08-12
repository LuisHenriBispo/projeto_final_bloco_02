import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

//Criando a tabela categorias
@Entity(
  {name: "tb_categorias"}
)

// Atributos da tabela categoria
export class Categoria{
  
  @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    nome_categoria: string;

    //Relacionamento com produto
    @OneToMany(() => Produto, produto => produto.categoria)
  produtos: Produto[];
}