import Link from "next/link";

export const OutboundLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} target="_blank" className="underline">
      {children}
    </Link>
  );
};
