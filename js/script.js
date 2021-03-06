parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        x9rW: [
            function (require, module, exports) {
                !(function (e) {
                    function t(t) {
                        (this.containerElem = t),
                            (this.videoElem = this.containerElem.querySelector('[data-player="video"]')),
                            (this.playPauseIconElem = this.containerElem.querySelector('[data-player="play-pause-icon"]')),
                            (this.controlPlayPauseElem = this.containerElem.querySelector('[data-player="control-play"]')),
                            this.videoElem.addEventListener("click", this.toggle.bind(this)),
                            this.controlPlayPauseElem.addEventListener("click", this.toggle.bind(this)),
                            e.addEventListener("keydown", this.keydown.bind(this));
                    }
                    (t.prototype = {
                        constructor: t,
                        play: function () {
                            this.videoElem.play(), this.playPauseIconElem.classList.add("play-mode"), (this.playPauseIconElem.style.display = ""), e.setTimeout(this.hidePlayPauseIcon.bind(this), 500);
                        },
                        pause: function () {
                            this.videoElem.pause(), this.playPauseIconElem.classList.add("pause-mode"), (this.playPauseIconElem.style.display = ""), e.setTimeout(this.hidePlayPauseIcon.bind(this), 500);
                        },
                        toggle: function () {
                            this.videoElem.paused ? this.play() : this.pause(), this.containerElem.classList.toggle("is-playing");
                        },
                        hidePlayPauseIcon: function () {
                            this.playPauseIconElem.classList.remove("play-mode"), this.playPauseIconElem.classList.remove("pause-mode"), (this.playPauseIconElem.style.display = "none");
                        },
                        keydown: function (e) {
                            switch (e.keyCode) {
                                case 32:
                                case 75:
                                    this.toggle(), e.target === document.body && e.preventDefault();
                            }
                        },
                    }),
                        (e.VideoPlayer = t),
                        [].forEach.call(document.querySelectorAll('[data-player="container"]'), function (e) {
                            new t(e);
                        });
                })(window);
            },
            {},
        ],
    },
    {},
    ["x9rW"],
    null
);
//# sourceMappingURL=/youtube-video-player/video-player.b8d3ee38.js.map
