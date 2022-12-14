import {
  Create,
  SimpleForm,
  TextInput,
  TimeInput,
  CheckboxGroupInput,
  SelectInput,
} from "react-admin";

const StandupCreate = () => (
  <Create children>
    <SimpleForm children>
      <TextInput source="Title" />
      <TextInput source="question 1" fullWidth />
      <TextInput source="question 2" fullWidth />
      <TextInput source="question 3" fullWidth />
      <TextInput source="question 4" fullWidth />
      <SelectInput
        source="Channels"
        choices={[
          { id: "channel 1", name: "Channel 1" },
          { id: "channel 2", name: "Channel 2" },
          { id: "channel 3", name: "Channel 3" },
        ]}
      />
      <CheckboxGroupInput
        source="Members"
        choices={[
          { id: "Ayush", name: "Ayush" },
          { id: "Sujay", name: "Sujay" },
          { id: "Nishanth", name: "Nishanth" },
          { id: "Vinu", name: "Vinu" },
          { id: "Johnson", name: "Johnson" },
        ]}
      />

      <TimeInput source="time" />
    </SimpleForm>
  </Create>
);

export default StandupCreate;
