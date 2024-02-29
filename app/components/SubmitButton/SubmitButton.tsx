"use client";
import { Button } from "@mantine/core";
import { useState } from "react";

export function SubmitButton() {
  const [isLoading, setLoading] = useState(false);
  return (
    <Button  variant="gradient" loaderProps={{ type: "bars" }}>
      Commit Chanages
    </Button>
  );
}
