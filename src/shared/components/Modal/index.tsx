import * as Dialog from "@radix-ui/react-dialog";
// Components
import { ModalContent } from "./components/Content";
import { ModalHeader } from "./components/Header";
// Utils
import { cn } from "../../../core/utils/cn";

type ModalProps = {
  open: boolean;
  title: string;
  className?: string;
  children: React.ReactNode;
  headerSuffix?: React.ReactNode;
  onClose?(): void;
};

export function Modal({
  open,
  title,
  headerSuffix,
  className,
  children,
  onClose,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/30 backdrop-blur-sm z-30",
            "data-[state=open]:animate-content-fade"
          )}
        />

        <Dialog.Content
          className={cn(
            "w-4/5 max-w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 rounded-2xl z-[51] bg-white shadow-lg outline-none",
            // animation
            "data-[state=open]:animate-fade-in",
            "data-[state=close]:animate-fade-out",
            className
          )}
        >
          <ModalHeader title={title} onClose={onClose} suffix={headerSuffix} />

          <ModalContent>{children}</ModalContent>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
