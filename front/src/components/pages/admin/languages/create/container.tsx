import { CreateLanguage } from "./presentation"
import { FC, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { CreateLanguagesType } from "@/services/schema/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateLanguagesSchema } from "@/services/schema";
import { toast } from "react-toastify";

export const Container: FC = () => {
  const router = useRouter();
  const form = useForm<CreateLanguagesType>({
    resolver: zodResolver(CreateLanguagesSchema),
    defaultValues: {
      name: '',
    }
  })

  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/languages/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getValues()),
      });
    } catch (error) {
      setIsLoading(false);
      toast.error('エラーが発生しました');
    } finally {
      setIsLoading(false);
      router.push('/admin/languages');
    }
  }, [router, form]);

  return  (
    <CreateLanguage 
      isLoading={isLoading}
      onSubmit={onSubmit}
      form={form}
    />
  )
}
