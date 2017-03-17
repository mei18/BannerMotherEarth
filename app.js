
TweenMax.from(".tree", 1, {xPercent: +1, ease:Power1.easeOut,repeat:18,delay:1,yoyo:true});
TweenMax.from(".tree2", 1, {xPercent: -7, ease:Power1.easeOut,repeat:18,delay:1,yoyo:true});
TweenMax.from(".cloud", 10, {xPercent: +150, ease:Power1.easeOut,delay:1});
TweenMax.from(".cloud2", 10, {xPercent: -100, ease:Power1.easeOut,delay:1});

var tm = new TimelineMax();
tm.from('.sun', 8, {yPercent: +150, ease:Power1.easeOut});
tm.from("#text3",2, {opacity:0, ease:Power2.easeIn});
tm.from("#text1", 4, {yPercent: -150,opacity:0, ease:Power1.easeOut, delay:1});

var tlm = new TimelineMax();
tlm.from('.sunStroke', 7.9, {yPercent: +150, ease:Power1.easeOut});
tlm.from("#text4",2, {opacity:0, ease:Power2.easeIn});
tlm.from("#text2", 4, {yPercent: +150,opacity:0, ease:Power1.easeOut, delay:1});
