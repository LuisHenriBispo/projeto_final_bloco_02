import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";
import { ProdutoModule } from "../produto/produto.module";

@Module({
    imports:[TypeOrmModule.forFeature([Categoria]), ProdutoModule],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule],
})
export class CategoriaModule{}    
