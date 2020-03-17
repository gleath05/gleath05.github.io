(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/pos-app/pos-app.module": "./src/app/features/pos-app/pos-app.module.ts",
	"./features/pos-user/pos-user.module": "./src/app/features/pos-user/pos-user.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /Start your project here-->\r\n<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n\r\n<button id=\"upButton\" *ngIf=\"isShow\" (click)=\"gotoTop()\" class=\"btn btn-dark btn-circle btn-circle-xl m-1\"><i\r\n    class=\"fas fa-angle-double-up\"></i></button>\r\n<!-- footer -->\r\n<!-- <footer class=\"page-footer font-large bg-dark pt-4\">\r\n  <div class=\"container text-center\">\r\n    <p class=\"font-italic text-muted mb-0\">&copy; Copyrights Company.com All rights reserved.</p>\r\n  </div>\r\n</footer> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/about-us/about-us.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/about-us/about-us.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <video [muted]=\"true\" autoplay loop playsinline height=\"170\" width=\"1000\">\r\n        <source src=\"assets/video/smoke.mp4\" type=\"video/mp4\">\r\n    </video>\r\n\r\n    <h1>\r\n        <span>\r\n            <img src=\"assets\\logo\\IGE-LOGO.png\" width=\"250px\" height=\"250px\" class=\"logoVideo\" alt=\"Inter Gadget Logo\">\r\n        </span>\r\n    </h1>\r\n</section>\r\n\r\n<div class=\"bg-light\">\r\n    <div class=\"container py-1\">\r\n        <div class=\"row h-100 align-items-center py-5\">\r\n            <div class=\"col-lg-6\">\r\n                <h1 class=\"display-4 text-uppercase\">About <span class=\"text-uppercase\" id=\"color\"> us</span></h1>\r\n                <p class=\"lead text-muted mb-0\"><span class=\"companyName\">IG-Express</span> or \r\n                    <span class=\"companyName\">Intern Gadgets Express</span> is a retail company that focuses in\r\n                    gadgets likeMobile Phones, Accessories, Laptops and Desktop. IG-Express started to support by \r\n                    many Companies around the world such as Samsung, Huawei, Oppo, Apple, Asus, and Etc. \r\n                    <a href=\"https://www.facebook.com/gleath05\"><b>Glenel N.Tubera</b></a>, <a href=\"#\">\r\n                    <b>Christian Paul Napalit</b></a>, <a href=\"#\"><b>Joel Flores</b></a> established IG-Express in 2019.\r\n                    it new, IG-Express Company known quickly because of the services they give to their clients andpartnership.</p>\r\n            </div>\r\n            <div class=\"col-lg-6 d-none d-lg-block\"><img src=\"../assets/img/icon.png\" alt=\"\" class=\"img-fluid\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"bg-white py-5\">\r\n    <div class=\"container py-3\">\r\n        <div class=\"row align-items-center mb-5\">\r\n            <div class=\"col-lg-6 d-none d-lg-block\">\r\n                <img\r\n                    src=\"../assets/img/icon2.png\" alt=\"\"\r\n                    class=\"img-fluid mb-4 mb-lg-0\">\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                    <p class=\"lead text-muted mb-0\">because of <a href=\"https://pcx.com.ph/\"> <b>PC EXPRESS</b></a>\r\n                        The founders\r\n                        came up with the idea to build the company IG-Express to help other company to sell their products.</p>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"bg-light py-5\">\r\n    <div class=\"container py-3\">\r\n        <div class=\"row mb-4 tex\">\r\n            <div class=\"col-lg-5\">\r\n                <h2 class=\"display-4 font-weight-light text-uppercase\">Our <span  class=\"text-uppercase\" id=\"color\">team</span> </h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row text-center\">\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-4 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../assets/founders/glenel.png\" alt=\"\"\r\n                        width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <h5 class=\"mb-0\">Glenel N. Tubera</h5><span class=\"small text-uppercase text-muted\">CEO -\r\n                        Founder - Full Stack Developer</span>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-facebook-f fa-fw blue-text\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-twitter fa-fw blue-text\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-instagram fa-fw pink-text\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-linkedin fa-fw blue-text\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-4 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../assets/founders/joel.jpg\" alt=\"\"\r\n                        width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <h5 class=\"mb-0\">Joel Flores</h5><span class=\"small text-uppercase text-muted\">CEO - Founder - Full\r\n                        Stack Developer</span>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-facebook-f fa-fw blue-text\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-twitter fa-fw blue-text\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-instagram fa-fw pink-text\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-linkedin fa-fw blue-text\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n\r\n            <!-- Team item-->\r\n            <div class=\"col-xl-4 col-sm-6 mb-5\">\r\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../assets/founders/napalit.jpg\" alt=\"\"\r\n                        width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\r\n                    <h5 class=\"mb-0\">Christian Paul Napalit</h5><span class=\"small text-uppercase text-muted\">CEO -\r\n                        Founder - Full Stack Developer</span>\r\n                    <ul class=\"social mb-0 list-inline mt-3\">\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-facebook-f fa-fw blue-text\"></i></a></li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-twitter fa-fw blue-text\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-instagram fa-fw pink-text\"></i></a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\"><i\r\n                                    class=\"fab fa-linkedin fa-fw blue-text\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- End-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3 mb-3\" *ngIf=\"cartProducts.length > 0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8  m-0 \">\r\n      <h3 class=\"ml-5\">\r\n        My Cart\r\n      </h3>\r\n    </div>\r\n    <div class=\"col-4 m-0 p-0\">\r\n      <h3>\r\n        Order Summary\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mx-5\">\r\n    <div class=\"col-8 z-depth-1-half  border border-top-0 border-bottom-0\">\r\n      <div class=\"row bg-white mb-2\"\r\n        *ngFor=\"let product of cartProducts\">\r\n        <div class=\"col-4 my-4\">\r\n          <a [routerLink]=\"['/product-info', product.$key]\">\r\n            <div class=\"view overlay hm-white-slight\">\r\n              <img [src]=\"product.imageUrl\" class=\"img-fluid\" alt=\"\" width=\"120px\" height=\"120px\">\r\n              <a>\r\n                <div class=\"mask waves-effect waves-light\" mdbRippleRadius></div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-4 my-4\">\r\n          <div class=\"caption\">\r\n            <a class=\"text-muted mt-5\" id=\"prodCateg\">\r\n              <h5>{{ product.category }}</h5>\r\n            </a>\r\n            <h5 class=\"card-title\">\r\n              <strong>\r\n                <a [routerLink]=\"['/product-info', product.$key]\" id=\"prodName\">{{ product.prodName }}</a>\r\n                <div class=\"price\">\r\n                  <span class=\"left\" id=\"prodPrice\">&#8369; {{ product.price | number:'1.2'}}</span>\r\n                  <span class=\"right\">\r\n                    <br>\r\n                    <a class=\"mr-3\" placement=\"top\" mdbTooltip=\"Quick Look\" container=\"body\"\r\n                      [routerLink]=\"['/product-info', product.$key]\">\r\n                      <i class=\"fa fa-eye\"></i>\r\n                    </a>\r\n                    <a placement=\"top\" mdbTooltip=\"Remove Product\" container=\"body\"\r\n                      (click)=\"removeCartProduct(product)\">\r\n                      <i class=\"fa fa-trash\"></i>\r\n                    </a>\r\n                  </span>\r\n                </div>\r\n              </strong>\r\n            </h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <app-cart-calculator [products]=\"cartProducts\"></app-cart-calculator>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"cartProducts.length === 0\">\r\n  <app-no-products-found [title]=\"messageTitle\" [description]=\"messageDescription\"></app-no-products-found>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card z-depth-1\">\r\n    <h4 class=\"d-flex justify-content-between align-items-center my-2 mx-3\">\r\n        <span class=\"text-muted\" id=\"prodName\">Number of Item(s):</span>\r\n        <span class=\"badge badge-primary badge-pill badge-warning\" id=\"prodPrice\">{{products.length}}</span>\r\n    </h4>\r\n    <ul class=\"list-group mb-3\">\r\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\"\r\n            *ngFor=\"let product of products\">\r\n            <div>\r\n                <h6 class=\"my-0\" id=\"prodName\">{{product.prodName}}</h6>\r\n            </div>\r\n            <span class=\"text-muted\" id=\"prodPrice\">&#8369; {{product.price | number:'1.2'}}</span>\r\n        </li>\r\n        <hr>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n            <span class=\"text-muted\" id=\"prodName\">Total (PHP)</span>\r\n            <strong id=\"prodPrice\">&#8369; {{totalValue | number:'1.2'}}</strong>\r\n        </li>\r\n        <a class=\"btn btn-primary mt-3 mx-4\" [routerLink]=\"['/shopping-cart']\">Continue Shipping</a>\r\n        <!-- <a class=\"btn btn-default\" [routerLink]=\"['/checkouts']\">Checkout</a> -->\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/csr-request/csr-request.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/csr-request/csr-request.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5\">\r\n        <div class=\"container\">\r\n            <h2 class=\"h1-responsive font-weight-bold text-center my-4\">Contact us</h2>\r\n            <p class=\"text-center w-responsive mx-auto mb-5\">Do you have any questions? Please do not hesitate to contact us\r\n                directly. Our Technical Support team will come back to you within\r\n                a matter of hours to help you.</p>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <form [formGroup]=\"csrServiceForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Name</label>\r\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Email</label>\r\n                                    <input type=\"text\" formControlName=\"email\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mt-4\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Topic</label>\r\n                                    <select formControlName=\"topic\" class=\"form-control\">\r\n                                        <option value=\"\"></option>\r\n                                        <option value=\"physically damaged\">physically damaged</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Type</label>\r\n                                    <select formControlName=\"type\" class=\"form-control\">\r\n                                        <option value=\"\"></option>\r\n                                        <option value=\"return policy and warranty?\">return policy and warranty?</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mt-4\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"subject\" class=\"\">Title</label>\r\n                                    <input type=\"text\" formControlName=\"title\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"message\">Your message</label>\r\n                                    <textarea type=\"text\" id=\"message\" name=\"message\" rows=\"2\"\r\n                                        class=\"form-control\" formControlName=\"message\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"text-center text-md-left\">\r\n                        <button class=\"btn btn-outline-info btn-lg btn-block\" (click)=\"onCustomerSubmit(csrServiceForm.value)\"\r\n                        [disabled]=\"!csrServiceForm.valid\">Send</button>\r\n                    </div>\r\n                    <div class=\"status\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/dashboard/dashboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/dashboard/dashboard.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/dummy/dummy.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/dummy/dummy.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dummy works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/help/help.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/help/help.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n            <div class=\"card shadow z-depth-1  px-5 py-4 \"  >\r\n                <div class=\"text-dark\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 \">\r\n                            <img src=\"../assets/img/csr.png\" class=\"img-fluid\" alt=\"\">\r\n                        </div>\r\n                        <div\r\n                            class=\" col-xl-6 col-lg-6 col-md-6 col-sm-6 ml-auto d-flex align-items-center mt-4 mt-md-0\">\r\n                            <div>\r\n                                <h2>Customer Support</h2>\r\n                                <p>Get in touch with our Customer Support team to see\r\n                                    how we can work together\r\n                                </p>\r\n                                <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"customerService()\">Customer Support <i class=\"fas fa-angle-right\"></i></button>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n            <div class=\"card shadow z-depth-1 px-5 py-4\"  >\r\n                <div class=\"text-dark\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 \">\r\n                            <img src=\"../assets/img/tsr.png\" class=\"img-fluid\" alt=\"\">\r\n                        </div>\r\n                        <div\r\n                            class=\" col-xl-6 col-lg-6 col-md-6 col-sm-6 ml-auto d-flex align-items-center mt-4 mt-md-0\">\r\n                            <div>\r\n                                <h2>Technical Support</h2>\r\n                                <p>Reach out to our Technical Team directly for immediate\r\n                                    assistance with all technical related issues.\r\n                                </p>\r\n                                <button type=\"button\" class=\"btn btn-outline-info\"(click)=\"technicalSupport()\">Technical Support <i class=\"fas fa-angle-right\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/home/home.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main p-0\">\r\n  <div id=\"carousel\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\" data-interval=\"3000\">\r\n    <!--Indicators-->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#carousel\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#carousel\" data-slide-to=\"4\"></li>\r\n    </ol>\r\n    <!--/.Indicators-->\r\n    <div class=\"carousel-inner\">\r\n\r\n      <!-- Carousel Banner  -->\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block w-100 carousel-images\" src=\"assets\\MOBILEPHONES-CAROUSEL\\asus-carousel-5.jpg\">\r\n        <div class=\"container-fluid p-0\">\r\n          <div class=\"container-overlay\">\r\n            <div class=\"first-entry\">your dream promo</div>\r\n            <div class=\"text-phone\">asus rog ii</div>\r\n            <div class=\"second-entry\">exceed your limit</div>\r\n            <div class=\"row justify-content-start\">\r\n              <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                <button class=\"btn btn-outline-info first-carousel-button\">View Product</button>\r\n              </div>\r\n              <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                <button class=\"btn btn-outline-info second-carousel-button\">Purchase Now</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100 carousel-images\" src=\"assets\\MOBILEPHONES-CAROUSEL\\samsung-carousel-1.jpg\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"container-overlay\">\r\n            <div class=\"first-entry\">your dream promo</div>\r\n            <div class=\"text-phone\">samsung note 10</div>\r\n            <div class=\"second-entry\">exceed your limit</div>\r\n            <div class=\"container-fluid p-0\">\r\n              <div class=\"row justify-content-start\">\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                  <button class=\"btn btn-outline-info first-carousel-button\">View Product</button>\r\n                </div>\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                  <button class=\"btn btn-outline-info second-carousel-button\">Purchase Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100 carousel-images\" src=\"assets\\MOBILEPHONES-CAROUSEL\\oppo-carousel-2.jpg\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"container-overlay\">\r\n            <div class=\"first-entry\">your dream promo</div>\r\n            <div class=\"text-phone\">oppo reno series</div>\r\n            <div class=\"second-entry\">exceed your limit</div>\r\n            <div class=\"container-fluid p-0\">\r\n              <div class=\"row justify-content-start\">\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                  <button class=\"btn btn-outline-info first-carousel-button\">View Product</button>\r\n                </div>\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                  <button class=\"btn btn-outline-info second-carousel-button\">Purchase Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100 carousel-images\" src=\"assets\\MOBILEPHONES-CAROUSEL\\huawei-carousel-3.jpg\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"container-overlay\">\r\n            <div class=\"first-entry\">your dream promo</div>\r\n            <div class=\"text-phone\">huawei p30 pro</div>\r\n            <div class=\"second-entry\">exceed your limit</div>\r\n            <div class=\"container-fluid p-0\">\r\n              <div class=\"row justify-content-start\">\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 huaweiProduct\">\r\n                  <button class=\"btn btn-outline-info first-carousel-button\">View Product</button>\r\n                </div>\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 huaweiProduct\">\r\n                  <button class=\"btn btn-outline-info second-carousel-button\">Purchase Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100 carousel-images\" src=\"assets\\MOBILEPHONES-CAROUSEL\\iphone-carousel-4.jpg\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"container-overlay\">\r\n            <div class=\"first-entry\">your dream promo</div>\r\n            <div class=\"text-phone\">iphone x</div>\r\n            <div class=\"second-entry\">exceed your limit</div>\r\n            <div class=\"container-fluid p-0\">\r\n              <div class=\"row justify-content-start\">\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                  <button class=\"btn btn-outline-info first-carousel-button\">View Product</button>\r\n                </div>\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4\">\r\n                  <button class=\"btn btn-outline-info second-carousel-button\">Purchase Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <a class=\"carousel-control-prev\" href=\"#carousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--MAIN CONTENT-->\r\n\r\n<!--PRODUCT ADVERTISEMENT -->\r\n\r\n<!--ASUS PHONE-->\r\n<main class=\"mt-5\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5 mb-4\">\r\n        <div class=\"view overlay\">\r\n          <img src=\"assets\\HOME IMAGES\\asus-adverstisement-3.png\" class=\"img card-img-top\" alt=\"\">\r\n          <div class=\"mask rgba-white-light\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-7 mb-4\">\r\n        <h2>Asus ROG</h2>\r\n        <hr>\r\n        <p>ROG Phone Game Changer, Epic Performance. Unbeatable Visuals. A new era of mobile gaming has dawned. An era\r\n          where you take full control,\r\n          where every sense is hieghtened, where evert sinew is ready for the fray. With pure ROG gaming DNA ai tis\r\n          core, ROG Phone breaks every rule\r\n          to go where rivals fear to tread.\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n      </div>\r\n    </div>\r\n    <!--SAMSUNG PHONE-->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 mb-4 mt-5\">\r\n        <h2>Samsung Galaxy <br> Note 10 | 10+</h2>\r\n        <hr>\r\n        <p>Galaxy Note 10 | 10 + designed for a mobile experience that's like in compute,\r\n          a gaming console, a movie-tech camera, and a intelligent pen, all in one device.\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n      </div>\r\n      <div class=\"col-md-5 mb-4\">\r\n        <div class=\"view overlay\">\r\n          <img src=\"assets\\HOME IMAGES\\samsung-advertisement-2.png\" class=\"img card-img-top\" alt=\"\">\r\n          <div class=\"mask rgba-white-light\"></div>\r\n        </div>\r\n      </div>\r\n      <!-- /.Grid column-->\r\n    </div>\r\n    <!--APPLE PHONE-->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5 mb-4\">\r\n        <div class=\"view overlay\">\r\n          <img src=\"assets\\HOME IMAGES\\iphone-advertisement-1.png\" class=\"img card-img-top\" alt=\"\">\r\n          <div class=\"mask rgba-white-light\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-7 mb-4\">\r\n        <h2>Apple iPhone XR</h2>\r\n        <hr>\r\n        <p>All-screen design. Longest battery life ever in an iPhone. Fastest performance.\r\n          Water and splash resistance. Studio-quality photos and 4K video.More secure with Face ID.\r\n          The new iPhone XR. It's brilliant upgrade.\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n      </div>\r\n    </div>\r\n    <!--OPPO PHONE-->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 mb-4 mt-5\">\r\n        <h2>Oppo RENO</h2>\r\n        <hr>\r\n        <p>Oppo Reno is about seeing the world from completely new perspectives.\r\n          The Technology behind Reno elevates photograhpy and mobile\r\n          entertainment to all-new heights. Let Reni further you vision.\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n      </div>\r\n      <div class=\"col-md-5 mb-4\">\r\n        <div class=\"view overlay\">\r\n          <img src=\"assets\\HOME IMAGES\\oppo-advertisement-4.png\" class=\"img card-img-top\" alt=\"\">\r\n          <div class=\"mask rgba-white-light\"></div>\r\n        </div>\r\n      </div>\r\n      <!-- /.Grid column-->\r\n    </div>\r\n    <!--HUAWEI PHONE-->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5 mb-4\">\r\n        <div class=\"view overlay\">\r\n          <img src=\"assets\\HOME IMAGES\\huawei-advertisement-5.png\" class=\"img card-img-top\" alt=\"\">\r\n          <div class=\"mask rgba-white-light\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-7 mb-4\">\r\n        <h2>Huawei P30 | P30 lite</h2>\r\n        <hr>\r\n        <p>All-screen design. Longest battery life ever in an iPhone. Fastest performance.\r\n          Water and splash resistance. Studio-quality photos and 4K video.More secure with Face ID.\r\n          The new iPhone XR. It's brilliant upgrade.\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n\r\n    <!--END OF PRODUCT ADVERTISEMENT-->\r\n\r\n\r\n    <!-- Carousel Product-Category -->\r\n    <div id=\"multi-item\" class=\"carousel slide carousel-multi-item mt-5\" data-ride=\"carousel\" data-interval=\"false\">\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div class=\"carousel-item active\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"card mb-2\">\r\n                <img class=\"card-img-top\" src=\"../assets/contentImg/img1.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Smartphones</h4>\r\n                  <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 clearfix d-none d-sm-inline\">\r\n              <div class=\"card mb-2\">\r\n                <img class=\"card-img-top\" src=\"../assets/contentImg/gaming.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Game Consoles</h4>\r\n                  <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 clearfix d-none d-sm-inline\">\r\n              <div class=\"card mb-2\">\r\n                <img class=\"card-img-top\" src=\"../assets/contentImg/accessories.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Accessories</h4>\r\n                  <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--/.First slide-->\r\n\r\n        <!--Second slide-->\r\n        <div class=\"carousel-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"card mb-2\">\r\n                <img class=\"card-img-top\" src=\"../assets/contentImg/laptops.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Laptops</h4>\r\n                  <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 clearfix d-none d-sm-inline\">\r\n              <div class=\"card mb-2\">\r\n                <img class=\"card-img-top\" src=\"../assets/contentImg/Desktops.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Dekstops</h4>\r\n                  <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 clearfix d-none d-sm-inline\">\r\n              <div class=\"card mb-2\">\r\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg\"\r\n                  alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">View All</h4>\r\n                  <button type=\"button\" class=\"btn btn-outline-info waves-effect\">Shop Now</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--/.Second slide-->\r\n      </div>\r\n      <!--/.Slides-->\r\n      <!--Controls-->\r\n      <div class=\"controls-top text-center mt-4 mb-5\">\r\n        <a class=\"btn-floating ml-3 mr-3\" href=\"#carousel\" href=\"#multi-item\" data-slide=\"prev\">\r\n          <i class=\"fa fa-chevron-left\"></i>\r\n        </a>\r\n        <a class=\"btn-floating  ml-3 mr-3\" href=\"#carousel\" href=\"#multi-item\" data-slide=\"next\">\r\n          <i class=\"fa fa-chevron-right\"></i>\r\n        </a>\r\n      </div>\r\n      <!--/.Controls-->\r\n    </div>\r\n    <!--/.Carousel Wrapper-->\r\n    <hr>\r\n    <!--Grid row-->\r\n  </div>\r\n\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/nav-bar/nav-bar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/nav-bar/nav-bar.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main Navigation-->\r\n<header>\r\n  <nav class=\"navbar navbar-expand-xl\">\r\n    <a href=\"\" class=\"mr-5\"><img src=\"assets\\logo\\IGE-LOGO.png\" width=\"50\" height=\"50\" alt=\"\" id=\"logoIge\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <img src=\"assets\\logo\\nezuko.png\" alt=\"\" id=\"nezuko\">\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item dropdown megamenu mainMenuList \"><a id=\"megamneu\" href=\"\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false \" class=\"nav-link dropdown-toggle font-weight-bold text-uppercase\"\r\n            id=\"menu\">Shop</a>\r\n          <div aria-labelledby=\"megamneu\" class=\"dropdown-menu border-0 p-0 m-0\">\r\n            <div class=\"container\">\r\n              <div class=\"row rounded-0 m-0 shadow-sm\">\r\n                <div class=\"col-lg-7 col-xl-8\">\r\n                  <div class=\"p-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 mb-4\">\r\n                        <h6 class=\"font-weight-bold text-uppercase \"><a routerLink=\"shopping-cart\">Electronic\r\n                            Devices</a>\r\n                        </h6>\r\n                        <ul class=\"list-unstyled\">\r\n                          <li class=\"nav-item\"><a [routerLink]=\"['/shopping-cart']\"\r\n                              class=\"nav-link text-small pb-0\">Asus</a></li>\r\n                          <li class=\"nav-item\"><a [routerLink]=\"['/shopping-cart']\"\r\n                              class=\"nav-link text-small pb-0\">Huawei</a></li>\r\n                          <li class=\"nav-item\"><a [routerLink]=\"['/shopping-cart']\"\r\n                              class=\"nav-link text-small pb-0\">Iphone</a></li>\r\n                          <li class=\"nav-item\"><a [routerLink]=\"['/shopping-cart']\"\r\n                              class=\"nav-link text-small pb-0\">Oppo</a></li>\r\n                          <li class=\"nav-item\"><a [routerLink]=\"['/shopping-cart']\"\r\n                              class=\"nav-link text-small pb-0\">Samsung</a></li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a routerLink=\"promo\" class=\"nav-link mainMenuList font-weight-bold text-uppercase\" id=\"menu\">Promo</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a (click)=\"goToHelp()\" class=\"nav-link mainMenuList font-weight-bold text-uppercase\" id=\"help\">help</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"about-us\" id=\"menu\" class=\"nav-link mainMenuList font-weight-bold text-uppercase\">About us</a>\r\n        </li>\r\n      </ul>\r\n      <i class=\"fas fa-shopping-cart fa-lg mt-2 ml-auto mr-5\" (click)=\"goToCart()\">\r\n        <h5><span class=\"bagde badge-warning badge-pill amber\">{{service.navbarCartCount}}</span></h5>\r\n      </i>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<!--Main Navigation-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/no-products-found/no-products-found.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/no-products-found/no-products-found.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>\r\n          Oops!</h1>\r\n        <h2>\r\n          {{title}}</h2>\r\n        <div class=\"error-details\">\r\n          {{description}}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a [routerLink]=\"[ '/' ]\" class=\"btn btn-primary btn-lg\">\r\n            <span class=\"glyphicon glyphicon-home\"></span>\r\n            Take Me Home </a>\r\n          <a [routerLink]=\"[ '/shopping-cart' ]\" class=\"btn btn-default btn-lg\">\r\n            <span class=\"glyphicon glyphicon-envelope\"></span>Our Products </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/page-not-found/page-not-found.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/page-not-found/page-not-found.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"logo\">\r\n        <img src=\"assets\\logo\\IGE-LOGO.png\" class=\"pnfBg\" width=\"200px\" height=\"150px\" alt=\"Inter Gadget Logo\">\r\n    </div>\r\n    <div class=\"text\">\r\n        <img src=\"assets\\404 image\\404-image.png\" alt=\"\">\r\n        <div>\r\n            <h5>Page Not Found</h5>\r\n            <button type=\"button\" (click)=\"homePage()\">Home Page</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/product-info/product-info.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/product-info/product-info.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"product-image\">\r\n                <div class=\"view hm-zoom z-depth-2\" style=\"cursor: pointer\">\r\n                    <img [src]=\"product.imageUrl\" [alt]=\"product.prodName\" width=\"100%\"\r\n                        class=\"img-fluid rounded\">\r\n                </div>\r\n                <div class=\"\" style=\"margin-top:15px\">\r\n                    <ul class=\"list-group mb-3\">\r\n                        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n                            <div>\r\n                                <h6 class=\"my-0\">Product Price</h6>\r\n                            </div>\r\n                            <span class=\"text-muted\" style=\"color:crimson !important\">&#8369; {{product.price}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n                            <div>\r\n                                <h6 class=\"my-0\">Product Seller</h6>\r\n                            </div>\r\n                            <span class=\"text-muted\" style=\"color:crimson !important\">{{product.category}}</span>\r\n                        </li>\r\n                    </ul>\r\n                    <button class=\"btn btn-primary\" (click)=\"addToCart(product)\">Add to Cart</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"product-detail\">\r\n                <h5 class=\"product-head\">Product Details</h5>\r\n                <table class=\"table\" cellspacing=\"0\" style=\"max-height: 28px\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">Product Name</th>\r\n                            <td>{{product.prodName}}</td>\r\n                        </tr>\r\n                       <!--  <tr>\r\n                            <th scope=\"row\">Product Description</th>\r\n                            <td>{{product.productDescription}}</td>\r\n                        </tr> -->\r\n                        <tr>\r\n                            <th scope=\"row\">Product Brand</th>\r\n                            <td>{{product.category}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">No. of quantity available</th>\r\n                            <td>{{product.qty}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">Product Added on</th>\r\n                            <td>{{product.prodId}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/promo/promo.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/promo/promo.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 mb-4 p-0 mr-2 ml-2\" [routerLink]=\"['/shopping-cart']\">\r\n            <div class=\"view overlay zoom\">\r\n                <img src=\"../assets/contentImg/promo.png\" class=\"card-img-top\" alt=\"\">\r\n                <div class=\"mask flex-center rgba-black-light\">\r\n                    <div class=\"text\">\r\n                        <h1 class=\"display-3 font-weight-bold  text-uppercase\">super<br>sale</h1>\r\n                        <p class=\"blockqoute\">*on selected items</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-5 mb-4 p-0 ml-2 mr-2\" [routerLink]=\"['/shopping-cart']\">\r\n            <div class=\"view overlay zoom\">\r\n                <img src=\"../assets/contentImg/promo2.png\" class=\"card-img-top\" alt=\"\">\r\n                <div class=\"mask flex-center rgba-black-light\">\r\n                    <div class=\"text\">\r\n                        <h1 class=\"display-3 font-weight-bold  text-uppercase\">no<br>shipping<br>fee</h1>\r\n                        <p class=\"blockqoute\">**minimum purchase of &#8369;1,000.00</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 mb-4 p-0 mr-2\" [routerLink]=\"['/shopping-cart']\">\r\n            <div class=\"view overlay zoom\">\r\n                <img src=\"../assets/contentImg/promo3.png\" class=\"card-img-top\" alt=\"\">\r\n                <div class=\"mask flex-center rgba-black-light\">\r\n                    <div class=\"text\">\r\n                        <h1 class=\"display-3 font-weight-bold  text-uppercase\">free<br>items</h1>\r\n                        <p class=\"blockqoute\">*on selected brands</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-5 mb-4 p-0 ml-2\" [routerLink]=\"['/shopping-cart']\"> \r\n            <div class=\"view overlay zoom\">\r\n                <img src=\"../assets/contentImg/promo4.png\" class=\"card-img-top\" alt=\"\">\r\n                <div class=\"mask flex-center rgba-black-light\">\r\n                    <div class=\"text\">\r\n                        <h1 class=\"display-3 font-weight-bold  text-uppercase\">shop & win</h1>\r\n                        <p class=\"blockqoute\">*every &#8369;10,000.00 = 1 raffle coupon</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/tsr-request/tsr-request.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/components/tsr-request/tsr-request.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5\">\r\n    <div class=\"container\">\r\n        <h2 class=\"h1-responsive font-weight-bold text-center my-4\">Contact us</h2>\r\n        <p class=\"text-center w-responsive mx-auto mb-5\">Do you have any questions? Please do not hesitate to contact us\r\n            directly. Our Technical Support team will come back to you within\r\n            a matter of hours to help you.</p>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <form [formGroup]=\"tsrRequestForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Name</label>\r\n                                <input type=\"text\" formControlName=\"name\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email</label>\r\n                                <input type=\"text\" formControlName=\"email\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Topic</label>\r\n                                <select formControlName=\"topic\" class=\"form-control\">\r\n                                    <option value=\"\"></option>\r\n                                    <option value=\"physically damaged\">physically damaged</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Type</label>\r\n                                <select formControlName=\"type\" class=\"form-control\">\r\n                                    <option value=\"\"></option>\r\n                                    <option value=\"return policy and warranty?\">return policy and warranty?</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4\">\r\n                        <div class=\"col-md-12 \">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"subject\" class=\"\">Title</label>\r\n                                <input type=\"text\" formControlName=\"title\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"message\">Your message</label>\r\n                                <textarea type=\"text\" id=\"message\" name=\"message\" rows=\"2\"\r\n                                    class=\"form-control\" formControlName=\"message\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"text-center text-md-left\">\r\n                    <button class=\"btn btn-outline-info btn-lg btn-block\" (click)=\"onCustomerSubmit(tsrRequestForm.value)\"\r\n                    [disabled]=\"!tsrRequestForm.valid\">Send</button>\r\n                </div>\r\n                <div class=\"status\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/main-about-us/main-about-us.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/container/main-about-us/main-about-us.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-about-us></app-about-us>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/main-help/main-help.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/container/main-help/main-help.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-help *ngIf=\"targetHelp\" (targetTsrOut)=\"tsrTargetIn($event)\" (targetCsrOut)=\"csrTargetIn($event)\"></app-help>\r\n<app-csr-request *ngIf=\"targetCsr\" (csrFormValueOut)=\"csrFormValueIn($event)\"></app-csr-request>\r\n<app-tsr-request *ngIf=\"targetTsr\" (tsrFormValueOut)=\"tsrFormValueIn($event)\"></app-tsr-request>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/main-home/main-home.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/container/main-home/main-home.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row m-0\" id=\"mainRow\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 p-0 pr-1\">\r\n            <app-product-list></app-product-list>\r\n        </div>\r\n<!--         <div class=\"col-sm-3 col-md-3 col-lg-3 pr-1 pl-0\">\r\n            <app-add-to-cart></app-add-to-cart>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/add-product/add-product.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/components/add-product/add-product.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ADD BUTTON-->\r\n<div class=\"btnAdd\">\r\n    <button class=\"btn btn-success modAdd  text-uppercase\" data-toggle=\"modal\" data-target=\"#basicExampleModal2\"\r\n        data-backdrop=\"static\">Add Product</button>\r\n</div>\r\n\r\n<!--ADD MODAL-->\r\n<div class=\"modal fade\" id=\"basicExampleModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel2\">Add Product</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetForm()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <!--CONTENT MODAL-->\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"formTemplate\" (submit)=\"onSubmit(formTemplate.value)\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n\r\n                            <!--FIRST COLUMN-->\r\n                            <div class=\"col-8 col-sm-6\">\r\n                                <div class=\"text-center\">\r\n                                    <img [src]=\"imgSrc\" width=\"350px\" height=\"250px\" (click)=\"fileUploader.click()\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Select file to upload</label>\r\n                                    <input type=\"file\" accept=\"image/*\" class=\"form-control\" #fileUploader\r\n                                        formControlName=\"imageUrl\" (change)=\"showPreview($event)\">\r\n                                    <div class=\"text-danger\"\r\n                                        *ngIf=\"isSubmitted && formControls.imageUrl.errors?.required\">Thisfield is\r\n                                        required.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--SECOND COLUMN-->\r\n                            <div class=\"col-4 col-sm-6  mt-4\">\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control\" formControlName=\"prodName\" placeholder=\"Product Name\">\r\n                                    <div class=\"text-danger\"\r\n                                        *ngIf=\"isSubmitted && formControls.prodName.errors?.required\">This field is\r\n                                        required.</div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control\" formControlName=\"price\" placeholder=\"Price\"\r\n                                        type=\"number\">\r\n                                    <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.price.errors?.required\">\r\n                                        This field is required.\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control\" formControlName=\"qty\" placeholder=\"Quantity\">\r\n                                    <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.qty.errors?.required\">\r\n                                        This field is required.\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <select formControlName=\"category\" class=\"form-control\">\r\n                                        <option value=\"Asus\">Asus</option>\r\n                                        <option value=\"Samsung\">Samsung</option>\r\n                                        <option value=\"Huawei\">Huawei</option>\r\n                                        <option value=\"Oppo\">Oppo</option>\r\n                                        <option value=\"Iphone\">Iphone</option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <a routerLink=\"product-list\"\r\n                                            class=\"btn btn-primary btn-block float-right\">Product List </a>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <button type=\"submit\"\r\n                                            class=\"btn btn-success btn-block float-right\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n            </div>\r\n            <!--END CONTENT-->\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/home-admin/home-admin.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/components/home-admin/home-admin.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home-admin works!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/components/login/login.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container example z-depth-5\">\r\n  <div class=\"row justify-content-center\">\r\n\r\n    <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n      <img src=\"/assets/logo/IGE-LOGO.png\" alt=\"\" class=\"imgLogo\">\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\r\n\r\n      <div class=\"wrapper\">\r\n\r\n        <form [formGroup]=\"loginForm\" class=\"text-center \" action=\"#!\">\r\n          <img src=\"https://img.icons8.com/color/96/000000/admin-settings-male.png\">\r\n          <p class=\"h4 mb-4 text-login\">Hi! Welcome to IGE!</p>\r\n          <small class=\"lead text-muted\">example@google.com</small>\r\n\r\n          <input type=\"text\" id=\"userId\" formControlName=\"email\" autocomplete=\"off\" class=\"form-control mb-4\" placeholder=\"E-mail Address\">\r\n          <div class=\"p-2\"></div>\r\n\r\n          <input type=\"password\" id=\"defaultLoginFormPassword\" formControlName=\"password\" class=\"form-control mb-4\" placeholder=\"Password\">\r\n\r\n          <button class=\"btn btn-primary btn-block my-4\" (click)=\"signIn()\">Sign in</button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/product-details/product-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/components/product-details/product-details.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--1st COLUMN-->\r\n\r\n<form class=\"form-inline\">\r\n  <input class=\"form-control\" name=\"searchInput\" placeholder=\"Search\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\"\r\n    style=\"width: 80%;\">\r\n  <button class=\"btn btn-outline-primary\" (click)=\"searchText=''\">Clear</button>\r\n</form>\r\n<table class=\"table table-sm\">\r\n  <thead>\r\n    <th>Product Name</th>\r\n    <th>Category</th>\r\n    <th>Price</th>\r\n    <th>Quantity</th>\r\n    <th></th>\r\n  </thead>\r\n  <ng-container *ngFor=\"let image of imageArray | paginate : {itemsPerPage :10, currentPage: p }\">\r\n    <ng-container *ngIf=\"filterCondition(image)\">\r\n      <tr class=\"table-dark\">\r\n        <td>{{image.prodName}}</td>\r\n        <td>{{image.category}}</td>\r\n        <td>&#8369; {{image.price | number:'1.2-3'}}</td>\r\n        <td>{{image.qty}} pcs</td>\r\n\r\n        <td>\r\n          <!--EDIT ICON-->\r\n          <i class=\"fas fa-pencil-alt editIcon\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\r\n            data-backdrop=\"static\" (click)=\"populateForm(image)\"></i>\r\n          <!--DELETE ICON-->\r\n          <i class=\"fa fa-trash trashIcon\" (click)=\"onDelete(image.$key,image.imageUrl)\"></i>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n  </ng-container>\r\n</table>\r\n<div id=\"myPagination\">\r\n  <pagination-controls (pageChange)=\"p =$event\" style=\"margin-top:10px;\"></pagination-controls>\r\n</div>\r\n<!--ALERT FOR DELETE-->\r\n<div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">\r\n  Deleted successfully.\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Product Editing</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <!-- content modal -->\r\n        <form [formGroup]=\"formTemplate\" (submit)=\"onSubmit(formTemplate.value)\">\r\n\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" formControlName=\"prodName\" placeholder=\"Product Name\">\r\n            <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.prodName.errors?.required\">This field is\r\n              required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" formControlName=\"price\" placeholder=\"Price\">\r\n            <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.price.errors?.required\">This field is\r\n              required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" formControlName=\"qty\" placeholder=\"Quantity\">\r\n            <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.qty.errors?.required\">This field is\r\n              required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" formControlName=\"category\">\r\n              <option value=\"Mobile\">Mobile</option>\r\n              <option value=\"Laptop\">Laptop</option>\r\n              <option value=\"Accessories\">Accessories</option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave()\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/product-list/product-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/components/product-list/product-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!--SUB MENU TABS-->\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#allProducts\">ALL PRODUCTS</a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#asus\">ASUS</a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#huawei\">HUAWEI</a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#iphone\">IPHONE</a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#oppo\">OPPO</a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#samsung\">SAMSUNG</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<!--TAB PANE -->\r\n\r\n<div id=\"myTabContent\" class=\"tab-content\">\r\n  <!--ALL PRODUCTS TAB PANE -->\r\n\r\n  <div class=\"tab-pane fade active show\" id=\"allProducts\">\r\n    <div class=\"continer\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"card m-1 col-lg-2 col-md-3 col-sm-6\" *ngFor=\"let product of productList\">\r\n\r\n            <a [routerLink]=\"['/product-info', product.$key]\">\r\n              <div class=\"text-center\">\r\n                <img [src]=\"product.imageUrl\" width=\"180px\" height=\"180px\">\r\n              </div>\r\n              <div class=\"text-center\"></div>\r\n              <div class=\"text-dark\">{{product.prodName}} <br>\r\n                &#8369;{{product.price | number:'1.2-3'}}\r\n              </div>\r\n            </a>\r\n        </div>\r\n\r\n        <!-- <div class=\"d-flex align-items-center justify-content-center m-2 myIcons\">\r\n              <i class=\"fas fa-thumbs-up iconImage\" id=\"like\"></i>\r\n              <i class=\"fas fa-heart iconImage\" id=\"heart\"></i>\r\n              <i class=\"fas fa-cart-plus iconImage\" id=\"cart\" (click)=\"addToCart(product)\"></i>\r\n            </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--ASUS TAB PANE -->\r\n  <div class=\"tab-pane fade\" id=\"asus\">\r\n    <div class=\"row justify-content-start\">\r\n      <div *ngFor=\"let product of imageArray\">\r\n        <div *ngIf=\"filterAsus(product)\">\r\n          <div class=\"card z-depth-1 specific-product  mr-1 mb-1\" id=\"specific\">\r\n            <div class=\"bg-white rounded shadow-sm example z-depth-1\">\r\n              <div class=\"productImage\">\r\n                <img [src]=\"product.imageUrl\" width=\"200px\" height=\"200px\">\r\n              </div>\r\n              <div class=\"text-dark \">{{product.prodName}} <br> &#8369;{{product.price | number:'1.2-3'}}\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex align-items-center justify-content-center m-2 myIcons\">\r\n              <i class=\"fas fa-thumbs-up iconImage\" id=\"like\"></i>\r\n              <i class=\"fas fa-heart iconImage\" id=\"heart\"></i>\r\n              <i class=\"fas fa-cart-plus iconImage\" id=\"cart\" (click)=\"addToCart(product)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--HUAWEI TAB PANE -->\r\n  <div class=\"tab-pane fade\" id=\"huawei\">\r\n    <div class=\"container-fluid ml-2\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let product of imageArray\">\r\n          <div *ngIf=\"filterHuawei(product)\">\r\n            <div class=\"card z-depth-1 specific-product  mr-1 mb-1\" id=\"specific\">\r\n              <div class=\"bg-white rounded shadow-sm example z-depth-1\">\r\n                <div class=\"productImage\">\r\n                  <img [src]=\"product.imageUrl\" width=\"200px\" height=\"200px\">\r\n                </div>\r\n                <div class=\"text-dark \">{{product.prodName}} <br> &#8369;{{product.price | number:'1.2-3'}}\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex align-items-center justify-content-center m-2 myIcons\">\r\n                <i class=\"fas fa-thumbs-up iconImage\" id=\"like\"></i>\r\n                <i class=\"fas fa-heart iconImage\" id=\"heart\"></i>\r\n                <i class=\"fas fa-cart-plus iconImage\" id=\"cart\" (click)=\"addToCart(product)\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--IPHONE TAB PANE -->\r\n  <div class=\"tab-pane fade\" id=\"iphone\">\r\n    <div class=\"container-fluid ml-2\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let product of imageArray\">\r\n          <div *ngIf=\"filterIphone(product)\">\r\n            <div class=\"card z-depth-1 specific-product  mr-1 mb-1\" id=\"specific\">\r\n              <div class=\"bg-white rounded shadow-sm example z-depth-1\">\r\n                <div class=\"productImage\">\r\n                  <img [src]=\"product.imageUrl\" width=\"200px\" height=\"200px\">\r\n                </div>\r\n                <div class=\"text-dark \">{{product.prodName}} <br> &#8369;{{product.price | number:'1.2-3'}}\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex align-items-center justify-content-center m-2 myIcons\">\r\n                <i class=\"fas fa-thumbs-up iconImage\" id=\"like\"></i>\r\n                <i class=\"fas fa-heart iconImage\" id=\"heart\"></i>\r\n                <i class=\"fas fa-cart-plus iconImage\" id=\"cart\" (click)=\"addToCart(product)\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--OPPO TAB PANE -->\r\n  <div class=\"tab-pane fade\" id=\"oppo\">\r\n    <div class=\"container-fluid ml-2\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let product of imageArray\">\r\n          <div *ngIf=\"filterOppo(product)\">\r\n            <div class=\"card z-depth-1 specific-product  mr-1 mb-1\" id=\"specific\">\r\n              <div class=\"bg-white rounded shadow-sm example z-depth-1\">\r\n                <div class=\"productImage\">\r\n                  <img [src]=\"product.imageUrl\" width=\"200px\" height=\"200px\">\r\n                </div>\r\n                <div class=\"text-dark \">{{product.prodName}} <br> &#8369;{{product.price | number:'1.2-3'}}\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex align-items-center justify-content-center m-2 myIcons\">\r\n                <i class=\"fas fa-thumbs-up iconImage\" id=\"like\"></i>\r\n                <i class=\"fas fa-heart iconImage\" id=\"heart\"></i>\r\n                <i class=\"fas fa-cart-plus iconImage\" id=\"cart\" (click)=\"addToCart(product)\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--SAMSUNG TAB PANE -->\r\n  <div class=\"tab-pane fade\" id=\"samsung\">\r\n    <div class=\"container-fluid ml-2\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let product of imageArray\">\r\n          <div *ngIf=\"filterSamsung(product)\">\r\n            <div class=\"card z-depth-1 specific-product  mr-1 mb-1\" id=\"specific\">\r\n              <div class=\"bg-white rounded shadow-sm example z-depth-1\">\r\n                <div class=\"productImage\">\r\n                  <img [src]=\"product.imageUrl\" width=\"200px\" height=\"200px\">\r\n                </div>\r\n                <div class=\"text-dark \">{{product.prodName}} <br> &#8369;{{product.price | number:'1.2-3'}}\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex align-items-center justify-content-center m-2 myIcons\">\r\n                <i class=\"fas fa-thumbs-up iconImage\" id=\"like\"></i>\r\n                <i class=\"fas fa-heart iconImage\" id=\"heart\"></i>\r\n                <i class=\"fas fa-cart-plus iconImage\" id=\"cart\" (click)=\"addToCart(product)\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/register/register.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/components/register/register.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mx-auto\">\r\n                    <div class=\"card shadow\">\r\n                        <div class=\"card-header text-center\">\r\n                            <h1 class=\"mb-0 my-2 text-uppercase\">User Registration</h1>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <form #form=\"ngForm\" [formGroup]=\"registrationForm\"\r\n                                (ngSubmit)=\"registrationForm.valid && onRegistrationSubmit(registrationForm.value)\" novalidate\r\n                                autocomplete=\"on\">\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control mb-4\" formControlName=\"name\" placeholder=\"Name\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control mb-4\" formControlName=\"email\" placeholder=\"Email\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <select class=\" from-control browser-default custom-select\" formControlName=\"role\">\r\n                                        <option value=\"\" disabled>Choose option</option>\r\n                                        <option value=\"Admin\" selected>Sales</option>\r\n                                        <option value=\"CSR\">CSR Team</option>\r\n                                        <option value=\"TSR\">TSR Team</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control mb-4\" formControlName=\"password\" placeholder=\"Password\"\r\n                                        [type]=\"!hide ? 'password':'text'\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input class=\"form-control mb-4\"\r\n                                        [class.is-invalid]=\"registrationForm.errors?.passwordsDoNotMatch\"\r\n                                        formControlName=\"verifyPassword\" placeholder=\"Verify password\"\r\n                                        [type]=\"!hide ? 'password':'text'\" />\r\n                                    <input type=\"checkbox\" (click)=\"hide = !hide\">Show Password\r\n                                </div>\r\n                                <div *ngIf=\"registrationForm.errors?.passwordsDoNotMatch\">\r\n                                    <small>Password do not match</small>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button type=\"submit\" class=\"btn btn-outline-success btn-lg float-left\"\r\n                                        [disabled]=\"!registrationForm.valid\">Register</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/container/main-register/main-register.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/container/main-register/main-register.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-register (regFormValueOut)=\"regFormValueIn($event)\"></app-register>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/container/user/user.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/pos-user/container/user/user.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"firs-content col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-4\">\r\n            <div class=\"card-size\">\r\n                <div class=\"card z-depth-1 pb-4\">\r\n                    <div class=\"text-center mt-3\">\r\n                        <img src=\"assets\\logo\\IGE-LOGO.png\">\r\n                    </div>\r\n                    <div class=\"card-body myButtons\">\r\n                        <button type=\"button\" class=\"btn btn-info userButton\" id=\"cp\">Change Password</button>\r\n                        <button type=\"button\" class=\"btn btn-danger userButton\" id=\"lo\"\r\n                            (click)=\"logOut()\">LogOut</button>\r\n                    </div>\r\n                    <app-add-product (formValueOut)=\"formValueIn($event)\"></app-add-product>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xl-10\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#home\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\"\r\n                        (click)=\"navigateHome()\">Home</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#inventory\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\"\r\n                        (click)=\"navigateInventory()\">Inventory</a>\r\n\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#myProducts\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\"\r\n                        (click)=\"navigateMyProducts()\">My Products</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#createUser\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\"\r\n                        (click)=\"navigateCreateUser()\">Create User</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n                <router-outlet></router-outlet>\r\n                <div role=\"tabpanel\" class=\"tab-pane active show\" id=\"home\">\r\n                </div>\r\n                <div role=\"tabpanel\" class=\"tab-pane fade active\" id=\"inventory\">\r\n                </div>\r\n                <div role=\"tabpanel\" class=\"tab-pane fade active\" id=\"myProducts\">\r\n                </div>\r\n                <div role=\"tabpanel\" class=\"tab-pane fade active\" id=\"createUser\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    // BACK TO HOME IF PATH EMPTY AFTER LOCALHOST:4200
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './features/pos-app/pos-app.module#PosAppModule'
    },
    // TYPING USER AFTER LOCALHOST:4200 WILL DIRECT YOU TO ADMIN
    {
        path: 'user',
        redirectTo: 'user/admin/home-admin',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: './features/pos-user/pos-user.module#PosUserModule',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#upButton {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  font-size: 20px;\n  text-align: center;\n  padding: 0;\n  border-radius: 50%;\n  outline: none;\n}\n\n#upButton i {\n  position: relative;\n  top: -1px;\n}\n\n.btn-circle-xl {\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSDpcXEdsZW1pbFxcUFJPSkVDVFNcXGlnLWV4cHJlc3NcXGlnZS1wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3VwQnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jdXBCdXR0b24gaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTFweDtcclxufVxyXG4uYnRuLWNpcmNsZS14bCB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbiIsIiN1cEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiN1cEJ1dHRvbiBpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG59XG5cbi5idG4tY2lyY2xlLXhsIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.topPostToStartShowing = 100;
        this.title = 'mdb-angular-free';
    }
    checkScroll() {
        // window의 scroll top
        // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases.
        // window.pageYOffset is not supported below IE 9.
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPostToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
    // TODO: Cross browsing
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], AppComponent.prototype, "checkScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _features_pos_app_pos_app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/pos-app/pos-app.module */ "./src/app/features/pos-app/pos-app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _features_pos_app_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/pos-app/components/nav-bar/nav-bar.component */ "./src/app/features/pos-app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _features_pos_user_pos_user_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/pos-user/pos-user.module */ "./src/app/features/pos-user/pos-user.module.ts");
/* harmony import */ var _features_pos_user_shared_authentication_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/pos-user/shared/authentication.services */ "./src/app/features/pos-user/shared/authentication.services.ts");
/* harmony import */ var _features_pos_user_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/pos-user/shared/authenticationGuard.service */ "./src/app/features/pos-user/shared/authenticationGuard.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _features_pos_app_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _features_pos_app_pos_app_module__WEBPACK_IMPORTED_MODULE_9__["PosAppModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _features_pos_user_pos_user_module__WEBPACK_IMPORTED_MODULE_12__["PosUserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot()
        ],
        providers: [
            _features_pos_user_shared_authentication_services__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _features_pos_user_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationGuard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/features/pos-app/components/about-us/about-us.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/features/pos-app/components/about-us/about-us.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Karla&display=swap\");\n/* h1 span img {\n  margin-top: -330px;\n  display: inline-block;\n  animation: animate 1s linear forwards;\n  opacity: 0;\n  transform: translateY(-50%);\n}\n\n@keyframes animate {\n  0% {\n    opacity: 0;\n    transform: rotateY(90deg);\n    filter: blur(10px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: rotateY(0deg);\n    filter: blur(0);\n  }\n}\n\nh1 span img:nth-child(1) {\n  animation-delay: 2s;\n} */\nh1 span img {\n  -webkit-animation: 5s rotate180 infinite linear;\n          animation: 5s rotate180 infinite linear;\n  margin-top: -330px;\n}\n@-webkit-keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n@keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\nsection {\n  height: 300px;\n  background: black;\n}\nvideo {\n  margin-top: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 450px;\n  height: 270px;\n  width: 700px;\n}\nsection::before {\n  content: \"\";\n  position: absolute;\n  top: 80;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: -webkit-gradient(linear, left top, right top, from(#fff), color-stop(#f00), color-stop(#0f0), color-stop(#0ff), color-stop(#ff0), to(#0ff));\n  background: linear-gradient(to right, #fff, #f00, #0f0, #0ff, #ff0, #0ff);\n  mix-blend-mode: color;\n  pointer-events: none;\n  height: 280px;\n}\nh1 {\n  text-align: center;\n}\na {\n  text-decoration: none;\n  color: black;\n  font-weight: 600;\n}\nspan .companyName {\n  text-decoration: none;\n  font-weight: 600;\n}\n.display-4 {\n  text-align: left;\n  font-family: \"News Cycle\", sans-serif;\n  font-weight: bold;\n  color: #002250;\n}\np {\n  font-family: \"Karla\", sans-serif;\n}\n#color {\n  color: #ca3e47;\n}\nh6 span {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s;\n}\n.social-link {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #666;\n  border-radius: 50%;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: 0.9rem;\n}\n.social-link:hover,\n.social-link:focus {\n  background: #ddd;\n  text-decoration: none;\n  color: #555;\n}\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2Fib3V0LXVzL0g6XFxHbGVtaWxcXFBST0pFQ1RTXFxpZy1leHByZXNzXFxpZ2UtcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBvcy1hcHBcXGNvbXBvbmVudHNcXGFib3V0LXVzXFxhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ0EseUVBQUE7QUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUE0QkE7RUFDRSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFQ0hGO0VES0E7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsWUFBQTtFQ0hGO0VES0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0hGO0VES0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0hGO0VES0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0hGO0VES0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0hGO0FBQ0Y7QURyQkE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDSEY7RURLQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxZQUFBO0VDSEY7RURLQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDSEY7RURLQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDSEY7RURLQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDSEY7RURLQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDSkY7QURPQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVKQUFBO0VBQUEseUVBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtBQ0pGO0FET0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKRjtBRE1BO0VBQ0UsZ0NBQUE7QUNIRjtBREtBO0VBQ0UsY0FBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDRkY7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxpQkFBQTtBQ0RGO0FESUE7O0VBRUUsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYSZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4vKiBoMSBzcGFuIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogLTMzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBhbmltYXRpb246IGFuaW1hdGUgMXMgbGluZWFyIGZvcndhcmRzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG4gIH1cclxufVxyXG5cclxuaDEgc3BhbiBpbWc6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59ICovXHJcblxyXG5cclxuXHJcbmgxIHNwYW4gaW1nIHtcclxuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgbWFyZ2luLXRvcDogLTMzMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZTE4MCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MmRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTQ0ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMTZkZWcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4OGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxudmlkZW8ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xyXG4gIGhlaWdodDogMjcwcHg7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZjAwLCAjMGYwLCAjMGZmLCAjZmYwLCAjMGZmKTtcclxuICBtaXgtYmxlbmQtbW9kZTogY29sb3I7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5zcGFuIC5jb21wYW55TmFtZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kaXNwbGF5LTQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTmV3cyBDeWNsZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAyMjUwO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthcmxhXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2NvbG9yIHtcclxuICBjb2xvcjogI2NhM2U0NztcclxufVxyXG5cclxuaDYgc3BhbiB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0LjVzO1xyXG59XHJcbi5zb2NpYWwtbGluayB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rOmhvdmVyLFxyXG4uc29jaWFsLWxpbms6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGEmZGlzcGxheT1zd2FwXCIpO1xuLyogaDEgc3BhbiBpbWcge1xuICBtYXJnaW4tdG9wOiAtMzMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDFzIGxpbmVhciBmb3J3YXJkcztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufVxuXG5oMSBzcGFuIGltZzpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xufSAqL1xuaDEgc3BhbiBpbWcge1xuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XG4gIG1hcmdpbi10b3A6IC0zMzBweDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUxODAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNzJkZWcpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNDRkZWcpO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMTZkZWcpO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyODhkZWcpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5zZWN0aW9uIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbnZpZGVvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgd2lkdGg6IDcwMHB4O1xufVxuXG5zZWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2YwMCwgIzBmMCwgIzBmZiwgI2ZmMCwgIzBmZik7XG4gIG1peC1ibGVuZC1tb2RlOiBjb2xvcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnNwYW4gLmNvbXBhbnlOYW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlzcGxheS00IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiTmV3cyBDeWNsZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDIyNTA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJLYXJsYVwiLCBzYW5zLXNlcmlmO1xufVxuXG4jY29sb3Ige1xuICBjb2xvcjogI2NhM2U0Nztcbn1cblxuaDYgc3BhbiB7XG4gIGFuaW1hdGlvbi1kZWxheTogNC41cztcbn1cblxuLnNvY2lhbC1saW5rIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnNvY2lhbC1saW5rOmhvdmVyLFxuLnNvY2lhbC1saW5rOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU1NTtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/about-us/about-us.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/pos-app/components/about-us/about-us.component.ts ***!
  \****************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/features/pos-app/components/about-us/about-us.component.scss")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Tajawal&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Yrsa&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato&display=swap\");\n#myPagination {\n  font-weight: 600;\n  text-align: center;\n}\n#prodCateg {\n  font-family: \"Tajawal\", sans-serif;\n  text-transform: uppercase;\n}\n#prodName {\n  font-family: \"Tajawal\", sans-serif;\n  color: #2979ff;\n  font-weight: bold;\n}\n#prodPrice {\n  font-family: \"Yrsa\", serif;\n}\n.fa-eye {\n  color: #2979ff;\n  font-size: 15px;\n}\n.fa-trash {\n  color: red;\n  font-size: 15px;\n}\n#Brd {\n  width: auto;\n  height: auto;\n}\nh3 {\n  font-family: \"Lato\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.3rem;\n  font-weight: bold;\n}\n.price {\n  margin-top: 10px;\n}\n.view {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2FkZC10by1jYXJ0L0g6XFxHbGVtaWxcXFBST0pFQ1RTXFxpZy1leHByZXNzXFxpZ2UtcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBvcy1hcHBcXGNvbXBvbmVudHNcXGFkZC10by1jYXJ0XFxhZGQtdG8tY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2FkZC10by1jYXJ0L2FkZC10by1jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJFQUFBO0FBQ0Esd0VBQUE7QUFDQSx3RUFBQTtBQUdSO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0E7RUFDSSxrQ0FBQTtFQUNBLHlCQUFBO0FDQUo7QURFQTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLDBCQUFBO0FDRUo7QURBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDR0o7QUREQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDSUo7QURGQTtFQUNLLFdBQUE7RUFDQSxZQUFBO0FDS0w7QURIQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDTUo7QURKQTtFQUNLLGdCQUFBO0FDT0w7QURMQTtFQUNLLGtCQUFBO0FDUUwiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3MtYXBwL2NvbXBvbmVudHMvYWRkLXRvLWNhcnQvYWRkLXRvLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRhamF3YWwmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9WXJzYSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbiNteVBhZ2luYXRpb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiNwcm9kQ2F0ZWcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUYWphd2FsJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuI3Byb2ROYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGFqYXdhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI5NzlmZiA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jcHJvZFByaWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnWXJzYScsIHNlcmlmO1xyXG59XHJcbi5mYS1leWUge1xyXG4gICAgY29sb3I6ICMyOTc5ZmYgICA7XHJcbiAgICBmb250LXNpemU6ICAxNXB4O1xyXG59XHJcbi5mYS10cmFzaCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAgMTVweDtcclxufVxyXG4jQnJke1xyXG4gICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuIH1cclxuaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJpY2V7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4udmlld3tcclxuICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UYWphd2FsJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVlyc2EmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXBcIik7XG4jbXlQYWdpbmF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcHJvZENhdGVnIHtcbiAgZm9udC1mYW1pbHk6IFwiVGFqYXdhbFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jcHJvZE5hbWUge1xuICBmb250LWZhbWlseTogXCJUYWphd2FsXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjk3OWZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3Byb2RQcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBcIllyc2FcIiwgc2VyaWY7XG59XG5cbi5mYS1leWUge1xuICBjb2xvcjogIzI5NzlmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZmEtdHJhc2gge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNCcmQge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi52aWV3IHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/adding-products.service */ "./src/app/features/shared/services/adding-products.service.ts");



let AddToCartComponent = class AddToCartComponent {
    constructor(service) {
        this.service = service;
        this.showDataNotFound = true;
        // Not Found Message
        this.messageTitle = 'No Products Found in Cart';
        this.messageDescription = 'Please, Add Products to Cart';
    }
    ngOnInit() {
        this.getCartProduct();
    }
    removeCartProduct(product) {
        this.service.removeLocalCartProduct(product);
        // Recalling
        this.getCartProduct();
    }
    getCartProduct() {
        this.cartProducts = this.service.getLocalCartProducts();
    }
};
AddToCartComponent.ctorParameters = () => [
    { type: _shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_2__["AddingProductsService"] }
];
AddToCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-to-cart',
        template: __webpack_require__(/*! raw-loader!./add-to-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.html"),
        styles: [__webpack_require__(/*! ./add-to-cart.component.scss */ "./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.scss")]
    })
], AddToCartComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Yrsa&display=swap\");\n#prodPrice {\n  font-family: \"Yrsa\", serif;\n  font-size: 20px;\n}\n#prodName {\n  font-family: \"Tajawal\", sans-serif;\n  color: #2979ff;\n  font-weight: bold;\n}\n#myPagination {\n  font-weight: 600;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2NhcnQtY2FsY3VsYXRvci9IOlxcR2xlbWlsXFxQUk9KRUNUU1xcaWctZXhwcmVzc1xcaWdlLXByb2plY3Qvc3JjXFxhcHBcXGZlYXR1cmVzXFxwb3MtYXBwXFxjb21wb25lbnRzXFxjYXJ0LWNhbGN1bGF0b3JcXGNhcnQtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2NhcnQtY2FsY3VsYXRvci9jYXJ0LWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0VBQUE7QUFFUjtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUE7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3MtYXBwL2NvbXBvbmVudHMvY2FydC1jYWxjdWxhdG9yL2NhcnQtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9WXJzYSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiNwcm9kUHJpY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdZcnNhJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuI3Byb2ROYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGFqYXdhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI5NzlmZiA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jbXlQYWdpbmF0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1ZcnNhJmRpc3BsYXk9c3dhcFwiKTtcbiNwcm9kUHJpY2Uge1xuICBmb250LWZhbWlseTogXCJZcnNhXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNwcm9kTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRhamF3YWxcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyOTc5ZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbXlQYWdpbmF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CartCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCalculatorComponent", function() { return CartCalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartCalculatorComponent = class CartCalculatorComponent {
    constructor() {
        this.totalValue = 0;
    }
    ngOnChanges(changes) {
        const dataChanges = changes.products;
        const products = dataChanges.currentValue;
        this.totalValue = 0;
        products.forEach((product) => {
            this.totalValue += product.price;
        });
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartCalculatorComponent.prototype, "products", void 0);
CartCalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-calculator',
        template: __webpack_require__(/*! raw-loader!./cart-calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.html"),
        styles: [__webpack_require__(/*! ./cart-calculator.component.scss */ "./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.scss")]
    })
], CartCalculatorComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/csr-request/csr-request.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/csr-request/csr-request.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy9jc3ItcmVxdWVzdC9jc3ItcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/csr-request/csr-request.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/pos-app/components/csr-request/csr-request.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CsrRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsrRequestComponent", function() { return CsrRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CsrRequestComponent = class CsrRequestComponent {
    constructor(fb) {
        this.fb = fb;
        this.csrFormValueOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.csrServiceForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{3,}$')]],
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onCustomerSubmit(csrFormValue) {
        if (this.csrServiceForm.valid) {
            this.csrFormValueOut.emit(csrFormValue);
            console.log('csr-ts1', csrFormValue);
            console.log('csr-ts2', this.csrServiceForm.value);
            this.csrServiceForm.reset();
        }
    }
};
CsrRequestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CsrRequestComponent.prototype, "csrFormValueOut", void 0);
CsrRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-csr-request',
        template: __webpack_require__(/*! raw-loader!./csr-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/csr-request/csr-request.component.html"),
        styles: [__webpack_require__(/*! ./csr-request.component.scss */ "./src/app/features/pos-app/components/csr-request/csr-request.component.scss")]
    })
], CsrRequestComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/dashboard/dashboard.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/pos-app/components/dashboard/dashboard.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/pos-app/components/dashboard/dashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/pos-app/components/dashboard/dashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/features/pos-app/components/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/dummy/dummy.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/features/pos-app/components/dummy/dummy.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy9kdW1teS9kdW1teS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/dummy/dummy.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/pos-app/components/dummy/dummy.component.ts ***!
  \**********************************************************************/
