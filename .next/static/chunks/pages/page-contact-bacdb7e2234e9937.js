(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93],
  {
    6663: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/page-contact",
        function () {
          return n(9303);
        },
      ]);
    },
    8851: function (e, s, n) {
      "use strict";
      var a = n(5893),
        t = n(1664),
        l = n.n(t);
      n(7294);
      let i = (e) =>
        (0, a.jsx)("section", {
          className: "page-title",
          style: { backgroundImage: "url(images/resource/topbg.jpg)" },
          children: (0, a.jsx)("div", {
            className: "auto-container",
            children: (0, a.jsxs)("div", {
              className: "title-outer",
              children: [
                (0, a.jsx)("h1", { className: "title", children: e.pageName }),
                (0, a.jsxs)("ul", {
                  className: "page-breadcrumb",
                  children: [
                    (0, a.jsx)("li", {
                      children: (0, a.jsx)(l(), {
                        href: "/",
                        children: "Home",
                      }),
                    }),
                    (0, a.jsx)("li", { children: e.pageName }),
                  ],
                }),
              ],
            }),
          }),
        });
      s.Z = i;
    },
    9303: function (e, s, n) {
      "use strict";
      n.r(s),
        n.d(s, {
          default: function () {
            return m;
          },
        });
      var a = n(5893),
        t = n(7294),
        l = n(1982),
        i = n(8851),
        r = n(6455),
        c = n.n(r);
      let o = () => {
        let [e, s] = (0, t.useState)({
            studentname: "",
            email: "",
            Phone: "",
            subject: "",
            query: "",
          }),
          n = (n) => {
            n.preventDefault(),
              e.studentname && e.email && e.Phone && e.query && e.subject
                ? (c()
                    .fire({
                      title: "Do you want to Send the Query?",
                      showCancelButton: !0,
                      confirmButtonText: "Send",
                    })
                    .then((s) => {
                      s.isConfirmed &&
                        (c().fire("Query Send..\uD83D\uDC4D", "", "success"),
                        fetch(
                          "https://academia-api-cu1m.onrender.com/api/studentenquiry",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          }
                        )
                          .then((e) => {
                            if (e.ok) return e.json();
                            throw Error("Server response was not ok");
                          })
                          .then((e) => {
                            console.log("Response:", e);
                          })
                          .catch((e) => {
                            console.error("Error sending query:", e),
                              c().fire(
                                "Oops! Something went wrong on our end. Please try again later.",
                                "",
                                "error"
                              );
                          }));
                    }),
                  s({
                    studentname: "",
                    email: "",
                    Phone: "",
                    subject: "",
                    query: "",
                  }))
                : c().fire("Please fill in all fields", "", "warning");
          },
          l = (n) => {
            n.persist(), s({ ...e, [n.target.name]: n.target.value });
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("section", {
              className: "contact-details",
              children: (0, a.jsx)("div", {
                className: "container ",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "col-xl-7 col-lg-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "sec-title",
                          children: [
                            (0, a.jsx)("span", {
                              className: "sub-title",
                              children: "Send us email",
                            }),
                            (0, a.jsx)("h2", {
                              children: "Feel free to write",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          id: "contact_form",
                          name: "contact_form",
                          className: "",
                          action: "#",
                          method: "post",
                          onSubmit: n,
                          children: [
                            (0, a.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "col-sm-6",
                                  children: (0, a.jsx)("div", {
                                    className: "mb-3",
                                    children: (0, a.jsx)("input", {
                                      onChange: l,
                                      value: e.studentname || "",
                                      name: "studentname",
                                      className: "form-control",
                                      type: "text",
                                      placeholder: "Enter Name",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "col-sm-6",
                                  children: (0, a.jsx)("div", {
                                    className: "mb-3",
                                    children: (0, a.jsx)("input", {
                                      onChange: l,
                                      value: e.email || "",
                                      name: "email",
                                      className: "form-control required email",
                                      type: "email",
                                      placeholder: "Enter Email",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "col-sm-6",
                                  children: (0, a.jsx)("div", {
                                    className: "mb-3",
                                    children: (0, a.jsx)("input", {
                                      onChange: l,
                                      value: e.subject || "",
                                      name: "subject",
                                      className: "form-control required",
                                      type: "text",
                                      placeholder: "Enter Subject",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "col-sm-6",
                                  children: (0, a.jsx)("div", {
                                    className: "mb-3",
                                    children: (0, a.jsx)("input", {
                                      onChange: l,
                                      value: e.Phone || "",
                                      name: "Phone",
                                      className: "form-control",
                                      type: "text",
                                      placeholder: "Enter Phone",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "mb-3",
                              children: (0, a.jsx)("textarea", {
                                onChange: l,
                                value: e.query || "",
                                name: "query",
                                className: "form-control required",
                                rows: "7",
                                placeholder: "Enter Message",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "mb-3",
                              children: (0, a.jsx)("button", {
                                type: "submit",
                                className: "theme-btn btn-style-one me-3",
                                "data-loading-text": "Please wait...",
                                children: (0, a.jsx)("span", {
                                  className: "btn-title",
                                  children: "Send message",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "col-xl-5 col-lg-6",
                      children: (0, a.jsx)("div", {
                        className: "contact-details__right mt-md-50",
                        children: (0, a.jsxs)("div", {
                          className: "sec-title",
                          children: [
                            (0, a.jsx)("span", {
                              className: "sub-title",
                              children: "Need any help?",
                            }),
                            (0, a.jsx)("h2", {
                              children: "Get in touch with us",
                            }),
                            (0, a.jsxs)("div", {
                              className: "text",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://media.licdn.com/dms/image/C5112AQE8ThPkmol2Jg/article-cover_image-shrink_600_2000/0/1584093171155?e=2147483647&v=beta&t=kAVZ0l9rFDV5Kjg6u7ZRkh22MuY_fWeG4cPNBjAn5kE",
                                  alt: "",
                                }),
                                "Our team is committed to assisting you if you have any questions. When you submit the form below, a representative from our company will get in touch with you.",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)("section", {
              children: (0, a.jsx)("div", {
                className: "container-fluid p-0",
                children: (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17715.274168164324!2d72.63262722396266!3d23.22676547314658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702116634095!5m2!1sen!2sin",
                    "data-tm-width": "100%",
                    height: "500",
                  }),
                }),
              }),
            }),
          ],
        });
      };
      function m() {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(l.Z, {
            HeaderStyle: "one",
            children: [
              (0, a.jsx)(i.Z, { pageName: "Contact" }),
              (0, a.jsx)(o, {}),
            ],
          }),
        });
      }
      n(1664);
    },
  },
  function (e) {
    e.O(0, [166, 996, 982, 774, 888, 179], function () {
      return e((e.s = 6663));
    }),
      (_N_E = e.O());
  },
]);
