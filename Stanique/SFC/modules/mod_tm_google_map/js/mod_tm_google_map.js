! function(e) {
    var k = {
            cntClass: "map",
            mapClass: "map_model",
            locationsClass: "map_locations",
            marker: {
                basic: "images/gmap_marker.png",
                active: "images/gmap_marker_active.png"
            },
            styles: [],
            onInit: !1
        },
        l = {
            map: {
                x: -73.9924068,
                y: 40.646197,
                zoom: 14
            },
            locations: []
        },
        m = function(f, b) {
            var a = f.parent().find("." + b.locationsClass).find("li"),
                d = [];
            return 0 < a.length && a.each(function(a) {
                var c = e(this);
                c.data("x") && c.data("y") && (d[a] = {
                    x: c.data("x"),
                    y: c.data("y"),
                    basic: c.data("basic") ? c.data("basic") : b.marker.basic,
                    active: c.data("active") ? c.data("active") : b.marker.active
                }, e.trim(c.html()) ? d[a].content = '<div class="iw-content">' + c.html() + "</div>" : d[a].content = !1)
            }), d
        };
    e.fn.googleMap = function(f) {
        f = e.extend(!0, {}, k, f);
        e(this).each(function() {
            var b = e(this),
                a = e.extend(!0, {}, l, {
                    map: {
                        x: b.data("x"),
                        y: b.data("y"),
                        zoom: b.data("zoom")
                    },
                    marker: {
                        basic: b.data("marker"),
                        active: b.data("marker-active")
                    },
                    locations: m(b, f)
                }),
                d = new google.maps.Map(this, {
                    center: new google.maps.LatLng(parseFloat(a.map.y), parseFloat(a.map.x)),
                    styles: f.styles,
                    zoom: a.map.zoom,
                    scrollwheel: !1
                });
            f.onInit && f.onInit.call(this, d);
            var h = new google.maps.InfoWindow,
                c = [],
                g;
            for (g in a.locations) c[g] = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(a.locations[g].y), parseFloat(a.locations[g].x)),
                map: d,
                icon: a.locations[g].basic,
                index: g
            }), a.locations[g].content && (google.maps.event.addListener(c[g], "click", function() {
                for (var b in c) c[b].setIcon(a.locations[b].basic);
                h.setContent(a.locations[this.index].content);
                h.open(d, this);
                e(".gm-style-iw").parent().parent().addClass("gm-wrapper");
                this.setIcon(a.locations[this.index].active)
            }), google.maps.event.addListener(h, "closeclick", function() {
                for (var b in c) c[b].setIcon(a.locations[b].basic)
            }));
            google.maps.event.addDomListener(window, "resize", function() {
                d.setCenter(new google.maps.LatLng(parseFloat(a.map.y), parseFloat(a.map.x)))
            })
        })
    }
}(jQuery);