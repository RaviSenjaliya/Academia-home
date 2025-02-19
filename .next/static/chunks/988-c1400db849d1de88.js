"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [988],
  {
    7563: function (s, e, a) {
      var l = a(5893),
        i = a(1664),
        c = a.n(i);
      a(7294);
      let n = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("section", {
            className: "about-section mb-5",
            children: [
              (0, l.jsx)("div", {
                className: "anim-icons",
                children: (0, l.jsx)("span", {
                  className: "icon icon-dotted-map",
                }),
              }),
              (0, l.jsx)("div", {
                className: "auto-container",
                children: (0, l.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "content-column col-lg-6 col-md-12 order-2 wow fadeInRight",
                      "data-wow-delay": "600ms",
                      children: (0, l.jsxs)("div", {
                        className: "inner-column",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "sec-title",
                            children: [
                              (0, l.jsx)("span", {
                                className: "sub-title",
                                children: "Get to know us",
                              }),
                              (0, l.jsx)("h2", {
                                children:
                                  "Grow your skills learn with us from anywhere",
                              }),
                              (0, l.jsx)("div", {
                                className: "text",
                                children:
                                  "Academia commemorates 25 years in India. At this significant milestone, it is gratifying to note that our homegrown brand has been strengthening the foundation of employability & skill-building in the nation for the past 25 years.",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("ul", {
                            className: "list-style-one two-column",
                            children: [
                              (0, l.jsxs)("li", {
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon fa fa-check",
                                  }),
                                  " Expert trainers",
                                ],
                              }),
                              (0, l.jsxs)("li", {
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon fa fa-check",
                                  }),
                                  " Online learning",
                                ],
                              }),
                              (0, l.jsxs)("li", {
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon fa fa-check",
                                  }),
                                  " Lifetime access",
                                ],
                              }),
                              (0, l.jsxs)("li", {
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon fa fa-check",
                                  }),
                                  " Great results",
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "btn-box",
                            children: (0, l.jsx)(c(), {
                              href: "/page-about",
                              className: "theme-btn btn-style-one",
                              children: (0, l.jsx)("span", {
                                className: "btn-title",
                                children: "Discover more",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "image-column col-lg-6 col-md-12 justify-content-center d-flex mt-5 bg-transparent",
                      children: (0, l.jsx)("div", {
                        className: "inner-column wow fadeInLeft",
                        children: (0, l.jsx)("figure", {
                          className: "image-1 overlay-anim wow fadeInUp",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/about.gif",
                            title: "Edulrns",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      e.Z = n;
    },
    5906: function (s, e, a) {
      a.d(e, {
        Z: function () {
          return x;
        },
      });
      var l = a(5893),
        i = a(1664),
        c = a.n(i),
        n = a(7294),
        r = a(5121),
        t = a(2544),
        o = a(2546);
      t.ZP.use([t.pt, t.W_]);
      let d = () => {
          let [s, e] = (0, n.useState)([]),
            [a, i] = (0, n.useState)(!0);
          return (
            (0, n.useEffect)(() => {
              r.Z.get("https://academia-api-cu1m.onrender.com/api/subject")
                .then((s) => {
                  e(s.data), i(!1);
                })
                .catch((s) => {
                  console.error("Axios Error:", s);
                });
            }, []),
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(o.tq, {
                  slidesPerView: 4,
                  spaceBetween: 0,
                  loop: !0,
                  autoplay: { delay: 2500, disableOnInteraction: !1 },
                  navigation: {
                    prevEl: ".owl-prev-course-1",
                    nextEl: ".owl-next-course-1",
                  },
                  breakpoints: {
                    320: { slidesPerView: 1 },
                    575: { slidesPerView: 1 },
                    767: { slidesPerView: 1 },
                    991: { slidesPerView: 2 },
                    1199: { slidesPerView: 3 },
                    1350: { slidesPerView: 4 },
                  },
                  children: a
                    ? (0, l.jsx)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: (0, l.jsx)("p", { children: "loading...." }),
                      })
                    : (0, l.jsx)("div", {
                        children: s.map((s, e) =>
                          (0, l.jsx)(o.o5, {
                            children: (0, l.jsx)("div", {
                              className: "course-block",
                              children: (0, l.jsxs)("div", {
                                className: "inner-box",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "image-box",
                                    children: [
                                      (0, l.jsx)("figure", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                          src: s.imgurl,
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
                                              " 30 Lessons",
                                            ],
                                          }),
                                          (0, l.jsxs)("li", {
                                            children: [
                                              (0, l.jsx)("i", {
                                                className: "fa fa-users",
                                              }),
                                              " 50+ Students",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("h5", {
                                        className: "title",
                                        children: (0, l.jsx)(c(), {
                                          href: "/page-course-details",
                                          children: s.subject,
                                        }),
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: "other-info",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "rating-box",
                                            children: [
                                              (0, l.jsx)("span", {
                                                className: "text",
                                                children: "(4.9 /8 Rating)",
                                              }),
                                              (0, l.jsxs)("div", {
                                                className: "rating",
                                                children: [
                                                  (0, l.jsx)("span", {
                                                    className: "fa fa-star",
                                                  }),
                                                  (0, l.jsx)("span", {
                                                    className: "fa fa-star",
                                                  }),
                                                  (0, l.jsx)("span", {
                                                    className: "fa fa-star",
                                                  }),
                                                  (0, l.jsx)("span", {
                                                    className: "fa fa-star",
                                                  }),
                                                  (0, l.jsx)("span", {
                                                    className: "fa fa-star",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "duration",
                                            children: [
                                              (0, l.jsx)("i", {
                                                className: "fa fa-clock",
                                              }),
                                              " 3 Weeks",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          })
                        ),
                      }),
                }),
                (0, l.jsxs)("div", {
                  class: "owl-nav",
                  children: [
                    (0, l.jsx)("div", {
                      class: "owl-prev owl-prev-course-1",
                      children: (0, l.jsx)("span", {
                        class: "fa fa-long-arrow-alt-left",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      class: "owl-next owl-next-course-1",
                      children: (0, l.jsx)("span", {
                        class: "fa fa-long-arrow-alt-right",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        m = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "courses-section",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsx)("div", {
                    className: "anim-icons",
                    children: (0, l.jsx)("span", {
                      className: "icon icon-e wow zoomIn",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "sec-title",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "popular courses",
                      }),
                      (0, l.jsxs)("h2", {
                        children: [
                          "Pick a course to",
                          (0, l.jsx)("br", {}),
                          " get started your study",
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "carousel-outer",
                    children: (0, l.jsx)("div", {
                      className:
                        "courses-carousel position-relative default-nav",
                      children: (0, l.jsx)(d, {}),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "bottom-text",
                    children: (0, l.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, l.jsx)("strong", { children: "10+" }),
                        " more skillful courses you can explore",
                        " ",
                        (0, l.jsx)(c(), {
                          href: "/page-courses",
                          className: "theme-btn btn-style-one small",
                          children: "Explore All Courses",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
      var x = m;
    },
    2881: function (s, e, a) {
      var l = a(5893);
      a(7294);
      let i = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "features-section",
            children: (0, l.jsx)("div", {
              className: "auto-container",
              children: (0, l.jsxs)("div", {
                className: "row",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp",
                    children: (0, l.jsxs)("div", {
                      className: "inner-box ",
                      children: [
                        (0, l.jsx)("i", {
                          className: "icon flaticon-online-learning",
                        }),
                        (0, l.jsxs)("h5", {
                          className: "title",
                          children: [
                            "Online",
                            (0, l.jsx)("br", {}),
                            " Certifications",
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp",
                    "data-wow-delay": "400ms",
                    children: (0, l.jsxs)("div", {
                      className: "inner-box ",
                      children: [
                        (0, l.jsx)("i", {
                          className: "icon flaticon-elearning",
                        }),
                        (0, l.jsxs)("h5", {
                          className: "title",
                          children: [
                            "Top",
                            (0, l.jsx)("br", {}),
                            " Instructors",
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp",
                    "data-wow-delay": "800ms",
                    children: (0, l.jsxs)("div", {
                      className: "inner-box ",
                      children: [
                        (0, l.jsx)("i", { className: "icon flaticon-web-2" }),
                        (0, l.jsxs)("h5", {
                          className: "title",
                          children: [
                            "Unlimited ",
                            (0, l.jsx)("br", {}),
                            "Online Courses",
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp",
                    "data-wow-delay": "1200ms",
                    children: (0, l.jsxs)("div", {
                      className: "inner-box ",
                      children: [
                        (0, l.jsx)("i", { className: "icon flaticon-users" }),
                        (0, l.jsxs)("h5", {
                          className: "title",
                          children: [
                            "Experienced ",
                            (0, l.jsx)("br", {}),
                            "Members",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      e.Z = i;
    },
  },
]);
