import React, { FC, useCallback, FormEvent } from 'react';
import axios from 'axios';
import useSWR from 'swr';

export const Upload: FC = () => {
  const http = axios.create({
    baseURL: 'http://localhost', // APIのベースURLを設定
    withCredentials: true,
  });

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // `event.target`から`event.currentTarget`に変更
    formData.append('file', event.currentTarget.file.files[0]); // 正しくフォームデータにファイルを追加

    const response = await http.post('/api/send-emails', formData, { // 第二引数に`formData`を直接渡す
      headers: {
        'Content-Type': 'multipart/form-data', // マルチパートフォームデータとして送信
      },
    });

    if (response.status === 200) {
      console.log('メール送信成功');
    } else {
      console.log('メール送信失敗');
    }
  }, [http]);

  const { data } = useSWR('http://localhost:3001/authors', () => fetch('http://localhost:3001/authors').then((res) => res.json()));
  console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" required />
      <button type="submit">メール送信</button>
    </form>
  );
}
