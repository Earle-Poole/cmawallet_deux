exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 1328:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "layout_layout__79NxL"
};


/***/ }),

/***/ 1325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/molecules/NavList/index.tsx




const NavList = ({ items  })=>{
    const { pathname  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center font-semibold pb-8 whitespace-nowrap flex-wrap",
        children: items.map((item)=>{
            const href = item.route || item.href;
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: external_classnames_default()("p-5 text-xl hover:underline cursor-pointer", {
                        underline: pathname === href
                    }),
                    target: item.href ? "_blank" : undefined,
                    children: item.label
                })
            }, item.label);
        })
    });
};
/* harmony default export */ const molecules_NavList = (NavList);

;// CONCATENATED MODULE: ./components/molecules/Footer/index.tsx



const footerNavItems = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "Contact Us",
        route: "/contact-us"
    },
    {
        label: "Terms & Conditions",
        route: "/terms-conditions"
    },
    {
        label: "Safety & Use",
        route: "/safety-use"
    },
    {
        label: "Product Design",
        route: "/product-design"
    }, 
];
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col z-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules_NavList, {
                items: footerNavItems
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center text-sm leading-none pb-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "Copyright ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "\xa9"
                            }),
                            " ",
                            new Date().getFullYear(),
                            " CMA Wallets, LLC"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "Website by",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://github.com/Earle-Poole",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    className: "font-semibold hover:underline",
                                    children: "Earle Poole"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const molecules_Footer = (Footer);

;// CONCATENATED MODULE: ./components/molecules/Logo/index.tsx

const Logo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center py-5 select-none whitespace-nowrap",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-7xl mb-3",
                children: "CMA Wallets, LLC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-2xl",
                children: "Give yourself the advantage!"
            })
        ]
    });
};
/* harmony default export */ const molecules_Logo = (Logo);

;// CONCATENATED MODULE: ./components/molecules/Header/index.tsx



const headerNavItems = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "LEO/Military",
        route: "/leo-military"
    },
    {
        label: "Safety & Use",
        route: "/safety-use"
    },
    {
        label: "Buy It Now",
        href: "https://shoppy.gg/product/hfRLCkS"
    },
    {
        label: "Forms & Links",
        route: "/forms-links"
    },
    {
        label: "Scenarios",
        route: "/scenarios"
    },
    {
        label: "Compatibility List",
        route: "/compatibility-list"
    }, 
];
const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "z-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules_Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(molecules_NavList, {
                items: headerNavItems
            })
        ]
    });
};
/* harmony default export */ const molecules_Header = (Header);

// EXTERNAL MODULE: ./styles/layout.module.css
var layout_module = __webpack_require__(1328);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("flex flex-col min-h-screen items-center", (layout_module_default()).layout),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-1 w-full justify-center max-w-7xl z-10",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(molecules_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;