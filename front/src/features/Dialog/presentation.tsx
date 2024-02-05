import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { FC } from "react";
import { ContentsType, LanguagesType, StudyRecordType } from "@/services/schema/types";
import { Controller, UseFormHandleSubmit, Control, FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  contents: ContentsType[];
  languages: LanguagesType[];
  handleSubmit: UseFormHandleSubmit<StudyRecordType>;
  control: Control<StudyRecordType>;
  errors: FieldErrors<StudyRecordType>;
  register: UseFormRegister<StudyRecordType>;
  onSubmit: (data: StudyRecordType) => void;
  isLoading: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Modal: FC<Props> = ({ 
  contents,
  languages,
  handleSubmit,
  control,
  errors,
  register,
  onSubmit,
  isLoading,
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <PrimaryButton type="button" text="記録・投稿" />
      </DialogTrigger>
      <DialogContent className="bg-white rounded-lg shadow px-10 py-5">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
          <div className="gap-4 mb-4">
            {" "}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="study_date" className="text-sm font-bold">
                  学習日
                </label>
                <input
                  type="date"
                  {...register("study_date")}
                  name="study_date"
                  className="rounded-lg w-full h-16 bg-[#F5F5F8] px-4 py-2"
                />
                {errors.study_date && <p className="text-red-500 text-xs mt-1">{errors.study_date.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contents" className="text-sm font-bold">
                  学習コンテンツ（複数選択可）
                </label>

                <div className="flex gap-2 flex-wrap">
                  {contents.map((content) => (
                    <div key={content.id} className="flex items-center">
                      <Controller
                        name="contents"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="checkbox"
                            value={content.id}
                            onChange={() => {
                              const currentValues = field.value || [];
                              const newValue = currentValues.includes(content.id)
                                ? currentValues.filter((id: number) => id !== content.id)
                                : [...currentValues, content.id];
                              field.onChange(newValue);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        )}
                      />
                      <label
                        htmlFor={`content-${content.id}`}
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        {content.name}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.contents && <p className="text-red-500 text-xs mt-1">{errors.contents.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contents" className="text-sm font-bold">
                  学習言語（複数選択可）
                </label>

                <div className="flex gap-2 flex-wrap">
                  {languages.map((language) => (
                    <div key={language.id} className="flex items-center">
                      <Controller
                        name="languages"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="checkbox"
                            value={language.id}
                            onChange={() => {
                              const currentValues = field.value || [];
                              const newValue = currentValues.includes(language.id)
                                ? currentValues.filter((id: number) => id !== language.id)
                                : [...currentValues, language.id];
                              field.onChange(newValue);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        )}
                      />
                      <label
                        htmlFor={`language-${language.id}`}
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        {language.name}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.languages && <p className="text-red-500 text-xs mt-1">{errors.languages.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="study_hours" className="text-sm font-bold">
                  学習時間
                </label>
                <input
                  type="number"
                  {...register("study_hours")}
                  name="study_hours"
                  className="rounded-lg w-full h-16 bg-[#F5F5F8] px-4 py-2"
                />
                {errors.study_hours && <p className="text-red-500 text-xs mt-1">{errors.study_hours.message}</p>}
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-end">
            <PrimaryButton text="記録・投稿" type="submit" isLoading={isLoading} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
