(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-custom-food-template-custom-food-template-module~pages-macro-macro-module~pages-profil~d03a7b57"],{

/***/ "./src/app/components/nutrition/add-food/add-food.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/nutrition/add-food/add-food.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h5 class=\"title\">\r\n    Add Food\r\n    <ion-button float-right size=\"small\" fill=\"clear\" class=\"close\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n</header>\r\n\r\n\r\n<!-- Add food section -->\r\n<section class=\"add-food\" *ngIf=\"!showFoodManagement && !showCustomFoodManagement\">\r\n  <div class=\"search\">\r\n    <ion-searchbar mode=\"md\" [showCancelButton]=\"false\" placeholder=\"Search food...\" debounce=\"500\"\r\n                   (ionChange)=\"searchContentChange()\"\r\n                   animated\r\n                   (ionFocus)=\"searchFocused = true\"\r\n                   (ionBlur)=\"searchFocused = false\"\r\n                   [(ngModel)]=\"searchValue\" [class.searching]=\"searchValue\">\r\n    </ion-searchbar>\r\n    <ion-button *ngIf=\"platform.is('cordova')\" fill=\"solid\" color=\"dark\" class=\"barcode-button\"\r\n                [class.in-android]=\"platform.is('android')\" (click)=\"scanBarcode()\">\r\n      <ion-icon [slot]=\"!searchFocused ? 'end' : 'icon-only'\" name=\"barcode\"></ion-icon>\r\n      <span *ngIf=\"!searchFocused\">Scan</span>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"add-food\" *ngIf=\"!hasSearchResults\">\r\n    <ion-button expand=\"full\" fill=\"clear\" (click)=\"showFoodManagement = true\">Add your own food</ion-button>\r\n  </div>\r\n  <div class=\"search-listing\" *ngIf=\"hasSearchResults\">\r\n    <ul>\r\n      <ng-container *ngFor=\"let result of searchResults.totalFoodList; let i = index\">\r\n        <ng-container *ngIf=\"(i > 9 && showMore) || (i <= 9)\">\r\n          <ng-container [ngSwitch]=\"result.type\">\r\n            <li class=\"custom-food meal-template\" *ngSwitchCase=\"'meal'\" tappable\r\n                (click)=\"addMealTemplate(result.data)\">\r\n              {{ result.data.name }}\r\n              <ion-icon name=\"restaurant\"></ion-icon>\r\n              <span class=\"category\">\r\n                <span\r\n                  *ngFor=\"let item of result.data.items; let last = last\">{{ item.name }}{{ last ? '' : ', ' }}</span>\r\n              </span>\r\n            </li>\r\n            <li class=\"custom-food\" *ngSwitchCase=\"'custom'\" tappable (click)=\"openCustomFood(result.data)\">\r\n              {{ result.data.name }}\r\n              <span class=\"category\"><b><i>Custom,</i></b> {{result.data.calories}}\r\n                calories, {{result.data.serving_amount}} {{result.data.serving_unit}}<br></span>\r\n            </li>\r\n            <li class=\"common-food\" *ngSwitchCase=\"'common'\" tappable (click)=\"openCommonFood(result.data)\">\r\n              {{ result.data.food_name }}<br>\r\n              <span class=\"category\">Common</span>\r\n            </li>\r\n            <li class=\"branded-food\" *ngSwitchCase=\"'branded'\" tappable (click)=\"openBrandedFood(result.data)\">\r\n              {{ result.data.food_name }}<br>\r\n              <span class=\"category\"><b><i>{{ result.data.brand_name }}</i></b>, {{ result.data.nf_calories.toFixed(0)}}\r\n                calories, {{ formatNumber(result.data.serving_qty) }} {{ result.data.serving_unit}}</span>\r\n            </li>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n      <li>\r\n        <button *ngIf=\"searchResults.totalFoodList.length > 10\" (click)=\"showMore = !showMore\">\r\n          <span class=\"title\">Show {{ showMore ? 'Less' : 'More'}}  </span> <br/>\r\n          <span class=\"tag\">Showing {{ showMore ? searchResults.totalFoodList.length : 10 }}\r\n            of {{ searchResults.totalFoodList.length }}\r\n            results</span>\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!--no recent or around this time result-->\r\n  <div class=\"get-started\" *ngIf=\"!hasSearchResults && (recentItems.length === 0 && aroundThisTimeItems.length === 0)\">\r\n    <h6 class=\"title\">Get Started</h6>\r\n    <span>Search our database of foods or add your own by clicking the button above</span>\r\n  </div>\r\n  <!--end no recent or around this time result-->\r\n\r\n  <!--around this time and recent result-->\r\n  <div class=\"other-listing\" *ngIf=\"!hasSearchResults && (recentItems.length > 0 || aroundThisTimeItems.length > 0)\">\r\n    <!--around this time-->\r\n    <div class=\"around-this-time\">\r\n      <h6 class=\"title\">Around This Time</h6>\r\n      <ul>\r\n        <ng-container *ngFor=\"let foodItem of aroundThisTimeItems; let i = index;\">\r\n          <ng-container *ngIf=\"i <= 2 || (i > 2 && showMoreAroundThisTime)\">\r\n            <ng-container [ngSwitch]=\"foodItem.type\">\r\n              <li tappable (click)=\"openRecentFood(foodItem.data)\" *ngSwitchCase=\"'tracked-item'\">\r\n                <span class=\"food-name\">{{ foodItem.data.name }}</span>\r\n                <br>\r\n                <span class=\"food-quantity\">{{foodItem.data.serving_size.calories}}\r\n                  calories {{ foodItem.data.serving_size.amount }} {{ foodItem.data.serving_size.unit }}\r\n            </span>\r\n              </li>\r\n              <li tappable class=\"meal-template\" (click)=\"addMealTemplate(foodItem.data)\" *ngSwitchCase=\"'meal'\">\r\n                <span>{{ foodItem.data.name }}\r\n                  <ion-icon name=\"restaurant\"></ion-icon></span>\r\n                <span class=\"food-quantity\">\r\n                <span\r\n                  *ngFor=\"let item of foodItem.data.items; let last = last\">{{ item.name }}{{ last ? '' : ', ' }}</span>\r\n              </span>\r\n              </li>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ul>\r\n      <button (click)=\"showMoreAroundThisTime = !showMoreAroundThisTime\" *ngIf=\"aroundThisTimeItems.length > 3\">\r\n        <span class=\"title\">Show {{ showMoreAroundThisTime ? 'Less' : 'More'}} </span> <br/>\r\n        <span class=\"tag\"> Showing {{ showMoreAroundThisTime ? aroundThisTimeItems.length : 3 }}\r\n          of {{ aroundThisTimeItems.length }}\r\n          results</span>\r\n      </button>\r\n    </div>\r\n    <!--end around this time-->\r\n    <!--recent result-->\r\n    <div class=\"recent around-this-time\">\r\n      <h6 class=\"title\">Recent</h6>\r\n      <ul>\r\n        <ng-container *ngFor=\"let foodItem of recentItems\">\r\n          <li tappable (click)=\"openRecentFood(foodItem)\">\r\n            <span class=\"food-name\">{{ foodItem.name }}</span>\r\n            <br>\r\n            <span class=\"food-quantity\">{{foodItem.serving_size.calories}}\r\n              calories {{ foodItem.serving_size.amount }} {{ foodItem.serving_size.unit }}\r\n            </span>\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n    <!--end recent result-->\r\n  </div>\r\n</section>\r\n\r\n<!-- edit food section -->\r\n<section class=\"edit-food\" *ngIf=\"showFoodManagement\">\r\n  <app-custom-food (cancel)=\"showFoodManagement = false\" (foodItemCreated)=\"updateMealContent($event)\"\r\n                   (mealIndexChanged)=\"mealIndex = $event\" [mealIndex]=\"mealIndex\">\r\n  </app-custom-food>\r\n</section>\r\n\r\n<section class=\"edit-food\" *ngIf=\"showCustomFoodManagement\">\r\n  <app-custom-food (cancel)=\"showCustomFoodManagement = false\" (foodItemCreated)=\"updateMealContent($event)\"\r\n                   [isCustom]=\"false\" [foodItem]=\"foodItem\" [defaultServingSizes]=\"foodItem.alt_servings\"\r\n                   [originalServingUnit]=\"foodItem.serving_size.unit\"\r\n                   [showServing]=\"false\"\r\n                   [isTemplateFood]=\"foodItem.is_custom_food_template || foodItem.is_custom\"\r\n                   (mealIndexChanged)=\"mealIndex = $event\" [mealIndex]=\"mealIndex\">\r\n  </app-custom-food>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/add-food/add-food.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/nutrition/add-food/add-food.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 40px 15px 15px; }\n  .header .close {\n    color: #999;\n    position: absolute;\n    top: 25px;\n    right: 10px;\n    font-size: 20px; }\n  .header .title {\n    text-align: center;\n    text-transform: uppercase;\n    align-self: center;\n    font-weight: 900; }\n  .add-food {\n  padding: 0 12px;\n  font-weight: 900; }\n  .add-food .search {\n    display: flex;\n    align-items: center; }\n  .add-food .get-started {\n    text-align: center;\n    margin-top: 150px;\n    color: #999; }\n  .add-food .get-started .title {\n      text-transform: uppercase;\n      color: #555; }\n  .add-food .get-started span {\n      font-size: 12px;\n      padding: 10px; }\n  .add-food ion-searchbar {\n    --background: #262626;\n    --placeholder-color: #fff;\n    height: 40px;\n    border-radius: 0;\n    caret-color: #ffffff;\n    color: #ffffff; }\n  .add-food ion-searchbar.searching {\n      --background: #ffffff;\n      caret-color: #000000;\n      color: #000000; }\n  .add-food ion-input {\n    --background: #f4f4f4;\n    text-align: center;\n    font-weight: 900; }\n  .add-food ion-label {\n    font-size: 14px;\n    font-weight: 900; }\n  .edit-food {\n  padding: 10px;\n  height: calc(500px - 75px);\n  overflow-y: scroll; }\n  .edit-food::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px; }\n  .edit-food::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n  .edit-food .macros .category {\n    text-align: center;\n    margin: 0 5px; }\n  .edit-food .macros .category span {\n      font-size: 10px;\n      text-transform: uppercase; }\n  .edit-food .select {\n    padding: 5px 12px; }\n  .edit-food ion-select {\n    background: #f4f4f4;\n    text-align: center; }\n  .edit-food .meal ion-button {\n    padding: 2px;\n    color: #999;\n    font-size: 20px;\n    --background: #f4f4f4; }\n  .edit-food .meal .active {\n    --background: #000;\n    color: #fff; }\n  .edit-food .food-name {\n    font-weight: 500; }\n  .edit-food .bottom-btn {\n    margin-top: 10px;\n    position: absolute;\n    width: 90%;\n    bottom: 10px; }\n  .edit-food .bottom-btn ion-button {\n      text-transform: uppercase;\n      font-size: 14px; }\n  .inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .search-listing ul {\n  margin: 0 10px;\n  box-shadow: 1px 1px 5px 4px #e3e3e3;\n  list-style: none;\n  height: 35vh;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 25px;\n  padding-top: 10px; }\n  .search-listing li {\n  font-weight: 900;\n  padding: 5px 0;\n  color: #4c4c4c;\n  text-transform: capitalize; }\n  .search-listing li.meal-template ion-icon {\n    color: var(--ion-color-brand);\n    font-size: 30px;\n    float: right;\n    position: relative;\n    left: 20px; }\n  .search-listing li .category {\n    font-weight: 100;\n    font-size: 12px;\n    display: block; }\n  .around-this-time {\n  padding: 20px 10px; }\n  .around-this-time .title {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #b2b2b2; }\n  .around-this-time ul {\n    list-style: none;\n    margin: 0;\n    padding: 10px 0; }\n  .around-this-time li {\n    margin: 10px 0; }\n  .around-this-time li .food-name {\n      font-size: 14px;\n      font-weight: bold;\n      text-transform: capitalize; }\n  .around-this-time li .food-quantity {\n      font-weight: 100;\n      font-size: 12px;\n      padding: 2px 0; }\n  .around-this-time li.meal-template > span {\n      display: block; }\n  .around-this-time li.meal-template ion-icon {\n      float: right;\n      color: var(--ion-color-brand);\n      font-size: 30px; }\n  .around-this-time button .title {\n    color: #1fb2d2; }\n  button {\n  background: #f2f2f2;\n  height: 56px;\n  width: 100%; }\n  button .title {\n    font-size: 14px;\n    color: #1ba9cc;\n    font-weight: 900; }\n  button .tag {\n    font-weight: 100;\n    font-size: 12px;\n    padding: 3px 0;\n    line-height: 20px; }\n  .other-listing {\n  height: calc(500px - 160px);\n  overflow-y: scroll; }\n  @media (max-width: 1024px) {\n  .other-listing {\n    height: calc(600px - 160px); }\n  .edit-food {\n    height: calc(600px - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 415px) {\n  .other-listing {\n    height: calc(100vh - 160px); }\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 320px) {\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vYWRkLWZvb2QvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxudXRyaXRpb25cXGFkZC1mb29kXFxhZGQtZm9vZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBO0VBRHpCO0lBSUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWUsRUFBQTtFQVJuQjtJQVlJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBSXBCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRmxCO0lBS0ksYUFBYTtJQUNiLG1CQUFtQixFQUFBO0VBTnZCO0lBVUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXLEVBQUE7RUFaZjtNQWVNLHlCQUF5QjtNQUN6QixXQUFXLEVBQUE7RUFoQmpCO01Bb0JNLGVBQWU7TUFDZixhQUFhLEVBQUE7RUFyQm5CO0lBMEJJLHFCQUFhO0lBQ2IseUJBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGNBQWMsRUFBQTtFQS9CbEI7TUFrQ00scUJBQWE7TUFDYixvQkFBb0I7TUFDcEIsY0FBYyxFQUFBO0VBcENwQjtJQXlDSSxxQkFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQTNDcEI7SUErQ0ksZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBSXBCO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTtFQUhwQjtJQU9JLHdCQUF3QjtJQUN4QixVQUFVLEVBQUE7RUFSZDtJQVdJLGtCQUFrQjtJQUNsQixvQ0FBZ0M7SUFDaEMsb0RBQWdELEVBQUE7RUFicEQ7SUFrQk0sa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTtFQW5CbkI7TUFzQlEsZUFBZTtNQUNmLHlCQUF5QixFQUFBO0VBdkJqQztJQTZCSSxpQkFBaUIsRUFBQTtFQTdCckI7SUFpQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBbEN0QjtJQXVDTSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBYSxFQUFBO0VBMUNuQjtJQThDTSxrQkFBYTtJQUNiLFdBQVcsRUFBQTtFQS9DakI7SUFvREksZ0JBQWdCLEVBQUE7RUFwRHBCO0lBd0RJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQTNEaEI7TUE4RE0seUJBQXlCO01BQ3pCLGVBQWUsRUFBQTtFQUtyQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7RUFHckI7RUFFSSxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFUckI7RUFhSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCwwQkFBMEIsRUFBQTtFQWhCOUI7SUFtQk0sNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQXZCaEI7SUEyQk0sZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFLcEI7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBTmxCO0lBVUksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlLEVBQUE7RUFabkI7SUFnQkksY0FBYyxFQUFBO0VBaEJsQjtNQW1CTSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDBCQUEwQixFQUFBO0VBckJoQztNQXlCTSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGNBQWMsRUFBQTtFQTNCcEI7TUFnQ1EsY0FBYyxFQUFBO0VBaEN0QjtNQW9DUSxZQUFZO01BQ1osNkJBQTZCO01BQzdCLGVBQWUsRUFBQTtFQXRDdkI7SUE0Q0ksY0FBYyxFQUFBO0VBSWxCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFIYjtJQU1JLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFScEI7SUFZSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQUlyQjtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFHN0I7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUEsRUFDbkI7RUFHSDtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFHN0I7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUEsRUFDbkI7RUFHSDtFQUVFO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vYWRkLWZvb2QvYWRkLWZvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWZvb2Qge1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG5cclxuICAuc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdldC1zdGFydGVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjYXJldC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmOztcclxuXHJcbiAgICAmLnNlYXJjaGluZyB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY2FyZXQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0LWZvb2Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwMHB4IC0gNzVweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAvLyBmb3JjZSBzaG93aW5nIHNjcm9sbCBiYXIgdG8gZGljdGF0ZSB0aGF0IHBhZ2UgaGFzIHNjcm9sbGFibGUgY29udGVudFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gIH1cclxuXHJcbiAgLm1hY3JvcyB7XHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tZWFsIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb29kLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Rpbmcge1xyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggNHB4ICNlM2UzZTM7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgJi5tZWFsLXRlbXBsYXRlIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmFuZCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcm91bmQtdGhpcy10aW1lIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgLmZvb2QtbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb29kLXF1YW50aXR5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1lYWwtdGVtcGxhdGUge1xyXG4gICAgICA+IHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJhbmQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIC50aXRsZSB7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFiYTljYztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICAudGFnIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm90aGVyLWxpc3Rpbmcge1xyXG4gIGhlaWdodDogY2FsYyg1MDBweCAtIDE2MHB4KTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAub3RoZXItbGlzdGluZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNjAwcHggLSAxNjBweCk7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYyg2MDBweCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgLm90aGVyLWxpc3Rpbmcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtZm9vZCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nutrition/add-food/add-food.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nutrition/add-food/add-food.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodComponent", function() { return AddFoodComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_third_party_nutritionix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/third-party/nutritionix.service */ "./src/app/services/third-party/nutritionix.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_food_items_food_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/food-items/food-items.service */ "./src/app/services/food-items/food-items.service.ts");
/* harmony import */ var _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/custom-food-template/custom-food-template.service */ "./src/app/services/custom-food-template/custom-food-template.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
/* harmony import */ var _services_barcode_scanner_barcode_scanner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/barcode-scanner/barcode-scanner.service */ "./src/app/services/barcode-scanner/barcode-scanner.service.ts");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rollbar */ "./node_modules/rollbar/dist/rollbar.umd.min.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _rollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../rollbar */ "./src/app/rollbar.ts");
/* harmony import */ var _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/meal-templates/meal-templates.service */ "./src/app/services/meal-templates/meal-templates.service.ts");
/* harmony import */ var _meal_template_add_configuration_meal_template_add_configuration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../meal-template-add-configuration/meal-template-add-configuration.component */ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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














