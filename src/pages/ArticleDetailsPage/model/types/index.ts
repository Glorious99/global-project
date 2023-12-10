import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { articleDetailsRecommendationSchema } from "./articleDetailsRecommendationSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: articleDetailsRecommendationSchema;
}
