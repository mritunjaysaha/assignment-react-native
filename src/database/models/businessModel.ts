export const businessSchema = {
  title: 'business',
  version: 0,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 36,
    },
    name: {
      type: 'string',
      minLength: 1,
    },
  },
  required: ['id', 'name'],
  indexes: ['name'],
};
