import { create } from "./create";
import { get } from "./get";
import { getAll } from "./getAll";
import { remove } from "./remove";
import { update, updateBankAccountBalance } from "./update";

export const bankAccountService = {
  get,
  getAll,
  create,
  update,
  remove,
  updateBankAccountBalance,
};
