(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundColor{\r\n    background: #2f5496;\r\n}\r\n\r\n.tabColor{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper home-body backgroundColor\">\r\n  <section class=\"terms-wrapper\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"section-heading tabColor\">\r\n          <h2>About</h2>\r\n        </div>\r\n        <div class=\"section-content\">\r\n          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n            t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n            sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n          </p>\r\n\r\n          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n              feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n              neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n              t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n              amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n              sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n          </p>\r\n          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n            t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n            sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\t\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buy-wrapper table tbody tr td input {\r\n    outline: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    background: none;\r\n}\r\n\r\n.redeem-wrapper table tbody tr td input {\r\n    outline: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    background: none;\r\n}\r\n\r\n.redeem-section .button-wrapper {\r\n    padding: 10px;\r\n    text-align: right;\r\n    background: #fff;\r\n}\r\n\r\n.buy-section .button-wrapper {\r\n    padding: 10px;\r\n    text-align: right;\r\n    background: #fff;\r\n}\r\n\r\ntr.noBorder td {\r\n    border: 0;\r\n  }\r\n\r\n.mintAndBurn {\r\n    background-color: aqua\r\n}\r\n\r\n.toBurn{\r\n    background-color: red\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topheader\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"button-inner\">\r\n      <ul>\r\n        <li><a (click)=\"tempMint()\">Admin Ui</a></li>\r\n        <li><a href=\"#\">Home</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"body-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"body-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-sm-2\">\r\n          <aside class=\"left-part\">\r\n            <div class=\"logo-wrapper\">\r\n              <a href=\"home.html\">\r\n                <img src=\"assets/images/logo.png\" alt=\"Ellypin\" class=\"img-responsive\">\r\n                <div class=\"logo-inner\">\r\n                  <h4>Ellypin</h4>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"left-menu-wrapper\">\r\n              <nav class=\"navbar\">\r\n                <ul class=\"nav navbar-nav keyfill\">\r\n                  <li>\r\n                    <label>GPG Public Key</label>\r\n                    <input type=\"text\" name=\"\" class=\"form-control\">\r\n                  </li>\r\n                  <li>\r\n                    <label>GPG Private  Key</label>\r\n                    <input type=\"text\" name=\"\" class=\"form-control\">\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </aside>\r\n        </div>\r\n        <div class=\"col-md-10 col-sm-10\">\r\n          <div class=\"right-part rightOuter\">\r\n            <div class=\"contract-detail-wrapper\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-condensed text-center\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>POD</th>\r\n                      <th>Currency POD</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Name</td>\r\n                      <td>{{contractDetails.contractName}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Symbol</td>\r\n                      <td>{{contractDetails.symbol}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Asset tokenized / Rate</td>\r\n                      <td>{{custData.asset}} / {{custData.rate}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Maturity</td>\r\n                      <td>{{custData.maturity}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Custodian</td>\r\n                      <td>{{custData.custodian}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Location</td>\r\n                      <td>{{custData.location}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Decimals</td>\r\n                      <td>{{contractDetails.decimal}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Mint and assigned when assets deposited</td>\r\n                      <td>{{custData.mint}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Contract address</td>\r\n                      <td>{{contractDetails.contractAddress}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Contract Owner</td>\r\n                      <td>{{custData.owner}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Smart Contract Type</td>\r\n                      <td>{{custData.contractType}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"bottom-link-wrapper\">\r\n              <a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#approve-kyc\">Fee Schedule</a>\r\n              <a href=\"javascript:void(0);\">Terms and Condition</a>\r\n              <a href=\"https://ropsten.etherscan.io/address/0x44128f17132ae9aac62ce8a47c0cf5465e225c97\" target=\"_blank\">MyEtherScan</a>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <div class=\"col-sm-4 fees-wrapper\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered text-center\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"3\">Fees</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                          <td>Transfer</td>\r\n                          <td><span class=\"col-sm-3\"><input type=\"text\" [(ngModel)]=\"transferFees\" class=\"form-control\"></span><span class=\"col-sm-8\"><button class=\"btn btn-primary btn-sm\" (click)=\"setTransferFees()\">Transfer Fees</button></span></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Redeem</td>\r\n                          <td><span class=\"col-sm-3\"><input type=\"text\" [(ngModel)]=\"fees\" class=\"form-control\"></span><span class=\"col-sm-8\"><button class=\"btn btn-primary btn-sm\" (click)=\"setRedeemFees()\">Redeem Fees</button></span></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Buy</td>\r\n                          <td><span class=\"col-sm-3\"><input type=\"text\" [(ngModel)]=\"buyFees\" class=\"form-control\"></span><span class=\"col-sm-8\"><button class=\"btn btn-primary btn-sm\" (click)=\"setBuyFees()\">Buy Fees</button></span></td>\r\n                        </tr>\r\n                      </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4 asset-wrapper\">\r\n                <h4>Asset Account Balance</h4>  \r\n                <div class=\"asset-inner\">\r\n                  <span style=\"text-align:center\">{{totalSupply}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4 podbal-wrapper\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered text-center\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"2\">Pod Balance</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Total</td>\r\n                        <td>{{totalSupply}}</td>\r\n                      </tr>\r\n                      <!-- <tr>\r\n                        <td>Burned</td>\r\n                        <td>{{totalBurn}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Redeemed</td>\r\n                        <td>{{totalRedeem}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Net</td>\r\n                        <td>{{netToken}}</td>\r\n                      </tr> -->\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row redeem-section\">\r\n        <div class=\"col-sm-2 col-xs-12\">\r\n          <div class=\"opheading\">\r\n            <h2>REDEEM</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-xs-12\">\r\n          <h3>Raw Message from MongoDB</h3>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped table-bordered text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                    <th>Name & Address</th>\r\n                    <th>Email</th>\r\n                    <th>Token to Redeem</th>\r\n                    <th>Fees</th>\r\n                    <th>Public Key</th>\r\n                    <th>Bank</th>\r\n                    <th>Account Number</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr style=\"cursor: pointer\" (click)=\"redeemClicked((itemsPerPage * (redeemCurrentPage-1)) + i)\" data-toggle=\"modal\" data-target=\"#redeem-kyc\" *ngFor=\"let obj of redeemMessageDisplay | paginate: {id: 'redeem', itemsPerPage: itemsPerPage, currentPage: redeemCurrentPage };let i=index \">\r\n                  <td>{{obj.counter}}</td>\r\n                  <td>{{obj.redeemBeneficiary}}</td>\r\n                  <td>{{obj.redeemEmail}}</td>\r\n                  <td>{{obj.redeemToken}}</td>\r\n                  <td>{{obj.redeemFee}}</td>\r\n                  <td>{{obj.publicKey}}</td>\r\n                  <td>{{obj.redeemBank}}</td>\r\n                  <td>{{obj.redeemAccountNumber}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div style=\"background-color: #f9f9f9\">\r\n            <pagination-controls id=\"redeem\" (pageChange)=\"redeemCurrentPage = $event\" responsive=\"true\"></pagination-controls>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-sm-6 col-xs-12\" *ngIf=\"redeemObjectSet.redeemBank\">\r\n          <h3>Admin UI</h3>\r\n          <div class=\"table-responsive redeem-wrapper\">\r\n            <table class=\"table table-striped table-bordered text-center\" id=\"podtable\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                  <th>Pods Received</th>\r\n                  <th>Custodian Paid?</th>\r\n                  <th>KYC</th>\r\n                  <th>burn</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                    <td>1.</td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"redeemObjectSet.redeemToken\" [readonly]=\"redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" readonly [(ngModel)]=\"redeemObjectSet.BURN_TOKEN_REQUEST.redeemAmount\" class=\"form-control\"></td>\r\n                    <td>\r\n                      <span *ngIf=\"redeemObjectSet.KYC == 'Approve'\">Approved</span>\r\n                      <span *ngIf=\"redeemObjectSet.KYC != 'Approve'\">\r\n                        <select [(ngModel)]=\"redeemObjectSet.KYC\">\r\n                          <option value=\"\" disabled>Set KYC</option>\r\n                          <option value=\"Approve\">Approve</option>\r\n                          <option value=\"Not Approved\">Do Not Approve</option>\r\n                        </select>\r\n                      </span>\r\n                    </td>\r\n                    <td><button (click)=\"burnTokens()\" class=\"btn btn-primary\" [disabled]=\"!redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet || redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE\">Burn Tokens</button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n\r\n          <div class=\"button-wrapper\" [hidden]=\"redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet\">\r\n            <button class=\"btn btn-primary\" (click)=\"updateRedeemObject()\">Update</button>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px',fullScreenBackdrop:true, animationType:'circleSwish' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n\r\n      <div class=\"row buy-section\">\r\n        <div class=\"col-sm-2 col-xs-12\">\r\n          <div class=\"opheading\">\r\n            <h2>BUY</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-xs-12\">\r\n          <h3>Raw Message from MongoDB</h3>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped table-bordered text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                  <th>Name</th>\r\n                  <th>Email</th>\r\n                  <th>Token</th>\r\n                  <th>Fees</th>\r\n                  <th>Public Key</th>\r\n                  <th>Bank</th>\r\n                  <th>Address</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr  style=\"cursor: pointer\" (click)=\"buyClicked((itemsPerPage * (buyCurrentPage-1)) + i)\" data-toggle=\"modal\" data-target=\"#buy-kyc\" *ngFor=\"let obj of buyMessageDisplay | paginate: {id: 'buy', itemsPerPage: itemsPerPage, currentPage: buyCurrentPage };let i=index\">\r\n                  <td>{{obj.counter}}</td>\r\n                  <td>{{obj.buyFirstName+' '+obj.buyLastName}}</td>\r\n                  <td>{{obj.buyEmail}}</td>\r\n                  <td>{{obj.buyToken}}</td>\r\n                  <td>{{obj.buyFee}}</td>\r\n                  <td>{{obj.publicKey}}</td>\r\n                  <td>{{obj.buyBank}}</td>\r\n                  <td>{{obj.buyAddress}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div style=\"background-color: #f9f9f9\">\r\n              <pagination-controls id=\"buy\" (pageChange)=\"buyCurrentPage = $event\"  responsive=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"col-sm-6 col-xs-12\" *ngIf=\"buyObjectSet.buyFirstName\">href=\"javascript:void(0);\"\r\n          <h3>Admin UI</h3>\r\n          <div class=\"table-responsive buy-wrapper\">\r\n            <table class=\"table table-striped table-bordered text-center\" id=\"podtable\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                  <th>Customer Public Key</th>\r\n                  <th>Amount Received by Custodian</th>\r\n                  <th>KYC</th>\r\n                  <th>Mint And Assign</th>\r\n                </tr>\r\n              </thead> \r\n              <tbody>\r\n                <tr>\r\n                    <td>1.</td>\r\n                    <td>{{buyObjectSet.publicKey}}</td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"buyObjectSet.SEND_TOKEN_REQUEST.receivedAmount\" readonly class=\"form-control\"></td>\r\n                    <td>\r\n                        <span *ngIf=\"buyObjectSet.KYC == 'Approve'\">Approved</span>\r\n                        <span *ngIf=\"buyObjectSet.KYC != 'Approve'\">\r\n                          <select [(ngModel)]=\"buyObjectSet.KYC\">\r\n                            <option disabled value=\"\">Set KYC</option>\r\n                            <option value=\"Approve\">Approve</option>\r\n                            <option value=\"Not Approved\">Do Not Approve</option>\r\n                          </select>\r\n                        </span>\r\n                    </td>                    \r\n                    <td><button (click)=\"mintToken()\" class=\"btn btn-primary\" [disabled]=\"!buyObjectSet.SEND_TOKEN_REQUEST.custodianSet || buyObjectSet.SEND_TOKEN_ACKNOWLEDGE\">Click to  Mint</button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>data-toggle=\"modal\" data-target=\"#approve-kyc\"\r\n          <div class=\"button-wrapper\" [hidden]=\"buyObjectSet.SEND_TOKEN_REQUEST.custodianSet\">\r\n            <button class=\"btn btn-primary\"    (click)=\"updateBuyMessage()\">Update</button>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"login-pop\" role=\"dialog\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\r\n        <form action=\"\" [formGroup]=\"loginForm\">\r\n          <h3>Login</h3>\r\n          <div *ngIf=\"error\">\r\n            <div  class=\"alert alert-danger\">\r\n              {{error}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" name=\"usr-name\" [formControl]=\"email\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" name=\"usr-pass\" [formControl]=\"password\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"loginForm.invalid\" (click)=\"loginSubmit()\" >Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"buy-kyc\" role=\"dialog\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeModal()\">&times;</button>\r\n        <form action=\"\" class=\"form-inline\" [hidden]=\"buyObjectSet?.SEND_TOKEN_REQUEST?.custodianSet\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{buyObjectSet.serialNo}}</span></h3>\r\n          <div *ngIf=\"error\">\r\n            <div  class=\"alert alert-danger\">\r\n              {{error}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>KYC &nbsp;&nbsp;</label>\r\n\r\n                <span *ngIf=\"buyObjectSet?.KYC == 'Approve'\">Approved</span>\r\n                \r\n                <span *ngIf=\"buyObjectSet?.KYC != 'Approve'\">\r\n                  <select [(ngModel)]=\"kycBuyValue\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                    <option disabled value=\"\">Set KYC</option>\r\n                    <option value=\"Approve\">Approve</option>\r\n                    <option value=\"Not Approved\">Do Not Approve</option>\r\n                  </select>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\" *ngIf=\"!(buyObjectSet?.KYC == 'Approve')\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\"  (click)=\"updateBuyMessage()\" >Update</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n        <form action=\"\" class=\"form-inline\" [hidden]=\"!buyObjectSet?.SEND_TOKEN_REQUEST?.custodianSet || buyObjectSet?.SEND_TOKEN_ACKNOWLEDGE\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{buyObjectSet.serialNo}}</span></h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" [hidden]=\"buyObjectSet?.SEND_TOKEN_REQUEST?.custodian\" (click)=\"mintToken()\" >Mint Token</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n        <form action=\"\" class=\"form-inline\" [hidden]=\"(!buyObjectSet?.SEND_TOKEN_ACKNOWLEDGE)\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{buyObjectSet.serialNo}}</span></h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <p class=\"text-center\">Token has been transferred</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"redeem-kyc\" role=\"dialog\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (close)=\"closeModal()\">&times;</button>\r\n        <form action=\"\" class=\"form-inline\" [hidden]=\"redeemObjectSet?.BURN_TOKEN_REQUEST?.custodianSet\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{redeemObjectSet.serialNo}}</span></h3>\r\n          <div *ngIf=\"error\">\r\n            <div  class=\"alert alert-danger\">\r\n              {{error}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>KYC &nbsp;&nbsp;</label>\r\n\r\n                <span *ngIf=\"redeemObjectSet.KYC == 'Approve'\">Approved</span>\r\n                <span *ngIf=\"redeemObjectSet.KYC != 'Approve'\">\r\n                  <select [(ngModel)]=\"kycRedeemValue\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                    <option value=\"\" disabled>Set KYC</option>\r\n                    <option value=\"Approve\">Approve</option>\r\n                    <option value=\"Not Approved\">Do Not Approve</option>\r\n                  </select>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\" *ngIf=\"!(redeemObjectSet?.KYC == 'Approve')\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" (click)=\"updateRedeemObject()\" >Update</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n        <form action=\"\" class=\"form-inline\" [hidden]=\"!redeemObjectSet?.BURN_TOKEN_REQUEST?.custodianSet || redeemObjectSet?.BURN_TOKEN_ACKNOWLEDGE\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{redeemObjectSet.serialNo}}</span></h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" (click)=\"burnTokens()\" >Burn Token</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n        <form action=\"\" class=\"form-inline\" [hidden]=\"(!redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE)\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{redeemObjectSet.serialNo}}</span></h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <p class=\"text-center\">Token has been burned</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contract.service */ "./src/services/contract.service.ts");
/* harmony import */ var _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedData/message.interface */ "./src/app/sharedData/message.interface.ts");
/* harmony import */ var _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedData/adminPublicKey */ "./src/app/sharedData/adminPublicKey.ts");
/* harmony import */ var _sharedData_adminPrivateKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedData/adminPrivateKey */ "./src/app/sharedData/adminPrivateKey.ts");
/* harmony import */ var _sharedData_custodianPrivateKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedData/custodianPrivateKey */ "./src/app/sharedData/custodianPrivateKey.ts");
/* harmony import */ var _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharedData/custodianPublic */ "./src/app/sharedData/custodianPublic.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! openpgp */ "./node_modules/openpgp/dist/openpgp.js");
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(openpgp__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var AdminComponent = /** @class */ (function () {
    function AdminComponent(fb, dataService, contractService) {
        this.fb = fb;
        this.dataService = dataService;
        this.contractService = contractService;
        this.buyMessageArray = [];
        this.buyMessageDisplay = [];
        this.redeemMessageArray = [];
        this.redeemMessageDisplay = [];
        this.custData = {};
        this.contractDetails = {};
        this.buyObjectSet = {};
        this.redeemObjectSet = {};
        this.redeemCurrentPage = 1;
        this.buyCurrentPage = 1;
        this.loading = false;
        this.kycRedeemValue = "";
        this.kycBuyValue = "";
        // public currentRedeemPage:any=0;
        // public currentAdminPage:any=0;
        this.itemsPerPage = 5;
        this.loginForm = fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#login-pop').modal('show');
        this.intervalId = setInterval(function () {
            _this.getAccounts();
            //console.log('Printing every 5 seconds');
        }, 5000);
        this.getCustomerData();
        // 
    };
    AdminComponent.prototype.loginSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.loginForm.valid) {
                    payload = {
                        'loginId': this.loginForm.value.email,
                        'loginPin': this.loginForm.value.password,
                        'role': 'ADMIN'
                    };
                    this.error = null;
                    this.dataService.login(payload).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!data.$undefined) return [3 /*break*/, 2];
                                    $('#login-pop').modal('hide');
                                    this.getContractData();
                                    return [4 /*yield*/, this.getMessage()];
                                case 1:
                                    _a.sent();
                                    this.getAllFees();
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.error = 'Unauthorized login request';
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }, function (error) {
                        //console.log(error);
                    }, function () {
                        _this.loginForm.reset();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AdminComponent.prototype.getAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.contractService.getAccount().then(function (accounts) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.ethereumAccount = accounts;
                                if (!(this.ethereumAccount != null)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.getBalance()];
                            case 1:
                                _a.sent();
                                if (this.intervalId) {
                                    clearInterval(this.intervalId);
                                    // //console.log('Interval Id:',this.intervalId);
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (error) {
                    //console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    AdminComponent.prototype.getBalance = function () {
        var _this = this;
        this.contractService.getUserBalance().then(function (balance) {
            _this.userBalance = balance.c[0];
            //console.log('UserBalance:',this.userBalance);
        });
    };
    AdminComponent.prototype.getCustomerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.getCustomerData().subscribe(function (data) {
                            // //console.log('Data:',data);
                            _this.custData = data.custData;
                        }, function (error) {
                            //console.log(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminComponent.prototype.getAllFees = function () {
        var _this = this;
        this.contractService.getAllFees().then(function (data) {
            //console.log(data);
            _this.transferFees = data.transfer;
            _this.fees = data.redeem;
            _this.buyFees = data.buy;
        }, function (err) {
            //console.log(err);
        });
    };
    AdminComponent.prototype.getContractData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.getName().then(function (name) {
                            // //console.log(name);
                            _this.contractDetails['contractName'] = name;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getSymbol().then(function (symbol) {
                                _this.contractDetails['symbol'] = symbol;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getDecimal().then(function (symbol) {
                                _this.contractDetails['decimal'] = symbol;
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getTotalSupply().then(function (supply) {
                                _this.totalSupply = supply.c[0];
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getTotalBurn().then(function (burn) {
                                _this.totalBurn = burn.c[0];
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(function (redeem) {
                                _this.totalRedeem = parseInt(redeem.c[0]) + parseInt(_this.totalBurn);
                                _this.netToken = parseInt(_this.totalSupply) + parseInt(_this.totalBurn);
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getFees().then(function (data) {
                                _this.fees = data.c[0];
                            })
                                .catch(function (error) {
                                //console.log(error);
                            })];
                    case 7:
                        _a.sent();
                        this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminComponent.prototype.setTransferFees = function () {
        this.contractService.setTransferFees(this.transferFees).then(function (data) {
            //console.log(data);
        }, function (error) {
            //console.log(error);
        });
    };
    AdminComponent.prototype.setRedeemFees = function () {
        this.contractService.setRedeemFees(this.fees).then(function (data) {
            //console.log(data);
        }, function (error) {
            //console.log(error);
        });
    };
    AdminComponent.prototype.setBuyFees = function () {
        this.contractService.setBuyFees(this.buyFees).then(function (data) {
            // console.log(data);
        }, function (error) {
            //console.log(error);
        });
    };
    AdminComponent.prototype.getMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loading = true;
                this.dataService.getMessages('ADMIN').subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var indexBuy, indexRedeem, messageToSend, buyIndex, redeemIndex;
                    var _this = this;
                    return __generator(this, function (_a) {
                        //console.log('MESSAGEDATA:',data);
                        if (data.length > 0) {
                            this.buyMessageArray = [];
                            this.redeemMessageArray = [];
                            data.forEach(function (message) {
                                if (message.type == 'BUY') {
                                    _this.buyMessageArray.push(message);
                                }
                                else {
                                    _this.redeemMessageArray.push(message);
                                }
                                // this.decrypt(data.message,'custodian');
                            });
                        }
                        indexBuy = 0, indexRedeem = 0;
                        messageToSend = {};
                        buyIndex = 0, redeemIndex = 0;
                        this.buyMessageDisplay = [];
                        this.buyMessageArray.forEach(function (buyMsg) { return __awaiter(_this, void 0, void 0, function () {
                            var buyObject;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.decrypt(buyMsg.message, 'admin')];
                                    case 1:
                                        buyObject = _a.sent();
                                        buyObject['_id'] = buyMsg['_id'].$oid;
                                        this.buyMessageDisplay.push(buyObject);
                                        this.buyMessageDisplay[buyIndex]['counter'] = this.buyMessageArray[buyIndex]['counter'];
                                        ++buyIndex;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.redeemMessageDisplay = [];
                        this.redeemMessageArray.forEach(function (buyMsg) { return __awaiter(_this, void 0, void 0, function () {
                            var redeemObject;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.decrypt(buyMsg.message, 'admin')];
                                    case 1:
                                        redeemObject = _a.sent();
                                        redeemObject['_id'] = buyMsg['_id'].$oid;
                                        this.redeemMessageDisplay.push(redeemObject);
                                        this.redeemMessageDisplay[redeemIndex]['counter'] = this.redeemMessageArray[redeemIndex]['counter'];
                                        ++redeemIndex;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.loading = false;
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    //console.log(error);
                    _this.loading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    AdminComponent.prototype.encrypt = function (message, encryptionFor) {
        return __awaiter(this, void 0, void 0, function () {
            var pubkey, encryptedData, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        openpgp__WEBPACK_IMPORTED_MODULE_10__["initWorker"]({ path: 'assets/openpgp/dist/openpgp.worker.min.js' });
                        if (encryptionFor === 'admin') {
                            pubkey = _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_5__["default"].split("\n").join('\n');
                        }
                        else {
                            pubkey = _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_8__["default"].split("\n").join('\n');
                        }
                        encryptedData = null;
                        _a = {
                            message: openpgp__WEBPACK_IMPORTED_MODULE_10__["message"].fromText(message)
                        };
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["key"].readArmored(pubkey)];
                    case 1:
                        options = (_a.publicKeys = (_b.sent()).keys,
                            _a);
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["encrypt"](options).then(function (ciphertext) {
                                var encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
                                return encrypted;
                            })];
                    case 2:
                        encryptedData = _b.sent();
                        return [2 /*return*/, encryptedData];
                }
            });
        });
    };
    AdminComponent.prototype.decrypt = function (encryptedData, role) {
        return __awaiter(this, void 0, void 0, function () {
            var privkey, passphrase, privKeyObj, options, _a, decryptedMsg;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (role == 'admin') {
                            privkey = _sharedData_adminPrivateKey__WEBPACK_IMPORTED_MODULE_6__["default"].replace(/\r/, "").split("\n").join('\n');
                        }
                        else {
                            privkey = _sharedData_custodianPrivateKey__WEBPACK_IMPORTED_MODULE_7__["default"].replace(/\r/, "").split("\n").join('\n');
                        }
                        passphrase = "\n    super long and hard to guess secret\n    ";
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["key"].readArmored(privkey)];
                    case 1:
                        privKeyObj = (_b.sent()).keys[0];
                        // const { workers } = openpgp.getWorker();
                        return [4 /*yield*/, privKeyObj.decrypt('super long and hard to guess secret')];
                    case 2:
                        // const { workers } = openpgp.getWorker();
                        _b.sent();
                        _a = {};
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["message"].readArmored(encryptedData)];
                    case 3:
                        options = (_a.message = _b.sent(),
                            // publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
                            _a.privateKeys = [privKeyObj] // for decryption
                        ,
                            _a);
                        decryptedMsg = openpgp__WEBPACK_IMPORTED_MODULE_10__["decrypt"](options).then(function (plaintext) {
                            // //console.log(JSON.parse(plaintext.data.toString()))
                            return (JSON.parse(plaintext.data.toString()));
                        });
                        return [2 /*return*/, decryptedMsg];
                }
            });
        });
    };
    AdminComponent.prototype.redeemClicked = function (index) {
        this.redeemIndex = index;
        //console.log('displayRedem',this.redeemMessageDisplay);
        this.redeemObjectSet = this.redeemMessageDisplay[this.redeemIndex];
        this.redeemObjectSet.BURN_TOKEN_REQUEST = this.redeemObjectSet.BURN_TOKEN_REQUEST || {};
        this.redeemObjectSet['serialNo'] = this.redeemMessageArray[this.redeemIndex]['counter'];
        console.log('RedeemObject:', this.redeemObjectSet);
    };
    AdminComponent.prototype.buyClicked = function (index) {
        this.buyIndex = index;
        this.buyObjectSet = this.buyMessageDisplay[this.buyIndex];
        this.buyObjectSet['serialNo'] = this.buyMessageArray[this.buyIndex]['counter'];
        this.buyObjectSet.SEND_TOKEN_REQUEST = this.buyObjectSet.SEND_TOKEN_REQUEST || {};
    };
    AdminComponent.prototype.updateBuyMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var admin_message, _a, custodian_message, _b, _id;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // //console.log(JSON.stringify(this.buyForm.value));
                        //console.log('BUYOBJECT:',this.buyObjectSet);
                        if (this.kycBuyValue == "Approve") {
                            this.buyObjectSet.KYC = this.kycBuyValue;
                        }
                        this.kycBuyValue = '';
                        this.loading = true;
                        admin_message = {};
                        admin_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_4__["Message_Type"].BUY;
                        admin_message.counter = this.buyObjectSet['serialNo'];
                        admin_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
                        _a = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.buyObjectSet), 'admin')];
                    case 1:
                        _a.message = _c.sent();
                        custodian_message = {};
                        custodian_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_4__["Message_Type"].BUY;
                        custodian_message.counter = this.buyObjectSet['serialNo'];
                        custodian_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
                        _b = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.buyObjectSet), 'custodian')];
                    case 2:
                        _b.message = _c.sent();
                        _id = this.buyMessageArray[this.buyIndex]['_id'].$oid;
                        this.dataService.sendMessage(admin_message, custodian_message, _id).subscribe(function (data) {
                            //console.log(data);
                            _this.loading = false;
                            $('#buy-kyc').modal('hide');
                            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Updated Details Successfully');
                            _this.buyIndex = null;
                            _this.buyObjectSet = {};
                            _this.getMessage();
                        }, function (error) {
                            _this.loading = false;
                            //console.log(error);
                        }, function () {
                        }); // this.dataService.sendMessage()
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminComponent.prototype.updateRedeemObject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var admin_message, _a, custodian_message, _b, _id;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //console.log('REDEEMOBJECT:',this.redeemObjectSet);
                        if (this.kycRedeemValue == 'Approve') {
                            this.redeemObjectSet.KYC = this.kycRedeemValue;
                        }
                        this.kycRedeemValue = '';
                        if (this.redeemObjectSet.BURN_TOKEN_REQUEST) {
                            if (!this.redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet) {
                                this.redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet = true;
                            }
                        }
                        this.loading = true;
                        admin_message = {};
                        admin_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_4__["Message_Type"].REDEEM;
                        admin_message.counter = this.redeemObjectSet['serialNo'];
                        admin_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
                        _a = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.redeemObjectSet), 'admin')];
                    case 1:
                        _a.message = _c.sent();
                        custodian_message = {};
                        custodian_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_4__["Message_Type"].REDEEM;
                        custodian_message.counter = this.redeemObjectSet['serialNo'];
                        custodian_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
                        _b = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.redeemObjectSet), 'custodian')];
                    case 2:
                        _b.message = _c.sent();
                        _id = this.redeemMessageArray[this.redeemIndex]['_id'].$oid;
                        this.dataService.sendMessage(admin_message, custodian_message, _id).subscribe(function (data) {
                            //console.log(data);
                            _this.loading = false;
                            $('#redeem-kyc').modal('hide');
                            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Updated Details Successfully');
                            _this.redeemIndex = null;
                            _this.redeemObjectSet = {};
                            _this.getMessage();
                        }, function (error) {
                            _this.loading = false;
                            //console.log(error);
                        }, function () {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminComponent.prototype.closeModal = function () {
        this.kycBuyValue = '';
        this.kycRedeemValue = '';
    };
    AdminComponent.prototype.tempMint = function () {
        this.contractService.mintToken('0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834', 5);
    };
    AdminComponent.prototype.mintToken = function () {
        //console.log('In mintToken');
        if (this.buyObjectSet.SEND_TOKEN_ACKNOWLEDGE != true) {
            this.buyObjectSet.SEND_TOKEN_ACKNOWLEDGE = true;
            this.contractService.mintToken(this.buyObjectSet.publicKey, (parseInt(this.buyObjectSet.totalToken) - parseInt(this.buyObjectSet.buyFee)));
            this.updateBuyMessage();
        }
    };
    AdminComponent.prototype.burnTokens = function () {
        var _this = this;
        if (this.redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE != true) {
            this.redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE = true;
            //console.log('REDEEMOBJECT',this.redeemObjectSet);
            $('#redeem-kyc').modal('hide');
            this.contractService.burnTokenFrom(this.redeemObjectSet.publicKey, (parseInt(this.redeemObjectSet.totalToken) - parseInt(this.redeemObjectSet.redeemFee))).then(function (data) {
                _this.updateRedeemObject();
            });
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ellypin-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/contract.service */ "./src/services/contract.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pod_pod_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pod/pod.component */ "./src/app/pod/pod.component.ts");
/* harmony import */ var _pom_pom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pom/pom.component */ "./src/app/pom/pom.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _custodian_custodian_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custodian/custodian.component */ "./src/app/custodian/custodian.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_custodian_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/custodian.service */ "./src/services/custodian.service.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _whitepaper_whitepaper_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./whitepaper/whitepaper.component */ "./src/app/whitepaper/whitepaper.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"],
                _pod_pod_component__WEBPACK_IMPORTED_MODULE_11__["PodComponent"],
                _pom_pom_component__WEBPACK_IMPORTED_MODULE_12__["PomComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"],
                _custodian_custodian_component__WEBPACK_IMPORTED_MODULE_16__["CustodianComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__["TermsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_22__["ProductsComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_23__["FaqComponent"],
                _whitepaper_whitepaper_component__WEBPACK_IMPORTED_MODULE_24__["WhitepaperComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_3__["NgxLoadingModule"].forRoot({}),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _services_contract_service__WEBPACK_IMPORTED_MODULE_8__["ContractService"], _services_custodian_service__WEBPACK_IMPORTED_MODULE_18__["CustodianService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _pod_pod_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pod/pod.component */ "./src/app/pod/pod.component.ts");
/* harmony import */ var _pom_pom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pom/pom.component */ "./src/app/pom/pom.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _custodian_custodian_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custodian/custodian.component */ "./src/app/custodian/custodian.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _whitepaper_whitepaper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whitepaper/whitepaper.component */ "./src/app/whitepaper/whitepaper.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], },
    // { path: 'service', component:ServiceComponent   },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'custodian', component: _custodian_custodian_component__WEBPACK_IMPORTED_MODULE_7__["CustodianComponent"] },
    { path: 'terms', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_8__["TermsComponent"] },
    { path: 'whitepaper', component: _whitepaper_whitepaper_component__WEBPACK_IMPORTED_MODULE_9__["WhitepaperComponent"] },
    { path: 'product', component: _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_13__["FaqComponent"] },
    { path: 'services', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], children: [
            { path: 'pod', component: _pod_pod_component__WEBPACK_IMPORTED_MODULE_3__["PodComponent"] },
            { path: 'pom', component: _pom_pom_component__WEBPACK_IMPORTED_MODULE_4__["PomComponent"] },
            { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] }
        ] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundColor{\r\n    background: #2f5496;\r\n}\r\n\r\n.tabColor{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper home-body backgroundColor\">\r\n    <section class=\"terms-wrapper\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"section-heading tabColor\">\r\n              <h2>Contact</h2>\r\n            </div>\r\n            <div class=\"section-content\">\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n  \r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                  neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                  t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                  amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                  sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n    </section>\t\r\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/custodian/custodian.component.css":
/*!***************************************************!*\
  !*** ./src/app/custodian/custodian.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fees-wrapper table tbody tr td input {\r\n    outline: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    background: none;\r\n}\r\n\r\n.buy-wrapper table tbody tr td input {\r\n    outline: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    background: none;\r\n}\r\n\r\n.redeem-wrapper table tbody tr td input {\r\n    outline: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    background: none;\r\n}\r\n\r\ntr.noBorder td {\r\n    border: 0;\r\n  }\r\n\r\n.redeem-section .button-wrapper {\r\n    padding: 10px;\r\n    text-align: right;\r\n    background: #fff;\r\n}\r\n\r\n.buy-section .button-wrapper {\r\n    padding: 10px;\r\n    text-align: right;\r\n    background: #fff;\r\n}"

/***/ }),

/***/ "./src/app/custodian/custodian.component.html":
/*!****************************************************!*\
  !*** ./src/app/custodian/custodian.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topheader\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"button-inner\">\r\n      <ul>\r\n        <!-- <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#login-pop\">Secure Log In</a></li> -->\r\n        <li><a>Custodian Ui</a></li>\r\n        <li><a>Home</a></li>\r\n      </ul>\r\n    </div>  \r\n  </div>\r\n</div>\r\n\r\n<div class=\"body-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"body-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-sm-12\">\r\n          <aside class=\"left-part\">\r\n            <div class=\"logo-wrapper\">\r\n              <a href=\"home.html\">\r\n                <img src=\"assets/images/logo.png\" alt=\"Ellypin\" class=\"img-responsive\">\r\n                <div class=\"logo-inner\">\r\n                  <h4>Ellypin</h4>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"left-menu-wrapper\">\r\n              <nav class=\"navbar\">\r\n                <ul class=\"nav navbar-nav keyfill\">\r\n                  <li>\r\n                    <label>GPG Public Key</label>\r\n                    <input type=\"text\" name=\"\" class=\"form-control\">\r\n                  </li>\r\n                  <li>\r\n                    <label>GPG Private  Key</label>\r\n                    <input type=\"text\" name=\"\" class=\"form-control\">\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </aside>\r\n        </div>\r\n        <div class=\"col-md-10 col-sm-12\">\r\n          <div class=\"right-part rightOuter\">\r\n            <div class=\"contract-detail-wrapper\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-condensed text-center\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>POD</th>\r\n                      <th>Currency POD</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Name</td>\r\n                      <td>{{contractDetails.contractName}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Symbol</td>\r\n                      <td>{{contractDetails.symbol}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Asset tokenized / Rate</td>\r\n                      <td>{{custData.asset}} / {{custData.rate}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Maturity</td>\r\n                      <td>{{custData.maturity}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Custodian</td>\r\n                      <td>{{custData.custodian}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Location</td>\r\n                      <td>{{custData.location}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Decimals</td>\r\n                      <td>{{contractDetails.decimal}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Mint and assigned when assets deposited</td>\r\n                      <td>{{custData.mint}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Contract address</td>\r\n                      <td>{{contractDetails.contractAddress}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Contract Owner</td>\r\n                      <td>{{custData.owner}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Smart Contract Type</td>\r\n                      <td>{{custData.contractType}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px',fullScreenBackdrop:true, animationType:'circleSwish' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n            <div class=\"bottom-link-wrapper\">\r\n              <a data-toggle=\"modal\" data-target=\"#buy-custodian\">Fee Schedule</a>\r\n              <a href=\"javascript:void(0);\">Terms and Condition</a>\r\n              <a href=\"https://ropsten.etherscan.io/address/0x44128f17132ae9aac62ce8a47c0cf5465e225c97\" target=\"_blank\">MyEtherScan</a>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <div class=\"col-sm-4 fees-wrapper\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered text-center\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"2\">Fees</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Transfer</td>\r\n                        <td>{{transferFees}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Redeem</td>\r\n                        <td>{{fees}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Buy</td>\r\n                        <td>{{buyFees}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4 asset-wrapper\">\r\n                <h4>Asset Account Balance</h4>  \r\n                <div class=\"asset-inner\">\r\n                  {{totalSupply}}\r\n                  <!-- <input type=\"text\" [(ngModel)]=\"assetBalance\" name=\"\" class=\"form-control\">\r\n                  <button class=\"btn btn-primary btn-sm\" style=\"float:right\" (click)=\"saveFees()\">Save</button> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4 podbal-wrapper\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered text-center\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"2\">Pod Balance</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Total</td>\r\n                        <td>{{totalSupply}}</td>\r\n                      </tr>\r\n                      <!-- <tr>\r\n                        <td>Burned</td>\r\n                        <td>{{totalBurn}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Redeemed</td>\r\n                        <td>{{totalRedeem}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Net</td>\r\n                        <td>{{netToken}}</td>\r\n                      </tr> -->\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row buy-section\">\r\n        <div class=\"col-sm-2 col-xs-12\">\r\n          <div class=\"opheading\">\r\n            <h2>BUY</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-xs-12\">\r\n          <h3>Raw Message from MongoDB</h3>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped table-bordered text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                  <th>Name</th>\r\n                  <th>Email</th>\r\n                  <th>Token</th>\r\n                  <th>Fees</th>\r\n                  <th>Public Key</th>\r\n                  <th>Bank</th>\r\n                  <th>Address</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr style=\"cursor: pointer\" (click)=\"buyClicked((itemsPerPage * (buyCurrentPage-1)) + i)\" data-toggle=\"modal\" data-target=\"#buy-kyc\" *ngFor=\"let obj of buyMessageDisplay  | paginate: {id: 'buy', itemsPerPage: itemsPerPage, currentPage: buyCurrentPage };let i=index\">\r\n                    <td>{{obj.counter}}</td>\r\n                    <td>{{obj.buyFirstName+' '+obj.buyLastName}}</td>\r\n                    <td>{{obj.buyEmail}}</td>\r\n                    <td>{{obj.buyToken}}</td>\r\n                    <td>{{obj.buyFee}}</td>\r\n                    <td>{{obj.publicKey}}</td>\r\n                    <td>{{obj.buyBank}}</td>\r\n                    <td>{{obj.buyAddress}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div style=\"background-color: #f9f9f9\">\r\n              <pagination-controls id=\"buy\" (pageChange)=\"buyCurrentPage = $event\" responsive=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"col-sm-5 col-xs-12\" *ngIf=\"buyObjectSet.buyFirstName\">\r\n          <h3>Custodian UI</h3>\r\n          <div class=\"table-responsive buy-wrapper\">\r\n            <table class=\"table table-striped table-bordered text-center\" id=\"podtable\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                  <th>Name</th>\r\n                  <th>Amount Received</th>\r\n                  <th>update Account balance</th>\r\n                  <th>KYC</th>\r\n                  <th>Request Status</th>\r\n                </tr>\r\n              </thead> \r\n              <tbody>\r\n                <tr>\r\n                    <td>1</td>\r\n                    <td>{{buyObjectSet.buyFirstName}}</td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"buyObjectSet.SEND_TOKEN_REQUEST.receivedAmount\" [readonly]=\"buyObjectSet.KYC != 'Approve' || buyObjectSet.SEND_TOKEN_REQUEST.custodianSet\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"buyObjectSet.SEND_TOKEN_REQUEST.updateBalance\" [readonly]=\"buyObjectSet.KYC != 'Approve' || buyObjectSet.SEND_TOKEN_REQUEST.custodianSet\" class=\"form-control\"></td>\r\n                    <td>{{buyObjectSet.KYC}}</td>\r\n                    <td>\r\n                      <span *ngIf=\"buyObjectSet.SEND_TOKEN_ACKNOWLEDGE\">TOKENS SENT</span>\r\n                      <span *ngIf=\"!buyObjectSet.SEND_TOKEN_ACKNOWLEDGE\">TOKENS NOT SENT YET</span>\r\n                    </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>redeemClicked\r\n          <div class=\"button-wrapper\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"buyObjectSet.SEND_TOKEN_REQUEST.custodianSet\" (click)=\"updateBuyObject()\">Update</button>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class=\"row redeem-section\">\r\n        <div class=\"col-sm-2 col-xs-12\">\r\n          <div class=\"opheading\">\r\n            <h2>REDEEM</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-xs-12\">\r\n          <h3>Raw Message from MongoDB</h3>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped table-bordered text-center\">\r\n              <thead>\r\n                <tr>\r\n                    <th>Serial No</th>\r\n                    <th>Name & Address</th>\r\n                    <th>Email</th>\r\n                    <th>Token to Redeem</th>\r\n                    <th>Fees</th>\r\n                    <th>Public Key</th>\r\n                    <th>Bank</th>\r\n                    <th>Account Number</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr style=\"cursor: pointer\" (click)=\"redeemClicked((itemsPerPage * (redeemCurrentPage-1)) + i)\" data-toggle=\"modal\" data-target=\"#redeem-kyc\" *ngFor=\"let obj of redeemMessageDisplay | paginate: {id: 'redeem', itemsPerPage: itemsPerPage, currentPage: redeemCurrentPage };let i=index\">\r\n                    <td>{{obj.counter}}</td>\r\n                    <td>{{obj.redeemBeneficiary}}</td>\r\n                    <td>{{obj.redeemEmail}}</td>\r\n                    <td>{{obj.redeemToken}}</td>\r\n                    <td>{{obj.redeemFee}}</td>\r\n                    <td>{{obj.publicKey}}</td>\r\n                    <td>{{obj.redeemBank}}</td>\r\n                    <td>{{obj.redeemAccountNumber}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div style=\"background-color: #f9f9f9\">\r\n              <pagination-controls id=\"redeem\" (pageChange)=\"redeemCurrentPage = $event\" responsive=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"col-sm-6 col-xs-12\" *ngIf=\"redeemObjectSet.redeemBank\">\r\n          <h3>Custodian UI</h3>\r\n          <div class=\"table-responsive redeem-wrapper\">\r\n            <table class=\"table table-striped table-bordered text-center\" id=\"podtable\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Serial No</th>\r\n                  <th>Bank Name</th>\r\n                  <th>Swift</th>\r\n                  <th>Bank Account No</th>\r\n                  <th>Beneficiary</th>\r\n                  <th>Tokens to Redeem</th>\r\n                  <th>Amount to pay</th>\r\n                  <th>KYC</th>\r\n                  <th>update Account balance</th>\r\n                  <th>Request Status</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                    <td>1.</td>\r\n                    <td>{{redeemObjectSet.redeemBank}}</td>\r\n                    <td>{{redeemObjectSet.redeemSwiftCode}}</td>\r\n                    <td>{{redeemObjectSet.redeemAccountNumber}}</td>\r\n                    <td>{{redeemObjectSet.redeemBeneficiary}}</td>\r\n                    <td>{{redeemObjectSet.redeemToken}}</td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"redeemObjectSet.BURN_TOKEN_REQUEST.redeemAmount\" [readonly]=\"redeemObjectSet.KYC != 'Approve' || redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet\" class=\"form-control\"></td>\r\n                    <td>{{redeemObjectSet.KYC}}</td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"redeemObjectSet.BURN_TOKEN_REQUEST.assetBalance\" [readonly]=\"redeemObjectSet.KYC != 'Approve' || redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet\" class=\"form-control\"></td>\r\n                    <td>\r\n                        <span *ngIf=\"redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE\">TOKENS BURNED</span>\r\n                        <span *ngIf=\"!redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE\">TOKENS NOT BURNED YET</span>\r\n                    </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"button-wrapper\">\r\n            <button class=\"btn btn-primary\" (click)=\"updateRedeemObject()\" [disabled]=\"redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE\">Update</button>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"login-pop\" role=\"dialog\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\r\n        <form action=\"\" [formGroup]=\"loginForm\">\r\n          <h3>Login</h3>\r\n          <div *ngIf=\"error\">\r\n            <div  class=\"alert alert-danger\">\r\n              {{error}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" name=\"usr-name\" [formControl]=\"email\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" name=\"usr-pass\" [formControl]=\"password\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"loginForm.invalid\" (click)=\"loginSubmit()\" >Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"buy-kyc\" role=\"dialog\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <form action=\"\" [hidden]=\"buyObjectSet?.KYC == 'Approve'\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{buyObjectSet.serialNo}}</span></h3>\r\n          <p class=\"text-center\">KYC is not approved</p>\r\n        </form>\r\n\r\n        <form action=\"\" [hidden]=\"buyObjectSet?.SEND_TOKEN_ACKNOWLEDGE|| buyObjectSet?.KYC != 'Approve'\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{buyObjectSet.serialNo}}</span></h3>\r\n          <div class=\"row\" *ngIf=\"buyObjectSet?.SEND_TOKEN_REQUEST\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Total Tokens &nbsp;&nbsp;</label>\r\n                <input type=\"text\" [(ngModel)]=\"buyObjectSet.totalToken\" [ngModelOptions]=\"{standalone: true}\"  [readonly]=\"buyObjectSet?.KYC != 'Approve' || buyObjectSet?.SEND_TOKEN_REQUEST?.custodianSet\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Update Account Balance &nbsp;&nbsp;</label>\r\n                <input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"buyObjectSet.SEND_TOKEN_REQUEST.updateBalance\" [readonly]=\"buyObjectSet?.KYC != 'Approve' || buyObjectSet?.SEND_TOKEN_REQUEST?.custodianSet\" class=\"form-control\">\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\" [hidden]=\"buyObjectSet?.SEND_TOKEN_REQUEST?.custodianSet\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\"  (click)=\"updateBuyObject()\" >Update</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <form action=\"\" [hidden]=\"!buyObjectSet?.SEND_TOKEN_ACKNOWLEDGE\">\r\n          <h3 class=\"text-center\">Serial Number:  <span>{{buyObjectSet.serialNo}}</span></h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <p class=\"text-center\">Tokens has been transferred</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"redeem-kyc\" role=\"dialog\" data-backdrop=\"static\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <form action=\"\" [hidden]=\"redeemObjectSet?.KYC == 'Approve'\">\r\n            <h3 class=\"text-center\">Serial Number:  <span>{{redeemObjectSet.serialNo}}</span></h3>\r\n            <p class=\"text-center\">KYC is not approved</p>\r\n          </form>\r\n  \r\n          <form action=\"\" [hidden]=\"redeemObjectSet?.BURN_TOKEN_ACKNOWLEDGE|| redeemObjectSet?.KYC != 'Approve'\">\r\n            <h3 class=\"text-center\">Serial Number:  <span>{{redeemObjectSet.serialNo}}</span></h3>\r\n            <div class=\"row\" *ngIf=\"redeemObjectSet.BURN_TOKEN_REQUEST\">\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n                  <label>Tokens Received &nbsp;&nbsp;</label>\r\n                  <input type=\"text\" [(ngModel)]=\"redeemObjectSet.totalToken\" [ngModelOptions]=\"{standalone: true}\" [readonly]=\"redeemObjectSet.KYC != 'Approve' || redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet\" class=\"form-control\">                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"form-submit\" [hidden]=\"redeemObjectSet?.BURN_TOKEN_REQUEST?.custodianSet\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-lg\" (click)=\"updateRedeemObject()\" >Update</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n  \r\n          <form action=\"\" [hidden]=\"!redeemObjectSet?.BURN_TOKEN_ACKNOWLEDGE\">\r\n            <h3 class=\"text-center\">Serial Number:  <span>{{redeemObjectSet.serialNo}}</span></h3>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"form-submit\">\r\n                  <p class=\"text-center\">Tokens has been burned</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/custodian/custodian.component.ts":
/*!**************************************************!*\
  !*** ./src/app/custodian/custodian.component.ts ***!
  \**************************************************/
/*! exports provided: CustodianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustodianComponent", function() { return CustodianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_custodian_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/custodian.service */ "./src/services/custodian.service.ts");
/* harmony import */ var _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedData/message.interface */ "./src/app/sharedData/message.interface.ts");
/* harmony import */ var _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedData/adminPublicKey */ "./src/app/sharedData/adminPublicKey.ts");
/* harmony import */ var _sharedData_adminPrivateKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedData/adminPrivateKey */ "./src/app/sharedData/adminPrivateKey.ts");
/* harmony import */ var _sharedData_custodianPrivateKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedData/custodianPrivateKey */ "./src/app/sharedData/custodianPrivateKey.ts");
/* harmony import */ var _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedData/custodianPublic */ "./src/app/sharedData/custodianPublic.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! openpgp */ "./node_modules/openpgp/dist/openpgp.js");
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(openpgp__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CustodianComponent = /** @class */ (function () {
    function CustodianComponent(fb, custodianService) {
        this.fb = fb;
        this.custodianService = custodianService;
        this.buyMessageArray = [];
        this.buyMessageDisplay = [];
        this.redeemMessageArray = [];
        this.redeemMessageDisplay = [];
        this.custData = {};
        this.contractDetails = {};
        this.buyObjectSet = {};
        this.redeemObjectSet = {};
        this.redeemCurrentPage = 1;
        this.buyCurrentPage = 1;
        this.loading = false;
        this.itemsPerPage = 5;
        this.loginForm = fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }
    CustodianComponent.prototype.ngOnInit = function () {
        $('#login-pop').modal('show');
        this.getCustomerData();
    };
    CustodianComponent.prototype.loginSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.loginForm.valid) {
                    payload = {
                        'loginId': this.loginForm.value.email,
                        'loginPin': this.loginForm.value.password,
                        'role': 'CUSTODIAN'
                    };
                    this.error = null;
                    this.custodianService.login(payload).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!data.$undefined) return [3 /*break*/, 2];
                                    $('#login-pop').modal('hide');
                                    this.getContractData();
                                    this.getBalance();
                                    return [4 /*yield*/, this.getMessage()];
                                case 1:
                                    _a.sent();
                                    this.getAllFees();
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.error = 'Unauthorized login request';
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }, function (error) {
                        console.log(error);
                    }, function () {
                        _this.loginForm.reset();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    CustodianComponent.prototype.getCustomerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.custodianService.getCustomerData().subscribe(function (data) {
                            // console.log('Data:',data);
                            _this.custData = data.custData;
                        }, function (error) {
                            console.log(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustodianComponent.prototype.getBalance = function () {
        var _this = this;
        this.custodianService.getUserBalance('0x1b66a326183A0b67F723A201ED3643b0cd29b40D').then(function (balance) {
            _this.userBalance = balance.c[0];
            // console.log('UserBalance:',this.userBalance);
        });
    };
    CustodianComponent.prototype.getAllFees = function () {
        var _this = this;
        this.custodianService.getAllFees().then(function (data) {
            console.log('Data: ', data);
            _this.transferFees = data.transfer;
            _this.fees = data.redeem;
            _this.buyFees = data.buy;
        }, function (err) {
            console.log(err);
        });
    };
    CustodianComponent.prototype.getContractData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.custodianService.getName().then(function (name) {
                            // console.log(name);
                            _this.contractDetails['contractName'] = name;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.custodianService.getSymbol().then(function (symbol) {
                                _this.contractDetails['symbol'] = symbol;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.custodianService.getDecimal().then(function (symbol) {
                                _this.contractDetails['decimal'] = symbol;
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.custodianService.getTotalSupply().then(function (supply) {
                                console.log('Supply:', supply);
                                _this.totalSupply = supply.c[0];
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.custodianService.getTotalBurn().then(function (burn) {
                                console.log('Burn:', burn);
                                _this.totalBurn = burn.c[0];
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.custodianService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(function (redeem) {
                                console.log('Redeem:', redeem);
                                _this.totalRedeem = parseInt(redeem.c[0]) + parseInt(_this.totalBurn);
                                _this.netToken = parseInt(_this.totalSupply) + parseInt(_this.totalBurn);
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.custodianService.getFees().then(function (data) {
                                _this.fees = data.c[0];
                            })
                                .catch(function (error) {
                                console.log(error);
                            })];
                    case 7:
                        _a.sent();
                        this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
                        return [2 /*return*/];
                }
            });
        });
    };
    CustodianComponent.prototype.getMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.custodianService.getMessages('CUSTODIAN').subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var indexBuy, indexRedeem;
                    var _this = this;
                    return __generator(this, function (_a) {
                        // console.log('MESSAGEDATA:',data);
                        if (data.length > 0) {
                            this.buyMessageArray = [];
                            this.redeemMessageArray = [];
                            data.forEach(function (message) {
                                if (message.type == 'BUY') {
                                    _this.buyMessageArray.push(message);
                                }
                                else {
                                    _this.redeemMessageArray.push(message);
                                }
                                // this.decrypt(data.message,'custodian');
                            });
                        }
                        indexBuy = 0, indexRedeem = 0;
                        this.buyMessageDisplay = [];
                        this.buyMessageArray.forEach(function (buyMsg) { return __awaiter(_this, void 0, void 0, function () {
                            var buyObject;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.decrypt(buyMsg.message, 'custodian')];
                                    case 1:
                                        buyObject = _a.sent();
                                        buyObject['_id'] = buyMsg['_id'].$oid;
                                        this.buyMessageDisplay.push(buyObject);
                                        this.buyMessageDisplay[indexBuy]['counter'] = this.buyMessageArray[indexBuy]['counter'];
                                        ++indexBuy;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.redeemMessageDisplay = [];
                        this.redeemMessageArray.forEach(function (redeemMsg) { return __awaiter(_this, void 0, void 0, function () {
                            var buyObject;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.decrypt(redeemMsg.message, 'custodian')];
                                    case 1:
                                        buyObject = _a.sent();
                                        buyObject['_id'] = redeemMsg['_id'].$oid;
                                        this.redeemMessageDisplay.push(buyObject);
                                        this.redeemMessageDisplay[indexRedeem]['counter'] = this.redeemMessageArray[indexRedeem]['counter'];
                                        ++indexRedeem;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    CustodianComponent.prototype.buyClicked = function (index) {
        this.buyIndex = index;
        this.buyObjectSet = this.buyMessageDisplay[this.buyIndex];
        this.buyObjectSet.SEND_TOKEN_REQUEST = this.buyObjectSet.SEND_TOKEN_REQUEST || {};
        this.buyObjectSet['serialNo'] = this.buyMessageArray[this.buyIndex]['counter'];
        this.buyObjectSet['totalToken'] = parseInt(this.buyObjectSet['buyFee']) + parseInt(this.buyObjectSet['buyToken']);
        console.log('Index:', this.buyObjectSet);
    };
    CustodianComponent.prototype.redeemClicked = function (index) {
        this.redeemIndex = index;
        // console.log('displayRedem',this.redeemMessageDisplay);
        this.redeemObjectSet = this.redeemMessageDisplay[this.redeemIndex];
        this.redeemObjectSet[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].BURN_TOKEN_REQUEST] = this.redeemObjectSet[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].BURN_TOKEN_REQUEST] || {};
        this.redeemObjectSet['serialNo'] = this.redeemMessageArray[this.redeemIndex]['counter'];
        this.redeemObjectSet['totalToken'] = parseInt(this.redeemObjectSet['redeemFee']) + parseInt(this.redeemObjectSet['redeemToken']);
        // console.log('REdeemObject:', this.redeemObjectSet);
    };
    CustodianComponent.prototype.updateBuyObject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var admin_message, _a, custodian_message, _b, _id;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // console.log('BUYOBJECT:',this.buyObjectSet);
                        if (this.buyObjectSet.SEND_TOKEN_REQUEST) {
                            if (this.buyObjectSet.totalToken) {
                                $('#buy-kyc').modal('hide');
                                this.buyObjectSet.SEND_TOKEN_REQUEST.custodianSet = true;
                            }
                        }
                        this.loading = true;
                        console.log('BUYOBJEECTSET:', this.buyObjectSet);
                        admin_message = {};
                        admin_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].BUY;
                        admin_message.counter = this.buyObjectSet['serialNo'];
                        admin_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
                        _a = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.buyObjectSet), 'admin')];
                    case 1:
                        _a.message = _c.sent();
                        custodian_message = {};
                        custodian_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].BUY;
                        custodian_message.counter = this.buyObjectSet['serialNo'];
                        custodian_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
                        _b = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.buyObjectSet), 'custodian')];
                    case 2:
                        _b.message = _c.sent();
                        _id = this.buyMessageArray[this.buyIndex]['_id'].$oid;
                        this.custodianService.sendMessage(admin_message, custodian_message, _id).subscribe(function (data) {
                            // console.log(data);
                            _this.loading = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Request Created Successfully');
                            _this.buyIndex = null;
                            _this.buyObjectSet = {};
                            _this.getMessage();
                        }, function (error) {
                            console.log(error);
                            _this.loading = false;
                        }, function () {
                        }); // this.dataService.sendMessage()
                        return [2 /*return*/];
                }
            });
        });
    };
    CustodianComponent.prototype.updateRedeemObject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var admin_message, _a, custodian_message, _b, _id;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // console.log('REDEEMOBJECT:',this.redeemObjectSet);
                        if (this.redeemObjectSet.BURN_TOKEN_REQUEST) {
                            if (this.redeemObjectSet.totalToken) {
                                $('#redeem-kyc').modal('hide');
                                this.redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet = true;
                            }
                        }
                        this.loading = true;
                        admin_message = {};
                        admin_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].REDEEM;
                        admin_message.counter = this.redeemObjectSet['serialNo'];
                        admin_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
                        _a = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.redeemObjectSet), 'admin')];
                    case 1:
                        _a.message = _c.sent();
                        custodian_message = {};
                        custodian_message.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].REDEEM;
                        custodian_message.counter = this.redeemObjectSet['serialNo'];
                        custodian_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
                        _b = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(this.redeemObjectSet), 'custodian')];
                    case 2:
                        _b.message = _c.sent();
                        _id = this.redeemMessageArray[this.redeemIndex]['_id'].$oid;
                        this.custodianService.sendMessage(admin_message, custodian_message, _id).subscribe(function (data) {
                            // console.log(data);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Updated Successfully');
                            _this.redeemIndex = null;
                            _this.redeemObjectSet = {};
                            _this.getMessage();
                            _this.loading = false;
                        }, function (error) {
                            console.log(error);
                            _this.loading = false;
                        }, function () {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustodianComponent.prototype.encrypt = function (message, encryptionFor) {
        return __awaiter(this, void 0, void 0, function () {
            var pubkey, encryptedData, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        openpgp__WEBPACK_IMPORTED_MODULE_9__["initWorker"]({ path: 'assets/openpgp/dist/openpgp.worker.min.js' });
                        if (encryptionFor === 'admin') {
                            pubkey = _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_4__["default"].split("\n").join('\n');
                        }
                        else {
                            pubkey = _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_7__["default"].split("\n").join('\n');
                        }
                        encryptedData = null;
                        _a = {
                            message: openpgp__WEBPACK_IMPORTED_MODULE_9__["message"].fromText(message)
                        };
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_9__["key"].readArmored(pubkey)];
                    case 1:
                        options = (_a.publicKeys = (_b.sent()).keys,
                            _a);
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_9__["encrypt"](options).then(function (ciphertext) {
                                var encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
                                return encrypted;
                            })];
                    case 2:
                        encryptedData = _b.sent();
                        return [2 /*return*/, encryptedData];
                }
            });
        });
    };
    CustodianComponent.prototype.decrypt = function (encryptedData, role) {
        return __awaiter(this, void 0, void 0, function () {
            var privkey, passphrase, privKeyObj, options, _a, decryptedMsg;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (role == 'admin') {
                            privkey = _sharedData_adminPrivateKey__WEBPACK_IMPORTED_MODULE_5__["default"].replace(/\r/, "").split("\n").join('\n');
                        }
                        else {
                            privkey = _sharedData_custodianPrivateKey__WEBPACK_IMPORTED_MODULE_6__["default"].replace(/\r/, "").split("\n").join('\n');
                        }
                        passphrase = "\n    super long and hard to guess secret\n    ";
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_9__["key"].readArmored(privkey)];
                    case 1:
                        privKeyObj = (_b.sent()).keys[0];
                        // const { workers } = openpgp.getWorker();
                        return [4 /*yield*/, privKeyObj.decrypt('super long and hard to guess secret')];
                    case 2:
                        // const { workers } = openpgp.getWorker();
                        _b.sent();
                        _a = {};
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_9__["message"].readArmored(encryptedData)];
                    case 3:
                        options = (_a.message = _b.sent(),
                            // publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
                            _a.privateKeys = [privKeyObj] // for decryption
                        ,
                            _a);
                        decryptedMsg = openpgp__WEBPACK_IMPORTED_MODULE_9__["decrypt"](options).then(function (plaintext) {
                            // console.log(JSON.parse(plaintext.data.toString()))
                            return (JSON.parse(plaintext.data.toString()));
                        });
                        return [2 /*return*/, decryptedMsg];
                }
            });
        });
    };
    CustodianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custodian',
            template: __webpack_require__(/*! ./custodian.component.html */ "./src/app/custodian/custodian.component.html"),
            styles: [__webpack_require__(/*! ./custodian.component.css */ "./src/app/custodian/custodian.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_custodian_service__WEBPACK_IMPORTED_MODULE_2__["CustodianService"]])
    ], CustodianComponent);
    return CustodianComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"body-inner\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"right-part\">\r\n              <div class=\"contract-detail-wrapper\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered text-center\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Pod</th>\r\n                        <th>Currency Pod</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Name</td>\r\n                        <td>{{contractDetails.contractName}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Symbol</td>\r\n                        <td>{{contractDetails.symbol}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Asset tokenized / Rate</td>\r\n                        <td>{{custData.asset}} <span *ngIf=\"custData.asset\">/</span> {{custData.rate}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Maturity</td>\r\n                        <td>{{custData.maturity}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Custodian</td>\r\n                        <td>{{custData.custodian}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Location</td>\r\n                        <td>{{custData.location}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Decimals</td>\r\n                        <td>{{contractDetails.decimal}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Mint and assigned when assets deposited</td>\r\n                        <td>{{custData.mint}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Contract Address</td>\r\n                        <td>{{contractDetails.contractAddress}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Contract Owner</td>\r\n                        <td>{{custData.owner}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Smart Contract type</td>\r\n                        <td>{{custData.contractType}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"bottom-link-wrapper\">\r\n                <a >Fee Schedule</a>\r\n                <a routerLink='/terms'>Terms and Condition</a>\r\n                <a href=\"https://ropsten.etherscan.io/address/0x44128f17132ae9aac62ce8a47c0cf5465e225c97\" target=\"_blank\" style=\"cursor: pointer\">MyEtherScan</a>\r\n              </div>\r\n\r\n              <div class=\"clearfix\">\r\n                <div class=\"col-sm-4 fees-wrapper\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered text-center\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th colspan=\"2\">Fees</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>Transfer</td>\r\n                          <td>{{transferFees}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Redeem</td>\r\n                          <td>{{fees}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Buy</td>\r\n                          <td>{{buyFees}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4 asset-wrapper\">\r\n                  <h4>Asset Balance</h4>\r\n                  <div class=\"asset-inner\">{{totalSupply}}</div>\r\n                </div>\r\n                <div class=\"col-sm-4 podbal-wrapper\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered text-center\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th colspan=\"2\">Pod Balance</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>Total</td>\r\n                          <td>{{totalSupply}}</td>\r\n                        </tr>\r\n                        <!-- <tr>\r\n                          <td>Burned</td>\r\n                          <td>{{totalBurn}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Redeemed</td>\r\n                          <td>{{totalRedeem}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Net</td>\r\n                          <td>{{netToken}}</td>\r\n                        </tr> -->\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"pop-links clearfix\">\r\n                <div class=\"col-sm-6 external-link-wrapper\">\r\n                  <h3>External Transactions</h3>\r\n                  <a (click)=\"openPopup('approve-pop')\">Approve</a>\r\n                  <a  (click)=\"openPopup('transfer-pop')\">Transfer</a>\r\n                  <a >Market Place</a>\r\n                  <a >Link To Exchanges</a>\r\n                </div>\r\n                <div class=\"col-sm-6 interact-link-wrapper\">\r\n                    <h3>Interact With Ellypin</h3>\r\n                    <a  (click)=\"openPopup('buy-pop')\">Buy</a>\r\n                    <a  (click)=\"openPopup('redeem-pop')\">Redeem</a>\r\n                    <a >Pod Faucet</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px',fullScreenBackdrop:true, animationType:'circleSwish' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n\r\n<div class=\"modal fade\" id=\"buy-pop\" data-backdrop=\"static\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeModal('buy-pop')\">&times;</button>\r\n        <form action=\"\" [formGroup]=\"buyForm\">\r\n          <h3>Buy</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Buy</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" (keyup)=\"keyBuy($event)\" [formControl]=\"buyToken\" name=\"buypod\" >\r\n                  <span class=\"input-group-addon\">Pods</span>\r\n                </div>\r\n                <span *ngIf=\"buyToken.invalid && buyToken.touched\" style=\"color:red;font-size: 11px\">Enter tokens to buy</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Fee</label>\r\n                <input class=\"form-control\" readonly [formControl]=\"buyFee\" type=\"text\" name=\"fee\" required=\"\">\r\n              </div>\r\n            </div>  \r\n            <div class=\"col-sm-12 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Amount to Pay</label>\r\n                <input class=\"form-control\" readonly type=\"text\" [(ngModel)]=\"buyAmount\"  [ngModelOptions]=\"{standalone: true}\" name=\"amnt-pay\" required=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <h3>Buyer Details</h3>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"file-uploader\">\r\n                    <input type=\"file\" name=\"buyer-id\">\r\n                    <span>Upload Identity Document</span>\r\n                  </label>\r\n                </div>\r\n              </div>  \r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>First Name</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyFirstName\" placeholder=\"Enter First Name\" name=\"buyer-fname\" required=\"\">\r\n                <span *ngIf=\"buyFirstName.invalid && buyFirstName.touched\" style=\"color:red;font-size: 11px\">Enter your first name</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Middle Name</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyMiddleName\" name=\"buyer-mname\">\r\n                <span *ngIf=\"buyMiddleName.invalid && buyMiddleName.touched\" style=\"color:red;font-size: 11px\">Enter your middle name</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyLastName\" name=\"buyer-lname\">\r\n                <span *ngIf=\"buyLastName.invalid && buyLastName.touched\" style=\"color:red;font-size: 11px\">Enter your last name</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Address - Number and Street</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyAddress\" name=\"buy-add\" >\r\n                <span *ngIf=\"buyAddress.invalid && buyAddress.touched\" style=\"color:red;font-size: 11px\">Enter a valid address</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>City</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyCity\" name=\"buyer-city\" >\r\n                <span *ngIf=\"buyCity.invalid && buyCity.touched\" style=\"color:red;font-size: 11px\">Enter a valid city name</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Province</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyProvince\" name=\"buyer-province\">\r\n                <span *ngIf=\"buyProvince.invalid && buyProvince.touched\" style=\"color:red;font-size: 11px\">Enter a valid province name</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Country</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyCountry\" name=\"buyer-country\">\r\n                <span *ngIf=\"buyCountry.invalid && buyCountry.touched\" style=\"color:red;font-size: 11px\">Enter a valid country name</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input class=\"form-control\" type=\"email\" [formControl]=\"buyEmail\" name=\"buyer-email\">\r\n                <span *ngIf=\"buyEmail.invalid && buyEmail.touched\" style=\"color:red;font-size: 11px\">Enter a valid email id</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Tel</label>\r\n                <input class=\"form-control\" type=\"tel\" [formControl]=\"buyTel\" name=\"buyer-tel\">\r\n                <span *ngIf=\"buyTel.invalid && buyTel.touched\" style=\"color:red;font-size: 11px\">Enter a valid phone number</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Postcode</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyPostCode\" name=\"buyer-postcode\">\r\n                <span *ngIf=\"buyPostCode.invalid && buyPostCode.touched\" style=\"color:red;font-size: 11px\">Enter a valid postalcode</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <h3>Bank Information</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-8 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Paying Bank Name and Address</label>\r\n                <p>Pay to ABC Bank, Singapore .<br> SWIFT No xxxxxxxxxxxx <br> Account Noaaaaaaaaaaaa <br> Account Name: Ellypin EAD account</p>\r\n                <!-- <input class=\"form-control\" type=\"text\" [formControl]=\"buyBank\" name=\"bank-name\"> -->\r\n                <!-- <span *ngIf=\"buyBank.invalid && buyBank.touched\" style=\"color:red;font-size: 11px\">Enter the bank name </span> -->\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Sending Party</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"buyParty\" name=\"sending-party\">\r\n                <span *ngIf=\"buyParty.invalid && buyParty.touched\" style=\"color:red;font-size: 11px\">Enter the buying party name </span>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"row\">\r\n            <!-- <div class=\"col-sm-9\">\r\n              <p>Pay to ABC Bank, Singapore . SWIFT No xxxxxxxxxxxx Account Noaaaaaaaaaaaa Account Name: Ellypin EAD account</p>\r\n            </div> -->\r\n            <div class=\"col-sm-12\" *ngIf=\"!requestCreated\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-lg\" [disabled]=\"buyForm.invalid\" (click)=\"buyRequest()\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"requestId\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"alert alert-success\">\r\n                <p style=\"text-align:center\">Buy Request Created Succesfully</p>\r\n                <p style=\"text-align:center\">Request Id:{{requestId}}</p>\r\n                <p style=\"text-align:center\">Please COPY this ID Number and include it in any correspondence with us\r\n                </p>\r\n                <div style=\"text-align:center\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"closeModal('buy-pop')\">OK</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"redeem-pop\" data-backdrop=\"static\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeModal('redeem-pop')\">&times;</button>\r\n        <form action=\"\" [formGroup]=\"redeemForm\">\r\n          <h3>Redeem</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Redeem</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" (keyup)=\"keyRedeem($event)\" [formControl]=\"redeemToken\" name=\"red-pod\">\r\n                  <span class=\"input-group-addon\">Pods</span>\r\n                </div>\r\n                <span *ngIf=\"redeemToken.invalid && redeemToken.touched\" style=\"color:red;font-size: 11px\">Enter tokens to redeem</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Redemption Fee</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"redeemFee\" readonly name=\"red-fee\">\r\n              </div>\r\n            </div>  \r\n            <div class=\"col-sm-12 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Net to you</label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-usd\" aria-hidden=\"true\"></i></span>\r\n                  <input class=\"form-control\" type=\"text\" name=\"net-amnt\" readonly [(ngModel)]=\"redeemTotal\" [ngModelOptions]=\"{standalone: true}\" >\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <h3>Pay To</h3>\r\n          <div class=\"row\"> \r\n            <div class=\"col-sm-6 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Receiving Bank Name and Address</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"redeemBank\" name=\"receive-bank-name\">\r\n                <span *ngIf=\"redeemBank.invalid && redeemBank.touched\" style=\"color:red;font-size: 11px\">Enter valid bank name and address</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Account Number</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"redeemAccountNumber\" name=\"acc-number\">\r\n                <span *ngIf=\"redeemAccountNumber.invalid && redeemAccountNumber.touched\" style=\"color:red;font-size: 11px\">Enter valid bank number</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Swift Code</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"redeemSwiftCode\" name=\"swift-code\">\r\n                <span *ngIf=\"redeemSwiftCode.invalid && redeemSwiftCode.touched\" style=\"color:red;font-size: 11px\">Enter swift code</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-8 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Beneficiary Name and Address</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"redeemBeneficiary\" name=\"ben-name-add\">\r\n                <span *ngIf=\"redeemBeneficiary.invalid && redeemBeneficiary.touched\" style=\"color:red;font-size: 11px\">Enter swift code</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input class=\"form-control\" type=\"email\" [formControl]=\"redeemEmail\" name=\"ben-email\">\r\n                <span *ngIf=\"redeemEmail.invalid && redeemEmail.touched\" style=\"color:red;font-size: 11px\">Enter a valid email</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"!requestCreated\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-lg\" [disabled]=\"redeemForm.invalid\" (click)=\"redeemRequest()\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"requestId\">\r\n            <div class=\"alert alert-success\">\r\n                <p style=\"text-align:center\">Redeem Request Created Succesfully</p>\r\n                <p style=\"text-align:center\">Request Id:{{requestId}}</p>\r\n                <p style=\"text-align:center\">Please COPY this ID Number and include it in any correspondence with us\r\n                </p>\r\n                <div style=\"text-align:center\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"closeModal('redeem-pop')\">OK</button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"transfer-pop\" role=\"dialog\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeModal('transfer-pop')\">&times;</button>\r\n        <form action=\"\" [formGroup]=\"transferForm\">\r\n          <h3>Transfer To</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>To Address</label>\r\n                <input class=\"form-control\" [formControl]=\"transferAddr\" type=\"text\" name=\"to-add\">\r\n                <span *ngIf=\"transferAddr.invalid && transferAddr.touched\" style=\"color:red;font-size: 11px\">Enter tokens to transfer</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity</label>\r\n                <input class=\"form-control\" type=\"text\" [formControl]=\"transferToken\" name=\"qty-transfer\">\r\n                <span *ngIf=\"transferToken.invalid && transferToken.touched\" style=\"color:red;font-size: 11px\">Enter receiver address</span>\r\n              </div>\r\n            </div>\r\n            </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-lg\" data-dismiss=\"modal\" [disabled]=\"transferForm.invalid\" (click)=\"transferTokens()\">Execute</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"approve-pop\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeModal()\">&times;</button>\r\n        <form action=\"\">\r\n          <h3>Approve</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Address Approved</label>\r\n                <input class=\"form-control\" type=\"text\" name=\"add-approve\" required=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity</label>\r\n                <input class=\"form-control\" type=\"text\" name=\"qty-approve\" required=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-lg\" data-dismiss=\"modal\">Execute</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contract.service */ "./src/services/contract.service.ts");
