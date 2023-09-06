import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
  src: string;
  title: string;
  subTitle: string;
  text: string;
};

const Card = (props: Props) => {
  const { url, src, title, subTitle, text } = props;
  return (
    <Link
      href={url}
      className="rounded-xl bg-indigo-100 w-[260px] p-8 border border-indigo-300 min-h-[320px]"
    >
      <Image
        src={src}
        width={200}
        height={200}
        alt={title}
        placeholder="blur"
        blurDataURL={src}
        className="rounded-lg mb-4 h-40 object-cover"
      />
      <h2 className="font-medium text-lg truncate ">{title}</h2>
      <p className="font-normal truncate">{subTitle}</p>
      {text && <p className=" font-light">{text}</p>}
    </Link>
  );
};

export default Card;
