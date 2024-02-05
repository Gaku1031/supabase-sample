import { z } from 'zod';

import {
  signUpFormSchema,
  loginFormSchema,
  contentsSchema,
  languagesSchema,
  studyRecordSchema,
} from '.';

export type SignUpFormType = z.infer<typeof signUpFormSchema>;

export type LoginFormType = z.infer<typeof loginFormSchema>;

export type ContentsType = z.infer<typeof contentsSchema>;

export type LanguagesType = z.infer<typeof languagesSchema>;

export type StudyRecordType = z.infer<typeof studyRecordSchema>;
