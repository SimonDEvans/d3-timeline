!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3")):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.timeline=e(require("d3")):t.timeline=e(t.d3)}(this,function(t){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(9),t.exports=n(13)},function(e,n){e.exports=t},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var i=n(1),r=a(i),o={start:new Date(0),end:new Date,contextStart:null,contextEnd:null,minScale:0,maxScale:1/0,width:null,padding:{top:30,left:40,bottom:40,right:40},lineHeight:40,labelWidth:140,sliderWidth:30,contextHeight:50,locale:null,axisFormat:null,tickFormat:[[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%b %d",function(t){return t.getMonth()&&t.getDate()}],["%b",function(t){return t.getMonth()}],["%Y",function(){return!0}]],eventHover:null,eventZoom:null,eventClick:null,eventLineColor:function(t,e){switch(e%5){case 0:return"#00659c";case 1:return"#0088ce";case 2:return"#3f9c35";case 3:return"#ec7a08";case 4:return"#cc0000"}},eventColor:null,eventShape:function(t){return t.hasOwnProperty("events")?"":""},eventPopover:function(t){var e="";if(t.hasOwnProperty("events"))e="Group of "+t.events.length+" events";else{for(var n in t.details)e=e+n.charAt(0).toUpperCase()+n.slice(1)+": "+t.details[n]+"<br>";e=e+"Date: "+t.date}return e},marker:!0,context:!0,slider:!0,eventGrouping:6e4};o.dateFormat=o.locale?o.locale.timeFormat("%a %x %I:%M %p"):r["default"].time.format("%a %x %I:%M %p"),t.exports=o},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),r=a(i);e["default"]=function(t,e,n,a){return function(i){var o=function(e,i){var o=t.selectAll(".timeline-pf-x-axis."+e).data([{}]);o.enter().append("g").classed("timeline-pf-x-axis",!0).classed(e,!0).call(r["default"](i,n)).attr("transform","translate(0,"+("focus"===e?a.height:a.height+a.ctxHeight+40)+")"),o.call(r["default"](i,n,a.width)),o.exit().remove()};o("focus",e.x),n.context&&o("context",e.ctx)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e,n){var a={};for(var i in t)for(var r in t[i].data){var o=Math.floor(t[i].data[r].date/e)*e;a[o]=a[o]+1||1}for(var l in a){var s=new Date;s.setTime(+l),n.push({date:s,count:a[l]})}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=a(r);e["default"]=function(t,e,n,a,r){var l=t.append("g").classed("timeline-pf-context",!0).attr("width",n.width).attr("height",n.ctxHeight).attr("clip-path","url(#timeline-pf-context-brush-clipper)").attr("transform","translate("+(a.padding.left+a.labelWidth)+","+(a.padding.top+n.height+40)+")"),s=[],d=36e5,u=Math.ceil(d/(e.ctx.domain()[1]-e.ctx.domain()[0])*n.width);i(r,d,s),s.sort(function(t,e){return t.date<e.date?-1:t.date>e.date?1:0}),e.cty.domain([0,o["default"].max(s,function(t){return t.count})]),l.selectAll(".timeline-pf-bar").data(s).enter().append("rect").attr("class","timeline-pf-bar").attr("x",function(t){return e.ctx(t.date)}).attr("y",function(t){return e.cty(t.count)}).attr("width",u).attr("height",function(t){return n.ctxHeight-e.cty(t.count)}),l.append("g").attr("class","timeline-pf-brush")}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){return function(a){var i=t.selectAll(".timeline-pf-drop-line").data(a);i.enter().append("g").classed("timeline-pf-drop-line",!0).attr("transform",function(t,a){return"translate(0, "+(e.y(a)+n.lineHeight/2)+")"}).attr("fill",n.eventLineColor),i.each(function(t){var a=d3.select(this).selectAll(".timeline-pf-drop").data(t.data);a.attr("transform",function(t){return"translate("+e.x(t.date)+")"});var i=a.enter().append("text").classed("timeline-pf-drop",!0).classed("timeline-pf-event-group",function(t){return t.hasOwnProperty("events")?!0:!1}).attr("transform",function(t){return"translate("+e.x(t.date)+")"}).attr("fill",n.eventColor).attr("text-anchor","middle").attr("data-toggle","popover").attr("data-html","true").attr("data-content",n.eventPopover).attr("dominant-baseline","central").text(n.eventShape);n.eventClick&&i.on("click",n.eventClick),n.eventHover&&i.on("mouseover",n.eventHover),a.exit().on("click",null).on("mouseover",null),a.exit().remove()}),i.exit().remove()}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=(a(i),n(3)),o=a(r),l=n(5),s=a(l),d=n(7),u=a(d),c=n(8),f=a(c);e["default"]=function(t,e,n,a){var i=t.append("defs");i.append("clipPath").attr("id","timeline-pf-drops-container-clipper").append("rect").attr("id","timeline-pf-drops-container-rect").attr("x",0).attr("y",0).attr("width",e.width).attr("height",e.height),a.context&&i.append("clipPath").attr("id","timeline-pf-context-brush-clipper").append("polygon").attr("points","0,0 "+e.width+",0 "+(e.width+a.sliderWidth)+","+e.ctxHeight/2+" "+e.width+","+e.ctxHeight+" 0,"+e.ctxHeight+" "+-a.sliderWidth+","+e.ctxHeight/2);var r=i.append("pattern").attr("class","timeline-pf-grid-stripes").attr("id","timeline-pf-grid-stripes").attr("width",e.width).attr("height",2*a.lineHeight).attr("patternUnits","userSpaceOnUse");r.append("rect").attr("width",e.width).attr("height",a.lineHeight),r.append("line").attr("x1",0).attr("x2",e.width).attr("y1",a.lineHeight).attr("y2",a.lineHeight),r.append("line").attr("x1",0).attr("x2",e.width).attr("y1","1px").attr("y2","1px");var l=t.append("g").classed("timeline-pf-grid",!0).attr("fill","url(#timeline-pf-grid-stripes)").attr("transform","translate("+(a.padding.left+a.labelWidth)+", "+a.padding.top+")"),d=t.append("g").classed("timeline-pf-labels",!0).attr("transform","translate("+a.padding.left+", "+a.padding.top+")"),c=t.append("g").classed("timeline-pf-axes",!0).attr("transform","translate("+(a.padding.left+a.labelWidth)+",  "+a.padding.top+")"),p=t.append("g").classed("timeline-pf-drops-container",!0).attr("clip-path","url(#timeline-pf-drops-container-clipper)").attr("transform","translate("+(a.padding.left+a.labelWidth)+",  "+a.padding.top+")");if(a.marker){var h=t.append("g").classed("timeline-pf-timestamp",!0).attr("height",30).attr("transform","translate("+(a.padding.left+a.labelWidth)+", "+a.padding.top+")");f["default"](l,h,n,e,a.dateFormat)}var m=o["default"](c,n,a,e),g=u["default"](d,n,a),v=s["default"](p,n,a);return function(t){v(t),g(t),m(t)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){return function(a){var i=t.selectAll(".timeline-pf-label").data(a),r=function(t){for(var e=0,n=0;n<t.length;n++)t[n].hasOwnProperty("events")?e+=t[n].events.length:e++;return e},o=function(t){var e=r(t.data);return void 0===t.name||""===t.name?e+" Events":t.name+(e>=0?" ("+e+")":"")};i.text(o),i.enter().append("text").classed("timeline-pf-label",!0).attr("transform",function(t,a){return"translate("+(n.labelWidth-20)+" "+(e.y(a)+n.lineHeight/2)+")"}).attr("dominant-baseline","central").attr("text-anchor","end").text(o),i.exit().remove()}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=a(i);e["default"]=function(t,e,n,a,i){function o(){var e=r["default"].mouse(t[0][0])[0];l.attr("transform","translate("+e+")"),d.attr("transform","translate("+(e-75)+", -25)"),u.attr("transform","translate("+e+", -9)").text(i(n.x.invert(e)))}t.append("rect").attr("width",a.width).attr("height",a.height).on("mouseover",function(){l.style("display",null),u.style("display",null),d.style("display",null)}).on("mouseout",function(){l.style("display","none"),u.style("display","none"),d.style("display","none")}).on("mousemove",o);var l=t.append("line").classed("timeline-pf-marker",!0).attr("y1",0).attr("y2",a.height),s=n.x.domain(),d=e.append("rect").attr("height","24").attr("width","150").style("display","none"),u=e.append("text").text(i(s[1])).attr("transform","translate("+n.x.range()[1]+")").attr("text-anchor","middle")}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(){function t(t){t.each(function(e){var l=e;e=o(e,n.eventGrouping),n.lineHeight=e.length<=3?80:40,n.contextStart=n.contextStart||d["default"].min(r(e)),n.contextEnd=n.contextEnd||n.end,d["default"].select(this).select(".timeline-pf-chart").remove(),d["default"].select(this).selectAll(".timeline-pf-zoom").remove();var u=40,c=n.width||t.node().clientWidth,f=e.length*n.lineHeight,p={width:c-n.padding.right-n.padding.left-n.labelWidth-(n.slider?n.sliderWidth:0),height:f,ctxHeight:n.contextHeight,outer_height:f+n.padding.top+n.padding.bottom+(n.context?n.contextHeight+u:0)},h={x:s(p.width,[n.start,n.end]),y:i(e),ctx:s(p.width,[n.contextStart,n.contextEnd]),cty:d["default"].scale.linear().range([p.ctxHeight,0])},g=d["default"].select(this).append("svg").classed("timeline-pf-chart",!0).attr({width:c,height:p.outer_height}),x=m["default"](g,p,h,n).bind(t);x(e),n.context&&v["default"](g,h,p,n,l),a.updateZoom(d["default"].select(this),p,h,n,e,x)})}var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l({},p["default"],e),a=new b["default"],i=function(t){return d["default"].scale.ordinal().domain(t.map(function(t){return t.name})).range(t.map(function(t,e){return e*n.lineHeight}))},s=function(t,e){return d["default"].time.scale().range([0,t]).domain(e)};return c["default"](t,n),t.Zoom=a,t}function r(t){for(var e=[],n=0;n<t.length;n++)for(var a=0;a<t[n].data.length;a++)e.push(t[n].data[a].date);return e}function o(t,e){for(var n=void 0,a={},i=[],r=0;r<t.length;r++){i[r]={},i[r].name=t[r].name,i[r].data=[];for(var o=0;o<t[r].data.length;o++)n=Math.round(t[r].data[o].date/e)*e,void 0===a[n]&&(a[n]=[]),a[n].push(t[r].data[o]);for(var l in a)if(1===a[l].length)i[r].data.push(a[l][0]);else{var s=new Date;s.setTime(+l),i[r].data.push({date:s,events:a[l]})}a={}}return i}var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s=n(1),d=a(s),u=n(12),c=a(u),f=n(2),p=a(f),h=n(6),m=a(h),g=n(4),v=a(g),x=n(11),b=a(x);d["default"].chart=d["default"].chart||{},d["default"].chart.timeline=i,t.exports=i},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){var a=e.tickFormat.map(function(t){return t.slice(0)}),i=e.locale?e.locale.timeFormat.multi(a):r["default"].time.format.multi(a),o=Math.round(n/70),l=r["default"].svg.axis().scale(t).orient("bottom").ticks(o).tickFormat(i);return"function"==typeof e.axisFormat&&e.axisFormat(l),l};var i=n(1),r=a(i)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=n(1),l=a(o),s=function(){function t(){i(this,t)}return r(t,[{key:"updateZoom",value:function(t,e,n,a,i,r){var o=this;if(this.ONE_MINUTE=6e4,this.ONE_HOUR=60*this.ONE_MINUTE,this.ONE_DAY=24*this.ONE_HOUR,this.ONE_WEEK=7*this.ONE_DAY,this.ONE_MONTH=30*this.ONE_DAY,this.grid=l["default"].select(".timeline-pf-grid"),this.dimensions=e,this.scales=n,this.configuration=a,this.data=i,this.callback=r,this.sliderScale=l["default"].scale.log().domain([a.minScale,a.maxScale]).range([a.minScale,a.maxScale]).base(2),this.zoom=l["default"].behavior.zoom().size([e.width,e.height]).scaleExtent([a.minScale,a.maxScale]).x(n.x),this.brush=null,a.slider){var s=t.append("button").attr("type","button").attr("class","btn btn-default timeline-pf-zoom timeline-pf-zoom-in").attr("id","timeline-pf-zoom-in").style("top",a.padding.top+"px").on("click",function(){o.zoomClick()});s.style("left",a.padding.left+a.labelWidth+e.width+(a.sliderWidth-s.node().offsetWidth)+"px").append("i").attr("class","fa fa-plus").attr("id","timeline-pf-zoom-in-icon");var d=t.append("button").attr("type","button").attr("class","btn btn-default timeline-pf-zoom").attr("id","timeline-pf-zoom-out").style("top",a.padding.top+e.height-26+"px").on("click",function(){o.zoomClick()});d.style("left",a.padding.left+a.labelWidth+e.width+(a.sliderWidth-d.node().offsetWidth)+"px").append("i").attr("class","fa fa-minus").attr("id","timeline-pf-zoom-out-icon");var u=t.append("input").attr("type","range").attr("class","timeline-pf-zoom timeline-pf-slider").attr("id","timeline-pf-slider").style("width",e.height-2*s.node().offsetHeight+"px").attr("value",this.sliderScale(this.zoom.scale())).attr("min",a.minScale).attr("max",a.maxScale).attr("step",.1).on("input",function(){o.zoomClick()}).on("change",function(){o.zoomClick()});u.style("top",a.padding.top+(e.height-2*s.node().offsetHeight)/2+s.node().offsetHeight-u.node().offsetHeight/2+"px").style("left",a.padding.left+a.labelWidth+e.width+a.sliderWidth-(s.node().offsetWidth-u.node().offsetHeight)/2-u.node().offsetWidth/2+"px")}return a.context&&(this.brush=l["default"].svg.brush().x(n.ctx).extent(n.x.domain()).on("brush",function(){o.brushed()}),t.select(".timeline-pf-brush").call(this.brush).selectAll("rect").attr("height",e.ctxHeight)),a.eventZoom&&this.zoom.on("zoomend",a.eventZoom),this.zoom.on("zoom",function(){requestAnimationFrame(function(){return r(i)}),a.slider&&t.select("#timeline-pf-slider").property("value",o.sliderScale(o.zoom.scale())),a.context&&(o.brush.extent(o.scales.x.domain()),t.select(".timeline-pf-brush").call(o.brush))}),this.grid.call(this.zoom).on("dblclick.zoom",null)}},{key:"brushed",value:function(){if(this.brush.empty()!==!0){var t=this.brush.extent();this.zoomFilter(t[0],t[1],0)}}},{key:"zoomClick",value:function(){var t=.5,e=1,n=0,a=this.dimensions.width/2,i=this.zoom.scaleExtent(),r=void 0,o=void 0,s={x:this.zoom.translate()[0],k:this.zoom.scale()};switch(l["default"].event.target.id){case"timeline-pf-zoom-in-icon":case"timeline-pf-zoom-in":e=this.zoom.scale()*(1+t),n=100;break;case"timeline-pf-zoom-out-icon":case"timeline-pf-zoom-out":e=this.zoom.scale()*(1+-1*t),n=100;break;case"timeline-pf-slider":e=this.sliderScale.invert(l["default"].event.target.value);break;default:e=this.zoom.scale()}e<i[0]?e=i[0]:e>i[1]&&(e=i[1]),r=(a-s.x)/s.k,s.k=e,o=r*s.k+s.x,s.x+=a-o,this.interpolateZoom([s.x,0],s.k,n)}},{key:"interpolateZoom",value:function(t,e,n){var a=this;return l["default"].transition().duration(n).tween("zoom",function(){if(a.zoom){var n=l["default"].interpolate(a.zoom.translate(),t),i=l["default"].interpolate(a.zoom.scale(),e);return function(t){a.zoom.scale(i(t)).translate(n(t)),a.zoom.event(a.grid)}}})}},{key:"getRange",value:function(t){return t[1].getTime()-t[0].getTime()}},{key:"getScale",value:function(t,e){return t/e}},{key:"zoomFilter",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=e-t,i=this.dimensions.width,r=this.zoom.scaleExtent(),o=this.zoom.translate()[0],l=this.zoom.scale(),s=this.zoom.scale(),d=this.getRange(this.scales.x.domain()),u=void 0;s*=this.getScale(this.getRange(this.scales.x.domain()),a),s<r[0]?s=r[0]:s>r[1]&&(s=r[1]),u=(this.scales.x.domain()[0]-t)*(i/d),o+=u,o*=s/l,this.interpolateZoom([o,0],s,n)}}]),t}();e["default"]=s},function(t,e,n){"use strict";function a(t,e){function n(n){return function(a){return arguments.length?(e[n]=a,t):e[n]}}for(var a in e)t[a]=n(a)}t.exports=a},function(t,e){}])});

