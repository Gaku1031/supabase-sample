import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateUserType } from "@/services/schema/types";
import React, { FC } from "react";
import {
  UseFormReturn,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonSpinner } from "@/components/atoms/ButtonSpinner";
import { Header } from "@/components/molecules/Header";
import { Sidebar } from "@/components/molecules/Sidebar";

type Props = {
  form: UseFormReturn<CreateUserType>;
  onSubmit: (data: CreateUserType) => void;
  isLoading: boolean;
};

export const CreateUser: FC<Props> = ({
  onSubmit,
  form,
  isLoading,
}) => {
  return (
    <div className="flex flex-col bg-[#F5F5F8] min-h-screen">
      <Header />
      <div className="flex flex-1 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex justify-center items-start mt-16">
          <div className="w-full max-w-[600px] px-4">
            <h1 className="text-3xl mt-4 mb-4 text-center font-bold">
              Add Users
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
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Taro Yamada" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
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
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="aaa.bbb@gmail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="is_admin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>isAdmin</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="aaa.bbb@gmail.com" {...field} /> */}
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent {...field}>
                                <SelectItem value="true">True</SelectItem>
                                <SelectItem value="false">False</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {form.formState.errors.is_admin && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.is_admin?.message}
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
  );
};