/*! exports provided: DummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return DummyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DummyComponent = class DummyComponent {
    constructor() { }
    ngOnInit() {
    }
};
DummyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dummy',
        template: __webpack_require__(/*! raw-loader!./dummy.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/dummy/dummy.component.html"),
        styles: [__webpack_require__(/*! ./dummy.component.scss */ "./src/app/features/pos-app/components/dummy/dummy.component.scss")]
    })
], DummyComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/help/help.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/pos-app/components/help/help.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/components/help/help.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/pos-app/components/help/help.component.ts ***!
  \********************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() {
        this.targetCsrOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.targetTsrOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    customerService() {
        this.targetCsrOut.emit(true);
        console.log('csr', this.targetCsrOut);
    }
    technicalSupport() {
        this.targetTsrOut.emit(true);
        console.log('tsr', this.targetTsrOut);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HelpComponent.prototype, "targetCsrOut", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HelpComponent.prototype, "targetTsrOut", void 0);
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/help/help.component.html"),
        styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/features/pos-app/components/help/help.component.scss")]
    })
], HelpComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/home/home.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/pos-app/components/home/home.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\n.carousel-images {\n  height: 700px;\n  background-size: cover;\n  position: relative;\n}\n.carousel-control-prev, .carousel-control-next {\n  width: 10%;\n}\n.btn {\n  font-size: 15px;\n}\n.row {\n  text-align: left;\n}\ndiv.container-overlay {\n  position: absolute;\n  top: 350px;\n  left: 150px;\n  bottom: 100px;\n  right: 900px;\n  text-align: center;\n  width: 500px;\n  height: auto;\n}\n.first-entry {\n  text-transform: uppercase;\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: normal;\n  color: whitesmoke;\n  opacity: 0.7;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.52);\n  text-align: left;\n  padding-left: 0px;\n}\n.text-phone {\n  font-family: brandon-grotesque, sans-serif;\n  font-size: 2.7em;\n  font-weight: 700;\n  line-height: 3.6rem;\n  text-transform: uppercase;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.52);\n  text-align: left;\n  padding-left: 0px;\n}\n.second-entry {\n  font-family: brandon-grotesque, sans-serif;\n  font-size: 1.688em;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.52);\n  font-weight: 500;\n  opacity: 0.9;\n  text-transform: uppercase;\n  text-align: left;\n  padding-left: 0px;\n}\n@media only screen and (max-width: 1200px) {\n  .carousel-images {\n    height: auto;\n  }\n\n  div.container-overlay {\n    position: absolute;\n    top: 40%;\n    left: 10%;\n    bottom: 100px;\n    right: 900px;\n    text-align: center;\n    width: 500px;\n    height: auto;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .first-carousel-button {\n    position: absolute;\n    font-size: 10px;\n  }\n\n  .second-carousel-button {\n    position: absolute;\n    left: 130px;\n    font-size: 10px;\n  }\n\n  .carousel-images {\n    height: auto;\n  }\n\n  div.container-overlay {\n    position: absolute;\n    top: 40%;\n    left: 10%;\n    bottom: 100px;\n    right: 900px;\n    text-align: center;\n    width: 500px;\n    height: auto;\n  }\n\n  .first-entry {\n    text-transform: uppercase;\n    font-family: brandon-grotesque, sans-serif;\n    font-weight: normal;\n    color: whitesmoke;\n    opacity: 0.7;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.52);\n    text-align: left;\n    padding-left: 0px;\n    font-size: 0.7em;\n  }\n\n  .text-phone {\n    font-family: brandon-grotesque, sans-serif;\n    font-size: 1.8em;\n    font-weight: 700;\n    line-height: 2.5rem;\n    text-transform: uppercase;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.52);\n    text-align: left;\n    padding-left: 0px;\n  }\n\n  .second-entry {\n    font-family: brandon-grotesque, sans-serif;\n    font-size: 1.1em;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.52);\n    font-weight: 500;\n    opacity: 0.9;\n    text-transform: uppercase;\n    text-align: left;\n    padding-left: 0px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .img {\n    width: 250px;\n    height: 250px;\n    margin-left: 120px;\n    text-align: center;\n  }\n}\n@media only screen and (max-width: 532px) {\n  .img {\n    width: 250px;\n    height: 250px;\n    margin: auto;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2hvbWUvSDpcXEdsZW1pbFxcUFJPSkVDVFNcXGlnLWV4cHJlc3NcXGlnZS1wcm9qZWN0L3NyY1xcYXBwXFxmZWF0dXJlc1xccG9zLWFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUlSO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsVUFBQTtBQ0ZGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0FDSEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRFVBO0VBQ0U7SUFDRSxZQUFBO0VDUEY7O0VEVUE7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDUEY7QUFDRjtBRFVBO0VBRUU7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUNURjs7RURXQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNSRjs7RURVQTtJQUNFLFlBQUE7RUNQRjs7RURVQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNQRjs7RURVQTtJQUNFLHlCQUFBO0lBQ0EsMENBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLDRDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDUEY7O0VEVUE7SUFDRSwwQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLDRDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ1BGOztFRFVBO0lBQ0UsMENBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ1BGO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3MtYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGluZDo3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLy8gY2Fyb3VzZWxcclxuXHJcbi5jYXJvdXNlbC1pbWFnZXMge1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLy8gY2Fyb3VzZWwgcHJldiAmIG5leHQgYnV0dG9uc1xyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4vLyBnbG9iYWwgdGFnc1xyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8vIGNvbnRhaW5lciBpbnNpZGUgY2Fyb3VzZWxcclxuXHJcbmRpdi5jb250YWluZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzUwcHg7XHJcbiAgbGVmdDogMTUwcHg7XHJcbiAgYm90dG9tOiAxMDBweDtcclxuICByaWdodDogOTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5maXJzdC1lbnRyeSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWUsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnRleHQtcGhvbmUge1xyXG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIuN2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMuNnJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTIpO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5zZWNvbmQtZW50cnkge1xyXG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNjg4ZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4vLyBtZWRpYSBnbG9iYWxcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNhcm91c2VsLWltYWdlcyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBkaXYuY29udGFpbmVyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG4gICAgcmlnaHQ6IDkwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC8vIGNvbnRhaW5lciBpbnNpZGUgY2Fyb3VzZWxcclxuICAuZmlyc3QtY2Fyb3VzZWwtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLnNlY29uZC1jYXJvdXNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTMwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pbWFnZXMge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgZGl2LmNvbnRhaW5lci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYm90dG9tOiAxMDBweDtcclxuICAgIHJpZ2h0OiA5MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5maXJzdC1lbnRyeSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtcGhvbmUge1xyXG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kLWVudHJ5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMycHgpe1xyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGluZDo3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmNhcm91c2VsLWltYWdlcyB7XG4gIGhlaWdodDogNzAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yb3cge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5kaXYuY29udGFpbmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUwcHg7XG4gIGxlZnQ6IDE1MHB4O1xuICBib3R0b206IDEwMHB4O1xuICByaWdodDogOTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5maXJzdC1lbnRyeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIG9wYWNpdHk6IDAuNztcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4udGV4dC1waG9uZSB7XG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDMuNnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTIpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnNlY29uZC1lbnRyeSB7XG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjY4OGVtO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJvdXNlbC1pbWFnZXMge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIGRpdi5jb250YWluZXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHJpZ2h0OiA5MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuZmlyc3QtY2Fyb3VzZWwtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLnNlY29uZC1jYXJvdXNlbC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMzBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW1hZ2VzIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBkaXYuY29udGFpbmVyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICByaWdodDogOTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuZmlyc3QtZW50cnkge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTIpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxuXG4gIC50ZXh0LXBob25lIHtcbiAgICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWUsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUyKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG5cbiAgLnNlY29uZC1lbnRyeSB7XG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41Mik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5pbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMycHgpIHtcbiAgLmltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/components/home/home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/pos-app/components/home/home.component.ts ***!
  \********************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/pos-app/components/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/nav-bar/nav-bar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/features/pos-app/components/nav-bar/nav-bar.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Yrsa&display=swap\");\n.badge-warning {\n  position: absolute;\n  top: 7px;\n  right: 33px;\n  font-weight: bold;\n}\nh5 {\n  font-size: 20px;\n  font-family: \"Yrsa\", serif;\n}\n.badge {\n  padding: 3px 7px;\n  font-size: 50px;\n  font-weight: 700;\n  white-space: nowrap;\n  color: #fff;\n  background-color: red;\n  border-radius: 9px;\n  display: inline-block;\n  vertical-align: baseline;\n}\n#nezuko {\n  height: 50px;\n  width: 50px;\n}\n#logoIge {\n  -webkit-animation: 5s rotate180 infinite linear;\n          animation: 5s rotate180 infinite linear;\n}\n@-webkit-keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n@keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n.nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n/* Fixes dropdown menus placed on the right side */\n.ml-auto .dropdown-menu {\n  left: auto;\n  right: 0px;\n}\n.mainMenuList {\n  font-family: \"Hind\", sans-serif;\n}\n.megamenu {\n  position: static;\n}\nnav {\n  background-image: url(\"/assets/404 image/main-bg.jpg\");\n}\n.nav-item a {\n  color: white;\n}\n.row {\n  background-image: url(\"/assets/404 image/main-bg.jpg\");\n}\n.megamenu .dropdown-menu {\n  background: none;\n  border: none;\n  width: 100%;\n}\nh6 {\n  color: white;\n}\n#menu {\n  color: white;\n}\na:hover {\n  text-decoration: underline;\n}\n.navbar-nav > li {\n  padding-left: 20px;\n  padding-right: 20px;\n  color: white;\n}\n.btn {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  font-size: 20px;\n  text-align: center;\n  padding: 0;\n  border-radius: 50%;\n  outline: none;\n}\ni {\n  color: white;\n  cursor: pointer;\n}\n.viewCart {\n  font-family: \"Hind\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL25hdi1iYXIvSDpcXEdsZW1pbFxcUFJPSkVDVFNcXGlnLWV4cHJlc3NcXGlnZS1wcm9qZWN0L3NyY1xcYXBwXFxmZWF0dXJlc1xccG9zLWFwcFxcY29tcG9uZW50c1xcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUNBLHdFQUFBO0FBRVI7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREdDO0VBQ0MsZUFBQTtFQUNBLDBCQUFBO0FDQUY7QURHQTtFQUFPLGdCQUFBO0VBQ0wsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtBQ0FGO0FER0E7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDQUY7RURFQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxZQUFBO0VDQUY7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDQUY7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDQUY7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDQUY7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDQUY7QUFDRjtBRHhCQTtFQUNFO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNBRjtFREVBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLFlBQUE7RUNBRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNBRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNBRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNBRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FDREY7QURJQSxrREFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUNERjtBRElBO0VBQ0UsK0JBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7QUNERjtBRElBO0VBQ0Usc0RBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FER0E7RUFDRSxzREFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSwwQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQUY7QURFQTtFQUNFLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3MtYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGluZDo3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVlyc2EmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYmFkZ2Utd2FybmluZ3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICByaWdodDogMzNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gaDV7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnWXJzYScsIHNlcmlmO1xyXG4gfVxyXG5cclxuLmJhZGdle3BhZGRpbmc6IDNweCA3cHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcblxyXG59XHJcblxyXG4jbmV6dWtvIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbiNsb2dvSWdlIHtcclxuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlMTgwIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDcyZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNDRkZWcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIxNmRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjg4ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLyogRml4ZXMgZHJvcGRvd24gbWVudXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlICovXHJcbi5tbC1hdXRvIC5kcm9wZG93bi1tZW51IHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5tYWluTWVudUxpc3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1lZ2FtZW51IHtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvNDA0IGltYWdlL21haW4tYmcuanBnXCIpO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yb3cge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvNDA0IGltYWdlL21haW4tYmcuanBnXCIpO1xyXG59XHJcblxyXG4ubWVnYW1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbWVudSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnZpZXdDYXJ0IHtcclxuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IaW5kOjcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1ZcnNhJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWRnZS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiWXJzYVwiLCBzZXJpZjtcbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4jbmV6dWtvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuI2xvZ29JZ2Uge1xuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlMTgwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDcyZGVnKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTQ0ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjE2ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjg4ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLm5hdi1saW5rIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLyogRml4ZXMgZHJvcGRvd24gbWVudXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlICovXG4ubWwtYXV0byAuZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5tYWluTWVudUxpc3Qge1xuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tZWdhbWVudSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvNDA0IGltYWdlL21haW4tYmcuanBnXCIpO1xufVxuXG4ubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJvdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvNDA0IGltYWdlL21haW4tYmcuanBnXCIpO1xufVxuXG4ubWVnYW1lbnUgLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI21lbnUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5hdmJhci1uYXYgPiBsaSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlld0NhcnQge1xuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/nav-bar/nav-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/pos-app/components/nav-bar/nav-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/adding-products.service */ "./src/app/features/shared/services/adding-products.service.ts");




let NavBarComponent = class NavBarComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
    }
    /*   routeAsus(pass) {
        this.router.navigate(['/shopping-cart'], {fragment: pass});
      } */
    goToCart() {
        this.router.navigateByUrl('my-cart');
    }
    goToHelp() {
        this.redirectTo('help');
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_3__["AddingProductsService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/features/pos-app/components/nav-bar/nav-bar.component.scss")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/no-products-found/no-products-found.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/no-products-found/no-products-found.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);\n}\n\n.error-template {\n  padding: 40px 15px;\n  text-align: center;\n}\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.error-actions .btn {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL25vLXByb2R1Y3RzLWZvdW5kL0g6XFxHbGVtaWxcXFBST0pFQ1RTXFxpZy1leHByZXNzXFxpZ2UtcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBvcy1hcHBcXGNvbXBvbmVudHNcXG5vLXByb2R1Y3RzLWZvdW5kXFxuby1wcm9kdWN0cy1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL25vLXByb2R1Y3RzLWZvdW5kL25vLXByb2R1Y3RzLWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNm9CQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL25vLXByb2R1Y3RzLWZvdW5kL25vLXByb2R1Y3RzLWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFCWjBSVmgwUTNKbFlYUnBiMjRnVkdsdFpRQXhNQzh5T1M4eE1pS3FxM2tBQUFBY2RFVllkRk52Wm5SM1lYSmxBRUZrYjJKbElFWnBjbVYzYjNKcmN5QkRVelZ4dGVNMkFBQUJIa2xFUVZSSWliMlZ5dzZFSUF4Rlc1aWRyLy8vUXg5c2ZHM3BMRXlKM3RBd2k1RW1CcVJvN3ZIYXdpRUVFUkhTNng3TVRNeE1WdjYrejN0UE1VWVNrZlRNL1IwZkVhRzJiYk12K0djNG5aem4rZE40SEFjUkVhM3IraGkzYmN1dTY4akxza2hWSWxXMDczdFdhWWxROStGOUlwcW1TZnErZndza2hkTy9Bd21VVEpYck91YVJRTmVSa09kNWxxN3JYbVM1SW5tRVJLb0VSL1FNdlVBUGxaREhjWlJoR040Q1NlR1krYUhNcWdja3M1UnJIdi9lZWg0NTV4NUtyTXEyeUhRZGliRE82bmNHL0taV0w3TTh4RHlTMS9NSU8wTkpxZFVMTFM4MVg2L1g2YVIwbnFCU0pjUGVabmxacnpONDc3TktVUm4yTnVzOHNqem1FSUkwVGZNaXl4VXV4cGhWV2pwSmtieDBidFVuc2hSaWhWdjcwQnY4SXRYcTZBc29pL1ppQ2JVNllnQUFBQUJKUlU1RXJrSmdnZz09KTtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLXRlbXBsYXRlIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1hY3Rpb25zIC5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAiLCJib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBQlowUlZoMFEzSmxZWFJwYjI0Z1ZHbHRaUUF4TUM4eU9TOHhNaUtxcTNrQUFBQWNkRVZZZEZOdlpuUjNZWEpsQUVGa2IySmxJRVpwY21WM2IzSnJjeUJEVXpWeHRlTTJBQUFCSGtsRVFWUklpYjJWeXc2RUlBeEZXNWlkci8vL1F4OXNmRzNwTEV5SjN0QXdpNUVtQnFSbzd2SGF3aUVFRVJIUzZ4N01UTXhNVnY2K3ozdFBNVVlTa2ZUTS9SMGZFYUcyYmJNditHYzRuWnpuK2RONEhBY1JFYTNyK2hpM2JjdXU2OGpMc2toVklsVzA3M3RXYVlsUTkrRjlJcHFtU2ZxK2Z3c2toZE8vQXdtVVRKWHJPdWFSUU5lUmtPZDVscTdyWG1TNUlubUVSS29FUi9RTXZVQVBsWkRIY1pSaEdONENTZUdZK2FITXFnY2tzNVJySHYvZWVoNDU1eDVLck1xMnlIUWRpYkRPNm5jRy9LWldMN004eER5UzEvTUlPME5KcWRVTExTODFYNi9YNmFSMG5xQlNKY1BlWm5sWnJ6TjQ3N05LVVJuMk51czhzanptRUlJMFRmTWl5eFV1eHBoVldqcEprYngwYnRVbnNoUmloVnY3MEJ2OEl0WHE2QXNvaS9aaUNiVTZZZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XG59XG5cbi5lcnJvci10ZW1wbGF0ZSB7XG4gIHBhZGRpbmc6IDQwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXJyb3ItYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5lcnJvci1hY3Rpb25zIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/no-products-found/no-products-found.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/no-products-found/no-products-found.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NoProductsFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductsFoundComponent", function() { return NoProductsFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoProductsFoundComponent = class NoProductsFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')
], NoProductsFoundComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description')
], NoProductsFoundComponent.prototype, "description", void 0);
NoProductsFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-products-found',
        template: __webpack_require__(/*! raw-loader!./no-products-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/no-products-found/no-products-found.component.html"),
        styles: [__webpack_require__(/*! ./no-products-found.component.scss */ "./src/app/features/pos-app/components/no-products-found/no-products-found.component.scss")]
    })
], NoProductsFoundComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/page-not-found/page-not-found.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/page-not-found/page-not-found.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap\");\n.content {\n  background-image: url(\"/assets/404 image/main-bg.jpg\");\n  height: 681px;\n}\n.logo {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.text {\n  text-align: center;\n  font-family: \"Didact Gothic\", sans-serif;\n}\nh5 {\n  margin-top: 30px;\n  color: white;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL0g6XFxHbGVtaWxcXFBST0pFQ1RTXFxpZy1leHByZXNzXFxpZ2UtcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBvcy1hcHBcXGNvbXBvbmVudHNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlGQUFBO0FBRVI7RUFDRSxzREFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0FDQ0Y7QURDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3MtYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURpZGFjdCtHb3RoaWMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy80MDQgaW1hZ2UvbWFpbi1iZy5qcGdcIik7XHJcbiAgaGVpZ2h0OiA2ODFweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmg1e1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIik7XG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvNDA0IGltYWdlL21haW4tYmcuanBnXCIpO1xuICBoZWlnaHQ6IDY4MXB4O1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    homePage() {
        this.router.navigate(['/home']);
    }
    ngOnInit() { }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/features/pos-app/components/page-not-found/page-not-found.component.scss")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/product-info/product-info.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/product-info/product-info.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-detail .product-head {\n  padding: 10px;\n  font-weight: 500;\n}\n\n.product-detail .table th {\n  width: 152px;\n}\n\n.product-ship {\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL3Byb2R1Y3QtaW5mby9IOlxcR2xlbWlsXFxQUk9KRUNUU1xcaWctZXhwcmVzc1xcaWdlLXByb2plY3Qvc3JjXFxhcHBcXGZlYXR1cmVzXFxwb3MtYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWluZm9cXHByb2R1Y3QtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL3Byb2R1Y3QtaW5mby9wcm9kdWN0LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy9wcm9kdWN0LWluZm8vcHJvZHVjdC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGV0YWlsIC5wcm9kdWN0LWhlYWQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWRldGFpbCAudGFibGUgdGgge1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1zaGlwIHtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbiAgfVxyXG4gICIsIi5wcm9kdWN0LWRldGFpbCAucHJvZHVjdC1oZWFkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2R1Y3QtZGV0YWlsIC50YWJsZSB0aCB7XG4gIHdpZHRoOiAxNTJweDtcbn1cblxuLnByb2R1Y3Qtc2hpcCB7XG4gIGhlaWdodDogMTVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/product-info/product-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/product-info/product-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoComponent", function() { return ProductInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_features_shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/shared/services/adding-products.service */ "./src/app/features/shared/services/adding-products.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_features_shared_models_myProducts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/features/shared/models/myProducts.model */ "./src/app/features/shared/models/myProducts.model.ts");






let ProductInfoComponent = class ProductInfoComponent {
    constructor(route, service, toastrService) {
        this.route = route;
        this.service = service;
        this.toastrService = toastrService;
        this.product = new src_app_features_shared_models_myProducts_model__WEBPACK_IMPORTED_MODULE_5__["MyProducts"]();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            const id = params.id; // (+) converts string 'id' to a number
            this.getProductInfo(id);
        });
    }
    getProductInfo(id) {
        // this.spinnerService.show();
        const x = this.service.getProductById(id);
        x.snapshotChanges().subscribe((product) => {
            // this.spinnerService.hide();
            const y = product.payload.toJSON();
            y.$key = id;
            this.product = y;
        }, (error) => {
            this.toastrService.error('Error while fetching Product Detail', error);
        });
    }
    addToCart(product) {
        this.service.addToCart(product);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
ProductInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_features_shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_2__["AddingProductsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
ProductInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-info',
        template: __webpack_require__(/*! raw-loader!./product-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/product-info/product-info.component.html"),
        styles: [__webpack_require__(/*! ./product-info.component.scss */ "./src/app/features/pos-app/components/product-info/product-info.component.scss")]
    })
], ProductInfoComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/promo/promo.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/features/pos-app/components/promo/promo.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view .text {\n  position: absolute;\n  z-index: 999;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  top: auto;\n  /* Adjust this value to move the positioned div up and down */\n  background: rgba(0, 0, 0, 0.52);\n  font-family: \"Courier New\", Courier, monospace;\n  color: whitesmoke;\n  width: auto;\n  /* Set the width of the positioned div */\n  height: auto;\n}\n\n.mask {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL3Byb21vL0g6XFxHbGVtaWxcXFBST0pFQ1RTXFxpZy1leHByZXNzXFxpZ2UtcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBvcy1hcHBcXGNvbXBvbmVudHNcXHByb21vXFxwcm9tby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLWFwcC9jb21wb25lbnRzL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQVcsNkRBQUE7RUFDWCwrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQWEsd0NBQUE7RUFDYixZQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3MtYXBwL2NvbXBvbmVudHMvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnZpZXcgLnRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDsgICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiBhdXRvOyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSB0byBtb3ZlIHRoZSBwb3NpdGlvbmVkIGRpdiB1cCBhbmQgZG93biAqL1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNTIpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogYXV0bzsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgcG9zaXRpb25lZCBkaXYgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ubWFza3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi52aWV3IC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IGF1dG87XG4gIC8qIEFkanVzdCB0aGlzIHZhbHVlIHRvIG1vdmUgdGhlIHBvc2l0aW9uZWQgZGl2IHVwIGFuZCBkb3duICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41Mik7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHdpZHRoOiBhdXRvO1xuICAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBwb3NpdGlvbmVkIGRpdiAqL1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYXNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/components/promo/promo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/pos-app/components/promo/promo.component.ts ***!
  \**********************************************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PromoComponent = class PromoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promo',
        template: __webpack_require__(/*! raw-loader!./promo.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/promo/promo.component.html"),
        styles: [__webpack_require__(/*! ./promo.component.scss */ "./src/app/features/pos-app/components/promo/promo.component.scss")]
    })
], PromoComponent);



