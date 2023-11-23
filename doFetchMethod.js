export function doFetchMethod(choice) {
  const getOption = {
    method: choice,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQzNjkxZWE3YzRmMjkxMGE4ZGQ3NzNkMDUzOTVmYiIsInN1YiI6IjY1NWVjMzNiMmIxMTNkMDBjYTRmMjYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GlFCmKE2ElUucxtGXOol4KW7rCVHOQOUFiR6B2Z4rOw',
    },
  };
  return getOption;
}
