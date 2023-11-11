import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Link from "next/link";

const plans = [
  {
    name: "Пример плана",
    skills: ["Лояльность"],
    department: "Дизайн",
    status: "Создан",
    progress: 80,
    started: 20,
    ended: 16,
  },
];

const page = () => {
  return (
    <div className="flex flex-col w-full px-6 py-8 gap-6">
      <div className="flex justify-between">
        <h1 className="font-medium">Планы ({plans.length})</h1>
      </div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Название плана</TableHeaderCell>
              <TableHeaderCell>Навыки</TableHeaderCell>
              <TableHeaderCell>Отдел</TableHeaderCell>
              <TableHeaderCell>Статус</TableHeaderCell>
              <TableHeaderCell>Выполнение, %</TableHeaderCell>
              <TableHeaderCell>Приступили</TableHeaderCell>
              <TableHeaderCell>Закончили</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.name}>
                <TableCell>
                  <Link href="employees/userId/plans/welcome" className="underline">{plan.name}</Link>
                </TableCell>
                <TableCell>{plan.skills.join(", ")}</TableCell>
                <TableCell>{plan.department}</TableCell>
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
                    В норме
                  </div>
                </TableCell>
                <TableCell>{plan.progress}</TableCell>
                <TableCell>{plan.started}</TableCell>
                <TableCell>{plan.ended}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default page;
