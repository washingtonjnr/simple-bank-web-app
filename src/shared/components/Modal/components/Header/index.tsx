import { Cross2Icon } from "@radix-ui/react-icons";

type ModalHeaderProps = {
  title: string;
  suffix?: React.ReactNode;
  onClose?(): void;
};

export function ModalHeader({ title, suffix, onClose }: ModalHeaderProps) {
  return (
    <header
      className="flex items-center justify-between text-gray-800"
    >
      <button
        onClick={onClose}
        className="w-6 outline-none"
      >
        <Cross2Icon
          className="w-5 h-5"
        />
      </button>

      <span
        className="text-lg font-bold tracking-[-0.5px]"
      >
        {title}
      </span>

      <div
        className="w-6"
      >
        {suffix}
      </div>
    </header>
  );
}
