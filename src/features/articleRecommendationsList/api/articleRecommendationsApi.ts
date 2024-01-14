import { rtkApi } from "shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),

    // createArticleRecommendationsList: build.mutation({
    //   query: (limit) => ({
    //     url: "/articles",
    //     params: {
    //       _limit: limit,
    //     },
    //     method: "PUT",
    //   }),
    // }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery;

// export const useCreateRecommendationsList =
//   recommendationsApi.useCreateArticleRecommendationsListMutation;
