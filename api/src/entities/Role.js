// role.ts
import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Role",
  tableName: "roles",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar",
      unique: true
    },
    description: {
      type: "varchar",
      nullable: true
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP"
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP"
    }
  },
  relations: {
    userRoles: {
      type: "one-to-many",
      target: "UserRole",
      inverseSide: "role"
    }
  }
});
