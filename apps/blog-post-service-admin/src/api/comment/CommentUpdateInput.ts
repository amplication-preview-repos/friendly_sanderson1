import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  publishedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
