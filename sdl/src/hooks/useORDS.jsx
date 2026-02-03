import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * ! Custom hook to manage data fetching and mutation with TanStack Query.
 *
 * @param {Array} queryKey - The unique key for the query.
 * @param {Function} fetchFunction - Function to fetch data.
 * @param {Function} mutationFunction - Function to mutate data.
 * @param {Object} options - Optional configurations.
 * @param {boolean} options.enabled - Whether the query should run.
 * @param {number} options.staleTime - How long the data is considered fresh.
 * @param {number} options.cacheTime - How long the data remains in cache after being unused.
 * @param {Object} options.mutationOptions - Additional options for mutations.
 * @param {Function} options.mutationOptions.onMutate - Called before a mutation function is fired.
 * @param {Function} options.mutationOptions.onSuccess - Called if a mutation function succeeds.
 * @param {Function} options.mutationOptions.onError - Called if a mutation function fails.
 * @param {Function} options.mutationOptions.onSettled - Called when a mutation function settles.
 * @returns {Object} - Returns query and mutation utilities.
 */
const useORDS = ({
  queryKey,
  fetchFunction,
  mutationFunction,
  options = {},
}) => {
  const queryClient = useQueryClient();

  // Destructure options for ease of use
  const {
    enabled = true,
    staleTime = 0,
    cacheTime = 1 * 60 * 1000, // ! 1 minute
    mutationOptions = {},
    retry = 1, //!  Meaning that it will fetch data 2 times (usual call and 1 retry)
    refetchInterval = 0, // ! Auto Refetch 0 ms by default
  } = options;

  // Data Fetching
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isFetched,
    isStale,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey,
    queryFn: fetchFunction,
    enabled,
    staleTime,
    cacheTime,
    retry,
    refetchInterval,
    /* 
    ! @ refetchOnWindowFocus
    ! If set to true, the query will refetch on window focus if the data is stale.
    ! If set to false, the query will not refetch on window focus.
    ! If set to "always", the query will always refetch on window focus.
    */
    refetchOnWindowFocus: false,
  });

  const invalidateQuery = (queryKey) => {
    queryClient.invalidateQueries(queryKey);
  };

  // Data Mutation
  const {
    data: mutateData,
    mutate,
    isLoading: isMutating,
    error: mutationError,
    isError: isMutationError,
    isSuccess: isMutationSuccess,
  } = useMutation({
    mutationFn: mutationFunction,
    ...mutationOptions,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(queryKey);
      if (mutationOptions.onSuccess) {
        mutationOptions.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (mutationOptions.onError) {
        mutationOptions.onError(error, variables, context);
      }
    },
    onSettled: (data, error, variables, context) => {
      if (mutationOptions.onSettled) {
        mutationOptions.onSettled(data, error, variables, context);
      }
    },
  });

  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isFetched,
    refetch,
    isRefetching,
    isStale,
    mutateData,
    mutate,
    isMutating,
    mutationError,
    isMutationError,
    isMutationSuccess,
    invalidateQuery,
  };
};

export default useORDS;
