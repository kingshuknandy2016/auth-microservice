import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

export interface UserInterface {
  id?: number;
  name: string;
  age: number;
}

@Table({ timestamps: true, tableName: "user_master", schema: "main_db" })
export default class User extends Model<UserInterface> {
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id!: number;

  @Column({ type: DataType.STRING(256), allowNull: false, unique: false })
  name!: string;

  @Column({ type: DataType.INTEGER, allowNull: false, unique: false })
  age!: number;
}
