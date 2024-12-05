import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// Utils
import { cn } from "../../../core/utils/cn";

type GenericDropdownProps = {
  children: React.ReactNode;
  className?: string;
};

export function DropdownRoot({ children }: { children: React.ReactNode }) {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
}

export function DropdownTrigger({
  asChild,
  children,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <DropdownMenu.Trigger className="outline-none" asChild={asChild}>
      {children}
    </DropdownMenu.Trigger>
  );
}

interface DropdownContentProps extends GenericDropdownProps {
  side?: "left" | "top" | "right" | "bottom";
}

export function DropdownContent({
  children,
  className,
  side,
}: DropdownContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        side={side}
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
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}

interface DropdownItemProps extends GenericDropdownProps {
  onSelect?(): void;
}

export function DropdownItem({
  children,
  className,
  onSelect,
}: DropdownItemProps) {
  return (
    <DropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "min-h-12 flex items-center gap-2 py-2 px-1 text-sm text-gray-800 outline-none data-[highlighted]:bg-red-50 data-[highlighted]:text-red-900 transition-all cursor-pointer rounded-2xl",
        className
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
}

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
};
