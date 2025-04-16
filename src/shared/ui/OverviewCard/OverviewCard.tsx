import Image from "next/image";

interface OverviewCardProps {
  title: string;
  value: string;
  icon: {
    path: string;
    color: string;
  };
}

const OverviewCard = ({ title, value, icon }: OverviewCardProps) => {
  return (
    <div className="flex justify-between p-[30px] bg-white rounded-[14px]">
      <div>
        <div className="font-semibold opacity-70">{title}</div>
        <div className="text-[25px] font-bold">{value}</div>
      </div>

      <div
        className="flex items-center justify-center w-[60px] h-[60px] rounded-[23px]"
        style={{ backgroundColor: icon.color }}
      >
        <Image src={icon.path} width={28} height={28} alt="" className="w-[28px] h-[28px] object-contain" />
      </div>
    </div>
  );
};

export default OverviewCard;
