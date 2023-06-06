const loginSchema = {
  type: "object",
  properties: {
    loginId: { type: "string" },
    password: { type: "string" },
  },
  required: ["loginId", "password"],
  additionalProperties: false,
};

const messageSchema = {
  type: "object",
  properties: {
    context: { type: "string" },
    effectiveDate: { type: "string", format: "date" },
    endDate: { type: "string", format: "date" },
    notificationName: { type: "string" },
    priority: { type: "string" },
    targetUsers: { type: "string" },
    createdBy: { type: "string" },
    createdAt: { type: "string" },
    modifiedBy: { type: "string" },
    modifiedAt: { type: "string" },
    id: { type: "string" },
  },

  //required: ["context", "effectiveDate", "endDate", "notificationName", "priority", "targetUsers"],
  additionalProperties: false,
};

module.exports = { loginSchema, messageSchema };
