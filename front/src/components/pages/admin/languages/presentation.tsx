import { LanguagesType } from '@/services/schema/types'
import React, { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Header } from "@/components/molecules/Header";
import { Sidebar } from "@/components/molecules/Sidebar";
import { Button } from "@/components/ui/button";
import { Alert } from "@/features/AlertDialog";
import Link from "next/link";

type Props = {
  languages: LanguagesType[]
}

export const Languages: FC<Props> = ({
  languages
}) => {
  return (
    <div className="flex flex-col bg-[#F5F5F8] min-h-screen">
      <Header />
      <div className="flex flex-1 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex justify-center items-start mt-16">
          <div className="w-full max-w-[800px] px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl mt-4 mb-4 text-center font-bold">Contents</h1>
              <div className="flex items-center gap-2">
                <Link href="/admin/languages/create">
                  <Button variant="outline">Add Languages</Button>
                </Link>
              </div>
            </div>
            <Table className="mt-4 bg-white">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Id</TableHead>
                  <TableHead>Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {languages?.map((language) => (
                  <TableRow key={language.id}>
                    <TableCell className="font-medium">{language.id}</TableCell>
                    <TableCell>{language.name}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/admin/languages/edit/?id=${language.id}`}>
                        <Button variant="outline">Edit</Button>
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                      <Alert text="Delete" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
