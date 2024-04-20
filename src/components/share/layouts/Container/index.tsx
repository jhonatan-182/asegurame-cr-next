import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-[95%] mx-auto 2xl:w-[80%]", className)}>
      {children}
    </div>
  );
}
