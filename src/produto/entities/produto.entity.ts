import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

//Criando a tabela produtos
@Entity({ name: "tb_produtos" })

// Atributos da tabela produtos
export class Produto {
  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  fabricante: string

  @UpdateDateColumn()
  data_validade: Date;

  @IsNumber()
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  preco: number;

  //Relacionamento com categoria
  @ManyToOne(() => Categoria, categoria => categoria.produtos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

}