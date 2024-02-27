"use clients";
import {
  Fieldset,
  ScrollArea,
  SimpleGrid,
  TextInput,
} from "@mantine/core";

export function AddEmployee() {
  return (
    <ScrollArea h={700} className="mb-10">
      <Fieldset
        legend="Create New Employee"
        className="mx-2 mt-2 text-gray-800"
      >
        <SimpleGrid  className="items-center" cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'sm' }}
      verticalSpacing={{ base: 'sm', sm: 'xl' }}>
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" placeholder="Email" mt="md" />
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" placeholder="Email" mt="md" />
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" placeholder="Email" mt="md" />
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" placeholder="Email" mt="md" />
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" placeholder="Email" mt="md" />
        </SimpleGrid>
      </Fieldset>
    </ScrollArea>
  );
}
