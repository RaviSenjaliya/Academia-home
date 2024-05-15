(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63],
  {
    2852: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/page-courses",
        function () {
          return c(8888);
        },
      ]);
    },
    8851: function (e, s, c) {
      "use strict";
      var l = c(5893),
        i = c(1664),
        a = c.n(i);
      c(7294);
      let n = (e) =>
        (0, l.jsx)("section", {
          className: "page-title",
          style: { backgroundImage: "url(images/resource/topbg.jpg)" },
          children: (0, l.jsx)("div", {
            className: "auto-container",
            children: (0, l.jsxs)("div", {
              className: "title-outer",
              children: [
                (0, l.jsx)("h1", { className: "title", children: e.pageName }),
                (0, l.jsxs)("ul", {
                  className: "page-breadcrumb",
                  children: [
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(a(), {
                        href: "/",
                        children: "Home",
                      }),
                    }),
                    (0, l.jsx)("li", { children: e.pageName }),
                  ],
                }),
              ],
            }),
          }),
        });
      s.Z = n;
    },
    8888: function (e, s, c) {
      "use strict";
      c.r(s),
        c.d(s, {
          default: function () {
            return d;
          },
        });
      var l = c(5893),
        i = c(7294),
        a = c(1982),
        n = c(8851),
        r = c(5121);
      let t = () => {
        let [e, s] = (0, i.useState)([]),
          [c, a] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            r.Z.get("https://academia-api-cu1m.onrender.com/api/subject")
              .then((e) => {
                s(e.data), a(!1);
              })
              .catch((e) => {
                console.error("Axios Error:", e);
              });
          }, []),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "courses-section",
              children: (0, l.jsx)("div", {
                className: "auto-container",
                children: c
                  ? (0, l.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: (0, l.jsx)("p", { children: "loading...." }),
                    })
                  : (0, l.jsx)("div", {
                      className: "row",
                      children: e.map((e, s) =>
                        (0, l.jsx)("div", {
                          className:
                            "course-block-two col-lg-4 col-md-6 col-sm-12",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)("img", {
                                      src: e.imgurl,
                                      title: "Edulrns",
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "value",
                                    children: "Advanced",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsxs)("ul", {
                                    className: "course-info",
                                    children: [
                                      (0, l.jsxs)("li", {
                                        children: [
                                          (0, l.jsx)("i", {
                                            className: "fa fa-book",
                                          }),
                                          " ",
                                          e.lesson,
                                          " Lessons",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        children: [
                                          (0, l.jsx)("i", {
                                            className: "fa fa-users",
                                          }),
                                          " ",
                                          e.students,
                                          " Students",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        children: [
                                          (0, l.jsx)("i", {
                                            className: "fa fa-clock",
                                          }),
                                          " 3 Weeks",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("h5", {
                                    className: "title",
                                    children: (0, l.jsx)("p", {
                                      children: e.title,
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "other-info",
                                    children: (0, l.jsx)("div", {
                                      className: "rating-box",
                                      children: (0, l.jsx)("h4", {
                                        children: e.subject,
                                      }),
                                    }),
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
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(a.Z, {
            HeaderStyle: "one",
            children: [
              (0, l.jsx)(n.Z, { pageName: "Courses Grid" }),
              (0, l.jsx)(t, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [996, 121, 982, 774, 888, 179], function () {
      return e((e.s = 2852));
    }),
      (_N_E = e.O());
  },
]);
