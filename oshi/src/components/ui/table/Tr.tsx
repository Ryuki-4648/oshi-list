type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Tr({ className, children }: Props) {
  return <tr className={`selection:${className} py-2`}>{children}</tr>;
}
