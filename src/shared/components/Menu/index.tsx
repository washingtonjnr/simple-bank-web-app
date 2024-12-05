// Components
import { Dropdown } from "../Dropdown";
// Hooks
import { ExitIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../../core/hooks/useAuth";

export function Menu() {
  const { user, removeSignedIn } = useAuth();

  if (!user?.name) return null;

  const names = user.name.split(" ");
  const letters = `${names[0].charAt(0)}${names[names.length - 1].charAt(
    0
  )}`.toLocaleUpperCase();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 ">
          <span className="text-red-900 font-medium" title={user.name}>
            {letters}
          </span>
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content className="w-32">
        <Dropdown.Item
          className="flex items-center justify-between"
          onSelect={() => removeSignedIn()}
        >
          <span>Sair</span>
          <ExitIcon className="w-4 h-4 mr-2" />
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
