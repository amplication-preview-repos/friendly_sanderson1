import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  publishedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