$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        'container': '#pf-timeline',
        'placement': 'bottom'
    });
});

$(document).on('click', '.drop', function() {
    $(this).popover('show');
});

$(document).on('click', '.grid', function() {
    $('[data-toggle="popover"]').popover('hide');
});

var ONE_HOUR = 60 * 60 * 1000,
    ONE_DAY = 24 * ONE_HOUR,
    ONE_WEEK = 7 * ONE_DAY,
    ONE_MONTH = 30 * ONE_DAY,
    SIX_MONTHS = 6 * ONE_MONTH,
    ONE_YEAR = 12 * ONE_MONTH,
    FIVE_YEARS = 5 * ONE_YEAR,
    TEN_YEARS = 10 * ONE_YEAR;
    TWENTY_YEARS = 20 * ONE_YEAR;

var data = [],
    start = new Date('1985-02-01T00:00:00'),
    today = new Date('2000-05-02T00:00:00');

for (var x in json) { //json lives in external file for testing
    data[x] = {};
    data[x].name = json[x].name;
    data[x].data = [];
    for (var y in json[x].data) {
        data[x].data.push({});
        data[x].data[y].date = new Date(json[x].data[y].date);
        data[x].data[y].details = json[x].data[y].details;
    }
    $('#timeline-selectpicker').append("<option>" + data[x].name + "</option>");
    data[x].display = true;
}

