import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entitiess/Article";
import { articleDetailsRecommendationSchema } from "../types/articleDetailsRecommendationSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});
export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  );

const articleDetailsPageRecommendationSlice = createSlice({
  name: "articleDetailsPageRecommendationSlice",
  initialState:
    recommendationsAdapter.getInitialState<articleDetailsRecommendationSchema>({
      isLoading: false,
      ids: [],
      entities: {},
      error: undefined,
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsPageRecommendation } =
  articleDetailsPageRecommendationSlice;
export const { reducer: articleDetailsPageRecommendationReducer } =
  articleDetailsPageRecommendationSlice;
