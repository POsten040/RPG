# Pizza Parlor Webpage

#### **This webpage lets a user order a pizza of varying size and toppings. Patrick Osten, 10/23/2020**

**[Click here to open github repository in web browser](https://github.com/POsten040/week-4-project)**

## Description

This webpage will give users a choice of pizza sizes and toppings to choose from. After they submit their order they will be shown a price for the pizza. They can also view the details of their order, and start the order over with the click of a button.

## Installation Requirements

- Up to date internet browser ([Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy9jwgkNels1LOSIWTx4sDazLfEgC6PylTug62KqyWPeA0EMyr3254aAjTTEALw_wcB&gclsrc=aw.ds), [Mozilla](https://www.mozilla.org/en-US/firefox/), [Opera](https://www.opera.com/)).
 
 
 -**optional**- 
- Code editor like [VsCode](https://**Code**.visualstudio.com/download) to view source **Code**.

## Setup

#### From the web
1. Go to this [GitHub Repo Page](https://github.com/POsten040/week-4-project).
2. Click the "Code" and click the 'Download zip' option.
3. Unzip the file, navigate to the root directory (week-1-project folder).
4. opent the 'index.html' file with your web browser.

--or--

#### From Terminal

1. Open GitBash/Bash, type 
: `git clone {https://github.com/POsten040/week-4-project}`
2. Navigate to the week-1-project directory and type
: `**Code** .`
3. Your **Code** editor will open the files, from there you must open the index.html file in your browser.

## Specs

**Describe: function Pizza ()**
| Test | Expect |
|------|--------|
|User input from form fields is converted to numbers and passed to consctructor to build pizza object| Input:(12in, olives, redsauce).toObject(Pizza= {1, 2, 2)|  
  
**Describe: Pizza.prototype.price**  
| Test | Expect |  
|------|--------|  
|Should take number values of pizza object properties, and sum the topping numbers then multiply by the size number|  input: pizzaObject(2, 3, 1, 2, 2).toOutput(16)|  

**Describe: function orderDetails...()** 
| Test | Expect |  
|------|--------|  
|Should take the number value from the user input and display replace the number with a string matching the user choices.
|pizzaObject = {1, 2, 3}.toOutPut(pizza = {feta, 2, 3})

**Describe: function ShowOrder(pizza)**
| Test | Expect |  
|------|--------|  
|Should show the converted values from orderDetails function on html page as an unordered list.
|pizzaObject = {feta, onion, pepperoni}.toOutPut(*feta
*onion
*pepperoni)

## Known Bugs


| Bugs  | Date Fixed |
|---|---|
|   If an order is placed and the detaisl are shown, placing another order without hitting the reset button is possible however the new order details will not be shown until the "show order details" button is clicked. Old order details will remain visible on the page.  |   |
| If a random order is generated, clicking "show my pizza details" causes the pizza details to pull from the form.  | 11/6/20  |
|  If pizza details button is clicked without making any selections on the form, pressing the random pizza button displays detaisl but shows 0 for price  |   |

## Support and contact details

Feel free to reach me through email with any comments:
*Patrickosten040@gmail.com*

## Technologies Used

- HTML5 language  
- CSS 
- Bootstrap
- Javascript
- JQuery

## License

[MIT license](https://opensource.org/licenses/MIT)

## Copyright (c) 2020 **_Patrick Osten_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.