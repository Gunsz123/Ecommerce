import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  spanClassName?: string;
}

const Logo = ({ className, spanClassName }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underline-offset-4 deecoration-[1px] group",
        className
      )}>
      <span
        className={cn(
          "bg-zinc-950 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 pb-1 group-hover:bg-red-600  duration-300",
          spanClassName
        )}>
        E
      </span>
      -commerce
    </Link>
  );
};

export default Logo;