/***/ }),

/***/ "./src/app/features/pos-app/components/tsr-request/tsr-request.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/features/pos-app/components/tsr-request/tsr-request.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29tcG9uZW50cy90c3ItcmVxdWVzdC90c3ItcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/pos-app/components/tsr-request/tsr-request.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/pos-app/components/tsr-request/tsr-request.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TsrRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsrRequestComponent", function() { return TsrRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let TsrRequestComponent = class TsrRequestComponent {
    constructor(fb) {
        this.fb = fb;
        this.tsrFormValueOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.tsrRequestForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{3,}$')]],
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onCustomerSubmit(tsrFormValue) {
        if (this.tsrRequestForm.valid) {
            console.log('tsr-ts1', tsrFormValue);
            this.tsrFormValueOut.emit(tsrFormValue);
            console.log('tsr-ts2', this.tsrRequestForm.value);
            this.tsrRequestForm.reset();
        }
    }
};
TsrRequestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TsrRequestComponent.prototype, "tsrFormValueOut", void 0);
TsrRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tsr-request',
        template: __webpack_require__(/*! raw-loader!./tsr-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/components/tsr-request/tsr-request.component.html"),
        styles: [__webpack_require__(/*! ./tsr-request.component.scss */ "./src/app/features/pos-app/components/tsr-request/tsr-request.component.scss")]
    })
], TsrRequestComponent);



