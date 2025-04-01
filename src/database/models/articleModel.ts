export const articleSchema = {
  title: 'article',
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
    qty: {
      type: 'number',
      minimum: 0,
    },
    selling_price: {
      type: 'number',
      minimum: 0,
    },
    business_id: {
      type: 'string',
      ref: 'business',
      maxLength: 36,
    },
  },
  required: ['id', 'name', 'qty', 'selling_price', 'business_id'],
  indexes: ['name', 'business_id'],
};
