export const UIActionTypes = {
  IS_LOADING: 'UI/IS_LOADING'
};

export function toggleLoading(isLoading) {
  return { type: UIActionTypes.IS_LOADING, isLoading };
}