/* harmony import */ var _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedData/message.interface */ "./src/app/sharedData/message.interface.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedData/adminPublicKey */ "./src/app/sharedData/adminPublicKey.ts");
/* harmony import */ var _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedData/custodianPublic */ "./src/app/sharedData/custodianPublic.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! openpgp */ "./node_modules/openpgp/dist/openpgp.js");
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(openpgp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(contractService, dataService, fb) {
        this.contractService = contractService;
        this.dataService = dataService;
        this.fb = fb;
        this.loading = false;
        this.custData = {};
        this.contractDetails = {};
        this.requestCreated = false;
        this.buyForm = fb.group({
            'buyToken': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9][0-9]*$/)])],
            'buyFee': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'buyFirstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            'buyMiddleName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            'buyLastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            'buyAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'buyCity': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            'buyProvince': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            'buyCountry': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            'buyEmail': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'buyTel': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            // 'buyBank':['', Validators.compose([Validators.required])],
            'buyPostCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*$')])],
        });
        this.redeemForm = fb.group({
            'redeemToken': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9][0-9]*$/)])],
            'redeemFee': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'redeemEmail': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'redeemBank': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9, ]*$')])],
            'redeemSwiftCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]*$/)])],
            'redeemAccountNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*$')])],
            'redeemBeneficiary': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9, ]*$')])]
        });
        this.transferForm = fb.group({
            'transferToken': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9][0-9]*$/)])],
            'transferAddr': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)])]
        });
        this.buyToken = this.buyForm.controls['buyToken'];
        this.buyFee = this.buyForm.controls['buyFee'];
        this.buyFirstName = this.buyForm.controls['buyFirstName'];
        this.buyMiddleName = this.buyForm.controls['buyMiddleName'];
        this.buyLastName = this.buyForm.controls['buyLastName'];
        this.buyAddress = this.buyForm.controls['buyAddress'];
        this.buyCity = this.buyForm.controls['buyCity'];
        this.buyProvince = this.buyForm.controls['buyProvince'];
        this.buyCountry = this.buyForm.controls['buyCountry'];
        this.buyEmail = this.buyForm.controls['buyEmail'];
        this.buyTel = this.buyForm.controls['buyTel'];
        // this.buyBank = this.buyForm.controls['buyBank'];
        this.buyPostCode = this.buyForm.controls['buyPostCode'];
        // this.buyParty = this.buyForm.controls['buyParty'];
        this.redeemToken = this.redeemForm.controls['redeemToken'];
        this.redeemFee = this.redeemForm.controls['redeemFee'];
        this.redeemEmail = this.redeemForm.controls['redeemEmail'];
        this.redeemBank = this.redeemForm.controls['redeemBank'];
        this.redeemSwiftCode = this.redeemForm.controls['redeemSwiftCode'];
        this.redeemAccountNumber = this.redeemForm.controls['redeemAccountNumber'];
        this.redeemBeneficiary = this.redeemForm.controls['redeemBeneficiary'];
        this.transferToken = this.transferForm.controls['transferToken'];
        this.transferAddr = this.transferForm.controls['transferAddr'];
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.getAccounts();
            //  console.log('Printing every 5 seconds');
        }, 2000);
    };
    // @HostListener('click', ['$event'])
    //   onClick(event: MouseEvent) {
    //     console.log('Clicked');
    //     if(this.ethereumAccount){
    //       console.log('Present');
    //     }else{
    //       console.log('Not Present');
    //     }
    // }
    CustomerComponent.prototype.getCustomerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.getCustomerData().subscribe(function (data) {
                            // console.log('Data:',data);
                            _this.custData = data.custData;
                        }, function (error) {
                            console.log(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.getContractData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.getName().then(function (name) {
                            // console.log(name);
                            _this.contractDetails['contractName'] = name;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getSymbol().then(function (symbol) {
                                _this.contractDetails['symbol'] = symbol;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getDecimal().then(function (symbol) {
                                _this.contractDetails['decimal'] = symbol;
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getTotalSupply().then(function (supply) {
                                _this.totalSupply = supply.c[0];
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getTotalBurn().then(function (burn) {
                                _this.totalBurn = burn.c[0];
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.contractService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(function (redeem) {
                                _this.totalRedeem = parseInt(redeem.c[0]) + parseInt(_this.totalBurn);
                                _this.netToken = parseInt(_this.totalSupply) + parseInt(_this.totalBurn);
                            })];
                    case 6:
                        _a.sent();
                        this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.getBalance = function () {
        var _this = this;
        this.contractService.getUserBalance().then(function (balance) {
            _this.userBalance = balance.c[0];
            // console.log('UserBalance:',this.userBalance);
        });
    };
    CustomerComponent.prototype.getFees = function () {
        var _this = this;
        this.dataService.getAllFees().subscribe(function (data) {
            // console.log('Fees',data.buyFee);
            _this.buyFeePercent = data.buyFee;
        }, function (error) {
            console.log(error);
        });
    };
    CustomerComponent.prototype.getAllFees = function () {
        var _this = this;
        this.contractService.getAllFees().then(function (data) {
            _this.transferFees = data.transfer;
            _this.fees = data.redeem;
            _this.buyFees = data.buy;
        }, function (err) {
            console.log(err);
        });
    };
    CustomerComponent.prototype.openPopup = function (popupId) {
        // console.log('POPID:',popupId);
        if (this.ethereumAccount) {
            $("#" + popupId).modal('show');
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Login to Metamask & connect to our application');
        }
    };
    CustomerComponent.prototype.getAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.contractService.getAccount().then(function (accounts) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.ethereumAccount = accounts;
                                if (!(this.ethereumAccount != null)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.getBalance()];
                            case 1:
                                _a.sent();
                                this.getContractData();
                                this.getCustomerData();
                                this.getBalance();
                                this.getAllFees();
                                this.getFees();
                                if (this.intervalId) {
                                    clearInterval(this.intervalId);
                                    // console.log('Interval Id:',this.intervalId);
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerComponent.prototype.keyBuy = function (event) {
        this.buyForm.controls['buyFee'].patchValue(this.buyFees);
        this.buyAmount = parseInt(this.buyForm.value.buyToken) + parseInt(this.buyForm.value.buyFee);
        if (isNaN(this.buyAmount)) {
            this.buyAmount = "";
        }
    };
    CustomerComponent.prototype.keyRedeem = function (event) {
        this.redeemForm.controls['redeemFee'].patchValue(this.fees);
        this.redeemTotal = parseInt(this.redeemForm.value.redeemToken) - parseInt(this.redeemForm.value.redeemFee);
        if (isNaN(this.redeemTotal)) {
            this.redeemTotal = "";
        }
    };
    CustomerComponent.prototype.closeModal = function (popupId) {
        $("#" + popupId).modal('hide');
        this.requestCreated = false;
        this.requestId = '';
        this.redeemForm.reset();
        this.redeemTotal = '';
        this.buyForm.reset();
        this.buyAmount = '';
    };
    CustomerComponent.prototype.burnToken = function (redeemAmount, id) {
        var _this = this;
        this.contractService.burnToken(redeemAmount).then(function () {
            _this.requestId = id;
            // swal({
            //   html:'Request Created Successfully </br> Request Id: '+ id
            // });
        });
    };
    CustomerComponent.prototype.buyRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender, messageToSend, message_object, admin_message, custodian_message, _a, _b, a;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.buyForm.valid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.contractService.getAccount().then(function (accounts) {
                                // console.log(accounts);
                                return accounts;
                            })];
                    case 1:
                        sender = _c.sent();
                        messageToSend = {};
                        // messageToSend.parentMessage = null;
                        messageToSend.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].BUY;
                        messageToSend.time = new Date().getTime();
                        messageToSend.email = this.buyForm.value.buyEmail;
                        messageToSend.publicKey = sender;
                        message_object = Object.assign({}, this.buyForm.value);
                        message_object.publicKey = sender;
                        message_object.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].BUY;
                        message_object.KYC = "Not Approved";
                        message_object[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].SEND_TOKEN_REQUEST] = null;
                        message_object[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].SEND_TOKEN_ACKNOWLEDGE] = null;
                        delete message_object['email'];
                        admin_message = Object.assign({}, messageToSend);
                        custodian_message = Object.assign({}, messageToSend);
                        _a = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'admin')];
                    case 2:
                        _a.message = _c.sent();
                        _b = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'custodian')];
                    case 3:
                        _b.message = _c.sent();
                        // console.log('ADmin:',admin_message,'Custodian:',custodian_message);
                        this.loading = true;
                        a = 5;
                        this.dataService.sendMessage(admin_message, custodian_message).subscribe(function (data) {
                            // console.log(data);
                            // this.buyAmount = "";
                            _this.requestCreated = true;
                            _this.requestId = data;
                            // swal({
                            //   html:'Request Created Succesfully</br>Request Id:'+data
                            // });
                            // this.buyForm.reset();
                        }, function (error) {
                            console.log(error);
                            _this.loading = false;
                        }, function () {
                            _this.loading = false;
                        });
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.redeemRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender, messageToSend, message_object, admin_message, custodian_message, _a, _b, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.redeemForm.valid) return [3 /*break*/, 5];
                        if (!(parseInt(this.redeemForm.value.redeemToken) > parseInt(this.userBalance))) return [3 /*break*/, 1];
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Insufficient no. of tokens');
                        console.log(parseInt(this.redeemForm.value.redeemToken) + this.fees);
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.contractService.getAccount().then(function (accounts) {
                            // console.log(accounts);
                            return accounts;
                        })];
                    case 2:
                        sender = _e.sent();
                        messageToSend = {};
                        // messageToSend.parentMessage = null;
                        messageToSend.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].REDEEM;
                        messageToSend.time = new Date().getTime();
                        messageToSend.email = this.redeemForm.value.redeemEmail;
                        messageToSend.publicKey = sender;
                        message_object = Object.assign({}, this.redeemForm.value);
                        message_object.publicKey = sender;
                        message_object.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].REDEEM;
                        delete message_object['email'];
                        message_object[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].KYC] = "Not Approved";
                        message_object[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].BURN_TOKEN_REQUEST] = null;
                        message_object[_sharedData_message_interface__WEBPACK_IMPORTED_MODULE_2__["Message_Type"].BURN_TOKEN_ACKNOWLEDGE] = null;
                        admin_message = Object.assign({}, messageToSend);
                        custodian_message = Object.assign({}, messageToSend);
                        admin_message.message = [];
                        _b = (_a = admin_message.message).push;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'admin')];
                    case 3:
                        _b.apply(_a, [_e.sent()]);
                        custodian_message.message = [];
                        _d = (_c = custodian_message.message).push;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'custodian')];
                    case 4:
                        _d.apply(_c, [_e.sent()]);
                        this.loading = true;
                        this.dataService.redeemToken(admin_message, custodian_message).subscribe(function (data) {
                            // console.log(data);
                            _this.requestCreated = true;
                            _this.burnToken(_this.redeemForm.value.redeemToken, data);
                        }, function (error) {
                            console.log(error);
                            _this.loading = false;
                        }, function () {
                            _this.loading = false;
                        });
                        _e.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.toMyetherScan = function () {
        if (this.ethereumAccount) {
            window.open("https://ropsten.etherscan.io/address/" + this.ethereumAccount + "#tokentxns", "_blank");
        }
    };
    CustomerComponent.prototype.transferTokens = function () {
        if (this.transferForm.valid) {
            // console.log('form is valid');
            this.contractService.sendContractToken(this.transferForm.value.transferAddr, parseInt(this.transferForm.value.transferToken));
        }
    };
    CustomerComponent.prototype.encrypt = function (message, encryptionFor) {
        return __awaiter(this, void 0, void 0, function () {
            var pubkey, encryptedData, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        openpgp__WEBPACK_IMPORTED_MODULE_7__["initWorker"]({ path: 'assets/openpgp/dist/openpgp.worker.min.js' });
                        if (encryptionFor === 'admin') {
                            pubkey = _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_4__["default"].split("\n").join('\n');
                        }
                        else {
                            pubkey = _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_5__["default"].split("\n").join('\n');
                        }
                        encryptedData = null;
                        _a = {
                            message: openpgp__WEBPACK_IMPORTED_MODULE_7__["message"].fromText(message)
                        };
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_7__["key"].readArmored(pubkey)];
                    case 1:
                        options = (_a.publicKeys = (_b.sent()).keys,
                            _a);
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_7__["encrypt"](options).then(function (ciphertext) {
                                var encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
                                return encrypted;
                            })];
                    case 2:
                        encryptedData = _b.sent();
                        return [2 /*return*/, encryptedData];
                }
            });
        });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundColor{\r\n    background: #2f5496;\r\n}\r\n\r\n.tabColor{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper home-body backgroundColor\">\r\n    <section class=\"terms-wrapper\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"section-heading tabColor\">\r\n              <h2>FAQ</h2>\r\n            </div>\r\n            <div class=\"section-content\">\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n  \r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                  neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                  t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                  amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                  sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n    </section>\t\r\n  </div>"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"webheader-wrapper\">\r\n\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-3 col-sm-5 col-xs-9\">\r\n\t\t\t\t\t<div class=\"logo-wrapper\">\r\n\t\t\t\t\t\t<a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/logo.png\" alt=\"Ellypin\">\r\n\t\t\t\t\t\t\t<div class=\"logo-inner\">\r\n\t\t\t\t\t\t\t\t<h4>Ellypin</h4>\r\n\t\t\t\t\t\t\t\t<h5>Ellypin Digital Pte. Ltd. Singapore</h5>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-9 col-sm-7 col-xs-3\">\r\n\t\t\t\t\t<div class=\"menu-upper-part\">\r\n\t\t\t\t\t\t<h1>Tokenization</h1>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"menu-wrapper\">\r\n\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" routerLink='/about'>About</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" routerLink='/product'>Products</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" routerLink='faq'>Faq</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" routerLink='whitepaper'>Whitepaper</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" routerLink='/contact'>Contact</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n</header>\r\n<div class=\"body-wrapper home-body\">\r\n\t<section class=\"banner-sec\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<div class=\"banner-link-wrapper\">\r\n\t\t\t\t\t\t<a routerLink=\"/services/pod\">\r\n\t\t\t\t\t\t\t<h2>Fiat Currency <br> Pod</h2>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<p>Payment-On-Delivery</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<div class=\"banner-link-wrapper\">\r\n\t\t\t\t\t\t<a routerLink=\"/services/pom\">\r\n\t\t\t\t\t\t\t<h2>Bond And CDs <br> Pom</h2>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<p>Payment-On-Maturity</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<div class=\"banner-link-wrapper\">\r\n\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t<h2>Demo</h2>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<div class=\"banner-quote\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tWe Tokenize Currenices, Precious Metals, Bonds and Loans in a safe, secure and transparent rule -based system using the Ellypin Tokenization Protocol\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<section class=\"intro-sec\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<h2>What is a POD ?</h2>\r\n\t\t\t\t\t<h2>What is a POM ?</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"section-content\">\r\n\t\t\t\t\t<p>POD stands for Payment on Delivery and is an ERC20 token that represents an asset that is kept at a 1-to-1 ratio at a Custodian.</p>\r\n\t\t\t\t\t<p>POM stands for Payment on Maturity and is an ERC20 token that represents an asset with a maturity at a fixed date in the future and is also kept at a Custodian.</p>\r\n\t\t\t\t\t<p>PODs and POMs are Created when the asset is deposited, and are Burned when the asset is Redeemed. Always 1-to-1.Assets are not created out of thin air. The underlying asset is a real-world tangible asset and the PODs and POMs are digital assets, so they straddle both worlds and have 2 sets of functions: 1 that complies with real-world requirements and the other that operates on standard ERC20 functions and acts just like any other ERC20 token.</p>\r\n\t\t\t\t\t<div class=\"section-image\">\r\n\t\t\t\t\t\t<img src=\"assets/images/intro.png\" class=\"img-responsive\" alt=\"Ellypin\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>We work with the banking system, and comply with KYC regulations when transactions occur in the real-world. During token Creation and Redemption, we will be in real-world mode. When in Digital mode, the token can be transferred peer-to-peer.The tokenization of PODs and POMs follows the Ellypin Tokenization Protocol.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\t\r\n\t<section class=\"protocol-sec\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<h2>The Ellypin Tokenization Protocol</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"section-content\">\r\n\t\t\t\t\t<p>This is a publicly disclosed set of rules that govern the tokenization of real-world assets.</p>\r\n\t\t\t\t\t<p>These rules are created to make the Creation of the tokens, the transactions post-creation and the Redemption of assets and Burning of the tokens post-redemption safe, secure and transparent.</p>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Tokens are minted only upon deposit of the appropriate quantity and quality of the underlying real-world asset.</li>\r\n\t\t\t\t\t\t<li>The Custodian of the assets cannot be the Minter of the tokens.</li>\r\n\t\t\t\t\t\t<li>The Custodian and the Administrator will corroborate and verify each other in an arm’s length relationship.</li>\r\n\t\t\t\t\t\t<li>Once redeemed, the tokens are Burned.</li>\r\n\t\t\t\t\t\t<li>All actions are initiated by the Customer.</li>\r\n\t\t\t\t\t\t<li>There is proper record keeping. Records are maintained in an encrypted Database.</li>\r\n\t\t\t\t\t\t<li>The integrity of the system, the safety of the asset and the welfare of the Customer are paramount.</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-12 box-wrapper\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-image\">\r\n\t\t\t\t\t\t\t<img src=\"assets/./images/pre-cre.png\" alt=\"Ellypin\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-content\">\r\n\t\t\t\t\t\t\t<div class=\"box-heading\">\r\n\t\t\t\t\t\t\t\t<h3>Pre-Creation Information Flow </h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>The Customer is identified by his or her public key, name and ID.</li>\r\n\t\t\t\t\t\t\t\t<li>The name is checked for AML / CFT by our expert external KYC provider. This takes seconds.</li>\r\n\t\t\t\t\t\t\t\t<li>A Pass will continue the process. A fail will end it.</li>\r\n\t\t\t\t\t\t\t\t<li>The BUY request will be sent simultaneously to the Custodian and the Administrator. Checks and Balances.</li>\r\n\t\t\t\t\t\t\t\t<li>All information sent is encrypted.</li>\r\n\t\t\t\t\t\t\t\t<li>The information is used to automatically pre-populate the quantity to be purchased and the public key of the Customer.</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 box-wrapper\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-content\">\r\n\t\t\t\t\t\t\t<div class=\"box-heading\">\r\n\t\t\t\t\t\t\t\t<h3>Token Creation</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>The information on the number of tokens to Mint and which wallet that will be assigned to has been pre-filled from the information entered by the Customer.</li>\r\n\t\t\t\t\t\t\t\t<li>Once the funds are received, the Custodian updates the total asset balance, issues a receipt to the Customer and the system informs the Administrator.</li>\r\n\t\t\t\t\t\t\t\t<li>The Administrator Mints and Assigns the tokens according to the information that is pre-filled.</li>\r\n\t\t\t\t\t\t\t\t<li>The system updates the total number of tokens and the holdings in the customer's wallet.</li>\r\n\t\t\t\t\t\t\t\t<li>There can be no arbitrary Creation and Assignment by either the Custodian or the Administrator.</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-image\">\r\n\t\t\t\t\t\t\t<img src=\"assets/./images/token-cre.png\" alt=\"Ellypin\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 box-wrapper\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-image\">\r\n\t\t\t\t\t\t\t<img src=\"assets/./images/pre-red.png\" alt=\"Ellypin\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-content\">\r\n\t\t\t\t\t\t\t<div class=\"box-heading\">\r\n\t\t\t\t\t\t\t\t<h3>Pre-Redemption Information Flow </h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li> The Customer is identified by his or her public key.</li>\r\n\t\t\t\t\t\t\t\t<li>The Name of the beneficiary  is checked for AML / CFT by our expert  external KYC provider. This takes seconds.\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>A pass will continue the process. A fail will end it.</li>\r\n\t\t\t\t\t\t\t\t<li>The Redemption request will be sent simultaneously to the Custodian and the Administrator. Checks and Balances.\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>All information sent is encrypted.</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 box-wrapper\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-content\">\r\n\t\t\t\t\t\t\t<div class=\"box-heading\">\r\n\t\t\t\t\t\t\t\t<h3>Token Redemption</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>The Customer sends the tokens to be Redeemed to the Redemption Wallet. This wallet is maintained by the Administrator, who does not own the contents.</li>\r\n\t\t\t\t\t\t\t\t<li>Once the tokens are received, the Administrator updates the information.</li>\r\n\t\t\t\t\t\t\t\t<li>The System then advises the Custodian to remit the funds to the beneficiary at the specified bank. All this information was pre-filled by the Customer.</li>\t\r\n\t\t\t\t\t\t\t\t<li>No arbitrary sent simultaneously to the Custodian and the Administrator. Checks and Balances.</li>\r\n\t\t\t\t\t\t\t\t<li>All information sent is encrypted.</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 box-image\">\r\n\t\t\t\t\t\t\t<img src=\"assets/./images/token-red.png\" alt=\"Ellypin\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<section class=\"tech-sec\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<h2>The Ellypin Technical Stack</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"section-image\" style=\"margin-bottom: 20px;\">\r\n\t\t\t\t\t<img src=\"assets/./images/tech-stack.png\" class=\"img-responsive\" alt=\"Ellypin\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"section-content\">\r\n\t\t\t\t\t<p>Technically, we are using an open source ERC20 smart contract deployed on the Ethereum Blockchain on an enterprise-grade Cloud Computing platform. On top of the smart contract we have a custom Interface layer,  connected to an off-chain Database.</p>\r\n\t\t\t\t\t<p>The simple explaination is that the ERC20 smart contract is battle-tested, has a whole suite of ready-made supporting apps like MetaMask and MyEtherScan, and is brilliant at keepin track of the total number of tokens and the holdings of individual wallets, for digital assets. For real-world assets, it needs something more: a custodian to hold the assets, a KYC regime to weed out bad actors, and a confidential way to pass sensitive information like banking information. That's the Interface layer.</p>\r\n\t\t\t\t\t<p>The off-chain Database keeps track of the important information. The Custodian and Administrator check and balance each other.  The AWS Cloud Computing platform enables us to ramp up capacity to whatever is needed at very short notice.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toService = function () {
        console.log('In ToService');
        this.router.navigate(['/service']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 700px;\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 100px;\r\n}\r\n/* Card */\r\n.card {\r\n  position: relative;\r\n  background: #ffffff;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px 0;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card:first-child {\r\n  background: #fafafa;\r\n  height: 10px;\r\n  border-radius: 5px 5px 0 0;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n}\r\n.card .title {\r\n  position: relative;\r\n  z-index: 1;\r\n  border-left: 5px solid #ed2553;\r\n  margin: 0 0 35px;\r\n  padding: 10px 0 10px 50px;\r\n  color: #ed2553;\r\n  font-size: 32px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n.card .input-container {\r\n  position: relative;\r\n  margin: 0 60px 50px;\r\n}\r\n.card .input-container input {\r\n  outline: none;\r\n  z-index: 1;\r\n  position: relative;\r\n  background: none;\r\n  width: 100%;\r\n  height: 60px;\r\n  border: 0;\r\n  color: #212121;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n.card .input-container input:focus ~ label {\r\n  color: #9d9d9d;\r\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container input:focus ~ .bar:before,\r\n.card .input-container input:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n.card .input-container input:valid ~ label {\r\n  color: #9d9d9d;\r\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  color: #757575;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  line-height: 60px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n  z-index: 1;\r\n}\r\n.card .input-container .bar {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: #757575;\r\n  width: 100%;\r\n  height: 1px;\r\n  z-index: 1;\r\n}\r\n.card .input-container .bar:before,\r\n.card .input-container .bar:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background: #ed2553;\r\n  width: 0;\r\n  height: 2px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\n.card .input-container .bar:before {\r\n  left: 50%;\r\n}\r\n.card .input-container .bar:after {\r\n  right: 50%;\r\n}\r\n.card .button-container {\r\n  margin: 0 60px;\r\n  text-align: center;\r\n}\r\n.card .button-container button {\r\n  outline: 0;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: 0;\r\n  width: 240px;\r\n  border: 2px solid #e3e3e3;\r\n  padding: 20px 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .button-container button span {\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #ddd;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .button-container button:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  display: block;\r\n  background: #ed2553;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 100%;\r\n  margin: -15px 0 0 -15px;\r\n  opacity: 0;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .button-container button:hover,\r\n.card .button-container button:active,\r\n.card .button-container button:focus {\r\n  border-color: #ed2553;\r\n}\r\n.card .button-container button:hover span,\r\n.card .button-container button:active span,\r\n.card .button-container button:focus span {\r\n  color: #ed2553;\r\n}\r\n.card .button-container button:active span,\r\n.card .button-container button:focus span {\r\n  color: #ffffff;\r\n}\r\n.card .button-container button:active:before,\r\n.card .button-container button:focus:before {\r\n  opacity: 1;\r\n  -webkit-transform: scale(10);\r\n  transform: scale(10);\r\n}\r\n.card .footer {\r\n  margin: 40px 0 0;\r\n  color: #d3d3d3;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\n.card .footer a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n  display: block;\r\n}\r\n.card .footer a:hover {\r\n  color: #bababa;\r\n}\r\n.card.alt {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  z-index: 10;\r\n  width: 140px;\r\n  height: 140px;\r\n  background: none;\r\n  border-radius: 100%;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n  /* Toggle */\r\n  /* Title */\r\n  /* Input */\r\n  /* Button */\r\n}\r\n.card.alt .toggle {\r\n  position: relative;\r\n  background: #ed2553;\r\n  width: 140px;\r\n  height: 140px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  line-height: 140px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.card.alt .toggle:before {\r\n  content: \"\\f040\";\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transform: translate(0, 0);\r\n  transform: translate(0, 0);\r\n}\r\n.card.alt .title,\r\n.card.alt .input-container,\r\n.card.alt .button-container {\r\n  left: 100px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.card.alt .title {\r\n  position: relative;\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n.card.alt .title .close {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 60px;\r\n  display: inline;\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  font-weight: 400;\r\n}\r\n.card.alt .title .close:before {\r\n  content: \"\\00d7\";\r\n}\r\n.card.alt .input-container input {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ .bar:before,\r\n.card.alt .input-container input:focus ~ .bar:after {\r\n  background: #ffffff;\r\n}\r\n.card.alt .input-container input:valid ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container label {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .input-container .bar {\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .button-container button {\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n.card.alt .button-container button span {\r\n  color: #ed2553;\r\n}\r\n.card.alt .button-container button:hover {\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.card.alt .button-container button:active:before,\r\n.card.alt .button-container button:focus:before {\r\n  display: none;\r\n}\r\n/* Keyframes */\r\n@-webkit-keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active  {\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    background: transparent !important;\r\n}\r\nspan.error {\r\n  color: #ed2553;\r\n  position: absolute;\r\n    bottom: -25px;\r\n    width: 100%;\r\n    display: block;\r\n    left: 0;\r\n}\r\nbutton[disabled] {\r\n  cursor: no-drop !important;\r\n}\r\n@media only screen and (max-width:767px){\r\n  .container{\r\n    padding: 30px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"card\"></div>\r\n    <div class=\"card\">\r\n      <h1 class=\"title\">Login</h1>\r\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onLogin(loginForm)\">\r\n        <div class=\"input-container\">\r\n          <input type=\"email\" id=\"email\" #email =\"ngModel\" ngModel name=\"email\" required=\"required\" email/>\r\n          <label for=\"email\">Email</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"email.touched && email.invalid\"> Email Address is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"password\" id=\"password\" #password =\"ngModel\" ngModel name=\"password\" required=\"required\" />\r\n          <label for=\"password\">Password</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"password.touched && password.invalid\"> Password is Required </span>\r\n        </div>\r\n        <div class=\"button-container\">\r\n          <button [disabled]=\"!loginForm.valid\">\r\n            <span *ngIf=\"!isProcessing\">Login</span>\r\n            <span *ngIf=\"isProcessing\"><i class=\"fa fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n        </div>\r\n        <div class=\"footer\">\r\n          <!-- <a href=\"#\">Forgot your password?</a> -->\r\n          <a style=\"color: #ed2553;\" href=\"/#/register\"> Register Now! </a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.isProcessing = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (formData) {
        var _this = this;
        this.isProcessing = true;
        var payload = {
            "email": formData.value.email,
            "password": formData.value.password
        };
        this.dataService.loginUser(payload).subscribe(function (successRes) {
            _this.isProcessing = false;
            if (successRes == "User Not Exist") {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: successRes,
                    icon: 'error',
                    confirmButtonText: 'Register Now!'
                }).then(function () {
                    _this.router.navigate(['/register']);
                });
            }
            else if (successRes == "Please check your credentials") {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: successRes,
                    icon: 'error'
                });
            }
            else if (successRes == "User login Successfull") {
                _this.router.navigate(['/home']);
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: successRes,
                    icon: 'success',
                });
            }
        }, function (error) {
            console.log('no submitted', error);
            _this.isProcessing = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pod/pod.component.css":
/*!***************************************!*\
  !*** ./src/app/pod/pod.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pod/pod.component.html":
/*!****************************************!*\
  !*** ./src/app/pod/pod.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-10\">\r\n            <div class=\"right-part\">\r\n              <div class=\"section-wrapper\">\r\n                <h2 class=\"section-title\">Payment On Delivery (Pod)</h2>\r\n                <p>POD or payment-on-delivery is an erc20 token that represents a fiat currency or any asset that can be kept in safe custody at a bank or custodian.  Deposit and Redemption is in kind.  The value of the POD depends on the underlying asset.</p>\r\n                <p>The asset or currency backs the POD 1-for-1, not fractional or algorithmic or conditional.  In the case of fiat currencies, the asset backing is a deposit in a fully disclosed, specified, licensed financial institution in a disclosed location. No storage fees are charged and no interest or other income accrues to the POD holder. The POD is denominated in the currency that forms its asset backing, so there is no capital gain or loss and no income, by definition.</p>\r\n                <p>The POD is truly decentralized: PODs are Minted when a deposit is received, and Burned when Redeemed.</p>\r\n                <p>A simple straightforward state-of -the art AML / CFT KYC check is conducted by our external expert on Buy and Redeem transactions. Painless to most people, keeps out bad people. PODs can be traded, transferred peer-to-peer at the speed of crypto but with the intrinsic value of real-world currencies and assets</p>\r\n              </div>\r\n              <div class=\"section-wrapper\">\r\n                <h2 class=\"section-title\">How Does This Work ?</h2>\r\n                <p>All processes are initiated only by the end-user. PODs are created when the appropriate currency / asset is deposited and PODs are burned when redeemed. In between they act like other tokens and can be transferred, approved, bought and sold. To start, click on the symbol below. This will take you to the customised POD page and which will automatically connect to your MetaMask  browser. The customised POD page is a safe and simple User Interface which has functions that enable you to access the common functions of the erc20 contract and Buy and Redeem functions. For the standard erc20 functions, you can also use MetaMask (speed setting fastest).</p>\r\n                <h4 class=\"demo-note\">Watch the Demo below  or click contact on the left for further assistance</h4>\r\n              </div>\r\n              <div class=\"demo-wrapper\">\r\n                <a href=\"javascript:void(0);\"> click Here for Demo</a>\r\n              </div>\r\n              <div class=\"section-wrapper\">\r\n                <h2 class=\"section-title\">List OF Pods</h2>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-striped table-bordered text-center\" id=\"podtable\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Description</th>\r\n                        <th>Symbol</th>\r\n                        <th>Custodian / Location</th>\r\n                        <th>Remarks</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of podArray\" routerLink=\"/services/customer\">\r\n                          <td>{{item.description}}</td>\r\n                          <td>{{item.symbol}}</td>\r\n                          <td>{{item.custodian}}/{{item.location}}</td>\r\n                          <td>{{item.remarks}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"bottom-link-wrapper\">\r\n                <a style=\"cursor: pointer;\" (click)=\"getMetamask()\">Get MetaMask</a>\r\n                <a href=\"javascript:void(0);\">Get Hardware Wallet</a>\r\n                <a href=\"https://ropsten.etherscan.io/address/0x44128f17132ae9aac62ce8a47c0cf5465e225c97\" target=\"_blank\">MyEtherScan</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n"

/***/ }),