/***/ }),

/***/ "./src/app/features/pos-app/container/main-about-us/main-about-us.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/pos-app/container/main-about-us/main-about-us.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29udGFpbmVyL21haW4tYWJvdXQtdXMvbWFpbi1hYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/pos-app/container/main-about-us/main-about-us.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/pos-app/container/main-about-us/main-about-us.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MainAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAboutUsComponent", function() { return MainAboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainAboutUsComponent = class MainAboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainAboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-about-us',
        template: __webpack_require__(/*! raw-loader!./main-about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/main-about-us/main-about-us.component.html"),
        styles: [__webpack_require__(/*! ./main-about-us.component.scss */ "./src/app/features/pos-app/container/main-about-us/main-about-us.component.scss")]
    })
], MainAboutUsComponent);



/***/ }),

/***/ "./src/app/features/pos-app/container/main-help/main-help.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/pos-app/container/main-help/main-help.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29udGFpbmVyL21haW4taGVscC9tYWluLWhlbHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/container/main-help/main-help.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/pos-app/container/main-help/main-help.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHelpComponent", function() { return MainHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_features_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/shared/services/customer.service */ "./src/app/features/shared/services/customer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let MainHelpComponent = class MainHelpComponent {
    constructor(customerService, toastr) {
        this.customerService = customerService;
        this.toastr = toastr;
        this.targetHelp = true;
        this.targetTsr = false;
        this.targetCsr = false;
    }
    tsrFormValueIn(tsrFormValue) {
        console.log('main first', tsrFormValue);
        this.customerService.insertTsrDetails(tsrFormValue);
        console.log('main second', tsrFormValue);
        this.toastr.success('You have been successfully send your request!');
    }
    csrFormValueIn(csrFormValue) {
        console.log('main first', csrFormValue);
        this.customerService.insertCsrDetails(csrFormValue);
        console.log('main second', csrFormValue);
        this.toastr.success('You have been successfully send your request!');
    }
    tsrTargetIn(tsr) {
        this.targetHelp = false;
        this.targetTsr = tsr;
        this.targetCsr = false;
    }
    csrTargetIn(csr) {
        this.targetHelp = false;
        this.targetTsr = false;
        this.targetCsr = csr;
    }
};
MainHelpComponent.ctorParameters = () => [
    { type: src_app_features_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
MainHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-help',
        template: __webpack_require__(/*! raw-loader!./main-help.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/main-help/main-help.component.html"),
        styles: [__webpack_require__(/*! ./main-help.component.scss */ "./src/app/features/pos-app/container/main-help/main-help.component.scss")]
    })
], MainHelpComponent);



