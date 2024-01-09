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
