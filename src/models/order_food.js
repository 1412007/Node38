import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class order_food extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        customer_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true,
          references: {
            model: "customer",
            key: "customer_id",
          },
        },
        food_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "food",
            key: "food_id",
          },
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        arr_sub_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "order_food",
        timestamps: false,
        indexes: [
          {
            name: "customer_id",
            using: "BTREE",
            fields: [{ name: "customer_id" }],
          },
          {
            name: "food_id",
            using: "BTREE",
            fields: [{ name: "food_id" }],
          },
        ],
      }
    );
  }
}