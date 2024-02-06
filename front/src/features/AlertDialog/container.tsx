import { FC, useCallback, useState } from "react"
import { Alert } from "./presentation"
import { toast } from "react-toastify"
import { useUserInfo } from "@/hooks/useUserInfo"

type Props = {
  text: string
}

export const Container: FC<Props> = ({ text }) => {
  const [open, setOpen] = useState<boolean>(false);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { user } = useUserInfo();
  const userId = user?.id;

  const onSubmit = useCallback(async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/delete/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      toast.error('エラーが発生しました');
    } finally {
      setOpen(false);
    }
  }, [userId]);

  return (
    <Alert 
      text={text}
      open={open}
      setOpen={setOpen}
      onSubmit={onSubmit}
    />
  )
}
