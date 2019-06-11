const client = require('./generated/rlay-client');

const ind1 = client.Individual.create({
  // websiteDataProperty: true,
  websiteDataProperty: "Toasty 123"
});

ind1.then(console.log);

// const ontology = require('@rlay/ontology');

// const cid = ontology.getEntityCid({
  // "type": "Individual",
  // "data_property_assertions": [
    // "0x019580031b20567c6c54ad4525f1529268a90c0633377596697338a48d36624f180f73b46959"
  // ]
// });

// console.log(cid);
