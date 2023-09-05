import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
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
