type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Th({ className, children }: Props) {
  return <th className={`selection:${className} py-2`}></th>;
}
