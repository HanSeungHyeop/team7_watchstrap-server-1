const { Schema } = require('mongoose');

const UserSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, required: true }, // primary key
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: false },
    phones: { type: String, required: false },
    email: { type: String, required: true },
    regdate: { type: Date, default: Date.now },
    role: {
      // ����� 1 , ������ 0
      type: Number,
      required: false,
      default: 0,
    },
    status: {
      // ȸ�������� ȸ�� 1, ȸ���������� ���� ȸ�� 0
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

module.exports = UserSchema;
