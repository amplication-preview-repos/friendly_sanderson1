import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  typeField?: StringNullableFilter;
  user?: StringNullableFilter;
};