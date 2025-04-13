import { createSafeActionClient } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  // more details: https://next-safe-action.dev/docs/define-actions/create-the-client#handleservererror
  handleServerError(error) {
    return error.message;
  },
});
