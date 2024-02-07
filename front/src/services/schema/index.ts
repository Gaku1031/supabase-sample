import { z } from 'zod';

export const signUpFormSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().min(1, 'メールアドレスを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
  passwordConfirm: z.string().min(1, '確認用のパスワードを入力してください'),
})
.superRefine(({ password, passwordConfirm }, ctx) => {
  if (password !== passwordConfirm) {
    ctx.addIssue({
      path: ['passwordConfirm'],
      code: 'custom',
      message: 'パスワードが一致しません',
    });
  }
});

export const loginFormSchema = z.object({
  email: z.string().min(1, 'メールアドレスを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
});

export const contentsSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const languagesSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const studyRecordSchema = z.object({
  study_date: z.string().min(1, '日付を入力してください'),
  study_hours: z.number()
    .or(z.string().transform((val) => parseFloat(val)))
    .refine((val) => !isNaN(val) && val >= 1, { message: '学習時間を入力してください' }),
  // contents: z.array(z.number())
  //   .refine((arr) => arr.length > 0, { message: '学習コンテンツを選択してください' }),
  contents: z.array(z.number()).refine((data) => data.length > 0, { message: '学習コンテンツを選択してください' }),
  languages: z.array(z.number()).min(1, '学習言語を選択してください'),
})

export const UserSchema = z.object({
  email: z.string(),
  id: z.string(),
  is_admin: z.boolean(),
  name: z.string(),
})

export const CreateUserSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().min(1, 'メールアドレスを入力してください'),
  is_admin: z.boolean(),
})

export const UpdateUserSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().min(1, 'メールアドレスを入力してください'),
  is_admin: z.boolean(),
})

export const CreateContentsSchema = z.object({
  name: z.string().min(1, 'コンテンツ名を入力してください'),
})

export const UpdateContentsSchema = z.object({
  name: z.string().min(1, 'コンテンツ名を入力してください'),
})

export const CreateLanguagesSchema = z.object({
  name: z.string().min(1, '言語名を入力してください'),
})

export const UpdateLanguagesSchema = z.object({
  name: z.string().min(1, '言語名を入力してください'),
})
