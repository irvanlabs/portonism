// DTO untuk operasi insert article
export class CreateArticleDto {
    title!: string;
    content!: string;
    published?: boolean | null; // Opsional, default-nya false
    categories!: number[];
  }
  
  // DTO untuk operasi update article
  export class UpdateArticleDto {
    title?: string; // Opsional, hanya diisi jika ingin mengupdate
    content?: string; // Opsional, hanya diisi jika ingin mengupdate
    published?: boolean | null; // Opsional, hanya diisi jika ingin mengupdate
    categories?: number[]; // Opsional 
  }

  export class createArticleCategoryDTO{
    name!: string;
  }