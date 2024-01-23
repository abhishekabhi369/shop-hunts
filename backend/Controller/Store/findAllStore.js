const Store = require("../../schemas/StoreSchema");

const storeList = async (req, res) => {
  try {
      const stores = await Store.find().populate('Products');

      const storeDetails = stores.map(store => ({
          id: store._id,
          Name: store.Name,
          MobNumber: store.Mobile,
          Products: store.Products
      }));

      res.json({ store: storeDetails });
  } catch (error) {
   
      res.json({ error: "Internal Server Error" });
  }
};
module.exports=storeList