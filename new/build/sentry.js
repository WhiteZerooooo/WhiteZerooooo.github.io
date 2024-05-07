var t, e, n = Object.getOwnPropertyNames,
	i = (t = {
		"sentry.js"(t, e) {
			const n = Object.prototype.toString;

			function i(t) {
				switch (n.call(t)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
						return !0;
					default:
						return h(t, Error)
				}
			}

			function s(t, e) {
				return n.call(t) === `[object ${e}]`
			}

			function r(t) {
				return s(t, "ErrorEvent")
			}

			function o(t) {
				return s(t, "DOMError")
			}

			function a(t) {
				return s(t, "String")
			}

			function c(t) {
				return null === t || "object" != typeof t && "function" != typeof t
			}

			function _(t) {
				return s(t, "Object")
			}

			function u(t) {
				return "undefined" != typeof Event && h(t, Event)
			}

			function d(t) {
				return s(t, "RegExp")
			}

			function l(t) {
				return Boolean(t && t.then && "function" == typeof t.then)
			}

			function p(t) {
				return "number" == typeof t && t != t
			}

			function h(t, e) {
				try {
					return t instanceof e
				} catch (n) {
					return !1
				}
			}

			function f(t) {
				return t && t.Math == Math ? t : void 0
			}
			const m = "object" == typeof globalThis && f(globalThis) || "object" == typeof window && f(window) || "object" == typeof self && f(self) || "object" == typeof global && f(global) || function() {
				return this
			}() || {};

			function g() {
				return m
			}

			function y(t, e, n) {
				const i = n || m,
					s = i.__SENTRY__ = i.__SENTRY__ || {};
				return s[t] || (s[t] = e())
			}
			const E = g();

			function S(t, e = {}) {
				try {
					let n = t;
					const i = 5,
						s = [];
					let r = 0,
						o = 0;
					const a = " > ",
						c = a.length;
					let _;
					const u = Array.isArray(e) ? e : e.keyAttrs,
						d = !Array.isArray(e) && e.maxStringLength || 80;
					for (; n && r++ < i && (_ = v(n, u), !("html" === _ || r > 1 && o + s.length * c + _.length >= d));) s.push(_), o += _.length, n = n.parentNode;
					return s.reverse().join(a)
				} catch (n) {
					return "<unknown>"
				}
			}

			function v(t, e) {
				const n = t,
					i = [];
				let s, r, o, c, _;
				if (!n || !n.tagName) return "";
				i.push(n.tagName.toLowerCase());
				const u = e && e.length ? e.filter((t => n.getAttribute(t))).map((t => [t, n.getAttribute(t)])) : null;
				if (u && u.length) u.forEach((t => {
					i.push(`[${t[0]}="${t[1]}"]`)
				}));
				else if (n.id && i.push(`#${n.id}`), s = n.className, s && a(s))
					for (r = s.split(/\s+/), _ = 0; _ < r.length; _++) i.push(`.${r[_]}`);
				const d = ["aria-label", "type", "name", "title", "alt"];
				for (_ = 0; _ < d.length; _++) o = d[_], c = n.getAttribute(o), c && i.push(`[${o}="${c}"]`);
				return i.join("")
			}
			class T extends Error {
				constructor(t, e = "warn") {
					super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
				}
			}
			const b = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

			function R(t, e = !1) {
				const {
					host: n,
					path: i,
					pass: s,
					port: r,
					projectId: o,
					protocol: a,
					publicKey: c
				} = t;
				return `${a}://${c}${e&&s?`:${s}`:""}@${n}${r?`:${r}`:""}/${i?`${i}/`:i}${o}`
			}

			function D(t) {
				return {
					protocol: t.protocol,
					publicKey: t.publicKey || "",
					pass: t.pass || "",
					host: t.host,
					port: t.port || "",
					path: t.path || "",
					projectId: t.projectId
				}
			}

			function N(t) {
				const e = "string" == typeof t ? function(t) {
					const e = b.exec(t);
					if (!e) throw new T(`Invalid Sentry Dsn: ${t}`);
					const [n, i, s = "", r, o = "", a] = e.slice(1);
					let c = "",
						_ = a;
					const u = _.split("/");
					if (u.length > 1 && (c = u.slice(0, -1).join("/"), _ = u.pop()), _) {
						const t = _.match(/^\d+/);
						t && (_ = t[0])
					}
					return D({
						host: r,
						pass: s,
						path: c,
						projectId: _,
						port: o,
						protocol: n,
						publicKey: i
					})
				}(t) : D(t);
				return function(t) {
					if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return;
					const {
						port: e,
						projectId: n,
						protocol: i
					} = t;
					if (["protocol", "publicKey", "host", "projectId"].forEach((e => {
							if (!t[e]) throw new T(`Invalid Sentry Dsn: ${e} missing`)
						})), !n.match(/^\d+$/)) throw new T(`Invalid Sentry Dsn: Invalid projectId ${n}`);
					if (! function(t) {
							return "http" === t || "https" === t
						}(i)) throw new T(`Invalid Sentry Dsn: Invalid protocol ${i}`);
					if (e && isNaN(parseInt(e, 10))) throw new T(`Invalid Sentry Dsn: Invalid port ${e}`)
				}(e), e
			}
			const x = ["debug", "info", "warn", "error", "log", "assert", "trace"];

			function w(t) {
				if (!("console" in m)) return t();
				const e = m.console,
					n = {};
				x.forEach((t => {
					const i = e[t] && e[t].__sentry_original__;
					t in e && i && (n[t] = e[t], e[t] = i)
				}));
				try {
					return t()
				} finally {
					Object.keys(n).forEach((t => {
						e[t] = n[t]
					}))
				}
			}

			function U() {
				let t = !1;
				const e = {
					enable: () => {
						t = !0
					},
					disable: () => {
						t = !1
					}
				};
				return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? x.forEach((n => {
					e[n] = (...e) => {
						t && w((() => {
							m.console[n](`Sentry Logger [${n}]:`, ...e)
						}))
					}
				})) : x.forEach((t => {
					e[t] = () => {}
				})), e
			}
			let B;

			function k(t, e = 0) {
				return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
			}

			function Y(t, e) {
				if (!Array.isArray(t)) return "";
				const n = [];
				for (let s = 0; s < t.length; s++) {
					const e = t[s];
					try {
						n.push(String(e))
					} catch (i) {
						n.push("[value cannot be serialized]")
					}
				}
				return n.join(e)
			}

			function G(t, e = [], n = !1) {
				return e.some((e => function(t, e, n = !1) {
					return !!a(t) && (d(e) ? e.test(t) : !!a(e) && (n ? t === e : t.includes(e)))
				}(t, e, n)))
			}

			function I(t, e, n) {
				if (!(e in t)) return;
				const i = t[e],
					s = n(i);
				if ("function" == typeof s) try {
					C(s, i)
				} catch (r) {}
				t[e] = s
			}

			function O(t, e, n) {
				Object.defineProperty(t, e, {
					value: n,
					writable: !0,
					configurable: !0
				})
			}

			function C(t, e) {
				const n = e.prototype || {};
				t.prototype = e.prototype = n, O(t, "__sentry_original__", e)
			}

			function $(t) {
				return t.__sentry_original__
			}

			function A(t) {
				if (i(t)) return {
					message: t.message,
					name: t.name,
					stack: t.stack,
					...P(t)
				};
				if (u(t)) {
					const e = {
						type: t.type,
						target: j(t.target),
						currentTarget: j(t.currentTarget),
						...P(t)
					};
					return "undefined" != typeof CustomEvent && h(t, CustomEvent) && (e.detail = t.detail), e
				}
				return t
			}

			function j(t) {
				try {
					return "undefined" != typeof Element && h(t, Element) ? S(t) : Object.prototype.toString.call(t)
				} catch (e) {
					return "<unknown>"
				}
			}

			function P(t) {
				if ("object" == typeof t && null !== t) {
					const e = {};
					for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e
				}
				return {}
			}

			function L(t, e = 40) {
				const n = Object.keys(A(t));
				if (n.sort(), !n.length) return "[object has no keys]";
				if (n[0].length >= e) return k(n[0], e);
				for (let i = n.length; i > 0; i--) {
					const t = n.slice(0, i).join(", ");
					if (!(t.length > e)) return i === n.length ? t : k(t, e)
				}
				return ""
			}

			function M(t) {
				return q(t, new Map)
			}

			function q(t, e) {
				if (_(t)) {
					const n = e.get(t);
					if (void 0 !== n) return n;
					const i = {};
					e.set(t, i);
					for (const s of Object.keys(t)) void 0 !== t[s] && (i[s] = q(t[s], e));
					return i
				}
				if (Array.isArray(t)) {
					const n = e.get(t);
					if (void 0 !== n) return n;
					const i = [];
					return e.set(t, i), t.forEach((t => {
						i.push(q(t, e))
					})), i
				}
				return t
			}
			B = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? y("logger", U) : U();
			const H = /\(error: (.*)\)/;

			function F(...t) {
				const e = t.sort(((t, e) => t[0] - e[0])).map((t => t[1]));
				return (t, n = 0) => {
					const i = [],
						s = t.split("\n");
					for (let r = n; r < s.length; r++) {
						const t = s[r];
						if (t.length > 1024) continue;
						const n = H.test(t) ? t.replace(H, "$1") : t;
						for (const s of e) {
							const t = s(n);
							if (t) {
								i.push(t);
								break
							}
						}
						if (i.length >= 50) break
					}
					return function(t) {
						if (!t.length) return [];
						const e = t.slice(0, 50),
							n = e[e.length - 1].function;
						n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
						const i = e[e.length - 1].function;
						return i && /captureMessage|captureException/.test(i) && e.pop(), e.map((t => ({
							...t,
							filename: t.filename || e[e.length - 1].filename,
							function: t.function || "?"
						})))
					}(i)
				}
			}
			const z = "<anonymous>";

			function W(t) {
				try {
					return t && "function" == typeof t && t.name || z
				} catch (e) {
					return z
				}
			}
			const J = g();

			function X() {
				if (!("fetch" in J)) return !1;
				try {
					return new Headers, new Request("http://www.example.com"), new Response, !0
				} catch (t) {
					return !1
				}
			}

			function K(t) {
				return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
			}
			const V = g(),
				Q = g(),
				Z = {},
				tt = {};

			function et(t, e) {
				Z[t] = Z[t] || [], Z[t].push(e),
					function(t) {
						if (!tt[t]) switch (tt[t] = !0, t) {
							case "console":
								"console" in Q && x.forEach((function(t) {
									t in Q.console && I(Q.console, t, (function(e) {
										return function(...n) {
											nt("console", {
												args: n,
												level: t
											}), e && e.apply(Q.console, n)
										}
									}))
								}));
								break;
							case "dom":
								! function() {
									if (!("document" in Q)) return;
									const t = nt.bind(null, "dom"),
										e = ct(t, !0);
									Q.document.addEventListener("click", e, !1), Q.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((e => {
										const n = Q[e] && Q[e].prototype;
										n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (I(n, "addEventListener", (function(e) {
											return function(n, i, s) {
												if ("click" === n || "keypress" == n) try {
													const i = this,
														r = i.__sentry_instrumentation_handlers__ = i.__sentry_instrumentation_handlers__ || {},
														o = r[n] = r[n] || {
															refCount: 0
														};
													if (!o.handler) {
														const i = ct(t);
														o.handler = i, e.call(this, n, i, s)
													}
													o.refCount++
												} catch (r) {}
												return e.call(this, n, i, s)
											}
										})), I(n, "removeEventListener", (function(t) {
											return function(e, n, i) {
												if ("click" === e || "keypress" == e) try {
													const n = this,
														s = n.__sentry_instrumentation_handlers__ || {},
														r = s[e];
													r && (r.refCount--, r.refCount <= 0 && (t.call(this, e, r.handler, i), r.handler = void 0, delete s[e]), 0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
												} catch (s) {}
												return t.call(this, e, n, i)
											}
										})))
									}))
								}();
								break;
							case "xhr":
								! function() {
									if (!("XMLHttpRequest" in Q)) return;
									const t = XMLHttpRequest.prototype;
									I(t, "open", (function(t) {
										return function(...e) {
											const n = e[1],
												i = this.__sentry_xhr__ = {
													method: a(e[0]) ? e[0].toUpperCase() : e[0],
													url: e[1]
												};
											a(n) && "POST" === i.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
											const s = () => {
												const t = this.__sentry_xhr__;
												if (t && 4 === this.readyState) {
													try {
														t.status_code = this.status
													} catch (n) {}
													nt("xhr", {
														args: e,
														endTimestamp: Date.now(),
														startTimestamp: Date.now(),
														xhr: this
													})
												}
											};
											return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? I(this, "onreadystatechange", (function(t) {
												return function(...e) {
													return s(), t.apply(this, e)
												}
											})) : this.addEventListener("readystatechange", s), t.apply(this, e)
										}
									})), I(t, "send", (function(t) {
										return function(...e) {
											return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]), nt("xhr", {
												args: e,
												startTimestamp: Date.now(),
												xhr: this
											}), t.apply(this, e)
										}
									}))
								}();
								break;
							case "fetch":
								(function() {
									if (!X()) return !1;
									if (K(J.fetch)) return !0;
									let t = !1;
									const e = J.document;
									if (e && "function" == typeof e.createElement) try {
										const n = e.createElement("iframe");
										n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = K(n.contentWindow.fetch)), e.head.removeChild(n)
									} catch (n) {
										("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
									}
									return t
								})() && I(Q, "fetch", (function(t) {
									return function(...e) {
										const n = {
											args: e,
											fetchData: {
												method: it(e),
												url: st(e)
											},
											startTimestamp: Date.now()
										};
										return nt("fetch", {
											...n
										}), t.apply(Q, e).then((t => (nt("fetch", {
											...n,
											endTimestamp: Date.now(),
											response: t
										}), t)), (t => {
											throw nt("fetch", {
												...n,
												endTimestamp: Date.now(),
												error: t
											}), t
										}))
									}
								}));
								break;
							case "history":
								! function() {
									if (! function() {
											const t = V.chrome,
												e = t && t.app && t.app.runtime,
												n = "history" in V && !!V.history.pushState && !!V.history.replaceState;
											return !e && n
										}()) return;
									const t = Q.onpopstate;

									function e(t) {
										return function(...e) {
											const n = e.length > 2 ? e[2] : void 0;
											if (n) {
												const t = rt,
													e = String(n);
												rt = e, nt("history", {
													from: t,
													to: e
												})
											}
											return t.apply(this, e)
										}
									}
									Q.onpopstate = function(...e) {
										const n = Q.location.href,
											i = rt;
										if (rt = n, nt("history", {
												from: i,
												to: n
											}), t) try {
											return t.apply(this, e)
										} catch (s) {}
									}, I(Q.history, "pushState", e), I(Q.history, "replaceState", e)
								}();
								break;
							case "error":
								_t = Q.onerror, Q.onerror = function(t, e, n, i, s) {
									return nt("error", {
										column: i,
										error: s,
										line: n,
										msg: t,
										url: e
									}), !!_t && _t.apply(this, arguments)
								};
								break;
							case "unhandledrejection":
								ut = Q.onunhandledrejection, Q.onunhandledrejection = function(t) {
									return nt("unhandledrejection", t), !ut || ut.apply(this, arguments)
								};
								break;
							default:
								("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("unknown instrumentation type:", t)
						}
					}(t)
			}

			function nt(t, e) {
				if (t && Z[t])
					for (const i of Z[t] || []) try {
						i(e)
					} catch (n) {
						("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${W(i)}\nError:`, n)
					}
			}

			function it(t = []) {
				return "Request" in Q && h(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
			}

			function st(t = []) {
				return "string" == typeof t[0] ? t[0] : "Request" in Q && h(t[0], Request) ? t[0].url : String(t[0])
			}
			let rt, ot, at;

			function ct(t, e = !1) {
				return n => {
					if (!n || at === n) return;
					if (function(t) {
							if ("keypress" !== t.type) return !1;
							try {
								const e = t.target;
								if (!e || !e.tagName) return !0;
								if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
							} catch (e) {}
							return !0
						}(n)) return;
					const i = "keypress" === n.type ? "input" : n.type;
					(void 0 === ot || function(t, e) {
						if (!t) return !0;
						if (t.type !== e.type) return !0;
						try {
							if (t.target !== e.target) return !0
						} catch (n) {}
						return !1
					}(at, n)) && (t({
						event: n,
						name: i,
						global: e
					}), at = n), clearTimeout(ot), ot = Q.setTimeout((() => {
						ot = void 0
					}), 1e3)
				}
			}
			let _t = null,
				ut = null;

			function dt() {
				const t = m,
					e = t.crypto || t.msCrypto;
				if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
				const n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
				return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t => (t ^ (15 & n()) >> t / 4).toString(16)))
			}

			function lt(t) {
				return t.exception && t.exception.values ? t.exception.values[0] : void 0
			}

			function pt(t) {
				const {
					message: e,
					event_id: n
				} = t;
				if (e) return e;
				const i = lt(t);
				return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || n || "<unknown>" : n || "<unknown>"
			}

			function ht(t, e, n) {
				const i = t.exception = t.exception || {},
					s = i.values = i.values || [],
					r = s[0] = s[0] || {};
				r.value || (r.value = e || ""), r.type || (r.type = n || "Error")
			}

			function ft(t, e) {
				const n = lt(t);
				if (!n) return;
				const i = n.mechanism;
				if (n.mechanism = {
						type: "generic",
						handled: !0,
						...i,
						...e
					}, e && "data" in e) {
					const t = {
						...i && i.data,
						...e.data
					};
					n.mechanism.data = t
				}
			}

			function mt(t) {
				if (t && t.__sentry_captured__) return !0;
				try {
					O(t, "__sentry_captured__", !0)
				} catch (e) {}
				return !1
			}

			function gt(t) {
				return Array.isArray(t) ? t : [t]
			}

			function yt() {
				return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
			}

			function Et(t, e) {
				return t.require(e)
			}

			function St(t) {
				let n;
				try {
					n = Et(e, t)
				} catch (i) {}
				try {
					const {
						cwd: i
					} = Et(e, "process");
					n = Et(e, `${i()}/node_modules/${t}`)
				} catch (i) {}
				return n
			}

			function vt(t, e = 1 / 0, n = 1 / 0) {
				try {
					return bt("", t, e, n)
				} catch (i) {
					return {
						ERROR: `**non-serializable** (${i})`
					}
				}
			}

			function Tt(t, e = 3, n = 102400) {
				const i = vt(t, e);
				return s = i,
					function(t) {
						return ~-encodeURI(t).split(/%..|./).length
					}(JSON.stringify(s)) > n ? Tt(t, e - 1, n) : i;
				var s
			}

			function bt(t, e, n = 1 / 0, i = 1 / 0, s = function() {
				const t = "function" == typeof WeakSet,
					e = t ? new WeakSet : [];
				return [function(n) {
					if (t) return !!e.has(n) || (e.add(n), !1);
					for (let t = 0; t < e.length; t++)
						if (e[t] === n) return !0;
					return e.push(n), !1
				}, function(n) {
					if (t) e.delete(n);
					else
						for (let t = 0; t < e.length; t++)
							if (e[t] === n) {
								e.splice(t, 1);
								break
							}
				}]
			}()) {
				const [r, o] = s;
				if (null === e || ["number", "boolean", "string"].includes(typeof e) && !p(e)) return e;
				const a = function(t, e) {
					try {
						return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && e === global ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : _(n = e) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? `[Function: ${W(e)}]` : "symbol" == typeof e ? `[${String(e)}]` : "bigint" == typeof e ? `[BigInt: ${String(e)}]` : `[object ${function(t){const e=Object.getPrototypeOf(t);return e?e.constructor.name:"null prototype"}(e)}]`
					} catch (i) {
						return `**non-serializable** (${i})`
					}
					var n
				}(t, e);
				if (!a.startsWith("[object ")) return a;
				if (e.__sentry_skip_normalization__) return e;
				let c = n;
				if ("number" == typeof e.__sentry_override_normalization_depth__ && (c = e.__sentry_override_normalization_depth__), 0 === c) return a.replace("object ", "");
				if (r(e)) return "[Circular ~]";
				const u = e;
				if (u && "function" == typeof u.toJSON) try {
					return bt("", u.toJSON(), c - 1, i, s)
				} catch (f) {}
				const d = Array.isArray(e) ? [] : {};
				let l = 0;
				const h = A(e);
				for (const _ in h) {
					if (!Object.prototype.hasOwnProperty.call(h, _)) continue;
					if (l >= i) {
						d[_] = "[MaxProperties ~]";
						break
					}
					const t = h[_];
					d[_] = bt(_, t, c - 1, i, s), l++
				}
				return o(e), d
			}
			var Rt, Dt;

			function Nt(t) {
				return new wt((e => {
					e(t)
				}))
			}

			function xt(t) {
				return new wt(((e, n) => {
					n(t)
				}))
			}(Dt = Rt || (Rt = {}))[Dt.PENDING = 0] = "PENDING", Dt[Dt.RESOLVED = 1] = "RESOLVED", Dt[Dt.REJECTED = 2] = "REJECTED";
			class wt {
				__init() {
					this._state = Rt.PENDING
				}
				__init2() {
					this._handlers = []
				}
				constructor(t) {
					wt.prototype.__init.call(this), wt.prototype.__init2.call(this), wt.prototype.__init3.call(this), wt.prototype.__init4.call(this), wt.prototype.__init5.call(this), wt.prototype.__init6.call(this);
					try {
						t(this._resolve, this._reject)
					} catch (e) {
						this._reject(e)
					}
				}
				then(t, e) {
					return new wt(((n, i) => {
						this._handlers.push([!1, e => {
							if (t) try {
								n(t(e))
							} catch (s) {
								i(s)
							} else n(e)
						}, t => {
							if (e) try {
								n(e(t))
							} catch (s) {
								i(s)
							} else i(t)
						}]), this._executeHandlers()
					}))
				} catch (t) {
					return this.then((t => t), t)
				} finally(t) {
					return new wt(((e, n) => {
						let i, s;
						return this.then((e => {
							s = !1, i = e, t && t()
						}), (e => {
							s = !0, i = e, t && t()
						})).then((() => {
							s ? n(i) : e(i)
						}))
					}))
				}
				__init3() {
					this._resolve = t => {
						this._setResult(Rt.RESOLVED, t)
					}
				}
				__init4() {
					this._reject = t => {
						this._setResult(Rt.REJECTED, t)
					}
				}
				__init5() {
					this._setResult = (t, e) => {
						this._state === Rt.PENDING && (l(e) ? e.then(this._resolve, this._reject) : (this._state = t, this._value = e, this._executeHandlers()))
					}
				}
				__init6() {
					this._executeHandlers = () => {
						if (this._state === Rt.PENDING) return;
						const t = this._handlers.slice();
						this._handlers = [], t.forEach((t => {
							t[0] || (this._state === Rt.RESOLVED && t[1](this._value), this._state === Rt.REJECTED && t[2](this._value), t[0] = !0)
						}))
					}
				}
			}

			function Ut(t) {
				if (!t) return {};
				const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
				if (!e) return {};
				const n = e[6] || "",
					i = e[8] || "";
				return {
					host: e[4],
					path: e[5],
					protocol: e[2],
					relative: e[5] + n + i
				}
			}

			function Bt(t) {
				return t.split(/\\?\//).filter((t => t.length > 0 && "," !== t)).length
			}
			const kt = ["fatal", "error", "warning", "log", "info", "debug"],
				Yt = g(),
				Gt = {
					nowSeconds: () => Date.now() / 1e3
				},
				It = yt() ? function() {
					try {
						return Et(e, "perf_hooks").performance
					} catch (t) {
						return
					}
				}() : function() {
					const {
						performance: t
					} = Yt;
					if (t && t.now) return {
						now: () => t.now(),
						timeOrigin: Date.now() - t.now()
					}
				}(),
				Ot = void 0 === It ? Gt : {
					nowSeconds: () => (It.timeOrigin + It.now()) / 1e3
				},
				Ct = Gt.nowSeconds.bind(Gt),
				$t = Ot.nowSeconds.bind(Ot),
				At = $t,
				jt = (() => {
					const {
						performance: t
					} = Yt;
					if (!t || !t.now) return;
					const e = 36e5,
						n = t.now(),
						i = Date.now(),
						s = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e,
						r = s < e,
						o = t.timing && t.timing.navigationStart,
						a = "number" == typeof o ? Math.abs(o + n - i) : e;
					return r || a < e ? s <= a ? t.timeOrigin : o : i
				})(),
				Pt = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

			function Lt(t, e = []) {
				return [t, e]
			}

			function Mt(t, e) {
				const [n, i] = t;
				return [n, [...i, e]]
			}

			function qt(t, e) {
				const n = t[1];
				for (const i of n)
					if (e(i, i[0].type)) return !0;
				return !1
			}

			function Ht(t, e) {
				return (e || new TextEncoder).encode(t)
			}

			function Ft(t, e) {
				const [n, i] = t;
				let s = JSON.stringify(n);

				function r(t) {
					"string" == typeof s ? s = "string" == typeof t ? s + t : [Ht(s, e), t] : s.push("string" == typeof t ? Ht(t, e) : t)
				}
				for (const a of i) {
					const [t, e] = a;
					if (r(`\n${JSON.stringify(t)}\n`), "string" == typeof e || e instanceof Uint8Array) r(e);
					else {
						let t;
						try {
							t = JSON.stringify(e)
						} catch (o) {
							t = JSON.stringify(vt(e))
						}
						r(t)
					}
				}
				return "string" == typeof s ? s : function(t) {
					const e = t.reduce(((t, e) => t + e.length), 0),
						n = new Uint8Array(e);
					let i = 0;
					for (const s of t) n.set(s, i), i += s.length;
					return n
				}(s)
			}

			function zt(t, e) {
				const n = "string" == typeof t.data ? Ht(t.data, e) : t.data;
				return [M({
					type: "attachment",
					length: n.length,
					filename: t.filename,
					content_type: t.contentType,
					attachment_type: t.attachmentType
				}), n]
			}
			const Wt = {
				session: "session",
				sessions: "session",
				attachment: "attachment",
				transaction: "transaction",
				event: "error",
				client_report: "internal",
				user_report: "default",
				profile: "profile",
				replay_event: "replay",
				replay_recording: "replay"
			};

			function Jt(t) {
				return Wt[t]
			}

			function Xt(t) {
				if (!t || !t.sdk) return;
				const {
					name: e,
					version: n
				} = t.sdk;
				return {
					name: e,
					version: n
				}
			}
			const Kt = "baggage",
				Vt = "sentry-",
				Qt = /^sentry-/;

			function Zt(t) {
				return function(t) {
					if (0 !== Object.keys(t).length) return Object.entries(t).reduce(((t, [e, n], i) => {
						const s = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
							r = 0 === i ? s : `${t},${s}`;
						return r.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : r
					}), "")
				}(Object.entries(t).reduce(((t, [e, n]) => (n && (t[`${Vt}${e}`] = n), t)), {}))
			}

			function te(t) {
				return t.split(",").map((t => t.split("=").map((t => decodeURIComponent(t.trim()))))).reduce(((t, [e, n]) => (t[e] = n, t)), {})
			}
			const ee = "production";

			function ne(t, e = {}) {
				if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || $t(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : dt()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
				else if ("number" == typeof e.duration) t.duration = e.duration;
				else {
					const e = t.timestamp - t.started;
					t.duration = e >= 0 ? e : 0
				}
				e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
			}
			class ie {
				constructor() {
					this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
				}
				static clone(t) {
					const e = new ie;
					return t && (e._breadcrumbs = [...t._breadcrumbs], e._tags = {
						...t._tags
					}, e._extra = {
						...t._extra
					}, e._contexts = {
						...t._contexts
					}, e._user = t._user, e._level = t._level, e._span = t._span, e._session = t._session, e._transactionName = t._transactionName, e._fingerprint = t._fingerprint, e._eventProcessors = [...t._eventProcessors], e._requestSession = t._requestSession, e._attachments = [...t._attachments], e._sdkProcessingMetadata = {
						...t._sdkProcessingMetadata
					}), e
				}
				addScopeListener(t) {
					this._scopeListeners.push(t)
				}
				addEventProcessor(t) {
					return this._eventProcessors.push(t), this
				}
				setUser(t) {
					return this._user = t || {}, this._session && ne(this._session, {
						user: t
					}), this._notifyScopeListeners(), this
				}
				getUser() {
					return this._user
				}
				getRequestSession() {
					return this._requestSession
				}
				setRequestSession(t) {
					return this._requestSession = t, this
				}
				setTags(t) {
					return this._tags = {
						...this._tags,
						...t
					}, this._notifyScopeListeners(), this
				}
				setTag(t, e) {
					return this._tags = {
						...this._tags,
						[t]: e
					}, this._notifyScopeListeners(), this
				}
				setExtras(t) {
					return this._extra = {
						...this._extra,
						...t
					}, this._notifyScopeListeners(), this
				}
				setExtra(t, e) {
					return this._extra = {
						...this._extra,
						[t]: e
					}, this._notifyScopeListeners(), this
				}
				setFingerprint(t) {
					return this._fingerprint = t, this._notifyScopeListeners(), this
				}
				setLevel(t) {
					return this._level = t, this._notifyScopeListeners(), this
				}
				setTransactionName(t) {
					return this._transactionName = t, this._notifyScopeListeners(), this
				}
				setContext(t, e) {
					return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
				}
				setSpan(t) {
					return this._span = t, this._notifyScopeListeners(), this
				}
				getSpan() {
					return this._span
				}
				getTransaction() {
					const t = this.getSpan();
					return t && t.transaction
				}
				setSession(t) {
					return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
				}
				getSession() {
					return this._session
				}
				update(t) {
					if (!t) return this;
					if ("function" == typeof t) {
						const e = t(this);
						return e instanceof ie ? e : this
					}
					return t instanceof ie ? (this._tags = {
						...this._tags,
						...t._tags
					}, this._extra = {
						...this._extra,
						...t._extra
					}, this._contexts = {
						...this._contexts,
						...t._contexts
					}, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : _(t) && (this._tags = {
						...this._tags,
						...t.tags
					}, this._extra = {
						...this._extra,
						...t.extra
					}, this._contexts = {
						...this._contexts,
						...t.contexts
					}, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
				}
				clear() {
					return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
				}
				addBreadcrumb(t, e) {
					const n = "number" == typeof e ? e : 100;
					if (n <= 0) return this;
					const i = {
						timestamp: Ct(),
						...t
					};
					return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
				}
				getLastBreadcrumb() {
					return this._breadcrumbs[this._breadcrumbs.length - 1]
				}
				clearBreadcrumbs() {
					return this._breadcrumbs = [], this._notifyScopeListeners(), this
				}
				addAttachment(t) {
					return this._attachments.push(t), this
				}
				getAttachments() {
					return this._attachments
				}
				clearAttachments() {
					return this._attachments = [], this
				}
				applyToEvent(t, e = {}) {
					if (this._extra && Object.keys(this._extra).length && (t.extra = {
							...this._extra,
							...t.extra
						}), this._tags && Object.keys(this._tags).length && (t.tags = {
							...this._tags,
							...t.tags
						}), this._user && Object.keys(this._user).length && (t.user = {
							...this._user,
							...t.user
						}), this._contexts && Object.keys(this._contexts).length && (t.contexts = {
							...this._contexts,
							...t.contexts
						}), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
						t.contexts = {
							trace: this._span.getTraceContext(),
							...t.contexts
						};
						const e = this._span.transaction && this._span.transaction.name;
						e && (t.tags = {
							transaction: e,
							...t.tags
						})
					}
					return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
						...t.sdkProcessingMetadata,
						...this._sdkProcessingMetadata
					}, this._notifyEventProcessors([...se(), ...this._eventProcessors], t, e)
				}
				setSDKProcessingMetadata(t) {
					return this._sdkProcessingMetadata = {
						...this._sdkProcessingMetadata,
						...t
					}, this
				}
				_notifyEventProcessors(t, e, n, i = 0) {
					return new wt(((s, r) => {
						const o = t[i];
						if (null === e || "function" != typeof o) s(e);
						else {
							const a = o({
								...e
							}, n);
							("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.id && null === a && B.log(`Event processor "${o.id}" dropped event`), l(a) ? a.then((e => this._notifyEventProcessors(t, e, n, i + 1).then(s))).then(null, r) : this._notifyEventProcessors(t, a, n, i + 1).then(s).then(null, r)
						}
					}))
				}
				_notifyScopeListeners() {
					this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t => {
						t(this)
					})), this._notifyingListeners = !1)
				}
				_applyFingerprint(t) {
					t.fingerprint = t.fingerprint ? gt(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
				}
			}

			function se() {
				return y("globalEventProcessors", (() => []))
			}

			function re(t) {
				se().push(t)
			}
			const oe = 100;
			class ae {
				constructor(t, e = new ie, n = 4) {
					this._version = n, this._stack = [{
						scope: e
					}], t && this.bindClient(t)
				}
				isOlderThan(t) {
					return this._version < t
				}
				bindClient(t) {
					this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
				}
				pushScope() {
					const t = ie.clone(this.getScope());
					return this.getStack().push({
						client: this.getClient(),
						scope: t
					}), t
				}
				popScope() {
					return !(this.getStack().length <= 1 || !this.getStack().pop())
				}
				withScope(t) {
					const e = this.pushScope();
					try {
						t(e)
					} finally {
						this.popScope()
					}
				}
				getClient() {
					return this.getStackTop().client
				}
				getScope() {
					return this.getStackTop().scope
				}
				getStack() {
					return this._stack
				}
				getStackTop() {
					return this._stack[this._stack.length - 1]
				}
				captureException(t, e) {
					const n = this._lastEventId = e && e.event_id ? e.event_id : dt(),
						i = new Error("Sentry syntheticException");
					return this._withClient(((s, r) => {
						s.captureException(t, {
							originalException: t,
							syntheticException: i,
							...e,
							event_id: n
						}, r)
					})), n
				}
				captureMessage(t, e, n) {
					const i = this._lastEventId = n && n.event_id ? n.event_id : dt(),
						s = new Error(t);
					return this._withClient(((r, o) => {
						r.captureMessage(t, e, {
							originalException: t,
							syntheticException: s,
							...n,
							event_id: i
						}, o)
					})), i
				}
				captureEvent(t, e) {
					const n = e && e.event_id ? e.event_id : dt();
					return t.type || (this._lastEventId = n), this._withClient(((i, s) => {
						i.captureEvent(t, {
							...e,
							event_id: n
						}, s)
					})), n
				}
				lastEventId() {
					return this._lastEventId
				}
				addBreadcrumb(t, e) {
					const {
						scope: n,
						client: i
					} = this.getStackTop();
					if (!i) return;
					const {
						beforeBreadcrumb: s = null,
						maxBreadcrumbs: r = oe
					} = i.getOptions && i.getOptions() || {};
					if (r <= 0) return;
					const o = {
							timestamp: Ct(),
							...t
						},
						a = s ? w((() => s(o, e))) : o;
					null !== a && (i.emit && i.emit("beforeAddBreadcrumb", a, e), n.addBreadcrumb(a, r))
				}
				setUser(t) {
					this.getScope().setUser(t)
				}
				setTags(t) {
					this.getScope().setTags(t)
				}
				setExtras(t) {
					this.getScope().setExtras(t)
				}
				setTag(t, e) {
					this.getScope().setTag(t, e)
				}
				setExtra(t, e) {
					this.getScope().setExtra(t, e)
				}
				setContext(t, e) {
					this.getScope().setContext(t, e)
				}
				configureScope(t) {
					const {
						scope: e,
						client: n
					} = this.getStackTop();
					n && t(e)
				}
				run(t) {
					const e = _e(this);
					try {
						t(this)
					} finally {
						_e(e)
					}
				}
				getIntegration(t) {
					const e = this.getClient();
					if (!e) return null;
					try {
						return e.getIntegration(t)
					} catch (n) {
						return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
					}
				}
				startTransaction(t, e) {
					return this._callExtensionMethod("startTransaction", t, e)
				}
				traceHeaders() {
					return this._callExtensionMethod("traceHeaders")
				}
				captureSession(t = !1) {
					if (t) return this.endSession();
					this._sendSessionUpdate()
				}
				endSession() {
					const t = this.getStackTop().scope,
						e = t.getSession();
					e && function(t, e) {
						let n = {};
						"ok" === t.status && (n = {
							status: "exited"
						}), ne(t, n)
					}(e), this._sendSessionUpdate(), t.setSession()
				}
				startSession(t) {
					const {
						scope: e,
						client: n
					} = this.getStackTop(), {
						release: i,
						environment: s = ee
					} = n && n.getOptions() || {}, {
						userAgent: r
					} = m.navigator || {}, o = function(t) {
						const e = $t(),
							n = {
								sid: dt(),
								init: !0,
								timestamp: e,
								started: e,
								duration: 0,
								status: "ok",
								errors: 0,
								ignoreDuration: !1,
								toJSON: () => function(t) {
									return M({
										sid: `${t.sid}`,
										init: t.init,
										started: new Date(1e3 * t.started).toISOString(),
										timestamp: new Date(1e3 * t.timestamp).toISOString(),
										status: t.status,
										errors: t.errors,
										did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
										duration: t.duration,
										attrs: {
											release: t.release,
											environment: t.environment,
											ip_address: t.ipAddress,
											user_agent: t.userAgent
										}
									})
								}(n)
							};
						return t && ne(n, t), n
					}({
						release: i,
						environment: s,
						user: e.getUser(),
						...r && {
							userAgent: r
						},
						...t
					}), a = e.getSession && e.getSession();
					return a && "ok" === a.status && ne(a, {
						status: "exited"
					}), this.endSession(), e.setSession(o), o
				}
				shouldSendDefaultPii() {
					const t = this.getClient(),
						e = t && t.getOptions();
					return Boolean(e && e.sendDefaultPii)
				}
				_sendSessionUpdate() {
					const {
						scope: t,
						client: e
					} = this.getStackTop();
					if (!t) return;
					const n = t.getSession();
					n && e && e.captureSession && e.captureSession(n)
				}
				_withClient(t) {
					const {
						scope: e,
						client: n
					} = this.getStackTop();
					n && t(n, e)
				}
				_callExtensionMethod(t, ...e) {
					const n = ce().__SENTRY__;
					if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
					("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Extension method ${t} couldn't be found, doing nothing.`)
				}
			}

			function ce() {
				return m.__SENTRY__ = m.__SENTRY__ || {
					extensions: {},
					hub: void 0
				}, m
			}

			function _e(t) {
				const e = ce(),
					n = le(e);
				return pe(e, t), n
			}

			function ue() {
				const t = ce();
				return de(t) && !le(t).isOlderThan(4) || pe(t, new ae), yt() ? function(t) {
					try {
						const e = ce().__SENTRY__,
							n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
						if (!n) return le(t);
						if (!de(n) || le(n).isOlderThan(4)) {
							const e = le(t).getStackTop();
							pe(n, new ae(e.client, ie.clone(e.scope)))
						}
						return le(n)
					} catch (e) {
						return le(t)
					}
				}(t) : le(t)
			}

			function de(t) {
				return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
			}

			function le(t) {
				return y("hub", (() => new ae), t)
			}

			function pe(t, e) {
				return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
			}

			function he(t) {
				if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
				const e = ue().getClient(),
					n = t || e && e.getOptions();
				return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
			}

			function fe(t) {
				return (t || ue()).getScope().getTransaction()
			}
			let me = !1;

			function ge() {
				const t = fe();
				if (t) {
					const e = "internal_error";
					("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
				}
			}
			ge.tag = "sentry_tracingErrorCallback";
			class ye {
				__init() {
					this.spans = []
				}
				constructor(t = 1e3) {
					ye.prototype.__init.call(this), this._maxlen = t
				}
				add(t) {
					this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
				}
			}
			class Ee {
				__init2() {
					this.traceId = dt()
				}
				__init3() {
					this.spanId = dt().substring(16)
				}
				__init4() {
					this.startTimestamp = At()
				}
				__init5() {
					this.tags = {}
				}
				__init6() {
					this.data = {}
				}
				__init7() {
					this.instrumenter = "sentry"
				}
				constructor(t) {
					if (Ee.prototype.__init2.call(this), Ee.prototype.__init3.call(this), Ee.prototype.__init4.call(this), Ee.prototype.__init5.call(this), Ee.prototype.__init6.call(this), Ee.prototype.__init7.call(this), !t) return this;
					t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp), t.instrumenter && (this.instrumenter = t.instrumenter)
				}
				startChild(t) {
					const e = new Ee({
						...t,
						parentSpanId: this.spanId,
						sampled: this.sampled,
						traceId: this.traceId
					});
					if (e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e), e.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
						const n = `[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`;
						e.transaction.metadata.spanMetadata[e.spanId] = {
							logMessage: n
						}, B.log(n)
					}
					return e
				}
				setTag(t, e) {
					return this.tags = {
						...this.tags,
						[t]: e
					}, this
				}
				setData(t, e) {
					return this.data = {
						...this.data,
						[t]: e
					}, this
				}
				setStatus(t) {
					return this.status = t, this
				}
				setHttpStatus(t) {
					this.setTag("http.status_code", String(t));
					const e = function(t) {
						if (t < 400 && t >= 100) return "ok";
						if (t >= 400 && t < 500) switch (t) {
							case 401:
								return "unauthenticated";
							case 403:
								return "permission_denied";
							case 404:
								return "not_found";
							case 409:
								return "already_exists";
							case 413:
								return "failed_precondition";
							case 429:
								return "resource_exhausted";
							default:
								return "invalid_argument"
						}
						if (t >= 500 && t < 600) switch (t) {
							case 501:
								return "unimplemented";
							case 503:
								return "unavailable";
							case 504:
								return "deadline_exceeded";
							default:
								return "internal_error"
						}
						return "unknown_error"
					}(t);
					return "unknown_error" !== e && this.setStatus(e), this
				}
				isSuccess() {
					return "ok" === this.status
				}
				finish(t) {
					if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
						const {
							logMessage: t
						} = this.transaction.metadata.spanMetadata[this.spanId];
						t && B.log(t.replace("Starting", "Finishing"))
					}
					this.endTimestamp = "number" == typeof t ? t : At()
				}
				toTraceparent() {
					let t = "";
					return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"), `${this.traceId}-${this.spanId}${t}`
				}
				toContext() {
					return M({
						data: this.data,
						description: this.description,
						endTimestamp: this.endTimestamp,
						op: this.op,
						parentSpanId: this.parentSpanId,
						sampled: this.sampled,
						spanId: this.spanId,
						startTimestamp: this.startTimestamp,
						status: this.status,
						tags: this.tags,
						traceId: this.traceId
					})
				}
				updateWithContext(t) {
					return this.data = t.data || {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = t.spanId || this.spanId, this.startTimestamp = t.startTimestamp || this.startTimestamp, this.status = t.status, this.tags = t.tags || {}, this.traceId = t.traceId || this.traceId, this
				}
				getTraceContext() {
					return M({
						data: Object.keys(this.data).length > 0 ? this.data : void 0,
						description: this.description,
						op: this.op,
						parent_span_id: this.parentSpanId,
						span_id: this.spanId,
						status: this.status,
						tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
						trace_id: this.traceId
					})
				}
				toJSON() {
					return M({
						data: Object.keys(this.data).length > 0 ? this.data : void 0,
						description: this.description,
						op: this.op,
						parent_span_id: this.parentSpanId,
						span_id: this.spanId,
						start_timestamp: this.startTimestamp,
						status: this.status,
						tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
						timestamp: this.endTimestamp,
						trace_id: this.traceId
					})
				}
			}
			class Se extends Ee {
				__init() {
					this._measurements = {}
				}
				__init2() {
					this._contexts = {}
				}
				__init3() {
					this._frozenDynamicSamplingContext = void 0
				}
				constructor(t, e) {
					super(t), Se.prototype.__init.call(this), Se.prototype.__init2.call(this), Se.prototype.__init3.call(this), this._hub = e || ue(), this._name = t.name || "", this.metadata = {
						source: "custom",
						...t.metadata,
						spanMetadata: {}
					}, this._trimEnd = t.trimEnd, this.transaction = this;
					const n = this.metadata.dynamicSamplingContext;
					n && (this._frozenDynamicSamplingContext = {
						...n
					})
				}
				get name() {
					return this._name
				}
				set name(t) {
					this.setName(t)
				}
				setName(t, e = "custom") {
					this._name = t, this.metadata.source = e
				}
				initSpanRecorder(t = 1e3) {
					this.spanRecorder || (this.spanRecorder = new ye(t)), this.spanRecorder.add(this)
				}
				setContext(t, e) {
					null === e ? delete this._contexts[t] : this._contexts[t] = e
				}
				setMeasurement(t, e, n = "") {
					this._measurements[t] = {
						value: e,
						unit: n
					}
				}
				setMetadata(t) {
					this.metadata = {
						...this.metadata,
						...t
					}
				}
				finish(t) {
					if (void 0 !== this.endTimestamp) return;
					this.name || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t);
					const e = this._hub.getClient();
					if (e && e.emit && e.emit("finishTransaction", this), !0 !== this.sampled) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(e && e.recordDroppedEvent("sample_rate", "transaction"));
					const n = this.spanRecorder ? this.spanRecorder.spans.filter((t => t !== this && t.endTimestamp)) : [];
					this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce(((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t)).endTimestamp);
					const i = this.metadata,
						s = {
							contexts: {
								...this._contexts,
								trace: this.getTraceContext()
							},
							spans: n,
							start_timestamp: this.startTimestamp,
							tags: this.tags,
							timestamp: this.endTimestamp,
							transaction: this.name,
							type: "transaction",
							sdkProcessingMetadata: {
								...i,
								dynamicSamplingContext: this.getDynamicSamplingContext()
							},
							...i.source && {
								transaction_info: {
									source: i.source
								}
							}
						};
					return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), s.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(s)
				}
				toContext() {
					return M({
						...super.toContext(),
						name: this.name,
						trimEnd: this._trimEnd
					})
				}
				updateWithContext(t) {
					return super.updateWithContext(t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
				}
				getDynamicSamplingContext() {
					if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
					const t = this._hub || ue(),
						e = t && t.getClient();
					if (!e) return {};
					const {
						environment: n,
						release: i
					} = e.getOptions() || {}, {
						publicKey: s
					} = e.getDsn() || {}, r = this.metadata.sampleRate, o = void 0 !== r ? r.toString() : void 0, {
						segment: a
					} = t.getScope().getUser() || {}, c = this.metadata.source, _ = c && "url" !== c ? this.name : void 0, u = M({
						environment: n || ee,
						release: i,
						transaction: _,
						user_segment: a,
						public_key: s,
						trace_id: this.traceId,
						sample_rate: o
					});
					return e.emit && e.emit("createDsc", u), u
				}
				setHub(t) {
					this._hub = t
				}
			}
			const ve = {
					idleTimeout: 1e3,
					finalTimeout: 3e4,
					heartbeatInterval: 5e3
				},
				Te = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
			class be extends ye {
				constructor(t, e, n, i) {
					super(i), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
				}
				add(t) {
					t.spanId !== this.transactionSpanId && (t.finish = e => {
						t.endTimestamp = "number" == typeof e ? e : At(), this._popActivity(t.spanId)
					}, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), super.add(t)
				}
			}
			class Re extends Se {
				__init() {
					this.activities = {}
				}
				__init2() {
					this._heartbeatCounter = 0
				}
				__init3() {
					this._finished = !1
				}
				__init4() {
					this._idleTimeoutCanceledPermanently = !1
				}
				__init5() {
					this._beforeFinishCallbacks = []
				}
				__init6() {
					this._finishReason = Te[4]
				}
				constructor(t, e, n = ve.idleTimeout, i = ve.finalTimeout, s = ve.heartbeatInterval, r = !1) {
					super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = i, this._heartbeatInterval = s, this._onScope = r, Re.prototype.__init.call(this), Re.prototype.__init2.call(this), Re.prototype.__init3.call(this), Re.prototype.__init4.call(this), Re.prototype.__init5.call(this), Re.prototype.__init6.call(this), r && (De(e), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), e.configureScope((t => t.setSpan(this)))), this._restartIdleTimeout(), setTimeout((() => {
						this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = Te[3], this.finish())
					}), this._finalTimeout)
				}
				finish(t = At()) {
					if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason), this.spanRecorder) {
						("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
						for (const e of this._beforeFinishCallbacks) e(this, t);
						this.spanRecorder.spans = this.spanRecorder.spans.filter((e => {
							if (e.spanId === this.spanId) return !0;
							e.endTimestamp || (e.endTimestamp = t, e.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
							const n = e.startTimestamp < t;
							return n || ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)), n
						})), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] flushing IdleTransaction")
					} else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] No active IdleTransaction");
					return this._onScope && De(this._idleHub), super.finish(t)
				}
				registerBeforeFinishCallback(t) {
					this._beforeFinishCallbacks.push(t)
				}
				initSpanRecorder(t) {
					if (!this.spanRecorder) {
						const e = t => {
								this._finished || this._pushActivity(t)
							},
							n = t => {
								this._finished || this._popActivity(t)
							};
						this.spanRecorder = new be(e, n, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Starting heartbeat"), this._pingHeartbeat()
					}
					this.spanRecorder.add(this)
				}
				cancelIdleTimeout(t, {
					restartOnChildSpanChange: e
				} = {
					restartOnChildSpanChange: !0
				}) {
					this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = Te[5], this.finish(t)))
				}
				setFinishReason(t) {
					this._finishReason = t
				}
				_restartIdleTimeout(t) {
					this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
						this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = Te[1], this.finish(t))
					}), this._idleTimeout)
				}
				_pushActivity(t) {
					this.cancelIdleTimeout(void 0, {
						restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
					}), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] new activities count", Object.keys(this.activities).length)
				}
				_popActivity(t) {
					if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] popActivity ${t}`), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
						const t = At();
						this._idleTimeoutCanceledPermanently ? (this._finishReason = Te[5], this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
					}
				}
				_beat() {
					if (this._finished) return;
					const t = Object.keys(this.activities).join("");
					t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = Te[0], this.finish()) : this._pingHeartbeat()
				}
				_pingHeartbeat() {
					("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout((() => {
						this._beat()
					}), this._heartbeatInterval)
				}
			}

			function De(t) {
				const e = t.getScope();
				e.getTransaction() && e.setSpan(void 0)
			}

			function Ne() {
				const t = this.getScope().getSpan();
				return t ? {
					"sentry-trace": t.toTraceparent()
				} : {}
			}

			function xe(t, e, n) {
				if (!he(e)) return t.sampled = !1, t;
				if (void 0 !== t.sampled) return t.setMetadata({
					sampleRate: Number(t.sampled)
				}), t;
				let i;
				return "function" == typeof e.tracesSampler ? (i = e.tracesSampler(n), t.setMetadata({
					sampleRate: Number(i)
				})) : void 0 !== n.parentSampled ? i = n.parentSampled : void 0 !== e.tracesSampleRate ? (i = e.tracesSampleRate, t.setMetadata({
					sampleRate: Number(i)
				})) : (i = 1, t.setMetadata({
					sampleRate: i
				})), (p(s = i) || "number" != typeof s && "boolean" != typeof s ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), 0) : !(s < 0 || s > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${s}.`), 0)) ? i ? (t.sampled = Math.random() < i, t.sampled ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), t)) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t);
				var s
			}

			function we(t, e) {
				const n = this.getClient(),
					i = n && n.getOptions() || {},
					s = i.instrumenter || "sentry",
					r = t.instrumenter || "sentry";
				s !== r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error(`A transaction was started with instrumenter=\`${r}\`, but the SDK is configured with the \`${s}\` instrumenter.\nThe transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`), t.sampled = !1);
				let o = new Se(t, this);
				return o = xe(o, i, {
					parentSampled: t.parentSampled,
					transactionContext: t,
					...e
				}), o.sampled && o.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o
			}

			function Ue(t, e, n, i, s, r, o) {
				const a = t.getClient(),
					c = a && a.getOptions() || {};
				let _ = new Re(e, t, n, i, o, s);
				return _ = xe(_, c, {
					parentSampled: e.parentSampled,
					transactionContext: e,
					...r
				}), _.sampled && _.initSpanRecorder(c._experiments && c._experiments.maxSpans), a && a.emit && a.emit("startTransaction", _), _
			}

			function Be() {
				const t = ce();
				t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = we), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = Ne), me || (me = !0, et("error", ge), et("unhandledrejection", ge)))
			}

			function ke(t, e) {
				return ue().captureException(t, {
					captureContext: e
				})
			}

			function Ye(t) {
				const e = t.protocol ? `${t.protocol}:` : "",
					n = t.port ? `:${t.port}` : "";
				return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
			}
			const Ge = [];

			function Ie(t) {
				const e = t.defaultIntegrations || [],
					n = t.integrations;
				let i;
				e.forEach((t => {
					t.isDefaultInstance = !0
				})), i = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? gt(n(e)) : e;
				const s = function(t) {
						const e = {};
						return t.forEach((t => {
							const {
								name: n
							} = t, i = e[n];
							i && !i.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
						})), Object.keys(e).map((t => e[t]))
					}(i),
					r = function(t, e) {
						for (let n = 0; n < t.length; n++)
							if (1 == ("Debug" === t[n].name)) return n;
						return -1
					}(s);
				if (-1 !== r) {
					const [t] = s.splice(r, 1);
					s.push(t)
				}
				return s
			}

			function Oe(t, e) {
				e[t.name] = t, -1 === Ge.indexOf(t.name) && (t.setupOnce(re, ue), Ge.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`Integration installed: ${t.name}`))
			}
			const Ce = "Not capturing exception because it's already been captured.";
			class $e {
				__init() {
					this._integrations = {}
				}
				__init2() {
					this._integrationsInitialized = !1
				}
				__init3() {
					this._numProcessing = 0
				}
				__init4() {
					this._outcomes = {}
				}
				__init5() {
					this._hooks = {}
				}
				constructor(t) {
					if ($e.prototype.__init.call(this), $e.prototype.__init2.call(this), $e.prototype.__init3.call(this), $e.prototype.__init4.call(this), $e.prototype.__init5.call(this), this._options = t, t.dsn) {
						this._dsn = N(t.dsn);
						const e = function(t, e = {}) {
							const n = "string" == typeof e ? e : e.tunnel,
								i = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
							return n || `${function(t){return`${Ye(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){return n={sentry_key:t.publicKey,sentry_version:"7",...e&&{sentry_client:`${e.name}/${e.version}`}},Object.keys(n).map((t=>`
							$ {
								encodeURIComponent(t)
							} = $ {
								encodeURIComponent(n[t])
							}
							`)).join("&");var n}(t,i)}`
						}(this._dsn, t);
						this._transport = t.transport({
							recordDroppedEvent: this.recordDroppedEvent.bind(this),
							...t.transportOptions,
							url: e
						})
					} else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("No DSN provided, client will not do anything.")
				}
				captureException(t, e, n) {
					if (mt(t)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(Ce));
					let i = e && e.event_id;
					return this._process(this.eventFromException(t, e).then((t => this._captureEvent(t, e, n))).then((t => {
						i = t
					}))), i
				}
				captureMessage(t, e, n, i) {
					let s = n && n.event_id;
					const r = c(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
					return this._process(r.then((t => this._captureEvent(t, n, i))).then((t => {
						s = t
					}))), s
				}
				captureEvent(t, e, n) {
					if (e && e.originalException && mt(e.originalException)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(Ce));
					let i = e && e.event_id;
					return this._process(this._captureEvent(t, e, n).then((t => {
						i = t
					}))), i
				}
				captureSession(t) {
					this._isEnabled() ? "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), ne(t, {
						init: !1
					})) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("SDK not enabled, will not capture session.")
				}
				getDsn() {
					return this._dsn
				}
				getOptions() {
					return this._options
				}
				getSdkMetadata() {
					return this._options._metadata
				}
				getTransport() {
					return this._transport
				}
				flush(t) {
					const e = this._transport;
					return e ? this._isClientDoneProcessing(t).then((n => e.flush(t).then((t => n && t)))) : Nt(!0)
				}
				close(t) {
					return this.flush(t).then((t => (this.getOptions().enabled = !1, t)))
				}
				setupIntegrations() {
					this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(t) {
						const e = {};
						return t.forEach((t => {
							t && Oe(t, e)
						})), e
					}(this._options.integrations), this._integrationsInitialized = !0)
				}
				getIntegrationById(t) {
					return this._integrations[t]
				}
				getIntegration(t) {
					try {
						return this._integrations[t.id] || null
					} catch (e) {
						return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
					}
				}
				addIntegration(t) {
					Oe(t, this._integrations)
				}
				sendEvent(t, e = {}) {
					if (this._dsn) {
						let n = function(t, e, n, i) {
							const s = Xt(n),
								r = t.type && "replay_event" !== t.type ? t.type : "event";
							! function(t, e) {
								e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
							}(t, n && n.sdk);
							const o = function(t, e, n, i) {
								const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
								return {
									event_id: t.event_id,
									sent_at: (new Date).toISOString(),
									...e && {
										sdk: e
									},
									...!!n && {
										dsn: R(i)
									},
									..."transaction" === t.type && s && {
										trace: M({
											...s
										})
									}
								}
							}(t, s, i, e);
							return delete t.sdkProcessingMetadata, Lt(o, [
								[{
									type: r
								}, t]
							])
						}(t, this._dsn, this._options._metadata, this._options.tunnel);
						for (const t of e.attachments || []) n = Mt(n, zt(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
						const i = this._sendEnvelope(n);
						i && i.then((e => this.emit("afterSendEvent", t, e)), null)
					}
				}
				sendSession(t) {
					if (this._dsn) {
						const e = function(t, e, n, i) {
							const s = Xt(n);
							return Lt({
								sent_at: (new Date).toISOString(),
								...s && {
									sdk: s
								},
								...!!i && {
									dsn: R(e)
								}
							}, ["aggregates" in t ? [{
								type: "sessions"
							}, t] : [{
								type: "session"
							}, t]])
						}(t, this._dsn, this._options._metadata, this._options.tunnel);
						this._sendEnvelope(e)
					}
				}
				recordDroppedEvent(t, e, n) {
					if (this._options.sendClientReports) {
						const n = `${t}:${e}`;
						("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
					}
				}
				on(t, e) {
					this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e)
				}
				emit(t, ...e) {
					this._hooks[t] && this._hooks[t].forEach((t => t(...e)))
				}
				_updateSessionFromEvent(t, e) {
					let n = !1,
						i = !1;
					const s = e.exception && e.exception.values;
					if (s) {
						i = !0;
						for (const t of s) {
							const e = t.mechanism;
							if (e && !1 === e.handled) {
								n = !0;
								break
							}
						}
					}
					const r = "ok" === t.status;
					(r && 0 === t.errors || r && n) && (ne(t, {
						...n && {
							status: "crashed"
						},
						errors: t.errors || Number(i || n)
					}), this.captureSession(t))
				}
				_isClientDoneProcessing(t) {
					return new wt((e => {
						let n = 0;
						const i = setInterval((() => {
							0 == this._numProcessing ? (clearInterval(i), e(!0)) : (n += 1, t && n >= t && (clearInterval(i), e(!1)))
						}), 1)
					}))
				}
				_isEnabled() {
					return !1 !== this.getOptions().enabled && void 0 !== this._dsn
				}
				_prepareEvent(t, e, n) {
					const i = this.getOptions(),
						s = Object.keys(this._integrations);
					return !e.integrations && s.length > 0 && (e.integrations = s),
						function(t, e, n, i) {
							const {
								normalizeDepth: s = 3,
								normalizeMaxBreadth: r = 1e3
							} = t, o = {
								...e,
								event_id: e.event_id || n.event_id || dt(),
								timestamp: e.timestamp || Ct()
							}, a = n.integrations || t.integrations.map((t => t.name));
							! function(t, e) {
								const {
									environment: n,
									release: i,
									dist: s,
									maxValueLength: r = 250
								} = e;
								"environment" in t || (t.environment = "environment" in e ? n : ee), void 0 === t.release && void 0 !== i && (t.release = i), void 0 === t.dist && void 0 !== s && (t.dist = s), t.message && (t.message = k(t.message, r));
								const o = t.exception && t.exception.values && t.exception.values[0];
								o && o.value && (o.value = k(o.value, r));
								const a = t.request;
								a && a.url && (a.url = k(a.url, r))
							}(o, t),
							function(t, e) {
								e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
							}(o, a),
							function(t, e) {
								const n = m._sentryDebugIds;
								if (!n) return;
								const i = Object.keys(n).reduce(((t, i) => {
										const s = e(i);
										for (const e of s)
											if (e.filename) {
												t[e.filename] = n[i];
												break
											} return t
									}), {}),
									s = new Set;
								try {
									t.exception.values.forEach((t => {
										t.stacktrace.frames.forEach((t => {
											t.filename && s.add(t.filename)
										}))
									}))
								} catch (o) {}
								t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
								const r = t.debug_meta.images;
								s.forEach((t => {
									i[t] && r.push({
										type: "sourcemap",
										code_file: t,
										debug_id: i[t]
									})
								}))
							}(o, t.stackParser);
							let c = i;
							n.captureContext && (c = ie.clone(c).update(n.captureContext));
							let _ = Nt(o);
							if (c) {
								if (c.getAttachments) {
									const t = [...n.attachments || [], ...c.getAttachments()];
									t.length && (n.attachments = t)
								}
								_ = c.applyToEvent(o, n)
							}
							return _.then((t => "number" == typeof s && s > 0 ? function(t, e, n) {
								if (!t) return null;
								const i = {
									...t,
									...t.breadcrumbs && {
										breadcrumbs: t.breadcrumbs.map((t => ({
											...t,
											...t.data && {
												data: vt(t.data, e, n)
											}
										})))
									},
									...t.user && {
										user: vt(t.user, e, n)
									},
									...t.contexts && {
										contexts: vt(t.contexts, e, n)
									},
									...t.extra && {
										extra: vt(t.extra, e, n)
									}
								};
								return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = vt(t.contexts.trace.data, e, n))), t.spans && (i.spans = t.spans.map((t => (t.data && (t.data = vt(t.data, e, n)), t)))), i
							}(t, s, r) : t))
						}(i, t, e, n)
				}
				_captureEvent(t, e = {}, n) {
					return this._processEvent(t, e, n).then((t => t.event_id), (t => {
						if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
							const e = t;
							"log" === e.logLevel ? B.log(e.message) : B.warn(e)
						}
					}))
				}
				_processEvent(t, e, n) {
					const i = this.getOptions(),
						{
							sampleRate: s
						} = i;
					if (!this._isEnabled()) return xt(new T("SDK not enabled, will not capture event.", "log"));
					const r = je(t),
						o = Ae(t),
						a = t.type || "error",
						c = `before send for type \`${a}\``;
					if (o && "number" == typeof s && Math.random() > s) return this.recordDroppedEvent("sample_rate", "error", t), xt(new T(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
					const u = "replay_event" === a ? "replay" : a;
					return this._prepareEvent(t, e, n).then((n => {
						if (null === n) throw this.recordDroppedEvent("event_processor", u, t), new T("An event processor returned `null`, will not send event.", "log");
						if (e.data && !0 === e.data.__sentry__) return n;
						const s = function(t, e, n) {
							const {
								beforeSend: i,
								beforeSendTransaction: s
							} = t;
							return Ae(e) && i ? i(e, n) : je(e) && s ? s(e, n) : e
						}(i, n, e);
						return function(t, e) {
							const n = `${e} must return \`null\` or a valid event.`;
							if (l(t)) return t.then((t => {
								if (!_(t) && null !== t) throw new T(n);
								return t
							}), (t => {
								throw new T(`${e} rejected with ${t}`)
							}));
							if (!_(t) && null !== t) throw new T(n);
							return t
						}(s, c)
					})).then((i => {
						if (null === i) throw this.recordDroppedEvent("before_send", u, t), new T(`${c} returned \`null\`, will not send event.`, "log");
						const s = n && n.getSession();
						!r && s && this._updateSessionFromEvent(s, i);
						const o = i.transaction_info;
						if (r && o && i.transaction !== t.transaction) {
							const t = "custom";
							i.transaction_info = {
								...o,
								source: t
							}
						}
						return this.sendEvent(i, e), i
					})).then(null, (t => {
						if (t instanceof T) throw t;
						throw this.captureException(t, {
							data: {
								__sentry__: !0
							},
							originalException: t
						}), new T(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
					}))
				}
				_process(t) {
					this._numProcessing++, t.then((t => (this._numProcessing--, t)), (t => (this._numProcessing--, t)))
				}
				_sendEnvelope(t) {
					if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, (t => {
						("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Error while sending event:", t)
					}));
					("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Transport disabled")
				}
				_clearOutcomes() {
					const t = this._outcomes;
					return this._outcomes = {}, Object.keys(t).map((e => {
						const [n, i] = e.split(":");
						return {
							reason: n,
							category: i,
							quantity: t[e]
						}
					}))
				}
			}

			function Ae(t) {
				return void 0 === t.type
			}

			function je(t) {
				return "transaction" === t.type
			}

			function Pe(t, e, n = function(t) {
				const e = [];

				function n(t) {
					return e.splice(e.indexOf(t), 1)[0]
				}
				return {
					$: e,
					add: function(i) {
						if (!(void 0 === t || e.length < t)) return xt(new T("Not adding Promise because buffer limit was reached."));
						const s = i();
						return -1 === e.indexOf(s) && e.push(s), s.then((() => n(s))).then(null, (() => n(s).then(null, (() => {})))), s
					},
					drain: function(t) {
						return new wt(((n, i) => {
							let s = e.length;
							if (!s) return n(!0);
							const r = setTimeout((() => {
								t && t > 0 && n(!1)
							}), t);
							e.forEach((t => {
								Nt(t).then((() => {
									--s || (clearTimeout(r), n(!0))
								}), i)
							}))
						}))
					}
				}
			}(t.bufferSize || 30)) {
				let i = {};

				function s(s) {
					const r = [];
					if (qt(s, ((e, n) => {
							const s = Jt(n);
							if (function(t, e, n = Date.now()) {
									return function(t, e) {
										return t[e] || t.all || 0
									}(t, e) > n
								}(i, s)) {
								const i = Le(e, n);
								t.recordDroppedEvent("ratelimit_backoff", s, i)
							} else r.push(e)
						})), 0 === r.length) return Nt();
					const o = Lt(s[0], r),
						a = e => {
							qt(o, ((n, i) => {
								const s = Le(n, i);
								t.recordDroppedEvent(e, Jt(i), s)
							}))
						};
					return n.add((() => e({
						body: Ft(o, t.textEncoder)
					}).then((t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), i = function(t, {
						statusCode: e,
						headers: n
					}, i = Date.now()) {
						const s = {
								...t
							},
							r = n && n["x-sentry-rate-limits"],
							o = n && n["retry-after"];
						if (r)
							for (const a of r.trim().split(",")) {
								const [t, e] = a.split(":", 2), n = parseInt(t, 10), r = 1e3 * (isNaN(n) ? 60 : n);
								if (e)
									for (const o of e.split(";")) s[o] = i + r;
								else s.all = i + r
							} else o ? s.all = i + function(t, e = Date.now()) {
								const n = parseInt(`${t}`, 10);
								if (!isNaN(n)) return 1e3 * n;
								const i = Date.parse(`${t}`);
								return isNaN(i) ? 6e4 : i - e
							}(o, i) : 429 === e && (s.all = i + 6e4);
						return s
					}(i, t), t)), (t => {
						throw a("network_error"), t
					})))).then((t => t), (t => {
						if (t instanceof T) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Skipped sending event because buffer is full."), a("queue_overflow"), Nt();
						throw t
					}))
				}
				return s.__sentry__baseTransport__ = !0, {
					send: s,
					flush: t => n.drain(t)
				}
			}

			function Le(t, e) {
				if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
			}
			const Me = "7.46.0";
			let qe;
			class He {
				constructor() {
					He.prototype.__init.call(this)
				}
				static __initStatic() {
					this.id = "FunctionToString"
				}
				__init() {
					this.name = He.id
				}
				setupOnce() {
					qe = Function.prototype.toString, Function.prototype.toString = function(...t) {
						const e = $(this) || this;
						return qe.apply(e, t)
					}
				}
			}
			He.__initStatic();
			const Fe = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
			class ze {
				static __initStatic() {
					this.id = "InboundFilters"
				}
				__init() {
					this.name = ze.id
				}
				constructor(t = {}) {
					this._options = t, ze.prototype.__init.call(this)
				}
				setupOnce(t, e) {
					const n = t => {
						const n = e();
						if (n) {
							const e = n.getIntegration(ze);
							if (e) {
								const i = n.getClient(),
									s = i ? i.getOptions() : {},
									r = function(t = {}, e = {}) {
										return {
											allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
											denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
											ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...Fe],
											ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
											ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
										}
									}(e._options, s);
								return function(t, e) {
									return e.ignoreInternal && function(t) {
										try {
											return "SentryError" === t.exception.values[0].type
										} catch (e) {}
										return !1
									}(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${pt(t)}`), !0) : function(t, e) {
										return !(t.type || !e || !e.length) && function(t) {
											if (t.message) return [t.message];
											if (t.exception) try {
												const {
													type: e = "",
													value: n = ""
												} = t.exception.values && t.exception.values[0] || {};
												return [`${n}`, `${e}: ${n}`]
											} catch (e) {
												return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error(`Cannot extract message for event ${pt(t)}`), []
											}
											return []
										}(t).some((t => G(t, e)))
									}(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${pt(t)}`), !0) : function(t, e) {
										if ("transaction" !== t.type || !e || !e.length) return !1;
										const n = t.transaction;
										return !!n && G(n, e)
									}(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${pt(t)}`), !0) : function(t, e) {
										if (!e || !e.length) return !1;
										const n = We(t);
										return !!n && G(n, e)
									}(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${pt(t)}.\nUrl: ${We(t)}`), !0) : ! function(t, e) {
										if (!e || !e.length) return !0;
										const n = We(t);
										return !n || G(n, e)
									}(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${pt(t)}.\nUrl: ${We(t)}`), !0)
								}(t, r) ? null : t
							}
						}
						return t
					};
					n.id = this.name, t(n)
				}
			}

			function We(t) {
				try {
					let n;
					try {
						n = t.exception.values[0].stacktrace.frames
					} catch (e) {}
					return n ? function(t = []) {
						for (let e = t.length - 1; e >= 0; e--) {
							const n = t[e];
							if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
						}
						return null
					}(n) : null
				} catch (n) {
					return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error(`Cannot extract url for event ${pt(t)}`), null
				}
			}
			ze.__initStatic();
			const Je = Object.freeze(Object.defineProperty({
					__proto__: null,
					FunctionToString: He,
					InboundFilters: ze
				}, Symbol.toStringTag, {
					value: "Module"
				})),
				Xe = m;
			let Ke = 0;

			function Ve() {
				return Ke > 0
			}

			function Qe(t, e = {}, n) {
				if ("function" != typeof t) return t;
				try {
					const e = t.__sentry_wrapped__;
					if (e) return e;
					if ($(t)) return t
				} catch (s) {
					return t
				}
				const i = function() {
					const i = Array.prototype.slice.call(arguments);
					try {
						n && "function" == typeof n && n.apply(this, arguments);
						const s = i.map((t => Qe(t, e)));
						return t.apply(this, s)
					} catch (r) {
						throw Ke++, setTimeout((() => {
							Ke--
						})), s = t => {
							t.addEventProcessor((t => (e.mechanism && (ht(t, void 0, void 0), ft(t, e.mechanism)), t.extra = {
								...t.extra,
								arguments: i
							}, t))), ke(r)
						}, ue().withScope(s), r
					}
					var s
				};
				try {
					for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e])
				} catch (r) {}
				C(i, t), O(t, "__sentry_wrapped__", i);
				try {
					Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
						get: () => t.name
					})
				} catch (r) {}
				return i
			}

			function Ze(t, e) {
				const n = en(t, e),
					i = {
						type: e && e.name,
						value: sn(e)
					};
				return n.length && (i.stacktrace = {
					frames: n
				}), void 0 === i.type && "" === i.value && (i.value = "Unrecoverable error caught"), i
			}

			function tn(t, e) {
				return {
					exception: {
						values: [Ze(t, e)]
					}
				}
			}

			function en(t, e) {
				const n = e.stacktrace || e.stack || "",
					i = function(t) {
						if (t) {
							if ("number" == typeof t.framesToPop) return t.framesToPop;
							if (nn.test(t.message)) return 1
						}
						return 0
					}(e);
				try {
					return t(n, i)
				} catch (s) {}
				return []
			}
			const nn = /Minified React error #\d+;/i;

			function sn(t) {
				const e = t && t.message;
				return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
			}

			function rn(t, e, n, a, c) {
				let d;
				if (r(e) && e.error) return tn(t, e.error);
				if (o(e) || s(e, "DOMException")) {
					const i = e;
					if ("stack" in e) d = tn(t, e);
					else {
						const e = i.name || (o(i) ? "DOMError" : "DOMException"),
							s = i.message ? `${e}: ${i.message}` : e;
						d = on(t, s, n, a), ht(d, s)
					}
					return "code" in i && (d.tags = {
						...d.tags,
						"DOMException.code": `${i.code}`
					}), d
				}
				return i(e) ? tn(t, e) : _(e) || u(e) ? (d = function(t, e, n, i) {
					const s = ue().getClient(),
						r = s && s.getOptions().normalizeDepth,
						o = {
							exception: {
								values: [{
									type: u(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
									value: `Non-Error ${i?"promise rejection":"exception"} captured with keys: ${L(e)}`
								}]
							},
							extra: {
								__serialized__: Tt(e, r)
							}
						};
					if (n) {
						const e = en(t, n);
						e.length && (o.exception.values[0].stacktrace = {
							frames: e
						})
					}
					return o
				}(t, e, n, c), ft(d, {
					synthetic: !0
				}), d) : (d = on(t, e, n, a), ht(d, `${e}`, void 0), ft(d, {
					synthetic: !0
				}), d)
			}

			function on(t, e, n, i) {
				const s = {
					message: e
				};
				if (i && n) {
					const i = en(t, n);
					i.length && (s.exception = {
						values: [{
							value: e,
							stacktrace: {
								frames: i
							}
						}]
					})
				}
				return s
			}
			const an = "Breadcrumbs";
			class cn {
				static __initStatic() {
					this.id = an
				}
				__init() {
					this.name = cn.id
				}
				constructor(t) {
					cn.prototype.__init.call(this), this.options = {
						console: !0,
						dom: !0,
						fetch: !0,
						history: !0,
						sentry: !0,
						xhr: !0,
						...t
					}
				}
				setupOnce() {
					var t;
					this.options.console && et("console", _n), this.options.dom && et("dom", (t = this.options.dom, function(e) {
						let n, i = "object" == typeof t ? t.serializeAttribute : void 0,
							s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
						s && s > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), s = 1024), "string" == typeof i && (i = [i]);
						try {
							const t = e.event;
							n = function(t) {
								return t && !!t.target
							}(t) ? S(t.target, {
								keyAttrs: i,
								maxStringLength: s
							}) : S(t, {
								keyAttrs: i,
								maxStringLength: s
							})
						} catch (r) {
							n = "<unknown>"
						}
						0 !== n.length && ue().addBreadcrumb({
							category: `ui.${e.name}`,
							message: n
						}, {
							event: e.event,
							name: e.name,
							global: e.global
						})
					})), this.options.xhr && et("xhr", un), this.options.fetch && et("fetch", dn), this.options.history && et("history", ln)
				}
				addSentryBreadcrumb(t) {
					this.options.sentry && ue().addBreadcrumb({
						category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
						event_id: t.event_id,
						level: t.level,
						message: pt(t)
					}, {
						event: t
					})
				}
			}

			function _n(t) {
				for (let i = 0; i < t.args.length; i++)
					if ("ref=Ref<" === t.args[i]) {
						t.args[i + 1] = "viewRef";
						break
					} const e = {
					category: "console",
					data: {
						arguments: t.args,
						logger: "console"
					},
					level: (n = t.level, "warn" === n ? "warning" : kt.includes(n) ? n : "log"),
					message: Y(t.args, " ")
				};
				var n;
				if ("assert" === t.level) {
					if (!1 !== t.args[0]) return;
					e.message = `Assertion failed: ${Y(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
				}
				ue().addBreadcrumb(e, {
					input: t.args,
					level: t.level
				})
			}

			function un(t) {
				const {
					startTimestamp: e,
					endTimestamp: n
				} = t;
				if (!e || !n || !t.xhr.__sentry_xhr__) return;
				const {
					method: i,
					url: s,
					status_code: r,
					body: o
				} = t.xhr.__sentry_xhr__, a = {
					method: i,
					url: s,
					status_code: r
				}, c = {
					xhr: t.xhr,
					input: o,
					startTimestamp: e,
					endTimestamp: n
				};
				ue().addBreadcrumb({
					category: "xhr",
					data: a,
					type: "http"
				}, c)
			}

			function dn(t) {
				const {
					startTimestamp: e,
					endTimestamp: n
				} = t;
				if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
					if (t.error) {
						const i = t.fetchData,
							s = {
								data: t.error,
								input: t.args,
								startTimestamp: e,
								endTimestamp: n
							};
						ue().addBreadcrumb({
							category: "fetch",
							data: i,
							level: "error",
							type: "http"
						}, s)
					} else {
						const i = {
								...t.fetchData,
								status_code: t.response && t.response.status
							},
							s = {
								input: t.args,
								response: t.response,
								startTimestamp: e,
								endTimestamp: n
							};
						ue().addBreadcrumb({
							category: "fetch",
							data: i,
							type: "http"
						}, s)
					}
			}

			function ln(t) {
				let e = t.from,
					n = t.to;
				const i = Ut(Xe.location.href);
				let s = Ut(e);
				const r = Ut(n);
				s.path || (s = i), i.protocol === r.protocol && i.host === r.host && (n = r.relative), i.protocol === s.protocol && i.host === s.host && (e = s.relative), ue().addBreadcrumb({
					category: "navigation",
					data: {
						from: e,
						to: n
					}
				})
			}
			cn.__initStatic();
			class pn extends $e {
				constructor(t) {
					const e = Xe.SENTRY_SDK_SOURCE || "npm";
					t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
						name: "sentry.javascript.browser",
						packages: [{
							name: `${e}:@sentry/browser`,
							version: Me
						}],
						version: Me
					}, super(t), t.sendClientReports && Xe.document && Xe.document.addEventListener("visibilitychange", (() => {
						"hidden" === Xe.document.visibilityState && this._flushOutcomes()
					}))
				}
				eventFromException(t, e) {
					return function(t, e, n, i) {
						const s = rn(t, e, n && n.syntheticException || void 0, i);
						return ft(s), s.level = "error", n && n.event_id && (s.event_id = n.event_id), Nt(s)
					}(this._options.stackParser, t, e, this._options.attachStacktrace)
				}
				eventFromMessage(t, e = "info", n) {
					return function(t, e, n = "info", i, s) {
						const r = on(t, e, i && i.syntheticException || void 0, s);
						return r.level = n, i && i.event_id && (r.event_id = i.event_id), Nt(r)
					}(this._options.stackParser, t, e, n, this._options.attachStacktrace)
				}
				sendEvent(t, e) {
					const n = this.getIntegrationById(an);
					n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
				}
				_prepareEvent(t, e, n) {
					return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
				}
				_flushOutcomes() {
					const t = this._clearOutcomes();
					if (0 === t.length) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("No outcomes to send"));
					if (!this._dsn) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("No dsn provided, will not send outcomes"));
					("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Sending outcomes:", t);
					const e = (n = t, Lt((i = this._options.tunnel && R(this._dsn)) ? {
						dsn: i
					} : {}, [
						[{
							type: "client_report"
						}, {
							timestamp: Ct(),
							discarded_events: n
						}]
					]));
					var n, i;
					this._sendEnvelope(e)
				}
			}
			let hn;

			function fn(t, e = function() {
				if (hn) return hn;
				if (K(Xe.fetch)) return hn = Xe.fetch.bind(Xe);
				const t = Xe.document;
				let e = Xe.fetch;
				if (t && "function" == typeof t.createElement) try {
					const n = t.createElement("iframe");
					n.hidden = !0, t.head.appendChild(n);
					const i = n.contentWindow;
					i && i.fetch && (e = i.fetch), t.head.removeChild(n)
				} catch (n) {
					("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
				}
				return hn = e.bind(Xe)
			}()) {
				let n = 0,
					i = 0;
				return Pe(t, (function(s) {
					const r = s.body.length;
					n += r, i++;
					const o = {
						body: s.body,
						method: "POST",
						referrerPolicy: "origin",
						headers: t.headers,
						keepalive: n <= 6e4 && i < 15,
						...t.fetchOptions
					};
					try {
						return e(t.url, o).then((t => (n -= r, i--, {
							statusCode: t.status,
							headers: {
								"x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": t.headers.get("Retry-After")
							}
						})))
					} catch (a) {
						return hn = void 0, n -= r, i--, xt(a)
					}
				}))
			}

			function mn(t) {
				return Pe(t, (function(e) {
					return new wt(((n, i) => {
						const s = new XMLHttpRequest;
						s.onerror = i, s.onreadystatechange = () => {
							4 === s.readyState && n({
								statusCode: s.status,
								headers: {
									"x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
									"retry-after": s.getResponseHeader("Retry-After")
								}
							})
						}, s.open("POST", t.url);
						for (const e in t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && s.setRequestHeader(e, t.headers[e]);
						s.send(e.body)
					}))
				}))
			}
			const gn = "?";

			function yn(t, e, n, i) {
				const s = {
					filename: t,
					function: e,
					in_app: !0
				};
				return void 0 !== n && (s.lineno = n), void 0 !== i && (s.colno = i), s
			}
			const En = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
				Sn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
				vn = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
				Tn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
				bn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
				Rn = F([30, t => {
					const e = En.exec(t);
					if (e) {
						if (e[2] && 0 === e[2].indexOf("eval")) {
							const t = Sn.exec(e[2]);
							t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
						}
						const [t, n] = Dn(e[1] || gn, e[2]);
						return yn(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
					}
				}], [50, t => {
					const e = vn.exec(t);
					if (e) {
						if (e[3] && e[3].indexOf(" > eval") > -1) {
							const t = Tn.exec(e[3]);
							t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
						}
						let t = e[3],
							n = e[1] || gn;
						return [n, t] = Dn(n, t), yn(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
					}
				}], [40, t => {
					const e = bn.exec(t);
					return e ? yn(e[2], e[1] || gn, +e[3], e[4] ? +e[4] : void 0) : void 0
				}]),
				Dn = (t, e) => {
					const n = -1 !== t.indexOf("safari-extension"),
						i = -1 !== t.indexOf("safari-web-extension");
					return n || i ? [-1 !== t.indexOf("@") ? t.split("@")[0] : gn, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
				};
			class Nn {
				static __initStatic() {
					this.id = "GlobalHandlers"
				}
				__init() {
					this.name = Nn.id
				}
				__init2() {
					this._installFunc = {
						onerror: xn,
						onunhandledrejection: wn
					}
				}
				constructor(t) {
					Nn.prototype.__init.call(this), Nn.prototype.__init2.call(this), this._options = {
						onerror: !0,
						onunhandledrejection: !0,
						...t
					}
				}
				setupOnce() {
					Error.stackTraceLimit = 50;
					const t = this._options;
					for (const n in t) {
						const i = this._installFunc[n];
						i && t[n] && (e = n, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`Global Handler attached: ${e}`), i(), this._installFunc[n] = void 0)
					}
					var e
				}
			}

			function xn() {
				et("error", (t => {
					const [e, n, i] = kn();
					if (!e.getIntegration(Nn)) return;
					const {
						msg: s,
						url: o,
						line: c,
						column: _,
						error: u
					} = t;
					if (Ve() || u && u.__sentry_own_request__) return;
					const d = void 0 === u && a(s) ? function(t, e, n, i) {
						let s = r(t) ? t.message : t,
							o = "Error";
						const a = s.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
						return a && (o = a[1], s = a[2]), Un({
							exception: {
								values: [{
									type: o,
									value: s
								}]
							}
						}, e, n, i)
					}(s, o, c, _) : Un(rn(n, u || s, void 0, i, !1), o, c, _);
					d.level = "error", Bn(e, u, d, "onerror")
				}))
			}

			function wn() {
				et("unhandledrejection", (t => {
					const [e, n, i] = kn();
					if (!e.getIntegration(Nn)) return;
					let s = t;
					try {
						"reason" in t ? s = t.reason : "detail" in t && "reason" in t.detail && (s = t.detail.reason)
					} catch (o) {}
					if (Ve() || s && s.__sentry_own_request__) return !0;
					const r = c(s) ? {
						exception: {
							values: [{
								type: "UnhandledRejection",
								value: `Non-Error promise rejection captured with value: ${String(s)}`
							}]
						}
					} : rn(n, s, void 0, i, !0);
					r.level = "error", Bn(e, s, r, "onunhandledrejection")
				}))
			}

			function Un(t, e, n, i) {
				const s = t.exception = t.exception || {},
					r = s.values = s.values || [],
					o = r[0] = r[0] || {},
					c = o.stacktrace = o.stacktrace || {},
					_ = c.frames = c.frames || [],
					u = isNaN(parseInt(i, 10)) ? void 0 : i,
					d = isNaN(parseInt(n, 10)) ? void 0 : n,
					l = a(e) && e.length > 0 ? e : function() {
						try {
							return E.document.location.href
						} catch (t) {
							return ""
						}
					}();
				return 0 === _.length && _.push({
					colno: u,
					filename: l,
					function: "?",
					in_app: !0,
					lineno: d
				}), t
			}

			function Bn(t, e, n, i) {
				ft(n, {
					handled: !1,
					type: i
				}), t.captureEvent(n, {
					originalException: e
				})
			}

			function kn() {
				const t = ue(),
					e = t.getClient(),
					n = e && e.getOptions() || {
						stackParser: () => [],
						attachStacktrace: !1
					};
				return [t, n.stackParser, n.attachStacktrace]
			}
			Nn.__initStatic();
			const Yn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
			class Gn {
				static __initStatic() {
					this.id = "TryCatch"
				}
				__init() {
					this.name = Gn.id
				}
				constructor(t) {
					Gn.prototype.__init.call(this), this._options = {
						XMLHttpRequest: !0,
						eventTarget: !0,
						requestAnimationFrame: !0,
						setInterval: !0,
						setTimeout: !0,
						...t
					}
				}
				setupOnce() {
					this._options.setTimeout && I(Xe, "setTimeout", In), this._options.setInterval && I(Xe, "setInterval", In), this._options.requestAnimationFrame && I(Xe, "requestAnimationFrame", On), this._options.XMLHttpRequest && "XMLHttpRequest" in Xe && I(XMLHttpRequest.prototype, "send", Cn);
					const t = this._options.eventTarget;
					t && (Array.isArray(t) ? t : Yn).forEach($n)
				}
			}

			function In(t) {
				return function(...e) {
					const n = e[0];
					return e[0] = Qe(n, {
						mechanism: {
							data: {
								function: W(t)
							},
							handled: !0,
							type: "instrument"
						}
					}), t.apply(this, e)
				}
			}

			function On(t) {
				return function(e) {
					return t.apply(this, [Qe(e, {
						mechanism: {
							data: {
								function: "requestAnimationFrame",
								handler: W(t)
							},
							handled: !0,
							type: "instrument"
						}
					})])
				}
			}

			function Cn(t) {
				return function(...e) {
					const n = this;
					return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t => {
						t in n && "function" == typeof n[t] && I(n, t, (function(e) {
							const n = {
									mechanism: {
										data: {
											function: t,
											handler: W(e)
										},
										handled: !0,
										type: "instrument"
									}
								},
								i = $(e);
							return i && (n.mechanism.data.handler = W(i)), Qe(e, n)
						}))
					})), t.apply(this, e)
				}
			}

			function $n(t) {
				const e = Xe,
					n = e[t] && e[t].prototype;
				n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (I(n, "addEventListener", (function(e) {
					return function(n, i, s) {
						try {
							"function" == typeof i.handleEvent && (i.handleEvent = Qe(i.handleEvent, {
								mechanism: {
									data: {
										function: "handleEvent",
										handler: W(i),
										target: t
									},
									handled: !0,
									type: "instrument"
								}
							}))
						} catch (r) {}
						return e.apply(this, [n, Qe(i, {
							mechanism: {
								data: {
									function: "addEventListener",
									handler: W(i),
									target: t
								},
								handled: !0,
								type: "instrument"
							}
						}), s])
					}
				})), I(n, "removeEventListener", (function(t) {
					return function(e, n, i) {
						const s = n;
						try {
							const n = s && s.__sentry_wrapped__;
							n && t.call(this, e, n, i)
						} catch (r) {}
						return t.call(this, e, s, i)
					}
				})))
			}
			Gn.__initStatic();
			class An {
				static __initStatic() {
					this.id = "LinkedErrors"
				}
				__init() {
					this.name = An.id
				}
				constructor(t = {}) {
					An.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
				}
				setupOnce() {
					const t = ue().getClient();
					t && re(((e, n) => {
						const i = ue().getIntegration(An);
						return i ? function(t, e, n, i, s) {
							if (!(i.exception && i.exception.values && s && h(s.originalException, Error))) return i;
							const r = jn(t, n, s.originalException, e);
							return i.exception.values = [...r, ...i.exception.values], i
						}(t.getOptions().stackParser, i._key, i._limit, e, n) : e
					}))
				}
			}

			function jn(t, e, n, i, s = []) {
				if (!h(n[i], Error) || s.length + 1 >= e) return s;
				const r = Ze(t, n[i]);
				return jn(t, e, n[i], i, [r, ...s])
			}
			An.__initStatic();
			class Pn {
				constructor() {
					Pn.prototype.__init.call(this)
				}
				static __initStatic() {
					this.id = "HttpContext"
				}
				__init() {
					this.name = Pn.id
				}
				setupOnce() {
					re((t => {
						if (ue().getIntegration(Pn)) {
							if (!Xe.navigator && !Xe.location && !Xe.document) return t;
							const e = t.request && t.request.url || Xe.location && Xe.location.href,
								{
									referrer: n
								} = Xe.document || {},
								{
									userAgent: i
								} = Xe.navigator || {},
								s = {
									...t.request && t.request.headers,
									...n && {
										Referer: n
									},
									...i && {
										"User-Agent": i
									}
								},
								r = {
									...t.request,
									...e && {
										url: e
									},
									headers: s
								};
							return {
								...t,
								request: r
							}
						}
						return t
					}))
				}
			}
			Pn.__initStatic();
			class Ln {
				constructor() {
					Ln.prototype.__init.call(this)
				}
				static __initStatic() {
					this.id = "Dedupe"
				}
				__init() {
					this.name = Ln.id
				}
				setupOnce(t, e) {
					const n = t => {
						if (t.type) return t;
						const n = e().getIntegration(Ln);
						if (n) {
							try {
								if (function(t, e) {
										return !(!e || ! function(t, e) {
											const n = t.message,
												i = e.message;
											return !(!n && !i || n && !i || !n && i || n !== i || !qn(t, e) || !Mn(t, e))
										}(t, e) && ! function(t, e) {
											const n = Hn(e),
												i = Hn(t);
											return !!(n && i && n.type === i.type && n.value === i.value && qn(t, e) && Mn(t, e))
										}(t, e))
									}(t, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Event dropped due to being a duplicate of previously captured event."), null
							} catch (i) {
								return n._previousEvent = t
							}
							return n._previousEvent = t
						}
						return t
					};
					n.id = this.name, t(n)
				}
			}

			function Mn(t, e) {
				let n = Fn(t),
					i = Fn(e);
				if (!n && !i) return !0;
				if (n && !i || !n && i) return !1;
				if (i.length !== n.length) return !1;
				for (let s = 0; s < i.length; s++) {
					const t = i[s],
						e = n[s];
					if (t.filename !== e.filename || t.lineno !== e.lineno || t.colno !== e.colno || t.function !== e.function) return !1
				}
				return !0
			}

			function qn(t, e) {
				let n = t.fingerprint,
					i = e.fingerprint;
				if (!n && !i) return !0;
				if (n && !i || !n && i) return !1;
				try {
					return !(n.join("") !== i.join(""))
				} catch (s) {
					return !1
				}
			}

			function Hn(t) {
				return t.exception && t.exception.values && t.exception.values[0]
			}

			function Fn(t) {
				const e = t.exception;
				if (e) try {
					return e.values[0].stacktrace.frames
				} catch (n) {
					return
				}
			}
			Ln.__initStatic();
			const zn = [new ze, new He, new Gn, new cn, new Nn, new An, new Ln, new Pn];

			function Wn(t) {
				t.startSession({
					ignoreDuration: !0
				}), t.captureSession()
			}
			const Jn = Object.freeze(Object.defineProperty({
				__proto__: null,
				Breadcrumbs: cn,
				Dedupe: Ln,
				GlobalHandlers: Nn,
				HttpContext: Pn,
				LinkedErrors: An,
				TryCatch: Gn
			}, Symbol.toStringTag, {
				value: "Module"
			}));

			function Xn(t) {
				let e, n = t[0],
					i = 1;
				for (; i < t.length;) {
					const s = t[i],
						r = t[i + 1];
					if (i += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
					"access" === s || "optionalAccess" === s ? (e = n, n = r(n)) : "call" !== s && "optionalCall" !== s || (n = r(((...t) => n.call(e, ...t))), e = void 0)
				}
				return n
			}

			function Kn(t) {
				const e = Xn([t, "call", t => t(), "access", t => t.getClient, "call", t => t(), "optionalAccess", t => t.getOptions, "call", t => t()]);
				return "sentry" !== (Xn([e, "optionalAccess", t => t.instrumenter]) || "sentry")
			}
			class Vn {
				static __initStatic() {
					this.id = "Express"
				}
				__init() {
					this.name = Vn.id
				}
				constructor(t = {}) {
					Vn.prototype.__init.call(this), this._router = t.router || t.app, this._methods = (Array.isArray(t.methods) ? t.methods : []).concat("use")
				}
				setupOnce(t, e) {
					this._router ? Kn(e) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Express Integration is skipped because of instrumenter configuration.") : (function(t, e = []) {
						e.forEach((e => function(t, e) {
							const n = t[e];
							return t[e] = function(...t) {
								return n.call(this, ... function(t, e) {
									return t.map((t => "function" == typeof t ? Qn(t, e) : Array.isArray(t) ? t.map((t => "function" == typeof t ? Qn(t, e) : t)) : t))
								}(t, e))
							}, t
						}(t, e)))
					}(this._router, this._methods), function(t) {
						const e = "settings" in t;
						e && void 0 === t._router && t.lazyrouter && t.lazyrouter();
						const n = e ? t._router : t;
						if (!n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."), void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.debug("Routing instrumentation is currently only supported in Express 4."));
						const i = Object.getPrototypeOf(n),
							s = i.process_params;
						i.process_params = function(t, e, n, i, r) {
							n._reconstructedRoute || (n._reconstructedRoute = "");
							const {
								layerRoutePath: o,
								isRegex: a,
								isArray: c,
								numExtraSegments: _
							} = function(t) {
								const e = Xn([t, "access", t => t.route, "optionalAccess", t => t.path]),
									n = d(e),
									i = Array.isArray(e);
								if (!e) return {
									isRegex: n,
									isArray: i,
									numExtraSegments: 0
								};
								const s = i ? Math.max(e.reduce(((t, e) => t + Bt(e.toString())), 0) - Bt(t.path || ""), 0) : 0,
									r = function(t, e) {
										return t ? e.map((t => t.toString())).join(",") : e && e.toString()
									}(i, e);
								return {
									layerRoutePath: r,
									isRegex: n,
									isArray: i,
									numExtraSegments: s
								}
							}(t);
							(o || a || c) && (n._hasParameters = !0);
							const u = (o || t.path || "").split("/").filter((t => t.length > 0 && (a || c || !t.includes("*")))).join("/");
							if (u && u.length > 0 && (n._reconstructedRoute += `/${u}${a?"/":""}`), Bt(n.originalUrl || "") + _ === Bt(n._reconstructedRoute)) {
								n._hasParameters || n._reconstructedRoute !== n.originalUrl && (n._reconstructedRoute = n.originalUrl);
								const t = i.__sentry_transaction;
								if (t && "custom" !== t.metadata.source) {
									const e = n._reconstructedRoute || "/";
									t.setName(... function(t, e = {}) {
										const n = t.method && t.method.toUpperCase();
										let i = "",
											s = "url";
										e.customRoute || t.route ? (i = e.customRoute || `${t.baseUrl||""}${t.route&&t.route.path}`, s = "route") : (t.originalUrl || t.url) && (i = (t.originalUrl || t.url || "").split(/[\?#]/, 1)[0]);
										let r = "";
										return e.method && n && (r += n), e.method && e.path && (r += " "), e.path && i && (r += i), [r, s]
									}(n, {
										path: !0,
										method: !0,
										customRoute: e
									}))
								}
							}
							return s.call(this, t, e, n, i, r)
						}
					}(this._router)) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("ExpressIntegration is missing an Express instance")
				}
			}

			function Qn(t, e) {
				const n = t.length;
				switch (n) {
					case 2:
						return function(n, i) {
							const s = i.__sentry_transaction;
							if (s) {
								const n = s.startChild({
									description: t.name,
									op: `middleware.express.${e}`
								});
								i.once("finish", (() => {
									n.finish()
								}))
							}
							return t.call(this, n, i)
						};
					case 3:
						return function(n, i, s) {
							const r = Xn([i.__sentry_transaction, "optionalAccess", t => t.startChild, "call", n => n({
								description: t.name,
								op: `middleware.express.${e}`
							})]);
							t.call(this, n, i, (function(...t) {
								Xn([r, "optionalAccess", t => t.finish, "call", t => t()]), s.call(this, ...t)
							}))
						};
					case 4:
						return function(n, i, s, r) {
							const o = Xn([s.__sentry_transaction, "optionalAccess", t => t.startChild, "call", n => n({
								description: t.name,
								op: `middleware.express.${e}`
							})]);
							t.call(this, n, i, s, (function(...t) {
								Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), r.call(this, ...t)
							}))
						};
					default:
						throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)
				}
			}
			Vn.__initStatic();
			class Zn {
				static __initStatic() {
					this.id = "Postgres"
				}
				__init() {
					this.name = Zn.id
				}
				constructor(t = {}) {
					Zn.prototype.__init.call(this), this._usePgNative = !!t.usePgNative
				}
				loadDependency() {
					return this._module = this._module || St("pg")
				}
				setupOnce(t, e) {
					if (Kn(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Postgres Integration is skipped because of instrumenter configuration."));
					const n = this.loadDependency();
					if (!n) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Postgres Integration was unable to require `pg` package."));
					if (this._usePgNative && !Xn([n, "access", t => t.native, "optionalAccess", t => t.Client])) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Postgres Integration was unable to access 'pg-native' bindings."));
					const {
						Client: i
					} = this._usePgNative ? n.native : n;
					I(i.prototype, "query", (function(t) {
						return function(n, i, s) {
							const r = Xn([e().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]),
								o = Xn([r, "optionalAccess", t => t.startChild, "call", t => t({
									description: "string" == typeof n ? n : n.text,
									op: "db"
								})]);
							if ("function" == typeof s) return t.call(this, n, i, (function(t, e) {
								Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), s(t, e)
							}));
							if ("function" == typeof i) return t.call(this, n, (function(t, e) {
								Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), i(t, e)
							}));
							const a = void 0 !== i ? t.call(this, n, i) : t.call(this, n);
							return l(a) ? a.then((t => (Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), t))) : (Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), a)
						}
					}))
				}
			}
			Zn.__initStatic();
			class ti {
				constructor() {
					ti.prototype.__init.call(this)
				}
				static __initStatic() {
					this.id = "Mysql"
				}
				__init() {
					this.name = ti.id
				}
				loadDependency() {
					return this._module = this._module || St("mysql/lib/Connection.js")
				}
				setupOnce(t, e) {
					if (Kn(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Mysql Integration is skipped because of instrumenter configuration."));
					const n = this.loadDependency();
					n ? I(n, "createQuery", (function(t) {
						return function(n, i, s) {
							const r = Xn([e().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]),
								o = Xn([r, "optionalAccess", t => t.startChild, "call", t => t({
									description: "string" == typeof n ? n : n.sql,
									op: "db"
								})]);
							return "function" == typeof s ? t.call(this, n, i, (function(t, e, n) {
								Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), s(t, e, n)
							})) : "function" == typeof i ? t.call(this, n, (function(t, e, n) {
								Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), i(t, e, n)
							})) : t.call(this, n, i, s)
						}
					})) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Mysql Integration was unable to require `mysql` package.")
				}
			}
			ti.__initStatic();
			const ei = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"],
				ni = {
					bulkWrite: ["operations"],
					countDocuments: ["query"],
					createIndex: ["fieldOrSpec"],
					createIndexes: ["indexSpecs"],
					deleteMany: ["filter"],
					deleteOne: ["filter"],
					distinct: ["key", "query"],
					dropIndex: ["indexName"],
					find: ["query"],
					findOne: ["query"],
					findOneAndDelete: ["filter"],
					findOneAndReplace: ["filter", "replacement"],
					findOneAndUpdate: ["filter", "update"],
					indexExists: ["indexes"],
					insertMany: ["docs"],
					insertOne: ["doc"],
					mapReduce: ["map", "reduce"],
					rename: ["newName"],
					replaceOne: ["filter", "doc"],
					updateMany: ["filter", "update"],
					updateOne: ["filter", "update"]
				};
			class ii {
				static __initStatic() {
					this.id = "Mongo"
				}
				__init() {
					this.name = ii.id
				}
				constructor(t = {}) {
					ii.prototype.__init.call(this), this._operations = Array.isArray(t.operations) ? t.operations : ei, this._describeOperations = !("describeOperations" in t) || t.describeOperations, this._useMongoose = !!t.useMongoose
				}
				loadDependency() {
					const t = this._useMongoose ? "mongoose" : "mongodb";
					return this._module = this._module || St(t)
				}
				setupOnce(t, e) {
					if (Kn(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Mongo Integration is skipped because of instrumenter configuration."));
					const n = this.loadDependency();
					if (n) this._instrumentOperations(n.Collection, this._operations, e);
					else {
						const t = this._useMongoose ? "mongoose" : "mongodb";
						("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error(`Mongo Integration was unable to require \`${t}\` package.`)
					}
				}
				_instrumentOperations(t, e, n) {
					e.forEach((e => this._patchOperation(t, e, n)))
				}
				_patchOperation(t, e, n) {
					if (!(e in t.prototype)) return;
					const i = this._getSpanContextFromOperationArguments.bind(this);
					I(t.prototype, e, (function(t) {
						return function(...s) {
							const r = s[s.length - 1],
								o = Xn([n().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]);
							if ("function" != typeof r || "mapReduce" === e && 2 === s.length) {
								const n = Xn([o, "optionalAccess", t => t.startChild, "call", t => t(i(this, e, s))]),
									r = t.call(this, ...s);
								if (l(r)) return r.then((t => (Xn([n, "optionalAccess", t => t.finish, "call", t => t()]), t)));
								if ((a = r) && "object" == typeof a && a.once && "function" == typeof a.once) {
									const t = r;
									try {
										t.once("close", (() => {
											Xn([n, "optionalAccess", t => t.finish, "call", t => t()])
										}))
									} catch (_) {
										Xn([n, "optionalAccess", t => t.finish, "call", t => t()])
									}
									return t
								}
								return Xn([n, "optionalAccess", t => t.finish, "call", t => t()]), r
							}
							var a;
							const c = Xn([o, "optionalAccess", t => t.startChild, "call", t => t(i(this, e, s.slice(0, -1)))]);
							return t.call(this, ...s.slice(0, -1), (function(t, e) {
								Xn([c, "optionalAccess", t => t.finish, "call", t => t()]), r(t, e)
							}))
						}
					}))
				}
				_getSpanContextFromOperationArguments(t, e, n) {
					const i = {
							collectionName: t.collectionName,
							dbName: t.dbName,
							namespace: t.namespace
						},
						s = {
							op: "db",
							description: e,
							data: i
						},
						r = ni[e],
						o = Array.isArray(this._describeOperations) ? this._describeOperations.includes(e) : this._describeOperations;
					if (!r || !o) return s;
					try {
						if ("mapReduce" === e) {
							const [t, e] = n;
							i[r[0]] = "string" == typeof t ? t : t.name || "<anonymous>", i[r[1]] = "string" == typeof e ? e : e.name || "<anonymous>"
						} else
							for (let t = 0; t < r.length; t++) i[r[t]] = JSON.stringify(n[t])
					} catch (a) {}
					return s
				}
			}
			ii.__initStatic();
			class si {
				static __initStatic() {
					this.id = "Prisma"
				}
				__init() {
					this.name = si.id
				}
				constructor(t = {}) {
					var e;
					si.prototype.__init.call(this), (e = t.client) && e.$use ? this._client = t.client : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)
				}
				setupOnce(t, e) {
					this._client ? Kn(e) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Prisma Integration is skipped because of instrumenter configuration.") : this._client.$use(((t, n) => {
						const i = Xn([e().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]),
							s = t.action,
							r = t.model,
							o = Xn([i, "optionalAccess", t => t.startChild, "call", t => t({
								description: r ? `${r} ${s}` : s,
								op: "db.sql.prisma"
							})]),
							a = n(t);
						return l(a) ? a.then((t => (Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), t))) : (Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), a)
					})) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("PrismaIntegration is missing a Prisma Client Instance")
				}
			}
			si.__initStatic();
			class ri {
				constructor() {
					ri.prototype.__init.call(this)
				}
				static __initStatic() {
					this.id = "GraphQL"
				}
				__init() {
					this.name = ri.id
				}
				loadDependency() {
					return this._module = this._module || St("graphql/execution/execute.js")
				}
				setupOnce(t, e) {
					if (Kn(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("GraphQL Integration is skipped because of instrumenter configuration."));
					const n = this.loadDependency();
					n ? I(n, "execute", (function(t) {
						return function(...n) {
							const i = e().getScope(),
								s = Xn([i, "optionalAccess", t => t.getSpan, "call", t => t()]),
								r = Xn([s, "optionalAccess", t => t.startChild, "call", t => t({
									description: "execute",
									op: "graphql.execute"
								})]);
							Xn([i, "optionalAccess", t => t.setSpan, "call", t => t(r)]);
							const o = t.call(this, ...n);
							return l(o) ? o.then((t => (Xn([r, "optionalAccess", t => t.finish, "call", t => t()]), Xn([i, "optionalAccess", t => t.setSpan, "call", t => t(s)]), t))) : (Xn([r, "optionalAccess", t => t.finish, "call", t => t()]), Xn([i, "optionalAccess", t => t.setSpan, "call", t => t(s)]), o)
						}
					})) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("GraphQL Integration was unable to require graphql/execution package.")
				}
			}
			ri.__initStatic();
			class oi {
				static __initStatic() {
					this.id = "Apollo"
				}
				__init() {
					this.name = oi.id
				}
				constructor(t = {
					useNestjs: !1
				}) {
					oi.prototype.__init.call(this), this._useNest = !!t.useNestjs
				}
				loadDependency() {
					return this._useNest ? this._module = this._module || St("@nestjs/graphql") : this._module = this._module || St("apollo-server-core"), this._module
				}
				setupOnce(t, e) {
					if (Kn(e))("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("Apollo Integration is skipped because of instrumenter configuration.");
					else if (this._useNest) {
						const t = this.loadDependency();
						if (!t) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package."));
						I(t.GraphQLFactory.prototype, "mergeWithSchema", (function(t) {
							return function(...n) {
								return I(this.resolversExplorerService, "explore", (function(t) {
									return function() {
										return ai(gt(t.call(this)), e)
									}
								})), t.call(this, ...n)
							}
						}))
					} else {
						const t = this.loadDependency();
						if (!t) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Apollo Integration was unable to require apollo-server-core package."));
						I(t.ApolloServerBase.prototype, "constructSchema", (function(t) {
							return function() {
								if (!this.config.resolvers) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this.config.schema ? (B.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."), B.warn()) : this.config.modules && B.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."), B.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")), t.call(this);
								const n = gt(this.config.resolvers);
								return this.config.resolvers = ai(n, e), t.call(this)
							}
						}))
					}
				}
			}

			function ai(t, e) {
				return t.map((t => (Object.keys(t).forEach((n => {
					Object.keys(t[n]).forEach((i => {
						"function" == typeof t[n][i] && function(t, e, n, i) {
							I(t[e], n, (function(t) {
								return function(...s) {
									const r = Xn([i().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]),
										o = Xn([r, "optionalAccess", t => t.startChild, "call", t => t({
											description: `${e}.${n}`,
											op: "graphql.resolve"
										})]),
										a = t.call(this, ...s);
									return l(a) ? a.then((t => (Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), t))) : (Xn([o, "optionalAccess", t => t.finish, "call", t => t()]), a)
								}
							}))
						}(t, n, i, e)
					}))
				})), t)))
			}
			oi.__initStatic();
			const ci = m,
				_i = (t, e, n) => {
					let i, s;
					return r => {
						e.value >= 0 && (r || n) && (s = e.value - (i || 0), (s || void 0 === i) && (i = e.value, e.delta = s, t(e)))
					}
				},
				ui = () => ci.__WEB_VITALS_POLYFILL__ ? ci.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
					const t = ci.performance.timing,
						e = ci.performance.navigation.type,
						n = {
							entryType: "navigation",
							startTime: 0,
							type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
						};
					for (const i in t) "navigationStart" !== i && "toJSON" !== i && (n[i] = Math.max(t[i] - t.navigationStart, 0));
					return n
				})()) : ci.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
				di = () => {
					const t = ui();
					return t && t.activationStart || 0
				},
				li = (t, e) => {
					const n = ui();
					let i = "navigate";
					return n && (i = ci.document.prerendering || di() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
						name: t,
						value: void 0 === e ? -1 : e,
						rating: "good",
						delta: 0,
						entries: [],
						id: `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
						navigationType: i
					}
				},
				pi = (t, e, n) => {
					try {
						if (PerformanceObserver.supportedEntryTypes.includes(t)) {
							const i = new PerformanceObserver((t => {
								e(t.getEntries())
							}));
							return i.observe(Object.assign({
								type: t,
								buffered: !0
							}, n || {})), i
						}
					} catch (i) {}
				},
				hi = (t, e) => {
					const n = i => {
						"pagehide" !== i.type && "hidden" !== ci.document.visibilityState || (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
					};
					addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
				};
			let fi = -1;
			const mi = () => (fi < 0 && (fi = "hidden" !== ci.document.visibilityState || ci.document.prerendering ? 1 / 0 : 0, hi((({
					timeStamp: t
				}) => {
					fi = t
				}), !0)), {
					get firstHiddenTime() {
						return fi
					}
				}),
				gi = {};

			function yi(t) {
				return "number" == typeof t && isFinite(t)
			}

			function Ei(t, {
				startTimestamp: e,
				...n
			}) {
				return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
					startTimestamp: e,
					...n
				})
			}

			function Si(t) {
				return t / 1e3
			}

			function vi() {
				return ci && ci.addEventListener && ci.performance
			}
			let Ti, bi, Ri = 0,
				Di = {};

			function Ni(t, e, n, i, s, r) {
				const o = r ? e[r] : e[`${n}End`],
					a = e[`${n}Start`];
				a && o && Ei(t, {
					op: "browser",
					description: s || n,
					startTimestamp: i + Si(a),
					endTimestamp: i + Si(o)
				})
			}
			const xi = ["localhost", /^\//],
				wi = {
					traceFetch: !0,
					traceXHR: !0,
					tracingOrigins: xi,
					tracePropagationTargets: xi
				},
				Ui = {
					...ve,
					markBackgroundTransactions: !0,
					routingInstrumentation: function(t, e = !0, n = !0) {
						if (!ci || !ci.location) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Could not initialize routing instrumentation due to invalid location"));
						let i, s = ci.location.href;
						e && (i = t({
							name: ci.location.pathname,
							startTimestamp: jt,
							op: "pageload",
							metadata: {
								source: "url"
							}
						})), n && et("history", (({
							to: e,
							from: n
						}) => {
							void 0 === n && s && -1 !== s.indexOf(e) ? s = void 0 : n !== e && (s = void 0, i && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Finishing current transaction with op: ${i.op}`), i.finish()), i = t({
								name: ci.location.pathname,
								op: "navigation",
								metadata: {
									source: "url"
								}
							}))
						}))
					},
					startTransactionOnLocationChange: !0,
					startTransactionOnPageLoad: !0,
					enableLongTask: !0,
					_experiments: {},
					...wi
				};
			class Bi {
				__init() {
					this.name = "BrowserTracing"
				}
				constructor(t) {
					Bi.prototype.__init.call(this), Be(), this.options = {
						...Ui,
						...t
					}, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = function() {
						const t = vi();
						if (t && jt) {
							t.mark && ci.performance.mark("sentry-tracing-init"), (t => {
								const e = mi(),
									n = li("FID");
								let i;
								const s = t => {
										t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), i(!0))
									},
									r = t => {
										t.forEach(s)
									},
									o = pi("first-input", r);
								i = _i((t => {
									const e = t.entries.pop();
									if (!e) return;
									const n = Si(jt),
										i = Si(e.startTime);
									("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding FID"), Di.fid = {
										value: t.value,
										unit: "millisecond"
									}, Di["mark.fid"] = {
										value: n + i,
										unit: "second"
									}
								}), n), o && hi((() => {
									r(o.takeRecords()), o.disconnect()
								}), !0)
							})();
							const e = (t => {
									const e = li("CLS", 0);
									let n, i = 0,
										s = [];
									const r = t => {
											t.forEach((t => {
												if (!t.hadRecentInput) {
													const r = s[0],
														o = s[s.length - 1];
													i && 0 !== s.length && t.startTime - o.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (i += t.value, s.push(t)) : (i = t.value, s = [t]), i > e.value && (e.value = i, e.entries = s, n && n())
												}
											}))
										},
										o = pi("layout-shift", r);
									if (o) {
										n = _i((t => {
											const e = t.entries.pop();
											e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding CLS"), Di.cls = {
												value: t.value,
												unit: ""
											}, bi = e)
										}), e);
										const t = () => {
											r(o.takeRecords()), n(!0)
										};
										return hi(t), t
									}
								})(),
								n = (t => {
									const e = mi(),
										n = li("LCP");
									let i;
									const s = t => {
											const s = t[t.length - 1];
											if (s) {
												const t = Math.max(s.startTime - di(), 0);
												t < e.firstHiddenTime && (n.value = t, n.entries = [s], i())
											}
										},
										r = pi("largest-contentful-paint", s);
									if (r) {
										i = _i((t => {
											const e = t.entries.pop();
											e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding LCP"), Di.lcp = {
												value: t.value,
												unit: "millisecond"
											}, Ti = e)
										}), n);
										const t = () => {
											gi[n.id] || (s(r.takeRecords()), r.disconnect(), gi[n.id] = !0, i(!0))
										};
										return ["keydown", "click"].forEach((e => {
											addEventListener(e, t, {
												once: !0,
												capture: !0
											})
										})), hi(t, !0), t
									}
								})();
							return () => {
								e && e(), n && n()
							}
						}
						return () => {}
					}(), this.options.enableLongTask && pi("longtask", (t => {
						for (const e of t) {
							const t = fe();
							if (!t) return;
							const n = Si(jt + e.startTime),
								i = Si(e.duration);
							t.startChild({
								description: "Main UI thread blocked",
								op: "ui.long-task",
								startTimestamp: n,
								endTimestamp: n + i
							})
						}
					})), this.options._experiments.enableInteractions && pi("event", (t => {
						for (const e of t) {
							const t = fe();
							if (!t) return;
							if ("click" === e.name) {
								const n = Si(jt + e.startTime),
									i = Si(e.duration);
								t.startChild({
									description: S(e.target),
									op: `ui.interaction.${e.name}`,
									startTimestamp: n,
									endTimestamp: n + i
								})
							}
						}
					}), {
						durationThreshold: 0
					})
				}
				setupOnce(t, e) {
					this._getCurrentHub = e;
					const {
						routingInstrumentation: n,
						startTransactionOnLocationChange: i,
						startTransactionOnPageLoad: s,
						markBackgroundTransactions: r,
						traceFetch: o,
						traceXHR: a,
						tracePropagationTargets: c,
						shouldCreateSpanForRequest: _,
						_experiments: u
					} = this.options;
					n((t => {
							const n = this._createRouteTransaction(t);
							return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
						}), s, i), r && (ci && ci.document ? ci.document.addEventListener("visibilitychange", (() => {
							const t = fe();
							if (ci.document.hidden && t) {
								const e = "cancelled";
								("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), t.status || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
							}
						})) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("[Tracing] Could not set up background tab detection due to lack of global document")), u.enableInteractions && this._registerInteractionListener(),
						function(e) {
							const {
								traceFetch: n,
								traceXHR: i,
								tracePropagationTargets: s,
								tracingOrigins: r,
								shouldCreateSpanForRequest: o
							} = {
								traceFetch: wi.traceFetch,
								traceXHR: wi.traceXHR,
								...e
							}, a = "function" == typeof o ? o : t => !0, c = t => function(t, e) {
								return G(t, e || xi)
							}(t, s || r), _ = {};
							n && et("fetch", (t => {
								! function(t, e, n, i) {
									if (!he() || !t.fetchData || !e(t.fetchData.url)) return;
									if (t.endTimestamp) {
										const e = t.fetchData.__span;
										if (!e) return;
										const n = i[e];
										return void(n && (t.response ? n.setHttpStatus(t.response.status) : t.error && n.setStatus("internal_error"), n.finish(), delete i[e]))
									}
									const s = ue().getScope(),
										r = s && s.getSpan(),
										o = r && r.transaction;
									if (r && o) {
										const e = r.startChild({
											data: {
												...t.fetchData,
												type: "fetch"
											},
											description: `${t.fetchData.method} ${t.fetchData.url}`,
											op: "http.client"
										});
										t.fetchData.__span = e.spanId, i[e.spanId] = e;
										const s = t.args[0];
										t.args[1] = t.args[1] || {};
										const a = t.args[1];
										n(t.fetchData.url) && (a.headers = function(t, e, n, i) {
											const s = Zt(e),
												r = n.toTraceparent(),
												o = "undefined" != typeof Request && h(t, Request) ? t.headers : i.headers;
											if (o) {
												if ("undefined" != typeof Headers && h(o, Headers)) {
													const t = new Headers(o);
													return t.append("sentry-trace", r), s && t.append(Kt, s), t
												}
												if (Array.isArray(o)) {
													const t = [...o, ["sentry-trace", r]];
													return s && t.push([Kt, s]), t
												} {
													const t = "baggage" in o ? o.baggage : void 0,
														e = [];
													return Array.isArray(t) ? e.push(...t) : t && e.push(t), s && e.push(s), {
														...o,
														"sentry-trace": r,
														baggage: e.length > 0 ? e.join(",") : void 0
													}
												}
											}
											return {
												"sentry-trace": r,
												baggage: s
											}
										}(s, o.getDynamicSamplingContext(), e, a))
									}
								}(t, a, c, _)
							})), i && et("xhr", (e => {
								! function(e, n, i, s) {
									if (!he() || e.xhr && e.xhr.__sentry_own_request__ || !(e.xhr && e.xhr.__sentry_xhr__ && n(e.xhr.__sentry_xhr__.url))) return;
									const r = e.xhr.__sentry_xhr__;
									if (e.endTimestamp) {
										const t = e.xhr.__sentry_xhr_span_id__;
										if (!t) return;
										const n = s[t];
										return void(n && (n.setHttpStatus(r.status_code), n.finish(), delete s[t]))
									}
									const o = ue().getScope(),
										a = o && o.getSpan(),
										c = a && a.transaction;
									if (a && c) {
										const n = a.startChild({
											data: {
												...r.data,
												type: "xhr",
												method: r.method,
												url: r.url
											},
											description: `${r.method} ${r.url}`,
											op: "http.client"
										});
										if (e.xhr.__sentry_xhr_span_id__ = n.spanId, s[e.xhr.__sentry_xhr_span_id__] = n, e.xhr.setRequestHeader && i(e.xhr.__sentry_xhr__.url)) try {
											e.xhr.setRequestHeader("sentry-trace", n.toTraceparent());
											const t = Zt(c.getDynamicSamplingContext());
											t && e.xhr.setRequestHeader(Kt, t)
										} catch (t) {}
									}
								}(e, a, c, _)
							}))
						}({
							traceFetch: o,
							traceXHR: a,
							tracePropagationTargets: c,
							shouldCreateSpanForRequest: _
						})
				}
				_createRouteTransaction(t) {
					if (!this._getCurrentHub) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
					const {
						beforeNavigate: e,
						idleTimeout: n,
						finalTimeout: i,
						heartbeatInterval: s
					} = this.options, r = "pageload" === t.op, o = r ? ki("sentry-trace") : null, c = r ? ki("baggage") : null, _ = o ? function(t) {
						const e = t.match(Pt);
						if (!t || !e) return;
						let n;
						return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
							traceId: e[1],
							parentSampled: n,
							parentSpanId: e[2]
						}
					}(o) : void 0, u = c ? function(t) {
						if (!a(t) && !Array.isArray(t)) return;
						let e = {};
						if (Array.isArray(t)) e = t.reduce(((t, e) => ({
							...t,
							...te(e)
						})), {});
						else {
							if (!t) return;
							e = te(t)
						}
						const n = Object.entries(e).reduce(((t, [e, n]) => (e.match(Qt) && (t[e.slice(Vt.length)] = n), t)), {});
						return Object.keys(n).length > 0 ? n : void 0
					}(c) : void 0, d = {
						...t,
						..._,
						metadata: {
							...t.metadata,
							dynamicSamplingContext: _ && !u ? {} : u
						},
						trimEnd: !0
					}, l = "function" == typeof e ? e(d) : d, p = void 0 === l ? {
						...d,
						sampled: !1
					} : l;
					p.metadata = p.name !== d.name ? {
						...p.metadata,
						source: "custom"
					} : p.metadata, this._latestRouteName = p.name, this._latestRouteSource = p.metadata && p.metadata.source, !1 === p.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Will not send ${p.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Tracing] Starting ${p.op} transaction on scope`);
					const h = this._getCurrentHub(),
						{
							location: f
						} = ci,
						m = Ue(h, p, n, i, !0, {
							location: f
						}, s);
					return m.registerBeforeFinishCallback((t => {
						this._collectWebVitals(),
							function(t) {
								const e = vi();
								if (!e || !ci.performance.getEntries || !jt) return;
								("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Tracing] Adding & adjusting spans using Performance API");
								const n = Si(jt),
									i = e.getEntries();
								let s, r;
								if (i.slice(Ri).forEach((e => {
										const i = Si(e.startTime),
											o = Si(e.duration);
										if (!("navigation" === t.op && n + i < t.startTimestamp)) switch (e.entryType) {
											case "navigation":
												! function(t, e, n) {
													["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((i => {
															Ni(t, e, i, n)
														})), Ni(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), Ni(t, e, "fetch", n, "cache", "domainLookupStart"), Ni(t, e, "domainLookup", n, "DNS"),
														function(t, e, n) {
															Ei(t, {
																op: "browser",
																description: "request",
																startTimestamp: n + Si(e.requestStart),
																endTimestamp: n + Si(e.responseEnd)
															}), Ei(t, {
																op: "browser",
																description: "response",
																startTimestamp: n + Si(e.responseStart),
																endTimestamp: n + Si(e.responseEnd)
															})
														}(t, e, n)
												}(t, e, n), s = n + Si(e.responseStart), r = n + Si(e.requestStart);
												break;
											case "mark":
											case "paint":
											case "measure": {
												! function(t, e, n, i, s) {
													const r = s + n,
														o = r + i;
													Ei(t, {
														description: e.name,
														endTimestamp: o,
														op: e.entryType,
														startTimestamp: r
													})
												}(t, e, i, o, n);
												const s = mi(),
													r = e.startTime < s.firstHiddenTime;
												"first-paint" === e.name && r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding FP"), Di.fp = {
													value: e.startTime,
													unit: "millisecond"
												}), "first-contentful-paint" === e.name && r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding FCP"), Di.fcp = {
													value: e.startTime,
													unit: "millisecond"
												});
												break
											}
											case "resource": {
												const s = e.name.replace(ci.location.origin, "");
												! function(t, e, n, i, s, r) {
													if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
													const o = {};
													"transferSize" in e && (o["Transfer Size"] = e.transferSize), "encodedBodySize" in e && (o["Encoded Body Size"] = e.encodedBodySize), "decodedBodySize" in e && (o["Decoded Body Size"] = e.decodedBodySize), "renderBlockingStatus" in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
													const a = r + i;
													Ei(t, {
														description: n,
														endTimestamp: a + s,
														op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
														startTimestamp: a,
														data: o
													})
												}(t, e, s, i, o, n);
												break
											}
										}
									})), Ri = Math.max(i.length - 1, 0), function(t) {
										const e = ci.navigator;
										if (!e) return;
										const n = e.connection;
										n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), yi(n.rtt) && (Di["connection.rtt"] = {
											value: n.rtt,
											unit: "millisecond"
										})), yi(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), yi(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
									}(t), "pageload" === t.op) {
									"number" == typeof s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding TTFB"), Di.ttfb = {
										value: 1e3 * (s - t.startTimestamp),
										unit: "millisecond"
									}, "number" == typeof r && r <= s && (Di["ttfb.requestTime"] = {
										value: 1e3 * (s - r),
										unit: "millisecond"
									})), ["fcp", "fp", "lcp"].forEach((e => {
										if (!Di[e] || n >= t.startTimestamp) return;
										const i = Di[e].value,
											s = n + Si(i),
											r = Math.abs(1e3 * (s - t.startTimestamp)),
											o = r - i;
										("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log(`[Measurements] Normalized ${e} from ${i} to ${r} (${o})`), Di[e].value = r
									}));
									const e = Di["mark.fid"];
									e && Di.fid && (Ei(t, {
											description: "first input delay",
											endTimestamp: e.value + Si(Di.fid.value),
											op: "ui.action",
											startTimestamp: e.value
										}), delete Di["mark.fid"]), "fcp" in Di || delete Di.cls, Object.keys(Di).forEach((e => {
											t.setMeasurement(e, Di[e].value, Di[e].unit)
										})),
										function(t) {
											Ti && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding LCP Data"), Ti.element && t.setTag("lcp.element", S(Ti.element)), Ti.id && t.setTag("lcp.id", Ti.id), Ti.url && t.setTag("lcp.url", Ti.url.trim().slice(0, 200)), t.setTag("lcp.size", Ti.size)), bi && bi.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.log("[Measurements] Adding CLS Data"), bi.sources.forEach(((e, n) => t.setTag(`cls.source.${n+1}`, S(e.node)))))
										}(t)
								}
								Ti = void 0, bi = void 0, Di = {}
							}(t)
					})), m
				}
				_registerInteractionListener() {
					let t;
					const e = () => {
						const {
							idleTimeout: e,
							finalTimeout: n,
							heartbeatInterval: i
						} = this.options, s = "ui.action.click", r = fe();
						if (r && r.op && ["navigation", "pageload"].includes(r.op)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`));
						if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`));
						if (!this._latestRouteName) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`));
						const o = this._getCurrentHub(),
							{
								location: a
							} = ci,
							c = {
								name: this._latestRouteName,
								op: s,
								trimEnd: !0,
								metadata: {
									source: this._latestRouteSource || "url"
								}
							};
						t = Ue(o, c, e, n, !0, {
							location: a
						}, i)
					};
					["click"].forEach((t => {
						addEventListener(t, e, {
							once: !1,
							capture: !0
						})
					}))
				}
			}

			function ki(t) {
				const e = (n = `meta[name=${t}]`, E.document && E.document.querySelector ? E.document.querySelector(n) : null);
				var n;
				return e ? e.getAttribute("content") : null
			}
			let Yi = {};
			Xe.Sentry && Xe.Sentry.Integrations && (Yi = Xe.Sentry.Integrations);
			const Gi = {
				...Yi,
				...Je,
				...Jn
			};
			("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (Be(), yt() && function() {
				const t = ce();
				if (!t.__SENTRY__) return;
				const n = {
						mongodb: () => new(Et(e, "./node/integrations/mongo").Mongo),
						mongoose: () => new(Et(e, "./node/integrations/mongo").Mongo)({
							mongoose: !0
						}),
						mysql: () => new(Et(e, "./node/integrations/mysql").Mysql),
						pg: () => new(Et(e, "./node/integrations/postgres").Postgres)
					},
					i = Object.keys(n).filter((t => !!St(t))).map((t => {
						try {
							return n[t]()
						} catch (e) {
							return
						}
					})).filter((t => t));
				i.length > 0 && (t.__SENTRY__.integrations = [...t.__SENTRY__.integrations || [], ...i])
			}()),
			function(t = {}) {
				void 0 === t.defaultIntegrations && (t.defaultIntegrations = zn), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), Xe.SENTRY_RELEASE && Xe.SENTRY_RELEASE.id && (t.release = Xe.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
				const e = {
					...t,
					stackParser: (n = t.stackParser || Rn, Array.isArray(n) ? F(...n) : n),
					integrations: Ie(t),
					transport: t.transport || (X() ? fn : mn)
				};
				var n;
				! function(t, e) {
					!0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? B.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
					const n = ue();
					n.getScope().update(e.initialScope);
					const i = new t(e);
					n.bindClient(i)
				}(pn, e), t.autoSessionTracking && function() {
					if (void 0 === Xe.document) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
					const t = ue();
					t.captureSession && (Wn(t), et("history", (({
						from: t,
						to: e
					}) => {
						void 0 !== t && t !== e && Wn(ue())
					})))
				}()
			}({
				dsn: location.host.includes("prts") ? "https://b8fa071a70cd455f9e63c105e9be7050@mt.mooncell.wiki/2" : "https://dae44b0169d14d9cab6a30a81c292fd4@mt.mooncell.wiki/8",
				integrations: [new Bi, new Gi.Breadcrumbs({
					console: !1
				})],
				tracesSampleRate: 1e-4,
				sampleRate: .01
			}), window.Sentry = {
				showReportDialog: function(t = {}, e = ue()) {
					if (!Xe.document) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Global document not defined in showReportDialog call"));
					const {
						client: n,
						scope: i
					} = e.getStackTop(), s = t.dsn || n && n.getDsn();
					if (!s) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("DSN not configured for showReportDialog call"));
					i && (t.user = {
						...i.getUser(),
						...t.user
					}), t.eventId || (t.eventId = e.lastEventId());
					const r = Xe.document.createElement("script");
					r.async = !0, r.src = function(t, e) {
						const n = N(t),
							i = `${Ye(n)}embed/error-page/`;
						let s = `dsn=${R(n)}`;
						for (const r in e)
							if ("dsn" !== r)
								if ("user" === r) {
									const t = e.user;
									if (!t) continue;
									t.name && (s += `&name=${encodeURIComponent(t.name)}`), t.email && (s += `&email=${encodeURIComponent(t.email)}`)
								} else s += `&${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`;
						return `${i}?${s}`
					}(s, t), t.onLoad && (r.onload = t.onLoad);
					const o = Xe.document.head || Xe.document.body;
					o ? o.appendChild(r) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && B.error("Not injecting report dialog. No injection point found in HTML")
				},
				captureException: ke
			}
		}
	}, function() {
		return e || (0, t[n(t)[0]])((e = {
			exports: {}
		}).exports, e), e.exports
	});
export default i();