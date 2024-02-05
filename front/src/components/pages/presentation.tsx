import { ChangeDateButton } from "../atoms/ChangeDateButton";
import { ContentGraph } from "../molecules/ContentGraph";
import { HourBlock } from "../molecules/HourBlock";
import { LanguageGraph } from "../molecules/LanguageGraph";
import { FC } from "react";
import { MonthlyBarChart } from "../molecules/MonthlyBarChart";
import { Header } from "../molecules/Header";

type Props = {
  todayHours: number;
  monthHours: number;
  totalHours: number;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleModalOpen: () => void;
};

export const Index: FC<Props> = ({ 
  todayHours, 
  monthHours, 
  totalHours,
  isModalOpen,
  setIsModalOpen,
  handleModalOpen,
}) => {
  return (
    <div>
      <Header
        handleModalOpen={handleModalOpen}
      />
      <div className="bg-[#F5F5F8] px-20 pt-20 pb-10 grid grid-cols-2 gap-4 h-screen">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <HourBlock title="Today" number={todayHours} />
            <HourBlock title="Month" number={monthHours} />
            <HourBlock title="Total" number={totalHours} />
          </div>
          <div className="rounded-lg bg-white px-5 py-10 shadow h-full">
            <MonthlyBarChart />
          </div>
        </div>
        <div className="flex justify-around gap-2">
          <div className="bg-white rounded-lg shadow px-5 py-10">
            <h1 className="font-bold text-xl">学習言語</h1>
            <LanguageGraph />
          </div>
          <div className="bg-white rounded-lg shadow px-5 py-10">
            <h1 className="font-bold text-xl">学習コンテンツ</h1>
            <ContentGraph />
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <ChangeDateButton />
        </div>
      </div>

      {/* <div className={`fixed inset-0 z-50 overflow-y-auto ${isModalOpen ? 'block' : 'hidden'}`} >
        <Modal setIsModalOpen={setIsModalOpen}/>
      </div> */}
    </div>
  );
};
