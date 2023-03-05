import { useCallback, useState } from "react";
import { useAppDispatch } from "../store";

const useThunk = (thunk: AsyncThunk<any, any, any>) => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

    const execute = useCallback((arg?: number | AbortSignal) => {
      setLoading(true)
      dispatch(thunk(arg))
      .unwrap()
      .then()
      .catch(error => setError(error))
      .finally(() => setLoading(false))
    }, [dispatch, thunk])

    return [loading, error, execute] as const
}

export default useThunk;