/***/ }),

/***/ "./src/app/features/pos-app/container/main-home/main-home.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/pos-app/container/main-home/main-home.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29udGFpbmVyL21haW4taG9tZS9tYWluLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/pos-app/container/main-home/main-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/pos-app/container/main-home/main-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomeComponent", function() { return MainHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainHomeComponent = class MainHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-home',
        template: __webpack_require__(/*! raw-loader!./main-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/main-home/main-home.component.html"),
        styles: [__webpack_require__(/*! ./main-home.component.scss */ "./src/app/features/pos-app/container/main-home/main-home.component.scss")]
    })
], MainHomeComponent);



/***/ }),

/***/ "./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy1hcHAvY29udGFpbmVyL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingCartComponent = class ShoppingCartComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.scss")]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/features/pos-app/pos-app-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/pos-app/pos-app-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PosAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosAppRoutingModule", function() { return PosAppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/promo/promo.component */ "./src/app/features/pos-app/components/promo/promo.component.ts");
/* harmony import */ var _components_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-to-cart/add-to-cart.component */ "./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/features/pos-app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _container_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/shopping-cart/shopping-cart.component */ "./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _container_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/main-home/main-home.component */ "./src/app/features/pos-app/container/main-home/main-home.component.ts");
/* harmony import */ var _container_main_about_us_main_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container/main-about-us/main-about-us.component */ "./src/app/features/pos-app/container/main-about-us/main-about-us.component.ts");
/* harmony import */ var _container_main_help_main_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/main-help/main-help.component */ "./src/app/features/pos-app/container/main-help/main-help.component.ts");
/* harmony import */ var _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dummy/dummy.component */ "./src/app/features/pos-app/components/dummy/dummy.component.ts");
/* harmony import */ var _components_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-info/product-info.component */ "./src/app/features/pos-app/components/product-info/product-info.component.ts");












