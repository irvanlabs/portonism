// DTO untuk operasi insert article
export class CreateArticleDto {
    title!: string;
    content!: string;
    published?: boolean; // Opsional, default-nya false
    category!: [];
  }
  
  // DTO untuk operasi update article
  export class UpdateArticleDto {
    title?: string; // Opsional, hanya diisi jika ingin mengupdate
    content?: string; // Opsional, hanya diisi jika ingin mengupdate
    published?: boolean; // Opsional, hanya diisi jika ingin mengupdate
    category?: [];
  }

  export class createArticleCategoryDTO{
    name!: string;
  }