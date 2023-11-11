"use client";
import { Avatar } from "@/components/dashboard";
import { AddWorkerForm } from "@/components/workerks/AddWorkerForm";
import { getName } from "@/lib/utils";
import { useGetWorkersQuery } from "@/services/HRService";
import { useUser } from "@/store/hooks";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Link from "next/link";
import { useState } from "react";

enum WorkerStatus {
  Active = "По плану",
  Inactive = "Отставание",
  NotStarted = "Не начато",
}

const page = () => {
  const { data, error, isLoading } = useGetWorkersQuery();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const hr = useUser().user;

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка</div>;
  if (!hr)
    return (
      <div>
        Вероятно вы перезагрузили страницу, на текущий момент persist стейта
        ридакса не реализован, пожалуйста залогиньтесь заново
      </div>
    );
  return (
    <>
      <div className="flex flex-col w-full px-6 py-8 gap-6 relative">
        <div className="flex justify-between">
          <h1 className="font-medium">Сотрудники ({data?.length})</h1>
          <Button
            className="py-[10px] px-[24px] text-white"
            color="blue"
            onClick={openModal}
          >
            <span className="text-base">Добавить сотрудника</span>
          </Button>
        </div>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell className="pl-14">Имя Фамилия</TableHeaderCell>
                <TableHeaderCell>Должность</TableHeaderCell>
                <TableHeaderCell>Дата начала</TableHeaderCell>
                <TableHeaderCell>Статус</TableHeaderCell>
                <TableHeaderCell>Выполнение, %</TableHeaderCell>
                <TableHeaderCell>Последняя активность</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((employee, key) => (
                <TableRow key={key}>
                  <TableCell className="flex items-center gap-2">
                    <Avatar name={getName(employee)} size="36" round={true} />
                    <Link href={`employees/${employee.workerId}`}>
                      {getName(employee)}
                    </Link>
                  </TableCell>
                  <TableCell>{employee.jobTitle}</TableCell>
                  <TableCell>11.11.2023</TableCell>
                  <TableCell>
                    <div
                      // className={`${
                      //   item.status === WorkerStatus.Active
                      //     ? "border-green-500 text-green-500 bg-green-500"
                      //     : item.status === WorkerStatus.Inactive
                      //     ? "border-orange-500 text-orange-500 bg-orange-500"
                      //     : "border-red-500 text-red-500 bg-red-500"
                      // } bg-opacity-10 w-min px-2 py-1 rounded-lg border`}
                      className="border-green-500 text-green-500 bg-green-500 bg-opacity-10 w-min px-2 py-1 rounded-lg border"
                    >
                      {WorkerStatus.Active}
                    </div>
                  </TableCell>
                  <TableCell>90</TableCell>
                  <TableCell>11.11.2023</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      <AddWorkerForm isOpen={isOpen} closeModal={closeModal} hr={hr} />
    </>
  );
};

export default page;
