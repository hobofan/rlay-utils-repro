
    const { Client } = require('@rlay/rlay-client-lib');
    const map = new Map();

    const getClient = (config) => {
      const stringConfig = JSON.stringify(config);
      if (map.has(stringConfig)) {
        return map.get(stringConfig);
      } else {
        const client = new Client(config);
        const schemaCIDs = {"websiteLabel":"0x019580031b20f796d8fa4335904e37a2341997f4b8299e3ebd548df91ec4ba9c0dbadcfa5297","logoUrlLabel":"0x019580031b20d73027aa011f7db052421dc35a0633058c665192920d9c1ab9e20eaff0792c25","faviconLabel":"0x019580031b20d869e48c303e8a5077f00883548a69d1232dc71b3a7859d5c9d6a469b65eb12d","descriptionLabel":"0x019580031b20ed892a7b1ab21a48fbcab1ff435ffbe4336cc1add53235c0676845ef1c92acbe","descriptionDataProperty":"0x019480031b2061848a376cafe447c98e43c76b27e894698897d903d01d45d1b8f16752aced29","faviconDataProperty":"0x019480031b205dd67987f6aca7fb6c626ac737956721244a4719909d89100db59d2a941e25d0","websiteDataProperty":"0x019480031b209dedd51aabae744db98f66b4af62d77137b9ffb8e22dc44dc4963ad3e043a498","logoUrlDataProperty":"0x019480031b206a7b812638a1a83fe175f9dfeb9b6e434fde5a3e665516810c83088b805bc28f","labelAnnotationProperty":"0x019780031b20b3179194677268c88cfd1644c6a1e100729465b42846a2bf7f0bddcd07e300a9","seeAlsoAnnotationProperty":"0x019780031b2073df9fe9531a29afa7435bb4564336d0613c2f5ca550dabd9427d8d854e01de5","commentAnnotationProperty":"0x019780031b20e77fddce0bc5ecd30e3959d43d9dc36ef5448a113b7524621bac9053c02b3319"};
        const schema = [{"key":"descriptionDataProperty","assertion":{"type":"DataProperty","annotations":["0x019580031b20ed892a7b1ab21a48fbcab1ff435ffbe4336cc1add53235c0676845ef1c92acbe"]}},{"key":"faviconDataProperty","assertion":{"type":"DataProperty","annotations":["0x019580031b20d869e48c303e8a5077f00883548a69d1232dc71b3a7859d5c9d6a469b65eb12d"]}},{"key":"logoUrlDataProperty","assertion":{"type":"DataProperty","annotations":["0x019580031b20d73027aa011f7db052421dc35a0633058c665192920d9c1ab9e20eaff0792c25"]}},{"key":"websiteDataProperty","assertion":{"type":"DataProperty","annotations":["0x019580031b20f796d8fa4335904e37a2341997f4b8299e3ebd548df91ec4ba9c0dbadcfa5297"]}}];

        client.initSchema(schemaCIDs, schema);
        client.initClient();

        map.set(stringConfig, client);
        return getClient(config);
      }
    }

    const t = getClient({});
    t.getClient = getClient;

    module.exports = t;