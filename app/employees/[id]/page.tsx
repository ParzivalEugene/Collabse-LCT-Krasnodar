"use client";
import { Avatar, InfoCard, Spotlight } from "@/components/dashboard";
import {
  Button,
  Card,
  ProgressCircle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col w-full px-6 py-10 gap-6">
      <div className="flex justify-between w-full items-end">
        <div className="flex gap-4">
          <Avatar name="Виктор Витькин" size="60" round={true} />
          <div className="flex flex-col gap-1">
            <h2>Виктор Витькин</h2>
            <div className="flex gap-2 text-light-text items-center">
              <p>UX дизайнер</p>
              <div className="rounded-full w-1 h-1 bg-light-text" />
              <p>Аналитика и дизайн</p>
            </div>
          </div>
        </div>
        <Button className="py-[10px] px-[24px]">
          <span className="text-base">Выгрузить</span>
        </Button>
      </div>

      <div className="flex gap-6 w-full">
        <div className="grid grid-rows-2 grid-cols-2 gap-6 min-w-fit">
          <InfoCard name="Планы" text="3" />
          <InfoCard name="Скиллы" text="13" />
          <InfoCard name="Тесты" text="95%" />
          <InfoCard name="Баллы" text="1800" />
        </div>
        <Spotlight
          description={{
            red: "критические",
            orange: "вызывают трудности",
            green: "в норме",
          }}
          legend={{
            red: "— Более 50% не подтверждено",
            orange: "— 20–30% ошибок",
            green: "— Менее 20% ошибок",
          }}
          states={{ red: 2, orange: 6, green: 5 }}
        />

        <Card className="space-y-4 min-w-[260px] w-min">
          <h2 className="font-medium">Барометр cотрудника</h2>
          <ProgressCircle
            value={90}
            radius={70}
            strokeWidth={12}
            color={"violet"}
          >
            <div className="flex flex-col items-center">
              <h2>90%</h2>
              <p className="text-sm">Выполнено</p>
            </div>
          </ProgressCircle>
        </Card>
      </div>
      <Card>
        <h2 className="font-medium pl-4 mb-4">План адаптации</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Название курса</TableHeaderCell>
              <TableHeaderCell>Статус</TableHeaderCell>
              <TableHeaderCell>Выполнение, %</TableHeaderCell>
              <TableHeaderCell>Последняя активность</TableHeaderCell>
              <TableHeaderCell>Баллы</TableHeaderCell>
              <TableHeaderCell>Завершить до</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Курс 1</TableCell>
              <TableCell>
                <div className="border-green-500 text-green-500 bg-green-500 bg-opacity-10 w-min px-2 py-1 rounded-lg border">
                  По плану
                </div>
              </TableCell>
              <TableCell>90%</TableCell>
              <TableCell>11.09.2023</TableCell>
              <TableCell>1800</TableCell>
              <TableCell>11.09.2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default page;
