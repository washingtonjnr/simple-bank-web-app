import * as RdxPropover from "@radix-ui/react-popover";
// Utils
import { cn } from "../../../core/utils/cn";

function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <RdxPropover.Root>{children}</RdxPropover.Root>;
}

function PopoverTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild: boolean;
}) {
  return (
    <RdxPropover.Trigger asChild={asChild}>{children}</RdxPropover.Trigger>
  );
}

type PopoverContentProps = {
  className?: string;
  children: React.ReactNode;
};

function PopoverContent({ className, children }: PopoverContentProps) {
  return (
    <RdxPropover.Portal>
      <RdxPropover.Content
        className={cn(
          "w-full max-w-[279px] py-2 px-1 rounded-2xl bg-white space-y-2 shadow-lg z-[55]",
          // animation
          "data-[side=left]:animate-slide-left-and-fade",
          "data-[side=top]:animate-slide-up-and-fade",
          "data-[side=right]:animate-slide-right-and-fade",
          "data-[side=bottom]:animate-slide-down-and-fade",
          className
        )}
      >
        {children}
      </RdxPropover.Content>
    </RdxPropover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
