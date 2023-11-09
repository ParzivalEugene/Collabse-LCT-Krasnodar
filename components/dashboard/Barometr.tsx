import { Card, Legend, ProgressCircle } from "@tremor/react";


export const Barometr = () => {
  return (
    <Card className="space-y-4 min-w-[260px] w-min">
      <h2 className="font-medium">Барометр организации</h2>
      <ProgressCircle value={92} radius={80} strokeWidth={8} color={"fuchsia"}>
        <ProgressCircle value={87} strokeWidth={8} radius={66} color={"sky"}>
          <div className="flex flex-col items-center">
            <h2>90%</h2>
            <p>Цель</p>
          </div>
        </ProgressCircle>
      </ProgressCircle>
      <Legend
        className="mt-3"
        categories={["АППГ", "Текущий период"]}
        colors={["fuchsia", "sky"]}
      />
    </Card>
  );
};
