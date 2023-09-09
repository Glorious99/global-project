import { User } from "entitiess/User";

export interface Comment {
  id: string;
  user: User;
  text: string;
}
