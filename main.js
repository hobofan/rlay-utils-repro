const rlay = require('@rlay/web3-rlay');

const label = value => ({
  type: 'Annotation',
  property: '*labelAnnotationProperty',
  value: value,
});

const simpleDataProperty = params => {
  if (!params.name) {
    console.error('"name" is a reqired param for simpleDataProperty');
    process.exit(1);
  }
  const entities = {};
  const annotations = [];

  if (params.label) {
    const labelRef = `${params.name}Label`;
    entities[labelRef] = label(params.label);
    annotations.push(`*${labelRef}`);
  }

  entities[`${params.name}DataProperty`] = {
    type: 'DataProperty',
    annotations,
  };

  return entities;
};

const individualProperties = () => ({
  // Text
  ...simpleDataProperty({
    name: 'description',
    label: 'Description',
  }),
  // Images
  ...simpleDataProperty({
    name: 'favicon',
    label: 'Favicon',
  }),
  ...simpleDataProperty({
    name: 'logoUrl',
    label: 'Logo URL',
  }),
  // Web URLs
  ...simpleDataProperty({
    name: 'website',
    label: 'Website',
  }),
});

module.exports = {
  version: '2',
  includeImportsInOutput: true,
  imports: {
    ...rlay.builtins,
  },
  entities: {
    ...individualProperties(),
  },
  individualProperties: individualProperties(),
};
