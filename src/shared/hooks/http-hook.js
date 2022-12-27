import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequest = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortController = new AbortController();
      activeHttpRequest.current.push(httpAbortController);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortController.signal,
        });

        const responseData = await response.json();

        activeHttpRequest.current = activeHttpRequest.current.filter(
          (requestController) => requestController !== httpAbortController
        );
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        if (!err.message === "The user aborted a request.") {
          setError(err.message);
          setIsLoading(false);
          throw err;
        }
      }
    },
    []
  );
  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((AbortController) =>
        AbortController.abort()
      );
    };
  }, []);
  return { isLoading, error, sendRequest, clearError };
};