/***/ "./src/app/pod/pod.component.ts":
/*!**************************************!*\
  !*** ./src/app/pod/pod.component.ts ***!
  \**************************************/
/*! exports provided: PodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodComponent", function() { return PodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PodComponent = /** @class */ (function () {
    function PodComponent(dataService) {
        this.dataService = dataService;
        this.podArray = [];
    }
    PodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCustomerData().subscribe(function (data) {
            _this.podArray = data.podList;
        }, function (error) {
            console.log(error);
        });
    };
    PodComponent.prototype.getMetamask = function () {
        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        console.log('Firefox:', isFirefox);
        console.log('Chrome:', isChrome);
        if (isChrome) {
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en", "_blank");
        }
        if (isFirefox) {
            window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/", "_blank");
        }
    };
    PodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pod',
            template: __webpack_require__(/*! ./pod.component.html */ "./src/app/pod/pod.component.html"),
            styles: [__webpack_require__(/*! ./pod.component.css */ "./src/app/pod/pod.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PodComponent);
    return PodComponent;
}());



/***/ }),

/***/ "./src/app/pom/pom.component.css":
/*!***************************************!*\
  !*** ./src/app/pom/pom.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pom/pom.component.html":
/*!****************************************!*\
  !*** ./src/app/pom/pom.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-10\">\r\n  <div class=\"right-part\">\r\n    <div class=\"section-wrapper\">\r\n      <h2 class=\"section-title\">Payment On Maturity (Pom)</h2>\r\n      <p>POM or payment-on-maturity is an ERC20 token that represents an asset with a fixed maturity that can be kept in safe custody at a bank or custodian.  Deposit and Redemption is in kind, except for interest payments and at maturity when the holder of record will be paid in PODs that the POM is denominated in. e.g if your POM is in €, you will get € PODs.  The asset backing of a POM will be homogeneous: same issuer, maturity and interest rate, 1-for-1. The POM custodian will collect payments on behalf of the POM holders and distribute according to their proportional holdings. Custodian will pay withholding tax and holders may seek refunds where eligible.</p>\r\n      <p>A simple straightforward state-of -the art AML / CFT KYC check is conducted by our external expert on Buy and Redeem transactions. Painless to most people, but keeps out bad people. POMs can be traded, transferred peer-to-peer at the speed of crypto but with the intrinsic value of real-world  assets.</p>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n      <h2 class=\"section-title\">How Does This Work ?</h2>\r\n      <p>All processes are initiated only by the end-user. POMs are created when the appropriate asset is deposited and POMs are burned when redeemed.  Deposit and Redemption must be in standard units. In between they act like other tokens and can be transferred, approved, bought and sold. To start, click on the symbol below. This will take you to the customised POM page and which will automatically connect to your MetaMask  browser. The customised POM page is a safe and simple User Interface which has functions that enable you to access the common functions of the erc20 contract and Buy and Redeem functions. For the standard erc20 functions, you can also use MetaMask (speed setting fastest).</p>\r\n      <h4 class=\"demo-note\">Watch the Demo below  or click contact on the left for further assistance</h4>\r\n    </div>\r\n    <div class=\"demo-wrapper\">\r\n      <a href=\"javascript:void(0);\"> click Here for Demo</a>\r\n    </div>\r\n    <div class=\"section-wrapper\">\r\n      <h2 class=\"section-title\">List OF Poms</h2>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-striped table-bordered text-center\" id=\"pomtable\">\r\n          <thead>\r\n            <tr>\r\n              <th>Description</th>\r\n              <th>Symbol</th>\r\n              <th>Custodian / Location</th>\r\n              <th>Remarks</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of pomArray\">\r\n                <td>{{item.description}}</td>\r\n                <td>{{item.symbol}}</td>\r\n                <td>{{item.custodian}}/{{item.location}}</td>\r\n                <td>{{item.remarks}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom-link-wrapper\">\r\n      <a style=\"cursor: pointer\" (click)=\"getMetamask()\">Get MetaMask</a>\r\n      <a href=\"javascript:void(0);\">Get Hardware Wallet</a>\r\n      <a href=\"https://ropsten.etherscan.io/address/0x44128f17132ae9aac62ce8a47c0cf5465e225c97\" target=\"_blank\">MyEtherScan</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pom/pom.component.ts":
/*!**************************************!*\
  !*** ./src/app/pom/pom.component.ts ***!
  \**************************************/
