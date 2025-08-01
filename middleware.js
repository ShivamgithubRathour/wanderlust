const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js") ;
const {  reviewSchema } = require('./schema.js');
const { listingSchema } = require('./schema.js');
console.log(listingSchema);



module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){    
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create listing");
       return res.redirect("/login");
       }
       next();
};
module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req,res,next) =>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
     if(!listing.owner.equals(res.locals.currUser._id)){
      req.flash("error", "you are not the owner of this listing");
     return res.redirect(`/listings/${id}`);
     }
     next();
};



module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

//validate review  schema
module.exports.validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400,errMsg);
    }else{
      next();
    }
  };

  module.exports.isReviewAuthor = async (req,res,next) =>{
    let {id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
     if(!review.author.equals(res.locals.currUser._id)){
      req.flash("error", "you are not the author of this review");
     return res.redirect(`/listings/${id}`);
     }
     next();
};