$('#timeline-selectpicker').selectpicker('selectAll');

var timeline = d3.chart.timeline()
    .end(today)
    .start(start)
    .minScale(TWENTY_YEARS / TEN_YEARS)
    .maxScale(TWENTY_YEARS / ONE_WEEK)
    .eventClick(function(el) {
        var table = '<table class="table table-striped table-bordered">';
        if (el.hasOwnProperty("events")) {
            table = table + '<thead>Group of ' + el.events.length + ' events starting on ' + el.date + '</thead><tbody>';
            table = table + '<tr><th>Date</th><th>Event</th><th>Object</th></tr>';
            for (var i = 0; i < el.events.length; i++) {
                table = table + '<tr><td>' + el.events[i].date + ' </td> ';
                for (var j in el.events[i].details) {
                    table = table + '<td> ' + el.events[i].details[j] + ' </td> ';
                }
                table = table + '</tr>';
            }
            table = table + '</tbody>';
        } else {
            table = table + 'Date: ' + el.date + '<br>';
            for (i in el.details) {
                table = table + i.charAt(0).toUpperCase() + i.slice(1) + ': ' + el.details[i] + '<br>';
            }
        }
        $('#legend').html(table);
    });
if (countNames(data) <= 0) {
    timeline.labelWidth(60);
}