/*! exports provided: PomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomComponent", function() { return PomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PomComponent = /** @class */ (function () {
    function PomComponent(dataService) {
        this.dataService = dataService;
        this.pomArray = [];
    }
    PomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCustomerData().subscribe(function (data) {
            _this.pomArray = data.pomList;
        }, function (error) {
            console.log(error);
        });
    };
    PomComponent.prototype.getMetamask = function () {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        console.log('Firefox:', isFirefox);
        console.log('Chrome:', isChrome);
        if (isChrome) {
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en", "_blank");
        }
        if (isFirefox) {
            window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/", "_blank");
        }
    };
    PomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pom',
            template: __webpack_require__(/*! ./pom.component.html */ "./src/app/pom/pom.component.html"),
            styles: [__webpack_require__(/*! ./pom.component.css */ "./src/app/pom/pom.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PomComponent);
    return PomComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundColor{\r\n    background: #2f5496;\r\n}\r\n\r\n.tabColor{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper home-body backgroundColor\">\r\n    <section class=\"terms-wrapper\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"section-heading tabColor\">\r\n              <h2>Product</h2>\r\n            </div>\r\n            <div class=\"section-content\">\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n  \r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                  neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                  t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                  amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                  sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n    </section>\t\r\n  </div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  padding: 50px;\r\n}\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 700px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n/* Card */\r\n.card {\r\n  position: relative;\r\n  background: #ffffff;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px 0;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card:first-child {\r\n  background: #fafafa;\r\n  height: 10px;\r\n  border-radius: 5px 5px 0 0;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n}\r\n.card .title {\r\n  position: relative;\r\n  z-index: 1;\r\n  border-left: 5px solid #ed2553;\r\n  margin: 0 0 35px;\r\n  padding: 10px 0 10px 50px;\r\n  color: #ed2553;\r\n  font-size: 32px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n.card .input-container {\r\n  position: relative;\r\n  margin: 0 60px 50px;\r\n}\r\n.card .input-container input,\r\n.card .input-container select {\r\n  outline: none;\r\n  z-index: 1;\r\n  position: relative;\r\n  background: none;\r\n  width: 100%;\r\n  height: 60px;\r\n  border: 0;\r\n  color: #212121;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n.card .input-container input:focus ~ label,\r\n.card .input-container select:focus ~ label {\r\n  color: #9d9d9d;\r\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container input:focus ~ .bar:before,\r\n.card .input-container input:focus ~ .bar:after,\r\n.card .input-container select:focus ~ .bar:before,\r\n.card .input-container select:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n.card .input-container input:valid ~ label,\r\n.card .input-container select:valid ~ label {\r\n  color: #9d9d9d;\r\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  color: #757575;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  line-height: 60px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n  z-index: 1;\r\n}\r\n.card .input-container .bar {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: #757575;\r\n  width: 100%;\r\n  height: 1px;\r\n  z-index: 1;\r\n}\r\n.card .input-container .bar:before,\r\n.card .input-container .bar:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background: #ed2553;\r\n  width: 0;\r\n  height: 2px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\n.card .input-container .bar:before {\r\n  left: 50%;\r\n}\r\n.card .input-container .bar:after {\r\n  right: 50%;\r\n}\r\n.card .button-container {\r\n  margin: 0 60px;\r\n  text-align: center;\r\n}\r\n.card .button-container button {\r\n  outline: 0;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: 0;\r\n  width: 240px;\r\n  border: 2px solid #e3e3e3;\r\n  padding: 20px 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .button-container button span {\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #ddd;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .button-container button:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  display: block;\r\n  background: #ed2553;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 100%;\r\n  margin: -15px 0 0 -15px;\r\n  opacity: 0;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .button-container button:hover,\r\n.card .button-container button:active,\r\n.card .button-container button:focus {\r\n  border-color: #ed2553;\r\n}\r\n.card .button-container button:hover span,\r\n.card .button-container button:active span,\r\n.card .button-container button:focus span {\r\n  color: #ed2553;\r\n}\r\n.card .button-container button:active span,\r\n.card .button-container button:focus span {\r\n  color: #ffffff;\r\n}\r\n.card .button-container button:active:before,\r\n.card .button-container button:focus:before {\r\n  opacity: 1;\r\n  -webkit-transform: scale(10);\r\n  transform: scale(10);\r\n}\r\n.card .footer {\r\n  margin: 40px 0 0;\r\n  color: #d3d3d3;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\n.card .footer a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n}\r\n.card .footer a:hover {\r\n  color: #bababa;\r\n}\r\n.card.alt {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  z-index: 10;\r\n  width: 140px;\r\n  height: 140px;\r\n  background: none;\r\n  border-radius: 100%;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  -webkit-transition: 0.3s ease;\r\n  transition: 0.3s ease;\r\n  /* Toggle */\r\n  /* Title */\r\n  /* Input */\r\n  /* Button */\r\n}\r\n.card.alt .toggle {\r\n  position: relative;\r\n  background: #ed2553;\r\n  width: 140px;\r\n  height: 140px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  line-height: 140px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.card.alt .toggle:before {\r\n  content: \"\\f040\";\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transform: translate(0, 0);\r\n  transform: translate(0, 0);\r\n}\r\n.card.alt .title,\r\n.card.alt .input-container,\r\n.card.alt .button-container {\r\n  left: 100px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.card.alt .title {\r\n  position: relative;\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n.card.alt .title .close {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 60px;\r\n  display: inline;\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  font-weight: 400;\r\n}\r\n.card.alt .title .close:before {\r\n  content: \"\\00d7\";\r\n}\r\n.card.alt .input-container input {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ .bar:before,\r\n.card.alt .input-container input:focus ~ .bar:after {\r\n  background: #ffffff;\r\n}\r\n.card.alt .input-container input:valid ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container label {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .input-container .bar {\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .button-container button {\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n.card.alt .button-container button span {\r\n  color: #ed2553;\r\n}\r\n.card.alt .button-container button:hover {\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.card.alt .button-container button:active:before,\r\n.card.alt .button-container button:focus:before {\r\n  display: none;\r\n}\r\n/* Keyframes */\r\n@-webkit-keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active  {\r\n    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;\r\n    background: transparent !important;\r\n}\r\nspan.error {\r\n  color: #ed2553;\r\n  position: absolute;\r\n    bottom: -25px;\r\n    width: 100%;\r\n    display: block;\r\n    left: 0;\r\n}\r\nbutton[disabled] {\r\n  cursor: no-drop !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"card\"></div>\r\n    <div class=\"card\">\r\n      <h1 class=\"title\">Register</h1>\r\n      <form (ngSubmit)=\"onRegister(registerForm)\" #registerForm=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"input-container\">\r\n          <select id=\"salutation\" #salutation =\"ngModel\" ngModel name=\"salutation\" required>\r\n            <option> Mr </option>\r\n            <option> Miss </option>\r\n            <option> Mrs </option>\r\n          </select>\r\n          <label for=\"salutation\">Salutation</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"salutation.touched && salutation.invalid\"> Salutation is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"fName\" #fName =\"ngModel\" ngModel name=\"fName\" required=\"required\" />\r\n          <label for=\"fName\">First Name</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"fName.touched && fName.invalid\"> First Name is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"lName\" #lName =\"ngModel\" ngModel name=\"lName\" required=\"required\" />\r\n          <label for=\"lName\">Family Name</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"lName.touched && lName.invalid\"> Family Name is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"nationality\" #nationality =\"ngModel\" ngModel name=\"nationality\" required=\"required\" />\r\n          <label for=\"nationality\">Nationality</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"nationality.touched && nationality.invalid\"> Nationality is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"idProof\" #idProof =\"ngModel\" ngModel name=\"idProof\" required=\"required\" />\r\n          <label for=\"idProof\">ID Number/Documents</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"idProof.touched && idProof.invalid\"> ID Proof is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"address\" #address =\"ngModel\" ngModel name=\"address\" required=\"required\" />\r\n          <label for=\"address\">Address</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"address.touched && address.invalid\"> Address is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"email\" id=\"email\" #email =\"ngModel\" ngModel name=\"email\" required=\"required\" email/>\r\n          <label for=\"email\">Email</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"email.touched && email.invalid\"> Email Address is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"number\" id=\"telephone\" #telephone =\"ngModel\" ngModel name=\"telephone\" required=\"required\" />\r\n          <label for=\"telephone\">Telephone</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"telephone.touched && telephone.invalid\"> Telephone is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"social\" #social =\"ngModel\" ngModel name=\"social\" required=\"required\" />\r\n          <label for=\"social\">Telegram/Wechat/WhatsApp</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"social.touched && social.invalid\"> Social is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"walletAddress\" #walletAddress =\"ngModel\" ngModel name=\"walletAddress\" required=\"required\" />\r\n          <label for=\"walletAddress\">Wallet Public Address</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"walletAddress.touched && walletAddress.invalid\"> Wallet Address is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"text\" id=\"ellypinID\" #ellypinID =\"ngModel\" ngModel name=\"ellypinID\" required=\"required\" />\r\n          <label for=\"ellypinID\">Ellypin ID</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"ellypinID.touched && ellypinID.invalid\"> Ellypin ID is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <input type=\"password\" id=\"password\" #password =\"ngModel\" ngModel name=\"password\" required=\"required\" />\r\n          <label for=\"password\">Password</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"password.touched && password.invalid\"> Password is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <select id=\"kyc\" required #kyc =\"ngModel\" ngModel name=\"kyc\">\r\n            <option value=\"true\"> Yes </option>\r\n            <option value=\"false\"> No </option>\r\n          </select>\r\n          <label for=\"salutation\">KYC</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"kyc.touched && kyc.invalid\"> KYC is Required </span>\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <select id=\"category\" #category =\"ngModel\" ngModel name=\"category\" required>\r\n            <option> Finance Institution </option>\r\n            <option> Money Changer, remittance business </option>\r\n            <option> Business - commercial enterprise </option>\r\n            <option> Individual - checked </option>\r\n            <option> Individual - unchecked </option>\r\n          </select>\r\n          <label for=\"category\">Category</label>\r\n          <div class=\"bar\"></div>\r\n          <span class=\"error\" *ngIf=\"category.touched && category.invalid\"> Please Select a Category </span>\r\n        </div>\r\n\r\n        <div class=\"button-container\">\r\n          <button [disabled]=\"!registerForm.valid\">\r\n            <span *ngIf=\"!isProcessing\">Register</span>\r\n            <span *ngIf=\"isProcessing\"><i class=\"fa fa-spinner fa-spin\"></i></span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dataService) {
        this.dataService = dataService;
        this.isProcessing = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (formData) {
        var _this = this;
        this.isProcessing = true;
        var payload = {
            "email": formData.value.email,
            "password": formData.value.password,
            "address": formData.value.address,
            "category": formData.value.category,
            "ellypinid": formData.value.ellypinID,
            "familyname": formData.value.lName,
            "firstname": formData.value.fName,
            "idproof": formData.value.idProof,
            "kyc": formData.value.kyc,
            "nationality": formData.value.nationality,
            "salutation": formData.value.salutation,
            "sociallink": formData.value.social,
            "telephone": formData.value.telephone,
            "walletaddr": formData.value.walletAddress
        };
        this.dataService.registerUser(payload).subscribe(function (successRes) {
            if (successRes == "User Already Exist") {
                _this.isProcessing = false;
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: successRes,
                    icon: 'info',
                    confirmButtonText: 'OK'
                });
            }
            else {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: successRes,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(function () {
                    _this.isProcessing = false;
                    formData.reset();
                });
            }
        }, function (error) {
            console.log('no submitted', error);
            _this.isProcessing = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swal2-popup {\r\n    font-size: 1.6rem !important;\r\n\r\n  width: 5em !important;\r\n  height: 5em !important;\r\n  border-width: .25em !important;\r\n  }"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-wrapper\">\r\n    <section>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2 col-sm-3 col-xs-3\">\r\n            <div class=\"logo-wrapper\">\r\n              <a>\r\n\t\t\t\t\t\t\t\t<img src=\"assets/images/logo.png\" alt=\"Ellypin\">\r\n\t\t\t\t\t\t\t</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10 col-sm-9 col-xs-9\" (click)=\"mintToken()\">\r\n            <div class=\"header-title\">\r\n              <h1>Ellypin US$ Pod-Proof-of-Deposit token</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </header>\r\n  <div class=\"body-wrapper\">\r\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px',fullScreenBackdrop:true, animationType:'circleSwish' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"page-title-wrapper\">\r\n            <p>The Ellypin US$ pod represents a sum of US$ kept at ABC Bank in NYC</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <section class=\"sec1\">\r\n      <div class=\"container\">\r\n        <div class=\"row service-menu-wrapper\">\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t<div (click)=\"getAccounts()\" class=\"service-menu-inner\">\r\n\t\t\t\t\t\t\t\t<p>Asset Balance Physical Account</p>\r\n\t\t\t\t\t\t\t\t<span>(Live)</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n          </div>\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <a>\r\n\t\t\t\t\t\t\t<div  class=\"service-menu-inner\">\r\n\t\t\t\t\t\t\t\t<p>Total Token Balance</p>\r\n\t\t\t\t\t\t\t\t<span>{{userBalance || '0'}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n          </div>\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t<div (click)=\"showSymbol()\" class=\"service-menu-inner\">\r\n\t\t\t\t\t\t\t\t<p>Last Traded Price</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n          </div>\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t<div (click)=\"toMyEtherScan()\" class=\"service-menu-inner\">\r\n\t\t\t\t\t\t\t\t<p>My Ether Scan</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"sec2\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"heading\">\r\n              <h3>Interact With Peers</h3>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a  data-toggle=\"modal\" data-target=\"#transfer-pop\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/transfer-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Transfer</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#approve-pop\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/approve-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Approve</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a href=\"javascript:void(0);\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/transfer-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Swap</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a href=\"javascript:void(0);\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\" (click)=\"burnToken()\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/connect-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Connect to Exchanges</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\" data-backdrop=\"static\">\r\n            <div class=\"heading\">\r\n              <h3>Interact With Ellypin</h3>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a data-toggle=\"modal\" data-target=\"#buy-pop\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/buy-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Buy</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n            <div class=\"box-wrapper\" data-backdrop=\"static\">\r\n              <a data-toggle=\"modal\" data-target=\"#redeem-pop\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/redeem-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Redeem</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a (click)=\"multiplePublicKey()\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/secure-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Secure Changes</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n            <div class=\"box-wrapper\">\r\n              <a (click)=\"getRedeemBalance()\">\r\n    \t\t\t\t\t\t<div class=\"box-heading\">\r\n    \t\t\t\t\t\t\t<span class=\"box-icon\">\r\n    \t\t\t\t\t\t\t\t<img src=\"assets/images/advance-icon.png\">\r\n    \t\t\t\t\t\t\t</span>\r\n    \t\t\t\t\t\t\t<h4 class=\"box-heading\">Advanced Functions</h4>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t<div class=\"box-content\">\r\n    \t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    \t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\r\n    \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</a>\r\n            </div>\r\n          </div>\t\r\n        </div>\r\n        <div class=\"row bottom-button-wrapper\">\r\n          <div class=\"col-sm-6\">\r\n            <a href=\"javascript:void(0);\" class=\"btn btn-md btn-primary\">The Ellypin Protocol</a>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <a href=\"home.html\" class=\"btn btn-md btn-primary\">Back to Home Page</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"transfer-pop\" data-backdrop=\"static\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\"  data-dismiss=\"modal\">&times;</button>\r\n          <h2>Transfer From</h2>\r\n          <p>Transfer from one account to another.Account which tokens are transfered has to approve his spending.</p>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <form action=\"\" [formGroup]=\"transferForm\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    To Address*\r\n                    <p>Transfer token to this account</p>\r\n                  </label>\r\n                  <input class=\"form-control\" type=\"text\" name=\"to-add\" [formControl]=\"sendAddr\">\r\n                  <span *ngIf=\"sendAddr.invalid && sendAddr.touched\" style=\"color:red;font-size: 11px\">Enter address to send tokens</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    Number of Tokens*\r\n                    <p>Unique Token Identifier</p>\r\n                  </label>\r\n                  <input class=\"form-control\" type=\"text\" name=\"no-token\" [formControl]=\"token\">\r\n                  <span *ngIf=\"token.invalid && token.touched\" style=\"color:red;font-size: 11px\">Enter tokens to send</span>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" [disabled]=\"transferForm.invalid\" (click)=\"sendContractToken()\">Execute</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"approve-pop\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h2>Approve Token Transfer</h2>\r\n          <p>Allow your certain token to be tranfered by specified “approved\" address</p>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <form action=\"\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    Address to Approve*\r\n                    <p>Address to allow to tranfer token.</p>\r\n                  </label>\r\n                  <input class=\"form-control\" type=\"text\" name=\"app-to-add\" required=\"\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    Number of Tokens*\r\n                    <p>Unique Identifier of Token.</p>\r\n                  </label>\r\n                  <input class=\"form-control\" type=\"text\" name=\"app-no-token\" required=\"\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\">Execute</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"buy-pop\" data-backdrop=\"static\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <form [formGroup]=\"buyForm\">\r\n              \t<h3>Buy</h3>\r\n                <div class=\"form-group\">\r\n\t                <label>\r\n\t                  Number of Tokens*\r\n\t                  <p>Unique Identifier of Token.</p>\r\n\t                </label>\r\n\t                <input class=\"form-control\" type=\"text\" name=\"buy-no-token\" [formControl]=\"tokenToSend\" required=\"\">\r\n                  <span *ngIf=\"tokenToSend.invalid && tokenToSend.touched\" style=\"color:red;font-size: 11px\">Enter tokens to send</span>\r\n                </div>\r\n\t              <h3>Buyer Name</h3>\r\n\t              <div class=\"row\">\r\n\t              \t<div class=\"col-sm-12 col-xs-12\">\r\n              \t\t  <div class=\"form-group\">\r\n\t\t                  <label>Name*</label>\r\n                      <input class=\"form-control\" type=\"text\" [formControl]=\"name\" name=\"buy-name\" required=\"\">\r\n                      <span *ngIf=\"name.invalid && name.touched\" style=\"color:red;font-size: 11px\">Please enter your name</span>\r\n\t\t                </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-xs-12\">\r\n              \t\t  <div class=\"form-group\">\r\n\t\t                  <label>Email Id*</label>\r\n                      <input class=\"form-control\" type=\"text\" [formControl]=\"email\" name=\"buy-name\" required=\"\">\r\n                      <span *ngIf=\"email.invalid && email.touched\" style=\"color:red;font-size: 11px\">Please enter your email id</span>\r\n\t\t                </div>\r\n              \t\t</div>\r\n              \t\t<!-- <div class=\"col-sm-6 col-xs-12\">\r\n              \t\t  <div class=\"form-group\">\r\n\t\t                  <label>Id*</label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" name=\"buy-id\" required=\"\">\r\n\t\t                </div>\r\n              \t\t</div> -->\r\n              \t\t<!-- <div class=\"col-sm-12 col-xs-12\">\r\n              \t\t  <div class=\"form-group\">\r\n                      <label>Public Key*</label>\r\n                      <textarea rows=\"14\" class=\"form-control\" type=\"text\" [formControl]=\"address\" name=\"someText\" placeholder=\"textbox1\"></textarea>\r\n                      <span *ngIf=\"address.invalid && address.touched\" style=\"color:red;font-size: 11px\">Please enter your downloaded public key</span>\r\n                    </div>\r\n              \t\t</div> -->\r\n\t              </div>\r\n\t              <h3>Payment From</h3>\r\n\t              <div class=\"row\">\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Bank Name*</label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"bankName\" name=\"buy-bank-name\" required=\"\">\r\n                      <span *ngIf=\"bankName.invalid && bankName.touched\" style=\"color:red;font-size: 11px\">Please enter your bank name</span>\r\n                    </div>\r\n\t              \t</div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Swift Code*</label>\r\n                      <input class=\"form-control\" type=\"text\" [formControl]=\"swiftCode\" name=\"buy-swift\" required=\"\">\r\n                      <span *ngIf=\"swiftCode.invalid && swiftCode.touched\" style=\"color:red;font-size: 11px\">Please enter your 6-digit swift code</span>\r\n\t\t                </div>\r\n\t              \t</div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Account Number*</label>\r\n                      <input class=\"form-control\" type=\"text\" [formControl]=\"accountNumber\" name=\"buy-acc-no\" required=\"\">\r\n                      <span *ngIf=\"accountNumber.invalid && accountNumber.touched\" style=\"color:red;font-size: 11px\">Please enter your bank account number</span>\r\n\t\t                </div>\r\n\t              \t</div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Account Name*</label>\r\n                      <input class=\"form-control\" type=\"text\" [formControl]=\"accountName\" name=\"buy-acc-name\" required=\"\">\r\n                      <span *ngIf=\"accountName.invalid && accountName.touched\" style=\"color:red;font-size: 11px\">Please enter your bank account name</span>\r\n\t\t                </div>\r\n\t              \t</div>\r\n\t              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" [disabled]=\"buyForm.invalid\" (click)=\"sendRequest()\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"redeem-pop\" data-backdrop=\"static\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <form action=\"\" [formGroup]=\"redeemForm\">\r\n              \t<h3>Redeem</h3>\r\n\t              <div class=\"row\">\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t\t              \t<div class=\"form-group\">\r\n\t\t\t                <label>Number of Tokens*</label>\r\n\t\t\t                <input class=\"form-control\" type=\"text\" [formControl]=\"redeemToken\" name=\"redeem-no-token\" required=\"\">\r\n                      <span style=\"color:red;font-size: 11px\" *ngIf=\"redeemToken.invalid && redeemToken.touched\">Enter Tokens to redeem</span>\r\n                    </div>\r\n\t\t\t            </div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n              \t\t  <div class=\"form-group\">\r\n\t\t                  <label>Name* <span>(If different from beneficiary)</span></label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"redeemName\" name=\"redeem-name\" >\r\n                      <span style=\"color:red;font-size: 11px\" *ngIf=\"redeemName.invalid && redeemName.touched\">Please enter your name</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-xs-12\">\r\n              \t\t  <div class=\"form-group\">\r\n\t\t                  <label>Email<span>(Optional)</span></label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"redeemEmail\" name=\"redeem-name\" >\r\n                      <span style=\"color:red;font-size: 11px\" *ngIf=\"redeemEmail.invalid && redeemEmail.touched\">Please enter your email id</span>\r\n                    </div>\r\n              \t\t</div>\r\n              \t</div>\r\n\t              <h3>Pay To</h3>\r\n\t              <div class=\"row\">\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Bank Name*</label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"redeemBankName\" name=\"redeem-bank-name\" required=\"\">\r\n                      <span *ngIf=\"redeemBankName.invalid && redeemBankName.touched\" style=\"color:red;font-size: 11px\">Enter bank name to send amount</span>\r\n                    </div>\r\n\t              \t</div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Swift Code*</label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"redeemSwiftCode\" name=\"redeem-swift\" required=\"\">\r\n                      <span *ngIf=\"redeemSwiftCode.invalid && redeemSwiftCode.touched\" style=\"color:red;font-size: 11px\">Please enter your 6-digit swift code</span>\r\n                    </div>\r\n\t              \t</div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Account Number*</label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"redeemAccountNumber\" name=\"redeem-acc-no\" required=\"\">\r\n                      <span *ngIf=\"redeemAccountNumber.invalid && redeemAccountNumber.touched\" style=\"color:red;font-size: 11px\">Please enter your bank account number</span>\r\n                    </div>\r\n\t              \t</div>\r\n\t              \t<div class=\"col-sm-6 col-xs-12\">\r\n\t              \t\t<div class=\"form-group\">\r\n\t\t                  <label>Account Name*</label>\r\n\t\t                  <input class=\"form-control\" type=\"text\" [formControl]=\"redeemAccountName\" name=\"redeem-acc-name\" required=\"\">\r\n                      <span *ngIf=\"redeemAccountName.invalid && redeemAccountName.touched\" style=\"color:red;font-size: 11px\">Please enter your bank account name</span>\r\n                    </div>\r\n\t              \t</div>\r\n\t              </div>\r\n                <h3 class=\"redeem-fee clearfix\">Redemption Fee <span>{{fees || '0'}}</span></h3>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" [disabled]=\"redeemForm.invalid\" (click)=\"submitRedeem()\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contract.service */ "./src/services/contract.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedData/message.interface */ "./src/app/sharedData/message.interface.ts");
/* harmony import */ var _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedData/adminPublicKey */ "./src/app/sharedData/adminPublicKey.ts");
/* harmony import */ var _sharedData_adminPrivateKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedData/adminPrivateKey */ "./src/app/sharedData/adminPrivateKey.ts");
/* harmony import */ var _sharedData_custodianPrivateKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedData/custodianPrivateKey */ "./src/app/sharedData/custodianPrivateKey.ts");
/* harmony import */ var _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedData/custodianPublic */ "./src/app/sharedData/custodianPublic.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! openpgp */ "./node_modules/openpgp/dist/openpgp.js");
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(openpgp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(cs, fb, dataService) {
        this.cs = cs;
        this.fb = fb;
        this.dataService = dataService;
        this.loading = false;
        this.ethereumAccount = null;
        this.custodianMessages = [];
        this.adminMessages = [];
        this.fees = null;
        this.buyForm = fb.group({
            'tokenToSend': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[1-9][0-9]*$/)])],
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[a-zA-Z ]{1,40}$/)])],
            // 'address':['', Validators.compose([Validators.required])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'bankName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])],
            'swiftCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('[0-9]*$')])],
            'accountNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('[0-9]*$')])],
            'accountName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[a-zA-Z ]{1,50}$/)])]
        });
        this.tokenToSend = this.buyForm.controls['tokenToSend'];
        this.name = this.buyForm.controls['name'];
        this.email = this.buyForm.controls['email'];
        // this.address = this.buyForm.controls['address'];
        this.bankName = this.buyForm.controls['bankName'];
        this.swiftCode = this.buyForm.controls['swiftCode'];
        this.accountNumber = this.buyForm.controls['accountNumber'];
        this.accountName = this.buyForm.controls['accountName'];
        this.redeemForm = fb.group({
            'redeemToken': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[1-9][0-9]*$/)])],
            'redeemName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[a-zA-Z ]{0,40}$/)])],
            'redeemEmail': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'redeemBankName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[A-Z]+$/i)])],
            'redeemSwiftCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[0-9]*$/)])],
            'redeemAccountNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('[0-9]*$')])],
            'redeemAccountName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[a-zA-Z ]{1,50}$/)])]
        });
        this.redeemToken = this.redeemForm.controls['redeemToken'];
        this.redeemName = this.redeemForm.controls['redeemName'];
        this.redeemEmail = this.redeemForm.controls['redeemEmail'];
        this.redeemBankName = this.redeemForm.controls['redeemBankName'];
        this.redeemSwiftCode = this.redeemForm.controls['redeemSwiftCode'];
        this.redeemAccountNumber = this.redeemForm.controls['redeemAccountNumber'];
        this.redeemAccountName = this.redeemForm.controls['redeemAccountName'];
        this.transferForm = fb.group({
            'token': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern(/^[1-9][0-9]*$/)])],
            'sendAddr': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(60)])]
        });
        this.token = this.transferForm.controls['token'];
        this.sendAddr = this.transferForm.controls['sendAddr'];
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAdminMessages();
        this.getFees();
        this.getAccounts();
        this.intervalId = setInterval(function () {
            _this.getAccounts();
            console.log('Printing every 5 seconds');
        }, 5000);
    };
    ServiceComponent.prototype.getBalance = function () {
        var _this = this;
        this.cs.getUserBalance().then(function (balance) {
            _this.balance = balance;
            _this.userBalance = _this.balance.c;
        });
    };
    ServiceComponent.prototype.getAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.cs.getAccount().then(function (accounts) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.ethereumAccount = accounts;
                                if (!(this.ethereumAccount != null)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.getBalance()];
                            case 1:
                                _a.sent();
                                if (this.intervalId) {
                                    clearInterval(this.intervalId);
                                    // console.log('Interval Id:',this.intervalId);
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    ServiceComponent.prototype.getName = function () {
        this.cs.getName().then(function (name) {
            console.log(name);
        });
    };
    ServiceComponent.prototype.showSymbol = function () {
        this.cs.getSymbol().then(function (symbol) {
            console.log(symbol);
        });
    };
    // sendToken(){
    //   this.cs.transfer(this.sendAddr, parseInt(this.token)).then(
    //     data => {
    //       console.log(data);
    //     }
    //   )
    //   .catch(
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
    // }
    // sendEther(){
    //   this.cs.sendEther(this.sendAddr, parseInt(this.token))
    // }
    ServiceComponent.prototype.sendContractToken = function () {
        if (this.transferForm.valid) {
            console.log('form is valid');
            this.cs.sendContractToken(this.transferForm.value.sendAddr, parseInt(this.transferForm.value.token));
        }
    };
    ServiceComponent.prototype.encrypt = function (message, encryptionFor) {
        return __awaiter(this, void 0, void 0, function () {
            var pubkey, encryptedData, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        openpgp__WEBPACK_IMPORTED_MODULE_10__["initWorker"]({ path: 'node_modules/openpgp/dist/openpgp.worker.min.js' });
                        console.log('In encrypt');
                        if (encryptionFor === 'admin') {
                            pubkey = _sharedData_adminPublicKey__WEBPACK_IMPORTED_MODULE_4__["default"].split("\n").join('\n');
                        }
                        else {
                            pubkey = _sharedData_custodianPublic__WEBPACK_IMPORTED_MODULE_7__["default"].split("\n").join('\n');
                        }
                        encryptedData = null;
                        _a = {
                            message: openpgp__WEBPACK_IMPORTED_MODULE_10__["message"].fromText(message)
                        };
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["key"].readArmored(pubkey)];
                    case 1:
                        options = (_a.publicKeys = (_b.sent()).keys,
                            _a);
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["encrypt"](options).then(function (ciphertext) {
                                var encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
                                return encrypted;
                            })];
                    case 2:
                        encryptedData = _b.sent();
                        return [2 /*return*/, encryptedData];
                }
            });
        });
    };
    ServiceComponent.prototype.decrypt = function (encryptedData, role) {
        return __awaiter(this, void 0, void 0, function () {
            var privkey, passphrase, privKeyObj, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (role == 'admin') {
                            privkey = _sharedData_adminPrivateKey__WEBPACK_IMPORTED_MODULE_5__["default"].replace(/\r/, "").split("\n").join('\n');
                        }
                        else {
                            privkey = _sharedData_custodianPrivateKey__WEBPACK_IMPORTED_MODULE_6__["default"].replace(/\r/, "").split("\n").join('\n');
                        }
                        passphrase = "\n    super long and hard to guess secret\n    ";
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["key"].readArmored(privkey)];
                    case 1:
                        privKeyObj = (_b.sent()).keys[0];
                        // const { workers } = openpgp.getWorker();
                        return [4 /*yield*/, privKeyObj.decrypt('super long and hard to guess secret')];
                    case 2:
                        // const { workers } = openpgp.getWorker();
                        _b.sent();
                        _a = {};
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["message"].readArmored(encryptedData)];
                    case 3:
                        options = (_a.message = _b.sent(),
                            // publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
                            _a.privateKeys = [privKeyObj] // for decryption
                        ,
                            _a);
                        openpgp__WEBPACK_IMPORTED_MODULE_10__["decrypt"](options).then(function (plaintext) {
                            // console.log(JSON.parse(plaintext.data.toString()))
                            // return plaintext.data // 'Hello, World!'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.generateKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, privkey, pubkey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            userIds: [{ name: 'asdasd', email: 'assad@mial.com' }],
                            numBits: 4096,
                            passphrase: 'super long and hard to guess secret' // protects the private key
                        };
                        this.loading = true;
                        return [4 /*yield*/, openpgp__WEBPACK_IMPORTED_MODULE_10__["generateKey"](options).then(function (key) {
                                privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
                                // console.log('PrivateKey:',privkey);
                                pubkey = key.publicKeyArmored;
                                // console.log('PublicKey:',pubkey);
                                var revocationCertificate = key.revocationCertificate; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
                            })];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.testingHook = function () {
        this.dataService.testHook().subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ServiceComponent.prototype.sendRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender, messageToSend, message_object, admin_message, custodian_message, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.buyForm.valid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cs.getAccount().then(function (accounts) {
                                console.log(accounts);
                                return accounts;
                            })];
                    case 1:
                        sender = _c.sent();
                        messageToSend = {};
                        messageToSend.parentMessage = null;
                        messageToSend.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].BUY;
                        messageToSend.time = new Date().getTime();
                        messageToSend.email = this.buyForm.value.email;
                        messageToSend.publicKey = sender;
                        message_object = Object.assign({}, this.buyForm.value);
                        message_object.publicKey = sender;
                        delete message_object['email'];
                        admin_message = Object.assign({}, messageToSend);
                        custodian_message = Object.assign({}, messageToSend);
                        _a = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'custodian')];
                    case 2:
                        _a.message = _c.sent();
                        _b = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'admin')];
                    case 3:
                        _b.message = _c.sent();
                        // console.log('Admin_Message:',admin_message);
                        // console.log('Custodian_message:',custodian_message);
                        this.loading = true;
                        this.dataService.sendMessage(admin_message, custodian_message).subscribe(function (data) {
                            console.log(data);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Request Created Successfully');
                            _this.buyForm.reset();
                        }, function (error) {
                            console.log(error);
                        }, function () {
                            _this.loading = false;
                        });
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.downloadPdf = function (pubkey, privkey) {
        var doc1 = new jspdf__WEBPACK_IMPORTED_MODULE_9__();
        doc1.setFontSize(8);
        doc1.text("Public Key:\n " + pubkey, 10, 10);
        doc1.save('PublicKey.pdf');
        var doc2 = new jspdf__WEBPACK_IMPORTED_MODULE_9__();
        doc2.setFontSize(6);
        doc2.text("Private Key:\n " + privkey, 10, 10);
        doc2.save('PrivateKey.pdf');
    };
    ServiceComponent.prototype.toMyEtherScan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cs.getAccount().then(function (accounts) {
                            // console.log(accounts);
                            return accounts;
                        })];
                    case 1:
                        sender = _a.sent();
                        window.open("https://ropsten.etherscan.io/address/" + sender + "#tokentxns", "_blank");
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.getFees = function () {
        var _this = this;
        this.cs.getFees().then(function (data) {
            // console.log(data);
            _this.fees = data.c[0];
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ServiceComponent.prototype.submitRedeem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender, messageToSend, message_object, admin_message, custodian_message, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.redeemForm.valid) return [3 /*break*/, 5];
                        console.log(JSON.stringify(this.redeemForm.value));
                        if (!(parseInt(this.redeemForm.value.redeemToken) + this.fees > this.userBalance)) return [3 /*break*/, 1];
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Insufficient no. of tokens');
                        console.log(parseInt(this.redeemForm.value.redeemToken) + this.fees);
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.cs.getAccount().then(function (accounts) {
                            console.log(accounts);
                            return accounts;
                        })];
                    case 2:
                        sender = _c.sent();
                        messageToSend = {};
                        messageToSend.parentMessage = null;
                        messageToSend.type = _sharedData_message_interface__WEBPACK_IMPORTED_MODULE_3__["Message_Type"].REDEEM;
                        messageToSend.time = new Date().getTime();
                        messageToSend.email = this.redeemForm.value.redeemEmail;
                        messageToSend.publicKey = sender;
                        message_object = Object.assign({}, this.redeemForm.value);
                        message_object.publicKey = sender;
                        delete message_object['email'];
                        admin_message = Object.assign({}, messageToSend);
                        custodian_message = Object.assign({}, messageToSend);
                        _a = custodian_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'custodian')];
                    case 3:
                        _a.message = _c.sent();
                        _b = admin_message;
                        return [4 /*yield*/, this.encrypt(JSON.stringify(message_object), 'admin')];
                    case 4:
                        _b.message = _c.sent();
                        console.log('Admin_Message:', admin_message);
                        console.log('Custodian_message:', custodian_message);
                        this.loading = true;
                        this.dataService.redeemToken(admin_message, custodian_message).subscribe(function (data) {
                            console.log(data);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Request Created Successfully');
                            _this.burnToken(_this.redeemForm.value.redeemToken);
                            _this.redeemForm.reset();
                        }, function (error) {
                            console.log(error);
                        }, function () {
                            _this.loading = false;
                        });
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.getAdminMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.getMessages('ADMIN').subscribe(function (data) {
                            // console.log('ADMIN MESSAGE:',data);
                            _this.adminMessages = data;
                            if (_this.adminMessages.length > 0) {
                                _this.decrypt(_this.adminMessages[0].message, 'admin');
                            }
                            _this.getCustodianMessage();
                        }, function (error) {
                            console.log(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.getCustodianMessage = function () {
        var _this = this;
        this.dataService.getMessages('CUSTODIAN').subscribe(function (data) {
            // console.log('CUSTODIAN MESSAGE:',data);
            _this.custodianMessages = data;
            if (_this.custodianMessages.length > 0) {
                _this.decrypt(_this.custodianMessages[0].message, 'custodian');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ServiceComponent.prototype.burnToken = function (redeemAmount) {
        this.cs.burnToken(redeemAmount);
    };
    ServiceComponent.prototype.mintToken = function () {
        console.log('In mintToken');
        var accountAdmin = '0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834';
        if (this.ethereumAccount.toUpperCase() == accountAdmin.toUpperCase()) {
            this.cs.mintToken('0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834', 500);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                type: 'error',
                title: 'Oops...',
                text: 'You are not the admin'
            });
        }
    };
    ServiceComponent.prototype.getRedeemBalance = function () {
        this.cs.getRedeemBalance().then(function (redeemBalance) {
            console.log(redeemBalance.c[0]);
        });
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/sharedData/adminPrivateKey.ts":
/*!***********************************************!*\
  !*** ./src/app/sharedData/adminPrivateKey.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var adminPrivateKey = "-----BEGIN PGP PRIVATE KEY BLOCK-----\nVersion: OpenPGP.js v4.4.1\nComment: https://openpgpjs.org\n\n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\n3p6Ln9yN0806\n=zsPy\n-----END PGP PRIVATE KEY BLOCK-----";
/* harmony default export */ __webpack_exports__["default"] = (adminPrivateKey);


/***/ }),

/***/ "./src/app/sharedData/adminPublicKey.ts":
/*!**********************************************!*\
  !*** ./src/app/sharedData/adminPublicKey.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var adminPublicKey = "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: OpenPGP.js v4.4.1\nComment: https://openpgpjs.org\n\n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\n=A936\n-----END PGP PUBLIC KEY BLOCK-----";
/* harmony default export */ __webpack_exports__["default"] = (adminPublicKey);


/***/ }),

/***/ "./src/app/sharedData/custodianPrivateKey.ts":
/*!***************************************************!*\
  !*** ./src/app/sharedData/custodianPrivateKey.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var custodianPrivateKey = "-----BEGIN PGP PRIVATE KEY BLOCK-----\nVersion: OpenPGP.js v4.4.1\nComment: https://openpgpjs.org\n\n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\nVoa43FeN5Jil\n=lwYI\n-----END PGP PRIVATE KEY BLOCK-----";
/* harmony default export */ __webpack_exports__["default"] = (custodianPrivateKey);


/***/ }),

