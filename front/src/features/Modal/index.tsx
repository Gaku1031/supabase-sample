import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { FC } from "react";
import Image from "next/image";

type Props = {
  setIsModalOpen: (value: boolean) => void;
};

export const Modal: FC<Props> = ({ setIsModalOpen }) => {
  return (
    <div
      id="crud-modal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full px-20 py-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="relative p-4 w-full max-w-md max-h-full flex justify-center">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow px-10 py-5">
          {/* Modal header */}
          <div className="flex items-center rounded-t w-4 h-4">
            <button
              onClick={() => setIsModalOpen(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {/* Modal body */}
          <form className="p-4 md:p-5">
            <div className="gap-4 mb-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="study_date" className="text-sm font-bold">
                    学習日
                  </label>
                  <input
                    type="text"
                    name="study_date"
                    className="rounded-lg w-full h-16 bg-[#F5F5F8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contents" className="text-sm font-bold">
                    学習コンテンツ（複数選択可）
                  </label>

                  {/* TODO: チェックボックスのコンポーネントを作成&apiから取得したデータを表示 */}
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor=""
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        インプット課題
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor=""
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        POSSE課題
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contents" className="text-sm font-bold">
                    学習言語（複数選択可）
                  </label>

                  {/* TODO: チェックボックスのコンポーネントを作成&apiから取得したデータを表示 */}
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor=""
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        HTML
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor=""
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        CSS
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <PrimaryButton text="記録・投稿" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
