import { FC } from "react"
import { UseFormReturn } from "react-hook-form";
import { ContentsType, CreateContentsType } from "@/services/schema/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonSpinner } from "@/components/atoms/ButtonSpinner";
import { Header } from "@/components/molecules/Header";
import { Sidebar } from "@/components/molecules/Sidebar";

type Props = {
  isLoading: boolean;
  onSubmit: () => void;
  form: UseFormReturn<CreateContentsType>;
  contents: ContentsType;
}

export const EditContents: FC<Props> = ({
  isLoading,
  onSubmit,
  form,
  contents,
}) => {
  return (
    <div className="flex flex-col bg-[#F5F5F8] min-h-screen">
      <Header />
      <div className="flex flex-1 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex justify-center items-start mt-16">
          <div className="w-full max-w-[600px] px-4">
            <h1 className="text-3xl mt-4 mb-4 text-center font-bold">
              Edit Contents
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex flex-col gap-2">
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contents Name</FormLabel>
                          <FormControl>
                            <Input placeholder="〇〇課題" {...field} defaultValue={contents.name} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.name?.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="flex justify-center items-center"
                >
                  {isLoading ? <ButtonSpinner /> : null}
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