var element = d3.select('#pf-timeline').append('div').datum(data.filter(function(eventGroup) {
    return eventGroup.display === true;
}));

timeline(element);

$('#timeline-selectpicker').on('changed.bs.select', function(event, clickedIndex, newValue, oldValue) {
    data[clickedIndex].display = !data[clickedIndex].display;
    element.datum(data.filter(function(eventGroup) {
        return eventGroup.display === true;
    }));
    timeline(element);
    $('[data-toggle="popover"]').popover({
        'container': '#pf-timeline',
        'placement': 'top'
    });
});

$(window).on('resize', function() {
    timeline(element);
    $('[data-toggle="popover"]').popover({
        'container': '#pf-timeline',
        'placement': 'top'
    });
});

$('#datepicker').datepicker({
    autoclose: true,
    todayBtn: "linked",
    todayHighlight: true
});

$('#datepicker').datepicker('setDate', today);

$('#datepicker').on('changeDate', zoomFilter);

$(document.body).on('click', '.dropdown-menu li', function(event) {
    var $target = $(event.currentTarget);
    $target.closest('.dropdown')
        .find('[data-bind="label"]').text($target.text())
        .end()
        .children('.dropdown-toggle').dropdown('toggle');

    zoomFilter();

    return false;
});

function countNames(data) {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].name !== undefined && data[i].name !== '') {
            count++;
        }
    }
    return count;
}

