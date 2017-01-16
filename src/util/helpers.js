import { LoadingState } from 'src/main';

// Helper to set global loading state
export const setLoading = (isLoading = false) => LoadingState.$emit('toggle', isLoading);