var AddFoodComponent = /** @class */ (function () {
    function AddFoodComponent(modal, nutritioninxService, foodItemService, loadingController, customFoodTemplateService, toastService, errorService, cachingService, barcodeScanner, platform, rollbar, mealTemplateService, modalController) {
        this.modal = modal;
        this.nutritioninxService = nutritioninxService;
        this.foodItemService = foodItemService;
        this.loadingController = loadingController;
        this.customFoodTemplateService = customFoodTemplateService;
        this.toastService = toastService;
        this.errorService = errorService;
        this.cachingService = cachingService;
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
        this.rollbar = rollbar;
        this.mealTemplateService = mealTemplateService;
        this.modalController = modalController;
        this.mealIndex = 1;
        this.nutritionDayId = 0;
        this.showFoodManagement = false;
        this.showCustomFoodManagement = false;
        this.searchValue = '';
        this.searchFocused = false;
        this.searchResults = {
            branded: [],
            common: [],
            customFood: [],
            totalFoodList: [],
            meals: [],
        };
        this.recentItems = [];
        this.aroundThisTimeItems = [];
        this.showMore = false;
        this.showMoreAroundThisTime = false;
        this.isApiBasedFoodItem = false;
        this.scanningBarcode = false;
    }
    AddFoodComponent.prototype.ngOnInit = function () {
        this.setupRecentAndAroundThisTimeItems();
    };
    AddFoodComponent.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AddFoodComponent.prototype.updateMealContent = function (foodItem) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, newFoodItem, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.foodItemService
                                .createFoodItem(this.nutritionDayId, this.mealIndex, foodItem.is_custom, foodItem, this.isApiBasedFoodItem)];
                    case 4:
                        newFoodItem = _a.sent();
                        // if food being added is custom then cleaning the caching
                        if (foodItem.is_custom) {
                            this.cachingService.clearAll();
                        }
                        this.modal.dismiss({
                            mealIndex: this.mealIndex,
                            foodItem: newFoodItem,
                            foodItems: []
                        });
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddFoodComponent.prototype.searchContentChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.searchSubscription) {
                    this.searchSubscription.unsubscribe();
                }
                this.showMore = false;
                if (this.searchValue.trim() === '') {
                    this.searchResults.branded = [];
                    this.searchResults.customFood = [];
                    this.searchResults.common = [];
                    this.searchResults.totalFoodList = [];
                }
                else {
                    this.searchSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.nutritioninxService.search(this.searchValue), this.customFoodTemplateService.searchTemplate(this.searchValue), this.mealTemplateService.list(this.searchValue)).subscribe(function (results) {
                        _this.searchResults.branded = results[0].branded;
                        _this.searchResults.common = results[0].common;
                        _this.searchResults.customFood = results[1];
                        _this.searchResults.meals = results[2];
                        _this.setTotalItems();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(AddFoodComponent.prototype, "hasSearchResults", {
        get: function () {
            return this.searchResults.branded.length > 0
                || this.searchResults.customFood.length > 0
                || this.searchResults.meals.length > 0
                || this.searchResults.common.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AddFoodComponent.prototype.setTotalItems = function () {
        var _this = this;
        this.searchResults.totalFoodList = [];
        var searchTerm = this.searchValue.trim().toLowerCase();
        if (searchTerm.indexOf('1stphorm') !== -1) {
            searchTerm.replace('1stphorm', '1st phorm');
        }
        var matchesBranded = this.searchResults.branded.some(function (i) {
            return i.brand_name !== '' && searchTerm.indexOf(i.brand_name.toLowerCase()) !== -1;
        });
        this.searchResults.customFood.forEach(function (food) {
            _this.searchResults.totalFoodList.push({
                type: 'custom',
                typeId: 1,
                data: food
            });
        });
        this.searchResults.meals.forEach(function (food) {
            _this.searchResults.totalFoodList.push({
                type: 'meal',
                typeId: 4,
                data: food
            });
        });
        if (matchesBranded) {
            this.searchResults.branded.forEach(function (food) {
                _this.searchResults.totalFoodList.push({
                    type: 'branded',
                    typeId: 2,
                    data: food
                });
            });
        }
        this.searchResults.common.forEach(function (food) {
            _this.searchResults.totalFoodList.push({
                type: 'common',
                typeId: 3,
                data: food
            });
        });
        if (!matchesBranded) {
            this.searchResults.branded.forEach(function (food) {
                _this.searchResults.totalFoodList.push({
                    type: 'branded',
                    typeId: 2,
                    data: food
                });
            });
        }
    };
    AddFoodComponent.prototype.openCommonFood = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, transphormer, list, item, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
                        return [4 /*yield*/, this.nutritioninxService.commonDetail(data.food_name, transphormer.id)];
                    case 4:
                        list = _a.sent();
                        if (list.foods.length > 0) {
                            item = list.foods[0];
                            this.foodItem = this.convertCommonFoodToFoodItem(item);
                            this.showCustomFoodManagement = true;
                            this.isApiBasedFoodItem = false;
                        }
                        else {
                            this.toastService.flash('Item not found');
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddFoodComponent.prototype.openBrandedFood = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, list, item, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.nutritioninxService.brandedDetail(data.nix_item_id)];
                    case 4:
                        list = _a.sent();
                        if (list.foods.length > 0) {
                            item = list.foods[0];
                            this.foodItem = this.convertBrandedFoodToFoodItem(item);
                            this.showCustomFoodManagement = true;
                            this.isApiBasedFoodItem = false;
                        }
                        else {
                            this.toastService.flash('Item not found');
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_3 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_3));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddFoodComponent.prototype.openCustomFood = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.foodItem = this.convertCustomFoodToFoodItem(data);
                this.showCustomFoodManagement = true;
                this.isApiBasedFoodItem = true;
                return [2 /*return*/];
            });
        });
    };
    AddFoodComponent.prototype.openRecentFood = function (foodItem) {
        this.foodItem = foodItem;
        // if the food item is not a custom food
        if (!this.foodItem.is_custom) {
            // if the food is branded food
            if (this.foodItem.is_branded_food) {
                var data = foodItem;
                data.nix_item_id = foodItem.nutritioninx_item_id;
                this.openBrandedFood(data);
            }
            else {
                // food is common food
                var data = foodItem;
                data.food_name = foodItem.nutritioninx_food_name;
                this.openCommonFood(data);
            }
        }
        else {
            this.foodItem.is_custom_food_template = true;
            this.showCustomFoodManagement = true;
        }
    };
    AddFoodComponent.prototype.formatNumber = function (num) {
        return Number.isInteger(num) ? num : num.toFixed(2);
    };
    AddFoodComponent.prototype.setupRecentAndAroundThisTimeItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, recentRequest, aroundThisTimeRequest, aroundThisTimeMealTemplateRequest, _a, aroundThisTimeResults, aroundThisTimeMealTemplateResults, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 7, 8, 9]);
                        recentRequest = this.foodItemService.recentFoodItems();
                        aroundThisTimeRequest = this.foodItemService.aroundTimeFoodItems();
                        aroundThisTimeMealTemplateRequest = this.mealTemplateService.aroundThisTime();
                        _a = this;
                        return [4 /*yield*/, recentRequest];
                    case 4:
                        _a.recentItems = (_b.sent());
                        return [4 /*yield*/, aroundThisTimeRequest];
                    case 5:
                        aroundThisTimeResults = (_b.sent()).map(function (item) {
                            return {
                                type: 'tracked-item',
                                data: item
                            };
                        });
                        return [4 /*yield*/, aroundThisTimeMealTemplateRequest];
                    case 6:
                        aroundThisTimeMealTemplateResults = (_b.sent())
                            .map(function (item) {
                            return {
                                type: 'meal',
                                data: item
                            };
                        });
                        // Sorting the result by total counts
                        this.aroundThisTimeItems = aroundThisTimeResults.concat(aroundThisTimeMealTemplateResults)
                            .sort(function (item1, item2) { return item1.data.total_count <= item2.data.total_count ? 1 : -1; }).splice(0, 10);
                        return [3 /*break*/, 9];
                    case 7:
                        e_4 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_4));
                        return [3 /*break*/, 9];
                    case 8:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AddFoodComponent.prototype.fixFood = function (detail) {
        var convert = function (a) {
            return parseFloat("" + a).toFixed(2);
        };
        return {
            calories: detail.nf_calories ? convert(detail.nf_calories) : 0,
            carbs: detail.nf_total_carbohydrate ? convert(detail.nf_total_carbohydrate) : 0,
            fats: detail.nf_total_fat ? convert(detail.nf_total_fat) : 0,
            protein: detail.nf_protein ? convert(detail.nf_protein) : 0
        };
    };
    AddFoodComponent.prototype.convertCommonFoodToFoodItem = function (detail) {
        var _a = this.fixFood(detail), carbs = _a.carbs, calories = _a.calories, fats = _a.fats, protein = _a.protein;
        return {
            is_custom: false,
            meal: this.mealIndex,
            base_weight: detail.serving_weight_grams,
            name: detail.nix_brand_name || detail.food_name,
            carbs: carbs, calories: calories, fats: fats, protein: protein,
            is_custom_food_template: false,
            is_branded_food: false,
            nutritioninx_food_name: detail.food_name,
            serving_size: {
                carbs: carbs, calories: calories, fats: fats, protein: protein,
                unit: detail.serving_unit,
                amount: detail.serving_qty,
            },
            amount_consumed: {
                unit: detail.serving_unit,
            },
            alt_servings: this.getAltServings(detail)
        };
    };
    AddFoodComponent.prototype.convertBrandedFoodToFoodItem = function (detail) {
        var _a = this.fixFood(detail), carbs = _a.carbs, calories = _a.calories, fats = _a.fats, protein = _a.protein;
        return {
            is_custom: false,
            meal: this.mealIndex,
            base_weight: detail.serving_weight_grams,
            name: detail.food_name,
            carbs: carbs, calories: calories, fats: fats, protein: protein,
            is_custom_food_template: false,
            is_branded_food: true,
            nutritioninx_item_id: detail.nix_item_id,
            serving_size: {
                carbs: carbs, calories: calories, fats: fats, protein: protein,
                unit: detail.serving_unit,
                amount: detail.serving_qty,
            },
            amount_consumed: {
                unit: detail.serving_unit,
            },
            alt_servings: this.getAltServings(detail)
        };
    };
    AddFoodComponent.prototype.convertCustomFoodToFoodItem = function (detail, is_custom_food_template) {
        if (is_custom_food_template === void 0) { is_custom_food_template = true; }
        return {
            is_custom: true,
            meal: this.mealIndex,
            name: detail.name,
            carbs: detail.carbs,
            calories: detail.calories,
            fats: detail.fats,
            protein: detail.protein,
            is_custom_food_template: is_custom_food_template,
            serving_size: {
                carbs: detail.carbs,
                calories: detail.calories,
                fats: detail.fats,
                protein: detail.protein,
                unit: detail.serving_unit,
                amount: detail.serving_amount,
            },
            amount_consumed: {
                unit: detail.serving_unit,
            },
            alt_servings: null
        };
    };
    AddFoodComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        if (!this.scanningBarcode) {
            this.closeModal();
        }
    };
    /**
     * Opening barcode scanner and waiting for response
     */
    AddFoodComponent.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var barcode, e_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        this.scanningBarcode = true;
                        return [4 /*yield*/, this.barcodeScanner.scan()];
                    case 1:
                        barcode = _a.sent();
                        if (barcode !== false) {
                            this.searchBarcode(barcode);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        e_5 = _a.sent();
                        this.toastService.flash(e_5);
                        return [3 /*break*/, 4];
                    case 3:
                        window.setTimeout(function () {
                            _this.scanningBarcode = false;
                        }, 100);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Searching barcode food
     * @param barcode
     */
    AddFoodComponent.prototype.searchBarcode = function (barcode) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, result, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.nutritioninxService.searchBarcode(barcode).toPromise()];
                    case 4:
                        result = _a.sent();
                        // only continuing if there are results
                        if (result.foods.length === 0) {
                            this.toastService.flash('No matches for that barcode.');
                        }
                        else {
                            this.openBrandedFood(result.foods[0]);
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_6 = _a.sent();
                        // Apparently this is a 404 which is an "error".
                        if (e_6.status === 404) {
                            this.toastService.flash('No matches for that barcode.');
                            return [2 /*return*/];
                        }
                        this.rollbar.error(e_6);
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddFoodComponent.prototype.getAltServings = function (data) {
        // Adding condition to check if alt_measures is null or undefined
        if (!data.alt_measures) {
            data.alt_measures = [];
        }
        var altServing = [{
                quantity: data.serving_qty || 1,
                measure: data.serving_unit,
                serving_weight: data.serving_weight_grams || 1
            }];
        if (data.alt_measures.length > 0) {
            altServing = data.alt_measures;
        }
        var hasPrimaryServingInfo = altServing.find(function (serving) { return serving.measure === data.serving_unit; });
        if (!hasPrimaryServingInfo) {
            altServing.push({
                quantity: data.serving_qty || 1,
                measure: data.serving_unit,
                serving_weight: data.serving_weight_grams || 1
            });
        }
        return altServing;
    };
    AddFoodComponent.prototype.addMealTemplate = function (meal) {
        return __awaiter(this, void 0, void 0, function () {
            var configuration, loader, foodItems, _i, _a, mealItem, item, list, transphormer, list, foodItem, e_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.configureMealTemplate()];
                    case 1:
                        configuration = _b.sent();
                        if (configuration === false) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait ...'
                            })];
                    case 2:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 3:
                        _b.sent();
                        foodItems = [];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 15, 16, 17]);
                        _i = 0, _a = meal.items;
                        _b.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 14];
                        mealItem = _a[_i];
                        item = mealItem;
                        if (!!mealItem.is_custom) return [3 /*break*/, 10];
                        if (!mealItem.is_branded_food) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.nutritioninxService.brandedDetail(mealItem.nutritioninx_item_id)];
                    case 6:
                        list = _b.sent();
                        item = this.convertBrandedFoodToFoodItem(list.foods[0]);
                        return [3 /*break*/, 9];
                    case 7:
                        transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
                        return [4 /*yield*/, this.nutritioninxService.commonDetail(mealItem.nutritioninx_food_name, transphormer.id)];
                    case 8:
                        list = _b.sent();
                        item = this.convertCommonFoodToFoodItem(list.foods[0]);
                        _b.label = 9;
                    case 9:
                        item.amount_consumed.amount = mealItem.amount_consumed.amount;
                        item.amount_consumed.unit = mealItem.amount_consumed.unit;
                        item.calories = mealItem.calories;
                        item.fats = mealItem.fats;
                        item.carbs = mealItem.carbs;
                        item.protein = mealItem.protein;
                        return [3 /*break*/, 11];
                    case 10:
                        item.is_custom_food_template = true;
                        _b.label = 11;
                    case 11:
                        item.meal_template_id = meal.id;
                        return [4 /*yield*/, this.foodItemService
                                .createFoodItem(this.nutritionDayId, configuration.mealIndex, mealItem.is_custom, item, mealItem.is_custom_food_template)];
                    case 12:
                        foodItem = _b.sent();
                        foodItems.push(foodItem);
                        _b.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 5];
                    case 14:
                        this.cachingService.clearAll();
                        this.modal.dismiss({
                            mealIndex: configuration.mealIndex,
                            foodItems: foodItems,
                            foodItem: null
                        });
                        return [3 /*break*/, 17];
                    case 15:
                        e_7 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_7));
                        return [3 /*break*/, 17];
                    case 16:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Opens modal to configure meal template for various properties
     */
    AddFoodComponent.prototype.configureMealTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settingModal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _meal_template_add_configuration_meal_template_add_configuration_component__WEBPACK_IMPORTED_MODULE_13__["MealTemplateAddConfigurationComponent"],
                            componentProps: {
                                mealIndex: this.mealIndex
                            },
                            cssClass: 'meal-template-configuration-modal',
                            backdropDismiss: false
                        })];
                    case 1:
                        settingModal = _a.sent();
                        return [4 /*yield*/, settingModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, settingModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result.data) {
                            return [2 /*return*/, result.data];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddFoodComponent.prototype, "mealIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddFoodComponent.prototype, "nutritionDayId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AddFoodComponent.prototype, "backButtonHandler", null);
    AddFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-food',
            template: __webpack_require__(/*! ./add-food.component.html */ "./src/app/components/nutrition/add-food/add-food.component.html"),
            styles: [__webpack_require__(/*! ./add-food.component.scss */ "./src/app/components/nutrition/add-food/add-food.component.scss")]
        }),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_rollbar__WEBPACK_IMPORTED_MODULE_11__["RollbarService"])),
        __param(12, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"],
            _services_third_party_nutritionix_service__WEBPACK_IMPORTED_MODULE_2__["NutritionixService"],
            _services_food_items_food_items_service__WEBPACK_IMPORTED_MODULE_4__["FoodItemsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"],
            _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_5__["CustomFoodTemplateService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__["ErrorsService"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_8__["RequestCachingService"],
            _services_barcode_scanner_barcode_scanner_service__WEBPACK_IMPORTED_MODULE_9__["BarcodeScannerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"],
            rollbar__WEBPACK_IMPORTED_MODULE_10__,
            _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_12__["MealTemplatesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]])
    ], AddFoodComponent);
    return AddFoodComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/custom-food/custom-food.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nutrition/custom-food/custom-food.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"save()\" [formGroup]=\"form\" class=\"scrollable-content\">\r\n  <div class=\"edit-food\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Name</ion-label>\r\n      <ion-input class=\"food-name\" formControlName=\"name\" [attr.disabled]=\"!isCustom\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Calories</ion-label>\r\n      <ion-input type=\"number\" class=\"calories-color\"\r\n                 *ngIf=\"isCustom && !customConversion\"\r\n                 [formControlName]=\"isCustom? 'calories' : 'calculatedCalories'\"\r\n                 [attr.disabled]=\"!isCustom\"></ion-input>\r\n      <ion-input type=\"number\" class=\"calories-color prim\"\r\n                 *ngIf=\"(isCustom && customConversion) || (!isCustom)\"\r\n                 [formControlName]=\"!isConsumable ? 'calories' : 'calculatedCalories'\"\r\n                 (focus)=\"forCustomFoodFocus()\"\r\n                 (click)=\"forCustomFoodFocus()\"\r\n                 [attr.disabled]=\"!isCustom\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Macros</ion-label>\r\n      <div class=\"inline macros\">\r\n        <div class=\"category\">\r\n          <ion-input type=\"number\" class=\"protein-color\"\r\n                     *ngIf=\"isCustom && !customConversion\"\r\n                     [formControlName]=\"isCustom ? 'protein' : 'calculatedProtein'\"\r\n                     [attr.disabled]=\"!isCustom\"></ion-input>\r\n          <ion-input type=\"number\" class=\"protein-color\"\r\n                     *ngIf=\"(isCustom && customConversion) || (!isCustom)\"\r\n                     [formControlName]=\"!isConsumable ? 'protein' : 'calculatedProtein'\"\r\n                     (focus)=\"forCustomFoodFocus()\"\r\n                     (click)=\"forCustomFoodFocus()\"\r\n                     [attr.disabled]=\"!isCustom\"></ion-input>\r\n          <span>Protein (g)</span>\r\n        </div>\r\n        <div class=\"category\">\r\n          <ion-input type=\"number\" class=\"carbs-color\"\r\n                     *ngIf=\"isCustom && !customConversion\"\r\n                     [formControlName]=\"isCustom ? 'carbs' : 'calculatedCarbs'\"\r\n                     [attr.disabled]=\"!isCustom\"></ion-input>\r\n          <ion-input type=\"number\" class=\"carbs-color\"\r\n                     *ngIf=\"(isCustom && customConversion) || (!isCustom)\"\r\n                     [formControlName]=\"!isConsumable ? 'carbs' : 'calculatedCarbs'\"\r\n                     (focus)=\"forCustomFoodFocus()\"\r\n                     (click)=\"forCustomFoodFocus()\"\r\n                     [attr.disabled]=\"!isCustom\"></ion-input>\r\n          <span>Carbs (g)</span>\r\n        </div>\r\n        <div class=\"category\">\r\n          <ion-input type=\"number\" class=\"fat-color\"\r\n                     *ngIf=\"isCustom && !customConversion\"\r\n                     [formControlName]=\"isCustom ? 'fats' : 'calculatedFats'\"\r\n                     [attr.disabled]=\"!isCustom\"></ion-input>\r\n          <ion-input type=\"number\" class=\"fat-color\"\r\n                     *ngIf=\"(isCustom && customConversion) || (!isCustom)\"\r\n                     [formControlName]=\"!isConsumable ? 'fats' : 'calculatedFats'\"\r\n                     (focus)=\"forCustomFoodFocus()\"\r\n                     (click)=\"forCustomFoodFocus()\"\r\n                     [attr.disabled]=\"!isCustom\"></ion-input>\r\n          <span>Fats (g)</span>\r\n        </div>\r\n      </div>\r\n    </ion-item>\r\n    <div class=\"select\" formGroupName=\"serving_size\" [class.hide]=\"!showServing\">\r\n      <ion-label position=\"stacked\">Serving Size</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <app-factor-number [disable]=\"_foodItem && isConsumable\"\r\n                               [value]=\"form.get('serving_size').get('amount').value\"\r\n                               (focus)=\"forCustomFoodFocus()\"\r\n                               (click)=\"forCustomFoodFocus()\"\r\n                               (valueUpdated)=\"updateValue(form.get('serving_size').get('amount'), $event)\">\r\n            </app-factor-number>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-select [interfaceOptions]=\"{header: 'Serving Size'}\" formControlName=\"unit\"\r\n                        (click)=\"forCustomFoodFocus()\"\r\n                        [attr.disabled]=\"_foodItem && isConsumable\">\r\n              <ion-select-option *ngFor=\"let servingSize of _defaultServingSizes\" [value]=\"servingSize.measure\">{{\r\n                servingSize.measure }}</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"select\" formGroupName=\"amount_consumed\" *ngIf=\"isConsumable\">\r\n      <ion-label position=\"stacked\">Amount Consumed</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <app-factor-number [value]=\"form.get('amount_consumed').get('amount').value\"\r\n                               (valueUpdated)=\"updateValue(form.get('amount_consumed').get('amount'), $event)\"\r\n                               [disable]=\"isDisabledAmountConsumed\"\r\n                               class=\"amount-consumed\"\r\n            >\r\n            </app-factor-number>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-select [interfaceOptions]=\"{header: 'Amount Consumed'}\" formControlName=\"unit\"\r\n                        [attr.disabled]=\"isDisabledAmountConsumed\">\r\n              <ion-select-option *ngFor=\"let servingSize of servingSizes\" [value]=\"servingSize.measure\">{{\r\n                servingSize.measure }}</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ion-item lines=\"none\" *ngIf=\"showMealSelect\">\r\n      <ion-label position=\"stacked\">Meal</ion-label>\r\n      <div class=\"inline meal\">\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(1)\"\r\n                    [class.active]=\"_mealIndex === 1\">1\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(2)\"\r\n                    [class.active]=\"_mealIndex === 2\">2\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(3)\"\r\n                    [class.active]=\"_mealIndex === 3\">3\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(4)\"\r\n                    [class.active]=\"_mealIndex === 4\">4\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(5)\"\r\n                    [class.active]=\"_mealIndex === 5\">5\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(6)\"\r\n                    [class.active]=\"_mealIndex === 6\">6\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <div class=\"inline bottom-btn\">\r\n      <ion-button color=\"danger\" *ngIf=\"isDeletable && !confirmingDelete\" expand=\"full\" strong (click)=\"delete()\">Delete</ion-button>\r\n      <ion-button color=\"danger\" *ngIf=\"confirmingDelete\" expand=\"full\" strong (click)=\"cancelDelete()\">Don't Delete</ion-button>\r\n      <ion-button fill=\"clear\" expand=\"full\" *ngIf=\"!confirmingDelete\" strong (click)=\"close()\">Cancel</ion-button>\r\n      <ion-button type=\"submit\" expand=\"full\" strong [color]=\"updateColor\"\r\n                  [disabled]=\"form.invalid && !confirmingDelete\">{{ updateText }}</ion-button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/custom-food/custom-food.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nutrition/custom-food/custom-food.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  --background: #f4f4f4;\n  text-align: center;\n  font-weight: 900; }\n\nion-label {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 900; }\n\n.edit-food {\n  padding: 10px; }\n\n.edit-food .macros .category {\n    text-align: center;\n    margin: 0 5px; }\n\n.edit-food .macros .category span {\n      font-size: 10px;\n      text-transform: uppercase; }\n\n.edit-food .select {\n    padding: 5px 12px; }\n\n.edit-food ion-select {\n    background: #f4f4f4;\n    text-align: center; }\n\n.edit-food .meal ion-button {\n    padding: 2px;\n    color: #999;\n    font-size: 18px;\n    --background: #f4f4f4;\n    --padding-top: 13px;\n    --padding-bottom: 13px;\n    --padding-start: 15px;\n    --padding-end: 15px; }\n\n.edit-food .meal .active {\n    --background: #000;\n    color: #fff; }\n\n.edit-food .food-name {\n    font-weight: 500; }\n\n.edit-food .bottom-btn {\n    margin-top: 20px;\n    bottom: 10px; }\n\n.edit-food .bottom-btn ion-button {\n      text-transform: uppercase;\n      font-size: 14px; }\n\n.inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  overflow-x: scroll;\n  width: 100%; }\n\n.protein-color {\n  color: #fba04b; }\n\n.carbs-color {\n  color: #12c910; }\n\n.fat-color {\n  color: #f8617a; }\n\n.calories-color {\n  color: #1fb2d2; }\n\nion-label {\n  padding-bottom: 4px;\n  font-size: 12px; }\n\nion-grid {\n  padding: 0; }\n\nform.scrollable-content {\n  overflow-y: auto; }\n\n@media (max-width: 320px) {\n  .edit-food {\n    padding: 10px 0; }\n    .edit-food .meal ion-button {\n      font-size: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vY3VzdG9tLWZvb2QvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxudXRyaXRpb25cXGN1c3RvbS1mb29kXFxjdXN0b20tZm9vZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYSxFQUFBOztBQURmO0lBS00sa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTs7QUFObkI7TUFTUSxlQUFlO01BQ2YseUJBQXlCLEVBQUE7O0FBVmpDO0lBZ0JJLGlCQUFpQixFQUFBOztBQWhCckI7SUFvQkksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBOztBQXJCdEI7SUEwQk0sWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQWE7SUFDYixtQkFBYztJQUNkLHNCQUFpQjtJQUNqQixxQkFBZ0I7SUFDaEIsbUJBQWMsRUFBQTs7QUFqQ3BCO0lBcUNNLGtCQUFhO0lBQ2IsV0FBVyxFQUFBOztBQXRDakI7SUEyQ0ksZ0JBQWdCLEVBQUE7O0FBM0NwQjtJQStDSSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQWhEaEI7TUFtRE0seUJBQXlCO01BQ3pCLGVBQWUsRUFBQTs7QUFLckI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0U7SUFDRSxlQUFlLEVBQUE7SUFEakI7TUFJSSxlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251dHJpdGlvbi9jdXN0b20tZm9vZC9jdXN0b20tZm9vZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5lZGl0LWZvb2Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIC5tYWNyb3Mge1xyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgfVxyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWVhbCB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb29kLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvdGVpbi1jb2xvciB7XHJcbiAgY29sb3I6ICNmYmEwNGI7XHJcbn1cclxuXHJcbi5jYXJicy1jb2xvciB7XHJcbiAgY29sb3I6ICMxMmM5MTA7XHJcbn1cclxuXHJcbi5mYXQtY29sb3Ige1xyXG4gIGNvbG9yOiAjZjg2MTdhO1xyXG59XHJcblxyXG4uY2Fsb3JpZXMtY29sb3Ige1xyXG4gIGNvbG9yOiAjMWZiMmQyO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuZm9ybS5zY3JvbGxhYmxlLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5lZGl0LWZvb2Qge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgIC5tZWFsIGlvbi1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nutrition/custom-food/custom-food.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/nutrition/custom-food/custom-food.component.ts ***!
  \***************************************************************************/
/*! exports provided: DEFAULT_SERVING_SIZES, DIRECT_SERVING, CustomFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SERVING_SIZES", function() { return DEFAULT_SERVING_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECT_SERVING", function() { return DIRECT_SERVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFoodComponent", function() { return CustomFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_SERVING_SIZES = [
    { measure: 'ounces', quantity: 1, serving_weight: 1 },
    { measure: 'grams', quantity: 1, serving_weight: 1 },
    { measure: 'fl. ounces', quantity: 1, serving_weight: 1 },
    { measure: 'ml', quantity: 1, serving_weight: 1 },
    { measure: 'cup', quantity: 1, serving_weight: 1 },
    { measure: 'tbsp', quantity: 1, serving_weight: 1 },
    { measure: 'pound', quantity: 1, serving_weight: 1 },
    { measure: 'serving', quantity: 1, serving_weight: 1 },
];
var DIRECT_SERVING = {
    measure: 'serving',
    quantity: 1,
    serving_weight: 1
};
var CustomFoodComponent = /** @class */ (function () {
    function CustomFoodComponent(formBuilder, platform) {
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.foodItemCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mealIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeFoodItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCustom = true;
        this.confirmingDelete = false;
        this.showMealSelect = true;
        this.isConsumable = true;
        this.isDeletable = false;
        this.showServing = true;
        this.isTemplateFood = false;
        this.servingSizes = [];
        this._defaultServingSizes = DEFAULT_SERVING_SIZES;
        this.customConversion = false;
    }
    Object.defineProperty(CustomFoodComponent.prototype, "mealIndex", {
        set: function (value) {
            this._mealIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomFoodComponent.prototype, "foodItem", {
        set: function (foodItem) {
            if (!this.form) {
                this.initForm();
            }
            this._foodItem = foodItem;
            this.setFormThroughFoodItem(this._foodItem);
            this.updateAmountServingUnits(this._foodItem.serving_size.unit, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomFoodComponent.prototype, "defaultServingSizes", {
        set: function (sizes) {
            this._defaultServingSizes = sizes || DEFAULT_SERVING_SIZES;
            if (!this.form) {
                this.initForm();
            }
            this.updateAmountServingUnits(this.form.get('serving_size').get('unit').value, false);
        },
        enumerable: true,
        configurable: true
    });
    CustomFoodComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.fixForSmallIosScreenSizeOpen(false);
    };
    CustomFoodComponent.prototype.ngOnDestroy = function () {
        this.fixForSmallIosScreenSizeOpen(true);
    };
    CustomFoodComponent.prototype.close = function () {
        this.cancel.emit();
    };
    CustomFoodComponent.prototype.save = function () {
        if (this._foodItem) {
            // if amount consumed is being set to zer then need to remove the food item
            if (this.form.get('amount_consumed').get('amount').value === 0 || this.confirmingDelete) {
                this.removeFoodItem.emit();
            }
            else {
                this.foodItemCreated.emit(this.createFoodItemValue());
            }
        }
        else {
            this.foodItemCreated.emit(this.createFoodItemValue());
        }
    };
    /**
     * Action changes the meal index
     * @param value
     */
    CustomFoodComponent.prototype.changeMealIndex = function (value) {
        this._mealIndex = value;
        this.mealIndexChanged.emit(this._mealIndex);
    };
    CustomFoodComponent.prototype.subscribeToFormValueChanges = function () {
        var _this = this;
        this.form.get('serving_size').get('unit').valueChanges.subscribe(function (value) {
            // setting up amount consumed serving sizes
            _this.updateAmountServingUnits(value);
        });
        this.form.get('amount_consumed').get('unit').valueChanges.subscribe(function () {
            // Reflecting the calories/carbs/fats/protein values based on amount consumed.
            if ((_this.form.get('amount_consumed').get('unit').valid && _this.form.get('amount_consumed').get('amount').valid)
                && _this.form.get('amount_consumed').get('amount').value) {
                _this.setCalculatedValues();
            }
        });
        this.form.get('amount_consumed').get('amount').valueChanges.subscribe(function () {
            // Reflecting the calories/carbs/fats/protein values based on amount consumed.
            if ((_this.form.get('amount_consumed').get('unit').valid && _this.form.get('amount_consumed').get('amount').valid)
                && _this.form.get('amount_consumed').get('amount').value) {
                _this.setCalculatedValues();
            }
        });
    };
    CustomFoodComponent.prototype.updateValue = function (formControl, newValue) {
        formControl.setValue(newValue);
        // this.forCustomFoodFocus();
    };
    /**
     * Sets the amount consumed serving sizes based on serving size unit
     * @param {String} servingSizeUnit
     * @param {boolean} allowChangingOfConsumedAmount
     */
    CustomFoodComponent.prototype.updateAmountServingUnits = function (servingSizeUnit, allowChangingOfConsumedAmount) {
        var _this = this;
        if (allowChangingOfConsumedAmount === void 0) { allowChangingOfConsumedAmount = true; }
        this.servingSizes = [];
        if (!servingSizeUnit) {
            return;
        }
        // custom list for amount consumed serving unit
        if (this.isCustom || this._foodItem.is_custom) {
            this.servingSizes = [this._defaultServingSizes.find(function (servingSize) { return servingSize.measure === servingSizeUnit; })];
            this.servingSizes.push(DIRECT_SERVING);
            this.originalServingUnit = servingSizeUnit;
            // delay to allow the angular system to detect changes and update front end
            window.setTimeout(function () {
                if (allowChangingOfConsumedAmount) {
                    _this.form.get('amount_consumed').get('unit').setValue(servingSizeUnit);
                }
            }, 100);
        }
        else {
            this.servingSizes = this._defaultServingSizes;
        }
    };
    /**
     * Setting other validations
     */
    CustomFoodComponent.prototype.setupCustomValidations = function () {
        if (!this.isConsumable) {
            this.form.get('amount_consumed').get('unit').clearValidators();
            this.form.get('amount_consumed').get('amount').clearValidators();
        }
    };
    /**
     * Returns the food item instance of the form value
     */
    CustomFoodComponent.prototype.createFoodItemValue = function () {
        var form = this.form.getRawValue();
        var consumedSizeMeasure = this._defaultServingSizes.find(function (size) { return size.measure === form.amount_consumed.unit; });
        var servingSize = {
            unit: form.serving_size.unit,
            amount: form.serving_size.amount,
            calories: form.calories,
            fats: form.fats,
            protein: form.protein,
            carbs: form.carbs,
        };
        return {
            is_custom: this._foodItem ? this._foodItem.is_custom : this.isCustom,
            is_custom_food_template: this._foodItem ? this._foodItem.is_custom_food_template : false,
            name: form.name,
            amount_consumed: form.amount_consumed,
            serving_size: servingSize,
            is_branded_food: this._foodItem ? this._foodItem.is_branded_food : false,
            nutritioninx_food_name: this._foodItem ? (this._foodItem.nutritioninx_food_name || null) : null,
            nutritioninx_item_id: this._foodItem ? (this._foodItem.nutritioninx_item_id || null) : null,
            calories: this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.calories, form.serving_size),
            fats: this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.fats, form.serving_size),
            carbs: this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.carbs, form.serving_size),
            protein: this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.protein, form.serving_size),
            alt_servings: this._defaultServingSizes,
        };
    };
    CustomFoodComponent.prototype.forCustomFoodFocus = function () {
        this.customConversion = false;
        this.form.get('amount_consumed').get('amount').setValue(this.isConsumable ? '' : 1);
    };
    CustomFoodComponent.prototype.initForm = function () {
        if (this.form) {
            return;
        }
        this.form = this.formBuilder.group({
            name: this.formBuilder.control({ value: '', disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            calories: this.formBuilder.control({ value: '', disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fats: this.formBuilder.control({ value: '', disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            carbs: this.formBuilder.control({ value: '', disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            protein: this.formBuilder.control({ value: '', disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            calculatedCalories: this.formBuilder.control({ value: '', disabled: false }),
            calculatedFats: this.formBuilder.control({ value: '', disabled: false }),
            calculatedCarbs: this.formBuilder.control({ value: '', disabled: false }),
            calculatedProtein: this.formBuilder.control({ value: '', disabled: false }),
            serving_size: this.formBuilder.group({
                amount: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                unit: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            }),
            amount_consumed: this.formBuilder.group({
                amount: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                unit: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            })
        });
        this.subscribeToFormValueChanges();
        this.setupCustomValidations();
    };
    /**
     * Sets the form values based on food item input
     *
     * @param foodItem
     */
    CustomFoodComponent.prototype.setFormThroughFoodItem = function (foodItem) {
        this.initForm();
        this.form.get('name').setValue(foodItem.name);
        this.form.get('serving_size').get('unit').setValue(foodItem.serving_size.unit, {
            emitEvent: false
        });
        this.form.get('serving_size').get('amount').setValue(foodItem.serving_size.amount);
        this.form.get('calories').setValue(foodItem.serving_size.calories);
        this.form.get('fats').setValue(foodItem.serving_size.fats);
        this.form.get('carbs').setValue(foodItem.serving_size.carbs);
        this.form.get('protein').setValue(foodItem.serving_size.protein);
        this.form.get('calculatedCalories').setValue(foodItem.calories);
        this.form.get('calculatedFats').setValue(foodItem.fats);
        this.form.get('calculatedCarbs').setValue(foodItem.carbs);
        this.form.get('calculatedProtein').setValue(foodItem.protein);
        this.form.get('amount_consumed').get('unit').setValue(foodItem.amount_consumed.unit);
        this.form.get('amount_consumed').get('amount').setValue(foodItem.amount_consumed.amount, {
            emitEvent: false
        });
    };
    CustomFoodComponent.prototype.calculateRelativeValueConsumed = function (consumedSize, consumedAmount, macro, servingSize) {
        consumedAmount = this.isConsumable ? consumedAmount : 1;
        // Handle custom or template foods.
        if (this.isCustom || this.isTemplateFood) {
            if (consumedSize.measure === 'serving') {
                return consumedAmount * macro;
            }
            return (consumedAmount / servingSize.amount) * macro;
        }
        var baseServing = this.servingSizes
            .find(function (serving) { return serving.measure === servingSize.unit; });
        // Based on the information we get back from Nutritionix, calculate the new "weight" of the product.
        // Take the serving weight, which defines, for a given size, e.g. cup, how many base units exist within the product.
        // E.g. if I have 2 "cups" selected, the serving weight will be 244. In many cases, the quantity in the consumedSize
        // is 1 or is actually the serving_weight itself (like when using grams). However, in come cases, the quantity is
        // not 1 or 100, but might be "3" like it is with grilled chicken breast. I'm not sure they don't just say that the
        // quantity is 28.33, but it could just be that is how they represent the fraction.
        var perConsumedSizeWeight = (consumedSize.serving_weight / (consumedSize.qty || consumedSize.quantity));
        // We then take that amount per unit consumed and actually multiply it by the amount we are consuming.
        var newWeight = perConsumedSizeWeight * consumedAmount;
        // Now, we know how much of the product's base weight is being consumed. Since *most* products have a base weight
        // associated with them (e.g. 200 calories = 50 grams) then we need to figure out what the new macro is by dividing
        // that by the base weight first and then multiplying that by the new weight.
        // It turns out that for some products (like metric liquids), there is no base weight and the products themselves
        // are just measured by some base unit like mL. Therefore, if the base_weight is null, just use 1 since when the
        // food is converted, we are adding the default serving quantity, which fixes everything above.
        var perServingWeight = ((baseServing.qty || baseServing.quantity) / baseServing.serving_weight) / servingSize.amount;
        return newWeight * macro * perServingWeight;
    };
    CustomFoodComponent.prototype.setCalculatedValues = function () {
        var form = this.form.getRawValue();
        var consumedSizeMeasure = this._defaultServingSizes.find(function (size) { return size.measure === form.amount_consumed.unit; });
        if (!consumedSizeMeasure) {
            return;
        }
        if (this.isCustom) {
            this.customConversion = !!this.form.get('amount_consumed').get('amount').value;
        }
        else {
            this.customConversion = false;
        }
        this.form.get('calculatedCalories').setValue(this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.calories, form.serving_size).toFixed(2));
        this.form.get('calculatedFats').setValue(this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.fats, form.serving_size).toFixed(2));
        this.form.get('calculatedCarbs').setValue(this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.carbs, form.serving_size).toFixed(2));
        this.form.get('calculatedProtein').setValue(this.calculateRelativeValueConsumed(consumedSizeMeasure, form.amount_consumed.amount, form.protein, form.serving_size).toFixed(2));
    };
    CustomFoodComponent.prototype.fixForSmallIosScreenSizeOpen = function (value) {
        if (this.platform.is('cordova') && this.platform.is('iphone')) {
            window.Keyboard.hideFormAccessoryBar(value);
        }
    };
    CustomFoodComponent.prototype.cancelDelete = function () {
        this.confirmingDelete = false;
    };
    CustomFoodComponent.prototype.delete = function () {
        this.confirmingDelete = true;
    };
    Object.defineProperty(CustomFoodComponent.prototype, "updateColor", {
        get: function () {
            if (this.isDeletable) {
                if (this.form.get('amount_consumed').get('amount').value === 0) {
                    return 'danger';
                }
            }
            return 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomFoodComponent.prototype, "updateText", {
        get: function () {
            if (this.isDeletable) {
                if (this.form.get('amount_consumed').get('amount').value === 0 || this.confirmingDelete) {
                    return 'Delete';
                }
            }
            return 'Save';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomFoodComponent.prototype, "isDisabledAmountConsumed", {
        get: function () {
            if (!this.isCustom) {
                return false;
            }
            var value = (this.form.get('serving_size').get('unit').value) && (this.form.get('serving_size').get('amount').value >= 0)
                && (this.form.get('calories').value >= 0 && this.form.get('carbs').value >= 0)
                && (this.form.get('fats').value >= 0 && this.form.get('protein').value >= 0);
            value = !!value;
            return !value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomFoodComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomFoodComponent.prototype, "foodItemCreated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomFoodComponent.prototype, "mealIndexChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomFoodComponent.prototype, "removeFoodItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFoodComponent.prototype, "isCustom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CustomFoodComponent.prototype, "mealIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CustomFoodComponent.prototype, "foodItem", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFoodComponent.prototype, "showMealSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFoodComponent.prototype, "isConsumable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CustomFoodComponent.prototype, "defaultServingSizes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFoodComponent.prototype, "isDeletable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomFoodComponent.prototype, "originalServingUnit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFoodComponent.prototype, "showServing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFoodComponent.prototype, "isTemplateFood", void 0);
    CustomFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-food',
            template: __webpack_require__(/*! ./custom-food.component.html */ "./src/app/components/nutrition/custom-food/custom-food.component.html"),
            styles: [__webpack_require__(/*! ./custom-food.component.scss */ "./src/app/components/nutrition/custom-food/custom-food.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], CustomFoodComponent);
    return CustomFoodComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/custom-macros/custom-macros.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/nutrition/custom-macros/custom-macros.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\r\n  <h5>\r\n    Edit Macros\r\n    <ion-button fill=\"clear\" type=\"icon\" (click)=\"close()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n</section>\r\n<ion-content>\r\n  <div class=\"info\" padding *ngIf=\"showDidYouKnow\">\r\n    <p class=\"did-you-know\">When adjusting your macros there are some important things you need to know and\r\n      understand.</p>\r\n    <h5>Fat</h5>\r\n    <p>Fat is an essential part of your diet and necessary for good health. It is important to maintain a minimum amount\r\n      of fat in the diet as fat has many roles such as helping to absorb and transport fat-soluble vitamins A, D, E and\r\n      K.\r\n      The body needs fat to properly absorb these vitamins which are necessary for the healthy of your bones, skin,\r\n      cardiovascular system, along with other organs and systems.</p>\r\n\r\n    <p>Fat provides our bodies with essential fatty acids which are required to build and maintain our cell membranes,\r\n      which is important for skin, hair, eyes, heart, brain and much more.</p>\r\n\r\n    <p>Fat is important in manufacturing and balancing hormone levels.</p>\r\n\r\n    <p>Fat is also a fuel source. So when choose low fat make sure you have another carbs (our other fuel source) in\r\n      your\r\n      diet.</p>\r\n\r\n    <p>Some signs and symptoms of too lower of fat in the diet included but are not limited to. Dry eyes, dry and scaly\r\n      skin, dry hair and/or hair loss, normal problems, including loss of menstrual cycle, inability to feel full/always\r\n      feeling hungry, issues concentrating and/or mental fatigue, constant fatigue, deficiencies in fat-soluble\r\n      vitamins.</p>\r\n\r\n    <p>We recommend that you do not go under 40 grams for females and 50 grams for males.</p>\r\n\r\n    <h5>Carbs</h5>\r\n    <p>Carbs are a fuel source for your body and the need for carbs is based heavily on your activity level and training\r\n      style. Carbs are the main fuel source for traditional weight lifting and high intensity or high intensity interval\r\n      training. You body is also very good at utilizing carbs for everyday tasks and natural energy levels.</p>\r\n\r\n    <p>Generally we recommend that you do not go below 100 grams for females and 120 grams for males, however, going\r\n      below\r\n      those numbers does not pose a health risk as long as your fat sources are high enough to provide your body the\r\n      fuel\r\n      you need.</p>\r\n\r\n    <h5>Protein</h5>\r\n    <p>Protein in vital to health and fitness results. It is the catalyst for gaining or maintaining lean muscle as well\r\n      as burning fat. You always want to make sure your protein intake is high enough and that you are eating protein or\r\n      drinking a protein shake every few hours.</p>\r\n    <p>We recommend that your protein be set between .8 and 1.2 grams per pound of your <strong>goal</strong> body weight.</p>\r\n\r\n    <p>If you have any specific questions feel free to contact our registered dietitian for free.</p>\r\n    <ion-button margin-bottom\r\n                expand=\"full\"\r\n                href=\"mailto:jeremy@1stphorm.com?subject=Question+about+macros\">Email jeremy@1stphorm.com\r\n      <ion-icon name=\"mail-open\" slot=\"end\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <div>\r\n      <ion-button class=\"dont-show-again\" fill=\"clear\" (click)=\"setDidYouKnow()\">Don't Show Again</ion-button>\r\n      <ion-button class=\"learn-more\" float-right shape=\"round\" (click)=\"hide()\">Hide</ion-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"history\" *ngIf=\"customMacros.length > 0\" margin-top>\r\n    <h6 text-capitalize text-center (click)=\"showHistory = !showHistory\">\r\n      {{ showHistory ? '' : 'Show' }} Edit History\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon name=\"{{ showHistory ? 'arrow-down' : 'arrow-forward' }}\" mode=\"ios\"></ion-icon>\r\n      </ion-button>\r\n    </h6>\r\n    <div [class.hide]=\"!showHistory\">\r\n      <p class=\"legend\">Reverted to original <sub>\r\n        <ion-icon name=\"refresh\"></ion-icon>\r\n      </sub></p>\r\n      <div class=\"grid\">\r\n        <div class=\"row heading\">\r\n          <div class=\"col\">Date</div>\r\n          <div class=\"col\">Calories</div>\r\n          <div class=\"col\">Protein</div>\r\n          <div class=\"col\">Carbs</div>\r\n          <div class=\"col\">Fats</div>\r\n        </div>\r\n        <ng-container *ngFor=\"let customMacro of customMacros; let i = index\">\r\n          <ng-container *ngIf=\"i < showMoreHistoryOffset || showMoreHistory === true\">\r\n            <div class=\"row values\">\r\n              <div class=\"col macro-date\">{{ customMacro.edit_date.format('M/D/YY') }}\r\n                <sub *ngIf=\"customMacro.reset_to_original\">\r\n                  <ion-icon name=\"refresh\"></ion-icon>\r\n                </sub></div>\r\n              <div class=\"col calories\" text-center>{{ customMacro.calories }}</div>\r\n              <div class=\"col protein\" text-center>{{ customMacro.protein }}</div>\r\n              <div class=\"col carbs\" text-center>{{ customMacro.carbs }}</div>\r\n              <div class=\"col fats\" text-center>{{ customMacro.fats }}</div>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"show-more\" *ngIf=\"customMacros.length > showMoreHistoryOffset\">\r\n        <ion-button fill=\"clear\" color=\"primary\" (click)=\"showMoreHistory = !showMoreHistory\">\r\n          Show {{ showMoreHistory ? 'Less' : 'More' }}</ion-button>\r\n        <p>Showing {{ !showMoreHistory ? showMoreHistoryOffset : customMacros.length }} of {{ customMacros.length }}\r\n          changes</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p class=\"singe-macro-history\" *ngIf=\"!showHistory && customMacros.length > 0\">Last edit\r\n    on {{ customMacros[0].edit_date.format('M/D/YY') }} by you</p>\r\n  <h5 text-center text-uppercase margin-top margin-bottom>{{ isOriginal ? 'Suggested Macros' : 'Custom Macros' }}</h5>\r\n  <div class=\"macro-editing\">\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"global-input\">\r\n        <ion-label>Calories</ion-label>\r\n        <ion-input text-center type=\"number\" formControlName=\"calories\"></ion-input>\r\n      </div>\r\n      <div class=\"macro-inputs\">\r\n        <ion-label text-uppercase>Macros</ion-label>\r\n        <div class=\"grid\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <ion-input text-center type=\"number\" formControlName=\"protein\" class=\"protein\"></ion-input>\r\n              <ion-label>Protein (<span text-lowercase>g</span>)</ion-label>\r\n            </div>\r\n            <div class=\"col\">\r\n              <ion-input text-center type=\"number\" formControlName=\"carbs\" class=\"carbs\"></ion-input>\r\n              <ion-label>Carbs (<span text-lowercase>g</span>)</ion-label>\r\n            </div>\r\n            <div class=\"col\">\r\n              <ion-input text-center type=\"number\" formControlName=\"fats\" class=\"fats\"></ion-input>\r\n              <ion-label>Fats (<span text-lowercase>g</span>)</ion-label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div *ngIf=\"isOriginal\" class=\"edit-action\" padding>\r\n    <ion-button fill=\"outline\" expand=\"full\" (click)=\"setEditMode()\">Edit</ion-button>\r\n  </div>\r\n  <div *ngIf=\"!isOriginal\" class=\"custom-actions\">\r\n    <div class=\"grid\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <ion-button color=\"danger\" fill=\"clear\" *ngIf=\"activeMacro\" (click)=\"revertToOriginal()\" text-wrap>Reset to\r\n            suggested\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"col\" text-center>\r\n          <ion-button fill=\"clear\" (click)=\"close()\">Cancel</ion-button>\r\n        </div>\r\n        <div class=\"col\" text-center>\r\n          <ion-button (click)=\"saveCustomMacroSetting()\" [disabled]=\"form.pristine || form.invalid\">Save</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/custom-macros/custom-macros.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/nutrition/custom-macros/custom-macros.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  margin-bottom: 10px; }\n  .header h5 {\n    text-align: center; }\n  .header ion-button {\n    position: absolute;\n    top: 5px;\n    right: 0; }\n  h5 {\n  padding-top: 20px;\n  text-transform: uppercase;\n  font-weight: 900; }\n  .info {\n  background: #FFF7D3;\n  margin: 0 10px; }\n  .info p {\n    font-size: 12px; }\n  .info p.did-you-know {\n      font-weight: 600; }\n  .info ion-button {\n    font-size: 12px; }\n  .info ion-button.dont-show-again {\n      --padding-start: 0; }\n  .info ion-button.learn-more {\n      --background: #FDD724; }\n  .macro-editing ion-input {\n  --background: #f4f4f4;\n  font-weight: 900;\n  font-size: 18px; }\n  .macro-editing ion-input[aria-disabled=\"true\"] {\n    color: black; }\n  .macro-editing .global-input {\n  padding: 0 10px; }\n  .macro-editing .global-input ion-input {\n    margin-top: 10px; }\n  .macro-editing .macro-inputs {\n  margin-top: 10px; }\n  .macro-editing .macro-inputs > ion-label {\n    padding: 0 10px; }\n  .macro-editing .macro-inputs .grid {\n    margin-top: 10px; }\n  .macro-editing .row {\n  display: flex;\n  padding: 0 10px;\n  text-align: center;\n  justify-content: space-between;\n  text-transform: uppercase; }\n  .macro-editing .row .col {\n    width: 30%; }\n  .macro-editing .row .col ion-label {\n      font-size: 12px;\n      color: rgba(0, 0, 0, 0.5); }\n  .protein {\n  color: var(--ion-1p-protein-color); }\n  .fats {\n  color: var(--ion-1p-fat-color); }\n  .carbs {\n  color: var(--ion-1p-carb-color); }\n  .calories {\n  color: var(--ion-1p-calorie-color); }\n  .macro-entry {\n  margin: 16px 0; }\n  .macro-container {\n  display: flex; }\n  .macro-container div {\n    margin-left: 8px;\n    text-align: center; }\n  .macro-container div:first-child {\n      margin-left: 0; }\n  .macro-container div .caption {\n      font-size: var(--ion-1p-font-size-caption);\n      text-transform: uppercase;\n      font-weight: 900;\n      color: var(--ion-color-text-gray); }\n  .macro-container div ion-input {\n      margin: 6px 0; }\n  .history {\n  background: #F2F2F2; }\n  .history > div {\n    padding-bottom: 10px; }\n  .history h6 {\n    height: 50px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .history h6 ion-button {\n      position: absolute;\n      right: 0;\n      top: -2px;\n      font-size: 15px; }\n  .history .row {\n    display: flex;\n    text-transform: uppercase;\n    font-weight: 900;\n    margin: 20px 0; }\n  .history .row.values .col {\n      font-size: 18px; }\n  .history .row .col {\n      width: 18%;\n      text-align: center; }\n  .history .row .col:first-child {\n        width: 28%;\n        text-align: left;\n        padding-left: 10px; }\n  .history .row .col.macro-date {\n        color: rgba(0, 0, 0, 0.5);\n        font-size: 13px; }\n  .history .row .col.macro-date sub ion-icon {\n          color: red;\n          position: absolute;\n          bottom: 7px;\n          left: 2px;\n          font-size: 8px; }\n  .history .heading {\n    font-size: 11px;\n    text-align: center; }\n  .show-more {\n  background: #E5E5E5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  margin: 10px 10px;\n  padding: 15px; }\n  .show-more > * {\n    font-size: 12px; }\n  .show-more ion-button {\n    height: 20px; }\n  .show-more p {\n    margin: 0; }\n  .legend {\n  font-size: 12px;\n  padding: 0 10px;\n  margin: 0; }\n  .legend sub {\n    color: red; }\n  .singe-macro-history {\n  text-align: center;\n  font-size: 12px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.5); }\n  .hide {\n  display: none; }\n  .custom-actions, .edit-action {\n  margin-top: 35px; }\n  .custom-actions .row {\n  display: flex; }\n  .custom-actions .row .col {\n    width: 33%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vY3VzdG9tLW1hY3Jvcy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG51dHJpdGlvblxcY3VzdG9tLW1hY3Jvc1xcY3VzdG9tLW1hY3Jvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBO0VBRHJCO0lBSUksa0JBQWtCLEVBQUE7RUFKdEI7SUFRSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVEsRUFBQTtFQUlaO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7RUFGaEI7SUFLSSxlQUFlLEVBQUE7RUFMbkI7TUFRTSxnQkFBZ0IsRUFBQTtFQVJ0QjtJQWFJLGVBQWUsRUFBQTtFQWJuQjtNQWdCTSxrQkFBZ0IsRUFBQTtFQWhCdEI7TUFvQk0scUJBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUpuQjtJQU9NLFlBQVksRUFBQTtFQVBsQjtFQVlJLGVBQWUsRUFBQTtFQVpuQjtJQWNNLGdCQUFnQixFQUFBO0VBZHRCO0VBbUJJLGdCQUFnQixFQUFBO0VBbkJwQjtJQXNCTSxlQUFlLEVBQUE7RUF0QnJCO0lBMEJNLGdCQUFnQixFQUFBO0VBMUJ0QjtFQStCSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIseUJBQXlCLEVBQUE7RUFuQzdCO0lBc0NNLFVBQVUsRUFBQTtFQXRDaEI7TUF5Q1EsZUFBZTtNQUNmLHlCQUF5QixFQUFBO0VBTWpDO0VBQ0Usa0NBQWtDLEVBQUE7RUFHcEM7RUFDRSw4QkFBOEIsRUFBQTtFQUdoQztFQUNFLCtCQUErQixFQUFBO0VBR2pDO0VBQ0Usa0NBQWtDLEVBQUE7RUFHcEM7RUFDRSxjQUFjLEVBQUE7RUFHaEI7RUFDRSxhQUFhLEVBQUE7RUFEZjtJQUdJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQUp0QjtNQU1NLGNBQWMsRUFBQTtFQU5wQjtNQVNNLDBDQUEwQztNQUMxQyx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGlDQUFpQyxFQUFBO0VBWnZDO01BZU0sYUFBYSxFQUFBO0VBS25CO0VBQ0UsbUJBQW1CLEVBQUE7RUFEckI7SUFJSSxvQkFBb0IsRUFBQTtFQUp4QjtJQVFJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtFQVp2QjtNQWVNLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGVBQWUsRUFBQTtFQWxCckI7SUF1QkksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VBMUJsQjtNQThCUSxlQUFlLEVBQUE7RUE5QnZCO01BbUNNLFVBQVU7TUFDVixrQkFBa0IsRUFBQTtFQXBDeEI7UUF1Q1EsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixrQkFBa0IsRUFBQTtFQXpDMUI7UUE2Q1EseUJBQXlCO1FBQ3pCLGVBQWUsRUFBQTtFQTlDdkI7VUFpRFUsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsU0FBUztVQUNULGNBQWMsRUFBQTtFQXJEeEI7SUE0REksZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0VBUGY7SUFVSSxlQUFlLEVBQUE7RUFWbkI7SUFjSSxZQUFZLEVBQUE7RUFkaEI7SUFrQkksU0FBUyxFQUFBO0VBSWI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTtFQUhYO0lBTUksVUFBVSxFQUFBO0VBS2Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7RUFFSSxhQUFhLEVBQUE7RUFGakI7SUFJTSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251dHJpdGlvbi9jdXN0b20tbWFjcm9zL2N1c3RvbS1tYWNyb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5oNSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjdEMztcclxuICBtYXJnaW46IDAgMTBweDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgJi5kaWQteW91LWtub3cge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgJi5kb250LXNob3ctYWdhaW4ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5sZWFybi1tb3JlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjRkRENzI0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hY3JvLWVkaXRpbmcge1xyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICZbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0ge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ2xvYmFsLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFjcm8taW5wdXRzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgPiBpb24tbGFiZWwge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAuY29sIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm90ZWluIHtcclxuICBjb2xvcjogdmFyKC0taW9uLTFwLXByb3RlaW4tY29sb3IpO1xyXG59XHJcblxyXG4uZmF0cyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1mYXQtY29sb3IpO1xyXG59XHJcblxyXG4uY2FyYnMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tMXAtY2FyYi1jb2xvcik7XHJcbn1cclxuXHJcbi5jYWxvcmllcyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1jYWxvcmllLWNvbG9yKTtcclxufVxyXG5cclxuLm1hY3JvLWVudHJ5IHtcclxuICBtYXJnaW46IDE2cHggMDtcclxufVxyXG5cclxuLm1hY3JvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5jYXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tMXAtZm9udC1zaXplLWNhcHRpb24pO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQtZ3JheSk7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpc3Rvcnkge1xyXG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICAgICYudmFsdWVzIHtcclxuICAgICAgLmNvbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubWFjcm8tZGF0ZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gICAgICAgIHN1YiBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5zaG93LW1vcmUge1xyXG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gID4gKiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmxlZ2VuZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIHN1YiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zaW5nZS1tYWNyby1oaXN0b3J5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1hY3Rpb25zLCAuZWRpdC1hY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tYWN0aW9ucyB7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmNvbCB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nutrition/custom-macros/custom-macros.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/nutrition/custom-macros/custom-macros.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomMacrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMacrosComponent", function() { return CustomMacrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/custom-macro/custom-macro.service */ "./src/app/services/custom-macro/custom-macro.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
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








var DID_YOU_KNOW_SHOW_SETTING_KEY = 'didYouKnow';
var CustomMacrosComponent = /** @class */ (function () {
    function CustomMacrosComponent(modal, customMacroService, cacheService, loadingCtrl, toastService, errorService) {
        this.modal = modal;
        this.customMacroService = customMacroService;
        this.cacheService = cacheService;
        this.loadingCtrl = loadingCtrl;
        this.toastService = toastService;
        this.errorService = errorService;
        this.originalMacro = {
            calories: 0,
            fats: 0,
            protein: 0,
            carbs: 0,
        };
        /**
         * Whether the macro is being used is original or custom
         */
        this.isOriginal = true;
        /**
         * List of previous custom macro setting
         */
        this.customMacros = [];
        /**
         * Current Active Custom Macro
         */
        this.activeMacro = null;
        /**
         * Today's date
         */
        this.today = moment__WEBPACK_IMPORTED_MODULE_4__();
        /**
         * Flag to show "did you know" content
         */
        this.showDidYouKnow = false;
        /**
         * Show history as expanded value
         */
        this.showHistory = false;
        /**
         * Show complete history list
         */
        this.showMoreHistory = false;
        this.showMoreHistoryOffset = 3;
        var showYouKnowStorage = JSON.parse(window.localStorage.getItem(DID_YOU_KNOW_SHOW_SETTING_KEY));
        this.showDidYouKnow = showYouKnowStorage === true || showYouKnowStorage === undefined || showYouKnowStorage === null;
    }
    CustomMacrosComponent.prototype.ngOnInit = function () {
        this.setupForm();
        this.setupHistory();
    };
    /**
     * Setup listing of all custom macros
     */
    CustomMacrosComponent.prototype.setupHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.customMacroService.history()];
                    case 1:
                        _a.customMacros = (_b.sent());
                        if (this.customMacros.length > 0) {
                            this.setActiveMacro(this.customMacros[0]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Setup form with values
     */
    CustomMacrosComponent.prototype.setupForm = function () {
        var _this = this;
        if (this.form) {
            return;
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            calories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.originalMacro.calories, disabled: true }),
            fats: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.originalMacro.fats, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
            carbs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.originalMacro.carbs, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
            protein: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.originalMacro.protein, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])
        });
        this.form.disable();
        /**
         * handling value change for setting calories
         */
        this.form.valueChanges.subscribe(function (form) {
            // if original macro values are to be used
            if (_this.isOriginal) {
                _this.form.get('calories').setValue(_this.originalMacro.calories, {
                    emitEvent: false
                });
                _this.form.get('calories').markAsPristine();
            }
            else if (_this.form.valid) {
                var _a = _this.form.getRawValue(), carbs = _a.carbs, fats = _a.fats, protein = _a.protein;
                _this.form.get('calories').setValue(_this.calculateCustomCalories(carbs, fats, protein), {
                    emitEvent: false
                });
                if (fats === _this.originalMacro.fats && carbs === _this.originalMacro.carbs && protein === _this.originalMacro.protein) {
                    _this.form.markAsPristine();
                }
            }
        });
    };
    /**
     * Close the modal
     */
    CustomMacrosComponent.prototype.close = function () {
        this.modal.dismiss(this.activeMacro);
    };
    /**
     * Change form default macro usage to creating custom macro
     */
    CustomMacrosComponent.prototype.setEditMode = function () {
        this.isOriginal = false;
        this.form.enable();
        this.form.get('calories').disable();
    };
    /**
     * Calculation for calories for custom macro
     *
     * @param carbs
     * @param fats
     * @param protein
     */
    CustomMacrosComponent.prototype.calculateCustomCalories = function (carbs, fats, protein) {
        return 4 * protein + 4 * carbs + 9 * fats;
    };
    /**
     * Revert to original calculated macro values
     */
    CustomMacrosComponent.prototype.revertToOriginal = function () {
        this.isOriginal = true;
        this.form.setValue(this.originalMacro, {
            emitEvent: false
        });
        // if current active record is for today
        if (this.isActiveRecordForToday) {
            this.updateActiveMacro();
        }
        else {
            this.form.disable();
            if (this.customMacros.length > 0) {
                this.createCustomMacro(this.today.format('YYYY-MM-DD'));
            }
        }
    };
    /**
     * Save the custom macro
     */
    CustomMacrosComponent.prototype.saveCustomMacroSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // if custom macro is for same date then updating the existing else creating new
                if (this.isActiveRecordForToday) {
                    this.updateActiveMacro();
                }
                else {
                    this.createCustomMacro(this.today.format('YYYY-MM-DD'));
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Creates new macro record
     * @param date
     */
    CustomMacrosComponent.prototype.createCustomMacro = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var form, macro, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        form = this.form.getRawValue();
                        return [4 /*yield*/, this.customMacroService.create(this.isOriginal, form.protein, form.carbs, form.fats, date)];
                    case 1:
                        macro = _a.sent();
                        this.customMacros.push(macro);
                        this.setActiveMacro(macro);
                        this.sortMacros();
                        this.cacheService.clearKey(_services_custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_3__["CustomMacroService"].Url('nutritions/custom-macros'), 'GET');
                        this.toastService.flash('Your custom macros have been saved.');
                        this.close();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updating active macro value
     */
    CustomMacrosComponent.prototype.updateActiveMacro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var form, macro_1, macroIndex, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        form = this.form.getRawValue();
                        return [4 /*yield*/, this.customMacroService.update(this.activeMacro.id, this.isOriginal, form.protein, form.carbs, form.fats)];
                    case 1:
                        macro_1 = _a.sent();
                        macroIndex = this.customMacros.findIndex(function (customMacro) { return customMacro.id === macro_1.id; });
                        this.customMacros[macroIndex] = macro_1;
                        this.setActiveMacro(macro_1);
                        this.sortMacros();
                        this.cacheService.clearKey(_services_custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_3__["CustomMacroService"].Url('nutritions/custom-macros'), 'GET');
                        this.toastService.flash('Your custom macros have been saved.');
                        this.close();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_3));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets the current active macro
     * @param macro
     */
    CustomMacrosComponent.prototype.setActiveMacro = function (macro) {
        this.activeMacro = macro;
        this.isOriginal = this.activeMacro.reset_to_original;
        if (this.isOriginal) {
            this.form.disable();
            this.form.setValue(this.originalMacro, {
                emitEvent: false
            });
        }
        else {
            this.form.enable();
            this.form.get('calories').disable();
            this.form.setValue({
                calories: macro.calories,
                fats: macro.fats,
                carbs: macro.carbs,
                protein: macro.protein,
            });
        }
        this.form.markAsPristine();
    };
    Object.defineProperty(CustomMacrosComponent.prototype, "isActiveRecordForToday", {
        /**
         * Returns true if the active custom macro record is for today
         */
        get: function () {
            if (!this.activeMacro) {
                return false;
            }
            this.today.set('h', 0).set('minute', 0).set('second', 0);
            this.activeMacro.edit_date.set('h', 0).set('minute', 0).set('second', 0);
            return this.today.unix() === this.activeMacro.edit_date.unix();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sort the macros based on edit date with latest date at the top
     */
    CustomMacrosComponent.prototype.sortMacros = function () {
        this.customMacros = this.customMacros.sort(function (macro1, macro2) {
            return macro1.edit_date.isSameOrAfter(macro2.edit_date) ? -1 : 1;
        });
    };
    CustomMacrosComponent.prototype.setDidYouKnow = function () {
        this.showDidYouKnow = false;
        window.localStorage.setItem(DID_YOU_KNOW_SHOW_SETTING_KEY, 'false');
    };
    CustomMacrosComponent.prototype.hide = function () {
        this.showDidYouKnow = false;
    };
    /**
     * Returns current active macro or null if none is set
     */
    CustomMacrosComponent.prototype.getActiveMacro = function () {
        return this.activeMacro;
    };
    CustomMacrosComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomMacrosComponent.prototype, "originalMacro", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CustomMacrosComponent.prototype, "backButtonHandler", null);
    CustomMacrosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-macros',
            template: __webpack_require__(/*! ./custom-macros.component.html */ "./src/app/components/nutrition/custom-macros/custom-macros.component.html"),
            styles: [__webpack_require__(/*! ./custom-macros.component.scss */ "./src/app/components/nutrition/custom-macros/custom-macros.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_3__["CustomMacroService"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_5__["RequestCachingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__["ErrorsService"]])
    ], CustomMacrosComponent);
    return CustomMacrosComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/edit-food/edit-food.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition/edit-food/edit-food.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h5 class=\"title\">\r\n    Edit Food\r\n    <ion-button float-right size=\"small\" fill=\"clear\" class=\"close\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n  <app-custom-food [mealIndex]=\"mealIndex\" [isCustom]=\"foodItem.is_custom\" [foodItem]=\"foodItem\"\r\n                   (cancel)=\"closeModal()\"\r\n                   (removeFoodItem)=\"removeFoodItem()\"\r\n                   [isDeletable]=\"true\"\r\n                   (mealIndexChanged)=\"mealIndex = $event\"\r\n                   [defaultServingSizes]=\"foodItem.alt_servings\"\r\n                   [showServing]=\"isCustom\"\r\n                   [isTemplateFood]=\"foodItem.is_custom || foodItem.is_custom\"\r\n                   (foodItemCreated)=\"updateFoodItem($event)\"></app-custom-food>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/edit-food/edit-food.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition/edit-food/edit-food.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 40px 15px 15px; }\n  .header .close {\n    color: #999;\n    position: absolute;\n    top: 25px;\n    right: 10px;\n    font-size: 20px; }\n  .header .title {\n    text-align: center;\n    text-transform: uppercase;\n    align-self: center;\n    font-weight: 900; }\n  .add-food {\n  padding: 0 12px;\n  font-weight: 900; }\n  .add-food .search {\n    display: flex;\n    align-items: center; }\n  .add-food .get-started {\n    text-align: center;\n    margin-top: 150px;\n    color: #999; }\n  .add-food .get-started .title {\n      text-transform: uppercase;\n      color: #555; }\n  .add-food .get-started span {\n      font-size: 12px;\n      padding: 10px; }\n  .add-food ion-searchbar {\n    --background: #262626;\n    --placeholder-color: #fff;\n    height: 40px;\n    border-radius: 0;\n    caret-color: #ffffff;\n    color: #ffffff; }\n  .add-food ion-searchbar.searching {\n      --background: #ffffff;\n      caret-color: #000000;\n      color: #000000; }\n  .add-food ion-input {\n    --background: #f4f4f4;\n    text-align: center;\n    font-weight: 900; }\n  .add-food ion-label {\n    font-size: 14px;\n    font-weight: 900; }\n  .edit-food {\n  padding: 10px;\n  height: calc(500px - 75px);\n  overflow-y: scroll; }\n  .edit-food::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px; }\n  .edit-food::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n  .edit-food .macros .category {\n    text-align: center;\n    margin: 0 5px; }\n  .edit-food .macros .category span {\n      font-size: 10px;\n      text-transform: uppercase; }\n  .edit-food .select {\n    padding: 5px 12px; }\n  .edit-food ion-select {\n    background: #f4f4f4;\n    text-align: center; }\n  .edit-food .meal ion-button {\n    padding: 2px;\n    color: #999;\n    font-size: 20px;\n    --background: #f4f4f4; }\n  .edit-food .meal .active {\n    --background: #000;\n    color: #fff; }\n  .edit-food .food-name {\n    font-weight: 500; }\n  .edit-food .bottom-btn {\n    margin-top: 10px;\n    position: absolute;\n    width: 90%;\n    bottom: 10px; }\n  .edit-food .bottom-btn ion-button {\n      text-transform: uppercase;\n      font-size: 14px; }\n  .inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .search-listing ul {\n  margin: 0 10px;\n  box-shadow: 1px 1px 5px 4px #e3e3e3;\n  list-style: none;\n  height: 35vh;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 25px;\n  padding-top: 10px; }\n  .search-listing li {\n  font-weight: 900;\n  padding: 5px 0;\n  color: #4c4c4c;\n  text-transform: capitalize; }\n  .search-listing li.meal-template ion-icon {\n    color: var(--ion-color-brand);\n    font-size: 30px;\n    float: right;\n    position: relative;\n    left: 20px; }\n  .search-listing li .category {\n    font-weight: 100;\n    font-size: 12px;\n    display: block; }\n  .around-this-time {\n  padding: 20px 10px; }\n  .around-this-time .title {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #b2b2b2; }\n  .around-this-time ul {\n    list-style: none;\n    margin: 0;\n    padding: 10px 0; }\n  .around-this-time li {\n    margin: 10px 0; }\n  .around-this-time li .food-name {\n      font-size: 14px;\n      font-weight: bold;\n      text-transform: capitalize; }\n  .around-this-time li .food-quantity {\n      font-weight: 100;\n      font-size: 12px;\n      padding: 2px 0; }\n  .around-this-time li.meal-template > span {\n      display: block; }\n  .around-this-time li.meal-template ion-icon {\n      float: right;\n      color: var(--ion-color-brand);\n      font-size: 30px; }\n  .around-this-time button .title {\n    color: #1fb2d2; }\n  button {\n  background: #f2f2f2;\n  height: 56px;\n  width: 100%; }\n  button .title {\n    font-size: 14px;\n    color: #1ba9cc;\n    font-weight: 900; }\n  button .tag {\n    font-weight: 100;\n    font-size: 12px;\n    padding: 3px 0;\n    line-height: 20px; }\n  .other-listing {\n  height: calc(500px - 160px);\n  overflow-y: scroll; }\n  @media (max-width: 1024px) {\n  .other-listing {\n    height: calc(600px - 160px); }\n  .edit-food {\n    height: calc(600px - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 415px) {\n  .other-listing {\n    height: calc(100vh - 160px); }\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 320px) {\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vZWRpdC1mb29kL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxhZGQtZm9vZFxcYWRkLWZvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTtFQUR6QjtJQUlJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFSbkI7SUFZSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQU52QjtJQVVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBWmY7TUFlTSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBaEJqQjtNQW9CTSxlQUFlO01BQ2YsYUFBYSxFQUFBO0VBckJuQjtJQTBCSSxxQkFBYTtJQUNiLHlCQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjLEVBQUE7RUEvQmxCO01Ba0NNLHFCQUFhO01BQ2Isb0JBQW9CO01BQ3BCLGNBQWMsRUFBQTtFQXBDcEI7SUF5Q0kscUJBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUEzQ3BCO0lBK0NJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7RUFIcEI7SUFPSSx3QkFBd0I7SUFDeEIsVUFBVSxFQUFBO0VBUmQ7SUFXSSxrQkFBa0I7SUFDbEIsb0NBQWdDO0lBQ2hDLG9EQUFnRCxFQUFBO0VBYnBEO0lBa0JNLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFuQm5CO01Bc0JRLGVBQWU7TUFDZix5QkFBeUIsRUFBQTtFQXZCakM7SUE2QkksaUJBQWlCLEVBQUE7RUE3QnJCO0lBaUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQWxDdEI7SUF1Q00sWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQWEsRUFBQTtFQTFDbkI7SUE4Q00sa0JBQWE7SUFDYixXQUFXLEVBQUE7RUEvQ2pCO0lBb0RJLGdCQUFnQixFQUFBO0VBcERwQjtJQXdESSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUEzRGhCO01BOERNLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFLckI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0VBR3JCO0VBRUksY0FBYztFQUNkLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBVHJCO0VBYUksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7RUFoQjlCO0lBbUJNLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUF2QmhCO0lBMkJNLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBS3BCO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFJSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQU5sQjtJQVVJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZSxFQUFBO0VBWm5CO0lBZ0JJLGNBQWMsRUFBQTtFQWhCbEI7TUFtQk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQiwwQkFBMEIsRUFBQTtFQXJCaEM7TUF5Qk0sZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixjQUFjLEVBQUE7RUEzQnBCO01BZ0NRLGNBQWMsRUFBQTtFQWhDdEI7TUFvQ1EsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixlQUFlLEVBQUE7RUF0Q3ZCO0lBNENJLGNBQWMsRUFBQTtFQUlsQjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVyxFQUFBO0VBSGI7SUFNSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBUnBCO0lBWUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7RUFHcEI7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFFRTtJQUNFLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uL2VkaXQtZm9vZC9lZGl0LWZvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWZvb2Qge1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG5cclxuICAuc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdldC1zdGFydGVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjYXJldC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmOztcclxuXHJcbiAgICAmLnNlYXJjaGluZyB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY2FyZXQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0LWZvb2Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwMHB4IC0gNzVweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAvLyBmb3JjZSBzaG93aW5nIHNjcm9sbCBiYXIgdG8gZGljdGF0ZSB0aGF0IHBhZ2UgaGFzIHNjcm9sbGFibGUgY29udGVudFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gIH1cclxuXHJcbiAgLm1hY3JvcyB7XHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tZWFsIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb29kLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Rpbmcge1xyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggNHB4ICNlM2UzZTM7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgJi5tZWFsLXRlbXBsYXRlIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmFuZCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcm91bmQtdGhpcy10aW1lIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgLmZvb2QtbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb29kLXF1YW50aXR5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1lYWwtdGVtcGxhdGUge1xyXG4gICAgICA+IHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJhbmQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIC50aXRsZSB7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFiYTljYztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICAudGFnIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm90aGVyLWxpc3Rpbmcge1xyXG4gIGhlaWdodDogY2FsYyg1MDBweCAtIDE2MHB4KTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAub3RoZXItbGlzdGluZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNjAwcHggLSAxNjBweCk7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYyg2MDBweCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgLm90aGVyLWxpc3Rpbmcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtZm9vZCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nutrition/edit-food/edit-food.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/nutrition/edit-food/edit-food.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFoodComponent", function() { return EditFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_food_items_food_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/food-items/food-items.service */ "./src/app/services/food-items/food-items.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
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





var EditFoodComponent = /** @class */ (function () {
    function EditFoodComponent(modal, loadingController, foodItemService, toastService, errorService) {
        this.modal = modal;
        this.loadingController = loadingController;
        this.foodItemService = foodItemService;
        this.toastService = toastService;
        this.errorService = errorService;
        this.mealIndex = 1;
        this.nutritionDayId = 0;
        this.isCustom = true;
    }
    EditFoodComponent.prototype.ngOnInit = function () {
    };
    EditFoodComponent.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    EditFoodComponent.prototype.updateFoodItem = function (foodItem) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, updatedFoodItem, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.foodItemService.updateFoodItem(this.foodItem.id, this.nutritionDayId, this.mealIndex, this.isCustom, foodItem)];
                    case 4:
                        updatedFoodItem = _a.sent();
                        this.modal.dismiss(updatedFoodItem);
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EditFoodComponent.prototype.removeFoodItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.foodItemService.deleteFoodItem(this.foodItem.id, this.nutritionDayId)];
                    case 4:
                        _a.sent();
                        this.modal.dismiss('remove');
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_2));
                        console.log(e_2);
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EditFoodComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditFoodComponent.prototype, "mealIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditFoodComponent.prototype, "foodItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditFoodComponent.prototype, "nutritionDayId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditFoodComponent.prototype, "isCustom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditFoodComponent.prototype, "backButtonHandler", null);
    EditFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-food',
            template: __webpack_require__(/*! ./edit-food.component.html */ "./src/app/components/nutrition/edit-food/edit-food.component.html"),
            styles: [__webpack_require__(/*! ./edit-food.component.scss */ "./src/app/components/nutrition/edit-food/edit-food.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_food_items_food_items_service__WEBPACK_IMPORTED_MODULE_2__["FoodItemsService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"]])
    ], EditFoodComponent);
    return EditFoodComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/factor-number/factor-number.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/nutrition/factor-number/factor-number.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-input type=\"text\" (input)=\"setNumericValue($event)\" [(ngModel)]=\"format\" [attr.disabled]=\"disable\"></ion-input>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/factor-number/factor-number.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/nutrition/factor-number/factor-number.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  --background: #f4f4f4;\n  text-align: center;\n  font-weight: 900; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vZmFjdG9yLW51bWJlci9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG51dHJpdGlvblxcZmFjdG9yLW51bWJlclxcZmFjdG9yLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vZmFjdG9yLW51bWJlci9mYWN0b3ItbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/nutrition/factor-number/factor-number.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/nutrition/factor-number/factor-number.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FactorNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactorNumberComponent", function() { return FactorNumberComponent; });
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

var FORMAT_TYPES;
(function (FORMAT_TYPES) {
    FORMAT_TYPES[FORMAT_TYPES["NUMBER_WITH_DECIMAL"] = 1] = "NUMBER_WITH_DECIMAL";
    FORMAT_TYPES[FORMAT_TYPES["ONLY_DECIMAL"] = 2] = "ONLY_DECIMAL";
    FORMAT_TYPES[FORMAT_TYPES["FRACTION_WITH_NUMBER"] = 3] = "FRACTION_WITH_NUMBER";
    FORMAT_TYPES[FORMAT_TYPES["FRACTION_WITHOUT_NUMBER"] = 4] = "FRACTION_WITHOUT_NUMBER";
})(FORMAT_TYPES || (FORMAT_TYPES = {}));
var FactorNumberComponent = /** @class */ (function () {
    function FactorNumberComponent() {
        this.disable = false;
        this.valueUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.format = '';
        this.numberWithDecimal = new RegExp('^[0-9]*(\.[0-9][0-9]*)?$');
        this.onlyDecimal = new RegExp('^\.[0-9]*$');
        this.fractionWithNumbers = new RegExp('^[0-9][0-9]* ([0-9][0-9]*\/[0-9][0-9]*)$');
        // private fractionWithoutNumbers = new RegExp('^([0-9][0-9]*\/[0-9][0-9]*)$'); // @todo need to double check without primary value
        this.typeOfFormat = FORMAT_TYPES.NUMBER_WITH_DECIMAL;
    }
    Object.defineProperty(FactorNumberComponent.prototype, "value", {
        set: function (value) {
            this.originalValue = value;
            this.format = this.createFormatFromValue(value);
        },
        enumerable: true,
        configurable: true
    });
    FactorNumberComponent.prototype.ngOnInit = function () {
    };
    FactorNumberComponent.prototype.setNumericValue = function ($event) {
        var value = this.createValueFromFormat($event.target.value);
        if (value !== false) {
            this.originalValue = value;
            this.valueUpdated.emit(value);
        }
    };
    FactorNumberComponent.prototype.createFormatFromValue = function (value) {
        if (!value) {
            return '';
        }
        switch (this.typeOfFormat) {
            case FORMAT_TYPES.NUMBER_WITH_DECIMAL:
            case FORMAT_TYPES.ONLY_DECIMAL:
                return value.toString();
            case FORMAT_TYPES.FRACTION_WITH_NUMBER:
                var splitValues = value.toString().split('.');
                if (splitValues.length < 2) {
                    return '';
                }
                var fraction = parseFloat(splitValues[1]);
                fraction = "" + fraction + (fraction < 10 ? '0' : '') + "/" + (fraction > 100 ? '1000' : '100');
                return splitValues[0] + " " + fraction;
            default:
                return '';
        }
    };
    FactorNumberComponent.prototype.createValueFromFormat = function (format) {
        if (this.numberWithDecimal.test(format)) {
            this.typeOfFormat = FORMAT_TYPES.NUMBER_WITH_DECIMAL;
            return parseFloat(format);
        }
        if (this.onlyDecimal.test(format)) {
            this.typeOfFormat = FORMAT_TYPES.ONLY_DECIMAL;
            return parseFloat(format);
        }
        if (this.fractionWithNumbers.test(format)) {
            this.typeOfFormat = FORMAT_TYPES.FRACTION_WITH_NUMBER;
            return this.convertToNumberForFractionWithNumber(format);
        }
        this.typeOfFormat = FORMAT_TYPES.NUMBER_WITH_DECIMAL;
        return false;
    };
    FactorNumberComponent.prototype.convertToNumberForFractionWithNumber = function (format) {
        var primarySplit = format.split(' ');
        var primaryNumber = parseFloat(primarySplit[0]);
        var secondarySplit = primarySplit[1].split('/');
        var decimalValues = parseFloat(secondarySplit[0]) / parseFloat(secondarySplit[1]);
        return primaryNumber + decimalValues;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], FactorNumberComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FactorNumberComponent.prototype, "disable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FactorNumberComponent.prototype, "valueUpdated", void 0);
    FactorNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factor-number',
            template: __webpack_require__(/*! ./factor-number.component.html */ "./src/app/components/nutrition/factor-number/factor-number.component.html"),
            styles: [__webpack_require__(/*! ./factor-number.component.scss */ "./src/app/components/nutrition/factor-number/factor-number.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FactorNumberComponent);
    return FactorNumberComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/macros/macros.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nutrition/macros/macros.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <span class=\"title\">{{categoryName}}</span>\r\n  <span class=\"value\" [ngStyle]=\"{'color': percentage > 100 ? dangerColor : 'inherit'}\">{{currentNutritionValue.toFixed(0)}}</span>\r\n  <div class=\"goal-bar\">\r\n    <div class=\"progress\"\r\n         [ngStyle]=\"{'width': (percentage > 100 ? 100 : percentage) + '%', 'background-color': changeBarColor }\"></div>\r\n  </div>\r\n  <span class=\"goal\"><span class=\"color\">Goal</span>{{goalValue.toFixed(0)}}g</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/macros/macros.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nutrition/macros/macros.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: 5px solid #f5f6f5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 0;\n  padding: 5px;\n  margin: 0 2px;\n  overflow: hidden;\n  position: relative; }\n  .card .title {\n    text-transform: uppercase;\n    color: #2b2b2b;\n    font-size: 10px;\n    font-weight: 900; }\n  .card .value {\n    color: #2b2b2b;\n    font-size: 28px;\n    padding: 5px 0;\n    font-weight: 900; }\n  .card .goal-bar {\n    width: 100%;\n    margin: 0 auto;\n    background-color: #2b2b2b;\n    height: 12px;\n    position: relative;\n    overflow: hidden; }\n  .card .goal-bar .progress {\n      height: 12px; }\n  .card .goal {\n    color: #2b2b2b;\n    font-size: 10px;\n    font-weight: 600;\n    padding-top: 4px; }\n  .card .goal .color {\n      color: #bcbdbc;\n      text-transform: uppercase;\n      padding-right: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbWFjcm9zL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxtYWNyb3NcXG1hY3Jvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFUcEI7SUFXSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQWRwQjtJQWlCSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQXBCcEI7SUF1QkksV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQTVCcEI7TUE4Qk0sWUFBWSxFQUFBO0VBOUJsQjtJQWtDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQXJDcEI7TUF1Q00sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uL21hY3Jvcy9tYWNyb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2Y1ZjZmNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMyYjJiMmI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICAudmFsdWUge1xyXG4gICAgY29sb3I6ICMyYjJiMmI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIC5nb2FsLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nb2FsIHtcclxuICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAuY29sb3Ige1xyXG4gICAgICBjb2xvcjogI2JjYmRiYztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nutrition/macros/macros.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nutrition/macros/macros.component.ts ***!
  \*****************************************************************/
/*! exports provided: MacrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacrosComponent", function() { return MacrosComponent; });
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

var MacrosComponent = /** @class */ (function () {
    function MacrosComponent() {
        this.currentValue = 0;
        this.totalValue = 0;
        this.barColor = '';
        this.dangerColor = '';
        this.categoryName = '';
        this.currentNutritionValue = 0;
        this.goalValue = 0;
    }
    MacrosComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MacrosComponent.prototype, "percentage", {
        get: function () {
            return (this.currentNutritionValue / this.goalValue) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacrosComponent.prototype, "changeBarColor", {
        get: function () {
            if (this.percentage >= 100) {
                return this.dangerColor;
            }
            return this.barColor;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "currentValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "totalValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "barColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "dangerColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "categoryName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "currentNutritionValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MacrosComponent.prototype, "goalValue", void 0);
    MacrosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-macros',
            template: __webpack_require__(/*! ./macros.component.html */ "./src/app/components/nutrition/macros/macros.component.html"),
            styles: [__webpack_require__(/*! ./macros.component.scss */ "./src/app/components/nutrition/macros/macros.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MacrosComponent);
    return MacrosComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/meal-item/meal-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-item/meal-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"meal\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1\"><span class=\"values\">{{ meal.meal_count }}</span></div>\r\n    <div class=\"col-2\"><span class=\"values\" [class.calories-color]=\"calories\">{{ hasValue ? calories.toFixed(0) : '-' }}</span></div>\r\n    <div class=\"col-2\"><span class=\"values\" [class.protein-color]=\"protein\">{{ hasValue ? protein.toFixed(0): '-' }}</span></div>\r\n    <div class=\"col-2\"><span class=\"values\" [class.carbs-color]=\"carbs\">{{ hasValue ? carbs.toFixed(0) : '-' }}</span></div>\r\n    <div class=\"col-2\"><span class=\"values\" [class.fat-color]=\"fats\">{{ hasValue ? fats.toFixed(0) : '-' }}</span></div>\r\n    <div class=\"col-space\" (click)=\"showFoodItems = !showFoodItems\">\r\n      <ion-button fill=\"clear\" *ngIf=\"meal.active\" class=\"show-more\">\r\n        <ion-icon [name]=\"showFoodItems ? 'arrow-down' : 'arrow-forward'\" mode=\"ios\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\" *ngIf=\"showFoodItems && meal.food_items.length > 0\">\r\n    <div class=\"row\" *ngFor=\"let foodItem of meal.food_items; let foodItemIndex = index;\">\r\n      <div class=\"col-1\"><span class=\"values\">{{ foodItem.name }}</span></div>\r\n      <div class=\"col-2\"><span class=\"values\">{{ foodItem.calories.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"values\">{{ foodItem.protein.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"values\">{{ foodItem.carbs.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"values\">{{ foodItem.fats.toFixed(0) }}</span></div>\r\n      <div class=\"col-space\">\r\n        <ion-button fill=\"clear\" (click)=\"openEditFoodItem(foodItem, foodItemIndex)\" class=\"edit-item\">\r\n          <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <div class=\"add-food\">\r\n            <ion-button expand=\"full\" fill=\"clear\" (click)=\"saveAsMealTemplate()\">\r\n              Save As Meal\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"add-food\">\r\n            <ion-button expand=\"full\" fill=\"clear\" (click)=\"addFoodItem()\">\r\n              <ion-icon name=\"add\"></ion-icon> Add Food\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/meal-item/meal-item.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-item/meal-item.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-transform: uppercase;\n  padding: 5px 20px; }\n\n.col-1 {\n  width: 20%; }\n\n.col-2 {\n  width: 20%;\n  text-align: center; }\n\n.col-space {\n  width: 4%; }\n\n.col-space ion-icon {\n    color: #00909a;\n    font-size: 14px;\n    vertical-align: middle; }\n\n.title {\n  font-size: 10px;\n  font-weight: 600; }\n\n.values {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 900;\n  text-transform: capitalize;\n  color: #999; }\n\n.meal-quantity .highlight {\n  background-color: #dcdada; }\n\n.meal-quantity .col-1 .values {\n  color: #000; }\n\n.meal-quantity .col-2 .values {\n  padding: 0 9px; }\n\n.content .row {\n  padding: 4px 15px; }\n\n.content .col-1 .values {\n  font-size: 10px;\n  font-weight: 600;\n  color: #999; }\n\n.content .col-2 .values {\n  font-size: 12px;\n  font-weight: 400; }\n\n.content .add-food ion-button {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 10px;\n  color: #1fb2d2; }\n\n.calories-color {\n  color: #1fb2d2; }\n\n.protein-color {\n  color: #fba04b; }\n\n.carbs-color {\n  color: #12c910; }\n\n.fat-color {\n  color: #f8617a; }\n\n.show-more {\n  position: relative;\n  right: 10px; }\n\n.edit-item {\n  position: relative;\n  right: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbWVhbC1pdGVtL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxtZWFsLWl0ZW1cXG1lYWwtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsU0FBUyxFQUFBOztBQURYO0lBSUksY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLFdBQVcsRUFBQTs7QUFHYjtFQUVJLHlCQUF5QixFQUFBOztBQUY3QjtFQU9NLFdBQVcsRUFBQTs7QUFQakI7RUFhTSxjQUFjLEVBQUE7O0FBS3BCO0VBRUksaUJBQWlCLEVBQUE7O0FBRnJCO0VBT00sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBVGpCO0VBZU0sZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQWhCdEI7RUFzQk0seUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQU1wQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uL21lYWwtaXRlbS9tZWFsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxufVxyXG5cclxuLmNvbC0xIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sLXNwYWNlIHtcclxuICB3aWR0aDogNCU7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMDA5MDlhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi52YWx1ZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLm1lYWwtcXVhbnRpdHkge1xyXG4gIC5oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGFkYTtcclxuICB9XHJcblxyXG4gIC5jb2wtMSB7XHJcbiAgICAudmFsdWVzIHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sLTIge1xyXG4gICAgLnZhbHVlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29sLTEge1xyXG4gICAgLnZhbHVlcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sLTIge1xyXG4gICAgLnZhbHVlcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZGQtZm9vZCB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgY29sb3I6ICMxZmIyZDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNhbG9yaWVzLWNvbG9yIHtcclxuICBjb2xvcjogIzFmYjJkMjtcclxufVxyXG5cclxuLnByb3RlaW4tY29sb3Ige1xyXG4gIGNvbG9yOiAjZmJhMDRiO1xyXG59XHJcblxyXG4uY2FyYnMtY29sb3Ige1xyXG4gIGNvbG9yOiAjMTJjOTEwO1xyXG59XHJcblxyXG4uZmF0LWNvbG9yIHtcclxuICBjb2xvcjogI2Y4NjE3YTtcclxufVxyXG5cclxuLnNob3ctbW9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZWRpdC1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDEzcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/nutrition/meal-item/meal-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/nutrition/meal-item/meal-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: MealItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealItemComponent", function() { return MealItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-food/edit-food.component */ "./src/app/components/nutrition/edit-food/edit-food.component.ts");
/* harmony import */ var _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-food/add-food.component */ "./src/app/components/nutrition/add-food/add-food.component.ts");
/* harmony import */ var _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/meal-templates/meal-templates.service */ "./src/app/services/meal-templates/meal-templates.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _meal_template_name_meal_template_name_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meal-template-name/meal-template-name.component */ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.ts");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
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









var MealItemComponent = /** @class */ (function () {
    function MealItemComponent(modalCtrl, mealTemplateService, toastService, errorService, cacheService, loadingController) {
        this.modalCtrl = modalCtrl;
        this.mealTemplateService = mealTemplateService;
        this.toastService = toastService;
        this.errorService = errorService;
        this.cacheService = cacheService;
        this.loadingController = loadingController;
        this.nutritionDayId = 0;
        this.mealUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showFoodItems = false;
    }
    MealItemComponent.prototype.ngOnInit = function () {
    };
    /**
     * Opens the edit modal for food item
     *
     * @param foodItem
     * @param foodItemIndex
     */
    MealItemComponent.prototype.openEditFoodItem = function (foodItem, foodItemIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var editFoodModal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_2__["EditFoodComponent"],
                            cssClass: 'global-modal-d-block',
                            componentProps: {
                                foodItem: foodItem,
                                isCustom: foodItem.is_custom,
                                mealIndex: this.meal.meal_count,
                                nutritionDayId: this.nutritionDayId
                            },
                            backdropDismiss: false
                        })];
                    case 1:
                        editFoodModal = _a.sent();
                        return [4 /*yield*/, editFoodModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, editFoodModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result.data === 'remove') {
                            this.meal.food_items.splice(foodItemIndex, 1);
                            this.mealUpdated.emit(this.meal);
                        }
                        else if (result.data) {
                            this.meal.food_items[foodItemIndex] = result.data;
                            this.mealUpdated.emit(this.meal);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Modal to add food item to existing meal list
     */
    MealItemComponent.prototype.addFoodItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addFoodModal, result, _i, _a, foodItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_3__["AddFoodComponent"],
                            backdropDismiss: false,
                            cssClass: 'global-modal-d-block',
                            componentProps: {
                                mealIndex: this.meal.meal_count,
                                nutritionDayId: this.nutritionDayId
                            }
                        })];
                    case 1:
                        addFoodModal = _b.sent();
                        return [4 /*yield*/, addFoodModal.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, addFoodModal.onDidDismiss()];
                    case 3:
                        result = _b.sent();
                        if (result.data) {
                            if (result.data.foodItem) {
                                this.meal.food_items.push(result.data.foodItem);
                                this.mealUpdated.emit(this.meal);
                            }
                            else if (result.data.foodItems.length > 0) {
                                for (_i = 0, _a = result.data.foodItems; _i < _a.length; _i++) {
                                    foodItem = _a[_i];
                                    this.meal.food_items.push(foodItem);
                                }
                                this.mealUpdated.emit(this.meal);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MealItemComponent.prototype, "calories", {
        get: function () {
            return this.meal.food_items.reduce(function (carry, foodItem) { return carry + foodItem.calories; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MealItemComponent.prototype, "protein", {
        get: function () {
            return this.meal.food_items.reduce(function (carry, foodItem) { return carry + foodItem.protein; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MealItemComponent.prototype, "carbs", {
        get: function () {
            return this.meal.food_items.reduce(function (carry, foodItem) { return carry + foodItem.carbs; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MealItemComponent.prototype, "fats", {
        get: function () {
            return this.meal.food_items.reduce(function (carry, foodItem) { return carry + foodItem.fats; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MealItemComponent.prototype, "hasValue", {
        get: function () {
            return this.calories > 0 || this.protein > 0 || this.fats > 0 || this.carbs > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Save meal template to server
     */
    MealItemComponent.prototype.saveAsMealTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openMealTemplateNameModal()];
                    case 1:
                        name = _a.sent();
                        if (!name) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.mealTemplateService.create(name, this.meal.food_items)];
                    case 3:
                        _a.sent();
                        this.toastService.flash('Meal saved.');
                        this.cacheService.clearAll();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Open modal to ask for meal template name
     */
    MealItemComponent.prototype.openMealTemplateNameModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _meal_template_name_meal_template_name_component__WEBPACK_IMPORTED_MODULE_7__["MealTemplateNameComponent"],
                            cssClass: 'meal-template-name-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, !result.data ? false : result.data];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MealItemComponent.prototype, "meal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MealItemComponent.prototype, "nutritionDayId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MealItemComponent.prototype, "mealUpdated", void 0);
    MealItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-item',
            template: __webpack_require__(/*! ./meal-item.component.html */ "./src/app/components/nutrition/meal-item/meal-item.component.html"),
            styles: [__webpack_require__(/*! ./meal-item.component.scss */ "./src/app/components/nutrition/meal-item/meal-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_4__["MealTemplatesService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_6__["ErrorsService"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_8__["RequestCachingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MealItemComponent);
    return MealItemComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/meal-list/meal-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-list/meal-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"meal\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1\"><span class=\"title\">Meal</span></div>\r\n    <div class=\"col-2\"><span class=\"title\">calories</span></div>\r\n    <div class=\"col-2\"><span class=\"title\">protein</span></div>\r\n    <div class=\"col-2\"><span class=\"title\">carbs</span></div>\r\n    <div class=\"col-2\"><span class=\"title\">fats</span></div>\r\n    <div class=\"col-space\"></div>\r\n  </div>\r\n  <div class=\"meal-quantity\">\r\n    <ng-container *ngFor=\"let meal of meals\">\r\n      <app-meal-item [nutritionDayId]=\"nutritionDayId\" [meal]=\"meal\" (mealUpdated)=\"mealUpdated.emit($event)\"></app-meal-item>\r\n    </ng-container>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/meal-list/meal-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-list/meal-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".meal {\n  background-color: #f4f4f4; }\n\n.row {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-transform: uppercase;\n  padding: 5px 15px; }\n\n.col-1 {\n  width: 20%; }\n\n.col-2 {\n  width: 20%;\n  text-align: center; }\n\n.col-space {\n  width: 5%; }\n\n.col-space ion-icon {\n    color: #00909a;\n    font-size: 14px;\n    vertical-align: middle; }\n\n.title {\n  font-size: 10px;\n  font-weight: 600; }\n\n.values {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 900;\n  text-transform: capitalize;\n  color: #999; }\n\n.meal-quantity .highlight {\n  background-color: #dcdada; }\n\n.meal-quantity .col-1 .values {\n  color: #000; }\n\n.meal-quantity .col-2 .values {\n  padding: 0 9px; }\n\n.content .row {\n  padding: 4px 15px; }\n\n.content .col-1 .values {\n  font-size: 8px;\n  font-weight: 600;\n  color: #999; }\n\n.content .col-2 .values {\n  font-size: 12px;\n  font-weight: 400; }\n\n.content .add-food ion-button {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 10px;\n  color: #1fb2d2; }\n\n.total {\n  padding: 10px 0; }\n\n.total .row {\n    padding: 2px 15px; }\n\n.total .col-2 .title {\n    font-weight: 900;\n    font-size: 12px; }\n\n.calories {\n  color: #1fb2d2; }\n\n.protein-color {\n  color: #fba04b; }\n\n.carbs-color {\n  color: #12c910; }\n\n.fat-color {\n  color: #f8617a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbWVhbC1saXN0L0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxtZWFsLWxpc3RcXG1lYWwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsU0FBUyxFQUFBOztBQURYO0lBR0ksY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLFdBQVcsRUFBQTs7QUFHYjtFQUVJLHlCQUF5QixFQUFBOztBQUY3QjtFQU1NLFdBQVcsRUFBQTs7QUFOakI7RUFXTSxjQUFjLEVBQUE7O0FBS3BCO0VBRUksaUJBQWlCLEVBQUE7O0FBRnJCO0VBTU0sY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBUmpCO0VBYU0sZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQWR0QjtFQW1CTSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBS3BCO0VBQ0UsZUFBZSxFQUFBOztBQURqQjtJQUdJLGlCQUFpQixFQUFBOztBQUhyQjtJQU1JLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbWVhbC1saXN0L21lYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLmNvbC0xIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sLXNwYWNlIHtcclxuICB3aWR0aDogNSU7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMwMDkwOWE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnZhbHVlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4ubWVhbC1xdWFudGl0eSB7XHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkYWRhO1xyXG4gIH1cclxuICAuY29sLTEge1xyXG4gICAgLnZhbHVlcyB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sLTIge1xyXG4gICAgLnZhbHVlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5jb2wtMSB7XHJcbiAgICAudmFsdWVzIHtcclxuICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sLTIge1xyXG4gICAgLnZhbHVlcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFkZC1mb29kIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzFmYjJkMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMnB4IDE1cHg7XHJcbiAgfVxyXG4gIC5jb2wtMiAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYWxvcmllcyB7XHJcbiAgY29sb3I6ICMxZmIyZDI7XHJcbn1cclxuXHJcbi5wcm90ZWluLWNvbG9yIHtcclxuICBjb2xvcjogI2ZiYTA0YjtcclxufVxyXG5cclxuLmNhcmJzLWNvbG9yIHtcclxuICBjb2xvcjogIzEyYzkxMDtcclxufVxyXG5cclxuLmZhdC1jb2xvciB7XHJcbiAgY29sb3I6ICNmODYxN2E7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/nutrition/meal-list/meal-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/nutrition/meal-list/meal-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealListComponent", function() { return MealListComponent; });
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

var MealListComponent = /** @class */ (function () {
    function MealListComponent() {
        this.meals = [];
        this.nutritionDayId = 0;
        this.mealUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MealListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MealListComponent.prototype, "meals", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MealListComponent.prototype, "nutritionDayId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MealListComponent.prototype, "mealUpdated", void 0);
    MealListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-list',
            template: __webpack_require__(/*! ./meal-list.component.html */ "./src/app/components/nutrition/meal-list/meal-list.component.html"),
            styles: [__webpack_require__(/*! ./meal-list.component.scss */ "./src/app/components/nutrition/meal-list/meal-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MealListComponent);
    return MealListComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\r\n  <h5>\r\n    Add to Meal\r\n    <ion-button fill=\"clear\" type=\"icon\" (click)=\"close()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n</section>\r\n<section class=\"body\" padding>\r\n\r\n  <div class=\"global-input\">\r\n    <ion-label>Meal</ion-label>\r\n      <div class=\"inline meal\">\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(1)\"\r\n                    [class.active]=\"mealIndex === 1\">1\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" class=\"active\" (click)=\"changeMealIndex(2)\"\r\n                    [class.active]=\"mealIndex === 2\">2\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(3)\"\r\n                    [class.active]=\"mealIndex === 3\">3\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(4)\"\r\n                    [class.active]=\"mealIndex === 4\">4\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(5)\"\r\n                    [class.active]=\"mealIndex === 5\">5\r\n        </ion-button>\r\n        <ion-button type=\"button\" fill=\"clear\" expand=\"full\" size=\"large\" (click)=\"changeMealIndex(6)\"\r\n                    [class.active]=\"mealIndex === 6\">6\r\n        </ion-button>\r\n      </div>\r\n  </div>\r\n\r\n</section>\r\n<section class=\"footer\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button type=\"button\" fill=\"clear\" (click)=\"close()\">Cancel</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button float-right type=\"submit\" (click)=\"save()\">Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h5 {\n  text-align: center;\n  padding-top: 20px;\n  text-transform: uppercase;\n  font-weight: 900; }\n\n.header ion-button {\n  position: absolute;\n  top: 5px;\n  right: 0; }\n\n.body {\n  --ion-padding: 5px; }\n\n.meal ion-button {\n  padding: 2px;\n  color: #999;\n  font-size: 20px;\n  --background: #f4f4f4; }\n\n.meal .active {\n  --background: #000;\n  color: #fff; }\n\n.inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbWVhbC10ZW1wbGF0ZS1hZGQtY29uZmlndXJhdGlvbi9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG51dHJpdGlvblxcbWVhbC10ZW1wbGF0ZS1hZGQtY29uZmlndXJhdGlvblxcbWVhbC10ZW1wbGF0ZS1hZGQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUxwQjtFQVFJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUSxFQUFBOztBQUlaO0VBQ0Usa0JBQWMsRUFBQTs7QUFHaEI7RUFFSSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBYSxFQUFBOztBQUxqQjtFQVFJLGtCQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUlmO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uL21lYWwtdGVtcGxhdGUtYWRkLWNvbmZpZ3VyYXRpb24vbWVhbC10ZW1wbGF0ZS1hZGQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGg1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAtLWlvbi1wYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tZWFsIHtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gIH1cclxuICAuYWN0aXZlIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MealTemplateAddConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealTemplateAddConfigurationComponent", function() { return MealTemplateAddConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealTemplateAddConfigurationComponent = /** @class */ (function () {
    function MealTemplateAddConfigurationComponent(modal) {
        this.modal = modal;
        this.mealIndex = 1;
    }
    MealTemplateAddConfigurationComponent.prototype.ngOnInit = function () {
    };
    MealTemplateAddConfigurationComponent.prototype.changeMealIndex = function (index) {
        this.mealIndex = index;
    };
    MealTemplateAddConfigurationComponent.prototype.close = function () {
        this.modal.dismiss();
    };
    MealTemplateAddConfigurationComponent.prototype.save = function () {
        this.modal.dismiss({
            mealIndex: this.mealIndex
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MealTemplateAddConfigurationComponent.prototype, "mealIndex", void 0);
    MealTemplateAddConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-template-add-configuration',
            template: __webpack_require__(/*! ./meal-template-add-configuration.component.html */ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.html"),
            styles: [__webpack_require__(/*! ./meal-template-add-configuration.component.scss */ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], MealTemplateAddConfigurationComponent);
    return MealTemplateAddConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-template-name/meal-template-name.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\r\n  <h5>\r\n    Save As Meal\r\n    <ion-button fill=\"clear\" type=\"icon\" (click)=\"close()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n</section>\r\n<section class=\"body\" padding>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n    <div class=\"global-input\">\r\n      <ion-label>Meal Name</ion-label>\r\n      <ion-input formControlName=\"name\"></ion-input>\r\n    </div>\r\n  </form>\r\n</section>\r\n<section class=\"footer\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button type=\"button\" fill=\"clear\" (click)=\"close()\">Close</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button float-right type=\"submit\" [disabled]=\"form.invalid\" (click)=\"save()\">Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-template-name/meal-template-name.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h5 {\n  text-align: center;\n  padding-top: 20px;\n  text-transform: uppercase;\n  font-weight: 900; }\n\n.header ion-button {\n  position: absolute;\n  top: 5px;\n  right: 0; }\n\n.body {\n  --ion-padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbWVhbC10ZW1wbGF0ZS1uYW1lL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxtZWFsLXRlbXBsYXRlLW5hbWVcXG1lYWwtdGVtcGxhdGUtbmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUxwQjtFQVFJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUSxFQUFBOztBQUlaO0VBQ0Usa0JBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uL21lYWwtdGVtcGxhdGUtbmFtZS9tZWFsLXRlbXBsYXRlLW5hbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgLS1pb24tcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/nutrition/meal-template-name/meal-template-name.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MealTemplateNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealTemplateNameComponent", function() { return MealTemplateNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MealTemplateNameComponent = /** @class */ (function () {
    function MealTemplateNameComponent(modalController) {
        this.modalController = modalController;
    }
    MealTemplateNameComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)])
        });
    };
    MealTemplateNameComponent.prototype.save = function () {
        this.modalController.dismiss(this.form.get('name').value);
    };
    MealTemplateNameComponent.prototype.close = function () {
        this.modalController.dismiss(false);
    };
    MealTemplateNameComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MealTemplateNameComponent.prototype, "backButtonHandler", null);
    MealTemplateNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-template-name',
            template: __webpack_require__(/*! ./meal-template-name.component.html */ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.html"),
            styles: [__webpack_require__(/*! ./meal-template-name.component.scss */ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], MealTemplateNameComponent);
    return MealTemplateNameComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/nutrition.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/nutrition/nutrition.module.ts ***!
  \**********************************************************/
/*! exports provided: NutritionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionModule", function() { return NutritionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/components/nutrition/progress-bar/progress-bar.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _macros_macros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macros/macros.component */ "./src/app/components/nutrition/macros/macros.component.ts");
/* harmony import */ var _water_water_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water/water.component */ "./src/app/components/nutrition/water/water.component.ts");
/* harmony import */ var _meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meal-list/meal-list.component */ "./src/app/components/nutrition/meal-list/meal-list.component.ts");
/* harmony import */ var _meal_item_meal_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meal-item/meal-item.component */ "./src/app/components/nutrition/meal-item/meal-item.component.ts");
/* harmony import */ var _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-food/add-food.component */ "./src/app/components/nutrition/add-food/add-food.component.ts");
/* harmony import */ var _custom_food_custom_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-food/custom-food.component */ "./src/app/components/nutrition/custom-food/custom-food.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-food/edit-food.component */ "./src/app/components/nutrition/edit-food/edit-food.component.ts");
/* harmony import */ var _factor_number_factor_number_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./factor-number/factor-number.component */ "./src/app/components/nutrition/factor-number/factor-number.component.ts");
/* harmony import */ var _meal_template_name_meal_template_name_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meal-template-name/meal-template-name.component */ "./src/app/components/nutrition/meal-template-name/meal-template-name.component.ts");
/* harmony import */ var _meal_template_add_configuration_meal_template_add_configuration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meal-template-add-configuration/meal-template-add-configuration.component */ "./src/app/components/nutrition/meal-template-add-configuration/meal-template-add-configuration.component.ts");
/* harmony import */ var _custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom-macros/custom-macros.component */ "./src/app/components/nutrition/custom-macros/custom-macros.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var NutritionModule = /** @class */ (function () {
    function NutritionModule() {
    }
    NutritionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"], _macros_macros_component__WEBPACK_IMPORTED_MODULE_4__["MacrosComponent"],
                _water_water_component__WEBPACK_IMPORTED_MODULE_5__["WaterComponent"], _meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_6__["MealListComponent"],
                _meal_item_meal_item_component__WEBPACK_IMPORTED_MODULE_7__["MealItemComponent"], _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_8__["AddFoodComponent"], _custom_food_custom_food_component__WEBPACK_IMPORTED_MODULE_9__["CustomFoodComponent"], _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_11__["EditFoodComponent"], _factor_number_factor_number_component__WEBPACK_IMPORTED_MODULE_12__["FactorNumberComponent"],
                _meal_template_name_meal_template_name_component__WEBPACK_IMPORTED_MODULE_13__["MealTemplateNameComponent"], _meal_template_add_configuration_meal_template_add_configuration_component__WEBPACK_IMPORTED_MODULE_14__["MealTemplateAddConfigurationComponent"], _custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_15__["CustomMacrosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [
                _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"], _macros_macros_component__WEBPACK_IMPORTED_MODULE_4__["MacrosComponent"],
                _water_water_component__WEBPACK_IMPORTED_MODULE_5__["WaterComponent"], _meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_6__["MealListComponent"], _meal_item_meal_item_component__WEBPACK_IMPORTED_MODULE_7__["MealItemComponent"],
                _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_8__["AddFoodComponent"], _custom_food_custom_food_component__WEBPACK_IMPORTED_MODULE_9__["CustomFoodComponent"]
            ],
            entryComponents: [_edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_11__["EditFoodComponent"], _meal_template_name_meal_template_name_component__WEBPACK_IMPORTED_MODULE_13__["MealTemplateNameComponent"], _meal_template_add_configuration_meal_template_add_configuration_component__WEBPACK_IMPORTED_MODULE_14__["MealTemplateAddConfigurationComponent"], _custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_15__["CustomMacrosComponent"]]
        })
    ], NutritionModule);
    return NutritionModule;
}());



/***/ }),

/***/ "./src/app/components/nutrition/progress-bar/progress-bar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/nutrition/progress-bar/progress-bar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item lines=\"none\">\r\n  <ion-label>Calories</ion-label>\r\n  <ion-label class=\"right\">\r\n    <span class=\"color\">Goal</span>\r\n    <span [ngStyle]=\"{'background-color': (percentage > 100 ? dangerColor : 'inherit')}\">{{ goalValue.toFixed(0)}}</span>\r\n  </ion-label>\r\n</ion-item>\r\n<div class=\"goal-bar\" [ngStyle]=\"{'background-color': changeBarColor}\">\r\n  <p class=\"goal-value\"\r\n     [class.hide]=\"percentage > hideTextBarrierRemaining\"> {{ remainingValue.toFixed(0) }}</p>\r\n  <div class=\"progress\" [ngStyle]=\"{'width': percentage+ '%','background-color': changeBarColor}\">\r\n    <p class=\"progress-value\" [class.hide]=\"percentage < hideTextBarrierProgress\">{{ currentValue.toFixed(0) }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/progress-bar/progress-bar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/nutrition/progress-bar/progress-bar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700; }\n  ion-item .right {\n    text-align: right; }\n  ion-item .color {\n    color: #bcbdbc;\n    padding-right: 6px; }\n  .goal-bar {\n  width: 80%;\n  margin: 0 auto;\n  background-color: #2b2b2b;\n  height: 40px;\n  border: 5px solid #2b2b2b;\n  position: relative; }\n  .goal-bar:after {\n    right: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(43, 43, 43, 0);\n    border-right-color: #2b2b2b;\n    border-width: 20px;\n    margin-top: -20px;\n    margin-right: 5px; }\n  .goal-bar:before {\n    left: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(43, 43, 43, 0);\n    border-left-color: #2b2b2b;\n    border-width: 20px;\n    margin-top: -20px;\n    margin-left: 5px; }\n  .goal-bar .goal-value {\n    right: -5px;\n    text-align: right; }\n  .goal-bar .progress {\n    height: 30px;\n    background-color: #1fb2d2;\n    position: relative;\n    --triangle-color: #1fb2d2; }\n  .goal-bar .progress:after {\n      right: 100%;\n      top: 50%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(43, 43, 43, 0);\n      border-right-color: var(--triangle-color);\n      border-width: 15px;\n      margin-top: -15px;\n      z-index: 10; }\n  .goal-bar .progress:before {\n      left: 100%;\n      top: 50%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(43, 43, 43, 0);\n      border-left-color: var(--triangle-color);\n      border-width: 15px;\n      margin-top: -15px;\n      z-index: 10; }\n  .goal-bar .progress .progress-value {\n      text-align: left;\n      right: 5px; }\n  p {\n  line-height: 0;\n  margin: 0;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  position: absolute;\n  transform: translateY(-50%);\n  top: 50%; }\n  .hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vcHJvZ3Jlc3MtYmFyL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxwcm9ncmVzcy1iYXJcXHByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFIbEI7SUFLSSxpQkFBaUIsRUFBQTtFQUxyQjtJQVFJLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQUl0QjtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7RUFOcEI7SUFRSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQXBCckI7SUF1QkksVUFBVTtJQUNWLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFuQ3BCO0lBc0NJLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQXZDckI7SUEwQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQWlCLEVBQUE7RUE3Q3JCO01BK0NNLFdBQVc7TUFDWCxRQUFRO01BQ1IseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixTQUFTO01BQ1QsUUFBUTtNQUNSLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsaUNBQWlDO01BQ2pDLHlDQUF5QztNQUN6QyxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtFQTNEakI7TUE4RE0sVUFBVTtNQUNWLFFBQVE7TUFDUix5QkFBeUI7TUFDekIsWUFBWTtNQUNaLFNBQVM7TUFDVCxRQUFRO01BQ1Isa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixpQ0FBaUM7TUFDakMsd0NBQXdDO01BQ3hDLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0VBMUVqQjtNQTZFTSxnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBO0VBS2hCO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFFBQVEsRUFBQTtFQUlWO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taXRlbSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jb2xvciB7XHJcbiAgICBjb2xvcjogI2JjYmRiYztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5nb2FsLWJhciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjMmIyYjJiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOmFmdGVyIHtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDApO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMmIyYjJiO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwKTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMmIyYjJiO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICAuZ29hbC12YWx1ZSB7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAucHJvZ3Jlc3Mge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmYjJkMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0tdHJpYW5nbGUtY29sb3I6ICMxZmIyZDI7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDApO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRyaWFuZ2xlLWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDApO1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdHJpYW5nbGUtY29sb3IpO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzcy12YWx1ZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuXHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nutrition/progress-bar/progress-bar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nutrition/progress-bar/progress-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
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

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(element) {
        this.element = element;
        this.currentValue = 0;
        this.goalValue = 0;
        this.hideTextBarrierRemaining = 0;
        this.hideTextBarrierProgress = 0;
        this.dangerColor = '';
        this.progressColor = '#1fb2d2';
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProgressBarComponent.prototype, "percentage", {
        get: function () {
            var percentage = (this.currentValue / this.goalValue) * 100;
            return percentage > 100 ? 100 : percentage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "remainingValue", {
        get: function () {
            return this.goalValue - this.currentValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "changeBarColor", {
        get: function () {
            var root = this.element.nativeElement.querySelector('.progress');
            root.style.setProperty('--triangle-color', this.dangerColor);
            if (this.percentage >= 100) {
                return this.dangerColor;
            }
            else {
                root.style.setProperty('--triangle-color', this.progressColor);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "overlay", {
        get: function () {
            if (this.currentValue >= this.goalValue) {
                return -100;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "currentValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "goalValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "hideTextBarrierRemaining", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "hideTextBarrierProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "dangerColor", void 0);
    ProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/components/nutrition/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/components/nutrition/progress-bar/progress-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition/water/water.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/nutrition/water/water.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar\">\r\n  <div class=\"goal-bar\">\r\n    <div class=\"progress\" [ngStyle]=\"{'width': percentage + '%', 'background-color': changeBarColor}\"></div>\r\n  </div>\r\n  <span><span class=\"color\">{{currentValue}}/</span>{{ totalValue}}oz</span>\r\n</div>\r\n\r\n<!-- Add water  -->\r\n<div class=\"add-water\">\r\n  <ion-button expand=\"full\" fill=\"clear\" (click)=\"addWater()\">\r\n    <ion-icon name=\"add\"></ion-icon> Add Water\r\n  </ion-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/nutrition/water/water.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/nutrition/water/water.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700; }\n  ion-item .right {\n    text-align: right; }\n  ion-item .color {\n    color: #bcbdbc;\n    padding-right: 6px; }\n  .progress-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 15px; }\n  .progress-bar span {\n    font-weight: bold;\n    font-size: 14px;\n    padding: 0 3px; }\n  .progress-bar .color {\n    font-weight: bold;\n    font-size: 14px;\n    color: #1fb2d2; }\n  .goal-bar {\n  width: 100%;\n  margin: 0 auto;\n  background-color: #2b2b2b;\n  height: 12px;\n  position: relative;\n  overflow: hidden; }\n  .goal-bar .progress {\n    height: 12px;\n    background-color: #1fb2d2;\n    transition: all 0.2s ease; }\n  .add-water {\n  text-transform: uppercase; }\n  .add-water ion-button {\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vd2F0ZXIvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxudXRyaXRpb25cXHdhdGVyXFx3YXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFIbEI7SUFLSSxpQkFBaUIsRUFBQTtFQUxyQjtJQVFJLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQUl0QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQUpqQjtJQU1JLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBUmxCO0lBV0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFJbEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBTmxCO0lBUUksWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUIsRUFBQTtFQUk3QjtFQUNFLHlCQUF5QixFQUFBO0VBRDNCO0lBR00sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vd2F0ZXIvd2F0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jb2xvciB7XHJcbiAgICBjb2xvcjogI2JjYmRiYztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gIH1cclxuICAuY29sb3Ige1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICB9XHJcbn1cclxuXHJcbi5nb2FsLWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLnByb2dyZXNzIHtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmIyZDI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC13YXRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/nutrition/water/water.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/nutrition/water/water.component.ts ***!
  \***************************************************************/
/*! exports provided: WaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterComponent", function() { return WaterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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


var WaterComponent = /** @class */ (function () {
    // private waterPicker: PickerColumnOption[] = [];
    function WaterComponent(pickerCtrl) {
        this.pickerCtrl = pickerCtrl;
        this.currentValue = 0;
        this.totalValue = 0;
        this.barColor = 'blue';
        this.dangerColor = 'red';
        this.waterSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WaterComponent.prototype.ngOnInit = function () {
        this.createWaterOptions();
    };
    Object.defineProperty(WaterComponent.prototype, "percentage", {
        get: function () {
            return (this.currentValue / this.totalValue) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterComponent.prototype, "changeBarColor", {
        get: function () {
            if (this.percentage >= 100) {
                return this.dangerColor;
            }
        },
        enumerable: true,
        configurable: true
    });
    WaterComponent.prototype.createWaterOptions = function () {
        var opts = [];
        for (var i = 4; i <= 40; i = i + 2) {
            opts.push({
                text: i + " oz",
                value: i
            });
        }
        return opts;
    };
    WaterComponent.prototype.addWater = function () {
        return __awaiter(this, void 0, void 0, function () {
            var picker;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pickerCtrl.create({
                            buttons: [
                                {
                                    text: 'Add',
                                    handler: function (e) {
                                        _this.waterSelected.emit(e.water.value);
                                    }
                                },
                                {
                                    text: 'Cancel'
                                }
                            ],
                            columns: [{
                                    name: 'water',
                                    options: this.createWaterOptions(),
                                }]
                        })];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WaterComponent.prototype, "currentValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WaterComponent.prototype, "totalValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WaterComponent.prototype, "barColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WaterComponent.prototype, "dangerColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WaterComponent.prototype, "waterSelected", void 0);
    WaterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-water',
            template: __webpack_require__(/*! ./water.component.html */ "./src/app/components/nutrition/water/water.component.html"),
            styles: [__webpack_require__(/*! ./water.component.scss */ "./src/app/components/nutrition/water/water.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PickerController"]])
    ], WaterComponent);
    return WaterComponent;
}());



/***/ }),

/***/ "./src/app/services/barcode-scanner/barcode-scanner.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/barcode-scanner/barcode-scanner.service.ts ***!
  \*********************************************************************/
/*! exports provided: BarcodeScannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerService", function() { return BarcodeScannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _zebra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zebra */ "./src/app/services/barcode-scanner/zebra.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodeScannerService = /** @class */ (function () {
    function BarcodeScannerService(barcodeScanner, platform) {
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
    }
    /**
     * Start scanner
     */
    BarcodeScannerService.prototype.scan = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            return this.barcodeScanner.scan()
                .then(function (result) { return _this.isResultCancelled(result); })
                .then(function (result) { return _this.getUPCA(result); })
                .catch(function () { return Promise.reject('Bad scan. Try again'); });
        }
        return Promise.reject('Not available in web platform');
    };
    /**
     * Get UPCA converted string from UPCE and EAN_13
     * For EAN_8 returning direct string value
     *
     * @param result
     */
    BarcodeScannerService.prototype.getUPCA = function (result) {
        if (result === false) {
            return Promise.resolve(result);
        }
        result = result;
        var barcodeInstance = Object(_zebra__WEBPACK_IMPORTED_MODULE_3__["Parse"])(result.text);
        if (result.format === 'EAN_8') {
            return Promise.resolve(result.text);
        }
        if (result.format === 'UPC_A') {
            return Promise.resolve(result.text);
        }
        return Promise.resolve(barcodeInstance.toUPCA().code);
    };
    BarcodeScannerService.prototype.isResultCancelled = function (result) {
        if (result.cancelled) {
            return Promise.resolve(false);
        }
        return Promise.resolve(result);
    };
    BarcodeScannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], BarcodeScannerService);
    return BarcodeScannerService;
}());



/***/ }),

/***/ "./src/app/services/barcode-scanner/zebra.ts":
/*!***************************************************!*\
  !*** ./src/app/services/barcode-scanner/zebra.ts ***!
  \***************************************************/
/*! exports provided: EAN8, EAN13, UPCA, UPCE, Parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAN8", function() { return EAN8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAN13", function() { return EAN13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCA", function() { return UPCA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCE", function() { return UPCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parse", function() { return Parse; });
/**
 * Code taken from nutritioninx reference
 * Gist Location: https://gist.github.com/sourcec0de/43a914d38931d6b174c0
 * Nutritioninx Location: https://docs.google.com/document/d/1LQkmOPviOuG0O4G2EnmNqbwAgCV_lnWyQ6_0y8HiQiA/edit
 * Dated: 20 May 2019
 */
var TYPE_EAN13 = 'EAN-13';
var TYPE_EAN8 = 'EAN-8';
var TYPE_UPCA = 'UPC-A';
var TYPE_UPCE = 'UPC-E';
function EAN8(code) {
    if (code.length !== 8) {
        throw new Error('EAN-8: Invalid code: ' + code);
    }
    this.code = code;
    this.type = TYPE_EAN8;
}
function EAN13(code) {
    if (code.length !== 13) {
        throw new Error('EAN-13: Invalid code: ' + code);
    }
    this.code = code;
    this.numberSystem = code[0] + code[1];
    this.manufacturerCode = code.substring(2, 7);
    this.productCode = code.substring(7, 12);
    this.checkDigit = code[12];
    this.type = TYPE_EAN13;
}
EAN13.prototype.calcCheckDigit = function () {
    return calcUPCCheck(this.code);
};
EAN13.prototype.isCheckDigitValid = function () {
    return this.checkDigit === this.calcCheckDigit();
};
EAN13.prototype.isUPCA = function () {
    return this.code[0] === '0';
};
EAN13.prototype.toUPCA = function () {
    if (this.isUPCA()) {
        return new UPCA(this.code.substring(1));
    }
    else {
        throw new Error('EAN-13: Not a UPC-A: ' + this.code);
    }
};
function UPCA(code) {
    if (code.length !== 12) {
        throw new Error('UPC-A: Invalid code: ' + code);
    }
    var typeMap = {
        0: 'REGULAR',
        1: 'RESERVED',
        2: 'VARIABLE_WEIGHT',
        3: 'DRUG_HEALTH',
        4: 'IN_STORE_NON_FOOD',
        5: 'COUPON',
        6: 'REGULAR',
        7: 'REGULAR',
        8: 'REGULAR',
        9: 'REGULAR'
    };
    this.code = code;
    this.numberSystem = code[0];
    this.manufacturerCode = code.substring(1, 6);
    this.productCode = code.substring(6, 11);
    this.checkDigit = code[11];
    this.productType = typeMap[this.numberSystem];
    this.type = TYPE_UPCA;
}
UPCA.prototype.toEAN13 = function () {
    return new EAN13('0' + this.code);
};
UPCA.prototype.calcCheckDigit = function () {
    return calcUPCCheck(this.code);
};
UPCA.prototype.isCheckDigitValid = function () {
    return this.checkDigit === this.calcCheckDigit();
};
function UPCE(code) {
    if (code.length !== 8 || code[0] !== '0') {
        throw new Error('UPC-E: Invalid code: ' + code);
    }
    this.code = code;
    // UPC-E always starts with 0
    this.numberSystem = '0';
    /*
     * 1.) manufacturer code ends with 000, 100, or 200, the UPC-E code consists
     *     of the first two characters of the manufacturer code, the last three
     *     characters of the product code, followed by the third character of the
     *     manufacturer code. Under this case, The product code must be 00000 and
     *     00999.
     *
     * 2.) manufacturer code ends with 00 but does not meet the #1 requirement,
     *     the UPC-E code consists of the first three characters of the
     *     manufacturer code, the last two characters of the product code,
     *     followed by digit “3”. The product code can only contain two digits
     *     (00000 to 00099).
     *
     * 3.) manufacturer code ends in 0 but non of the above qualifies, the UPC-E
     *     consists of the first four digits manufacturer code and the last digit
     *     of the product code, followed by the digit “4”. The product code in
     *     this case can only contain one digit(00000 to 00009).
     *
     * 4.) manufacturer code ends with non-zero digit, the UPC-E code consists of
     *     the manufacturer code and the last digit of the product code. In this
     *     case the product case can only be one from 00005 to 00009 because 0 to
     *     4 has been used for the above four cases.
     */
    if (code[6] in ['0', '1', '2']) {
        this.manufacturerCode = code[1] + code[2] + code[6] + '00';
        this.productCode = '00' + code[3] + code[4] + code[5];
    }
    else if (code[6] === '3') {
        this.manufacturerCode = code[1] + code[2] + code[3] + '00';
        this.productCode = '000' + code[4] + code[5];
    }
    else if (code[6] === '4') {
        this.manufacturerCode = code[1] + code[2] + code[3] + code[4] + '0';
        this.productCode = '0000' + code[5];
    }
    else {
        this.manufacturerCode = code.substring(1, 6);
        this.productCode = '0000' + code[6];
    }
    this.checkDigit = code[7];
    this.productType = 'REGULAR';
    this.type = TYPE_UPCE;
}
UPCE.prototype.toUPCA = function () {
    return new UPCA('0' + this.manufacturerCode + this.productCode + this.checkDigit);
};
UPCE.prototype.toEAN13 = function () {
    return this.toUPCA().toEAN13();
};
UPCE.prototype.calcCheckDigit = function () {
    return calcUPCCheck(this.code);
};
UPCE.prototype.isCheckDigitValid = function () {
    return this.checkDigit === this.calcCheckDigit();
};
function calcUPCCheck(code) {
    var checkDigit = 0;
    var odd = true;
    for (var i = 0; i < code.length; i++) {
        if (odd) {
            checkDigit += parseInt(code[i], 10) * 3;
        }
        else {
            checkDigit += parseInt(code[i], 10);
        }
        odd = !odd;
    }
    checkDigit = checkDigit % 10;
    checkDigit = 10 - checkDigit;
    checkDigit = checkDigit % 10;
    // same as new String()
    // does not product linting error
    return '' + checkDigit;
}
function parse(code) {
    if (!code) {
        throw new Error('most provide code');
    }
    else {
        if (code.length === 12) {
            return new UPCA(code);
        }
        else if (code.length === 8 && code[0] === '0') {
            return new UPCE(code);
        }
        else if (code.length === 13) {
            return new EAN13(code);
        }
        else if (code.length === 8 && code[0] !== '0') {
            return new EAN8(code);
        }
        else {
            throw new Error('invalid code');
        }
    }
}
var Parse = parse;



/***/ }),

/***/ "./src/app/services/custom-food-template/custom-food-template.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/custom-food-template/custom-food-template.service.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomFoodTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFoodTemplateService", function() { return CustomFoodTemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomFoodTemplateService = /** @class */ (function (_super) {
    __extends(CustomFoodTemplateService, _super);
    function CustomFoodTemplateService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        CustomFoodTemplateService_1.SET_PLATFORM(platform);
        return _this;
    }
    CustomFoodTemplateService_1 = CustomFoodTemplateService;
    CustomFoodTemplateService.prototype.listCustomFoods = function () {
        return this.http.get(CustomFoodTemplateService_1.Url('nutritions/custom-food'), CustomFoodTemplateService_1.BaseOptions(true, true))
            .toPromise()
            .catch(CustomFoodTemplateService_1.HandleError);
    };
    CustomFoodTemplateService.prototype.storeCustomFood = function (foodItem) {
        var data = {
            calories: foodItem.serving_size.calories,
            fats: foodItem.serving_size.fats,
            carbs: foodItem.serving_size.carbs,
            protein: foodItem.serving_size.protein,
            name: foodItem.name,
            amount: foodItem.serving_size.amount,
            unit: foodItem.serving_size.unit,
        };
        return this.http.post(CustomFoodTemplateService_1.Url('nutritions/custom-food'), data, CustomFoodTemplateService_1.BaseOptions())
            .toPromise()
            .catch(CustomFoodTemplateService_1.HandleError);
    };
    CustomFoodTemplateService.prototype.updateCustomFood = function (id, foodItem) {
        var data = {
            calories: foodItem.serving_size.calories,
            fats: foodItem.serving_size.fats,
            carbs: foodItem.serving_size.carbs,
            protein: foodItem.serving_size.protein,
            name: foodItem.name,
            amount: foodItem.serving_size.amount,
            unit: foodItem.serving_size.unit,
        };
        return this.http.put(CustomFoodTemplateService_1.Url("nutritions/custom-food/" + id), data, CustomFoodTemplateService_1.BaseOptions())
            .toPromise()
            .catch(CustomFoodTemplateService_1.HandleError);
    };
    CustomFoodTemplateService.prototype.deleteCustomFood = function (id) {
        return this.http.delete(CustomFoodTemplateService_1.Url("nutritions/custom-food/" + id), CustomFoodTemplateService_1.BaseOptions())
            .toPromise()
            .catch(CustomFoodTemplateService_1.HandleError);
    };
    CustomFoodTemplateService.prototype.searchTemplate = function (name) {
        var options = CustomFoodTemplateService_1.BaseOptions();
        options.params = {
            name: name
        };
        return this.http.get(CustomFoodTemplateService_1.Url('nutritions/custom-food'), options);
    };
    var CustomFoodTemplateService_1;
    CustomFoodTemplateService = CustomFoodTemplateService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], CustomFoodTemplateService);
    return CustomFoodTemplateService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/food-items/food-items.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/food-items/food-items.service.ts ***!
  \***********************************************************/
/*! exports provided: FoodItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemsService", function() { return FoodItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodItemsService = /** @class */ (function (_super) {
    __extends(FoodItemsService, _super);
    function FoodItemsService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        FoodItemsService_1.SET_PLATFORM(platform);
        return _this;
    }
    FoodItemsService_1 = FoodItemsService;
    FoodItemsService.prototype.createFoodItem = function (nutritionId, meal, isCustom, foodItem, isCustomFoodTemplate) {
        var _this = this;
        if (isCustomFoodTemplate === void 0) { isCustomFoodTemplate = false; }
        var body = this.convertFoodItemToBody(foodItem, meal, isCustom, isCustomFoodTemplate);
        return this.http.post(FoodItemsService_1.Url("nutritions/macro-counting/" + nutritionId + "/tracked-item"), body, FoodItemsService_1.BaseOptions())
            .toPromise()
            .then(function (result) { return _this.convertToFoodItem(result); })
            .catch(FoodItemsService_1.HandleError);
    };
    FoodItemsService.prototype.convertToFoodItem = function (trackedItem) {
        return {
            id: trackedItem.id,
            name: trackedItem.name,
            meal: trackedItem.meal,
            calories: trackedItem.calories,
            carbs: trackedItem.carbs,
            protein: trackedItem.protein,
            fats: trackedItem.fats,
            is_custom: trackedItem.is_custom,
            is_branded_food: trackedItem.is_branded_food,
            nutritioninx_food_name: trackedItem.nutritioninx_food_name,
            nutritioninx_item_id: trackedItem.nutritioninx_item_id,
            is_custom_food_template: trackedItem.is_custom_food_template,
            amount_consumed: {
                unit: trackedItem.consumed_unit,
                amount: trackedItem.consumed_amount,
            },
            serving_size: {
                calories: trackedItem.serving_information.calories,
                carbs: trackedItem.serving_information.carbs,
                protein: trackedItem.serving_information.protein,
                fats: trackedItem.serving_information.fats,
                unit: trackedItem.serving_information.serving_unit,
                amount: trackedItem.serving_information.serving_amount,
            },
            alt_servings: trackedItem.serving_information.alt_servings,
            total_count: trackedItem.total_count || 0
        };
    };
    FoodItemsService.prototype.updateFoodItem = function (foodItemId, nutritionId, meal, isCustom, foodItem, isCustomFoodTemplate) {
        var _this = this;
        if (isCustomFoodTemplate === void 0) { isCustomFoodTemplate = false; }
        var body = this.convertFoodItemToBody(foodItem, meal, isCustom, isCustomFoodTemplate);
        return this.http.put(FoodItemsService_1.Url("nutritions/macro-counting/" + nutritionId + "/tracked-item/" + foodItemId), body, FoodItemsService_1.BaseOptions())
            .toPromise()
            .then(function (result) { return _this.convertToFoodItem(result); })
            .catch(FoodItemsService_1.HandleError);
    };
    FoodItemsService.prototype.deleteFoodItem = function (foodItemId, nutritionDayId) {
        return this.http.delete(FoodItemsService_1.Url("nutritions/macro-counting/" + nutritionDayId + "/tracked-item/" + foodItemId), FoodItemsService_1.BaseOptions())
            .toPromise()
            .catch(FoodItemsService_1.HandleError);
    };
    /**
     * Returns recent food items
     */
    FoodItemsService.prototype.recentFoodItems = function () {
        var _this = this;
        return this.http.get(FoodItemsService_1.Url("nutritions/macro-counting/tracked-item/recent"), FoodItemsService_1.BaseOptions(true, true, 900))
            .toPromise()
            .then(function (result) { return result.map(function (item) { return _this.convertToFoodItem(item); }); })
            .catch(FoodItemsService_1.HandleError);
    };
    /**
     * Returns around this time food items
     */
    FoodItemsService.prototype.aroundTimeFoodItems = function () {
        var _this = this;
        return this.http.get(FoodItemsService_1.Url("nutritions/macro-counting/tracked-item/around-this-time"), FoodItemsService_1.BaseOptions(true, true, 3600))
            .toPromise()
            .then(function (result) { return result.map(function (item) { return _this.convertToFoodItem(item); }); })
            .catch(FoodItemsService_1.HandleError);
    };
    FoodItemsService.prototype.convertFoodItemToBody = function (foodItem, meal, isCustom, isCustomFoodTemplate) {
        if (isCustomFoodTemplate === void 0) { isCustomFoodTemplate = false; }
        return {
            calories: foodItem.calories,
            fats: foodItem.fats,
            carbs: foodItem.carbs,
            protein: foodItem.protein,
            meal: meal,
            is_custom: isCustom,
            name: foodItem.name,
            is_custom_food_template: isCustomFoodTemplate,
            is_branded_food: foodItem.is_branded_food,
            nutritioninx_food_name: foodItem.nutritioninx_food_name,
            nutritioninx_item_id: foodItem.nutritioninx_item_id,
            meal_template_id: foodItem.meal_template_id || null,
            serving_size: {
                calories: foodItem.serving_size.calories,
                fats: foodItem.serving_size.fats,
                carbs: foodItem.serving_size.carbs,
                protein: foodItem.serving_size.protein,
                amount: foodItem.serving_size.amount,
                unit: foodItem.serving_size.unit,
            },
            amount_consumed: {
                amount: foodItem.amount_consumed.amount,
                unit: foodItem.amount_consumed.unit,
            },
            alt_servings: foodItem.alt_servings
        };
    };
    var FoodItemsService_1;
    FoodItemsService = FoodItemsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], FoodItemsService);
    return FoodItemsService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/meal-templates/meal-templates.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/meal-templates/meal-templates.service.ts ***!
  \*******************************************************************/
/*! exports provided: MealTemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealTemplatesService", function() { return MealTemplatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_items_food_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../food-items/food-items.service */ "./src/app/services/food-items/food-items.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MealTemplatesService = /** @class */ (function (_super) {
    __extends(MealTemplatesService, _super);
    function MealTemplatesService(http, platform, foodItem) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        _this.foodItem = foodItem;
        return _this;
    }
    MealTemplatesService_1 = MealTemplatesService;
    /**
     * List all meal templates
     */
    MealTemplatesService.prototype.all = function () {
        var _this = this;
        return this.http.get(MealTemplatesService_1.Url('nutritions/meal-templates'), MealTemplatesService_1.BaseOptions(true, true))
            .toPromise()
            .then(function (mealTemplates) { return mealTemplates.map(function (mealTemplate) {
            mealTemplate.items = mealTemplate.items.map(function (mealItem) { return _this.foodItem.convertToFoodItem(mealItem); });
            return mealTemplate;
        }); })
            .catch(MealTemplatesService_1.HandleError);
    };
    /**
     * List all templates with filters
     * @param name
     */
    MealTemplatesService.prototype.list = function (name) {
        var _this = this;
        var options = MealTemplatesService_1.BaseOptions(true);
        options.params = {
            name: name || ''
        };
        return this.http.get(MealTemplatesService_1.Url('nutritions/meal-templates'), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (results) {
            if (!!results === false) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
            }
            // fix for cancelled response returning empty content to filter results
            results = results.filter(function (mealTemplate) {
                var items = mealTemplate.items.filter(function (mealItem) { return !!mealItem && !!mealItem.serving_information; });
                return items.length > 0;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(results);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (mealTemplates) { return mealTemplates.map(function (mealTemplate) {
            // fix for cancelled response returning empty content
            // and checking explicit structure integrity as returning empty object as well.
            mealTemplate.items = mealTemplate.items.filter(function (mealItem) {
                return !!mealItem && !!mealItem.serving_information;
            });
            mealTemplate.items = mealTemplate.items.map(function (mealItem) { return _this.foodItem.convertToFoodItem(mealItem); });
            return mealTemplate;
        }); }));
    };
    MealTemplatesService.prototype.create = function (name, items) {
        var _this = this;
        var data = {
            name: name,
            items: items
        };
        return this.http.post(MealTemplatesService_1.Url('nutritions/meal-templates'), data, MealTemplatesService_1.BaseOptions())
            .toPromise()
            .then(function (result) {
            result.items = result.items.map(function (mealItem) { return _this.foodItem.convertToFoodItem(mealItem); });
            return result;
        })
            .catch(MealTemplatesService_1.HandleError);
    };
    MealTemplatesService.prototype.update = function (id, name) {
        var _this = this;
        return this.http.put(MealTemplatesService_1.Url("nutritions/meal-templates/" + id), { name: name }, MealTemplatesService_1.BaseOptions())
            .toPromise()
            .then(function (result) {
            result.items = result.items.map(function (mealItem) { return _this.foodItem.convertToFoodItem(mealItem); });
            return result;
        })
            .catch(MealTemplatesService_1.HandleError);
    };
    MealTemplatesService.prototype.delete = function (id) {
        return this.http.delete(MealTemplatesService_1.Url("nutritions/meal-templates/" + id), MealTemplatesService_1.BaseOptions())
            .toPromise()
            .catch(MealTemplatesService_1.HandleError);
    };
    MealTemplatesService.prototype.aroundThisTime = function () {
        var _this = this;
        return this.http.get(MealTemplatesService_1.Url('nutritions/meal-templates/around-this-time'), MealTemplatesService_1.BaseOptions(true))
            .toPromise()
            .then(function (mealTemplates) { return mealTemplates.map(function (mealTemplate) {
            mealTemplate.items = mealTemplate.items.map(function (mealItem) { return _this.foodItem.convertToFoodItem(mealItem); });
            return mealTemplate;
        }); })
            .catch(MealTemplatesService_1.HandleError);
    };
    var MealTemplatesService_1;
    MealTemplatesService = MealTemplatesService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _food_items_food_items_service__WEBPACK_IMPORTED_MODULE_4__["FoodItemsService"]])
    ], MealTemplatesService);
    return MealTemplatesService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/third-party/nutritionix.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/third-party/nutritionix.service.ts ***!
  \*************************************************************/
/*! exports provided: NutritionixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionixService", function() { return NutritionixService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NutritionixService = /** @class */ (function () {
    function NutritionixService(http, platform) {
        this.http = http;
        this.platform = platform;
    }
    NutritionixService_1 = NutritionixService;
    /**
     * Returns api url path
     *
     * @param url
     * @constructor
     * @return string
     */
    NutritionixService.Url = function (url) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nutritionix.url + url;
    };
    /**
     * Returns headers
     *
     * @param authenticated
     * @param cache
     * @param cacheDuration
     * @constructor
     * @return HttpHeaders
     */
    NutritionixService.Headers = function (authenticated, cache, cacheDuration) {
        if (authenticated === void 0) { authenticated = true; }
        if (cache === void 0) { cache = false; }
        if (cacheDuration === void 0) { cacheDuration = 21600; }
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('Accept', 'application/json');
        header = header.set('x-app-id', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nutritionix.appId);
        header = header.set('x-app-key', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nutritionix.appKey);
        return header;
    };
    NutritionixService.BaseOptions = function (authenticated, cache, cacheDuration) {
        if (authenticated === void 0) { authenticated = true; }
        if (cache === void 0) { cache = false; }
        if (cacheDuration === void 0) { cacheDuration = 21600; }
        return {
            headers: NutritionixService_1.Headers(authenticated, cache, cacheDuration),
            params: {}
        };
    };
    NutritionixService.prototype.search = function (searchValue) {
        var options = NutritionixService_1.BaseOptions();
        options.params = {
            query: searchValue,
            self: true,
            branded: true,
            common: true,
            common_general: true,
            common_grocery: true,
            common_restaurant: true,
            detailed: true,
            claims: true
        };
        return this.http.get(NutritionixService_1.Url('search/instant'), options);
    };
    NutritionixService.prototype.commonDetail = function (query, transphormerId) {
        var options = NutritionixService_1.BaseOptions();
        options.headers = options.headers.set('x-remote-user-id', transphormerId.toString());
        var body = {
            query: query
        };
        return this.http.post(NutritionixService_1.Url('natural/nutrients'), body, options)
            .toPromise()
            .then(function (result) {
            result.foods = result.foods.map(function (food) {
                if (food.alt_measures instanceof Array) {
                    food.alt_measures = food.alt_measures.map(function (measure) {
                        measure.quantity = measure.qty;
                        return measure;
                    });
                }
                return food;
            });
            return result;
        });
    };
    NutritionixService.prototype.brandedDetail = function (query) {
        var options = NutritionixService_1.BaseOptions();
        options.params = {
            nix_item_id: query
        };
        return this.http.get(NutritionixService_1.Url('search/item'), options)
            .toPromise();
    };
    NutritionixService.prototype.searchBarcode = function (barcode) {
        var options = NutritionixService_1.BaseOptions();
        options.params = {
            upc: barcode,
            claims: false
        };
        return this.http.get(NutritionixService_1.Url('search/item'), options);
    };
    var NutritionixService_1;
    NutritionixService = NutritionixService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], NutritionixService);
    return NutritionixService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-custom-food-template-custom-food-template-module~pages-macro-macro-module~pages-profil~d03a7b57.js.map