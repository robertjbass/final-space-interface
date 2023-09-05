import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div
      style={{ minHeight: `calc(90dvh - 12vh)` }}
      className="flex justify-center items-center"
    >
      <Image
        className="m-auto"
        src="/assets/loading.svg"
        width={50}
        height={50}
        alt="Loading..."
      />
    </div>
  );
}
