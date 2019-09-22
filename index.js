const client = require('./generated/rlay-client');

const main = async () => {
  const ind1 = client.Individual.create({
    // websiteDotaProperty: true,
    websiteDataProperty: "Toasty 1234"
  });

  const ind2 = client.Individual.create({
    websiteDataProperty: true,
    // websiteDataProperty: "Toasty 1234"
  });

  const insertedInd1 = await ind1;
  const insertedInd2 = await ind2;
  console.log('IND1', insertedInd1.cid);
  console.log('IND2', insertedInd2.cid);

  const retInd = await client.Individual.findByAssertion({
    websiteDataProperty: "Toasty 1234",
  });
    console.log(retInd);
  const retInd2 = await client.Individual.findByAssertion({
    websiteDotaProperty: "Toasty 1234",
  });
    console.log(retInd2);

  // const dpa = insertedInd1.payload.data_property_assertions[0];
  // console.log(dpa);
  // console.log(insertedInd1.payload)
  // const dpaFetched = await client.Entity.find(dpa);
  // console.log(dpaFetched);

  // await ind2.then(({ cid }) => console.log(cid));
}

// const ontology = require('@rlay/ontology');

// const cid = ontology.getEntityCid({
  // "type": "Individual",
  // "data_property_assertions": [
    // "0x019580031b20567c6c54ad4525f1529268a90c0633377596697338a48d36624f180f73b46959"
  // ]
// });

// console.log(cid);

main()
