const Product = require("../models/Product");
const {Seller} = require('../models/seller')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//SELLER
function findMin(loc,locs) {
  // console.log(loc, locs) 
  const dist = ((loc[0]**2-locs[0]**2)+(loc[1]**2-locs[1]**2))
  // if (dist < 0)
  // console.log(dist)
  return dist
}
router.post("/seller", async (req, res) => {
  try {
    const allSellers = await Seller.find({})
    const location = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
    var distances = []
    // console.log(location)
    // console.log()
    for (let index = 0; index < allSellers.length; index++) {
      distances[index]= findMin(location,allSellers[index].location)
    }
    const sortedDistance = (distances.sort()).slice(0,3)
    console.log(distances)
    const optimizedSellers=[]
    for (let index = 0; index < distances.length; index++) {
      for (let index2 = 0; index2 < sortedDistance.length; index2++) {
        if (distances[index] === sortedDistance[index2])
            optimizedSellers[index2] = allSellers[index]
      }
    }
    res.status(200).json(optimizedSellers.slice(0,3));
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findOne({title:req.params.id});
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
