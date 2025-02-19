(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [629],
  {
    2110: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/page-team",
        function () {
          return a(3423);
        },
      ]);
    },
    8851: function (e, s, a) {
      "use strict";
      var c = a(5893),
        n = a(1664),
        i = a.n(n);
      a(7294);
      let l = (e) =>
        (0, c.jsx)("section", {
          className: "page-title",
          style: { backgroundImage: "url(images/resource/topbg.jpg)" },
          children: (0, c.jsx)("div", {
            className: "auto-container",
            children: (0, c.jsxs)("div", {
              className: "title-outer",
              children: [
                (0, c.jsx)("h1", { className: "title", children: e.pageName }),
                (0, c.jsxs)("ul", {
                  className: "page-breadcrumb",
                  children: [
                    (0, c.jsx)("li", {
                      children: (0, c.jsx)(i(), {
                        href: "/",
                        children: "Home",
                      }),
                    }),
                    (0, c.jsx)("li", { children: e.pageName }),
                  ],
                }),
              ],
            }),
          }),
        });
      s.Z = l;
    },
    3423: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return d;
          },
        });
      var c = a(5893),
        n = a(7294),
        i = a(1982),
        l = a(8851),
        r = a(5121);
      let t = () => {
        let [e, s] = (0, n.useState)([]),
          [a, i] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            r.Z.get("https://academia-api-cu1m.onrender.com/api/subject")
              .then((e) => {
                s(e.data), i(!1);
              })
              .catch((e) => {
                console.error("Axios Error:", e);
              });
          }, []),
          (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("section", {
              className: "team-section",
              children: (0, c.jsx)("div", {
                className: "auto-container",
                children: a
                  ? (0, c.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: (0, c.jsx)("p", { children: "loading...." }),
                    })
                  : (0, c.jsx)("div", {
                      className: "row",
                      children: e.map((e, s) =>
                        (0, c.jsx)("div", {
                          className:
                            "team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",
                          children: (0, c.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, c.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, c.jsx)("figure", {
                                    className: "image",
                                    children: (0, c.jsx)("img", {
                                      src: "/images/avtar/avatar_".concat(
                                        s + 1,
                                        ".jpg"
                                      ),
                                      alt: "Edulrns",
                                      title: "Edulrns",
                                    }),
                                  }),
                                  (0, c.jsx)("span", {
                                    className: "share-icon fa fa-share-alt",
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "social-links",
                                    children: [
                                      (0, c.jsx)("a", {
                                        children: (0, c.jsx)("i", {
                                          className: "fab fa-twitter",
                                        }),
                                      }),
                                      (0, c.jsx)("a", {
                                        children: (0, c.jsx)("i", {
                                          className: "fab fa-facebook-f",
                                        }),
                                      }),
                                      (0, c.jsx)("a", {
                                        children: (0, c.jsx)("i", {
                                          className: "fab fa-pinterest-p",
                                        }),
                                      }),
                                      (0, c.jsx)("a", {
                                        children: (0, c.jsx)("i", {
                                          className: "fab fa-instagram",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, c.jsxs)("div", {
                                className: "info-box",
                                children: [
                                  (0, c.jsx)("h4", {
                                    className: "name",
                                    children: (0, c.jsx)("a", {
                                      href: "#",
                                      children: e.subteken,
                                    }),
                                  }),
                                  (0, c.jsx)("span", {
                                    className: "designation",
                                    children: e.subject,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      ),
                    }),
              }),
            }),
          })
        );
      };
      function d() {
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsxs)(i.Z, {
            HeaderStyle: "one",
            children: [
              (0, c.jsx)(l.Z, { pageName: "Team Grid" }),
              (0, c.jsx)(t, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [996, 121, 982, 774, 888, 179], function () {
      return e((e.s = 2110));
    }),
      (_N_E = e.O());
  },
]);
