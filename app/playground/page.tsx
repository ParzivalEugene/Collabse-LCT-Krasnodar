"use client";

import {
  Card,
  DatePicker,
  Flex,
  Grid,
  ProgressCircle,
  Text,
} from "@tremor/react";
import Chart from "./chart";

export default function PlaygroundPage() {
  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        <div className="space-y-3">
          <p className="text-slate-500 text-sm text-center font-mono">
            Играемся с чартами
          </p>
          <Card className="max-w-sm mx-auto">
            <Flex className="space-x-5" justifyContent="start">
              <ProgressCircle value={75.5} size="md">
                <span className="text-xs text-gray-700 font-medium">75%</span>
              </ProgressCircle>
              <div>
                <Text className="font-medium text-gray-700">
                  Решено задач 15/20 (75%)
                </Text>
                <Text>Красава брат, скоро станешь тимлидом</Text>
              </div>
            </Flex>
          </Card>
        </div>
        <div className="space-y-3">
          <p className="text-slate-500 text-sm text-center font-mono">
            А тут датапикер
          </p>
          <DatePicker placeholder="Браза дедлайн тут выбери для бедолаги" />
        </div>
      </Grid>
      <Chart />
    </div>
  );
}
