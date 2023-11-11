"use client";
import { Avatar } from "@/components/dashboard";
import { getName } from "@/lib/utils";
import { useGetWorkersQuery } from "@/services/HRService";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

enum WorkerStatus {
  Active = "По плану",
  Inactive = "Отставание",
  NotStarted = "Не начато",
}

const employees = [
  {
    name: "Александр Петров",
    position: "Разработчик",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.Active,
    progress: 78,
    lastActive: "11.09.2023",
  },
  {
    name: "Аристархий Горин",
    position: "Менеджер",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.Active,
    progress: 55,
    lastActive: "11.09.2023",
  },
  {
    name: "Ольга Руконюхова",
    position: "Разработчик",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.Inactive,
    progress: 0,
    lastActive: "11.09.2023",
  },
  {
    name: "Александр Петров",
    position: "Разработчик",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.NotStarted,
    progress: 0,
    lastActive: "11.09.2023",
  },
  {
    name: "Александр Петров",
    position: "Разработчик",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.NotStarted,
    progress: 0,
    lastActive: "11.09.2023",
  },
  {
    name: "Александр Петров",
    position: "Разработчик",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.NotStarted,
    progress: 0,
    lastActive: "11.09.2023",
  },
  {
    name: "Александр Петров",
    position: "Разработчик",
    department: "Анализ данных",
    startDate: "11.09.2023",
    status: WorkerStatus.NotStarted,
    progress: 0,
    lastActive: "11.09.2023",
  },
];

const page = () => {
  const { data, error, isLoading } = useGetWorkersQuery();
  return (
    <>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div className="flex flex-col w-full px-6 py-8 gap-6">
          <div className="flex justify-between">
            <h1 className="font-medium">Сотрудники ({data?.length})</h1>
          </div>
          <Card>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell className="pl-14">
                    Имя Фамилия
                  </TableHeaderCell>
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
                      {getName(employee)}
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
      )}
    </>
  );
};

export default page;
