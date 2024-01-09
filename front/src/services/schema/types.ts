import { z } from 'zod';

import {
  signUpFormSchema,
  loginFormSchema,
} from '.';

export type SignUpFormType = z.infer<typeof signUpFormSchema>;

export type LoginFormType = z.infer<typeof loginFormSchema>;
