import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';

import { sendMessageAction } from '../actions/send-message-action';
import { sendMessageSchema } from '../validators/send-message';

export function useContactForm() {
  const { form, handleSubmitWithAction } = useHookFormAction(
    sendMessageAction,
    zodResolver(sendMessageSchema),
    {
      actionProps: {
        onSuccess: (data) => {
          console.log(
            'Message sent successfully: ',
            JSON.stringify(data, null, 2),
          );
          // TODO: notify success
          form.reset();
        },
        onError: (error) => {
          console.error(
            'Failed to send message: ',
            JSON.stringify(error, null, 2),
          );
          // TODO: notify error
          form.reset();
        },
      },
      formProps: {
        defaultValues: {
          name: '',
          email: '',
          message: '',
        },
      },
    },
  );

  return {
    form,
    handleSubmitWithAction,
  };
}
