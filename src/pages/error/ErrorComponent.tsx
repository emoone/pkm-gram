interface PropsType {
  children: React.ReactNode;
}
export function ErrorComponent(props: PropsType) {
  const { children } = props;
  return { children };
}

function NotFound() {
  return <div>404 Not Found Page</div>;
}

function Error() {
  return <div>Error Page</div>;
}

ErrorComponent.NoFound = NotFound;
ErrorComponent.Error = Error;
