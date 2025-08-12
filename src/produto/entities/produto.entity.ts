import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tb_produtos" })
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
    
}