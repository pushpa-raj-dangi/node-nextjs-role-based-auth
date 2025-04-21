// userRole.ts
import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "UserRole",
  tableName: "user_roles",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      joinColumn: { name: "userId" },
      onDelete: "CASCADE",
    },
    role: {
      type: "many-to-one",
      target: "Role",
      joinColumn: { name: "roleId" },
      onDelete: "CASCADE",
    },
  },
});
