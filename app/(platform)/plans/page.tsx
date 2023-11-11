import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const plans = [
  {
    name: "Графические редакторы для работы",
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
                <TableCell>{plan.name}</TableCell>
                <TableCell>{plan.skills.join(", ")}</TableCell>
                <TableCell>{plan.department}</TableCell>
                <TableCell>{plan.status}</TableCell>
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
