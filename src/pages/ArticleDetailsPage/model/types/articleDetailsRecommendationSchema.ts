import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entitiess/Article";

export interface articleDetailsRecommendationSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
