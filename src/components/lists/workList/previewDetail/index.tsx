import { StackTree } from "@/types/item";
import ClickToDetail from "../clockToDetail";
import { dateFormat } from "@/util/dateFormat";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-1 flex text-14 font-semibold">{children}</div>;
};

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-fit rounded-4 border border-gray-200 px-2 py-1 text-14">
      {children}
    </div>
  );
};

interface Props {
  id: string;
  title: string; // 제목
  desc?: string;
  bgColor: string;
  date: {
    startDate: Date;
    endDate?: Date;
  };
  roleMain: "FullStack" | "Front" | "Back";
  roleDetail: string[];
  stack: StackTree[];
  participants:
    | "Solo Project"
    | "Team Project - Teammate"
    | "Team Project - Leader";
  platform: string[];

  link: {
    github: string;
    deploy: string;
  };

  admin?: {
    id: string;
    password: string;
  };
}

const PreviewDetail = ({
  id,
  title,
  desc,
  bgColor,
  date,
  roleMain,
  roleDetail,
  stack,
  participants,
  platform,
  link,
  admin,
}: Props) => {
  return (
    <div
      className="relative z-10 flex h-full w-full flex-col px-12 py-4 text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mb-14 w-full animate-slide-up items-center justify-between">
        <span className="text-shadow relative right-1 mb-0 text-48 font-semibold">
          {title}
        </span>
        <div className="text-20">{desc}</div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 animate-slide-up px-12">
        <div className="mb-4 h-[1px] w-full bg-white" />
        <div className="flex gap-12">
          <div>
            <Title>Platform</Title>
            <div className="flex gap-2">
              {platform.map((pl) => (
                <Tag key={pl}>{pl}</Tag>
              ))}
            </div>
          </div>

          <div>
            <Title>Role & Position</Title>
            <div className="flex gap-2">
              <Tag>{participants}</Tag>
              <Tag>{roleMain}</Tag>
            </div>
          </div>

          <div>
            <Title>Date</Title>
            <div className="flex gap-2">
              <Tag>
                {dateFormat(date.startDate)} - {dateFormat(date?.endDate)}
              </Tag>
            </div>
          </div>
        </div>
        {/* <ClickToDetail /> */}
      </div>
    </div>
  );
};

export default PreviewDetail;
