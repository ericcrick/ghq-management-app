"use client";

import {
  Input,
  NumberInput,
  ScrollArea,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { IMaskInput } from "react-imask";

export function AddEmployee() {
  return (
    <ScrollArea className="rounded-md bg-stone-200 pb-3 px-2 m-2 max-h-screen">
      <h2 className="px-2 text-cyan-900 font-bold text-base">
        Create Employee
      </h2>
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
            <TextInput label="Middle Names" placeholder="Middle Names" />
          </div>
          <div className="md:col-span-2">
            <TextInput withAsterisk label="Last Name" placeholder="Last Name" />
          </div>

          <div className="md:col-span-2">
            <TextInput
              withAsterisk
              label="Regimental or Service Number"
              placeholder="Regimental Number or Service Number"
            />
          </div>
          <div className="md:col-span-2">
            <TextInput withAsterisk label="Email" placeholder="Email" />
          </div>
          <div className="md:col-span-1">
            <DateInput
              withAsterisk
              clearable
              valueFormat="YYYY MMM DD"
              label="Date of Birth"
              placeholder="Select Date of Birth"
            />
          </div>
          <div className="md:col-span-1">
            <DateInput
              withAsterisk
              clearable
              valueFormat="YYYY MMM DD"
              label="Date of Enlistment"
              placeholder="Enlistment Date"
            />
          </div>
          <div className="md:col-span-2">
            <Select
              withAsterisk
              label="Designation"
              placeholder="Designation"
              data={["Active", "Awol", "Retired", "Resigned"]}
              searchable
              nothingFoundMessage="Nothing found..."
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
          <div className="md:col-span-1">
            <Select
              withAsterisk
              label="Gender"
              placeholder="Select Gender"
              data={["Male", "Female"]}
              clearable
            />
          </div>
          <div className="md:col-span-1">
            <NumberInput
              label="Height"
              suffix="m"
              allowNegative={false}
              placeholder="Height of Employee"
              decimalScale={2}
            />
          </div>
          <div className="md:col-span-1">
            <NumberInput
              suffix="Kg"
              label="Weight"
              placeholder="Weight of Employee"
              decimalScale={2}
              allowNegative={false}
            />
          </div>
          <div className="md:col-span-1">
            <Select
              withAsterisk
              label="Blood Group"
              placeholder="Select Blood Group"
              data={["A+", "B+", "AB+", "O+", "O-", "A-", "B-"]}
              clearable
            />
          </div>
          <div className="md:col-span-2">
            <TextInput
              label="Social Security Number (Defense Civilian)"
              placeholder="Social Security Number"
            />
          </div>
          <div className="md:col-span-2">
            <Select
              withAsterisk
              label="Employee Type"
              placeholder="Choose Employee Type"
              data={["Officer", "Soldier", "SNR DCS", "JNR DCS"]}
              clearable
            />
          </div>
          <div className="md:col-span-1">
            <Select
              withAsterisk
              label="Arm of Service"
              placeholder="Choose Service"
              data={["Army", "Air Force", "Navy", "DCS"]}
              clearable
            />
          </div>
          <div className="md:col-span-1">
            <Select
              withAsterisk
              label="Marital Status"
              placeholder="Choose Marital Status"
              data={["Single", "Married", "Divorced", "Separated"]}
              clearable
            />
          </div>
          <div className="md:col-span-2">
            <Select
              withAsterisk
              label="Rank"
              placeholder="Choose Rank"
              data={[
                "Maj General",
                "Brig General",
                "Colonel",
                "Lt Colonel",
                "Major",
                "Captain",
              ]}
              clearable
            />
          </div>
          <div className="md:col-span-2">
            <Select
              withAsterisk
              label="Current Professional Grade"
              placeholder="Current Professional Grade"
              data={[
                "Health Informatician",
                "IT Manager",
                "Orthopaedic Doctor",
                "Paediatric Nurse",
                "Cardiologist",
              ]}
              clearable
            />
          </div>
          <div className="md:col-span-1">
            <Select
              withAsterisk
              label="Visible Mark"
              placeholder="Choose Position"
              data={["Left Chin", "Right Chin", "None"]}
              clearable
            />
          </div>

          <div className="md:col-span-1">
            <Input.Wrapper label="Contact No. 1" withAsterisk>
              <Input
                component={IMaskInput}
                mask="+233 (000) 000-00-00"
                placeholder="Primary Contact"
              />
            </Input.Wrapper>
          </div>
          <div className="md:col-span-1">
            <Input.Wrapper label="Contact No. 2" withAsterisk>
              <Input
                component={IMaskInput}
                mask="+233 (000) 000-00-00"
                placeholder="Secondary Contact"
              />
            </Input.Wrapper>
          </div>
          <div className="md:col-span-1">
            <Input.Wrapper label="Contact No. 3">
              <Input
                component={IMaskInput}
                mask="+233 (000) 000-00-00"
                placeholder="Other Contact"
              />
            </Input.Wrapper>
          </div>
          <div className="md:col-span-2">
            <TextInput
              label="Spouse Full Name"
              placeholder="Choose Spouse Name"
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              label="Previous Place of Work"
              placeholder="Previous Place of Work"
              autosize
              minRows={2}
              maxRows={5}
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              withAsterisk
              label="Place of Birth"
              placeholder="Place of Birth"
              autosize
              minRows={2}
              maxRows={5}
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              label="Postal Address"
              placeholder="Postal Address"
              autosize
              minRows={2}
              maxRows={4}
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              withAsterisk
              label="Current Residential Address"
              placeholder="Current Residential Address"
              autosize
              minRows={2}
              maxRows={4}
            />
          </div>
          <div className="md:col-span-6">
            <SubmitButton />
          </div>
        </form>
      </div>
    </ScrollArea>
  );
}
