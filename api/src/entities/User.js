// user.ts
import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    email: {
      type: "varchar"
    },
    password: {
      type: "varchar"
    }
  },
  relations: {
    userRoles: {
      type: "one-to-many",
      target: "UserRole",
      inverseSide: "user"
    }
  }
});
