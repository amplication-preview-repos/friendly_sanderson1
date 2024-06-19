import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="type" source="typeField" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};