const Book =require("../model/book.model.js");
exports.getBook= async(req,res)=>{
  try {
    const book=await Book.find();
      res.status(200).json(book);
    
  } catch (error) {
    console.log("error message"+error);
    res.status(500).json(error);
  }
};