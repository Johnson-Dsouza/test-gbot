import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ListProps,
  SingleFieldList,
  ChipField,
  ArrayField,
} from "react-admin";

const StandupList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="channel" />

      <ArrayField source="members">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export default StandupList;