const routes = [
    { path: '', component: _container_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_7__["MainHomeComponent"] },
    { path: 'about-us', component: _container_main_about_us_main_about_us_component__WEBPACK_IMPORTED_MODULE_8__["MainAboutUsComponent"] },
    { path: 'promo', component: _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_3__["PromoComponent"] },
    { path: 'page-not-found', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: 'my-cart', component: _components_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_4__["AddToCartComponent"] },
    { path: 'shopping-cart', component: _container_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"] },
    { path: 'help', component: _container_main_help_main_help_component__WEBPACK_IMPORTED_MODULE_9__["MainHelpComponent"] },
    { path: 'dummy', component: _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__["DummyComponent"] },
    { path: 'product-info/:id', component: _components_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_11__["ProductInfoComponent"] },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];
let PosAppRoutingModule = class PosAppRoutingModule {
};
PosAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PosAppRoutingModule);



/***/ }),

/***/ "./src/app/features/pos-app/pos-app.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/pos-app/pos-app.module.ts ***!
  \****************************************************/
/*! exports provided: PosAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosAppModule", function() { return PosAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pos_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pos-app-routing.module */ "./src/app/features/pos-app/pos-app-routing.module.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/features/pos-app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/features/pos-app/components/home/home.component.ts");
/* harmony import */ var _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/promo/promo.component */ "./src/app/features/pos-app/components/promo/promo.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/features/pos-app/components/about-us/about-us.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-to-cart/add-to-cart.component */ "./src/app/features/pos-app/components/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _components_csr_request_csr_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/csr-request/csr-request.component */ "./src/app/features/pos-app/components/csr-request/csr-request.component.ts");
/* harmony import */ var _components_tsr_request_tsr_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tsr-request/tsr-request.component */ "./src/app/features/pos-app/components/tsr-request/tsr-request.component.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/features/pos-app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _container_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./container/shopping-cart/shopping-cart.component */ "./src/app/features/pos-app/container/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _pos_user_pos_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pos-user/pos-user.module */ "./src/app/features/pos-user/pos-user.module.ts");
/* harmony import */ var _container_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./container/main-home/main-home.component */ "./src/app/features/pos-app/container/main-home/main-home.component.ts");
/* harmony import */ var _container_main_help_main_help_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./container/main-help/main-help.component */ "./src/app/features/pos-app/container/main-help/main-help.component.ts");
/* harmony import */ var _container_main_about_us_main_about_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./container/main-about-us/main-about-us.component */ "./src/app/features/pos-app/container/main-about-us/main-about-us.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/features/pos-app/components/help/help.component.ts");
/* harmony import */ var _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dummy/dummy.component */ "./src/app/features/pos-app/components/dummy/dummy.component.ts");
/* harmony import */ var _components_no_products_found_no_products_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/no-products-found/no-products-found.component */ "./src/app/features/pos-app/components/no-products-found/no-products-found.component.ts");
/* harmony import */ var _components_cart_calculator_cart_calculator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cart-calculator/cart-calculator.component */ "./src/app/features/pos-app/components/cart-calculator/cart-calculator.component.ts");
/* harmony import */ var _components_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/product-info/product-info.component */ "./src/app/features/pos-app/components/product-info/product-info.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");



























let PosAppModule = class PosAppModule {
};
PosAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_6__["PromoComponent"],
            _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
            _components_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_9__["AddToCartComponent"],
            _components_csr_request_csr_request_component__WEBPACK_IMPORTED_MODULE_11__["CsrRequestComponent"],
            _components_tsr_request_tsr_request_component__WEBPACK_IMPORTED_MODULE_12__["TsrRequestComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
            _container_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartComponent"],
            _container_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_18__["MainHomeComponent"],
            _container_main_help_main_help_component__WEBPACK_IMPORTED_MODULE_19__["MainHelpComponent"],
            _container_main_about_us_main_about_us_component__WEBPACK_IMPORTED_MODULE_20__["MainAboutUsComponent"],
            _components_help_help_component__WEBPACK_IMPORTED_MODULE_21__["HelpComponent"],
            _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_22__["DummyComponent"],
            _components_no_products_found_no_products_found_component__WEBPACK_IMPORTED_MODULE_23__["NoProductsFoundComponent"],
            _components_cart_calculator_cart_calculator_component__WEBPACK_IMPORTED_MODULE_24__["CartCalculatorComponent"],
            _components_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_25__["ProductInfoComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pos_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["PosAppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(),
            _pos_user_pos_user_module__WEBPACK_IMPORTED_MODULE_17__["PosUserModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_26__["NgxPaginationModule"]
        ]
    })
], PosAppModule);



/***/ }),

/***/ "./src/app/features/pos-user/components/add-product/add-product.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/features/pos-user/components/add-product/add-product.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\ndiv {\n  font-family: \"Hind\", sans-serif;\n  font-weight: 600;\n}\n.btnAdd {\n  text-align: center;\n}\n.modAdd {\n  font-size: 13px;\n  border-radius: 0;\n  width: auto;\n  font-family: \"Hind\", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9IOlxcR2xlbWlsXFxQUk9KRUNUU1xcaWctZXhwcmVzc1xcaWdlLXByb2plY3Qvc3JjXFxhcHBcXGZlYXR1cmVzXFxwb3MtdXNlclxcY29tcG9uZW50c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3MtdXNlci9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDRFQUFBO0FBRVI7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy11c2VyL2NvbXBvbmVudHMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IaW5kOjcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5kaXYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuQWRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RBZGQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQ6NzAwJmRpc3BsYXk9c3dhcFwiKTtcbmRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bkFkZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZEFkZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-user/components/add-product/add-product.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/pos-user/components/add-product/add-product.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let AddProductComponent = class AddProductComponent {
    constructor(fb, toastr) {
        this.fb = fb;
        this.toastr = toastr;
        this.formValueOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedImage = null;
    }
    ngOnInit() {
        this.formTemplate = this.fb.group({
            prodName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [null],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectImage: ['']
        });
        this.resetForm();
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.imgSrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.formTemplate.get('selectImage').patchValue(event.target.files[0]);
        }
        else {
            this.imgSrc = '/src/assets/img/image_placeholder.jpg';
            this.selectedImage = null;
        }
    }
    onSubmit(formValue) {
        this.isSubmitted = true;
        if (this.formTemplate.valid) {
            this.formValueOut.emit(formValue);
            console.log(formValue);
            this.resetForm();
            this.toastr.success('Adding Success!');
        }
        else {
            this.toastr.error('Adding Unsuccessful, please fill up everything!');
        }
    }
    get formControls() {
        return this.formTemplate.controls;
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            prodName: '',
            price: '',
            qty: '',
            imageUrl: '',
            category: '',
            selectImage: ''
        });
        this.imgSrc = '/assets/img/image_placeholder.jpg';
        this.selectedImage = null;
        this.isSubmitted = false;
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddProductComponent.prototype, "formValueOut", void 0);
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: __webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/add-product/add-product.component.html"),
        styles: [__webpack_require__(/*! ./add-product.component.scss */ "./src/app/features/pos-user/components/add-product/add-product.component.scss")]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/features/pos-user/components/home-admin/home-admin.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/features/pos-user/components/home-admin/home-admin.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\nimg {\n  width: 207px;\n  height: 205px;\n}\n.userButton {\n  font-size: 11px;\n  border-radius: 0;\n  font-family: \"Hind\", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n}\n.myButtons {\n  text-align: center;\n  margin-top: 10px;\n}\n.myButtons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\na {\n  letter-spacing: 0.2em;\n  font-family: \"Hind\", sans-serif;\n  font-weight: 700;\n}\n.jumbotron {\n  height: 650px;\n}\nimg {\n  -webkit-animation: 5s rotate180 infinite linear;\n          animation: 5s rotate180 infinite linear;\n}\n@-webkit-keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n@keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n#cp {\n  max-width: 180px;\n  width: 100%;\n  height: 30px;\n  position: relative;\n}\n#lo {\n  max-width: 180px;\n  width: 100%;\n  height: 30px;\n  position: relative;\n}\n.card {\n  min-width: 256px;\n}\n@media only screen and (max-width: 1199px) {\n  .card {\n    width: 1159px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .card {\n    width: 950px;\n  }\n\n  img {\n    width: 117px;\n    height: 115px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .card {\n    width: 730px;\n  }\n\n  img {\n    width: 117px;\n    height: 115px;\n  }\n\n  #cp {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n\n  #lo {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .card {\n    width: 540px;\n  }\n\n  img {\n    width: 117px;\n    height: 115px;\n  }\n\n  #cp {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n\n  #lo {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n\n  a {\n    font-size: 90%;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin: 0px;\n  }\n\n  li {\n    margin-left: 5px;\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9ob21lLWFkbWluL0g6XFxHbGVtaWxcXFBST0pFQ1RTXFxpZy1leHByZXNzXFxpZ2UtcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBvcy11c2VyXFxjb21wb25lbnRzXFxob21lLWFkbWluXFxob21lLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3MtdXNlci9jb21wb25lbnRzL2hvbWUtYWRtaW4vaG9tZS1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUVSO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7QURBQTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0dGO0FEQUE7RUFDRSxhQUFBO0FDR0Y7QURBQTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFQ0dGO0VEREE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0dGO0FBQ0Y7QUQzQkE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7QURBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEQUE7RUFDRSxnQkFBQTtBQ0dGO0FEQUE7RUFDRTtJQUNFLGFBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFlBQUE7RUNFRjs7RURBQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7SUFDRSxZQUFBO0VDRUY7O0VEQUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0dGOztFRERBO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDSUY7O0VERkE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNLRjtBQUNGO0FERkE7RUFDRTtJQUNFLFlBQUE7RUNJRjs7RURGQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDS0Y7O0VESEE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNNRjs7RURKQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ09GOztFREpBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDT0Y7O0VETEE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUNRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9ob21lLWFkbWluL2hvbWUtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IaW5kOjcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAyMDdweDtcclxuICBoZWlnaHQ6IDIwNXB4O1xyXG59XHJcblxyXG4udXNlckJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcbi5teUJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5teUJ1dHRvbnMgLmJ0biB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiA2cHggMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5hIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIGhlaWdodDogNjUwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYW5pbWF0aW9uOiA1cyByb3RhdGUxODAgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZTE4MCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MmRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTQ0ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMTZkZWcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4OGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuI2NwIHtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2xvIHtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtaW4td2lkdGg6IDI1NnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAxMTU5cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDk1MHB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDExN3B4O1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogNzMwcHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTE3cHg7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gIH1cclxuICAjY3Age1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAjbG8ge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA1NDBweDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMTdweDtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgfVxyXG4gICNjcCB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICNsbyB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGluZDo3MDAmZGlzcGxheT1zd2FwXCIpO1xuaW1nIHtcbiAgd2lkdGg6IDIwN3B4O1xuICBoZWlnaHQ6IDIwNXB4O1xufVxuXG4udXNlckJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5teUJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5teUJ1dHRvbnMgLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNnB4IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5hIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuXG5pbWcge1xuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlMTgwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDcyZGVnKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTQ0ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjE2ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjg4ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2NwIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbG8ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIHtcbiAgbWluLXdpZHRoOiAyNTZweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMTU5cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA5NTBweDtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDExN3B4O1xuICAgIGhlaWdodDogMTE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA3MzBweDtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDExN3B4O1xuICAgIGhlaWdodDogMTE1cHg7XG4gIH1cblxuICAjY3Age1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICNsbyB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogNTQwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMTdweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICB9XG5cbiAgI2NwIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAjbG8ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-user/components/home-admin/home-admin.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/pos-user/components/home-admin/home-admin.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeAdminComponent = class HomeAdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-admin',
        template: __webpack_require__(/*! raw-loader!./home-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/home-admin/home-admin.component.html"),
        styles: [__webpack_require__(/*! ./home-admin.component.scss */ "./src/app/features/pos-user/components/home-admin/home-admin.component.scss")]
    })
], HomeAdminComponent);



