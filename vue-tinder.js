!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self)["vue-tinder"] = e()
}(this, function () {
    "use strict";

    function i(t) {
        return {status: t ? 3 : 0, touchId: null, start: {}, move: {}, startPoint: 1, result: null}
    }

    var l = 0, s = 1, p = 2, a = 3, f = 4, t = {
        name: "TinderCard",
        props: {
            tinderMounted: {type: Boolean, default: !1},
            index: {type: Number, required: !0},
            ready: {type: Boolean, default: !1},
            state: {type: Object, required: !0},
            ratio: {type: Number, default: 0},
            rewind: {type: [Number, Boolean], default: !1},
            scaleStep: {type: Number, required: !0},
            offsetY: {type: Number, required: !0},
            offsetUnit: {type: String, required: !0}
        },
        data: function () {
            return {inited: !1, scopedRewind: !1, willDestory: !1}
        },
        computed: {
            curScale: function () {
                return this.scaleStep * this.index
            }, isCur: function () {
                return 0 === this.index
            }, style: function () {
                return this.inited ? this.state.status === s ? this.movingStyle : this.normalStyle : {}
            }, normalStyle: function () {
                return this.isCur ? {
                    opacity: 1,
                    transform: "translate3d(0,0,0) rotate(0) scale3d(1,1,1)",
                    transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), z-index 0s"
                } : {
                    opacity: this.ready ? 0 : 1,
                    transform: this.getTransform(),
                    transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) ".concat(this.scopedRewind ? 80 * this.scopedRewind : 0, "ms, z-index 0s")
                }
            }, movingStyle: function () {
                var t = {transition: "none"};
                if (this.isCur) {
                    var e = this.state, i = e.start, n = e.move, s = e.startPoint, a = n.x - i.x || 0,
                        r = n.y - i.y || 0, o = 10 * this.ratio * s;
                    t.transform = "translate3d(".concat(a, "px,").concat(r, "px,0) rotate(").concat(o, "deg)")
                } else {
                    var d = Math.abs(this.ratio);
                    1 < d && (d = 1), this.ready && (t.opacity = 1 * d), t.transform = this.getTransform(d)
                }
                return t
            }
        },
        watch: {
            index: function (t, e) {
                t < e && (this.scopedRewind = !1)
            }
        },
        created: function () {
            this.scopedRewind = this.rewind, this.tinderMounted || (this.inited = !0)
        },
        mounted: function () {
            var t = this;
            requestAnimationFrame(function () {
                t.inited = !0
            })
        },
        methods: {
            transitionEnd: function (t) {
                if (t.target === t.currentTarget && "transform" === t.propertyName && (this.scopedRewind = !1, this.isCur)) {
                    var e = this.state.status;
                    e !== a && e !== f || this.$emit("reverted")
                }
            }, getTransform: function (t) {
                var e = this.index, i = 0, n = 1 - this.scaleStep * e;
                if (t && (n += t * this.scaleStep), this.offsetY) {
                    var s = this.offsetY < 0, a = Math.abs(this.offsetY), r = e * a, o = (1 - n) / 2 * 100;
                    t && (r -= t * a), s && (r *= -1, o *= -1), i = "calc(".concat(o, "% + ").concat(r).concat(this.offsetUnit, ")")
                }
                return "translate3d(0,".concat(i, ",0) scale3d(").concat(n, ",").concat(n, ",1)")
            }
        }
    };
    var d, e = function (t, e, i, n, s, a, r, o, d, u) {
        "boolean" != typeof r && (d = o, o = r, r = !1);
        var c, h = "function" == typeof i ? i.options : i;
        if (t && t.render && (h.render = t.render, h.staticRenderFns = t.staticRenderFns, h._compiled = !0, s && (h.functional = !0)), n && (h._scopeId = n), a ? (c = function (t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, d(t)), t && t._registeredComponents && t._registeredComponents.add(a)
        }, h._ssrRegister = c) : e && (c = r ? function () {
            e.call(this, u(this.$root.$options.shadowRoot))
        } : function (t) {
            e.call(this, o(t))
        }), c) if (h.functional) {
            var l = h.render;
            h.render = function (t, e) {
                return c.call(e), l(t, e)
            }
        } else {
            var p = h.beforeCreate;
            h.beforeCreate = p ? [].concat(p, c) : [c]
        }
        return i
    }, u = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    var c = {};

    function n(t) {
        return function (t, e) {
            return function (t, e) {
                var i = u ? e.media || "default" : t, n = c[i] || (c[i] = {ids: new Set, styles: []});
                if (!n.ids.has(t)) {
                    n.ids.add(t);
                    var s = e.source;
                    if (e.map && (s += "\n/*# sourceURL=" + e.map.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) + " */"), n.element || (n.element = document.createElement("style"), n.element.type = "text/css", e.media && n.element.setAttribute("media", e.media), void 0 === d && (d = document.head || document.getElementsByTagName("head")[0]), d.appendChild(n.element)), "styleSheet" in n.element) n.styles.push(s), n.element.styleSheet.cssText = n.styles.filter(Boolean).join("\n"); else {
                        var a = n.ids.size - 1, r = document.createTextNode(s), o = n.element.childNodes;
                        o[a] && n.element.removeChild(o[a]), o.length ? n.element.insertBefore(r, o[a]) : n.element.appendChild(r)
                    }
                }
            }(t, e)
        }
    }

    function r() {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {
            staticClass: "tinder-card",
            style: [{zIndex: 100 - t.index}, t.style],
            attrs: {"data-index": t.index},
            on: {transitionend: t.transitionEnd}
        }, [t._t("default"), t._v(" "), t._t("nope"), t._v(" "), t._t("like"), t._v(" "), t._t("super"), t._v(" "), i("transition", {attrs: {name: "tinder-rewind"}}, [!1 !== t.scopedRewind ? t._t("rewind") : t._e()], 2)], 2)
    }

    function y(t, e) {
        for (var i = [], n = 0; n < t.length && !(-1 < e.indexOf(t[n])); n++) i.push(t[n]);
        return i
    }

    var o = t, h = (r._withStripped = !0, e({render: r, staticRenderFns: []}, function (t) {
        t && t("data-v-1ebe6b9f_0", {
            source: "\n.tinder-card[data-v-1ebe6b9f] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fefefe;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);\n}\n.tinder-rewind-leave-active[data-v-1ebe6b9f] {\n  transition: all 0.5s ease;\n}\n.tinder-rewind-leave-to[data-v-1ebe6b9f] {\n  opacity: 0;\n}\n",
            map: void 0,
            media: void 0
        })
    }, o, "data-v-1ebe6b9f", !(r._withStripped = !0), void 0, n, void 0));

    function m(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function v() {
        var i = this, t = i.$createElement, n = i._self._c || t;
        return n("transition-group", {
            staticClass: "vue-tinder",
            attrs: {tag: "div", css: !1},
            on: {beforeEnter: i.beforeEnter, leave: i.leave},
            nativeOn: {
                touchstart: function (t) {
                    return i.start(t)
                }, touchmove: function (t) {
                    return i.move(t)
                }, touchend: function (t) {
                    return i.end(t)
                }, touchcancel: function (t) {
                    return i.end(t)
                }, mousedown: function (t) {
                    return i.start(t)
                }, mousemove: function (t) {
                    return i.move(t)
                }, mouseup: function (t) {
                    return i.end(t)
                }
            }
        }, [i._l(i.list, function (t, e) {
            return [e < i.max + 1 ? n("TinderCard", {
                key: t.$vtKey || t[i.keyName],
                attrs: {
                    ready: e === i.max,
                    "data-id": t.$vtKey || t[i.keyName],
                    index: e,
                    state: i.state,
                    ratio: i.ratio,
                    rewind: -1 < i.rewindKeys.indexOf(t.$vtKey || t[i.keyName]) && e,
                    "tinder-mounted": i.tinderMounted,
                    "scale-step": i.scaleStep,
                    "offset-y": i.offsetY,
                    "offset-unit": i.offsetUnit
                },
                on: {reverted: i.resetStatus}
            }, [i._t("default", null, {
                data: t,
                index: e,
                status: i.status
            }), i._v(" "), 0 === e && 2 !== i.status ? [n("span", {
                staticClass: "pointer-wrap nope-pointer-wrap",
                style: {opacity: i.nopeOpacity},
                attrs: {slot: "nope"},
                slot: "nope"
            }, [i._t("nope", null, {opacity: i.nopeOpacity})], 2), i._v(" "), n("span", {
                staticClass: "pointer-wrap like-pointer-wrap",
                style: {opacity: i.likeOpacity},
                attrs: {slot: "like"},
                slot: "like"
            }, [i._t("like", null, {opacity: i.likeOpacity})], 2), i._v(" "), i.allowSuper ? n("span", {
                staticClass: "pointer-wrap super-pointer-wrap",
                style: {opacity: i.superOpacity},
                attrs: {slot: "super"},
                slot: "super"
            }, [i._t("super", null, {opacity: i.superOpacity})], 2) : i._e()] : i._e(), i._v(" "), 4 === i.state.status ? n("span", {
                staticClass: "pointer-wrap rewind-pointer-wrap",
                attrs: {slot: "rewind"},
                slot: "rewind"
            }, [i._t("rewind")], 2) : i._e()], 2) : i._e()]
        })], 2)
    }

    var w, x = {
        name: "Tinder",
        mixins: [{
            data: function () {
                return {leavingKeys: [], onceRewindCount: 0}
            }, methods: {
                diff: function (t, e) {
                    var i = this.keyName, n = y(t, e), s = 0;
                    if (n.length) for (var a = 0; a < n.length; a++) {
                        var r = this.queue[a];
                        if (!r[i] || n[a] !== r[i]) break;
                        s++;
                        var o = r[i], d = o + Math.random();
                        if (-1 < this.leavingKeys.indexOf(r.$vtKey) || -1 < this.leavingKeys.indexOf(o) || -1 < this.rewindKeys.indexOf(r.$vtKey) || -1 < this.rewindKeys.indexOf(o)) {
                            r.$vtKey = d;
                            var u = Math.max(this.rewindKeys.indexOf(r.$vtKey), this.rewindKeys.indexOf(o));
                            -1 < u && (this.rewindKeys[u] = d, this.state.status = f)
                        }
                    }
                    this.onceRewindCount = s;
                    var c = y(e, t);
                    if (c.length) {
                        this.leavingKeys.push(this.list[0].$vtKey || this.list[0][i]);
                        for (var h = this.max + 1; h < this.max + 1 + c.length; h++) {
                            var l = this.list[h];
                            l && (-1 < this.leavingKeys.indexOf(l[i]) || -1 < this.hidingKeys.indexOf(l[i])) && (l.$vtKey = l[i] + Math.random())
                        }
                    }
                    this.list = this.queue.slice(0)
                }
            }
        }, {
            methods: {
                start: function (t) {
                    if (null === this.state.touchId && this.status !== p && this.status !== a && this.status !== f) {
                        var e, i;
                        i = "touchstart" === t.type ? (e = t.changedTouches[0].pageX, t.changedTouches[0].pageY) : (e = t.clientX, t.clientY);
                        var n = this.size.top + this.size.height / 2 < i ? -1 : 1;
                        this.state = {
                            status: s,
                            touchId: "touchstart" === t.type ? t.changedTouches[0].identifier : "mouse",
                            start: {x: e, y: i},
                            move: Object.create(null),
                            startPoint: n,
                            result: null
                        }
                    }
                }, move: function (t) {
                    t.preventDefault();
                    var e, i, n = this.state;
                    null === n.touchId || this.status === p || this.status === a || this.status === f || "touchmove" === t.type && n.touchId !== t.changedTouches[0].identifier || (i = "touchmove" === t.type ? (e = t.changedTouches[0].pageX, t.changedTouches[0].pageY) : (e = t.clientX, t.clientY), n.move = {
                        x: e,
                        y: i
                    })
                }, end: function (t) {
                    if (("touchstart" !== t.type || this.state.touchId === t.changedTouches[0].identifier) && this.status !== p && this.status !== a && this.status !== f) if (1 <= Math.abs(this.pointerOpacity) || 1 <= this.superOpacity) {
                        var e = 1 <= this.superOpacity ? "super" : 0 < this.pointerOpacity ? "like" : "nope";
                        this.shiftCard(e)
                    } else this.status === s && (this.state = i("reverted"))
                }
            }
        }, {
            data: function () {
                return {leavedCount: 0, hideIndex: 50, lastHideIndex: 50, hidingKeys: []}
            }, methods: {
                beforeEnter: function (t) {
                    var e = t.dataset.index - 0 + 1;
                    if (t.style.opacity = 0, t.style.transform = this.getTransform(e), -1 < this.rewindKeys.indexOf(t.dataset.id)) {
                        var i = -1,
                            n = (i += this.size.width * (i < 0 ? -.5 : .5)) / (.5 * this.size.width) / 1.6 * 15 * 1;
                        t.style.transform = "translate3d(".concat(i, "px, 0, 0) rotate(").concat(n, "deg)")
                    }
                    t.style.transition = "all 0s"
                }, leave: function (e, i) {
                    var n = this, t = this.state, s = t.start, a = t.move, r = t.startPoint, o = a.x - s.x || 0,
                        d = a.y - s.y || 0;
                    "super" === t.result ? d -= this.size.width : d *= (o += this.size.width * (o < 0 ? -.5 : .5)) / (a.x - s.x);
                    var u = o / (.5 * this.size.width) / 1.6 * 15 * r,
                        c = null === t.touchId || "super" === t.result ? 800 : 300;
                    if (e.style.opacity = 0, -1 < this.leavingKeys.indexOf(e.dataset.id)) e.className += " ".concat(t.result), e.style.transform = "translate3d(".concat(o, "px,").concat(d, "px,0) rotate(").concat(u, "deg)"), e.style.zIndex = 1e6 - this.leavedCount++; else {
                        this.hidingKeys.push(e.dataset.id), c = 500;
                        var h = Math.min(this.max, this.onceRewindCount) + (e.dataset.index - 0);
                        e.style.transform = this.getTransform(h), e.style.zIndex = this.getHideIndex(e.dataset.index - 0)
                    }
                    e.style.transition = "all ".concat(c, "ms ").concat(500 === c ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "ease", ",z-index 0s"), e.addEventListener("transitionend", function (t) {
                        "transform" === t.propertyName && (n.lastHideIndex === e.style.zIndex - 0 && (n.lastHideIndex = 50, n.hideIndex = 50), !n.sync || n.status !== l && n.status !== p || n.resetStatus(), i())
                    }), this.sync || e.dataset.index - 0 != 0 || this.status === f || this.resetStatus()
                }, getHideIndex: function (t) {
                    var e, i = this.max;
                    return t === i ? this.lastHideIndex > this.hideIndex ? (e = this.hideIndex, this.hideIndex += 1 + i) : e = this.hideIndex++ : e = this.hideIndex + i - t, this.lastHideIndex = e
                }, getTransform: function (t) {
                    var e = 1 - this.scaleStep * t, i = 0;
                    if (this.offsetY) {
                        var n = this.offsetY < 0, s = t * Math.abs(this.offsetY), a = (1 - e) / 2 * 100;
                        n && (s *= -1, a *= -1), i = "calc(".concat(a, "% + ").concat(s).concat(this.offsetUnit, ")")
                    }
                    return "translate3d(0,".concat(i, ",0) scale3d(").concat(e, ",").concat(e, ",1)")
                }
            }
        }, {
            data: function () {
                return {rewindKeys: []}
            }, methods: {
                decide: function (t) {
                    this.state.touchId || this.status !== l || (this.state.start = {
                        x: 0,
                        y: 0
                    }, this.state.move = {
                        x: "super" === t ? 0 : "like" === t ? 1 : -1,
                        y: "super" === t ? -1 : 0
                    }, this.state.startPoint = 1, this.shiftCard(t))
                }, rewind: function (t) {
                    var e, i = this.keyName, n = !0, s = !1, a = void 0;
                    try {
                        for (var r, o = t[Symbol.iterator](); !(n = (r = o.next()).done); n = !0) {
                            var d = r.value;
                            this.rewindKeys.push(d[i] + "")
                        }
                    } catch (t) {
                        s = !0, a = t
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    (e = this.queue).unshift.apply(e, m(t))
                }, shiftCard: function (t) {
                    this.state.status = p, this.state.result = t;
                    var e = this.queue.shift();
                    this.$emit("update:queue", this.queue), this.submitDecide(t, e)
                }, submitDecide: function (t, e) {
                    this.$emit("submit", {type: t, key: e[this.keyName], item: e})
                }
            }
        }],
        components: {TinderCard: h},
        props: {
            allowSuper: {type: Boolean, default: !0},
            queue: {
                type: Array, default: function () {
                    return []
                }
            },
            keyName: {type: String, default: "key"},
            pointerThreshold: {type: Number, default: .5},
            superThreshold: {type: Number, default: .5},
            sync: {type: Boolean, default: !1},
            max: {type: Number, default: 3},
            scaleStep: {type: Number, default: .05},
            offsetY: {type: Number, default: 0},
            offsetUnit: {type: String, default: "px"}
        },
        data: function () {
            return {size: {top: 0, width: 0, height: 0}, state: i(), list: [], tinderMounted: !1}
        },
        computed: {
            status: function () {
                return this.state.status
            }, ratio: function () {
                if (this.size.width) {
                    var t = this.state, e = t.start, i = (t.move.x - e.x || 0) / (.5 * this.size.width);
                    return i
                }
                return 0
            }, pointerOpacity: function () {
                return this.ratio / this.pointerThreshold
            }, superOpacity: function () {
                if (!this.allowSuper) return 0;
                var t = (this.state.move.y - this.state.start.y) / (-this.superThreshold * this.size.height);
                return Math.abs(this.pointerOpacity) < t ? t : 0
            }, likeOpacity: function () {
                return this.superOpacity ? 0 : this.pointerOpacity
            }, nopeOpacity: function () {
                return -this.likeOpacity
            }
        },
        watch: {
            queue: function (t) {
                var e = this.keyName, i = t.map(function (t) {
                    return t[e]
                }), n = this.list.map(function (t) {
                    return t[e]
                });
                this.diff(i, n)
            }
        },
        mounted: function () {
            this.$el.offsetWidth && this.$el.offsetHeight ? (this.size = {
                top: this.$el.offsetTop,
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight
            }, window.onresize = this.getSize, this.tinderMounted = !0) : console.error("请设置vue-tinder的宽高")
        },
        created: function () {
            this.list = this.queue.slice(0)
        },
        destroyed: function () {
            window.removeEventListener("onresize", this.getSize)
        },
        methods: {
            getSize: function () {
                var t = this;
                clearInterval(w), w = setTimeout(function () {
                    t.size = {top: t.$el.offsetTop, width: t.$el.offsetWidth, height: t.$el.offsetHeight}
                }, 300)
            }, resetStatus: function () {
                this.state = i()
            }
        }
    }, g = (v._withStripped = !0, e({render: v, staticRenderFns: []}, function (t) {
        t && t("data-v-47871737_0", {
            source: "\n.vue-tinder[data-v-47871737] {\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* style正在被数据绑定，只能使用important来覆盖 */\n.v-move[data-v-47871737] {\n  transition: none !important;\n}\n.pointer-wrap[data-v-47871737] {\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n}\n\n/* 通过调用函数让卡片消失时需要直接显示对应状态，不需要过渡动画 */\n.tinder-card.nope .nope-pointer-wrap[data-v-47871737],\n.tinder-card.like .like-pointer-wrap[data-v-47871737],\n.tinder-card.super .super-pointer-wrap[data-v-47871737] {\n  opacity: 1 !important;\n}\n.tinder-card.nope .rewind-pointer-wrap[data-v-47871737],\n.tinder-card.like .rewind-pointer-wrap[data-v-47871737],\n.tinder-card.super .rewind-pointer-wrap[data-v-47871737] {\n  display: none;\n}\n",
            map: void 0,
            media: void 0
        })
    }, x, "data-v-47871737", !(v._withStripped = !0), void 0, n, void 0));
    return g.install = function (t) {
        t.component("vue-tinder", g)
    }, "undefined" != typeof window && window.Vue && window.Vue.component("tinder", g), g
});
