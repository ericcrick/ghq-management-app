import { Center, Loader } from "@mantine/core";

export default function LoadingSpinner() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Loader color="#0891b2" />
    </Center>
  );
}
