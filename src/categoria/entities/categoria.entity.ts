import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}