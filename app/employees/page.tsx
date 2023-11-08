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
  return (
    <div className="flex flex-col w-full px-6 py-8 gap-6">
      <div className="flex justify-between">
        <h1 className="font-medium">Сотрудники ({employees.length})</h1>
      </div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className="pl-14">Имя Фамилия</TableHeaderCell>
              <TableHeaderCell>Должность</TableHeaderCell>
              <TableHeaderCell>Отдел</TableHeaderCell>
              <TableHeaderCell>Дата начала</TableHeaderCell>
              <TableHeaderCell>Статус</TableHeaderCell>
              <TableHeaderCell>Выполнение, %</TableHeaderCell>
              <TableHeaderCell>Последняя активность</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((item, key) => (
              <TableRow key={key}>
                <TableCell className="flex items-center gap-2">
                  {item.name}
                </TableCell>
                <TableCell>{item.position}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.startDate}</TableCell>
                <TableCell>
                  <div
                    className={`${
                      item.status === WorkerStatus.Active
                        ? "border-green text-green bg-green"
                        : item.status === WorkerStatus.Inactive
                        ? "border-orange text-orange bg-orange"
                        : "border-red text-red bg-red"
                    } bg-opacity-10 w-min px-2 py-1 rounded-lg border`}
                  >
                    {item.status}
                  </div>
                </TableCell>
                <TableCell>{item.progress}</TableCell>
                <TableCell>{item.lastActive}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default page;
