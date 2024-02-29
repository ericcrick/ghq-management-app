"use clients";
import {
  NumberInput,
  ScrollArea,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { SubmitButton } from "../SubmitButton/SubmitButton";
export function AddEmployee() {
  return (
    <>
      <h2 className="px-2 text-gray-600 font-bold text-lg">
        Create New Employee
      </h2>
      <ScrollArea h={700} className="mb-10">
        <div className="mx-2 mt-2 text-gray-800">
          <form className="grid grid-cols-1 md:grid-cols-6 gap-3">
            <div className="md:col-span-2">
              <TextInput label="First Name" placeholder="First name" />
            </div>
            <div className="md:col-span-2">
              <TextInput label="Middle Names" placeholder="Middle Names" />
            </div>
            <div className="md:col-span-2">
              <TextInput label="Last Name" placeholder="Last Name" />
            </div>

            <div className="md:col-span-2">
              <TextInput
                label="Regimental or Service Number"
                placeholder="Regimental Number or Service Number"
              />
            </div>
            <div className="md:col-span-2">
              <TextInput label="Email" placeholder="Email" />
            </div>
            <div className="md:col-span-1">
              <DateInput
                clearable
                valueFormat="YYYY MMM DD"
                label="Date of Birth"
                placeholder="Select Date of Birth"
              />
            </div>
            <div className="md:col-span-1">
              <DateInput
                clearable
                valueFormat="YYYY MMM DD"
                label="Date of Enlistment"
                placeholder="Enlistment Date"
              />
            </div>
            <div className="md:col-span-2">
              <Select
                label="Designation"
                placeholder="Designation"
                data={["Active", "Awol", "Retired", "Resigned"]}
                searchable
                nothingFoundMessage="Nothing found..."
              />
            </div>
            <div className="md:col-span-2">
              <Select
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
                label="Employee Type"
                placeholder="Choose Employee Type"
                data={["Officer", "Soldier", "SNR DCS", "JNR DCS"]}
                clearable
              />
            </div>
            <div className="md:col-span-1">
              <Select
                label="Arm of Service"
                placeholder="Choose Service"
                data={["Army", "Air Force", "Navy", "DCS"]}
                clearable
              />
            </div>
            <div className="md:col-span-1">
              <Select
                label="Marital Status"
                placeholder="Choose Marital Status"
                data={["Single", "Married", "Divorced", "Separated"]}
                clearable
              />
            </div>
            <div className="md:col-span-2">
              <Select
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
                label="Visible Mark"
                placeholder="Choose Position"
                data={["Left Chin", "Right Chin", "None"]}
                clearable
              />
            </div>

            <div className="md:col-span-1">
              <TextInput
                label="Contact Number 1"
                placeholder="Contact Number 1"
              />
            </div>
            <div className="md:col-span-1">
              <TextInput
                label="Contact Number 2"
                placeholder="Contact Number 2"
              />
            </div>
            <div className="md:col-span-1">
              <TextInput
                label="Contact Number 3"
                placeholder="Contact Number 3"
              />
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
    </>
  );
}