/***/ }),

/***/ "./src/app/features/pos-user/components/login/login.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/features/pos-user/components/login/login.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\n.container {\n  background-image: url(\"/assets/background/main-bg.jpg\");\n}\n.text-login {\n  color: white;\n  font-family: \"Hind\", sans-serif;\n}\n.wrapper {\n  margin-bottom: 80px;\n  margin-top: 80px;\n}\nform {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n}\n.container {\n  margin-top: 50px;\n}\nbutton {\n  font-family: \"Hind\", sans-serif;\n}\ninput {\n  font-family: \"Hind\", sans-serif;\n}\nsmall {\n  position: absolute;\n  margin-left: -142px;\n  margin-top: 37px;\n  font-size: 14px;\n  font-family: \"Hind\", sans-serif;\n}\n.imgLogo {\n  padding-top: 35px;\n  -webkit-animation: 5s rotate180 infinite linear;\n          animation: 5s rotate180 infinite linear;\n}\n@media only screen and (max-width: 960px) {\n  .imgLogo {\n    height: 200px;\n    width: 200px;\n    margin-bottom: -80px;\n    margin-right: 128px;\n    margin-left: 128px;\n  }\n}\n@-webkit-keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n@keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9sb2dpbi9IOlxcR2xlbWlsXFxQUk9KRUNUU1xcaWctZXhwcmVzc1xcaWdlLXByb2plY3Qvc3JjXFxhcHBcXGZlYXR1cmVzXFxwb3MtdXNlclxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3MtdXNlci9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDRFQUFBO0FBRVI7RUFDRSx1REFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0E7RUFDRSxnQkFBQTtBQ0VGO0FEQUE7RUFDRSwrQkFBQTtBQ0dGO0FEREE7RUFDRSwrQkFBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNJRjtBRERBO0VBQ0UsaUJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDSUY7QUREQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNJRjtBQUNGO0FEREE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjtBRDNCQTtFQUNFO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNHRjtFRERBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLFlBQUE7RUNHRjtFRERBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNHRjtFRERBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNHRjtFRERBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFlBQUE7RUNHRjtFRERBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQ6NzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZC9tYWluLWJnLmpwZ1wiKTtcclxufVxyXG5cclxuLnRleHQtbG9naW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICBwYWRkaW5nOiAxNXB4IDM1cHggNDVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNDJweDtcclxuICBtYXJnaW4tdG9wOiAzN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pbWdMb2dvIHtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAuaW1nTG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEyOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUxODAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNzJkZWcpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE0NGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjE2ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyODhkZWcpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGluZDo3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZC9tYWluLWJnLmpwZ1wiKTtcbn1cblxuLnRleHQtbG9naW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG5mb3JtIHtcbiAgbWF4LXdpZHRoOiAzODBweDtcbiAgcGFkZGluZzogMTVweCAzNXB4IDQ1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuc21hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMTQycHg7XG4gIG1hcmdpbi10b3A6IDM3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW1nTG9nbyB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBhbmltYXRpb246IDVzIHJvdGF0ZTE4MCBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmltZ0xvZ28ge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC04MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTI4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEyOHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZTE4MCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MmRlZyk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE0NGRlZyk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIxNmRlZyk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4OGRlZyk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/pos-user/components/login/login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/pos-user/components/login/login.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_authentication_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/authentication.services */ "./src/app/features/pos-user/shared/authentication.services.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LoginComponent = class LoginComponent {
    constructor(formbuilder, authService, router, toastr) {
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['']
        });
    }
    signIn() {
        this.authService.login({
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        })
            .then(res => {
            this.toastr.success('Login Success!');
            this.router.navigate(['/user/admin/home-admin']);
        }, err => {
            console.log(err);
            // alert(err);
            alert('Invalid Email or Passowrd');
            this.toastr.error(err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_authentication_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/features/pos-user/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/features/pos-user/components/product-details/product-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/pos-user/components/product-details/product-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 100px;\n}\n\n.productIamge {\n  height: 10px;\n  width: 10px;\n}\n\n#myPagination {\n  font-weight: 600;\n  text-align: center;\n}\n\nth {\n  padding-right: 20px;\n}\n\ntd {\n  color: black;\n  padding: 10px;\n  font-weight: 400;\n}\n\ni.editIcon {\n  color: blue;\n  cursor: pointer;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 20px;\n}\n\ni.trashIcon {\n  color: red;\n  cursor: pointer;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 20px;\n}\n\ni.cartIcon {\n  color: green;\n  cursor: pointer;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 20px;\n}\n\n@media only screen and (max-width: 576px) {\n  .table-dark {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvSDpcXEdsZW1pbFxcUFJPSkVDVFNcXGlnLWV4cHJlc3NcXGlnZS1wcm9qZWN0L3NyY1xcYXBwXFxmZWF0dXJlc1xccG9zLXVzZXJcXGNvbXBvbmVudHNcXHByb2R1Y3QtZGV0YWlsc1xccHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3MtdXNlci9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLGVBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0SWFtZ2Uge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuI215UGFnaW5hdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIExJU1RcclxudGh7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG50ZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMFxyXG59XHJcblxyXG4vLyBJQ09OU1xyXG5cclxuaS5lZGl0SWNvbiB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaS50cmFzaEljb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaS5jYXJ0SWNvbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGFibGUtZGFyayB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4ucHJvZHVjdElhbWdlIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuI215UGFnaW5hdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG50ZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaS5lZGl0SWNvbiB7XG4gIGNvbG9yOiBibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pLnRyYXNoSWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmkuY2FydEljb24ge1xuICBjb2xvcjogZ3JlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRhYmxlLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-user/components/product-details/product-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/pos-user/components/product-details/product-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_features_shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/shared/services/adding-products.service */ "./src/app/features/shared/services/adding-products.service.ts");




let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.selectedImage = null;
        this.searchText = '';
    }
    // DELETE FUNCTION
    onDelete($key, downloadUrl) {
        if (confirm('Are you sure to delete this record ?')) {
            this.service.deleteDataImage($key);
            this.service.deleteImage(downloadUrl);
            this.showDeletedMessage = true;
            setTimeout(() => this.showDeletedMessage = false, 3000);
        }
    }
    ngOnInit() {
        this.formTemplate = this.fb.group({
            $key: [null],
            prodName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [''],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.service.getImageDetailList().subscribe(list => {
            this.imageArray = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    // ADD TO CART FUNCTION
    addCart() {
        this.addingCart = this.imageArray;
    }
    get formControls() {
        return this.formTemplate.controls;
    }
    populateForm(populate) {
        this.formTemplate.setValue(populate);
    }
    filterCondition(image) {
        return image.prodName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    }
    // EDIT FUNCTION
    // EDIT WILL NOT WORK WITHOUT THIS
    onImageUpdate(image) {
        this.service.imageDetailList.update(image.$key, {
            prodName: image.prodName,
            category: image.category,
            price: image.price,
            qty: image.qty,
        });
    }
    onSave() {
        this.isSubmitted = true;
        if (confirm('Are you sure to save this record ?')) {
            this.onImageUpdate(this.formTemplate.value);
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false, 3000);
            this.isSubmitted = false;
            this.formTemplate.reset();
            this.formTemplate.setValue({
                $key: null,
                prodName: '',
                price: '',
                qty: '',
                category: '',
                imageUrl: ''
            });
        }
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: src_app_features_shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_3__["AddingProductsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/features/pos-user/components/product-details/product-details.component.scss")]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/features/pos-user/components/product-list/product-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/pos-user/components/product-list/product-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\na {\n  color: black;\n  margin: 0 20px 0;\n  text-align: center;\n  font-family: \"Hind\", sans-serif;\n  font-weight: 600;\n}\n.text-dark {\n  text-align: center;\n  margin-top: 15px;\n  font-size: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n  font-weight: 600;\n}\n.card {\n  width: 19%;\n  min-width: 220px;\n  /*   max-width: 304px;\n    max-width: 304px; */\n}\nimg {\n  margin-top: 15px;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.1s;\n  transition: -webkit-transform 0.1s;\n  transition: transform 0.1s;\n  transition: transform 0.1s, -webkit-transform 0.1s;\n}\nimg:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.iconImage {\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 15px;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.1s;\n  transition: -webkit-transform 0.1s;\n  transition: transform 0.1s;\n  transition: transform 0.1s, -webkit-transform 0.1s;\n  margin: 0px 15px 0px;\n}\n.iconImage:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n#like {\n  color: #4c6ef5;\n}\n#heart {\n  color: #f783ac;\n}\n#cart {\n  color: #63a14d;\n}\n#allPhone {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n.spesific-product {\n  list-style: none;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 50px;\n  width: 300px;\n}\n/* \n// @medias\n\n@media only screen and (max-width: 1200px) {\n  #specific {\n    width: 275px;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  img {\n    width: 100px;\n    height: 150px;\n    margin-top: 50px;\n  }\n  #specific {\n    width: 300px;\n  }\n  li {\n    font-size: 15px;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-weight: 600;\n  }\n  .nav-item {\n    margin: 0px;\n    padding: 0px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  #specific {\n    width: 345px;\n  }\n  li {\n    font-size: 10px;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-weight: 600;\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n  .nav-item {\n    margin: 0px;\n    padding: 0px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  #specific {\n    width: 500px;\n    list-style: none;\n  }\n  li {\n    font-size: 14px;\n  }\n  .nav-item {\n    margin: 0px;\n    padding: 0px;\n  }\n}\n */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvSDpcXEdsZW1pbFxcUFJPSkVDVFNcXGlnLWV4cHJlc3NcXGlnZS1wcm9qZWN0L3NyY1xcYXBwXFxmZWF0dXJlc1xccG9zLXVzZXJcXGNvbXBvbmVudHNcXHByb2R1Y3QtbGlzdFxccHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3MtdXNlci9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNEVBQUE7QUFDQSw0RUFBQTtBQUVSO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNGO3VCQUFBO0FDQUE7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7QUNERjtBRElBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0RGO0FETUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0Esb0JBQUE7QUNIRjtBRE1BO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0hGO0FETUE7RUFDRSxjQUFBO0FDSEY7QURNQTtFQUNFLGNBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtBQ0hGO0FETUE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy11c2VyL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQ6MzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGluZDo3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMCAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50ZXh0LWRhcmsge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLy8gSU1BR0UgUFJPRFVDVFxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAxOSU7XHJcbiAgbWluLXdpZHRoOiAyMjBweDtcclxuLyogICBtYXgtd2lkdGg6IDMwNHB4O1xyXG4gIG1heC13aWR0aDogMzA0cHg7ICovXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi8vIElDT05TXHJcblxyXG4uaWNvbkltYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xyXG4gIG1hcmdpbjogMHB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uaWNvbkltYWdlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbiNsaWtlIHtcclxuICBjb2xvcjogIzRjNmVmNTtcclxufVxyXG5cclxuI2hlYXJ0IHtcclxuICBjb2xvcjogI2Y3ODNhYztcclxufVxyXG5cclxuI2NhcnQge1xyXG4gIGNvbG9yOiAjNjNhMTRkO1xyXG59XHJcblxyXG4jYWxsUGhvbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uc3Blc2lmaWMtcHJvZHVjdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLyogXHJcbi8vIEBtZWRpYXNcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI3NwZWNpZmljIHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gICNzcGVjaWZpYyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNzcGVjaWZpYyB7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgfVxyXG4gIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICNzcGVjaWZpYyB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbn1cclxuICovXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQ6MzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQ6NzAwJmRpc3BsYXk9c3dhcFwiKTtcbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMCAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGV4dC1kYXJrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDE5JTtcbiAgbWluLXdpZHRoOiAyMjBweDtcbiAgLyogICBtYXgtd2lkdGg6IDMwNHB4O1xuICAgIG1heC13aWR0aDogMzA0cHg7ICovXG59XG5cbmltZyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXM7XG59XG5cbmltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmljb25JbWFnZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcbiAgbWFyZ2luOiAwcHggMTVweCAwcHg7XG59XG5cbi5pY29uSW1hZ2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbiNsaWtlIHtcbiAgY29sb3I6ICM0YzZlZjU7XG59XG5cbiNoZWFydCB7XG4gIGNvbG9yOiAjZjc4M2FjO1xufVxuXG4jY2FydCB7XG4gIGNvbG9yOiAjNjNhMTRkO1xufVxuXG4jYWxsUGhvbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnNwZXNpZmljLXByb2R1Y3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4vKiBcbi8vIEBtZWRpYXNcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgI3NwZWNpZmljIHtcbiAgICB3aWR0aDogMjc1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgI3NwZWNpZmljIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNzcGVjaWZpYyB7XG4gICAgd2lkdGg6IDM0NXB4O1xuICB9XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICNzcGVjaWZpYyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuICovIl19 */"

/***/ }),

/***/ "./src/app/features/pos-user/components/product-list/product-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/pos-user/components/product-list/product-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/adding-products.service */ "./src/app/features/shared/services/adding-products.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ProductListComponent = class ProductListComponent {
    constructor(service, fb, toastr) {
        this.service = service;
        this.fb = fb;
        this.toastr = toastr;
        this.searchAsus = 'asus';
        this.searchSamsung = 'samsung';
        this.searchHuawei = 'huawei';
        this.searchOppo = 'oppo';
        this.searchIphone = 'iphone';
    }
    ngOnInit() {
        const x = this.service.getImageDetailList();
        x.subscribe((product) => {
            this.productList = [];
            product.forEach((element) => {
                const y = element.payload.toJSON();
                y['$key'] = element.key;
                this.productList.push(y);
            });
        }, (err) => {
            this.toastrService.error('Error while fetching Products', err);
        });
        this.formTemplate = this.fb.group({
            $key: [null],
            prodName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: [''],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.service.getImageDetailList().subscribe(list => {
            this.imageArray = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    addToCart(product) {
        this.service.addToCart(product);
        this.toastr.success('Product Added to your Cart!');
        console.log(product);
    }
    // Search per product
    filterAsus(product) {
        return product.category.toLowerCase().indexOf(this.searchAsus.toLowerCase()) !== -1;
    }
    filterSamsung(product) {
        return product.category.toLowerCase().indexOf(this.searchSamsung.toLowerCase()) !== -1;
    }
    filterHuawei(product) {
        return product.category.toLowerCase().indexOf(this.searchHuawei.toLowerCase()) !== -1;
    }
    filterOppo(product) {
        return product.category.toLowerCase().indexOf(this.searchOppo.toLowerCase()) !== -1;
    }
    filterIphone(product) {
        return product.category.toLowerCase().indexOf(this.searchIphone.toLowerCase()) !== -1;
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_2__["AddingProductsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/features/pos-user/components/product-list/product-list.component.scss")]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/features/pos-user/components/register/register.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/pos-user/components/register/register.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: \"News Cycle\", sans-serif;\n  font-weight: bold;\n  color: #002250;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29tcG9uZW50cy9yZWdpc3Rlci9IOlxcR2xlbWlsXFxQUk9KRUNUU1xcaWctZXhwcmVzc1xcaWdlLXByb2plY3Qvc3JjXFxhcHBcXGZlYXR1cmVzXFxwb3MtdXNlclxcY29tcG9uZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3MtdXNlci9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy11c2VyL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTmV3cyBDeWNsZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAyMjUwO1xyXG59XHJcbiIsImgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTmV3cyBDeWNsZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDIyNTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/pos-user/components/register/register.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/pos-user/components/register/register.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_register_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/register.model */ "./src/app/features/pos-user/shared/register.model.ts");




let RegisterComponent = class RegisterComponent {
    constructor(fb) {
        this.fb = fb;
        this.regFormValueOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = new _shared_register_model__WEBPACK_IMPORTED_MODULE_3__["Register"]();
    }
    ngOnInit() {
        this.registrationForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{3,}$')]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onRegistrationSubmit(regFormValue) {
        if (this.registrationForm.valid) {
            this.regFormValueOut.emit(regFormValue);
            console.log('reg', this.registrationForm.value);
            this.registrationForm.reset();
            this.registrationForm.markAsPristine();
            this.registrationForm.markAsUntouched();
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RegisterComponent.prototype, "regFormValueOut", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/features/pos-user/components/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/features/pos-user/container/main-register/main-register.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/features/pos-user/container/main-register/main-register.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy11c2VyL2NvbnRhaW5lci9tYWluLXJlZ2lzdGVyL21haW4tcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/pos-user/container/main-register/main-register.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/pos-user/container/main-register/main-register.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MainRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRegisterComponent", function() { return MainRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_authentication_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/authentication.services */ "./src/app/features/pos-user/shared/authentication.services.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_add_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/add-user.service */ "./src/app/features/pos-user/shared/add-user.service.ts");





let MainRegisterComponent = class MainRegisterComponent {
    constructor(authService, toastr, adduser) {
        this.authService = authService;
        this.toastr = toastr;
        this.adduser = adduser;
    }
    ngOnInit() {
    }
    regFormValueIn(regFormValue) {
        console.log('user', regFormValue);
        this.authService.register({
            email: regFormValue.email,
            password: regFormValue.password
        })
            .then((result) => {
            console.log('second', regFormValue);
            this.adduser.insertUserDetails(regFormValue);
            this.toastr.success('You have been successfully registered!');
            console.log(result.user);
        }).catch((error) => {
            this.toastr.success(error.message);
        });
    }
};
MainRegisterComponent.ctorParameters = () => [
    { type: _shared_authentication_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _shared_add_user_service__WEBPACK_IMPORTED_MODULE_4__["AddUserService"] }
];
MainRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-register',
        template: __webpack_require__(/*! raw-loader!./main-register.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/container/main-register/main-register.component.html"),
        styles: [__webpack_require__(/*! ./main-register.component.scss */ "./src/app/features/pos-user/container/main-register/main-register.component.scss")]
    })
], MainRegisterComponent);



/***/ }),

/***/ "./src/app/features/pos-user/container/user/user.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/pos-user/container/user/user.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Hind:700&display=swap\");\nimg {\n  width: 207px;\n  height: 205px;\n}\n.userButton {\n  font-size: 11px;\n  border-radius: 0;\n  font-family: \"Hind\", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n}\n.myButtons {\n  text-align: center;\n  margin-top: 10px;\n}\n.myButtons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\na {\n  letter-spacing: 0.2em;\n  font-family: \"Hind\", sans-serif;\n  font-weight: 700;\n}\n.jumbotron {\n  height: 650px;\n}\nimg {\n  -webkit-animation: 5s rotate180 infinite linear;\n          animation: 5s rotate180 infinite linear;\n}\n@-webkit-keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n@keyframes rotate180 {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: rotateY(72deg);\n            transform: rotateY(72deg);\n    opacity: 0.8;\n  }\n  40% {\n    -webkit-transform: rotateY(144deg);\n            transform: rotateY(144deg);\n    opacity: 0.4;\n  }\n  60% {\n    -webkit-transform: rotateY(216deg);\n            transform: rotateY(216deg);\n    opacity: 0.4;\n  }\n  80% {\n    -webkit-transform: rotateY(288deg);\n            transform: rotateY(288deg);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    opacity: 1;\n  }\n}\n#cp {\n  max-width: 180px;\n  width: 100%;\n  height: 30px;\n  position: relative;\n}\n#lo {\n  max-width: 180px;\n  width: 100%;\n  height: 30px;\n  position: relative;\n}\n.card {\n  min-width: 256px;\n  width: 100%;\n}\n@media only screen and (max-width: 1199px) {\n  .card {\n    width: 690%;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .card {\n    width: 715%;\n  }\n\n  img {\n    width: 117px;\n    height: 115px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .card {\n    width: 760%;\n  }\n\n  img {\n    width: 117px;\n    height: 115px;\n  }\n\n  #cp {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n\n  #lo {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .card {\n    width: 100%;\n  }\n\n  img {\n    width: 117px;\n    height: 115px;\n  }\n\n  #cp {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n\n  #lo {\n    max-width: 180px;\n    width: 100%;\n    height: 30px;\n    position: relative;\n  }\n\n  a {\n    font-size: 90%;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin: 0px;\n  }\n\n  li {\n    margin-left: 5px;\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29udGFpbmVyL3VzZXIvSDpcXEdsZW1pbFxcUFJPSkVDVFNcXGlnLWV4cHJlc3NcXGlnZS1wcm9qZWN0L3NyY1xcYXBwXFxmZWF0dXJlc1xccG9zLXVzZXJcXGNvbnRhaW5lclxcdXNlclxcdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcG9zLXVzZXIvY29udGFpbmVyL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUVSO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7QURBQTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0dGO0FEQUE7RUFDRSxhQUFBO0FDR0Y7QURBQTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFQ0dGO0VEREE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsWUFBQTtFQ0dGO0VEREE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0dGO0FBQ0Y7QUQzQkE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxZQUFBO0VDR0Y7RUREQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7QURBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSxXQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7SUFDRSxXQUFBO0VDRUY7O0VEQUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsV0FBQTtFQ0VGOztFREFBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNHRjs7RUREQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ0lGOztFREZBO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDS0Y7QUFDRjtBREZBO0VBQ0U7SUFDRSxXQUFBO0VDSUY7O0VERkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0tGOztFREhBO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDTUY7O0VESkE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNPRjs7RURKQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ09GOztFRExBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDUUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bvcy11c2VyL2NvbnRhaW5lci91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IaW5kOjcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAyMDdweDtcclxuICBoZWlnaHQ6IDIwNXB4O1xyXG59XHJcblxyXG4udXNlckJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcbi5teUJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5teUJ1dHRvbnMgLmJ0biB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiA2cHggMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5hIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIGhlaWdodDogNjUwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYW5pbWF0aW9uOiA1cyByb3RhdGUxODAgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZTE4MCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MmRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTQ0ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMTZkZWcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4OGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuI2NwIHtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2xvIHtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtaW4td2lkdGg6IDI1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA2OTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA3MTUlO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDExN3B4O1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogNzYwJTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMTdweDtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgfVxyXG4gICNjcCB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICNsbyB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTE3cHg7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gIH1cclxuICAjY3Age1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAjbG8ge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQ6NzAwJmRpc3BsYXk9c3dhcFwiKTtcbmltZyB7XG4gIHdpZHRoOiAyMDdweDtcbiAgaGVpZ2h0OiAyMDVweDtcbn1cblxuLnVzZXJCdXR0b24ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4ubXlCdXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXlCdXR0b25zIC5idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuYSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uanVtYm90cm9uIHtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cblxuaW1nIHtcbiAgYW5pbWF0aW9uOiA1cyByb3RhdGUxODAgaW5maW5pdGUgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZTE4MCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MmRlZyk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE0NGRlZyk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIxNmRlZyk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4OGRlZyk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiNjcCB7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2xvIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZCB7XG4gIG1pbi13aWR0aDogMjU2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDY5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA3MTUlO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTE3cHg7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDc2MCU7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMTdweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICB9XG5cbiAgI2NwIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAjbG8ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMTdweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICB9XG5cbiAgI2NwIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAjbG8ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/pos-user/container/user/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/pos-user/container/user/user.component.ts ***!
  \********************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_features_shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/features/shared/services/adding-products.service */ "./src/app/features/shared/services/adding-products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_authentication_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/authentication.services */ "./src/app/features/pos-user/shared/authentication.services.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let UserComponent = class UserComponent {
    constructor(storage, service, router, authService, toastr) {
        this.storage = storage;
        this.service = service;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.selectedImage = null;
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.logout();
        alert('are you sure you want to logout??');
        this.router.navigateByUrl('/user/login');
        this.toastr.warning('Logout Success!');
    }
    navigateHome() {
        this.router.navigateByUrl('user/admin/home-admin');
    }
    navigateInventory() {
        this.router.navigateByUrl('user/admin/product-details');
    }
    navigateMyProducts() {
        this.router.navigateByUrl('user/admin/product-list');
    }
    navigateCreateUser() {
        this.router.navigateByUrl('user/admin/register-employee');
    }
    formValueIn(formValue) {
        console.log(formValue);
        const filePath = `${formValue.category}/${formValue.selectImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, formValue.selectImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                formValue.imageUrl = url;
                console.log(formValue);
                this.service.insertImageDetails(formValue);
            });
        })).subscribe();
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: src_app_features_shared_services_adding_products_service__WEBPACK_IMPORTED_MODULE_4__["AddingProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_authentication_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/pos-user/container/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/features/pos-user/container/user/user.component.scss")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/features/pos-user/pos-user-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/pos-user/pos-user-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PosUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosUserRoutingModule", function() { return PosUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _container_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/user/user.component */ "./src/app/features/pos-user/container/user/user.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/features/pos-user/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/features/pos-user/components/product-details/product-details.component.ts");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/features/pos-user/components/add-product/add-product.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/features/pos-user/components/login/login.component.ts");
/* harmony import */ var _shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/authenticationGuard.service */ "./src/app/features/pos-user/shared/authenticationGuard.service.ts");
/* harmony import */ var _components_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-admin/home-admin.component */ "./src/app/features/pos-user/components/home-admin/home-admin.component.ts");
/* harmony import */ var _container_main_register_main_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container/main-register/main-register.component */ "./src/app/features/pos-user/container/main-register/main-register.component.ts");











const routes = [
    {
        path: 'admin', component: _container_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], canActivate: [_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]],
        children: [
            /* { path: 'admin', component: UserComponent }, */
            { path: 'product-list', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], canActivate: [_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]] },
            { path: 'product-details', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"], canActivate: [_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]] },
            { path: 'add-product', component: _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"], canActivate: [_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]] },
            { path: 'register-employee', component: _container_main_register_main_register_component__WEBPACK_IMPORTED_MODULE_10__["MainRegisterComponent"], canActivate: [_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]] },
            { path: 'home-admin', component: _components_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__["HomeAdminComponent"], canActivate: [_shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]] },
        ]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
];
let PosUserRoutingModule = class PosUserRoutingModule {
};
PosUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PosUserRoutingModule);



/***/ }),

/***/ "./src/app/features/pos-user/pos-user.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/pos-user/pos-user.module.ts ***!
  \******************************************************/
/*! exports provided: PosUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosUserModule", function() { return PosUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pos_user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pos-user-routing.module */ "./src/app/features/pos-user/pos-user-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/features/pos-user/components/product-details/product-details.component.ts");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/features/pos-user/components/add-product/add-product.component.ts");
/* harmony import */ var _container_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/user/user.component */ "./src/app/features/pos-user/container/user/user.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/features/pos-user/components/product-list/product-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/features/pos-user/components/login/login.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/features/pos-user/components/register/register.component.ts");
/* harmony import */ var _components_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-admin/home-admin.component */ "./src/app/features/pos-user/components/home-admin/home-admin.component.ts");
/* harmony import */ var _container_main_register_main_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./container/main-register/main-register.component */ "./src/app/features/pos-user/container/main-register/main-register.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");

















let PosUserModule = class PosUserModule {
};
PosUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
            _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
            _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"],
            _container_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            _components_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_14__["HomeAdminComponent"],
            _container_main_register_main_register_component__WEBPACK_IMPORTED_MODULE_15__["MainRegisterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pos_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["PosUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]
        ],
        exports: [
            _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"]
        ]
    })
], PosUserModule);



/***/ }),

/***/ "./src/app/features/pos-user/shared/add-user.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/pos-user/shared/add-user.service.ts ***!
  \**************************************************************/
/*! exports provided: AddUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserService", function() { return AddUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");




let AddUserService = class AddUserService {
    constructor(firebase, fireStorage) {
        this.firebase = firebase;
        this.fireStorage = fireStorage;
        this.userDetailList = firebase.list('usersList');
    }
    insertUserDetails(userList) {
        this.userDetailList.push(userList);
    }
};
AddUserService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
AddUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddUserService);



/***/ }),

/***/ "./src/app/features/pos-user/shared/authentication.services.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/pos-user/shared/authentication.services.ts ***!
  \*********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AuthenticationService = class AuthenticationService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
        this.reg = afAuth.authState;
    }
    login(user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    register(reg) {
        return this.afAuth.auth.createUserWithEmailAndPassword(reg.email, reg.password);
    }
    logout() {
        return this.afAuth.auth.signOut();
    }
    authUser() {
        return this.user;
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/features/pos-user/shared/authenticationGuard.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/pos-user/shared/authenticationGuard.service.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






let AuthenticationGuard = class AuthenticationGuard {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState;
    }
    canActivate(route, state) {
        return this.user.map((auth) => {
            if (!auth) {
                this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        }).take(1);
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/features/pos-user/shared/register.model.ts":
/*!************************************************************!*\
  !*** ./src/app/features/pos-user/shared/register.model.ts ***!
  \************************************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
class Register {
}


/***/ }),

/***/ "./src/app/features/shared/models/myProducts.model.ts":
/*!************************************************************!*\
  !*** ./src/app/features/shared/models/myProducts.model.ts ***!
  \************************************************************/
/*! exports provided: MyProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProducts", function() { return MyProducts; });
class MyProducts {
}


/***/ }),

/***/ "./src/app/features/shared/services/adding-products.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/shared/services/adding-products.service.ts ***!
  \*********************************************************************/
/*! exports provided: AddingProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingProductsService", function() { return AddingProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let AddingProductsService = class AddingProductsService {
    constructor(firebase, fireStorage, toastrService) {
        this.firebase = firebase;
        this.fireStorage = fireStorage;
        this.toastrService = toastrService;
        this.navbarCartCount = 0;
        this.calculateLocalCartProdCounts();
        this.imageDetailList = this.firebase.list('imageDetails');
    }
    /*
      ----------  Cart Product Function  ----------
     */
    // Adding new Product to cart db if logged in else localStorage
    addToCart(data) {
        let a;
        a = JSON.parse(localStorage.getItem('avct_item')) || [];
        a.push(data);
        localStorage.setItem('avct_item', JSON.stringify(a));
        this.calculateLocalCartProdCounts();
        /* 	this.toastrService.wait('Adding Product to Cart', 'Product Adding to the cart');
          setTimeout(() => {
    
          }, 100); */
    }
    // Removing cart from local
    removeLocalCartProduct(product) {
        const products = JSON.parse(localStorage.getItem('avct_item'));
        for (let i = 0; i < products.length; i++) {
            if (products[i].prodId === product.prodId) {
                products.splice(i, 1);
                break;
            }
        }
        // ReAdding the products after remove
        localStorage.setItem('avct_item', JSON.stringify(products));
        this.calculateLocalCartProdCounts();
    }
    // Fetching Locat CartsProducts
    getLocalCartProducts() {
        const products = JSON.parse(localStorage.getItem('avct_item')) || [];
        return products;
    }
    // returning LocalCarts Product Count
    calculateLocalCartProdCounts() {
        this.navbarCartCount = this.getLocalCartProducts().length;
    }
    getProductById(key) {
        this.product = this.firebase.object('imageDetails/' + key);
        return this.product;
    }
    getImageDetailList() {
        this.imageDetailList = this.firebase.list('imageDetails');
        return this.imageDetailList.snapshotChanges();
    }
    insertImageDetails(imageDetails) {
        this.imageDetailList.push(imageDetails);
    }
    deleteDataImage($key) {
        this.imageDetailList.remove($key);
    }
    deleteImage(downloadUrl) {
        return this.fireStorage.storage.refFromURL(downloadUrl).delete();
    }
};
AddingProductsService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AddingProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddingProductsService);



/***/ }),

/***/ "./src/app/features/shared/services/customer.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/shared/services/customer.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");




let CustomerService = class CustomerService {
    constructor(firebase, fireStorage) {
        this.firebase = firebase;
        this.fireStorage = fireStorage;
        this.tsrDetailList = firebase.list('tsrList');
        this.csrDetailList = firebase.list('csrList');
    }
    getTsrDetailList() {
        this.tsrDetailList = this.firebase.list('tsrList');
        return this.tsrDetailList.snapshotChanges();
    }
    getCsrDetailList() {
        this.tsrDetailList = this.firebase.list('csrList');
        return this.tsrDetailList.snapshotChanges();
    }
    insertTsrDetails(tsrList) {
        this.tsrDetailList.push(tsrList);
    }
    insertCsrDetails(csrList) {
        this.csrDetailList.push(csrList);
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyD0YEzlHOwakKodw_uah5o7Bz-aQ7ph55g',
        authDomain: 'ige-angularproject.firebaseapp.com',
        databaseURL: 'https://ige-angularproject.firebaseio.com',
        projectId: 'ige-angularproject',
        storageBucket: 'ige-angularproject.appspot.com',
        messagingSenderId: '733908571919',
        appId: '1:733908571919:web:0a083c0f15653328'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Glemil\PROJECTS\ig-express\ige-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map