var t = Object.defineProperty,
	e = (e, n, i) => (((e, n, i) => {
		n in e ? t(e, n, {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: i
		}) : e[n] = i
	})(e, "symbol" != typeof n ? n + "" : n, i), i);
import {
	b5 as n,
	d as i,
	aL as r,
	aN as a,
	aO as s,
	aR as o,
	F as h,
	aP as l,
	aS as u,
	r as c,
	o as d,
	a8 as p,
	b6 as f,
	b7 as m,
	b8 as g,
	b9 as v,
	ba as M,
	bb as y,
	bc as w,
	bd as x,
	m as b,
	be as T,
	aM as A,
	aW as E,
	aU as R,
	aT as S,
	c as I,
	aX as C,
	aV as P,
	aQ as k,
	a$ as V
} from "./vendor.js";
import {
	m as L,
	n as N,
	o as D,
	p as O,
	q as F,
	r as Y,
	j as U,
	s as B,
	c as X,
	z as W
} from "./naive-ui.js";
var G, _, Z, z, j, H, J, Q, q = globalThis && globalThis.__extends || (G = function(t, e) {
	return (G = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(t, e) {
			t.__proto__ = e
		} || function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
}, function(t, e) {
	function n() {
		this.constructor = t
	}
	G(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
});
! function(t) {
	var e, n, i, r, a, s, o = function() {
		function t(t, e, n) {
			if (null == t) throw new Error("name cannot be null.");
			if (null == e) throw new Error("timelines cannot be null.");
			this.name = t, this.timelines = e, this.timelineIds = [];
			for (var i = 0; i < e.length; i++) this.timelineIds[e[i].getPropertyId()] = !0;
			this.duration = n
		}
		return t.prototype.hasTimeline = function(t) {
			return 1 == this.timelineIds[t]
		}, t.prototype.apply = function(t, e, n, i, r, a, s, o) {
			if (null == t) throw new Error("skeleton cannot be null.");
			i && 0 != this.duration && (n %= this.duration, e > 0 && (e %= this.duration));
			for (var h = this.timelines, l = 0, u = h.length; l < u; l++) h[l].apply(t, e, n, r, a, s, o)
		}, t.binarySearch = function(t, e, n) {
			void 0 === n && (n = 1);
			var i = 0,
				r = t.length / n - 2;
			if (0 == r) return n;
			for (var a = r >>> 1;;) {
				if (t[(a + 1) * n] <= e ? i = a + 1 : r = a, i == r) return (i + 1) * n;
				a = i + r >>> 1
			}
		}, t.linearSearch = function(t, e, n) {
			for (var i = 0, r = t.length - n; i <= r; i += n)
				if (t[i] > e) return i;
			return -1
		}, t
	}();
	t.Animation = o, (n = e = t.MixBlend || (t.MixBlend = {}))[n.setup = 0] = "setup", n[n.first = 1] = "first", n[n.replace = 2] = "replace", n[n.add = 3] = "add", (r = i = t.MixDirection || (t.MixDirection = {}))[r.mixIn = 0] = "mixIn", r[r.mixOut = 1] = "mixOut", (s = a = t.TimelineType || (t.TimelineType = {}))[s.rotate = 0] = "rotate", s[s.translate = 1] = "translate", s[s.scale = 2] = "scale", s[s.shear = 3] = "shear", s[s.attachment = 4] = "attachment", s[s.color = 5] = "color", s[s.deform = 6] = "deform", s[s.event = 7] = "event", s[s.drawOrder = 8] = "drawOrder", s[s.ikConstraint = 9] = "ikConstraint", s[s.transformConstraint = 10] = "transformConstraint", s[s.pathConstraintPosition = 11] = "pathConstraintPosition", s[s.pathConstraintSpacing = 12] = "pathConstraintSpacing", s[s.pathConstraintMix = 13] = "pathConstraintMix", s[s.twoColor = 14] = "twoColor";
	var h = function() {
		function e(n) {
			if (n <= 0) throw new Error("frameCount must be > 0: " + n);
			this.curves = t.Utils.newFloatArray((n - 1) * e.BEZIER_SIZE)
		}
		return e.prototype.getFrameCount = function() {
			return this.curves.length / e.BEZIER_SIZE + 1
		}, e.prototype.setLinear = function(t) {
			this.curves[t * e.BEZIER_SIZE] = e.LINEAR
		}, e.prototype.setStepped = function(t) {
			this.curves[t * e.BEZIER_SIZE] = e.STEPPED
		}, e.prototype.getCurveType = function(t) {
			var n = t * e.BEZIER_SIZE;
			if (n == this.curves.length) return e.LINEAR;
			var i = this.curves[n];
			return i == e.LINEAR ? e.LINEAR : i == e.STEPPED ? e.STEPPED : e.BEZIER
		}, e.prototype.setCurve = function(t, n, i, r, a) {
			var s = .03 * (2 * -n + r),
				o = .03 * (2 * -i + a),
				h = .006 * (3 * (n - r) + 1),
				l = .006 * (3 * (i - a) + 1),
				u = 2 * s + h,
				c = 2 * o + l,
				d = .3 * n + s + .16666667 * h,
				p = .3 * i + o + .16666667 * l,
				f = t * e.BEZIER_SIZE,
				m = this.curves;
			m[f++] = e.BEZIER;
			for (var g = d, v = p, M = f + e.BEZIER_SIZE - 1; f < M; f += 2) m[f] = g, m[f + 1] = v, d += u, p += c, u += h, c += l, g += d, v += p
		}, e.prototype.getCurvePercent = function(n, i) {
			i = t.MathUtils.clamp(i, 0, 1);
			var r = this.curves,
				a = n * e.BEZIER_SIZE,
				s = r[a];
			if (s == e.LINEAR) return i;
			if (s == e.STEPPED) return 0;
			for (var o = 0, h = ++a, l = a + e.BEZIER_SIZE - 1; a < l; a += 2)
				if ((o = r[a]) >= i) {
					var u = void 0,
						c = void 0;
					return a == h ? (u = 0, c = 0) : (u = r[a - 2], c = r[a - 1]), c + (r[a + 1] - c) * (i - u) / (o - u)
				} var d = r[a - 1];
			return d + (1 - d) * (i - o) / (1 - o)
		}, e.LINEAR = 0, e.STEPPED = 1, e.BEZIER = 2, e.BEZIER_SIZE = 19, e
	}();
	t.CurveTimeline = h;
	var l = function(n) {
		function i(e) {
			var i = n.call(this, e) || this;
			return i.frames = t.Utils.newFloatArray(e << 1), i
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.rotate << 24) + this.boneIndex
		}, i.prototype.setFrame = function(t, e, n) {
			t <<= 1, this.frames[t] = e, this.frames[t + i.ROTATION] = n
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = this.frames,
				c = t.bones[this.boneIndex];
			if (c.active)
				if (r < u[0]) switch (h) {
					case e.setup:
						return void(c.rotation = c.data.rotation);
					case e.first:
						var d = c.data.rotation - c.rotation;
						c.rotation += (d - 360 * (16384 - (16384.499999999996 - d / 360 | 0))) * s
				} else if (r >= u[u.length - i.ENTRIES]) {
					var p = u[u.length + i.PREV_ROTATION];
					switch (h) {
						case e.setup:
							c.rotation = c.data.rotation + p * s;
							break;
						case e.first:
						case e.replace:
							p += c.data.rotation - c.rotation, p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0));
						case e.add:
							c.rotation += p * s
					}
				} else {
					var f = o.binarySearch(u, r, i.ENTRIES),
						m = u[f + i.PREV_ROTATION],
						g = u[f],
						v = this.getCurvePercent((f >> 1) - 1, 1 - (r - g) / (u[f + i.PREV_TIME] - g)),
						M = u[f + i.ROTATION] - m;
					switch (M = m + (M - 360 * (16384 - (16384.499999999996 - M / 360 | 0))) * v, h) {
						case e.setup:
							c.rotation = c.data.rotation + (M - 360 * (16384 - (16384.499999999996 - M / 360 | 0))) * s;
							break;
						case e.first:
						case e.replace:
							M += c.data.rotation - c.rotation;
						case e.add:
							c.rotation += (M - 360 * (16384 - (16384.499999999996 - M / 360 | 0))) * s
					}
				}
		}, i.ENTRIES = 2, i.PREV_TIME = -2, i.PREV_ROTATION = -1, i.ROTATION = 1, i
	}(h);
	t.RotateTimeline = l;
	var u = function(n) {
		function i(e) {
			var r = n.call(this, e) || this;
			return r.frames = t.Utils.newFloatArray(e * i.ENTRIES), r
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.translate << 24) + this.boneIndex
		}, i.prototype.setFrame = function(t, e, n, r) {
			t *= i.ENTRIES, this.frames[t] = e, this.frames[t + i.X] = n, this.frames[t + i.Y] = r
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = this.frames,
				c = t.bones[this.boneIndex];
			if (c.active)
				if (r < u[0]) switch (h) {
					case e.setup:
						return c.x = c.data.x, void(c.y = c.data.y);
					case e.first:
						c.x += (c.data.x - c.x) * s, c.y += (c.data.y - c.y) * s
				} else {
					var d = 0,
						p = 0;
					if (r >= u[u.length - i.ENTRIES]) d = u[u.length + i.PREV_X], p = u[u.length + i.PREV_Y];
					else {
						var f = o.binarySearch(u, r, i.ENTRIES);
						d = u[f + i.PREV_X], p = u[f + i.PREV_Y];
						var m = u[f],
							g = this.getCurvePercent(f / i.ENTRIES - 1, 1 - (r - m) / (u[f + i.PREV_TIME] - m));
						d += (u[f + i.X] - d) * g, p += (u[f + i.Y] - p) * g
					}
					switch (h) {
						case e.setup:
							c.x = c.data.x + d * s, c.y = c.data.y + p * s;
							break;
						case e.first:
						case e.replace:
							c.x += (c.data.x + d - c.x) * s, c.y += (c.data.y + p - c.y) * s;
							break;
						case e.add:
							c.x += d * s, c.y += p * s
					}
				}
		}, i.ENTRIES = 3, i.PREV_TIME = -3, i.PREV_X = -2, i.PREV_Y = -1, i.X = 1, i.Y = 2, i
	}(h);
	t.TranslateTimeline = u;
	var c = function(n) {
		function r(t) {
			return n.call(this, t) || this
		}
		return q(r, n), r.prototype.getPropertyId = function() {
			return (a.scale << 24) + this.boneIndex
		}, r.prototype.apply = function(n, a, s, h, l, u, c) {
			var d = this.frames,
				p = n.bones[this.boneIndex];
			if (p.active)
				if (s < d[0]) switch (u) {
					case e.setup:
						return p.scaleX = p.data.scaleX, void(p.scaleY = p.data.scaleY);
					case e.first:
						p.scaleX += (p.data.scaleX - p.scaleX) * l, p.scaleY += (p.data.scaleY - p.scaleY) * l
				} else {
					var f = 0,
						m = 0;
					if (s >= d[d.length - r.ENTRIES]) f = d[d.length + r.PREV_X] * p.data.scaleX, m = d[d.length + r.PREV_Y] * p.data.scaleY;
					else {
						var g = o.binarySearch(d, s, r.ENTRIES);
						f = d[g + r.PREV_X], m = d[g + r.PREV_Y];
						var v = d[g],
							M = this.getCurvePercent(g / r.ENTRIES - 1, 1 - (s - v) / (d[g + r.PREV_TIME] - v));
						f = (f + (d[g + r.X] - f) * M) * p.data.scaleX, m = (m + (d[g + r.Y] - m) * M) * p.data.scaleY
					}
					if (1 == l) u == e.add ? (p.scaleX += f - p.data.scaleX, p.scaleY += m - p.data.scaleY) : (p.scaleX = f, p.scaleY = m);
					else {
						var y = 0,
							w = 0;
						if (c == i.mixOut) switch (u) {
							case e.setup:
								y = p.data.scaleX, w = p.data.scaleY, p.scaleX = y + (Math.abs(f) * t.MathUtils.signum(y) - y) * l, p.scaleY = w + (Math.abs(m) * t.MathUtils.signum(w) - w) * l;
								break;
							case e.first:
							case e.replace:
								y = p.scaleX, w = p.scaleY, p.scaleX = y + (Math.abs(f) * t.MathUtils.signum(y) - y) * l, p.scaleY = w + (Math.abs(m) * t.MathUtils.signum(w) - w) * l;
								break;
							case e.add:
								y = p.scaleX, w = p.scaleY, p.scaleX = y + (Math.abs(f) * t.MathUtils.signum(y) - p.data.scaleX) * l, p.scaleY = w + (Math.abs(m) * t.MathUtils.signum(w) - p.data.scaleY) * l
						} else switch (u) {
							case e.setup:
								y = Math.abs(p.data.scaleX) * t.MathUtils.signum(f), w = Math.abs(p.data.scaleY) * t.MathUtils.signum(m), p.scaleX = y + (f - y) * l, p.scaleY = w + (m - w) * l;
								break;
							case e.first:
							case e.replace:
								y = Math.abs(p.scaleX) * t.MathUtils.signum(f), w = Math.abs(p.scaleY) * t.MathUtils.signum(m), p.scaleX = y + (f - y) * l, p.scaleY = w + (m - w) * l;
								break;
							case e.add:
								y = t.MathUtils.signum(f), w = t.MathUtils.signum(m), p.scaleX = Math.abs(p.scaleX) * y + (f - Math.abs(p.data.scaleX) * y) * l, p.scaleY = Math.abs(p.scaleY) * w + (m - Math.abs(p.data.scaleY) * w) * l
						}
					}
				}
		}, r
	}(u);
	t.ScaleTimeline = c;
	var d = function(t) {
		function n(e) {
			return t.call(this, e) || this
		}
		return q(n, t), n.prototype.getPropertyId = function() {
			return (a.shear << 24) + this.boneIndex
		}, n.prototype.apply = function(t, i, r, a, s, h, l) {
			var u = this.frames,
				c = t.bones[this.boneIndex];
			if (c.active)
				if (r < u[0]) switch (h) {
					case e.setup:
						return c.shearX = c.data.shearX, void(c.shearY = c.data.shearY);
					case e.first:
						c.shearX += (c.data.shearX - c.shearX) * s, c.shearY += (c.data.shearY - c.shearY) * s
				} else {
					var d = 0,
						p = 0;
					if (r >= u[u.length - n.ENTRIES]) d = u[u.length + n.PREV_X], p = u[u.length + n.PREV_Y];
					else {
						var f = o.binarySearch(u, r, n.ENTRIES);
						d = u[f + n.PREV_X], p = u[f + n.PREV_Y];
						var m = u[f],
							g = this.getCurvePercent(f / n.ENTRIES - 1, 1 - (r - m) / (u[f + n.PREV_TIME] - m));
						d += (u[f + n.X] - d) * g, p += (u[f + n.Y] - p) * g
					}
					switch (h) {
						case e.setup:
							c.shearX = c.data.shearX + d * s, c.shearY = c.data.shearY + p * s;
							break;
						case e.first:
						case e.replace:
							c.shearX += (c.data.shearX + d - c.shearX) * s, c.shearY += (c.data.shearY + p - c.shearY) * s;
							break;
						case e.add:
							c.shearX += d * s, c.shearY += p * s
					}
				}
		}, n
	}(u);
	t.ShearTimeline = d;
	var p = function(n) {
		function i(e) {
			var r = n.call(this, e) || this;
			return r.frames = t.Utils.newFloatArray(e * i.ENTRIES), r
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.color << 24) + this.slotIndex
		}, i.prototype.setFrame = function(t, e, n, r, a, s) {
			t *= i.ENTRIES, this.frames[t] = e, this.frames[t + i.R] = n, this.frames[t + i.G] = r, this.frames[t + i.B] = a, this.frames[t + i.A] = s
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = t.slots[this.slotIndex];
			if (u.bone.active) {
				var c = this.frames;
				if (r < c[0]) switch (h) {
					case e.setup:
						return void u.color.setFromColor(u.data.color);
					case e.first:
						var d = u.color,
							p = u.data.color;
						d.add((p.r - d.r) * s, (p.g - d.g) * s, (p.b - d.b) * s, (p.a - d.a) * s)
				} else {
					var f = 0,
						m = 0,
						g = 0,
						v = 0;
					if (r >= c[c.length - i.ENTRIES]) {
						var M = c.length;
						f = c[M + i.PREV_R], m = c[M + i.PREV_G], g = c[M + i.PREV_B], v = c[M + i.PREV_A]
					} else {
						var y = o.binarySearch(c, r, i.ENTRIES);
						f = c[y + i.PREV_R], m = c[y + i.PREV_G], g = c[y + i.PREV_B], v = c[y + i.PREV_A];
						var w = c[y],
							x = this.getCurvePercent(y / i.ENTRIES - 1, 1 - (r - w) / (c[y + i.PREV_TIME] - w));
						f += (c[y + i.R] - f) * x, m += (c[y + i.G] - m) * x, g += (c[y + i.B] - g) * x, v += (c[y + i.A] - v) * x
					}
					1 == s ? u.color.set(f, m, g, v) : (d = u.color, h == e.setup && d.setFromColor(u.data.color), d.add((f - d.r) * s, (m - d.g) * s, (g - d.b) * s, (v - d.a) * s))
				}
			}
		}, i.ENTRIES = 5, i.PREV_TIME = -5, i.PREV_R = -4, i.PREV_G = -3, i.PREV_B = -2, i.PREV_A = -1, i.R = 1, i.G = 2, i.B = 3, i.A = 4, i
	}(h);
	t.ColorTimeline = p;
	var f = function(n) {
		function i(e) {
			var r = n.call(this, e) || this;
			return r.frames = t.Utils.newFloatArray(e * i.ENTRIES), r
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.twoColor << 24) + this.slotIndex
		}, i.prototype.setFrame = function(t, e, n, r, a, s, o, h, l) {
			t *= i.ENTRIES, this.frames[t] = e, this.frames[t + i.R] = n, this.frames[t + i.G] = r, this.frames[t + i.B] = a, this.frames[t + i.A] = s, this.frames[t + i.R2] = o, this.frames[t + i.G2] = h, this.frames[t + i.B2] = l
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = t.slots[this.slotIndex];
			if (u.bone.active) {
				var c = this.frames;
				if (r < c[0]) switch (h) {
					case e.setup:
						return u.color.setFromColor(u.data.color), void u.darkColor.setFromColor(u.data.darkColor);
					case e.first:
						var d = u.color,
							p = u.darkColor,
							f = u.data.color,
							m = u.data.darkColor;
						d.add((f.r - d.r) * s, (f.g - d.g) * s, (f.b - d.b) * s, (f.a - d.a) * s), p.add((m.r - p.r) * s, (m.g - p.g) * s, (m.b - p.b) * s, 0)
				} else {
					var g = 0,
						v = 0,
						M = 0,
						y = 0,
						w = 0,
						x = 0,
						b = 0;
					if (r >= c[c.length - i.ENTRIES]) {
						var T = c.length;
						g = c[T + i.PREV_R], v = c[T + i.PREV_G], M = c[T + i.PREV_B], y = c[T + i.PREV_A], w = c[T + i.PREV_R2], x = c[T + i.PREV_G2], b = c[T + i.PREV_B2]
					} else {
						var A = o.binarySearch(c, r, i.ENTRIES);
						g = c[A + i.PREV_R], v = c[A + i.PREV_G], M = c[A + i.PREV_B], y = c[A + i.PREV_A], w = c[A + i.PREV_R2], x = c[A + i.PREV_G2], b = c[A + i.PREV_B2];
						var E = c[A],
							R = this.getCurvePercent(A / i.ENTRIES - 1, 1 - (r - E) / (c[A + i.PREV_TIME] - E));
						g += (c[A + i.R] - g) * R, v += (c[A + i.G] - v) * R, M += (c[A + i.B] - M) * R, y += (c[A + i.A] - y) * R, w += (c[A + i.R2] - w) * R, x += (c[A + i.G2] - x) * R, b += (c[A + i.B2] - b) * R
					}
					1 == s ? (u.color.set(g, v, M, y), u.darkColor.set(w, x, b, 1)) : (d = u.color, p = u.darkColor, h == e.setup && (d.setFromColor(u.data.color), p.setFromColor(u.data.darkColor)), d.add((g - d.r) * s, (v - d.g) * s, (M - d.b) * s, (y - d.a) * s), p.add((w - p.r) * s, (x - p.g) * s, (b - p.b) * s, 0))
				}
			}
		}, i.ENTRIES = 8, i.PREV_TIME = -8, i.PREV_R = -7, i.PREV_G = -6, i.PREV_B = -5, i.PREV_A = -4, i.PREV_R2 = -3, i.PREV_G2 = -2, i.PREV_B2 = -1, i.R = 1, i.G = 2, i.B = 3, i.A = 4, i.R2 = 5, i.G2 = 6, i.B2 = 7, i
	}(h);
	t.TwoColorTimeline = f;
	var m = function() {
		function n(e) {
			this.frames = t.Utils.newFloatArray(e), this.attachmentNames = new Array(e)
		}
		return n.prototype.getPropertyId = function() {
			return (a.attachment << 24) + this.slotIndex
		}, n.prototype.getFrameCount = function() {
			return this.frames.length
		}, n.prototype.setFrame = function(t, e, n) {
			this.frames[t] = e, this.attachmentNames[t] = n
		}, n.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = t.slots[this.slotIndex];
			if (u.bone.active)
				if (l != i.mixOut) {
					var c = this.frames;
					if (r < c[0]) h != e.setup && h != e.first || this.setAttachment(t, u, u.data.attachmentName);
					else {
						var d;
						d = r >= c[c.length - 1] ? c.length - 1 : o.binarySearch(c, r, 1) - 1;
						var p = this.attachmentNames[d];
						t.slots[this.slotIndex].setAttachment(null == p ? null : t.getAttachment(this.slotIndex, p))
					}
				} else h == e.setup && this.setAttachment(t, u, u.data.attachmentName)
		}, n.prototype.setAttachment = function(t, e, n) {
			e.attachment = null == n ? null : t.getAttachment(this.slotIndex, n)
		}, n
	}();
	t.AttachmentTimeline = m;
	var g = null,
		v = function(n) {
			function i(e) {
				var i = n.call(this, e) || this;
				return i.frames = t.Utils.newFloatArray(e), i.frameVertices = new Array(e), null == g && (g = t.Utils.newFloatArray(64)), i
			}
			return q(i, n), i.prototype.getPropertyId = function() {
				return (a.deform << 27) + +this.attachment.id + this.slotIndex
			}, i.prototype.setFrame = function(t, e, n) {
				this.frames[t] = e, this.frameVertices[t] = n
			}, i.prototype.apply = function(n, i, r, a, s, h, l) {
				var u = n.slots[this.slotIndex];
				if (u.bone.active) {
					var c = u.getAttachment();
					if (c instanceof t.VertexAttachment && c.deformAttachment == this.attachment) {
						var d = u.deform;
						0 == d.length && (h = e.setup);
						var p = this.frameVertices,
							f = p[0].length,
							m = this.frames;
						if (r < m[0]) {
							var g = c;
							switch (h) {
								case e.setup:
									return void(d.length = 0);
								case e.first:
									if (1 == s) {
										d.length = 0;
										break
									}
									var v = t.Utils.setArraySize(d, f);
									if (null == g.bones)
										for (var M = g.vertices, y = 0; y < f; y++) v[y] += (M[y] - v[y]) * s;
									else
										for (s = 1 - s, y = 0; y < f; y++) v[y] *= s
							}
						} else {
							var w = t.Utils.setArraySize(d, f);
							if (r >= m[m.length - 1]) {
								var x = p[m.length - 1];
								if (1 == s)
									if (h == e.add)
										if (null == (g = c).bones) {
											M = g.vertices;
											for (var b = 0; b < f; b++) w[b] += x[b] - M[b]
										} else
											for (var T = 0; T < f; T++) w[T] += x[T];
								else t.Utils.arrayCopy(x, 0, w, 0, f);
								else switch (h) {
									case e.setup:
										var A = c;
										if (null == A.bones) {
											M = A.vertices;
											for (var E = 0; E < f; E++) {
												var R = M[E];
												w[E] = R + (x[E] - R) * s
											}
										} else
											for (var S = 0; S < f; S++) w[S] = x[S] * s;
										break;
									case e.first:
									case e.replace:
										for (var I = 0; I < f; I++) w[I] += (x[I] - w[I]) * s;
										break;
									case e.add:
										if (null == (g = c).bones) {
											M = g.vertices;
											for (var C = 0; C < f; C++) w[C] += (x[C] - M[C]) * s
										} else
											for (var P = 0; P < f; P++) w[P] += x[P] * s
								}
							} else {
								var k = o.binarySearch(m, r),
									V = p[k - 1],
									L = p[k],
									N = m[k],
									D = this.getCurvePercent(k - 1, 1 - (r - N) / (m[k - 1] - N));
								if (1 == s)
									if (h == e.add)
										if (null == (g = c).bones) {
											M = g.vertices;
											for (var O = 0; O < f; O++) {
												var F = V[O];
												w[O] += F + (L[O] - F) * D - M[O]
											}
										} else
											for (var Y = 0; Y < f; Y++) F = V[Y], w[Y] += F + (L[Y] - F) * D;
								else
									for (var U = 0; U < f; U++) F = V[U], w[U] = F + (L[U] - F) * D;
								else switch (h) {
									case e.setup:
										var B = c;
										if (null == B.bones) {
											M = B.vertices;
											for (var X = 0; X < f; X++) F = V[X], R = M[X], w[X] = R + (F + (L[X] - F) * D - R) * s
										} else
											for (var W = 0; W < f; W++) F = V[W], w[W] = (F + (L[W] - F) * D) * s;
										break;
									case e.first:
									case e.replace:
										for (var G = 0; G < f; G++) F = V[G], w[G] += (F + (L[G] - F) * D - w[G]) * s;
										break;
									case e.add:
										if (null == (g = c).bones) {
											M = g.vertices;
											for (var _ = 0; _ < f; _++) F = V[_], w[_] += (F + (L[_] - F) * D - M[_]) * s
										} else
											for (var Z = 0; Z < f; Z++) F = V[Z], w[Z] += (F + (L[Z] - F) * D) * s
								}
							}
						}
					}
				}
			}, i
		}(h);
	t.DeformTimeline = v;
	var M = function() {
		function e(e) {
			this.frames = t.Utils.newFloatArray(e), this.events = new Array(e)
		}
		return e.prototype.getPropertyId = function() {
			return a.event << 24
		}, e.prototype.getFrameCount = function() {
			return this.frames.length
		}, e.prototype.setFrame = function(t, e) {
			this.frames[t] = e.time, this.events[t] = e
		}, e.prototype.apply = function(t, e, n, i, r, a, s) {
			if (null != i) {
				var h = this.frames,
					l = this.frames.length;
				if (e > n) this.apply(t, e, Number.MAX_VALUE, i, r, a, s), e = -1;
				else if (e >= h[l - 1]) return;
				if (!(n < h[0])) {
					var u = 0;
					if (e < h[0]) u = 0;
					else
						for (var c = h[u = o.binarySearch(h, e)]; u > 0 && h[u - 1] == c;) u--;
					for (; u < l && n >= h[u]; u++) i.push(this.events[u])
				}
			}
		}, e
	}();
	t.EventTimeline = M;
	var y = function() {
		function n(e) {
			this.frames = t.Utils.newFloatArray(e), this.drawOrders = new Array(e)
		}
		return n.prototype.getPropertyId = function() {
			return a.drawOrder << 24
		}, n.prototype.getFrameCount = function() {
			return this.frames.length
		}, n.prototype.setFrame = function(t, e, n) {
			this.frames[t] = e, this.drawOrders[t] = n
		}, n.prototype.apply = function(n, r, a, s, h, l, u) {
			var c = n.drawOrder,
				d = n.slots;
			if (u != i.mixOut) {
				var p = this.frames;
				if (a < p[0]) l != e.setup && l != e.first || t.Utils.arrayCopy(n.slots, 0, n.drawOrder, 0, n.slots.length);
				else {
					var f;
					f = a >= p[p.length - 1] ? p.length - 1 : o.binarySearch(p, a) - 1;
					var m = this.drawOrders[f];
					if (null == m) t.Utils.arrayCopy(d, 0, c, 0, d.length);
					else
						for (var g = 0, v = m.length; g < v; g++) c[g] = d[m[g]]
				}
			} else l == e.setup && t.Utils.arrayCopy(n.slots, 0, n.drawOrder, 0, n.slots.length)
		}, n
	}();
	t.DrawOrderTimeline = y;
	var w = function(n) {
		function r(e) {
			var i = n.call(this, e) || this;
			return i.frames = t.Utils.newFloatArray(e * r.ENTRIES), i
		}
		return q(r, n), r.prototype.getPropertyId = function() {
			return (a.ikConstraint << 24) + this.ikConstraintIndex
		}, r.prototype.setFrame = function(t, e, n, i, a, s, o) {
			t *= r.ENTRIES, this.frames[t] = e, this.frames[t + r.MIX] = n, this.frames[t + r.SOFTNESS] = i, this.frames[t + r.BEND_DIRECTION] = a, this.frames[t + r.COMPRESS] = s ? 1 : 0, this.frames[t + r.STRETCH] = o ? 1 : 0
		}, r.prototype.apply = function(t, n, a, s, h, l, u) {
			var c = this.frames,
				d = t.ikConstraints[this.ikConstraintIndex];
			if (d.active)
				if (a < c[0]) switch (l) {
						case e.setup:
							return d.mix = d.data.mix, d.softness = d.data.softness, d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, void(d.stretch = d.data.stretch);
						case e.first:
							d.mix += (d.data.mix - d.mix) * h, d.softness += (d.data.softness - d.softness) * h, d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, d.stretch = d.data.stretch
					} else if (a >= c[c.length - r.ENTRIES]) l == e.setup ? (d.mix = d.data.mix + (c[c.length + r.PREV_MIX] - d.data.mix) * h, d.softness = d.data.softness + (c[c.length + r.PREV_SOFTNESS] - d.data.softness) * h, u == i.mixOut ? (d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, d.stretch = d.data.stretch) : (d.bendDirection = c[c.length + r.PREV_BEND_DIRECTION], d.compress = 0 != c[c.length + r.PREV_COMPRESS], d.stretch = 0 != c[c.length + r.PREV_STRETCH])) : (d.mix += (c[c.length + r.PREV_MIX] - d.mix) * h, d.softness += (c[c.length + r.PREV_SOFTNESS] - d.softness) * h, u == i.mixIn && (d.bendDirection = c[c.length + r.PREV_BEND_DIRECTION], d.compress = 0 != c[c.length + r.PREV_COMPRESS], d.stretch = 0 != c[c.length + r.PREV_STRETCH]));
					else {
						var p = o.binarySearch(c, a, r.ENTRIES),
							f = c[p + r.PREV_MIX],
							m = c[p + r.PREV_SOFTNESS],
							g = c[p],
							v = this.getCurvePercent(p / r.ENTRIES - 1, 1 - (a - g) / (c[p + r.PREV_TIME] - g));
						l == e.setup ? (d.mix = d.data.mix + (f + (c[p + r.MIX] - f) * v - d.data.mix) * h, d.softness = d.data.softness + (m + (c[p + r.SOFTNESS] - m) * v - d.data.softness) * h, u == i.mixOut ? (d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, d.stretch = d.data.stretch) : (d.bendDirection = c[p + r.PREV_BEND_DIRECTION], d.compress = 0 != c[p + r.PREV_COMPRESS], d.stretch = 0 != c[p + r.PREV_STRETCH])) : (d.mix += (f + (c[p + r.MIX] - f) * v - d.mix) * h, d.softness += (m + (c[p + r.SOFTNESS] - m) * v - d.softness) * h, u == i.mixIn && (d.bendDirection = c[p + r.PREV_BEND_DIRECTION], d.compress = 0 != c[p + r.PREV_COMPRESS], d.stretch = 0 != c[p + r.PREV_STRETCH]))
					}
		}, r.ENTRIES = 6, r.PREV_TIME = -6, r.PREV_MIX = -5, r.PREV_SOFTNESS = -4, r.PREV_BEND_DIRECTION = -3, r.PREV_COMPRESS = -2, r.PREV_STRETCH = -1, r.MIX = 1, r.SOFTNESS = 2, r.BEND_DIRECTION = 3, r.COMPRESS = 4, r.STRETCH = 5, r
	}(h);
	t.IkConstraintTimeline = w;
	var x = function(n) {
		function i(e) {
			var r = n.call(this, e) || this;
			return r.frames = t.Utils.newFloatArray(e * i.ENTRIES), r
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.transformConstraint << 24) + this.transformConstraintIndex
		}, i.prototype.setFrame = function(t, e, n, r, a, s) {
			t *= i.ENTRIES, this.frames[t] = e, this.frames[t + i.ROTATE] = n, this.frames[t + i.TRANSLATE] = r, this.frames[t + i.SCALE] = a, this.frames[t + i.SHEAR] = s
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = this.frames,
				c = t.transformConstraints[this.transformConstraintIndex];
			if (c.active)
				if (r < u[0]) {
					var d = c.data;
					switch (h) {
						case e.setup:
							return c.rotateMix = d.rotateMix, c.translateMix = d.translateMix, c.scaleMix = d.scaleMix, void(c.shearMix = d.shearMix);
						case e.first:
							c.rotateMix += (d.rotateMix - c.rotateMix) * s, c.translateMix += (d.translateMix - c.translateMix) * s, c.scaleMix += (d.scaleMix - c.scaleMix) * s, c.shearMix += (d.shearMix - c.shearMix) * s
					}
				} else {
					var p = 0,
						f = 0,
						m = 0,
						g = 0;
					if (r >= u[u.length - i.ENTRIES]) {
						var v = u.length;
						p = u[v + i.PREV_ROTATE], f = u[v + i.PREV_TRANSLATE], m = u[v + i.PREV_SCALE], g = u[v + i.PREV_SHEAR]
					} else {
						var M = o.binarySearch(u, r, i.ENTRIES);
						p = u[M + i.PREV_ROTATE], f = u[M + i.PREV_TRANSLATE], m = u[M + i.PREV_SCALE], g = u[M + i.PREV_SHEAR];
						var y = u[M],
							w = this.getCurvePercent(M / i.ENTRIES - 1, 1 - (r - y) / (u[M + i.PREV_TIME] - y));
						p += (u[M + i.ROTATE] - p) * w, f += (u[M + i.TRANSLATE] - f) * w, m += (u[M + i.SCALE] - m) * w, g += (u[M + i.SHEAR] - g) * w
					}
					h == e.setup ? (d = c.data, c.rotateMix = d.rotateMix + (p - d.rotateMix) * s, c.translateMix = d.translateMix + (f - d.translateMix) * s, c.scaleMix = d.scaleMix + (m - d.scaleMix) * s, c.shearMix = d.shearMix + (g - d.shearMix) * s) : (c.rotateMix += (p - c.rotateMix) * s, c.translateMix += (f - c.translateMix) * s, c.scaleMix += (m - c.scaleMix) * s, c.shearMix += (g - c.shearMix) * s)
				}
		}, i.ENTRIES = 5, i.PREV_TIME = -5, i.PREV_ROTATE = -4, i.PREV_TRANSLATE = -3, i.PREV_SCALE = -2, i.PREV_SHEAR = -1, i.ROTATE = 1, i.TRANSLATE = 2, i.SCALE = 3, i.SHEAR = 4, i
	}(h);
	t.TransformConstraintTimeline = x;
	var b = function(n) {
		function i(e) {
			var r = n.call(this, e) || this;
			return r.frames = t.Utils.newFloatArray(e * i.ENTRIES), r
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.pathConstraintPosition << 24) + this.pathConstraintIndex
		}, i.prototype.setFrame = function(t, e, n) {
			t *= i.ENTRIES, this.frames[t] = e, this.frames[t + i.VALUE] = n
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = this.frames,
				c = t.pathConstraints[this.pathConstraintIndex];
			if (c.active)
				if (r < u[0]) switch (h) {
					case e.setup:
						return void(c.position = c.data.position);
					case e.first:
						c.position += (c.data.position - c.position) * s
				} else {
					var d = 0;
					if (r >= u[u.length - i.ENTRIES]) d = u[u.length + i.PREV_VALUE];
					else {
						var p = o.binarySearch(u, r, i.ENTRIES);
						d = u[p + i.PREV_VALUE];
						var f = u[p],
							m = this.getCurvePercent(p / i.ENTRIES - 1, 1 - (r - f) / (u[p + i.PREV_TIME] - f));
						d += (u[p + i.VALUE] - d) * m
					}
					h == e.setup ? c.position = c.data.position + (d - c.data.position) * s : c.position += (d - c.position) * s
				}
		}, i.ENTRIES = 2, i.PREV_TIME = -2, i.PREV_VALUE = -1, i.VALUE = 1, i
	}(h);
	t.PathConstraintPositionTimeline = b;
	var T = function(t) {
		function n(e) {
			return t.call(this, e) || this
		}
		return q(n, t), n.prototype.getPropertyId = function() {
			return (a.pathConstraintSpacing << 24) + this.pathConstraintIndex
		}, n.prototype.apply = function(t, i, r, a, s, h, l) {
			var u = this.frames,
				c = t.pathConstraints[this.pathConstraintIndex];
			if (c.active)
				if (r < u[0]) switch (h) {
					case e.setup:
						return void(c.spacing = c.data.spacing);
					case e.first:
						c.spacing += (c.data.spacing - c.spacing) * s
				} else {
					var d = 0;
					if (r >= u[u.length - n.ENTRIES]) d = u[u.length + n.PREV_VALUE];
					else {
						var p = o.binarySearch(u, r, n.ENTRIES);
						d = u[p + n.PREV_VALUE];
						var f = u[p],
							m = this.getCurvePercent(p / n.ENTRIES - 1, 1 - (r - f) / (u[p + n.PREV_TIME] - f));
						d += (u[p + n.VALUE] - d) * m
					}
					h == e.setup ? c.spacing = c.data.spacing + (d - c.data.spacing) * s : c.spacing += (d - c.spacing) * s
				}
		}, n
	}(b);
	t.PathConstraintSpacingTimeline = T;
	var A = function(n) {
		function i(e) {
			var r = n.call(this, e) || this;
			return r.frames = t.Utils.newFloatArray(e * i.ENTRIES), r
		}
		return q(i, n), i.prototype.getPropertyId = function() {
			return (a.pathConstraintMix << 24) + this.pathConstraintIndex
		}, i.prototype.setFrame = function(t, e, n, r) {
			t *= i.ENTRIES, this.frames[t] = e, this.frames[t + i.ROTATE] = n, this.frames[t + i.TRANSLATE] = r
		}, i.prototype.apply = function(t, n, r, a, s, h, l) {
			var u = this.frames,
				c = t.pathConstraints[this.pathConstraintIndex];
			if (c.active)
				if (r < u[0]) switch (h) {
					case e.setup:
						return c.rotateMix = c.data.rotateMix, void(c.translateMix = c.data.translateMix);
					case e.first:
						c.rotateMix += (c.data.rotateMix - c.rotateMix) * s, c.translateMix += (c.data.translateMix - c.translateMix) * s
				} else {
					var d = 0,
						p = 0;
					if (r >= u[u.length - i.ENTRIES]) d = u[u.length + i.PREV_ROTATE], p = u[u.length + i.PREV_TRANSLATE];
					else {
						var f = o.binarySearch(u, r, i.ENTRIES);
						d = u[f + i.PREV_ROTATE], p = u[f + i.PREV_TRANSLATE];
						var m = u[f],
							g = this.getCurvePercent(f / i.ENTRIES - 1, 1 - (r - m) / (u[f + i.PREV_TIME] - m));
						d += (u[f + i.ROTATE] - d) * g, p += (u[f + i.TRANSLATE] - p) * g
					}
					h == e.setup ? (c.rotateMix = c.data.rotateMix + (d - c.data.rotateMix) * s, c.translateMix = c.data.translateMix + (p - c.data.translateMix) * s) : (c.rotateMix += (d - c.rotateMix) * s, c.translateMix += (p - c.translateMix) * s)
				}
		}, i.ENTRIES = 3, i.PREV_TIME = -3, i.PREV_ROTATE = -2, i.PREV_TRANSLATE = -1, i.ROTATE = 1, i.TRANSLATE = 2, i
	}(h);
	t.PathConstraintMixTimeline = A
}(Q || (Q = {})),
function(t) {
	var e = function() {
		function e(e) {
			this.tracks = new Array, this.timeScale = 1, this.unkeyedState = 0, this.events = new Array, this.listeners = new Array, this.queue = new a(this), this.propertyIDs = new t.IntSet, this.animationsChanged = !1, this.trackEntryPool = new t.Pool((function() {
				return new n
			})), this.data = e
		}
		return e.prototype.update = function(t) {
			t *= this.timeScale;
			for (var e = this.tracks, n = 0, i = e.length; n < i; n++) {
				var r = e[n];
				if (null != r) {
					r.animationLast = r.nextAnimationLast, r.trackLast = r.nextTrackLast;
					var a = t * r.timeScale;
					if (r.delay > 0) {
						if (r.delay -= a, r.delay > 0) continue;
						a = -r.delay, r.delay = 0
					}
					var s = r.next;
					if (null != s) {
						var o = r.trackLast - s.delay;
						if (o >= 0) {
							for (s.delay = 0, s.trackTime += 0 == r.timeScale ? 0 : (o / r.timeScale + t) * s.timeScale, r.trackTime += a, this.setCurrent(n, s, !0); null != s.mixingFrom;) s.mixTime += t, s = s.mixingFrom;
							continue
						}
					} else if (r.trackLast >= r.trackEnd && null == r.mixingFrom) {
						e[n] = null, this.queue.end(r), this.disposeNext(r);
						continue
					}
					if (null != r.mixingFrom && this.updateMixingFrom(r, t)) {
						var h = r.mixingFrom;
						for (r.mixingFrom = null, null != h && (h.mixingTo = null); null != h;) this.queue.end(h), h = h.mixingFrom
					}
					r.trackTime += a
				}
			}
			this.queue.drain()
		}, e.prototype.updateMixingFrom = function(t, e) {
			var n = t.mixingFrom;
			if (null == n) return !0;
			var i = this.updateMixingFrom(n, e);
			return n.animationLast = n.nextAnimationLast, n.trackLast = n.nextTrackLast, t.mixTime > 0 && t.mixTime >= t.mixDuration ? (0 != n.totalAlpha && 0 != t.mixDuration || (t.mixingFrom = n.mixingFrom, null != n.mixingFrom && (n.mixingFrom.mixingTo = t), t.interruptAlpha = n.interruptAlpha, this.queue.end(n)), i) : (n.trackTime += e * n.timeScale, t.mixTime += e, !1)
		}, e.prototype.apply = function(n) {
			if (null == n) throw new Error("skeleton cannot be null.");
			this.animationsChanged && this._animationsChanged();
			for (var i = this.events, r = this.tracks, a = !1, s = 0, o = r.length; s < o; s++) {
				var h = r[s];
				if (!(null == h || h.delay > 0)) {
					a = !0;
					var l = 0 == s ? t.MixBlend.first : h.mixBlend,
						u = h.alpha;
					null != h.mixingFrom ? u *= this.applyMixingFrom(h, n, l) : h.trackTime >= h.trackEnd && null == h.next && (u = 0);
					var c = h.animationLast,
						d = h.getAnimationTime(),
						p = h.animation.timelines.length,
						f = h.animation.timelines;
					if (0 == s && 1 == u || l == t.MixBlend.add)
						for (var m = 0; m < p; m++) {
							t.Utils.webkit602BugfixHelper(u, l);
							var g = f[m];
							g instanceof t.AttachmentTimeline ? this.applyAttachmentTimeline(g, n, d, l, !0) : g.apply(n, c, d, i, u, l, t.MixDirection.mixIn)
						} else {
							var v = h.timelineMode,
								M = 0 == h.timelinesRotation.length;
							M && t.Utils.setArraySize(h.timelinesRotation, p << 1, null);
							var y = h.timelinesRotation;
							for (m = 0; m < p; m++) {
								var w = f[m],
									x = v[m] == e.SUBSEQUENT ? l : t.MixBlend.setup;
								w instanceof t.RotateTimeline ? this.applyRotateTimeline(w, n, d, u, x, y, m << 1, M) : w instanceof t.AttachmentTimeline ? this.applyAttachmentTimeline(w, n, d, l, !0) : (t.Utils.webkit602BugfixHelper(u, l), w.apply(n, c, d, i, u, x, t.MixDirection.mixIn))
							}
						}
					this.queueEvents(h, d), i.length = 0, h.nextAnimationLast = d, h.nextTrackLast = h.trackTime
				}
			}
			for (var b = this.unkeyedState + e.SETUP, T = n.slots, A = 0, E = n.slots.length; A < E; A++) {
				var R = T[A];
				if (R.attachmentState == b) {
					var S = R.data.attachmentName;
					R.attachment = null == S ? null : n.getAttachment(R.data.index, S)
				}
			}
			return this.unkeyedState += 2, this.queue.drain(), a
		}, e.prototype.applyMixingFrom = function(n, i, r) {
			var a = n.mixingFrom;
			null != a.mixingFrom && this.applyMixingFrom(a, i, r);
			var s = 0;
			0 == n.mixDuration ? (s = 1, r == t.MixBlend.first && (r = t.MixBlend.setup)) : ((s = n.mixTime / n.mixDuration) > 1 && (s = 1), r != t.MixBlend.first && (r = a.mixBlend));
			var o = s < a.eventThreshold ? this.events : null,
				h = s < a.attachmentThreshold,
				l = s < a.drawOrderThreshold,
				u = a.animationLast,
				c = a.getAnimationTime(),
				d = a.animation.timelines.length,
				p = a.animation.timelines,
				f = a.alpha * n.interruptAlpha,
				m = f * (1 - s);
			if (r == t.MixBlend.add)
				for (var g = 0; g < d; g++) p[g].apply(i, u, c, o, m, r, t.MixDirection.mixOut);
			else {
				var v = a.timelineMode,
					M = a.timelineHoldMix,
					y = 0 == a.timelinesRotation.length;
				y && t.Utils.setArraySize(a.timelinesRotation, d << 1, null);
				var w = a.timelinesRotation;
				for (a.totalAlpha = 0, g = 0; g < d; g++) {
					var x = p[g],
						b = t.MixDirection.mixOut,
						T = void 0,
						A = 0;
					switch (v[g]) {
						case e.SUBSEQUENT:
							if (!l && x instanceof t.DrawOrderTimeline) continue;
							T = r, A = m;
							break;
						case e.FIRST:
							T = t.MixBlend.setup, A = m;
							break;
						case e.HOLD:
							T = t.MixBlend.setup, A = f;
							break;
						default:
							T = t.MixBlend.setup;
							var E = M[g];
							A = f * Math.max(0, 1 - E.mixTime / E.mixDuration)
					}
					a.totalAlpha += A, x instanceof t.RotateTimeline ? this.applyRotateTimeline(x, i, c, A, T, w, g << 1, y) : x instanceof t.AttachmentTimeline ? this.applyAttachmentTimeline(x, i, c, T, h) : (t.Utils.webkit602BugfixHelper(A, r), l && x instanceof t.DrawOrderTimeline && T == t.MixBlend.setup && (b = t.MixDirection.mixIn), x.apply(i, u, c, o, A, T, b))
				}
			}
			return n.mixDuration > 0 && this.queueEvents(a, c), this.events.length = 0, a.nextAnimationLast = c, a.nextTrackLast = a.trackTime, s
		}, e.prototype.applyAttachmentTimeline = function(n, i, r, a, s) {
			var o = i.slots[n.slotIndex];
			if (o.bone.active) {
				var h, l = n.frames;
				r < l[0] ? a != t.MixBlend.setup && a != t.MixBlend.first || this.setAttachment(i, o, o.data.attachmentName, s) : (h = r >= l[l.length - 1] ? l.length - 1 : t.Animation.binarySearch(l, r) - 1, this.setAttachment(i, o, n.attachmentNames[h], s)), o.attachmentState <= this.unkeyedState && (o.attachmentState = this.unkeyedState + e.SETUP)
			}
		}, e.prototype.setAttachment = function(t, n, i, r) {
			n.attachment = null == i ? null : t.getAttachment(n.data.index, i), r && (n.attachmentState = this.unkeyedState + e.CURRENT)
		}, e.prototype.applyRotateTimeline = function(e, n, i, r, a, s, o, h) {
			if (h && (s[o] = 0), 1 != r) {
				var l = e,
					u = l.frames,
					c = n.bones[l.boneIndex];
				if (c.active) {
					var d = 0,
						p = 0;
					if (i < u[0]) switch (a) {
							case t.MixBlend.setup:
								c.rotation = c.data.rotation;
							default:
								return;
							case t.MixBlend.first:
								d = c.rotation, p = c.data.rotation
						} else if (d = a == t.MixBlend.setup ? c.data.rotation : c.rotation, i >= u[u.length - t.RotateTimeline.ENTRIES]) p = c.data.rotation + u[u.length + t.RotateTimeline.PREV_ROTATION];
						else {
							var f = t.Animation.binarySearch(u, i, t.RotateTimeline.ENTRIES),
								m = u[f + t.RotateTimeline.PREV_ROTATION],
								g = u[f],
								v = l.getCurvePercent((f >> 1) - 1, 1 - (i - g) / (u[f + t.RotateTimeline.PREV_TIME] - g));
							p = u[f + t.RotateTimeline.ROTATION] - m, p = m + (p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0))) * v + c.data.rotation, p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0))
						} var M = 0,
						y = p - d;
					if (0 == (y -= 360 * (16384 - (16384.499999999996 - y / 360 | 0)))) M = s[o];
					else {
						var w = 0,
							x = 0;
						h ? (w = 0, x = y) : (w = s[o], x = s[o + 1]);
						var b = y > 0,
							T = w >= 0;
						t.MathUtils.signum(x) != t.MathUtils.signum(y) && Math.abs(x) <= 90 && (Math.abs(w) > 180 && (w += 360 * t.MathUtils.signum(w)), T = b), M = y + w - w % 360, T != b && (M += 360 * t.MathUtils.signum(w)), s[o] = M
					}
					s[o + 1] = y, d += M * r, c.rotation = d - 360 * (16384 - (16384.499999999996 - d / 360 | 0))
				}
			} else e.apply(n, 0, i, null, 1, a, t.MixDirection.mixIn)
		}, e.prototype.queueEvents = function(t, e) {
			for (var n = t.animationStart, i = t.animationEnd, r = i - n, a = t.trackLast % r, s = this.events, o = 0, h = s.length; o < h; o++) {
				var l = s[o];
				if (l.time < a) break;
				l.time > i || this.queue.event(t, l)
			}
			for ((t.loop ? 0 == r || a > t.trackTime % r : e >= i && t.animationLast < i) && this.queue.complete(t); o < h; o++) s[o].time < n || this.queue.event(t, s[o])
		}, e.prototype.clearTracks = function() {
			var t = this.queue.drainDisabled;
			this.queue.drainDisabled = !0;
			for (var e = 0, n = this.tracks.length; e < n; e++) this.clearTrack(e);
			this.tracks.length = 0, this.queue.drainDisabled = t, this.queue.drain()
		}, e.prototype.clearTrack = function(t) {
			if (!(t >= this.tracks.length)) {
				var e = this.tracks[t];
				if (null != e) {
					this.queue.end(e), this.disposeNext(e);
					for (var n = e;;) {
						var i = n.mixingFrom;
						if (null == i) break;
						this.queue.end(i), n.mixingFrom = null, n.mixingTo = null, n = i
					}
					this.tracks[e.trackIndex] = null, this.queue.drain()
				}
			}
		}, e.prototype.setCurrent = function(t, e, n) {
			var i = this.expandToIndex(t);
			this.tracks[t] = e, null != i && (n && this.queue.interrupt(i), e.mixingFrom = i, i.mixingTo = e, e.mixTime = 0, null != i.mixingFrom && i.mixDuration > 0 && (e.interruptAlpha *= Math.min(1, i.mixTime / i.mixDuration)), i.timelinesRotation.length = 0), this.queue.start(e)
		}, e.prototype.setAnimation = function(t, e, n) {
			var i = this.data.skeletonData.findAnimation(e);
			if (null == i) throw new Error("Animation not found: " + e);
			return this.setAnimationWith(t, i, n)
		}, e.prototype.setAnimationWith = function(t, e, n) {
			if (null == e) throw new Error("animation cannot be null.");
			var i = !0,
				r = this.expandToIndex(t);
			null != r && (-1 == r.nextTrackLast ? (this.tracks[t] = r.mixingFrom, this.queue.interrupt(r), this.queue.end(r), this.disposeNext(r), r = r.mixingFrom, i = !1) : this.disposeNext(r));
			var a = this.trackEntry(t, e, n, r);
			return this.setCurrent(t, a, i), this.queue.drain(), a
		}, e.prototype.addAnimation = function(t, e, n, i) {
			var r = this.data.skeletonData.findAnimation(e);
			if (null == r) throw new Error("Animation not found: " + e);
			return this.addAnimationWith(t, r, n, i)
		}, e.prototype.addAnimationWith = function(t, e, n, i) {
			if (null == e) throw new Error("animation cannot be null.");
			var r = this.expandToIndex(t);
			if (null != r)
				for (; null != r.next;) r = r.next;
			var a = this.trackEntry(t, e, n, r);
			if (null == r) this.setCurrent(t, a, !0), this.queue.drain();
			else if (r.next = a, i <= 0) {
				var s = r.animationEnd - r.animationStart;
				0 != s ? (r.loop ? i += s * (1 + (r.trackTime / s | 0)) : i += Math.max(s, r.trackTime), i -= this.data.getMix(r.animation, e)) : i = r.trackTime
			}
			return a.delay = i, a
		}, e.prototype.setEmptyAnimation = function(t, n) {
			var i = this.setAnimationWith(t, e.emptyAnimation, !1);
			return i.mixDuration = n, i.trackEnd = n, i
		}, e.prototype.addEmptyAnimation = function(t, n, i) {
			i <= 0 && (i -= n);
			var r = this.addAnimationWith(t, e.emptyAnimation, !1, i);
			return r.mixDuration = n, r.trackEnd = n, r
		}, e.prototype.setEmptyAnimations = function(t) {
			var e = this.queue.drainDisabled;
			this.queue.drainDisabled = !0;
			for (var n = 0, i = this.tracks.length; n < i; n++) {
				var r = this.tracks[n];
				null != r && this.setEmptyAnimation(r.trackIndex, t)
			}
			this.queue.drainDisabled = e, this.queue.drain()
		}, e.prototype.expandToIndex = function(e) {
			return e < this.tracks.length ? this.tracks[e] : (t.Utils.ensureArrayCapacity(this.tracks, e + 1, null), this.tracks.length = e + 1, null)
		}, e.prototype.trackEntry = function(e, n, i, r) {
			var a = this.trackEntryPool.obtain();
			return a.trackIndex = e, a.animation = n, a.loop = i, a.holdPrevious = !1, a.eventThreshold = 0, a.attachmentThreshold = 0, a.drawOrderThreshold = 0, a.animationStart = 0, a.animationEnd = n.duration, a.animationLast = -1, a.nextAnimationLast = -1, a.delay = 0, a.trackTime = 0, a.trackLast = -1, a.nextTrackLast = -1, a.trackEnd = Number.MAX_VALUE, a.timeScale = 1, a.alpha = 1, a.interruptAlpha = 1, a.mixTime = 0, a.mixDuration = null == r ? 0 : this.data.getMix(r.animation, n), a.mixBlend = t.MixBlend.replace, a
		}, e.prototype.disposeNext = function(t) {
			for (var e = t.next; null != e;) this.queue.dispose(e), e = e.next;
			t.next = null
		}, e.prototype._animationsChanged = function() {
			this.animationsChanged = !1, this.propertyIDs.clear();
			for (var e = 0, n = this.tracks.length; e < n; e++) {
				var i = this.tracks[e];
				if (null != i) {
					for (; null != i.mixingFrom;) i = i.mixingFrom;
					do {
						null != i.mixingFrom && i.mixBlend == t.MixBlend.add || this.computeHold(i), i = i.mixingTo
					} while (null != i)
				}
			}
		}, e.prototype.computeHold = function(n) {
			var i = n.mixingTo,
				r = n.animation.timelines,
				a = n.animation.timelines.length,
				s = t.Utils.setArraySize(n.timelineMode, a);
			n.timelineHoldMix.length = 0;
			var o = t.Utils.setArraySize(n.timelineHoldMix, a),
				h = this.propertyIDs;
			if (null != i && i.holdPrevious)
				for (var l = 0; l < a; l++) h.add(r[l].getPropertyId()), s[l] = e.HOLD;
			else t: for (l = 0; l < a; l++) {
				var u = r[l],
					c = u.getPropertyId();
				if (h.add(c))
					if (null == i || u instanceof t.AttachmentTimeline || u instanceof t.DrawOrderTimeline || u instanceof t.EventTimeline || !i.animation.hasTimeline(c)) s[l] = e.FIRST;
					else {
						for (var d = i.mixingTo; null != d; d = d.mixingTo)
							if (!d.animation.hasTimeline(c)) {
								if (n.mixDuration > 0) {
									s[l] = e.HOLD_MIX, o[l] = d;
									continue t
								}
								break
							} s[l] = e.HOLD
					}
				else s[l] = e.SUBSEQUENT
			}
		}, e.prototype.getCurrent = function(t) {
			return t >= this.tracks.length ? null : this.tracks[t]
		}, e.prototype.addListener = function(t) {
			if (null == t) throw new Error("listener cannot be null.");
			this.listeners.push(t)
		}, e.prototype.removeListener = function(t) {
			var e = this.listeners.indexOf(t);
			e >= 0 && this.listeners.splice(e, 1)
		}, e.prototype.clearListeners = function() {
			this.listeners.length = 0
		}, e.prototype.clearListenerNotifications = function() {
			this.queue.clear()
		}, e.emptyAnimation = new t.Animation("<empty>", [], 0), e.SUBSEQUENT = 0, e.FIRST = 1, e.HOLD = 2, e.HOLD_MIX = 3, e.SETUP = 1, e.CURRENT = 2, e
	}();
	t.AnimationState = e;
	var n = function() {
		function e() {
			this.mixBlend = t.MixBlend.replace, this.timelineMode = new Array, this.timelineHoldMix = new Array, this.timelinesRotation = new Array
		}
		return e.prototype.reset = function() {
			this.next = null, this.mixingFrom = null, this.mixingTo = null, this.animation = null, this.listener = null, this.timelineMode.length = 0, this.timelineHoldMix.length = 0, this.timelinesRotation.length = 0
		}, e.prototype.getAnimationTime = function() {
			if (this.loop) {
				var t = this.animationEnd - this.animationStart;
				return 0 == t ? this.animationStart : this.trackTime % t + this.animationStart
			}
			return Math.min(this.trackTime + this.animationStart, this.animationEnd)
		}, e.prototype.setAnimationLast = function(t) {
			this.animationLast = t, this.nextAnimationLast = t
		}, e.prototype.isComplete = function() {
			return this.trackTime >= this.animationEnd - this.animationStart
		}, e.prototype.resetRotationDirections = function() {
			this.timelinesRotation.length = 0
		}, e
	}();
	t.TrackEntry = n;
	var i, r, a = function() {
		function t(t) {
			this.objects = [], this.drainDisabled = !1, this.animState = t
		}
		return t.prototype.start = function(t) {
			this.objects.push(i.start), this.objects.push(t), this.animState.animationsChanged = !0
		}, t.prototype.interrupt = function(t) {
			this.objects.push(i.interrupt), this.objects.push(t)
		}, t.prototype.end = function(t) {
			this.objects.push(i.end), this.objects.push(t), this.animState.animationsChanged = !0
		}, t.prototype.dispose = function(t) {
			this.objects.push(i.dispose), this.objects.push(t)
		}, t.prototype.complete = function(t) {
			this.objects.push(i.complete), this.objects.push(t)
		}, t.prototype.event = function(t, e) {
			this.objects.push(i.event), this.objects.push(t), this.objects.push(e)
		}, t.prototype.drain = function() {
			if (!this.drainDisabled) {
				this.drainDisabled = !0;
				for (var t = this.objects, e = this.animState.listeners, n = 0; n < t.length; n += 2) {
					var r = t[n],
						a = t[n + 1];
					switch (r) {
						case i.start:
							null != a.listener && a.listener.start && a.listener.start(a);
							for (var s = 0; s < e.length; s++) e[s].start && e[s].start(a);
							break;
						case i.interrupt:
							for (null != a.listener && a.listener.interrupt && a.listener.interrupt(a), s = 0; s < e.length; s++) e[s].interrupt && e[s].interrupt(a);
							break;
						case i.end:
							for (null != a.listener && a.listener.end && a.listener.end(a), s = 0; s < e.length; s++) e[s].end && e[s].end(a);
						case i.dispose:
							for (null != a.listener && a.listener.dispose && a.listener.dispose(a), s = 0; s < e.length; s++) e[s].dispose && e[s].dispose(a);
							this.animState.trackEntryPool.free(a);
							break;
						case i.complete:
							for (null != a.listener && a.listener.complete && a.listener.complete(a), s = 0; s < e.length; s++) e[s].complete && e[s].complete(a);
							break;
						case i.event:
							var o = t[2 + n++];
							for (null != a.listener && a.listener.event && a.listener.event(a, o), s = 0; s < e.length; s++) e[s].event && e[s].event(a, o)
					}
				}
				this.clear(), this.drainDisabled = !1
			}
		}, t.prototype.clear = function() {
			this.objects.length = 0
		}, t
	}();
	t.EventQueue = a, (r = i = t.EventType || (t.EventType = {}))[r.start = 0] = "start", r[r.interrupt = 1] = "interrupt", r[r.end = 2] = "end", r[r.dispose = 3] = "dispose", r[r.complete = 4] = "complete", r[r.event = 5] = "event";
	var s = function() {
		function t() {}
		return t.prototype.start = function(t) {}, t.prototype.interrupt = function(t) {}, t.prototype.end = function(t) {}, t.prototype.dispose = function(t) {}, t.prototype.complete = function(t) {}, t.prototype.event = function(t, e) {}, t
	}();
	t.AnimationStateAdapter = s
}(Q || (Q = {})), _ = Q || (Q = {}), Z = function() {
		function t(t) {
			if (this.animationToMixTime = {}, this.defaultMix = 0, null == t) throw new Error("skeletonData cannot be null.");
			this.skeletonData = t
		}
		return t.prototype.setMix = function(t, e, n) {
			var i = this.skeletonData.findAnimation(t);
			if (null == i) throw new Error("Animation not found: " + t);
			var r = this.skeletonData.findAnimation(e);
			if (null == r) throw new Error("Animation not found: " + e);
			this.setMixWith(i, r, n)
		}, t.prototype.setMixWith = function(t, e, n) {
			if (null == t) throw new Error("from cannot be null.");
			if (null == e) throw new Error("to cannot be null.");
			var i = t.name + "." + e.name;
			this.animationToMixTime[i] = n
		}, t.prototype.getMix = function(t, e) {
			var n = t.name + "." + e.name,
				i = this.animationToMixTime[n];
			return void 0 === i ? this.defaultMix : i
		}, t
	}(), _.AnimationStateData = Z,
	function(t) {
		var e = function() {
			function e(t, e) {
				void 0 === e && (e = ""), this.assets = {}, this.errors = {}, this.toLoad = 0, this.loaded = 0, this.rawDataUris = {}, this.textureLoader = t, this.pathPrefix = e
			}
			return e.prototype.downloadText = function(t, e, n) {
				var i = new XMLHttpRequest;
				i.overrideMimeType("text/html"), this.rawDataUris[t] && (t = this.rawDataUris[t]), i.open("GET", t, !0), i.onload = function() {
					200 == i.status ? e(i.responseText) : n(i.status, i.responseText)
				}, i.onerror = function() {
					n(i.status, i.responseText)
				}, i.send()
			}, e.prototype.downloadBinary = function(t, e, n) {
				var i = new XMLHttpRequest;
				this.rawDataUris[t] && (t = this.rawDataUris[t]), i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
					200 == i.status ? e(new Uint8Array(i.response)) : n(i.status, i.responseText)
				}, i.onerror = function() {
					n(i.status, i.responseText)
				}, i.send()
			}, e.prototype.setRawDataURI = function(t, e) {
				this.rawDataUris[this.pathPrefix + t] = e
			}, e.prototype.loadBinary = function(t, e, n) {
				var i = this;
				void 0 === e && (e = null), void 0 === n && (n = null), t = this.pathPrefix + t, this.toLoad++, this.downloadBinary(t, (function(n) {
					i.assets[t] = n, e && e(t, n), i.toLoad--, i.loaded++
				}), (function(e, r) {
					i.errors[t] = "Couldn't load binary " + t + ": status " + status + ", " + r, n && n(t, "Couldn't load binary " + t + ": status " + status + ", " + r), i.toLoad--, i.loaded++
				}))
			}, e.prototype.loadText = function(t, e, n) {
				var i = this;
				void 0 === e && (e = null), void 0 === n && (n = null), t = this.pathPrefix + t, this.toLoad++, this.downloadText(t, (function(n) {
					i.assets[t] = n, e && e(t, n), i.toLoad--, i.loaded++
				}), (function(e, r) {
					i.errors[t] = "Couldn't load text " + t + ": status " + status + ", " + r, n && n(t, "Couldn't load text " + t + ": status " + status + ", " + r), i.toLoad--, i.loaded++
				}))
			}, e.prototype.loadTexture = function(t, e, n) {
				var i = this;
				void 0 === e && (e = null), void 0 === n && (n = null);
				var r = t = this.pathPrefix + t;
				this.toLoad++;
				var a = new Image;
				a.crossOrigin = "anonymous", a.onload = function(n) {
					var s = i.textureLoader(a);
					i.assets[r] = s, i.toLoad--, i.loaded++, e && e(t, a)
				}, a.onerror = function(e) {
					i.errors[t] = "Couldn't load image " + t, i.toLoad--, i.loaded++, n && n(t, "Couldn't load image " + t)
				}, this.rawDataUris[t] && (t = this.rawDataUris[t]), a.src = t
			}, e.prototype.loadTextureAtlas = function(e, n, i) {
				var r = this;
				void 0 === n && (n = null), void 0 === i && (i = null);
				var a = e.lastIndexOf("/") >= 0 ? e.substring(0, e.lastIndexOf("/")) : "";
				e = this.pathPrefix + e, this.toLoad++, this.downloadText(e, (function(s) {
					var o = {
							count: 0
						},
						h = new Array;
					try {
						new t.TextureAtlas(s, (function(e) {
							h.push("" == a ? e : a + "/" + e);
							var n = document.createElement("img");
							return n.width = 16, n.height = 16, new t.FakeTexture(n)
						}))
					} catch (p) {
						var l = p;
						return r.errors[e] = "Couldn't load texture atlas " + e + ": " + l.message, i && i(e, "Couldn't load texture atlas " + e + ": " + l.message), r.toLoad--, void r.loaded++
					}
					for (var u = function(l) {
							var u = !1;
							r.loadTexture(l, (function(l, c) {
								if (o.count++, o.count == h.length)
									if (u) r.errors[e] = "Couldn't load texture atlas page " + l + "} of atlas " + e, i && i(e, "Couldn't load texture atlas page " + l + " of atlas " + e), r.toLoad--, r.loaded++;
									else try {
										var d = new t.TextureAtlas(s, (function(t) {
											return r.get("" == a ? t : a + "/" + t)
										}));
										r.assets[e] = d, n && n(e, d), r.toLoad--, r.loaded++
									} catch (p) {
										var f = p;
										r.errors[e] = "Couldn't load texture atlas " + e + ": " + f.message, i && i(e, "Couldn't load texture atlas " + e + ": " + f.message), r.toLoad--, r.loaded++
									}
							}), (function(t, n) {
								u = !0, o.count++, o.count == h.length && (r.errors[e] = "Couldn't load texture atlas page " + t + "} of atlas " + e, i && i(e, "Couldn't load texture atlas page " + t + " of atlas " + e), r.toLoad--, r.loaded++)
							}))
						}, c = 0, d = h; c < d.length; c++) u(d[c])
				}), (function(t, n) {
					r.errors[e] = "Couldn't load texture atlas " + e + ": status " + status + ", " + n, i && i(e, "Couldn't load texture atlas " + e + ": status " + status + ", " + n), r.toLoad--, r.loaded++
				}))
			}, e.prototype.get = function(t) {
				return t = this.pathPrefix + t, this.assets[t]
			}, e.prototype.remove = function(t) {
				t = this.pathPrefix + t;
				var e = this.assets[t];
				e.dispose && e.dispose(), this.assets[t] = null
			}, e.prototype.removeAll = function() {
				for (var t in this.assets) {
					var e = this.assets[t];
					e.dispose && e.dispose()
				}
				this.assets = {}
			}, e.prototype.isLoadingComplete = function() {
				return 0 == this.toLoad
			}, e.prototype.getToLoad = function() {
				return this.toLoad
			}, e.prototype.getLoaded = function() {
				return this.loaded
			}, e.prototype.dispose = function() {
				this.removeAll()
			}, e.prototype.hasErrors = function() {
				return Object.keys(this.errors).length > 0
			}, e.prototype.getErrors = function() {
				return this.errors
			}, e
		}();
		t.AssetManager = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t) {
				this.atlas = t
			}
			return e.prototype.newRegionAttachment = function(e, n, i) {
				var r = this.atlas.findRegion(i);
				if (null == r) throw new Error("Region not found in atlas: " + i + " (region attachment: " + n + ")");
				r.renderObject = r;
				var a = new t.RegionAttachment(n);
				return a.setRegion(r), a
			}, e.prototype.newMeshAttachment = function(e, n, i) {
				var r = this.atlas.findRegion(i);
				if (null == r) throw new Error("Region not found in atlas: " + i + " (mesh attachment: " + n + ")");
				r.renderObject = r;
				var a = new t.MeshAttachment(n);
				return a.region = r, a
			}, e.prototype.newBoundingBoxAttachment = function(e, n) {
				return new t.BoundingBoxAttachment(n)
			}, e.prototype.newPathAttachment = function(e, n) {
				return new t.PathAttachment(n)
			}, e.prototype.newPointAttachment = function(e, n) {
				return new t.PointAttachment(n)
			}, e.prototype.newClippingAttachment = function(e, n) {
				return new t.ClippingAttachment(n)
			}, e
		}();
		t.AtlasAttachmentLoader = e
	}(Q || (Q = {})),
	function(t) {
		var e;
		(e = t.BlendMode || (t.BlendMode = {}))[e.Normal = 0] = "Normal", e[e.Additive = 1] = "Additive", e[e.Multiply = 2] = "Multiply", e[e.Screen = 3] = "Screen"
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t, e, n) {
				if (this.children = new Array, this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 0, this.scaleY = 0, this.shearX = 0, this.shearY = 0, this.ax = 0, this.ay = 0, this.arotation = 0, this.ascaleX = 0, this.ascaleY = 0, this.ashearX = 0, this.ashearY = 0, this.appliedValid = !1, this.a = 0, this.b = 0, this.c = 0, this.d = 0, this.worldY = 0, this.worldX = 0, this.sorted = !1, this.active = !1, null == t) throw new Error("data cannot be null.");
				if (null == e) throw new Error("skeleton cannot be null.");
				this.data = t, this.skeleton = e, this.parent = n, this.setToSetupPose()
			}
			return e.prototype.isActive = function() {
				return this.active
			}, e.prototype.update = function() {
				this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
			}, e.prototype.updateWorldTransform = function() {
				this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
			}, e.prototype.updateWorldTransformWith = function(e, n, i, r, a, s, o) {
				this.ax = e, this.ay = n, this.arotation = i, this.ascaleX = r, this.ascaleY = a, this.ashearX = s, this.ashearY = o, this.appliedValid = !0;
				var h = this.parent;
				if (null == h) {
					var l = this.skeleton,
						u = i + 90 + o,
						c = l.scaleX,
						d = l.scaleY;
					return this.a = t.MathUtils.cosDeg(i + s) * r * c, this.b = t.MathUtils.cosDeg(u) * a * c, this.c = t.MathUtils.sinDeg(i + s) * r * d, this.d = t.MathUtils.sinDeg(u) * a * d, this.worldX = e * c + l.x, void(this.worldY = n * d + l.y)
				}
				var p = h.a,
					f = h.b,
					m = h.c,
					g = h.d;
				switch (this.worldX = p * e + f * n + h.worldX, this.worldY = m * e + g * n + h.worldY, this.data.transformMode) {
					case t.TransformMode.Normal:
						u = i + 90 + o;
						var v = t.MathUtils.cosDeg(i + s) * r,
							M = t.MathUtils.cosDeg(u) * a,
							y = t.MathUtils.sinDeg(i + s) * r,
							w = t.MathUtils.sinDeg(u) * a;
						return this.a = p * v + f * y, this.b = p * M + f * w, this.c = m * v + g * y, void(this.d = m * M + g * w);
					case t.TransformMode.OnlyTranslation:
						u = i + 90 + o, this.a = t.MathUtils.cosDeg(i + s) * r, this.b = t.MathUtils.cosDeg(u) * a, this.c = t.MathUtils.sinDeg(i + s) * r, this.d = t.MathUtils.sinDeg(u) * a;
						break;
					case t.TransformMode.NoRotationOrReflection:
						var x = 0;
						(A = p * p + m * m) > 1e-4 ? (f = m * (A = Math.abs(p * g - f * m) / A), g = p * A, x = Math.atan2(m, p) * t.MathUtils.radDeg) : (p = 0, m = 0, x = 90 - Math.atan2(g, f) * t.MathUtils.radDeg);
						var b = i + s - x,
							T = i + o - x + 90;
						return v = t.MathUtils.cosDeg(b) * r, M = t.MathUtils.cosDeg(T) * a, y = t.MathUtils.sinDeg(b) * r, w = t.MathUtils.sinDeg(T) * a, this.a = p * v - f * y, this.b = p * M - f * w, this.c = m * v + g * y, void(this.d = m * M + g * w);
					case t.TransformMode.NoScale:
					case t.TransformMode.NoScaleOrReflection:
						var A, E = t.MathUtils.cosDeg(i),
							R = t.MathUtils.sinDeg(i),
							S = (p * E + f * R) / this.skeleton.scaleX,
							I = (m * E + g * R) / this.skeleton.scaleY;
						(A = Math.sqrt(S * S + I * I)) > 1e-5 && (A = 1 / A), S *= A, I *= A, A = Math.sqrt(S * S + I * I), this.data.transformMode == t.TransformMode.NoScale && p * g - f * m < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0) && (A = -A);
						var C = Math.PI / 2 + Math.atan2(I, S),
							P = Math.cos(C) * A,
							k = Math.sin(C) * A;
						v = t.MathUtils.cosDeg(s) * r, M = t.MathUtils.cosDeg(90 + o) * a, y = t.MathUtils.sinDeg(s) * r, w = t.MathUtils.sinDeg(90 + o) * a, this.a = S * v + P * y, this.b = S * M + P * w, this.c = I * v + k * y, this.d = I * M + k * w
				}
				this.a *= this.skeleton.scaleX, this.b *= this.skeleton.scaleX, this.c *= this.skeleton.scaleY, this.d *= this.skeleton.scaleY
			}, e.prototype.setToSetupPose = function() {
				var t = this.data;
				this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.shearX = t.shearX, this.shearY = t.shearY
			}, e.prototype.getWorldRotationX = function() {
				return Math.atan2(this.c, this.a) * t.MathUtils.radDeg
			}, e.prototype.getWorldRotationY = function() {
				return Math.atan2(this.d, this.b) * t.MathUtils.radDeg
			}, e.prototype.getWorldScaleX = function() {
				return Math.sqrt(this.a * this.a + this.c * this.c)
			}, e.prototype.getWorldScaleY = function() {
				return Math.sqrt(this.b * this.b + this.d * this.d)
			}, e.prototype.updateAppliedTransform = function() {
				this.appliedValid = !0;
				var e = this.parent;
				if (null == e) return this.ax = this.worldX, this.ay = this.worldY, this.arotation = Math.atan2(this.c, this.a) * t.MathUtils.radDeg, this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c), this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d), this.ashearX = 0, void(this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * t.MathUtils.radDeg);
				var n = e.a,
					i = e.b,
					r = e.c,
					a = e.d,
					s = 1 / (n * a - i * r),
					o = this.worldX - e.worldX,
					h = this.worldY - e.worldY;
				this.ax = o * a * s - h * i * s, this.ay = h * n * s - o * r * s;
				var l = s * a,
					u = s * n,
					c = s * i,
					d = s * r,
					p = l * this.a - c * this.c,
					f = l * this.b - c * this.d,
					m = u * this.c - d * this.a,
					g = u * this.d - d * this.b;
				if (this.ashearX = 0, this.ascaleX = Math.sqrt(p * p + m * m), this.ascaleX > 1e-4) {
					var v = p * g - f * m;
					this.ascaleY = v / this.ascaleX, this.ashearY = Math.atan2(p * f + m * g, v) * t.MathUtils.radDeg, this.arotation = Math.atan2(m, p) * t.MathUtils.radDeg
				} else this.ascaleX = 0, this.ascaleY = Math.sqrt(f * f + g * g), this.ashearY = 0, this.arotation = 90 - Math.atan2(g, f) * t.MathUtils.radDeg
			}, e.prototype.worldToLocal = function(t) {
				var e = this.a,
					n = this.b,
					i = this.c,
					r = this.d,
					a = 1 / (e * r - n * i),
					s = t.x - this.worldX,
					o = t.y - this.worldY;
				return t.x = s * r * a - o * n * a, t.y = o * e * a - s * i * a, t
			}, e.prototype.localToWorld = function(t) {
				var e = t.x,
					n = t.y;
				return t.x = e * this.a + n * this.b + this.worldX, t.y = e * this.c + n * this.d + this.worldY, t
			}, e.prototype.worldToLocalRotation = function(e) {
				var n = t.MathUtils.sinDeg(e),
					i = t.MathUtils.cosDeg(e);
				return Math.atan2(this.a * n - this.c * i, this.d * i - this.b * n) * t.MathUtils.radDeg + this.rotation - this.shearX
			}, e.prototype.localToWorldRotation = function(e) {
				e -= this.rotation - this.shearX;
				var n = t.MathUtils.sinDeg(e),
					i = t.MathUtils.cosDeg(e);
				return Math.atan2(i * this.c + n * this.d, i * this.a + n * this.b) * t.MathUtils.radDeg
			}, e.prototype.rotateWorld = function(e) {
				var n = this.a,
					i = this.b,
					r = this.c,
					a = this.d,
					s = t.MathUtils.cosDeg(e),
					o = t.MathUtils.sinDeg(e);
				this.a = s * n - o * r, this.b = s * i - o * a, this.c = o * n + s * r, this.d = o * i + s * a, this.appliedValid = !1
			}, e
		}();
		t.Bone = e
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		t.BoneData = function(n, i, r) {
			if (this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.shearX = 0, this.shearY = 0, this.transformMode = e.Normal, this.skinRequired = !1, this.color = new t.Color, n < 0) throw new Error("index must be >= 0.");
			if (null == i) throw new Error("name cannot be null.");
			this.index = n, this.name = i, this.parent = r
		}, (n = e = t.TransformMode || (t.TransformMode = {}))[n.Normal = 0] = "Normal", n[n.OnlyTranslation = 1] = "OnlyTranslation", n[n.NoRotationOrReflection = 2] = "NoRotationOrReflection", n[n.NoScale = 3] = "NoScale", n[n.NoScaleOrReflection = 4] = "NoScaleOrReflection"
	}(Q || (Q = {})), z = function(t, e, n) {
		this.name = t, this.order = e, this.skinRequired = n
	}, (Q || (Q = {})).ConstraintData = z, j = function(t, e) {
		if (null == e) throw new Error("data cannot be null.");
		this.time = t, this.data = e
	}, (Q || (Q = {})).Event = j, H = function(t) {
		this.name = t
	}, (Q || (Q = {})).EventData = H,
	function(t) {
		var e = function() {
			function e(t, e) {
				if (this.bendDirection = 0, this.compress = !1, this.stretch = !1, this.mix = 1, this.softness = 0, this.active = !1, null == t) throw new Error("data cannot be null.");
				if (null == e) throw new Error("skeleton cannot be null.");
				this.data = t, this.mix = t.mix, this.softness = t.softness, this.bendDirection = t.bendDirection, this.compress = t.compress, this.stretch = t.stretch, this.bones = new Array;
				for (var n = 0; n < t.bones.length; n++) this.bones.push(e.findBone(t.bones[n].name));
				this.target = e.findBone(t.target.name)
			}
			return e.prototype.isActive = function() {
				return this.active
			}, e.prototype.apply = function() {
				this.update()
			}, e.prototype.update = function() {
				var t = this.target,
					e = this.bones;
				switch (e.length) {
					case 1:
						this.apply1(e[0], t.worldX, t.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
						break;
					case 2:
						this.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.stretch, this.softness, this.mix)
				}
			}, e.prototype.apply1 = function(e, n, i, r, a, s, o) {
				e.appliedValid || e.updateAppliedTransform();
				var h = e.parent,
					l = h.a,
					u = h.b,
					c = h.c,
					d = h.d,
					p = -e.ashearX - e.arotation,
					f = 0,
					m = 0;
				switch (e.data.transformMode) {
					case t.TransformMode.OnlyTranslation:
						f = n - e.worldX, m = i - e.worldY;
						break;
					case t.TransformMode.NoRotationOrReflection:
						p += Math.atan2(c, l) * t.MathUtils.radDeg;
						var g = Math.abs(l * d - u * c) / (l * l + c * c);
						u = -c * g, d = l * g;
					default:
						var v = n - h.worldX,
							M = i - h.worldY,
							y = l * d - u * c;
						f = (v * d - M * u) / y - e.ax, m = (M * l - v * c) / y - e.ay
				}
				p += Math.atan2(m, f) * t.MathUtils.radDeg, e.ascaleX < 0 && (p += 180), p > 180 ? p -= 360 : p < -180 && (p += 360);
				var w = e.ascaleX,
					x = e.ascaleY;
				if (r || a) {
					switch (e.data.transformMode) {
						case t.TransformMode.NoScale:
						case t.TransformMode.NoScaleOrReflection:
							f = n - e.worldX, m = i - e.worldY
					}
					var b = e.data.length * w,
						T = Math.sqrt(f * f + m * m);
					if (r && T < b || a && T > b && b > 1e-4) {
						var A = (T / b - 1) * o + 1;
						w *= A, s && (x *= A)
					}
				}
				e.updateWorldTransformWith(e.ax, e.ay, e.arotation + p * o, w, x, e.ashearX, e.ashearY)
			}, e.prototype.apply2 = function(e, n, i, r, a, s, o, h) {
				if (0 != h) {
					e.appliedValid || e.updateAppliedTransform(), n.appliedValid || n.updateAppliedTransform();
					var l = e.ax,
						u = e.ay,
						c = e.ascaleX,
						d = c,
						p = e.ascaleY,
						f = n.ascaleX,
						m = 0,
						g = 0,
						v = 0;
					c < 0 ? (c = -c, m = 180, v = -1) : (m = 0, v = 1), p < 0 && (p = -p, v = -v), f < 0 ? (f = -f, g = 180) : g = 0;
					var M = n.ax,
						y = 0,
						w = 0,
						x = 0,
						b = e.a,
						T = e.b,
						A = e.c,
						E = e.d,
						R = Math.abs(c - p) <= 1e-4;
					R ? (w = b * M + T * (y = n.ay) + e.worldX, x = A * M + E * y + e.worldY) : (y = 0, w = b * M + e.worldX, x = A * M + e.worldY);
					var S = e.parent;
					b = S.a, T = S.b, A = S.c;
					var I, C, P = 1 / (b * (E = S.d) - T * A),
						k = w - S.worldX,
						V = x - S.worldY,
						L = (k * E - V * T) * P - l,
						N = (V * b - k * A) * P - u,
						D = Math.sqrt(L * L + N * N),
						O = n.data.length * f;
					if (D < 1e-4) return this.apply1(e, i, r, !1, s, !1, h), void n.updateWorldTransformWith(M, y, 0, n.ascaleX, n.ascaleY, n.ashearX, n.ashearY);
					var F = ((k = i - S.worldX) * E - (V = r - S.worldY) * T) * P - l,
						Y = (V * b - k * A) * P - u,
						U = F * F + Y * Y;
					if (0 != o) {
						o *= c * (f + 1) / 2;
						var B = Math.sqrt(U),
							X = B - D - O * c + o;
						if (X > 0) {
							var W = Math.min(1, X / (2 * o)) - 1;
							U = (F -= (W = (X - o * (1 - W * W)) / B) * F) * F + (Y -= W * Y) * Y
						}
					}
					t: if (R) {
						var G = (U - D * D - (O *= c) * O) / (2 * D * O);
						G < -1 ? G = -1 : G > 1 && (G = 1, s && (d *= (Math.sqrt(U) / (D + O) - 1) * h + 1)), C = Math.acos(G) * a, b = D + O * G, T = O * Math.sin(C), I = Math.atan2(Y * b - F * T, F * b + Y * T)
					} else {
						var _ = (b = c * O) * b,
							Z = (T = p * O) * T,
							z = Math.atan2(Y, F),
							j = -2 * Z * D,
							H = Z - _;
						if ((E = j * j - 4 * H * (A = Z * D * D + _ * U - _ * Z)) >= 0) {
							var J = Math.sqrt(E);
							j < 0 && (J = -J);
							var Q = (J = -(j + J) / 2) / H,
								q = A / J,
								K = Math.abs(Q) < Math.abs(q) ? Q : q;
							if (K * K <= U) {
								V = Math.sqrt(U - K * K) * a, I = z - Math.atan2(V, K), C = Math.atan2(V / p, (K - D) / c);
								break t
							}
						}
						var $ = t.MathUtils.PI,
							tt = D - b,
							et = tt * tt,
							nt = 0,
							it = 0,
							rt = D + b,
							at = rt * rt,
							st = 0;
						(A = -b * D / (_ - Z)) >= -1 && A <= 1 && (A = Math.acos(A), (E = (k = b * Math.cos(A) + D) * k + (V = T * Math.sin(A)) * V) < et && ($ = A, et = E, tt = k, nt = V), E > at && (it = A, at = E, rt = k, st = V)), U <= (et + at) / 2 ? (I = z - Math.atan2(nt * a, tt), C = $ * a) : (I = z - Math.atan2(st * a, rt), C = it * a)
					}
					var ot = Math.atan2(y, M) * v,
						ht = e.arotation;
					(I = (I - ot) * t.MathUtils.radDeg + m - ht) > 180 ? I -= 360 : I < -180 && (I += 360), e.updateWorldTransformWith(l, u, ht + I * h, d, e.ascaleY, 0, 0), ht = n.arotation, (C = ((C + ot) * t.MathUtils.radDeg - n.ashearX) * v + g - ht) > 180 ? C -= 360 : C < -180 && (C += 360), n.updateWorldTransformWith(M, y, ht + C * h, n.ascaleX, n.ascaleY, n.ashearX, n.ashearY)
				} else n.updateWorldTransform()
			}, e
		}();
		t.IkConstraint = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, !1) || this;
				return n.bones = new Array, n.bendDirection = 1, n.compress = !1, n.stretch = !1, n.uniform = !1, n.mix = 1, n.softness = 0, n
			}
			return q(e, t), e
		}(t.ConstraintData);
		t.IkConstraintData = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t, e) {
				if (this.position = 0, this.spacing = 0, this.rotateMix = 0, this.translateMix = 0, this.spaces = new Array, this.positions = new Array, this.world = new Array, this.curves = new Array, this.lengths = new Array, this.segments = new Array, this.active = !1, null == t) throw new Error("data cannot be null.");
				if (null == e) throw new Error("skeleton cannot be null.");
				this.data = t, this.bones = new Array;
				for (var n = 0, i = t.bones.length; n < i; n++) this.bones.push(e.findBone(t.bones[n].name));
				this.target = e.findSlot(t.target.name), this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix
			}
			return e.prototype.isActive = function() {
				return this.active
			}, e.prototype.apply = function() {
				this.update()
			}, e.prototype.update = function() {
				var n = this.target.getAttachment();
				if (n instanceof t.PathAttachment) {
					var i = this.rotateMix,
						r = this.translateMix,
						a = i > 0;
					if (r > 0 || a) {
						var s = this.data,
							o = s.spacingMode == t.SpacingMode.Percent,
							h = s.rotateMode,
							l = h == t.RotateMode.Tangent,
							u = h == t.RotateMode.ChainScale,
							c = this.bones.length,
							d = l ? c : c + 1,
							p = this.bones,
							f = t.Utils.setArraySize(this.spaces, d),
							m = null,
							g = this.spacing;
						if (u || !o) {
							u && (m = t.Utils.setArraySize(this.lengths, c));
							for (var v = s.spacingMode == t.SpacingMode.Length, M = 0, y = d - 1; M < y;) {
								var w = (k = p[M]).data.length;
								if (w < e.epsilon) u && (m[M] = 0), f[++M] = 0;
								else if (o) {
									if (u) {
										var x = w * k.a,
											b = w * k.c,
											T = Math.sqrt(x * x + b * b);
										m[M] = T
									}
									f[++M] = g
								} else {
									x = w * k.a, b = w * k.c;
									var A = Math.sqrt(x * x + b * b);
									u && (m[M] = A), f[++M] = (v ? w + g : g) * A / w
								}
							}
						} else
							for (M = 1; M < d; M++) f[M] = g;
						var E = this.computeWorldPositions(n, d, l, s.positionMode == t.PositionMode.Percent, o),
							R = E[0],
							S = E[1],
							I = s.offsetRotation,
							C = !1;
						0 == I ? C = h == t.RotateMode.Chain : (C = !1, I *= (P = this.target.bone).a * P.d - P.b * P.c > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad), M = 0;
						for (var P = 3; M < c; M++, P += 3) {
							var k;
							(k = p[M]).worldX += (R - k.worldX) * r, k.worldY += (S - k.worldY) * r;
							var V = (x = E[P]) - R,
								L = (b = E[P + 1]) - S;
							if (u) {
								var N = m[M];
								if (0 != N) {
									var D = (Math.sqrt(V * V + L * L) / N - 1) * i + 1;
									k.a *= D, k.c *= D
								}
							}
							if (R = x, S = b, a) {
								var O = k.a,
									F = k.b,
									Y = k.c,
									U = k.d,
									B = 0,
									X = 0,
									W = 0;
								if (B = l ? E[P - 1] : 0 == f[M + 1] ? E[P + 2] : Math.atan2(L, V), B -= Math.atan2(Y, O), C) {
									X = Math.cos(B), W = Math.sin(B);
									var G = k.data.length;
									R += (G * (X * O - W * Y) - V) * i, S += (G * (W * O + X * Y) - L) * i
								} else B += I;
								B > t.MathUtils.PI ? B -= t.MathUtils.PI2 : B < -t.MathUtils.PI && (B += t.MathUtils.PI2), B *= i, X = Math.cos(B), W = Math.sin(B), k.a = X * O - W * Y, k.b = X * F - W * U, k.c = W * O + X * Y, k.d = W * F + X * U
							}
							k.appliedValid = !1
						}
					}
				}
			}, e.prototype.computeWorldPositions = function(n, i, r, a, s) {
				var o = this.target,
					h = this.position,
					l = this.spaces,
					u = t.Utils.setArraySize(this.positions, 3 * i + 2),
					c = null,
					d = n.closed,
					p = n.worldVerticesLength,
					f = p / 6,
					m = e.NONE;
				if (!n.constantSpeed) {
					var g = n.lengths,
						v = g[f -= d ? 1 : 2];
					if (a && (h *= v), s)
						for (var M = 1; M < i; M++) l[M] *= v;
					c = t.Utils.setArraySize(this.world, 8), M = 0;
					for (var y = 0, w = 0; M < i; M++, y += 3) {
						var x = h += Z = l[M];
						if (d)(x %= v) < 0 && (x += v), w = 0;
						else {
							if (x < 0) {
								m != e.BEFORE && (m = e.BEFORE, n.computeWorldVertices(o, 2, 4, c, 0, 2)), this.addBeforePosition(x, c, 0, u, y);
								continue
							}
							if (x > v) {
								m != e.AFTER && (m = e.AFTER, n.computeWorldVertices(o, p - 6, 4, c, 0, 2)), this.addAfterPosition(x - v, c, 0, u, y);
								continue
							}
						}
						for (;; w++) {
							var b = g[w];
							if (!(x > b)) {
								0 == w ? x /= b : x = (x - (J = g[w - 1])) / (b - J);
								break
							}
						}
						w != m && (m = w, d && w == f ? (n.computeWorldVertices(o, p - 4, 4, c, 0, 2), n.computeWorldVertices(o, 0, 4, c, 4, 2)) : n.computeWorldVertices(o, 6 * w + 2, 8, c, 0, 2)), this.addCurvePosition(x, c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], u, y, r || M > 0 && 0 == Z)
					}
					return u
				}
				d ? (p += 2, c = t.Utils.setArraySize(this.world, p), n.computeWorldVertices(o, 2, p - 4, c, 0, 2), n.computeWorldVertices(o, 0, 2, c, p - 4, 2), c[p - 2] = c[0], c[p - 1] = c[1]) : (f--, p -= 4, c = t.Utils.setArraySize(this.world, p), n.computeWorldVertices(o, 2, p, c, 0, 2));
				for (var T = t.Utils.setArraySize(this.curves, f), A = 0, E = c[0], R = c[1], S = 0, I = 0, C = 0, P = 0, k = 0, V = 0, L = 0, N = 0, D = 0, O = 0, F = 0, Y = 0, U = 0, B = 0, X = (M = 0, 2); M < f; M++, X += 6) S = c[X], I = c[X + 1], C = c[X + 2], P = c[X + 3], F = 2 * (L = .1875 * (E - 2 * S + C)) + (D = .09375 * (3 * (S - C) - E + (k = c[X + 4]))), Y = 2 * (N = .1875 * (R - 2 * I + P)) + (O = .09375 * (3 * (I - P) - R + (V = c[X + 5]))), U = .75 * (S - E) + L + .16666667 * D, B = .75 * (I - R) + N + .16666667 * O, A += Math.sqrt(U * U + B * B), U += F, B += Y, F += D, Y += O, A += Math.sqrt(U * U + B * B), U += F, B += Y, A += Math.sqrt(U * U + B * B), U += F + D, B += Y + O, A += Math.sqrt(U * U + B * B), T[M] = A, E = k, R = V;
				if (h *= a ? A : A / n.lengths[f - 1], s)
					for (M = 1; M < i; M++) l[M] *= A;
				for (var W = this.segments, G = 0, _ = (M = 0, y = 0, w = 0, 0); M < i; M++, y += 3) {
					var Z;
					if (x = h += Z = l[M], d)(x %= A) < 0 && (x += A), w = 0;
					else {
						if (x < 0) {
							this.addBeforePosition(x, c, 0, u, y);
							continue
						}
						if (x > A) {
							this.addAfterPosition(x - A, c, p - 4, u, y);
							continue
						}
					}
					for (;; w++) {
						var z = T[w];
						if (!(x > z)) {
							0 == w ? x /= z : x = (x - (J = T[w - 1])) / (z - J);
							break
						}
					}
					if (w != m) {
						m = w;
						var j = 6 * w;
						for (E = c[j], R = c[j + 1], S = c[j + 2], I = c[j + 3], C = c[j + 4], P = c[j + 5], F = 2 * (L = .03 * (E - 2 * S + C)) + (D = .006 * (3 * (S - C) - E + (k = c[j + 6]))), Y = 2 * (N = .03 * (R - 2 * I + P)) + (O = .006 * (3 * (I - P) - R + (V = c[j + 7]))), U = .3 * (S - E) + L + .16666667 * D, B = .3 * (I - R) + N + .16666667 * O, G = Math.sqrt(U * U + B * B), W[0] = G, j = 1; j < 8; j++) U += F, B += Y, F += D, Y += O, G += Math.sqrt(U * U + B * B), W[j] = G;
						U += F, B += Y, G += Math.sqrt(U * U + B * B), W[8] = G, U += F + D, B += Y + O, G += Math.sqrt(U * U + B * B), W[9] = G, _ = 0
					}
					for (x *= G;; _++) {
						var H = W[_];
						if (!(x > H)) {
							var J;
							0 == _ ? x /= H : x = _ + (x - (J = W[_ - 1])) / (H - J);
							break
						}
					}
					this.addCurvePosition(.1 * x, E, R, S, I, C, P, k, V, u, y, r || M > 0 && 0 == Z)
				}
				return u
			}, e.prototype.addBeforePosition = function(t, e, n, i, r) {
				var a = e[n],
					s = e[n + 1],
					o = e[n + 2] - a,
					h = e[n + 3] - s,
					l = Math.atan2(h, o);
				i[r] = a + t * Math.cos(l), i[r + 1] = s + t * Math.sin(l), i[r + 2] = l
			}, e.prototype.addAfterPosition = function(t, e, n, i, r) {
				var a = e[n + 2],
					s = e[n + 3],
					o = a - e[n],
					h = s - e[n + 1],
					l = Math.atan2(h, o);
				i[r] = a + t * Math.cos(l), i[r + 1] = s + t * Math.sin(l), i[r + 2] = l
			}, e.prototype.addCurvePosition = function(t, e, n, i, r, a, s, o, h, l, u, c) {
				if (0 == t || isNaN(t)) return l[u] = e, l[u + 1] = n, void(l[u + 2] = Math.atan2(r - n, i - e));
				var d = t * t,
					p = d * t,
					f = 1 - t,
					m = f * f,
					g = m * f,
					v = f * t,
					M = 3 * v,
					y = f * M,
					w = M * t,
					x = e * g + i * y + a * w + o * p,
					b = n * g + r * y + s * w + h * p;
				l[u] = x, l[u + 1] = b, c && (l[u + 2] = t < .001 ? Math.atan2(r - n, i - e) : Math.atan2(b - (n * m + r * v * 2 + s * d), x - (e * m + i * v * 2 + a * d)))
			}, e.NONE = -1, e.BEFORE = -2, e.AFTER = -3, e.epsilon = 1e-5, e
		}();
		t.PathConstraint = e
	}(Q || (Q = {})),
	function(t) {
		var e, n, i, r = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, !1) || this;
				return n.bones = new Array, n
			}
			return q(e, t), e
		}(t.ConstraintData);
		t.PathConstraintData = r, (e = t.PositionMode || (t.PositionMode = {}))[e.Fixed = 0] = "Fixed", e[e.Percent = 1] = "Percent", (n = t.SpacingMode || (t.SpacingMode = {}))[n.Length = 0] = "Length", n[n.Fixed = 1] = "Fixed", n[n.Percent = 2] = "Percent", (i = t.RotateMode || (t.RotateMode = {}))[i.Tangent = 0] = "Tangent", i[i.Chain = 1] = "Chain", i[i.ChainScale = 2] = "ChainScale"
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
				function t(t) {
					this.toLoad = new Array, this.assets = {}, this.clientId = t
				}
				return t.prototype.loaded = function() {
					var t = 0;
					for (var e in this.assets) t++;
					return t
				}, t
			}(),
			n = function() {
				function t(t) {
					void 0 === t && (t = ""), this.clientAssets = {}, this.queuedAssets = {}, this.rawAssets = {}, this.errors = {}, this.pathPrefix = t
				}
				return t.prototype.queueAsset = function(t, n, i) {
					var r = this.clientAssets[t];
					return null == r && (r = new e(t), this.clientAssets[t] = r), null !== n && (r.textureLoader = n), r.toLoad.push(i), this.queuedAssets[i] !== i && (this.queuedAssets[i] = i, !0)
				}, t.prototype.loadText = function(t, e) {
					var n = this;
					if (e = this.pathPrefix + e, this.queueAsset(t, null, e)) {
						var i = new XMLHttpRequest;
						i.overrideMimeType("text/html"), i.onreadystatechange = function() {
							i.readyState == XMLHttpRequest.DONE && (i.status >= 200 && i.status < 300 ? n.rawAssets[e] = i.responseText : n.errors[e] = "Couldn't load text " + e + ": status " + i.status + ", " + i.responseText)
						}, i.open("GET", e, !0), i.send()
					}
				}, t.prototype.loadJson = function(t, e) {
					var n = this;
					if (e = this.pathPrefix + e, this.queueAsset(t, null, e)) {
						var i = new XMLHttpRequest;
						i.overrideMimeType("text/html"), i.onreadystatechange = function() {
							i.readyState == XMLHttpRequest.DONE && (i.status >= 200 && i.status < 300 ? n.rawAssets[e] = JSON.parse(i.responseText) : n.errors[e] = "Couldn't load text " + e + ": status " + i.status + ", " + i.responseText)
						}, i.open("GET", e, !0), i.send()
					}
				}, t.prototype.loadTexture = function(t, e, n) {
					var i = this;
					if (n = this.pathPrefix + n, this.queueAsset(t, e, n)) {
						var r = new Image;
						r.crossOrigin = "anonymous", r.onload = function(t) {
							i.rawAssets[n] = r
						}, r.onerror = function(t) {
							i.errors[n] = "Couldn't load image " + n
						}, r.src = n
					}
				}, t.prototype.get = function(t, e) {
					e = this.pathPrefix + e;
					var n = this.clientAssets[t];
					return null == n || n.assets[e]
				}, t.prototype.updateClientAssets = function(t) {
					for (var e = 0; e < t.toLoad.length; e++) {
						var n = t.toLoad[e];
						if (null == t.assets[n]) {
							var i = this.rawAssets[n];
							if (null == i) continue;
							i instanceof HTMLImageElement ? t.assets[n] = t.textureLoader(i) : t.assets[n] = i
						}
					}
				}, t.prototype.isLoadingComplete = function(t) {
					var e = this.clientAssets[t];
					return null == e || (this.updateClientAssets(e), e.toLoad.length == e.loaded())
				}, t.prototype.dispose = function() {}, t.prototype.hasErrors = function() {
					return Object.keys(this.errors).length > 0
				}, t.prototype.getErrors = function() {
					return this.errors
				}, t
			}();
		t.SharedAssetManager = n
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(e) {
				if (this._updateCache = new Array, this.updateCacheReset = new Array, this.time = 0, this.scaleX = 1, this.scaleY = 1, this.x = 0, this.y = 0, null == e) throw new Error("data cannot be null.");
				this.data = e, this.bones = new Array;
				for (var n = 0; n < e.bones.length; n++) {
					var i = e.bones[n],
						r = void 0;
					if (null == i.parent) r = new t.Bone(i, this, null);
					else {
						var a = this.bones[i.parent.index];
						r = new t.Bone(i, this, a), a.children.push(r)
					}
					this.bones.push(r)
				}
				for (this.slots = new Array, this.drawOrder = new Array, n = 0; n < e.slots.length; n++) {
					var s = e.slots[n],
						o = (r = this.bones[s.boneData.index], new t.Slot(s, r));
					this.slots.push(o), this.drawOrder.push(o)
				}
				for (this.ikConstraints = new Array, n = 0; n < e.ikConstraints.length; n++) {
					var h = e.ikConstraints[n];
					this.ikConstraints.push(new t.IkConstraint(h, this))
				}
				for (this.transformConstraints = new Array, n = 0; n < e.transformConstraints.length; n++) {
					var l = e.transformConstraints[n];
					this.transformConstraints.push(new t.TransformConstraint(l, this))
				}
				for (this.pathConstraints = new Array, n = 0; n < e.pathConstraints.length; n++) {
					var u = e.pathConstraints[n];
					this.pathConstraints.push(new t.PathConstraint(u, this))
				}
				this.color = new t.Color(1, 1, 1, 1), this.updateCache()
			}
			return e.prototype.updateCache = function() {
				this._updateCache.length = 0, this.updateCacheReset.length = 0;
				for (var t = this.bones, e = 0, n = t.length; e < n; e++)(r = t[e]).sorted = r.data.skinRequired, r.active = !r.sorted;
				if (null != this.skin) {
					var i = this.skin.bones;
					for (e = 0, n = this.skin.bones.length; e < n; e++) {
						var r = this.bones[i[e].index];
						do {
							r.sorted = !1, r.active = !0, r = r.parent
						} while (null != r)
					}
				}
				var a = this.ikConstraints,
					s = this.transformConstraints,
					o = this.pathConstraints,
					h = a.length,
					l = s.length,
					u = o.length,
					c = h + l + u;
				t: for (e = 0; e < c; e++) {
					for (var d = 0; d < h; d++)
						if ((p = a[d]).data.order == e) {
							this.sortIkConstraint(p);
							continue t
						} for (d = 0; d < l; d++)
						if ((p = s[d]).data.order == e) {
							this.sortTransformConstraint(p);
							continue t
						} for (d = 0; d < u; d++) {
						var p;
						if ((p = o[d]).data.order == e) {
							this.sortPathConstraint(p);
							continue t
						}
					}
				}
				for (e = 0, n = t.length; e < n; e++) this.sortBone(t[e])
			}, e.prototype.sortIkConstraint = function(e) {
				if (e.active = e.target.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
					var n = e.target;
					this.sortBone(n);
					var i = e.bones,
						r = i[0];
					if (this.sortBone(r), i.length > 1) {
						var a = i[i.length - 1];
						this._updateCache.indexOf(a) > -1 || this.updateCacheReset.push(a)
					}
					this._updateCache.push(e), this.sortReset(r.children), i[i.length - 1].sorted = !0
				}
			}, e.prototype.sortPathConstraint = function(e) {
				if (e.active = e.target.bone.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
					var n = e.target,
						i = n.data.index,
						r = n.bone;
					null != this.skin && this.sortPathConstraintAttachment(this.skin, i, r), null != this.data.defaultSkin && this.data.defaultSkin != this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, i, r);
					for (var a = 0, s = this.data.skins.length; a < s; a++) this.sortPathConstraintAttachment(this.data.skins[a], i, r);
					var o = n.getAttachment();
					o instanceof t.PathAttachment && this.sortPathConstraintAttachmentWith(o, r);
					var h = e.bones,
						l = h.length;
					for (a = 0; a < l; a++) this.sortBone(h[a]);
					for (this._updateCache.push(e), a = 0; a < l; a++) this.sortReset(h[a].children);
					for (a = 0; a < l; a++) h[a].sorted = !0
				}
			}, e.prototype.sortTransformConstraint = function(e) {
				if (e.active = e.target.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
					this.sortBone(e.target);
					var n = e.bones,
						i = n.length;
					if (e.data.local)
						for (var r = 0; r < i; r++) {
							var a = n[r];
							this.sortBone(a.parent), this._updateCache.indexOf(a) > -1 || this.updateCacheReset.push(a)
						} else
							for (r = 0; r < i; r++) this.sortBone(n[r]);
					this._updateCache.push(e);
					for (var s = 0; s < i; s++) this.sortReset(n[s].children);
					for (s = 0; s < i; s++) n[s].sorted = !0
				}
			}, e.prototype.sortPathConstraintAttachment = function(t, e, n) {
				var i = t.attachments[e];
				if (i)
					for (var r in i) this.sortPathConstraintAttachmentWith(i[r], n)
			}, e.prototype.sortPathConstraintAttachmentWith = function(e, n) {
				if (e instanceof t.PathAttachment) {
					var i = e.bones;
					if (null == i) this.sortBone(n);
					else
						for (var r = this.bones, a = 0; a < i.length;)
							for (var s = i[a++], o = a + s; a < o; a++) {
								var h = i[a];
								this.sortBone(r[h])
							}
				}
			}, e.prototype.sortBone = function(t) {
				if (!t.sorted) {
					var e = t.parent;
					null != e && this.sortBone(e), t.sorted = !0, this._updateCache.push(t)
				}
			}, e.prototype.sortReset = function(t) {
				for (var e = 0, n = t.length; e < n; e++) {
					var i = t[e];
					i.active && (i.sorted && this.sortReset(i.children), i.sorted = !1)
				}
			}, e.prototype.updateWorldTransform = function() {
				for (var t = this.updateCacheReset, e = 0, n = t.length; e < n; e++) {
					var i = t[e];
					i.ax = i.x, i.ay = i.y, i.arotation = i.rotation, i.ascaleX = i.scaleX, i.ascaleY = i.scaleY, i.ashearX = i.shearX, i.ashearY = i.shearY, i.appliedValid = !0
				}
				var r = this._updateCache;
				for (e = 0, n = r.length; e < n; e++) r[e].update()
			}, e.prototype.setToSetupPose = function() {
				this.setBonesToSetupPose(), this.setSlotsToSetupPose()
			}, e.prototype.setBonesToSetupPose = function() {
				for (var t = this.bones, e = 0, n = t.length; e < n; e++) t[e].setToSetupPose();
				var i = this.ikConstraints;
				for (e = 0, n = i.length; e < n; e++)(o = i[e]).mix = o.data.mix, o.softness = o.data.softness, o.bendDirection = o.data.bendDirection, o.compress = o.data.compress, o.stretch = o.data.stretch;
				var r = this.transformConstraints;
				for (e = 0, n = r.length; e < n; e++) {
					var a = (o = r[e]).data;
					o.rotateMix = a.rotateMix, o.translateMix = a.translateMix, o.scaleMix = a.scaleMix, o.shearMix = a.shearMix
				}
				var s = this.pathConstraints;
				for (e = 0, n = s.length; e < n; e++) {
					var o;
					a = (o = s[e]).data, o.position = a.position, o.spacing = a.spacing, o.rotateMix = a.rotateMix, o.translateMix = a.translateMix
				}
			}, e.prototype.setSlotsToSetupPose = function() {
				var e = this.slots;
				t.Utils.arrayCopy(e, 0, this.drawOrder, 0, e.length);
				for (var n = 0, i = e.length; n < i; n++) e[n].setToSetupPose()
			}, e.prototype.getRootBone = function() {
				return 0 == this.bones.length ? null : this.bones[0]
			}, e.prototype.findBone = function(t) {
				if (null == t) throw new Error("boneName cannot be null.");
				for (var e = this.bones, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.data.name == t) return r
				}
				return null
			}, e.prototype.findBoneIndex = function(t) {
				if (null == t) throw new Error("boneName cannot be null.");
				for (var e = this.bones, n = 0, i = e.length; n < i; n++)
					if (e[n].data.name == t) return n;
				return -1
			}, e.prototype.findSlot = function(t) {
				if (null == t) throw new Error("slotName cannot be null.");
				for (var e = this.slots, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.data.name == t) return r
				}
				return null
			}, e.prototype.findSlotIndex = function(t) {
				if (null == t) throw new Error("slotName cannot be null.");
				for (var e = this.slots, n = 0, i = e.length; n < i; n++)
					if (e[n].data.name == t) return n;
				return -1
			}, e.prototype.setSkinByName = function(t) {
				var e = this.data.findSkin(t);
				if (null == e) throw new Error("Skin not found: " + t);
				this.setSkin(e)
			}, e.prototype.setSkin = function(t) {
				if (t != this.skin) {
					if (null != t)
						if (null != this.skin) t.attachAll(this, this.skin);
						else
							for (var e = this.slots, n = 0, i = e.length; n < i; n++) {
								var r = e[n],
									a = r.data.attachmentName;
								if (null != a) {
									var s = t.getAttachment(n, a);
									null != s && r.setAttachment(s)
								}
							}
					this.skin = t, this.updateCache()
				}
			}, e.prototype.getAttachmentByName = function(t, e) {
				return this.getAttachment(this.data.findSlotIndex(t), e)
			}, e.prototype.getAttachment = function(t, e) {
				if (null == e) throw new Error("attachmentName cannot be null.");
				if (null != this.skin) {
					var n = this.skin.getAttachment(t, e);
					if (null != n) return n
				}
				return null != this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
			}, e.prototype.setAttachment = function(t, e) {
				if (null == t) throw new Error("slotName cannot be null.");
				for (var n = this.slots, i = 0, r = n.length; i < r; i++) {
					var a = n[i];
					if (a.data.name == t) {
						var s = null;
						if (null != e && null == (s = this.getAttachment(i, e))) throw new Error("Attachment not found: " + e + ", for slot: " + t);
						return void a.setAttachment(s)
					}
				}
				throw new Error("Slot not found: " + t)
			}, e.prototype.findIkConstraint = function(t) {
				if (null == t) throw new Error("constraintName cannot be null.");
				for (var e = this.ikConstraints, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.data.name == t) return r
				}
				return null
			}, e.prototype.findTransformConstraint = function(t) {
				if (null == t) throw new Error("constraintName cannot be null.");
				for (var e = this.transformConstraints, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.data.name == t) return r
				}
				return null
			}, e.prototype.findPathConstraint = function(t) {
				if (null == t) throw new Error("constraintName cannot be null.");
				for (var e = this.pathConstraints, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.data.name == t) return r
				}
				return null
			}, e.prototype.getBounds = function(e, n, i) {
				if (void 0 === i && (i = new Array(2)), null == e) throw new Error("offset cannot be null.");
				if (null == n) throw new Error("size cannot be null.");
				for (var r = this.drawOrder, a = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, h = Number.NEGATIVE_INFINITY, l = 0, u = r.length; l < u; l++) {
					var c = r[l];
					if (c.bone.active) {
						var d = 0,
							p = null,
							f = c.getAttachment();
						if (f instanceof t.RegionAttachment) d = 8, p = t.Utils.setArraySize(i, d, 0), f.computeWorldVertices(c.bone, p, 0, 2);
						else if (f instanceof t.MeshAttachment) {
							var m = f;
							d = m.worldVerticesLength, p = t.Utils.setArraySize(i, d, 0), m.computeWorldVertices(c, 0, d, p, 0, 2)
						}
						if (null != p)
							for (var g = 0, v = p.length; g < v; g += 2) {
								var M = p[g],
									y = p[g + 1];
								a = Math.min(a, M), s = Math.min(s, y), o = Math.max(o, M), h = Math.max(h, y)
							}
					}
				}
				e.set(a, s), n.set(o - a, h - s)
			}, e.prototype.update = function(t) {
				this.time += t
			}, e
		}();
		t.Skeleton = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t) {
				this.scale = 2, this.linkedMeshes = new Array, this.attachmentLoader = t
			}
			return e.prototype.readSkeletonData = function(i) {
				var r = this.scale,
					a = new t.SkeletonData;
				a.name = "";
				var s = new n(i);
				if (a.hash = s.readString(), a.version = s.readString(), "3.8.00" == a.version) throw new Error("Unsupported skeleton data, please export with a newer version of Spine.");
				a.x = s.readFloat(), a.y = s.readFloat(), a.width = s.readFloat(), a.height = s.readFloat();
				var o = s.readBoolean();
				o && (a.fps = s.readFloat(), a.imagesPath = s.readString(), a.audioPath = s.readString());
				var h = 0;
				h = s.readInt(!0);
				for (var l = 0; l < h; l++) s.strings.push(s.readString());
				for (h = s.readInt(!0), l = 0; l < h; l++) {
					var u = s.readString(),
						c = 0 == l ? null : a.bones[s.readInt(!0)];
					(f = new t.BoneData(l, u, c)).rotation = s.readFloat(), f.x = s.readFloat() * r, f.y = s.readFloat() * r, f.scaleX = s.readFloat(), f.scaleY = s.readFloat(), f.shearX = s.readFloat(), f.shearY = s.readFloat(), f.length = s.readFloat() * r, f.transformMode = e.TransformModeValues[s.readInt(!0)], f.skinRequired = s.readBoolean(), o && t.Color.rgba8888ToColor(f.color, s.readInt32()), a.bones.push(f)
				}
				for (h = s.readInt(!0), l = 0; l < h; l++) {
					var d = s.readString(),
						p = a.bones[s.readInt(!0)],
						f = new t.SlotData(l, d, p);
					t.Color.rgba8888ToColor(f.color, s.readInt32());
					var m = s.readInt32(); - 1 != m && t.Color.rgb888ToColor(f.darkColor = new t.Color, m), f.attachmentName = s.readStringRef(), f.blendMode = e.BlendModeValues[s.readInt(!0)], a.slots.push(f)
				}
				h = s.readInt(!0), l = 0;
				for (var g = void 0; l < h; l++) {
					(f = new t.IkConstraintData(s.readString())).order = s.readInt(!0), f.skinRequired = s.readBoolean(), g = s.readInt(!0);
					for (var v = 0; v < g; v++) f.bones.push(a.bones[s.readInt(!0)]);
					f.target = a.bones[s.readInt(!0)], f.mix = s.readFloat(), f.softness = s.readFloat() * r, f.bendDirection = s.readByte(), f.compress = s.readBoolean(), f.stretch = s.readBoolean(), f.uniform = s.readBoolean(), a.ikConstraints.push(f)
				}
				for (h = s.readInt(!0), l = 0, g = void 0; l < h; l++) {
					for ((f = new t.TransformConstraintData(s.readString())).order = s.readInt(!0), f.skinRequired = s.readBoolean(), g = s.readInt(!0), v = 0; v < g; v++) f.bones.push(a.bones[s.readInt(!0)]);
					f.target = a.bones[s.readInt(!0)], f.local = s.readBoolean(), f.relative = s.readBoolean(), f.offsetRotation = s.readFloat(), f.offsetX = s.readFloat() * r, f.offsetY = s.readFloat() * r, f.offsetScaleX = s.readFloat(), f.offsetScaleY = s.readFloat(), f.offsetShearY = s.readFloat(), f.rotateMix = s.readFloat(), f.translateMix = s.readFloat(), f.scaleMix = s.readFloat(), f.shearMix = s.readFloat(), a.transformConstraints.push(f)
				}
				for (h = s.readInt(!0), l = 0, g = void 0; l < h; l++) {
					for ((f = new t.PathConstraintData(s.readString())).order = s.readInt(!0), f.skinRequired = s.readBoolean(), g = s.readInt(!0), v = 0; v < g; v++) f.bones.push(a.bones[s.readInt(!0)]);
					f.target = a.slots[s.readInt(!0)], f.positionMode = e.PositionModeValues[s.readInt(!0)], f.spacingMode = e.SpacingModeValues[s.readInt(!0)], f.rotateMode = e.RotateModeValues[s.readInt(!0)], f.offsetRotation = s.readFloat(), f.position = s.readFloat(), f.positionMode == t.PositionMode.Fixed && (f.position *= r), f.spacing = s.readFloat(), f.spacingMode != t.SpacingMode.Length && f.spacingMode != t.SpacingMode.Fixed || (f.spacing *= r), f.rotateMix = s.readFloat(), f.translateMix = s.readFloat(), a.pathConstraints.push(f)
				}
				var M = this.readSkin(s, a, !0, o);
				for (null != M && (a.defaultSkin = M, a.skins.push(M)), l = a.skins.length, t.Utils.setArraySize(a.skins, h = l + s.readInt(!0)); l < h; l++) a.skins[l] = this.readSkin(s, a, !1, o);
				for (h = this.linkedMeshes.length, l = 0; l < h; l++) {
					var y = this.linkedMeshes[l],
						w = null == y.skin ? a.defaultSkin : a.findSkin(y.skin);
					if (null == w) throw new Error("Skin not found: " + y.skin);
					var x = w.getAttachment(y.slotIndex, y.parent);
					if (null == x) throw new Error("Parent mesh not found: " + y.parent);
					y.mesh.deformAttachment = y.inheritDeform ? x : y.mesh, y.mesh.setParentMesh(x), y.mesh.updateUVs()
				}
				for (this.linkedMeshes.length = 0, h = s.readInt(!0), l = 0; l < h; l++)(f = new t.EventData(s.readStringRef())).intValue = s.readInt(!1), f.floatValue = s.readFloat(), f.stringValue = s.readString(), f.audioPath = s.readString(), null != f.audioPath && (f.volume = s.readFloat(), f.balance = s.readFloat()), a.events.push(f);
				for (h = s.readInt(!0), l = 0; l < h; l++) a.animations.push(this.readAnimation(s, s.readString(), a));
				return a
			}, e.prototype.readSkin = function(e, n, i, r) {
				var a = null,
					s = 0;
				if (i) {
					if (0 == (s = e.readInt(!0))) return null;
					a = new t.Skin("default")
				} else {
					(a = new t.Skin(e.readStringRef())).bones.length = e.readInt(!0);
					for (var o = 0, h = a.bones.length; o < h; o++) a.bones[o] = n.bones[e.readInt(!0)];
					for (o = 0, h = e.readInt(!0); o < h; o++) a.constraints.push(n.ikConstraints[e.readInt(!0)]);
					for (o = 0, h = e.readInt(!0); o < h; o++) a.constraints.push(n.transformConstraints[e.readInt(!0)]);
					for (o = 0, h = e.readInt(!0); o < h; o++) a.constraints.push(n.pathConstraints[e.readInt(!0)]);
					s = e.readInt(!0)
				}
				for (o = 0; o < s; o++)
					for (var l = e.readInt(!0), u = 0, c = e.readInt(!0); u < c; u++) {
						var d = e.readStringRef(),
							p = this.readAttachment(e, n, a, l, d, r);
						null != p && a.setAttachment(l, d, p)
					}
				return a
			}, e.prototype.readAttachment = function(n, r, a, s, o, h) {
				var l = this.scale,
					u = n.readStringRef();
				null == u && (u = o);
				var c = n.readByte();
				switch (e.AttachmentTypeValues[c]) {
					case t.AttachmentType.Region:
						var d = n.readStringRef(),
							p = n.readFloat(),
							f = n.readFloat(),
							m = n.readFloat(),
							g = n.readFloat(),
							v = n.readFloat(),
							M = n.readFloat(),
							y = n.readFloat(),
							w = n.readInt32();
						null == d && (d = u);
						var x = this.attachmentLoader.newRegionAttachment(a, u, d);
						return null == x ? null : (x.path = d, x.x = f * l, x.y = m * l, x.scaleX = g, x.scaleY = v, x.rotation = p, x.width = M * l, x.height = y * l, t.Color.rgba8888ToColor(x.color, w), x.updateOffset(), x);
					case t.AttachmentType.BoundingBox:
						var b = n.readInt(!0),
							T = this.readVertices(n, b),
							A = (w = h ? n.readInt32() : 0, this.attachmentLoader.newBoundingBoxAttachment(a, u));
						return null == A ? null : (A.worldVerticesLength = b << 1, A.vertices = T.vertices, A.bones = T.bones, h && t.Color.rgba8888ToColor(A.color, w), A);
					case t.AttachmentType.Mesh:
						d = n.readStringRef(), w = n.readInt32(), b = n.readInt(!0);
						var E = this.readFloatArray(n, b << 1, 1),
							R = this.readShortArray(n),
							S = (T = this.readVertices(n, b), n.readInt(!0)),
							I = null;
						return M = 0, y = 0, h && (I = this.readShortArray(n), M = n.readFloat(), y = n.readFloat()), null == d && (d = u), null == (C = this.attachmentLoader.newMeshAttachment(a, u, d)) ? null : (C.path = d, t.Color.rgba8888ToColor(C.color, w), C.bones = T.bones, C.vertices = T.vertices, C.worldVerticesLength = b << 1, C.triangles = R, C.regionUVs = E, C.updateUVs(), C.hullLength = S << 1, h && (C.edges = I, C.width = M * l, C.height = y * l), C);
					case t.AttachmentType.LinkedMesh:
						d = n.readStringRef(), w = n.readInt32();
						var C, P = n.readStringRef(),
							k = n.readStringRef(),
							V = n.readBoolean();
						return M = 0, y = 0, h && (M = n.readFloat(), y = n.readFloat()), null == d && (d = u), null == (C = this.attachmentLoader.newMeshAttachment(a, u, d)) ? null : (C.path = d, t.Color.rgba8888ToColor(C.color, w), h && (C.width = M * l, C.height = y * l), this.linkedMeshes.push(new i(C, P, s, k, V)), C);
					case t.AttachmentType.Path:
						for (var L = n.readBoolean(), N = n.readBoolean(), D = (b = n.readInt(!0), T = this.readVertices(n, b), t.Utils.newArray(b / 3, 0)), O = 0, F = D.length; O < F; O++) D[O] = n.readFloat() * l;
						return w = h ? n.readInt32() : 0, null == (d = this.attachmentLoader.newPathAttachment(a, u)) ? null : (d.closed = L, d.constantSpeed = N, d.worldVerticesLength = b << 1, d.vertices = T.vertices, d.bones = T.bones, d.lengths = D, h && t.Color.rgba8888ToColor(d.color, w), d);
					case t.AttachmentType.Point:
						p = n.readFloat(), f = n.readFloat(), m = n.readFloat(), w = h ? n.readInt32() : 0;
						var Y = this.attachmentLoader.newPointAttachment(a, u);
						return null == Y ? null : (Y.x = f * l, Y.y = m * l, Y.rotation = p, h && t.Color.rgba8888ToColor(Y.color, w), Y);
					case t.AttachmentType.Clipping:
						var U = n.readInt(!0),
							B = (b = n.readInt(!0), T = this.readVertices(n, b), w = h ? n.readInt32() : 0, this.attachmentLoader.newClippingAttachment(a, u));
						return null == B ? null : (B.endSlot = r.slots[U], B.worldVerticesLength = b << 1, B.vertices = T.vertices, B.bones = T.bones, h && t.Color.rgba8888ToColor(B.color, w), B)
				}
				return null
			}, e.prototype.readVertices = function(e, n) {
				var i = n << 1,
					a = new r,
					s = this.scale;
				if (!e.readBoolean()) return a.vertices = this.readFloatArray(e, i, s), a;
				for (var o = new Array, h = new Array, l = 0; l < n; l++) {
					var u = e.readInt(!0);
					h.push(u);
					for (var c = 0; c < u; c++) h.push(e.readInt(!0)), o.push(e.readFloat() * s), o.push(e.readFloat() * s), o.push(e.readFloat())
				}
				return a.vertices = t.Utils.toFloatArray(o), a.bones = h, a
			}, e.prototype.readFloatArray = function(t, e, n) {
				var i = new Array(e);
				if (1 == n)
					for (var r = 0; r < e; r++) i[r] = t.readFloat();
				else
					for (r = 0; r < e; r++) i[r] = t.readFloat() * n;
				return i
			}, e.prototype.readShortArray = function(t) {
				for (var e = t.readInt(!0), n = new Array(e), i = 0; i < e; i++) n[i] = t.readShort();
				return n
			}, e.prototype.readAnimation = function(n, i, r) {
				for (var a = new Array, s = this.scale, o = 0, h = new t.Color, l = new t.Color, u = 0, c = n.readInt(!0); u < c; u++)
					for (var d = n.readInt(!0), p = 0, f = n.readInt(!0); p < f; p++) {
						var m = n.readByte(),
							g = n.readInt(!0);
						switch (m) {
							case e.SLOT_ATTACHMENT:
								(w = new t.AttachmentTimeline(g)).slotIndex = d;
								for (var v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readStringRef());
								a.push(w), o = Math.max(o, w.frames[g - 1]);
								break;
							case e.SLOT_COLOR:
								for ((w = new t.ColorTimeline(g)).slotIndex = d, v = 0; v < g; v++) {
									var M = n.readFloat();
									t.Color.rgba8888ToColor(h, n.readInt32()), w.setFrame(v, M, h.r, h.g, h.b, h.a), v < g - 1 && this.readCurve(n, v, w)
								}
								a.push(w), o = Math.max(o, w.frames[(g - 1) * t.ColorTimeline.ENTRIES]);
								break;
							case e.SLOT_TWO_COLOR:
								for ((w = new t.TwoColorTimeline(g)).slotIndex = d, v = 0; v < g; v++) M = n.readFloat(), t.Color.rgba8888ToColor(h, n.readInt32()), t.Color.rgb888ToColor(l, n.readInt32()), w.setFrame(v, M, h.r, h.g, h.b, h.a, l.r, l.g, l.b), v < g - 1 && this.readCurve(n, v, w);
								a.push(w), o = Math.max(o, w.frames[(g - 1) * t.TwoColorTimeline.ENTRIES])
						}
					}
				for (u = 0, c = n.readInt(!0); u < c; u++) {
					var y = n.readInt(!0);
					for (p = 0, f = n.readInt(!0); p < f; p++) switch (m = n.readByte(), g = n.readInt(!0), m) {
						case e.BONE_ROTATE:
							for ((w = new t.RotateTimeline(g)).boneIndex = y, v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readFloat()), v < g - 1 && this.readCurve(n, v, w);
							a.push(w), o = Math.max(o, w.frames[(g - 1) * t.RotateTimeline.ENTRIES]);
							break;
						case e.BONE_TRANSLATE:
						case e.BONE_SCALE:
						case e.BONE_SHEAR:
							var w = void 0,
								x = 1;
							for (m == e.BONE_SCALE ? w = new t.ScaleTimeline(g) : m == e.BONE_SHEAR ? w = new t.ShearTimeline(g) : (w = new t.TranslateTimeline(g), x = s), w.boneIndex = y, v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readFloat() * x, n.readFloat() * x), v < g - 1 && this.readCurve(n, v, w);
							a.push(w), o = Math.max(o, w.frames[(g - 1) * t.TranslateTimeline.ENTRIES])
					}
				}
				for (u = 0, c = n.readInt(!0); u < c; u++) {
					var b = n.readInt(!0);
					for (g = n.readInt(!0), (w = new t.IkConstraintTimeline(g)).ikConstraintIndex = b, v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readFloat(), n.readFloat() * s, n.readByte(), n.readBoolean(), n.readBoolean()), v < g - 1 && this.readCurve(n, v, w);
					a.push(w), o = Math.max(o, w.frames[(g - 1) * t.IkConstraintTimeline.ENTRIES])
				}
				for (u = 0, c = n.readInt(!0); u < c; u++) {
					for (b = n.readInt(!0), g = n.readInt(!0), (w = new t.TransformConstraintTimeline(g)).transformConstraintIndex = b, v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readFloat(), n.readFloat(), n.readFloat(), n.readFloat()), v < g - 1 && this.readCurve(n, v, w);
					a.push(w), o = Math.max(o, w.frames[(g - 1) * t.TransformConstraintTimeline.ENTRIES])
				}
				for (u = 0, c = n.readInt(!0); u < c; u++) {
					b = n.readInt(!0);
					var T = r.pathConstraints[b];
					for (p = 0, f = n.readInt(!0); p < f; p++) switch (m = n.readByte(), g = n.readInt(!0), m) {
						case e.PATH_POSITION:
						case e.PATH_SPACING:
							for (w = void 0, x = 1, m == e.PATH_SPACING ? (w = new t.PathConstraintSpacingTimeline(g), T.spacingMode != t.SpacingMode.Length && T.spacingMode != t.SpacingMode.Fixed || (x = s)) : (w = new t.PathConstraintPositionTimeline(g), T.positionMode == t.PositionMode.Fixed && (x = s)), w.pathConstraintIndex = b, v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readFloat() * x), v < g - 1 && this.readCurve(n, v, w);
							a.push(w), o = Math.max(o, w.frames[(g - 1) * t.PathConstraintPositionTimeline.ENTRIES]);
							break;
						case e.PATH_MIX:
							for ((w = new t.PathConstraintMixTimeline(g)).pathConstraintIndex = b, v = 0; v < g; v++) w.setFrame(v, n.readFloat(), n.readFloat(), n.readFloat()), v < g - 1 && this.readCurve(n, v, w);
							a.push(w), o = Math.max(o, w.frames[(g - 1) * t.PathConstraintMixTimeline.ENTRIES])
					}
				}
				for (u = 0, c = n.readInt(!0); u < c; u++) {
					var A = r.skins[n.readInt(!0)];
					for (p = 0, f = n.readInt(!0); p < f; p++) {
						d = n.readInt(!0);
						for (var E = 0, R = n.readInt(!0); E < R; E++) {
							var S = A.getAttachment(d, n.readStringRef()),
								I = null != S.bones,
								C = S.vertices,
								P = I ? C.length / 3 * 2 : C.length;
							for (g = n.readInt(!0), (w = new t.DeformTimeline(g)).slotIndex = d, w.attachment = S, v = 0; v < g; v++) {
								M = n.readFloat();
								var k = void 0,
									V = n.readInt(!0);
								if (0 == V) k = I ? t.Utils.newFloatArray(P) : C;
								else {
									k = t.Utils.newFloatArray(P);
									var L = n.readInt(!0);
									if (V += L, 1 == s)
										for (var N = L; N < V; N++) k[N] = n.readFloat();
									else
										for (N = L; N < V; N++) k[N] = n.readFloat() * s;
									if (!I) {
										N = 0;
										for (var D = k.length; N < D; N++) k[N] += C[N]
									}
								}
								w.setFrame(v, M, k), v < g - 1 && this.readCurve(n, v, w)
							}
							a.push(w), o = Math.max(o, w.frames[g - 1])
						}
					}
				}
				var O = n.readInt(!0);
				if (O > 0) {
					w = new t.DrawOrderTimeline(O);
					var F = r.slots.length;
					for (u = 0; u < O; u++) {
						M = n.readFloat();
						var Y = n.readInt(!0),
							U = t.Utils.newArray(F, 0);
						for (p = F - 1; p >= 0; p--) U[p] = -1;
						var B = t.Utils.newArray(F - Y, 0),
							X = 0,
							W = 0;
						for (p = 0; p < Y; p++) {
							for (d = n.readInt(!0); X != d;) B[W++] = X++;
							U[X + n.readInt(!0)] = X++
						}
						for (; X < F;) B[W++] = X++;
						for (p = F - 1; p >= 0; p--) - 1 == U[p] && (U[p] = B[--W]);
						w.setFrame(u, M, U)
					}
					a.push(w), o = Math.max(o, w.frames[O - 1])
				}
				var G = n.readInt(!0);
				if (G > 0) {
					for (w = new t.EventTimeline(G), u = 0; u < G; u++) {
						M = n.readFloat();
						var _ = r.events[n.readInt(!0)],
							Z = new t.Event(M, _);
						Z.intValue = n.readInt(!1), Z.floatValue = n.readFloat(), Z.stringValue = n.readBoolean() ? n.readString() : _.stringValue, null != Z.data.audioPath && (Z.volume = n.readFloat(), Z.balance = n.readFloat()), w.setFrame(u, Z)
					}
					a.push(w), o = Math.max(o, w.frames[G - 1])
				}
				return new t.Animation(i, a, o)
			}, e.prototype.readCurve = function(t, n, i) {
				switch (t.readByte()) {
					case e.CURVE_STEPPED:
						i.setStepped(n);
						break;
					case e.CURVE_BEZIER:
						this.setCurve(i, n, t.readFloat(), t.readFloat(), t.readFloat(), t.readFloat())
				}
			}, e.prototype.setCurve = function(t, e, n, i, r, a) {
				t.setCurve(e, n, i, r, a)
			}, e.AttachmentTypeValues = [0, 1, 2, 3, 4, 5, 6], e.TransformModeValues = [t.TransformMode.Normal, t.TransformMode.OnlyTranslation, t.TransformMode.NoRotationOrReflection, t.TransformMode.NoScale, t.TransformMode.NoScaleOrReflection], e.PositionModeValues = [t.PositionMode.Fixed, t.PositionMode.Percent], e.SpacingModeValues = [t.SpacingMode.Length, t.SpacingMode.Fixed, t.SpacingMode.Percent], e.RotateModeValues = [t.RotateMode.Tangent, t.RotateMode.Chain, t.RotateMode.ChainScale], e.BlendModeValues = [t.BlendMode.Normal, t.BlendMode.Additive, t.BlendMode.Multiply, t.BlendMode.Screen], e.BONE_ROTATE = 0, e.BONE_TRANSLATE = 1, e.BONE_SCALE = 2, e.BONE_SHEAR = 3, e.SLOT_ATTACHMENT = 0, e.SLOT_COLOR = 1, e.SLOT_TWO_COLOR = 2, e.PATH_POSITION = 0, e.PATH_SPACING = 1, e.PATH_MIX = 2, e.CURVE_LINEAR = 0, e.CURVE_STEPPED = 1, e.CURVE_BEZIER = 2, e
		}();
		t.SkeletonBinary = e;
		var n = function() {
				function t(t, e, n, i) {
					void 0 === e && (e = new Array), void 0 === n && (n = 0), void 0 === i && (i = new DataView(t.buffer)), this.strings = e, this.index = n, this.buffer = i
				}
				return t.prototype.readByte = function() {
					return this.buffer.getInt8(this.index++)
				}, t.prototype.readShort = function() {
					var t = this.buffer.getInt16(this.index);
					return this.index += 2, t
				}, t.prototype.readInt32 = function() {
					var t = this.buffer.getInt32(this.index);
					return this.index += 4, t
				}, t.prototype.readInt = function(t) {
					var e = this.readByte(),
						n = 127 & e;
					return 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 7, 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 14, 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 21, 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 28)))), t ? n : n >>> 1 ^ -(1 & n)
				}, t.prototype.readStringRef = function() {
					var t = this.readInt(!0);
					return 0 == t ? null : this.strings[t - 1]
				}, t.prototype.readString = function() {
					var t = this.readInt(!0);
					switch (t) {
						case 0:
							return null;
						case 1:
							return ""
					}
					t--;
					for (var e = "", n = 0; n < t;) {
						var i = this.readByte();
						switch (i >> 4) {
							case 12:
							case 13:
								e += String.fromCharCode((31 & i) << 6 | 63 & this.readByte()), n += 2;
								break;
							case 14:
								e += String.fromCharCode((15 & i) << 12 | (63 & this.readByte()) << 6 | 63 & this.readByte()), n += 3;
								break;
							default:
								e += String.fromCharCode(i), n++
						}
					}
					return e
				}, t.prototype.readFloat = function() {
					var t = this.buffer.getFloat32(this.index);
					return this.index += 4, t
				}, t.prototype.readBoolean = function() {
					return 0 != this.readByte()
				}, t
			}(),
			i = function(t, e, n, i, r) {
				this.mesh = t, this.skin = e, this.slotIndex = n, this.parent = i, this.inheritDeform = r
			},
			r = function(t, e) {
				void 0 === t && (t = null), void 0 === e && (e = null), this.bones = t, this.vertices = e
			}
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e() {
				this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.boundingBoxes = new Array, this.polygons = new Array, this.polygonPool = new t.Pool((function() {
					return t.Utils.newFloatArray(16)
				}))
			}
			return e.prototype.update = function(e, n) {
				if (null == e) throw new Error("skeleton cannot be null.");
				var i = this.boundingBoxes,
					r = this.polygons,
					a = this.polygonPool,
					s = e.slots,
					o = s.length;
				i.length = 0, a.freeAll(r), r.length = 0;
				for (var h = 0; h < o; h++) {
					var l = s[h];
					if (l.bone.active) {
						var u = l.getAttachment();
						if (u instanceof t.BoundingBoxAttachment) {
							var c = u;
							i.push(c);
							var d = a.obtain();
							d.length != c.worldVerticesLength && (d = t.Utils.newFloatArray(c.worldVerticesLength)), r.push(d), c.computeWorldVertices(l, 0, c.worldVerticesLength, d, 0, 2)
						}
					}
				}
				n ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
			}, e.prototype.aabbCompute = function() {
				for (var t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, i = Number.NEGATIVE_INFINITY, r = this.polygons, a = 0, s = r.length; a < s; a++)
					for (var o = r[a], h = o, l = 0, u = o.length; l < u; l += 2) {
						var c = h[l],
							d = h[l + 1];
						t = Math.min(t, c), e = Math.min(e, d), n = Math.max(n, c), i = Math.max(i, d)
					}
				this.minX = t, this.minY = e, this.maxX = n, this.maxY = i
			}, e.prototype.aabbContainsPoint = function(t, e) {
				return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
			}, e.prototype.aabbIntersectsSegment = function(t, e, n, i) {
				var r = this.minX,
					a = this.minY,
					s = this.maxX,
					o = this.maxY;
				if (t <= r && n <= r || e <= a && i <= a || t >= s && n >= s || e >= o && i >= o) return !1;
				var h = (i - e) / (n - t),
					l = h * (r - t) + e;
				if (l > a && l < o) return !0;
				if ((l = h * (s - t) + e) > a && l < o) return !0;
				var u = (a - e) / h + t;
				return u > r && u < s || (u = (o - e) / h + t) > r && u < s
			}, e.prototype.aabbIntersectsSkeleton = function(t) {
				return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
			}, e.prototype.containsPoint = function(t, e) {
				for (var n = this.polygons, i = 0, r = n.length; i < r; i++)
					if (this.containsPointPolygon(n[i], t, e)) return this.boundingBoxes[i];
				return null
			}, e.prototype.containsPointPolygon = function(t, e, n) {
				for (var i = t, r = t.length, a = r - 2, s = !1, o = 0; o < r; o += 2) {
					var h = i[o + 1],
						l = i[a + 1];
					if (h < n && l >= n || l < n && h >= n) {
						var u = i[o];
						u + (n - h) / (l - h) * (i[a] - u) < e && (s = !s)
					}
					a = o
				}
				return s
			}, e.prototype.intersectsSegment = function(t, e, n, i) {
				for (var r = this.polygons, a = 0, s = r.length; a < s; a++)
					if (this.intersectsSegmentPolygon(r[a], t, e, n, i)) return this.boundingBoxes[a];
				return null
			}, e.prototype.intersectsSegmentPolygon = function(t, e, n, i, r) {
				for (var a = t, s = t.length, o = e - i, h = n - r, l = e * r - n * i, u = a[s - 2], c = a[s - 1], d = 0; d < s; d += 2) {
					var p = a[d],
						f = a[d + 1],
						m = u * f - c * p,
						g = u - p,
						v = c - f,
						M = o * v - h * g,
						y = (l * g - o * m) / M;
					if ((y >= u && y <= p || y >= p && y <= u) && (y >= e && y <= i || y >= i && y <= e)) {
						var w = (l * v - h * m) / M;
						if ((w >= c && w <= f || w >= f && w <= c) && (w >= n && w <= r || w >= r && w <= n)) return !0
					}
					u = p, c = f
				}
				return !1
			}, e.prototype.getPolygon = function(t) {
				if (null == t) throw new Error("boundingBox cannot be null.");
				var e = this.boundingBoxes.indexOf(t);
				return -1 == e ? null : this.polygons[e]
			}, e.prototype.getWidth = function() {
				return this.maxX - this.minX
			}, e.prototype.getHeight = function() {
				return this.maxY - this.minY
			}, e
		}();
		t.SkeletonBounds = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e() {
				this.triangulator = new t.Triangulator, this.clippingPolygon = new Array, this.clipOutput = new Array, this.clippedVertices = new Array, this.clippedTriangles = new Array, this.scratch = new Array
			}
			return e.prototype.clipStart = function(n, i) {
				if (null != this.clipAttachment) return 0;
				this.clipAttachment = i;
				var r = i.worldVerticesLength,
					a = t.Utils.setArraySize(this.clippingPolygon, r);
				i.computeWorldVertices(n, 0, r, a, 0, 2);
				var s = this.clippingPolygon;
				e.makeClockwise(s);
				for (var o = this.clippingPolygons = this.triangulator.decompose(s, this.triangulator.triangulate(s)), h = 0, l = o.length; h < l; h++) {
					var u = o[h];
					e.makeClockwise(u), u.push(u[0]), u.push(u[1])
				}
				return o.length
			}, e.prototype.clipEndWithSlot = function(t) {
				null != this.clipAttachment && this.clipAttachment.endSlot == t.data && this.clipEnd()
			}, e.prototype.clipEnd = function() {
				null != this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length = 0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0)
			}, e.prototype.isClipping = function() {
				return null != this.clipAttachment
			}, e.prototype.clipTriangles = function(e, n, i, r, a, s, o, h) {
				var l = this.clipOutput,
					u = this.clippedVertices,
					c = this.clippedTriangles,
					d = this.clippingPolygons,
					p = this.clippingPolygons.length,
					f = h ? 12 : 8,
					m = 0;
				u.length = 0, c.length = 0;
				t: for (var g = 0; g < r; g += 3)
					for (var v = i[g] << 1, M = e[v], y = e[v + 1], w = a[v], x = a[v + 1], b = e[v = i[g + 1] << 1], T = e[v + 1], A = a[v], E = a[v + 1], R = e[v = i[g + 2] << 1], S = e[v + 1], I = a[v], C = a[v + 1], P = 0; P < p; P++) {
						var k = u.length;
						if (!this.clip(M, y, b, T, R, S, d[P], l)) {
							(B = t.Utils.setArraySize(u, k + 3 * f))[k] = M, B[k + 1] = y, B[k + 2] = s.r, B[k + 3] = s.g, B[k + 4] = s.b, B[k + 5] = s.a, h ? (B[k + 6] = w, B[k + 7] = x, B[k + 8] = o.r, B[k + 9] = o.g, B[k + 10] = o.b, B[k + 11] = o.a, B[k + 12] = b, B[k + 13] = T, B[k + 14] = s.r, B[k + 15] = s.g, B[k + 16] = s.b, B[k + 17] = s.a, B[k + 18] = A, B[k + 19] = E, B[k + 20] = o.r, B[k + 21] = o.g, B[k + 22] = o.b, B[k + 23] = o.a, B[k + 24] = R, B[k + 25] = S, B[k + 26] = s.r, B[k + 27] = s.g, B[k + 28] = s.b, B[k + 29] = s.a, B[k + 30] = I, B[k + 31] = C, B[k + 32] = o.r, B[k + 33] = o.g, B[k + 34] = o.b, B[k + 35] = o.a) : (B[k + 6] = w, B[k + 7] = x, B[k + 8] = b, B[k + 9] = T, B[k + 10] = s.r, B[k + 11] = s.g, B[k + 12] = s.b, B[k + 13] = s.a, B[k + 14] = A, B[k + 15] = E, B[k + 16] = R, B[k + 17] = S, B[k + 18] = s.r, B[k + 19] = s.g, B[k + 20] = s.b, B[k + 21] = s.a, B[k + 22] = I, B[k + 23] = C), k = c.length, (J = t.Utils.setArraySize(c, k + 3))[k] = m, J[k + 1] = m + 1, J[k + 2] = m + 2, m += 3;
							continue t
						}
						var V = l.length;
						if (0 != V) {
							for (var L = T - S, N = R - b, D = M - R, O = S - y, F = 1 / (L * D + N * (y - S)), Y = V >> 1, U = this.clipOutput, B = t.Utils.setArraySize(u, k + Y * f), X = 0; X < V; X += 2) {
								var W = U[X],
									G = U[X + 1];
								B[k] = W, B[k + 1] = G, B[k + 2] = s.r, B[k + 3] = s.g, B[k + 4] = s.b, B[k + 5] = s.a;
								var _ = W - R,
									Z = G - S,
									z = (L * _ + N * Z) * F,
									j = (O * _ + D * Z) * F,
									H = 1 - z - j;
								B[k + 6] = w * z + A * j + I * H, B[k + 7] = x * z + E * j + C * H, h && (B[k + 8] = o.r, B[k + 9] = o.g, B[k + 10] = o.b, B[k + 11] = o.a), k += f
							}
							k = c.length;
							var J = t.Utils.setArraySize(c, k + 3 * (Y - 2));
							for (Y--, X = 1; X < Y; X++) J[k] = m, J[k + 1] = m + X, J[k + 2] = m + X + 1, k += 3;
							m += Y + 1
						}
					}
			}, e.prototype.clip = function(t, e, n, i, r, a, s, o) {
				var h = o,
					l = !1,
					u = null;
				s.length % 4 >= 2 ? (u = o, o = this.scratch) : u = this.scratch, u.length = 0, u.push(t), u.push(e), u.push(n), u.push(i), u.push(r), u.push(a), u.push(t), u.push(e), o.length = 0;
				for (var c = s, d = s.length - 4, p = 0;; p += 2) {
					for (var f = c[p], m = c[p + 1], g = c[p + 2], v = c[p + 3], M = f - g, y = m - v, w = u, x = u.length - 2, b = o.length, T = 0; T < x; T += 2) {
						var A = w[T],
							E = w[T + 1],
							R = w[T + 2],
							S = w[T + 3],
							I = M * (S - v) - y * (R - g) > 0;
						if (M * (E - v) - y * (A - g) > 0) {
							if (I) {
								o.push(R), o.push(S);
								continue
							}
							var C = (k = S - E) * (g - f) - (V = R - A) * (v - m);
							if (Math.abs(C) > 1e-6) {
								var P = (V * (m - E) - k * (f - A)) / C;
								o.push(f + (g - f) * P), o.push(m + (v - m) * P)
							} else o.push(f), o.push(m)
						} else if (I) {
							var k, V;
							C = (k = S - E) * (g - f) - (V = R - A) * (v - m), Math.abs(C) > 1e-6 ? (P = (V * (m - E) - k * (f - A)) / C, o.push(f + (g - f) * P), o.push(m + (v - m) * P)) : (o.push(f), o.push(m)), o.push(R), o.push(S)
						}
						l = !0
					}
					if (b == o.length) return h.length = 0, !0;
					if (o.push(o[0]), o.push(o[1]), p == d) break;
					var L = o;
					(o = u).length = 0, u = L
				}
				if (h != o) {
					h.length = 0, p = 0;
					for (var N = o.length - 2; p < N; p++) h[p] = o[p]
				} else h.length = h.length - 2;
				return l
			}, e.makeClockwise = function(t) {
				for (var e = t, n = t.length, i = e[n - 2] * e[1] - e[0] * e[n - 1], r = 0, a = 0, s = 0, o = 0, h = n - 3; o < h; o += 2) r = e[o], a = e[o + 1], s = e[o + 2], i += r * e[o + 3] - s * a;
				if (!(i < 0)) {
					o = 0;
					var l = n - 2;
					for (h = n >> 1; o < h; o += 2) {
						var u = e[o],
							c = e[o + 1],
							d = l - o;
						e[o] = e[d], e[o + 1] = e[d + 1], e[d] = u, e[d + 1] = c
					}
				}
			}, e
		}();
		t.SkeletonClipping = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function t() {
				this.bones = new Array, this.slots = new Array, this.skins = new Array, this.events = new Array, this.animations = new Array, this.ikConstraints = new Array, this.transformConstraints = new Array, this.pathConstraints = new Array, this.fps = 0
			}
			return t.prototype.findBone = function(t) {
				if (null == t) throw new Error("boneName cannot be null.");
				for (var e = this.bones, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findBoneIndex = function(t) {
				if (null == t) throw new Error("boneName cannot be null.");
				for (var e = this.bones, n = 0, i = e.length; n < i; n++)
					if (e[n].name == t) return n;
				return -1
			}, t.prototype.findSlot = function(t) {
				if (null == t) throw new Error("slotName cannot be null.");
				for (var e = this.slots, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findSlotIndex = function(t) {
				if (null == t) throw new Error("slotName cannot be null.");
				for (var e = this.slots, n = 0, i = e.length; n < i; n++)
					if (e[n].name == t) return n;
				return -1
			}, t.prototype.findSkin = function(t) {
				if (null == t) throw new Error("skinName cannot be null.");
				for (var e = this.skins, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findEvent = function(t) {
				if (null == t) throw new Error("eventDataName cannot be null.");
				for (var e = this.events, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findAnimation = function(t) {
				if (null == t) throw new Error("animationName cannot be null.");
				for (var e = this.animations, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findIkConstraint = function(t) {
				if (null == t) throw new Error("constraintName cannot be null.");
				for (var e = this.ikConstraints, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findTransformConstraint = function(t) {
				if (null == t) throw new Error("constraintName cannot be null.");
				for (var e = this.transformConstraints, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findPathConstraint = function(t) {
				if (null == t) throw new Error("constraintName cannot be null.");
				for (var e = this.pathConstraints, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					if (r.name == t) return r
				}
				return null
			}, t.prototype.findPathConstraintIndex = function(t) {
				if (null == t) throw new Error("pathConstraintName cannot be null.");
				for (var e = this.pathConstraints, n = 0, i = e.length; n < i; n++)
					if (e[n].name == t) return n;
				return -1
			}, t
		}();
		t.SkeletonData = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t) {
				this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
			}
			return e.prototype.readSkeletonData = function(n) {
				var i = this.scale,
					r = new t.SkeletonData,
					a = "string" == typeof n ? JSON.parse(n) : n,
					s = a.skeleton;
				if (null != s) {
					if (r.hash = s.hash, r.version = s.spine, "3.8.00" == r.version) throw new Error("Unsupported skeleton data, please export with a newer version of Spine.");
					r.x = s.x, r.y = s.y, r.width = s.width, r.height = s.height, r.fps = s.fps, r.imagesPath = s.images
				}
				if (a.bones)
					for (var o = 0; o < a.bones.length; o++) {
						var h = a.bones[o],
							l = null,
							u = this.getValue(h, "parent", null);
						if (null != u && null == (l = r.findBone(u))) throw new Error("Parent bone not found: " + u);
						(f = new t.BoneData(r.bones.length, h.name, l)).length = this.getValue(h, "length", 0) * i, f.x = this.getValue(h, "x", 0) * i, f.y = this.getValue(h, "y", 0) * i, f.rotation = this.getValue(h, "rotation", 0), f.scaleX = this.getValue(h, "scaleX", 1), f.scaleY = this.getValue(h, "scaleY", 1), f.shearX = this.getValue(h, "shearX", 0), f.shearY = this.getValue(h, "shearY", 0), f.transformMode = e.transformModeFromString(this.getValue(h, "transform", "normal")), f.skinRequired = this.getValue(h, "skin", !1), r.bones.push(f)
					}
				if (a.slots)
					for (o = 0; o < a.slots.length; o++) {
						var c = (R = a.slots[o]).name,
							d = R.bone,
							p = r.findBone(d);
						if (null == p) throw new Error("Slot bone not found: " + d);
						var f = new t.SlotData(r.slots.length, c, p),
							m = this.getValue(R, "color", null);
						null != m && f.color.setFromString(m);
						var g = this.getValue(R, "dark", null);
						null != g && (f.darkColor = new t.Color(1, 1, 1, 1), f.darkColor.setFromString(g)), f.attachmentName = this.getValue(R, "attachment", null), f.blendMode = e.blendModeFromString(this.getValue(R, "blend", "normal")), r.slots.push(f)
					}
				if (a.ik)
					for (o = 0; o < a.ik.length; o++) {
						var v = a.ik[o];
						(f = new t.IkConstraintData(v.name)).order = this.getValue(v, "order", 0), f.skinRequired = this.getValue(v, "skin", !1);
						for (var M = 0; M < v.bones.length; M++) {
							if (d = v.bones[M], null == (T = r.findBone(d))) throw new Error("IK bone not found: " + d);
							f.bones.push(T)
						}
						var y = v.target;
						if (f.target = r.findBone(y), null == f.target) throw new Error("IK target bone not found: " + y);
						f.mix = this.getValue(v, "mix", 1), f.softness = this.getValue(v, "softness", 0) * i, f.bendDirection = this.getValue(v, "bendPositive", !0) ? 1 : -1, f.compress = this.getValue(v, "compress", !1), f.stretch = this.getValue(v, "stretch", !1), f.uniform = this.getValue(v, "uniform", !1), r.ikConstraints.push(f)
					}
				if (a.transform)
					for (o = 0; o < a.transform.length; o++) {
						for (v = a.transform[o], (f = new t.TransformConstraintData(v.name)).order = this.getValue(v, "order", 0), f.skinRequired = this.getValue(v, "skin", !1), M = 0; M < v.bones.length; M++) {
							if (d = v.bones[M], null == (T = r.findBone(d))) throw new Error("Transform constraint bone not found: " + d);
							f.bones.push(T)
						}
						if (y = v.target, f.target = r.findBone(y), null == f.target) throw new Error("Transform constraint target bone not found: " + y);
						f.local = this.getValue(v, "local", !1), f.relative = this.getValue(v, "relative", !1), f.offsetRotation = this.getValue(v, "rotation", 0), f.offsetX = this.getValue(v, "x", 0) * i, f.offsetY = this.getValue(v, "y", 0) * i, f.offsetScaleX = this.getValue(v, "scaleX", 0), f.offsetScaleY = this.getValue(v, "scaleY", 0), f.offsetShearY = this.getValue(v, "shearY", 0), f.rotateMix = this.getValue(v, "rotateMix", 1), f.translateMix = this.getValue(v, "translateMix", 1), f.scaleMix = this.getValue(v, "scaleMix", 1), f.shearMix = this.getValue(v, "shearMix", 1), r.transformConstraints.push(f)
					}
				if (a.path)
					for (o = 0; o < a.path.length; o++) {
						for (v = a.path[o], (f = new t.PathConstraintData(v.name)).order = this.getValue(v, "order", 0), f.skinRequired = this.getValue(v, "skin", !1), M = 0; M < v.bones.length; M++) {
							if (d = v.bones[M], null == (T = r.findBone(d))) throw new Error("Transform constraint bone not found: " + d);
							f.bones.push(T)
						}
						if (y = v.target, f.target = r.findSlot(y), null == f.target) throw new Error("Path target slot not found: " + y);
						f.positionMode = e.positionModeFromString(this.getValue(v, "positionMode", "percent")), f.spacingMode = e.spacingModeFromString(this.getValue(v, "spacingMode", "length")), f.rotateMode = e.rotateModeFromString(this.getValue(v, "rotateMode", "tangent")), f.offsetRotation = this.getValue(v, "rotation", 0), f.position = this.getValue(v, "position", 0), f.positionMode == t.PositionMode.Fixed && (f.position *= i), f.spacing = this.getValue(v, "spacing", 0), f.spacingMode != t.SpacingMode.Length && f.spacingMode != t.SpacingMode.Fixed || (f.spacing *= i), f.rotateMix = this.getValue(v, "rotateMix", 1), f.translateMix = this.getValue(v, "translateMix", 1), r.pathConstraints.push(f)
					}
				if (a.skins)
					for (o = 0; o < a.skins.length; o++) {
						var w = a.skins[o],
							x = new t.Skin(w.name);
						if (w.bones)
							for (var b = 0; b < w.bones.length; b++) {
								var T;
								if (null == (T = r.findBone(w.bones[b]))) throw new Error("Skin bone not found: " + w.bones[o]);
								x.bones.push(T)
							}
						if (w.ik)
							for (b = 0; b < w.ik.length; b++) {
								if (null == (A = r.findIkConstraint(w.ik[b]))) throw new Error("Skin IK constraint not found: " + w.ik[o]);
								x.constraints.push(A)
							}
						if (w.transform)
							for (b = 0; b < w.transform.length; b++) {
								if (null == (A = r.findTransformConstraint(w.transform[b]))) throw new Error("Skin transform constraint not found: " + w.transform[o]);
								x.constraints.push(A)
							}
						if (w.path)
							for (b = 0; b < w.path.length; b++) {
								var A;
								if (null == (A = r.findPathConstraint(w.path[b]))) throw new Error("Skin path constraint not found: " + w.path[o]);
								x.constraints.push(A)
							}
						for (var c in w.attachments) {
							var E = r.findSlot(c);
							if (null == E) throw new Error("Slot not found: " + c);
							var R = w.attachments[c];
							for (var S in R) {
								var I = this.readAttachment(R[S], x, E.index, S, r);
								null != I && x.setAttachment(E.index, S, I)
							}
						}
						r.skins.push(x), "default" == x.name && (r.defaultSkin = x)
					}
				o = 0;
				for (var C = this.linkedMeshes.length; o < C; o++) {
					var P = this.linkedMeshes[o];
					if (null == (x = null == P.skin ? r.defaultSkin : r.findSkin(P.skin))) throw new Error("Skin not found: " + P.skin);
					var k = x.getAttachment(P.slotIndex, P.parent);
					if (null == k) throw new Error("Parent mesh not found: " + P.parent);
					P.mesh.deformAttachment = P.inheritDeform ? k : P.mesh, P.mesh.setParentMesh(k), P.mesh.updateUVs()
				}
				if (this.linkedMeshes.length = 0, a.events)
					for (var V in a.events) {
						var L = a.events[V];
						(f = new t.EventData(V)).intValue = this.getValue(L, "int", 0), f.floatValue = this.getValue(L, "float", 0), f.stringValue = this.getValue(L, "string", ""), f.audioPath = this.getValue(L, "audio", null), null != f.audioPath && (f.volume = this.getValue(L, "volume", 1), f.balance = this.getValue(L, "balance", 0)), r.events.push(f)
					}
				if (a.animations)
					for (var N in a.animations) {
						var D = a.animations[N];
						this.readAnimation(D, N, r)
					}
				return r
			}, e.prototype.readAttachment = function(e, i, r, a, s) {
				var o = this.scale;
				switch (a = this.getValue(e, "name", a), this.getValue(e, "type", "region")) {
					case "region":
						var h = this.getValue(e, "path", a),
							l = this.attachmentLoader.newRegionAttachment(i, a, h);
						return null == l ? null : (l.path = h, l.x = this.getValue(e, "x", 0) * o, l.y = this.getValue(e, "y", 0) * o, l.scaleX = this.getValue(e, "scaleX", 1), l.scaleY = this.getValue(e, "scaleY", 1), l.rotation = this.getValue(e, "rotation", 0), l.width = e.width * o, l.height = e.height * o, null != (y = this.getValue(e, "color", null)) && l.color.setFromString(y), l.updateOffset(), l);
					case "boundingbox":
						var u = this.attachmentLoader.newBoundingBoxAttachment(i, a);
						return null == u ? null : (this.readVertices(e, u, e.vertexCount << 1), null != (y = this.getValue(e, "color", null)) && u.color.setFromString(y), u);
					case "mesh":
					case "linkedmesh":
						h = this.getValue(e, "path", a);
						var c = this.attachmentLoader.newMeshAttachment(i, a, h);
						if (null == c) return null;
						c.path = h, null != (y = this.getValue(e, "color", null)) && c.color.setFromString(y), c.width = this.getValue(e, "width", 0) * o, c.height = this.getValue(e, "height", 0) * o;
						var d = this.getValue(e, "parent", null);
						if (null != d) return this.linkedMeshes.push(new n(c, this.getValue(e, "skin", null), r, d, this.getValue(e, "deform", !0))), c;
						var p = e.uvs;
						return this.readVertices(e, c, p.length), c.triangles = e.triangles, c.regionUVs = p, c.updateUVs(), c.edges = this.getValue(e, "edges", null), c.hullLength = 2 * this.getValue(e, "hull", 0), c;
					case "path":
						if (null == (h = this.attachmentLoader.newPathAttachment(i, a))) return null;
						h.closed = this.getValue(e, "closed", !1), h.constantSpeed = this.getValue(e, "constantSpeed", !0);
						var f = e.vertexCount;
						this.readVertices(e, h, f << 1);
						for (var m = t.Utils.newArray(f / 3, 0), g = 0; g < e.lengths.length; g++) m[g] = e.lengths[g] * o;
						return h.lengths = m, null != (y = this.getValue(e, "color", null)) && h.color.setFromString(y), h;
					case "point":
						var v = this.attachmentLoader.newPointAttachment(i, a);
						return null == v ? null : (v.x = this.getValue(e, "x", 0) * o, v.y = this.getValue(e, "y", 0) * o, v.rotation = this.getValue(e, "rotation", 0), null != (y = this.getValue(e, "color", null)) && v.color.setFromString(y), v);
					case "clipping":
						var M = this.attachmentLoader.newClippingAttachment(i, a);
						if (null == M) return null;
						var y, w = this.getValue(e, "end", null);
						if (null != w) {
							var x = s.findSlot(w);
							if (null == x) throw new Error("Clipping end slot not found: " + w);
							M.endSlot = x
						}
						return f = e.vertexCount, this.readVertices(e, M, f << 1), null != (y = this.getValue(e, "color", null)) && M.color.setFromString(y), M
				}
				return null
			}, e.prototype.readVertices = function(e, n, i) {
				var r = this.scale;
				n.worldVerticesLength = i;
				var a = e.vertices;
				if (i != a.length) {
					var s = new Array,
						o = new Array;
					for (c = 0, d = a.length; c < d;) {
						var h = a[c++];
						o.push(h);
						for (var l = c + 4 * h; c < l; c += 4) o.push(a[c]), s.push(a[c + 1] * r), s.push(a[c + 2] * r), s.push(a[c + 3])
					}
					n.bones = o, n.vertices = t.Utils.toFloatArray(s)
				} else {
					var u = t.Utils.toFloatArray(a);
					if (1 != r)
						for (var c = 0, d = a.length; c < d; c++) u[c] *= r;
					n.vertices = u
				}
			}, e.prototype.readAnimation = function(e, n, i) {
				var r = this.scale,
					a = new Array,
					s = 0;
				if (e.slots)
					for (var o in e.slots) {
						var h = e.slots[o];
						if (-1 == (Q = i.findSlotIndex(o))) throw new Error("Slot not found: " + o);
						for (var l in h) {
							var u = h[l];
							if ("attachment" == l) {
								(w = new t.AttachmentTimeline(u.length)).slotIndex = Q;
								for (var c = 0, d = 0; d < u.length; d++) {
									var p = u[d];
									w.setFrame(c++, this.getValue(p, "time", 0), p.name)
								}
								a.push(w), s = Math.max(s, w.frames[w.getFrameCount() - 1])
							} else if ("color" == l) {
								for ((w = new t.ColorTimeline(u.length)).slotIndex = Q, c = 0, d = 0; d < u.length; d++) {
									p = u[d];
									var f = new t.Color;
									f.setFromString(p.color), w.setFrame(c, this.getValue(p, "time", 0), f.r, f.g, f.b, f.a), this.readCurve(p, w, c), c++
								}
								a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.ColorTimeline.ENTRIES])
							} else {
								if ("twoColor" != l) throw new Error("Invalid timeline type for a slot: " + l + " (" + o + ")");
								for ((w = new t.TwoColorTimeline(u.length)).slotIndex = Q, c = 0, d = 0; d < u.length; d++) {
									p = u[d];
									var m = new t.Color,
										g = new t.Color;
									m.setFromString(p.light), g.setFromString(p.dark), w.setFrame(c, this.getValue(p, "time", 0), m.r, m.g, m.b, m.a, g.r, g.g, g.b), this.readCurve(p, w, c), c++
								}
								a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.TwoColorTimeline.ENTRIES])
							}
						}
					}
				if (e.bones)
					for (var v in e.bones) {
						var M = e.bones[v],
							y = i.findBoneIndex(v);
						if (-1 == y) throw new Error("Bone not found: " + v);
						for (var l in M)
							if (u = M[l], "rotate" === l) {
								for ((w = new t.RotateTimeline(u.length)).boneIndex = y, c = 0, d = 0; d < u.length; d++) p = u[d], w.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "angle", 0)), this.readCurve(p, w, c), c++;
								a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.RotateTimeline.ENTRIES])
							} else {
								if ("translate" !== l && "scale" !== l && "shear" !== l) throw new Error("Invalid timeline type for a bone: " + l + " (" + v + ")");
								var w = null,
									x = 1,
									b = 0;
								for ("scale" === l ? (w = new t.ScaleTimeline(u.length), b = 1) : "shear" === l ? w = new t.ShearTimeline(u.length) : (w = new t.TranslateTimeline(u.length), x = r), w.boneIndex = y, c = 0, d = 0; d < u.length; d++) {
									p = u[d];
									var T = this.getValue(p, "x", b),
										A = this.getValue(p, "y", b);
									w.setFrame(c, this.getValue(p, "time", 0), T * x, A * x), this.readCurve(p, w, c), c++
								}
								a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.TranslateTimeline.ENTRIES])
							}
					}
				if (e.ik)
					for (var E in e.ik) {
						var R = e.ik[E],
							S = i.findIkConstraint(E);
						for ((w = new t.IkConstraintTimeline(R.length)).ikConstraintIndex = i.ikConstraints.indexOf(S), c = 0, d = 0; d < R.length; d++) p = R[d], w.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "mix", 1), this.getValue(p, "softness", 0) * r, this.getValue(p, "bendPositive", !0) ? 1 : -1, this.getValue(p, "compress", !1), this.getValue(p, "stretch", !1)), this.readCurve(p, w, c), c++;
						a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.IkConstraintTimeline.ENTRIES])
					}
				if (e.transform)
					for (var E in e.transform) {
						for (R = e.transform[E], S = i.findTransformConstraint(E), (w = new t.TransformConstraintTimeline(R.length)).transformConstraintIndex = i.transformConstraints.indexOf(S), c = 0, d = 0; d < R.length; d++) p = R[d], w.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "rotateMix", 1), this.getValue(p, "translateMix", 1), this.getValue(p, "scaleMix", 1), this.getValue(p, "shearMix", 1)), this.readCurve(p, w, c), c++;
						a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.TransformConstraintTimeline.ENTRIES])
					}
				if (e.path)
					for (var E in e.path) {
						R = e.path[E];
						var I = i.findPathConstraintIndex(E);
						if (-1 == I) throw new Error("Path constraint not found: " + E);
						var C = i.pathConstraints[I];
						for (var l in R)
							if (u = R[l], "position" === l || "spacing" === l) {
								for (w = null, x = 1, "spacing" === l ? (w = new t.PathConstraintSpacingTimeline(u.length), C.spacingMode != t.SpacingMode.Length && C.spacingMode != t.SpacingMode.Fixed || (x = r)) : (w = new t.PathConstraintPositionTimeline(u.length), C.positionMode == t.PositionMode.Fixed && (x = r)), w.pathConstraintIndex = I, c = 0, d = 0; d < u.length; d++) p = u[d], w.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, l, 0) * x), this.readCurve(p, w, c), c++;
								a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.PathConstraintPositionTimeline.ENTRIES])
							} else if ("mix" === l) {
							for ((w = new t.PathConstraintMixTimeline(u.length)).pathConstraintIndex = I, c = 0, d = 0; d < u.length; d++) p = u[d], w.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "rotateMix", 1), this.getValue(p, "translateMix", 1)), this.readCurve(p, w, c), c++;
							a.push(w), s = Math.max(s, w.frames[(w.getFrameCount() - 1) * t.PathConstraintMixTimeline.ENTRIES])
						}
					}
				if (e.deform)
					for (var P in e.deform) {
						var k = e.deform[P],
							V = i.findSkin(P);
						if (null == V) throw new Error("Skin not found: " + P);
						for (var o in k) {
							if (h = k[o], -1 == (Q = i.findSlotIndex(o))) throw new Error("Slot not found: " + h.name);
							for (var l in h) {
								u = h[l];
								var L = V.getAttachment(Q, l);
								if (null == L) throw new Error("Deform attachment not found: " + u.name);
								var N = null != L.bones,
									D = L.vertices,
									O = N ? D.length / 3 * 2 : D.length;
								(w = new t.DeformTimeline(u.length)).slotIndex = Q, w.attachment = L, c = 0;
								for (var F = 0; F < u.length; F++) {
									p = u[F];
									var Y = void 0,
										U = this.getValue(p, "vertices", null);
									if (null == U) Y = N ? t.Utils.newFloatArray(O) : D;
									else {
										Y = t.Utils.newFloatArray(O);
										var B = this.getValue(p, "offset", 0);
										if (t.Utils.arrayCopy(U, 0, Y, B, U.length), 1 != r)
											for (var X = (d = B) + U.length; d < X; d++) Y[d] *= r;
										if (!N)
											for (d = 0; d < O; d++) Y[d] += D[d]
									}
									w.setFrame(c, this.getValue(p, "time", 0), Y), this.readCurve(p, w, c), c++
								}
								a.push(w), s = Math.max(s, w.frames[w.getFrameCount() - 1])
							}
						}
					}
				var W = e.drawOrder;
				if (null == W && (W = e.draworder), null != W) {
					w = new t.DrawOrderTimeline(W.length);
					var G = i.slots.length;
					for (c = 0, F = 0; F < W.length; F++) {
						var _ = W[F],
							Z = null,
							z = this.getValue(_, "offsets", null);
						if (null != z) {
							Z = t.Utils.newArray(G, -1);
							var j = t.Utils.newArray(G - z.length, 0),
								H = 0,
								J = 0;
							for (d = 0; d < z.length; d++) {
								var Q, q = z[d];
								if (-1 == (Q = i.findSlotIndex(q.slot))) throw new Error("Slot not found: " + q.slot);
								for (; H != Q;) j[J++] = H++;
								Z[H + q.offset] = H++
							}
							for (; H < G;) j[J++] = H++;
							for (d = G - 1; d >= 0; d--) - 1 == Z[d] && (Z[d] = j[--J])
						}
						w.setFrame(c++, this.getValue(_, "time", 0), Z)
					}
					a.push(w), s = Math.max(s, w.frames[w.getFrameCount() - 1])
				}
				if (e.events) {
					for (w = new t.EventTimeline(e.events.length), c = 0, d = 0; d < e.events.length; d++) {
						var K = e.events[d],
							$ = i.findEvent(K.name);
						if (null == $) throw new Error("Event not found: " + K.name);
						var tt = new t.Event(t.Utils.toSinglePrecision(this.getValue(K, "time", 0)), $);
						tt.intValue = this.getValue(K, "int", $.intValue), tt.floatValue = this.getValue(K, "float", $.floatValue), tt.stringValue = this.getValue(K, "string", $.stringValue), null != tt.data.audioPath && (tt.volume = this.getValue(K, "volume", 1), tt.balance = this.getValue(K, "balance", 0)), w.setFrame(c++, tt)
					}
					a.push(w), s = Math.max(s, w.frames[w.getFrameCount() - 1])
				}
				if (isNaN(s)) throw new Error("Error while parsing animation, duration is NaN");
				i.animations.push(new t.Animation(n, a, s))
			}, e.prototype.readCurve = function(t, e, n) {
				if (t.hasOwnProperty("curve"))
					if ("stepped" == t.curve) e.setStepped(n);
					else {
						var i = t.curve;
						e.setCurve(n, i, this.getValue(t, "c2", 0), this.getValue(t, "c3", 1), this.getValue(t, "c4", 1))
					}
			}, e.prototype.getValue = function(t, e, n) {
				return void 0 !== t[e] ? t[e] : n
			}, e.blendModeFromString = function(e) {
				if ("normal" == (e = e.toLowerCase())) return t.BlendMode.Normal;
				if ("additive" == e) return t.BlendMode.Additive;
				if ("multiply" == e) return t.BlendMode.Multiply;
				if ("screen" == e) return t.BlendMode.Screen;
				throw new Error("Unknown blend mode: " + e)
			}, e.positionModeFromString = function(e) {
				if ("fixed" == (e = e.toLowerCase())) return t.PositionMode.Fixed;
				if ("percent" == e) return t.PositionMode.Percent;
				throw new Error("Unknown position mode: " + e)
			}, e.spacingModeFromString = function(e) {
				if ("length" == (e = e.toLowerCase())) return t.SpacingMode.Length;
				if ("fixed" == e) return t.SpacingMode.Fixed;
				if ("percent" == e) return t.SpacingMode.Percent;
				throw new Error("Unknown position mode: " + e)
			}, e.rotateModeFromString = function(e) {
				if ("tangent" == (e = e.toLowerCase())) return t.RotateMode.Tangent;
				if ("chain" == e) return t.RotateMode.Chain;
				if ("chainscale" == e) return t.RotateMode.ChainScale;
				throw new Error("Unknown rotate mode: " + e)
			}, e.transformModeFromString = function(e) {
				if ("normal" == (e = e.toLowerCase())) return t.TransformMode.Normal;
				if ("onlytranslation" == e) return t.TransformMode.OnlyTranslation;
				if ("norotationorreflection" == e) return t.TransformMode.NoRotationOrReflection;
				if ("noscale" == e) return t.TransformMode.NoScale;
				if ("noscaleorreflection" == e) return t.TransformMode.NoScaleOrReflection;
				throw new Error("Unknown transform mode: " + e)
			}, e
		}();
		t.SkeletonJson = e;
		var n = function(t, e, n, i, r) {
			this.mesh = t, this.skin = e, this.slotIndex = n, this.parent = i, this.inheritDeform = r
		}
	}(Q || (Q = {})),
	function(t) {
		var e = function(t, e, n) {
			this.slotIndex = t, this.name = e, this.attachment = n
		};
		t.SkinEntry = e;
		var n = function() {
			function n(t) {
				if (this.attachments = new Array, this.bones = Array(), this.constraints = new Array, null == t) throw new Error("name cannot be null.");
				this.name = t
			}
			return n.prototype.setAttachment = function(t, e, n) {
				if (null == n) throw new Error("attachment cannot be null.");
				var i = this.attachments;
				t >= i.length && (i.length = t + 1), i[t] || (i[t] = {}), i[t][e] = n
			}, n.prototype.addSkin = function(t) {
				for (var e = 0; e < t.bones.length; e++) {
					for (var n = t.bones[e], i = !1, r = 0; r < this.bones.length; r++)
						if (this.bones[r] == n) {
							i = !0;
							break
						} i || this.bones.push(n)
				}
				for (e = 0; e < t.constraints.length; e++) {
					var a = t.constraints[e];
					for (i = !1, r = 0; r < this.constraints.length; r++)
						if (this.constraints[r] == a) {
							i = !0;
							break
						} i || this.constraints.push(a)
				}
				var s = t.getAttachments();
				for (e = 0; e < s.length; e++) {
					var o = s[e];
					this.setAttachment(o.slotIndex, o.name, o.attachment)
				}
			}, n.prototype.copySkin = function(e) {
				for (var n = 0; n < e.bones.length; n++) {
					for (var i = e.bones[n], r = !1, a = 0; a < this.bones.length; a++)
						if (this.bones[a] == i) {
							r = !0;
							break
						} r || this.bones.push(i)
				}
				for (n = 0; n < e.constraints.length; n++) {
					var s = e.constraints[n];
					for (r = !1, a = 0; a < this.constraints.length; a++)
						if (this.constraints[a] == s) {
							r = !0;
							break
						} r || this.constraints.push(s)
				}
				var o = e.getAttachments();
				for (n = 0; n < o.length; n++) {
					var h = o[n];
					null != h.attachment && (h.attachment instanceof t.MeshAttachment ? (h.attachment = h.attachment.newLinkedMesh(), this.setAttachment(h.slotIndex, h.name, h.attachment)) : (h.attachment = h.attachment.copy(), this.setAttachment(h.slotIndex, h.name, h.attachment)))
				}
			}, n.prototype.getAttachment = function(t, e) {
				var n = this.attachments[t];
				return n ? n[e] : null
			}, n.prototype.removeAttachment = function(t, e) {
				var n = this.attachments[t];
				n && (n[e] = null)
			}, n.prototype.getAttachments = function() {
				for (var t = new Array, n = 0; n < this.attachments.length; n++) {
					var i = this.attachments[n];
					if (i)
						for (var r in i) {
							var a = i[r];
							a && t.push(new e(n, r, a))
						}
				}
				return t
			}, n.prototype.getAttachmentsForSlot = function(t, n) {
				var i = this.attachments[t];
				if (i)
					for (var r in i) {
						var a = i[r];
						a && n.push(new e(t, r, a))
					}
			}, n.prototype.clear = function() {
				this.attachments.length = 0, this.bones.length = 0, this.constraints.length = 0
			}, n.prototype.attachAll = function(t, e) {
				for (var n = 0, i = 0; i < t.slots.length; i++) {
					var r = t.slots[i],
						a = r.getAttachment();
					if (a && n < e.attachments.length) {
						var s = e.attachments[n];
						for (var o in s)
							if (a == s[o]) {
								var h = this.getAttachment(n, o);
								null != h && r.setAttachment(h);
								break
							}
					}
					n++
				}
			}, n
		}();
		t.Skin = n
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(e, n) {
				if (this.deform = new Array, null == e) throw new Error("data cannot be null.");
				if (null == n) throw new Error("bone cannot be null.");
				this.data = e, this.bone = n, this.color = new t.Color, this.darkColor = null == e.darkColor ? null : new t.Color, this.setToSetupPose()
			}
			return e.prototype.getSkeleton = function() {
				return this.bone.skeleton
			}, e.prototype.getAttachment = function() {
				return this.attachment
			}, e.prototype.setAttachment = function(t) {
				this.attachment != t && (this.attachment = t, this.attachmentTime = this.bone.skeleton.time, this.deform.length = 0)
			}, e.prototype.setAttachmentTime = function(t) {
				this.attachmentTime = this.bone.skeleton.time - t
			}, e.prototype.getAttachmentTime = function() {
				return this.bone.skeleton.time - this.attachmentTime
			}, e.prototype.setToSetupPose = function() {
				this.color.setFromColor(this.data.color), null != this.darkColor && this.darkColor.setFromColor(this.data.darkColor), null == this.data.attachmentName ? this.attachment = null : (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName)))
			}, e
		}();
		t.Slot = e
	}(Q || (Q = {})),
	function(t) {
		t.SlotData = function(e, n, i) {
			if (this.color = new t.Color(1, 1, 1, 1), e < 0) throw new Error("index must be >= 0.");
			if (null == n) throw new Error("name cannot be null.");
			if (null == i) throw new Error("boneData cannot be null.");
			this.index = e, this.name = n, this.boneData = i
		}
	}(Q || (Q = {})),
	function(t) {
		var e, n, i, r, a = function() {
			function t(t) {
				this._image = t
			}
			return t.prototype.getImage = function() {
				return this._image
			}, t.filterFromString = function(t) {
				switch (t.toLowerCase()) {
					case "nearest":
						return e.Nearest;
					case "linear":
						return e.Linear;
					case "mipmap":
						return e.MipMap;
					case "mipmapnearestnearest":
						return e.MipMapNearestNearest;
					case "mipmaplinearnearest":
						return e.MipMapLinearNearest;
					case "mipmapnearestlinear":
						return e.MipMapNearestLinear;
					case "mipmaplinearlinear":
						return e.MipMapLinearLinear;
					default:
						throw new Error("Unknown texture filter " + t)
				}
			}, t.wrapFromString = function(t) {
				switch (t.toLowerCase()) {
					case "mirroredtepeat":
						return i.MirroredRepeat;
					case "clamptoedge":
						return i.ClampToEdge;
					case "repeat":
						return i.Repeat;
					default:
						throw new Error("Unknown texture wrap " + t)
				}
			}, t
		}();
		t.Texture = a, (n = e = t.TextureFilter || (t.TextureFilter = {}))[n.Nearest = 9728] = "Nearest", n[n.Linear = 9729] = "Linear", n[n.MipMap = 9987] = "MipMap", n[n.MipMapNearestNearest = 9984] = "MipMapNearestNearest", n[n.MipMapLinearNearest = 9985] = "MipMapLinearNearest", n[n.MipMapNearestLinear = 9986] = "MipMapNearestLinear", n[n.MipMapLinearLinear = 9987] = "MipMapLinearLinear", (r = i = t.TextureWrap || (t.TextureWrap = {}))[r.MirroredRepeat = 33648] = "MirroredRepeat", r[r.ClampToEdge = 33071] = "ClampToEdge", r[r.Repeat = 10497] = "Repeat", t.TextureRegion = function() {
			this.u = 0, this.v = 0, this.u2 = 0, this.v2 = 0, this.width = 0, this.height = 0, this.rotate = !1, this.offsetX = 0, this.offsetY = 0, this.originalWidth = 0, this.originalHeight = 0
		};
		var s = function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return q(e, t), e.prototype.setFilters = function(t, e) {}, e.prototype.setWraps = function(t, e) {}, e.prototype.dispose = function() {}, e
		}(a);
		t.FakeTexture = s
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t, e) {
				this.pages = new Array, this.regions = new Array, this.load(t, e)
			}
			return e.prototype.load = function(e, a) {
				if (null == a) throw new Error("textureLoader cannot be null.");
				for (var s = new n(e), o = new Array(4), h = null;;) {
					var l = s.readLine();
					if (null == l) break;
					if (0 == (l = l.trim()).length) h = null;
					else if (h) {
						var u = new r;
						u.name = l, u.page = h;
						var c = s.readValue();
						"true" == c.toLocaleLowerCase() ? u.degrees = 90 : "false" == c.toLocaleLowerCase() ? u.degrees = 0 : u.degrees = parseFloat(c), u.rotate = 90 == u.degrees, s.readTuple(o);
						var d = parseInt(o[0]),
							p = parseInt(o[1]);
						s.readTuple(o);
						var f = parseInt(o[0]),
							m = parseInt(o[1]);
						u.u = d / h.width, u.v = p / h.height, u.rotate ? (u.u2 = (d + m) / h.width, u.v2 = (p + f) / h.height) : (u.u2 = (d + f) / h.width, u.v2 = (p + m) / h.height), u.x = d, u.y = p, u.width = Math.abs(f), u.height = Math.abs(m), 4 == s.readTuple(o) && 4 == s.readTuple(o) && s.readTuple(o), u.originalWidth = parseInt(o[0]), u.originalHeight = parseInt(o[1]), s.readTuple(o), u.offsetX = parseInt(o[0]), u.offsetY = parseInt(o[1]), u.index = parseInt(s.readValue()), u.texture = h.texture, this.regions.push(u)
					} else {
						(h = new i).name = l, 2 == s.readTuple(o) && (h.width = parseInt(o[0]), h.height = parseInt(o[1]), s.readTuple(o)), s.readTuple(o), h.minFilter = t.Texture.filterFromString(o[0]), h.magFilter = t.Texture.filterFromString(o[1]);
						var g = s.readValue();
						h.uWrap = t.TextureWrap.ClampToEdge, h.vWrap = t.TextureWrap.ClampToEdge, "x" == g ? h.uWrap = t.TextureWrap.Repeat : "y" == g ? h.vWrap = t.TextureWrap.Repeat : "xy" == g && (h.uWrap = h.vWrap = t.TextureWrap.Repeat), h.texture = a(l), h.texture.setFilters(h.minFilter, h.magFilter), h.texture.setWraps(h.uWrap, h.vWrap), h.width = h.texture.getImage().width, h.height = h.texture.getImage().height, this.pages.push(h)
					}
				}
			}, e.prototype.findRegion = function(t) {
				for (var e = 0; e < this.regions.length; e++)
					if (this.regions[e].name == t) return this.regions[e];
				return null
			}, e.prototype.dispose = function() {
				for (var t = 0; t < this.pages.length; t++) this.pages[t].texture.dispose()
			}, e
		}();
		t.TextureAtlas = e;
		var n = function() {
				function t(t) {
					this.index = 0, this.lines = t.split(/\r\n|\r|\n/)
				}
				return t.prototype.readLine = function() {
					return this.index >= this.lines.length ? null : this.lines[this.index++]
				}, t.prototype.readValue = function() {
					var t = this.readLine(),
						e = t.indexOf(":");
					if (-1 == e) throw new Error("Invalid line: " + t);
					return t.substring(e + 1).trim()
				}, t.prototype.readTuple = function(t) {
					var e = this.readLine(),
						n = e.indexOf(":");
					if (-1 == n) throw new Error("Invalid line: " + e);
					for (var i = 0, r = n + 1; i < 3; i++) {
						var a = e.indexOf(",", r);
						if (-1 == a) break;
						t[i] = e.substr(r, a - r).trim(), r = a + 1
					}
					return t[i] = e.substring(r).trim(), i + 1
				}, t
			}(),
			i = function() {};
		t.TextureAtlasPage = i;
		var r = function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return q(e, t), e
		}(t.TextureRegion);
		t.TextureAtlasRegion = r
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(e, n) {
				if (this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.temp = new t.Vector2, this.active = !1, null == e) throw new Error("data cannot be null.");
				if (null == n) throw new Error("skeleton cannot be null.");
				this.data = e, this.rotateMix = e.rotateMix, this.translateMix = e.translateMix, this.scaleMix = e.scaleMix, this.shearMix = e.shearMix, this.bones = new Array;
				for (var i = 0; i < e.bones.length; i++) this.bones.push(n.findBone(e.bones[i].name));
				this.target = n.findBone(e.target.name)
			}
			return e.prototype.isActive = function() {
				return this.active
			}, e.prototype.apply = function() {
				this.update()
			}, e.prototype.update = function() {
				this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() : this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld()
			}, e.prototype.applyAbsoluteWorld = function() {
				for (var e = this.rotateMix, n = this.translateMix, i = this.scaleMix, r = this.shearMix, a = this.target, s = a.a, o = a.b, h = a.c, l = a.d, u = s * l - o * h > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad, c = this.data.offsetRotation * u, d = this.data.offsetShearY * u, p = this.bones, f = 0, m = p.length; f < m; f++) {
					var g = p[f],
						v = !1;
					if (0 != e) {
						var M = g.a,
							y = g.b,
							w = g.c,
							x = g.d;
						(S = Math.atan2(h, s) - Math.atan2(w, M) + c) > t.MathUtils.PI ? S -= t.MathUtils.PI2 : S < -t.MathUtils.PI && (S += t.MathUtils.PI2), S *= e;
						var b = Math.cos(S),
							T = Math.sin(S);
						g.a = b * M - T * w, g.b = b * y - T * x, g.c = T * M + b * w, g.d = T * y + b * x, v = !0
					}
					if (0 != n) {
						var A = this.temp;
						a.localToWorld(A.set(this.data.offsetX, this.data.offsetY)), g.worldX += (A.x - g.worldX) * n, g.worldY += (A.y - g.worldY) * n, v = !0
					}
					if (i > 0) {
						var E = Math.sqrt(g.a * g.a + g.c * g.c),
							R = Math.sqrt(s * s + h * h);
						E > 1e-5 && (E = (E + (R - E + this.data.offsetScaleX) * i) / E), g.a *= E, g.c *= E, E = Math.sqrt(g.b * g.b + g.d * g.d), R = Math.sqrt(o * o + l * l), E > 1e-5 && (E = (E + (R - E + this.data.offsetScaleY) * i) / E), g.b *= E, g.d *= E, v = !0
					}
					if (r > 0) {
						y = g.b, x = g.d;
						var S, I = Math.atan2(x, y);
						(S = Math.atan2(l, o) - Math.atan2(h, s) - (I - Math.atan2(g.c, g.a))) > t.MathUtils.PI ? S -= t.MathUtils.PI2 : S < -t.MathUtils.PI && (S += t.MathUtils.PI2), S = I + (S + d) * r, E = Math.sqrt(y * y + x * x), g.b = Math.cos(S) * E, g.d = Math.sin(S) * E, v = !0
					}
					v && (g.appliedValid = !1)
				}
			}, e.prototype.applyRelativeWorld = function() {
				for (var e = this.rotateMix, n = this.translateMix, i = this.scaleMix, r = this.shearMix, a = this.target, s = a.a, o = a.b, h = a.c, l = a.d, u = s * l - o * h > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad, c = this.data.offsetRotation * u, d = this.data.offsetShearY * u, p = this.bones, f = 0, m = p.length; f < m; f++) {
					var g, v = p[f],
						M = !1;
					if (0 != e) {
						var y = v.a,
							w = v.b,
							x = v.c,
							b = v.d;
						(g = Math.atan2(h, s) + c) > t.MathUtils.PI ? g -= t.MathUtils.PI2 : g < -t.MathUtils.PI && (g += t.MathUtils.PI2), g *= e;
						var T = Math.cos(g),
							A = Math.sin(g);
						v.a = T * y - A * x, v.b = T * w - A * b, v.c = A * y + T * x, v.d = A * w + T * b, M = !0
					}
					if (0 != n) {
						var E = this.temp;
						a.localToWorld(E.set(this.data.offsetX, this.data.offsetY)), v.worldX += E.x * n, v.worldY += E.y * n, M = !0
					}
					if (i > 0) {
						var R = (Math.sqrt(s * s + h * h) - 1 + this.data.offsetScaleX) * i + 1;
						v.a *= R, v.c *= R, R = (Math.sqrt(o * o + l * l) - 1 + this.data.offsetScaleY) * i + 1, v.b *= R, v.d *= R, M = !0
					}
					r > 0 && ((g = Math.atan2(l, o) - Math.atan2(h, s)) > t.MathUtils.PI ? g -= t.MathUtils.PI2 : g < -t.MathUtils.PI && (g += t.MathUtils.PI2), w = v.b, b = v.d, g = Math.atan2(b, w) + (g - t.MathUtils.PI / 2 + d) * r, R = Math.sqrt(w * w + b * b), v.b = Math.cos(g) * R, v.d = Math.sin(g) * R, M = !0), M && (v.appliedValid = !1)
				}
			}, e.prototype.applyAbsoluteLocal = function() {
				var t = this.rotateMix,
					e = this.translateMix,
					n = this.scaleMix,
					i = this.shearMix,
					r = this.target;
				r.appliedValid || r.updateAppliedTransform();
				for (var a = this.bones, s = 0, o = a.length; s < o; s++) {
					var h = a[s];
					h.appliedValid || h.updateAppliedTransform();
					var l = h.arotation;
					if (0 != t) {
						var u = r.arotation - l + this.data.offsetRotation;
						l += (u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0))) * t
					}
					var c = h.ax,
						d = h.ay;
					0 != e && (c += (r.ax - c + this.data.offsetX) * e, d += (r.ay - d + this.data.offsetY) * e);
					var p = h.ascaleX,
						f = h.ascaleY;
					0 != n && (p > 1e-5 && (p = (p + (r.ascaleX - p + this.data.offsetScaleX) * n) / p), f > 1e-5 && (f = (f + (r.ascaleY - f + this.data.offsetScaleY) * n) / f));
					var m = h.ashearY;
					0 != i && (u = r.ashearY - m + this.data.offsetShearY, u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0)), h.shearY += u * i), h.updateWorldTransformWith(c, d, l, p, f, h.ashearX, m)
				}
			}, e.prototype.applyRelativeLocal = function() {
				var t = this.rotateMix,
					e = this.translateMix,
					n = this.scaleMix,
					i = this.shearMix,
					r = this.target;
				r.appliedValid || r.updateAppliedTransform();
				for (var a = this.bones, s = 0, o = a.length; s < o; s++) {
					var h = a[s];
					h.appliedValid || h.updateAppliedTransform();
					var l = h.arotation;
					0 != t && (l += (r.arotation + this.data.offsetRotation) * t);
					var u = h.ax,
						c = h.ay;
					0 != e && (u += (r.ax + this.data.offsetX) * e, c += (r.ay + this.data.offsetY) * e);
					var d = h.ascaleX,
						p = h.ascaleY;
					0 != n && (d > 1e-5 && (d *= (r.ascaleX - 1 + this.data.offsetScaleX) * n + 1), p > 1e-5 && (p *= (r.ascaleY - 1 + this.data.offsetScaleY) * n + 1));
					var f = h.ashearY;
					0 != i && (f += (r.ashearY + this.data.offsetShearY) * i), h.updateWorldTransformWith(u, c, l, d, p, h.ashearX, f)
				}
			}, e
		}();
		t.TransformConstraint = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, !1) || this;
				return n.bones = new Array, n.rotateMix = 0, n.translateMix = 0, n.scaleMix = 0, n.shearMix = 0, n.offsetRotation = 0, n.offsetX = 0, n.offsetY = 0, n.offsetScaleX = 0, n.offsetScaleY = 0, n.offsetShearY = 0, n.relative = !1, n.local = !1, n
			}
			return q(e, t), e
		}(t.ConstraintData);
		t.TransformConstraintData = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e() {
				this.convexPolygons = new Array, this.convexPolygonsIndices = new Array, this.indicesArray = new Array, this.isConcaveArray = new Array, this.triangles = new Array, this.polygonPool = new t.Pool((function() {
					return new Array
				})), this.polygonIndicesPool = new t.Pool((function() {
					return new Array
				}))
			}
			return e.prototype.triangulate = function(t) {
				var n = t,
					i = t.length >> 1,
					r = this.indicesArray;
				r.length = 0;
				for (var a = 0; a < i; a++) r[a] = a;
				var s = this.isConcaveArray;
				s.length = 0, a = 0;
				for (var o = i; a < o; ++a) s[a] = e.isConcave(a, i, n, r);
				var h = this.triangles;
				for (h.length = 0; i > 3;) {
					for (var l = i - 1, u = (a = 0, 1);;) {
						t: if (!s[a]) {
							for (var c = r[l] << 1, d = r[a] << 1, p = r[u] << 1, f = n[c], m = n[c + 1], g = n[d], v = n[d + 1], M = n[p], y = n[p + 1], w = (u + 1) % i; w != l; w = (w + 1) % i)
								if (s[w]) {
									var x = r[w] << 1,
										b = n[x],
										T = n[x + 1];
									if (e.positiveArea(M, y, f, m, b, T) && e.positiveArea(f, m, g, v, b, T) && e.positiveArea(g, v, M, y, b, T)) break t
								} break
						}if (0 == u) {
							do {
								if (!s[a]) break;
								a--
							} while (a > 0);
							break
						}
						l = a,
						a = u,
						u = (u + 1) % i
					}
					h.push(r[(i + a - 1) % i]), h.push(r[a]), h.push(r[(a + 1) % i]), r.splice(a, 1), s.splice(a, 1);
					var A = (--i + a - 1) % i,
						E = a == i ? 0 : a;
					s[A] = e.isConcave(A, i, n, r), s[E] = e.isConcave(E, i, n, r)
				}
				return 3 == i && (h.push(r[2]), h.push(r[0]), h.push(r[1])), h
			}, e.prototype.decompose = function(t, n) {
				var i = t,
					r = this.convexPolygons;
				this.polygonPool.freeAll(r), r.length = 0;
				var a = this.convexPolygonsIndices;
				this.polygonIndicesPool.freeAll(a), a.length = 0;
				var s = this.polygonIndicesPool.obtain();
				s.length = 0;
				var o = this.polygonPool.obtain();
				o.length = 0;
				for (var h = -1, l = 0, u = 0, c = n.length; u < c; u += 3) {
					var d = n[u] << 1,
						p = n[u + 1] << 1,
						f = n[u + 2] << 1,
						m = i[d],
						g = i[d + 1],
						v = i[p],
						M = i[p + 1],
						y = i[f],
						w = i[f + 1],
						x = !1;
					if (h == d) {
						var b = o.length - 4,
							T = e.winding(o[b], o[b + 1], o[b + 2], o[b + 3], y, w),
							A = e.winding(y, w, o[0], o[1], o[2], o[3]);
						T == l && A == l && (o.push(y), o.push(w), s.push(f), x = !0)
					}
					x || (o.length > 0 ? (r.push(o), a.push(s)) : (this.polygonPool.free(o), this.polygonIndicesPool.free(s)), (o = this.polygonPool.obtain()).length = 0, o.push(m), o.push(g), o.push(v), o.push(M), o.push(y), o.push(w), (s = this.polygonIndicesPool.obtain()).length = 0, s.push(d), s.push(p), s.push(f), l = e.winding(m, g, v, M, y, w), h = d)
				}
				for (o.length > 0 && (r.push(o), a.push(s)), u = 0, c = r.length; u < c; u++)
					if (0 != (s = a[u]).length)
						for (var E = s[0], R = s[s.length - 1], S = (o = r[u])[b = o.length - 4], I = o[b + 1], C = o[b + 2], P = o[b + 3], k = o[0], V = o[1], L = o[2], N = o[3], D = e.winding(S, I, C, P, k, V), O = 0; O < c; O++)
							if (O != u) {
								var F = a[O];
								if (3 == F.length) {
									var Y = F[0],
										U = F[1],
										B = F[2],
										X = r[O];
									y = X[X.length - 2], w = X[X.length - 1], Y == E && U == R && (T = e.winding(S, I, C, P, y, w), A = e.winding(y, w, k, V, L, N), T == D && A == D && (X.length = 0, F.length = 0, o.push(y), o.push(w), s.push(B), S = C, I = P, C = y, P = w, O = 0))
								}
							} for (u = r.length - 1; u >= 0; u--) 0 == (o = r[u]).length && (r.splice(u, 1), this.polygonPool.free(o), s = a[u], a.splice(u, 1), this.polygonIndicesPool.free(s));
				return r
			}, e.isConcave = function(t, e, n, i) {
				var r = i[(e + t - 1) % e] << 1,
					a = i[t] << 1,
					s = i[(t + 1) % e] << 1;
				return !this.positiveArea(n[r], n[r + 1], n[a], n[a + 1], n[s], n[s + 1])
			}, e.positiveArea = function(t, e, n, i, r, a) {
				return t * (a - i) + n * (e - a) + r * (i - e) >= 0
			}, e.winding = function(t, e, n, i, r, a) {
				var s = n - t,
					o = i - e;
				return r * o - a * s + s * e - t * o >= 0 ? 1 : -1
			}, e
		}();
		t.Triangulator = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function t() {
				this.array = new Array
			}
			return t.prototype.add = function(t) {
				var e = this.contains(t);
				return this.array[0 | t] = 0 | t, !e
			}, t.prototype.contains = function(t) {
				return null != this.array[0 | t]
			}, t.prototype.remove = function(t) {
				this.array[0 | t] = void 0
			}, t.prototype.clear = function() {
				this.array.length = 0
			}, t
		}();
		t.IntSet = e;
		var n = function() {
			function t(t, e, n, i) {
				void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 0), this.r = t, this.g = e, this.b = n, this.a = i
			}
			return t.prototype.set = function(t, e, n, i) {
				return this.r = t, this.g = e, this.b = n, this.a = i, this.clamp(), this
			}, t.prototype.setFromColor = function(t) {
				return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
			}, t.prototype.setFromString = function(t) {
				return t = "#" == t.charAt(0) ? t.substr(1) : t, this.r = parseInt(t.substr(0, 2), 16) / 255, this.g = parseInt(t.substr(2, 2), 16) / 255, this.b = parseInt(t.substr(4, 2), 16) / 255, this.a = (8 != t.length ? 255 : parseInt(t.substr(6, 2), 16)) / 255, this
			}, t.prototype.add = function(t, e, n, i) {
				return this.r += t, this.g += e, this.b += n, this.a += i, this.clamp(), this
			}, t.prototype.clamp = function() {
				return this.r < 0 ? this.r = 0 : this.r > 1 && (this.r = 1), this.g < 0 ? this.g = 0 : this.g > 1 && (this.g = 1), this.b < 0 ? this.b = 0 : this.b > 1 && (this.b = 1), this.a < 0 ? this.a = 0 : this.a > 1 && (this.a = 1), this
			}, t.rgba8888ToColor = function(t, e) {
				t.r = ((4278190080 & e) >>> 24) / 255, t.g = ((16711680 & e) >>> 16) / 255, t.b = ((65280 & e) >>> 8) / 255, t.a = (255 & e) / 255
			}, t.rgb888ToColor = function(t, e) {
				t.r = ((16711680 & e) >>> 16) / 255, t.g = ((65280 & e) >>> 8) / 255, t.b = (255 & e) / 255
			}, t.WHITE = new t(1, 1, 1, 1), t.RED = new t(1, 0, 0, 1), t.GREEN = new t(0, 1, 0, 1), t.BLUE = new t(0, 0, 1, 1), t.MAGENTA = new t(1, 0, 1, 1), t
		}();
		t.Color = n;
		var i = function() {
			function t() {}
			return t.clamp = function(t, e, n) {
				return t < e ? e : t > n ? n : t
			}, t.cosDeg = function(e) {
				return Math.cos(e * t.degRad)
			}, t.sinDeg = function(e) {
				return Math.sin(e * t.degRad)
			}, t.signum = function(t) {
				return t > 0 ? 1 : t < 0 ? -1 : 0
			}, t.toInt = function(t) {
				return t > 0 ? Math.floor(t) : Math.ceil(t)
			}, t.cbrt = function(t) {
				var e = Math.pow(Math.abs(t), 1 / 3);
				return t < 0 ? -e : e
			}, t.randomTriangular = function(e, n) {
				return t.randomTriangularWith(e, n, .5 * (e + n))
			}, t.randomTriangularWith = function(t, e, n) {
				var i = Math.random(),
					r = e - t;
				return i <= (n - t) / r ? t + Math.sqrt(i * r * (n - t)) : e - Math.sqrt((1 - i) * r * (e - n))
			}, t.PI = 3.1415927, t.PI2 = 2 * t.PI, t.radiansToDegrees = 180 / t.PI, t.radDeg = t.radiansToDegrees, t.degreesToRadians = t.PI / 180, t.degRad = t.degreesToRadians, t
		}();
		t.MathUtils = i;
		var r = function() {
			function t() {}
			return t.prototype.apply = function(t, e, n) {
				return t + (e - t) * this.applyInternal(n)
			}, t
		}();
		t.Interpolation = r;
		var a = function(t) {
			function e(e) {
				var n = t.call(this) || this;
				return n.power = 2, n.power = e, n
			}
			return q(e, t), e.prototype.applyInternal = function(t) {
				return t <= .5 ? Math.pow(2 * t, this.power) / 2 : Math.pow(2 * (t - 1), this.power) / (this.power % 2 == 0 ? -2 : 2) + 1
			}, e
		}(r);
		t.Pow = a;
		var s = function(t) {
			function e(e) {
				return t.call(this, e) || this
			}
			return q(e, t), e.prototype.applyInternal = function(t) {
				return Math.pow(t - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1
			}, e
		}(a);
		t.PowOut = s;
		var o = function() {
			function t() {}
			return t.arrayCopy = function(t, e, n, i, r) {
				for (var a = e, s = i; a < e + r; a++, s++) n[s] = t[a]
			}, t.setArraySize = function(t, e, n) {
				void 0 === n && (n = 0);
				var i = t.length;
				if (i == e) return t;
				if (t.length = e, i < e)
					for (var r = i; r < e; r++) t[r] = n;
				return t
			}, t.ensureArrayCapacity = function(e, n, i) {
				return void 0 === i && (i = 0), e.length >= n ? e : t.setArraySize(e, n, i)
			}, t.newArray = function(t, e) {
				for (var n = new Array(t), i = 0; i < t; i++) n[i] = e;
				return n
			}, t.newFloatArray = function(e) {
				if (t.SUPPORTS_TYPED_ARRAYS) return new Float32Array(e);
				for (var n = new Array(e), i = 0; i < n.length; i++) n[i] = 0;
				return n
			}, t.newShortArray = function(e) {
				if (t.SUPPORTS_TYPED_ARRAYS) return new Int16Array(e);
				for (var n = new Array(e), i = 0; i < n.length; i++) n[i] = 0;
				return n
			}, t.toFloatArray = function(e) {
				return t.SUPPORTS_TYPED_ARRAYS ? new Float32Array(e) : e
			}, t.toSinglePrecision = function(e) {
				return t.SUPPORTS_TYPED_ARRAYS ? Math.fround(e) : e
			}, t.webkit602BugfixHelper = function(t, e) {}, t.contains = function(t, e, n) {
				for (var i = 0; i < t.length; i++)
					if (t[i] == e) return !0;
				return !1
			}, t.SUPPORTS_TYPED_ARRAYS = "undefined" != typeof Float32Array, t
		}();
		t.Utils = o;
		var h = function() {
			function t() {}
			return t.logBones = function(t) {
				for (var e = 0; e < t.bones.length; e++) {
					var n = t.bones[e];
					console.log(n.data.name + ", " + n.a + ", " + n.b + ", " + n.c + ", " + n.d + ", " + n.worldX + ", " + n.worldY)
				}
			}, t
		}();
		t.DebugUtils = h;
		var l = function() {
			function t(t) {
				this.items = new Array, this.instantiator = t
			}
			return t.prototype.obtain = function() {
				return this.items.length > 0 ? this.items.pop() : this.instantiator()
			}, t.prototype.free = function(t) {
				t.reset && t.reset(), this.items.push(t)
			}, t.prototype.freeAll = function(t) {
				for (var e = 0; e < t.length; e++) t[e].reset && t[e].reset(), this.items[e] = t[e]
			}, t.prototype.clear = function() {
				this.items.length = 0
			}, t
		}();
		t.Pool = l;
		var u = function() {
			function t(t, e) {
				void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
			}
			return t.prototype.set = function(t, e) {
				return this.x = t, this.y = e, this
			}, t.prototype.length = function() {
				var t = this.x,
					e = this.y;
				return Math.sqrt(t * t + e * e)
			}, t.prototype.normalize = function() {
				var t = this.length();
				return 0 != t && (this.x /= t, this.y /= t), this
			}, t
		}();
		t.Vector2 = u;
		var c = function() {
			function t() {
				this.maxDelta = .064, this.framesPerSecond = 0, this.delta = 0, this.totalTime = 0, this.lastTime = Date.now() / 1e3, this.frameCount = 0, this.frameTime = 0
			}
			return t.prototype.update = function() {
				var t = Date.now() / 1e3;
				this.delta = t - this.lastTime, this.frameTime += this.delta, this.totalTime += this.delta, this.delta > this.maxDelta && (this.delta = this.maxDelta), this.lastTime = t, this.frameCount++, this.frameTime > 1 && (this.framesPerSecond = this.frameCount / this.frameTime, this.frameTime = 0, this.frameCount = 0)
			}, t
		}();
		t.TimeKeeper = c;
		var d = function() {
			function t(t) {
				void 0 === t && (t = 32), this.addedValues = 0, this.lastValue = 0, this.mean = 0, this.dirty = !0, this.values = new Array(t)
			}
			return t.prototype.hasEnoughData = function() {
				return this.addedValues >= this.values.length
			}, t.prototype.addValue = function(t) {
				this.addedValues < this.values.length && this.addedValues++, this.values[this.lastValue++] = t, this.lastValue > this.values.length - 1 && (this.lastValue = 0), this.dirty = !0
			}, t.prototype.getMean = function() {
				if (this.hasEnoughData()) {
					if (this.dirty) {
						for (var t = 0, e = 0; e < this.values.length; e++) t += this.values[e];
						this.mean = t / this.values.length, this.dirty = !1
					}
					return this.mean
				}
				return 0
			}, t
		}();
		t.WindowedMean = d
	}(Q || (Q = {})), Math.fround || (Math.fround = (J = new Float32Array(1), function(t) {
		return J[0] = t, J[0]
	})),
	function(t) {
		var e = function(t) {
			if (null == t) throw new Error("name cannot be null.");
			this.name = t
		};
		t.Attachment = e;
		var n = function(e) {
			function n(t) {
				var i = e.call(this, t) || this;
				return i.id = (65535 & n.nextID++) << 11, i.worldVerticesLength = 0, i.deformAttachment = i, i
			}
			return q(n, e), n.prototype.computeWorldVertices = function(t, e, n, i, r, a) {
				n = r + (n >> 1) * a;
				var s = t.bone.skeleton,
					o = t.deform,
					h = this.vertices,
					l = this.bones;
				if (null != l) {
					for (var u = 0, c = 0, d = 0; d < e; d += 2) u += (g = l[u]) + 1, c += g;
					var p = s.bones;
					if (0 == o.length)
						for (I = r, A = 3 * c; I < n; I += a) {
							var f = 0,
								m = 0,
								g = l[u++];
							for (g += u; u < g; u++, A += 3) {
								w = p[l[u]], C = h[A], P = h[A + 1];
								var v = h[A + 2];
								f += (C * w.a + P * w.b + w.worldX) * v, m += (C * w.c + P * w.d + w.worldY) * v
							}
							i[I] = f, i[I + 1] = m
						} else
							for (var M = o, y = (I = r, A = 3 * c, c << 1); I < n; I += a) {
								for (f = 0, m = 0, g = l[u++], g += u; u < g; u++, A += 3, y += 2) w = p[l[u]], C = h[A] + M[y], P = h[A + 1] + M[y + 1], v = h[A + 2], f += (C * w.a + P * w.b + w.worldX) * v, m += (C * w.c + P * w.d + w.worldY) * v;
								i[I] = f, i[I + 1] = m
							}
				} else {
					o.length > 0 && (h = o);
					for (var w, x = (w = t.bone).worldX, b = w.worldY, T = w.a, A = w.b, E = w.c, R = w.d, S = e, I = r; I < n; S += 2, I += a) {
						var C = h[S],
							P = h[S + 1];
						i[I] = C * T + P * A + x, i[I + 1] = C * E + P * R + b
					}
				}
			}, n.prototype.copyTo = function(e) {
				null != this.bones ? (e.bones = new Array(this.bones.length), t.Utils.arrayCopy(this.bones, 0, e.bones, 0, this.bones.length)) : e.bones = null, null != this.vertices ? (e.vertices = t.Utils.newFloatArray(this.vertices.length), t.Utils.arrayCopy(this.vertices, 0, e.vertices, 0, this.vertices.length)) : e.vertices = null, e.worldVerticesLength = this.worldVerticesLength, e.deformAttachment = this.deformAttachment
			}, n.nextID = 0, n
		}(e);
		t.VertexAttachment = n
	}(Q || (Q = {})),
	function(t) {
		var e;
		(e = t.AttachmentType || (t.AttachmentType = {}))[e.Region = 0] = "Region", e[e.BoundingBox = 1] = "BoundingBox", e[e.Mesh = 2] = "Mesh", e[e.LinkedMesh = 3] = "LinkedMesh", e[e.Path = 4] = "Path", e[e.Point = 5] = "Point", e[e.Clipping = 6] = "Clipping"
	}(Q || (Q = {})),
	function(t) {
		var e = function(e) {
			function n(n) {
				var i = e.call(this, n) || this;
				return i.color = new t.Color(1, 1, 1, 1), i
			}
			return q(n, e), n.prototype.copy = function() {
				var t = new n(name);
				return this.copyTo(t), t.color.setFromColor(this.color), t
			}, n
		}(t.VertexAttachment);
		t.BoundingBoxAttachment = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(e) {
			function n(n) {
				var i = e.call(this, n) || this;
				return i.color = new t.Color(.2275, .2275, .8078, 1), i
			}
			return q(n, e), n.prototype.copy = function() {
				var t = new n(name);
				return this.copyTo(t), t.endSlot = this.endSlot, t.color.setFromColor(this.color), t
			}, n
		}(t.VertexAttachment);
		t.ClippingAttachment = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(e) {
			function n(n) {
				var i = e.call(this, n) || this;
				return i.color = new t.Color(1, 1, 1, 1), i.tempColor = new t.Color(0, 0, 0, 0), i
			}
			return q(n, e), n.prototype.updateUVs = function() {
				var e = this.regionUVs;
				null != this.uvs && this.uvs.length == e.length || (this.uvs = t.Utils.newFloatArray(e.length));
				var n = this.uvs,
					i = this.uvs.length,
					r = this.region.u,
					a = this.region.v,
					s = 0,
					o = 0;
				if (this.region instanceof t.TextureAtlasRegion) {
					var h = this.region,
						l = h.texture.getImage().width,
						u = h.texture.getImage().height;
					switch (h.degrees) {
						case 90:
							r -= (h.originalHeight - h.offsetY - h.height) / l, a -= (h.originalWidth - h.offsetX - h.width) / u, s = h.originalHeight / l, o = h.originalWidth / u;
							for (var c = 0; c < i; c += 2) n[c] = r + e[c + 1] * s, n[c + 1] = a + (1 - e[c]) * o;
							return;
						case 180:
							for (r -= (h.originalWidth - h.offsetX - h.width) / l, a -= h.offsetY / u, s = h.originalWidth / l, o = h.originalHeight / u, c = 0; c < i; c += 2) n[c] = r + (1 - e[c]) * s, n[c + 1] = a + (1 - e[c + 1]) * o;
							return;
						case 270:
							for (r -= h.offsetY / l, a -= h.offsetX / u, s = h.originalHeight / l, o = h.originalWidth / u, c = 0; c < i; c += 2) n[c] = r + (1 - e[c + 1]) * s, n[c + 1] = a + e[c] * o;
							return
					}
					r -= h.offsetX / l, a -= (h.originalHeight - h.offsetY - h.height) / u, s = h.originalWidth / l, o = h.originalHeight / u
				} else null == this.region ? (r = a = 0, s = o = 1) : (s = this.region.u2 - r, o = this.region.v2 - a);
				for (c = 0; c < i; c += 2) n[c] = r + e[c] * s, n[c + 1] = a + e[c + 1] * o
			}, n.prototype.getParentMesh = function() {
				return this.parentMesh
			}, n.prototype.setParentMesh = function(t) {
				this.parentMesh = t, null != t && (this.bones = t.bones, this.vertices = t.vertices, this.worldVerticesLength = t.worldVerticesLength, this.regionUVs = t.regionUVs, this.triangles = t.triangles, this.hullLength = t.hullLength, this.worldVerticesLength = t.worldVerticesLength)
			}, n.prototype.copy = function() {
				if (null != this.parentMesh) return this.newLinkedMesh();
				var e = new n(this.name);
				return e.region = this.region, e.path = this.path, e.color.setFromColor(this.color), this.copyTo(e), e.regionUVs = new Array(this.regionUVs.length), t.Utils.arrayCopy(this.regionUVs, 0, e.regionUVs, 0, this.regionUVs.length), e.uvs = new Array(this.uvs.length), t.Utils.arrayCopy(this.uvs, 0, e.uvs, 0, this.uvs.length), e.triangles = new Array(this.triangles.length), t.Utils.arrayCopy(this.triangles, 0, e.triangles, 0, this.triangles.length), e.hullLength = this.hullLength, null != this.edges && (e.edges = new Array(this.edges.length), t.Utils.arrayCopy(this.edges, 0, e.edges, 0, this.edges.length)), e.width = this.width, e.height = this.height, e
			}, n.prototype.newLinkedMesh = function() {
				var t = new n(this.name);
				return t.region = this.region, t.path = this.path, t.color.setFromColor(this.color), t.deformAttachment = this.deformAttachment, t.setParentMesh(null != this.parentMesh ? this.parentMesh : this), t.updateUVs(), t
			}, n
		}(t.VertexAttachment);
		t.MeshAttachment = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(e) {
			function n(n) {
				var i = e.call(this, n) || this;
				return i.closed = !1, i.constantSpeed = !1, i.color = new t.Color(1, 1, 1, 1), i
			}
			return q(n, e), n.prototype.copy = function() {
				var e = new n(name);
				return this.copyTo(e), e.lengths = new Array(this.lengths.length), t.Utils.arrayCopy(this.lengths, 0, e.lengths, 0, this.lengths.length), e.closed = closed, e.constantSpeed = this.constantSpeed, e.color.setFromColor(this.color), e
			}, n
		}(t.VertexAttachment);
		t.PathAttachment = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(e) {
			function n(n) {
				var i = e.call(this, n) || this;
				return i.color = new t.Color(.38, .94, 0, 1), i
			}
			return q(n, e), n.prototype.computeWorldPosition = function(t, e) {
				return e.x = this.x * t.a + this.y * t.b + t.worldX, e.y = this.x * t.c + this.y * t.d + t.worldY, e
			}, n.prototype.computeWorldRotation = function(e) {
				var n = t.MathUtils.cosDeg(this.rotation),
					i = t.MathUtils.sinDeg(this.rotation),
					r = n * e.a + i * e.b,
					a = n * e.c + i * e.d;
				return Math.atan2(a, r) * t.MathUtils.radDeg
			}, n.prototype.copy = function() {
				var t = new n(name);
				return t.x = this.x, t.y = this.y, t.rotation = this.rotation, t.color.setFromColor(this.color), t
			}, n
		}(t.VertexAttachment);
		t.PointAttachment = e
	}(Q || (Q = {})),
	function(t) {
		var e = function(e) {
			function n(n) {
				var i = e.call(this, n) || this;
				return i.x = 0, i.y = 0, i.scaleX = 1, i.scaleY = 1, i.rotation = 0, i.width = 0, i.height = 0, i.color = new t.Color(1, 1, 1, 1), i.offset = t.Utils.newFloatArray(8), i.uvs = t.Utils.newFloatArray(8), i.tempColor = new t.Color(1, 1, 1, 1), i
			}
			return q(n, e), n.prototype.updateOffset = function() {
				var t = this.width / this.region.originalWidth * this.scaleX,
					e = this.height / this.region.originalHeight * this.scaleY,
					i = -this.width / 2 * this.scaleX + this.region.offsetX * t,
					r = -this.height / 2 * this.scaleY + this.region.offsetY * e,
					a = i + this.region.width * t,
					s = r + this.region.height * e,
					o = this.rotation * Math.PI / 180,
					h = Math.cos(o),
					l = Math.sin(o),
					u = i * h + this.x,
					c = i * l,
					d = r * h + this.y,
					p = r * l,
					f = a * h + this.x,
					m = a * l,
					g = s * h + this.y,
					v = s * l,
					M = this.offset;
				M[n.OX1] = u - p, M[n.OY1] = d + c, M[n.OX2] = u - v, M[n.OY2] = g + c, M[n.OX3] = f - v, M[n.OY3] = g + m, M[n.OX4] = f - p, M[n.OY4] = d + m
			}, n.prototype.setRegion = function(t) {
				this.region = t;
				var e = this.uvs;
				t.rotate ? (e[2] = t.u, e[3] = t.v2, e[4] = t.u, e[5] = t.v, e[6] = t.u2, e[7] = t.v, e[0] = t.u2, e[1] = t.v2) : (e[0] = t.u, e[1] = t.v2, e[2] = t.u, e[3] = t.v, e[4] = t.u2, e[5] = t.v, e[6] = t.u2, e[7] = t.v2)
			}, n.prototype.computeWorldVertices = function(t, e, i, r) {
				var a = this.offset,
					s = t.worldX,
					o = t.worldY,
					h = t.a,
					l = t.b,
					u = t.c,
					c = t.d,
					d = 0,
					p = 0;
				d = a[n.OX1], p = a[n.OY1], e[i] = d * h + p * l + s, e[i + 1] = d * u + p * c + o, i += r, d = a[n.OX2], p = a[n.OY2], e[i] = d * h + p * l + s, e[i + 1] = d * u + p * c + o, i += r, d = a[n.OX3], p = a[n.OY3], e[i] = d * h + p * l + s, e[i + 1] = d * u + p * c + o, i += r, d = a[n.OX4], p = a[n.OY4], e[i] = d * h + p * l + s, e[i + 1] = d * u + p * c + o
			}, n.prototype.copy = function() {
				var e = new n(name);
				return e.region = this.region, e.rendererObject = this.rendererObject, e.path = this.path, e.x = this.x, e.y = this.y, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.rotation = this.rotation, e.width = this.width, e.height = this.height, t.Utils.arrayCopy(this.uvs, 0, e.uvs, 0, 8), t.Utils.arrayCopy(this.offset, 0, e.offset, 0, 8), e.color.setFromColor(this.color), e
			}, n.OX1 = 0, n.OY1 = 1, n.OX2 = 2, n.OY2 = 3, n.OX3 = 4, n.OY3 = 5, n.OX4 = 6, n.OY4 = 7, n.X1 = 0, n.Y1 = 1, n.C1R = 2, n.C1G = 3, n.C1B = 4, n.C1A = 5, n.U1 = 6, n.V1 = 7, n.X2 = 8, n.Y2 = 9, n.C2R = 10, n.C2G = 11, n.C2B = 12, n.C2A = 13, n.U2 = 14, n.V2 = 15, n.X3 = 16, n.Y3 = 17, n.C3R = 18, n.C3G = 19, n.C3B = 20, n.C3A = 21, n.U3 = 22, n.V3 = 23, n.X4 = 24, n.Y4 = 25, n.C4R = 26, n.C4G = 27, n.C4B = 28, n.C4A = 29, n.U4 = 30, n.V4 = 31, n
		}(t.Attachment);
		t.RegionAttachment = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t, e) {
				this.jitterX = 0, this.jitterY = 0, this.jitterX = t, this.jitterY = e
			}
			return e.prototype.begin = function(t) {}, e.prototype.transform = function(e, n, i, r) {
				e.x += t.MathUtils.randomTriangular(-this.jitterX, this.jitterY), e.y += t.MathUtils.randomTriangular(-this.jitterX, this.jitterY)
			}, e.prototype.end = function() {}, e
		}();
		t.JitterEffect = e
	}(Q || (Q = {})),
	function(t) {
		var e = function() {
			function e(t) {
				this.centerX = 0, this.centerY = 0, this.radius = 0, this.angle = 0, this.worldX = 0, this.worldY = 0, this.radius = t
			}
			return e.prototype.begin = function(t) {
				this.worldX = t.x + this.centerX, this.worldY = t.y + this.centerY
			}, e.prototype.transform = function(n, i, r, a) {
				var s = this.angle * t.MathUtils.degreesToRadians,
					o = n.x - this.worldX,
					h = n.y - this.worldY,
					l = Math.sqrt(o * o + h * h);
				if (l < this.radius) {
					var u = e.interpolation.apply(0, s, (this.radius - l) / this.radius),
						c = Math.cos(u),
						d = Math.sin(u);
					n.x = c * o - d * h + this.worldX, n.y = d * o + c * h + this.worldY
				}
			}, e.prototype.end = function() {}, e.interpolation = new t.PowOut(2), e
		}();
		t.SwirlEffect = e
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function(e) {
			function n(n, i) {
				return void 0 === i && (i = ""), e.call(this, (function(e) {
					return new t.webgl.GLTexture(n, e)
				}), i) || this
			}
			return q(n, e), n
		}(t.AssetManager), e.AssetManager = n
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function t(t, n) {
				this.position = new e.Vector3(0, 0, 0), this.direction = new e.Vector3(0, 0, -1), this.up = new e.Vector3(0, 1, 0), this.near = 0, this.far = 100, this.zoom = 1, this.viewportWidth = 0, this.viewportHeight = 0, this.projectionView = new e.Matrix4, this.inverseProjectionView = new e.Matrix4, this.projection = new e.Matrix4, this.view = new e.Matrix4, this.tmp = new e.Vector3, this.viewportWidth = t, this.viewportHeight = n, this.update()
			}
			return t.prototype.update = function() {
				var t = this.projection,
					e = this.view,
					n = this.projectionView,
					i = this.inverseProjectionView,
					r = this.zoom,
					a = this.viewportWidth,
					s = this.viewportHeight;
				t.ortho(r * (-a / 2), r * (a / 2), r * (-s / 2), r * (s / 2), this.near, this.far), e.lookAt(this.position, this.direction, this.up), n.set(t.values), n.multiply(e), i.set(n.values).invert()
			}, t.prototype.screenToWorld = function(t, e, n) {
				var i = t.x,
					r = n - t.y - 1,
					a = this.tmp;
				return a.x = 2 * i / e - 1, a.y = 2 * r / n - 1, a.z = 2 * t.z - 1, a.project(this.inverseProjectionView), t.set(a.x, a.y, a.z), t
			}, t.prototype.setViewport = function(t, e) {
				this.viewportWidth = t, this.viewportHeight = e
			}, t
		}(), e.OrthoCamera = n
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function(n) {
			function i(t, i, r) {
				void 0 === r && (r = !1);
				var a = n.call(this, i) || this;
				return a.texture = null, a.boundUnit = 0, a.useMipMaps = !1, a.context = t instanceof e.ManagedWebGLRenderingContext ? t : new e.ManagedWebGLRenderingContext(t), a.useMipMaps = r, a.restore(), a.context.addRestorable(a), a
			}
			return q(i, n), i.prototype.setFilters = function(t, e) {
				var n = this.context.gl;
				this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, i.validateMagFilter(e))
			}, i.validateMagFilter = function(e) {
				switch (e) {
					case t.TextureFilter.MipMap:
					case t.TextureFilter.MipMapLinearLinear:
					case t.TextureFilter.MipMapLinearNearest:
					case t.TextureFilter.MipMapNearestLinear:
					case t.TextureFilter.MipMapNearestNearest:
						return t.TextureFilter.Linear;
					default:
						return e
				}
			}, i.prototype.setWraps = function(t, e) {
				var n = this.context.gl;
				this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, e)
			}, i.prototype.update = function(t) {
				var e = this.context.gl;
				this.texture || (this.texture = this.context.gl.createTexture()), this.bind(), i.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL && e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, this._image), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), t && e.generateMipmap(e.TEXTURE_2D)
			}, i.prototype.restore = function() {
				this.texture = null, this.update(this.useMipMaps)
			}, i.prototype.bind = function(t) {
				void 0 === t && (t = 0);
				var e = this.context.gl;
				this.boundUnit = t, e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
			}, i.prototype.unbind = function() {
				var t = this.context.gl;
				t.activeTexture(t.TEXTURE0 + this.boundUnit), t.bindTexture(t.TEXTURE_2D, null)
			}, i.prototype.dispose = function() {
				this.context.removeRestorable(this), this.context.gl.deleteTexture(this.texture)
			}, i.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL = !1, i
		}(t.Texture), e.GLTexture = n
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function e(e) {
				this.lastX = 0, this.lastY = 0, this.buttonDown = !1, this.currTouch = null, this.touchesPool = new t.Pool((function() {
					return new t.webgl.Touch(0, 0, 0)
				})), this.listeners = new Array, this.element = e, this.setupCallbacks(e)
			}
			return e.prototype.setupCallbacks = function(t) {
				var e = this,
					n = function(n) {
						if (n instanceof MouseEvent) {
							for (var i = t.getBoundingClientRect(), r = n.clientX - i.left, a = n.clientY - i.top, s = e.listeners, o = 0; o < s.length; o++) e.buttonDown ? s[o].dragged && s[o].dragged(r, a) : s[o].moved && s[o].moved(r, a);
							e.lastX = r, e.lastY = a
						}
					},
					i = function(r) {
						if (r instanceof MouseEvent) {
							for (var a = t.getBoundingClientRect(), s = r.clientX - a.left, o = r.clientY - a.top, h = e.listeners, l = 0; l < h.length; l++) h[l].up && h[l].up(s, o);
							e.lastX = s, e.lastY = o, e.buttonDown = !1, document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", i)
						}
					};
				t.addEventListener("mousedown", (function(r) {
					if (r instanceof MouseEvent) {
						for (var a = t.getBoundingClientRect(), s = r.clientX - a.left, o = r.clientY - a.top, h = e.listeners, l = 0; l < h.length; l++) h[l].down && h[l].down(s, o);
						e.lastX = s, e.lastY = o, e.buttonDown = !0, document.addEventListener("mousemove", n), document.addEventListener("mouseup", i)
					}
				}), !0), t.addEventListener("mousemove", n, !0), t.addEventListener("mouseup", i, !0), t.addEventListener("touchstart", (function(n) {
					if (null == e.currTouch) {
						for (var i = n.changedTouches, r = 0; r < i.length; r++) {
							var a = i[r],
								s = t.getBoundingClientRect(),
								o = a.clientX - s.left,
								h = a.clientY - s.top;
							e.currTouch = e.touchesPool.obtain(), e.currTouch.identifier = a.identifier, e.currTouch.x = o, e.currTouch.y = h;
							break
						}
						for (var l = e.listeners, u = 0; u < l.length; u++) l[u].down && l[u].down(e.currTouch.x, e.currTouch.y);
						e.lastX = e.currTouch.x, e.lastY = e.currTouch.y, e.buttonDown = !0, n.preventDefault()
					}
				}), !1), t.addEventListener("touchend", (function(n) {
					for (var i = n.changedTouches, r = 0; r < i.length; r++) {
						var a = i[r];
						if (e.currTouch.identifier === a.identifier) {
							var s = t.getBoundingClientRect(),
								o = e.currTouch.x = a.clientX - s.left,
								h = e.currTouch.y = a.clientY - s.top;
							e.touchesPool.free(e.currTouch);
							for (var l = e.listeners, u = 0; u < l.length; u++) l[u].up && l[u].up(o, h);
							e.lastX = o, e.lastY = h, e.buttonDown = !1, e.currTouch = null;
							break
						}
					}
					n.preventDefault()
				}), !1), t.addEventListener("touchcancel", (function(n) {
					for (var i = n.changedTouches, r = 0; r < i.length; r++) {
						var a = i[r];
						if (e.currTouch.identifier === a.identifier) {
							var s = t.getBoundingClientRect(),
								o = e.currTouch.x = a.clientX - s.left,
								h = e.currTouch.y = a.clientY - s.top;
							e.touchesPool.free(e.currTouch);
							for (var l = e.listeners, u = 0; u < l.length; u++) l[u].up && l[u].up(o, h);
							e.lastX = o, e.lastY = h, e.buttonDown = !1, e.currTouch = null;
							break
						}
					}
					n.preventDefault()
				}), !1), t.addEventListener("touchmove", (function(n) {
					if (null != e.currTouch) {
						for (var i = n.changedTouches, r = 0; r < i.length; r++) {
							var a = i[r];
							if (e.currTouch.identifier === a.identifier) {
								for (var s = t.getBoundingClientRect(), o = a.clientX - s.left, h = a.clientY - s.top, l = e.listeners, u = 0; u < l.length; u++) l[u].dragged && l[u].dragged(o, h);
								e.lastX = e.currTouch.x = o, e.lastY = e.currTouch.y = h;
								break
							}
						}
						n.preventDefault()
					}
				}), !1)
			}, e.prototype.addListener = function(t) {
				this.listeners.push(t)
			}, e.prototype.removeListener = function(t) {
				var e = this.listeners.indexOf(t);
				e > -1 && this.listeners.splice(e, 1)
			}, e
		}(), e.Input = n, e.Touch = function(t, e, n) {
			this.identifier = t, this.x = e, this.y = n
		}
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function n(e) {
				if (this.logo = null, this.spinner = null, this.angle = 0, this.fadeOut = 0, this.timeKeeper = new t.TimeKeeper, this.backgroundColor = new t.Color(.135, .135, .135, 1), this.tempColor = new t.Color, this.firstDraw = 0, this.renderer = e, this.timeKeeper.maxDelta = 9, null === n.logoImg) {
					var i = navigator.userAgent.indexOf("Safari") > -1;
					n.logoImg = new Image, n.logoImg.src = n.SPINE_LOGO_DATA, i || (n.logoImg.crossOrigin = "anonymous"), n.logoImg.onload = function(t) {
						n.loaded++
					}, n.spinnerImg = new Image, n.spinnerImg.src = n.SPINNER_DATA, i || (n.spinnerImg.crossOrigin = "anonymous"), n.spinnerImg.onload = function(t) {
						n.loaded++
					}
				}
			}
			return n.prototype.draw = function(t) {
				if (void 0 === t && (t = !1), !(t && this.fadeOut > n.FADE_SECONDS)) {
					this.timeKeeper.update();
					var i = Math.abs(Math.sin(this.timeKeeper.totalTime + .75));
					this.angle -= this.timeKeeper.delta / 1.4 * 360 * (1 + 1.5 * Math.pow(i, 5));
					var r = this.renderer,
						a = r.canvas,
						s = r.context.gl;
					r.resize(e.ResizeMode.Stretch);
					var o = r.camera.position.x,
						h = r.camera.position.y;
					if (r.camera.position.set(a.width / 2, a.height / 2, 0), r.camera.viewportWidth = a.width, r.camera.viewportHeight = a.height, t) {
						if (this.fadeOut += this.timeKeeper.delta * (this.timeKeeper.totalTime < 1 ? 2 : 1), this.fadeOut > n.FADE_SECONDS) return void r.camera.position.set(o, h, 0);
						i = 1 - this.fadeOut / n.FADE_SECONDS, this.tempColor.setFromColor(this.backgroundColor), this.tempColor.a = 1 - (i - 1) * (i - 1), r.begin(), r.quad(!0, 0, 0, a.width, 0, a.width, a.height, 0, a.height, this.tempColor, this.tempColor, this.tempColor, this.tempColor), r.end()
					} else s.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a), s.clear(s.COLOR_BUFFER_BIT), this.tempColor.a = 1;
					if (this.tempColor.set(1, 1, 1, this.tempColor.a), 2 == n.loaded) {
						null === this.logo && (this.logo = new e.GLTexture(r.context, n.logoImg), this.spinner = new e.GLTexture(r.context, n.spinnerImg)), this.logo.update(!1), this.spinner.update(!1);
						var l = this.logo.getImage().width,
							u = this.logo.getImage().height,
							c = this.spinner.getImage().width,
							d = this.spinner.getImage().height;
						r.batcher.setBlendMode(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA), r.begin(), r.drawTexture(this.logo, (a.width - l) / 2, (a.height - u) / 2, l, u, this.tempColor), r.drawTextureRotated(this.spinner, (a.width - c) / 2, (a.height - d) / 2, c, d, c / 2, d / 2, this.angle, this.tempColor), r.end(), r.camera.position.set(o, h, 0)
					}
				}
			}, n.FADE_SECONDS = 1, n.loaded = 0, n.spinnerImg = null, n.logoImg = null, n.SPINNER_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAACXBIWXMAAAsTAAALEwEAmpwYAAALB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTEtMTVUMTY6NDA6NTkrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZDhlNTljMC02NGJjLTIxNGQtODAyZi1jZDlhODJjM2ZjMGMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmYmNmZWJlYS03MjY2LWE0NGQtOTI4NS0wOTJmNGNhYzk4ZWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjk3IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjQyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHN0RXZ0OndoZW49IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNThlMTlkNi0xYTRjLTQyNDEtODU0ZC01MDVlZjYxMjRhODQiIHN0RXZ0OndoZW49IjIwMTgtMTEtMTVUMTY6NDA6MjMrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3YzYzYzIwLWJkYjgtYzM0YS1hYzMyLWQ5MDdjOWEyOTA0MCIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0xNVQxNjo0MDo1OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmQ4ZTU5YzAtNjRiYy0yMTRkLTgwMmYtY2Q5YTgyYzNmYzBjIiBzdEV2dDp3aGVuPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0N2M2M2MyMC1iZGI4LWMzNGEtYWMzMi1kOTA3YzlhMjkwNDAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2OWRmZjljYy01YzFiLWE5NDctOTc3OS03ODgxZjM0ODk3MDMiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2U8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7qS4aQAAAKZElEQVR42u2de4xVxR3HP8dd3rQryPKo4dGNbtVAQRa1YB93E1tTS7VYqCBiSWhsqGltSx+0xD60tKBorYnNkkBtFUt9xJaGNGlty6EqRAK1KlalshK2C8tzpcIigpz+MbPr5e5y987dM2fv4/tJbjC7v3P2+JvPnTMzZ85MEEURQhQClUpB7gRBAECUYiYwH6gDqoEKoA1oBDYCy4OQJgB92R3yq2S5yRilWASs6CZ0DzA5CNmn/ObOOUpB7kQpRgNLcwj9AHCnMiYZfXIT0C/H2DlRSs0gyeiPaQ6xg4FapUwy+mKUY/wwpUwy+uK4Y/xhpUwy+mKfY3yTUiYZfdHiENsahBxRyiSjL5odYncpXZLRJ3sdYhuVLslYKDKqZpSMBXObVs0oGQumA6OaUTL6Iwg5CBzNMXy7MiYZffNCDjH7g5DdSpVk9M36mGKEZOwxq4Fj3cT8UmmSjEm0Gw8At2UJaQhCtilTeeRWM5EdkmVfOwCIUtQBE4AqILC1ZQuwPgjpSKryWwgy1gfZfjsQ886IKFY2xO9N0jOR69srDOAtzCyYFuCUSrcg6AOcBIYCY4C3gVeT+uNJyvg94GPAxzFjcDuBl4C/AP+UBwXBR4AaYDYwDvgr8Drwi1KScRnwXfut6wNcYT+7Ma97LgX+JRd6jfOAucAXgCvTfl4DvAuMtJVJ0cu41IoYWRHTGWM/1TZmq/2fF8nR14r4U2BQF7+LgMW2k7bY54X4Htr5EvD99s5SlriPArcAY+VGsh1YYDpwMzAgSwy2svhWscpYA/wkx9gKm5S5wBA5kgjnAJcDX7NNpVxcWAZMLUYZJwHDHeKrgXnAdWjZlSS4BLgVuMzRlxt9eeNTxsG2veFyy7gQWAR8Sq54byfeYDssAx3LqLabJldBytgMHMjjuPHAQvTOsU++aJtE/fI4dpevTqZPGV+2veN8+DTwIHCBr29hmVJhJXwA+GAex7cBjxZjm7EFWAL8DfeX39s7NPOy9PKEO7XAV+k8xJYLrcDPgL8Xo4xgJqIuA7bkeXw9ZsBVxMMMYEqex64FfuO7e++bTcAPgD8Bpx2PvRSYKIdi61DOs3edXImAV4Cv2zJsKnYZ24B/AJ+xteRrwAmHBF4mj2JhEnCRg4QnrYh3YZ5NH/J9gUmP5zXYtsdsW+Pl8vffkEex8I5D7HHgGeBhe0dLhKRlbMJM298NXI8Z68rGk8AGeRQLu4DHMGOL2dgJPA78AXguyQvsjScdrTYp2zBDPzfbXl7mmNc64B7MFCbRc/bbfPYHrs343WnbZHsG+BXwZ8y65JS6jOnfwPuBg8BnMQtxjsWsh/0IsNJ2fkR8bAHutbfhG2x7vp9tDzZiFs5/Non2YaHJ2N6OWQf8BxiBeRx4EDPZ9nm544WNVsLtwFWYJ2Wh/fmO3ryw3noHpiv6YyZ5NsuXROhrRypeAv7nfHQJvAOTjbclYuJ3pWcL6YL03rSQjEJIRiEZhZCMQjIKIRmFZBRCMgrJKIRkFJJRCMkoJKMQklFIRiEkoxCSUUhGISSjkIxCSEYhGYWQjEIyCiEZhWQUQjIKySiEZBSSUQjJKCSjEAVCJUAQmCWPoxSjgZuAaZgF348D+zD7ADYDe+2nGWgJQg52dVJvSzOLgqHdmU5ln2IYZou9861Do+x/j8Ss2z7AOrQJWBOEZtetKIrMmt5BEBClWAQsxW3b16OY/QHXA6uD0GzpG0VRPmt6i2KSMeyQrxpYgNl4dCJmV7NcOQEsCULu6ZCR+mAmZiOannAMuC0IWS0Zy0PGKMUCzFZug3p4ullsiJ5obzPOj+H6BgGrohR1KqrSx5bzqhhE7PCvXcY4BZqgoioL4iznunQZq2M8cZXKqSyIs5yr02WsiPHEaiyWSbMxxnNVpMvYFuOJj6mcyoI4y7ktXcbGGE/conIqC+Is58Z0GTfGdNIGzJijKH3W2/KOg43pMi4n//2F92P2KJ4ShCwMQvT4pRwajCFRELIQmGLLf3+ep9pj/TvjCcwI4E5gDp1H0VsxO7k3Zvy7PQjZnXl2DXqXhYydiFKMAcYD44CajH+HZIQfBdYCtwch+854HJh2wkqgFhgGHAaagpAjLhcqGctTxqxOpKgCRgNDMXuK7whCTqU7U9khz3ucAv59xomUe9FVhePGEfs5q1eaQiYKBskoJKMQklFIRiEko5CMQkhGIRmFkIxCMgohGYVkFEIyCskohGQUklEIySiEZBSSUQjJKCSjEJJRSEYhJKOQjEJIRiEZhZCMQjIKIRmFZBSijGXMvIZ+KpZEaF8qeygwHOjb2xdUWQBJqQL6ADOBi4GHMGuGH5Iv3hiG2SJtIWaV4mZgB/AadF6jvVxkvAKzv3UdMNX+bDJm9fx10PV+1qLHIl4P3GLzfh3QBLwKbAZ+DJwuFxkDm5CZmN0Vzsv4/TTMyviVwGOYnRZEPAwBZgDfAC5K+/lo+5kKXAjcBzwPnCz1NuP77LfxO12I2M7FNmFXE+++huVOPfDNDBEz25FzgHuBa4Bzk8x/0jJeCiwCFmP2BsnGh4BbgYFyKDZmZRExnTpbGcywHZySuk0PsbeAG4HZDt+2C6yMb8mjWHgXs+NFd5v09Ac+AYzC7An0EPBKqdSM1wDfBqY7Vvubk263lDhPYHamypVa4MvAHUCq2GvGgcB8YAEwKQ/5nwa33blEVrYDLwJXOhxzLvBJzDhkK/BCMdaMA4C5wF2Y4RrXv7UF+KO9tYh42A08msfoRxVwLfBDYGwxyliLGUMclMexL9rOy075EyvvAKuBlcCbeTa3Pl+MMk7GbP/qyiHg18BWueOFNnu3ymeP8X62h11dbDKm7K3a9Zv7e+BJOeOVRmCNvQO5cgmdt4AueBkH5zCE0FWHpQH4r3zxzlPAw3kcdxg4VmwybnaMfx1YAWxTpyURjtj24wpHuZ7C0yNanzL+FnjZIX4lsEGOJEorcDewKcf4vTb+ZLHJuAeYBxzvJm4/8CPg58AJ+ZE4BzBDNk93k//jwOeAN4qxNw1m5sdV9jZwtlvv48ADujX3GpFtUt0OhPZnJzN63wdtOW7xeSFJPJvehBnBv8/2ricAp2wb8UHgETRvsRDYCiy3IrbPCWi0Mt4BPOf7AoIoivycub5TR/rDmBkjs4Df2fbHJjlQcLwfuNyW13rMXILOkyQ2REUtI5jnnG+mNRFOF3Gh1dlavgozhHUMaLEFGJWImBVnbT4VlYwlSBCYL1iUYgGw6ixhDUHIwo4GmfIrGX3JGKWotj3KbM/cpwQh2yRjYfWmS5EFdD/54ytKk2RMgukxxQjJ2GMm5hAzPEoxRqmSjN6IUgwj9xkr45UxyeiTkQ6x45QuyeiT8x1ia5QuyeiTUaoZJWMxyqiaUTIWzG1aNaNkLJgOzJAoRZVSJhl9McIxfrRSJhl94fq241ClTDL6Yq9jvCYNS0ZvuEwGPopZmlhIRi+sIfeXxtYGIaeUMsnohSCkCViSQ+gezAtOwiW/mvzpkKz3ZnrPxCz1V4dZd6YC8+JSI2YNm+VWXE2ulYyiGPk/nslB8d6ayMkAAAAASUVORK5CYII=", n.SPINE_LOGO_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABsCAYAAAALzHKmAAAACXBIWXMAAAsTAAALEwEAmpwYAAALB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTEtMTVUMTY6NDA6NTkrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTdhZGQ3Ni04OTZlLThlNGUtYmM5MS00ZjEyNjI1YjA3MjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplMTViNGE2ZS1hMDg3LWEzNDktODdhOS1mNDYzYjE2MzQ0Y2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjk3IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjQyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiIHN0RXZ0OndoZW49IjIwMTYtMDktMDhUMTQ6MjU6MTIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNThlMTlkNi0xYTRjLTQyNDEtODU0ZC01MDVlZjYxMjRhODQiIHN0RXZ0OndoZW49IjIwMTgtMTEtMTVUMTY6NDA6MjMrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJlNjJiMWM2LWIxYzQtNDk0MC04MDMxLWU4ZDkyNTBmODJjNSIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0xNVQxNjo0MDo1OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDE3YWRkNzYtODk2ZS04ZTRlLWJjOTEtNGYxMjYyNWIwNzI4IiBzdEV2dDp3aGVuPSIyMDE4LTExLTE1VDE2OjQwOjU5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZTYyYjFjNi1iMWM0LTQ5NDAtODAzMS1lOGQ5MjUwZjgyYzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2OWRmZjljYy01YzFiLWE5NDctOTc3OS03ODgxZjM0ODk3MDMiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2UiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDowODMzNWIyYy04NzYyLWQzNGMtOTBhOS02ODJjYjJmYTQ2M2U8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ayrctAAATYUlEQVR42u2dfVQV553Hv88AXq5uAAlJ0CBem912jQh60kZ8y0tdC5soJnoaXzC4Tdz4cjya1GN206Zqsu3Jpm6yeM5uTG3iaYGoJNFdEY3GaFGD0p4mqS9AXpoV0OZFUOHS3usFuc/+Idde8M7M8zr3gsw5HOCZZ2aemecz39/LPPMMMLAMLDG2kIFzjqmFDiDZP6AkN3gf0gEob8x2kj4MCx2AMnbb1BcVld6IwJJ+0oYb2YTT/gYq6WPHJP3gmtA+Biztr1CSKLevLytprCkh7ctQkj4KsK590hiGlsbSOcVCR5I+BC7pA6BEAzQaq1DqhFFH3Vg16TSG4KHRgNPpyFd1XdIHAyrdCkhjADgaTSiJw/VIP1BSp6GhUQSOOgmlkzASxSqq2zpQB+ClGiGlUb65tAUZOmDUAa5u5XRSgajibVRCR3VCSRyoQwSBE/EvYy3YkYGESuwrpuAkDgPJCg4RhFVUNUkMw6hK6agDcFInoSQxAqNqWHVdD6fUhQqUsfiaVCN41IlOUBEx88JIJCCU8T+tttOR6pEFUgRQXoCVrydRAJJw/G+2jig6llN+p0wnsZpYXsAoxzGognYzryeagBRRR8L5t4iCRsvflDHnIopINcCpGkzlUOoCkqWcKABdlznXZa5lTK7Z/6zlvMeXXqdTCVWoI696ygZN0YZSp/KxQCijmiJgUp3gyQBpVy4Kq4gPqhpWlQrCCxgPeLz70wqmyqcksgELS5kKQEWCIBn1FEn7qFBKKgmnajCloZQtlwWSZR0PoCJBkJMDMnT4iSxlsQCmFJQidVUASQS3ZSlXadqhWDVkTCoLiDKw8t40XOU6oFQBJMtvkSBJ1ITLqKaOgIbVF+y9jd3/omAqVUtViigTTfMAyKqqKnxOlWZcFEzVZjrSb11gaodSRiVVAikCo4hKyjzpkh3No8tf1AUmrxnXCmW0gSSCcIqki4hipbTqGNU+IwuMqsAUfSLVoywezi46gGSFU8Sk86bBKOd1oJzrwuuEQLIbBU8sfiPC37DYhuW8pEfex3NcQBUqyVrO+7edeZdNIfFCSi22oZwdSkzUk1jAaQcrGMA0O34kUJXAaAYl0aSMkRQMjODxAArGct6onPf68CgLbGCkNv4r4axrp4wwUUc7CAnDdkzXJ14SNFHVEQFNRjHtbg7ZoMfuOlHGDiG9/DPCCDgLjDBROFgon50ZV6mQ1/YVzwmgSniJhFryAMpybB4TLjJLRqTOZPUbZYIrwmiqZYC02lboXOIV0C3qm5nVZQGSSCiuaETOe5PygEg4AbXyM1lhJIxqqiWYUQklUaiShMGc2gFpBbDdcXl9StHXka38KVZ/i8V35DXzZibcClIWtRS90ZQpJa/ysZhtHiBV+pk8imm2TjTFwxsQWIHL42PaRd4iroW0ksZLKAFv5MoKbyQQVZl1mShc5LxYOo4Fxt4KyZPysXMhrOrwqKWyHGa8wiCHVSXtzDaxgYSA36xDEk4V5lvGpxRVIZb8pZ0Z571x7My6Up9S17SBhMGvjASfocCUi0TkvOaZMJh11vSPGVSEcT0s1JYyKKnu1BABQOMloeJ9ssMCg53phoKUkVDQs2MMcvNSsZICwfYufPZVB+o/86HxbAAXP/ah9Z2LuPSnAK5wqB1PLlIkmGEBkzVbwKuWolkE6ddXeYeb2akfEfwRTRnZRf89/r84Bf81NB73WtDQ+VUHKocfw1ob35J3QAXrYApq8X94edBmvVUZS9si/Qbr/wacWXgeN/LCCAHAQ+sNhvqhOiQOcNucZMKwQXh42XCkM95AELjZRFNjRCAPSxSmAbXlKXlNOlF0wj2WoqKi5Hnz5mdTGiQA8OCDDx4T6aiNGzeOufnmm5MBoKysrHbfvn3tVhf40hX8MSked1u1LUhx+e1mXGBIz1znC77xxtaJhmFQwzDo3LmPHBdJ6ezZs2cqIVf3UVt7unH16tWNsB4gwpItsPKdlSfTZd4EZH1MKKJkEX8WLfqnlPXr1/8oNTV1QQ8QgsG2pqamX+TkZG+OtP/y8jcn5efnb+nq6vKmpg7NfeONrZOmT5++3uVyZYTvp76+vjg3d8IWs2vy2DDcsunvUDrIQLrZBT3fgXduO4ZnrEx1aWlpbkHBrM0AkJyclFVZWZl3990TngpvT1dXl7e29vRLU6dOLTcxmT3+P3Hi5NLMzMwlhmEkh7fH7/cfraqqemHevLknTMy10yZci/mO2rR5GzZs2JaamrogGAy2Xbx4cWtTU9OLXq93r2EYyR6P52kLdQQAxMXFJR05cvSRGTNmvOZyuTJ8Pl+d1+utCa0fPXr0kydOnHzSzFRu+RLNM09j7qc+vHY5iIbe7Wu7gt8t+wwbGG9YAEBV1eHvT516z0uh9vj9/tpQW7Ozc54rL39zkt1Dh6+/Pl/h8XieNgwjORAInGpqanqxvb19TzAYbHO73VPz8vK2vfXW29kKUnuOLIZitYWFryjlq1RXV890uVxjAWD37oqFo0Z5fjR2bNYvRozIWLFx48b7zpw5s8EmqgYA5OTkrA8EAud2767452HD0ueOGJHxxLp16x7w+Xx1AODxeB5buXLlCDOf9d2L8H7rd3jFfQSzv/MBpjx7BrP/4yzmP1qP76W8j6U7m3HJzpoEg8Fr5ePHj1/n8/nqtmx5fe6wYemPpKffNreysnJxaP2999672sqi/eEPJ5YkJiZmAcDhw1WP3nrrLQVjx2Ztysi4ffmqVSunBAKBU4ZhJE+bNu1VDj81qosRZfVjyU0CABk6dGgmAHR2djYVFRWdCl+3du1Pzo0bl7PZDPxwCHw+X11R0aOPLFy4sCa0vrj4P8+9++7+jaE6P/jBY3NYgrTft8P3s0Y0rPkcn5R9jRaGtNR159zdnieeeuqpulBZYeGCmsbGxtcBwO12jzFT3Iceejh55MiRTwBAQ0PDzwsKCqrDj1NSUuL98MMPX+hW3pHvvXdwqoK+1jELs3KlVGHmbZPVgUBHGwAkJCRklpSUjBW9MB988PvXwwKaa3UWLVpUEwgEzgFAamrqnWYppZ+Owt8eHoeCfdmY/vYYTH43B9/76Nt4tP5uLHlrDCbyntd77x0oPnDggLd3nbNnz9aG/i4vf3NipG1XrFgxKeRD7tq1a2+k4+Tn570fDAbbAOD222/P5uwTJ9/41BJ9izaOKXVQXFxcWVxc/IxhGMmzZj20+5NPPn21vLx8+9q1Pzlrd/xwpWxtbfWawev3+//kcrkyUlJSJpi1618z8cs4guRIx/mmG34Aky2i0+si1bC29VgX1s4e7Q+vl5aWNiJUmJ2dnVlRUTGiWxUpAISi8M7OzqaQ66O4r7UM4HDyxTEpn+XXv/5V2/Tp/1CYn/+PryQkJGSmp6cvXbVq1dLFixdX19TUbJ49++Fjsvm1L774oqYbSMtcpOk6YrqOuwND6S7W/dx///0l6CdLfBQVkntZuHDhqfnz58/84Q9XP5iZmbkgMTExa8iQIZOnTZs2+fPP/2/7HXd8Y63uNrR04vitgzAt0rqvOnAADgyCjbScOXNmAyGEAoBhGNd+E4Jrqrl//77KGwlK6hSY27Zta922bdtWANsrKiomT5iQ+y+JiYlZaWlp83bs2LlvzpzZx0X3PXz48Nyr/utV3zLS8vgn+Onr3wK9ZRDuI93X7wpFW9Nl7J51GpsQpY+4jxuX8yqsHy9SxMAH5p1KCfGAq3R/BQUF1cuXLy8KOfKjRo3KipDQ7bGkpKQkmbXrpptuGg0AXq+33uyglRfQdtsxPJ15HJOL6pE/4xS+m3AY373jt3j59F/gtzn369oUUrXedQn5a3lYnR7n5fP5rvmdW7ZsyXKYHW1fVjMcbqjyLyjs2PF2W0dHx1nWHdx117cfz8vLS+q9r4MHD82Ji4tLAoDm5uY6WM/6gHMBdJZ+jfN7LqAVzn0cqceyb9871X/NZ9433+6GjCXwoqWUvJ1hCUFjY9O/19XVLSssLOwR+R469JsHQsnjy5cvtyHSY6swNRo8ePCdpaVl5WVlZbmhstLS0gnjx49fBVx9vPfssz/eEaFN17VrrQee34zDA59OwIrWKdjsvwf/uysL90TYhjKCyzPvOH3++efPtrS0bO+OxOedOHFyaaR9VldXz2hsbHpRQf9R8E05I8RFvNM+oY1Pavpik8vlykxJSSl85ZVNz7z00svvB4NBEhcXlxwG5OlJkyZuh/mLUSGTVzd48OA7Z84s+OX5883nuvd97Znz0aNH/u3gwYPeCBexRwDzq7/HXYvS8VrvE5mSjO8DOGzRCT0nc+oOTnp3bASzHrFD16xZs2HTpk1ZiYmJWR6P5+lLl1qXBAKBU6H1brd7Snh1sD2rjqqJNxw6sOzkobSqquoFv99/NHShhwwZMjkEZEtLy/Zly5YtMrubwzv40KFDL3/00UfPdXV1eV0uV0YIyEAgcK6iYtcTs2bN2m+iCD3KvuyAN1LDr1D8xSSwuFYW3p7m5mavHRQXLlxoM1FdunPnjtbly5cXNTQ0/DwYDLYZhpHsdrunhH6Aq4MyPv744yWM6kwZ1VFr7tDub7P/HR8lBIAUFRWlRBi2Fn6DXXec0CghAKisrFxcWLjgOABSVlY2MQRG92M+rhfHGnKxZmQiFgAgXRTeLzuwf+Vn+O//aUErg2ljnemMdZQOBUBLSkrGpqXdkhQCPz8/7wjYBveKjBLinenN1nIAoCpHnvNOEGD2zo0RATKrdbZvPJaXvzk5BOXevXsfnz9/Xg3jednlYsnEJAz5hhvuPRdwsfUKuhhUHzYdZjWvJAuwlBE8ltHoVnDa3UDCUKp8omM3QwPrdlb7sVuHSD5luLns/ttquhIzGCP6eMe9aD/uRTtnMAfoeSXCDkie9rGabuX+qFOPGSMFHdREgVjA6w0N7xt2PLNWUCur8ZwHnu8kYWTbFfiS4zHY3wX/nFr8llEZRGG0U1Fq4xebKR+PD6kN1mg80bEC1Awyq1dCbUG0UEpWv9sUrCcz8OOkePR4Xp79N7jr5J8RsIFSdo5yW//SQkV5VZIKmmKhaDxeEkKr90/AYM5Z1NIOFtuX4ktLS08TQhZRSklpaWkt+N+tNl28XfhjOJS+LtSf/DMuC4Aoo5i8QFKbDIFTSfbIT7M4Ah2WYEck+FH9Zh/AN+EVU6RtBuo3B2PQ1tGYlZYAT3sXvljXgMqdzWiTMN0qfEuegEVHlC38eq1IR7BOJgAOIKEATqt9mKWw7CJuFZPx83x+xA5Klq8+iAIJsL8kZrdOGso4zo5gnQhV9qsOVuMheYbYs3yvmmc9lagn+iUGarMPVsW0y5FSAUXXYuLjBXZMBLdhmU02UtBjFQzx+ps850EtoLfzpbnVgUN5VOQxWdVR9MtmUiki1Skhq3wiTIBkgRMCKR/CWM6bV+W581kHL7DkMXk+1sQKJK9VcWQEEq/5FjXhIsGF7Ddt7MDhufAqTBYFlHzuWORLYpRBSXnNtowvKaWULDN42W3D+hkNMOQhAfNEN8/stay5U5nv3/AGPLI5TFa/kgrUlb05uW7gOEF1UqWWdhOk8kS9Ks0uT3BDGbbn8Sl54VTla1qZZ542Sy9xnGkgcAAkOoMukQBT1L+TMfci7gGvOecxsSzmXTaYYTk/nuvODSVLmchH5cH5t+hMuyyjuFmdedFXGyij/waoiXhlHlOyHgsMbY5q9G3le/LOu83ywSHRNBXLY1GRtA9vwMPaqU59wVZFG6DoWkkppajS8XyHW8V3t4lEekP09VS7kTp2Ebmsvyli0kWyBSqsyHVlcYIAyviWsmASThhVBjY84wtZ9suaK5RJy4iaaNa8pVKVNINSRi11gSkSheu4o82UkAVmnhymKIgi0TnA/8hRNPKmqqHkVUsnwBR91Meqjiocd5ZASgQKFT4nT1DDA6TUdSOaymXAFEkniZp7FSOBdAU9LOkVqgBQp4BkLieKgLUqkzXvVuDx7EMEQl35URHoIAmODMAqFJIZyjjNKqriE8a8yXynAxsIdgRrp/KabxkYow6kjFKIqqjKZDnhvAFELYNO8w3Jjuc15yLmmjWoUQZlnIT5UgGmjGqyjLtUrXy6oGRRTl2QivqwrJaJG2KZ5DQvsKwmmccHZVVD2fSSLmXk6XxRSHgVU5U6iqqnFJSyYKqAU+QGiJVAh2oClUdhqeLjSgOpSjFkTbwOVRXNGEDB9aCSwFIFHa3DFZBRfi1Q6gBTFk4Rs63zGijrFIg/ylRt7lW3m6kOUagQqiJ5orFONKJtHR0ok/vUAaPKOrbRt2owZZVTJmhRDaKOYW26I1st06yoBFKmk4jD61UCShSfq1OdpTLgUDW6R8t87rqcfZ1BlMr6uq6Vjhf2owGvozDKmG9dyiQCeTSAiwXVdNIP1A2uls7QkYhW/fgzVgIeXVOe6ISFOnSOjjn+uuHsK5F2NM1hLG/jSGfpjoSdjLSJg7Cp7FjaR7ZzXEGcinBJDF8DnZ1Ho7wPrYNadHdINGCLdVMdrU6nMdimqHYgiaF2kn4IXJ8FMJY6iPRxsPqTksbc55ZJP2vHgOnuYwD2tU4k/eycaT891g0F5YDZ7qfQ3SidTAZgG4By4FwHgBtYBpYbZ/l/2EJnC9N0gaQAAAAASUVORK5CYII=", n
		}(), e.LoadingScreen = n
	}(Q || (Q = {})),
	function(t) {
		! function(t) {
			t.M00 = 0, t.M01 = 4, t.M02 = 8, t.M03 = 12, t.M10 = 1, t.M11 = 5, t.M12 = 9, t.M13 = 13, t.M20 = 2, t.M21 = 6, t.M22 = 10, t.M23 = 14, t.M30 = 3, t.M31 = 7, t.M32 = 11, t.M33 = 15;
			var e = function() {
				function e() {
					this.temp = new Float32Array(16), this.values = new Float32Array(16);
					var e = this.values;
					e[t.M00] = 1, e[t.M11] = 1, e[t.M22] = 1, e[t.M33] = 1
				}
				return e.prototype.set = function(t) {
					return this.values.set(t), this
				}, e.prototype.transpose = function() {
					var e = this.temp,
						n = this.values;
					return e[t.M00] = n[t.M00], e[t.M01] = n[t.M10], e[t.M02] = n[t.M20], e[t.M03] = n[t.M30], e[t.M10] = n[t.M01], e[t.M11] = n[t.M11], e[t.M12] = n[t.M21], e[t.M13] = n[t.M31], e[t.M20] = n[t.M02], e[t.M21] = n[t.M12], e[t.M22] = n[t.M22], e[t.M23] = n[t.M32], e[t.M30] = n[t.M03], e[t.M31] = n[t.M13], e[t.M32] = n[t.M23], e[t.M33] = n[t.M33], this.set(e)
				}, e.prototype.identity = function() {
					var e = this.values;
					return e[t.M00] = 1, e[t.M01] = 0, e[t.M02] = 0, e[t.M03] = 0, e[t.M10] = 0, e[t.M11] = 1, e[t.M12] = 0, e[t.M13] = 0, e[t.M20] = 0, e[t.M21] = 0, e[t.M22] = 1, e[t.M23] = 0, e[t.M30] = 0, e[t.M31] = 0, e[t.M32] = 0, e[t.M33] = 1, this
				}, e.prototype.invert = function() {
					var e = this.values,
						n = this.temp,
						i = e[t.M30] * e[t.M21] * e[t.M12] * e[t.M03] - e[t.M20] * e[t.M31] * e[t.M12] * e[t.M03] - e[t.M30] * e[t.M11] * e[t.M22] * e[t.M03] + e[t.M10] * e[t.M31] * e[t.M22] * e[t.M03] + e[t.M20] * e[t.M11] * e[t.M32] * e[t.M03] - e[t.M10] * e[t.M21] * e[t.M32] * e[t.M03] - e[t.M30] * e[t.M21] * e[t.M02] * e[t.M13] + e[t.M20] * e[t.M31] * e[t.M02] * e[t.M13] + e[t.M30] * e[t.M01] * e[t.M22] * e[t.M13] - e[t.M00] * e[t.M31] * e[t.M22] * e[t.M13] - e[t.M20] * e[t.M01] * e[t.M32] * e[t.M13] + e[t.M00] * e[t.M21] * e[t.M32] * e[t.M13] + e[t.M30] * e[t.M11] * e[t.M02] * e[t.M23] - e[t.M10] * e[t.M31] * e[t.M02] * e[t.M23] - e[t.M30] * e[t.M01] * e[t.M12] * e[t.M23] + e[t.M00] * e[t.M31] * e[t.M12] * e[t.M23] + e[t.M10] * e[t.M01] * e[t.M32] * e[t.M23] - e[t.M00] * e[t.M11] * e[t.M32] * e[t.M23] - e[t.M20] * e[t.M11] * e[t.M02] * e[t.M33] + e[t.M10] * e[t.M21] * e[t.M02] * e[t.M33] + e[t.M20] * e[t.M01] * e[t.M12] * e[t.M33] - e[t.M00] * e[t.M21] * e[t.M12] * e[t.M33] - e[t.M10] * e[t.M01] * e[t.M22] * e[t.M33] + e[t.M00] * e[t.M11] * e[t.M22] * e[t.M33];
					if (0 == i) throw new Error("non-invertible matrix");
					var r = 1 / i;
					return n[t.M00] = e[t.M12] * e[t.M23] * e[t.M31] - e[t.M13] * e[t.M22] * e[t.M31] + e[t.M13] * e[t.M21] * e[t.M32] - e[t.M11] * e[t.M23] * e[t.M32] - e[t.M12] * e[t.M21] * e[t.M33] + e[t.M11] * e[t.M22] * e[t.M33], n[t.M01] = e[t.M03] * e[t.M22] * e[t.M31] - e[t.M02] * e[t.M23] * e[t.M31] - e[t.M03] * e[t.M21] * e[t.M32] + e[t.M01] * e[t.M23] * e[t.M32] + e[t.M02] * e[t.M21] * e[t.M33] - e[t.M01] * e[t.M22] * e[t.M33], n[t.M02] = e[t.M02] * e[t.M13] * e[t.M31] - e[t.M03] * e[t.M12] * e[t.M31] + e[t.M03] * e[t.M11] * e[t.M32] - e[t.M01] * e[t.M13] * e[t.M32] - e[t.M02] * e[t.M11] * e[t.M33] + e[t.M01] * e[t.M12] * e[t.M33], n[t.M03] = e[t.M03] * e[t.M12] * e[t.M21] - e[t.M02] * e[t.M13] * e[t.M21] - e[t.M03] * e[t.M11] * e[t.M22] + e[t.M01] * e[t.M13] * e[t.M22] + e[t.M02] * e[t.M11] * e[t.M23] - e[t.M01] * e[t.M12] * e[t.M23], n[t.M10] = e[t.M13] * e[t.M22] * e[t.M30] - e[t.M12] * e[t.M23] * e[t.M30] - e[t.M13] * e[t.M20] * e[t.M32] + e[t.M10] * e[t.M23] * e[t.M32] + e[t.M12] * e[t.M20] * e[t.M33] - e[t.M10] * e[t.M22] * e[t.M33], n[t.M11] = e[t.M02] * e[t.M23] * e[t.M30] - e[t.M03] * e[t.M22] * e[t.M30] + e[t.M03] * e[t.M20] * e[t.M32] - e[t.M00] * e[t.M23] * e[t.M32] - e[t.M02] * e[t.M20] * e[t.M33] + e[t.M00] * e[t.M22] * e[t.M33], n[t.M12] = e[t.M03] * e[t.M12] * e[t.M30] - e[t.M02] * e[t.M13] * e[t.M30] - e[t.M03] * e[t.M10] * e[t.M32] + e[t.M00] * e[t.M13] * e[t.M32] + e[t.M02] * e[t.M10] * e[t.M33] - e[t.M00] * e[t.M12] * e[t.M33], n[t.M13] = e[t.M02] * e[t.M13] * e[t.M20] - e[t.M03] * e[t.M12] * e[t.M20] + e[t.M03] * e[t.M10] * e[t.M22] - e[t.M00] * e[t.M13] * e[t.M22] - e[t.M02] * e[t.M10] * e[t.M23] + e[t.M00] * e[t.M12] * e[t.M23], n[t.M20] = e[t.M11] * e[t.M23] * e[t.M30] - e[t.M13] * e[t.M21] * e[t.M30] + e[t.M13] * e[t.M20] * e[t.M31] - e[t.M10] * e[t.M23] * e[t.M31] - e[t.M11] * e[t.M20] * e[t.M33] + e[t.M10] * e[t.M21] * e[t.M33], n[t.M21] = e[t.M03] * e[t.M21] * e[t.M30] - e[t.M01] * e[t.M23] * e[t.M30] - e[t.M03] * e[t.M20] * e[t.M31] + e[t.M00] * e[t.M23] * e[t.M31] + e[t.M01] * e[t.M20] * e[t.M33] - e[t.M00] * e[t.M21] * e[t.M33], n[t.M22] = e[t.M01] * e[t.M13] * e[t.M30] - e[t.M03] * e[t.M11] * e[t.M30] + e[t.M03] * e[t.M10] * e[t.M31] - e[t.M00] * e[t.M13] * e[t.M31] - e[t.M01] * e[t.M10] * e[t.M33] + e[t.M00] * e[t.M11] * e[t.M33], n[t.M23] = e[t.M03] * e[t.M11] * e[t.M20] - e[t.M01] * e[t.M13] * e[t.M20] - e[t.M03] * e[t.M10] * e[t.M21] + e[t.M00] * e[t.M13] * e[t.M21] + e[t.M01] * e[t.M10] * e[t.M23] - e[t.M00] * e[t.M11] * e[t.M23], n[t.M30] = e[t.M12] * e[t.M21] * e[t.M30] - e[t.M11] * e[t.M22] * e[t.M30] - e[t.M12] * e[t.M20] * e[t.M31] + e[t.M10] * e[t.M22] * e[t.M31] + e[t.M11] * e[t.M20] * e[t.M32] - e[t.M10] * e[t.M21] * e[t.M32], n[t.M31] = e[t.M01] * e[t.M22] * e[t.M30] - e[t.M02] * e[t.M21] * e[t.M30] + e[t.M02] * e[t.M20] * e[t.M31] - e[t.M00] * e[t.M22] * e[t.M31] - e[t.M01] * e[t.M20] * e[t.M32] + e[t.M00] * e[t.M21] * e[t.M32], n[t.M32] = e[t.M02] * e[t.M11] * e[t.M30] - e[t.M01] * e[t.M12] * e[t.M30] - e[t.M02] * e[t.M10] * e[t.M31] + e[t.M00] * e[t.M12] * e[t.M31] + e[t.M01] * e[t.M10] * e[t.M32] - e[t.M00] * e[t.M11] * e[t.M32], n[t.M33] = e[t.M01] * e[t.M12] * e[t.M20] - e[t.M02] * e[t.M11] * e[t.M20] + e[t.M02] * e[t.M10] * e[t.M21] - e[t.M00] * e[t.M12] * e[t.M21] - e[t.M01] * e[t.M10] * e[t.M22] + e[t.M00] * e[t.M11] * e[t.M22], e[t.M00] = n[t.M00] * r, e[t.M01] = n[t.M01] * r, e[t.M02] = n[t.M02] * r, e[t.M03] = n[t.M03] * r, e[t.M10] = n[t.M10] * r, e[t.M11] = n[t.M11] * r, e[t.M12] = n[t.M12] * r, e[t.M13] = n[t.M13] * r, e[t.M20] = n[t.M20] * r, e[t.M21] = n[t.M21] * r, e[t.M22] = n[t.M22] * r, e[t.M23] = n[t.M23] * r, e[t.M30] = n[t.M30] * r, e[t.M31] = n[t.M31] * r, e[t.M32] = n[t.M32] * r, e[t.M33] = n[t.M33] * r, this
				}, e.prototype.determinant = function() {
					var e = this.values;
					return e[t.M30] * e[t.M21] * e[t.M12] * e[t.M03] - e[t.M20] * e[t.M31] * e[t.M12] * e[t.M03] - e[t.M30] * e[t.M11] * e[t.M22] * e[t.M03] + e[t.M10] * e[t.M31] * e[t.M22] * e[t.M03] + e[t.M20] * e[t.M11] * e[t.M32] * e[t.M03] - e[t.M10] * e[t.M21] * e[t.M32] * e[t.M03] - e[t.M30] * e[t.M21] * e[t.M02] * e[t.M13] + e[t.M20] * e[t.M31] * e[t.M02] * e[t.M13] + e[t.M30] * e[t.M01] * e[t.M22] * e[t.M13] - e[t.M00] * e[t.M31] * e[t.M22] * e[t.M13] - e[t.M20] * e[t.M01] * e[t.M32] * e[t.M13] + e[t.M00] * e[t.M21] * e[t.M32] * e[t.M13] + e[t.M30] * e[t.M11] * e[t.M02] * e[t.M23] - e[t.M10] * e[t.M31] * e[t.M02] * e[t.M23] - e[t.M30] * e[t.M01] * e[t.M12] * e[t.M23] + e[t.M00] * e[t.M31] * e[t.M12] * e[t.M23] + e[t.M10] * e[t.M01] * e[t.M32] * e[t.M23] - e[t.M00] * e[t.M11] * e[t.M32] * e[t.M23] - e[t.M20] * e[t.M11] * e[t.M02] * e[t.M33] + e[t.M10] * e[t.M21] * e[t.M02] * e[t.M33] + e[t.M20] * e[t.M01] * e[t.M12] * e[t.M33] - e[t.M00] * e[t.M21] * e[t.M12] * e[t.M33] - e[t.M10] * e[t.M01] * e[t.M22] * e[t.M33] + e[t.M00] * e[t.M11] * e[t.M22] * e[t.M33]
				}, e.prototype.translate = function(e, n, i) {
					var r = this.values;
					return r[t.M03] += e, r[t.M13] += n, r[t.M23] += i, this
				}, e.prototype.copy = function() {
					return (new e).set(this.values)
				}, e.prototype.projection = function(e, n, i, r) {
					this.identity();
					var a = 1 / Math.tan(i * (Math.PI / 180) / 2),
						s = (n + e) / (e - n),
						o = 2 * n * e / (e - n),
						h = this.values;
					return h[t.M00] = a / r, h[t.M10] = 0, h[t.M20] = 0, h[t.M30] = 0, h[t.M01] = 0, h[t.M11] = a, h[t.M21] = 0, h[t.M31] = 0, h[t.M02] = 0, h[t.M12] = 0, h[t.M22] = s, h[t.M32] = -1, h[t.M03] = 0, h[t.M13] = 0, h[t.M23] = o, h[t.M33] = 0, this
				}, e.prototype.ortho2d = function(t, e, n, i) {
					return this.ortho(t, t + n, e, e + i, 0, 1)
				}, e.prototype.ortho = function(e, n, i, r, a, s) {
					this.identity();
					var o = 2 / (n - e),
						h = 2 / (r - i),
						l = -2 / (s - a),
						u = -(n + e) / (n - e),
						c = -(r + i) / (r - i),
						d = -(s + a) / (s - a),
						p = this.values;
					return p[t.M00] = o, p[t.M10] = 0, p[t.M20] = 0, p[t.M30] = 0, p[t.M01] = 0, p[t.M11] = h, p[t.M21] = 0, p[t.M31] = 0, p[t.M02] = 0, p[t.M12] = 0, p[t.M22] = l, p[t.M32] = 0, p[t.M03] = u, p[t.M13] = c, p[t.M23] = d, p[t.M33] = 1, this
				}, e.prototype.multiply = function(e) {
					var n = this.temp,
						i = this.values,
						r = e.values;
					return n[t.M00] = i[t.M00] * r[t.M00] + i[t.M01] * r[t.M10] + i[t.M02] * r[t.M20] + i[t.M03] * r[t.M30], n[t.M01] = i[t.M00] * r[t.M01] + i[t.M01] * r[t.M11] + i[t.M02] * r[t.M21] + i[t.M03] * r[t.M31], n[t.M02] = i[t.M00] * r[t.M02] + i[t.M01] * r[t.M12] + i[t.M02] * r[t.M22] + i[t.M03] * r[t.M32], n[t.M03] = i[t.M00] * r[t.M03] + i[t.M01] * r[t.M13] + i[t.M02] * r[t.M23] + i[t.M03] * r[t.M33], n[t.M10] = i[t.M10] * r[t.M00] + i[t.M11] * r[t.M10] + i[t.M12] * r[t.M20] + i[t.M13] * r[t.M30], n[t.M11] = i[t.M10] * r[t.M01] + i[t.M11] * r[t.M11] + i[t.M12] * r[t.M21] + i[t.M13] * r[t.M31], n[t.M12] = i[t.M10] * r[t.M02] + i[t.M11] * r[t.M12] + i[t.M12] * r[t.M22] + i[t.M13] * r[t.M32], n[t.M13] = i[t.M10] * r[t.M03] + i[t.M11] * r[t.M13] + i[t.M12] * r[t.M23] + i[t.M13] * r[t.M33], n[t.M20] = i[t.M20] * r[t.M00] + i[t.M21] * r[t.M10] + i[t.M22] * r[t.M20] + i[t.M23] * r[t.M30], n[t.M21] = i[t.M20] * r[t.M01] + i[t.M21] * r[t.M11] + i[t.M22] * r[t.M21] + i[t.M23] * r[t.M31], n[t.M22] = i[t.M20] * r[t.M02] + i[t.M21] * r[t.M12] + i[t.M22] * r[t.M22] + i[t.M23] * r[t.M32], n[t.M23] = i[t.M20] * r[t.M03] + i[t.M21] * r[t.M13] + i[t.M22] * r[t.M23] + i[t.M23] * r[t.M33], n[t.M30] = i[t.M30] * r[t.M00] + i[t.M31] * r[t.M10] + i[t.M32] * r[t.M20] + i[t.M33] * r[t.M30], n[t.M31] = i[t.M30] * r[t.M01] + i[t.M31] * r[t.M11] + i[t.M32] * r[t.M21] + i[t.M33] * r[t.M31], n[t.M32] = i[t.M30] * r[t.M02] + i[t.M31] * r[t.M12] + i[t.M32] * r[t.M22] + i[t.M33] * r[t.M32], n[t.M33] = i[t.M30] * r[t.M03] + i[t.M31] * r[t.M13] + i[t.M32] * r[t.M23] + i[t.M33] * r[t.M33], this.set(this.temp)
				}, e.prototype.multiplyLeft = function(e) {
					var n = this.temp,
						i = this.values,
						r = e.values;
					return n[t.M00] = r[t.M00] * i[t.M00] + r[t.M01] * i[t.M10] + r[t.M02] * i[t.M20] + r[t.M03] * i[t.M30], n[t.M01] = r[t.M00] * i[t.M01] + r[t.M01] * i[t.M11] + r[t.M02] * i[t.M21] + r[t.M03] * i[t.M31], n[t.M02] = r[t.M00] * i[t.M02] + r[t.M01] * i[t.M12] + r[t.M02] * i[t.M22] + r[t.M03] * i[t.M32], n[t.M03] = r[t.M00] * i[t.M03] + r[t.M01] * i[t.M13] + r[t.M02] * i[t.M23] + r[t.M03] * i[t.M33], n[t.M10] = r[t.M10] * i[t.M00] + r[t.M11] * i[t.M10] + r[t.M12] * i[t.M20] + r[t.M13] * i[t.M30], n[t.M11] = r[t.M10] * i[t.M01] + r[t.M11] * i[t.M11] + r[t.M12] * i[t.M21] + r[t.M13] * i[t.M31], n[t.M12] = r[t.M10] * i[t.M02] + r[t.M11] * i[t.M12] + r[t.M12] * i[t.M22] + r[t.M13] * i[t.M32], n[t.M13] = r[t.M10] * i[t.M03] + r[t.M11] * i[t.M13] + r[t.M12] * i[t.M23] + r[t.M13] * i[t.M33], n[t.M20] = r[t.M20] * i[t.M00] + r[t.M21] * i[t.M10] + r[t.M22] * i[t.M20] + r[t.M23] * i[t.M30], n[t.M21] = r[t.M20] * i[t.M01] + r[t.M21] * i[t.M11] + r[t.M22] * i[t.M21] + r[t.M23] * i[t.M31], n[t.M22] = r[t.M20] * i[t.M02] + r[t.M21] * i[t.M12] + r[t.M22] * i[t.M22] + r[t.M23] * i[t.M32], n[t.M23] = r[t.M20] * i[t.M03] + r[t.M21] * i[t.M13] + r[t.M22] * i[t.M23] + r[t.M23] * i[t.M33], n[t.M30] = r[t.M30] * i[t.M00] + r[t.M31] * i[t.M10] + r[t.M32] * i[t.M20] + r[t.M33] * i[t.M30], n[t.M31] = r[t.M30] * i[t.M01] + r[t.M31] * i[t.M11] + r[t.M32] * i[t.M21] + r[t.M33] * i[t.M31], n[t.M32] = r[t.M30] * i[t.M02] + r[t.M31] * i[t.M12] + r[t.M32] * i[t.M22] + r[t.M33] * i[t.M32], n[t.M33] = r[t.M30] * i[t.M03] + r[t.M31] * i[t.M13] + r[t.M32] * i[t.M23] + r[t.M33] * i[t.M33], this.set(this.temp)
				}, e.prototype.lookAt = function(n, i, r) {
					e.initTemps();
					var a = e.xAxis,
						s = e.yAxis,
						o = e.zAxis;
					o.setFrom(i).normalize(), a.setFrom(i).normalize(), a.cross(r).normalize(), s.setFrom(a).cross(o).normalize(), this.identity();
					var h = this.values;
					return h[t.M00] = a.x, h[t.M01] = a.y, h[t.M02] = a.z, h[t.M10] = s.x, h[t.M11] = s.y, h[t.M12] = s.z, h[t.M20] = -o.x, h[t.M21] = -o.y, h[t.M22] = -o.z, e.tmpMatrix.identity(), e.tmpMatrix.values[t.M03] = -n.x, e.tmpMatrix.values[t.M13] = -n.y, e.tmpMatrix.values[t.M23] = -n.z, this.multiply(e.tmpMatrix), this
				}, e.initTemps = function() {
					null === e.xAxis && (e.xAxis = new t.Vector3), null === e.yAxis && (e.yAxis = new t.Vector3), null === e.zAxis && (e.zAxis = new t.Vector3)
				}, e.xAxis = null, e.yAxis = null, e.zAxis = null, e.tmpMatrix = new e, e
			}();
			t.Matrix4 = e
		}(t.webgl || (t.webgl = {}))
	}(Q || (Q = {})),
	function(t) {
		! function(t) {
			var e = function() {
				function e(e, n, i, r) {
					this.attributes = n, this.verticesLength = 0, this.dirtyVertices = !1, this.indicesLength = 0, this.dirtyIndices = !1, this.elementsPerVertex = 0, this.context = e instanceof t.ManagedWebGLRenderingContext ? e : new t.ManagedWebGLRenderingContext(e), this.elementsPerVertex = 0;
					for (var a = 0; a < n.length; a++) this.elementsPerVertex += n[a].numElements;
					this.vertices = new Float32Array(i * this.elementsPerVertex), this.indices = new Uint16Array(r), this.context.addRestorable(this)
				}
				return e.prototype.getAttributes = function() {
					return this.attributes
				}, e.prototype.maxVertices = function() {
					return this.vertices.length / this.elementsPerVertex
				}, e.prototype.numVertices = function() {
					return this.verticesLength / this.elementsPerVertex
				}, e.prototype.setVerticesLength = function(t) {
					this.dirtyVertices = !0, this.verticesLength = t
				}, e.prototype.getVertices = function() {
					return this.vertices
				}, e.prototype.maxIndices = function() {
					return this.indices.length
				}, e.prototype.numIndices = function() {
					return this.indicesLength
				}, e.prototype.setIndicesLength = function(t) {
					this.dirtyIndices = !0, this.indicesLength = t
				}, e.prototype.getIndices = function() {
					return this.indices
				}, e.prototype.getVertexSizeInFloats = function() {
					for (var t = 0, e = 0; e < this.attributes.length; e++) t += this.attributes[e].numElements;
					return t
				}, e.prototype.setVertices = function(t) {
					if (this.dirtyVertices = !0, t.length > this.vertices.length) throw Error("Mesh can't store more than " + this.maxVertices() + " vertices");
					this.vertices.set(t, 0), this.verticesLength = t.length
				}, e.prototype.setIndices = function(t) {
					if (this.dirtyIndices = !0, t.length > this.indices.length) throw Error("Mesh can't store more than " + this.maxIndices() + " indices");
					this.indices.set(t, 0), this.indicesLength = t.length
				}, e.prototype.draw = function(t, e) {
					this.drawWithOffset(t, e, 0, this.indicesLength > 0 ? this.indicesLength : this.verticesLength / this.elementsPerVertex)
				}, e.prototype.drawWithOffset = function(t, e, n, i) {
					var r = this.context.gl;
					(this.dirtyVertices || this.dirtyIndices) && this.update(), this.bind(t), this.indicesLength > 0 ? r.drawElements(e, i, r.UNSIGNED_SHORT, 2 * n) : r.drawArrays(e, n, i), this.unbind(t)
				}, e.prototype.bind = function(t) {
					var e = this.context.gl;
					e.bindBuffer(e.ARRAY_BUFFER, this.verticesBuffer);
					for (var n = 0, i = 0; i < this.attributes.length; i++) {
						var r = this.attributes[i],
							a = t.getAttributeLocation(r.name);
						e.enableVertexAttribArray(a), e.vertexAttribPointer(a, r.numElements, e.FLOAT, !1, 4 * this.elementsPerVertex, 4 * n), n += r.numElements
					}
					this.indicesLength > 0 && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indicesBuffer)
				}, e.prototype.unbind = function(t) {
					for (var e = this.context.gl, n = 0; n < this.attributes.length; n++) {
						var i = this.attributes[n],
							r = t.getAttributeLocation(i.name);
						e.disableVertexAttribArray(r)
					}
					e.bindBuffer(e.ARRAY_BUFFER, null), this.indicesLength > 0 && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
				}, e.prototype.update = function() {
					var t = this.context.gl;
					this.dirtyVertices && (this.verticesBuffer || (this.verticesBuffer = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, this.verticesBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices.subarray(0, this.verticesLength), t.DYNAMIC_DRAW), this.dirtyVertices = !1), this.dirtyIndices && (this.indicesBuffer || (this.indicesBuffer = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices.subarray(0, this.indicesLength), t.DYNAMIC_DRAW), this.dirtyIndices = !1)
				}, e.prototype.restore = function() {
					this.verticesBuffer = null, this.indicesBuffer = null, this.update()
				}, e.prototype.dispose = function() {
					this.context.removeRestorable(this);
					var t = this.context.gl;
					t.deleteBuffer(this.verticesBuffer), t.deleteBuffer(this.indicesBuffer)
				}, e
			}();
			t.Mesh = e;
			var n = function(t, e, n) {
				this.name = t, this.type = e, this.numElements = n
			};
			t.VertexAttribute = n;
			var i = function(e) {
				function n() {
					return e.call(this, t.Shader.POSITION, o.Float, 2) || this
				}
				return q(n, e), n
			}(n);
			t.Position2Attribute = i;
			var r = function(e) {
				function n() {
					return e.call(this, t.Shader.POSITION, o.Float, 3) || this
				}
				return q(n, e), n
			}(n);
			t.Position3Attribute = r;
			var a = function(e) {
				function n(n) {
					return void 0 === n && (n = 0), e.call(this, t.Shader.TEXCOORDS + (0 == n ? "" : n), o.Float, 2) || this
				}
				return q(n, e), n
			}(n);
			t.TexCoordAttribute = a;
			var s = function(e) {
				function n() {
					return e.call(this, t.Shader.COLOR, o.Float, 4) || this
				}
				return q(n, e), n
			}(n);
			t.ColorAttribute = s;
			var o, h, l = function(e) {
				function n() {
					return e.call(this, t.Shader.COLOR2, o.Float, 4) || this
				}
				return q(n, e), n
			}(n);
			t.Color2Attribute = l, (h = o = t.VertexAttributeType || (t.VertexAttributeType = {}))[h.Float = 0] = "Float"
		}(t.webgl || (t.webgl = {}))
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function t(t, n, i) {
				if (void 0 === n && (n = !0), void 0 === i && (i = 10920), this.isDrawing = !1, this.shader = null, this.lastTexture = null, this.verticesLength = 0, this.indicesLength = 0, i > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + i);
				this.context = t instanceof e.ManagedWebGLRenderingContext ? t : new e.ManagedWebGLRenderingContext(t);
				var r = n ? [new e.Position2Attribute, new e.ColorAttribute, new e.TexCoordAttribute, new e.Color2Attribute] : [new e.Position2Attribute, new e.ColorAttribute, new e.TexCoordAttribute];
				this.mesh = new e.Mesh(t, r, i, 3 * i), this.srcBlend = this.context.gl.SRC_ALPHA, this.dstBlend = this.context.gl.ONE_MINUS_SRC_ALPHA
			}
			return t.prototype.begin = function(t) {
				var e = this.context.gl;
				if (this.isDrawing) throw new Error("PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()");
				this.drawCalls = 0, this.shader = t, this.lastTexture = null, this.isDrawing = !0, e.enable(e.BLEND), e.blendFunc(this.srcBlend, this.dstBlend)
			}, t.prototype.setBlendMode = function(t, e) {
				var n = this.context.gl;
				this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend))
			}, t.prototype.draw = function(t, e, n) {
				t != this.lastTexture ? (this.flush(), this.lastTexture = t) : (this.verticesLength + e.length > this.mesh.getVertices().length || this.indicesLength + n.length > this.mesh.getIndices().length) && this.flush();
				var i = this.mesh.numVertices();
				this.mesh.getVertices().set(e, this.verticesLength), this.verticesLength += e.length, this.mesh.setVerticesLength(this.verticesLength);
				for (var r = this.mesh.getIndices(), a = this.indicesLength, s = 0; s < n.length; a++, s++) r[a] = n[s] + i;
				this.indicesLength += n.length, this.mesh.setIndicesLength(this.indicesLength)
			}, t.prototype.flush = function() {
				var t = this.context.gl;
				0 != this.verticesLength && (this.lastTexture.bind(), this.mesh.draw(this.shader, t.TRIANGLES), this.verticesLength = 0, this.indicesLength = 0, this.mesh.setVerticesLength(0), this.mesh.setIndicesLength(0), this.drawCalls++)
			}, t.prototype.end = function() {
				var t = this.context.gl;
				if (!this.isDrawing) throw new Error("PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()");
				(this.verticesLength > 0 || this.indicesLength > 0) && this.flush(), this.shader = null, this.lastTexture = null, this.isDrawing = !1, t.disable(t.BLEND)
			}, t.prototype.getDrawCalls = function() {
				return this.drawCalls
			}, t.prototype.dispose = function() {
				this.mesh.dispose()
			}, t
		}(), e.PolygonBatcher = n
	}(Q || (Q = {})),
	function(t) {
		var e, n, i, r;
		e = t.webgl || (t.webgl = {}), r = function() {
			function i(n, i, r) {
				void 0 === r && (r = !0), this.twoColorTint = !1, this.activeRenderer = null, this.QUAD = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], this.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], this.WHITE = new t.Color(1, 1, 1, 1), this.canvas = n, this.context = i instanceof e.ManagedWebGLRenderingContext ? i : new e.ManagedWebGLRenderingContext(i), this.twoColorTint = r, this.camera = new e.OrthoCamera(n.width, n.height), this.batcherShader = r ? e.Shader.newTwoColoredTextured(this.context) : e.Shader.newColoredTextured(this.context), this.batcher = new e.PolygonBatcher(this.context, r), this.shapesShader = e.Shader.newColored(this.context), this.shapes = new e.ShapeRenderer(this.context), this.skeletonRenderer = new e.SkeletonRenderer(this.context, r), this.skeletonDebugRenderer = new e.SkeletonDebugRenderer(this.context)
			}
			return i.prototype.begin = function() {
				this.camera.update(), this.enableRenderer(this.batcher)
			}, i.prototype.drawSkeleton = function(t, e, n, i) {
				void 0 === e && (e = !1), void 0 === n && (n = -1), void 0 === i && (i = -1), this.enableRenderer(this.batcher), this.skeletonRenderer.premultipliedAlpha = e, this.skeletonRenderer.draw(this.batcher, t, n, i)
			}, i.prototype.drawSkeletonDebug = function(t, e, n) {
				void 0 === e && (e = !1), void 0 === n && (n = null), this.enableRenderer(this.shapes), this.skeletonDebugRenderer.premultipliedAlpha = e, this.skeletonDebugRenderer.draw(this.shapes, t, n)
			}, i.prototype.drawTexture = function(t, e, n, i, r, a) {
				void 0 === a && (a = null), this.enableRenderer(this.batcher), null === a && (a = this.WHITE);
				var s = this.QUAD,
					o = 0;
				s[o++] = e, s[o++] = n, s[o++] = a.r, s[o++] = a.g, s[o++] = a.b, s[o++] = a.a, s[o++] = 0, s[o++] = 1, this.twoColorTint && (s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = 0), s[o++] = e + i, s[o++] = n, s[o++] = a.r, s[o++] = a.g, s[o++] = a.b, s[o++] = a.a, s[o++] = 1, s[o++] = 1, this.twoColorTint && (s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = 0), s[o++] = e + i, s[o++] = n + r, s[o++] = a.r, s[o++] = a.g, s[o++] = a.b, s[o++] = a.a, s[o++] = 1, s[o++] = 0, this.twoColorTint && (s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = 0), s[o++] = e, s[o++] = n + r, s[o++] = a.r, s[o++] = a.g, s[o++] = a.b, s[o++] = a.a, s[o++] = 0, s[o++] = 0, this.twoColorTint && (s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = 0), this.batcher.draw(t, s, this.QUAD_TRIANGLES)
			}, i.prototype.drawTextureUV = function(t, e, n, i, r, a, s, o, h, l) {
				void 0 === l && (l = null), this.enableRenderer(this.batcher), null === l && (l = this.WHITE);
				var u = this.QUAD,
					c = 0;
				u[c++] = e, u[c++] = n, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = a, u[c++] = s, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), u[c++] = e + i, u[c++] = n, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = o, u[c++] = s, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), u[c++] = e + i, u[c++] = n + r, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = o, u[c++] = h, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), u[c++] = e, u[c++] = n + r, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = a, u[c++] = h, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), this.batcher.draw(t, u, this.QUAD_TRIANGLES)
			}, i.prototype.drawTextureRotated = function(e, n, i, r, a, s, o, h, l, u) {
				void 0 === l && (l = null), this.enableRenderer(this.batcher), null === l && (l = this.WHITE);
				var c = this.QUAD,
					d = n + s,
					p = i + o,
					f = -s,
					m = -o,
					g = r - s,
					v = a - o,
					M = f,
					y = m,
					w = f,
					x = v,
					b = g,
					T = v,
					A = g,
					E = m,
					R = 0,
					S = 0,
					I = 0,
					C = 0,
					P = 0,
					k = 0,
					V = 0,
					L = 0;
				if (0 != h) {
					var N = t.MathUtils.cosDeg(h),
						D = t.MathUtils.sinDeg(h);
					I = (P = N * b - D * T) + ((R = N * M - D * y) - (V = N * w - D * x)), C = (k = D * b + N * T) + ((S = D * M + N * y) - (L = D * w + N * x))
				} else R = M, S = y, V = w, L = x, P = b, k = T, I = A, C = E;
				R += d, S += p, I += d, C += p, P += d, k += p, V += d, L += p;
				var O = 0;
				c[O++] = R, c[O++] = S, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 0, c[O++] = 1, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), c[O++] = I, c[O++] = C, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 1, c[O++] = 1, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), c[O++] = P, c[O++] = k, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 1, c[O++] = 0, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), c[O++] = V, c[O++] = L, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 0, c[O++] = 0, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), this.batcher.draw(e, c, this.QUAD_TRIANGLES)
			}, i.prototype.drawRegion = function(t, e, n, i, r, a, s) {
				void 0 === a && (a = null), this.enableRenderer(this.batcher), null === a && (a = this.WHITE);
				var o = this.QUAD,
					h = 0;
				o[h++] = e, o[h++] = n, o[h++] = a.r, o[h++] = a.g, o[h++] = a.b, o[h++] = a.a, o[h++] = t.u, o[h++] = t.v2, this.twoColorTint && (o[h++] = 0, o[h++] = 0, o[h++] = 0, o[h++] = 0), o[h++] = e + i, o[h++] = n, o[h++] = a.r, o[h++] = a.g, o[h++] = a.b, o[h++] = a.a, o[h++] = t.u2, o[h++] = t.v2, this.twoColorTint && (o[h++] = 0, o[h++] = 0, o[h++] = 0, o[h++] = 0), o[h++] = e + i, o[h++] = n + r, o[h++] = a.r, o[h++] = a.g, o[h++] = a.b, o[h++] = a.a, o[h++] = t.u2, o[h++] = t.v, this.twoColorTint && (o[h++] = 0, o[h++] = 0, o[h++] = 0, o[h++] = 0), o[h++] = e, o[h++] = n + r, o[h++] = a.r, o[h++] = a.g, o[h++] = a.b, o[h++] = a.a, o[h++] = t.u, o[h++] = t.v, this.twoColorTint && (o[h++] = 0, o[h++] = 0, o[h++] = 0, o[h++] = 0), this.batcher.draw(t.texture, o, this.QUAD_TRIANGLES)
			}, i.prototype.line = function(t, e, n, i, r, a) {
				void 0 === r && (r = null), this.enableRenderer(this.shapes), this.shapes.line(t, e, n, i, r)
			}, i.prototype.triangle = function(t, e, n, i, r, a, s, o, h, l) {
				void 0 === o && (o = null), void 0 === h && (h = null), void 0 === l && (l = null), this.enableRenderer(this.shapes), this.shapes.triangle(t, e, n, i, r, a, s, o, h, l)
			}, i.prototype.quad = function(t, e, n, i, r, a, s, o, h, l, u, c, d) {
				void 0 === l && (l = null), void 0 === u && (u = null), void 0 === c && (c = null), void 0 === d && (d = null), this.enableRenderer(this.shapes), this.shapes.quad(t, e, n, i, r, a, s, o, h, l, u, c, d)
			}, i.prototype.rect = function(t, e, n, i, r, a) {
				void 0 === a && (a = null), this.enableRenderer(this.shapes), this.shapes.rect(t, e, n, i, r, a)
			}, i.prototype.rectLine = function(t, e, n, i, r, a, s) {
				void 0 === s && (s = null), this.enableRenderer(this.shapes), this.shapes.rectLine(t, e, n, i, r, a, s)
			}, i.prototype.polygon = function(t, e, n, i) {
				void 0 === i && (i = null), this.enableRenderer(this.shapes), this.shapes.polygon(t, e, n, i)
			}, i.prototype.circle = function(t, e, n, i, r, a) {
				void 0 === r && (r = null), void 0 === a && (a = 0), this.enableRenderer(this.shapes), this.shapes.circle(t, e, n, i, r, a)
			}, i.prototype.curve = function(t, e, n, i, r, a, s, o, h, l) {
				void 0 === l && (l = null), this.enableRenderer(this.shapes), this.shapes.curve(t, e, n, i, r, a, s, o, h, l)
			}, i.prototype.end = function() {
				this.activeRenderer === this.batcher ? this.batcher.end() : this.activeRenderer === this.shapes && this.shapes.end(), this.activeRenderer = null
			}, i.prototype.resize = function(t) {
				var e = this.canvas,
					i = e.clientWidth,
					r = e.clientHeight;
				if (e.width == i && e.height == r || (e.width = i, e.height = r), this.context.gl.viewport(0, 0, e.width, e.height), t === n.Stretch);
				else if (t === n.Expand) this.camera.setViewport(i, r);
				else if (t === n.Fit) {
					var a = e.width,
						s = e.height,
						o = this.camera.viewportWidth,
						h = this.camera.viewportHeight,
						l = h / o < s / a ? o / a : h / s;
					this.camera.viewportWidth = a * l, this.camera.viewportHeight = s * l
				}
				this.camera.update()
			}, i.prototype.enableRenderer = function(t) {
				this.activeRenderer !== t && (this.end(), t instanceof e.PolygonBatcher ? (this.batcherShader.bind(), this.batcherShader.setUniform4x4f(e.Shader.MVP_MATRIX, this.camera.projectionView.values), this.batcherShader.setUniformi("u_texture", 0), this.batcher.begin(this.batcherShader), this.activeRenderer = this.batcher) : t instanceof e.ShapeRenderer ? (this.shapesShader.bind(), this.shapesShader.setUniform4x4f(e.Shader.MVP_MATRIX, this.camera.projectionView.values), this.shapes.begin(this.shapesShader), this.activeRenderer = this.shapes) : this.activeRenderer = this.skeletonDebugRenderer)
			}, i.prototype.dispose = function() {
				this.batcher.dispose(), this.batcherShader.dispose(), this.shapes.dispose(), this.shapesShader.dispose(), this.skeletonDebugRenderer.dispose()
			}, i
		}(), e.SceneRenderer = r, (i = n = e.ResizeMode || (e.ResizeMode = {}))[i.Stretch = 0] = "Stretch", i[i.Expand = 1] = "Expand", i[i.Fit = 2] = "Fit"
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function t(t, n, i) {
				this.vertexShader = n, this.fragmentShader = i, this.vs = null, this.fs = null, this.program = null, this.tmp2x2 = new Float32Array(4), this.tmp3x3 = new Float32Array(9), this.tmp4x4 = new Float32Array(16), this.vsSource = n, this.fsSource = i, this.context = t instanceof e.ManagedWebGLRenderingContext ? t : new e.ManagedWebGLRenderingContext(t), this.context.addRestorable(this), this.compile()
			}
			return t.prototype.getProgram = function() {
				return this.program
			}, t.prototype.getVertexShader = function() {
				return this.vertexShader
			}, t.prototype.getFragmentShader = function() {
				return this.fragmentShader
			}, t.prototype.getVertexShaderSource = function() {
				return this.vsSource
			}, t.prototype.getFragmentSource = function() {
				return this.fsSource
			}, t.prototype.compile = function() {
				var t = this.context.gl;
				try {
					this.vs = this.compileShader(t.VERTEX_SHADER, this.vertexShader), this.fs = this.compileShader(t.FRAGMENT_SHADER, this.fragmentShader), this.program = this.compileProgram(this.vs, this.fs)
				} catch (e) {
					throw this.dispose(), e
				}
			}, t.prototype.compileShader = function(t, e) {
				var n = this.context.gl,
					i = n.createShader(t);
				if (n.shaderSource(i, e), n.compileShader(i), !n.getShaderParameter(i, n.COMPILE_STATUS)) {
					var r = "Couldn't compile shader: " + n.getShaderInfoLog(i);
					if (n.deleteShader(i), !n.isContextLost()) throw new Error(r)
				}
				return i
			}, t.prototype.compileProgram = function(t, e) {
				var n = this.context.gl,
					i = n.createProgram();
				if (n.attachShader(i, t), n.attachShader(i, e), n.linkProgram(i), !n.getProgramParameter(i, n.LINK_STATUS)) {
					var r = "Couldn't compile shader program: " + n.getProgramInfoLog(i);
					if (n.deleteProgram(i), !n.isContextLost()) throw new Error(r)
				}
				return i
			}, t.prototype.restore = function() {
				this.compile()
			}, t.prototype.bind = function() {
				this.context.gl.useProgram(this.program)
			}, t.prototype.unbind = function() {
				this.context.gl.useProgram(null)
			}, t.prototype.setUniformi = function(t, e) {
				this.context.gl.uniform1i(this.getUniformLocation(t), e)
			}, t.prototype.setUniformf = function(t, e) {
				this.context.gl.uniform1f(this.getUniformLocation(t), e)
			}, t.prototype.setUniform2f = function(t, e, n) {
				this.context.gl.uniform2f(this.getUniformLocation(t), e, n)
			}, t.prototype.setUniform3f = function(t, e, n, i) {
				this.context.gl.uniform3f(this.getUniformLocation(t), e, n, i)
			}, t.prototype.setUniform4f = function(t, e, n, i, r) {
				this.context.gl.uniform4f(this.getUniformLocation(t), e, n, i, r)
			}, t.prototype.setUniform2x2f = function(t, e) {
				var n = this.context.gl;
				this.tmp2x2.set(e), n.uniformMatrix2fv(this.getUniformLocation(t), !1, this.tmp2x2)
			}, t.prototype.setUniform3x3f = function(t, e) {
				var n = this.context.gl;
				this.tmp3x3.set(e), n.uniformMatrix3fv(this.getUniformLocation(t), !1, this.tmp3x3)
			}, t.prototype.setUniform4x4f = function(t, e) {
				var n = this.context.gl;
				this.tmp4x4.set(e), n.uniformMatrix4fv(this.getUniformLocation(t), !1, this.tmp4x4)
			}, t.prototype.getUniformLocation = function(t) {
				var e = this.context.gl,
					n = e.getUniformLocation(this.program, t);
				if (!n && !e.isContextLost()) throw new Error("Couldn't find location for uniform " + t);
				return n
			}, t.prototype.getAttributeLocation = function(t) {
				var e = this.context.gl,
					n = e.getAttribLocation(this.program, t);
				if (-1 == n && !e.isContextLost()) throw new Error("Couldn't find location for attribute " + t);
				return n
			}, t.prototype.dispose = function() {
				this.context.removeRestorable(this);
				var t = this.context.gl;
				this.vs && (t.deleteShader(this.vs), this.vs = null), this.fs && (t.deleteShader(this.fs), this.fs = null), this.program && (t.deleteProgram(this.program), this.program = null)
			}, t.newColoredTextured = function(e) {
				return new t(e, "\n\t\t\t\tattribute vec4 " + t.POSITION + ";\n\t\t\t\tattribute vec4 " + t.COLOR + ";\n\t\t\t\tattribute vec2 " + t.TEXCOORDS + ";\n\t\t\t\tuniform mat4 " + t.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = " + t.COLOR + ";\n\t\t\t\t\tv_texCoords = " + t.TEXCOORDS + ";\n\t\t\t\t\tgl_Position = " + t.MVP_MATRIX + " * " + t.POSITION + ";\n\t\t\t\t}\n\t\t\t", "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n\t\t\t\t}\n\t\t\t")
			}, t.newTwoColoredTextured = function(e) {
				return new t(e, "\n\t\t\t\tattribute vec4 " + t.POSITION + ";\n\t\t\t\tattribute vec4 " + t.COLOR + ";\n\t\t\t\tattribute vec4 " + t.COLOR2 + ";\n\t\t\t\tattribute vec2 " + t.TEXCOORDS + ";\n\t\t\t\tuniform mat4 " + t.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_light;\n\t\t\t\tvarying vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_light = " + t.COLOR + ";\n\t\t\t\t\tv_dark = " + t.COLOR2 + ";\n\t\t\t\t\tv_texCoords = " + t.TEXCOORDS + ";\n\t\t\t\t\tgl_Position = " + t.MVP_MATRIX + " * " + t.POSITION + ";\n\t\t\t\t}\n\t\t\t", "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_light;\n\t\t\t\tvarying LOWP vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tvec4 texColor = texture2D(u_texture, v_texCoords);\n\t\t\t\t\tgl_FragColor.a = texColor.a * v_light.a;\n\t\t\t\t\tgl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n\t\t\t\t}\n\t\t\t")
			}, t.newColored = function(e) {
				return new t(e, "\n\t\t\t\tattribute vec4 " + t.POSITION + ";\n\t\t\t\tattribute vec4 " + t.COLOR + ";\n\t\t\t\tuniform mat4 " + t.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = " + t.COLOR + ";\n\t\t\t\t\tgl_Position = " + t.MVP_MATRIX + " * " + t.POSITION + ";\n\t\t\t\t}\n\t\t\t", "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color;\n\t\t\t\t}\n\t\t\t")
			}, t.MVP_MATRIX = "u_projTrans", t.POSITION = "a_position", t.COLOR = "a_color", t.COLOR2 = "a_color2", t.TEXCOORDS = "a_texCoords", t.SAMPLER = "u_texture", t
		}(), e.Shader = n
	}(Q || (Q = {})),
	function(t) {
		var e, n, i, r;
		e = t.webgl || (t.webgl = {}), r = function() {
			function i(i, r) {
				if (void 0 === r && (r = 10920), this.isDrawing = !1, this.shapeType = n.Filled, this.color = new t.Color(1, 1, 1, 1), this.vertexIndex = 0, this.tmp = new t.Vector2, r > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + r);
				this.context = i instanceof e.ManagedWebGLRenderingContext ? i : new e.ManagedWebGLRenderingContext(i), this.mesh = new e.Mesh(i, [new e.Position2Attribute, new e.ColorAttribute], r, 0), this.srcBlend = this.context.gl.SRC_ALPHA, this.dstBlend = this.context.gl.ONE_MINUS_SRC_ALPHA
			}
			return i.prototype.begin = function(t) {
				if (this.isDrawing) throw new Error("ShapeRenderer.begin() has already been called");
				this.shader = t, this.vertexIndex = 0, this.isDrawing = !0;
				var e = this.context.gl;
				e.enable(e.BLEND), e.blendFunc(this.srcBlend, this.dstBlend)
			}, i.prototype.setBlendMode = function(t, e) {
				var n = this.context.gl;
				this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend))
			}, i.prototype.setColor = function(t) {
				this.color.setFromColor(t)
			}, i.prototype.setColorWith = function(t, e, n, i) {
				this.color.set(t, e, n, i)
			}, i.prototype.point = function(t, e, i) {
				void 0 === i && (i = null), this.check(n.Point, 1), null === i && (i = this.color), this.vertex(t, e, i)
			}, i.prototype.line = function(t, e, i, r, a) {
				void 0 === a && (a = null), this.check(n.Line, 2), this.mesh.getVertices(), this.vertexIndex, null === a && (a = this.color), this.vertex(t, e, a), this.vertex(i, r, a)
			}, i.prototype.triangle = function(t, e, i, r, a, s, o, h, l, u) {
				void 0 === h && (h = null), void 0 === l && (l = null), void 0 === u && (u = null), this.check(t ? n.Filled : n.Line, 3), this.mesh.getVertices(), this.vertexIndex, null === h && (h = this.color), null === l && (l = this.color), null === u && (u = this.color), t ? (this.vertex(e, i, h), this.vertex(r, a, l), this.vertex(s, o, u)) : (this.vertex(e, i, h), this.vertex(r, a, l), this.vertex(r, a, h), this.vertex(s, o, l), this.vertex(s, o, h), this.vertex(e, i, l))
			}, i.prototype.quad = function(t, e, i, r, a, s, o, h, l, u, c, d, p) {
				void 0 === u && (u = null), void 0 === c && (c = null), void 0 === d && (d = null), void 0 === p && (p = null), this.check(t ? n.Filled : n.Line, 3), this.mesh.getVertices(), this.vertexIndex, null === u && (u = this.color), null === c && (c = this.color), null === d && (d = this.color), null === p && (p = this.color), t ? (this.vertex(e, i, u), this.vertex(r, a, c), this.vertex(s, o, d), this.vertex(s, o, d), this.vertex(h, l, p), this.vertex(e, i, u)) : (this.vertex(e, i, u), this.vertex(r, a, c), this.vertex(r, a, c), this.vertex(s, o, d), this.vertex(s, o, d), this.vertex(h, l, p), this.vertex(h, l, p), this.vertex(e, i, u))
			}, i.prototype.rect = function(t, e, n, i, r, a) {
				void 0 === a && (a = null), this.quad(t, e, n, e + i, n, e + i, n + r, e, n + r, a, a, a, a)
			}, i.prototype.rectLine = function(t, e, i, r, a, s, o) {
				void 0 === o && (o = null), this.check(t ? n.Filled : n.Line, 8), null === o && (o = this.color);
				var h = this.tmp.set(a - i, e - r);
				h.normalize(), s *= .5;
				var l = h.x * s,
					u = h.y * s;
				t ? (this.vertex(e + l, i + u, o), this.vertex(e - l, i - u, o), this.vertex(r + l, a + u, o), this.vertex(r - l, a - u, o), this.vertex(r + l, a + u, o), this.vertex(e - l, i - u, o)) : (this.vertex(e + l, i + u, o), this.vertex(e - l, i - u, o), this.vertex(r + l, a + u, o), this.vertex(r - l, a - u, o), this.vertex(r + l, a + u, o), this.vertex(e + l, i + u, o), this.vertex(r - l, a - u, o), this.vertex(e - l, i - u, o))
			}, i.prototype.x = function(t, e, n) {
				this.line(t - n, e - n, t + n, e + n), this.line(t - n, e + n, t + n, e - n)
			}, i.prototype.polygon = function(t, e, i, r) {
				if (void 0 === r && (r = null), i < 3) throw new Error("Polygon must contain at least 3 vertices");
				this.check(n.Line, 2 * i), null === r && (r = this.color), this.mesh.getVertices(), this.vertexIndex, i <<= 1;
				for (var a = t[e <<= 1], s = t[e + 1], o = e + i, h = e, l = e + i - 2; h < l; h += 2) {
					var u = t[h],
						c = t[h + 1],
						d = 0,
						p = 0;
					h + 2 >= o ? (d = a, p = s) : (d = t[h + 2], p = t[h + 3]), this.vertex(u, c, r), this.vertex(d, p, r)
				}
			}, i.prototype.circle = function(e, i, r, a, s, o) {
				if (void 0 === s && (s = null), void 0 === o && (o = 0), 0 === o && (o = Math.max(1, 6 * t.MathUtils.cbrt(a) | 0)), o <= 0) throw new Error("segments must be > 0.");
				null === s && (s = this.color);
				var h = 2 * t.MathUtils.PI / o,
					l = Math.cos(h),
					u = Math.sin(h),
					c = a,
					d = 0;
				if (e) {
					for (this.check(n.Filled, 3 * o + 3), o--, f = 0; f < o; f++) {
						this.vertex(i, r, s), this.vertex(i + c, r + d, s);
						var p = c;
						c = l * c - u * d, d = u * p + l * d, this.vertex(i + c, r + d, s)
					}
					this.vertex(i, r, s), this.vertex(i + c, r + d, s)
				} else {
					this.check(n.Line, 2 * o + 2);
					for (var f = 0; f < o; f++) {
						this.vertex(i + c, r + d, s);
						var m = c;
						c = l * c - u * d, d = u * m + l * d, this.vertex(i + c, r + d, s)
					}
					this.vertex(i + c, r + d, s)
				}
				c = a, d = 0, this.vertex(i + c, r + d, s)
			}, i.prototype.curve = function(t, e, i, r, a, s, o, h, l, u) {
				void 0 === u && (u = null), this.check(n.Line, 2 * l + 2), null === u && (u = this.color);
				for (var c = 1 / l, d = c * c, p = c * c * c, f = 3 * c, m = 3 * d, g = 6 * d, v = 6 * p, M = t - 2 * i + a, y = e - 2 * r + s, w = 3 * (i - a) - t + o, x = 3 * (r - s) - e + h, b = t, T = e, A = (i - t) * f + M * m + w * p, E = (r - e) * f + y * m + x * p, R = M * g + w * v, S = y * g + x * v, I = w * v, C = x * v; l-- > 0;) this.vertex(b, T, u), b += A, T += E, A += R, E += S, R += I, S += C, this.vertex(b, T, u);
				this.vertex(b, T, u), this.vertex(o, h, u)
			}, i.prototype.vertex = function(t, e, n) {
				var i = this.vertexIndex,
					r = this.mesh.getVertices();
				r[i++] = t, r[i++] = e, r[i++] = n.r, r[i++] = n.g, r[i++] = n.b, r[i++] = n.a, this.vertexIndex = i
			}, i.prototype.end = function() {
				if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
				this.flush(), this.context.gl.disable(this.context.gl.BLEND), this.isDrawing = !1
			}, i.prototype.flush = function() {
				0 != this.vertexIndex && (this.mesh.setVerticesLength(this.vertexIndex), this.mesh.draw(this.shader, this.shapeType), this.vertexIndex = 0)
			}, i.prototype.check = function(t, e) {
				if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
				if (this.shapeType == t) {
					if (!(this.mesh.maxVertices() - this.mesh.numVertices() < e)) return;
					this.flush()
				} else this.flush(), this.shapeType = t
			}, i.prototype.dispose = function() {
				this.mesh.dispose()
			}, i
		}(), e.ShapeRenderer = r, (i = n = e.ShapeType || (e.ShapeType = {}))[i.Point = 0] = "Point", i[i.Line = 1] = "Line", i[i.Filled = 4] = "Filled"
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function n(n) {
				this.boneLineColor = new t.Color(1, 0, 0, 1), this.boneOriginColor = new t.Color(0, 1, 0, 1), this.attachmentLineColor = new t.Color(0, 0, 1, .5), this.triangleLineColor = new t.Color(1, .64, 0, .5), this.pathColor = (new t.Color).setFromString("FF7F00"), this.clipColor = new t.Color(.8, 0, 0, 2), this.aabbColor = new t.Color(0, 1, 0, .5), this.drawBones = !0, this.drawRegionAttachments = !0, this.drawBoundingBoxes = !0, this.drawMeshHull = !0, this.drawMeshTriangles = !0, this.drawPaths = !0, this.drawSkeletonXY = !1, this.drawClipping = !0, this.premultipliedAlpha = !1, this.scale = 1, this.boneWidth = 2, this.bounds = new t.SkeletonBounds, this.temp = new Array, this.vertices = t.Utils.newFloatArray(2048), this.context = n instanceof e.ManagedWebGLRenderingContext ? n : new e.ManagedWebGLRenderingContext(n)
			}
			return n.prototype.draw = function(e, i, r) {
				void 0 === r && (r = null);
				var a = i.x,
					s = i.y,
					o = this.context.gl,
					h = this.premultipliedAlpha ? o.ONE : o.SRC_ALPHA;
				e.setBlendMode(h, o.ONE_MINUS_SRC_ALPHA);
				var l = i.bones;
				if (this.drawBones) {
					e.setColor(this.boneLineColor);
					for (var u = 0, c = l.length; u < c; u++) {
						var d = l[u];
						if (!(r && r.indexOf(d.data.name) > -1) && null != d.parent) {
							var p = a + d.data.length * d.a + d.worldX,
								f = s + d.data.length * d.c + d.worldY;
							e.rectLine(!0, a + d.worldX, s + d.worldY, p, f, this.boneWidth * this.scale)
						}
					}
					this.drawSkeletonXY && e.x(a, s, 4 * this.scale)
				}
				if (this.drawRegionAttachments)
					for (e.setColor(this.attachmentLineColor), u = 0, c = (W = i.slots).length; u < c; u++)
						if ((_ = (G = W[u]).getAttachment()) instanceof t.RegionAttachment) {
							var m = _,
								g = this.vertices;
							m.computeWorldVertices(G.bone, g, 0, 2), e.line(g[0], g[1], g[2], g[3]), e.line(g[2], g[3], g[4], g[5]), e.line(g[4], g[5], g[6], g[7]), e.line(g[6], g[7], g[0], g[1])
						} if (this.drawMeshHull || this.drawMeshTriangles)
					for (u = 0, c = (W = i.slots).length; u < c; u++)
						if ((G = W[u]).bone.active && (_ = G.getAttachment()) instanceof t.MeshAttachment) {
							var v = _;
							g = this.vertices, v.computeWorldVertices(G, 0, v.worldVerticesLength, g, 0, 2);
							var M = v.triangles,
								y = v.hullLength;
							if (this.drawMeshTriangles) {
								e.setColor(this.triangleLineColor);
								for (var w = 0, x = M.length; w < x; w += 3) {
									var b = 2 * M[w],
										T = 2 * M[w + 1],
										A = 2 * M[w + 2];
									e.triangle(!1, g[b], g[b + 1], g[T], g[T + 1], g[A], g[A + 1])
								}
							}
							if (this.drawMeshHull && y > 0) {
								e.setColor(this.attachmentLineColor);
								var E = g[(y = 2 * (y >> 1)) - 2],
									R = g[y - 1];
								for (w = 0, x = y; w < x; w += 2) p = g[w], f = g[w + 1], e.line(p, f, E, R), E = p, R = f
							}
						} if (this.drawBoundingBoxes) {
					var S = this.bounds;
					S.update(i, !0), e.setColor(this.aabbColor), e.rect(!1, S.minX, S.minY, S.getWidth(), S.getHeight());
					var I = S.polygons,
						C = S.boundingBoxes;
					for (u = 0, c = I.length; u < c; u++) {
						var P = I[u];
						e.setColor(C[u].color), e.polygon(P, 0, P.length)
					}
				}
				if (this.drawPaths)
					for (u = 0, c = (W = i.slots).length; u < c; u++)
						if ((G = W[u]).bone.active && (_ = G.getAttachment()) instanceof t.PathAttachment) {
							var k = _,
								V = (x = k.worldVerticesLength, this.temp = t.Utils.setArraySize(this.temp, x, 0));
							k.computeWorldVertices(G, 0, x, V, 0, 2);
							var L = this.pathColor,
								N = V[2],
								D = V[3],
								O = 0,
								F = 0;
							if (k.closed) {
								e.setColor(L);
								var Y = V[0],
									U = V[1],
									B = V[x - 2],
									X = V[x - 1];
								O = V[x - 4], F = V[x - 3], e.curve(N, D, Y, U, B, X, O, F, 32), e.setColor(n.LIGHT_GRAY), e.line(N, D, Y, U), e.line(O, F, B, X)
							}
							for (x -= 4, w = 4; w < x; w += 6) Y = V[w], U = V[w + 1], B = V[w + 2], X = V[w + 3], O = V[w + 4], F = V[w + 5], e.setColor(L), e.curve(N, D, Y, U, B, X, O, F, 32), e.setColor(n.LIGHT_GRAY), e.line(N, D, Y, U), e.line(O, F, B, X), N = O, D = F
						} if (this.drawBones)
					for (e.setColor(this.boneOriginColor), u = 0, c = l.length; u < c; u++) d = l[u], r && r.indexOf(d.data.name) > -1 || e.circle(!0, a + d.worldX, s + d.worldY, 3 * this.scale, n.GREEN, 8);
				if (this.drawClipping) {
					var W = i.slots;
					for (e.setColor(this.clipColor), u = 0, c = W.length; u < c; u++) {
						var G, _;
						if ((G = W[u]).bone.active && (_ = G.getAttachment()) instanceof t.ClippingAttachment) {
							var Z = _;
							x = Z.worldVerticesLength, V = this.temp = t.Utils.setArraySize(this.temp, x, 0), Z.computeWorldVertices(G, 0, x, V, 0, 2);
							for (var z = 0, j = V.length; z < j; z += 2) p = V[z], f = V[z + 1], O = V[(z + 2) % V.length], F = V[(z + 3) % V.length], e.line(p, f, O, F)
						}
					}
				}
			}, n.prototype.dispose = function() {}, n.LIGHT_GRAY = new t.Color(192 / 255, 192 / 255, 192 / 255, 1), n.GREEN = new t.Color(0, 1, 0, 1), n
		}(), e.SkeletonDebugRenderer = n
	}(Q || (Q = {})),
	function(t) {
		var e, n, i;
		e = t.webgl || (t.webgl = {}), n = function(t, e, n) {
			this.vertices = t, this.numVertices = e, this.numFloats = n
		}, i = function() {
			function i(e, i) {
				void 0 === i && (i = !0), this.premultipliedAlpha = !1, this.vertexEffect = null, this.tempColor = new t.Color, this.tempColor2 = new t.Color, this.vertexSize = 8, this.twoColorTint = !1, this.renderable = new n(null, 0, 0), this.clipper = new t.SkeletonClipping, this.temp = new t.Vector2, this.temp2 = new t.Vector2, this.temp3 = new t.Color, this.temp4 = new t.Color, this.twoColorTint = i, i && (this.vertexSize += 4), this.vertices = t.Utils.newFloatArray(1024 * this.vertexSize)
			}
			return i.prototype.draw = function(n, r, a, s) {
				void 0 === a && (a = -1), void 0 === s && (s = -1);
				var o = this.clipper,
					h = this.premultipliedAlpha,
					l = this.twoColorTint,
					u = null,
					c = this.temp,
					d = this.temp2,
					p = this.temp3,
					f = this.temp4,
					m = this.renderable,
					g = null,
					v = null,
					M = r.drawOrder,
					y = null,
					w = r.color,
					x = l ? 12 : 8,
					b = !1; - 1 == a && (b = !0);
				for (var T = 0, A = M.length; T < A; T++) {
					var E = o.isClipping() ? 2 : x,
						R = M[T];
					if (R.bone.active)
						if (a >= 0 && a == R.data.index && (b = !0), b) {
							s >= 0 && s == R.data.index && (b = !1);
							var S = R.getAttachment(),
								I = null;
							if (S instanceof t.RegionAttachment) {
								var C = S;
								m.vertices = this.vertices, m.numVertices = 4, m.numFloats = E << 2, C.computeWorldVertices(R.bone, m.vertices, 0, E), v = i.QUAD_TRIANGLES, g = C.uvs, I = C.region.renderObject.texture, y = C.color
							} else {
								if (!(S instanceof t.MeshAttachment)) {
									if (S instanceof t.ClippingAttachment) {
										var P = S;
										o.clipStart(R, P);
										continue
									}
									o.clipEndWithSlot(R);
									continue
								}
								var k = S;
								m.vertices = this.vertices, m.numVertices = k.worldVerticesLength >> 1, m.numFloats = m.numVertices * E, m.numFloats > m.vertices.length && (m.vertices = this.vertices = t.Utils.newFloatArray(m.numFloats)), k.computeWorldVertices(R, 0, k.worldVerticesLength, m.vertices, 0, E), v = k.triangles, I = k.region.renderObject.texture, g = k.uvs, y = k.color
							}
							if (null != I) {
								var V = R.color,
									L = this.tempColor;
								L.r = w.r * V.r * y.r, L.g = w.g * V.g * y.g, L.b = w.b * V.b * y.b, L.a = w.a * V.a * y.a, h && (L.r *= L.a, L.g *= L.a, L.b *= L.a);
								var N = this.tempColor2;
								null == R.darkColor ? N.set(0, 0, 0, 1) : (h ? (N.r = R.darkColor.r * L.a, N.g = R.darkColor.g * L.a, N.b = R.darkColor.b * L.a) : N.setFromColor(R.darkColor), N.a = h ? 1 : 0);
								var D = R.data.blendMode;
								if (D != u && (u = D, n.setBlendMode(e.WebGLBlendModeConverter.getSourceGLBlendMode(u, h), e.WebGLBlendModeConverter.getDestGLBlendMode(u))), o.isClipping()) {
									o.clipTriangles(m.vertices, m.numFloats, v, v.length, g, L, N, l);
									var O = new Float32Array(o.clippedVertices),
										F = o.clippedTriangles;
									if (null != this.vertexEffect) {
										var Y = this.vertexEffect,
											U = O;
										if (l) {
											X = 0;
											for (var B = O.length; X < B; X += x) c.x = U[X], c.y = U[X + 1], p.set(U[X + 2], U[X + 3], U[X + 4], U[X + 5]), d.x = U[X + 6], d.y = U[X + 7], f.set(U[X + 8], U[X + 9], U[X + 10], U[X + 11]), Y.transform(c, d, p, f), U[X] = c.x, U[X + 1] = c.y, U[X + 2] = p.r, U[X + 3] = p.g, U[X + 4] = p.b, U[X + 5] = p.a, U[X + 6] = d.x, U[X + 7] = d.y, U[X + 8] = f.r, U[X + 9] = f.g, U[X + 10] = f.b, U[X + 11] = f.a
										} else
											for (var X = 0, W = O.length; X < W; X += x) c.x = U[X], c.y = U[X + 1], p.set(U[X + 2], U[X + 3], U[X + 4], U[X + 5]), d.x = U[X + 6], d.y = U[X + 7], f.set(0, 0, 0, 0), Y.transform(c, d, p, f), U[X] = c.x, U[X + 1] = c.y, U[X + 2] = p.r, U[X + 3] = p.g, U[X + 4] = p.b, U[X + 5] = p.a, U[X + 6] = d.x, U[X + 7] = d.y
									}
									n.draw(I, O, F)
								} else {
									if (U = m.vertices, null != this.vertexEffect)
										if (Y = this.vertexEffect, l) {
											X = 0, _ = 0;
											for (var G = m.numFloats; X < G; X += x, _ += 2) c.x = U[X], c.y = U[X + 1], d.x = g[_], d.y = g[_ + 1], p.setFromColor(L), f.setFromColor(N), Y.transform(c, d, p, f), U[X] = c.x, U[X + 1] = c.y, U[X + 2] = p.r, U[X + 3] = p.g, U[X + 4] = p.b, U[X + 5] = p.a, U[X + 6] = d.x, U[X + 7] = d.y, U[X + 8] = f.r, U[X + 9] = f.g, U[X + 10] = f.b, U[X + 11] = f.a
										} else {
											X = 0;
											for (var _ = 0, Z = m.numFloats; X < Z; X += x, _ += 2) c.x = U[X], c.y = U[X + 1], d.x = g[_], d.y = g[_ + 1], p.setFromColor(L), f.set(0, 0, 0, 0), Y.transform(c, d, p, f), U[X] = c.x, U[X + 1] = c.y, U[X + 2] = p.r, U[X + 3] = p.g, U[X + 4] = p.b, U[X + 5] = p.a, U[X + 6] = d.x, U[X + 7] = d.y
										}
									else if (l) {
										X = 2, _ = 0;
										for (var z = m.numFloats; X < z; X += x, _ += 2) U[X] = L.r, U[X + 1] = L.g, U[X + 2] = L.b, U[X + 3] = L.a, U[X + 4] = g[_], U[X + 5] = g[_ + 1], U[X + 6] = N.r, U[X + 7] = N.g, U[X + 8] = N.b, U[X + 9] = N.a
									} else {
										X = 2, _ = 0;
										for (var j = m.numFloats; X < j; X += x, _ += 2) U[X] = L.r, U[X + 1] = L.g, U[X + 2] = L.b, U[X + 3] = L.a, U[X + 4] = g[_], U[X + 5] = g[_ + 1]
									}
									var H = m.vertices.subarray(0, m.numFloats);
									n.draw(I, H, v)
								}
							}
							o.clipEndWithSlot(R)
						} else o.clipEndWithSlot(R);
					else o.clipEndWithSlot(R)
				}
				o.clipEnd()
			}, i.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], i
		}(), e.SkeletonRenderer = i
	}(Q || (Q = {})),
	function(t) {
		var e, n;
		e = t.webgl || (t.webgl = {}), n = function() {
			function t(t, e, n) {
				void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), this.x = 0, this.y = 0, this.z = 0, this.x = t, this.y = e, this.z = n
			}
			return t.prototype.setFrom = function(t) {
				return this.x = t.x, this.y = t.y, this.z = t.z, this
			}, t.prototype.set = function(t, e, n) {
				return this.x = t, this.y = e, this.z = n, this
			}, t.prototype.add = function(t) {
				return this.x += t.x, this.y += t.y, this.z += t.z, this
			}, t.prototype.sub = function(t) {
				return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
			}, t.prototype.scale = function(t) {
				return this.x *= t, this.y *= t, this.z *= t, this
			}, t.prototype.normalize = function() {
				var t = this.length();
				return 0 == t || (t = 1 / t, this.x *= t, this.y *= t, this.z *= t), this
			}, t.prototype.cross = function(t) {
				return this.set(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
			}, t.prototype.multiply = function(t) {
				var n = t.values;
				return this.set(this.x * n[e.M00] + this.y * n[e.M01] + this.z * n[e.M02] + n[e.M03], this.x * n[e.M10] + this.y * n[e.M11] + this.z * n[e.M12] + n[e.M13], this.x * n[e.M20] + this.y * n[e.M21] + this.z * n[e.M22] + n[e.M23])
			}, t.prototype.project = function(t) {
				var n = t.values,
					i = 1 / (this.x * n[e.M30] + this.y * n[e.M31] + this.z * n[e.M32] + n[e.M33]);
				return this.set((this.x * n[e.M00] + this.y * n[e.M01] + this.z * n[e.M02] + n[e.M03]) * i, (this.x * n[e.M10] + this.y * n[e.M11] + this.z * n[e.M12] + n[e.M13]) * i, (this.x * n[e.M20] + this.y * n[e.M21] + this.z * n[e.M22] + n[e.M23]) * i)
			}, t.prototype.dot = function(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z
			}, t.prototype.length = function() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
			}, t.prototype.distance = function(t) {
				var e = t.x - this.x,
					n = t.y - this.y,
					i = t.z - this.z;
				return Math.sqrt(e * e + n * n + i * i)
			}, t
		}(), e.Vector3 = n
	}(Q || (Q = {})),
	function(t) {
		! function(e) {
			var n = function() {
				function t(t, e) {
					var n = this;
					if (void 0 === e && (e = {
							alpha: "true"
						}), this.restorables = new Array, t instanceof HTMLCanvasElement) {
						var i = t;
						this.gl = i.getContext("webgl2", e) || i.getContext("webgl", e), this.canvas = i, i.addEventListener("webglcontextlost", (function(t) {
							t && t.preventDefault()
						})), i.addEventListener("webglcontextrestored", (function(t) {
							for (var e = 0, i = n.restorables.length; e < i; e++) n.restorables[e].restore()
						}))
					} else this.gl = t, this.canvas = this.gl.canvas
				}
				return t.prototype.addRestorable = function(t) {
					this.restorables.push(t)
				}, t.prototype.removeRestorable = function(t) {
					var e = this.restorables.indexOf(t);
					e > -1 && this.restorables.splice(e, 1)
				}, t
			}();
			e.ManagedWebGLRenderingContext = n;
			var i = function() {
				function e() {}
				return e.getDestGLBlendMode = function(n) {
					switch (n) {
						case t.BlendMode.Normal:
							return e.ONE_MINUS_SRC_ALPHA;
						case t.BlendMode.Additive:
							return e.ONE;
						case t.BlendMode.Multiply:
						case t.BlendMode.Screen:
							return e.ONE_MINUS_SRC_ALPHA;
						default:
							throw new Error("Unknown blend mode: " + n)
					}
				}, e.getSourceGLBlendMode = function(n, i) {
					switch (void 0 === i && (i = !1), n) {
						case t.BlendMode.Normal:
						case t.BlendMode.Additive:
							return i ? e.ONE : e.SRC_ALPHA;
						case t.BlendMode.Multiply:
							return e.DST_COLOR;
						case t.BlendMode.Screen:
							return e.ONE;
						default:
							throw new Error("Unknown blend mode: " + n)
					}
				}, e.ZERO = 0, e.ONE = 1, e.SRC_COLOR = 768, e.ONE_MINUS_SRC_COLOR = 769, e.SRC_ALPHA = 770, e.ONE_MINUS_SRC_ALPHA = 771, e.DST_ALPHA = 772, e.ONE_MINUS_DST_ALPHA = 773, e.DST_COLOR = 774, e
			}();
			e.WebGLBlendModeConverter = i
		}(t.webgl || (t.webgl = {}))
	}(Q || (Q = {}));
const K = Q,
	$ = () => {};
let tt = class {
	constructor(t) {
		e(this, "skeletons", {}), e(this, "canvas"), e(this, "shader"), e(this, "debugShader"), e(this, "batcher"), e(this, "mvp"), e(this, "skeletonRenderer"), e(this, "debugRenderer"), e(this, "context"), e(this, "shapes"), e(this, "assetManager"), e(this, "lastFrameTime"), e(this, "bg", [0, 0, 0, 0]), e(this, "activeSkeleton"), e(this, "debug", !1), e(this, "position"), this.canvas = t, this.context = new K.webgl.ManagedWebGLRenderingContext(t, {
			alpha: !0
		}), this.shader = K.webgl.Shader.newTwoColoredTextured(this.context), this.batcher = new K.webgl.PolygonBatcher(this.context), this.mvp = new K.webgl.Matrix4, this.mvp.ortho2d(0, 0, t.width, t.height), this.position = {
			x: 0,
			y: 0,
			scale: 1
		}, this.skeletonRenderer = new K.webgl.SkeletonRenderer(this.context), this.debugRenderer = new K.webgl.SkeletonDebugRenderer(this.context), this.debugRenderer.drawRegionAttachments = !0, this.debugRenderer.drawBoundingBoxes = !0, this.debugRenderer.drawMeshHull = !0, this.debugRenderer.drawMeshTriangles = !0, this.debugRenderer.drawPaths = !0, this.debugShader = K.webgl.Shader.newColored(this.context), this.shapes = new K.webgl.ShapeRenderer(this.context), this.assetManager = new K.webgl.AssetManager(this.context), this.lastFrameTime = 0
	}
	async load(t, e, n, i, r, a = !0) {
		return this.skeletons[t] ? this.skeletons[t] : (await this.fetchAssets(e, n), this.loadSkel(t, e, n, i, a, r))
	}
	async fetchAssets(t, e) {
		const n = new Promise(((e, n) => {
				this.assetManager.loadBinary(t, (t => e(t)), (t => n(t)))
			})),
			i = new Promise(((t, n) => {
				this.assetManager.loadTextureAtlas(e, (e => t(e)), (t => n(t)))
			}));
		return Promise.all([n, i])
	}
	loadSkel(t, e, n, i, r = !0, a) {
		const s = this.assetManager.get(n),
			o = new K.AtlasAttachmentLoader(s),
			h = this.assetManager.get(e),
			l = new K.SkeletonBinary(o).readSkeletonData(h),
			u = new K.Skeleton(l);
		a && u.setSkinByName(a);
		const c = function(t) {
				t.setToSetupPose(), t.updateWorldTransform();
				const e = new K.Vector2,
					n = new K.Vector2;
				return t.getBounds(e, n, []), {
					offset: e,
					size: n
				}
			}(u),
			d = new K.AnimationStateData(u.data),
			p = new K.AnimationState(d);
		return this.mvp.ortho2d(i.x, i.y, this.canvas.width * i.scale, this.canvas.height * i.scale), this.skeletons[t] = {
			skeleton: u,
			bounds: c,
			state: p,
			premultipliedAlpha: r
		}, this.position = i, this.skeletons[t]
	}
	play(t) {
		this.lastFrameTime && t === this.activeSkeleton ? console.log("is playing!") : (console.log("play", t), this.lastFrameTime = Date.now(), this.activeSkeleton = t, this.render())
	}
	render() {
		if (!this.activeSkeleton) return this.lastFrameTime = 0, void console.info("nothing to play");
		const t = Date.now() / 1e3,
			e = t - this.lastFrameTime;
		this.lastFrameTime = t, this.context.gl.clearColor(...this.bg), this.context.gl.clear(this.context.gl.COLOR_BUFFER_BIT);
		const n = this.skeletons[this.activeSkeleton].state,
			i = this.skeletons[this.activeSkeleton].skeleton,
			r = this.skeletons[this.activeSkeleton].premultipliedAlpha;
		n.update(e), n.apply(i), i.updateWorldTransform(), this.shader.bind(), this.shader.setUniformi(K.webgl.Shader.SAMPLER, 0), this.shader.setUniform4x4f(K.webgl.Shader.MVP_MATRIX, this.mvp.values), this.batcher.begin(this.shader), this.skeletonRenderer.premultipliedAlpha = r, this.skeletonRenderer.draw(this.batcher, i), this.batcher.end(), this.shader.unbind(), this.debug && (this.debugShader.bind(), this.debugShader.setUniform4x4f(K.webgl.Shader.MVP_MATRIX, this.mvp.values), this.debugRenderer.premultipliedAlpha = r, this.shapes.begin(this.debugShader), this.debugRenderer.draw(this.shapes, i), this.shapes.end(), this.debugShader.unbind()), requestAnimationFrame(this.render.bind(this))
	}
	getCurrent() {
		if (this.activeSkeleton) return console.log("getCurrent", this.activeSkeleton), this.skeletons[this.activeSkeleton]
	}
    getScale() {
		if (this.position.scale) return this.position.scale
	}
	move(t, e) {
		console.log(t, e), this.activeSkeleton && (this.position.x = t, this.position.y = e, this.mvp.ortho2d(t, e, this.canvas.width / this.position.scale, this.canvas.height / this.position.scale))
	}
	scale(t) {
		this.position = {
			scale: t,
			x: this.position.x,
			y: this.position.y
		}, this.mvp.ortho2d(this.position.x, this.position.y, this.canvas.width / t, this.canvas.height / t)
	}
	transform(t, e, n) {
		this.position = {
			scale: n,
			x: t,
			y: e
		}, this.mvp.ortho2d(this.position.x, this.position.y, this.canvas.width / n, this.canvas.height / n)
	}
	async record(t, e) {
		if (!this.activeSkeleton) throw new Error("activeSkeleton is empty");
		const i = this.canvas.captureStream(60),
			r = [],
			a = new MediaRecorder(i, {
				mimeType: "video/webm"
			});
		a.ondataavailable = t => {
			r.push(t.data)
		};
		let s = !1;
		const o = this.skeletons[this.activeSkeleton].state;
		return o.addListener({
			start: t => {
				console.log("start"), s = !0, a.start()
			},
			end: $,
			interrupt: $,
			dispose: $,
			complete: t => {
				s && (console.log("end"), a.stop())
			},
			event: $
		}), o.setAnimation(0, t, !1), new Promise((t => {
			a.onstop = () => {
				const i = new Blob(r, {
					type: "video/webm"
				});
				n(i, e || "output"), o.clearListeners(), t()
			}
		}))
	}
};
const et = i({
		props: {
			detailes: Array
		},
		setup: () => ({
			round: function(t) {
				return Math.round(t)
			}
		})
	}),
	nt = {
		class: "wikitable w-full"
	},
	it = o("thead", null, [o("tr", null, [o("th", null, "动画"), o("th", null, "持续时间(s)"), o("th", null, "帧数(30/s)")])], -1),
	rt = r(et, [
		//动画数据 
		["render", function(t, e, n, i, r, c) {
			return a(), s("table", nt, [it, o("tbody", null, [(a(!0), s(h, null, l(t.detailes, (e => (a(), s("tr", {
				key: e.name
			}, [o("td", null, u(e.name), 1), o("td", null, u(e.duration), 1), o("td", null, u(t.round(30 * e.duration)), 1)])))), 128))])])
		}]
	]);
var at, st = {};
/*! Hammer.JS - v2.0.7 - 2016-04-22
	* http://hammerjs.github.io/
	*
	* Copyright (c) 2016 Jorik Tangelder;
	* Licensed under the MIT license */
at = {
		get exports() {
			return st
		},
		set exports(t) {
			st = t
		}
	},
	function(t, e, n, i) {
		var r, a = ["", "webkit", "Moz", "MS", "ms", "o"],
			s = e.createElement("div"),
			o = "function",
			h = Math.round,
			l = Math.abs,
			u = Date.now;

		function c(t, e, n) {
			return setTimeout(M(t, n), e)
		}

		function d(t, e, n) {
			return !!Array.isArray(t) && (p(t, n[e], n), !0)
		}

		function p(t, e, n) {
			var r;
			if (t)
				if (t.forEach) t.forEach(e, n);
				else if (t.length !== i)
				for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
			else
				for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
		}

		function f(e, n, i) {
			var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
			return function() {
				var n = new Error("get-stack-trace"),
					i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					a = t.console && (t.console.warn || t.console.log);
				return a && a.call(t.console, r, i), e.apply(this, arguments)
			}
		}
		r = "function" != typeof Object.assign ? function(t) {
			if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
			for (var e = Object(t), n = 1; n < arguments.length; n++) {
				var r = arguments[n];
				if (r !== i && null !== r)
					for (var a in r) r.hasOwnProperty(a) && (e[a] = r[a])
			}
			return e
		} : Object.assign;
		var m = f((function(t, e, n) {
				for (var r = Object.keys(e), a = 0; a < r.length;)(!n || n && t[r[a]] === i) && (t[r[a]] = e[r[a]]), a++;
				return t
			}), "extend", "Use `assign`."),
			g = f((function(t, e) {
				return m(t, e, !0)
			}), "merge", "Use `assign`.");

		function v(t, e, n) {
			var i, a = e.prototype;
			(i = t.prototype = Object.create(a)).constructor = t, i._super = a, n && r(i, n)
		}

		function M(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}

		function y(t, e) {
			return typeof t == o ? t.apply(e && e[0] || i, e) : t
		}

		function w(t, e) {
			return t === i ? e : t
		}

		function x(t, e, n) {
			p(E(e), (function(e) {
				t.addEventListener(e, n, !1)
			}))
		}

		function b(t, e, n) {
			p(E(e), (function(e) {
				t.removeEventListener(e, n, !1)
			}))
		}

		function T(t, e) {
			for (; t;) {
				if (t == e) return !0;
				t = t.parentNode
			}
			return !1
		}

		function A(t, e) {
			return t.indexOf(e) > -10
		}

		function E(t) {
			return t.trim().split(/\s+/g)
		}

		function R(t, e, n) {
			if (t.indexOf && !n) return t.indexOf(e);
			for (var i = 0; i < t.length;) {
				if (n && t[i][n] == e || !n && t[i] === e) return i;
				i++
			}
			return -1
		}

		function S(t) {
			return Array.prototype.slice.call(t, 0)
		}

		function I(t, e, n) {
			for (var i = [], r = [], a = 0; a < t.length;) {
				var s = e ? t[a][e] : t[a];
				R(r, s) < 0 && i.push(t[a]), r[a] = s, a++
			}
			return n && (i = e ? i.sort((function(t, n) {
				return t[e] > n[e]
			})) : i.sort()), i
		}

		function C(t, e) {
			for (var n, r, s = e[0].toUpperCase() + e.slice(1), o = 0; o < a.length;) {
				if ((r = (n = a[o]) ? n + s : e) in t) return r;
				o++
			}
			return i
		}
		var P = 1;

		function k(e) {
			var n = e.ownerDocument || e;
			return n.defaultView || n.parentWindow || t
		}
		var V = "ontouchstart" in t,
			L = C(t, "PointerEvent") !== i,
			N = V && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
			D = "touch",
			O = "mouse",
			F = 25,
			Y = 1,
			U = 2,
			B = 4,
			X = 8,
			W = 1,
			G = 2,
			_ = 4,
			Z = 8,
			z = 16,
			j = G | _,
			H = Z | z,
			J = j | H,
			Q = ["x", "y"],
			q = ["clientX", "clientY"];

		function K(t, e) {
			var n = this;
			this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
				y(t.options.enable, [t]) && n.handler(e)
			}, this.init()
		}

		function $(t, e, n) {
			var r = n.pointers.length,
				a = n.changedPointers.length,
				s = e & Y && r - a == 0,
				o = e & (B | X) && r - a == 0;
			n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e,
				function(t, e) {
					var n = t.session,
						r = e.pointers,
						a = r.length;
					n.firstInput || (n.firstInput = tt(e)), a > 1 && !n.firstMultiple ? n.firstMultiple = tt(e) : 1 === a && (n.firstMultiple = !1);
					var s = n.firstInput,
						o = n.firstMultiple,
						h = o ? o.center : s.center,
						c = e.center = et(r);
					e.timeStamp = u(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = st(h, c), e.distance = rt(h, c),
						function(t, e) {
							var n = e.center,
								i = t.offsetDelta || {},
								r = t.prevDelta || {},
								a = t.prevInput || {};
							e.eventType !== Y && a.eventType !== B || (r = t.prevDelta = {
								x: a.deltaX || 0,
								y: a.deltaY || 0
							}, i = t.offsetDelta = {
								x: n.x,
								y: n.y
							}), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
						}(n, e), e.offsetDirection = it(e.deltaX, e.deltaY);
					var d, p, f = nt(e.deltaTime, e.deltaX, e.deltaY);
					e.overallVelocityX = f.x, e.overallVelocityY = f.y, e.overallVelocity = l(f.x) > l(f.y) ? f.x : f.y, e.scale = o ? (d = o.pointers, rt((p = r)[0], p[1], q) / rt(d[0], d[1], q)) : 1, e.rotation = o ? function(t, e) {
							return st(e[1], e[0], q) + st(t[1], t[0], q)
						}(o.pointers, r) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
						function(t, e) {
							var n, r, a, s, o = t.lastInterval || e,
								h = e.timeStamp - o.timeStamp;
							if (e.eventType != X && (h > F || o.velocity === i)) {
								var u = e.deltaX - o.deltaX,
									c = e.deltaY - o.deltaY,
									d = nt(h, u, c);
								r = d.x, a = d.y, n = l(d.x) > l(d.y) ? d.x : d.y, s = it(u, c), t.lastInterval = e
							} else n = o.velocity, r = o.velocityX, a = o.velocityY, s = o.direction;
							e.velocity = n, e.velocityX = r, e.velocityY = a, e.direction = s
						}(n, e);
					var m = t.element;
					T(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
				}(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
		}

		function tt(t) {
			for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
				clientX: h(t.pointers[n].clientX),
				clientY: h(t.pointers[n].clientY)
			}, n++;
			return {
				timeStamp: u(),
				pointers: e,
				center: et(e),
				deltaX: t.deltaX,
				deltaY: t.deltaY
			}
		}

		function et(t) {
			var e = t.length;
			if (1 === e) return {
				x: h(t[0].clientX),
				y: h(t[0].clientY)
			};
			for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
			return {
				x: h(n / e),
				y: h(i / e)
			}
		}

		function nt(t, e, n) {
			return {
				x: e / t || 0,
				y: n / t || 0
			}
		}

		function it(t, e) {
			return t === e ? W : l(t) >= l(e) ? t < 0 ? G : _ : e < 0 ? Z : z
		}

		function rt(t, e, n) {
			n || (n = Q);
			var i = e[n[0]] - t[n[0]],
				r = e[n[1]] - t[n[1]];
			return Math.sqrt(i * i + r * r)
		}

		function st(t, e, n) {
			n || (n = Q);
			var i = e[n[0]] - t[n[0]],
				r = e[n[1]] - t[n[1]];
			return 180 * Math.atan2(r, i) / Math.PI
		}
		K.prototype = {
			handler: function() {},
			init: function() {
				this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(k(this.element), this.evWin, this.domHandler)
			},
			destroy: function() {
				this.evEl && b(this.element, this.evEl, this.domHandler), this.evTarget && b(this.target, this.evTarget, this.domHandler), this.evWin && b(k(this.element), this.evWin, this.domHandler)
			}
		};
		var ot = {
				mousedown: Y,
				mousemove: U,
				mouseup: B
			},
			ht = "mousedown",
			lt = "mousemove mouseup";

		function ut() {
			this.evEl = ht, this.evWin = lt, this.pressed = !1, K.apply(this, arguments)
		}
		v(ut, K, {
			handler: function(t) {
				var e = ot[t.type];
				e & Y && 0 === t.button && (this.pressed = !0), e & U && 1 !== t.which && (e = B), this.pressed && (e & B && (this.pressed = !1), this.callback(this.manager, e, {
					pointers: [t],
					changedPointers: [t],
					pointerType: O,
					srcEvent: t
				}))
			}
		});
		var ct = {
				pointerdown: Y,
				pointermove: U,
				pointerup: B,
				pointercancel: X,
				pointerout: X
			},
			dt = {
				2: D,
				3: "pen",
				4: O,
				5: "kinect"
			},
			pt = "pointerdown",
			ft = "pointermove pointerup pointercancel";

		function mt() {
			this.evEl = pt, this.evWin = ft, K.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}
		t.MSPointerEvent && !t.PointerEvent && (pt = "MSPointerDown", ft = "MSPointerMove MSPointerUp MSPointerCancel"), v(mt, K, {
			handler: function(t) {
				var e = this.store,
					n = !1,
					i = t.type.toLowerCase().replace("ms", ""),
					r = ct[i],
					a = dt[t.pointerType] || t.pointerType,
					s = a == D,
					o = R(e, t.pointerId, "pointerId");
				r & Y && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : r & (B | X) && (n = !0), o < 0 || (e[o] = t, this.callback(this.manager, r, {
					pointers: e,
					changedPointers: [t],
					pointerType: a,
					srcEvent: t
				}), n && e.splice(o, 1))
			}
		});
		var gt = {
			touchstart: Y,
			touchmove: U,
			touchend: B,
			touchcancel: X
		};

		function vt() {
			this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, K.apply(this, arguments)
		}

		function Mt(t, e) {
			var n = S(t.touches),
				i = S(t.changedTouches);
			return e & (B | X) && (n = I(n.concat(i), "identifier", !0)), [n, i]
		}
		v(vt, K, {
			handler: function(t) {
				var e = gt[t.type];
				if (e === Y && (this.started = !0), this.started) {
					var n = Mt.call(this, t, e);
					e & (B | X) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
						pointers: n[0],
						changedPointers: n[1],
						pointerType: D,
						srcEvent: t
					})
				}
			}
		});
		var yt = {
				touchstart: Y,
				touchmove: U,
				touchend: B,
				touchcancel: X
			},
			wt = "touchstart touchmove touchend touchcancel";

		function xt() {
			this.evTarget = wt, this.targetIds = {}, K.apply(this, arguments)
		}

		function bt(t, e) {
			var n = S(t.touches),
				i = this.targetIds;
			if (e & (Y | U) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
			var r, a, s = S(t.changedTouches),
				o = [],
				h = this.target;
			if (a = n.filter((function(t) {
					return T(t.target, h)
				})), e === Y)
				for (r = 0; r < a.length;) i[a[r].identifier] = !0, r++;
			for (r = 0; r < s.length;) i[s[r].identifier] && o.push(s[r]), e & (B | X) && delete i[s[r].identifier], r++;
			return o.length ? [I(a.concat(o), "identifier", !0), o] : void 0
		}
		v(xt, K, {
			handler: function(t) {
				var e = yt[t.type],
					n = bt.call(this, t, e);
				n && this.callback(this.manager, e, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: D,
					srcEvent: t
				})
			}
		});
		var Tt = 2500;

		function At() {
			K.apply(this, arguments);
			var t = M(this.handler, this);
			this.touch = new xt(this.manager, t), this.mouse = new ut(this.manager, t), this.primaryTouch = null, this.lastTouches = []
		}

		function Et(t, e) {
			t & Y ? (this.primaryTouch = e.changedPointers[0].identifier, Rt.call(this, e)) : t & (B | X) && Rt.call(this, e)
		}

		function Rt(t) {
			var e = t.changedPointers[0];
			if (e.identifier === this.primaryTouch) {
				var n = {
					x: e.clientX,
					y: e.clientY
				};
				this.lastTouches.push(n);
				var i = this.lastTouches;
				setTimeout((function() {
					var t = i.indexOf(n);
					t > -1 && i.splice(t, 1)
				}), Tt)
			}
		}

		function St(t) {
			for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
				var r = this.lastTouches[i],
					a = Math.abs(e - r.x),
					s = Math.abs(n - r.y);
				if (a <= 25 && s <= 25) return !0
			}
			return !1
		}
		v(At, K, {
			handler: function(t, e, n) {
				var i = n.pointerType == D,
					r = n.pointerType == O;
				if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
					if (i) Et.call(this, e, n);
					else if (r && St.call(this, n)) return;
					this.callback(t, e, n)
				}
			},
			destroy: function() {
				this.touch.destroy(), this.mouse.destroy()
			}
		});
		var It = C(s.style, "touchAction"),
			Ct = It !== i,
			Pt = "compute",
			kt = "auto",
			Vt = "manipulation",
			Lt = "none",
			Nt = "pan-x",
			Dt = "pan-y",
			Ot = function() {
				if (!Ct) return !1;
				var e = {},
					n = t.CSS && t.CSS.supports;
				return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
					e[i] = !n || t.CSS.supports("touch-action", i)
				})), e
			}();

		function Ft(t, e) {
			this.manager = t, this.set(e)
		}
		Ft.prototype = {
			set: function(t) {
				t == Pt && (t = this.compute()), Ct && this.manager.element.style && Ot[t] && (this.manager.element.style[It] = t), this.actions = t.toLowerCase().trim()
			},
			update: function() {
				this.set(this.manager.options.touchAction)
			},
			compute: function() {
				var t = [];
				return p(this.manager.recognizers, (function(e) {
						y(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
					})),
					function(t) {
						if (A(t, Lt)) return Lt;
						var e = A(t, Nt),
							n = A(t, Dt);
						return e && n ? Lt : e || n ? e ? Nt : Dt : A(t, Vt) ? Vt : kt
					}(t.join(" "))
			},
			preventDefaults: function(t) {
				var e = t.srcEvent,
					n = t.offsetDirection;
				if (this.manager.session.prevented) e.preventDefault();
				else {
					var i = this.actions,
						r = A(i, Lt) && !Ot[Lt],
						a = A(i, Dt) && !Ot[Dt],
						s = A(i, Nt) && !Ot[Nt];
					if (r) {
						var o = 1 === t.pointers.length,
							h = t.distance < 2,
							l = t.deltaTime < 250;
						if (o && h && l) return
					}
					if (!s || !a) return r || a && n & j || s && n & H ? this.preventSrc(e) : void 0
				}
			},
			preventSrc: function(t) {
				this.manager.session.prevented = !0, t.preventDefault()
			}
		};
		var Yt = 1,
			Ut = 2,
			Bt = 4,
			Xt = 8,
			Wt = Xt,
			Gt = 16,
			_t = 32;

		function Zt(t) {
			this.options = r({}, this.defaults, t || {}), this.id = P++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = Yt, this.simultaneous = {}, this.requireFail = []
		}

		function zt(t) {
			return t & Gt ? "cancel" : t & Xt ? "end" : t & Bt ? "move" : t & Ut ? "start" : ""
		}

		function jt(t) {
			return t == z ? "down" : t == Z ? "up" : t == G ? "left" : t == _ ? "right" : ""
		}

		function Ht(t, e) {
			var n = e.manager;
			return n ? n.get(t) : t
		}

		function Jt() {
			Zt.apply(this, arguments)
		}

		function Qt() {
			Jt.apply(this, arguments), this.pX = null, this.pY = null
		}

		function qt() {
			Jt.apply(this, arguments)
		}

		function Kt() {
			Zt.apply(this, arguments), this._timer = null, this._input = null
		}

		function $t() {
			Jt.apply(this, arguments)
		}

		function te() {
			Jt.apply(this, arguments)
		}

		function ee() {
			Zt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
		}

		function ne(t, e) {
			return (e = e || {}).recognizers = w(e.recognizers, ne.defaults.preset), new ie(t, e)
		}

		function ie(t, e) {
			this.options = r({}, ne.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (L ? mt : N ? xt : V ? At : ut))(this, $), this.touchAction = new Ft(this, this.options.touchAction), re(this, !0), p(this.options.recognizers, (function(t) {
				var e = this.add(new t[0](t[1]));
				t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
			}), this)
		}

		function re(t, e) {
			var n, i = t.element;
			i.style && (p(t.options.cssProps, (function(r, a) {
				n = C(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
			})), e || (t.oldCssProps = {}))
		}
		Zt.prototype = {
			defaults: {},
			set: function(t) {
				return r(this.options, t), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function(t) {
				if (d(t, "recognizeWith", this)) return this;
				var e = this.simultaneous;
				return e[(t = Ht(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
			},
			dropRecognizeWith: function(t) {
				return d(t, "dropRecognizeWith", this) || (t = Ht(t, this), delete this.simultaneous[t.id]), this
			},
			requireFailure: function(t) {
				if (d(t, "requireFailure", this)) return this;
				var e = this.requireFail;
				return -1 === R(e, t = Ht(t, this)) && (e.push(t), t.requireFailure(this)), this
			},
			dropRequireFailure: function(t) {
				if (d(t, "dropRequireFailure", this)) return this;
				t = Ht(t, this);
				var e = R(this.requireFail, t);
				return e > -1 && this.requireFail.splice(e, 1), this
			},
			hasRequireFailures: function() {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function(t) {
				return !!this.simultaneous[t.id]
			},
			emit: function(t) {
				var e = this,
					n = this.state;

				function i(n) {
					e.manager.emit(n, t)
				}
				n < Xt && i(e.options.event + zt(n)), i(e.options.event), t.additionalEvent && i(t.additionalEvent), n >= Xt && i(e.options.event + zt(n))
			},
			tryEmit: function(t) {
				if (this.canEmit()) return this.emit(t);
				this.state = _t
			},
			canEmit: function() {
				for (var t = 0; t < this.requireFail.length;) {
					if (!(this.requireFail[t].state & (_t | Yt))) return !1;
					t++
				}
				return !0
			},
			recognize: function(t) {
				var e = r({}, t);
				if (!y(this.options.enable, [this, e])) return this.reset(), void(this.state = _t);
				this.state & (Wt | Gt | _t) && (this.state = Yt), this.state = this.process(e), this.state & (Ut | Bt | Xt | Gt) && this.tryEmit(e)
			},
			process: function(t) {},
			getTouchAction: function() {},
			reset: function() {}
		}, v(Jt, Zt, {
			defaults: {
				pointers: 1
			},
			attrTest: function(t) {
				var e = this.options.pointers;
				return 0 === e || t.pointers.length === e
			},
			process: function(t) {
				var e = this.state,
					n = t.eventType,
					i = e & (Ut | Bt),
					r = this.attrTest(t);
				return i && (n & X || !r) ? e | Gt : i || r ? n & B ? e | Xt : e & Ut ? e | Bt : Ut : _t
			}
		}), v(Qt, Jt, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: J
			},
			getTouchAction: function() {
				var t = this.options.direction,
					e = [];
				return t & j && e.push(Dt), t & H && e.push(Nt), e
			},
			directionTest: function(t) {
				var e = this.options,
					n = !0,
					i = t.distance,
					r = t.direction,
					a = t.deltaX,
					s = t.deltaY;
				return r & e.direction || (e.direction & j ? (r = 0 === a ? W : a < 0 ? G : _, n = a != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === s ? W : s < 0 ? Z : z, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
			},
			attrTest: function(t) {
				return Jt.prototype.attrTest.call(this, t) && (this.state & Ut || !(this.state & Ut) && this.directionTest(t))
			},
			emit: function(t) {
				this.pX = t.deltaX, this.pY = t.deltaY;
				var e = jt(t.direction);
				e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
			}
		}), v(qt, Jt, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [Lt]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Ut)
			},
			emit: function(t) {
				if (1 !== t.scale) {
					var e = t.scale < 1 ? "in" : "out";
					t.additionalEvent = this.options.event + e
				}
				this._super.emit.call(this, t)
			}
		}), v(Kt, Zt, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function() {
				return [kt]
			},
			process: function(t) {
				var e = this.options,
					n = t.pointers.length === e.pointers,
					i = t.distance < e.threshold,
					r = t.deltaTime > e.time;
				if (this._input = t, !i || !n || t.eventType & (B | X) && !r) this.reset();
				else if (t.eventType & Y) this.reset(), this._timer = c((function() {
					this.state = Wt, this.tryEmit()
				}), e.time, this);
				else if (t.eventType & B) return Wt;
				return _t
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function(t) {
				this.state === Wt && (t && t.eventType & B ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = u(), this.manager.emit(this.options.event, this._input)))
			}
		}), v($t, Jt, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [Lt]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Ut)
			}
		}), v(te, Jt, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: j | H,
				pointers: 1
			},
			getTouchAction: function() {
				return Qt.prototype.getTouchAction.call(this)
			},
			attrTest: function(t) {
				var e, n = this.options.direction;
				return n & (j | H) ? e = t.overallVelocity : n & j ? e = t.overallVelocityX : n & H && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && l(e) > this.options.velocity && t.eventType & B
			},
			emit: function(t) {
				var e = jt(t.offsetDirection);
				e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
			}
		}), v(ee, Zt, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function() {
				return [Vt]
			},
			process: function(t) {
				var e = this.options,
					n = t.pointers.length === e.pointers,
					i = t.distance < e.threshold,
					r = t.deltaTime < e.time;
				if (this.reset(), t.eventType & Y && 0 === this.count) return this.failTimeout();
				if (i && r && n) {
					if (t.eventType != B) return this.failTimeout();
					var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
						s = !this.pCenter || rt(this.pCenter, t.center) < e.posThreshold;
					if (this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c((function() {
						this.state = Wt, this.tryEmit()
					}), e.interval, this), Ut) : Wt
				}
				return _t
			},
			failTimeout: function() {
				return this._timer = c((function() {
					this.state = _t
				}), this.options.interval, this), _t
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function() {
				this.state == Wt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		}), ne.VERSION = "2.0.7", ne.defaults = {
			domEvents: !1,
			touchAction: Pt,
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[$t, {
					enable: !1
				}],
				[qt, {
						enable: !1
					},
					["rotate"]
				],
				[te, {
					direction: j
				}],
				[Qt, {
						direction: j
					},
					["swipe"]
				],
				[ee],
				[ee, {
						event: "doubletap",
						taps: 2
					},
					["tap"]
				],
				[Kt]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		}, ie.prototype = {
			set: function(t) {
				return r(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
			},
			stop: function(t) {
				this.session.stopped = t ? 2 : 1
			},
			recognize: function(t) {
				var e = this.session;
				if (!e.stopped) {
					var n;
					this.touchAction.preventDefaults(t);
					var i = this.recognizers,
						r = e.curRecognizer;
					(!r || r && r.state & Wt) && (r = e.curRecognizer = null);
					for (var a = 0; a < i.length;) n = i[a], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (Ut | Bt | Xt) && (r = e.curRecognizer = n), a++
				}
			},
			get: function(t) {
				if (t instanceof Zt) return t;
				for (var e = this.recognizers, n = 0; n < e.length; n++)
					if (e[n].options.event == t) return e[n];
				return null
			},
			add: function(t) {
				if (d(t, "add", this)) return this;
				var e = this.get(t.options.event);
				return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
			},
			remove: function(t) {
				if (d(t, "remove", this)) return this;
				if (t = this.get(t)) {
					var e = this.recognizers,
						n = R(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
				}
				return this
			},
			on: function(t, e) {
				if (t !== i && e !== i) {
					var n = this.handlers;
					return p(E(t), (function(t) {
						n[t] = n[t] || [], n[t].push(e)
					})), this
				}
			},
			off: function(t, e) {
				if (t !== i) {
					var n = this.handlers;
					return p(E(t), (function(t) {
						e ? n[t] && n[t].splice(R(n[t], e), 1) : delete n[t]
					})), this
				}
			},
			emit: function(t, n) {
				this.options.domEvents && function(t, n) {
					var i = e.createEvent("Event");
					i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
				}(t, n);
				var i = this.handlers[t] && this.handlers[t].slice();
				if (i && i.length) {
					n.type = t, n.preventDefault = function() {
						n.srcEvent.preventDefault()
					};
					for (var r = 0; r < i.length;) i[r](n), r++
				}
			},
			destroy: function() {
				this.element && re(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		}, r(ne, {
			INPUT_START: Y,
			INPUT_MOVE: U,
			INPUT_END: B,
			INPUT_CANCEL: X,
			STATE_POSSIBLE: Yt,
			STATE_BEGAN: Ut,
			STATE_CHANGED: Bt,
			STATE_ENDED: Xt,
			STATE_RECOGNIZED: Wt,
			STATE_CANCELLED: Gt,
			STATE_FAILED: _t,
			DIRECTION_NONE: W,
			DIRECTION_LEFT: G,
			DIRECTION_RIGHT: _,
			DIRECTION_UP: Z,
			DIRECTION_DOWN: z,
			DIRECTION_HORIZONTAL: j,
			DIRECTION_VERTICAL: H,
			DIRECTION_ALL: J,
			Manager: ie,
			Input: K,
			TouchAction: Ft,
			TouchInput: xt,
			MouseInput: ut,
			PointerEventInput: mt,
			TouchMouseInput: At,
			SingleTouchInput: vt,
			Recognizer: Zt,
			AttrRecognizer: Jt,
			Tap: ee,
			Pan: Qt,
			Swipe: te,
			Pinch: qt,
			Rotate: $t,
			Press: Kt,
			on: x,
			off: b,
			each: p,
			merge: g,
			extend: m,
			assign: r,
			inherit: v,
			bindFn: M,
			prefixed: C
		}), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = ne, "function" == typeof i && i.amd ? i((function() {
			return ne
		})) : at.exports ? at.exports = ne : t.Hammer = ne
	}(window, document);
const ot = st,
	ht = i({
		components: {
			NButton: L,
			NSkeleton: N,
			NSelect: D,
			NSwitch: O,
			NColorPicker: F,
			NSlider: Y,
			NIcon: U,
			NPopover: B,
			DownloadOutlined: m,
			CenterFocusStrongSharp: g,
			FullscreenOutlined: v,
			InfoOutlined: M,
			FullscreenExitOutlined: y,
			FormItem: w,
			Card: x,
			Detail: rt
		},
		props: {
			prefix: String,
			name: String,
			skin: Object
		},
		setup(t) {
			const e = c(),
				n = {},
				i = c(!0),
				r = c("#00000000"),
				a = c(1),
				s = Object.keys(t.skin),
				o = c(s[0]),
				h = b((() => Object.keys(t.skin[o.value]).map((t => ({
					label: t,
					value: t
				}))))),
				l = c(Object.keys(t.skin[s[0]])[0]),
				u = c([]),
				m = b((() => u.value.map((t => ({
					label: t,
					value: t
				}))))),
				g = c([]),
				v = c(""),
				M = c(!1),
				sds = c(1);
			async function y() {
				i.value = !0;
				const e = t.prefix + t.skin[o.value][l.value].file,
					{
						skeleton: r,
						state: s
					} = await n.spine.load(`${o.value}-${l.value}`, `${e}.skel`, `${e}.atlas`, {
						x: -500,
						y: -200,
						scale: 1
					}, t.skin[o.value][l.value].skin),
					h = u.value = r.data.animations.map((t => t.name));
				g.value = r.data.animations.map((t => ({
					name: t.name,
					duration: t.duration
				}))), i.value = !1, n.spine.play(`${o.value}-${l.value}`), s.setAnimation(0, h[3], M.value), v.value = h[3], s.timeScale = a.value
			}
			d((() => {
				console.warn("canvas", e.value), e.value && (n.spine = new tt(e.value), y())
			}));
			const {
				big: w
			} = function(t, e) {
				const n = c(!1),
					i = c(),
					r = () => e.spine.position,
					a = n => {
						var i;
						if (n.preventDefault(), !t.value) return;
						const a = f() ? n.deltaY / -480 : -.001 * n.deltaY;
						if (!e.spine) return;
						const {
							scale: s
						} = r();
						s + a <= 0 || null == (i = e.spine) || i.scale(s + a)
					};
				let s;
				return d((() => {
					t.value && (s = new ot(t.value), s.get("pinch").set({
						enable: !0
					}), s.on("panstart", (() => {
						if (!e.spine) return;
						const {
							x: t,
							y: n
						} = r();
						i.value = {
							x: t,
							y: n
						}
					})), s.on("panmove", (t => {
						if (!e.spine) return;
						const {
							scale: a
						} = r(), {
							x: s,
							y: o
						} = i.value, h = (n.value ? 1 : 10 / 3) / a;
						e.spine.move(s - t.deltaX * h, o + t.deltaY * h);
					})), s.on("panend", (() => {
						i.value = void 0
					})), t.value.addEventListener("wheel", a))
				})), p((() => {
					var e;
					null == s || s.destroy(), null == (e = t.value) || e.removeEventListener("wheel", a)
				})), {
					big: n
				}
			}(e, n), x = window.MediaRecorder && MediaRecorder.isTypeSupported("video/webm") && !T(), A = c(!1);
			return {
				canvas: e,
				big: w,
				isLoading: i,
				isLoop: M,
				speed: a,
				scale: sds,
				onChangeSpeed: function(t) {
					var e, i;
					const r = null == (i = null == (e = n.spine) ? void 0 : e.getCurrent()) ? void 0 : i.state;
					r && (r.timeScale = t)
				},
				color: r,
				onChangeColor: function(t) {
					if (!n.spine) return;
					const e = parseInt(t.slice(1), 16);
					n.spine.bg = [(e >>> 24) / 255, ((16711680 & e) >>> 16) / 255, ((65280 & e) >>> 8) / 255, (255 & e) / 255]
				},
				skinList: s.map((t => ({
					label: t,
					value: t
				}))),
				curSkin: o,
				modelList: h,
				curModel: l,
				aniList: m,
				curAni: v,
				onSelectSkin: function(e) {
					o.value = e, l.value = Object.keys(t.skin[e])[0], y()
				},
				onSelectModel: function(t) {
					l.value = t, y()
				},
				onSelectAni: function(t) {
					var e;
					const i = null == (e = n.spine) ? void 0 : e.getCurrent();
					i && (console.log("ani change", i), i.state.setAnimation(0, t, M.value), i.state.timeScale = a.value)
				},
				onSetScale: function(t) {
					var e, i;
					e = n.spine;
					e.scale(t)
					console.log(n.spine.getScale())
				},
				onChangeLoop: function(t) {
					var e, i;
					const r = null == (i = null == (e = n.spine) ? void 0 : e.getCurrent()) ? void 0 : i.state;
					r && r.setAnimation(0, r.tracks[0].animation.name, t)
				},
				reset: function() {
					var t;
					null == (t = n.spine) || t.transform(-500, -200, t.getScale())
				},
				animationsDetail: g,
				supportWebm: x,
				record: async function() {
					n.spine && !A.value && (A.value = !0, await n.spine.record(v.value, `${name}-${o.value}-${l.value}-${v.value}-x${a.value}`), A.value = !1)
				},
				recording: A,
				isMobile: T
			}
		}
	}),
	lt = {
		class: "w-[330px] h-[400px] pr-4 space-y-2 flex flex-col justify-around"
	},
	ut = {
		class: "flex"
	},
	ct = {
		class: "flex justify-around"
	},
	dt = {
		key: 0
	},
	pt = {
		key: 1
	},
	ft = o("b", null, "模型动画数据(暂不开放)", -1),
	mt = {
		ref: "canvas",
		width: "1000",
		height: "1000"
	},
	gt = {
		class: "bg-white p-4 rounded"
	},
	vt = r(i({
		components: {
			NConfigProvider: X,
			NButton: L,
			Spine: r(ht, [
				["render", function(t, e, n, i, r, h) {
					const l = A("NSelect"),
						c = A("FormItem"),
						d = A("NSwitch"),
						p = A("NColorPicker"),
						f = A("NSlider"),
						m = A("DownloadOutlined"),
						g = A("NIcon"),
						v = A("NButton"),
						M = A("NPopover"),
						y = A("CenterFocusStrongSharp"),
						w = A("FullscreenExitOutlined"),
						x = A("FullscreenOutlined"),
						b = A("InfoOutlined"),
						T = A("Detail"),
						V = A("NSkeleton"),
						L = A("Card");
					return a(), E(L, {
						style: P({
							width: t.isMobile() ? "" : "fit-content"
						}),
						class: "bg-white relative"
					}, {
						default: R((() => [o("div", {
							class: k([{
								"pr-5": !t.isMobile()
							}, "m-5 flex flex-wrap justify-around"])
						}, [o("div", lt, [
							/*S(c, {
								label: "时装组"
							}, {
								default: R((() => [S(l, {
									value: t.curSkin,
									"onUpdate:value": [e[0] || (e[0] = e => t.curSkin = e), t.onSelectSkin],
									options: t.skinList
								}, null, 8, ["value", "options", "onUpdate:value"])])),
								_: 1
							}), */
							S(c, {
								label: "飨灵选择"
							}, {
								default: R((() => [S(l, {
									value: t.curModel,
									"onUpdate:value": [e[1] || (e[1] = e => t.curModel = e), t.onSelectModel],
									options: t.modelList
								}, null, 8, ["value", "options", "onUpdate:value"])])),
								_: 1
							}), S(c, {
								label: "动画选择"
							}, {
								default: R((() => [S(l, {
									value: t.curAni,
									"onUpdate:value": [e[2] || (e[2] = e => t.curAni = e), t.onSelectAni],
									options: t.aniList
								}, null, 8, ["value", "options", "onUpdate:value"])])),
								_: 1
							}), o("div", ut, [S(c, {
								label: "循环播放",
								class: "mr-2"
							}, {
								default: R((() => [o("div", null, [S(d, {
									value: t.isLoop,
									"onUpdate:value": [e[3] || (e[3] = e => t.isLoop = e), t.onChangeLoop],
									size: "small"
								}, null, 8, ["value", "onUpdate:value"])])])),
								_: 1
							}), S(c, {
								label: "背景颜色",
								class: "flex-grow"
							}, {
								default: R((() => [S(p, {
									size: "small",
									"default-value": "#00000000",
									swatches: ["#00000000", "#FFFFFFFF", "#DBDBDBFF", "#2F2F2FFF", "#000000FF", "#FF0000FF", "#00FF00FF", "#0000FFFF"],
									"show-preview": !0,
									"onUpdate:value": t.onChangeColor
								}, null, 8, ["onUpdate:value"])])),
								_: 1
							})]), S(c, {
								"label-placement": "left",
								label: "播放速度"
							}, {
								default: R((() => [S(f, {
									value: t.speed,
									"onUpdate:value": [e[4] || (e[4] = e => t.speed = e), t.onChangeSpeed],
									min: .0,
									max: 3,
									step: .1,
									marks: {
										.0: "静止",
										.5: "x0.5",
										1: "x1.0",
										1.5: "x1.5",
										2: "x2.0",
										2.5: "x2.5",
										3: "x3.0"
									},
									"format-tooltip": t => `x${t.toFixed(1)}`
								}, null, 8, ["value", "min", "step", "marks", "format-tooltip", "onUpdate:value"])])),
								_: 1
							}), 


							S(c, {
								"label-placement": "left",
								label: "模型大小"
							}, {
								default: R((() => [S(f, {
									value: t.scale,
									"onUpdate:value": [e[100] || (e[100] = e => t.scale = e), t.onSetScale],
									min: 0.0,
									max: 1.5,
									step: .1,
									marks: {
										.0: "x0.0",
										.5: "x0.5",
										1: "x1.0",
										1.5: "x1.5"
									},
									"format-tooltip": t => `x${t.toFixed(1)}`
								}, null, 8, ["value", "min", "step", "marks", "format-tooltip", "onUpdate:value"])])),
								_: 1
							}),


							o("div", ct, [t.supportWebm ? (a(), E(M, {
								key: 0
							}, {
								trigger: R((() => [S(v, {
									circle: "",
									size: "large",
									onClick: t.record
								}, {
									icon: R((() => [S(g, {
										size: 28
									}, {
										default: R((() => [S(m)])),
										_: 1
									})])),
									_: 1
								}, 8, ["onClick"])])),
								default: R((() => [I(" 实验性WEBM导出 ")])),
								_: 1
							})) : C("", !0), t.supportWebm ? (a(), E(M, {
								key: 1
							}, {
								trigger: R((() => [S(v, {
									circle: "",
									size: "large",
									onClick: t.reset
								}, {
									icon: R((() => [S(g, {
										size: 28
									}, {
										default: R((() => [S(y)])),
										_: 1
									})])),
									_: 1
								}, 8, ["onClick"])])),
								default: R((() => [I(" 重置模型中心 ")])),
								_: 1
							})) : C("", !0), t.supportWebm ? (a(), E(M, {
								key: 2
							}, {
								trigger: R((() => [S(v, {
									circle: "",
									size: "large",
									onClick: e[5] || (e[5] = () => {
										t.big = !t.big
									})
								}, {
									icon: R((() => [S(g, {
										size: 28
									}, {
										default: R((() => [t.big ? (a(), E(w, {
											key: 0
										})) : (a(), E(x, {
											key: 1
										}))])),
										_: 1
									})])),
									_: 1
								})])),
								default: R((() => [t.big ? (a(), s("span", dt, "小屏查看")) : (a(), s("span", pt, "大屏查看"))])),
								_: 1
							})) : C("", !0), S(M, {
								trigger: "hover"
							}, {
								trigger: R((() => [S(v, {
									circle: "",
									size: "large"
								}, {
									icon: R((() => [S(g, {
										size: 28
									}, {
										default: R((() => [S(b)])),
										_: 1
									})])),
									_: 1
								})])),
								default: R((() => [ft, S(T, {
									detailes: t.animationsDetail
								}, null, 8, ["detailes"])])),
								_: 1
							})])
						]), o("div", {
							class: "overflow-hidden relative",
							style: P({
								width: t.big ? "1000px" : "300px",
								height: t.big ? "1000px" : "300px",
							})
						}, [t.isLoading ? (a(), E(V, {
							key: 0,
							class: "w-full h-full absolute top-0 right-0"
						})) : C("", !0), o("div", {
							style: P({
								// backgroundImage: "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #ccc 75%),linear-gradient(135deg, transparent 75%, #ccc 75%)",
								// backgroundSize: "24px 24px",
								backgroundImage: "url(assets/maps_bg_7_02.jpg)",
								backgroundSize: t.big ?  "1000px 1000px" : "300px 300px",
								backgroundPosition: "0 0, 12px 0, 12px -12px, 0px 12px"
							})
						}, [o("div", {
							style: P({
								width: 1e3,
								height: 1e3,
								transformOrigin: "top left",
								transform: t.big ? "" : "scale(0.3,0.3)",
								display: t.isLoading ? "none" : "block"
							})
						}, [o("canvas", mt, null, 512)], 4)], 4)], 4)], 2), t.recording ? (a(), s("div", {
							key: 0,
							class: "absolute top-0 bottom-0 right-0 left-0 h-full flex justify-center items-center",
							style: P({
								backgroundColor: "rgba(0,0,0,0.4)"
							})
						}, [o("div", gt, " 正在导出 " + u(t.name) + "-" + u(t.curSkin) + "-" + u(t.curModel) + "-" + u(t.curAni) + "-x" + u(t.speed) + ".webm ", 1)], 4)) : C("", !0)])),
						_: 1
					}, 8, ["style"])
				}]
			])
		},
		props: {
			prefix: String,
			name: String,
			skin: Object
		},
		setup: () => ({
			loaded: c(!1),
			zhCN: W
		})
	}), [
		["render", function(t, e, n, i, r, s) {
			const o = A("Spine"),
				h = A("NButton"),
				l = A("NConfigProvider");
			return a(), E(l, {
				"preflight-style-disabled": "",
				breakpoints: {
					s: 640,
					m: 768,
					lg: 1024,
					xl: 1280,
					xxl: 1536
				},
				"theme-overrides": {
					common: {
						primaryColor: "#6a6aff"
					}
				},
				locale: t.zhCN
			}, {
				default: R((() => [t.loaded ? (a(), E(o, {
					key: 0,
					prefix: t.prefix,
					name: t.name,
					skin: t.skin
				}, null, 8, ["prefix", "name", "skin"])) : (a(), E(h, {
					key: 1,
					type: "info",
					onClick: e[0] || (e[0] = () => {
						t.loaded = !0
					})
				}, {
					default: R((() => [I(" 点此载入Q版飨灵 ")])),
					_: 1
				}))])),
				_: 1
			}, 8, ["locale"])
		}]
	]);
window.SpineApi = tt, window.dispatchEvent(new Event("spine_api_ready"));
const Mt = JSON.parse(document.getElementById("SPINEDATA").innerHTML);
fetch('https://gcore.jsdelivr.net/gh/WhiteZerooooo/WhiteZerooooo.github.io@1.0.8/WIKI/card.json')
	.then(response => response.json())
	.then(data => {
		for (const key in Mt.skin.默认) {
		  const value = Mt.skin.默认[key];
		  if (value.file) {
		  	Object.values(data).forEach(item => {
	            if (item.name === value.file) {
	            	Mt.skin.默认[key].file = item.id
	            }
	        });
		  }
		  console.log(`模型名称：${key}，模型骨骼：`, value.file);
		  const yt = document.getElementById("spine-root");
			yt && Mt ? V(vt, {
				...Mt
			}).mount(yt) : console.error("SPINEDATA or ele not found", yt);
		}
	});