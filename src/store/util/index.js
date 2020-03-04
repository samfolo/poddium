export const updatedObject = (state, updates = {}) => {
  return {
    ...state,
    ...updates,
  }
}
