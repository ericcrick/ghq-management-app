"use clients";
import { ScrollArea, Select, TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
export function AddEmployee() {
  return (
    <ScrollArea h={700} className="mb-10">
      <div className="mx-2 mt-2 text-gray-800">
        <form className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <TextInput label="First Name" placeholder="First name" />
          </div>
          <div className="md:col-span-2">
            <TextInput label="Last Name" placeholder="Last Name" />
          </div>
          <div className="md:col-span-2">
            <TextInput label="Middle Names" placeholder="Middle Names" />
          </div>
          <div className="md:col-span-2">
            <TextInput label="Email" placeholder="Email" />
          </div>
          <div className="md:col-span-2">
            <DateInput
              clearable
              valueFormat="YYYY MMM DD"
              label="Date of Birth"
              placeholder="Select Date of Birth"
            />
          </div>
          <div className="md:col-span-2">
          <DateInput
              clearable
              valueFormat="YYYY MMM DD"
              label="Date of Enlistment"
              placeholder="Select Englistment Date"
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
              label="Department/Unit"
              placeholder="Choose Department/Unit"
              data={["Arakan", "Duala", "37 Military Hospital", "Critical Care"]}
              searchable
              nothingFoundMessage="Nothing found..."
            />
          </div>
          <div className="md:col-span-1">
            <Select
              label="Gender"
              placeholder="Select Gender"
              data={["Male", "Female"]}
              defaultValue="Male"
              clearable
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              label="Address"
              placeholder="Residential Address"
              autosize
              minRows={2}
              maxRows={4}
            />
          </div>
        </form>
      </div>
    </ScrollArea>
  );
}
