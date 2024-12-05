import { CheckIcon, Cross2Icon, QuestionMarkIcon } from "@radix-ui/react-icons";
// Components
import { Modal } from "../Modal";
import { Button } from "../Button";

type AlertProps = {
  title: string;
  open: boolean;
  isLoading?: boolean;
  onOk?(): void;
  onClose(): void;
  type: "DIALOG" | "SUCCESS" | "ERROR" | "INFO";
  children: React.ReactNode;
};

export function Alert({
  type,
  title,
  open,
  isLoading,
  children,
  onClose,
  onOk,
}: AlertProps) {
  return (
    <Modal open={open} title={title} onClose={onClose}>
      {type === "DIALOG" && (
        <>
          {children}

          <div className="flex flex-col mt-8 gap-2">
            <Button onClick={onOk} variant="DANGER" isLoading={isLoading}>
              Yes I want
            </Button>

            <Button
              variant="GHOST"
              onClick={onClose}
            >
              No
            </Button>
          </div>
        </>
      )}

      {type === "ERROR" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 flex justify-center items-center bg-red-50 rounded-full">
            <Cross2Icon className="w-6 h-6 text-red-900" />
          </div>

          {children}

          <div className="w-full flex flex-col mt-4 gap-2">
            <Button
              variant="GHOST"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {type === "SUCCESS" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 flex justify-center items-center bg-green-50 rounded-full">
            <CheckIcon className="w-6 h-6 text-green-900" />
          </div>

          {children}

          <div className="w-full flex flex-col mt-4 gap-2">
            <Button
              variant="GHOST"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {type === "INFO" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-full">
            <QuestionMarkIcon className="w-6 h-6 text-gray-900" />
          </div>

          {children}

          <div className="w-full flex flex-col mt-4 gap-2">
            <Button
              variant="GHOST"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
