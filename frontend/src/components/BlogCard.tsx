interface BlogCardInput {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardInput) => {
  return (
    <div className="border-b-2 border-slate-200 m-8 pb-7">
      <div className="flex items-center">
        <Avatar name={authorName} />
        <div className="mx-2">{authorName}</div>
        <div className="rounded-full h-[4px] w-[4px] bg-slate-600"></div>
        <div className="mx-2 font-light text-slate-500">{publishedDate}</div>
      </div>
      <div className="font-bold mt-2">{title}</div>
      <div className="text-slate-600">{content.slice(0, 100) + "..."}</div>
      <div className="font-light text-slate-600 mt-5">
        {Math.ceil(content.length / 500)} minute(s) read
      </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-600 rounded-full">
      <span className="font-medium text-gray-200 ">{name[0]}</span>
    </div>
  );
}
