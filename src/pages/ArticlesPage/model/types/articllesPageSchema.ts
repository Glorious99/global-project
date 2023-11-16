import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entitiess/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
}
