import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FC } from "react";
import { User } from "@/services/schema/types";
import { Header } from "@/components/molecules/Header";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/molecules/Sidebar";
import { Button } from "@/components/ui/button";
import { Alert } from "@/features/AlertDialog";
import Link from "next/link";

type Props = {
  userArray: User[];
};

export const Users: FC<Props> = ({ userArray }) => {
  return (
    <div className="flex flex-col bg-[#F5F5F8] min-h-screen">
      <Header />
      <div className="flex flex-1 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex justify-center items-start mt-16">
          <div className="w-full max-w-[800px] px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl mt-4 mb-4 text-center font-bold">Users</h1>
              <div className="flex items-center gap-2">
                <Link href="/admin/users/create">
                  <Button variant="outline">Add User</Button>
                </Link>
              </div>
            </div>
            <Table className="mt-4 bg-white">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Admin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userArray?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-center">
                      {user.is_admin ? (
                        <Badge>Admin</Badge>
                      ) : (
                        <Badge variant="secondary">User</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/admin/users/edit/?userId=${user.id}`}>
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
  );
};
