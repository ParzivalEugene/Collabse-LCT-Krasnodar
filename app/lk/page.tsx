"use client";
import { Avatar } from "@/components/dashboard";
import {
  Button,
  Card,
  ProgressCircle,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Image from "next/image";

const DataCard = () => (
  <Card className="p-5">
    <div className="flex gap-5">
      <div className="bg-blue-500 bg-opacity-20 w-32 h-32 rounded-md grid items-center justify-center">
        <Image src="/images/Tablet.svg" width={108} height={84} alt="tablet" />
      </div>
      <div className="flex flex-col justify-center mr-6">
        <h2 className="font-medium">Добро пожаловать</h2>
        <p>Выполнено 2 из 3</p>
      </div>
    </div>
  </Card>
);

const page = () => {
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
        <Button className="py-[10px] px-[24px]" color="blue">
          <span className="text-base">Выгрузить</span>
        </Button>
      </div>
      <div className="flex gap-6">
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

      <div className="flex gap-10 mt-6">
        <h2 className="text-h1 font-medium">Карта прогресса</h2>
        <Select value="1" className="w-[280px]" enableClear={false}>
          <SelectItem value="1">Знакомство с компанией</SelectItem>
        </Select>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex gap-36">
          <div className="relative">
            <DataCard />
            <div className="absolute -right-20 top-[84px] h-[168px] w-20 border-r-4 border-t-4 border-blue-500 border-dashed z-0 rounded-tr-2xl" />
          </div>
          <div className="relative">
            <div className="blur-sm">
              <DataCard />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/ClosedLock.svg"
                width={73}
                height={100}
                alt=""
              />
            </div>
            <div className="absolute -right-20 top-[84px] h-[168px] w-20 border-r-4 border-t-4 border-blue-500 border-dashed z-0 rounded-tr-2xl" />
          </div>
        </div>
        <div className="flex gap-36 ml-[260px]">
          <div className="relative">
            <div className="blur-sm">
              <DataCard />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/ClosedLock.svg"
                width={73}
                height={100}
                alt=""
              />
            </div>
            <div className="absolute -right-20 -top-10 h-[128px] w-20 border-r-4 border-b-4 border-blue-500 border-dashed rounded-br-2xl" />
          </div>
          <div className="relative">
            <div className="blur-sm relative">
              <DataCard />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/ClosedLock.svg"
                width={73}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
