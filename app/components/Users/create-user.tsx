"use client";
import {
  FileInput,
  Input,
  PasswordInput,
  ScrollArea,
  Select,
  TextInput,
} from "@mantine/core";

import { SubmitButton } from "../SubmitButton/SubmitButton";
import { IMaskInput } from "react-imask";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export function AddUser() {
  const icon = <LockClosedIcon className="h-4 w-4" />;
  return (
    <ScrollArea className="rounded-md bg-stone-200 py-4 pb-3 px-2 m-2 max-h-screen">
      <h2 className="px-2 text-cyan-900 font-bold text-base">Create User</h2>
      <div className="mx-2 mt-2 text-gray-800">
        <form className="grid grid-cols-1 md:grid-cols-6 gap-3">
          <div className="md:col-span-2">
            <TextInput
              withAsterisk
              label="First Name"
              placeholder="First name"
            />
          </div>
          <div className="md:col-span-2">
            <TextInput withAsterisk label="Last Name" placeholder="Last Name" />
          </div>

          <div className="md:col-span-2">
            <TextInput withAsterisk label="Email" placeholder="Email" />
          </div>
          <div className="md:col-span-2">
            <PasswordInput
              withAsterisk
              leftSection={icon}
              label="Password"
              placeholder="User password"
            />
          </div>
          <div className="md:col-span-2">
            <Select
              withAsterisk
              label="Department or Unit"
              placeholder="Choose Unit"
              data={[
                "Arakan",
                "Duala",
                "37 Military Hospital",
                "Critical Care",
              ]}
              searchable
              nothingFoundMessage="Nothing found..."
            />
          </div>
          <div className="md:col-span-2">
            <Select
              withAsterisk
              label="Role"
              placeholder="Choose User Role"
              data={["Admin", "Data Entry", "Manager", "Auditor"]}
              clearable
            />
          </div>
          <div className="md:col-span-2">
            <FileInput
              withAsterisk
              label="User Avatar"
              placeholder="Display Picture for user"
            />
          </div>

          <div className="md:col-span-2">
            <Input.Wrapper label="Phone Number" withAsterisk>
              <Input
                component={IMaskInput}
                mask="+233 (000) 000-00-00"
                placeholder="Phone Number"
              />
            </Input.Wrapper>
          </div>
          <div className="md:col-span-6 mt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </ScrollArea>
  );
}