function zoomFilter() {
    var range = $('#range-dropdown').find('[data-bind="label"]').text(),
        position = $('#position-dropdown').find('[data-bind="label"]').text(),
        date = $('#datepicker').datepicker('getDate'),
        startDate,
        endDate;

    switch (range) {
        case '1 hour':
            range = ONE_HOUR;
            break;

        case '1 day':
            range = ONE_DAY;
            break;

        case '1 week':
            range = ONE_WEEK;
            break;

        case '1 month':
            range = ONE_MONTH;
            break;

        case '6 months':
            range = SIX_MONTHS;
            break;

        case '1 year':
            range = ONE_YEAR;
            break;

        case '5 years':
            range = FIVE_YEARS;
            break;

        case '10 years':
            range = TEN_YEARS;
            break;

        case '20 years':
            range = TWENTY_YEARS;
            break;
    }
    switch (position) {
        case 'centered on':
            startDate = new Date(date.getTime() - range / 2);
            endDate = new Date(date.getTime() + range / 2);
            break;

        case 'starting':
            startDate = date;
            endDate = new Date(date.getTime() + range);
            break;

        case 'ending':
            startDate = new Date(date.getTime() - range);
            endDate = date;
            break;
    }
    timeline.Zoom.zoomFilter(startDate, endDate);
}

$('#reset-button').click(function() {
    timeline(element);
    $('[data-toggle="popover"]').popover({
        'container': '#pf-timeline',
        'placement': 'top'
    });
});