/***/ "./src/app/sharedData/custodianPublic.ts":
/*!***********************************************!*\
  !*** ./src/app/sharedData/custodianPublic.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var custodianPublicKey = "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: OpenPGP.js v4.4.1\nComment: https://openpgpjs.org\n\n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\n=aK43\n-----END PGP PUBLIC KEY BLOCK-----";
/* harmony default export */ __webpack_exports__["default"] = (custodianPublicKey);


/***/ }),

/***/ "./src/app/sharedData/message.interface.ts":
/*!*************************************************!*\
  !*** ./src/app/sharedData/message.interface.ts ***!
  \*************************************************/
/*! exports provided: Message_Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message_Type", function() { return Message_Type; });
var Message_Type;
(function (Message_Type) {
    Message_Type["BUY"] = "BUY";
    Message_Type["KYC"] = "KYC";
    Message_Type["SEND_TOKEN_REQUEST"] = "SEND_TOKEN_REQUEST";
    Message_Type["BURN_TOKEN_REQUEST"] = "BURN_TOKEN_REQUEST";
    Message_Type["REDEEM"] = "REDEEM";
    Message_Type["SEND_TOKEN_ACKNOWLEDGE"] = "SEND_TOKEN_ACKNOWLEDGE";
    Message_Type["BURN_TOKEN_ACKNOWLEDGE"] = "BURN_TOKEN_ACKNOWLEDGE";
})(Message_Type || (Message_Type = {}));


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-link{\r\ndisplay:none}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"body-inner\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\">\r\n            <aside class=\"left-part\">\r\n              <div class=\"logo-wrapper\">\r\n                <a>\r\n                  <img src=\"assets/images/logo.png\" alt=\"Ellypin\">\r\n                  <div class=\"logo-inner\">\r\n                    <h4>Ellypin</h4>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n              <div class=\"left-menu-wrapper\">\r\n                <nav class=\"navbar\">\r\n                  <ul class=\"nav navbar-nav\">\r\n                    <li><a routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a></li>\r\n                    <li><a routerLink=\"/services/pod\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">Pod</a></li>\r\n                    <li><a routerLink=\"/services/pom\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">Pom</a></li>\r\n                    <li><a routerLink='/faq'>Faq</a></li>\r\n                    <li><a routerLink='/contact'>Contact</a></li>\r\n                  </ul>\r\n                </nav>\r\n              </div>\r\n            </aside>\r\n          </div>\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.ngDoCheck = function () {
        if (this.currentUrl == "/services") {
            this.router.navigate(['/home']);
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/terms/terms.component.css":
/*!*******************************************!*\
  !*** ./src/app/terms/terms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundColor{\r\n    background: #2f5496;\r\n}\r\n\r\n.tabColor{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper home-body backgroundColor\">\r\n  <section class=\"terms-wrapper\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"section-heading tabColor\">\r\n            <h2>Terms And Condition</h2>\r\n          </div>\r\n          <div class=\"section-content\">\r\n            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n              feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n              neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n              t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n              amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n              sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n            </p>\r\n\r\n            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n            </p>\r\n            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n              feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n              neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n              t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n              amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n              sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n  </section>\t\r\n</div>"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/whitepaper/whitepaper.component.css":
/*!*****************************************************!*\
  !*** ./src/app/whitepaper/whitepaper.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundColor{\r\n    background: #2f5496;\r\n}\r\n\r\n.tabColor{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/whitepaper/whitepaper.component.html":
/*!******************************************************!*\
  !*** ./src/app/whitepaper/whitepaper.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper home-body backgroundColor\">\r\n    <section class=\"terms-wrapper\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"section-heading tabColor\">\r\n              <h2>WhitePaper</h2>\r\n            </div>\r\n            <div class=\"section-content\">\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n  \r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                  neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                  t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                  amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                  sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \r\n                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. \r\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, \r\n                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \r\n                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, \r\n                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, \r\n                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \r\n                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem\r\n                neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio \r\n                t ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit\r\n                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec\r\n                sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc\r\n              </p>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n    </section>\t\r\n  </div>"

/***/ }),

