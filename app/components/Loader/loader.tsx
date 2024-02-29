import { Loader } from "@mantine/core";

export default function LoadingSpinner() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader color="#0891b2" />;
    </div>
  );
}
