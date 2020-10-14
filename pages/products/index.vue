<template>
  <div class="flex flex-col m-5 space-y-10">
    <div class="p-10">
      <h1 class="text-2xl">Product List</h1>
      <br />
      <h2 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except</h2>
    </div>
    <div id='collection-component-1602645043996' class="flex bg-gray-100 w-full"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	layout: 'nav',
	data() {
		return {
			products: [],
		}
	},
	methods: {
	},
	mounted: function() {
		/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'store-neil-van.myshopify.com',
      storefrontAccessToken: '808886a054056aa4305a641d79162766',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '221475766421',
        node: document.getElementById('collection-component-1602645043996'),
        moneyFormat: '%E2%82%B1%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "font-family": "Lato, sans-serif"
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#463172"
        },
        "background-color": "#291d43",
        ":focus": {
          "background-color": "#463172"
        }
      },
      "price": {
        "font-family": "Lato, sans-serif"
      },
      "compareAt": {
        "font-family": "Lato, sans-serif"
      },
      "unitPrice": {
        "font-family": "Lato, sans-serif"
      }
    },
    "text": {
      "button": "Add to cart"
    },
    "googleFonts": [
      "Lato",
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#463172"
        },
        "background-color": "#291d43",
        ":focus": {
          "background-color": "#463172"
        }
      }
    },
    "googleFonts": [
      "Montserrat"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#463172"
        },
        "background-color": "#291d43",
        ":focus": {
          "background-color": "#463172"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "background-color": "#291d43",
        ":hover": {
          "background-color": "#463172"
        },
        ":focus": {
          "background-color": "#463172"
        }
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/
	},
}
</script>

