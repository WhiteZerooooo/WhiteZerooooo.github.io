import {
	c as e,
	F as o,
	C as n,
	i as r,
	d as t,
	p as l,
	a,
	r as i,
	w as s,
	b as d,
	o as c,
	e as u,
	f as p,
	g as h,
	u as v,
	h as b,
	j as f,
	k as g,
	l as m,
	m as x,
	n as y,
	q as w,
	s as C,
	t as S,
	v as z,
	x as k,
	y as $,
	z as P,
	A as R,
	B as T,
	T as B,
	D as F,
	E as M,
	G as O,
	H as I,
	I as A,
	J as D,
	V as H,
	K as E,
	L,
	M as _,
	N as j,
	O as N,
	P as W,
	Q as V,
	R as U,
	S as K,
	U as G,
	W as q,
	X as Y,
	Y as X,
	Z,
	_ as Q,
	$ as J,
	a0 as ee,
	a1 as oe,
	a2 as ne,
	a3 as re,
	a4 as te,
	a5 as le,
	a6 as ae,
	a7 as ie,
	a8 as se,
	a9 as de,
	aa as ce,
	ab as ue,
	ac as pe,
	ad as he,
	ae as ve,
	af as be,
	ag as fe,
	ah as ge,
	ai as me,
	aj as xe,
	ak as ye,
	al as we,
	am as Ce,
	an as Se,
	ao as ze,
	ap as ke,
	aq as $e,
	ar as Pe,
	as as Re,
	at as Te,
	au as Be,
	av as Fe,
	aw as Me,
	ax as Oe
} from "./vendor.js";

function Ie(e, o = [], n) {
	const r = {};
	return o.forEach((o => {
		r[o] = e[o]
	})), Object.assign(r, n)
}

function Ae(r, t = !0, l = []) {
	return r.forEach((r => {
		if (null !== r)
			if ("object" == typeof r)
				if (Array.isArray(r)) Ae(r, t, l);
				else if (r.type === o) {
			if (null === r.children) return;
			Array.isArray(r.children) && Ae(r.children, t, l)
		} else r.type !== n && l.push(r);
		else "string" != typeof r && "number" != typeof r || l.push(e(String(r)))
	})), l
}

function De(e, ...o) {
	if (!Array.isArray(e)) return e(...o);
	e.forEach((e => De(e, ...o)))
}
const He = (o, ...n) => "function" == typeof o ? o(...n) : "string" == typeof o ? e(o) : "number" == typeof o ? e(String(o)) : null;

function Ee(e, o) {
	console.error(`[naive/${e}]: ${o}`)
}

function Le(e, o) {
	throw new Error(`[naive/${e}]: ${o}`)
}

function _e(e) {
	switch (typeof e) {
		case "string":
			return e || void 0;
		case "number":
			return String(e);
		default:
			return
	}
}

function je(e, o = "default", n = undefined) {
	const r = e[o];
	if (!r) return Ee("getFirstSlotVNode", `slot[${o}] is empty`), null;
	const t = Ae(r(n));
	return 1 === t.length ? t[0] : (Ee("getFirstSlotVNode", `slot[${o}] should have exactly one child`), null)
}

function Ne(e) {
	return o => {
		e.value = o ? o.$el : null
	}
}

function We(e) {
	return e.some((e => !r(e) || e.type !== n && !(e.type === o && !We(e.children)))) ? e : null
}

function Ve(e, o) {
	return e && We(e()) || o()
}

function Ue(e, o) {
	return o(e && We(e()) || null)
}

function Ke(e) {
	return !(e && We(e()))
}

function Ge(e) {
	const o = e.filter((e => void 0 !== e));
	if (0 !== o.length) return 1 === o.length ? o[0] : o => {
		e.forEach((e => {
			e && e(o)
		}))
	}
}
const qe = t({
		render() {
			var e, o;
			return null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e)
		}
	}),
	Ye = /^(\d|\.)+$/,
	Xe = /(\d|\.)+/;

function Ze(e, {
	c: o = 1,
	offset: n = 0,
	attachPx: r = !0
} = {}) {
	if ("number" == typeof e) {
		const r = (e + n) * o;
		return 0 === r ? "0" : `${r}px`
	}
	if ("string" == typeof e) {
		if (Ye.test(e)) {
			const t = (Number(e) + n) * o;
			return r ? 0 === t ? "0" : `${t}px` : `${t}`
		} {
			const r = Xe.exec(e);
			return r ? e.replace(Xe, String((Number(r[0]) + n) * o)) : e
		}
	}
	return e
}

function Qe(e) {
	return e.replace(/#|\(|\)|,|\s/g, "_")
}

function Je(e, o) {
	return e + ("default" === o ? "" : o.replace(/^[a-z]/, (e => e.toUpperCase())))
}
Je("abc", "def");
const eo = ".n-",
	oo = a(),
	no = l({
		blockPrefix: eo,
		elementPrefix: "__",
		modifierPrefix: "--"
	});
oo.use(no);
const {
	c: ro,
	find: to
} = oo, {
	cB: lo,
	cE: ao,
	cM: io,
	cNotM: so
} = no;

function co(e) {
	return ro((({
		props: {
			bPrefix: e
		}
	}) => `${e||eo}modal, ${e||eo}drawer`), [e])
}

function uo(e) {
	return ro((({
		props: {
			bPrefix: e
		}
	}) => `${e||eo}popover`), [e])
}
const po = (...e) => ro(">", [lo(...e)]);
let ho;
const vo = "undefined" != typeof document && "undefined" != typeof window,
	bo = new WeakSet,
	fo = "n-internal-select-menu",
	go = "n-internal-select-menu-body",
	mo = "n-modal-body",
	xo = "n-drawer-body",
	yo = "n-popover-body",
	wo = "__disabled__";

function Co(e) {
	const o = d(mo, null),
		n = d(xo, null),
		r = d(yo, null),
		t = d(go, null),
		l = i();
	if ("undefined" != typeof document) {
		l.value = document.fullscreenElement;
		const e = () => {
			l.value = document.fullscreenElement
		};
		c((() => {
			u("fullscreenchange", document, e)
		})), p((() => {
			h("fullscreenchange", document, e)
		}))
	}
	return v((() => {
		var a;
		const {
			to: i
		} = e;
		return void 0 !== i ? !1 === i ? wo : !0 === i ? l.value || "body" : i : (null == o ? void 0 : o.value) ? null !== (a = o.value.$el) && void 0 !== a ? a : o.value : (null == n ? void 0 : n.value) ? n.value : (null == r ? void 0 : r.value) ? r.value : (null == t ? void 0 : t.value) ? t.value : null != i ? i : l.value || "body"
	}))
}
Co.tdkey = wo, Co.propTo = {
	type: [String, Object, Boolean],
	default: void 0
};
let So = !1;

function zo(e, o) {
	o && (c((() => {
		const {
			value: n
		} = e;
		n && b.registerHandler(n, o)
	})), p((() => {
		const {
			value: o
		} = e;
		o && b.unregisterHandler(o)
	})))
}

function ko(e) {
	const o = {
		isDeactivated: !1
	};
	let n = !1;
	return f((() => {
		o.isDeactivated = !1, n ? e() : n = !0
	})), g((() => {
		o.isDeactivated = !0, n || (n = !0)
	})), o
}
const $o = "n-form-item";

function Po(e, {
	defaultSize: o = "medium",
	mergedSize: n,
	mergedDisabled: r
} = {}) {
	const t = d($o, null);
	m($o, null);
	const l = x(n ? () => n(t) : () => {
			const {
				size: n
			} = e;
			if (n) return n;
			if (t) {
				const {
					mergedSize: e
				} = t;
				if (void 0 !== e.value) return e.value
			}
			return o
		}),
		a = x(r ? () => r(t) : () => {
			const {
				disabled: o
			} = e;
			return void 0 !== o ? o : !!t && t.disabled.value
		}),
		i = x((() => {
			const {
				status: o
			} = e;
			return o || (null == t ? void 0 : t.mergedValidationStatus.value)
		}));
	return p((() => {
		t && t.restoreValidation()
	})), {
		mergedSizeRef: l,
		mergedDisabledRef: a,
		mergedStatusRef: i,
		nTriggerFormBlur() {
			t && t.handleContentBlur()
		},
		nTriggerFormChange() {
			t && t.handleContentChange()
		},
		nTriggerFormFocus() {
			t && t.handleContentFocus()
		},
		nTriggerFormInput() {
			t && t.handleContentInput()
		}
	}
}
const Ro = {
		fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
		fontWeight: "400",
		fontWeightStrong: "500",
		cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
		cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
		cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
		borderRadius: "3px",
		borderRadiusSmall: "2px",
		fontSize: "14px",
		fontSizeMini: "12px",
		fontSizeTiny: "12px",
		fontSizeSmall: "14px",
		fontSizeMedium: "14px",
		fontSizeLarge: "15px",
		fontSizeHuge: "16px",
		lineHeight: "1.6",
		heightMini: "16px",
		heightTiny: "22px",
		heightSmall: "28px",
		heightMedium: "34px",
		heightLarge: "40px",
		heightHuge: "46px"
	},
	{
		fontSize: To,
		fontFamily: Bo,
		lineHeight: Fo
	} = Ro,
	Mo = ro("body", `\n margin: 0;\n font-size: ${To};\n font-family: ${Bo};\n line-height: ${Fo};\n -webkit-text-size-adjust: 100%;\n -webkit-tap-highlight-color: transparent;\n`, [ro("input", "\n font-family: inherit;\n font-size: inherit;\n ")]),
	Oo = "n-config-provider",
	Io = "naive-ui-style";

function Ao(e, o, n, r, t, l) {
	const a = y(),
		i = d(Oo, null);
	if (n) {
		const e = () => {
			const e = null == l ? void 0 : l.value;
			n.mount({
				id: void 0 === e ? o : e + o,
				head: !0,
				props: {
					bPrefix: e ? `.${e}-` : void 0
				},
				anchorMetaName: Io,
				ssr: a
			}), (null == i ? void 0 : i.preflightStyleDisabled) || Mo.mount({
				id: "n-global",
				head: !0,
				anchorMetaName: Io,
				ssr: a
			})
		};
		a ? e() : w(e)
	}
	return x((() => {
		var o;
		const {
			theme: {
				common: n,
				self: l,
				peers: a = {}
			} = {},
			themeOverrides: s = {},
			builtinThemeOverrides: d = {}
		} = t, {
			common: c,
			peers: u
		} = s, {
			common: p,
			[e]: {
				common: h,
				self: v,
				peers: b = {}
			} = {}
		} = (null == i ? void 0 : i.mergedThemeRef.value) || {}, {
			common: f,
			[e]: g = {}
		} = (null == i ? void 0 : i.mergedThemeOverridesRef.value) || {}, {
			common: m,
			peers: x = {}
		} = g, y = C({}, n || h || p || r.common, f, m, c);
		return {
			common: y,
			self: C(null === (o = l || v || r.self) || void 0 === o ? void 0 : o(y), d, g, s),
			peers: C({}, r.peers, b, a),
			peerOverrides: C({}, d.peers, x, u)
		}
	}))
}
Ao.props = {
	theme: Object,
	themeOverrides: Object,
	builtinThemeOverrides: Object
};
const Do = "n";

function Ho(e = {}, o = {
	defaultBordered: !0
}) {
	const n = d(Oo, null);
	return {
		inlineThemeDisabled: null == n ? void 0 : n.inlineThemeDisabled,
		mergedRtlRef: null == n ? void 0 : n.mergedRtlRef,
		mergedComponentPropsRef: null == n ? void 0 : n.mergedComponentPropsRef,
		mergedBreakpointsRef: null == n ? void 0 : n.mergedBreakpointsRef,
		mergedBorderedRef: x((() => {
			var r, t;
			const {
				bordered: l
			} = e;
			return void 0 !== l ? l : null === (t = null !== (r = null == n ? void 0 : n.mergedBorderedRef.value) && void 0 !== r ? r : o.defaultBordered) || void 0 === t || t
		})),
		mergedClsPrefixRef: x((() => (null == n ? void 0 : n.mergedClsPrefixRef.value) || Do)),
		namespaceRef: x((() => null == n ? void 0 : n.mergedNamespaceRef.value))
	}
}
const Eo = {
		name: "zh-CN",
		global: {
			undo: "撤销",
			redo: "重做",
			confirm: "确认",
			clear: "清除"
		},
		Popconfirm: {
			positiveText: "确认",
			negativeText: "取消"
		},
		Cascader: {
			placeholder: "请选择",
			loading: "加载中",
			loadingRequiredMessage: e => `加载全部 ${e} 的子节点后才可选中`
		},
		Time: {
			dateFormat: "yyyy-MM-dd",
			dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
		},
		DatePicker: {
			yearFormat: "yyyy年",
			monthFormat: "MMM",
			dayFormat: "eeeeee",
			yearTypeFormat: "yyyy",
			monthTypeFormat: "yyyy-MM",
			dateFormat: "yyyy-MM-dd",
			dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
			quarterFormat: "yyyy-qqq",
			clear: "清除",
			now: "此刻",
			confirm: "确认",
			selectTime: "选择时间",
			selectDate: "选择日期",
			datePlaceholder: "选择日期",
			datetimePlaceholder: "选择日期时间",
			monthPlaceholder: "选择月份",
			yearPlaceholder: "选择年份",
			quarterPlaceholder: "选择季度",
			startDatePlaceholder: "开始日期",
			endDatePlaceholder: "结束日期",
			startDatetimePlaceholder: "开始日期时间",
			endDatetimePlaceholder: "结束日期时间",
			startMonthPlaceholder: "开始月份",
			endMonthPlaceholder: "结束月份",
			monthBeforeYear: !1,
			firstDayOfWeek: 0,
			today: "今天"
		},
		DataTable: {
			checkTableAll: "选择全部表格数据",
			uncheckTableAll: "取消选择全部表格数据",
			confirm: "确认",
			clear: "重置"
		},
		LegacyTransfer: {
			sourceTitle: "源项",
			targetTitle: "目标项"
		},
		Transfer: {
			selectAll: "全选",
			clearAll: "清除",
			unselectAll: "取消全选",
			total: e => `共 ${e} 项`,
			selected: e => `已选 ${e} 项`
		},
		Empty: {
			description: "无数据"
		},
		Select: {
			placeholder: "请选择"
		},
		TimePicker: {
			placeholder: "请选择时间",
			positiveText: "确认",
			negativeText: "取消",
			now: "此刻"
		},
		Pagination: {
			goto: "跳至",
			selectionSuffix: "页"
		},
		DynamicTags: {
			add: "添加"
		},
		Log: {
			loading: "加载中"
		},
		Input: {
			placeholder: "请输入"
		},
		InputNumber: {
			placeholder: "请输入"
		},
		DynamicInput: {
			create: "添加"
		},
		ThemeEditor: {
			title: "主题编辑器",
			clearAllVars: "清除全部变量",
			clearSearch: "清除搜索",
			filterCompName: "过滤组件名",
			filterVarName: "过滤变量名",
			import: "导入",
			export: "导出",
			restore: "恢复默认"
		},
		Image: {
			tipPrevious: "上一张（←）",
			tipNext: "下一张（→）",
			tipCounterclockwise: "向左旋转",
			tipClockwise: "向右旋转",
			tipZoomOut: "缩小",
			tipZoomIn: "放大",
			tipClose: "关闭（Esc）",
			tipOriginalSize: "缩放到原始尺寸"
		}
	},
	Lo = {
		name: "en-US",
		global: {
			undo: "Undo",
			redo: "Redo",
			confirm: "Confirm",
			clear: "Clear"
		},
		Popconfirm: {
			positiveText: "Confirm",
			negativeText: "Cancel"
		},
		Cascader: {
			placeholder: "Please Select",
			loading: "Loading",
			loadingRequiredMessage: e => `Please load all ${e}'s descendants before checking it.`
		},
		Time: {
			dateFormat: "yyyy-MM-dd",
			dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
		},
		DatePicker: {
			yearFormat: "yyyy",
			monthFormat: "MMM",
			dayFormat: "eeeeee",
			yearTypeFormat: "yyyy",
			monthTypeFormat: "yyyy-MM",
			dateFormat: "yyyy-MM-dd",
			dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
			quarterFormat: "yyyy-qqq",
			clear: "Clear",
			now: "Now",
			confirm: "Confirm",
			selectTime: "Select Time",
			selectDate: "Select Date",
			datePlaceholder: "Select Date",
			datetimePlaceholder: "Select Date and Time",
			monthPlaceholder: "Select Month",
			yearPlaceholder: "Select Year",
			quarterPlaceholder: "Select Quarter",
			startDatePlaceholder: "Start Date",
			endDatePlaceholder: "End Date",
			startDatetimePlaceholder: "Start Date and Time",
			endDatetimePlaceholder: "End Date and Time",
			startMonthPlaceholder: "Start Month",
			endMonthPlaceholder: "End Month",
			monthBeforeYear: !0,
			firstDayOfWeek: 6,
			today: "Today"
		},
		DataTable: {
			checkTableAll: "Select all in the table",
			uncheckTableAll: "Unselect all in the table",
			confirm: "Confirm",
			clear: "Clear"
		},
		LegacyTransfer: {
			sourceTitle: "Source",
			targetTitle: "Target"
		},
		Transfer: {
			selectAll: "Select all",
			unselectAll: "Unselect all",
			clearAll: "Clear",
			total: e => `Total ${e} items`,
			selected: e => `${e} items selected`
		},
		Empty: {
			description: "No Data"
		},
		Select: {
			placeholder: "Please Select"
		},
		TimePicker: {
			placeholder: "Select Time",
			positiveText: "OK",
			negativeText: "Cancel",
			now: "Now"
		},
		Pagination: {
			goto: "Goto",
			selectionSuffix: "page"
		},
		DynamicTags: {
			add: "Add"
		},
		Log: {
			loading: "Loading"
		},
		Input: {
			placeholder: "Please Input"
		},
		InputNumber: {
			placeholder: "Please Input"
		},
		DynamicInput: {
			create: "Create"
		},
		ThemeEditor: {
			title: "Theme Editor",
			clearAllVars: "Clear All Variables",
			clearSearch: "Clear Search",
			filterCompName: "Filter Component Name",
			filterVarName: "Filter Variable Name",
			import: "Import",
			export: "Export",
			restore: "Reset to Default"
		},
		Image: {
			tipPrevious: "Previous picture (←)",
			tipNext: "Next picture (→)",
			tipCounterclockwise: "Counterclockwise",
			tipClockwise: "Clockwise",
			tipZoomOut: "Zoom out",
			tipZoomIn: "Zoom in",
			tipClose: "Close (Esc)",
			tipOriginalSize: "Zoom to original size"
		}
	},
	_o = {
		name: "en-US",
		locale: S
	};

function jo(e) {
	const {
		mergedLocaleRef: o,
		mergedDateLocaleRef: n
	} = d(Oo, null) || {}, r = x((() => {
		var n, r;
		return null !== (r = null === (n = null == o ? void 0 : o.value) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : Lo[e]
	}));
	return {
		dateLocaleRef: x((() => {
			var e;
			return null !== (e = null == n ? void 0 : n.value) && void 0 !== e ? e : _o
		})),
		localeRef: r
	}
}

function No(e, o, n) {
	if (!o) return;
	const r = y(),
		t = d(Oo, null),
		l = () => {
			const l = null == n ? void 0 : n.value;
			o.mount({
				id: void 0 === l ? e : l + e,
				head: !0,
				anchorMetaName: Io,
				props: {
					bPrefix: l ? `.${l}-` : void 0
				},
				ssr: r
			}), (null == t ? void 0 : t.preflightStyleDisabled) || Mo.mount({
				id: "n-global",
				head: !0,
				anchorMetaName: Io,
				ssr: r
			})
		};
	r ? l() : w(l)
}

function Wo(e, o, n, r) {
	var t;
	n || Le("useThemeClass", "cssVarsRef is not passed");
	const l = null === (t = d(Oo, null)) || void 0 === t ? void 0 : t.mergedThemeHashRef,
		a = i(""),
		s = y();
	let c;
	const u = `__${e}`;
	return z((() => {
		(() => {
			let e = u;
			const t = o ? o.value : void 0,
				i = null == l ? void 0 : l.value;
			i && (e += "-" + i), t && (e += "-" + t);
			const {
				themeOverrides: d,
				builtinThemeOverrides: p
			} = r;
			d && (e += "-" + k(JSON.stringify(d))), p && (e += "-" + k(JSON.stringify(p))), a.value = e, c = () => {
				const o = n.value;
				let r = "";
				for (const e in o) r += `${e}: ${o[e]};`;
				ro(`.${e}`, r).mount({
					id: e,
					ssr: s
				}), c = void 0
			}
		})()
	})), {
		themeClass: a,
		onRender: () => {
			null == c || c()
		}
	}
}

function Vo(e, o, n) {
	if (!o) return;
	const r = y(),
		t = x((() => {
			const {
				value: n
			} = o;
			if (n) return n[e] || void 0
		})),
		l = () => {
			z((() => {
				const {
					value: o
				} = n, l = `${o}${e}Rtl`;
				if ($(l, r)) return;
				const {
					value: a
				} = t;
				a && a.style.mount({
					id: l,
					head: !0,
					anchorMetaName: Io,
					props: {
						bPrefix: o ? `.${o}-` : void 0
					},
					ssr: r
				})
			}))
		};
	return r ? l() : w(l), t
}
const Uo = t({
	name: "Add",
	render: () => P("svg", {
		width: "512",
		height: "512",
		viewBox: "0 0 512 512",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, P("path", {
		d: "M256 112V400M400 256H112",
		stroke: "currentColor",
		"stroke-width": "32",
		"stroke-linecap": "round",
		"stroke-linejoin": "round"
	}))
});

function Ko(e, o) {
	return t({
		name: R(e),
		setup() {
			var n;
			const r = null === (n = d(Oo, null)) || void 0 === n ? void 0 : n.mergedIconsRef;
			return () => {
				var n;
				const t = null === (n = null == r ? void 0 : r.value) || void 0 === n ? void 0 : n[e];
				return t ? t() : o
			}
		}
	})
}
const Go = t({
		name: "Checkmark",
		render: () => P("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 16 16"
		}, P("g", {
			fill: "none"
		}, P("path", {
			d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
			fill: "currentColor"
		})))
	}),
	qo = t({
		name: "ChevronRight",
		render: () => P("svg", {
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, P("path", {
			d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
			fill: "currentColor"
		}))
	}),
	Yo = Ko("close", P("svg", {
		viewBox: "0 0 12 12",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": !0
	}, P("g", {
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd"
	}, P("g", {
		fill: "currentColor",
		"fill-rule": "nonzero"
	}, P("path", {
		d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
	}))))),
	Xo = t({
		name: "Eye",
		render: () => P("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 512 512"
		}, P("path", {
			d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32"
		}), P("circle", {
			cx: "256",
			cy: "256",
			r: "80",
			fill: "none",
			stroke: "currentColor",
			"stroke-miterlimit": "10",
			"stroke-width": "32"
		}))
	}),
	Zo = t({
		name: "EyeOff",
		render: () => P("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 512 512"
		}, P("path", {
			d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
			fill: "currentColor"
		}), P("path", {
			d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
			fill: "currentColor"
		}), P("path", {
			d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
			fill: "currentColor"
		}), P("path", {
			d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
			fill: "currentColor"
		}), P("path", {
			d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
			fill: "currentColor"
		}))
	}),
	Qo = t({
		name: "Empty",
		render: () => P("svg", {
			viewBox: "0 0 28 28",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, P("path", {
			d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
			fill: "currentColor"
		}), P("path", {
			d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
			fill: "currentColor"
		}))
	}),
	Jo = t({
		name: "ChevronDown",
		render: () => P("svg", {
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, P("path", {
			d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
			fill: "currentColor"
		}))
	}),
	en = Ko("clear", P("svg", {
		viewBox: "0 0 16 16",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg"
	}, P("g", {
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd"
	}, P("g", {
		fill: "currentColor",
		"fill-rule": "nonzero"
	}, P("path", {
		d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
	}))))),
	on = t({
		name: "BaseIconSwitchTransition",
		setup(e, {
			slots: o
		}) {
			const n = T();
			return () => P(B, {
				name: "icon-switch-transition",
				appear: n.value
			}, o)
		}
	}),
	nn = t({
		name: "FadeInExpandTransition",
		props: {
			appear: Boolean,
			group: Boolean,
			mode: String,
			onLeave: Function,
			onAfterLeave: Function,
			onAfterEnter: Function,
			width: Boolean,
			reverse: Boolean
		},
		setup(e, {
			slots: o
		}) {
			function n(o) {
				e.width ? o.style.maxWidth = `${o.offsetWidth}px` : o.style.maxHeight = `${o.offsetHeight}px`, o.offsetWidth
			}

			function r(o) {
				e.width ? o.style.maxWidth = "0" : o.style.maxHeight = "0", o.offsetWidth;
				const {
					onLeave: n
				} = e;
				n && n()
			}

			function t(o) {
				e.width ? o.style.maxWidth = "" : o.style.maxHeight = "";
				const {
					onAfterLeave: n
				} = e;
				n && n()
			}

			function l(o) {
				if (o.style.transition = "none", e.width) {
					const e = o.offsetWidth;
					o.style.maxWidth = "0", o.offsetWidth, o.style.transition = "", o.style.maxWidth = `${e}px`
				} else if (e.reverse) o.style.maxHeight = `${o.offsetHeight}px`, o.offsetHeight, o.style.transition = "", o.style.maxHeight = "0";
				else {
					const e = o.offsetHeight;
					o.style.maxHeight = "0", o.offsetWidth, o.style.transition = "", o.style.maxHeight = `${e}px`
				}
				o.offsetWidth
			}

			function a(o) {
				var n;
				e.width ? o.style.maxWidth = "" : e.reverse || (o.style.maxHeight = ""), null === (n = e.onAfterEnter) || void 0 === n || n.call(e)
			}
			return () => {
				const i = e.group ? F : B;
				return P(i, {
					name: e.width ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
					mode: e.mode,
					appear: e.appear,
					onEnter: l,
					onAfterEnter: a,
					onBeforeLeave: n,
					onLeave: r,
					onAfterLeave: t
				}, o)
			}
		}
	}),
	rn = lo("base-icon", "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n", [ro("svg", "\n height: 1em;\n width: 1em;\n ")]),
	tn = t({
		name: "BaseIcon",
		props: {
			role: String,
			ariaLabel: String,
			ariaDisabled: {
				type: Boolean,
				default: void 0
			},
			ariaHidden: {
				type: Boolean,
				default: void 0
			},
			clsPrefix: {
				type: String,
				required: !0
			},
			onClick: Function,
			onMousedown: Function,
			onMouseup: Function
		},
		setup(e) {
			No("-base-icon", rn, M(e, "clsPrefix"))
		},
		render() {
			return P("i", {
				class: `${this.clsPrefix}-base-icon`,
				onClick: this.onClick,
				onMousedown: this.onMousedown,
				onMouseup: this.onMouseup,
				role: this.role,
				"aria-label": this.ariaLabel,
				"aria-hidden": this.ariaHidden,
				"aria-disabled": this.ariaDisabled
			}, this.$slots)
		}
	}),
	ln = lo("base-close", "\n display: flex;\n align-items: center;\n justify-content: center;\n cursor: pointer;\n background-color: transparent;\n color: var(--n-close-icon-color);\n border-radius: var(--n-close-border-radius);\n height: var(--n-close-size);\n width: var(--n-close-size);\n font-size: var(--n-close-icon-size);\n outline: none;\n border: none;\n position: relative;\n padding: 0;\n", [io("absolute", "\n height: var(--n-close-icon-size);\n width: var(--n-close-icon-size);\n "), ro("&::before", '\n content: "";\n position: absolute;\n width: var(--n-close-size);\n height: var(--n-close-size);\n left: 50%;\n top: 50%;\n transform: translateY(-50%) translateX(-50%);\n transition: inherit;\n border-radius: inherit;\n '), so("disabled", [ro("&:hover", "\n color: var(--n-close-icon-color-hover);\n "), ro("&:hover::before", "\n background-color: var(--n-close-color-hover);\n "), ro("&:focus::before", "\n background-color: var(--n-close-color-hover);\n "), ro("&:active", "\n color: var(--n-close-icon-color-pressed);\n "), ro("&:active::before", "\n background-color: var(--n-close-color-pressed);\n ")]), io("disabled", "\n cursor: not-allowed;\n color: var(--n-close-icon-color-disabled);\n background-color: transparent;\n "), io("round", [ro("&::before", "\n border-radius: 50%;\n ")])]),
	an = t({
		name: "BaseClose",
		props: {
			isButtonTag: {
				type: Boolean,
				default: !0
			},
			clsPrefix: {
				type: String,
				required: !0
			},
			disabled: {
				type: Boolean,
				default: void 0
			},
			focusable: {
				type: Boolean,
				default: !0
			},
			round: Boolean,
			onClick: Function,
			absolute: Boolean
		},
		setup: e => (No("-base-close", ln, M(e, "clsPrefix")), () => {
			const {
				clsPrefix: o,
				disabled: n,
				absolute: r,
				round: t,
				isButtonTag: l
			} = e;
			return P(l ? "button" : "div", {
				type: l ? "button" : void 0,
				tabindex: n || !e.focusable ? -1 : 0,
				"aria-disabled": n,
				"aria-label": "close",
				role: l ? void 0 : "button",
				disabled: n,
				class: [`${o}-base-close`, r && `${o}-base-close--absolute`, n && `${o}-base-close--disabled`, t && `${o}-base-close--round`],
				onMousedown: o => {
					e.focusable || o.preventDefault()
				},
				onClick: e.onClick
			}, P(tn, {
				clsPrefix: o
			}, {
				default: () => P(Yo, null)
			}))
		})
	}),
	sn = t({
		props: {
			onFocus: Function,
			onBlur: Function
		},
		setup: e => () => P("div", {
			style: "width: 0; height: 0",
			tabindex: 0,
			onFocus: e.onFocus,
			onBlur: e.onBlur
		})
	}),
	{
		cubicBezierEaseInOut: dn
	} = Ro;

function cn({
	originalTransform: e = "",
	left: o = 0,
	top: n = 0,
	transition: r = `all .3s ${dn} !important`
} = {}) {
	return [ro("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
		transform: e + " scale(0.75)",
		left: o,
		top: n,
		opacity: 0
	}), ro("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
		transform: `scale(1) ${e}`,
		left: o,
		top: n,
		opacity: 1
	}), ro("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
		transformOrigin: "center",
		position: "absolute",
		left: o,
		top: n,
		transition: r
	})]
}
const un = ro([ro("@keyframes loading-container-rotate", "\n to {\n -webkit-transform: rotate(360deg);\n transform: rotate(360deg);\n }\n "), ro("@keyframes loading-layer-rotate", "\n 12.5% {\n -webkit-transform: rotate(135deg);\n transform: rotate(135deg);\n }\n 25% {\n -webkit-transform: rotate(270deg);\n transform: rotate(270deg);\n }\n 37.5% {\n -webkit-transform: rotate(405deg);\n transform: rotate(405deg);\n }\n 50% {\n -webkit-transform: rotate(540deg);\n transform: rotate(540deg);\n }\n 62.5% {\n -webkit-transform: rotate(675deg);\n transform: rotate(675deg);\n }\n 75% {\n -webkit-transform: rotate(810deg);\n transform: rotate(810deg);\n }\n 87.5% {\n -webkit-transform: rotate(945deg);\n transform: rotate(945deg);\n }\n 100% {\n -webkit-transform: rotate(1080deg);\n transform: rotate(1080deg);\n } \n "), ro("@keyframes loading-left-spin", "\n from {\n -webkit-transform: rotate(265deg);\n transform: rotate(265deg);\n }\n 50% {\n -webkit-transform: rotate(130deg);\n transform: rotate(130deg);\n }\n to {\n -webkit-transform: rotate(265deg);\n transform: rotate(265deg);\n }\n "), ro("@keyframes loading-right-spin", "\n from {\n -webkit-transform: rotate(-265deg);\n transform: rotate(-265deg);\n }\n 50% {\n -webkit-transform: rotate(-130deg);\n transform: rotate(-130deg);\n }\n to {\n -webkit-transform: rotate(-265deg);\n transform: rotate(-265deg);\n }\n "), lo("base-loading", "\n position: relative;\n line-height: 0;\n width: 1em;\n height: 1em;\n ", [ao("transition-wrapper", "\n position: absolute;\n width: 100%;\n height: 100%;\n ", [cn()]), ao("container", "\n display: inline-flex;\n position: relative;\n direction: ltr;\n line-height: 0;\n animation: loading-container-rotate 1568.2352941176ms linear infinite;\n font-size: 0;\n letter-spacing: 0;\n white-space: nowrap;\n opacity: 1;\n width: 100%;\n height: 100%;\n ", [ao("svg", "\n stroke: var(--n-text-color);\n fill: transparent;\n position: absolute;\n height: 100%;\n overflow: hidden;\n "), ao("container-layer", "\n position: absolute;\n width: 100%;\n height: 100%;\n animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n ", [ao("container-layer-left", "\n display: inline-flex;\n position: relative;\n width: 50%;\n height: 100%;\n overflow: hidden;\n ", [ao("svg", "\n animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n width: 200%;\n ")]), ao("container-layer-patch", "\n position: absolute;\n top: 0;\n left: 47.5%;\n box-sizing: border-box;\n width: 5%;\n height: 100%;\n overflow: hidden;\n ", [ao("svg", "\n left: -900%;\n width: 2000%;\n transform: rotate(180deg);\n ")]), ao("container-layer-right", "\n display: inline-flex;\n position: relative;\n width: 50%;\n height: 100%;\n overflow: hidden;\n ", [ao("svg", "\n animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n left: -100%;\n width: 200%;\n ")])])]), ao("placeholder", "\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n ", [cn({
		left: "50%",
		top: "50%",
		originalTransform: "translateX(-50%) translateY(-50%)"
	})])])]),
	pn = {
		strokeWidth: {
			type: Number,
			default: 28
		},
		stroke: {
			type: String,
			default: void 0
		}
	},
	hn = t({
		name: "BaseLoading",
		props: Object.assign({
			clsPrefix: {
				type: String,
				required: !0
			},
			show: {
				type: Boolean,
				default: !0
			},
			scale: {
				type: Number,
				default: 1
			},
			radius: {
				type: Number,
				default: 100
			}
		}, pn),
		setup(e) {
			No("-base-loading", un, M(e, "clsPrefix"))
		},
		render() {
			const {
				clsPrefix: e,
				radius: o,
				strokeWidth: n,
				stroke: r,
				scale: t
			} = this, l = o / t;
			return P("div", {
				class: `${e}-base-loading`,
				role: "img",
				"aria-label": "loading"
			}, P(on, null, {
				default: () => this.show ? P("div", {
					key: "icon",
					class: `${e}-base-loading__transition-wrapper`
				}, P("div", {
					class: `${e}-base-loading__container`
				}, P("div", {
					class: `${e}-base-loading__container-layer`
				}, P("div", {
					class: `${e}-base-loading__container-layer-left`
				}, P("svg", {
					class: `${e}-base-loading__svg`,
					viewBox: `0 0 ${2*l} ${2*l}`,
					xmlns: "http://www.w3.org/2000/svg",
					style: {
						color: r
					}
				}, P("circle", {
					fill: "none",
					stroke: "currentColor",
					"stroke-width": n,
					"stroke-linecap": "round",
					cx: l,
					cy: l,
					r: o - n / 2,
					"stroke-dasharray": 4.91 * o,
					"stroke-dashoffset": 2.46 * o
				}))), P("div", {
					class: `${e}-base-loading__container-layer-patch`
				}, P("svg", {
					class: `${e}-base-loading__svg`,
					viewBox: `0 0 ${2*l} ${2*l}`,
					xmlns: "http://www.w3.org/2000/svg",
					style: {
						color: r
					}
				}, P("circle", {
					fill: "none",
					stroke: "currentColor",
					"stroke-width": n,
					"stroke-linecap": "round",
					cx: l,
					cy: l,
					r: o - n / 2,
					"stroke-dasharray": 4.91 * o,
					"stroke-dashoffset": 2.46 * o
				}))), P("div", {
					class: `${e}-base-loading__container-layer-right`
				}, P("svg", {
					class: `${e}-base-loading__svg`,
					viewBox: `0 0 ${2*l} ${2*l}`,
					xmlns: "http://www.w3.org/2000/svg",
					style: {
						color: r
					}
				}, P("circle", {
					fill: "none",
					stroke: "currentColor",
					"stroke-width": n,
					"stroke-linecap": "round",
					cx: l,
					cy: l,
					r: o - n / 2,
					"stroke-dasharray": 4.91 * o,
					"stroke-dashoffset": 2.46 * o
				})))))) : P("div", {
					key: "placeholder",
					class: `${e}-base-loading__placeholder`
				}, this.$slots)
			}))
		}
	}),
	vn = "#FFF",
	bn = "#fff",
	fn = "0.24",
	gn = "0.18",
	mn = "0.6",
	xn = O(vn),
	yn = O("#000"),
	wn = "rgba(" + yn.slice(0, 3).join(", ") + ", ";

function Cn(e) {
	return wn + String(e) + ")"
}

function Sn(e) {
	const o = Array.from(yn);
	return o[3] = Number(e), A(xn, o)
}
const zn = Object.assign(Object.assign({
		name: "common"
	}, Ro), {
		baseColor: vn,
		primaryColor: "#18a058",
		primaryColorHover: "#36ad6a",
		primaryColorPressed: "#0c7a43",
		primaryColorSuppl: "#36ad6a",
		infoColor: "#2080f0",
		infoColorHover: "#4098fc",
		infoColorPressed: "#1060c9",
		infoColorSuppl: "#4098fc",
		successColor: "#18a058",
		successColorHover: "#36ad6a",
		successColorPressed: "#0c7a43",
		successColorSuppl: "#36ad6a",
		warningColor: "#f0a020",
		warningColorHover: "#fcb040",
		warningColorPressed: "#c97c10",
		warningColorSuppl: "#fcb040",
		errorColor: "#d03050",
		errorColorHover: "#de576d",
		errorColorPressed: "#ab1f3f",
		errorColorSuppl: "#de576d",
		textColorBase: "#000",
		textColor1: "rgb(31, 34, 37)",
		textColor2: "rgb(51, 54, 57)",
		textColor3: "rgb(118, 124, 130)",
		textColorDisabled: Sn(fn),
		placeholderColor: Sn(fn),
		placeholderColorDisabled: Sn(gn),
		iconColor: Sn(fn),
		iconColorHover: I(Sn(fn), {
			lightness: .75
		}),
		iconColorPressed: I(Sn(fn), {
			lightness: .9
		}),
		iconColorDisabled: Sn(gn),
		opacity1: "0.82",
		opacity2: "0.72",
		opacity3: "0.38",
		opacity4: fn,
		opacity5: gn,
		dividerColor: "rgb(239, 239, 245)",
		borderColor: "rgb(224, 224, 230)",
		closeIconColor: Sn(Number(mn)),
		closeIconColorHover: Sn(Number(mn)),
		closeIconColorPressed: Sn(Number(mn)),
		closeColorHover: "rgba(0, 0, 0, .09)",
		closeColorPressed: "rgba(0, 0, 0, .13)",
		clearColor: Sn(fn),
		clearColorHover: I(Sn(fn), {
			lightness: .75
		}),
		clearColorPressed: I(Sn(fn), {
			lightness: .9
		}),
		scrollbarColor: Cn("0.25"),
		scrollbarColorHover: Cn("0.4"),
		scrollbarWidth: "5px",
		scrollbarHeight: "5px",
		scrollbarBorderRadius: "5px",
		progressRailColor: Sn(".08"),
		railColor: "rgb(219, 219, 223)",
		popoverColor: "#fff",
		tableColor: bn,
		cardColor: bn,
		modalColor: "#fff",
		bodyColor: "#fff",
		tagColor: "#eee",
		avatarColor: Sn("0.2"),
		invertedColor: "rgb(0, 20, 40)",
		inputColor: Sn("0"),
		codeColor: "rgb(244, 244, 248)",
		tabColor: "rgb(247, 247, 250)",
		actionColor: "rgb(250, 250, 252)",
		tableHeaderColor: "rgb(250, 250, 252)",
		hoverColor: "rgb(243, 243, 245)",
		tableColorHover: "rgba(0, 0, 100, 0.03)",
		tableColorStriped: "rgba(0, 0, 100, 0.02)",
		pressedColor: "rgb(237, 237, 239)",
		opacityDisabled: "0.5",
		inputColorDisabled: "rgb(250, 250, 252)",
		buttonColor2: "rgba(46, 51, 56, .05)",
		buttonColor2Hover: "rgba(46, 51, 56, .09)",
		buttonColor2Pressed: "rgba(46, 51, 56, .13)",
		boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
		boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
		boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
	}),
	kn = {
		iconSizeSmall: "34px",
		iconSizeMedium: "40px",
		iconSizeLarge: "46px",
		iconSizeHuge: "52px"
	},
	$n = {
		name: "Empty",
		common: zn,
		self: e => {
			const {
				textColorDisabled: o,
				iconColor: n,
				textColor2: r,
				fontSizeSmall: t,
				fontSizeMedium: l,
				fontSizeLarge: a,
				fontSizeHuge: i
			} = e;
			return Object.assign(Object.assign({}, kn), {
				fontSizeSmall: t,
				fontSizeMedium: l,
				fontSizeLarge: a,
				fontSizeHuge: i,
				textColor: o,
				iconColor: n,
				extraTextColor: r
			})
		}
	},
	Pn = lo("empty", "\n display: flex;\n flex-direction: column;\n align-items: center;\n font-size: var(--n-font-size);\n", [ao("icon", "\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n line-height: var(--n-icon-size);\n color: var(--n-icon-color);\n transition:\n color .3s var(--n-bezier);\n ", [ro("+", [ao("description", "\n margin-top: 8px;\n ")])]), ao("description", "\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n "), ao("extra", "\n text-align: center;\n transition: color .3s var(--n-bezier);\n margin-top: 12px;\n color: var(--n-extra-text-color);\n ")]),
	Rn = Object.assign(Object.assign({}, Ao.props), {
		description: String,
		showDescription: {
			type: Boolean,
			default: !0
		},
		showIcon: {
			type: Boolean,
			default: !0
		},
		size: {
			type: String,
			default: "medium"
		},
		renderIcon: Function
	}),
	Tn = t({
		name: "Empty",
		props: Rn,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: n
			} = Ho(e), r = Ao("Empty", "-empty", Pn, $n, e, o), {
				localeRef: t
			} = jo("Empty"), l = d(Oo, null), a = x((() => {
				var o, n, r;
				return null !== (o = e.description) && void 0 !== o ? o : null === (r = null === (n = null == l ? void 0 : l.mergedComponentPropsRef.value) || void 0 === n ? void 0 : n.Empty) || void 0 === r ? void 0 : r.description
			})), i = x((() => {
				var e, o;
				return (null === (o = null === (e = null == l ? void 0 : l.mergedComponentPropsRef.value) || void 0 === e ? void 0 : e.Empty) || void 0 === o ? void 0 : o.renderIcon) || (() => P(Qo, null))
			})), s = x((() => {
				const {
					size: o
				} = e, {
					common: {
						cubicBezierEaseInOut: n
					},
					self: {
						[Je("iconSize", o)]: t,
						[Je("fontSize", o)]: l,
						textColor: a,
						iconColor: i,
						extraTextColor: s
					}
				} = r.value;
				return {
					"--n-icon-size": t,
					"--n-font-size": l,
					"--n-bezier": n,
					"--n-text-color": a,
					"--n-icon-color": i,
					"--n-extra-text-color": s
				}
			})), c = n ? Wo("empty", x((() => {
				let o = "";
				const {
					size: n
				} = e;
				return o += n[0], o
			})), s, e) : void 0;
			return {
				mergedClsPrefix: o,
				mergedRenderIcon: i,
				localizedDescription: x((() => a.value || t.value.description)),
				cssVars: n ? void 0 : s,
				themeClass: null == c ? void 0 : c.themeClass,
				onRender: null == c ? void 0 : c.onRender
			}
		},
		render() {
			const {
				$slots: e,
				mergedClsPrefix: o,
				onRender: n
			} = this;
			return null == n || n(), P("div", {
				class: [`${o}-empty`, this.themeClass],
				style: this.cssVars
			}, this.showIcon ? P("div", {
				class: `${o}-empty__icon`
			}, e.icon ? e.icon() : P(tn, {
				clsPrefix: o
			}, {
				default: this.mergedRenderIcon
			})) : null, this.showDescription ? P("div", {
				class: `${o}-empty__description`
			}, e.default ? e.default() : this.localizedDescription) : null, e.extra ? P("div", {
				class: `${o}-empty__extra`
			}, e.extra()) : null)
		}
	}),
	Bn = {
		name: "Scrollbar",
		common: zn,
		self: e => {
			const {
				scrollbarColor: o,
				scrollbarColorHover: n
			} = e;
			return {
				color: o,
				colorHover: n
			}
		}
	},
	{
		cubicBezierEaseInOut: Fn
	} = Ro,
	Mn = lo("scrollbar", "\n overflow: hidden;\n position: relative;\n z-index: auto;\n height: 100%;\n width: 100%;\n", [ro(">", [lo("scrollbar-container", "\n width: 100%;\n overflow: scroll;\n height: 100%;\n max-height: inherit;\n scrollbar-width: none;\n ", [ro("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", "\n width: 0;\n height: 0;\n display: none;\n "), ro(">", [lo("scrollbar-content", "\n box-sizing: border-box;\n min-width: 100%;\n ")])])]), ro(">, +", [lo("scrollbar-rail", "\n position: absolute;\n pointer-events: none;\n user-select: none;\n -webkit-user-select: none;\n ", [io("horizontal", "\n left: 2px;\n right: 2px;\n bottom: 4px;\n height: var(--n-scrollbar-height);\n ", [ro(">", [ao("scrollbar", "\n height: var(--n-scrollbar-height);\n border-radius: var(--n-scrollbar-border-radius);\n right: 0;\n ")])]), io("vertical", "\n right: 4px;\n top: 2px;\n bottom: 2px;\n width: var(--n-scrollbar-width);\n ", [ro(">", [ao("scrollbar", "\n width: var(--n-scrollbar-width);\n border-radius: var(--n-scrollbar-border-radius);\n bottom: 0;\n ")])]), io("disabled", [ro(">", [ao("scrollbar", {
		pointerEvents: "none"
	})])]), ro(">", [ao("scrollbar", "\n position: absolute;\n cursor: pointer;\n pointer-events: all;\n background-color: var(--n-scrollbar-color);\n transition: background-color .2s var(--n-scrollbar-bezier);\n ", [function({
		name: e = "fade-in",
		enterDuration: o = "0.2s",
		leaveDuration: n = "0.2s",
		enterCubicBezier: r = Fn,
		leaveCubicBezier: t = Fn
	} = {}) {
		return [ro(`&.${e}-transition-enter-active`, {
			transition: `all ${o} ${r}!important`
		}), ro(`&.${e}-transition-leave-active`, {
			transition: `all ${n} ${t}!important`
		}), ro(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
			opacity: 0
		}), ro(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
			opacity: 1
		})]
	}(), ro("&:hover", {
		backgroundColor: "var(--n-scrollbar-color-hover)"
	})])])])])]),
	On = Object.assign(Object.assign({}, Ao.props), {
		size: {
			type: Number,
			default: 5
		},
		duration: {
			type: Number,
			default: 0
		},
		scrollable: {
			type: Boolean,
			default: !0
		},
		xScrollable: Boolean,
		trigger: {
			type: String,
			default: "hover"
		},
		useUnifiedContainer: Boolean,
		triggerDisplayManually: Boolean,
		container: Function,
		content: Function,
		containerClass: String,
		containerStyle: [String, Object],
		contentClass: String,
		contentStyle: [String, Object],
		horizontalRailStyle: [String, Object],
		verticalRailStyle: [String, Object],
		onScroll: Function,
		onWheel: Function,
		onResize: Function,
		internalOnUpdateScrollLeft: Function,
		internalHoistYRail: Boolean
	}),
	In = t({
		name: "Scrollbar",
		props: On,
		inheritAttrs: !1,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: n,
				mergedRtlRef: r
			} = Ho(e), t = Vo("Scrollbar", r, o), l = i(null), a = i(null), s = i(null), d = i(null), v = i(null), b = i(null), f = i(null), g = i(null), m = i(null), y = i(null), w = i(null), C = i(0), S = i(0), k = i(!1), $ = i(!1);
			let P, R, T = !1,
				B = !1,
				F = 0,
				M = 0,
				O = 0,
				I = 0;
			const A = D(),
				H = x((() => {
					const {
						value: o
					} = g, {
						value: n
					} = b, {
						value: r
					} = y;
					return null === o || null === n || null === r ? 0 : Math.min(o, r * o / n + 1.5 * e.size)
				})),
				E = x((() => `${H.value}px`)),
				_ = x((() => {
					const {
						value: o
					} = m, {
						value: n
					} = f, {
						value: r
					} = w;
					return null === o || null === n || null === r ? 0 : r * o / n + 1.5 * e.size
				})),
				j = x((() => `${_.value}px`)),
				N = x((() => {
					const {
						value: e
					} = g, {
						value: o
					} = C, {
						value: n
					} = b, {
						value: r
					} = y;
					if (null === e || null === n || null === r) return 0; {
						const t = n - e;
						return t ? o / t * (r - H.value) : 0
					}
				})),
				W = x((() => `${N.value}px`)),
				V = x((() => {
					const {
						value: e
					} = m, {
						value: o
					} = S, {
						value: n
					} = f, {
						value: r
					} = w;
					if (null === e || null === n || null === r) return 0; {
						const t = n - e;
						return t ? o / t * (r - _.value) : 0
					}
				})),
				U = x((() => `${V.value}px`)),
				K = x((() => {
					const {
						value: e
					} = g, {
						value: o
					} = b;
					return null !== e && null !== o && o > e
				})),
				G = x((() => {
					const {
						value: e
					} = m, {
						value: o
					} = f;
					return null !== e && null !== o && o > e
				})),
				q = x((() => {
					const {
						trigger: o
					} = e;
					return "none" === o || k.value
				})),
				Y = x((() => {
					const {
						trigger: o
					} = e;
					return "none" === o || $.value
				})),
				X = x((() => {
					const {
						container: o
					} = e;
					return o ? o() : a.value
				})),
				Z = x((() => {
					const {
						content: o
					} = e;
					return o ? o() : s.value
				})),
				Q = ko((() => {
					e.container || J({
						top: C.value,
						left: S.value
					})
				})),
				J = (o, n) => {
					if (!e.scrollable) return;
					if ("number" == typeof o) return void ee(null != n ? n : 0, o, 0, !1, "auto");
					const {
						left: r,
						top: t,
						index: l,
						elSize: a,
						position: i,
						behavior: s,
						el: d,
						debounce: c = !0
					} = o;
					void 0 === r && void 0 === t || ee(null != r ? r : 0, null != t ? t : 0, 0, !1, s), void 0 !== d ? ee(0, d.offsetTop, d.offsetHeight, c, s) : void 0 !== l && void 0 !== a ? ee(0, l * a, a, c, s) : "bottom" === i ? ee(0, Number.MAX_SAFE_INTEGER, 0, !1, s) : "top" === i && ee(0, 0, 0, !1, s)
				};

			function ee(e, o, n, r, t) {
				const {
					value: l
				} = X;
				if (l) {
					if (r) {
						const {
							scrollTop: r,
							offsetHeight: a
						} = l;
						if (o > r) return void(o + n <= r + a || l.scrollTo({
							left: e,
							top: o + n - a,
							behavior: t
						}))
					}
					l.scrollTo({
						left: e,
						top: o,
						behavior: t
					})
				}
			}

			function oe() {
				void 0 !== R && window.clearTimeout(R), R = window.setTimeout((() => {
					$.value = !1
				}), e.duration), void 0 !== P && window.clearTimeout(P), P = window.setTimeout((() => {
					k.value = !1
				}), e.duration)
			}

			function ne() {
				const {
					value: e
				} = X;
				e && (C.value = e.scrollTop, S.value = e.scrollLeft * ((null == t ? void 0 : t.value) ? -1 : 1))
			}

			function re() {
				const {
					value: e
				} = X;
				e && (C.value = e.scrollTop, S.value = e.scrollLeft * ((null == t ? void 0 : t.value) ? -1 : 1), g.value = e.offsetHeight, m.value = e.offsetWidth, b.value = e.scrollHeight, f.value = e.scrollWidth);
				const {
					value: o
				} = v, {
					value: n
				} = d;
				o && (w.value = o.offsetWidth), n && (y.value = n.offsetHeight)
			}

			function te() {
				e.scrollable && (e.useUnifiedContainer ? re() : (function() {
					const {
						value: e
					} = Z;
					e && (b.value = e.offsetHeight, f.value = e.offsetWidth);
					const {
						value: o
					} = X;
					o && (g.value = o.offsetHeight, m.value = o.offsetWidth);
					const {
						value: n
					} = v, {
						value: r
					} = d;
					n && (w.value = n.offsetWidth), r && (y.value = r.offsetHeight)
				}(), ne()))
			}

			function le(e) {
				var o;
				return !(null === (o = l.value) || void 0 === o ? void 0 : o.contains(L(e)))
			}

			function ae(o) {
				if (!B) return;
				void 0 !== P && window.clearTimeout(P), void 0 !== R && window.clearTimeout(R);
				const {
					value: n
				} = m, {
					value: r
				} = f, {
					value: l
				} = _;
				if (null === n || null === r) return;
				const a = (null == t ? void 0 : t.value) ? window.innerWidth - o.clientX - O : o.clientX - O,
					i = r - n;
				let s = M + a * (r - n) / (n - l);
				s = Math.min(i, s), s = Math.max(s, 0);
				const {
					value: d
				} = X;
				if (d) {
					d.scrollLeft = s * ((null == t ? void 0 : t.value) ? -1 : 1);
					const {
						internalOnUpdateScrollLeft: o
					} = e;
					o && o(s)
				}
			}

			function ie(e) {
				e.preventDefault(), e.stopPropagation(), h("mousemove", window, ae, !0), h("mouseup", window, ie, !0), B = !1, te(), le(e) && oe()
			}

			function se(e) {
				if (!T) return;
				void 0 !== P && window.clearTimeout(P), void 0 !== R && window.clearTimeout(R);
				const {
					value: o
				} = g, {
					value: n
				} = b, {
					value: r
				} = H;
				if (null === o || null === n) return;
				const t = e.clientY - I,
					l = n - o;
				let a = F + t * (n - o) / (o - r);
				a = Math.min(l, a), a = Math.max(a, 0);
				const {
					value: i
				} = X;
				i && (i.scrollTop = a)
			}

			function de(e) {
				e.preventDefault(), e.stopPropagation(), h("mousemove", window, se, !0), h("mouseup", window, de, !0), T = !1, te(), le(e) && oe()
			}
			z((() => {
				const {
					value: e
				} = G, {
					value: n
				} = K, {
					value: r
				} = o, {
					value: t
				} = v, {
					value: l
				} = d;
				t && (e ? t.classList.remove(`${r}-scrollbar-rail--disabled`) : t.classList.add(`${r}-scrollbar-rail--disabled`)), l && (n ? l.classList.remove(`${r}-scrollbar-rail--disabled`) : l.classList.add(`${r}-scrollbar-rail--disabled`))
			})), c((() => {
				e.container || te()
			})), p((() => {
				void 0 !== P && window.clearTimeout(P), void 0 !== R && window.clearTimeout(R), h("mousemove", window, se, !0), h("mouseup", window, de, !0)
			}));
			const ce = Ao("Scrollbar", "-scrollbar", Mn, Bn, e, o),
				ue = x((() => {
					const {
						common: {
							cubicBezierEaseInOut: e,
							scrollbarBorderRadius: o,
							scrollbarHeight: n,
							scrollbarWidth: r
						},
						self: {
							color: t,
							colorHover: l
						}
					} = ce.value;
					return {
						"--n-scrollbar-bezier": e,
						"--n-scrollbar-color": t,
						"--n-scrollbar-color-hover": l,
						"--n-scrollbar-border-radius": o,
						"--n-scrollbar-width": r,
						"--n-scrollbar-height": n
					}
				})),
				pe = n ? Wo("scrollbar", void 0, ue, e) : void 0,
				he = {
					scrollTo: J,
					scrollBy: (o, n) => {
						if (!e.scrollable) return;
						const {
							value: r
						} = X;
						r && ("object" == typeof o ? r.scrollBy(o) : r.scrollBy(o, n || 0))
					},
					sync: te,
					syncUnifiedContainer: re,
					handleMouseEnterWrapper: function() {
						void 0 !== P && window.clearTimeout(P), k.value = !0, void 0 !== R && window.clearTimeout(R), $.value = !0, te()
					},
					handleMouseLeaveWrapper: function() {
						oe()
					}
				};
			return Object.assign(Object.assign({}, he), {
				mergedClsPrefix: o,
				rtlEnabled: t,
				containerScrollTop: C,
				wrapperRef: l,
				containerRef: a,
				contentRef: s,
				yRailRef: d,
				xRailRef: v,
				needYBar: K,
				needXBar: G,
				yBarSizePx: E,
				xBarSizePx: j,
				yBarTopPx: W,
				xBarLeftPx: U,
				isShowXBar: q,
				isShowYBar: Y,
				isIos: A,
				handleScroll: function(o) {
					const {
						onScroll: n
					} = e;
					n && n(o), ne()
				},
				handleContentResize: () => {
					Q.isDeactivated || te()
				},
				handleContainerResize: o => {
					if (Q.isDeactivated) return;
					const {
						onResize: n
					} = e;
					n && n(o), te()
				},
				handleYScrollMouseDown: function(e) {
					e.preventDefault(), e.stopPropagation(), T = !0, u("mousemove", window, se, !0), u("mouseup", window, de, !0), F = C.value, I = e.clientY
				},
				handleXScrollMouseDown: function(e) {
					e.preventDefault(), e.stopPropagation(), B = !0, u("mousemove", window, ae, !0), u("mouseup", window, ie, !0), M = S.value, O = (null == t ? void 0 : t.value) ? window.innerWidth - e.clientX : e.clientX
				},
				cssVars: n ? void 0 : ue,
				themeClass: null == pe ? void 0 : pe.themeClass,
				onRender: null == pe ? void 0 : pe.onRender
			})
		},
		render() {
			var e;
			const {
				$slots: n,
				mergedClsPrefix: r,
				triggerDisplayManually: t,
				rtlEnabled: l,
				internalHoistYRail: a
			} = this;
			if (!this.scrollable) return null === (e = n.default) || void 0 === e ? void 0 : e.call(n);
			const i = "none" === this.trigger,
				s = () => P("div", {
					ref: "yRailRef",
					class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`],
					"data-scrollbar-rail": !0,
					style: this.verticalRailStyle,
					"aria-hidden": !0
				}, P(i ? qe : B, i ? null : {
					name: "fade-in-transition"
				}, {
					default: () => this.needYBar && this.isShowYBar && !this.isIos ? P("div", {
						class: `${r}-scrollbar-rail__scrollbar`,
						style: {
							height: this.yBarSizePx,
							top: this.yBarTopPx
						},
						onMousedown: this.handleYScrollMouseDown
					}) : null
				})),
				d = () => {
					var e, o;
					return null === (e = this.onRender) || void 0 === e || e.call(this), P("div", E(this.$attrs, {
						role: "none",
						ref: "wrapperRef",
						class: [`${r}-scrollbar`, this.themeClass, l && `${r}-scrollbar--rtl`],
						style: this.cssVars,
						onMouseenter: t ? void 0 : this.handleMouseEnterWrapper,
						onMouseleave: t ? void 0 : this.handleMouseLeaveWrapper
					}), [this.container ? null === (o = n.default) || void 0 === o ? void 0 : o.call(n) : P("div", {
						role: "none",
						ref: "containerRef",
						class: [`${r}-scrollbar-container`, this.containerClass],
						style: this.containerStyle,
						onScroll: this.handleScroll,
						onWheel: this.onWheel
					}, P(H, {
						onResize: this.handleContentResize
					}, {
						default: () => P("div", {
							ref: "contentRef",
							role: "none",
							style: [{
								width: this.xScrollable ? "fit-content" : null
							}, this.contentStyle],
							class: [`${r}-scrollbar-content`, this.contentClass]
						}, n)
					})), a ? null : s(), this.xScrollable && P("div", {
						ref: "xRailRef",
						class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--horizontal`],
						style: this.horizontalRailStyle,
						"data-scrollbar-rail": !0,
						"aria-hidden": !0
					}, P(i ? qe : B, i ? null : {
						name: "fade-in-transition"
					}, {
						default: () => this.needXBar && this.isShowXBar && !this.isIos ? P("div", {
							class: `${r}-scrollbar-rail__scrollbar`,
							style: {
								width: this.xBarSizePx,
								right: l ? this.xBarLeftPx : void 0,
								left: l ? void 0 : this.xBarLeftPx
							},
							onMousedown: this.handleXScrollMouseDown
						}) : null
					}))])
				},
				c = this.container ? d() : P(H, {
					onResize: this.handleContainerResize
				}, {
					default: d
				});
			return a ? P(o, null, c, s()) : c
		}
	}),
	An = In,
	Dn = In,
	Hn = {
		height: "calc(var(--n-option-height) * 7.6)",
		paddingSmall: "4px 0",
		paddingMedium: "4px 0",
		paddingLarge: "4px 0",
		paddingHuge: "4px 0",
		optionPaddingSmall: "0 12px",
		optionPaddingMedium: "0 12px",
		optionPaddingLarge: "0 12px",
		optionPaddingHuge: "0 12px",
		loadingSize: "18px"
	},
	En = {
		name: "InternalSelectMenu",
		common: zn,
		peers: {
			Scrollbar: Bn,
			Empty: $n
		},
		self: e => {
			const {
				borderRadius: o,
				popoverColor: n,
				textColor3: r,
				dividerColor: t,
				textColor2: l,
				primaryColorPressed: a,
				textColorDisabled: i,
				primaryColor: s,
				opacityDisabled: d,
				hoverColor: c,
				fontSizeSmall: u,
				fontSizeMedium: p,
				fontSizeLarge: h,
				fontSizeHuge: v,
				heightSmall: b,
				heightMedium: f,
				heightLarge: g,
				heightHuge: m
			} = e;
			return Object.assign(Object.assign({}, Hn), {
				optionFontSizeSmall: u,
				optionFontSizeMedium: p,
				optionFontSizeLarge: h,
				optionFontSizeHuge: v,
				optionHeightSmall: b,
				optionHeightMedium: f,
				optionHeightLarge: g,
				optionHeightHuge: m,
				borderRadius: o,
				color: n,
				groupHeaderTextColor: r,
				actionDividerColor: t,
				optionTextColor: l,
				optionTextColorPressed: a,
				optionTextColorDisabled: i,
				optionTextColorActive: s,
				optionOpacityDisabled: d,
				optionCheckColor: s,
				optionColorPending: c,
				optionColorActive: "rgba(0, 0, 0, 0)",
				optionColorActivePending: c,
				actionTextColor: l,
				loadingColor: s
			})
		}
	},
	Ln = t({
		name: "NBaseSelectOption",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const {
				valueRef: o,
				pendingTmNodeRef: n,
				multipleRef: r,
				valueSetRef: t,
				renderLabelRef: l,
				renderOptionRef: a,
				labelFieldRef: i,
				valueFieldRef: s,
				showCheckmarkRef: c,
				nodePropsRef: u,
				handleOptionClick: p,
				handleOptionMouseEnter: h
			} = d(fo), b = v((() => {
				const {
					value: o
				} = n;
				return !!o && e.tmNode.key === o.key
			}));
			return {
				multiple: r,
				isGrouped: v((() => {
					const {
						tmNode: o
					} = e, {
						parent: n
					} = o;
					return n && "group" === n.rawNode.type
				})),
				showCheckmark: c,
				nodeProps: u,
				isPending: b,
				isSelected: v((() => {
					const {
						value: n
					} = o, {
						value: l
					} = r;
					if (null === n) return !1;
					const a = e.tmNode.rawNode[s.value];
					if (l) {
						const {
							value: e
						} = t;
						return e.has(a)
					}
					return n === a
				})),
				labelField: i,
				renderLabel: l,
				renderOption: a,
				handleMouseMove: function(o) {
					const {
						tmNode: n
					} = e, {
						value: r
					} = b;
					n.disabled || r || h(o, n)
				},
				handleMouseEnter: function(o) {
					const {
						tmNode: n
					} = e;
					n.disabled || h(o, n)
				},
				handleClick: function(o) {
					const {
						tmNode: n
					} = e;
					n.disabled || p(o, n)
				}
			}
		},
		render() {
			const {
				clsPrefix: e,
				tmNode: {
					rawNode: o
				},
				isSelected: n,
				isPending: r,
				isGrouped: t,
				showCheckmark: l,
				nodeProps: a,
				renderOption: i,
				renderLabel: s,
				handleClick: d,
				handleMouseEnter: c,
				handleMouseMove: u
			} = this, p = function(e, o) {
				return P(B, {
					name: "fade-in-scale-up-transition"
				}, {
					default: () => e ? P(tn, {
						clsPrefix: o,
						class: `${o}-base-select-option__check`
					}, {
						default: () => P(Go)
					}) : null
				})
			}(n, e), h = s ? [s(o, n), l && p] : [He(o[this.labelField], o, n), l && p], v = null == a ? void 0 : a(o), b = P("div", Object.assign({}, v, {
				class: [`${e}-base-select-option`, o.class, null == v ? void 0 : v.class, {
					[`${e}-base-select-option--disabled`]: o.disabled,
					[`${e}-base-select-option--selected`]: n,
					[`${e}-base-select-option--grouped`]: t,
					[`${e}-base-select-option--pending`]: r,
					[`${e}-base-select-option--show-checkmark`]: l
				}],
				style: [(null == v ? void 0 : v.style) || "", o.style || ""],
				onClick: Ge([d, null == v ? void 0 : v.onClick]),
				onMouseenter: Ge([c, null == v ? void 0 : v.onMouseenter]),
				onMousemove: Ge([u, null == v ? void 0 : v.onMousemove])
			}), P("div", {
				class: `${e}-base-select-option__content`
			}, h));
			return o.render ? o.render({
				node: b,
				option: o,
				selected: n
			}) : i ? i({
				node: b,
				option: o,
				selected: n
			}) : b
		}
	}),
	_n = t({
		name: "NBaseSelectGroupHeader",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			}
		},
		setup() {
			const {
				renderLabelRef: e,
				renderOptionRef: o,
				labelFieldRef: n,
				nodePropsRef: r
			} = d(fo);
			return {
				labelField: n,
				nodeProps: r,
				renderLabel: e,
				renderOption: o
			}
		},
		render() {
			const {
				clsPrefix: e,
				renderLabel: o,
				renderOption: n,
				nodeProps: r,
				tmNode: {
					rawNode: t
				}
			} = this, l = null == r ? void 0 : r(t), a = o ? o(t, !1) : He(t[this.labelField], t, !1), i = P("div", Object.assign({}, l, {
				class: [`${e}-base-select-group-header`, null == l ? void 0 : l.class]
			}), a);
			return t.render ? t.render({
				node: i,
				option: t
			}) : n ? n({
				node: i,
				option: t,
				selected: !1
			}) : i
		}
	}),
	{
		cubicBezierEaseIn: jn,
		cubicBezierEaseOut: Nn
	} = Ro;

function Wn({
	transformOrigin: e = "inherit",
	duration: o = ".2s",
	enterScale: n = ".9",
	originalTransform: r = "",
	originalTransition: t = ""
} = {}) {
	return [ro("&.fade-in-scale-up-transition-leave-active", {
		transformOrigin: e,
		transition: `opacity ${o} ${jn}, transform ${o} ${jn} ${t&&","+t}`
	}), ro("&.fade-in-scale-up-transition-enter-active", {
		transformOrigin: e,
		transition: `opacity ${o} ${Nn}, transform ${o} ${Nn} ${t&&","+t}`
	}), ro("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
		opacity: 0,
		transform: `${r} scale(${n})`
	}), ro("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
		opacity: 1,
		transform: `${r} scale(1)`
	})]
}
const Vn = lo("base-select-menu", "\n line-height: 1.5;\n outline: none;\n z-index: 0;\n position: relative;\n border-radius: var(--n-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-color);\n", [lo("scrollbar", "\n max-height: var(--n-height);\n "), lo("virtual-list", "\n max-height: var(--n-height);\n "), lo("base-select-option", "\n min-height: var(--n-option-height);\n font-size: var(--n-option-font-size);\n display: flex;\n align-items: center;\n ", [ao("content", "\n z-index: 1;\n white-space: nowrap;\n text-overflow: ellipsis;\n overflow: hidden;\n ")]), lo("base-select-group-header", "\n min-height: var(--n-option-height);\n font-size: .93em;\n display: flex;\n align-items: center;\n "), lo("base-select-menu-option-wrapper", "\n position: relative;\n width: 100%;\n "), ao("loading, empty", "\n display: flex;\n padding: 12px 32px;\n flex: 1;\n justify-content: center;\n "), ao("loading", "\n color: var(--n-loading-color);\n font-size: var(--n-loading-size);\n "), ao("action", "\n padding: 8px var(--n-option-padding-left);\n font-size: var(--n-option-font-size);\n transition: \n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n border-top: 1px solid var(--n-action-divider-color);\n color: var(--n-action-text-color);\n "), lo("base-select-group-header", "\n position: relative;\n cursor: default;\n padding: var(--n-option-padding);\n color: var(--n-group-header-text-color);\n "), lo("base-select-option", "\n cursor: pointer;\n position: relative;\n padding: var(--n-option-padding);\n transition:\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n box-sizing: border-box;\n color: var(--n-option-text-color);\n opacity: 1;\n ", [io("show-checkmark", "\n padding-right: calc(var(--n-option-padding-right) + 20px);\n "), ro("&::before", '\n content: "";\n position: absolute;\n left: 4px;\n right: 4px;\n top: 0;\n bottom: 0;\n border-radius: var(--n-border-radius);\n transition: background-color .3s var(--n-bezier);\n '), ro("&:active", "\n color: var(--n-option-text-color-pressed);\n "), io("grouped", "\n padding-left: calc(var(--n-option-padding-left) * 1.5);\n "), io("pending", [ro("&::before", "\n background-color: var(--n-option-color-pending);\n ")]), io("selected", "\n color: var(--n-option-text-color-active);\n ", [ro("&::before", "\n background-color: var(--n-option-color-active);\n "), io("pending", [ro("&::before", "\n background-color: var(--n-option-color-active-pending);\n ")])]), io("disabled", "\n cursor: not-allowed;\n ", [so("selected", "\n color: var(--n-option-text-color-disabled);\n "), io("selected", "\n opacity: var(--n-option-opacity-disabled);\n ")]), ao("check", "\n font-size: 16px;\n position: absolute;\n right: calc(var(--n-option-padding-right) - 4px);\n top: calc(50% - 7px);\n color: var(--n-option-check-color);\n transition: color .3s var(--n-bezier);\n ", [Wn({
		enterScale: "0.5"
	})])])]),
	Un = t({
		name: "InternalSelectMenu",
		props: Object.assign(Object.assign({}, Ao.props), {
			clsPrefix: {
				type: String,
				required: !0
			},
			scrollable: {
				type: Boolean,
				default: !0
			},
			treeMate: {
				type: Object,
				required: !0
			},
			multiple: Boolean,
			size: {
				type: String,
				default: "medium"
			},
			value: {
				type: [String, Number, Array],
				default: null
			},
			autoPending: Boolean,
			virtualScroll: {
				type: Boolean,
				default: !0
			},
			show: {
				type: Boolean,
				default: !0
			},
			labelField: {
				type: String,
				default: "label"
			},
			valueField: {
				type: String,
				default: "value"
			},
			loading: Boolean,
			focusable: Boolean,
			renderLabel: Function,
			renderOption: Function,
			nodeProps: Function,
			showCheckmark: {
				type: Boolean,
				default: !0
			},
			onMousedown: Function,
			onScroll: Function,
			onFocus: Function,
			onBlur: Function,
			onKeyup: Function,
			onKeydown: Function,
			onTabOut: Function,
			onMouseenter: Function,
			onMouseleave: Function,
			onResize: Function,
			resetMenuOnOptionsChange: {
				type: Boolean,
				default: !0
			},
			inlineThemeDisabled: Boolean,
			onToggle: Function
		}),
		setup(e) {
			const o = Ao("InternalSelectMenu", "-internal-select-menu", Vn, En, e, M(e, "clsPrefix")),
				n = i(null),
				r = i(null),
				t = i(null),
				l = x((() => e.treeMate.getFlattenedNodes())),
				a = x((() => N(l.value))),
				d = i(null);

			function u() {
				const {
					value: o
				} = d;
				o && !e.treeMate.getNode(o.key) && (d.value = null)
			}
			let h;
			s((() => e.show), (o => {
				o ? h = s((() => e.treeMate), (() => {
					e.resetMenuOnOptionsChange ? (e.autoPending ? function() {
						const {
							treeMate: o
						} = e;
						let n = null;
						const {
							value: r
						} = e;
						null === r ? n = o.getFirstAvailableNode() : (n = e.multiple ? o.getNode((r || [])[(r || []).length - 1]) : o.getNode(r), n && !n.disabled || (n = o.getFirstAvailableNode())), w(n || null)
					}() : u(), W(C)) : u()
				}), {
					immediate: !0
				}) : null == h || h()
			}), {
				immediate: !0
			}), p((() => {
				null == h || h()
			}));
			const v = x((() => V(o.value.self[Je("optionHeight", e.size)]))),
				b = x((() => U(o.value.self[Je("padding", e.size)]))),
				f = x((() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : new Set)),
				g = x((() => {
					const e = l.value;
					return e && 0 === e.length
				}));

			function y(o) {
				const {
					onScroll: n
				} = e;
				n && n(o)
			}

			function w(e, o = !1) {
				d.value = e, o && C()
			}

			function C() {
				var o, n;
				const l = d.value;
				if (!l) return;
				const i = a.value(l.key);
				null !== i && (e.virtualScroll ? null === (o = r.value) || void 0 === o || o.scrollTo({
					index: i
				}) : null === (n = t.value) || void 0 === n || n.scrollTo({
					index: i,
					elSize: v.value
				}))
			}
			m(fo, {
				handleOptionMouseEnter: function(e, o) {
					o.disabled || w(o, !1)
				},
				handleOptionClick: function(o, n) {
					n.disabled || function(o) {
						const {
							onToggle: n
						} = e;
						n && n(o)
					}(n)
				},
				valueSetRef: f,
				pendingTmNodeRef: d,
				nodePropsRef: M(e, "nodeProps"),
				showCheckmarkRef: M(e, "showCheckmark"),
				multipleRef: M(e, "multiple"),
				valueRef: M(e, "value"),
				renderLabelRef: M(e, "renderLabel"),
				renderOptionRef: M(e, "renderOption"),
				labelFieldRef: M(e, "labelField"),
				valueFieldRef: M(e, "valueField")
			}), m(go, n), c((() => {
				const {
					value: e
				} = t;
				e && e.sync()
			}));
			const S = x((() => {
					const {
						size: n
					} = e, {
						common: {
							cubicBezierEaseInOut: r
						},
						self: {
							height: t,
							borderRadius: l,
							color: a,
							groupHeaderTextColor: i,
							actionDividerColor: s,
							optionTextColorPressed: d,
							optionTextColor: c,
							optionTextColorDisabled: u,
							optionTextColorActive: p,
							optionOpacityDisabled: h,
							optionCheckColor: v,
							actionTextColor: b,
							optionColorPending: f,
							optionColorActive: g,
							loadingColor: m,
							loadingSize: x,
							optionColorActivePending: y,
							[Je("optionFontSize", n)]: w,
							[Je("optionHeight", n)]: C,
							[Je("optionPadding", n)]: S
						}
					} = o.value;
					return {
						"--n-height": t,
						"--n-action-divider-color": s,
						"--n-action-text-color": b,
						"--n-bezier": r,
						"--n-border-radius": l,
						"--n-color": a,
						"--n-option-font-size": w,
						"--n-group-header-text-color": i,
						"--n-option-check-color": v,
						"--n-option-color-pending": f,
						"--n-option-color-active": g,
						"--n-option-color-active-pending": y,
						"--n-option-height": C,
						"--n-option-opacity-disabled": h,
						"--n-option-text-color": c,
						"--n-option-text-color-active": p,
						"--n-option-text-color-disabled": u,
						"--n-option-text-color-pressed": d,
						"--n-option-padding": S,
						"--n-option-padding-left": U(S, "left"),
						"--n-option-padding-right": U(S, "right"),
						"--n-loading-color": m,
						"--n-loading-size": x
					}
				})),
				{
					inlineThemeDisabled: z
				} = e,
				k = z ? Wo("internal-select-menu", x((() => e.size[0])), S, e) : void 0,
				$ = {
					selfRef: n,
					next: function() {
						const {
							value: e
						} = d;
						e && w(e.getNext({
							loop: !0
						}), !0)
					},
					prev: function() {
						const {
							value: e
						} = d;
						e && w(e.getPrev({
							loop: !0
						}), !0)
					},
					getPendingTmNode: function() {
						const {
							value: e
						} = d;
						return e || null
					}
				};
			return zo(n, e.onResize), Object.assign({
				mergedTheme: o,
				virtualListRef: r,
				scrollbarRef: t,
				itemSize: v,
				padding: b,
				flattenedNodes: l,
				empty: g,
				virtualListContainer() {
					const {
						value: e
					} = r;
					return null == e ? void 0 : e.listElRef
				},
				virtualListContent() {
					const {
						value: e
					} = r;
					return null == e ? void 0 : e.itemsElRef
				},
				doScroll: y,
				handleFocusin: function(o) {
					var r, t;
					(null === (r = n.value) || void 0 === r ? void 0 : r.contains(o.target)) && (null === (t = e.onFocus) || void 0 === t || t.call(e, o))
				},
				handleFocusout: function(o) {
					var r, t;
					(null === (r = n.value) || void 0 === r ? void 0 : r.contains(o.relatedTarget)) || null === (t = e.onBlur) || void 0 === t || t.call(e, o)
				},
				handleKeyUp: function(o) {
					var n;
					j(o, "action") || null === (n = e.onKeyup) || void 0 === n || n.call(e, o)
				},
				handleKeyDown: function(o) {
					var n;
					j(o, "action") || null === (n = e.onKeydown) || void 0 === n || n.call(e, o)
				},
				handleMouseDown: function(o) {
					var n;
					null === (n = e.onMousedown) || void 0 === n || n.call(e, o), e.focusable || o.preventDefault()
				},
				handleVirtualListResize: function() {
					var e;
					null === (e = t.value) || void 0 === e || e.sync()
				},
				handleVirtualListScroll: function(e) {
					var o;
					null === (o = t.value) || void 0 === o || o.sync(), y(e)
				},
				cssVars: z ? void 0 : S,
				themeClass: null == k ? void 0 : k.themeClass,
				onRender: null == k ? void 0 : k.onRender
			}, $)
		},
		render() {
			const {
				$slots: e,
				virtualScroll: o,
				clsPrefix: n,
				mergedTheme: r,
				themeClass: t,
				onRender: l
			} = this;
			return null == l || l(), P("div", {
				ref: "selfRef",
				tabindex: this.focusable ? 0 : -1,
				class: [`${n}-base-select-menu`, t, this.multiple && `${n}-base-select-menu--multiple`],
				style: this.cssVars,
				onFocusin: this.handleFocusin,
				onFocusout: this.handleFocusout,
				onKeyup: this.handleKeyUp,
				onKeydown: this.handleKeyDown,
				onMousedown: this.handleMouseDown,
				onMouseenter: this.onMouseenter,
				onMouseleave: this.onMouseleave
			}, this.loading ? P("div", {
				class: `${n}-base-select-menu__loading`
			}, P(hn, {
				clsPrefix: n,
				strokeWidth: 20
			})) : this.empty ? P("div", {
				class: `${n}-base-select-menu__empty`,
				"data-empty": !0
			}, Ve(e.empty, (() => [P(Tn, {
				theme: r.peers.Empty,
				themeOverrides: r.peerOverrides.Empty
			})]))) : P(An, {
				ref: "scrollbarRef",
				theme: r.peers.Scrollbar,
				themeOverrides: r.peerOverrides.Scrollbar,
				scrollable: this.scrollable,
				container: o ? this.virtualListContainer : void 0,
				content: o ? this.virtualListContent : void 0,
				onScroll: o ? void 0 : this.doScroll
			}, {
				default: () => o ? P(_, {
					ref: "virtualListRef",
					class: `${n}-virtual-list`,
					items: this.flattenedNodes,
					itemSize: this.itemSize,
					showScrollbar: !1,
					paddingTop: this.padding.top,
					paddingBottom: this.padding.bottom,
					onResize: this.handleVirtualListResize,
					onScroll: this.handleVirtualListScroll,
					itemResizable: !0
				}, {
					default: ({
						item: e
					}) => e.isGroup ? P(_n, {
						key: e.key,
						clsPrefix: n,
						tmNode: e
					}) : e.ignored ? null : P(Ln, {
						clsPrefix: n,
						key: e.key,
						tmNode: e
					})
				}) : P("div", {
					class: `${n}-base-select-menu-option-wrapper`,
					style: {
						paddingTop: this.padding.top,
						paddingBottom: this.padding.bottom
					}
				}, this.flattenedNodes.map((e => e.isGroup ? P(_n, {
					key: e.key,
					clsPrefix: n,
					tmNode: e
				}) : P(Ln, {
					clsPrefix: n,
					key: e.key,
					tmNode: e
				}))))
			}), Ue(e.action, (e => e && [P("div", {
				class: `${n}-base-select-menu__action`,
				"data-action": !0,
				key: "action"
			}, e), P(sn, {
				onFocus: this.onTabOut,
				key: "focus-detector"
			})])))
		}
	}),
	Kn = lo("base-wave", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"),
	Gn = t({
		name: "BaseWave",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			}
		},
		setup(e) {
			No("-base-wave", Kn, M(e, "clsPrefix"));
			const o = i(null),
				n = i(!1);
			let r = null;
			return p((() => {
				null !== r && window.clearTimeout(r)
			})), {
				active: n,
				selfRef: o,
				play() {
					null !== r && (window.clearTimeout(r), n.value = !1, r = null), W((() => {
						var e;
						null === (e = o.value) || void 0 === e || e.offsetHeight, n.value = !0, r = window.setTimeout((() => {
							n.value = !1, r = null
						}), 1e3)
					}))
				}
			}
		},
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				ref: "selfRef",
				"aria-hidden": !0,
				class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`]
			})
		}
	}),
	qn = {
		space: "6px",
		spaceArrow: "10px",
		arrowOffset: "10px",
		arrowOffsetVertical: "10px",
		arrowHeight: "6px",
		padding: "8px 14px"
	},
	Yn = {
		name: "Popover",
		common: zn,
		self: e => {
			const {
				boxShadow2: o,
				popoverColor: n,
				textColor2: r,
				borderRadius: t,
				fontSize: l,
				dividerColor: a
			} = e;
			return Object.assign(Object.assign({}, qn), {
				fontSize: l,
				borderRadius: t,
				color: n,
				dividerColor: a,
				textColor: r,
				boxShadow: o
			})
		}
	},
	Xn = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	},
	Zn = "var(--n-arrow-height) * 1.414",
	Qn = ro([lo("popover", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n position: relative;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n box-shadow: var(--n-box-shadow);\n word-break: break-word;\n ", [ro(">", [lo("scrollbar", "\n height: inherit;\n max-height: inherit;\n ")]), so("raw", "\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n ", [so("scrollable", [so("show-header-or-footer", "padding: var(--n-padding);")])]), ao("header", "\n padding: var(--n-padding);\n border-bottom: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "), ao("footer", "\n padding: var(--n-padding);\n border-top: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "), io("scrollable, show-header-or-footer", [ao("content", "\n padding: var(--n-padding);\n ")])]), lo("popover-shared", "\n transform-origin: inherit;\n ", [lo("popover-arrow-wrapper", "\n position: absolute;\n overflow: hidden;\n pointer-events: none;\n ", [lo("popover-arrow", `\n transition: background-color .3s var(--n-bezier);\n position: absolute;\n display: block;\n width: calc(${Zn});\n height: calc(${Zn});\n box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);\n transform: rotate(45deg);\n background-color: var(--n-color);\n pointer-events: all;\n `)]), ro("&.popover-transition-enter-from, &.popover-transition-leave-to", "\n opacity: 0;\n transform: scale(.85);\n "), ro("&.popover-transition-enter-to, &.popover-transition-leave-from", "\n transform: scale(1);\n opacity: 1;\n "), ro("&.popover-transition-enter-active", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-out),\n transform .15s var(--n-bezier-ease-out);\n "), ro("&.popover-transition-leave-active", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-in),\n transform .15s var(--n-bezier-ease-in);\n ")]), er("top-start", `\n top: calc(${Zn} / -2);\n left: calc(${Jn("top-start")} - var(--v-offset-left));\n `), er("top", `\n top: calc(${Zn} / -2);\n transform: translateX(calc(${Zn} / -2)) rotate(45deg);\n left: 50%;\n `), er("top-end", `\n top: calc(${Zn} / -2);\n right: calc(${Jn("top-end")} + var(--v-offset-left));\n `), er("bottom-start", `\n bottom: calc(${Zn} / -2);\n left: calc(${Jn("bottom-start")} - var(--v-offset-left));\n `), er("bottom", `\n bottom: calc(${Zn} / -2);\n transform: translateX(calc(${Zn} / -2)) rotate(45deg);\n left: 50%;\n `), er("bottom-end", `\n bottom: calc(${Zn} / -2);\n right: calc(${Jn("bottom-end")} + var(--v-offset-left));\n `), er("left-start", `\n left: calc(${Zn} / -2);\n top: calc(${Jn("left-start")} - var(--v-offset-top));\n `), er("left", `\n left: calc(${Zn} / -2);\n transform: translateY(calc(${Zn} / -2)) rotate(45deg);\n top: 50%;\n `), er("left-end", `\n left: calc(${Zn} / -2);\n bottom: calc(${Jn("left-end")} + var(--v-offset-top));\n `), er("right-start", `\n right: calc(${Zn} / -2);\n top: calc(${Jn("right-start")} - var(--v-offset-top));\n `), er("right", `\n right: calc(${Zn} / -2);\n transform: translateY(calc(${Zn} / -2)) rotate(45deg);\n top: 50%;\n `), er("right-end", `\n right: calc(${Zn} / -2);\n bottom: calc(${Jn("right-end")} + var(--v-offset-top));\n `), ...K({
		top: ["right-start", "left-start"],
		right: ["top-end", "bottom-end"],
		bottom: ["right-end", "left-end"],
		left: ["top-start", "bottom-start"]
	}, ((e, o) => {
		const n = ["right", "left"].includes(o),
			r = n ? "width" : "height";
		return e.map((e => {
			const t = "end" === e.split("-")[1],
				l = `calc((var(--v-target-${r}, 0px) - ${Zn}) / 2)`,
				a = Jn(e);
			return ro(`[v-placement="${e}"] >`, [lo("popover-shared", [io("center-arrow", [lo("popover-arrow", `${o}: calc(max(${l}, ${a}) ${t?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])
		}))
	}))]);

function Jn(e) {
	return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)"
}

function er(e, o) {
	const n = e.split("-")[0],
		r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
	return ro(`[v-placement="${e}"] >`, [lo("popover-shared", `\n margin-${Xn[n]}: var(--n-space);\n `, [io("show-arrow", `\n margin-${Xn[n]}: var(--n-space-arrow);\n `), io("overlap", "\n margin: 0;\n "), po("popover-arrow-wrapper", `\n right: 0;\n left: 0;\n top: 0;\n bottom: 0;\n ${n}: 100%;\n ${Xn[n]}: auto;\n ${r}\n `, [lo("popover-arrow", o)])])])
}
const or = Object.assign(Object.assign({}, Ao.props), {
		to: Co.propTo,
		show: Boolean,
		trigger: String,
		showArrow: Boolean,
		delay: Number,
		duration: Number,
		raw: Boolean,
		arrowPointToCenter: Boolean,
		arrowStyle: [String, Object],
		displayDirective: String,
		x: Number,
		y: Number,
		flip: Boolean,
		overlap: Boolean,
		placement: String,
		width: [Number, String],
		keepAliveOnHover: Boolean,
		scrollable: Boolean,
		contentStyle: [Object, String],
		headerStyle: [Object, String],
		footerStyle: [Object, String],
		internalDeactivateImmediately: Boolean,
		animated: Boolean,
		onClickoutside: Function,
		internalTrapFocus: Boolean,
		internalOnAfterLeave: Function,
		minWidth: Number,
		maxWidth: Number
	}),
	nr = ({
		arrowStyle: e,
		clsPrefix: o
	}) => P("div", {
		key: "__popover-arrow__",
		class: `${o}-popover-arrow-wrapper`
	}, P("div", {
		class: `${o}-popover-arrow`,
		style: e
	})),
	rr = t({
		name: "PopoverBody",
		inheritAttrs: !1,
		props: or,
		setup(e, {
			slots: n,
			attrs: r
		}) {
			const {
				namespaceRef: t,
				mergedClsPrefixRef: l,
				inlineThemeDisabled: a
			} = Ho(e), c = Ao("Popover", "-popover", Qn, Yn, e, l), u = i(null), h = d("NPopover"), v = i(null), b = i(e.show), f = i(!1);
			z((() => {
				const {
					show: o
				} = e;
				!o || (void 0 === ho && (ho = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), ho) || e.internalDeactivateImmediately || (f.value = !0)
			}));
			const g = x((() => {
					const {
						trigger: o,
						onClickoutside: n
					} = e, r = [], {
						positionManuallyRef: {
							value: t
						}
					} = h;
					return t || ("click" !== o || n || r.push([q, R, void 0, {
						capture: !0
					}]), "hover" === o && r.push([Y, $])), n && r.push([q, R, void 0, {
						capture: !0
					}]), ("show" === e.displayDirective || e.animated && f.value) && r.push([X, e.show]), r
				})),
				y = x((() => {
					const o = "trigger" === e.width ? void 0 : Ze(e.width),
						n = [];
					o && n.push({
						width: o
					});
					const {
						maxWidth: r,
						minWidth: t
					} = e;
					return r && n.push({
						maxWidth: Ze(r)
					}), t && n.push({
						maxWidth: Ze(t)
					}), a || n.push(w.value), n
				})),
				w = x((() => {
					const {
						common: {
							cubicBezierEaseInOut: e,
							cubicBezierEaseIn: o,
							cubicBezierEaseOut: n
						},
						self: {
							space: r,
							spaceArrow: t,
							padding: l,
							fontSize: a,
							textColor: i,
							dividerColor: s,
							color: d,
							boxShadow: u,
							borderRadius: p,
							arrowHeight: h,
							arrowOffset: v,
							arrowOffsetVertical: b
						}
					} = c.value;
					return {
						"--n-box-shadow": u,
						"--n-bezier": e,
						"--n-bezier-ease-in": o,
						"--n-bezier-ease-out": n,
						"--n-font-size": a,
						"--n-text-color": i,
						"--n-color": d,
						"--n-divider-color": s,
						"--n-border-radius": p,
						"--n-arrow-height": h,
						"--n-arrow-offset": v,
						"--n-arrow-offset-vertical": b,
						"--n-padding": l,
						"--n-space": r,
						"--n-space-arrow": t
					}
				})),
				C = a ? Wo("popover", void 0, w, e) : void 0;

			function S(o) {
				"hover" === e.trigger && e.keepAliveOnHover && e.show && h.handleMouseEnter(o)
			}

			function k(o) {
				"hover" === e.trigger && e.keepAliveOnHover && h.handleMouseLeave(o)
			}

			function $(o) {
				"hover" !== e.trigger || T().contains(L(o)) || h.handleMouseMoveOutside(o)
			}

			function R(o) {
				("click" === e.trigger && !T().contains(L(o)) || e.onClickoutside) && h.handleClickOutside(o)
			}

			function T() {
				return h.getTriggerElement()
			}
			return h.setBodyInstance({
				syncPosition: function() {
					var e;
					null === (e = u.value) || void 0 === e || e.syncPosition()
				}
			}), p((() => {
				h.setBodyInstance(null)
			})), s(M(e, "show"), (o => {
				e.animated || (b.value = !!o)
			})), m(yo, v), m(xo, null), m(mo, null), {
				displayed: f,
				namespace: t,
				isMounted: h.isMountedRef,
				zIndex: h.zIndexRef,
				followerRef: u,
				adjustedTo: Co(e),
				followerEnabled: b,
				renderContentNode: function() {
					if (null == C || C.onRender(), !("show" === e.displayDirective || e.show || e.animated && f.value)) return null;
					let t;
					const a = h.internalRenderBodyRef.value,
						{
							value: i
						} = l;
					if (a) t = a([`${i}-popover-shared`, null == C ? void 0 : C.themeClass.value, e.overlap && `${i}-popover-shared--overlap`, e.showArrow && `${i}-popover-shared--show-arrow`, e.arrowPointToCenter && `${i}-popover-shared--center-arrow`], v, y.value, S, k);
					else {
						const {
							value: l
						} = h.extraClassRef, {
							internalTrapFocus: a
						} = e, s = !Ke(n.header) || !Ke(n.footer), d = () => {
							var r;
							const t = s ? P(o, null, Ue(n.header, (o => o ? P("div", {
								class: `${i}-popover__header`,
								style: e.headerStyle
							}, o) : null)), Ue(n.default, (o => o ? P("div", {
								class: `${i}-popover__content`,
								style: e.contentStyle
							}, n) : null)), Ue(n.footer, (o => o ? P("div", {
								class: `${i}-popover__footer`,
								style: e.footerStyle
							}, o) : null))) : e.scrollable ? null === (r = n.default) || void 0 === r ? void 0 : r.call(n) : P("div", {
								class: `${i}-popover__content`,
								style: e.contentStyle
							}, n);
							return [e.scrollable ? P(Dn, {
								contentClass: s ? void 0 : `${i}-popover__content`,
								contentStyle: s ? void 0 : e.contentStyle
							}, {
								default: () => t
							}) : t, e.showArrow ? nr({
								arrowStyle: e.arrowStyle,
								clsPrefix: i
							}) : null]
						};
						t = P("div", E({
							class: [`${i}-popover`, `${i}-popover-shared`, null == C ? void 0 : C.themeClass.value, l.map((e => `${i}-${e}`)), {
								[`${i}-popover--scrollable`]: e.scrollable,
								[`${i}-popover--show-header-or-footer`]: s,
								[`${i}-popover--raw`]: e.raw,
								[`${i}-popover-shared--overlap`]: e.overlap,
								[`${i}-popover-shared--show-arrow`]: e.showArrow,
								[`${i}-popover-shared--center-arrow`]: e.arrowPointToCenter
							}],
							ref: v,
							style: y.value,
							onKeydown: h.handleKeydown,
							onMouseenter: S,
							onMouseleave: k
						}, r), a ? P(Z, {
							active: e.show,
							autoFocus: !0
						}, {
							default: d
						}) : d())
					}
					return Q(t, g.value)
				}
			}
		},
		render() {
			return P(G, {
				ref: "followerRef",
				zIndex: this.zIndex,
				show: this.show,
				enabled: this.followerEnabled,
				to: this.adjustedTo,
				x: this.x,
				y: this.y,
				flip: this.flip,
				placement: this.placement,
				containerClass: this.namespace,
				overlap: this.overlap,
				width: "trigger" === this.width ? "target" : void 0,
				teleportDisabled: this.adjustedTo === Co.tdkey
			}, {
				default: () => this.animated ? P(B, {
					name: "popover-transition",
					appear: this.isMounted,
					onEnter: () => {
						this.followerEnabled = !0
					},
					onAfterLeave: () => {
						var e;
						null === (e = this.internalOnAfterLeave) || void 0 === e || e.call(this), this.followerEnabled = !1, this.displayed = !1
					}
				}, {
					default: this.renderContentNode
				}) : this.renderContentNode()
			})
		}
	}),
	tr = Object.keys(or),
	lr = {
		focus: ["onFocus", "onBlur"],
		click: ["onClick"],
		hover: ["onMouseenter", "onMouseleave"],
		manual: [],
		nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
	},
	ar = e("").type,
	ir = {
		show: {
			type: Boolean,
			default: void 0
		},
		defaultShow: Boolean,
		showArrow: {
			type: Boolean,
			default: !0
		},
		trigger: {
			type: String,
			default: "hover"
		},
		delay: {
			type: Number,
			default: 100
		},
		duration: {
			type: Number,
			default: 100
		},
		raw: Boolean,
		placement: {
			type: String,
			default: "top"
		},
		x: Number,
		y: Number,
		arrowPointToCenter: Boolean,
		disabled: Boolean,
		getDisabled: Function,
		displayDirective: {
			type: String,
			default: "if"
		},
		arrowStyle: [String, Object],
		flip: {
			type: Boolean,
			default: !0
		},
		animated: {
			type: Boolean,
			default: !0
		},
		width: {
			type: [Number, String],
			default: void 0
		},
		overlap: Boolean,
		keepAliveOnHover: {
			type: Boolean,
			default: !0
		},
		zIndex: Number,
		to: Co.propTo,
		scrollable: Boolean,
		contentStyle: [Object, String],
		headerStyle: [Object, String],
		footerStyle: [Object, String],
		onClickoutside: Function,
		"onUpdate:show": [Function, Array],
		onUpdateShow: [Function, Array],
		internalDeactivateImmediately: Boolean,
		internalSyncTargetWithParent: Boolean,
		internalInheritedEventHandlers: {
			type: Array,
			default: () => []
		},
		internalTrapFocus: Boolean,
		internalExtraClass: {
			type: Array,
			default: () => []
		},
		onShow: [Function, Array],
		onHide: [Function, Array],
		arrow: {
			type: Boolean,
			default: void 0
		},
		minWidth: Number,
		maxWidth: Number
	},
	sr = Object.assign(Object.assign(Object.assign({}, Ao.props), ir), {
		internalOnAfterLeave: Function,
		internalRenderBody: Function
	}),
	dr = t({
		name: "Popover",
		inheritAttrs: !1,
		props: sr,
		__popover__: !0,
		setup(e) {
			const o = T(),
				n = i(null),
				r = x((() => e.show)),
				t = i(e.defaultShow),
				l = J(r, t),
				a = v((() => !e.disabled && l.value)),
				s = () => {
					if (e.disabled) return !0;
					const {
						getDisabled: o
					} = e;
					return !!(null == o ? void 0 : o())
				},
				d = () => !s() && l.value,
				c = ee(e, ["arrow", "showArrow"]),
				u = x((() => !e.overlap && c.value));
			let p = null;
			const h = i(null),
				b = i(null),
				f = v((() => void 0 !== e.x && void 0 !== e.y));

			function g(o) {
				const {
					"onUpdate:show": n,
					onUpdateShow: r,
					onShow: l,
					onHide: a
				} = e;
				t.value = o, n && De(n, o), r && De(r, o), o && l && De(l, !0), o && a && De(a, !1)
			}

			function y() {
				const {
					value: e
				} = h;
				e && (window.clearTimeout(e), h.value = null)
			}

			function w() {
				const {
					value: e
				} = b;
				e && (window.clearTimeout(e), b.value = null)
			}

			function C() {
				const o = s();
				if ("hover" === e.trigger && !o) {
					if (w(), null !== h.value) return;
					if (d()) return;
					const o = () => {
							g(!0), h.value = null
						},
						{
							delay: n
						} = e;
					0 === n ? o() : h.value = window.setTimeout(o, n)
				}
			}

			function S() {
				const o = s();
				if ("hover" === e.trigger && !o) {
					if (y(), null !== b.value) return;
					if (!d()) return;
					const o = () => {
							g(!1), b.value = null
						},
						{
							duration: n
						} = e;
					0 === n ? o() : b.value = window.setTimeout(o, n)
				}
			}
			return m("NPopover", {
				getTriggerElement: function() {
					var e;
					return null === (e = n.value) || void 0 === e ? void 0 : e.targetRef
				},
				handleKeydown: function(o) {
					e.internalTrapFocus && "Escape" === o.key && (y(), w(), g(!1))
				},
				handleMouseEnter: C,
				handleMouseLeave: S,
				handleClickOutside: function(o) {
					var n;
					d() && ("click" === e.trigger && (y(), w(), g(!1)), null === (n = e.onClickoutside) || void 0 === n || n.call(e, o))
				},
				handleMouseMoveOutside: function() {
					S()
				},
				setBodyInstance: function(e) {
					p = e
				},
				positionManuallyRef: f,
				isMountedRef: o,
				zIndexRef: M(e, "zIndex"),
				extraClassRef: M(e, "internalExtraClass"),
				internalRenderBodyRef: M(e, "internalRenderBody")
			}), z((() => {
				l.value && s() && g(!1)
			})), {
				binderInstRef: n,
				positionManually: f,
				mergedShowConsideringDisabledProp: a,
				uncontrolledShow: t,
				mergedShowArrow: u,
				getMergedShow: d,
				setShow: function(e) {
					t.value = e
				},
				handleClick: function() {
					"click" !== e.trigger || s() || (y(), w(), g(!d()))
				},
				handleMouseEnter: C,
				handleMouseLeave: S,
				handleFocus: function() {
					const o = s();
					if ("focus" === e.trigger && !o) {
						if (d()) return;
						g(!0)
					}
				},
				handleBlur: function() {
					const o = s();
					if ("focus" === e.trigger && !o) {
						if (!d()) return;
						g(!1)
					}
				},
				syncPosition: function() {
					p && p.syncPosition()
				}
			}
		},
		render() {
			var e;
			const {
				positionManually: o,
				$slots: n
			} = this;
			let r, t = !1;
			if (!o && (r = n.activator ? je(n, "activator") : je(n, "trigger"), r)) {
				r = oe(r), r = r.type === ar ? P("span", [r]) : r;
				const n = {
					onClick: this.handleClick,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur
				};
				if (null === (e = r.type) || void 0 === e ? void 0 : e.__popover__) t = !0, r.props || (r.props = {
					internalSyncTargetWithParent: !0,
					internalInheritedEventHandlers: []
				}), r.props.internalSyncTargetWithParent = !0, r.props.internalInheritedEventHandlers ? r.props.internalInheritedEventHandlers = [n, ...r.props.internalInheritedEventHandlers] : r.props.internalInheritedEventHandlers = [n];
				else {
					const {
						internalInheritedEventHandlers: e
					} = this, t = [n, ...e], s = {
						onBlur: e => {
							t.forEach((o => {
								o.onBlur(e)
							}))
						},
						onFocus: e => {
							t.forEach((o => {
								o.onFocus(e)
							}))
						},
						onClick: e => {
							t.forEach((o => {
								o.onClick(e)
							}))
						},
						onMouseenter: e => {
							t.forEach((o => {
								o.onMouseenter(e)
							}))
						},
						onMouseleave: e => {
							t.forEach((o => {
								o.onMouseleave(e)
							}))
						}
					};
					l = r, a = e ? "nested" : o ? "manual" : this.trigger, i = s, lr[a].forEach((e => {
						l.props ? l.props = Object.assign({}, l.props) : l.props = {};
						const o = l.props[e],
							n = i[e];
						l.props[e] = o ? (...e) => {
							o(...e), n(...e)
						} : n
					}))
				}
			}
			var l, a, i;
			return P(ne, {
				ref: "binderInstRef",
				syncTarget: !t,
				syncTargetWithParent: this.internalSyncTargetWithParent
			}, {
				default: () => {
					this.mergedShowConsideringDisabledProp;
					const e = this.getMergedShow();
					return [this.internalTrapFocus && e ? Q(P("div", {
						style: {
							position: "fixed",
							inset: 0
						}
					}), [
						[re, {
							enabled: e,
							zIndex: this.zIndex
						}]
					]) : null, o ? null : P(te, null, {
						default: () => r
					}), P(rr, Ie(this.$props, tr, Object.assign(Object.assign({}, this.$attrs), {
						showArrow: this.mergedShowArrow,
						show: e
					})), {
						default: () => {
							var e, o;
							return null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e)
						},
						header: () => {
							var e, o;
							return null === (o = (e = this.$slots).header) || void 0 === o ? void 0 : o.call(e)
						},
						footer: () => {
							var e, o;
							return null === (o = (e = this.$slots).footer) || void 0 === o ? void 0 : o.call(e)
						}
					})]
				}
			})
		}
	}),
	cr = {
		closeIconSizeTiny: "12px",
		closeIconSizeSmall: "12px",
		closeIconSizeMedium: "14px",
		closeIconSizeLarge: "14px",
		closeSizeTiny: "16px",
		closeSizeSmall: "16px",
		closeSizeMedium: "18px",
		closeSizeLarge: "18px",
		padding: "0 7px",
		closeMargin: "0 0 0 4px",
		closeMarginRtl: "0 4px 0 0"
	},
	ur = {
		name: "Tag",
		common: zn,
		self: e => {
			const {
				textColor2: o,
				primaryColorHover: n,
				primaryColorPressed: r,
				primaryColor: t,
				infoColor: l,
				successColor: a,
				warningColor: i,
				errorColor: s,
				baseColor: d,
				borderColor: c,
				opacityDisabled: u,
				tagColor: p,
				closeIconColor: h,
				closeIconColorHover: v,
				closeIconColorPressed: b,
				borderRadiusSmall: f,
				fontSizeMini: g,
				fontSizeTiny: m,
				fontSizeSmall: x,
				fontSizeMedium: y,
				heightMini: w,
				heightTiny: C,
				heightSmall: S,
				heightMedium: z,
				closeColorHover: k,
				closeColorPressed: $,
				buttonColor2Hover: P,
				buttonColor2Pressed: R,
				fontWeightStrong: T
			} = e;
			return Object.assign(Object.assign({}, cr), {
				closeBorderRadius: f,
				heightTiny: w,
				heightSmall: C,
				heightMedium: S,
				heightLarge: z,
				borderRadius: f,
				opacityDisabled: u,
				fontSizeTiny: g,
				fontSizeSmall: m,
				fontSizeMedium: x,
				fontSizeLarge: y,
				fontWeightStrong: T,
				textColorCheckable: o,
				textColorHoverCheckable: o,
				textColorPressedCheckable: o,
				textColorChecked: d,
				colorCheckable: "#0000",
				colorHoverCheckable: P,
				colorPressedCheckable: R,
				colorChecked: t,
				colorCheckedHover: n,
				colorCheckedPressed: r,
				border: `1px solid ${c}`,
				textColor: o,
				color: p,
				colorBordered: "rgb(250, 250, 252)",
				closeIconColor: h,
				closeIconColorHover: v,
				closeIconColorPressed: b,
				closeColorHover: k,
				closeColorPressed: $,
				borderPrimary: `1px solid ${le(t,{alpha:.3})}`,
				textColorPrimary: t,
				colorPrimary: le(t, {
					alpha: .12
				}),
				colorBorderedPrimary: le(t, {
					alpha: .1
				}),
				closeIconColorPrimary: t,
				closeIconColorHoverPrimary: t,
				closeIconColorPressedPrimary: t,
				closeColorHoverPrimary: le(t, {
					alpha: .12
				}),
				closeColorPressedPrimary: le(t, {
					alpha: .18
				}),
				borderInfo: `1px solid ${le(l,{alpha:.3})}`,
				textColorInfo: l,
				colorInfo: le(l, {
					alpha: .12
				}),
				colorBorderedInfo: le(l, {
					alpha: .1
				}),
				closeIconColorInfo: l,
				closeIconColorHoverInfo: l,
				closeIconColorPressedInfo: l,
				closeColorHoverInfo: le(l, {
					alpha: .12
				}),
				closeColorPressedInfo: le(l, {
					alpha: .18
				}),
				borderSuccess: `1px solid ${le(a,{alpha:.3})}`,
				textColorSuccess: a,
				colorSuccess: le(a, {
					alpha: .12
				}),
				colorBorderedSuccess: le(a, {
					alpha: .1
				}),
				closeIconColorSuccess: a,
				closeIconColorHoverSuccess: a,
				closeIconColorPressedSuccess: a,
				closeColorHoverSuccess: le(a, {
					alpha: .12
				}),
				closeColorPressedSuccess: le(a, {
					alpha: .18
				}),
				borderWarning: `1px solid ${le(i,{alpha:.35})}`,
				textColorWarning: i,
				colorWarning: le(i, {
					alpha: .15
				}),
				colorBorderedWarning: le(i, {
					alpha: .12
				}),
				closeIconColorWarning: i,
				closeIconColorHoverWarning: i,
				closeIconColorPressedWarning: i,
				closeColorHoverWarning: le(i, {
					alpha: .12
				}),
				closeColorPressedWarning: le(i, {
					alpha: .18
				}),
				borderError: `1px solid ${le(s,{alpha:.23})}`,
				textColorError: s,
				colorError: le(s, {
					alpha: .1
				}),
				colorBorderedError: le(s, {
					alpha: .08
				}),
				closeIconColorError: s,
				closeIconColorHoverError: s,
				closeIconColorPressedError: s,
				closeColorHoverError: le(s, {
					alpha: .12
				}),
				closeColorPressedError: le(s, {
					alpha: .18
				})
			})
		}
	},
	pr = {
		color: Object,
		type: {
			type: String,
			default: "default"
		},
		round: Boolean,
		size: {
			type: String,
			default: "medium"
		},
		closable: Boolean,
		disabled: {
			type: Boolean,
			default: void 0
		}
	},
	hr = lo("tag", "\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n", [io("strong", "\n font-weight: var(--n-font-weight-strong);\n "), ao("border", "\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "), ao("icon", "\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "), ao("avatar", "\n display: flex;\n margin: 0 6px 0 0;\n "), ao("close", "\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "), io("round", "\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ", [ao("icon", "\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "), ao("avatar", "\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "), io("closable", "\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")]), io("icon, avatar", [io("round", "\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]), io("disabled", "\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "), io("checkable", "\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ", [so("disabled", [ro("&:hover", "background-color: var(--n-color-hover-checkable);", [so("checked", "color: var(--n-text-color-hover-checkable);")]), ro("&:active", "background-color: var(--n-color-pressed-checkable);", [so("checked", "color: var(--n-text-color-pressed-checkable);")])]), io("checked", "\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ", [so("disabled", [ro("&:hover", "background-color: var(--n-color-checked-hover);"), ro("&:active", "background-color: var(--n-color-checked-pressed);")])])])]),
	vr = Object.assign(Object.assign(Object.assign({}, Ao.props), pr), {
		bordered: {
			type: Boolean,
			default: void 0
		},
		checked: Boolean,
		checkable: Boolean,
		strong: Boolean,
		triggerClickOnClose: Boolean,
		onClose: [Array, Function],
		onMouseenter: Function,
		onMouseleave: Function,
		"onUpdate:checked": Function,
		onUpdateChecked: Function,
		internalCloseFocusable: {
			type: Boolean,
			default: !0
		},
		internalCloseIsButtonTag: {
			type: Boolean,
			default: !0
		},
		onCheckedChange: Function
	}),
	br = "n-tag",
	fr = t({
		name: "Tag",
		props: vr,
		setup(e) {
			const o = i(null),
				{
					mergedBorderedRef: n,
					mergedClsPrefixRef: r,
					inlineThemeDisabled: t,
					mergedRtlRef: l
				} = Ho(e),
				a = Ao("Tag", "-tag", hr, ur, e, r);
			m(br, {
				roundRef: M(e, "round")
			});
			const s = {
					setTextContent(e) {
						const {
							value: n
						} = o;
						n && (n.textContent = e)
					}
				},
				d = Vo("Tag", l, r),
				c = x((() => {
					const {
						type: o,
						size: r,
						color: {
							color: t,
							textColor: l
						} = {}
					} = e, {
						common: {
							cubicBezierEaseInOut: i
						},
						self: {
							padding: s,
							closeMargin: d,
							closeMarginRtl: c,
							borderRadius: u,
							opacityDisabled: p,
							textColorCheckable: h,
							textColorHoverCheckable: v,
							textColorPressedCheckable: b,
							textColorChecked: f,
							colorCheckable: g,
							colorHoverCheckable: m,
							colorPressedCheckable: x,
							colorChecked: y,
							colorCheckedHover: w,
							colorCheckedPressed: C,
							closeBorderRadius: S,
							fontWeightStrong: z,
							[Je("colorBordered", o)]: k,
							[Je("closeSize", r)]: $,
							[Je("closeIconSize", r)]: P,
							[Je("fontSize", r)]: R,
							[Je("height", r)]: T,
							[Je("color", o)]: B,
							[Je("textColor", o)]: F,
							[Je("border", o)]: M,
							[Je("closeIconColor", o)]: O,
							[Je("closeIconColorHover", o)]: I,
							[Je("closeIconColorPressed", o)]: A,
							[Je("closeColorHover", o)]: D,
							[Je("closeColorPressed", o)]: H
						}
					} = a.value;
					return {
						"--n-font-weight-strong": z,
						"--n-avatar-size-override": `calc(${T} - 8px)`,
						"--n-bezier": i,
						"--n-border-radius": u,
						"--n-border": M,
						"--n-close-icon-size": P,
						"--n-close-color-pressed": H,
						"--n-close-color-hover": D,
						"--n-close-border-radius": S,
						"--n-close-icon-color": O,
						"--n-close-icon-color-hover": I,
						"--n-close-icon-color-pressed": A,
						"--n-close-icon-color-disabled": O,
						"--n-close-margin": d,
						"--n-close-margin-rtl": c,
						"--n-close-size": $,
						"--n-color": t || (n.value ? k : B),
						"--n-color-checkable": g,
						"--n-color-checked": y,
						"--n-color-checked-hover": w,
						"--n-color-checked-pressed": C,
						"--n-color-hover-checkable": m,
						"--n-color-pressed-checkable": x,
						"--n-font-size": R,
						"--n-height": T,
						"--n-opacity-disabled": p,
						"--n-padding": s,
						"--n-text-color": l || F,
						"--n-text-color-checkable": h,
						"--n-text-color-checked": f,
						"--n-text-color-hover-checkable": v,
						"--n-text-color-pressed-checkable": b
					}
				})),
				u = t ? Wo("tag", x((() => {
					let o = "";
					const {
						type: r,
						size: t,
						color: {
							color: l,
							textColor: a
						} = {}
					} = e;
					return o += r[0], o += t[0], l && (o += `a${Qe(l)}`), a && (o += `b${Qe(a)}`), n.value && (o += "c"), o
				})), c, e) : void 0;
			return Object.assign(Object.assign({}, s), {
				rtlEnabled: d,
				mergedClsPrefix: r,
				contentRef: o,
				mergedBordered: n,
				handleClick: function(o) {
					if (!e.disabled && e.checkable) {
						const {
							checked: o,
							onCheckedChange: n,
							onUpdateChecked: r,
							"onUpdate:checked": t
						} = e;
						r && r(!o), t && t(!o), n && n(!o)
					}
				},
				handleCloseClick: function(o) {
					if (e.triggerClickOnClose || o.stopPropagation(), !e.disabled) {
						const {
							onClose: n
						} = e;
						n && De(n, o)
					}
				},
				cssVars: t ? void 0 : c,
				themeClass: null == u ? void 0 : u.themeClass,
				onRender: null == u ? void 0 : u.onRender
			})
		},
		render() {
			var e, o;
			const {
				mergedClsPrefix: n,
				rtlEnabled: r,
				closable: t,
				color: {
					borderColor: l
				} = {},
				round: a,
				onRender: i,
				$slots: s
			} = this;
			null == i || i();
			const d = Ue(s.avatar, (e => e && P("div", {
					class: `${n}-tag__avatar`
				}, e))),
				c = Ue(s.icon, (e => e && P("div", {
					class: `${n}-tag__icon`
				}, e)));
			return P("div", {
				class: [`${n}-tag`, this.themeClass, {
					[`${n}-tag--rtl`]: r,
					[`${n}-tag--strong`]: this.strong,
					[`${n}-tag--disabled`]: this.disabled,
					[`${n}-tag--checkable`]: this.checkable,
					[`${n}-tag--checked`]: this.checkable && this.checked,
					[`${n}-tag--round`]: a,
					[`${n}-tag--avatar`]: d,
					[`${n}-tag--icon`]: c,
					[`${n}-tag--closable`]: t
				}],
				style: this.cssVars,
				onClick: this.handleClick,
				onMouseenter: this.onMouseenter,
				onMouseleave: this.onMouseleave
			}, c || d, P("span", {
				class: `${n}-tag__content`,
				ref: "contentRef"
			}, null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e)), !this.checkable && t ? P(an, {
				clsPrefix: n,
				class: `${n}-tag__close`,
				disabled: this.disabled,
				onClick: this.handleCloseClick,
				focusable: this.internalCloseFocusable,
				round: a,
				isButtonTag: this.internalCloseIsButtonTag,
				absolute: !0
			}) : null, !this.checkable && this.mergedBordered ? P("div", {
				class: `${n}-tag__border`,
				style: {
					borderColor: l
				}
			}) : null)
		}
	}),
	gr = lo("base-clear", "\n flex-shrink: 0;\n height: 1em;\n width: 1em;\n position: relative;\n", [ro(">", [ao("clear", "\n font-size: var(--n-clear-size);\n height: 1em;\n width: 1em;\n cursor: pointer;\n color: var(--n-clear-color);\n transition: color .3s var(--n-bezier);\n display: flex;\n ", [ro("&:hover", "\n color: var(--n-clear-color-hover)!important;\n "), ro("&:active", "\n color: var(--n-clear-color-pressed)!important;\n ")]), ao("placeholder", "\n display: flex;\n "), ao("clear, placeholder", "\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n ", [cn({
		originalTransform: "translateX(-50%) translateY(-50%)",
		left: "50%",
		top: "50%"
	})])])]),
	mr = t({
		name: "BaseClear",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			show: Boolean,
			onClear: Function
		},
		setup: e => (No("-base-clear", gr, M(e, "clsPrefix")), {
			handleMouseDown(e) {
				e.preventDefault()
			}
		}),
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-base-clear`
			}, P(on, null, {
				default: () => {
					var o, n;
					return this.show ? P("div", {
						key: "dismiss",
						class: `${e}-base-clear__clear`,
						onClick: this.onClear,
						onMousedown: this.handleMouseDown,
						"data-clear": !0
					}, Ve(this.$slots.icon, (() => [P(tn, {
						clsPrefix: e
					}, {
						default: () => P(en, null)
					})]))) : P("div", {
						key: "icon",
						class: `${e}-base-clear__placeholder`
					}, null === (n = (o = this.$slots).placeholder) || void 0 === n ? void 0 : n.call(o))
				}
			}))
		}
	}),
	xr = t({
		name: "InternalSelectionSuffix",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			showArrow: {
				type: Boolean,
				default: void 0
			},
			showClear: {
				type: Boolean,
				default: void 0
			},
			loading: {
				type: Boolean,
				default: !1
			},
			onClear: Function
		},
		setup: (e, {
			slots: o
		}) => () => {
			const {
				clsPrefix: n
			} = e;
			return P(hn, {
				clsPrefix: n,
				class: `${n}-base-suffix`,
				strokeWidth: 24,
				scale: .85,
				show: e.loading
			}, {
				default: () => e.showArrow ? P(mr, {
					clsPrefix: n,
					show: e.showClear,
					onClear: e.onClear
				}, {
					placeholder: () => P(tn, {
						clsPrefix: n,
						class: `${n}-base-suffix__arrow`
					}, {
						default: () => Ve(o.default, (() => [P(Jo, null)]))
					})
				}) : null
			})
		}
	}),
	yr = {
		paddingSingle: "0 26px 0 12px",
		paddingMultiple: "3px 26px 0 12px",
		clearSize: "16px",
		arrowSize: "16px"
	},
	wr = {
		name: "InternalSelection",
		common: zn,
		peers: {
			Popover: Yn
		},
		self: e => {
			const {
				borderRadius: o,
				textColor2: n,
				textColorDisabled: r,
				inputColor: t,
				inputColorDisabled: l,
				primaryColor: a,
				primaryColorHover: i,
				warningColor: s,
				warningColorHover: d,
				errorColor: c,
				errorColorHover: u,
				borderColor: p,
				iconColor: h,
				iconColorDisabled: v,
				clearColor: b,
				clearColorHover: f,
				clearColorPressed: g,
				placeholderColor: m,
				placeholderColorDisabled: x,
				fontSizeTiny: y,
				fontSizeSmall: w,
				fontSizeMedium: C,
				fontSizeLarge: S,
				heightTiny: z,
				heightSmall: k,
				heightMedium: $,
				heightLarge: P
			} = e;
			return Object.assign(Object.assign({}, yr), {
				fontSizeTiny: y,
				fontSizeSmall: w,
				fontSizeMedium: C,
				fontSizeLarge: S,
				heightTiny: z,
				heightSmall: k,
				heightMedium: $,
				heightLarge: P,
				borderRadius: o,
				textColor: n,
				textColorDisabled: r,
				placeholderColor: m,
				placeholderColorDisabled: x,
				color: t,
				colorDisabled: l,
				colorActive: t,
				border: `1px solid ${p}`,
				borderHover: `1px solid ${i}`,
				borderActive: `1px solid ${a}`,
				borderFocus: `1px solid ${i}`,
				boxShadowHover: "none",
				boxShadowActive: `0 0 0 2px ${le(a,{alpha:.2})}`,
				boxShadowFocus: `0 0 0 2px ${le(a,{alpha:.2})}`,
				caretColor: a,
				arrowColor: h,
				arrowColorDisabled: v,
				loadingColor: a,
				borderWarning: `1px solid ${s}`,
				borderHoverWarning: `1px solid ${d}`,
				borderActiveWarning: `1px solid ${s}`,
				borderFocusWarning: `1px solid ${d}`,
				boxShadowHoverWarning: "none",
				boxShadowActiveWarning: `0 0 0 2px ${le(s,{alpha:.2})}`,
				boxShadowFocusWarning: `0 0 0 2px ${le(s,{alpha:.2})}`,
				colorActiveWarning: t,
				caretColorWarning: s,
				borderError: `1px solid ${c}`,
				borderHoverError: `1px solid ${u}`,
				borderActiveError: `1px solid ${c}`,
				borderFocusError: `1px solid ${u}`,
				boxShadowHoverError: "none",
				boxShadowActiveError: `0 0 0 2px ${le(c,{alpha:.2})}`,
				boxShadowFocusError: `0 0 0 2px ${le(c,{alpha:.2})}`,
				colorActiveError: t,
				caretColorError: c,
				clearColor: b,
				clearColorHover: f,
				clearColorPressed: g
			})
		}
	},
	Cr = ro([lo("base-selection", "\n position: relative;\n z-index: auto;\n box-shadow: none;\n width: 100%;\n max-width: 100%;\n display: inline-block;\n vertical-align: bottom;\n border-radius: var(--n-border-radius);\n min-height: var(--n-height);\n line-height: 1.5;\n font-size: var(--n-font-size);\n ", [lo("base-loading", "\n color: var(--n-loading-color);\n "), lo("base-selection-tags", "min-height: var(--n-height);"), ao("border, state-border", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border: var(--n-border);\n border-radius: inherit;\n transition:\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n "), ao("state-border", "\n z-index: 1;\n border-color: #0000;\n "), lo("base-suffix", "\n cursor: pointer;\n position: absolute;\n top: 50%;\n transform: translateY(-50%);\n right: 10px;\n ", [ao("arrow", "\n font-size: var(--n-arrow-size);\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n ")]), lo("base-selection-overlay", "\n display: flex;\n align-items: center;\n white-space: nowrap;\n pointer-events: none;\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n padding: var(--n-padding-single);\n transition: color .3s var(--n-bezier);\n ", [ao("wrapper", "\n flex-basis: 0;\n flex-grow: 1;\n overflow: hidden;\n text-overflow: ellipsis;\n ")]), lo("base-selection-placeholder", "\n color: var(--n-placeholder-color);\n ", [ao("inner", "\n max-width: 100%;\n overflow: hidden;\n ")]), lo("base-selection-tags", "\n cursor: pointer;\n outline: none;\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n display: flex;\n padding: var(--n-padding-multiple);\n flex-wrap: wrap;\n align-items: center;\n width: 100%;\n vertical-align: bottom;\n background-color: var(--n-color);\n border-radius: inherit;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "), lo("base-selection-label", "\n height: var(--n-height);\n display: inline-flex;\n width: 100%;\n vertical-align: bottom;\n cursor: pointer;\n outline: none;\n z-index: auto;\n box-sizing: border-box;\n position: relative;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: inherit;\n background-color: var(--n-color);\n align-items: center;\n ", [lo("base-selection-input", "\n font-size: inherit;\n line-height: inherit;\n outline: none;\n cursor: pointer;\n box-sizing: border-box;\n border:none;\n width: 100%;\n padding: var(--n-padding-single);\n background-color: #0000;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n caret-color: var(--n-caret-color);\n ", [ao("content", "\n text-overflow: ellipsis;\n overflow: hidden;\n white-space: nowrap; \n ")]), ao("render-label", "\n color: var(--n-text-color);\n ")]), so("disabled", [ro("&:hover", [ao("state-border", "\n box-shadow: var(--n-box-shadow-hover);\n border: var(--n-border-hover);\n ")]), io("focus", [ao("state-border", "\n box-shadow: var(--n-box-shadow-focus);\n border: var(--n-border-focus);\n ")]), io("active", [ao("state-border", "\n box-shadow: var(--n-box-shadow-active);\n border: var(--n-border-active);\n "), lo("base-selection-label", "background-color: var(--n-color-active);"), lo("base-selection-tags", "background-color: var(--n-color-active);")])]), io("disabled", "cursor: not-allowed;", [ao("arrow", "\n color: var(--n-arrow-color-disabled);\n "), lo("base-selection-label", "\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n ", [lo("base-selection-input", "\n cursor: not-allowed;\n color: var(--n-text-color-disabled);\n "), ao("render-label", "\n color: var(--n-text-color-disabled);\n ")]), lo("base-selection-tags", "\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n "), lo("base-selection-placeholder", "\n cursor: not-allowed;\n color: var(--n-placeholder-color-disabled);\n ")]), lo("base-selection-input-tag", "\n height: calc(var(--n-height) - 6px);\n line-height: calc(var(--n-height) - 6px);\n outline: none;\n display: none;\n position: relative;\n margin-bottom: 3px;\n max-width: 100%;\n vertical-align: bottom;\n ", [ao("input", "\n font-size: inherit;\n font-family: inherit;\n min-width: 1px;\n padding: 0;\n background-color: #0000;\n outline: none;\n border: none;\n max-width: 100%;\n overflow: hidden;\n width: 1em;\n line-height: inherit;\n cursor: pointer;\n color: var(--n-text-color);\n caret-color: var(--n-caret-color);\n "), ao("mirror", "\n position: absolute;\n left: 0;\n top: 0;\n white-space: pre;\n visibility: hidden;\n user-select: none;\n -webkit-user-select: none;\n opacity: 0;\n ")]), ["warning", "error"].map((e => io(`${e}-status`, [ao("state-border", `border: var(--n-border-${e});`), so("disabled", [ro("&:hover", [ao("state-border", `\n box-shadow: var(--n-box-shadow-hover-${e});\n border: var(--n-border-hover-${e});\n `)]), io("active", [ao("state-border", `\n box-shadow: var(--n-box-shadow-active-${e});\n border: var(--n-border-active-${e});\n `), lo("base-selection-label", `background-color: var(--n-color-active-${e});`), lo("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), io("focus", [ao("state-border", `\n box-shadow: var(--n-box-shadow-focus-${e});\n border: var(--n-border-focus-${e});\n `)])])])))]), lo("base-selection-popover", "\n margin-bottom: -3px;\n display: flex;\n flex-wrap: wrap;\n margin-right: -8px;\n "), lo("base-selection-tag-wrapper", "\n max-width: 100%;\n display: inline-flex;\n padding: 0 7px 3px 0;\n ", [ro("&:last-child", "padding-right: 0;"), lo("tag", "\n font-size: 14px;\n max-width: 100%;\n ", [ao("content", "\n line-height: 1.25;\n text-overflow: ellipsis;\n overflow: hidden;\n ")])])]),
	Sr = t({
		name: "InternalSelection",
		props: Object.assign(Object.assign({}, Ao.props), {
			clsPrefix: {
				type: String,
				required: !0
			},
			bordered: {
				type: Boolean,
				default: void 0
			},
			active: Boolean,
			pattern: {
				type: String,
				default: ""
			},
			placeholder: String,
			selectedOption: {
				type: Object,
				default: null
			},
			selectedOptions: {
				type: Array,
				default: null
			},
			labelField: {
				type: String,
				default: "label"
			},
			valueField: {
				type: String,
				default: "value"
			},
			multiple: Boolean,
			filterable: Boolean,
			clearable: Boolean,
			disabled: Boolean,
			size: {
				type: String,
				default: "medium"
			},
			loading: Boolean,
			autofocus: Boolean,
			showArrow: {
				type: Boolean,
				default: !0
			},
			inputProps: Object,
			focused: Boolean,
			renderTag: Function,
			onKeydown: Function,
			onClick: Function,
			onBlur: Function,
			onFocus: Function,
			onDeleteOption: Function,
			maxTagCount: [String, Number],
			onClear: Function,
			onPatternInput: Function,
			onPatternFocus: Function,
			onPatternBlur: Function,
			renderLabel: Function,
			status: String,
			inlineThemeDisabled: Boolean,
			ignoreComposition: {
				type: Boolean,
				default: !0
			},
			onResize: Function
		}),
		setup(e) {
			const o = i(null),
				n = i(null),
				r = i(null),
				t = i(null),
				l = i(null),
				a = i(null),
				d = i(null),
				u = i(null),
				p = i(null),
				h = i(null),
				v = i(!1),
				b = i(!1),
				f = i(!1),
				g = Ao("InternalSelection", "-internal-selection", Cr, wr, e, M(e, "clsPrefix")),
				m = x((() => e.clearable && !e.disabled && (f.value || e.active))),
				y = x((() => e.selectedOption ? e.renderTag ? e.renderTag({
					option: e.selectedOption,
					handleClose: () => {}
				}) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : He(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder)),
				w = x((() => {
					const o = e.selectedOption;
					if (o) return o[e.labelField]
				})),
				C = x((() => e.multiple ? !(!Array.isArray(e.selectedOptions) || !e.selectedOptions.length) : null !== e.selectedOption));

			function S() {
				var r;
				const {
					value: t
				} = o;
				if (t) {
					const {
						value: o
					} = n;
					o && (o.style.width = `${t.offsetWidth}px`, "responsive" !== e.maxTagCount && (null === (r = p.value) || void 0 === r || r.sync()))
				}
			}

			function k(o) {
				const {
					onPatternInput: n
				} = e;
				n && n(o)
			}

			function $(o) {
				! function(o) {
					const {
						onDeleteOption: n
					} = e;
					n && n(o)
				}(o)
			}
			s(M(e, "active"), (e => {
				e || function() {
					const {
						value: e
					} = h;
					e && (e.style.display = "none")
				}()
			})), s(M(e, "pattern"), (() => {
				e.multiple && W(S)
			}));
			const P = i(!1);
			let R = null,
				T = null;

			function B() {
				null !== T && window.clearTimeout(T)
			}
			s(C, (e => {
				e || (v.value = !1)
			})), c((() => {
				z((() => {
					const o = a.value;
					o && (o.tabIndex = e.disabled || b.value ? -1 : 0)
				}))
			})), zo(r, e.onResize);
			const {
				inlineThemeDisabled: F
			} = e, O = x((() => {
				const {
					size: o
				} = e, {
					common: {
						cubicBezierEaseInOut: n
					},
					self: {
						borderRadius: r,
						color: t,
						placeholderColor: l,
						textColor: a,
						paddingSingle: i,
						paddingMultiple: s,
						caretColor: d,
						colorDisabled: c,
						textColorDisabled: u,
						placeholderColorDisabled: p,
						colorActive: h,
						boxShadowFocus: v,
						boxShadowActive: b,
						boxShadowHover: f,
						border: m,
						borderFocus: x,
						borderHover: y,
						borderActive: w,
						arrowColor: C,
						arrowColorDisabled: S,
						loadingColor: z,
						colorActiveWarning: k,
						boxShadowFocusWarning: $,
						boxShadowActiveWarning: P,
						boxShadowHoverWarning: R,
						borderWarning: T,
						borderFocusWarning: B,
						borderHoverWarning: F,
						borderActiveWarning: M,
						colorActiveError: O,
						boxShadowFocusError: I,
						boxShadowActiveError: A,
						boxShadowHoverError: D,
						borderError: H,
						borderFocusError: E,
						borderHoverError: L,
						borderActiveError: _,
						clearColor: j,
						clearColorHover: N,
						clearColorPressed: W,
						clearSize: V,
						arrowSize: U,
						[Je("height", o)]: K,
						[Je("fontSize", o)]: G
					}
				} = g.value;
				return {
					"--n-bezier": n,
					"--n-border": m,
					"--n-border-active": w,
					"--n-border-focus": x,
					"--n-border-hover": y,
					"--n-border-radius": r,
					"--n-box-shadow-active": b,
					"--n-box-shadow-focus": v,
					"--n-box-shadow-hover": f,
					"--n-caret-color": d,
					"--n-color": t,
					"--n-color-active": h,
					"--n-color-disabled": c,
					"--n-font-size": G,
					"--n-height": K,
					"--n-padding-single": i,
					"--n-padding-multiple": s,
					"--n-placeholder-color": l,
					"--n-placeholder-color-disabled": p,
					"--n-text-color": a,
					"--n-text-color-disabled": u,
					"--n-arrow-color": C,
					"--n-arrow-color-disabled": S,
					"--n-loading-color": z,
					"--n-color-active-warning": k,
					"--n-box-shadow-focus-warning": $,
					"--n-box-shadow-active-warning": P,
					"--n-box-shadow-hover-warning": R,
					"--n-border-warning": T,
					"--n-border-focus-warning": B,
					"--n-border-hover-warning": F,
					"--n-border-active-warning": M,
					"--n-color-active-error": O,
					"--n-box-shadow-focus-error": I,
					"--n-box-shadow-active-error": A,
					"--n-box-shadow-hover-error": D,
					"--n-border-error": H,
					"--n-border-focus-error": E,
					"--n-border-hover-error": L,
					"--n-border-active-error": _,
					"--n-clear-size": V,
					"--n-clear-color": j,
					"--n-clear-color-hover": N,
					"--n-clear-color-pressed": W,
					"--n-arrow-size": U
				}
			})), I = F ? Wo("internal-selection", x((() => e.size[0])), O, e) : void 0;
			return {
				mergedTheme: g,
				mergedClearable: m,
				patternInputFocused: b,
				filterablePlaceholder: y,
				label: w,
				selected: C,
				showTagsPanel: v,
				isComposing: P,
				counterRef: d,
				counterWrapperRef: u,
				patternInputMirrorRef: o,
				patternInputRef: n,
				selfRef: r,
				multipleElRef: t,
				singleElRef: l,
				patternInputWrapperRef: a,
				overflowRef: p,
				inputTagElRef: h,
				handleMouseDown: function(o) {
					e.active && e.filterable && o.target !== n.value && o.preventDefault()
				},
				handleFocusin: function(o) {
					var n;
					o.relatedTarget && (null === (n = r.value) || void 0 === n ? void 0 : n.contains(o.relatedTarget)) || function(o) {
						const {
							onFocus: n
						} = e;
						n && n(o)
					}(o)
				},
				handleClear: function(o) {
					! function(o) {
						const {
							onClear: n
						} = e;
						n && n(o)
					}(o)
				},
				handleMouseEnter: function() {
					f.value = !0
				},
				handleMouseLeave: function() {
					f.value = !1
				},
				handleDeleteOption: $,
				handlePatternKeyDown: function(o) {
					if ("Backspace" === o.key && !P.value && !e.pattern.length) {
						const {
							selectedOptions: o
						} = e;
						(null == o ? void 0 : o.length) && $(o[o.length - 1])
					}
				},
				handlePatternInputInput: function(n) {
					const {
						value: r
					} = o;
					if (r) {
						const e = n.target.value;
						r.textContent = e, S()
					}
					e.ignoreComposition && P.value ? R = n : k(n)
				},
				handlePatternInputBlur: function(o) {
					var n;
					b.value = !1, null === (n = e.onPatternBlur) || void 0 === n || n.call(e, o)
				},
				handlePatternInputFocus: function(o) {
					var n;
					b.value = !0, null === (n = e.onPatternFocus) || void 0 === n || n.call(e, o)
				},
				handleMouseEnterCounter: function() {
					e.disabled || e.active || (B(), T = window.setTimeout((() => {
						C.value && (v.value = !0)
					}), 100))
				},
				handleMouseLeaveCounter: function() {
					B()
				},
				handleFocusout: function(o) {
					var n;
					(null === (n = r.value) || void 0 === n ? void 0 : n.contains(o.relatedTarget)) || function(o) {
						const {
							onBlur: n
						} = e;
						n && n(o)
					}(o)
				},
				handleCompositionEnd: function() {
					P.value = !1, e.ignoreComposition && k(R), R = null
				},
				handleCompositionStart: function() {
					P.value = !0
				},
				onPopoverUpdateShow: function(e) {
					e || (B(), v.value = !1)
				},
				focus: function() {
					var o, n, r;
					e.filterable ? (b.value = !1, null === (o = a.value) || void 0 === o || o.focus()) : e.multiple ? null === (n = t.value) || void 0 === n || n.focus() : null === (r = l.value) || void 0 === r || r.focus()
				},
				focusInput: function() {
					const {
						value: e
					} = n;
					e && (function() {
						const {
							value: e
						} = h;
						e && (e.style.display = "inline-block")
					}(), e.focus())
				},
				blur: function() {
					var o, r;
					if (e.filterable) b.value = !1, null === (o = a.value) || void 0 === o || o.blur(), null === (r = n.value) || void 0 === r || r.blur();
					else if (e.multiple) {
						const {
							value: e
						} = t;
						null == e || e.blur()
					} else {
						const {
							value: e
						} = l;
						null == e || e.blur()
					}
				},
				blurInput: function() {
					const {
						value: e
					} = n;
					e && e.blur()
				},
				updateCounter: function(e) {
					const {
						value: o
					} = d;
					o && o.setTextContent(`+${e}`)
				},
				getCounter: function() {
					const {
						value: e
					} = u;
					return e
				},
				getTail: function() {
					return n.value
				},
				renderLabel: e.renderLabel,
				cssVars: F ? void 0 : O,
				themeClass: null == I ? void 0 : I.themeClass,
				onRender: null == I ? void 0 : I.onRender
			}
		},
		render() {
			const {
				status: e,
				multiple: n,
				size: r,
				disabled: t,
				filterable: l,
				maxTagCount: a,
				bordered: i,
				clsPrefix: s,
				onRender: d,
				renderTag: c,
				renderLabel: u
			} = this;
			null == d || d();
			const p = "responsive" === a,
				h = "number" == typeof a,
				v = p || h,
				b = P(qe, null, {
					default: () => P(xr, {
						clsPrefix: s,
						loading: this.loading,
						showArrow: this.showArrow,
						showClear: this.mergedClearable && this.selected,
						onClear: this.handleClear
					}, {
						default: () => {
							var e, o;
							return null === (o = (e = this.$slots).arrow) || void 0 === o ? void 0 : o.call(e)
						}
					})
				});
			let f;
			if (n) {
				const {
					labelField: e
				} = this, n = o => P("div", {
					class: `${s}-base-selection-tag-wrapper`,
					key: o.value
				}, c ? c({
					option: o,
					handleClose: () => this.handleDeleteOption(o)
				}) : P(fr, {
					size: r,
					closable: !o.disabled,
					disabled: t,
					onClose: () => this.handleDeleteOption(o),
					internalCloseIsButtonTag: !1,
					internalCloseFocusable: !1
				}, {
					default: () => u ? u(o, !0) : He(o[e], o, !0)
				})), i = () => (h ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(n), d = l ? P("div", {
					class: `${s}-base-selection-input-tag`,
					ref: "inputTagElRef",
					key: "__input-tag__"
				}, P("input", Object.assign({}, this.inputProps, {
					ref: "patternInputRef",
					tabindex: -1,
					disabled: t,
					value: this.pattern,
					autofocus: this.autofocus,
					class: `${s}-base-selection-input-tag__input`,
					onBlur: this.handlePatternInputBlur,
					onFocus: this.handlePatternInputFocus,
					onKeydown: this.handlePatternKeyDown,
					onInput: this.handlePatternInputInput,
					onCompositionstart: this.handleCompositionStart,
					onCompositionend: this.handleCompositionEnd
				})), P("span", {
					ref: "patternInputMirrorRef",
					class: `${s}-base-selection-input-tag__mirror`
				}, this.pattern)) : null, g = p ? () => P("div", {
					class: `${s}-base-selection-tag-wrapper`,
					ref: "counterWrapperRef"
				}, P(fr, {
					size: r,
					ref: "counterRef",
					onMouseenter: this.handleMouseEnterCounter,
					onMouseleave: this.handleMouseLeaveCounter,
					disabled: t
				})) : void 0;
				let m;
				if (h) {
					const e = this.selectedOptions.length - a;
					e > 0 && (m = P("div", {
						class: `${s}-base-selection-tag-wrapper`,
						key: "__counter__"
					}, P(fr, {
						size: r,
						ref: "counterRef",
						onMouseenter: this.handleMouseEnterCounter,
						disabled: t
					}, {
						default: () => `+${e}`
					})))
				}
				const x = p ? l ? P(ae, {
						ref: "overflowRef",
						updateCounter: this.updateCounter,
						getCounter: this.getCounter,
						getTail: this.getTail,
						style: {
							width: "100%",
							display: "flex",
							overflow: "hidden"
						}
					}, {
						default: i,
						counter: g,
						tail: () => d
					}) : P(ae, {
						ref: "overflowRef",
						updateCounter: this.updateCounter,
						getCounter: this.getCounter,
						style: {
							width: "100%",
							display: "flex",
							overflow: "hidden"
						}
					}, {
						default: i,
						counter: g
					}) : h ? i().concat(m) : i(),
					y = v ? () => P("div", {
						class: `${s}-base-selection-popover`
					}, p ? i() : this.selectedOptions.map(n)) : void 0,
					w = v ? {
						show: this.showTagsPanel,
						trigger: "hover",
						overlap: !0,
						placement: "top",
						width: "trigger",
						onUpdateShow: this.onPopoverUpdateShow,
						theme: this.mergedTheme.peers.Popover,
						themeOverrides: this.mergedTheme.peerOverrides.Popover
					} : null,
					C = this.selected || this.active && (this.pattern || this.isComposing) ? null : P("div", {
						class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`
					}, P("div", {
						class: `${s}-base-selection-placeholder__inner`
					}, this.placeholder)),
					S = l ? P("div", {
						ref: "patternInputWrapperRef",
						class: `${s}-base-selection-tags`
					}, x, p ? null : d, b) : P("div", {
						ref: "multipleElRef",
						class: `${s}-base-selection-tags`,
						tabindex: t ? void 0 : 0
					}, x, b);
				f = P(o, null, v ? P(dr, Object.assign({}, w, {
					scrollable: !0,
					style: "max-height: calc(var(--v-target-height) * 6.6);"
				}), {
					trigger: () => S,
					default: y
				}) : S, C)
			} else if (l) {
				const e = this.pattern || this.isComposing,
					o = this.active ? !e : !this.selected,
					n = !this.active && this.selected;
				f = P("div", {
					ref: "patternInputWrapperRef",
					class: `${s}-base-selection-label`
				}, P("input", Object.assign({}, this.inputProps, {
					ref: "patternInputRef",
					class: `${s}-base-selection-input`,
					value: this.active ? this.pattern : "",
					placeholder: "",
					readonly: t,
					disabled: t,
					tabindex: -1,
					autofocus: this.autofocus,
					onFocus: this.handlePatternInputFocus,
					onBlur: this.handlePatternInputBlur,
					onInput: this.handlePatternInputInput,
					onCompositionstart: this.handleCompositionStart,
					onCompositionend: this.handleCompositionEnd
				})), n ? P("div", {
					class: `${s}-base-selection-label__render-label ${s}-base-selection-overlay`,
					key: "input"
				}, P("div", {
					class: `${s}-base-selection-overlay__wrapper`
				}, c ? c({
					option: this.selectedOption,
					handleClose: () => {}
				}) : u ? u(this.selectedOption, !0) : He(this.label, this.selectedOption, !0))) : null, o ? P("div", {
					class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
					key: "placeholder"
				}, P("div", {
					class: `${s}-base-selection-overlay__wrapper`
				}, this.filterablePlaceholder)) : null, b)
			} else f = P("div", {
				ref: "singleElRef",
				class: `${s}-base-selection-label`,
				tabindex: this.disabled ? void 0 : 0
			}, void 0 !== this.label ? P("div", {
				class: `${s}-base-selection-input`,
				title: _e(this.label),
				key: "input"
			}, P("div", {
				class: `${s}-base-selection-input__content`
			}, c ? c({
				option: this.selectedOption,
				handleClose: () => {}
			}) : u ? u(this.selectedOption, !0) : He(this.label, this.selectedOption, !0))) : P("div", {
				class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
				key: "placeholder"
			}, P("div", {
				class: `${s}-base-selection-placeholder__inner`
			}, this.placeholder)), b);
			return P("div", {
				ref: "selfRef",
				class: [`${s}-base-selection`, this.themeClass, e && `${s}-base-selection--${e}-status`, {
					[`${s}-base-selection--active`]: this.active,
					[`${s}-base-selection--selected`]: this.selected || this.active && this.pattern,
					[`${s}-base-selection--disabled`]: this.disabled,
					[`${s}-base-selection--multiple`]: this.multiple,
					[`${s}-base-selection--focus`]: this.focused
				}],
				style: this.cssVars,
				onClick: this.onClick,
				onMouseenter: this.handleMouseEnter,
				onMouseleave: this.handleMouseLeave,
				onKeydown: this.onKeydown,
				onFocusin: this.handleFocusin,
				onFocusout: this.handleFocusout,
				onMousedown: this.handleMouseDown
			}, f, i ? P("div", {
				class: `${s}-base-selection__border`
			}) : null, i ? P("div", {
				class: `${s}-base-selection__state-border`
			}) : null)
		}
	}),
	zr = t({
		name: "SlotMachineNumber",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			value: {
				type: [Number, String],
				required: !0
			},
			oldOriginalNumber: {
				type: Number,
				default: void 0
			},
			newOriginalNumber: {
				type: Number,
				default: void 0
			}
		},
		setup(e) {
			const o = i(null),
				n = i(e.value),
				r = i(e.value),
				t = i("up"),
				l = i(!1),
				a = x((() => l.value ? `${e.clsPrefix}-base-slot-machine-current-number--${t.value}-scroll` : null)),
				d = x((() => l.value ? `${e.clsPrefix}-base-slot-machine-old-number--${t.value}-scroll` : null));

			function c() {
				const o = e.newOriginalNumber,
					n = e.oldOriginalNumber;
				void 0 !== n && void 0 !== o && (o > n ? u("up") : n > o && u("down"))
			}

			function u(e) {
				t.value = e, l.value = !1, W((() => {
					var e;
					null === (e = o.value) || void 0 === e || e.offsetWidth, l.value = !0
				}))
			}
			return s(M(e, "value"), ((e, o) => {
				n.value = o, r.value = e, W(c)
			})), () => {
				const {
					clsPrefix: t
				} = e;
				return P("span", {
					ref: o,
					class: `${t}-base-slot-machine-number`
				}, null !== n.value ? P("span", {
					class: [`${t}-base-slot-machine-old-number ${t}-base-slot-machine-old-number--top`, d.value]
				}, n.value) : null, P("span", {
					class: [`${t}-base-slot-machine-current-number`, a.value]
				}, P("span", {
					ref: "numberWrapper",
					class: [`${t}-base-slot-machine-current-number__inner`, "number" != typeof e.value && `${t}-base-slot-machine-current-number__inner--not-number`]
				}, r.value)), null !== n.value ? P("span", {
					class: [`${t}-base-slot-machine-old-number ${t}-base-slot-machine-old-number--bottom`, d.value]
				}, n.value) : null)
			}
		}
	}),
	{
		cubicBezierEaseInOut: kr
	} = Ro;

function $r({
	duration: e = ".2s",
	delay: o = ".1s"
} = {}) {
	return [ro("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
		opacity: 1
	}), ro("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", "\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "), ro("&.fade-in-width-expand-transition-leave-active", `\n overflow: hidden;\n transition:\n opacity ${e} ${kr},\n max-width ${e} ${kr} ${o},\n margin-left ${e} ${kr} ${o},\n margin-right ${e} ${kr} ${o};\n `), ro("&.fade-in-width-expand-transition-enter-active", `\n overflow: hidden;\n transition:\n opacity ${e} ${kr} ${o},\n max-width ${e} ${kr},\n margin-left ${e} ${kr},\n margin-right ${e} ${kr};\n `)]
}
const {
	cubicBezierEaseOut: Pr
} = Ro, Rr = ro([ro("@keyframes n-base-slot-machine-fade-up-in", "\n from {\n transform: translateY(60%);\n opacity: 0;\n }\n to {\n transform: translateY(0);\n opacity: 1;\n }\n "), ro("@keyframes n-base-slot-machine-fade-down-in", "\n from {\n transform: translateY(-60%);\n opacity: 0;\n }\n to {\n transform: translateY(0);\n opacity: 1;\n }\n "), ro("@keyframes n-base-slot-machine-fade-up-out", "\n from {\n transform: translateY(0%);\n opacity: 1;\n }\n to {\n transform: translateY(-60%);\n opacity: 0;\n }\n "), ro("@keyframes n-base-slot-machine-fade-down-out", "\n from {\n transform: translateY(0%);\n opacity: 1;\n }\n to {\n transform: translateY(60%);\n opacity: 0;\n }\n "), lo("base-slot-machine", "\n overflow: hidden;\n white-space: nowrap;\n display: inline-block;\n height: 18px;\n line-height: 18px;\n ", [lo("base-slot-machine-number", "\n display: inline-block;\n position: relative;\n height: 18px;\n width: .6em;\n max-width: .6em;\n ", [function({
	duration: e = ".2s"
} = {}) {
	return [ro("&.fade-up-width-expand-transition-leave-active", {
		transition: `\n opacity ${e} ${Pr},\n max-width ${e} ${Pr},\n transform ${e} ${Pr}\n `
	}), ro("&.fade-up-width-expand-transition-enter-active", {
		transition: `\n opacity ${e} ${Pr},\n max-width ${e} ${Pr},\n transform ${e} ${Pr}\n `
	}), ro("&.fade-up-width-expand-transition-enter-to", {
		opacity: 1,
		transform: "translateX(0) translateY(0)"
	}), ro("&.fade-up-width-expand-transition-enter-from", {
		maxWidth: "0 !important",
		opacity: 0,
		transform: "translateY(60%)"
	}), ro("&.fade-up-width-expand-transition-leave-from", {
		opacity: 1,
		transform: "translateY(0)"
	}), ro("&.fade-up-width-expand-transition-leave-to", {
		maxWidth: "0 !important",
		opacity: 0,
		transform: "translateY(60%)"
	})]
}({
	duration: ".2s"
}), $r({
	duration: ".2s",
	delay: "0s"
}), lo("base-slot-machine-old-number", "\n display: inline-block;\n opacity: 0;\n position: absolute;\n left: 0;\n right: 0;\n ", [io("top", {
	transform: "translateY(-100%)"
}), io("bottom", {
	transform: "translateY(100%)"
}), io("down-scroll", {
	animation: "n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",
	animationIterationCount: 1
}), io("up-scroll", {
	animation: "n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",
	animationIterationCount: 1
})]), lo("base-slot-machine-current-number", "\n display: inline-block;\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n right: 0;\n opacity: 1;\n transform: translateY(0);\n width: .6em;\n ", [io("down-scroll", {
	animation: "n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",
	animationIterationCount: 1
}), io("up-scroll", {
	animation: "n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",
	animationIterationCount: 1
}), ao("inner", "\n display: inline-block;\n position: absolute;\n right: 0;\n top: 0;\n width: .6em;\n ", [io("not-number", "\n right: unset;\n left: 0;\n ")])])])])]), Tr = t({
	name: "BaseSlotMachine",
	props: {
		clsPrefix: {
			type: String,
			required: !0
		},
		value: {
			type: [Number, String],
			default: 0
		},
		max: {
			type: Number,
			default: void 0
		},
		appeared: {
			type: Boolean,
			required: !0
		}
	},
	setup(e) {
		No("-base-slot-machine", Rr, M(e, "clsPrefix"));
		const o = i(),
			n = i(),
			r = x((() => {
				if ("string" == typeof e.value) return [];
				if (e.value < 1) return [0];
				const o = [];
				let n = e.value;
				for (void 0 !== e.max && (n = Math.min(e.max, n)); n >= 1;) o.push(n % 10), n /= 10, n = Math.floor(n);
				return o.reverse(), o
			}));
		return s(M(e, "value"), ((e, r) => {
			"string" == typeof e ? (n.value = void 0, o.value = void 0) : "string" == typeof r ? (n.value = e, o.value = void 0) : (n.value = e, o.value = r)
		})), () => {
			const {
				value: t,
				clsPrefix: l
			} = e;
			return "number" == typeof t ? P("span", {
				class: `${l}-base-slot-machine`
			}, P(F, {
				name: "fade-up-width-expand-transition",
				tag: "span"
			}, {
				default: () => r.value.map(((e, t) => P(zr, {
					clsPrefix: l,
					key: r.value.length - t - 1,
					oldOriginalNumber: o.value,
					newOriginalNumber: n.value,
					value: e
				})))
			}), P(nn, {
				key: "+",
				width: !0
			}, {
				default: () => void 0 !== e.max && e.max < t ? P(zr, {
					clsPrefix: l,
					value: "+"
				}) : null
			})) : P("span", {
				class: `${l}-base-slot-machine`
			}, t)
		}
	}
});

function Br(e) {
	return "group" === e.type
}

function Fr(e) {
	return "ignored" === e.type
}

function Mr(e, o) {
	try {
		return !!(1 + o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))
	} catch (n) {
		return !1
	}
}
const Or = vo && "chrome" in window;
vo && navigator.userAgent.includes("Firefox");
const Ir = vo && navigator.userAgent.includes("Safari") && !Or,
	Ar = {
		paddingTiny: "0 8px",
		paddingSmall: "0 10px",
		paddingMedium: "0 12px",
		paddingLarge: "0 14px",
		clearSize: "16px"
	},
	Dr = {
		name: "Input",
		common: zn,
		self: e => {
			const {
				textColor2: o,
				textColor3: n,
				textColorDisabled: r,
				primaryColor: t,
				primaryColorHover: l,
				inputColor: a,
				inputColorDisabled: i,
				borderColor: s,
				warningColor: d,
				warningColorHover: c,
				errorColor: u,
				errorColorHover: p,
				borderRadius: h,
				lineHeight: v,
				fontSizeTiny: b,
				fontSizeSmall: f,
				fontSizeMedium: g,
				fontSizeLarge: m,
				heightTiny: x,
				heightSmall: y,
				heightMedium: w,
				heightLarge: C,
				actionColor: S,
				clearColor: z,
				clearColorHover: k,
				clearColorPressed: $,
				placeholderColor: P,
				placeholderColorDisabled: R,
				iconColor: T,
				iconColorDisabled: B,
				iconColorHover: F,
				iconColorPressed: M
			} = e;
			return Object.assign(Object.assign({}, Ar), {
				countTextColorDisabled: r,
				countTextColor: n,
				heightTiny: x,
				heightSmall: y,
				heightMedium: w,
				heightLarge: C,
				fontSizeTiny: b,
				fontSizeSmall: f,
				fontSizeMedium: g,
				fontSizeLarge: m,
				lineHeight: v,
				lineHeightTextarea: v,
				borderRadius: h,
				iconSize: "16px",
				groupLabelColor: S,
				groupLabelTextColor: o,
				textColor: o,
				textColorDisabled: r,
				textDecorationColor: o,
				caretColor: t,
				placeholderColor: P,
				placeholderColorDisabled: R,
				color: a,
				colorDisabled: i,
				colorFocus: a,
				groupLabelBorder: `1px solid ${s}`,
				border: `1px solid ${s}`,
				borderHover: `1px solid ${l}`,
				borderDisabled: `1px solid ${s}`,
				borderFocus: `1px solid ${l}`,
				boxShadowFocus: `0 0 0 2px ${le(t,{alpha:.2})}`,
				loadingColor: t,
				loadingColorWarning: d,
				borderWarning: `1px solid ${d}`,
				borderHoverWarning: `1px solid ${c}`,
				colorFocusWarning: a,
				borderFocusWarning: `1px solid ${c}`,
				boxShadowFocusWarning: `0 0 0 2px ${le(d,{alpha:.2})}`,
				caretColorWarning: d,
				loadingColorError: u,
				borderError: `1px solid ${u}`,
				borderHoverError: `1px solid ${p}`,
				colorFocusError: a,
				borderFocusError: `1px solid ${p}`,
				boxShadowFocusError: `0 0 0 2px ${le(u,{alpha:.2})}`,
				caretColorError: u,
				clearColor: z,
				clearColorHover: k,
				clearColorPressed: $,
				iconColor: T,
				iconColorDisabled: B,
				iconColorHover: F,
				iconColorPressed: M,
				suffixTextColor: o
			})
		}
	},
	Hr = "n-input";

function Er(e) {
	let o = 0;
	for (const n of e) o++;
	return o
}

function Lr(e) {
	return "" === e || null == e
}
const _r = t({
		name: "InputWordCount",
		setup(e, {
			slots: o
		}) {
			const {
				mergedValueRef: n,
				maxlengthRef: r,
				mergedClsPrefixRef: t,
				countGraphemesRef: l
			} = d(Hr), a = x((() => {
				const {
					value: e
				} = n;
				return null === e || Array.isArray(e) ? 0 : (l.value || Er)(e)
			}));
			return () => {
				const {
					value: e
				} = r, {
					value: l
				} = n;
				return P("span", {
					class: `${t.value}-input-word-count`
				}, (i = o.default, s = {
					value: null === l || Array.isArray(l) ? "" : l
				}, d = () => [void 0 === e ? a.value : `${a.value} / ${e}`], i && We(i(s)) || d()));
				var i, s, d
			}
		}
	}),
	jr = lo("input", "\n max-width: 100%;\n cursor: text;\n line-height: 1.5;\n z-index: auto;\n outline: none;\n box-sizing: border-box;\n position: relative;\n display: inline-flex;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color .3s var(--n-bezier);\n font-size: var(--n-font-size);\n --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);\n", [ao("input, textarea", "\n overflow: hidden;\n flex-grow: 1;\n position: relative;\n "), ao("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", "\n box-sizing: border-box;\n font-size: inherit;\n line-height: 1.5;\n font-family: inherit;\n border: none;\n outline: none;\n background-color: #0000;\n text-align: inherit;\n transition:\n -webkit-text-fill-color .3s var(--n-bezier),\n caret-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n text-decoration-color .3s var(--n-bezier);\n "), ao("input-el, textarea-el", "\n -webkit-appearance: none;\n scrollbar-width: none;\n width: 100%;\n min-width: 0;\n text-decoration-color: var(--n-text-decoration-color);\n color: var(--n-text-color);\n caret-color: var(--n-caret-color);\n background-color: transparent;\n ", [ro("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", "\n width: 0;\n height: 0;\n display: none;\n "), ro("&::placeholder", "\n color: #0000;\n -webkit-text-fill-color: transparent !important;\n "), ro("&:-webkit-autofill ~", [ao("placeholder", "display: none;")])]), io("round", [so("textarea", "border-radius: calc(var(--n-height) / 2);")]), ao("placeholder", "\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n overflow: hidden;\n color: var(--n-placeholder-color);\n ", [ro("span", "\n width: 100%;\n display: inline-block;\n ")]), io("textarea", [ao("placeholder", "overflow: visible;")]), so("autosize", "width: 100%;"), io("autosize", [ao("textarea-el, input-el", "\n position: absolute;\n top: 0;\n left: 0;\n height: 100%;\n ")]), lo("input-wrapper", "\n overflow: hidden;\n display: inline-flex;\n flex-grow: 1;\n position: relative;\n padding-left: var(--n-padding-left);\n padding-right: var(--n-padding-right);\n "), ao("input-mirror", "\n padding: 0;\n height: var(--n-height);\n line-height: var(--n-height);\n overflow: hidden;\n visibility: hidden;\n position: static;\n white-space: pre;\n pointer-events: none;\n "), ao("input-el", "\n padding: 0;\n height: var(--n-height);\n line-height: var(--n-height);\n ", [ro("+", [ao("placeholder", "\n display: flex;\n align-items: center; \n ")])]), so("textarea", [ao("placeholder", "white-space: nowrap;")]), ao("eye", "\n transition: color .3s var(--n-bezier);\n "), io("textarea", "width: 100%;", [lo("input-word-count", "\n position: absolute;\n right: var(--n-padding-right);\n bottom: var(--n-padding-vertical);\n "), io("resizable", [lo("input-wrapper", "\n resize: vertical;\n min-height: var(--n-height);\n ")]), ao("textarea-el, textarea-mirror, placeholder", "\n height: 100%;\n padding-left: 0;\n padding-right: 0;\n padding-top: var(--n-padding-vertical);\n padding-bottom: var(--n-padding-vertical);\n word-break: break-word;\n display: inline-block;\n vertical-align: bottom;\n box-sizing: border-box;\n line-height: var(--n-line-height-textarea);\n margin: 0;\n resize: none;\n white-space: pre-wrap;\n "), ao("textarea-mirror", "\n width: 100%;\n pointer-events: none;\n overflow: hidden;\n visibility: hidden;\n position: static;\n white-space: pre-wrap;\n overflow-wrap: break-word;\n ")]), io("pair", [ao("input-el, placeholder", "text-align: center;"), ao("separator", "\n display: flex;\n align-items: center;\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n white-space: nowrap;\n ", [lo("icon", "\n color: var(--n-icon-color);\n "), lo("base-icon", "\n color: var(--n-icon-color);\n ")])]), io("disabled", "\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n ", [ao("border", "border: var(--n-border-disabled);"), ao("input-el, textarea-el", "\n cursor: not-allowed;\n color: var(--n-text-color-disabled);\n text-decoration-color: var(--n-text-color-disabled);\n "), ao("placeholder", "color: var(--n-placeholder-color-disabled);"), ao("separator", "color: var(--n-text-color-disabled);", [lo("icon", "\n color: var(--n-icon-color-disabled);\n "), lo("base-icon", "\n color: var(--n-icon-color-disabled);\n ")]), lo("input-word-count", "\n color: var(--n-count-text-color-disabled);\n "), ao("suffix, prefix", "color: var(--n-text-color-disabled);", [lo("icon", "\n color: var(--n-icon-color-disabled);\n "), lo("internal-icon", "\n color: var(--n-icon-color-disabled);\n ")])]), so("disabled", [ao("eye", "\n display: flex;\n align-items: center;\n justify-content: center;\n color: var(--n-icon-color);\n cursor: pointer;\n ", [ro("&:hover", "\n color: var(--n-icon-color-hover);\n "), ro("&:active", "\n color: var(--n-icon-color-pressed);\n ")]), ro("&:hover", [ao("state-border", "border: var(--n-border-hover);")]), io("focus", "background-color: var(--n-color-focus);", [ao("state-border", "\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n ")])]), ao("border, state-border", "\n box-sizing: border-box;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border-radius: inherit;\n border: var(--n-border);\n transition:\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n "), ao("state-border", "\n border-color: #0000;\n z-index: 1;\n "), ao("prefix", "margin-right: 4px;"), ao("suffix", "\n margin-left: 4px;\n "), ao("suffix, prefix", "\n transition: color .3s var(--n-bezier);\n flex-wrap: nowrap;\n flex-shrink: 0;\n line-height: var(--n-height);\n white-space: nowrap;\n display: inline-flex;\n align-items: center;\n justify-content: center;\n color: var(--n-suffix-text-color);\n ", [lo("base-loading", "\n font-size: var(--n-icon-size);\n margin: 0 2px;\n color: var(--n-loading-color);\n "), lo("base-clear", "\n font-size: var(--n-icon-size);\n ", [ao("placeholder", [lo("base-icon", "\n transition: color .3s var(--n-bezier);\n color: var(--n-icon-color);\n font-size: var(--n-icon-size);\n ")])]), ro(">", [lo("icon", "\n transition: color .3s var(--n-bezier);\n color: var(--n-icon-color);\n font-size: var(--n-icon-size);\n ")]), lo("base-icon", "\n font-size: var(--n-icon-size);\n ")]), lo("input-word-count", "\n pointer-events: none;\n line-height: 1.5;\n font-size: .85em;\n color: var(--n-count-text-color);\n transition: color .3s var(--n-bezier);\n margin-left: 4px;\n font-variant: tabular-nums;\n "), ["warning", "error"].map((e => io(`${e}-status`, [so("disabled", [lo("base-loading", `\n color: var(--n-loading-color-${e})\n `), ao("input-el, textarea-el", `\n caret-color: var(--n-caret-color-${e});\n `), ao("state-border", `\n border: var(--n-border-${e});\n `), ro("&:hover", [ao("state-border", `\n border: var(--n-border-hover-${e});\n `)]), ro("&:focus", `\n background-color: var(--n-color-focus-${e});\n `, [ao("state-border", `\n box-shadow: var(--n-box-shadow-focus-${e});\n border: var(--n-border-focus-${e});\n `)]), io("focus", `\n background-color: var(--n-color-focus-${e});\n `, [ao("state-border", `\n box-shadow: var(--n-box-shadow-focus-${e});\n border: var(--n-border-focus-${e});\n `)])])])))]),
	Nr = lo("input", [io("disabled", [ao("input-el, textarea-el", "\n -webkit-text-fill-color: var(--n-text-color-disabled);\n ")])]),
	Wr = Object.assign(Object.assign({}, Ao.props), {
		bordered: {
			type: Boolean,
			default: void 0
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: [Array, String],
		defaultValue: {
			type: [String, Array],
			default: null
		},
		value: [String, Array],
		disabled: {
			type: Boolean,
			default: void 0
		},
		size: String,
		rows: {
			type: [Number, String],
			default: 3
		},
		round: Boolean,
		minlength: [String, Number],
		maxlength: [String, Number],
		clearable: Boolean,
		autosize: {
			type: [Boolean, Object],
			default: !1
		},
		pair: Boolean,
		separator: String,
		readonly: {
			type: [String, Boolean],
			default: !1
		},
		passivelyActivated: Boolean,
		showPasswordOn: String,
		stateful: {
			type: Boolean,
			default: !0
		},
		autofocus: Boolean,
		inputProps: Object,
		resizable: {
			type: Boolean,
			default: !0
		},
		showCount: Boolean,
		loading: {
			type: Boolean,
			default: void 0
		},
		allowInput: Function,
		renderCount: Function,
		onMousedown: Function,
		onKeydown: Function,
		onKeyup: Function,
		onInput: [Function, Array],
		onFocus: [Function, Array],
		onBlur: [Function, Array],
		onClick: [Function, Array],
		onChange: [Function, Array],
		onClear: [Function, Array],
		countGraphemes: Function,
		status: String,
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array],
		textDecoration: [String, Array],
		attrSize: {
			type: Number,
			default: 20
		},
		onInputBlur: [Function, Array],
		onInputFocus: [Function, Array],
		onDeactivate: [Function, Array],
		onActivate: [Function, Array],
		onWrapperFocus: [Function, Array],
		onWrapperBlur: [Function, Array],
		internalDeactivateOnEnter: Boolean,
		internalForceFocus: Boolean,
		internalLoadingBeforeSuffix: Boolean,
		showPasswordToggle: Boolean
	}),
	Vr = t({
		name: "Input",
		props: Wr,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				mergedBorderedRef: n,
				inlineThemeDisabled: r,
				mergedRtlRef: t
			} = Ho(e), l = Ao("Input", "-input", jr, Dr, e, o);
			Ir && No("-input-safari", Nr, o);
			const a = i(null),
				d = i(null),
				p = i(null),
				b = i(null),
				f = i(null),
				g = i(null),
				y = i(null),
				w = function(e) {
					const o = i(null);

					function n() {
						o.value = null
					}
					return s(e, n), {
						recordCursor: function() {
							const {
								value: r
							} = e;
							if (!(null == r ? void 0 : r.focus)) return void n();
							const {
								selectionStart: t,
								selectionEnd: l,
								value: a
							} = r;
							null != t && null != l ? o.value = {
								start: t,
								end: l,
								beforeText: a.slice(0, t),
								afterText: a.slice(l)
							} : n()
						},
						restoreCursor: function() {
							var n;
							const {
								value: r
							} = o, {
								value: t
							} = e;
							if (!r || !t) return;
							const {
								value: l
							} = t, {
								start: a,
								beforeText: i,
								afterText: s
							} = r;
							let d = l.length;
							if (l.endsWith(s)) d = l.length - s.length;
							else if (l.startsWith(i)) d = i.length;
							else {
								const e = i[a - 1],
									o = l.indexOf(e, a - 1); - 1 !== o && (d = o + 1)
							}
							null === (n = t.setSelectionRange) || void 0 === n || n.call(t, d, d)
						}
					}
				}(y),
				C = i(null),
				{
					localeRef: S
				} = jo("Input"),
				k = i(e.defaultValue),
				$ = M(e, "value"),
				P = J($, k),
				R = Po(e),
				{
					mergedSizeRef: T,
					mergedDisabledRef: B,
					mergedStatusRef: F
				} = R,
				O = i(!1),
				I = i(!1),
				A = i(!1),
				D = i(!1);
			let H = null;
			const E = x((() => {
					const {
						placeholder: o,
						pair: n
					} = e;
					return n ? Array.isArray(o) ? o : void 0 === o ? ["", ""] : [o, o] : void 0 === o ? [S.value.placeholder] : [o]
				})),
				L = x((() => {
					const {
						value: e
					} = A, {
						value: o
					} = P, {
						value: n
					} = E;
					return !e && (Lr(o) || Array.isArray(o) && Lr(o[0])) && n[0]
				})),
				_ = x((() => {
					const {
						value: e
					} = A, {
						value: o
					} = P, {
						value: n
					} = E;
					return !e && n[1] && (Lr(o) || Array.isArray(o) && Lr(o[1]))
				})),
				j = v((() => e.internalForceFocus || O.value)),
				N = v((() => {
					if (B.value || e.readonly || !e.clearable || !j.value && !I.value) return !1;
					const {
						value: o
					} = P, {
						value: n
					} = j;
					return e.pair ? !(!Array.isArray(o) || !o[0] && !o[1]) && (I.value || n) : !!o && (I.value || n)
				})),
				V = x((() => {
					const {
						showPasswordOn: o
					} = e;
					return o || (e.showPasswordToggle ? "click" : void 0)
				})),
				K = i(!1),
				G = x((() => {
					const {
						textDecoration: o
					} = e;
					return o ? Array.isArray(o) ? o.map((e => ({
						textDecoration: e
					}))) : [{
						textDecoration: o
					}] : ["", ""]
				})),
				q = i(void 0),
				Y = x((() => {
					const {
						maxlength: o
					} = e;
					return void 0 === o ? void 0 : Number(o)
				}));
			c((() => {
				const {
					value: e
				} = P;
				Array.isArray(e) || te(e)
			}));
			const X = ie().proxy;

			function Z(o) {
				const {
					onUpdateValue: n,
					"onUpdate:value": r,
					onInput: t
				} = e, {
					nTriggerFormInput: l
				} = R;
				n && De(n, o), r && De(r, o), t && De(t, o), k.value = o, l()
			}

			function Q(o) {
				const {
					onChange: n
				} = e, {
					nTriggerFormChange: r
				} = R;
				n && De(n, o), k.value = o, r()
			}

			function ee(o, n = 0, r = "input") {
				const t = o.target.value;
				if (te(t), o instanceof InputEvent && !o.isComposing && (A.value = !1), "textarea" === e.type) {
					const {
						value: e
					} = C;
					e && e.syncUnifiedContainer()
				}
				if (H = t, A.value) return;
				w.recordCursor();
				const l = function(o) {
					const {
						countGraphemes: n,
						maxlength: r,
						minlength: t
					} = e;
					if (n) {
						let e;
						if (void 0 !== r && (void 0 === e && (e = n(o)), e > Number(r))) return !1;
						if (void 0 !== t && (void 0 === e && (e = n(o)), e < Number(r))) return !1
					}
					const {
						allowInput: l
					} = e;
					return "function" != typeof l || l(o)
				}(t);
				if (l)
					if (e.pair) {
						let {
							value: e
						} = P;
						e = Array.isArray(e) ? [e[0], e[1]] : ["", ""], e[n] = t, "input" === r ? Z(e) : Q(e)
					} else "input" === r ? Z(t) : Q(t);
				X.$forceUpdate(), l || W(w.restoreCursor)
			}

			function oe(o, n) {
				(null === o.relatedTarget || o.relatedTarget !== f.value && o.relatedTarget !== g.value && o.relatedTarget !== d.value && o.relatedTarget !== a.value) && ("focus" === n ? (function(o) {
					const {
						onFocus: n
					} = e, {
						nTriggerFormFocus: r
					} = R;
					n && De(n, o), r()
				}(o), O.value = !0) : "blur" === n && (function(o) {
					const {
						onBlur: n
					} = e, {
						nTriggerFormBlur: r
					} = R;
					n && De(n, o), r()
				}(o), O.value = !1))
			}

			function ne() {
				e.passivelyActivated && (D.value = !1, W((() => {
					var e;
					null === (e = a.value) || void 0 === e || e.focus()
				})))
			}

			function re() {
				var o, n, r;
				B.value || (e.passivelyActivated ? null === (o = a.value) || void 0 === o || o.focus() : (null === (n = d.value) || void 0 === n || n.focus(), null === (r = f.value) || void 0 === r || r.focus()))
			}

			function te(o) {
				const {
					type: n,
					pair: r,
					autosize: t
				} = e;
				if (!r && t)
					if ("textarea" === n) {
						const {
							value: e
						} = p;
						e && (e.textContent = (null != o ? o : "") + "\r\n")
					} else {
						const {
							value: e
						} = b;
						e && (o ? e.textContent = o : e.innerHTML = "&nbsp;")
					}
			}
			const le = i({
				top: "0"
			});
			let ae = null;
			z((() => {
				const {
					autosize: o,
					type: n
				} = e;
				o && "textarea" === n ? ae = s(P, (e => {
					Array.isArray(e) || e === H || te(e)
				})) : null == ae || ae()
			}));
			let se = null;
			z((() => {
				"textarea" === e.type ? se = s(P, (e => {
					var o;
					Array.isArray(e) || e === H || null === (o = C.value) || void 0 === o || o.syncUnifiedContainer()
				})) : null == se || se()
			})), m(Hr, {
				mergedValueRef: P,
				maxlengthRef: Y,
				mergedClsPrefixRef: o,
				countGraphemesRef: M(e, "countGraphemes")
			});
			const de = {
					wrapperElRef: a,
					inputElRef: f,
					textareaElRef: d,
					isCompositing: A,
					focus: re,
					blur: function() {
						var e;
						(null === (e = a.value) || void 0 === e ? void 0 : e.contains(document.activeElement)) && document.activeElement.blur()
					},
					select: function() {
						var e, o;
						null === (e = d.value) || void 0 === e || e.select(), null === (o = f.value) || void 0 === o || o.select()
					},
					deactivate: function() {
						const {
							value: e
						} = a;
						(null == e ? void 0 : e.contains(document.activeElement)) && e !== document.activeElement && ne()
					},
					activate: function() {
						B.value || (d.value ? d.value.focus() : f.value && f.value.focus())
					},
					scrollTo: function(o) {
						if ("textarea" === e.type) {
							const {
								value: e
							} = d;
							null == e || e.scrollTo(o)
						} else {
							const {
								value: e
							} = f;
							null == e || e.scrollTo(o)
						}
					}
				},
				ce = Vo("Input", t, o),
				ue = x((() => {
					const {
						value: e
					} = T, {
						common: {
							cubicBezierEaseInOut: o
						},
						self: {
							color: n,
							borderRadius: r,
							textColor: t,
							caretColor: a,
							caretColorError: i,
							caretColorWarning: s,
							textDecorationColor: d,
							border: c,
							borderDisabled: u,
							borderHover: p,
							borderFocus: h,
							placeholderColor: v,
							placeholderColorDisabled: b,
							lineHeightTextarea: f,
							colorDisabled: g,
							colorFocus: m,
							textColorDisabled: x,
							boxShadowFocus: y,
							iconSize: w,
							colorFocusWarning: C,
							boxShadowFocusWarning: S,
							borderWarning: z,
							borderFocusWarning: k,
							borderHoverWarning: $,
							colorFocusError: P,
							boxShadowFocusError: R,
							borderError: B,
							borderFocusError: F,
							borderHoverError: M,
							clearSize: O,
							clearColor: I,
							clearColorHover: A,
							clearColorPressed: D,
							iconColor: H,
							iconColorDisabled: E,
							suffixTextColor: L,
							countTextColor: _,
							countTextColorDisabled: j,
							iconColorHover: N,
							iconColorPressed: W,
							loadingColor: V,
							loadingColorError: K,
							loadingColorWarning: G,
							[Je("padding", e)]: q,
							[Je("fontSize", e)]: Y,
							[Je("height", e)]: X
						}
					} = l.value, {
						left: Z,
						right: Q
					} = U(q);
					return {
						"--n-bezier": o,
						"--n-count-text-color": _,
						"--n-count-text-color-disabled": j,
						"--n-color": n,
						"--n-font-size": Y,
						"--n-border-radius": r,
						"--n-height": X,
						"--n-padding-left": Z,
						"--n-padding-right": Q,
						"--n-text-color": t,
						"--n-caret-color": a,
						"--n-text-decoration-color": d,
						"--n-border": c,
						"--n-border-disabled": u,
						"--n-border-hover": p,
						"--n-border-focus": h,
						"--n-placeholder-color": v,
						"--n-placeholder-color-disabled": b,
						"--n-icon-size": w,
						"--n-line-height-textarea": f,
						"--n-color-disabled": g,
						"--n-color-focus": m,
						"--n-text-color-disabled": x,
						"--n-box-shadow-focus": y,
						"--n-loading-color": V,
						"--n-caret-color-warning": s,
						"--n-color-focus-warning": C,
						"--n-box-shadow-focus-warning": S,
						"--n-border-warning": z,
						"--n-border-focus-warning": k,
						"--n-border-hover-warning": $,
						"--n-loading-color-warning": G,
						"--n-caret-color-error": i,
						"--n-color-focus-error": P,
						"--n-box-shadow-focus-error": R,
						"--n-border-error": B,
						"--n-border-focus-error": F,
						"--n-border-hover-error": M,
						"--n-loading-color-error": K,
						"--n-clear-color": I,
						"--n-clear-size": O,
						"--n-clear-color-hover": A,
						"--n-clear-color-pressed": D,
						"--n-icon-color": H,
						"--n-icon-color-hover": N,
						"--n-icon-color-pressed": W,
						"--n-icon-color-disabled": E,
						"--n-suffix-text-color": L
					}
				})),
				pe = r ? Wo("input", x((() => {
					const {
						value: e
					} = T;
					return e[0]
				})), ue, e) : void 0;
			return Object.assign(Object.assign({}, de), {
				wrapperElRef: a,
				inputElRef: f,
				inputMirrorElRef: b,
				inputEl2Ref: g,
				textareaElRef: d,
				textareaMirrorElRef: p,
				textareaScrollbarInstRef: C,
				rtlEnabled: ce,
				uncontrolledValue: k,
				mergedValue: P,
				passwordVisible: K,
				mergedPlaceholder: E,
				showPlaceholder1: L,
				showPlaceholder2: _,
				mergedFocus: j,
				isComposing: A,
				activated: D,
				showClearButton: N,
				mergedSize: T,
				mergedDisabled: B,
				textDecorationStyle: G,
				mergedClsPrefix: o,
				mergedBordered: n,
				mergedShowPasswordOn: V,
				placeholderStyle: le,
				mergedStatus: F,
				textAreaScrollContainerWidth: q,
				handleTextAreaScroll: function(e) {
					var o;
					const {
						scrollTop: n
					} = e.target;
					le.value.top = -n + "px", null === (o = C.value) || void 0 === o || o.syncUnifiedContainer()
				},
				handleCompositionStart: function() {
					A.value = !0
				},
				handleCompositionEnd: function(e) {
					A.value = !1, e.target === g.value ? ee(e, 1) : ee(e, 0)
				},
				handleInput: ee,
				handleInputBlur: function(o) {
					! function(o) {
						const {
							onInputBlur: n
						} = e;
						n && De(n, o)
					}(o), o.relatedTarget === a.value && function() {
						const {
							onDeactivate: o
						} = e;
						o && De(o)
					}(), (null === o.relatedTarget || o.relatedTarget !== f.value && o.relatedTarget !== g.value && o.relatedTarget !== d.value) && (D.value = !1), oe(o, "blur"), y.value = null
				},
				handleInputFocus: function(o, n) {
					! function(o) {
						const {
							onInputFocus: n
						} = e;
						n && De(n, o)
					}(o), O.value = !0, D.value = !0,
						function() {
							const {
								onActivate: o
							} = e;
							o && De(o)
						}(), oe(o, "focus"), 0 === n ? y.value = f.value : 1 === n ? y.value = g.value : 2 === n && (y.value = d.value)
				},
				handleWrapperBlur: function(o) {
					e.passivelyActivated && (function(o) {
						const {
							onWrapperBlur: n
						} = e;
						n && De(n, o)
					}(o), oe(o, "blur"))
				},
				handleWrapperFocus: function(o) {
					e.passivelyActivated && (O.value = !0, function(o) {
						const {
							onWrapperFocus: n
						} = e;
						n && De(n, o)
					}(o), oe(o, "focus"))
				},
				handleMouseEnter: function() {
					var o;
					I.value = !0, "textarea" === e.type && (null === (o = C.value) || void 0 === o || o.handleMouseEnterWrapper())
				},
				handleMouseLeave: function() {
					var o;
					I.value = !1, "textarea" === e.type && (null === (o = C.value) || void 0 === o || o.handleMouseLeaveWrapper())
				},
				handleMouseDown: function(o) {
					const {
						onMousedown: n
					} = e;
					n && n(o);
					const {
						tagName: r
					} = o.target;
					if ("INPUT" !== r && "TEXTAREA" !== r) {
						if (e.resizable) {
							const {
								value: e
							} = a;
							if (e) {
								const {
									left: n,
									top: r,
									width: t,
									height: l
								} = e.getBoundingClientRect(), a = 14;
								if (n + t - a < o.clientX && o.clientX < n + t && r + l - a < o.clientY && o.clientY < r + l) return
							}
						}
						o.preventDefault(), O.value || re()
					}
				},
				handleChange: function(e, o) {
					ee(e, o, "change")
				},
				handleClick: function(o) {
					! function(o) {
						const {
							onClick: n
						} = e;
						n && De(n, o)
					}(o)
				},
				handleClear: function(o) {
					! function(o) {
						const {
							onClear: n
						} = e;
						n && De(n, o)
					}(o), e.pair ? (Z(["", ""]), Q(["", ""])) : (Z(""), Q(""))
				},
				handlePasswordToggleClick: function() {
					B.value || "click" === V.value && (K.value = !K.value)
				},
				handlePasswordToggleMousedown: function(e) {
					if (B.value) return;
					e.preventDefault();
					const o = e => {
						e.preventDefault(), h("mouseup", document, o)
					};
					if (u("mouseup", document, o), "mousedown" !== V.value) return;
					K.value = !0;
					const n = () => {
						K.value = !1, h("mouseup", document, n)
					};
					u("mouseup", document, n)
				},
				handleWrapperKeydown: function(o) {
					var n;
					switch (null === (n = e.onKeydown) || void 0 === n || n.call(e, o), o.key) {
						case "Escape":
							ne();
							break;
						case "Enter":
							! function(o) {
								var n, r;
								if (e.passivelyActivated) {
									const {
										value: t
									} = D;
									if (t) return void(e.internalDeactivateOnEnter && ne());
									o.preventDefault(), "textarea" === e.type ? null === (n = d.value) || void 0 === n || n.focus() : null === (r = f.value) || void 0 === r || r.focus()
								}
							}(o)
					}
				},
				handleTextAreaMirrorResize: function() {
					(() => {
						var o, n;
						if ("textarea" === e.type) {
							const {
								autosize: r
							} = e;
							if (r && (q.value = null === (n = null === (o = C.value) || void 0 === o ? void 0 : o.$el) || void 0 === n ? void 0 : n.offsetWidth), !d.value) return;
							if ("boolean" == typeof r) return;
							const {
								paddingTop: t,
								paddingBottom: l,
								lineHeight: a
							} = window.getComputedStyle(d.value), i = Number(t.slice(0, -2)), s = Number(l.slice(0, -2)), c = Number(a.slice(0, -2)), {
								value: u
							} = p;
							if (!u) return;
							if (r.minRows) {
								const e = `${i+s+c*Math.max(r.minRows,1)}px`;
								u.style.minHeight = e
							}
							if (r.maxRows) {
								const e = `${i+s+c*r.maxRows}px`;
								u.style.maxHeight = e
							}
						}
					})()
				},
				getTextareaScrollContainer: () => d.value,
				mergedTheme: l,
				cssVars: r ? void 0 : ue,
				themeClass: null == pe ? void 0 : pe.themeClass,
				onRender: null == pe ? void 0 : pe.onRender
			})
		},
		render() {
			var e, n;
			const {
				mergedClsPrefix: r,
				mergedStatus: t,
				themeClass: l,
				type: a,
				countGraphemes: i,
				onRender: s
			} = this, d = this.$slots;
			return null == s || s(), P("div", {
				ref: "wrapperElRef",
				class: [`${r}-input`, l, t && `${r}-input--${t}-status`, {
					[`${r}-input--rtl`]: this.rtlEnabled,
					[`${r}-input--disabled`]: this.mergedDisabled,
					[`${r}-input--textarea`]: "textarea" === a,
					[`${r}-input--resizable`]: this.resizable && !this.autosize,
					[`${r}-input--autosize`]: this.autosize,
					[`${r}-input--round`]: this.round && !("textarea" === a),
					[`${r}-input--pair`]: this.pair,
					[`${r}-input--focus`]: this.mergedFocus,
					[`${r}-input--stateful`]: this.stateful
				}],
				style: this.cssVars,
				tabindex: this.mergedDisabled || !this.passivelyActivated || this.activated ? void 0 : 0,
				onFocus: this.handleWrapperFocus,
				onBlur: this.handleWrapperBlur,
				onClick: this.handleClick,
				onMousedown: this.handleMouseDown,
				onMouseenter: this.handleMouseEnter,
				onMouseleave: this.handleMouseLeave,
				onCompositionstart: this.handleCompositionStart,
				onCompositionend: this.handleCompositionEnd,
				onKeyup: this.onKeyup,
				onKeydown: this.handleWrapperKeydown
			}, P("div", {
				class: `${r}-input-wrapper`
			}, Ue(d.prefix, (e => e && P("div", {
				class: `${r}-input__prefix`
			}, e))), "textarea" === a ? P(An, {
				ref: "textareaScrollbarInstRef",
				class: `${r}-input__textarea`,
				container: this.getTextareaScrollContainer,
				triggerDisplayManually: !0,
				useUnifiedContainer: !0,
				internalHoistYRail: !0
			}, {
				default: () => {
					var e, n;
					const {
						textAreaScrollContainerWidth: t
					} = this, l = {
						width: this.autosize && t && `${t}px`
					};
					return P(o, null, P("textarea", Object.assign({}, this.inputProps, {
						ref: "textareaElRef",
						class: [`${r}-input__textarea-el`, null === (e = this.inputProps) || void 0 === e ? void 0 : e.class],
						autofocus: this.autofocus,
						rows: Number(this.rows),
						placeholder: this.placeholder,
						value: this.mergedValue,
						disabled: this.mergedDisabled,
						maxlength: i ? void 0 : this.maxlength,
						minlength: i ? void 0 : this.minlength,
						readonly: this.readonly,
						tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
						style: [this.textDecorationStyle[0], null === (n = this.inputProps) || void 0 === n ? void 0 : n.style, l],
						onBlur: this.handleInputBlur,
						onFocus: e => this.handleInputFocus(e, 2),
						onInput: this.handleInput,
						onChange: this.handleChange,
						onScroll: this.handleTextAreaScroll
					})), this.showPlaceholder1 ? P("div", {
						class: `${r}-input__placeholder`,
						style: [this.placeholderStyle, l],
						key: "placeholder"
					}, this.mergedPlaceholder[0]) : null, this.autosize ? P(H, {
						onResize: this.handleTextAreaMirrorResize
					}, {
						default: () => P("div", {
							ref: "textareaMirrorElRef",
							class: `${r}-input__textarea-mirror`,
							key: "mirror"
						})
					}) : null)
				}
			}) : P("div", {
				class: `${r}-input__input`
			}, P("input", Object.assign({
				type: "password" === a && this.mergedShowPasswordOn && this.passwordVisible ? "text" : a
			}, this.inputProps, {
				ref: "inputElRef",
				class: [`${r}-input__input-el`, null === (e = this.inputProps) || void 0 === e ? void 0 : e.class],
				style: [this.textDecorationStyle[0], null === (n = this.inputProps) || void 0 === n ? void 0 : n.style],
				tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
				placeholder: this.mergedPlaceholder[0],
				disabled: this.mergedDisabled,
				maxlength: i ? void 0 : this.maxlength,
				minlength: i ? void 0 : this.minlength,
				value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
				readonly: this.readonly,
				autofocus: this.autofocus,
				size: this.attrSize,
				onBlur: this.handleInputBlur,
				onFocus: e => this.handleInputFocus(e, 0),
				onInput: e => this.handleInput(e, 0),
				onChange: e => this.handleChange(e, 0)
			})), this.showPlaceholder1 ? P("div", {
				class: `${r}-input__placeholder`
			}, P("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? P("div", {
				class: `${r}-input__input-mirror`,
				key: "mirror",
				ref: "inputMirrorElRef"
			}, " ") : null), !this.pair && Ue(d.suffix, (e => e || this.clearable || this.showCount || this.mergedShowPasswordOn || void 0 !== this.loading ? P("div", {
				class: `${r}-input__suffix`
			}, [Ue(d["clear-icon-placeholder"], (e => (this.clearable || e) && P(mr, {
				clsPrefix: r,
				show: this.showClearButton,
				onClear: this.handleClear
			}, {
				placeholder: () => e,
				icon: () => {
					var e, o;
					return null === (o = (e = this.$slots)["clear-icon"]) || void 0 === o ? void 0 : o.call(e)
				}
			}))), this.internalLoadingBeforeSuffix ? null : e, void 0 !== this.loading ? P(xr, {
				clsPrefix: r,
				loading: this.loading,
				showArrow: !1,
				showClear: !1,
				style: this.cssVars
			}) : null, this.internalLoadingBeforeSuffix ? e : null, this.showCount && "textarea" !== this.type ? P(_r, null, {
				default: e => {
					var o;
					return null === (o = d.count) || void 0 === o ? void 0 : o.call(d, e)
				}
			}) : null, this.mergedShowPasswordOn && "password" === this.type ? P("div", {
				class: `${r}-input__eye`,
				onMousedown: this.handlePasswordToggleMousedown,
				onClick: this.handlePasswordToggleClick
			}, this.passwordVisible ? Ve(d["password-visible-icon"], (() => [P(tn, {
				clsPrefix: r
			}, {
				default: () => P(Xo, null)
			})])) : Ve(d["password-invisible-icon"], (() => [P(tn, {
				clsPrefix: r
			}, {
				default: () => P(Zo, null)
			})]))) : null]) : null))), this.pair ? P("span", {
				class: `${r}-input__separator`
			}, Ve(d.separator, (() => [this.separator]))) : null, this.pair ? P("div", {
				class: `${r}-input-wrapper`
			}, P("div", {
				class: `${r}-input__input`
			}, P("input", {
				ref: "inputEl2Ref",
				type: this.type,
				class: `${r}-input__input-el`,
				tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
				placeholder: this.mergedPlaceholder[1],
				disabled: this.mergedDisabled,
				maxlength: i ? void 0 : this.maxlength,
				minlength: i ? void 0 : this.minlength,
				value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
				readonly: this.readonly,
				style: this.textDecorationStyle[1],
				onBlur: this.handleInputBlur,
				onFocus: e => this.handleInputFocus(e, 1),
				onInput: e => this.handleInput(e, 1),
				onChange: e => this.handleChange(e, 1)
			}), this.showPlaceholder2 ? P("div", {
				class: `${r}-input__placeholder`
			}, P("span", null, this.mergedPlaceholder[1])) : null), Ue(d.suffix, (e => (this.clearable || e) && P("div", {
				class: `${r}-input__suffix`
			}, [this.clearable && P(mr, {
				clsPrefix: r,
				show: this.showClearButton,
				onClear: this.handleClear
			}, {
				icon: () => {
					var e;
					return null === (e = d["clear-icon"]) || void 0 === e ? void 0 : e.call(d)
				},
				placeholder: () => {
					var e;
					return null === (e = d["clear-icon-placeholder"]) || void 0 === e ? void 0 : e.call(d)
				}
			}), e])))) : null, this.mergedBordered ? P("div", {
				class: `${r}-input__border`
			}) : null, this.mergedBordered ? P("div", {
				class: `${r}-input__state-border`
			}) : null, this.showCount && "textarea" === a ? P(_r, null, {
				default: e => {
					var o;
					const {
						renderCount: n
					} = this;
					return n ? n(e) : null === (o = d.count) || void 0 === o ? void 0 : o.call(d, e)
				}
			}) : null)
		}
	}),
	Ur = lo("input-group", "\n display: inline-flex;\n width: 100%;\n flex-wrap: nowrap;\n vertical-align: bottom;\n", [ro(">", [lo("input", [ro("&:not(:last-child)", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "), ro("&:not(:first-child)", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n margin-left: -1px!important;\n ")]), lo("button", [ro("&:not(:last-child)", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ", [ao("state-border, border", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ")]), ro("&:not(:first-child)", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ", [ao("state-border, border", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ")])]), ro("*", [ro("&:not(:last-child)", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ", [ro(">", [lo("input", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "), lo("base-selection", [lo("base-selection-label", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "), lo("base-selection-tags", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "), ao("box-shadow, border, state-border", "\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ")])])]), ro("&:not(:first-child)", "\n margin-left: -1px!important;\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ", [ro(">", [lo("input", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n "), lo("base-selection", [lo("base-selection-label", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n "), lo("base-selection-tags", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n "), ao("box-shadow, border, state-border", "\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ")])])])])])]),
	Kr = t({
		name: "InputGroup",
		props: {},
		setup(e) {
			const {
				mergedClsPrefixRef: o
			} = Ho(e);
			return No("-input-group", Ur, o), {
				mergedClsPrefix: o
			}
		},
		render() {
			const {
				mergedClsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-input-group`
			}, this.$slots)
		}
	}),
	Gr = vo && "loading" in document.createElement("img"),
	qr = new WeakMap,
	Yr = new WeakMap,
	Xr = new WeakMap,
	Zr = {
		name: "Avatar",
		common: zn,
		self: e => {
			const {
				borderRadius: o,
				avatarColor: n,
				cardColor: r,
				fontSize: t,
				heightTiny: l,
				heightSmall: a,
				heightMedium: i,
				heightLarge: s,
				heightHuge: d,
				modalColor: c,
				popoverColor: u
			} = e;
			return {
				borderRadius: o,
				fontSize: t,
				border: `2px solid ${r}`,
				heightTiny: l,
				heightSmall: a,
				heightMedium: i,
				heightLarge: s,
				heightHuge: d,
				color: A(r, n),
				colorModal: A(c, n),
				colorPopover: A(u, n)
			}
		}
	},
	Qr = lo("avatar", "\n width: var(--n-merged-size);\n height: var(--n-merged-size);\n color: #FFF;\n font-size: var(--n-font-size);\n display: inline-flex;\n position: relative;\n overflow: hidden;\n text-align: center;\n border: var(--n-border);\n border-radius: var(--n-border-radius);\n --n-merged-color: var(--n-color);\n background-color: var(--n-merged-color);\n transition:\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n", [co(ro("&", "--n-merged-color: var(--n-color-modal);")), uo(ro("&", "--n-merged-color: var(--n-color-popover);")), ro("img", "\n width: 100%;\n height: 100%;\n "), ao("text", "\n white-space: nowrap;\n display: inline-block;\n position: absolute;\n left: 50%;\n top: 50%;\n "), lo("icon", "\n vertical-align: bottom;\n font-size: calc(var(--n-merged-size) - 6px);\n "), ao("text", "line-height: 1.25")]),
	Jr = Object.assign(Object.assign({}, Ao.props), {
		size: [String, Number],
		src: String,
		circle: {
			type: Boolean,
			default: void 0
		},
		objectFit: String,
		round: {
			type: Boolean,
			default: void 0
		},
		bordered: {
			type: Boolean,
			default: void 0
		},
		onError: Function,
		fallbackSrc: String,
		intersectionObserverOptions: Object,
		lazy: Boolean,
		onLoad: Function,
		renderPlaceholder: Function,
		renderFallback: Function,
		imgProps: Object,
		color: String
	}),
	et = t({
		name: "Avatar",
		props: Jr,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: n
			} = Ho(e), r = i(!1);
			let t = null;
			const l = i(null),
				a = i(null),
				u = d("n-avatar-group", null),
				h = x((() => {
					const {
						size: o
					} = e;
					if (o) return o;
					const {
						size: n
					} = u || {};
					return n || "medium"
				})),
				v = Ao("Avatar", "-avatar", Qr, Zr, e, o),
				b = d(br, null),
				f = x((() => {
					if (u) return !0;
					const {
						round: o,
						circle: n
					} = e;
					return void 0 !== o || void 0 !== n ? o || n : !!b && b.roundRef.value
				})),
				g = x((() => !!u || e.bordered || !1));
			s((() => e.src), (() => r.value = !1));
			const m = x((() => {
					const o = h.value,
						n = f.value,
						r = g.value,
						{
							color: t
						} = e,
						{
							self: {
								borderRadius: l,
								fontSize: a,
								color: i,
								border: s,
								colorModal: d,
								colorPopover: c
							},
							common: {
								cubicBezierEaseInOut: u
							}
						} = v.value;
					let p;
					return p = "number" == typeof o ? `${o}px` : v.value.self[Je("height", o)], {
						"--n-font-size": a,
						"--n-border": r ? s : "none",
						"--n-border-radius": n ? "50%" : l,
						"--n-color": t || i,
						"--n-color-modal": t || d,
						"--n-color-popover": t || c,
						"--n-bezier": u,
						"--n-merged-size": `var(--n-avatar-size-override, ${p})`
					}
				})),
				y = n ? Wo("avatar", x((() => {
					const o = h.value,
						n = f.value,
						r = g.value,
						{
							color: t
						} = e;
					let l = "";
					return o && (l += "number" == typeof o ? `a${o}` : o[0]), n && (l += "b"), r && (l += "c"), t && (l += Qe(t)), l
				})), m, e) : void 0,
				w = i(!e.lazy);
			c((() => {
				if (Gr) return;
				let o;
				const n = z((() => {
					null == o || o(), o = void 0, e.lazy && (o = ((e, o, n) => {
						if (!e) return () => {};
						const r = ((e = {}) => {
								var o;
								const {
									root: n = null
								} = e;
								return {
									hash: `${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):null!==(o=e.threshold)&&void 0!==o?o:"0"}`,
									options: Object.assign(Object.assign({}, e), {
										root: ("string" == typeof n ? document.querySelector(n) : n) || document.documentElement
									})
								}
							})(o),
							{
								root: t
							} = r.options;
						let l;
						const a = qr.get(t);
						let i, s;
						a ? l = a : (l = new Map, qr.set(t, l)), l.has(r.hash) ? (s = l.get(r.hash), s[1].has(e) || (i = s[0], s[1].add(e), i.observe(e))) : (i = new IntersectionObserver((e => {
							e.forEach((e => {
								if (e.isIntersecting) {
									const o = Yr.get(e.target),
										n = Xr.get(e.target);
									o && o(), n && (n.value = !0)
								}
							}))
						}), r.options), i.observe(e), s = [i, new Set([e])], l.set(r.hash, s));
						let d = !1;
						const c = () => {
							d || (Yr.delete(e), Xr.delete(e), d = !0, s[1].has(e) && (s[0].unobserve(e), s[1].delete(e)), s[1].size <= 0 && l.delete(r.hash), l.size || qr.delete(t))
						};
						return Yr.set(e, c), Xr.set(e, n), c
					})(a.value, e.intersectionObserverOptions, w))
				}));
				p((() => {
					n(), null == o || o()
				}))
			}));
			const C = i(!e.lazy);
			return {
				textRef: l,
				selfRef: a,
				mergedRoundRef: f,
				mergedClsPrefix: o,
				fitTextTransform: () => {
					const {
						value: e
					} = l;
					if (e && (null === t || t !== e.innerHTML)) {
						t = e.innerHTML;
						const {
							value: o
						} = a;
						if (o) {
							const {
								offsetWidth: n,
								offsetHeight: r
							} = o, {
								offsetWidth: t,
								offsetHeight: l
							} = e, a = .9, i = Math.min(n / t * a, r / l * a, 1);
							e.style.transform = `translateX(-50%) translateY(-50%) scale(${i})`
						}
					}
				},
				cssVars: n ? void 0 : m,
				themeClass: null == y ? void 0 : y.themeClass,
				onRender: null == y ? void 0 : y.onRender,
				hasLoadError: r,
				handleError: o => {
					var n;
					if (!w.value) return;
					r.value = !0;
					const {
						onError: t,
						imgProps: l
					} = e;
					null === (n = null == l ? void 0 : l.onError) || void 0 === n || n.call(l, o), t && t(o)
				},
				shouldStartLoading: w,
				loaded: C,
				mergedOnLoad: o => {
					var n;
					const {
						onLoad: r,
						imgProps: t
					} = e;
					null == r || r(o), null === (n = null == t ? void 0 : t.onLoad) || void 0 === n || n.call(t, o), C.value = !0
				}
			}
		},
		render() {
			var e, o;
			const {
				$slots: n,
				src: r,
				mergedClsPrefix: t,
				lazy: l,
				onRender: a,
				mergedOnLoad: i,
				shouldStartLoading: s,
				loaded: d,
				hasLoadError: c
			} = this;
			let u;
			null == a || a();
			const p = !d && !c && (this.renderPlaceholder ? this.renderPlaceholder() : null === (o = (e = this.$slots).placeholder) || void 0 === o ? void 0 : o.call(e));
			return u = this.hasLoadError ? this.renderFallback ? this.renderFallback() : Ve(n.fallback, (() => [P("img", {
				src: this.fallbackSrc,
				style: {
					objectFit: this.objectFit
				}
			})])) : Ue(n.default, (e => {
				if (e) return P(H, {
					onResize: this.fitTextTransform
				}, {
					default: () => P("span", {
						ref: "textRef",
						class: `${t}-avatar__text`
					}, e)
				});
				if (r) {
					const {
						imgProps: e
					} = this;
					return P("img", Object.assign(Object.assign({}, e), {
						loading: Gr && !this.intersectionObserverOptions && l ? "lazy" : "eager",
						src: Gr || s || d ? r : void 0,
						onLoad: i,
						"data-image-src": r,
						onError: this.handleError,
						style: [null == e ? void 0 : e.style, {
							objectFit: this.objectFit
						}, p ? {
							height: "0",
							width: "0",
							visibility: "hidden",
							position: "absolute"
						} : ""]
					}))
				}
			})), P("span", {
				ref: "selfRef",
				class: [`${t}-avatar`, this.themeClass],
				style: this.cssVars
			}, u, l && p)
		}
	}),
	ot = {
		name: "Badge",
		common: zn,
		self: e => {
			const {
				errorColor: o,
				infoColor: n,
				successColor: r,
				warningColor: t,
				fontFamily: l
			} = e;
			return {
				color: o,
				colorInfo: n,
				colorSuccess: r,
				colorError: o,
				colorWarning: t,
				fontSize: "12px",
				fontFamily: l
			}
		}
	},
	nt = ro([ro("@keyframes badge-wave-spread", {
		from: {
			boxShadow: "0 0 0.5px 0px var(--n-ripple-color)",
			opacity: .6
		},
		to: {
			boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)",
			opacity: 0
		}
	}), lo("badge", "\n display: inline-flex;\n position: relative;\n vertical-align: middle;\n color: var(--n-color);\n font-family: var(--n-font-family);\n ", [io("as-is", [lo("badge-sup", {
		position: "static",
		transform: "translateX(0)"
	}, [Wn({
		transformOrigin: "left bottom",
		originalTransform: "translateX(0)"
	})])]), io("dot", [lo("badge-sup", "\n height: 8px;\n width: 8px;\n padding: 0;\n min-width: 8px;\n left: 100%;\n bottom: calc(100% - 4px);\n ", [ro("::before", "border-radius: 4px;")])]), lo("badge-sup", "\n background: var(--n-color);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: #FFF;\n position: absolute;\n height: 18px;\n line-height: 18px;\n border-radius: 9px;\n padding: 0 6px;\n text-align: center;\n font-size: var(--n-font-size);\n transform: translateX(-50%);\n left: 100%;\n bottom: calc(100% - 9px);\n font-variant-numeric: tabular-nums;\n z-index: 1;\n display: flex;\n align-items: center;\n ", [Wn({
		transformOrigin: "left bottom",
		originalTransform: "translateX(-50%)"
	}), lo("base-wave", {
		zIndex: 1,
		animationDuration: "2s",
		animationIterationCount: "infinite",
		animationDelay: "1s",
		animationTimingFunction: "var(--n-ripple-bezier)",
		animationName: "badge-wave-spread"
	}), ro("&::before", '\n opacity: 0;\n transform: scale(1);\n border-radius: 9px;\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')])])]),
	rt = Object.assign(Object.assign({}, Ao.props), {
		value: [String, Number],
		max: Number,
		dot: Boolean,
		type: {
			type: String,
			default: "default"
		},
		show: {
			type: Boolean,
			default: !0
		},
		showZero: Boolean,
		processing: Boolean,
		color: String,
		offset: Array
	}),
	tt = t({
		name: "Badge",
		props: rt,
		setup(e, {
			slots: o
		}) {
			const {
				mergedClsPrefixRef: n,
				inlineThemeDisabled: r,
				mergedRtlRef: t
			} = Ho(e), l = Ao("Badge", "-badge", nt, ot, e, n), a = i(!1), s = x((() => e.show && (e.dot || void 0 !== e.value && !(!e.showZero && e.value <= 0) || !Ke(o.value))));
			c((() => {
				s.value && (a.value = !0)
			}));
			const d = Vo("Badge", t, n),
				u = x((() => {
					const {
						type: o,
						color: n
					} = e, {
						common: {
							cubicBezierEaseInOut: r,
							cubicBezierEaseOut: t
						},
						self: {
							[Je("color", o)]: a,
							fontFamily: i,
							fontSize: s
						}
					} = l.value;
					return {
						"--n-font-size": s,
						"--n-font-family": i,
						"--n-color": n || a,
						"--n-ripple-color": n || a,
						"--n-bezier": r,
						"--n-ripple-bezier": t
					}
				})),
				p = r ? Wo("badge", x((() => {
					let o = "";
					const {
						type: n,
						color: r
					} = e;
					return n && (o += n[0]), r && (o += Qe(r)), o
				})), u, e) : void 0,
				h = x((() => {
					const {
						offset: o
					} = e;
					if (!o) return;
					const [n, r] = o, t = "number" == typeof n ? `${n}px` : n, l = "number" == typeof r ? `${r}px` : r;
					return {
						transform: `translate(calc(${(null==d?void 0:d.value)?"50%":"-50%"} + ${t}), ${l})`
					}
				}));
			return {
				rtlEnabled: d,
				mergedClsPrefix: n,
				appeared: a,
				showBadge: s,
				handleAfterEnter: () => {
					a.value = !0
				},
				handleAfterLeave: () => {
					a.value = !1
				},
				cssVars: r ? void 0 : u,
				themeClass: null == p ? void 0 : p.themeClass,
				onRender: null == p ? void 0 : p.onRender,
				offsetStyle: h
			}
		},
		render() {
			var e;
			const {
				mergedClsPrefix: o,
				onRender: n,
				themeClass: r,
				$slots: t
			} = this;
			null == n || n();
			const l = null === (e = t.default) || void 0 === e ? void 0 : e.call(t);
			return P("div", {
				class: [`${o}-badge`, this.rtlEnabled && `${o}-badge--rtl`, r, {
					[`${o}-badge--dot`]: this.dot,
					[`${o}-badge--as-is`]: !l
				}],
				style: this.cssVars
			}, l, P(B, {
				name: "fade-in-scale-up-transition",
				onAfterEnter: this.handleAfterEnter,
				onAfterLeave: this.handleAfterLeave
			}, {
				default: () => this.showBadge ? P("sup", {
					class: `${o}-badge-sup`,
					title: _e(this.value),
					style: this.offsetStyle
				}, Ve(t.value, (() => [this.dot ? null : P(Tr, {
					clsPrefix: o,
					appeared: this.appeared,
					max: this.max,
					value: this.value
				})])), this.processing ? P(Gn, {
					clsPrefix: o
				}) : null) : null
			}))
		}
	}),
	lt = {
		fontWeightActive: "400"
	},
	at = {
		name: "Breadcrumb",
		common: zn,
		self: e => {
			const {
				fontSize: o,
				textColor3: n,
				textColor2: r,
				borderRadius: t,
				buttonColor2Hover: l,
				buttonColor2Pressed: a
			} = e;
			return Object.assign(Object.assign({}, lt), {
				fontSize: o,
				itemLineHeight: "1.25",
				itemTextColor: n,
				itemTextColorHover: r,
				itemTextColorPressed: r,
				itemTextColorActive: r,
				itemBorderRadius: t,
				itemColorHover: l,
				itemColorPressed: a,
				separatorColor: n
			})
		}
	},
	it = lo("breadcrumb", "\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n", [ro("ul", "\n list-style: none;\n padding: 0;\n margin: 0;\n "), ro("a", "\n color: inherit;\n text-decoration: inherit;\n "), lo("breadcrumb-item", "\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ", [lo("icon", "\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "), ro("&:not(:last-child)", [io("clickable", [ao("link", "\n cursor: pointer;\n ", [ro("&:hover", "\n background-color: var(--n-item-color-hover);\n "), ro("&:active", "\n background-color: var(--n-item-color-pressed); \n ")])])]), ao("link", "\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ", [ro("&:hover", "\n color: var(--n-item-text-color-hover);\n ", [lo("icon", "\n color: var(--n-item-text-color-hover);\n ")]), ro("&:active", "\n color: var(--n-item-text-color-pressed);\n ", [lo("icon", "\n color: var(--n-item-text-color-pressed);\n ")])]), ao("separator", "\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "), ro("&:last-child", [ao("link", "\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ", [lo("icon", "\n color: var(--n-item-text-color-active);\n ")]), ao("separator", "\n display: none;\n ")])])]),
	st = "n-breadcrumb",
	dt = Object.assign(Object.assign({}, Ao.props), {
		separator: {
			type: String,
			default: "/"
		}
	}),
	ct = t({
		name: "Breadcrumb",
		props: dt,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: n
			} = Ho(e), r = Ao("Breadcrumb", "-breadcrumb", it, at, e, o);
			m(st, {
				separatorRef: M(e, "separator"),
				mergedClsPrefixRef: o
			});
			const t = x((() => {
					const {
						common: {
							cubicBezierEaseInOut: e
						},
						self: {
							separatorColor: o,
							itemTextColor: n,
							itemTextColorHover: t,
							itemTextColorPressed: l,
							itemTextColorActive: a,
							fontSize: i,
							fontWeightActive: s,
							itemBorderRadius: d,
							itemColorHover: c,
							itemColorPressed: u,
							itemLineHeight: p
						}
					} = r.value;
					return {
						"--n-font-size": i,
						"--n-bezier": e,
						"--n-item-text-color": n,
						"--n-item-text-color-hover": t,
						"--n-item-text-color-pressed": l,
						"--n-item-text-color-active": a,
						"--n-separator-color": o,
						"--n-item-color-hover": c,
						"--n-item-color-pressed": u,
						"--n-item-border-radius": d,
						"--n-font-weight-active": s,
						"--n-item-line-height": p
					}
				})),
				l = n ? Wo("breadcrumb", void 0, t, e) : void 0;
			return {
				mergedClsPrefix: o,
				cssVars: n ? void 0 : t,
				themeClass: null == l ? void 0 : l.themeClass,
				onRender: null == l ? void 0 : l.onRender
			}
		},
		render() {
			var e;
			return null === (e = this.onRender) || void 0 === e || e.call(this), P("nav", {
				class: [`${this.mergedClsPrefix}-breadcrumb`, this.themeClass],
				style: this.cssVars,
				"aria-label": "Breadcrumb"
			}, P("ul", null, this.$slots))
		}
	}),
	ut = vo ? window : null,
	pt = {
		separator: String,
		href: String,
		clickable: {
			type: Boolean,
			default: !0
		},
		onClick: Function
	},
	ht = t({
		name: "BreadcrumbItem",
		props: pt,
		setup(e, {
			slots: o
		}) {
			const n = d(st, null);
			if (!n) return () => null;
			const {
				separatorRef: r,
				mergedClsPrefixRef: t
			} = n, l = ((e = ut) => {
				const o = () => {
						const {
							hash: o,
							host: n,
							hostname: r,
							href: t,
							origin: l,
							pathname: a,
							port: i,
							protocol: s,
							search: d
						} = (null == e ? void 0 : e.location) || {};
						return {
							hash: o,
							host: n,
							hostname: r,
							href: t,
							origin: l,
							pathname: a,
							port: i,
							protocol: s,
							search: d
						}
					},
					n = () => {
						r.value = o()
					},
					r = i(o());
				return c((() => {
					e && (e.addEventListener("popstate", n), e.addEventListener("hashchange", n))
				})), se((() => {
					e && (e.removeEventListener("popstate", n), e.removeEventListener("hashchange", n))
				})), r
			})(), a = x((() => e.href ? "a" : "span")), s = x((() => l.value.href === e.href ? "location" : null));
			return () => {
				const {
					value: n
				} = t;
				return P("li", {
					class: [`${n}-breadcrumb-item`, e.clickable && `${n}-breadcrumb-item--clickable`]
				}, P(a.value, {
					class: `${n}-breadcrumb-item__link`,
					"aria-current": s.value,
					href: e.href,
					onClick: e.onClick
				}, o), P("span", {
					class: `${n}-breadcrumb-item__separator`,
					"aria-hidden": "true"
				}, Ve(o.separator, (() => {
					var o;
					return [null !== (o = e.separator) && void 0 !== o ? o : r.value]
				}))))
			}
		}
	});

function vt(e) {
	return A(e, [255, 255, 255, .16])
}

function bt(e) {
	return A(e, [0, 0, 0, .12])
}
const ft = {
		paddingTiny: "0 6px",
		paddingSmall: "0 10px",
		paddingMedium: "0 14px",
		paddingLarge: "0 18px",
		paddingRoundTiny: "0 10px",
		paddingRoundSmall: "0 14px",
		paddingRoundMedium: "0 18px",
		paddingRoundLarge: "0 22px",
		iconMarginTiny: "6px",
		iconMarginSmall: "6px",
		iconMarginMedium: "6px",
		iconMarginLarge: "6px",
		iconSizeTiny: "14px",
		iconSizeSmall: "18px",
		iconSizeMedium: "18px",
		iconSizeLarge: "20px",
		rippleDuration: ".6s"
	},
	gt = {
		name: "Button",
		common: zn,
		self: e => {
			const {
				heightTiny: o,
				heightSmall: n,
				heightMedium: r,
				heightLarge: t,
				borderRadius: l,
				fontSizeTiny: a,
				fontSizeSmall: i,
				fontSizeMedium: s,
				fontSizeLarge: d,
				opacityDisabled: c,
				textColor2: u,
				textColor3: p,
				primaryColorHover: h,
				primaryColorPressed: v,
				borderColor: b,
				primaryColor: f,
				baseColor: g,
				infoColor: m,
				infoColorHover: x,
				infoColorPressed: y,
				successColor: w,
				successColorHover: C,
				successColorPressed: S,
				warningColor: z,
				warningColorHover: k,
				warningColorPressed: $,
				errorColor: P,
				errorColorHover: R,
				errorColorPressed: T,
				fontWeight: B,
				buttonColor2: F,
				buttonColor2Hover: M,
				buttonColor2Pressed: O,
				fontWeightStrong: I
			} = e;
			return Object.assign(Object.assign({}, ft), {
				heightTiny: o,
				heightSmall: n,
				heightMedium: r,
				heightLarge: t,
				borderRadiusTiny: l,
				borderRadiusSmall: l,
				borderRadiusMedium: l,
				borderRadiusLarge: l,
				fontSizeTiny: a,
				fontSizeSmall: i,
				fontSizeMedium: s,
				fontSizeLarge: d,
				opacityDisabled: c,
				colorOpacitySecondary: "0.16",
				colorOpacitySecondaryHover: "0.22",
				colorOpacitySecondaryPressed: "0.28",
				colorSecondary: F,
				colorSecondaryHover: M,
				colorSecondaryPressed: O,
				colorTertiary: F,
				colorTertiaryHover: M,
				colorTertiaryPressed: O,
				colorQuaternary: "#0000",
				colorQuaternaryHover: M,
				colorQuaternaryPressed: O,
				color: "#0000",
				colorHover: "#0000",
				colorPressed: "#0000",
				colorFocus: "#0000",
				colorDisabled: "#0000",
				textColor: u,
				textColorTertiary: p,
				textColorHover: h,
				textColorPressed: v,
				textColorFocus: h,
				textColorDisabled: u,
				textColorText: u,
				textColorTextHover: h,
				textColorTextPressed: v,
				textColorTextFocus: h,
				textColorTextDisabled: u,
				textColorGhost: u,
				textColorGhostHover: h,
				textColorGhostPressed: v,
				textColorGhostFocus: h,
				textColorGhostDisabled: u,
				border: `1px solid ${b}`,
				borderHover: `1px solid ${h}`,
				borderPressed: `1px solid ${v}`,
				borderFocus: `1px solid ${h}`,
				borderDisabled: `1px solid ${b}`,
				rippleColor: f,
				colorPrimary: f,
				colorHoverPrimary: h,
				colorPressedPrimary: v,
				colorFocusPrimary: h,
				colorDisabledPrimary: f,
				textColorPrimary: g,
				textColorHoverPrimary: g,
				textColorPressedPrimary: g,
				textColorFocusPrimary: g,
				textColorDisabledPrimary: g,
				textColorTextPrimary: f,
				textColorTextHoverPrimary: h,
				textColorTextPressedPrimary: v,
				textColorTextFocusPrimary: h,
				textColorTextDisabledPrimary: u,
				textColorGhostPrimary: f,
				textColorGhostHoverPrimary: h,
				textColorGhostPressedPrimary: v,
				textColorGhostFocusPrimary: h,
				textColorGhostDisabledPrimary: f,
				borderPrimary: `1px solid ${f}`,
				borderHoverPrimary: `1px solid ${h}`,
				borderPressedPrimary: `1px solid ${v}`,
				borderFocusPrimary: `1px solid ${h}`,
				borderDisabledPrimary: `1px solid ${f}`,
				rippleColorPrimary: f,
				colorInfo: m,
				colorHoverInfo: x,
				colorPressedInfo: y,
				colorFocusInfo: x,
				colorDisabledInfo: m,
				textColorInfo: g,
				textColorHoverInfo: g,
				textColorPressedInfo: g,
				textColorFocusInfo: g,
				textColorDisabledInfo: g,
				textColorTextInfo: m,
				textColorTextHoverInfo: x,
				textColorTextPressedInfo: y,
				textColorTextFocusInfo: x,
				textColorTextDisabledInfo: u,
				textColorGhostInfo: m,
				textColorGhostHoverInfo: x,
				textColorGhostPressedInfo: y,
				textColorGhostFocusInfo: x,
				textColorGhostDisabledInfo: m,
				borderInfo: `1px solid ${m}`,
				borderHoverInfo: `1px solid ${x}`,
				borderPressedInfo: `1px solid ${y}`,
				borderFocusInfo: `1px solid ${x}`,
				borderDisabledInfo: `1px solid ${m}`,
				rippleColorInfo: m,
				colorSuccess: w,
				colorHoverSuccess: C,
				colorPressedSuccess: S,
				colorFocusSuccess: C,
				colorDisabledSuccess: w,
				textColorSuccess: g,
				textColorHoverSuccess: g,
				textColorPressedSuccess: g,
				textColorFocusSuccess: g,
				textColorDisabledSuccess: g,
				textColorTextSuccess: w,
				textColorTextHoverSuccess: C,
				textColorTextPressedSuccess: S,
				textColorTextFocusSuccess: C,
				textColorTextDisabledSuccess: u,
				textColorGhostSuccess: w,
				textColorGhostHoverSuccess: C,
				textColorGhostPressedSuccess: S,
				textColorGhostFocusSuccess: C,
				textColorGhostDisabledSuccess: w,
				borderSuccess: `1px solid ${w}`,
				borderHoverSuccess: `1px solid ${C}`,
				borderPressedSuccess: `1px solid ${S}`,
				borderFocusSuccess: `1px solid ${C}`,
				borderDisabledSuccess: `1px solid ${w}`,
				rippleColorSuccess: w,
				colorWarning: z,
				colorHoverWarning: k,
				colorPressedWarning: $,
				colorFocusWarning: k,
				colorDisabledWarning: z,
				textColorWarning: g,
				textColorHoverWarning: g,
				textColorPressedWarning: g,
				textColorFocusWarning: g,
				textColorDisabledWarning: g,
				textColorTextWarning: z,
				textColorTextHoverWarning: k,
				textColorTextPressedWarning: $,
				textColorTextFocusWarning: k,
				textColorTextDisabledWarning: u,
				textColorGhostWarning: z,
				textColorGhostHoverWarning: k,
				textColorGhostPressedWarning: $,
				textColorGhostFocusWarning: k,
				textColorGhostDisabledWarning: z,
				borderWarning: `1px solid ${z}`,
				borderHoverWarning: `1px solid ${k}`,
				borderPressedWarning: `1px solid ${$}`,
				borderFocusWarning: `1px solid ${k}`,
				borderDisabledWarning: `1px solid ${z}`,
				rippleColorWarning: z,
				colorError: P,
				colorHoverError: R,
				colorPressedError: T,
				colorFocusError: R,
				colorDisabledError: P,
				textColorError: g,
				textColorHoverError: g,
				textColorPressedError: g,
				textColorFocusError: g,
				textColorDisabledError: g,
				textColorTextError: P,
				textColorTextHoverError: R,
				textColorTextPressedError: T,
				textColorTextFocusError: R,
				textColorTextDisabledError: u,
				textColorGhostError: P,
				textColorGhostHoverError: R,
				textColorGhostPressedError: T,
				textColorGhostFocusError: R,
				textColorGhostDisabledError: P,
				borderError: `1px solid ${P}`,
				borderHoverError: `1px solid ${R}`,
				borderPressedError: `1px solid ${T}`,
				borderFocusError: `1px solid ${R}`,
				borderDisabledError: `1px solid ${P}`,
				rippleColorError: P,
				waveOpacity: "0.6",
				fontWeight: B,
				fontWeightStrong: I
			})
		}
	},
	mt = ro([lo("button", "\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [io("color", [ao("border", {
		borderColor: "var(--n-border-color)"
	}), io("disabled", [ao("border", {
		borderColor: "var(--n-border-color-disabled)"
	})]), so("disabled", [ro("&:focus", [ao("state-border", {
		borderColor: "var(--n-border-color-focus)"
	})]), ro("&:hover", [ao("state-border", {
		borderColor: "var(--n-border-color-hover)"
	})]), ro("&:active", [ao("state-border", {
		borderColor: "var(--n-border-color-pressed)"
	})]), io("pressed", [ao("state-border", {
		borderColor: "var(--n-border-color-pressed)"
	})])])]), io("disabled", {
		backgroundColor: "var(--n-color-disabled)",
		color: "var(--n-text-color-disabled)"
	}, [ao("border", {
		border: "var(--n-border-disabled)"
	})]), so("disabled", [ro("&:focus", {
		backgroundColor: "var(--n-color-focus)",
		color: "var(--n-text-color-focus)"
	}, [ao("state-border", {
		border: "var(--n-border-focus)"
	})]), ro("&:hover", {
		backgroundColor: "var(--n-color-hover)",
		color: "var(--n-text-color-hover)"
	}, [ao("state-border", {
		border: "var(--n-border-hover)"
	})]), ro("&:active", {
		backgroundColor: "var(--n-color-pressed)",
		color: "var(--n-text-color-pressed)"
	}, [ao("state-border", {
		border: "var(--n-border-pressed)"
	})]), io("pressed", {
		backgroundColor: "var(--n-color-pressed)",
		color: "var(--n-text-color-pressed)"
	}, [ao("state-border", {
		border: "var(--n-border-pressed)"
	})])]), io("loading", "cursor: wait;"), lo("base-wave", "\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ", [io("active", {
		zIndex: 1,
		animationName: "button-wave-spread, button-wave-opacity"
	})]), vo && "MozBoxSizing" in document.createElement("div").style ? ro("&::moz-focus-inner", {
		border: 0
	}) : null, ao("border, state-border", "\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "), ao("border", {
		border: "var(--n-border)"
	}), ao("state-border", {
		border: "var(--n-border)",
		borderColor: "#0000",
		zIndex: 1
	}), ao("icon", "\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ", [lo("icon-slot", "\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ", [cn({
		top: "50%",
		originalTransform: "translateY(-50%)"
	})]), $r()]), ao("content", "\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ", [ro("~", [ao("icon", {
		margin: "var(--n-icon-margin)",
		marginRight: 0
	})])]), io("block", "\n display: flex;\n width: 100%;\n "), io("dashed", [ao("border, state-border", {
		borderStyle: "dashed !important"
	})]), io("disabled", {
		cursor: "not-allowed",
		opacity: "var(--n-opacity-disabled)"
	})]), ro("@keyframes button-wave-spread", {
		from: {
			boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
		},
		to: {
			boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
		}
	}), ro("@keyframes button-wave-opacity", {
		from: {
			opacity: "var(--n-wave-opacity)"
		},
		to: {
			opacity: 0
		}
	})]),
	xt = Object.assign(Object.assign({}, Ao.props), {
		color: String,
		textColor: String,
		text: Boolean,
		block: Boolean,
		loading: Boolean,
		disabled: Boolean,
		circle: Boolean,
		size: String,
		ghost: Boolean,
		round: Boolean,
		secondary: Boolean,
		tertiary: Boolean,
		quaternary: Boolean,
		strong: Boolean,
		focusable: {
			type: Boolean,
			default: !0
		},
		keyboard: {
			type: Boolean,
			default: !0
		},
		tag: {
			type: String,
			default: "button"
		},
		type: {
			type: String,
			default: "default"
		},
		dashed: Boolean,
		renderIcon: Function,
		iconPlacement: {
			type: String,
			default: "left"
		},
		attrType: {
			type: String,
			default: "button"
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		onClick: [Function, Array],
		nativeFocusBehavior: {
			type: Boolean,
			default: !Ir
		}
	}),
	yt = t({
		name: "Button",
		props: xt,
		setup(e) {
			const o = i(null),
				n = i(null),
				r = i(!1),
				t = v((() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered)),
				l = d("n-button-group", {}),
				{
					mergedSizeRef: a
				} = Po({}, {
					defaultSize: "medium",
					mergedSize: o => {
						const {
							size: n
						} = e;
						if (n) return n;
						const {
							size: r
						} = l;
						if (r) return r;
						const {
							mergedSize: t
						} = o || {};
						return t ? t.value : "medium"
					}
				}),
				s = x((() => e.focusable && !e.disabled)),
				{
					inlineThemeDisabled: c,
					mergedClsPrefixRef: u,
					mergedRtlRef: p
				} = Ho(e),
				h = Ao("Button", "-button", mt, gt, e, u),
				b = Vo("Button", p, u),
				f = x((() => {
					const o = h.value,
						{
							common: {
								cubicBezierEaseInOut: n,
								cubicBezierEaseOut: r
							},
							self: t
						} = o,
						{
							rippleDuration: l,
							opacityDisabled: i,
							fontWeight: s,
							fontWeightStrong: d
						} = t,
						c = a.value,
						{
							dashed: u,
							type: p,
							ghost: v,
							text: b,
							color: f,
							round: g,
							circle: m,
							textColor: x,
							secondary: y,
							tertiary: w,
							quaternary: C,
							strong: S
						} = e,
						z = {
							"font-weight": S ? d : s
						};
					let k = {
						"--n-color": "initial",
						"--n-color-hover": "initial",
						"--n-color-pressed": "initial",
						"--n-color-focus": "initial",
						"--n-color-disabled": "initial",
						"--n-ripple-color": "initial",
						"--n-text-color": "initial",
						"--n-text-color-hover": "initial",
						"--n-text-color-pressed": "initial",
						"--n-text-color-focus": "initial",
						"--n-text-color-disabled": "initial"
					};
					const $ = "tertiary" === p,
						P = "default" === p,
						R = $ ? "default" : p;
					if (b) {
						const e = x || f;
						k = {
							"--n-color": "#0000",
							"--n-color-hover": "#0000",
							"--n-color-pressed": "#0000",
							"--n-color-focus": "#0000",
							"--n-color-disabled": "#0000",
							"--n-ripple-color": "#0000",
							"--n-text-color": e || t[Je("textColorText", R)],
							"--n-text-color-hover": e ? vt(e) : t[Je("textColorTextHover", R)],
							"--n-text-color-pressed": e ? bt(e) : t[Je("textColorTextPressed", R)],
							"--n-text-color-focus": e ? vt(e) : t[Je("textColorTextHover", R)],
							"--n-text-color-disabled": e || t[Je("textColorTextDisabled", R)]
						}
					} else if (v || u) {
						const e = x || f;
						k = {
							"--n-color": "#0000",
							"--n-color-hover": "#0000",
							"--n-color-pressed": "#0000",
							"--n-color-focus": "#0000",
							"--n-color-disabled": "#0000",
							"--n-ripple-color": f || t[Je("rippleColor", R)],
							"--n-text-color": e || t[Je("textColorGhost", R)],
							"--n-text-color-hover": e ? vt(e) : t[Je("textColorGhostHover", R)],
							"--n-text-color-pressed": e ? bt(e) : t[Je("textColorGhostPressed", R)],
							"--n-text-color-focus": e ? vt(e) : t[Je("textColorGhostHover", R)],
							"--n-text-color-disabled": e || t[Je("textColorGhostDisabled", R)]
						}
					} else if (y) {
						const e = P ? t.textColor : $ ? t.textColorTertiary : t[Je("color", R)],
							o = f || e,
							n = "default" !== p && "tertiary" !== p;
						k = {
							"--n-color": n ? le(o, {
								alpha: Number(t.colorOpacitySecondary)
							}) : t.colorSecondary,
							"--n-color-hover": n ? le(o, {
								alpha: Number(t.colorOpacitySecondaryHover)
							}) : t.colorSecondaryHover,
							"--n-color-pressed": n ? le(o, {
								alpha: Number(t.colorOpacitySecondaryPressed)
							}) : t.colorSecondaryPressed,
							"--n-color-focus": n ? le(o, {
								alpha: Number(t.colorOpacitySecondaryHover)
							}) : t.colorSecondaryHover,
							"--n-color-disabled": t.colorSecondary,
							"--n-ripple-color": "#0000",
							"--n-text-color": o,
							"--n-text-color-hover": o,
							"--n-text-color-pressed": o,
							"--n-text-color-focus": o,
							"--n-text-color-disabled": o
						}
					} else if (w || C) {
						const e = P ? t.textColor : $ ? t.textColorTertiary : t[Je("color", R)],
							o = f || e;
						w ? (k["--n-color"] = t.colorTertiary, k["--n-color-hover"] = t.colorTertiaryHover, k["--n-color-pressed"] = t.colorTertiaryPressed, k["--n-color-focus"] = t.colorSecondaryHover, k["--n-color-disabled"] = t.colorTertiary) : (k["--n-color"] = t.colorQuaternary, k["--n-color-hover"] = t.colorQuaternaryHover, k["--n-color-pressed"] = t.colorQuaternaryPressed, k["--n-color-focus"] = t.colorQuaternaryHover, k["--n-color-disabled"] = t.colorQuaternary), k["--n-ripple-color"] = "#0000", k["--n-text-color"] = o, k["--n-text-color-hover"] = o, k["--n-text-color-pressed"] = o, k["--n-text-color-focus"] = o, k["--n-text-color-disabled"] = o
					} else k = {
						"--n-color": f || t[Je("color", R)],
						"--n-color-hover": f ? vt(f) : t[Je("colorHover", R)],
						"--n-color-pressed": f ? bt(f) : t[Je("colorPressed", R)],
						"--n-color-focus": f ? vt(f) : t[Je("colorFocus", R)],
						"--n-color-disabled": f || t[Je("colorDisabled", R)],
						"--n-ripple-color": f || t[Je("rippleColor", R)],
						"--n-text-color": x || (f ? t.textColorPrimary : $ ? t.textColorTertiary : t[Je("textColor", R)]),
						"--n-text-color-hover": x || (f ? t.textColorHoverPrimary : t[Je("textColorHover", R)]),
						"--n-text-color-pressed": x || (f ? t.textColorPressedPrimary : t[Je("textColorPressed", R)]),
						"--n-text-color-focus": x || (f ? t.textColorFocusPrimary : t[Je("textColorFocus", R)]),
						"--n-text-color-disabled": x || (f ? t.textColorDisabledPrimary : t[Je("textColorDisabled", R)])
					};
					let T = {
						"--n-border": "initial",
						"--n-border-hover": "initial",
						"--n-border-pressed": "initial",
						"--n-border-focus": "initial",
						"--n-border-disabled": "initial"
					};
					T = b ? {
						"--n-border": "none",
						"--n-border-hover": "none",
						"--n-border-pressed": "none",
						"--n-border-focus": "none",
						"--n-border-disabled": "none"
					} : {
						"--n-border": t[Je("border", R)],
						"--n-border-hover": t[Je("borderHover", R)],
						"--n-border-pressed": t[Je("borderPressed", R)],
						"--n-border-focus": t[Je("borderFocus", R)],
						"--n-border-disabled": t[Je("borderDisabled", R)]
					};
					const {
						[Je("height", c)]: B, [Je("fontSize", c)]: F, [Je("padding", c)]: M, [Je("paddingRound", c)]: O, [Je("iconSize", c)]: I, [Je("borderRadius", c)]: A, [Je("iconMargin", c)]: D, waveOpacity: H
					} = t, E = {
						"--n-width": m && !b ? B : "initial",
						"--n-height": b ? "initial" : B,
						"--n-font-size": F,
						"--n-padding": m || b ? "initial" : g ? O : M,
						"--n-icon-size": I,
						"--n-icon-margin": D,
						"--n-border-radius": b ? "initial" : m || g ? B : A
					};
					return Object.assign(Object.assign(Object.assign(Object.assign({
						"--n-bezier": n,
						"--n-bezier-ease-out": r,
						"--n-ripple-duration": l,
						"--n-opacity-disabled": i,
						"--n-wave-opacity": H
					}, z), k), T), E)
				})),
				g = c ? Wo("button", x((() => {
					let o = "";
					const {
						dashed: n,
						type: r,
						ghost: t,
						text: l,
						color: i,
						round: s,
						circle: d,
						textColor: c,
						secondary: u,
						tertiary: p,
						quaternary: h,
						strong: v
					} = e;
					n && (o += "a"), t && (o += "b"), l && (o += "c"), s && (o += "d"), d && (o += "e"), u && (o += "f"), p && (o += "g"), h && (o += "h"), v && (o += "i"), i && (o += "j" + Qe(i)), c && (o += "k" + Qe(c));
					const {
						value: b
					} = a;
					return o += "l" + b[0], o += "m" + r[0], o
				})), f, e) : void 0;
			return {
				selfElRef: o,
				waveElRef: n,
				mergedClsPrefix: u,
				mergedFocusable: s,
				mergedSize: a,
				showBorder: t,
				enterPressed: r,
				rtlEnabled: b,
				handleMousedown: n => {
					var r;
					s.value || n.preventDefault(), e.nativeFocusBehavior || (n.preventDefault(), e.disabled || s.value && (null === (r = o.value) || void 0 === r || r.focus({
						preventScroll: !0
					})))
				},
				handleKeydown: o => {
					if ("Enter" === o.key) {
						if (!e.keyboard || e.loading) return void o.preventDefault();
						r.value = !0
					}
				},
				handleBlur: () => {
					r.value = !1
				},
				handleKeyup: o => {
					if ("Enter" === o.key) {
						if (!e.keyboard) return;
						r.value = !1
					}
				},
				handleClick: o => {
					var r;
					if (!e.disabled && !e.loading) {
						const {
							onClick: t
						} = e;
						t && De(t, o), e.text || null === (r = n.value) || void 0 === r || r.play()
					}
				},
				customColorCssVars: x((() => {
					const {
						color: o
					} = e;
					if (!o) return null;
					const n = vt(o);
					return {
						"--n-border-color": o,
						"--n-border-color-hover": n,
						"--n-border-color-pressed": bt(o),
						"--n-border-color-focus": n,
						"--n-border-color-disabled": o
					}
				})),
				cssVars: c ? void 0 : f,
				themeClass: null == g ? void 0 : g.themeClass,
				onRender: null == g ? void 0 : g.onRender
			}
		},
		render() {
			const {
				mergedClsPrefix: e,
				tag: o,
				onRender: n
			} = this;
			null == n || n();
			const r = Ue(this.$slots.default, (o => o && P("span", {
				class: `${e}-button__content`
			}, o)));
			return P(o, {
				ref: "selfElRef",
				class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`],
				tabindex: this.mergedFocusable ? 0 : -1,
				type: this.attrType,
				style: this.cssVars,
				disabled: this.disabled,
				onClick: this.handleClick,
				onBlur: this.handleBlur,
				onMousedown: this.handleMousedown,
				onKeyup: this.handleKeyup,
				onKeydown: this.handleKeydown
			}, "right" === this.iconPlacement && r, P(nn, {
				width: !0
			}, {
				default: () => Ue(this.$slots.icon, (o => (this.loading || this.renderIcon || o) && P("span", {
					class: `${e}-button__icon`,
					style: {
						margin: Ke(this.$slots.default) ? "0" : ""
					}
				}, P(on, null, {
					default: () => this.loading ? P(hn, {
						clsPrefix: e,
						key: "loading",
						class: `${e}-icon-slot`,
						strokeWidth: 20
					}) : P("div", {
						key: "icon",
						class: `${e}-icon-slot`,
						role: "none"
					}, this.renderIcon ? this.renderIcon() : o)
				}))))
			}), "left" === this.iconPlacement && r, this.text ? null : P(Gn, {
				ref: "waveElRef",
				clsPrefix: e
			}), this.showBorder ? P("div", {
				"aria-hidden": !0,
				class: `${e}-button__border`,
				style: this.customColorCssVars
			}) : null, this.showBorder ? P("div", {
				"aria-hidden": !0,
				class: `${e}-button__state-border`,
				style: this.customColorCssVars
			}) : null)
		}
	}),
	wt = {
		name: "ColorPicker",
		common: zn,
		peers: {
			Input: Dr,
			Button: gt
		},
		self: e => {
			const {
				fontSize: o,
				boxShadow2: n,
				popoverColor: r,
				textColor2: t,
				borderRadius: l,
				borderColor: a,
				heightSmall: i,
				heightMedium: s,
				heightLarge: d,
				fontSizeSmall: c,
				fontSizeMedium: u,
				fontSizeLarge: p,
				dividerColor: h
			} = e;
			return {
				panelFontSize: o,
				boxShadow: n,
				color: r,
				textColor: t,
				borderRadius: l,
				border: `1px solid ${a}`,
				heightSmall: i,
				heightMedium: s,
				heightLarge: d,
				fontSizeSmall: c,
				fontSizeMedium: u,
				fontSizeLarge: p,
				dividerColor: h
			}
		}
	};

function Ct(e) {
	return null === e ? null : /^ *#/.test(e) ? "hex" : e.includes("rgb") ? "rgb" : e.includes("hsl") ? "hsl" : e.includes("hsv") ? "hsv" : null
}
const St = {
	rgb: {
		hex: e => de(O(e)),
		hsl(e) {
			const [o, n, r, t] = O(e);
			return ce([...ue(o, n, r), t])
		},
		hsv(e) {
			const [o, n, r, t] = O(e);
			return pe([...he(o, n, r), t])
		}
	},
	hex: {
		rgb: e => ve(O(e)),
		hsl(e) {
			const [o, n, r, t] = O(e);
			return ce([...ue(o, n, r), t])
		},
		hsv(e) {
			const [o, n, r, t] = O(e);
			return pe([...he(o, n, r), t])
		}
	},
	hsl: {
		hex(e) {
			const [o, n, r, t] = be(e);
			return de([...fe(o, n, r), t])
		},
		rgb(e) {
			const [o, n, r, t] = be(e);
			return ve([...fe(o, n, r), t])
		},
		hsv(e) {
			const [o, n, r, t] = be(e);
			return pe([...ge(o, n, r), t])
		}
	},
	hsv: {
		hex(e) {
			const [o, n, r, t] = me(e);
			return de([...xe(o, n, r), t])
		},
		rgb(e) {
			const [o, n, r, t] = me(e);
			return ve([...xe(o, n, r), t])
		},
		hsl(e) {
			const [o, n, r, t] = me(e);
			return ce([...ye(o, n, r), t])
		}
	}
};

function zt(e, o, n) {
	return (n = n || Ct(e)) ? n === o ? e : St[n][o](e) : null
}
const kt = "12px",
	$t = "6px",
	Pt = t({
		name: "HueSlider",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			hue: {
				type: Number,
				required: !0
			},
			onUpdateHue: {
				type: Function,
				required: !0
			},
			onComplete: Function
		},
		setup(e) {
			const o = i(null);

			function n(n) {
				const {
					value: r
				} = o;
				if (!r) return;
				const {
					width: t,
					left: l
				} = r.getBoundingClientRect(), a = (i = (n.clientX - l - 6) / (t - 12) * 360, (i = Math.round(i)) >= 360 ? 359 : i < 0 ? 0 : i);
				var i;
				e.onUpdateHue(a)
			}

			function r() {
				var o;
				h("mousemove", document, n), h("mouseup", document, r), null === (o = e.onComplete) || void 0 === o || o.call(e)
			}
			return {
				railRef: o,
				handleMouseDown: function(e) {
					o.value && (u("mousemove", document, n), u("mouseup", document, r), n(e))
				}
			}
		},
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-color-picker-slider`,
				style: {
					height: kt,
					borderRadius: $t
				}
			}, P("div", {
				ref: "railRef",
				style: {
					boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, .24)",
					boxSizing: "border-box",
					backgroundImage: "linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",
					height: kt,
					borderRadius: $t,
					position: "relative"
				},
				onMousedown: this.handleMouseDown
			}, P("div", {
				style: {
					position: "absolute",
					left: $t,
					right: $t,
					top: 0,
					bottom: 0
				}
			}, P("div", {
				class: `${e}-color-picker-handle`,
				style: {
					left: `calc((${this.hue}%) / 359 * 100 - ${$t})`,
					borderRadius: $t,
					width: kt,
					height: kt
				}
			}, P("div", {
				class: `${e}-color-picker-handle__fill`,
				style: {
					backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
					borderRadius: $t,
					width: kt,
					height: kt
				}
			})))))
		}
	}),
	Rt = "12px",
	Tt = "6px",
	Bt = t({
		name: "AlphaSlider",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			rgba: {
				type: Array,
				default: null
			},
			alpha: {
				type: Number,
				default: 0
			},
			onUpdateAlpha: {
				type: Function,
				required: !0
			},
			onComplete: Function
		},
		setup(e) {
			const o = i(null);

			function n(n) {
				const {
					value: r
				} = o;
				if (!r) return;
				const {
					width: t,
					left: l
				} = r.getBoundingClientRect(), a = (n.clientX - l) / (t - 12);
				var i;
				e.onUpdateAlpha((i = a, (i = Math.round(100 * i) / 100) > 1 ? 1 : i < 0 ? 0 : i))
			}

			function r() {
				var o;
				h("mousemove", document, n), h("mouseup", document, r), null === (o = e.onComplete) || void 0 === o || o.call(e)
			}
			return {
				railRef: o,
				railBackgroundImage: x((() => {
					const {
						rgba: o
					} = e;
					return o ? `linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)` : ""
				})),
				handleMouseDown: function(t) {
					o.value && e.rgba && (u("mousemove", document, n), u("mouseup", document, r), n(t))
				}
			}
		},
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-color-picker-slider`,
				ref: "railRef",
				style: {
					height: Rt,
					borderRadius: Tt
				},
				onMousedown: this.handleMouseDown
			}, P("div", {
				style: {
					borderRadius: Tt,
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					overflow: "hidden"
				}
			}, P("div", {
				class: `${e}-color-picker-checkboard`
			}), P("div", {
				class: `${e}-color-picker-slider__image`,
				style: {
					backgroundImage: this.railBackgroundImage
				}
			})), this.rgba && P("div", {
				style: {
					position: "absolute",
					left: Tt,
					right: Tt,
					top: 0,
					bottom: 0
				}
			}, P("div", {
				class: `${e}-color-picker-handle`,
				style: {
					left: `calc(${100*this.alpha}% - ${Tt})`,
					borderRadius: Tt,
					width: Rt,
					height: Rt
				}
			}, P("div", {
				class: `${e}-color-picker-handle__fill`,
				style: {
					backgroundColor: ve(this.rgba),
					borderRadius: Tt,
					width: Rt,
					height: Rt
				}
			}))))
		}
	}),
	Ft = "12px",
	Mt = "6px",
	Ot = t({
		name: "Pallete",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			rgba: {
				type: Array,
				default: null
			},
			displayedHue: {
				type: Number,
				required: !0
			},
			displayedSv: {
				type: Array,
				required: !0
			},
			onUpdateSV: {
				type: Function,
				required: !0
			},
			onComplete: Function
		},
		setup(e) {
			const o = i(null);

			function n(n) {
				const {
					value: r
				} = o;
				if (!r) return;
				const {
					width: t,
					height: l,
					left: a,
					bottom: i
				} = r.getBoundingClientRect(), s = (i - n.clientY) / l, d = (n.clientX - a) / t, c = 100 * (d > 1 ? 1 : d < 0 ? 0 : d), u = 100 * (s > 1 ? 1 : s < 0 ? 0 : s);
				e.onUpdateSV(c, u)
			}

			function r() {
				var o;
				h("mousemove", document, n), h("mouseup", document, r), null === (o = e.onComplete) || void 0 === o || o.call(e)
			}
			return {
				palleteRef: o,
				handleColor: x((() => {
					const {
						rgba: o
					} = e;
					return o ? `rgb(${o[0]}, ${o[1]}, ${o[2]})` : ""
				})),
				handleMouseDown: function(e) {
					o.value && (u("mousemove", document, n), u("mouseup", document, r), n(e))
				}
			}
		},
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-color-picker-pallete`,
				onMousedown: this.handleMouseDown,
				ref: "palleteRef"
			}, P("div", {
				class: `${e}-color-picker-pallete__layer`,
				style: {
					backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
				}
			}), P("div", {
				class: `${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,
				style: {
					backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"
				}
			}), this.rgba && P("div", {
				class: `${e}-color-picker-handle`,
				style: {
					width: Ft,
					height: Ft,
					borderRadius: Mt,
					left: `calc(${this.displayedSv[0]}% - ${Mt})`,
					bottom: `calc(${this.displayedSv[1]}% - ${Mt})`
				}
			}, P("div", {
				class: `${e}-color-picker-handle__fill`,
				style: {
					backgroundColor: this.handleColor,
					borderRadius: Mt,
					width: Ft,
					height: Ft
				}
			})))
		}
	}),
	It = "n-color-picker",
	At = {
		paddingSmall: "0 4px"
	},
	Dt = t({
		name: "ColorInputUnit",
		props: {
			label: {
				type: String,
				required: !0
			},
			value: {
				type: [Number, String],
				default: null
			},
			showAlpha: Boolean,
			onUpdateValue: {
				type: Function,
				required: !0
			}
		},
		setup(e) {
			const o = i(""),
				{
					themeRef: n
				} = d(It, null);

			function r() {
				const {
					value: o
				} = e;
				if (null === o) return "";
				const {
					label: n
				} = e;
				return "HEX" === n ? o : "A" === n ? `${Math.floor(100*o)}%` : String(Math.floor(o))
			}
			return z((() => {
				o.value = r()
			})), {
				mergedTheme: n,
				inputValue: o,
				handleInputChange: function(n) {
					let t, l;
					switch (e.label) {
						case "HEX":
							l = function(e) {
								const o = e.trim();
								return !!/^#[0-9a-fA-F]+$/.test(o) && [4, 5, 7, 9].includes(o.length)
							}(n), l && e.onUpdateValue(n), o.value = r();
							break;
						case "H":
							t = function(e) {
								return !!/^\d{1,3}\.?\d*$/.test(e.trim()) && Math.max(0, Math.min(parseInt(e), 360))
							}(n), !1 === t ? o.value = r() : e.onUpdateValue(t);
							break;
						case "S":
						case "L":
						case "V":
							t = function(e) {
								return !!/^\d{1,3}\.?\d*$/.test(e.trim()) && Math.max(0, Math.min(parseInt(e), 100))
							}(n), !1 === t ? o.value = r() : e.onUpdateValue(t);
							break;
						case "A":
							t = function(e) {
								return !!/^\d{1,3}\.?\d*%$/.test(e.trim()) && Math.max(0, Math.min(parseInt(e) / 100, 100))
							}(n), !1 === t ? o.value = r() : e.onUpdateValue(t);
							break;
						case "R":
						case "G":
						case "B":
							t = function(e) {
								return !!/^\d{1,3}\.?\d*$/.test(e.trim()) && Math.max(0, Math.min(parseInt(e), 255))
							}(n), !1 === t ? o.value = r() : e.onUpdateValue(t)
					}
				},
				handleInputUpdateValue: function(e) {
					o.value = e
				}
			}
		},
		render() {
			const {
				mergedTheme: e
			} = this;
			return P(Vr, {
				size: "small",
				placeholder: this.label,
				theme: e.peers.Input,
				themeOverrides: e.peerOverrides.Input,
				builtinThemeOverrides: At,
				value: this.inputValue,
				onUpdateValue: this.handleInputUpdateValue,
				onChange: this.handleInputChange,
				style: "A" === this.label ? "flex-grow: 1.25;" : ""
			})
		}
	}),
	Ht = t({
		name: "ColorInput",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			mode: {
				type: String,
				required: !0
			},
			modes: {
				type: Array,
				required: !0
			},
			showAlpha: {
				type: Boolean,
				required: !0
			},
			value: {
				type: String,
				default: null
			},
			valueArr: {
				type: Array,
				default: null
			},
			onUpdateValue: {
				type: Function,
				required: !0
			},
			onUpdateMode: {
				type: Function,
				required: !0
			}
		},
		setup: e => ({
			handleUnitUpdateValue(o, n) {
				const {
					showAlpha: r
				} = e;
				if ("hex" === e.mode) return void e.onUpdateValue((r ? de : we)(n));
				let t;
				switch (t = null === e.valueArr ? [0, 0, 0, 0] : Array.from(e.valueArr), e.mode) {
					case "hsv":
						t[o] = n, e.onUpdateValue((r ? pe : ze)(t));
						break;
					case "rgb":
						t[o] = n, e.onUpdateValue((r ? ve : Se)(t));
						break;
					case "hsl":
						t[o] = n, e.onUpdateValue((r ? ce : Ce)(t))
				}
			}
		}),
		render() {
			const {
				clsPrefix: e,
				modes: o
			} = this;
			return P("div", {
				class: `${e}-color-picker-input`
			}, P("div", {
				class: `${e}-color-picker-input__mode`,
				onClick: this.onUpdateMode,
				style: {
					cursor: 1 === o.length ? "" : "pointer"
				}
			}, this.mode.toUpperCase() + (this.showAlpha ? "A" : "")), P(Kr, null, {
				default: () => {
					const {
						mode: e,
						valueArr: o,
						showAlpha: n
					} = this;
					if ("hex" === e) {
						let e = null;
						try {
							e = null === o ? null : (n ? de : we)(o)
						} catch (r) {}
						return P(Dt, {
							label: "HEX",
							showAlpha: n,
							value: e,
							onUpdateValue: e => {
								this.handleUnitUpdateValue(0, e)
							}
						})
					}
					return (e + (n ? "a" : "")).split("").map(((e, n) => P(Dt, {
						label: e.toUpperCase(),
						value: null === o ? null : o[n],
						onUpdateValue: e => {
							this.handleUnitUpdateValue(n, e)
						}
					})))
				}
			}))
		}
	}),
	Et = t({
		name: "ColorPickerTrigger",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			value: {
				type: String,
				default: null
			},
			hsla: {
				type: Array,
				default: null
			},
			disabled: Boolean,
			onClick: Function
		},
		setup(e) {
			const {
				colorPickerSlots: o,
				renderLabelRef: n
			} = d(It, null);
			return () => {
				const {
					hsla: r,
					value: t,
					clsPrefix: l,
					onClick: a,
					disabled: i
				} = e, s = o.label || n.value;
				return P("div", {
					class: [`${l}-color-picker-trigger`, i && `${l}-color-picker-trigger--disabled`],
					onClick: i ? void 0 : a
				}, P("div", {
					class: `${l}-color-picker-trigger__fill`
				}, P("div", {
					class: `${l}-color-picker-checkboard`
				}), P("div", {
					style: {
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						backgroundColor: r ? ce(r) : ""
					}
				}), t && r ? P("div", {
					class: `${l}-color-picker-trigger__value`,
					style: {
						color: r[2] > 50 || r[3] < .5 ? "black" : "white"
					}
				}, s ? s(t) : t) : null))
			}
		}
	});

function Lt(e, o) {
	if ("hsv" === o) {
		const [o, n, r, t] = me(e);
		return ve([...xe(o, n, r), t])
	}
	return e
}
const _t = t({
		name: "ColorPickerSwatches",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			mode: {
				type: String,
				required: !0
			},
			swatches: {
				type: Array,
				required: !0
			},
			onUpdateColor: {
				type: Function,
				required: !0
			}
		},
		setup(e) {
			function o(o) {
				e.onUpdateColor(function(o) {
					const {
						mode: n
					} = e;
					let {
						value: r,
						mode: t
					} = o;
					return t || (t = "hex", /^[a-zA-Z]+$/.test(r) ? r = function(e) {
						const o = document.createElement("canvas").getContext("2d");
						return o.fillStyle = e, o.fillStyle
					}(r) : (Ee("color-picker", `color ${r} in swatches is invalid.`), r = "#000000")), t === n ? r : zt(r, n, t)
				}(o))
			}
			return {
				parsedSwatchesRef: x((() => e.swatches.map((e => {
					const o = Ct(e);
					return {
						value: e,
						mode: o,
						legalValue: Lt(e, o)
					}
				})))),
				handleSwatchSelect: o,
				handleSwatchKeyDown: function(e, n) {
					"Enter" === e.key && o(n)
				}
			}
		},
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-color-picker-swatches`
			}, this.parsedSwatchesRef.map((o => P("div", {
				class: `${e}-color-picker-swatch`,
				tabindex: 0,
				onClick: () => this.handleSwatchSelect(o),
				onKeydown: e => this.handleSwatchKeyDown(e, o)
			}, P("div", {
				class: `${e}-color-picker-swatch__fill`,
				style: {
					background: o.legalValue
				}
			})))))
		}
	}),
	jt = t({
		name: "ColorPreview",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			mode: {
				type: String,
				required: !0
			},
			color: {
				type: String,
				default: null,
				validator: e => {
					const o = Ct(e);
					return Boolean(!e || o && "hsv" !== o)
				}
			},
			onUpdateColor: {
				type: Function,
				required: !0
			}
		},
		setup: e => ({
			handleChange: function(o) {
				var n;
				const r = o.target.value;
				null === (n = e.onUpdateColor) || void 0 === n || n.call(e, zt(r.toUpperCase(), e.mode, "hex")), o.stopPropagation()
			}
		}),
		render() {
			const {
				clsPrefix: e
			} = this;
			return P("div", {
				class: `${e}-color-picker-preview__preview`
			}, P("span", {
				class: `${e}-color-picker-preview__fill`,
				style: {
					background: this.color || "#000000"
				}
			}), P("input", {
				class: `${e}-color-picker-preview__input`,
				type: "color",
				value: this.color,
				onChange: this.handleChange
			}))
		}
	}),
	Nt = ro([lo("color-picker", "\n display: inline-block;\n box-sizing: border-box;\n height: var(--n-height);\n font-size: var(--n-font-size);\n width: 100%;\n position: relative;\n "), lo("color-picker-panel", "\n margin: 4px 0;\n width: 240px;\n font-size: var(--n-panel-font-size);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n ", [Wn(), lo("input", "\n text-align: center;\n ")]), lo("color-picker-checkboard", "\n background: white; \n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ", [ro("&::after", '\n background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);\n background-size: 12px 12px;\n background-position: 0 0, 0 6px, 6px -6px, -6px 0px;\n background-repeat: repeat;\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]), lo("color-picker-slider", "\n margin-bottom: 8px;\n position: relative;\n box-sizing: border-box;\n ", [ao("image", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n "), ro("&::after", '\n content: "";\n position: absolute;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);\n pointer-events: none;\n ')]), lo("color-picker-handle", "\n z-index: 1;\n box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);\n position: absolute;\n background-color: white;\n overflow: hidden;\n ", [ao("fill", "\n box-sizing: border-box;\n border: 2px solid white;\n ")]), lo("color-picker-pallete", "\n height: 180px;\n position: relative;\n margin-bottom: 8px;\n cursor: crosshair;\n ", [ao("layer", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ", [io("shadowed", "\n box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);\n ")])]), lo("color-picker-preview", "\n display: flex;\n ", [ao("sliders", "\n flex: 1 0 auto;\n "), ao("preview", "\n position: relative;\n height: 30px;\n width: 30px;\n margin: 0 0 8px 6px;\n border-radius: 50%;\n box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;\n overflow: hidden;\n "), ao("fill", "\n display: block;\n width: 30px;\n height: 30px;\n "), ao("input", "\n position: absolute;\n top: 0;\n left: 0;\n width: 30px;\n height: 30px;\n opacity: 0;\n z-index: 1;\n ")]), lo("color-picker-input", "\n display: flex;\n align-items: center;\n ", [lo("input", "\n flex-grow: 1;\n flex-basis: 0;\n "), ao("mode", "\n width: 72px;\n text-align: center;\n ")]), lo("color-picker-control", "\n padding: 12px;\n "), lo("color-picker-action", "\n display: flex;\n margin-top: -4px;\n border-top: 1px solid var(--n-divider-color);\n padding: 8px 12px;\n justify-content: flex-end;\n ", [lo("button", "margin-left: 8px;")]), lo("color-picker-trigger", "\n border: var(--n-border);\n height: 100%;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n cursor: pointer;\n ", [ao("value", "\n white-space: nowrap;\n position: relative;\n "), ao("fill", "\n border-radius: var(--n-border-radius);\n position: absolute;\n display: flex;\n align-items: center;\n justify-content: center;\n left: 4px;\n right: 4px;\n top: 4px;\n bottom: 4px;\n "), io("disabled", "cursor: not-allowed"), lo("color-picker-checkboard", "\n border-radius: var(--n-border-radius);\n ", [ro("&::after", "\n --n-block-size: calc((var(--n-height) - 8px) / 3);\n background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);\n background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; \n ")])]), lo("color-picker-swatches", "\n display: grid;\n grid-gap: 8px;\n flex-wrap: wrap;\n position: relative;\n grid-template-columns: repeat(auto-fill, 18px);\n margin-top: 10px;\n ", [lo("color-picker-swatch", "\n width: 18px;\n height: 18px;\n background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);\n background-size: 8px 8px;\n background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;\n background-repeat: repeat;\n ", [ao("fill", "\n position: relative;\n width: 100%;\n height: 100%;\n border-radius: 3px;\n box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;\n cursor: pointer;\n "), ro("&:focus", "\n outline: none;\n ", [ao("fill", [ro("&::after", '\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n background: inherit;\n filter: blur(2px);\n content: "";\n ')])])])])]),
	Wt = Object.assign(Object.assign({}, Ao.props), {
		value: String,
		show: {
			type: Boolean,
			default: void 0
		},
		defaultShow: Boolean,
		defaultValue: String,
		modes: {
			type: Array,
			default: () => ["rgb", "hex", "hsl"]
		},
		placement: {
			type: String,
			default: "bottom-start"
		},
		to: Co.propTo,
		showAlpha: {
			type: Boolean,
			default: !0
		},
		showPreview: Boolean,
		swatches: Array,
		disabled: {
			type: Boolean,
			default: void 0
		},
		actions: {
			type: Array,
			default: null
		},
		internalActions: Array,
		size: String,
		renderLabel: Function,
		onComplete: Function,
		onConfirm: Function,
		"onUpdate:show": [Function, Array],
		onUpdateShow: [Function, Array],
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array]
	}),
	Vt = t({
		name: "ColorPicker",
		props: Wt,
		setup(e, {
			slots: o
		}) {
			const n = i(null);
			let r = null;
			const t = Po(e),
				{
					mergedSizeRef: l,
					mergedDisabledRef: a
				} = t,
				{
					localeRef: d
				} = jo("global"),
				{
					mergedClsPrefixRef: c,
					namespaceRef: u,
					inlineThemeDisabled: p
				} = Ho(e),
				h = Ao("ColorPicker", "-color-picker", Nt, wt, e, c);
			m(It, {
				themeRef: h,
				renderLabelRef: M(e, "renderLabel"),
				colorPickerSlots: o
			});
			const v = i(e.defaultShow),
				b = J(M(e, "show"), v);

			function f(o) {
				const {
					onUpdateShow: n,
					"onUpdate:show": r
				} = e;
				n && De(n, o), r && De(r, o), v.value = o
			}
			const {
				defaultValue: g
			} = e, y = i(void 0 === g ? function(e, o) {
				switch (e[0]) {
					case "hex":
						return o ? "#000000FF" : "#000000";
					case "rgb":
						return o ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
					case "hsl":
						return o ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
					case "hsv":
						return o ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)"
				}
				return "#000000"
			}(e.modes, e.showAlpha) : g), w = J(M(e, "value"), y), C = i([w.value]), S = i(0), k = x((() => Ct(w.value))), {
				modes: $
			} = e, R = i(Ct(w.value) || $[0] || "rgb");

			function B() {
				const {
					modes: o
				} = e, {
					value: n
				} = R, r = o.findIndex((e => e === n));
				R.value = ~r ? o[(r + 1) % o.length] : "rgb"
			}
			let F, I, A, D, H, E, _, j;
			const N = x((() => {
					const {
						value: e
					} = w;
					if (!e) return null;
					switch (k.value) {
						case "hsv":
							return me(e);
						case "hsl":
							return [F, I, A, j] = be(e), [...ge(F, I, A), j];
						case "rgb":
						case "hex":
							return [H, E, _, j] = O(e), [...he(H, E, _), j]
					}
				})),
				V = x((() => {
					const {
						value: e
					} = w;
					if (!e) return null;
					switch (k.value) {
						case "rgb":
						case "hex":
							return O(e);
						case "hsv":
							return [F, I, D, j] = me(e), [...xe(F, I, D), j];
						case "hsl":
							return [F, I, A, j] = be(e), [...fe(F, I, A), j]
					}
				})),
				U = x((() => {
					const {
						value: e
					} = w;
					if (!e) return null;
					switch (k.value) {
						case "hsl":
							return be(e);
						case "hsv":
							return [F, I, D, j] = me(e), [...ye(F, I, D), j];
						case "rgb":
						case "hex":
							return [H, E, _, j] = O(e), [...ue(H, E, _), j]
					}
				})),
				K = x((() => {
					switch (R.value) {
						case "rgb":
						case "hex":
							return V.value;
						case "hsv":
							return N.value;
						case "hsl":
							return U.value
					}
				})),
				G = i(0),
				q = i(1),
				Y = i([0, 0]);

			function X(o, n) {
				const {
					value: r
				} = N, t = G.value, l = r ? r[3] : 1;
				Y.value = [o, n];
				const {
					showAlpha: a
				} = e;
				switch (R.value) {
					case "hsv":
						ee((a ? pe : ze)([t, o, n, l]), "cursor");
						break;
					case "hsl":
						ee((a ? ce : Ce)([...ye(t, o, n), l]), "cursor");
						break;
					case "rgb":
						ee((a ? ve : Se)([...xe(t, o, n), l]), "cursor");
						break;
					case "hex":
						ee((a ? de : we)([...xe(t, o, n), l]), "cursor")
				}
			}

			function Z(o) {
				G.value = o;
				const {
					value: n
				} = N;
				if (!n) return;
				const [, r, t, l] = n, {
					showAlpha: a
				} = e;
				switch (R.value) {
					case "hsv":
						ee((a ? pe : ze)([o, r, t, l]), "cursor");
						break;
					case "rgb":
						ee((a ? ve : Se)([...xe(o, r, t), l]), "cursor");
						break;
					case "hex":
						ee((a ? de : we)([...xe(o, r, t), l]), "cursor");
						break;
					case "hsl":
						ee((a ? ce : Ce)([...ye(o, r, t), l]), "cursor")
				}
			}

			function Q(e) {
				switch (R.value) {
					case "hsv":
						[F, I, D] = N.value, ee(pe([F, I, D, e]), "cursor");
						break;
					case "rgb":
						[H, E, _] = V.value, ee(ve([H, E, _, e]), "cursor");
						break;
					case "hex":
						[H, E, _] = V.value, ee(de([H, E, _, e]), "cursor");
						break;
					case "hsl":
						[F, I, A] = U.value, ee(ce([F, I, A, e]), "cursor")
				}
				q.value = e
			}

			function ee(o, n) {
				r = "cursor" === n ? o : null;
				const {
					nTriggerFormChange: l,
					nTriggerFormInput: a
				} = t, {
					onUpdateValue: i,
					"onUpdate:value": s
				} = e;
				i && De(i, o), s && De(s, o), l(), a(), y.value = o
			}

			function oe(e) {
				ee(e, "input"), W(ne)
			}

			function ne(o = !0) {
				const {
					value: n
				} = w;
				if (n) {
					const {
						nTriggerFormChange: r,
						nTriggerFormInput: l
					} = t, {
						onComplete: a
					} = e;
					a && a(n);
					const {
						value: i
					} = C, {
						value: s
					} = S;
					o && (i.splice(s + 1, i.length, n), S.value = s + 1), r(), l()
				}
			}

			function re() {
				const {
					value: e
				} = S;
				e - 1 < 0 || (ee(C.value[e - 1], "input"), ne(!1), S.value = e - 1)
			}

			function te() {
				const {
					value: e
				} = S;
				e < 0 || e + 1 >= C.value.length || (ee(C.value[e + 1], "input"), ne(!1), S.value = e + 1)
			}

			function le() {
				ee(null, "input"), f(!1)
			}

			function ae() {
				const {
					value: o
				} = w, {
					onConfirm: n
				} = e;
				n && n(o), f(!1)
			}
			const ie = x((() => S.value >= 1)),
				se = x((() => {
					const {
						value: e
					} = C;
					return e.length > 1 && S.value < e.length - 1
				}));
			s(b, (e => {
				e || (C.value = [w.value], S.value = 0)
			})), z((() => {
				if (r && r === w.value);
				else {
					const {
						value: e
					} = N;
					e && (G.value = e[0], q.value = e[3], Y.value = [e[1], e[2]])
				}
				r = null
			}));
			const ke = x((() => {
					const {
						value: e
					} = l, {
						common: {
							cubicBezierEaseInOut: o
						},
						self: {
							textColor: n,
							color: r,
							panelFontSize: t,
							boxShadow: a,
							border: i,
							borderRadius: s,
							dividerColor: d,
							[Je("height", e)]: c,
							[Je("fontSize", e)]: u
						}
					} = h.value;
					return {
						"--n-bezier": o,
						"--n-text-color": n,
						"--n-color": r,
						"--n-panel-font-size": t,
						"--n-font-size": u,
						"--n-box-shadow": a,
						"--n-border": i,
						"--n-border-radius": s,
						"--n-height": c,
						"--n-divider-color": d
					}
				})),
				$e = p ? Wo("color-picker", x((() => l.value[0])), ke, e) : void 0;
			return {
				mergedClsPrefix: c,
				namespace: u,
				selfRef: n,
				hsla: U,
				rgba: V,
				mergedShow: b,
				mergedDisabled: a,
				isMounted: T(),
				adjustedTo: Co(e),
				mergedValue: w,
				handleTriggerClick() {
					f(!0)
				},
				handleClickOutside(e) {
					var o;
					(null === (o = n.value) || void 0 === o ? void 0 : o.contains(L(e))) || f(!1)
				},
				renderPanel: function() {
					var n;
					const {
						value: r
					} = V, {
						value: t
					} = G, {
						internalActions: l,
						modes: a,
						actions: i
					} = e, {
						value: s
					} = h, {
						value: u
					} = c;
					return P("div", {
						class: [`${u}-color-picker-panel`, null == $e ? void 0 : $e.themeClass.value],
						onDragstart: e => {
							e.preventDefault()
						},
						style: p ? void 0 : ke.value
					}, P("div", {
						class: `${u}-color-picker-control`
					}, P(Ot, {
						clsPrefix: u,
						rgba: r,
						displayedHue: t,
						displayedSv: Y.value,
						onUpdateSV: X,
						onComplete: ne
					}), P("div", {
						class: `${u}-color-picker-preview`
					}, P("div", {
						class: `${u}-color-picker-preview__sliders`
					}, P(Pt, {
						clsPrefix: u,
						hue: t,
						onUpdateHue: Z,
						onComplete: ne
					}), e.showAlpha ? P(Bt, {
						clsPrefix: u,
						rgba: r,
						alpha: q.value,
						onUpdateAlpha: Q,
						onComplete: ne
					}) : null), e.showPreview ? P(jt, {
						clsPrefix: u,
						mode: R.value,
						color: V.value && we(V.value),
						onUpdateColor: e => ee(e, "input")
					}) : null), P(Ht, {
						clsPrefix: u,
						showAlpha: e.showAlpha,
						mode: R.value,
						modes: a,
						onUpdateMode: B,
						value: w.value,
						valueArr: K.value,
						onUpdateValue: oe
					}), (null === (n = e.swatches) || void 0 === n ? void 0 : n.length) && P(_t, {
						clsPrefix: u,
						mode: R.value,
						swatches: e.swatches,
						onUpdateColor: e => ee(e, "input")
					})), (null == i ? void 0 : i.length) ? P("div", {
						class: `${u}-color-picker-action`
					}, i.includes("confirm") && P(yt, {
						size: "small",
						onClick: ae,
						theme: s.peers.Button,
						themeOverrides: s.peerOverrides.Button
					}, {
						default: () => d.value.confirm
					}), i.includes("clear") && P(yt, {
						size: "small",
						onClick: le,
						disabled: !w.value,
						theme: s.peers.Button,
						themeOverrides: s.peerOverrides.Button
					}, {
						default: () => d.value.clear
					})) : null, o.action ? P("div", {
						class: `${u}-color-picker-action`
					}, {
						default: o.action
					}) : l ? P("div", {
						class: `${u}-color-picker-action`
					}, l.includes("undo") && P(yt, {
						size: "small",
						onClick: re,
						disabled: !ie.value,
						theme: s.peers.Button,
						themeOverrides: s.peerOverrides.Button
					}, {
						default: () => d.value.undo
					}), l.includes("redo") && P(yt, {
						size: "small",
						onClick: te,
						disabled: !se.value,
						theme: s.peers.Button,
						themeOverrides: s.peerOverrides.Button
					}, {
						default: () => d.value.redo
					})) : null)
				},
				cssVars: p ? void 0 : ke,
				themeClass: null == $e ? void 0 : $e.themeClass,
				onRender: null == $e ? void 0 : $e.onRender
			}
		},
		render() {
			const {
				$slots: e,
				mergedClsPrefix: o,
				onRender: n
			} = this;
			return null == n || n(), P("div", {
				class: [this.themeClass, `${o}-color-picker`],
				ref: "selfRef",
				style: this.cssVars
			}, P(ne, null, {
				default: () => [P(te, null, {
					default: () => P(Et, {
						clsPrefix: o,
						value: this.mergedValue,
						hsla: this.hsla,
						disabled: this.mergedDisabled,
						onClick: this.handleTriggerClick
					}, {
						label: e.label
					})
				}), P(G, {
					placement: this.placement,
					show: this.mergedShow,
					containerClass: this.namespace,
					teleportDisabled: this.adjustedTo === Co.tdkey,
					to: this.adjustedTo
				}, {
					default: () => P(B, {
						name: "fade-in-scale-up-transition",
						appear: this.isMounted
					}, {
						default: () => this.mergedShow ? Q(this.renderPanel(), [
							[q, this.handleClickOutside, void 0, {
								capture: !0
							}]
						]) : null
					})
				})]
			}))
		}
	}),
	Ut = {
		paddingSmall: "12px 16px 12px",
		paddingMedium: "19px 24px 20px",
		paddingLarge: "23px 32px 24px",
		paddingHuge: "27px 40px 28px",
		titleFontSizeSmall: "16px",
		titleFontSizeMedium: "18px",
		titleFontSizeLarge: "18px",
		titleFontSizeHuge: "18px",
		closeIconSize: "18px",
		closeSize: "22px"
	},
	Kt = {
		name: "Card",
		common: zn,
		self: e => {
			const {
				primaryColor: o,
				borderRadius: n,
				lineHeight: r,
				fontSize: t,
				cardColor: l,
				textColor2: a,
				textColor1: i,
				dividerColor: s,
				fontWeightStrong: d,
				closeIconColor: c,
				closeIconColorHover: u,
				closeIconColorPressed: p,
				closeColorHover: h,
				closeColorPressed: v,
				modalColor: b,
				boxShadow1: f,
				popoverColor: g,
				actionColor: m
			} = e;
			return Object.assign(Object.assign({}, Ut), {
				lineHeight: r,
				color: l,
				colorModal: b,
				colorPopover: g,
				colorTarget: o,
				colorEmbedded: m,
				colorEmbeddedModal: m,
				colorEmbeddedPopover: m,
				textColor: a,
				titleTextColor: i,
				borderColor: s,
				actionColor: m,
				titleFontWeight: d,
				closeColorHover: h,
				closeColorPressed: v,
				closeBorderRadius: n,
				closeIconColor: c,
				closeIconColorHover: u,
				closeIconColorPressed: p,
				fontSizeSmall: t,
				fontSizeMedium: t,
				fontSizeLarge: t,
				fontSizeHuge: t,
				boxShadow: f,
				borderRadius: n
			})
		}
	},
	Gt = ro([lo("card", "\n font-size: var(--n-font-size);\n line-height: var(--n-line-height);\n display: flex;\n flex-direction: column;\n width: 100%;\n box-sizing: border-box;\n position: relative;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n color: var(--n-text-color);\n word-break: break-word;\n transition: \n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [(qt = {
		background: "var(--n-color-modal)"
	}, ro((({
		props: {
			bPrefix: e
		}
	}) => `&${e||eo}modal`), qt)), io("hoverable", [ro("&:hover", "box-shadow: var(--n-box-shadow);")]), io("content-segmented", [ro(">", [ao("content", {
		paddingTop: "var(--n-padding-bottom)"
	})])]), io("content-soft-segmented", [ro(">", [ao("content", "\n margin: 0 var(--n-padding-left);\n padding: var(--n-padding-bottom) 0;\n ")])]), io("footer-segmented", [ro(">", [ao("footer", {
		paddingTop: "var(--n-padding-bottom)"
	})])]), io("footer-soft-segmented", [ro(">", [ao("footer", "\n padding: var(--n-padding-bottom) 0;\n margin: 0 var(--n-padding-left);\n ")])]), ro(">", [lo("card-header", "\n box-sizing: border-box;\n display: flex;\n align-items: center;\n font-size: var(--n-title-font-size);\n padding:\n var(--n-padding-top)\n var(--n-padding-left)\n var(--n-padding-bottom)\n var(--n-padding-left);\n ", [ao("main", "\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n flex: 1;\n min-width: 0;\n color: var(--n-title-text-color);\n "), ao("extra", "\n display: flex;\n align-items: center;\n font-size: var(--n-font-size);\n font-weight: 400;\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n "), ao("close", "\n margin: 0 0 0 8px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ")]), ao("action", "\n box-sizing: border-box;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n background-clip: padding-box;\n background-color: var(--n-action-color);\n "), ao("content", "flex: 1; min-width: 0;"), ao("content, footer", "\n box-sizing: border-box;\n padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);\n font-size: var(--n-font-size);\n ", [ro("&:first-child", {
		paddingTop: "var(--n-padding-bottom)"
	})]), ao("action", "\n background-color: var(--n-action-color);\n padding: var(--n-padding-bottom) var(--n-padding-left);\n border-bottom-left-radius: var(--n-border-radius);\n border-bottom-right-radius: var(--n-border-radius);\n ")]), lo("card-cover", "\n overflow: hidden;\n width: 100%;\n border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;\n ", [ro("img", "\n display: block;\n width: 100%;\n ")]), io("bordered", "\n border: 1px solid var(--n-border-color);\n ", [ro("&:target", "border-color: var(--n-color-target);")]), io("action-segmented", [ro(">", [ao("action", [ro("&:not(:first-child)", {
		borderTop: "1px solid var(--n-border-color)"
	})])])]), io("content-segmented, content-soft-segmented", [ro(">", [ao("content", {
		transition: "border-color 0.3s var(--n-bezier)"
	}, [ro("&:not(:first-child)", {
		borderTop: "1px solid var(--n-border-color)"
	})])])]), io("footer-segmented, footer-soft-segmented", [ro(">", [ao("footer", {
		transition: "border-color 0.3s var(--n-bezier)"
	}, [ro("&:not(:first-child)", {
		borderTop: "1px solid var(--n-border-color)"
	})])])]), io("embedded", "\n background-color: var(--n-color-embedded);\n ")]), co(lo("card", "\n background: var(--n-color-modal);\n ", [io("embedded", "\n background-color: var(--n-color-embedded-modal);\n ")])), uo(lo("card", "\n background: var(--n-color-popover);\n ", [io("embedded", "\n background-color: var(--n-color-embedded-popover);\n ")]))]);
var qt;
const Yt = {
		title: String,
		contentStyle: [Object, String],
		headerStyle: [Object, String],
		headerExtraStyle: [Object, String],
		footerStyle: [Object, String],
		embedded: Boolean,
		segmented: {
			type: [Boolean, Object],
			default: !1
		},
		size: {
			type: String,
			default: "medium"
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		closable: Boolean,
		hoverable: Boolean,
		role: String,
		onClose: [Function, Array],
		tag: {
			type: String,
			default: "div"
		}
	},
	Xt = Object.assign(Object.assign({}, Ao.props), Yt),
	Zt = t({
		name: "Card",
		props: Xt,
		setup(e) {
			const {
				inlineThemeDisabled: o,
				mergedClsPrefixRef: n,
				mergedRtlRef: r
			} = Ho(e), t = Ao("Card", "-card", Gt, Kt, e, n), l = Vo("Card", r, n), a = x((() => {
				const {
					size: o
				} = e, {
					self: {
						color: n,
						colorModal: r,
						colorTarget: l,
						textColor: a,
						titleTextColor: i,
						titleFontWeight: s,
						borderColor: d,
						actionColor: c,
						borderRadius: u,
						lineHeight: p,
						closeIconColor: h,
						closeIconColorHover: v,
						closeIconColorPressed: b,
						closeColorHover: f,
						closeColorPressed: g,
						closeBorderRadius: m,
						closeIconSize: x,
						closeSize: y,
						boxShadow: w,
						colorPopover: C,
						colorEmbedded: S,
						colorEmbeddedModal: z,
						colorEmbeddedPopover: k,
						[Je("padding", o)]: $,
						[Je("fontSize", o)]: P,
						[Je("titleFontSize", o)]: R
					},
					common: {
						cubicBezierEaseInOut: T
					}
				} = t.value, {
					top: B,
					left: F,
					bottom: M
				} = U($);
				return {
					"--n-bezier": T,
					"--n-border-radius": u,
					"--n-color": n,
					"--n-color-modal": r,
					"--n-color-popover": C,
					"--n-color-embedded": S,
					"--n-color-embedded-modal": z,
					"--n-color-embedded-popover": k,
					"--n-color-target": l,
					"--n-text-color": a,
					"--n-line-height": p,
					"--n-action-color": c,
					"--n-title-text-color": i,
					"--n-title-font-weight": s,
					"--n-close-icon-color": h,
					"--n-close-icon-color-hover": v,
					"--n-close-icon-color-pressed": b,
					"--n-close-color-hover": f,
					"--n-close-color-pressed": g,
					"--n-border-color": d,
					"--n-box-shadow": w,
					"--n-padding-top": B,
					"--n-padding-bottom": M,
					"--n-padding-left": F,
					"--n-font-size": P,
					"--n-title-font-size": R,
					"--n-close-size": y,
					"--n-close-icon-size": x,
					"--n-close-border-radius": m
				}
			})), i = o ? Wo("card", x((() => e.size[0])), a, e) : void 0;
			return {
				rtlEnabled: l,
				mergedClsPrefix: n,
				mergedTheme: t,
				handleCloseClick: () => {
					const {
						onClose: o
					} = e;
					o && De(o)
				},
				cssVars: o ? void 0 : a,
				themeClass: null == i ? void 0 : i.themeClass,
				onRender: null == i ? void 0 : i.onRender
			}
		},
		render() {
			const {
				segmented: e,
				bordered: o,
				hoverable: n,
				mergedClsPrefix: r,
				rtlEnabled: t,
				onRender: l,
				embedded: a,
				tag: i,
				$slots: s
			} = this;
			return null == l || l(), P(i, {
				class: [`${r}-card`, this.themeClass, a && `${r}-card--embedded`, {
					[`${r}-card--rtl`]: t,
					[`${r}-card--content${"boolean"!=typeof e&&"soft"===e.content?"-soft":""}-segmented`]: !0 === e || !1 !== e && e.content,
					[`${r}-card--footer${"boolean"!=typeof e&&"soft"===e.footer?"-soft":""}-segmented`]: !0 === e || !1 !== e && e.footer,
					[`${r}-card--action-segmented`]: !0 === e || !1 !== e && e.action,
					[`${r}-card--bordered`]: o,
					[`${r}-card--hoverable`]: n
				}],
				style: this.cssVars,
				role: this.role
			}, Ue(s.cover, (e => e && P("div", {
				class: `${r}-card-cover`,
				role: "none"
			}, e))), Ue(s.header, (e => e || this.title || this.closable ? P("div", {
				class: `${r}-card-header`,
				style: this.headerStyle
			}, P("div", {
				class: `${r}-card-header__main`,
				role: "heading"
			}, e || this.title), Ue(s["header-extra"], (e => e && P("div", {
				class: `${r}-card-header__extra`,
				style: this.headerExtraStyle
			}, e))), this.closable ? P(an, {
				clsPrefix: r,
				class: `${r}-card-header__close`,
				onClick: this.handleCloseClick,
				absolute: !0
			}) : null) : null)), Ue(s.default, (e => e && P("div", {
				class: `${r}-card__content`,
				style: this.contentStyle,
				role: "none"
			}, e))), Ue(s.footer, (e => e && [P("div", {
				class: `${r}-card__footer`,
				style: this.footerStyle,
				role: "none"
			}, e)])), Ue(s.action, (e => e && P("div", {
				class: `${r}-card__action`,
				role: "none"
			}, e))))
		}
	}),
	Qt = {
		abstract: Boolean,
		bordered: {
			type: Boolean,
			default: void 0
		},
		clsPrefix: String,
		locale: Object,
		dateLocale: Object,
		namespace: String,
		rtl: Array,
		tag: {
			type: String,
			default: "div"
		},
		hljs: Object,
		katex: Object,
		theme: Object,
		themeOverrides: Object,
		componentOptions: Object,
		icons: Object,
		breakpoints: Object,
		preflightStyleDisabled: Boolean,
		inlineThemeDisabled: {
			type: Boolean,
			default: void 0
		},
		as: {
			type: String,
			validator: () => (Ee("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
			default: void 0
		}
	},
	Jt = t({
		name: "ConfigProvider",
		alias: ["App"],
		props: Qt,
		setup(e) {
			const o = d(Oo, null),
				n = x((() => {
					const {
						theme: n
					} = e;
					if (null === n) return;
					const r = null == o ? void 0 : o.mergedThemeRef.value;
					return void 0 === n ? r : void 0 === r ? n : Object.assign({}, r, n)
				})),
				r = x((() => {
					const {
						themeOverrides: n
					} = e;
					if (null !== n) {
						if (void 0 === n) return null == o ? void 0 : o.mergedThemeOverridesRef.value; {
							const e = null == o ? void 0 : o.mergedThemeOverridesRef.value;
							return void 0 === e ? n : C({}, e, n)
						}
					}
				})),
				t = v((() => {
					const {
						namespace: n
					} = e;
					return void 0 === n ? null == o ? void 0 : o.mergedNamespaceRef.value : n
				})),
				l = v((() => {
					const {
						bordered: n
					} = e;
					return void 0 === n ? null == o ? void 0 : o.mergedBorderedRef.value : n
				})),
				a = x((() => {
					const {
						icons: n
					} = e;
					return void 0 === n ? null == o ? void 0 : o.mergedIconsRef.value : n
				})),
				i = x((() => {
					const {
						componentOptions: n
					} = e;
					return void 0 !== n ? n : null == o ? void 0 : o.mergedComponentPropsRef.value
				})),
				s = x((() => {
					const {
						clsPrefix: n
					} = e;
					return void 0 !== n ? n : null == o ? void 0 : o.mergedClsPrefixRef.value
				})),
				c = x((() => {
					var n;
					const {
						rtl: r
					} = e;
					if (void 0 === r) return null == o ? void 0 : o.mergedRtlRef.value;
					const t = {};
					for (const e of r) t[e.name] = ke(e), null === (n = e.peers) || void 0 === n || n.forEach((e => {
						e.name in t || (t[e.name] = ke(e))
					}));
					return t
				})),
				u = x((() => e.breakpoints || (null == o ? void 0 : o.mergedBreakpointsRef.value))),
				p = e.inlineThemeDisabled || (null == o ? void 0 : o.inlineThemeDisabled),
				h = e.preflightStyleDisabled || (null == o ? void 0 : o.preflightStyleDisabled),
				b = x((() => {
					const {
						value: e
					} = n, {
						value: o
					} = r, t = o && 0 !== Object.keys(o).length, l = null == e ? void 0 : e.name;
					return l ? t ? `${l}-${k(JSON.stringify(r.value))}` : l : t ? k(JSON.stringify(r.value)) : ""
				}));
			return m(Oo, {
				mergedThemeHashRef: b,
				mergedBreakpointsRef: u,
				mergedRtlRef: c,
				mergedIconsRef: a,
				mergedComponentPropsRef: i,
				mergedBorderedRef: l,
				mergedNamespaceRef: t,
				mergedClsPrefixRef: s,
				mergedLocaleRef: x((() => {
					const {
						locale: n
					} = e;
					if (null !== n) return void 0 === n ? null == o ? void 0 : o.mergedLocaleRef.value : n
				})),
				mergedDateLocaleRef: x((() => {
					const {
						dateLocale: n
					} = e;
					if (null !== n) return void 0 === n ? null == o ? void 0 : o.mergedDateLocaleRef.value : n
				})),
				mergedHljsRef: x((() => {
					const {
						hljs: n
					} = e;
					return void 0 === n ? null == o ? void 0 : o.mergedHljsRef.value : n
				})),
				mergedKatexRef: x((() => {
					const {
						katex: n
					} = e;
					return void 0 === n ? null == o ? void 0 : o.mergedKatexRef.value : n
				})),
				mergedThemeRef: n,
				mergedThemeOverridesRef: r,
				inlineThemeDisabled: p || !1,
				preflightStyleDisabled: h || !1
			}), {
				mergedClsPrefix: s,
				mergedBordered: l,
				mergedNamespace: t,
				mergedTheme: n,
				mergedThemeOverrides: r
			}
		},
		render() {
			var e, o, n, r;
			return this.abstract ? null === (r = (n = this.$slots).default) || void 0 === r ? void 0 : r.call(n) : P(this.as || this.tag, {
				class: `${this.mergedClsPrefix||Do}-config-provider`
			}, null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e))
		}
	}),
	el = {
		name: "Select",
		common: zn,
		peers: {
			InternalSelection: wr,
			InternalSelectMenu: En
		},
		self: function(e) {
			const {
				boxShadow2: o
			} = e;
			return {
				menuBoxShadow: o
			}
		}
	},
	ol = ro([lo("select", "\n z-index: auto;\n outline: none;\n width: 100%;\n position: relative;\n "), lo("select-menu", "\n margin: 4px 0;\n box-shadow: var(--n-menu-box-shadow);\n ", [Wn({
		originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
	})])]),
	nl = Object.assign(Object.assign({}, Ao.props), {
		to: Co.propTo,
		bordered: {
			type: Boolean,
			default: void 0
		},
		clearable: Boolean,
		clearFilterAfterSelect: {
			type: Boolean,
			default: !0
		},
		options: {
			type: Array,
			default: () => []
		},
		defaultValue: {
			type: [String, Number, Array],
			default: null
		},
		value: [String, Number, Array],
		placeholder: String,
		menuProps: Object,
		multiple: Boolean,
		size: String,
		filterable: Boolean,
		disabled: {
			type: Boolean,
			default: void 0
		},
		remote: Boolean,
		loading: Boolean,
		filter: Function,
		placement: {
			type: String,
			default: "bottom-start"
		},
		widthMode: {
			type: String,
			default: "trigger"
		},
		tag: Boolean,
		onCreate: Function,
		fallbackOption: {
			type: [Function, Boolean],
			default: void 0
		},
		show: {
			type: Boolean,
			default: void 0
		},
		showArrow: {
			type: Boolean,
			default: !0
		},
		maxTagCount: [Number, String],
		consistentMenuWidth: {
			type: Boolean,
			default: !0
		},
		virtualScroll: {
			type: Boolean,
			default: !0
		},
		labelField: {
			type: String,
			default: "label"
		},
		valueField: {
			type: String,
			default: "value"
		},
		childrenField: {
			type: String,
			default: "children"
		},
		renderLabel: Function,
		renderOption: Function,
		renderTag: Function,
		"onUpdate:value": [Function, Array],
		inputProps: Object,
		nodeProps: Function,
		ignoreComposition: {
			type: Boolean,
			default: !0
		},
		showOnFocus: Boolean,
		onUpdateValue: [Function, Array],
		onBlur: [Function, Array],
		onClear: [Function, Array],
		onFocus: [Function, Array],
		onScroll: [Function, Array],
		onSearch: [Function, Array],
		onUpdateShow: [Function, Array],
		"onUpdate:show": [Function, Array],
		displayDirective: {
			type: String,
			default: "show"
		},
		resetMenuOnOptionsChange: {
			type: Boolean,
			default: !0
		},
		status: String,
		showCheckmark: {
			type: Boolean,
			default: !0
		},
		onChange: [Function, Array],
		items: Array
	}),
	rl = t({
		name: "Select",
		props: nl,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				mergedBorderedRef: n,
				namespaceRef: r,
				inlineThemeDisabled: t
			} = Ho(e), l = Ao("Select", "-select", ol, el, e, o), a = i(e.defaultValue), d = M(e, "value"), c = J(d, a), u = i(!1), p = i(""), h = x((() => {
				const {
					valueField: o,
					childrenField: n
				} = e, r = function(e, o) {
					return {
						getIsGroup: Br,
						getIgnored: Fr,
						getKey: o => Br(o) ? o.name || o.key || "key-required" : o[e],
						getChildren: e => e[o]
					}
				}(o, n);
				return $e(O.value, r)
			})), v = x((() => function(e, o, n) {
				const r = new Map;
				return e.forEach((e => {
					Br(e) ? e[n].forEach((e => {
						r.set(e[o], e)
					})) : r.set(e[o], e)
				})), r
			}(B.value, e.valueField, e.childrenField))), b = i(!1), f = J(M(e, "show"), b), g = i(null), m = i(null), y = i(null), {
				localeRef: w
			} = jo("Select"), C = x((() => {
				var o;
				return null !== (o = e.placeholder) && void 0 !== o ? o : w.value.placeholder
			})), S = ee(e, ["items", "options"]), z = [], k = i([]), $ = i([]), P = i(new Map), R = x((() => {
				const {
					fallbackOption: o
				} = e;
				if (void 0 === o) {
					const {
						labelField: o,
						valueField: n
					} = e;
					return e => ({
						[o]: String(e),
						[n]: e
					})
				}
				return !1 !== o && (e => Object.assign(o(e), {
					value: e
				}))
			})), B = x((() => $.value.concat(k.value).concat(S.value))), F = x((() => {
				const {
					filter: o
				} = e;
				if (o) return o;
				const {
					labelField: n,
					valueField: r
				} = e;
				return (e, o) => {
					if (!o) return !1;
					const t = o[n];
					if ("string" == typeof t) return Mr(e, t);
					const l = o[r];
					return "string" == typeof l ? Mr(e, l) : "number" == typeof l && Mr(e, String(l))
				}
			})), O = x((() => {
				if (e.remote) return S.value; {
					const {
						value: o
					} = B, {
						value: n
					} = p;
					return n.length && e.filterable ? function(e, o, n, r) {
						return o ? function e(t) {
							if (!Array.isArray(t)) return [];
							const l = [];
							for (const a of t)
								if (Br(a)) {
									const o = e(a[r]);
									o.length && l.push(Object.assign({}, a, {
										[r]: o
									}))
								} else {
									if (Fr(a)) continue;
									o(n, a) && l.push(a)
								} return l
						}(e) : e
					}(o, F.value, n, e.childrenField) : o
				}
			}));

			function I(o) {
				const n = e.remote,
					{
						value: r
					} = P,
					{
						value: t
					} = v,
					{
						value: l
					} = R,
					a = [];
				return o.forEach((e => {
					if (t.has(e)) a.push(t.get(e));
					else if (n && r.has(e)) a.push(r.get(e));
					else if (l) {
						const o = l(e);
						o && a.push(o)
					}
				})), a
			}
			const A = x((() => {
					if (e.multiple) {
						const {
							value: e
						} = c;
						return Array.isArray(e) ? I(e) : []
					}
					return null
				})),
				D = x((() => {
					const {
						value: o
					} = c;
					return e.multiple || Array.isArray(o) || null === o ? null : I([o])[0] || null
				})),
				H = Po(e),
				{
					mergedSizeRef: E,
					mergedDisabledRef: _,
					mergedStatusRef: N
				} = H;

			function W(o, n) {
				const {
					onChange: r,
					"onUpdate:value": t,
					onUpdateValue: l
				} = e, {
					nTriggerFormChange: i,
					nTriggerFormInput: s
				} = H;
				r && De(r, o, n), l && De(l, o, n), t && De(t, o, n), a.value = o, i(), s()
			}

			function V(o) {
				const {
					onBlur: n
				} = e, {
					nTriggerFormBlur: r
				} = H;
				n && De(n, o), r()
			}

			function U() {
				var o;
				const {
					remote: n,
					multiple: r
				} = e;
				if (n) {
					const {
						value: n
					} = P;
					if (r) {
						const {
							valueField: r
						} = e;
						null === (o = A.value) || void 0 === o || o.forEach((e => {
							n.set(e[r], e)
						}))
					} else {
						const o = D.value;
						o && n.set(o[e.valueField], o)
					}
				}
			}

			function K(o) {
				const {
					onUpdateShow: n,
					"onUpdate:show": r
				} = e;
				n && De(n, o), r && De(r, o), b.value = o
			}

			function G() {
				_.value || (K(!0), b.value = !0, e.filterable && te())
			}

			function q() {
				K(!1)
			}

			function Y() {
				p.value = "", $.value = z
			}
			const X = i(!1);

			function Z(e) {
				Q(e.rawNode)
			}

			function Q(o) {
				if (_.value) return;
				const {
					tag: n,
					remote: r,
					clearFilterAfterSelect: t,
					valueField: l
				} = e;
				if (n && !r) {
					const {
						value: e
					} = $, o = e[0] || null;
					if (o) {
						const e = k.value;
						e.length ? e.push(o) : k.value = [o], $.value = z
					}
				}
				if (r && P.value.set(o[l], o), e.multiple) {
					const a = function(o) {
							if (!Array.isArray(o)) return [];
							if (R.value) return Array.from(o); {
								const {
									remote: n
								} = e, {
									value: r
								} = v;
								if (n) {
									const {
										value: e
									} = P;
									return o.filter((o => r.has(o) || e.has(o)))
								}
								return o.filter((e => r.has(e)))
							}
						}(c.value),
						i = a.findIndex((e => e === o[l]));
					if (~i) {
						if (a.splice(i, 1), n && !r) {
							const e = oe(o[l]);
							~e && (k.value.splice(e, 1), t && (p.value = ""))
						}
					} else a.push(o[l]), t && (p.value = "");
					W(a, I(a))
				} else {
					if (n && !r) {
						const e = oe(o[l]);
						k.value = ~e ? [k.value[e]] : z
					}
					re(), q(), W(o[l], o)
				}
			}

			function oe(o) {
				return k.value.findIndex((n => n[e.valueField] === o))
			}

			function ne(o) {
				var n, r, t, l, a, i;
				switch (o.key) {
					case " ":
						if (e.filterable) break;
						o.preventDefault();
					case "Enter":
						if (!(null === (n = g.value) || void 0 === n ? void 0 : n.isComposing))
							if (f.value) {
								const o = null === (r = y.value) || void 0 === r ? void 0 : r.getPendingTmNode();
								o ? Z(o) : e.filterable || (q(), re())
							} else if (G(), e.tag && X.value) {
							const o = $.value[0];
							if (o) {
								const n = o[e.valueField],
									{
										value: r
									} = c;
								e.multiple && Array.isArray(r) && r.some((e => e === n)) || Q(o)
							}
						}
						o.preventDefault();
						break;
					case "ArrowUp":
						if (o.preventDefault(), e.loading) return;
						f.value && (null === (t = y.value) || void 0 === t || t.prev());
						break;
					case "ArrowDown":
						if (o.preventDefault(), e.loading) return;
						f.value ? null === (l = y.value) || void 0 === l || l.next() : G();
						break;
					case "Escape":
						f.value && (i = o, bo.add(i), q()), null === (a = g.value) || void 0 === a || a.focus()
				}
			}

			function re() {
				var e;
				null === (e = g.value) || void 0 === e || e.focus()
			}

			function te() {
				var e;
				null === (e = g.value) || void 0 === e || e.focusInput()
			}
			U(), s(M(e, "options"), U);
			const le = {
					focus: () => {
						var e;
						null === (e = g.value) || void 0 === e || e.focus()
					},
					blur: () => {
						var e;
						null === (e = g.value) || void 0 === e || e.blur()
					}
				},
				ae = x((() => {
					const {
						self: {
							menuBoxShadow: e
						}
					} = l.value;
					return {
						"--n-menu-box-shadow": e
					}
				})),
				ie = t ? Wo("select", void 0, ae, e) : void 0;
			return Object.assign(Object.assign({}, le), {
				mergedStatus: N,
				mergedClsPrefix: o,
				mergedBordered: n,
				namespace: r,
				treeMate: h,
				isMounted: T(),
				triggerRef: g,
				menuRef: y,
				pattern: p,
				uncontrolledShow: b,
				mergedShow: f,
				adjustedTo: Co(e),
				uncontrolledValue: a,
				mergedValue: c,
				followerRef: m,
				localizedPlaceholder: C,
				selectedOption: D,
				selectedOptions: A,
				mergedSize: E,
				mergedDisabled: _,
				focused: u,
				activeWithoutMenuOpen: X,
				inlineThemeDisabled: t,
				onTriggerInputFocus: function() {
					e.filterable && (X.value = !0)
				},
				onTriggerInputBlur: function() {
					e.filterable && (X.value = !1, f.value || Y())
				},
				handleTriggerOrMenuResize: function() {
					var e;
					f.value && (null === (e = m.value) || void 0 === e || e.syncPosition())
				},
				handleMenuFocus: function(e) {
					u.value = !0
				},
				handleMenuBlur: function(e) {
					var o;
					(null === (o = g.value) || void 0 === o ? void 0 : o.$el.contains(e.relatedTarget)) || (u.value = !1, V(e), q())
				},
				handleMenuTabOut: function() {
					var e;
					null === (e = g.value) || void 0 === e || e.focus(), q()
				},
				handleTriggerClick: function() {
					_.value || (f.value ? e.filterable ? te() : q() : G())
				},
				handleToggle: Z,
				handleDeleteOption: Q,
				handlePatternInput: function(o) {
					f.value || G();
					const {
						value: n
					} = o.target;
					p.value = n;
					const {
						tag: r,
						remote: t
					} = e;
					if (function(o) {
							const {
								onSearch: n
							} = e;
							n && De(n, o)
						}(n), r && !t) {
						if (!n) return void($.value = z);
						const {
							onCreate: o
						} = e, r = o ? o(n) : {
							[e.labelField]: n,
							[e.valueField]: n
						}, {
							valueField: t
						} = e;
						S.value.some((e => e[t] === r[t])) || k.value.some((e => e[t] === r[t])) ? $.value = z : $.value = [r]
					}
				},
				handleClear: function(o) {
					o.stopPropagation();
					const {
						multiple: n
					} = e;
					!n && e.filterable && q(),
						function() {
							const {
								onClear: o
							} = e;
							o && De(o)
						}(), n ? W([], []) : W(null, null)
				},
				handleTriggerBlur: function(e) {
					var o, n;
					(null === (n = null === (o = y.value) || void 0 === o ? void 0 : o.selfRef) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) || (u.value = !1, V(e), q())
				},
				handleTriggerFocus: function(o) {
					! function(o) {
						const {
							onFocus: n,
							showOnFocus: r
						} = e, {
							nTriggerFormFocus: t
						} = H;
						n && De(n, o), t(), r && G()
					}(o), u.value = !0
				},
				handleKeydown: ne,
				handleMenuAfterLeave: Y,
				handleMenuClickOutside: function(e) {
					var o;
					f.value && ((null === (o = g.value) || void 0 === o ? void 0 : o.$el.contains(L(e))) || q())
				},
				handleMenuScroll: function(o) {
					! function(o) {
						const {
							onScroll: n
						} = e;
						n && De(n, o)
					}(o)
				},
				handleMenuKeydown: ne,
				handleMenuMousedown: function(e) {
					j(e, "action") || j(e, "empty") || e.preventDefault()
				},
				mergedTheme: l,
				cssVars: t ? void 0 : ae,
				themeClass: null == ie ? void 0 : ie.themeClass,
				onRender: null == ie ? void 0 : ie.onRender
			})
		},
		render() {
			return P("div", {
				class: `${this.mergedClsPrefix}-select`
			}, P(ne, null, {
				default: () => [P(te, null, {
					default: () => P(Sr, {
						ref: "triggerRef",
						inlineThemeDisabled: this.inlineThemeDisabled,
						status: this.mergedStatus,
						inputProps: this.inputProps,
						clsPrefix: this.mergedClsPrefix,
						showArrow: this.showArrow,
						maxTagCount: this.maxTagCount,
						bordered: this.mergedBordered,
						active: this.activeWithoutMenuOpen || this.mergedShow,
						pattern: this.pattern,
						placeholder: this.localizedPlaceholder,
						selectedOption: this.selectedOption,
						selectedOptions: this.selectedOptions,
						multiple: this.multiple,
						renderTag: this.renderTag,
						renderLabel: this.renderLabel,
						filterable: this.filterable,
						clearable: this.clearable,
						disabled: this.mergedDisabled,
						size: this.mergedSize,
						theme: this.mergedTheme.peers.InternalSelection,
						labelField: this.labelField,
						valueField: this.valueField,
						themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
						loading: this.loading,
						focused: this.focused,
						onClick: this.handleTriggerClick,
						onDeleteOption: this.handleDeleteOption,
						onPatternInput: this.handlePatternInput,
						onClear: this.handleClear,
						onBlur: this.handleTriggerBlur,
						onFocus: this.handleTriggerFocus,
						onKeydown: this.handleKeydown,
						onPatternBlur: this.onTriggerInputBlur,
						onPatternFocus: this.onTriggerInputFocus,
						onResize: this.handleTriggerOrMenuResize,
						ignoreComposition: this.ignoreComposition
					}, {
						arrow: () => {
							var e, o;
							return [null === (o = (e = this.$slots).arrow) || void 0 === o ? void 0 : o.call(e)]
						}
					})
				}), P(G, {
					ref: "followerRef",
					show: this.mergedShow,
					to: this.adjustedTo,
					teleportDisabled: this.adjustedTo === Co.tdkey,
					containerClass: this.namespace,
					width: this.consistentMenuWidth ? "target" : void 0,
					minWidth: "target",
					placement: this.placement
				}, {
					default: () => P(B, {
						name: "fade-in-scale-up-transition",
						appear: this.isMounted,
						onAfterLeave: this.handleMenuAfterLeave
					}, {
						default: () => {
							var e, o, n;
							return this.mergedShow || "show" === this.displayDirective ? (null === (e = this.onRender) || void 0 === e || e.call(this), Q(P(Un, Object.assign({}, this.menuProps, {
								ref: "menuRef",
								onResize: this.handleTriggerOrMenuResize,
								inlineThemeDisabled: this.inlineThemeDisabled,
								virtualScroll: this.consistentMenuWidth && this.virtualScroll,
								class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, null === (o = this.menuProps) || void 0 === o ? void 0 : o.class],
								clsPrefix: this.mergedClsPrefix,
								focusable: !0,
								labelField: this.labelField,
								valueField: this.valueField,
								autoPending: !0,
								nodeProps: this.nodeProps,
								theme: this.mergedTheme.peers.InternalSelectMenu,
								themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
								treeMate: this.treeMate,
								multiple: this.multiple,
								size: "medium",
								renderOption: this.renderOption,
								renderLabel: this.renderLabel,
								value: this.mergedValue,
								style: [null === (n = this.menuProps) || void 0 === n ? void 0 : n.style, this.cssVars],
								onToggle: this.handleToggle,
								onScroll: this.handleMenuScroll,
								onFocus: this.handleMenuFocus,
								onBlur: this.handleMenuBlur,
								onKeydown: this.handleMenuKeydown,
								onTabOut: this.handleMenuTabOut,
								onMousedown: this.handleMenuMousedown,
								show: this.mergedShow,
								showCheckmark: this.showCheckmark,
								resetMenuOnOptionsChange: this.resetMenuOnOptionsChange
							}), {
								empty: () => {
									var e, o;
									return [null === (o = (e = this.$slots).empty) || void 0 === o ? void 0 : o.call(e)]
								},
								action: () => {
									var e, o;
									return [null === (o = (e = this.$slots).action) || void 0 === o ? void 0 : o.call(e)]
								}
							}), "show" === this.displayDirective ? [
								[X, this.mergedShow],
								[q, this.handleMenuClickOutside, void 0, {
									capture: !0
								}]
							] : [
								[q, this.handleMenuClickOutside, void 0, {
									capture: !0
								}]
							])) : null
						}
					})
				})]
			}))
		}
	}),
	tl = {
		padding: "4px 0",
		optionIconSizeSmall: "14px",
		optionIconSizeMedium: "16px",
		optionIconSizeLarge: "16px",
		optionIconSizeHuge: "18px",
		optionSuffixWidthSmall: "14px",
		optionSuffixWidthMedium: "14px",
		optionSuffixWidthLarge: "16px",
		optionSuffixWidthHuge: "16px",
		optionIconSuffixWidthSmall: "32px",
		optionIconSuffixWidthMedium: "32px",
		optionIconSuffixWidthLarge: "36px",
		optionIconSuffixWidthHuge: "36px",
		optionPrefixWidthSmall: "14px",
		optionPrefixWidthMedium: "14px",
		optionPrefixWidthLarge: "16px",
		optionPrefixWidthHuge: "16px",
		optionIconPrefixWidthSmall: "36px",
		optionIconPrefixWidthMedium: "36px",
		optionIconPrefixWidthLarge: "40px",
		optionIconPrefixWidthHuge: "40px"
	},
	ll = {
		name: "Dropdown",
		common: zn,
		peers: {
			Popover: Yn
		},
		self: e => {
			const {
				primaryColor: o,
				textColor2: n,
				dividerColor: r,
				hoverColor: t,
				popoverColor: l,
				invertedColor: a,
				borderRadius: i,
				fontSizeSmall: s,
				fontSizeMedium: d,
				fontSizeLarge: c,
				fontSizeHuge: u,
				heightSmall: p,
				heightMedium: h,
				heightLarge: v,
				heightHuge: b,
				textColor3: f,
				opacityDisabled: g
			} = e;
			return Object.assign(Object.assign({}, tl), {
				optionHeightSmall: p,
				optionHeightMedium: h,
				optionHeightLarge: v,
				optionHeightHuge: b,
				borderRadius: i,
				fontSizeSmall: s,
				fontSizeMedium: d,
				fontSizeLarge: c,
				fontSizeHuge: u,
				optionTextColor: n,
				optionTextColorHover: n,
				optionTextColorActive: o,
				optionTextColorChildActive: o,
				color: l,
				dividerColor: r,
				suffixColor: n,
				prefixColor: n,
				optionColorHover: t,
				optionColorActive: le(o, {
					alpha: .1
				}),
				groupHeaderTextColor: f,
				optionTextColorInverted: "#BBB",
				optionTextColorHoverInverted: "#FFF",
				optionTextColorActiveInverted: "#FFF",
				optionTextColorChildActiveInverted: "#FFF",
				colorInverted: a,
				dividerColorInverted: "#BBB",
				suffixColorInverted: "#BBB",
				prefixColorInverted: "#BBB",
				optionColorHoverInverted: o,
				optionColorActiveInverted: o,
				groupHeaderTextColorInverted: "#AAA",
				optionOpacityDisabled: g
			})
		}
	},
	al = t({
		name: "DropdownDivider",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			}
		},
		render() {
			return P("div", {
				class: `${this.clsPrefix}-dropdown-divider`
			})
		}
	}),
	il = {
		name: "Icon",
		common: zn,
		self: e => {
			const {
				textColorBase: o,
				opacity1: n,
				opacity2: r,
				opacity3: t,
				opacity4: l,
				opacity5: a
			} = e;
			return {
				color: o,
				opacity1Depth: n,
				opacity2Depth: r,
				opacity3Depth: t,
				opacity4Depth: l,
				opacity5Depth: a
			}
		}
	},
	sl = lo("icon", "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n", [io("color-transition", {
		transition: "color .3s var(--n-bezier)"
	}), io("depth", {
		color: "var(--n-color)"
	}, [ro("svg", {
		opacity: "var(--n-opacity)",
		transition: "opacity .3s var(--n-bezier)"
	})]), ro("svg", {
		height: "1em",
		width: "1em"
	})]),
	dl = Object.assign(Object.assign({}, Ao.props), {
		depth: [String, Number],
		size: [Number, String],
		color: String,
		component: Object
	}),
	cl = t({
		_n_icon__: !0,
		name: "Icon",
		inheritAttrs: !1,
		props: dl,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: n
			} = Ho(e), r = Ao("Icon", "-icon", sl, il, e, o), t = x((() => {
				const {
					depth: o
				} = e, {
					common: {
						cubicBezierEaseInOut: n
					},
					self: t
				} = r.value;
				if (void 0 !== o) {
					const {
						color: e,
						[`opacity${o}Depth`]: r
					} = t;
					return {
						"--n-bezier": n,
						"--n-color": e,
						"--n-opacity": r
					}
				}
				return {
					"--n-bezier": n,
					"--n-color": "",
					"--n-opacity": ""
				}
			})), l = n ? Wo("icon", x((() => `${e.depth||"d"}`)), t, e) : void 0;
			return {
				mergedClsPrefix: o,
				mergedStyle: x((() => {
					const {
						size: o,
						color: n
					} = e;
					return {
						fontSize: Ze(o),
						color: n
					}
				})),
				cssVars: n ? void 0 : t,
				themeClass: null == l ? void 0 : l.themeClass,
				onRender: null == l ? void 0 : l.onRender
			}
		},
		render() {
			var e;
			const {
				$parent: o,
				depth: n,
				mergedClsPrefix: r,
				component: t,
				onRender: l,
				themeClass: a
			} = this;
			return (null === (e = null == o ? void 0 : o.$options) || void 0 === e ? void 0 : e._n_icon__) && Ee("icon", "don't wrap `n-icon` inside `n-icon`"), null == l || l(), P("i", E(this.$attrs, {
				role: "img",
				class: [`${r}-icon`, a, {
					[`${r}-icon--depth`]: n,
					[`${r}-icon--color-transition`]: void 0 !== n
				}],
				style: [this.cssVars, this.mergedStyle]
			}), t ? P(t) : this.$slots)
		}
	}),
	ul = "n-dropdown-menu",
	pl = "n-dropdown",
	hl = "n-dropdown-option";

function vl(e, o) {
	return "submenu" === e.type || void 0 === e.type && void 0 !== e[o]
}

function bl(e) {
	return "divider" === e.type
}
const fl = t({
		name: "DropdownOption",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			},
			parentKey: {
				type: [String, Number],
				default: null
			},
			placement: {
				type: String,
				default: "right-start"
			},
			props: Object,
			scrollable: Boolean
		},
		setup(e) {
			const o = d(pl),
				{
					hoverKeyRef: n,
					keyboardKeyRef: r,
					lastToggledSubmenuKeyRef: t,
					pendingKeyPathRef: l,
					activeKeyPathRef: a,
					animatedRef: c,
					mergedShowRef: u,
					renderLabelRef: p,
					renderIconRef: h,
					labelFieldRef: b,
					childrenFieldRef: f,
					renderOptionRef: g,
					nodePropsRef: y,
					menuPropsRef: w
				} = o,
				C = d(hl, null),
				S = d(ul),
				z = d(yo),
				k = x((() => e.tmNode.rawNode)),
				$ = x((() => {
					const {
						value: o
					} = f;
					return vl(e.tmNode.rawNode, o)
				})),
				P = x((() => {
					const {
						disabled: o
					} = e.tmNode;
					return o
				})),
				R = function(e, o, n) {
					const r = i(e.value);
					let t = null;
					return s(e, (e => {
						null !== t && window.clearTimeout(t), !0 === e ? n && !n.value ? r.value = !0 : t = window.setTimeout((() => {
							r.value = !0
						}), 300) : r.value = !1
					})), r
				}(x((() => {
					if (!$.value) return !1;
					const {
						key: o,
						disabled: a
					} = e.tmNode;
					if (a) return !1;
					const {
						value: i
					} = n, {
						value: s
					} = r, {
						value: d
					} = t, {
						value: c
					} = l;
					return null !== i ? c.includes(o) : null !== s ? c.includes(o) && c[c.length - 1] !== o : null !== d && c.includes(o)
				})), 0, x((() => null === r.value && !c.value))),
				T = x((() => !!(null == C ? void 0 : C.enteringSubmenuRef.value))),
				B = i(!1);

			function F() {
				const {
					parentKey: o,
					tmNode: l
				} = e;
				l.disabled || u.value && (t.value = o, r.value = null, n.value = l.key)
			}
			return m(hl, {
				enteringSubmenuRef: B
			}), {
				labelField: b,
				renderLabel: p,
				renderIcon: h,
				siblingHasIcon: S.showIconRef,
				siblingHasSubmenu: S.hasSubmenuRef,
				menuProps: w,
				popoverBody: z,
				animated: c,
				mergedShowSubmenu: x((() => R.value && !T.value)),
				rawNode: k,
				hasSubmenu: $,
				pending: v((() => {
					const {
						value: o
					} = l, {
						key: n
					} = e.tmNode;
					return o.includes(n)
				})),
				childActive: v((() => {
					const {
						value: o
					} = a, {
						key: n
					} = e.tmNode, r = o.findIndex((e => n === e));
					return -1 !== r && r < o.length - 1
				})),
				active: v((() => {
					const {
						value: o
					} = a, {
						key: n
					} = e.tmNode, r = o.findIndex((e => n === e));
					return -1 !== r && r === o.length - 1
				})),
				mergedDisabled: P,
				renderOption: g,
				nodeProps: y,
				handleClick: function() {
					const {
						value: n
					} = $, {
						tmNode: r
					} = e;
					u.value && (n || r.disabled || (o.doSelect(r.key, r.rawNode), o.doUpdateShow(!1)))
				},
				handleMouseMove: function() {
					const {
						tmNode: o
					} = e;
					o.disabled || u.value && n.value !== o.key && F()
				},
				handleMouseEnter: F,
				handleMouseLeave: function(o) {
					if (e.tmNode.disabled) return;
					if (!u.value) return;
					const {
						relatedTarget: r
					} = o;
					!r || j({
						target: r
					}, "dropdownOption") || j({
						target: r
					}, "scrollbarRail") || (n.value = null)
				},
				handleSubmenuBeforeEnter: function() {
					B.value = !0
				},
				handleSubmenuAfterEnter: function() {
					B.value = !1
				}
			}
		},
		render() {
			var e, o;
			const {
				animated: n,
				rawNode: r,
				mergedShowSubmenu: t,
				clsPrefix: l,
				siblingHasIcon: a,
				siblingHasSubmenu: i,
				renderLabel: s,
				renderIcon: d,
				renderOption: c,
				nodeProps: u,
				props: p,
				scrollable: h
			} = this;
			let v = null;
			if (t) {
				const o = null === (e = this.menuProps) || void 0 === e ? void 0 : e.call(this, r, r.children);
				v = P(yl, Object.assign({}, o, {
					clsPrefix: l,
					scrollable: this.scrollable,
					tmNodes: this.tmNode.children,
					parentKey: this.tmNode.key
				}))
			}
			const b = {
					class: [`${l}-dropdown-option-body`, this.pending && `${l}-dropdown-option-body--pending`, this.active && `${l}-dropdown-option-body--active`, this.childActive && `${l}-dropdown-option-body--child-active`, this.mergedDisabled && `${l}-dropdown-option-body--disabled`],
					onMousemove: this.handleMouseMove,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onClick: this.handleClick
				},
				f = null == u ? void 0 : u(r),
				g = P("div", Object.assign({
					class: [`${l}-dropdown-option`, null == f ? void 0 : f.class],
					"data-dropdown-option": !0
				}, f), P("div", E(b, p), [P("div", {
					class: [`${l}-dropdown-option-body__prefix`, a && `${l}-dropdown-option-body__prefix--show-icon`]
				}, [d ? d(r) : He(r.icon)]), P("div", {
					"data-dropdown-option": !0,
					class: `${l}-dropdown-option-body__label`
				}, s ? s(r) : He(null !== (o = r[this.labelField]) && void 0 !== o ? o : r.title)), P("div", {
					"data-dropdown-option": !0,
					class: [`${l}-dropdown-option-body__suffix`, i && `${l}-dropdown-option-body__suffix--has-submenu`]
				}, this.hasSubmenu ? P(cl, null, {
					default: () => P(qo, null)
				}) : null)]), this.hasSubmenu ? P(ne, null, {
					default: () => [P(te, null, {
						default: () => P("div", {
							class: `${l}-dropdown-offset-container`
						}, P(G, {
							show: this.mergedShowSubmenu,
							placement: this.placement,
							to: h && this.popoverBody || void 0,
							teleportDisabled: !h
						}, {
							default: () => P("div", {
								class: `${l}-dropdown-menu-wrapper`
							}, n ? P(B, {
								onBeforeEnter: this.handleSubmenuBeforeEnter,
								onAfterEnter: this.handleSubmenuAfterEnter,
								name: "fade-in-scale-up-transition",
								appear: !0
							}, {
								default: () => v
							}) : v)
						}))
					})]
				}) : null);
			return c ? c({
				node: g,
				option: r
			}) : g
		}
	}),
	gl = t({
		name: "DropdownGroupHeader",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			}
		},
		setup() {
			const {
				showIconRef: e,
				hasSubmenuRef: o
			} = d(ul), {
				renderLabelRef: n,
				labelFieldRef: r,
				nodePropsRef: t,
				renderOptionRef: l
			} = d(pl);
			return {
				labelField: r,
				showIcon: e,
				hasSubmenu: o,
				renderLabel: n,
				nodeProps: t,
				renderOption: l
			}
		},
		render() {
			var e;
			const {
				clsPrefix: o,
				hasSubmenu: n,
				showIcon: r,
				nodeProps: t,
				renderLabel: l,
				renderOption: a
			} = this, {
				rawNode: i
			} = this.tmNode, s = P("div", Object.assign({
				class: `${o}-dropdown-option`
			}, null == t ? void 0 : t(i)), P("div", {
				class: `${o}-dropdown-option-body ${o}-dropdown-option-body--group`
			}, P("div", {
				"data-dropdown-option": !0,
				class: [`${o}-dropdown-option-body__prefix`, r && `${o}-dropdown-option-body__prefix--show-icon`]
			}, He(i.icon)), P("div", {
				class: `${o}-dropdown-option-body__label`,
				"data-dropdown-option": !0
			}, l ? l(i) : He(null !== (e = i.title) && void 0 !== e ? e : i[this.labelField])), P("div", {
				class: [`${o}-dropdown-option-body__suffix`, n && `${o}-dropdown-option-body__suffix--has-submenu`],
				"data-dropdown-option": !0
			})));
			return a ? a({
				node: s,
				option: i
			}) : s
		}
	}),
	ml = t({
		name: "NDropdownGroup",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			},
			parentKey: {
				type: [String, Number],
				default: null
			}
		},
		render() {
			const {
				tmNode: e,
				parentKey: n,
				clsPrefix: r
			} = this, {
				children: t
			} = e;
			return P(o, null, P(gl, {
				clsPrefix: r,
				tmNode: e,
				key: e.key
			}), null == t ? void 0 : t.map((e => {
				const {
					rawNode: o
				} = e;
				return !1 === o.show ? null : bl(o) ? P(al, {
					clsPrefix: r,
					key: e.key
				}) : e.isGroup ? (Ee("dropdown", "`group` node is not allowed to be put in `group` node."), null) : P(fl, {
					clsPrefix: r,
					tmNode: e,
					parentKey: n,
					key: e.key
				})
			})))
		}
	}),
	xl = t({
		name: "DropdownRenderOption",
		props: {
			tmNode: {
				type: Object,
				required: !0
			}
		},
		render() {
			const {
				rawNode: {
					render: e,
					props: o
				}
			} = this.tmNode;
			return P("div", o, [null == e ? void 0 : e()])
		}
	}),
	yl = t({
		name: "DropdownMenu",
		props: {
			scrollable: Boolean,
			showArrow: Boolean,
			arrowStyle: [String, Object],
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNodes: {
				type: Array,
				default: () => []
			},
			parentKey: {
				type: [String, Number],
				default: null
			}
		},
		setup(e) {
			const {
				renderIconRef: o,
				childrenFieldRef: n
			} = d(pl);
			m(ul, {
				showIconRef: x((() => {
					const n = o.value;
					return e.tmNodes.some((e => {
						var o;
						if (e.isGroup) return null === (o = e.children) || void 0 === o ? void 0 : o.some((({
							rawNode: e
						}) => n ? n(e) : e.icon));
						const {
							rawNode: r
						} = e;
						return n ? n(r) : r.icon
					}))
				})),
				hasSubmenuRef: x((() => {
					const {
						value: o
					} = n;
					return e.tmNodes.some((e => {
						var n;
						if (e.isGroup) return null === (n = e.children) || void 0 === n ? void 0 : n.some((({
							rawNode: e
						}) => vl(e, o)));
						const {
							rawNode: r
						} = e;
						return vl(r, o)
					}))
				}))
			});
			const r = i(null);
			return m(mo, null), m(xo, null), m(yo, r), {
				bodyRef: r
			}
		},
		render() {
			const {
				parentKey: e,
				clsPrefix: o,
				scrollable: n
			} = this, r = this.tmNodes.map((r => {
				const {
					rawNode: t
				} = r;
				return !1 === t.show ? null : function(e) {
					return "render" === e.type
				}(t) ? P(xl, {
					tmNode: r,
					key: r.key
				}) : bl(t) ? P(al, {
					clsPrefix: o,
					key: r.key
				}) : function(e) {
					return "group" === e.type
				}(t) ? P(ml, {
					clsPrefix: o,
					tmNode: r,
					parentKey: e,
					key: r.key
				}) : P(fl, {
					clsPrefix: o,
					tmNode: r,
					parentKey: e,
					key: r.key,
					props: t.props,
					scrollable: n
				})
			}));
			return P("div", {
				class: [`${o}-dropdown-menu`, n && `${o}-dropdown-menu--scrollable`],
				ref: "bodyRef"
			}, n ? P(Dn, {
				contentClass: `${o}-dropdown-menu__content`
			}, {
				default: () => r
			}) : r, this.showArrow ? nr({
				clsPrefix: o,
				arrowStyle: this.arrowStyle
			}) : null)
		}
	}),
	wl = lo("dropdown-menu", "\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n", [Wn(), lo("dropdown-option", "\n position: relative;\n ", [ro("a", "\n text-decoration: none;\n color: inherit;\n outline: none;\n ", [ro("&::before", '\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]), lo("dropdown-option-body", "\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ", [ro("&::before", '\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '), so("disabled", [io("pending", "\n color: var(--n-option-text-color-hover);\n ", [ao("prefix, suffix", "\n color: var(--n-option-text-color-hover);\n "), ro("&::before", "background-color: var(--n-option-color-hover);")]), io("active", "\n color: var(--n-option-text-color-active);\n ", [ao("prefix, suffix", "\n color: var(--n-option-text-color-active);\n "), ro("&::before", "background-color: var(--n-option-color-active);")]), io("child-active", "\n color: var(--n-option-text-color-child-active);\n ", [ao("prefix, suffix", "\n color: var(--n-option-text-color-child-active);\n ")])]), io("disabled", "\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "), io("group", "\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ", [ao("prefix", "\n width: calc(var(--n-option-prefix-width) / 2);\n ", [io("show-icon", "\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]), ao("prefix", "\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ", [io("show-icon", "\n width: var(--n-option-icon-prefix-width);\n "), lo("icon", "\n font-size: var(--n-option-icon-size);\n ")]), ao("label", "\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "), ao("suffix", "\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ", [io("has-submenu", "\n width: var(--n-option-icon-suffix-width);\n "), lo("icon", "\n font-size: var(--n-option-icon-size);\n ")]), lo("dropdown-menu", "pointer-events: all;")]), lo("dropdown-offset-container", "\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]), lo("dropdown-divider", "\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "), lo("dropdown-menu-wrapper", "\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "), ro(">", [lo("scrollbar", "\n height: inherit;\n max-height: inherit;\n ")]), so("scrollable", "\n padding: var(--n-padding);\n "), io("scrollable", [ao("content", "\n padding: var(--n-padding);\n ")])]),
	Cl = {
		animated: {
			type: Boolean,
			default: !0
		},
		keyboard: {
			type: Boolean,
			default: !0
		},
		size: {
			type: String,
			default: "medium"
		},
		inverted: Boolean,
		placement: {
			type: String,
			default: "bottom"
		},
		onSelect: [Function, Array],
		options: {
			type: Array,
			default: () => []
		},
		menuProps: Function,
		showArrow: Boolean,
		renderLabel: Function,
		renderIcon: Function,
		renderOption: Function,
		nodeProps: Function,
		labelField: {
			type: String,
			default: "label"
		},
		keyField: {
			type: String,
			default: "key"
		},
		childrenField: {
			type: String,
			default: "children"
		},
		value: [String, Number]
	},
	Sl = Object.keys(ir),
	zl = Object.assign(Object.assign(Object.assign({}, ir), Cl), Ao.props),
	kl = t({
		name: "Dropdown",
		inheritAttrs: !1,
		props: zl,
		setup(e) {
			const o = i(!1),
				n = J(M(e, "show"), o),
				r = x((() => {
					const {
						keyField: o,
						childrenField: n
					} = e;
					return $e(e.options, {
						getKey: e => e[o],
						getDisabled: e => !0 === e.disabled,
						getIgnored: e => "divider" === e.type || "render" === e.type,
						getChildren: e => e[n]
					})
				})),
				t = x((() => r.value.treeNodes)),
				l = i(null),
				a = i(null),
				d = i(null),
				c = x((() => {
					var e, o, n;
					return null !== (n = null !== (o = null !== (e = l.value) && void 0 !== e ? e : a.value) && void 0 !== o ? o : d.value) && void 0 !== n ? n : null
				})),
				u = x((() => r.value.getPath(c.value).keyPath)),
				p = x((() => r.value.getPath(e.value).keyPath)),
				h = v((() => e.keyboard && n.value));
			Pe({
				keydown: {
					ArrowUp: {
						prevent: !0,
						handler: function() {
							z("up")
						}
					},
					ArrowRight: {
						prevent: !0,
						handler: function() {
							z("right")
						}
					},
					ArrowDown: {
						prevent: !0,
						handler: function() {
							z("down")
						}
					},
					ArrowLeft: {
						prevent: !0,
						handler: function() {
							z("left")
						}
					},
					Enter: {
						prevent: !0,
						handler: function() {
							const e = S();
							(null == e ? void 0 : e.isLeaf) && n.value && (y(e.key, e.rawNode), w(!1))
						}
					},
					Escape: function() {
						w(!1)
					}
				}
			}, h);
			const {
				mergedClsPrefixRef: b,
				inlineThemeDisabled: f
			} = Ho(e), g = Ao("Dropdown", "-dropdown", wl, ll, e, b);

			function y(o, n) {
				const {
					onSelect: r
				} = e;
				r && De(r, o, n)
			}

			function w(n) {
				const {
					"onUpdate:show": r,
					onUpdateShow: t
				} = e;
				r && De(r, n), t && De(t, n), o.value = n
			}

			function C() {
				l.value = null, a.value = null, d.value = null
			}

			function S() {
				var e;
				const {
					value: o
				} = r, {
					value: n
				} = c;
				return o && null !== n && null !== (e = o.getNode(n)) && void 0 !== e ? e : null
			}

			function z(e) {
				const {
					value: o
				} = c, {
					value: {
						getFirstAvailableNode: n
					}
				} = r;
				let t = null;
				if (null === o) {
					const e = n();
					null !== e && (t = e.key)
				} else {
					const o = S();
					if (o) {
						let n;
						switch (e) {
							case "down":
								n = o.getNext();
								break;
							case "up":
								n = o.getPrev();
								break;
							case "right":
								n = o.getChild();
								break;
							case "left":
								n = o.getParent()
						}
						n && (t = n.key)
					}
				}
				null !== t && (l.value = null, a.value = t)
			}
			m(pl, {
				labelFieldRef: M(e, "labelField"),
				childrenFieldRef: M(e, "childrenField"),
				renderLabelRef: M(e, "renderLabel"),
				renderIconRef: M(e, "renderIcon"),
				hoverKeyRef: l,
				keyboardKeyRef: a,
				lastToggledSubmenuKeyRef: d,
				pendingKeyPathRef: u,
				activeKeyPathRef: p,
				animatedRef: M(e, "animated"),
				mergedShowRef: n,
				nodePropsRef: M(e, "nodeProps"),
				renderOptionRef: M(e, "renderOption"),
				menuPropsRef: M(e, "menuProps"),
				doSelect: y,
				doUpdateShow: w
			}), s(n, (o => {
				e.animated || o || C()
			}));
			const k = x((() => {
					const {
						size: o,
						inverted: n
					} = e, {
						common: {
							cubicBezierEaseInOut: r
						},
						self: t
					} = g.value, {
						padding: l,
						dividerColor: a,
						borderRadius: i,
						optionOpacityDisabled: s,
						[Je("optionIconSuffixWidth", o)]: d,
						[Je("optionSuffixWidth", o)]: c,
						[Je("optionIconPrefixWidth", o)]: u,
						[Je("optionPrefixWidth", o)]: p,
						[Je("fontSize", o)]: h,
						[Je("optionHeight", o)]: v,
						[Je("optionIconSize", o)]: b
					} = t, f = {
						"--n-bezier": r,
						"--n-font-size": h,
						"--n-padding": l,
						"--n-border-radius": i,
						"--n-option-height": v,
						"--n-option-prefix-width": p,
						"--n-option-icon-prefix-width": u,
						"--n-option-suffix-width": c,
						"--n-option-icon-suffix-width": d,
						"--n-option-icon-size": b,
						"--n-divider-color": a,
						"--n-option-opacity-disabled": s
					};
					return n ? (f["--n-color"] = t.colorInverted, f["--n-option-color-hover"] = t.optionColorHoverInverted, f["--n-option-color-active"] = t.optionColorActiveInverted, f["--n-option-text-color"] = t.optionTextColorInverted, f["--n-option-text-color-hover"] = t.optionTextColorHoverInverted, f["--n-option-text-color-active"] = t.optionTextColorActiveInverted, f["--n-option-text-color-child-active"] = t.optionTextColorChildActiveInverted, f["--n-prefix-color"] = t.prefixColorInverted, f["--n-suffix-color"] = t.suffixColorInverted, f["--n-group-header-text-color"] = t.groupHeaderTextColorInverted) : (f["--n-color"] = t.color, f["--n-option-color-hover"] = t.optionColorHover, f["--n-option-color-active"] = t.optionColorActive, f["--n-option-text-color"] = t.optionTextColor, f["--n-option-text-color-hover"] = t.optionTextColorHover, f["--n-option-text-color-active"] = t.optionTextColorActive, f["--n-option-text-color-child-active"] = t.optionTextColorChildActive, f["--n-prefix-color"] = t.prefixColor, f["--n-suffix-color"] = t.suffixColor, f["--n-group-header-text-color"] = t.groupHeaderTextColor), f
				})),
				$ = f ? Wo("dropdown", x((() => `${e.size[0]}${e.inverted?"i":""}`)), k, e) : void 0;
			return {
				mergedClsPrefix: b,
				mergedTheme: g,
				tmNodes: t,
				mergedShow: n,
				handleAfterLeave: () => {
					e.animated && C()
				},
				doUpdateShow: w,
				cssVars: f ? void 0 : k,
				themeClass: null == $ ? void 0 : $.themeClass,
				onRender: null == $ ? void 0 : $.onRender
			}
		},
		render() {
			const {
				mergedTheme: e
			} = this, o = {
				show: this.mergedShow,
				theme: e.peers.Popover,
				themeOverrides: e.peerOverrides.Popover,
				internalOnAfterLeave: this.handleAfterLeave,
				internalRenderBody: (e, o, n, r, t) => {
					var l;
					const {
						mergedClsPrefix: a,
						menuProps: i
					} = this;
					null === (l = this.onRender) || void 0 === l || l.call(this);
					const s = (null == i ? void 0 : i(void 0, this.tmNodes.map((e => e.rawNode)))) || {},
						d = {
							ref: Ne(o),
							class: [e, `${a}-dropdown`, this.themeClass],
							clsPrefix: a,
							tmNodes: this.tmNodes,
							style: [n, this.cssVars],
							showArrow: this.showArrow,
							arrowStyle: this.arrowStyle,
							scrollable: this.scrollable,
							onMouseenter: r,
							onMouseleave: t
						};
					return P(yl, E(this.$attrs, d, s))
				},
				onUpdateShow: this.doUpdateShow,
				"onUpdate:show": void 0
			};
			return P(dr, Object.assign({}, Ie(this.$props, Sl), o), {
				trigger: () => {
					var e, o;
					return null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e)
				}
			})
		}
	}),
	$l = {
		gapSmall: "4px 8px",
		gapMedium: "8px 12px",
		gapLarge: "12px 16px"
	},
	Pl = {
		name: "Space",
		self: () => $l
	};
let Rl;
const Tl = () => {
		if (!vo) return !0;
		if (void 0 === Rl) {
			const e = document.createElement("div");
			e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
			const o = 1 === e.scrollHeight;
			return document.body.removeChild(e), Rl = o
		}
		return Rl
	},
	Bl = Object.assign(Object.assign({}, Ao.props), {
		align: String,
		justify: {
			type: String,
			default: "start"
		},
		inline: Boolean,
		vertical: Boolean,
		size: {
			type: [String, Number, Array],
			default: "medium"
		},
		wrapItem: {
			type: Boolean,
			default: !0
		},
		itemStyle: [String, Object],
		wrap: {
			type: Boolean,
			default: !0
		},
		internalUseGap: {
			type: Boolean,
			default: void 0
		}
	}),
	Fl = t({
		name: "Space",
		props: Bl,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				mergedRtlRef: n
			} = Ho(e), r = Ao("Space", "-space", void 0, Pl, e, o), t = Vo("Space", n, o);
			return {
				useGap: Tl(),
				rtlEnabled: t,
				mergedClsPrefix: o,
				margin: x((() => {
					const {
						size: o
					} = e;
					if (Array.isArray(o)) return {
						horizontal: o[0],
						vertical: o[1]
					};
					if ("number" == typeof o) return {
						horizontal: o,
						vertical: o
					};
					const {
						self: {
							[Je("gap", o)]: n
						}
					} = r.value, {
						row: t,
						col: l
					} = Re(n);
					return {
						horizontal: V(l),
						vertical: V(t)
					}
				}))
			}
		},
		render() {
			const {
				vertical: e,
				align: o,
				inline: n,
				justify: r,
				itemStyle: t,
				margin: l,
				wrap: a,
				mergedClsPrefix: i,
				rtlEnabled: s,
				useGap: d,
				wrapItem: c,
				internalUseGap: u
			} = this, p = Ae(function(e, o = "default", n = []) {
				const r = e.$slots[o];
				return void 0 === r ? n : r()
			}(this));
			if (!p.length) return null;
			const h = `${l.horizontal}px`,
				v = l.horizontal / 2 + "px",
				b = `${l.vertical}px`,
				f = l.vertical / 2 + "px",
				g = p.length - 1,
				m = r.startsWith("space-");
			return P("div", {
				role: "none",
				class: [`${i}-space`, s && `${i}-space--rtl`],
				style: {
					display: n ? "inline-flex" : "flex",
					flexDirection: e ? "column" : "row",
					justifyContent: ["start", "end"].includes(r) ? "flex-" + r : r,
					flexWrap: !a || e ? "nowrap" : "wrap",
					marginTop: d || e ? "" : `-${f}`,
					marginBottom: d || e ? "" : `-${f}`,
					alignItems: o,
					gap: d ? `${l.vertical}px ${l.horizontal}px` : ""
				}
			}, c || !d && !u ? p.map(((o, n) => P("div", {
				role: "none",
				style: [t, {
					maxWidth: "100%"
				}, d ? "" : e ? {
					marginBottom: n !== g ? b : ""
				} : s ? {
					marginLeft: m ? "space-between" === r && n === g ? "" : v : n !== g ? h : "",
					marginRight: m ? "space-between" === r && 0 === n ? "" : v : "",
					paddingTop: f,
					paddingBottom: f
				} : {
					marginRight: m ? "space-between" === r && n === g ? "" : v : n !== g ? h : "",
					marginLeft: m ? "space-between" === r && 0 === n ? "" : v : "",
					paddingTop: f,
					paddingBottom: f
				}]
			}, o))) : p)
		}
	}),
	Ml = {
		name: "Layout",
		common: zn,
		peers: {
			Scrollbar: Bn
		},
		self: e => {
			const {
				baseColor: o,
				textColor2: n,
				bodyColor: r,
				cardColor: t,
				dividerColor: l,
				actionColor: a,
				scrollbarColor: i,
				scrollbarColorHover: s,
				invertedColor: d
			} = e;
			return {
				textColor: n,
				textColorInverted: "#FFF",
				color: r,
				colorEmbedded: a,
				headerColor: t,
				headerColorInverted: d,
				footerColor: a,
				footerColorInverted: d,
				headerBorderColor: l,
				headerBorderColorInverted: d,
				footerBorderColor: l,
				footerBorderColorInverted: d,
				siderBorderColor: l,
				siderBorderColorInverted: d,
				siderColor: t,
				siderColorInverted: d,
				siderToggleButtonBorder: `1px solid ${l}`,
				siderToggleButtonColor: o,
				siderToggleButtonIconColor: n,
				siderToggleButtonIconColorInverted: n,
				siderToggleBarColor: A(r, i),
				siderToggleBarColorHover: A(r, s),
				__invertScrollbar: "true"
			}
		}
	},
	Ol = {
		railHeight: "4px",
		railWidthVertical: "4px",
		handleSize: "18px",
		dotHeight: "8px",
		dotWidth: "8px",
		dotBorderRadius: "4px"
	},
	Il = {
		name: "Slider",
		common: zn,
		self: e => {
			const {
				railColor: o,
				primaryColor: n,
				baseColor: r,
				cardColor: t,
				modalColor: l,
				popoverColor: a,
				borderRadius: i,
				fontSize: s,
				opacityDisabled: d
			} = e;
			return Object.assign(Object.assign({}, Ol), {
				fontSize: s,
				markFontSize: s,
				railColor: o,
				railColorHover: o,
				fillColor: n,
				fillColorHover: n,
				opacityDisabled: d,
				handleColor: "#FFF",
				dotColor: t,
				dotColorModal: l,
				dotColorPopover: a,
				handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
				handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
				handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
				handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
				indicatorColor: "rgba(0, 0, 0, .85)",
				indicatorBoxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
				indicatorTextColor: r,
				indicatorBorderRadius: i,
				dotBorder: `2px solid ${o}`,
				dotBorderActive: `2px solid ${n}`,
				dotBoxShadow: ""
			})
		}
	},
	Al = {
		buttonHeightSmall: "14px",
		buttonHeightMedium: "18px",
		buttonHeightLarge: "22px",
		buttonWidthSmall: "14px",
		buttonWidthMedium: "18px",
		buttonWidthLarge: "22px",
		buttonWidthPressedSmall: "20px",
		buttonWidthPressedMedium: "24px",
		buttonWidthPressedLarge: "28px",
		railHeightSmall: "18px",
		railHeightMedium: "22px",
		railHeightLarge: "26px",
		railWidthSmall: "32px",
		railWidthMedium: "40px",
		railWidthLarge: "48px"
	},
	Dl = {
		name: "Switch",
		common: zn,
		self: e => {
			const {
				primaryColor: o,
				opacityDisabled: n,
				borderRadius: r,
				textColor3: t
			} = e;
			return Object.assign(Object.assign({}, Al), {
				iconColor: t,
				textColor: "white",
				loadingColor: o,
				opacityDisabled: n,
				railColor: "rgba(0, 0, 0, .14)",
				railColorActive: o,
				buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
				buttonColor: "#FFF",
				railBorderRadiusSmall: r,
				railBorderRadiusMedium: r,
				railBorderRadiusLarge: r,
				buttonBorderRadiusSmall: r,
				buttonBorderRadiusMedium: r,
				buttonBorderRadiusLarge: r,
				boxShadowFocus: `0 0 0 2px ${le(o,{alpha:.2})}`
			})
		}
	},
	Hl = {
		tabFontSizeSmall: "14px",
		tabFontSizeMedium: "14px",
		tabFontSizeLarge: "16px",
		tabGapSmallLine: "36px",
		tabGapMediumLine: "36px",
		tabGapLargeLine: "36px",
		tabPaddingSmallLine: "6px 0",
		tabPaddingMediumLine: "10px 0",
		tabPaddingLargeLine: "14px 0",
		tabPaddingVerticalSmallLine: "0 6px",
		tabPaddingVerticalMediumLine: "0 10px",
		tabPaddingVerticalLargeLine: "0 14px",
		tabGapSmallBar: "36px",
		tabGapMediumBar: "36px",
		tabGapLargeBar: "36px",
		tabPaddingSmallBar: "4px 0",
		tabPaddingMediumBar: "6px 0",
		tabPaddingLargeBar: "10px 0",
		tabPaddingVerticalSmallBar: "0 4px",
		tabPaddingVerticalMediumBar: "0 6px ",
		tabPaddingVerticalLargeBar: "0 10px ",
		tabGapSmallCard: "4px",
		tabGapMediumCard: "4px",
		tabGapLargeCard: "4px",
		tabPaddingSmallCard: "6px 10px",
		tabPaddingMediumCard: "8px 12px",
		tabPaddingLargeCard: "8px 16px",
		tabPaddingSmallSegment: "4px 0",
		tabPaddingMediumSegment: "6px 0",
		tabPaddingLargeSegment: "8px 0",
		tabPaddingVerticalLargeSegment: "0 8px",
		tabPaddingVerticalSmallCard: "10px 6px",
		tabPaddingVerticalMediumCard: "12px 8px",
		tabPaddingVerticalLargeCard: "16px 8px",
		tabPaddingVerticalSmallSegment: "0 4px",
		tabPaddingVerticalMediumSegment: "0 6px",
		tabGapSmallSegment: "0",
		tabGapMediumSegment: "0",
		tabGapLargeSegment: "0",
		panePaddingSmall: "8px 0 0 0",
		panePaddingMedium: "12px 0 0 0",
		panePaddingLarge: "16px 0 0 0",
		closeSize: "18px",
		closeIconSize: "14px"
	},
	El = {
		name: "Tabs",
		common: zn,
		self: e => {
			const {
				textColor2: o,
				primaryColor: n,
				textColorDisabled: r,
				closeIconColor: t,
				closeIconColorHover: l,
				closeIconColorPressed: a,
				closeColorHover: i,
				closeColorPressed: s,
				tabColor: d,
				baseColor: c,
				dividerColor: u,
				fontWeight: p,
				textColor1: h,
				borderRadius: v,
				fontSize: b,
				fontWeightStrong: f
			} = e;
			return Object.assign(Object.assign({}, Hl), {
				colorSegment: d,
				tabFontSizeCard: b,
				tabTextColorLine: h,
				tabTextColorActiveLine: n,
				tabTextColorHoverLine: n,
				tabTextColorDisabledLine: r,
				tabTextColorSegment: h,
				tabTextColorActiveSegment: o,
				tabTextColorHoverSegment: o,
				tabTextColorDisabledSegment: r,
				tabTextColorBar: h,
				tabTextColorActiveBar: n,
				tabTextColorHoverBar: n,
				tabTextColorDisabledBar: r,
				tabTextColorCard: h,
				tabTextColorHoverCard: h,
				tabTextColorActiveCard: n,
				tabTextColorDisabledCard: r,
				barColor: n,
				closeIconColor: t,
				closeIconColorHover: l,
				closeIconColorPressed: a,
				closeColorHover: i,
				closeColorPressed: s,
				closeBorderRadius: v,
				tabColor: d,
				tabColorSegment: c,
				tabBorderColor: u,
				tabFontWeightActive: p,
				tabFontWeight: p,
				tabBorderRadius: v,
				paneTextColor: o,
				fontWeightStrong: f
			})
		}
	},
	Ll = {
		type: String,
		default: "static"
	},
	_l = lo("layout", "\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n flex: auto;\n overflow: hidden;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n", [lo("layout-scroll-container", "\n overflow-x: hidden;\n box-sizing: border-box;\n height: 100%;\n "), io("absolute-positioned", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ")]),
	jl = {
		embedded: Boolean,
		position: Ll,
		nativeScrollbar: {
			type: Boolean,
			default: !0
		},
		scrollbarProps: Object,
		onScroll: Function,
		contentStyle: {
			type: [String, Object],
			default: ""
		},
		hasSider: Boolean,
		siderPlacement: {
			type: String,
			default: "left"
		}
	};

function Nl(e) {
	return t({
		name: e ? "LayoutContent" : "Layout",
		props: Object.assign(Object.assign({}, Ao.props), jl),
		setup(e) {
			const o = i(null),
				n = i(null),
				{
					mergedClsPrefixRef: r,
					inlineThemeDisabled: t
				} = Ho(e),
				l = Ao("Layout", "-layout", _l, Ml, e, r);
			m("n-layout", e);
			let a = 0,
				s = 0;
			ko((() => {
				if (e.nativeScrollbar) {
					const e = o.value;
					e && (e.scrollTop = s, e.scrollLeft = a)
				}
			}));
			const d = {
					scrollTo: function(r, t) {
						if (e.nativeScrollbar) {
							const {
								value: e
							} = o;
							e && (void 0 === t ? e.scrollTo(r) : e.scrollTo(r, t))
						} else {
							const {
								value: e
							} = n;
							e && e.scrollTo(r, t)
						}
					}
				},
				c = x((() => {
					const {
						common: {
							cubicBezierEaseInOut: o
						},
						self: n
					} = l.value;
					return {
						"--n-bezier": o,
						"--n-color": e.embedded ? n.colorEmbedded : n.color,
						"--n-text-color": n.textColor
					}
				})),
				u = t ? Wo("layout", x((() => e.embedded ? "e" : "")), c, e) : void 0;
			return Object.assign({
				mergedClsPrefix: r,
				scrollableElRef: o,
				scrollbarInstRef: n,
				hasSiderStyle: {
					display: "flex",
					flexWrap: "nowrap",
					width: "100%",
					flexDirection: "row"
				},
				mergedTheme: l,
				handleNativeElScroll: o => {
					var n;
					const r = o.target;
					a = r.scrollLeft, s = r.scrollTop, null === (n = e.onScroll) || void 0 === n || n.call(e, o)
				},
				cssVars: t ? void 0 : c,
				themeClass: null == u ? void 0 : u.themeClass,
				onRender: null == u ? void 0 : u.onRender
			}, d)
		},
		render() {
			var o;
			const {
				mergedClsPrefix: n,
				hasSider: r
			} = this;
			null === (o = this.onRender) || void 0 === o || o.call(this);
			const t = r ? this.hasSiderStyle : void 0,
				l = [this.themeClass, e && `${n}-layout-content`, `${n}-layout`, `${n}-layout--${this.position}-positioned`];
			return P("div", {
				class: l,
				style: this.cssVars
			}, this.nativeScrollbar ? P("div", {
				ref: "scrollableElRef",
				class: `${n}-layout-scroll-container`,
				style: [this.contentStyle, t],
				onScroll: this.handleNativeElScroll
			}, this.$slots) : P(An, Object.assign({}, this.scrollbarProps, {
				onScroll: this.onScroll,
				ref: "scrollbarInstRef",
				theme: this.mergedTheme.peers.Scrollbar,
				themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
				contentStyle: [this.contentStyle, t]
			}), this.$slots))
		}
	})
}
const Wl = Nl(!1),
	Vl = Nl(!0),
	Ul = {
		name: "Skeleton",
		common: zn,
		self: e => {
			const {
				heightSmall: o,
				heightMedium: n,
				heightLarge: r,
				borderRadius: t
			} = e;
			return {
				color: "#eee",
				colorEnd: "#ddd",
				borderRadius: t,
				heightSmall: o,
				heightMedium: n,
				heightLarge: r
			}
		}
	},
	Kl = ro([lo("skeleton", "\n height: 1em;\n width: 100%;\n transition: background-color .3s var(--n-bezier);\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);\n background-color: var(--n-color-start);\n "), ro("@keyframes skeleton-loading", "\n 0% {\n background: var(--n-color-start);\n }\n 40% {\n background: var(--n-color-end);\n }\n 80% {\n background: var(--n-color-start);\n }\n 100% {\n background: var(--n-color-start);\n }\n ")]),
	Gl = Object.assign(Object.assign({}, Ao.props), {
		text: Boolean,
		round: Boolean,
		circle: Boolean,
		height: [String, Number],
		width: [String, Number],
		size: String,
		repeat: {
			type: Number,
			default: 1
		},
		animated: {
			type: Boolean,
			default: !0
		},
		sharp: {
			type: Boolean,
			default: !0
		}
	}),
	ql = t({
		name: "Skeleton",
		inheritAttrs: !1,
		props: Gl,
		setup(e) {
			! function() {
				if (vo && window.CSS && !So && (So = !0, "registerProperty" in (null === window || void 0 === window ? void 0 : window.CSS))) try {
					CSS.registerProperty({
						name: "--n-color-start",
						syntax: "<color>",
						inherits: !1,
						initialValue: "#0000"
					}), CSS.registerProperty({
						name: "--n-color-end",
						syntax: "<color>",
						inherits: !1,
						initialValue: "#0000"
					})
				} catch (e) {}
			}();
			const {
				mergedClsPrefixRef: o
			} = Ho(e), n = Ao("Skeleton", "-skeleton", Kl, Ul, e, o);
			return {
				mergedClsPrefix: o,
				style: x((() => {
					var o, r;
					const t = n.value,
						{
							common: {
								cubicBezierEaseInOut: l
							}
						} = t,
						a = t.self,
						{
							color: i,
							colorEnd: s,
							borderRadius: d
						} = a;
					let c;
					const {
						circle: u,
						sharp: p,
						round: h,
						width: v,
						height: b,
						size: f,
						text: g,
						animated: m
					} = e;
					void 0 !== f && (c = a[Je("height", f)]);
					const x = u ? null !== (o = null != v ? v : b) && void 0 !== o ? o : c : v,
						y = null !== (r = u && null != v ? v : b) && void 0 !== r ? r : c;
					return {
						display: g ? "inline-block" : "",
						verticalAlign: g ? "-0.125em" : "",
						borderRadius: u ? "50%" : h ? "4096px" : p ? "" : d,
						width: "number" == typeof x ? Te(x) : x,
						height: "number" == typeof y ? Te(y) : y,
						animation: m ? "" : "none",
						"--n-bezier": l,
						"--n-color-start": i,
						"--n-color-end": s
					}
				}))
			}
		},
		render() {
			const {
				repeat: e,
				style: n,
				mergedClsPrefix: r,
				$attrs: t
			} = this, l = P("div", E({
				class: `${r}-skeleton`,
				style: n
			}, t));
			return e > 1 ? P(o, null, Array.apply(null, {
				length: e
			}).map((e => [l, "\n"]))) : l
		}
	});

function Yl(e) {
	return window.TouchEvent && e instanceof window.TouchEvent
}

function Xl() {
	const e = i(new Map);
	return Be((() => e.value.clear())), [e, o => n => {
		e.value.set(o, n)
	}]
}
const Zl = ro([lo("slider", "\n display: block;\n padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;\n position: relative;\n z-index: 0;\n width: 100%;\n cursor: pointer;\n user-select: none;\n -webkit-user-select: none;\n ", [io("reverse", [lo("slider-handles", [lo("slider-handle-wrapper", "\n transform: translate(50%, -50%);\n ")]), lo("slider-dots", [lo("slider-dot", "\n transform: translateX(50%, -50%);\n ")]), io("vertical", [lo("slider-handles", [lo("slider-handle-wrapper", "\n transform: translate(-50%, -50%);\n ")]), lo("slider-marks", [lo("slider-mark", "\n transform: translateY(calc(-50% + var(--n-dot-height) / 2));\n ")]), lo("slider-dots", [lo("slider-dot", "\n transform: translateX(-50%) translateY(0);\n ")])])]), io("vertical", "\n padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);\n width: var(--n-rail-width-vertical);\n height: 100%;\n ", [lo("slider-handles", "\n top: calc(var(--n-handle-size) / 2);\n right: 0;\n bottom: calc(var(--n-handle-size) / 2);\n left: 0;\n ", [lo("slider-handle-wrapper", "\n top: unset;\n left: 50%;\n transform: translate(-50%, 50%);\n ")]), lo("slider-rail", "\n height: 100%;\n ", [ao("fill", "\n top: unset;\n right: 0;\n bottom: unset;\n left: 0;\n ")]), io("with-mark", "\n width: var(--n-rail-width-vertical);\n margin: 0 32px 0 8px;\n "), lo("slider-marks", "\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 22px;\n font-size: var(--n-mark-font-size);\n ", [lo("slider-mark", "\n transform: translateY(50%);\n white-space: nowrap;\n ")]), lo("slider-dots", "\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 50%;\n ", [lo("slider-dot", "\n transform: translateX(-50%) translateY(50%);\n ")])]), io("disabled", "\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ", [lo("slider-handle", "\n cursor: not-allowed;\n ")]), io("with-mark", "\n width: 100%;\n margin: 8px 0 32px 0;\n "), ro("&:hover", [lo("slider-rail", {
		backgroundColor: "var(--n-rail-color-hover)"
	}, [ao("fill", {
		backgroundColor: "var(--n-fill-color-hover)"
	})]), lo("slider-handle", {
		boxShadow: "var(--n-handle-box-shadow-hover)"
	})]), io("active", [lo("slider-rail", {
		backgroundColor: "var(--n-rail-color-hover)"
	}, [ao("fill", {
		backgroundColor: "var(--n-fill-color-hover)"
	})]), lo("slider-handle", {
		boxShadow: "var(--n-handle-box-shadow-hover)"
	})]), lo("slider-marks", "\n position: absolute;\n top: 18px;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ", [lo("slider-mark", "\n position: absolute;\n transform: translateX(-50%);\n white-space: nowrap;\n ")]), lo("slider-rail", "\n width: 100%;\n position: relative;\n height: var(--n-rail-height);\n background-color: var(--n-rail-color);\n transition: background-color .3s var(--n-bezier);\n border-radius: calc(var(--n-rail-height) / 2);\n ", [ao("fill", "\n position: absolute;\n top: 0;\n bottom: 0;\n border-radius: calc(var(--n-rail-height) / 2);\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-fill-color);\n ")]), lo("slider-handles", "\n position: absolute;\n top: 0;\n right: calc(var(--n-handle-size) / 2);\n bottom: 0;\n left: calc(var(--n-handle-size) / 2);\n ", [lo("slider-handle-wrapper", "\n outline: none;\n position: absolute;\n top: 50%;\n transform: translate(-50%, -50%);\n cursor: pointer;\n display: flex;\n ", [lo("slider-handle", "\n height: var(--n-handle-size);\n width: var(--n-handle-size);\n border-radius: 50%;\n overflow: hidden;\n transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);\n background-color: var(--n-handle-color);\n box-shadow: var(--n-handle-box-shadow);\n ", [ro("&:hover", "\n box-shadow: var(--n-handle-box-shadow-hover);\n ")]), ro("&:focus", [lo("slider-handle", "\n box-shadow: var(--n-handle-box-shadow-focus);\n ", [ro("&:hover", "\n box-shadow: var(--n-handle-box-shadow-active);\n ")])])])]), lo("slider-dots", "\n position: absolute;\n top: 50%;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ", [io("transition-disabled", [lo("slider-dot", "transition: none;")]), lo("slider-dot", "\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n transform: translate(-50%, -50%);\n height: var(--n-dot-height);\n width: var(--n-dot-width);\n border-radius: var(--n-dot-border-radius);\n overflow: hidden;\n box-sizing: border-box;\n border: var(--n-dot-border);\n background-color: var(--n-dot-color);\n ", [io("active", "border: var(--n-dot-border-active);")])])]), lo("slider-handle-indicator", "\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ", [Wn()]), lo("slider-handle-indicator", "\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ", [io("top", "\n margin-bottom: 12px;\n "), io("right", "\n margin-left: 12px;\n "), io("bottom", "\n margin-top: 12px;\n "), io("left", "\n margin-right: 12px;\n "), Wn()]), co(lo("slider", [lo("slider-dot", "background-color: var(--n-dot-color-modal);")])), uo(lo("slider", [lo("slider-dot", "background-color: var(--n-dot-color-popover);")]))]),
	Ql = Object.assign(Object.assign({}, Ao.props), {
		to: Co.propTo,
		defaultValue: {
			type: [Number, Array],
			default: 0
		},
		marks: Object,
		disabled: {
			type: Boolean,
			default: void 0
		},
		formatTooltip: Function,
		keyboard: {
			type: Boolean,
			default: !0
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		step: {
			type: [Number, String],
			default: 1
		},
		range: Boolean,
		value: [Number, Array],
		placement: String,
		showTooltip: {
			type: Boolean,
			default: void 0
		},
		tooltip: {
			type: Boolean,
			default: !0
		},
		vertical: Boolean,
		reverse: Boolean,
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array]
	}),
	Jl = t({
		name: "Slider",
		props: Ql,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				namespaceRef: n,
				inlineThemeDisabled: r
			} = Ho(e), t = Ao("Slider", "-slider", Zl, Il, e, o), l = i(null), [a, d] = Xl(), [c, v] = Xl(), b = i(new Set), f = Po(e), {
				mergedDisabledRef: g
			} = f, m = x((() => {
				const {
					step: o
				} = e;
				if (o <= 0 || "mark" === o) return 0;
				const n = o.toString();
				let r = 0;
				return n.includes(".") && (r = n.length - n.indexOf(".") - 1), r
			})), y = i(e.defaultValue), w = M(e, "value"), C = J(w, y), S = x((() => {
				const {
					value: o
				} = C;
				return (e.range ? o : [o]).map(V)
			})), z = x((() => S.value.length > 2)), k = x((() => void 0 === e.placement ? e.vertical ? "right" : "top" : e.placement)), $ = x((() => {
				const {
					marks: o
				} = e;
				return o ? Object.keys(o).map(parseFloat) : null
			})), P = i(-1), R = i(-1), B = i(-1), F = i(!1), O = i(!1), I = x((() => {
				const {
					vertical: o,
					reverse: n
				} = e;
				return o ? n ? "top" : "bottom" : n ? "right" : "left"
			})), A = x((() => {
				if (z.value) return;
				const o = S.value,
					n = U(e.range ? Math.min(...o) : e.min),
					r = U(e.range ? Math.max(...o) : o[0]),
					{
						value: t
					} = I;
				return e.vertical ? {
					[t]: `${n}%`,
					height: r - n + "%"
				} : {
					[t]: `${n}%`,
					width: r - n + "%"
				}
			})), D = x((() => {
				const o = [],
					{
						marks: n
					} = e;
				if (n) {
					const r = S.value.slice();
					r.sort(((e, o) => e - o));
					const {
						value: t
					} = I, {
						value: l
					} = z, {
						range: a
					} = e, i = l ? () => !1 : e => a ? e >= r[0] && e <= r[r.length - 1] : e <= r[0];
					for (const e of Object.keys(n)) {
						const r = Number(e);
						o.push({
							active: i(r),
							label: n[e],
							style: {
								[t]: `${U(r)}%`
							}
						})
					}
				}
				return o
			}));

			function H(o) {
				return e.showTooltip || B.value === o || P.value === o && F.value
			}

			function E() {
				c.value.forEach(((e, o) => {
					H(o) && e.syncPosition()
				}))
			}

			function L(o) {
				const {
					"onUpdate:value": n,
					onUpdateValue: r
				} = e, {
					nTriggerFormInput: t,
					nTriggerFormChange: l
				} = f;
				r && De(r, o), n && De(n, o), y.value = o, t(), l()
			}

			function _(o) {
				const {
					range: n
				} = e;
				if (n) {
					if (Array.isArray(o)) {
						const {
							value: e
						} = S;
						o.join() !== e.join() && L(o)
					}
				} else Array.isArray(o) || S.value[0] !== o && L(o)
			}

			function j(o, n) {
				if (e.range) {
					const e = S.value.slice();
					e.splice(n, 1, o), _(e)
				} else _(o)
			}

			function N(o, n, r) {
				const t = void 0 !== r;
				r || (r = o - n > 0 ? 1 : -1);
				const l = $.value || [],
					{
						step: a
					} = e;
				if ("mark" === a) {
					const e = K(o, l.concat(n), t ? r : void 0);
					return e ? e.value : n
				}
				if (a <= 0) return n;
				const {
					value: i
				} = m;
				let s;
				if (t) {
					const e = Number((n / a).toFixed(i)),
						o = Math.floor(e),
						t = e < o ? o : o + 1;
					s = K(n, [Number(((e > o ? o : o - 1) * a).toFixed(i)), Number((t * a).toFixed(i)), ...l], r)
				} else {
					const n = function(o) {
						const {
							step: n,
							min: r
						} = e;
						if (n <= 0 || "mark" === n) return o;
						const t = Math.round((o - r) / n) * n + r;
						return Number(t.toFixed(m.value))
					}(o);
					s = K(o, [...l, n])
				}
				return s ? V(s.value) : n
			}

			function V(o) {
				return Math.min(e.max, Math.max(e.min, o))
			}

			function U(o) {
				const {
					max: n,
					min: r
				} = e;
				return (o - r) / (n - r) * 100
			}

			function K(e, o = $.value, n) {
				if (!(null == o ? void 0 : o.length)) return null;
				let r = null,
					t = -1;
				for (; ++t < o.length;) {
					const l = o[t] - e,
						a = Math.abs(l);
					(void 0 === n || l * n > 0) && (null === r || a < r.distance) && (r = {
						index: t,
						distance: a,
						value: o[t]
					})
				}
				return r
			}

			function G(o) {
				const n = l.value;
				if (!n) return;
				const r = Yl(o) ? o.touches[0] : o,
					t = n.getBoundingClientRect();
				let a;
				return a = e.vertical ? (t.bottom - r.clientY) / t.height : (r.clientX - t.left) / t.width, e.reverse && (a = 1 - a),
					function(o) {
						const {
							max: n,
							min: r
						} = e;
						return r + (n - r) * o
					}(a)
			}

			function q(o) {
				const n = P.value;
				if (-1 === n) return;
				const {
					step: r
				} = e, t = S.value[n];
				j(N(r <= 0 || "mark" === r ? t : t + r * o, t, o > 0 ? 1 : -1), n)
			}

			function Y() {
				F.value && (F.value = !1, h("touchend", document, Z), h("mouseup", document, Z), h("touchmove", document, X), h("mousemove", document, X))
			}

			function X(e) {
				const {
					value: o
				} = P;
				F.value && -1 !== o ? j(N(G(e), S.value[o]), o) : Y()
			}

			function Z() {
				Y()
			}
			s(P, ((e, o) => {
				W((() => R.value = o))
			})), s(C, (() => {
				if (e.marks) {
					if (O.value) return;
					O.value = !0, W((() => {
						O.value = !1
					}))
				}
				W(E)
			})), p((() => {
				Y()
			}));
			const Q = x((() => {
					const {
						self: {
							markFontSize: e,
							railColor: o,
							railColorHover: n,
							fillColor: r,
							fillColorHover: l,
							handleColor: a,
							opacityDisabled: i,
							dotColor: s,
							dotColorModal: d,
							handleBoxShadow: c,
							handleBoxShadowHover: u,
							handleBoxShadowActive: p,
							handleBoxShadowFocus: h,
							dotBorder: v,
							dotBoxShadow: b,
							railHeight: f,
							railWidthVertical: g,
							handleSize: m,
							dotHeight: x,
							dotWidth: y,
							dotBorderRadius: w,
							fontSize: C,
							dotBorderActive: S,
							dotColorPopover: z
						},
						common: {
							cubicBezierEaseInOut: k
						}
					} = t.value;
					return {
						"--n-bezier": k,
						"--n-dot-border": v,
						"--n-dot-border-active": S,
						"--n-dot-border-radius": w,
						"--n-dot-box-shadow": b,
						"--n-dot-color": s,
						"--n-dot-color-modal": d,
						"--n-dot-color-popover": z,
						"--n-dot-height": x,
						"--n-dot-width": y,
						"--n-fill-color": r,
						"--n-fill-color-hover": l,
						"--n-font-size": C,
						"--n-handle-box-shadow": c,
						"--n-handle-box-shadow-active": p,
						"--n-handle-box-shadow-focus": h,
						"--n-handle-box-shadow-hover": u,
						"--n-handle-color": a,
						"--n-handle-size": m,
						"--n-opacity-disabled": i,
						"--n-rail-color": o,
						"--n-rail-color-hover": n,
						"--n-rail-height": f,
						"--n-rail-width-vertical": g,
						"--n-mark-font-size": e
					}
				})),
				ee = r ? Wo("slider", void 0, Q, e) : void 0,
				oe = x((() => {
					const {
						self: {
							fontSize: e,
							indicatorColor: o,
							indicatorBoxShadow: n,
							indicatorTextColor: r,
							indicatorBorderRadius: l
						}
					} = t.value;
					return {
						"--n-font-size": e,
						"--n-indicator-border-radius": l,
						"--n-indicator-box-shadow": n,
						"--n-indicator-color": o,
						"--n-indicator-text-color": r
					}
				})),
				ne = r ? Wo("slider-indicator", void 0, oe, e) : void 0;
			return {
				mergedClsPrefix: o,
				namespace: n,
				uncontrolledValue: y,
				mergedValue: C,
				mergedDisabled: g,
				mergedPlacement: k,
				isMounted: T(),
				adjustedTo: Co(e),
				dotTransitionDisabled: O,
				markInfos: D,
				isShowTooltip: H,
				shouldKeepTooltipTransition: function(e) {
					return !F.value || !(P.value === e && R.value === e)
				},
				handleRailRef: l,
				setHandleRefs: d,
				setFollowerRefs: v,
				fillStyle: A,
				getHandleStyle: function(e, o) {
					const n = U(e),
						{
							value: r
						} = I;
					return {
						[r]: `${n}%`,
						zIndex: o === P.value ? 1 : 0
					}
				},
				activeIndex: P,
				arrifiedValues: S,
				followerEnabledIndexSet: b,
				handleRailMouseDown: function(o) {
					var n, r;
					if (g.value) return;
					if (!Yl(o) && 0 !== o.button) return;
					const t = G(o);
					if (void 0 === t) return;
					const l = S.value.slice(),
						i = e.range ? null !== (r = null === (n = K(t, l)) || void 0 === n ? void 0 : n.index) && void 0 !== r ? r : -1 : 0; - 1 !== i && (o.preventDefault(), function(e) {
						var o;
						~e && (P.value = e, null === (o = a.value.get(e)) || void 0 === o || o.focus())
					}(i), F.value || (F.value = !0, u("touchend", document, Z), u("mouseup", document, Z), u("touchmove", document, X), u("mousemove", document, X)), j(N(t, S.value[i]), i))
				},
				handleHandleFocus: function(e) {
					P.value = e, g.value || (B.value = e)
				},
				handleHandleBlur: function(e) {
					P.value === e && (P.value = -1, Y()), B.value === e && (B.value = -1)
				},
				handleHandleMouseEnter: function(e) {
					B.value = e
				},
				handleHandleMouseLeave: function(e) {
					B.value === e && (B.value = -1)
				},
				handleRailKeyDown: function(o) {
					if (g.value || !e.keyboard) return;
					const {
						vertical: n,
						reverse: r
					} = e;
					switch (o.key) {
						case "ArrowUp":
							o.preventDefault(), q(n && r ? -1 : 1);
							break;
						case "ArrowRight":
							o.preventDefault(), q(!n && r ? -1 : 1);
							break;
						case "ArrowDown":
							o.preventDefault(), q(n && r ? 1 : -1);
							break;
						case "ArrowLeft":
							o.preventDefault(), q(!n && r ? 1 : -1)
					}
				},
				indicatorCssVars: r ? void 0 : oe,
				indicatorThemeClass: null == ne ? void 0 : ne.themeClass,
				indicatorOnRender: null == ne ? void 0 : ne.onRender,
				cssVars: r ? void 0 : Q,
				themeClass: null == ee ? void 0 : ee.themeClass,
				onRender: null == ee ? void 0 : ee.onRender
			}
		},
		render() {
			var e;
			const {
				mergedClsPrefix: o,
				themeClass: n,
				formatTooltip: r
			} = this;
			return null === (e = this.onRender) || void 0 === e || e.call(this), P("div", {
				class: [`${o}-slider`, n, {
					[`${o}-slider--disabled`]: this.mergedDisabled,
					[`${o}-slider--active`]: -1 !== this.activeIndex,
					[`${o}-slider--with-mark`]: this.marks,
					[`${o}-slider--vertical`]: this.vertical,
					[`${o}-slider--reverse`]: this.reverse
				}],
				style: this.cssVars,
				onKeydown: this.handleRailKeyDown,
				onMousedown: this.handleRailMouseDown,
				onTouchstart: this.handleRailMouseDown
			}, P("div", {
				class: `${o}-slider-rail`
			}, P("div", {
				class: `${o}-slider-rail__fill`,
				style: this.fillStyle
			}), this.marks ? P("div", {
				class: [`${o}-slider-dots`, this.dotTransitionDisabled && `${o}-slider-dots--transition-disabled`]
			}, this.markInfos.map((e => P("div", {
				key: e.label,
				class: [`${o}-slider-dot`, {
					[`${o}-slider-dot--active`]: e.active
				}],
				style: e.style
			})))) : null, P("div", {
				ref: "handleRailRef",
				class: `${o}-slider-handles`
			}, this.arrifiedValues.map(((e, n) => {
				const t = this.isShowTooltip(n);
				return P(ne, null, {
					default: () => [P(te, null, {
						default: () => P("div", {
							ref: this.setHandleRefs(n),
							class: `${o}-slider-handle-wrapper`,
							tabindex: this.mergedDisabled ? -1 : 0,
							style: this.getHandleStyle(e, n),
							onFocus: () => this.handleHandleFocus(n),
							onBlur: () => this.handleHandleBlur(n),
							onMouseenter: () => this.handleHandleMouseEnter(n),
							onMouseleave: () => this.handleHandleMouseLeave(n)
						}, Ve(this.$slots.thumb, (() => [P("div", {
							class: `${o}-slider-handle`
						})])))
					}), this.tooltip && P(G, {
						ref: this.setFollowerRefs(n),
						show: t,
						to: this.adjustedTo,
						enabled: this.showTooltip && !this.range || this.followerEnabledIndexSet.has(n),
						teleportDisabled: this.adjustedTo === Co.tdkey,
						placement: this.mergedPlacement,
						containerClass: this.namespace
					}, {
						default: () => P(B, {
							name: "fade-in-scale-up-transition",
							appear: this.isMounted,
							css: this.shouldKeepTooltipTransition(n),
							onEnter: () => {
								this.followerEnabledIndexSet.add(n)
							},
							onAfterLeave: () => {
								this.followerEnabledIndexSet.delete(n)
							}
						}, {
							default: () => {
								var n;
								return t ? (null === (n = this.indicatorOnRender) || void 0 === n || n.call(this), P("div", {
									class: [`${o}-slider-handle-indicator`, this.indicatorThemeClass, `${o}-slider-handle-indicator--${this.mergedPlacement}`],
									style: this.indicatorCssVars
								}, "function" == typeof r ? r(e) : e)) : null
							}
						})
					})]
				})
			}))), this.marks ? P("div", {
				class: `${o}-slider-marks`
			}, this.markInfos.map((e => P("div", {
				key: e.label,
				class: `${o}-slider-mark`,
				style: e.style
			}, e.label)))) : null))
		}
	}),
	ea = lo("switch", "\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n", [ao("children-placeholder", "\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "), ao("rail-placeholder", "\n display: flex;\n flex-wrap: none;\n "), ao("button-placeholder", "\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "), lo("base-loading", "\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ", [cn({
		left: "50%",
		top: "50%",
		originalTransform: "translateX(-50%) translateY(-50%)"
	})]), ao("checked, unchecked", "\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "), ao("checked", "\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "), ao("unchecked", "\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "), ro("&:focus", [ao("rail", "\n box-shadow: var(--n-box-shadow-focus);\n ")]), io("round", [ao("rail", "border-radius: calc(var(--n-rail-height) / 2);", [ao("button", "border-radius: calc(var(--n-button-height) / 2);")])]), so("disabled", [so("icon", [io("rubber-band", [io("pressed", [ao("rail", [ao("button", "max-width: var(--n-button-width-pressed);")])]), ao("rail", [ro("&:active", [ao("button", "max-width: var(--n-button-width-pressed);")])]), io("active", [io("pressed", [ao("rail", [ao("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), ao("rail", [ro("&:active", [ao("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), io("active", [ao("rail", [ao("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), ao("rail", "\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ", [ao("button-icon", "\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ", [cn()]), ao("button", '\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]), io("active", [ao("rail", "background-color: var(--n-rail-color-active);")]), io("loading", [ao("rail", "\n cursor: wait;\n ")]), io("disabled", [ao("rail", "\n cursor: not-allowed;\n opacity: .5;\n ")])]),
	oa = Object.assign(Object.assign({}, Ao.props), {
		size: {
			type: String,
			default: "medium"
		},
		value: {
			type: [String, Number, Boolean],
			default: void 0
		},
		loading: Boolean,
		defaultValue: {
			type: [String, Number, Boolean],
			default: !1
		},
		disabled: {
			type: Boolean,
			default: void 0
		},
		round: {
			type: Boolean,
			default: !0
		},
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array],
		checkedValue: {
			type: [String, Number, Boolean],
			default: !0
		},
		uncheckedValue: {
			type: [String, Number, Boolean],
			default: !1
		},
		railStyle: Function,
		rubberBand: {
			type: Boolean,
			default: !0
		},
		onChange: [Function, Array]
	});
let na;
const ra = t({
		name: "Switch",
		props: oa,
		setup(e) {
			void 0 === na && (na = "undefined" == typeof CSS || void 0 !== CSS.supports && CSS.supports("width", "max(1px)"));
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: n
			} = Ho(e), r = Ao("Switch", "-switch", ea, Dl, e, o), t = Po(e), {
				mergedSizeRef: l,
				mergedDisabledRef: a
			} = t, s = i(e.defaultValue), d = M(e, "value"), c = J(d, s), u = x((() => c.value === e.checkedValue)), p = i(!1), h = i(!1), v = x((() => {
				const {
					railStyle: o
				} = e;
				if (o) return o({
					focused: h.value,
					checked: u.value
				})
			}));

			function b(o) {
				const {
					"onUpdate:value": n,
					onChange: r,
					onUpdateValue: l
				} = e, {
					nTriggerFormInput: a,
					nTriggerFormChange: i
				} = t;
				n && De(n, o), l && De(l, o), r && De(r, o), s.value = o, a(), i()
			}
			const f = x((() => {
					const {
						value: e
					} = l, {
						self: {
							opacityDisabled: o,
							railColor: n,
							railColorActive: t,
							buttonBoxShadow: a,
							buttonColor: i,
							boxShadowFocus: s,
							loadingColor: d,
							textColor: c,
							iconColor: u,
							[Je("buttonHeight", e)]: p,
							[Je("buttonWidth", e)]: h,
							[Je("buttonWidthPressed", e)]: v,
							[Je("railHeight", e)]: b,
							[Je("railWidth", e)]: f,
							[Je("railBorderRadius", e)]: g,
							[Je("buttonBorderRadius", e)]: m
						},
						common: {
							cubicBezierEaseInOut: x
						}
					} = r.value;
					let y, w, C;
					return na ? (y = `calc((${b} - ${p}) / 2)`, w = `max(${b}, ${p})`, C = `max(${f}, calc(${f} + ${p} - ${b}))`) : (y = Te((V(b) - V(p)) / 2), w = Te(Math.max(V(b), V(p))), C = V(b) > V(p) ? f : Te(V(f) + V(p) - V(b))), {
						"--n-bezier": x,
						"--n-button-border-radius": m,
						"--n-button-box-shadow": a,
						"--n-button-color": i,
						"--n-button-width": h,
						"--n-button-width-pressed": v,
						"--n-button-height": p,
						"--n-height": w,
						"--n-offset": y,
						"--n-opacity-disabled": o,
						"--n-rail-border-radius": g,
						"--n-rail-color": n,
						"--n-rail-color-active": t,
						"--n-rail-height": b,
						"--n-rail-width": f,
						"--n-width": C,
						"--n-box-shadow-focus": s,
						"--n-loading-color": d,
						"--n-text-color": c,
						"--n-icon-color": u
					}
				})),
				g = n ? Wo("switch", x((() => l.value[0])), f, e) : void 0;
			return {
				handleClick: function() {
					e.loading || a.value || (c.value !== e.checkedValue ? b(e.checkedValue) : b(e.uncheckedValue))
				},
				handleBlur: function() {
					h.value = !1,
						function() {
							const {
								nTriggerFormBlur: e
							} = t;
							e()
						}(), p.value = !1
				},
				handleFocus: function() {
					h.value = !0,
						function() {
							const {
								nTriggerFormFocus: e
							} = t;
							e()
						}()
				},
				handleKeyup: function(o) {
					e.loading || a.value || " " === o.key && (c.value !== e.checkedValue ? b(e.checkedValue) : b(e.uncheckedValue), p.value = !1)
				},
				handleKeydown: function(o) {
					e.loading || a.value || " " === o.key && (o.preventDefault(), p.value = !0)
				},
				mergedRailStyle: v,
				pressed: p,
				mergedClsPrefix: o,
				mergedValue: c,
				checked: u,
				mergedDisabled: a,
				cssVars: n ? void 0 : f,
				themeClass: null == g ? void 0 : g.themeClass,
				onRender: null == g ? void 0 : g.onRender
			}
		},
		render() {
			const {
				mergedClsPrefix: e,
				mergedDisabled: o,
				checked: n,
				mergedRailStyle: r,
				onRender: t,
				$slots: l
			} = this;
			null == t || t();
			const {
				checked: a,
				unchecked: i,
				icon: s,
				"checked-icon": d,
				"unchecked-icon": c
			} = l, u = !(Ke(s) && Ke(d) && Ke(c));
			return P("div", {
				role: "switch",
				"aria-checked": n,
				class: [`${e}-switch`, this.themeClass, u && `${e}-switch--icon`, n && `${e}-switch--active`, o && `${e}-switch--disabled`, this.round && `${e}-switch--round`, this.loading && `${e}-switch--loading`, this.pressed && `${e}-switch--pressed`, this.rubberBand && `${e}-switch--rubber-band`],
				tabindex: this.mergedDisabled ? void 0 : 0,
				style: this.cssVars,
				onClick: this.handleClick,
				onFocus: this.handleFocus,
				onBlur: this.handleBlur,
				onKeyup: this.handleKeyup,
				onKeydown: this.handleKeydown
			}, P("div", {
				class: `${e}-switch__rail`,
				"aria-hidden": "true",
				style: r
			}, Ue(a, (o => Ue(i, (n => o || n ? P("div", {
				"aria-hidden": !0,
				class: `${e}-switch__children-placeholder`
			}, P("div", {
				class: `${e}-switch__rail-placeholder`
			}, P("div", {
				class: `${e}-switch__button-placeholder`
			}), o), P("div", {
				class: `${e}-switch__rail-placeholder`
			}, P("div", {
				class: `${e}-switch__button-placeholder`
			}), n)) : null)))), P("div", {
				class: `${e}-switch__button`
			}, Ue(s, (o => Ue(d, (n => Ue(c, (r => P(on, null, {
				default: () => this.loading ? P(hn, {
					key: "loading",
					clsPrefix: e,
					strokeWidth: 20
				}) : this.checked && (n || o) ? P("div", {
					class: `${e}-switch__button-icon`,
					key: n ? "checked-icon" : "icon"
				}, n || o) : this.checked || !r && !o ? null : P("div", {
					class: `${e}-switch__button-icon`,
					key: r ? "unchecked-icon" : "icon"
				}, r || o)
			}))))))), Ue(a, (o => o && P("div", {
				key: "checked",
				class: `${e}-switch__checked`
			}, o))), Ue(i, (o => o && P("div", {
				key: "unchecked",
				class: `${e}-switch__unchecked`
			}, o))))))
		}
	}),
	ta = "n-tabs",
	la = {
		tab: [String, Number, Object, Function],
		name: {
			type: [String, Number],
			required: !0
		},
		disabled: Boolean,
		displayDirective: {
			type: String,
			default: "if"
		},
		closable: {
			type: Boolean,
			default: void 0
		},
		tabProps: Object,
		label: [String, Number, Object, Function]
	},
	aa = t({
		__TAB_PANE__: !0,
		name: "TabPane",
		alias: ["TabPanel"],
		props: la,
		setup(e) {
			const o = d(ta, null);
			return o || Le("tab-pane", "`n-tab-pane` must be placed inside `n-tabs`."), {
				style: o.paneStyleRef,
				class: o.paneClassRef,
				mergedClsPrefix: o.mergedClsPrefixRef
			}
		},
		render() {
			return P("div", {
				class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
				style: this.style
			}, this.$slots)
		}
	}),
	ia = Object.assign({
		internalLeftPadded: Boolean,
		internalAddable: Boolean,
		internalCreatedByPane: Boolean
	}, function(e, o = [], n) {
		const r = {};
		return Object.getOwnPropertyNames(e).forEach((n => {
			o.includes(n) || (r[n] = e[n])
		})), Object.assign(r, n)
	}(la, ["displayDirective"])),
	sa = t({
		__TAB__: !0,
		inheritAttrs: !1,
		name: "Tab",
		props: ia,
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				valueRef: n,
				typeRef: r,
				closableRef: t,
				tabStyleRef: l,
				tabChangeIdRef: a,
				onBeforeLeaveRef: i,
				triggerRef: s,
				handleAdd: c,
				activateTab: u,
				handleClose: p
			} = d(ta);
			return {
				trigger: s,
				mergedClosable: x((() => {
					if (e.internalAddable) return !1;
					const {
						closable: o
					} = e;
					return void 0 === o ? t.value : o
				})),
				style: l,
				clsPrefix: o,
				value: n,
				type: r,
				handleClose(o) {
					o.stopPropagation(), e.disabled || p(e.name)
				},
				activateTab() {
					if (e.disabled) return;
					if (e.internalAddable) return void c();
					const {
						name: o
					} = e, r = ++a.id;
					if (o !== n.value) {
						const {
							value: t
						} = i;
						t ? Promise.resolve(t(e.name, n.value)).then((e => {
							e && a.id === r && u(o)
						})) : u(o)
					}
				}
			}
		},
		render() {
			const {
				internalAddable: e,
				clsPrefix: n,
				name: r,
				disabled: t,
				label: l,
				tab: a,
				value: i,
				mergedClosable: s,
				style: d,
				trigger: c,
				$slots: {
					default: u
				}
			} = this, p = null != l ? l : a;
			return P("div", {
				class: `${n}-tabs-tab-wrapper`
			}, this.internalLeftPadded ? P("div", {
				class: `${n}-tabs-tab-pad`
			}) : null, P("div", Object.assign({
				key: r,
				"data-name": r,
				"data-disabled": !!t || void 0
			}, E({
				class: [`${n}-tabs-tab`, i === r && `${n}-tabs-tab--active`, t && `${n}-tabs-tab--disabled`, s && `${n}-tabs-tab--closable`, e && `${n}-tabs-tab--addable`],
				onClick: "click" === c ? this.activateTab : void 0,
				onMouseenter: "hover" === c ? this.activateTab : void 0,
				style: e ? void 0 : d
			}, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), P("span", {
				class: `${n}-tabs-tab__label`
			}, e ? P(o, null, P("div", {
				class: `${n}-tabs-tab__height-placeholder`
			}, " "), P(tn, {
				clsPrefix: n
			}, {
				default: () => P(Uo, null)
			})) : u ? u() : "object" == typeof p ? p : He(null != p ? p : r)), s && "card" === this.type ? P(an, {
				clsPrefix: n,
				class: `${n}-tabs-tab__close`,
				onClick: this.handleClose,
				disabled: t
			}) : null))
		}
	}),
	da = lo("tabs", "\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n", [io("segment-type", [lo("tabs-rail", [ro("&.transition-disabled", "color: red;", [lo("tabs-tab", "\n transition: none;\n ")])])]), io("left, right", "\n flex-direction: row;\n ", [lo("tabs-bar", "\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "), lo("tabs-tab", "\n padding: var(--n-tab-padding-vertical); \n ")]), io("right", "\n flex-direction: row-reverse;\n ", [lo("tabs-bar", "\n left: 0;\n ")]), io("bottom", "\n flex-direction: column-reverse;\n justify-content: flex-end;\n ", [lo("tabs-bar", "\n top: 0;\n ")]), lo("tabs-rail", "\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ", [lo("tabs-tab-wrapper", "\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ", [lo("tabs-tab", "\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ", [io("active", "\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n "), ro("&:hover", "\n color: var(--n-tab-text-color-hover);\n ")])])]), io("flex", [lo("tabs-nav", {
		width: "100%"
	}, [lo("tabs-wrapper", {
		width: "100%"
	}, [lo("tabs-tab", {
		marginRight: 0
	})])])]), lo("tabs-nav", "\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ", [ao("prefix, suffix", "\n display: flex;\n align-items: center;\n "), ao("prefix", "padding-right: 16px;"), ao("suffix", "padding-left: 16px;")]), lo("tabs-nav-scroll-wrapper", "\n flex: 1;\n position: relative;\n overflow: hidden;\n ", [io("shadow-before", [ro("&::before", "\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]), io("shadow-after", [ro("&::after", "\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]), lo("tabs-nav-y-scroll", "\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ", [ro("&::-webkit-scrollbar", "\n width: 0;\n height: 0;\n ")]), ro("&::before, &::after", '\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 20px;\n z-index: 1;\n '), ro("&::before", "\n left: 0;\n "), ro("&::after", "\n right: 0;\n ")]), lo("tabs-nav-scroll-content", "\n display: flex;\n position: relative;\n min-width: 100%;\n width: fit-content;\n "), lo("tabs-wrapper", "\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "), lo("tabs-tab-wrapper", "\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "), lo("tabs-tab", "\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [io("disabled", {
		cursor: "not-allowed"
	}), ao("close", "\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "), ao("label", "\n display: flex;\n align-items: center;\n ")]), lo("tabs-bar", "\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ", [ro("&.transition-disabled", "\n transition: none;\n "), io("disabled", "\n background-color: var(--n-tab-text-color-disabled)\n ")]), lo("tabs-pane-wrapper", "\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "), lo("tab-pane", "\n color: var(--n-pane-text-color);\n width: 100%;\n padding: var(--n-pane-padding);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ", [ro("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", "\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "), ro("&.next-transition-leave-active, &.prev-transition-leave-active", "\n position: absolute;\n "), ro("&.next-transition-enter-from, &.prev-transition-leave-to", "\n transform: translateX(32px);\n opacity: 0;\n "), ro("&.next-transition-leave-to, &.prev-transition-enter-from", "\n transform: translateX(-32px);\n opacity: 0;\n "), ro("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", "\n transform: translateX(0);\n opacity: 1;\n ")]), lo("tabs-tab-pad", "\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "), io("line-type, bar-type", [lo("tabs-tab", "\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ", [ro("&:hover", {
		color: "var(--n-tab-text-color-hover)"
	}), io("active", "\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "), io("disabled", {
		color: "var(--n-tab-text-color-disabled)"
	})])]), lo("tabs-nav", [io("line-type", [ao("prefix, suffix", "\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "), lo("tabs-nav-scroll-content", "\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "), lo("tabs-bar", "\n border-radius: 0;\n bottom: -1px;\n ")]), io("card-type", [ao("prefix, suffix", "\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "), lo("tabs-pad", "\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "), lo("tabs-tab-pad", "\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "), lo("tabs-tab", "\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ", [io("addable", "\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n ", [ao("height-placeholder", "\n width: 0;\n font-size: var(--n-tab-font-size);\n "), so("disabled", [ro("&:hover", "\n color: var(--n-tab-text-color-hover);\n ")])]), io("closable", "padding-right: 6px;"), io("active", "\n border-bottom: 1px solid #0000;\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "), io("disabled", "color: var(--n-tab-text-color-disabled);")]), lo("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);")]), io("left, right", [lo("tabs-wrapper", "\n flex-direction: column;\n ", [lo("tabs-tab-wrapper", "\n flex-direction: column;\n ", [lo("tabs-tab-pad", "\n height: var(--n-tab-gap);\n width: 100%;\n ")])]), lo("tabs-nav-scroll-content", "\n border-bottom: none;\n ")]), io("left", [lo("tabs-nav-scroll-content", "\n box-sizing: border-box;\n border-right: 1px solid var(--n-tab-border-color);\n ")]), io("right", [lo("tabs-nav-scroll-content", "\n border-left: 1px solid var(--n-tab-border-color);\n ")]), io("bottom", [lo("tabs-nav-scroll-content", "\n border-top: 1px solid var(--n-tab-border-color);\n border-bottom: none;\n ")])])]),
	ca = Object.assign(Object.assign({}, Ao.props), {
		value: [String, Number],
		defaultValue: [String, Number],
		trigger: {
			type: String,
			default: "click"
		},
		type: {
			type: String,
			default: "bar"
		},
		closable: Boolean,
		justifyContent: String,
		size: {
			type: String,
			default: "medium"
		},
		placement: {
			type: String,
			default: "top"
		},
		tabStyle: [String, Object],
		barWidth: Number,
		paneClass: String,
		paneStyle: [String, Object],
		addable: [Boolean, Object],
		tabsPadding: {
			type: Number,
			default: 0
		},
		animated: Boolean,
		onBeforeLeave: Function,
		onAdd: Function,
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array],
		onClose: [Function, Array],
		labelSize: String,
		activeName: [String, Number],
		onActiveNameChange: [Function, Array]
	}),
	ua = t({
		name: "Tabs",
		props: ca,
		setup(e, {
			slots: o
		}) {
			var n, r, t, l;
			const {
				mergedClsPrefixRef: a,
				inlineThemeDisabled: d
			} = Ho(e), c = Ao("Tabs", "-tabs", da, El, e, a), u = i(null), p = i(null), h = i(null), v = i(null), b = i(null), f = i(!0), g = i(!0), y = ee(e, ["labelSize", "size"]), w = ee(e, ["activeName", "value"]), C = i(null !== (r = null !== (n = w.value) && void 0 !== n ? n : e.defaultValue) && void 0 !== r ? r : o.default ? null === (l = null === (t = Ae(o.default())[0]) || void 0 === t ? void 0 : t.props) || void 0 === l ? void 0 : l.name : null), S = J(w, C), k = {
				id: 0
			}, $ = x((() => {
				if (e.justifyContent && "card" !== e.type) return {
					display: "flex",
					justifyContent: e.justifyContent
				}
			}));

			function P() {
				var e;
				const {
					value: o
				} = S;
				return null === o ? null : null === (e = u.value) || void 0 === e ? void 0 : e.querySelector(`[data-name="${o}"]`)
			}

			function R(e) {
				const {
					value: o
				} = p;
				if (o)
					for (const n of e) o.style[n] = ""
			}

			function T() {
				if ("card" === e.type) return;
				const o = P();
				o && function(o) {
					if ("card" === e.type) return;
					const {
						value: n
					} = p;
					if (n && o) {
						const r = `${a.value}-tabs-bar--disabled`,
							{
								barWidth: t,
								placement: l
							} = e;
						if ("true" === o.dataset.disabled ? n.classList.add(r) : n.classList.remove(r), ["top", "bottom"].includes(l)) {
							if (R(["top", "maxHeight", "height"]), "number" == typeof t && o.offsetWidth >= t) {
								const e = Math.floor((o.offsetWidth - t) / 2) + o.offsetLeft;
								n.style.left = `${e}px`, n.style.maxWidth = `${t}px`
							} else n.style.left = `${o.offsetLeft}px`, n.style.maxWidth = `${o.offsetWidth}px`;
							n.style.width = "8192px", n.offsetWidth
						} else {
							if (R(["left", "maxWidth", "width"]), "number" == typeof t && o.offsetHeight >= t) {
								const e = Math.floor((o.offsetHeight - t) / 2) + o.offsetTop;
								n.style.top = `${e}px`, n.style.maxHeight = `${t}px`
							} else n.style.top = `${o.offsetTop}px`, n.style.maxHeight = `${o.offsetHeight}px`;
							n.style.height = "8192px", n.offsetHeight
						}
					}
				}(o)
			}

			function B(e) {
				var o;
				const n = null === (o = b.value) || void 0 === o ? void 0 : o.$el;
				if (!n) return;
				const r = P();
				if (!r) return;
				const {
					scrollLeft: t,
					offsetWidth: l
				} = n, {
					offsetLeft: a,
					offsetWidth: i
				} = r;
				t > a ? n.scrollTo({
					top: 0,
					left: a,
					behavior: "smooth"
				}) : a + i > t + l && n.scrollTo({
					top: 0,
					left: a + i - l,
					behavior: "smooth"
				})
			}
			s(S, (() => {
				k.id = 0, T(), B()
			}));
			const F = i(null);
			let O = 0,
				I = null;
			const A = {
					value: []
				},
				D = i("next");

			function H() {
				const {
					value: e
				} = p;
				if (!e) return;
				const o = "transition-disabled";
				e.classList.add(o), T(), e.classList.remove(o)
			}
			let E = 0;
			const L = Fe((function(o) {
				var n;
				if (0 === o.contentRect.width && 0 === o.contentRect.height) return;
				if (E === o.contentRect.width) return;
				E = o.contentRect.width;
				const {
					type: r
				} = e;
				"line" !== r && "bar" !== r || H(), "segment" !== r && N(null === (n = b.value) || void 0 === n ? void 0 : n.$el)
			}), 64);
			s([() => e.justifyContent, () => e.size], (() => {
				W((() => {
					const {
						type: o
					} = e;
					"line" !== o && "bar" !== o || H()
				}))
			}));
			const _ = i(!1),
				j = Fe((function(e) {
					var o;
					const {
						target: n,
						contentRect: {
							width: r
						}
					} = e, t = n.parentElement.offsetWidth;
					if (_.value) {
						const {
							value: e
						} = v;
						if (!e) return;
						t - r > e.$el.offsetWidth && (_.value = !1)
					} else t < r && (_.value = !0);
					N(null === (o = b.value) || void 0 === o ? void 0 : o.$el)
				}), 64);

			function N(e) {
				if (!e) return;
				const {
					scrollLeft: o,
					scrollWidth: n,
					offsetWidth: r
				} = e;
				f.value = o <= 0, g.value = o + r >= n
			}
			const V = Fe((e => {
				N(e.target)
			}), 64);
			m(ta, {
				triggerRef: M(e, "trigger"),
				tabStyleRef: M(e, "tabStyle"),
				paneClassRef: M(e, "paneClass"),
				paneStyleRef: M(e, "paneStyle"),
				mergedClsPrefixRef: a,
				typeRef: M(e, "type"),
				closableRef: M(e, "closable"),
				valueRef: S,
				tabChangeIdRef: k,
				onBeforeLeaveRef: M(e, "onBeforeLeave"),
				activateTab: function(o) {
					const n = S.value;
					let r = "next";
					for (const e of A.value) {
						if (e === n) break;
						if (e === o) {
							r = "prev";
							break
						}
					}
					D.value = r,
						function(o) {
							const {
								onActiveNameChange: n,
								onUpdateValue: r,
								"onUpdate:value": t
							} = e;
							n && De(n, o), r && De(r, o), t && De(t, o), C.value = o
						}(o)
				},
				handleClose: function(o) {
					const {
						onClose: n
					} = e;
					n && De(n, o)
				},
				handleAdd: function() {
					const {
						onAdd: o
					} = e;
					o && o(), W((() => {
						const e = P(),
							{
								value: o
							} = b;
						e && o && o.scrollTo({
							left: e.offsetLeft,
							top: 0,
							behavior: "smooth"
						})
					}))
				}
			}), Me((() => {
				T(), B()
			})), z((() => {
				const {
					value: o
				} = h;
				if (!o || ["left", "right"].includes(e.placement)) return;
				const {
					value: n
				} = a, r = `${n}-tabs-nav-scroll-wrapper--shadow-before`, t = `${n}-tabs-nav-scroll-wrapper--shadow-after`;
				f.value ? o.classList.remove(r) : o.classList.add(r), g.value ? o.classList.remove(t) : o.classList.add(t)
			}));
			const U = i(null);
			s(S, (() => {
				if ("segment" === e.type) {
					const e = U.value;
					e && W((() => {
						e.classList.add("transition-disabled"), e.offsetWidth, e.classList.remove("transition-disabled")
					}))
				}
			}));
			const K = {
					syncBarPosition: () => {
						T()
					}
				},
				G = x((() => {
					const {
						value: o
					} = y, {
						type: n
					} = e, r = `${o}${{card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n]}`, {
						self: {
							barColor: t,
							closeIconColor: l,
							closeIconColorHover: a,
							closeIconColorPressed: i,
							tabColor: s,
							tabBorderColor: d,
							paneTextColor: u,
							tabFontWeight: p,
							tabBorderRadius: h,
							tabFontWeightActive: v,
							colorSegment: b,
							fontWeightStrong: f,
							tabColorSegment: g,
							closeSize: m,
							closeIconSize: x,
							closeColorHover: w,
							closeColorPressed: C,
							closeBorderRadius: S,
							[Je("panePadding", o)]: z,
							[Je("tabPadding", r)]: k,
							[Je("tabPaddingVertical", r)]: $,
							[Je("tabGap", r)]: P,
							[Je("tabTextColor", n)]: R,
							[Je("tabTextColorActive", n)]: T,
							[Je("tabTextColorHover", n)]: B,
							[Je("tabTextColorDisabled", n)]: F,
							[Je("tabFontSize", o)]: M
						},
						common: {
							cubicBezierEaseInOut: O
						}
					} = c.value;
					return {
						"--n-bezier": O,
						"--n-color-segment": b,
						"--n-bar-color": t,
						"--n-tab-font-size": M,
						"--n-tab-text-color": R,
						"--n-tab-text-color-active": T,
						"--n-tab-text-color-disabled": F,
						"--n-tab-text-color-hover": B,
						"--n-pane-text-color": u,
						"--n-tab-border-color": d,
						"--n-tab-border-radius": h,
						"--n-close-size": m,
						"--n-close-icon-size": x,
						"--n-close-color-hover": w,
						"--n-close-color-pressed": C,
						"--n-close-border-radius": S,
						"--n-close-icon-color": l,
						"--n-close-icon-color-hover": a,
						"--n-close-icon-color-pressed": i,
						"--n-tab-color": s,
						"--n-tab-font-weight": p,
						"--n-tab-font-weight-active": v,
						"--n-tab-padding": k,
						"--n-tab-padding-vertical": $,
						"--n-tab-gap": P,
						"--n-pane-padding": z,
						"--n-font-weight-strong": f,
						"--n-tab-color-segment": g
					}
				})),
				q = d ? Wo("tabs", x((() => `${y.value[0]}${e.type[0]}`)), G, e) : void 0;
			return Object.assign({
				mergedClsPrefix: a,
				mergedValue: S,
				renderedNames: new Set,
				tabsRailElRef: U,
				tabsPaneWrapperRef: F,
				tabsElRef: u,
				barElRef: p,
				addTabInstRef: v,
				xScrollInstRef: b,
				scrollWrapperElRef: h,
				addTabFixed: _,
				tabWrapperStyle: $,
				handleNavResize: L,
				mergedSize: y,
				handleScroll: V,
				handleTabsResize: j,
				cssVars: d ? void 0 : G,
				themeClass: null == q ? void 0 : q.themeClass,
				animationDirection: D,
				renderNameListRef: A,
				onAnimationBeforeLeave: function(e) {
					const o = F.value;
					if (o) {
						O = e.getBoundingClientRect().height;
						const n = `${O}px`,
							r = () => {
								o.style.height = n, o.style.maxHeight = n
							};
						I ? (r(), I(), I = null) : I = r
					}
				},
				onAnimationEnter: function(e) {
					const o = F.value;
					if (o) {
						const n = e.getBoundingClientRect().height,
							r = () => {
								document.body.offsetHeight, o.style.maxHeight = `${n}px`, o.style.height = `${Math.max(O,n)}px`
							};
						I ? (I(), I = null, r()) : I = r
					}
				},
				onAnimationAfterEnter: function() {
					const e = F.value;
					e && (e.style.maxHeight = "", e.style.height = "")
				},
				onRender: null == q ? void 0 : q.onRender
			}, K)
		},
		render() {
			const {
				mergedClsPrefix: e,
				type: o,
				placement: n,
				addTabFixed: r,
				addable: t,
				mergedSize: l,
				renderNameListRef: a,
				onRender: i,
				$slots: {
					default: s,
					prefix: d,
					suffix: c
				}
			} = this;
			null == i || i();
			const u = s ? Ae(s()).filter((e => !0 === e.type.__TAB_PANE__)) : [],
				p = s ? Ae(s()).filter((e => !0 === e.type.__TAB__)) : [],
				h = !p.length,
				v = "card" === o,
				b = "segment" === o,
				f = !v && !b && this.justifyContent;
			a.value = [];
			const g = () => {
				const o = P("div", {
					style: this.tabWrapperStyle,
					class: [`${e}-tabs-wrapper`]
				}, f ? null : P("div", {
					class: `${e}-tabs-scroll-padding`,
					style: {
						width: `${this.tabsPadding}px`
					}
				}), h ? u.map(((e, o) => (a.value.push(e.props.name), ba(P(sa, Object.assign({}, e.props, {
					internalCreatedByPane: !0,
					internalLeftPadded: 0 !== o && (!f || "center" === f || "start" === f || "end" === f)
				}), e.children ? {
					default: e.children.tab
				} : void 0))))) : p.map(((e, o) => (a.value.push(e.props.name), ba(0 === o || f ? e : va(e))))), !r && t && v ? ha(t, 0 !== (h ? u.length : p.length)) : null, f ? null : P("div", {
					class: `${e}-tabs-scroll-padding`,
					style: {
						width: `${this.tabsPadding}px`
					}
				}));
				return P("div", {
					ref: "tabsElRef",
					class: `${e}-tabs-nav-scroll-content`
				}, v && t ? P(H, {
					onResize: this.handleTabsResize
				}, {
					default: () => o
				}) : o, v ? P("div", {
					class: `${e}-tabs-pad`
				}) : null, v ? null : P("div", {
					ref: "barElRef",
					class: `${e}-tabs-bar`
				}))
			};
			return P("div", {
				class: [`${e}-tabs`, this.themeClass, `${e}-tabs--${o}-type`, `${e}-tabs--${l}-size`, f && `${e}-tabs--flex`, `${e}-tabs--${n}`],
				style: this.cssVars
			}, P("div", {
				class: [`${e}-tabs-nav--${o}-type`, `${e}-tabs-nav--${n}`, `${e}-tabs-nav`]
			}, Ue(d, (o => o && P("div", {
				class: `${e}-tabs-nav__prefix`
			}, o))), b ? P("div", {
				class: `${e}-tabs-rail`,
				ref: "tabsRailElRef"
			}, h ? u.map(((e, o) => (a.value.push(e.props.name), P(sa, Object.assign({}, e.props, {
				internalCreatedByPane: !0,
				internalLeftPadded: 0 !== o
			}), e.children ? {
				default: e.children.tab
			} : void 0)))) : p.map(((e, o) => (a.value.push(e.props.name), 0 === o ? e : va(e))))) : P(H, {
				onResize: this.handleNavResize
			}, {
				default: () => P("div", {
					class: `${e}-tabs-nav-scroll-wrapper`,
					ref: "scrollWrapperElRef"
				}, ["top", "bottom"].includes(n) ? P(Oe, {
					ref: "xScrollInstRef",
					onScroll: this.handleScroll
				}, {
					default: g
				}) : P("div", {
					class: `${e}-tabs-nav-y-scroll`
				}, g()))
			}), r && t && v ? ha(t, !0) : null, Ue(c, (o => o && P("div", {
				class: `${e}-tabs-nav__suffix`
			}, o)))), h && (this.animated ? P("div", {
				ref: "tabsPaneWrapperRef",
				class: `${e}-tabs-pane-wrapper`
			}, pa(u, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : pa(u, this.mergedValue, this.renderedNames)))
		}
	});

function pa(e, o, n, r, t, l, a) {
	const i = [];
	return e.forEach((e => {
		const {
			name: r,
			displayDirective: t,
			"display-directive": l
		} = e.props, a = e => t === e || l === e, s = o === r;
		if (void 0 !== e.key && (e.key = r), s || a("show") || a("show:lazy") && n.has(r)) {
			n.has(r) || n.add(r);
			const o = !a("if");
			i.push(o ? Q(e, [
				[X, s]
			]) : e)
		}
	})), a ? P(F, {
		name: `${a}-transition`,
		onBeforeLeave: r,
		onEnter: t,
		onAfterEnter: l
	}, {
		default: () => i
	}) : i
}

function ha(e, o) {
	return P(sa, {
		ref: "addTabInstRef",
		key: "__addable",
		name: "__addable",
		internalCreatedByPane: !0,
		internalAddable: !0,
		internalLeftPadded: o,
		disabled: "object" == typeof e && e.disabled
	})
}

function va(e) {
	const o = oe(e);
	return o.props ? o.props.internalLeftPadded = !0 : o.props = {
		internalLeftPadded: !0
	}, o
}

function ba(e) {
	return Array.isArray(e.dynamicProps) ? e.dynamicProps.includes("internalLeftPadded") || e.dynamicProps.push("internalLeftPadded") : e.dynamicProps = ["internalLeftPadded"], e
}
export {
	Zt as N, et as a, tt as b, Jt as c, ct as d, ht as e, kl as f, Fl as g, Wl as h, Vl as i, cl as j, ua as k, aa as l, yt as m, ql as n, rl as o, ra as p, Vt as q, Jl as r, dr as s, Eo as z
};