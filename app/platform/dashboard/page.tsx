"use client";
import { InfoCard, Spotlight } from "@/components/dashboard";
import {
  Button,
  Card,
  Legend,
  ProgressCircle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput,
} from "@tremor/react";
import { CardSearch } from "solar-icon-set";

enum PlanStatus {
  Created = "Создан",
  Draft = "Черновик",
}

enum WorkerStatus {
  Active = "По плану",
  Inactive = "Отставание",
  NotStarted = "Не начато",
}

const data = [
  {
    name: "Планы адаптации",
    text: "6",
  },
  {
    name: "Скиллы",
    text: "39",
  },
  {
    name: "Тесты",
    text: "82%",
  },
  {
    name: "Баллы",
    text: "8400",
  },
];

const employeesData = [
  {
    name: "Всего",
    text: "28",
  },
  {
    name: "Активные",
    text: "15",
  },
  {
    name: "Новые",
    text: "2",
  },
  {
    name: "Прошли план",
    text: "7",
  },
];

const employees = [
  {
    name: "Пётр Головастиков",
    position: "Младший разработчик",
    status: WorkerStatus.Active,
    progress: 82,
  },
  {
    name: "Оксана Колотушкина",
    position: "UX/UI дизайнер",
    status: WorkerStatus.Inactive,
    progress: 50,
  },
  {
    name: "Виктор Витькин",
    position: "C# разработчик",
    status: WorkerStatus.NotStarted,
    progress: 0,
  },
  {
    name: "Павлентий Григорьев",
    position: "Frontend стажер",
    status: WorkerStatus.NotStarted,
    progress: 45,
  },
];

const plans = [
  {
    name: "План 1",
    description: "Описание плана 1",
    status: PlanStatus.Created,
  },
  {
    name: "План 2",
    description: "Описание плана 2",
    status: PlanStatus.Created,
  },
  {
    name: "План 3",
    description: "Описание плана 3",
    status: PlanStatus.Draft,
  },
  {
    name: "План 4",
    description: "Описание плана 4",
    status: PlanStatus.Draft,
  },
  {
    name: "План 5",
    description: "Описание плана 5",
    status: PlanStatus.Draft,
  },
  {
    name: "План 6",
    description: "Описание плана 6",
    status: PlanStatus.Draft,
  },
  {
    name: "План 7",
    description: "Описание плана 7",
    status: PlanStatus.Draft,
  },
  {
    name: "План 8",
    description: "Описание плана 8",
    status: PlanStatus.Draft,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full px-6 py-10 gap-6">
      <div className="flex justify-between">
        <h1 className="font-medium">Дашборд</h1>
        <Button className="py-[10px] px-[24px] text-white" color="blue">
          <span className="text-base">Выгрузить</span>
        </Button>
      </div>
      <div className="flex gap-6 w-full">
        <div className="flex gap-6 w-full flex-col">
          <div className="flex gap-6 w-full">
            {data.map((item, key) => (
              <InfoCard key={key} {...item} />
            ))}
          </div>
          <div className="flex gap-6 w-full">
            <Card className="space-y-4 min-w-[260px] w-min">
              <h2 className="font-medium">Барометр организации</h2>
              <ProgressCircle
                value={92}
                radius={80}
                strokeWidth={8}
                color={"blue"}
              >
                <ProgressCircle
                  value={87}
                  strokeWidth={8}
                  radius={66}
                  color={"violet"}
                >
                  <div className="flex flex-col items-center">
                    <h2>90%</h2>
                    <p>Цель</p>
                  </div>
                </ProgressCircle>
              </ProgressCircle>
              <Legend
                className="mt-3"
                categories={["АППГ", "Текущий период"]}
                colors={["blue", "violet"]}
              />
            </Card>
            <Spotlight
              description={{
                red: "требуют улучшения",
                orange: "вызывают трудности",
                green: "в норме",
              }}
              legend={{
                red: "— Более 50% не подтверждено",
                orange: "— 20–30% ошибок",
                green: "— Менее 20% ошибок",
              }}
              states={{ red: 16, orange: 20, green: 53 }}
            />
          </div>
          <div className="flex justify-between w-full">
            <h1>Сотрудники</h1>
            <TextInput
              placeholder="Поиск по сотрудникам"
              className="w-[400px] h-10"
              icon={CardSearch}
            />
          </div>
          <div className="flex gap-6 w-full">
            {employeesData.map((item, key) => (
              <InfoCard key={key} {...item} />
            ))}
          </div>
          <Card>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell className="pl-14">
                    Имя Фамилия
                  </TableHeaderCell>
                  <TableHeaderCell>Должность</TableHeaderCell>
                  <TableHeaderCell>Статус</TableHeaderCell>
                  <TableHeaderCell>Выполнение, %</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((item, key) => (
                  <TableRow key={key}>
                    <TableCell className="flex items-center gap-2">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.position}</TableCell>
                    <TableCell>
                      <div
                        className={`${
                          item.status === WorkerStatus.Active
                            ? "border-green-500 text-green-500 bg-green-500"
                            : item.status === WorkerStatus.Inactive
                            ? "border-orange-500 text-orange-500 bg-orange-500"
                            : "border-red-500 text-red-500 bg-red-500"
                        } bg-opacity-10 w-min px-2 py-1 rounded-lg border`}
                      >
                        {item.status}
                      </div>
                    </TableCell>
                    <TableCell>{item.progress}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
        <Card className="w-[380px] min-w-[380px] p-6 space-y-4 h-min">
          <h2 className="font-medium">Планы адаптации</h2>
          <TextInput placeholder="Поиск" className="w-full h-10" />
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Название плана</TableHeaderCell>
                <TableHeaderCell>Статус плана</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plans.map((item, key) => (
                <TableRow key={key}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div
                      className={`${
                        item.status === PlanStatus.Created
                          ? "border-green-500 text-green-500 bg-green-500"
                          : "border-orange-500 text-orange-500 bg-orange-500"
                      } bg-opacity-10 w-min px-2 py-1 rounded-lg border`}
                    >
                      {item.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
