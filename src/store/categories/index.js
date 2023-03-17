import { createReducer, createAction, createSelector } from "@reduxjs/toolkit";

const INIT_STATE = {
  categories: {}
}

export const setCategories = createAction('categories/setCategories')

export const categoriesReducer = createReducer(INIT_STATE, (builder) => {
  builder
    .addCase(setCategories, (state, action) => {
      state.categories = action.payload
    })
})

const selectCategoriesReducer = state => state.categories

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories
)