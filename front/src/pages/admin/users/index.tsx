import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { FC } from "react";
// import axios from "axios";

import { Users } from "@/components/pages/admin/users";

const Component: FC = () => (
  <>
    <Head>
      <title>ユーザー管理</title>
    </Head>

    <Users />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

//     // 管理者の確認
//     if (!res.data.isAdmin) {
//       return {
//         redirect: {
//           destination: "/error",
//           permanent: false,
//         },
//       };
//     }

//     return { props: {} };
//   } catch (error: unknown) {
//     // errorがAxiosErrorであるかチェック
//     if (axios.isAxiosError(error)) {
//       // AxiosErrorの場合、ステータスコードを取得
//       const statusCode = error.response ? error.response.status : null;

//       // 403エラーの場合、特定のエラーページにリダイレクト
//       if (statusCode === 403) {
//         return {
//           redirect: {
//             destination: "/error",
//             permanent: false,
//           },
//         };
//       } else {
//         // その他のエラーの場合、汎用エラーページにリダイレクト
//         return {
//           redirect: {
//             destination: "/error", // 汎用エラーページへのパス
//             permanent: false,
//           },
//         };
//       }
//     } else {
//       // AxiosError以外のエラーの場合、一般的なエラーハンドリングを行う
//       // ここでの処理はプロジェクトによって異なる
//       return {
//         redirect: {
//           destination: "/error",
//           permanent: false,
//         },
//       };
//     }
//   }
// };

export default Page;
