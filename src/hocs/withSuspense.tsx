import { ComponentType, ReactElement, Suspense } from "react";

const withSuspense = <T extends {}>(
  WrappedComponent: ComponentType<T>,
  LoadingModule?: ReactElement
) => {
  function LazyComponent(props: T) {
    return (
      <Suspense fallback={LoadingModule ?? <div>loading...</div>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  }
  return LazyComponent;
};

export default withSuspense;