/***/ "./src/app/whitepaper/whitepaper.component.ts":
/*!****************************************************!*\
  !*** ./src/app/whitepaper/whitepaper.component.ts ***!
  \****************************************************/
/*! exports provided: WhitepaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitepaperComponent", function() { return WhitepaperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhitepaperComponent = /** @class */ (function () {
    function WhitepaperComponent() {
    }
    WhitepaperComponent.prototype.ngOnInit = function () {
    };
    WhitepaperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whitepaper',
            template: __webpack_require__(/*! ./whitepaper.component.html */ "./src/app/whitepaper/whitepaper.component.html"),
            styles: [__webpack_require__(/*! ./whitepaper.component.css */ "./src/app/whitepaper/whitepaper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhitepaperComponent);
    return WhitepaperComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/contract.service.ts":
/*!******************************************!*\
  !*** ./src/services/contract.service.ts ***!
  \******************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { StitchClientFactory } from 'mongodb-stitch';

var tokenAbi = __webpack_require__(/*! ../tokenContract.json */ "./src/tokenContract.json");
var ContractService = /** @class */ (function () {
    function ContractService(httpClient) {
        this.httpClient = httpClient;
        // clientPromise = StitchClientFactory.create('ifakebook-eqvwi');
        // client;
        // db;
        this._account = null;
        this._tokenContractAddress = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_2__(window.web3.currentProvider);
            window.ethereum.enable();
            // let account = this.getAccount();
            this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
            // if (this._web3.version.network !== '4') {
            //   alert('Please connect to the Rinkeby network');
            // }
        }
        else {
            alert('Please install MetaMask extension for your browser');
        }
    }
    ContractService.prototype.setHeader = function () {
        // console.log(localStorage.getItem('accessToken'), "inside set header if");
        if (localStorage.getItem('accessToken')) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            });
            return { headers: headers };
        }
        else {
            // console.log("inside set header else");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            return { headers: headers };
        }
    };
    ContractService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        alert('There was an error fetching your accounts.');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        // alert(
                                        //   'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
                                        // );
                                        resolve(null);
                                        // return null;
                                    }
                                    // console.log(accs[0]);
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        this._web3.eth.defaultAccount = this._account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    ContractService.prototype.getUserBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!address) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        account = address;
                        _a.label = 3;
                    case 3: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var _web3 = _this._web3;
                            _this._tokenContract.balanceOf.call(account, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                // console.log(result);
                                resolve(result);
                            });
                        })];
                }
            });
        });
    };
    ContractService.prototype.getName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.name.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.getSymbol = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.symbol.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.getDecimal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.decimals.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.getTotalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.totalSupply.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.getTotalBurn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.totalBurn.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.transfer = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var account, transactionParameters;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        transactionParameters = {
                            from: account,
                            to: '0x2784a70ae2f84f40007f5d6518e20adff5c82d98',
                            value: token.toString(),
                        };
                        console.log('TransactionParameter:', transactionParameters);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                window.ethereum.sendAsync({
                                    method: 'eth_sendTransaction',
                                    params: [transactionParameters],
                                    from: account
                                }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    console.log(result);
                                });
                                // this._tokenContract.transfer.call(address, token,{from:account, gas:1234},  (err, result) => {
                                //   if(err != null) {
                                //     reject(err);
                                //   }
                                //   console.log(result);
                                //   resolve(result);
                                // });
                            })];
                }
            });
        });
    };
    ContractService.prototype.sendEther = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var account, payload, send;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        payload = { from: account, to: address, value: this._web3.toWei(token, "ether") };
                        console.log('Payload:', payload);
                        send = this._web3.eth.sendTransaction(payload, function (err, result) {
                            if (err != null) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractService.prototype.setTransferFees = function (fees) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._tokenContract.setTransferFee(fees, function (err, result) {
                if (err != null) {
                    reject(err);
                }
                // console.log(result);
                resolve(result);
            });
        });
    };
    ContractService.prototype.setRedeemFees = function (fees) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._tokenContract.setFee(fees, function (err, result) {
                if (err != null) {
                    reject(err);
                }
                // console.log(result);
                resolve(result);
            });
        });
    };
    ContractService.prototype.setBuyFees = function (fees) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.setBuyFee(fees, function (err, result) {
                            if (err != null) {
                                console.log(err);
                                reject(err);
                            }
                            console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.getGasPrice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._web3.eth.getGasPrice(function (error, result) {
                if (!error) {
                    console.log("price is:");
                    console.log(result);
                    resolve(Number(result));
                }
                else {
                    console.log(error);
                    reject(Number(0));
                }
            });
        });
    };
    // getEstimateGas(orderId: string, message: string){
    //   return new Promise((resolve, reject) => {
    //      this._tokenContract.setBuyFee.estimateGas(orderId, message,{from: this._web3.eth.accounts[0], value:this._web3.toWei(0.1, "ether")}, function(error, result){
    //        if(!error){
    //          console.log("estimate gas is:");
    //          console.log(result);
    //          resolve(Number(result));
    //        }
    //        else{
    //         console.log(error);
    //         reject(Number(0));
    //       }
    //     })
    //   })
    // }
    ContractService.prototype.getAllFees = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fee = {};
            _this._tokenContract.getTransferFee.call(function (err, f1) {
                if (err != null) {
                    reject(err);
                }
                // console.log(result);
                _this._tokenContract.getFee.call(function (err, f2) {
                    if (err != null) {
                        reject(err);
                    }
                    _this._tokenContract.getBuyFee.call(function (err, f3) {
                        if (err != null) {
                            reject(err);
                        }
                        resolve({ transfer: f1, redeem: f2, buy: f3 });
                    });
                });
            });
        });
    };
    ContractService.prototype.mintToken = function (address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Address:', address, 'Amount:', amount);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.mint(address, amount, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.sendContractToken = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var account, payload, send;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        payload = { to: address, value: token };
                        console.log('Payload:', payload);
                        send = this._tokenContract.transfer(address, token, function (err, result) {
                            if (err != null) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractService.prototype.burnToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.redeem(token, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.getRedeemBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.getRedeemBalance(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.getFees = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.getFee.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.burnTokenFrom = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('address:', address, 'token:', token);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.burnFrom(address, token, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/services/custodian.service.ts":
/*!*******************************************!*\
  !*** ./src/services/custodian.service.ts ***!
  \*******************************************/
/*! exports provided: CustodianService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustodianService", function() { return CustodianService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { StitchClientFactory } from 'mongodb-stitch';

var tokenAbi = __webpack_require__(/*! ../tokenContract.json */ "./src/tokenContract.json");
var CustodianService = /** @class */ (function () {
    function CustodianService(httpClient) {
        //   this.clientPromise.then(_client => {
        //     this.client = _client;
        //     this.db = this.client.service('mongodb', 'mongodb-atlas').db('ifakebook_db');
        // });
        this.httpClient = httpClient;
        // clientPromise = StitchClientFactory.create('ifakebook-eqvwi');
        // client;
        // db;
        this._account = null;
        this._tokenContractAddress = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
        // Use Mist/MetaMask's provider
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_2__(window.web3.currentProvider || "https://ropsten.infura.io/v3/d251bbea9b4e47ebb10ea863b6d8fdd3");
        //   window.ethereum.enable(); 
        this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
        // if (this._web3.version.network !== '4') {
        //   alert('Please connect to the Rinkeby network');
        // }
    }
    CustodianService.prototype.setHeader = function () {
        // console.log(localStorage.getItem('accessToken'), "inside set header if");
        if (localStorage.getItem('accessToken')) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            });
            return { headers: headers };
        }
        else {
            // console.log("inside set header else");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            return { headers: headers };
        }
    };
    CustodianService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        alert('There was an error fetching your accounts.');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        // alert(
                                        //   'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
                                        // );
                                        resolve(null);
                                        // return null;
                                    }
                                    // console.log(accs[0]);
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        this._web3.eth.defaultAccount = this._account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    CustodianService.prototype.getUserBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // let account = await this.getAccount();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.balanceOf.call(address, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.getTotalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.totalSupply.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.getTotalBurn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.totalBurn.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.getName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.name.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.getSymbol = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.symbol.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.getDecimal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.decimals.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.transfer = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var account, transactionParameters;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        transactionParameters = {
                            from: account,
                            to: '0x2784a70ae2f84f40007f5d6518e20adff5c82d98',
                            value: token.toString(),
                        };
                        console.log('TransactionParameter:', transactionParameters);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                window.ethereum.sendAsync({
                                    method: 'eth_sendTransaction',
                                    params: [transactionParameters],
                                    from: account
                                }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    console.log(result);
                                });
                                // this._tokenContract.transfer.call(address, token,{from:account, gas:1234},  (err, result) => {
                                //   if(err != null) {
                                //     reject(err);
                                //   }
                                //   console.log(result);
                                //   resolve(result);
                                // });
                            })];
                }
            });
        });
    };
    CustodianService.prototype.sendEther = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var account, payload, send;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        payload = { from: account, to: address, value: this._web3.toWei(token, "ether") };
                        console.log('Payload:', payload);
                        send = this._web3.eth.sendTransaction(payload, function (err, result) {
                            if (err != null) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustodianService.prototype.mintToken = function (address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Address:', address, 'Amount:', amount);
                this._tokenContract.mint(address, amount, function (err, result) {
                    if (err != null) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    CustodianService.prototype.sendContractToken = function (address, token) {
        return __awaiter(this, void 0, void 0, function () {
            var account, payload, send;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        payload = { to: address, value: token };
                        console.log('Payload:', payload);
                        send = this._tokenContract.transfer(address, token, function (err, result) {
                            if (err != null) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustodianService.prototype.burnToken = function (token) {
        this._tokenContract.redeem(token, function (err, result) {
            if (err != null) {
                console.log(err);
            }
            else {
                console.log(result);
            }
        });
    };
    CustodianService.prototype.getRedeemBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.getRedeemBalance(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    CustodianService.prototype.getFees = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.getFee.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            // console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CustodianService.prototype.getAllFees = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fee = {};
            _this._tokenContract.getTransferFee.call(function (err, f1) {
                if (err != null) {
                    reject(err);
                }
                // console.log(result);
                _this._tokenContract.getFee.call(function (err, f2) {
                    if (err != null) {
                        reject(err);
                    }
                    _this._tokenContract.getBuyFee.call(function (err, f3) {
                        if (err != null) {
                            reject(err);
                        }
                        resolve({ transfer: f1, redeem: f2, buy: f3 });
                    });
                });
            });
        });
    };
    CustodianService.prototype.sendMessage = function (admin_payload, custodian_payload, _id) {
        var Data;
        if (_id) {
            Data = {
                _id: _id,
                custodianMessage: custodian_payload,
                adminMessage: admin_payload
            };
        }
        else {
            Data = {
                custodianMessage: custodian_payload,
                adminMessage: admin_payload
            };
        }
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage', Data);
    };
    CustodianService.prototype.redeemToken = function (admin_payload, custodian_payload) {
        var Data = {
            custodianMessage: custodian_payload,
            adminMessage: admin_payload
        };
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage', Data);
    };
    CustodianService.prototype.getMessages = function (role) {
        return this.httpClient.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/getMessage?role=" + role + "&messageType=receive");
    };
    CustodianService.prototype.getCustomerData = function () {
        return this.httpClient.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/ellypinData");
    };
    CustodianService.prototype.login = function (payload) {
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/login', payload);
    };
    CustodianService.prototype.saveFees = function (payload) {
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/post_metadata', payload);
    };
    CustodianService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustodianService);
    return CustodianService;
}());



/***/ }),

/***/ "./src/services/data.service.ts":
/*!**************************************!*\
  !*** ./src/services/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
    }
    ;
    DataService.prototype.testHook = function () {
        return this.httpClient.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/webhook0');
    };
    DataService.prototype.sendMessage = function (admin_payload, custodian_payload, _id) {
        var Data;
        if (_id) {
            Data = {
                _id: _id,
                custodianMessage: custodian_payload,
                adminMessage: admin_payload
            };
        }
        else {
            Data = {
                custodianMessage: custodian_payload,
                adminMessage: admin_payload
            };
        }
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage', Data);
    };
    DataService.prototype.redeemToken = function (admin_payload, custodian_payload) {
        var Data = {
            custodianMessage: custodian_payload,
            adminMessage: admin_payload
        };
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage', Data);
    };
    DataService.prototype.getMessages = function (role) {
        return this.httpClient.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/getMessage?role=" + role + "&messageType=receive");
    };
    DataService.prototype.getCustomerData = function () {
        return this.httpClient.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/ellypinData");
    };
    DataService.prototype.getAllFees = function () {
        return this.httpClient.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/metadata");
    };
    DataService.prototype.login = function (payload) {
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/login', payload);
    };
    DataService.prototype.saveFees = function (payload) {
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/post_metadata', payload);
    };
    /* registration API */
    DataService.prototype.registerUser = function (data) {
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/adduser', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    /* Login API */
    DataService.prototype.loginUser = function (data) {
        return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/loginUser', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/tokenContract.json":
/*!********************************!*\
  !*** ./src/tokenContract.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, default */
/***/ (function(module) {

module.exports = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getRedeemBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setTransferFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTransferFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setBuyFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBuyFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBurn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\my work\angular\ellypin2\Ellypin\EllypinCustomer\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map