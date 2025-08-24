import Image from "next/image";
import { DefaultBarChart } from "@/components/ui/default-bar-chart";
import { DefaultMultipleBarChart } from "@/components/ui/default-multiple-bar-chart";
import { HatchedBarChart } from "@/components/ui/hatched-bar-chart";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 h-80 p-2">
        <DefaultBarChart />     
      </div>
      <div className="w-96 h-80 p-2">
        <DefaultMultipleBarChart />
      </div>
      <div className="w-96 h-80 p-2">
        <HatchedBarChart/>
      </div>
    </div>
  );
}
