import { LoadingState } from 'src/config/loading-state';

// Helper to set global loading state
export const setLoading = (isLoading = false) => LoadingState.$emit('toggle', isLoading);
