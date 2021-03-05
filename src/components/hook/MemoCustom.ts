const useMemo = (fn: Function) => {
  let lastArgs: any;
  let lastResult: any;

  function memo(newArgs: any) {
    if (lastArgs == newArgs) {
      return lastResult;
    }
    lastArgs = newArgs;
    lastResult = fn();
    return lastResult;
  }

  return memo;
}

export {useMemo}