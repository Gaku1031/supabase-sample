import { z } from 'zod';

import {
  signUpFormSchema,
  loginFormSchema,
  contentsSchema,
  languagesSchema,
  studyRecordSchema,
  UserSchema,
  CreateUserSchema,
  UpdateUserSchema,
  CreateContentsSchema,
  UpdateContentsSchema,
  CreateLanguagesSchema,
  UpdateLanguagesSchema,
} from '.';

export type SignUpFormType = z.infer<typeof signUpFormSchema>;

export type LoginFormType = z.infer<typeof loginFormSchema>;

export type ContentsType = z.infer<typeof contentsSchema>;

export type LanguagesType = z.infer<typeof languagesSchema>;

export type StudyRecordType = z.infer<typeof studyRecordSchema>;

export type User = z.infer<typeof UserSchema>;

export type CreateUserType = z.infer<typeof CreateUserSchema>;

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;

export type CreateContentsType = z.infer<typeof CreateContentsSchema>;

export type UpdateContentsType = z.infer<typeof UpdateContentsSchema>;

export type CreateLanguagesType = z.infer<typeof CreateLanguagesSchema>;

export type UpdateLanguagesType = z.infer<typeof UpdateLanguagesSchema>;
