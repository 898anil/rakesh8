// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

Number.prototype.transform = function(decimals) {
  var resultedNumber = parseFloat(this.toFixed(decimals));
  if (this <= resultedNumber) {
    return resultedNumber
  } else {
    console.log(resultedNumber);
    return resultedNumber + 1 / Math.pow(10, decimals)
  }
}

function ok() {
  document.getElementById("div2").style.display = 'block';
  var rent = document.getElementById("Rent");
  var yr1 = document.getElementById("Yr1");

  var cbw = document.getElementById("Cbw");
  var yr2 = document.getElementById("Yr2");

  var fwr = document.getElementById("Fwr");
  var yr4 = document.getElementById("Yr4");


  var cess = document.getElementById("Cess");
  var yr3 = document.getElementById("Yr3");

  Number.prototype.transform = function(decimals) {
    var resultedNumber = parseFloat(this.toFixed(decimals));
    if (this <= resultedNumber) {
      return resultedNumber
    } else {
      console.log(resultedNumber);
      return resultedNumber + 1 / Math.pow(10, decimals)
    }
  }
  if (yr1.value > 0) {
    document.getElementById("thisr").innerHTML = parseFloat(rent.value).toFixed(2);
    document.getElementById("thisr1").innerHTML = parseFloat(rent.value);
    document.getElementById("yr11").innerHTML = parseFloat(Yr1.value);
  } else { document.getElementById("thisr").innerHTML = 0; }




  if (yr1.value > 1) { document.getElementById("oner").innerHTML = parseFloat(rent.value).toFixed(2); } else { document.getElementById("oner").innerHTML = 0; }

  if (yr1.value > 2) { document.getElementById("twor").innerHTML = parseFloat(rent.value).toFixed(2); } else { document.getElementById("twor").innerHTML = 0; }

  if (yr1.value > 3) { document.getElementById("threer").innerHTML = parseFloat(rent.value).toFixed(2); } else { document.getElementById("threer").innerHTML = 0; }


  if (yr1.value > 4) { document.getElementById("fourr").innerHTML = parseFloat(rent.value * (yr1.value - 4)).toFixed(2); } else { document.getElementById("fourr").innerHTML = 0; }















  if (yr2.value > 0) {
    document.getElementById("thisc").innerHTML = parseFloat(cbw.value).toFixed(2);

    document.getElementById("thisc1").innerHTML = parseFloat(cbw.value);

    document.getElementById("yr21").innerHTML = parseFloat(Yr2.value);

  } else { document.getElementById("thisc").innerHTML = 0; }


  if (yr2.value > 1) { document.getElementById("onec").innerHTML = parseFloat(cbw.value).toFixed(2); } else { document.getElementById("onec").innerHTML = 0; }

  if (yr2.value > 2) { document.getElementById("twoc").innerHTML = parseFloat(cbw.value).toFixed(2); } else { document.getElementById("twoc").innerHTML = 0; }

  if (yr2.value > 3) { document.getElementById("threec").innerHTML = parseFloat(cbw.value).toFixed(2); } else { document.getElementById("threec").innerHTML = 0; }


  if (yr2.value > 4) { document.getElementById("fourc").innerHTML = parseFloat(cbw.value * (yr2.value - 4)).toFixed(2); } else { document.getElementById("fourc").innerHTML = 0; }






  if (yr4.value > 0) {
    document.getElementById("thisf").innerHTML = parseFloat(fwr.value).toFixed(2);
    document.getElementById("thisf1").innerHTML = parseFloat(fwr.value);
    document.getElementById("yr41").innerHTML = parseFloat(Yr4.value);
  } else { document.getElementById("thisf").innerHTML = 0; }


  if (yr4.value > 1) { document.getElementById("onef").innerHTML = parseFloat(fwr.value).toFixed(2); } else { document.getElementById("onef").innerHTML = 0; }

  if (yr4.value > 2) { document.getElementById("twof").innerHTML = parseFloat(fwr.value).toFixed(2); } else { document.getElementById("twof").innerHTML = 0; }

  if (yr4.value > 3) { document.getElementById("threef").innerHTML = parseFloat(fwr.value).toFixed(2); } else { document.getElementById("threef").innerHTML = 0; }


  if (yr4.value > 4) { document.getElementById("fourf").innerHTML = parseFloat(fwr.value * (yr4.value - 4)).toFixed(2); } else { document.getElementById("fourf").innerHTML = 0; }

  if (yr3.value > 0) {
    document.getElementById("thiss").innerHTML = parseFloat(cess.value).toFixed(2);
    document.getElementById("thiss1").innerHTML = parseFloat(cess.value);
    document.getElementById("yr31").innerHTML = parseFloat(Yr3.value);
  } else { document.getElementById("thiss").innerHTML = 0; }


  if (yr3.value > 1) { document.getElementById("ones").innerHTML = parseFloat(cess.value).toFixed(2); } else { document.getElementById("ones").innerHTML = 0; }

  if (yr3.value > 2) { document.getElementById("twos").innerHTML = parseFloat(cess.value).toFixed(2); } else { document.getElementById("twos").innerHTML = 0; }

  if (yr3.value > 3) { document.getElementById("threes").innerHTML = parseFloat(cess.value).toFixed(2); } else { document.getElementById("threes").innerHTML = 0; }


  if (yr3.value > 4) { document.getElementById("fours").innerHTML = parseFloat(cess.value * (yr3.value - 4)).toFixed(2); } else { document.getElementById("fours").innerHTML = 0; }
















  if (document.getElementById("oner").innerHTML > 0) { document.getElementById("oneri").innerHTML = parseFloat(rent.value * 12 / 100).transform(1).toFixed(2); } else { document.getElementById("oneri").innerHTML = 0; }

  var x = document.getElementById("oneri").innerHTML;

  if (document.getElementById("twor").innerHTML > 0) {
    document.getElementById("twori").innerHTML = parseFloat(2 * x).transform(1).toFixed(2);
  } else { document.getElementById("twori").innerHTML = 0; }

  var y = document.getElementById("twori").innerHTML;

  if (document.getElementById("threer").innerHTML > 0) { document.getElementById("threeri").innerHTML = parseFloat(3 * x - 0.01).transform(1).toFixed(2); } else { document.getElementById("threeri").innerHTML = 0; }

  var z = document.getElementById("threeri").innerHTML;

  if (document.getElementById("fourr").innerHTML > 0) { document.getElementById("fourri").innerHTML = parseFloat((((yr1.value * (yr1.value - 1) / 2) * parseFloat(x) - 0.01)) - (parseFloat(x) + parseFloat(y) + parseFloat(z))).transform(1).toFixed(2); } else { document.getElementById("fourri").innerHTML = 0; }




















  if (document.getElementById("onec").innerHTML > 0) { document.getElementById("oneci").innerHTML = parseFloat(cbw.value * 6 / 100).transform(1).toFixed(2); } else { document.getElementById("oneci").innerHTML = 0; }

  var xc = document.getElementById("oneci").innerHTML;

  if (document.getElementById("twoc").innerHTML > 0) { document.getElementById("twoci").innerHTML = parseFloat(2 * xc).transform(1).toFixed(2); } else { document.getElementById("twoci").innerHTML = 0; }

  var yc = document.getElementById("twoci").innerHTML;

  if (document.getElementById("threec").innerHTML > 0) { document.getElementById("threeci").innerHTML = parseFloat(3 * xc - 0.01).transform(1).toFixed(2); } else { document.getElementById("threeci").innerHTML = 0; }

  var zc = document.getElementById("threeci").innerHTML;

  if (document.getElementById("fourc").innerHTML > 0) { document.getElementById("fourci").innerHTML = parseFloat((((yr2.value * (yr2.value - 1) / 2) * xc) - 0.01) - (parseFloat(xc) + parseFloat(yc) + parseFloat(zc))).transform(1).toFixed(2); } else { document.getElementById("fourci").innerHTML = 0; }








  if (document.getElementById("onef").innerHTML > 0) { document.getElementById("onefi").innerHTML = parseFloat(fwr.value * 6 / 100).transform(1).toFixed(2); } else { document.getElementById("onefi").innerHTML = 0; }

  var xf = document.getElementById("onefi").innerHTML;

  if (document.getElementById("twof").innerHTML > 0) { document.getElementById("twofi").innerHTML = parseFloat(2 * xf).transform(1).toFixed(2); } else { document.getElementById("twofi").innerHTML = 0; }

  var yf = document.getElementById("twofi").innerHTML;

  if (document.getElementById("threef").innerHTML > 0) { document.getElementById("threefi").innerHTML = parseFloat(3 * xf - 0.01).transform(1).toFixed(2); } else { document.getElementById("threefi").innerHTML = 0; }

  var zf = document.getElementById("threefi").innerHTML;

  if (document.getElementById("fourf").innerHTML > 0) { document.getElementById("fourfi").innerHTML = parseFloat((((yr4.value * (yr4.value - 1) / 2) * xf) - 0.01) - (parseFloat(xf) + parseFloat(yf) + parseFloat(zf))).transform(1).toFixed(2); } else { document.getElementById("fourfi").innerHTML = 0; }









  if (document.getElementById("ones").innerHTML > 0) { document.getElementById("onesi").innerHTML = parseFloat(cess.value * 12 / 100).transform(1).toFixed(2); } else { document.getElementById("onesi").innerHTML = 0; }

  var xs = document.getElementById("onesi").innerHTML;

  if (document.getElementById("twos").innerHTML > 0) { document.getElementById("twosi").innerHTML = parseFloat(2 * xs).transform(1).toFixed(2); } else { document.getElementById("twosi").innerHTML = 0; }

  var ys = document.getElementById("twosi").innerHTML;

  if (document.getElementById("threes").innerHTML > 0) { document.getElementById("threesi").innerHTML = parseFloat(3 * xs - 0.01).transform(1).toFixed(2); } else { document.getElementById("threesi").innerHTML = 0; }

  var zs = document.getElementById("threesi").innerHTML;

  if (document.getElementById("fours").innerHTML > 0) { document.getElementById("foursi").innerHTML = parseFloat((((yr3.value * (yr3.value - 1) / 2) * xs) - 0.01) - (parseFloat(xs) + parseFloat(ys) + parseFloat(zs))).transform(1).toFixed(2); } else { document.getElementById("foursi").innerHTML = 0; }



  var r0 = document.getElementById("thisr").innerHTML;
  var r1 = document.getElementById("oner").innerHTML;
  var r2 = document.getElementById("twor").innerHTML;
  var r3 = document.getElementById("threer").innerHTML;
  var r4 = document.getElementById("fourr").innerHTML;
  document.getElementById("totalr").innerHTML = parseFloat(parseFloat(r0) + parseFloat(r1) + parseFloat(r2) + parseFloat(r3) + parseFloat(r4)).toFixed(2);
  var rt = document.getElementById("totalr").innerHTML;


  if (parseFloat(r0) > 0) { document.getElementById("a").style.display = 'block'; }

  var ri0 = document.getElementById("thisri").innerHTML;
  var ri1 = document.getElementById("oneri").innerHTML;
  var ri2 = document.getElementById("twori").innerHTML;
  var ri3 = document.getElementById("threeri").innerHTML;
  var ri4 = document.getElementById("fourri").innerHTML;
  document.getElementById("totalri").innerHTML = parseFloat(parseFloat(ri1) + parseFloat(ri2) + parseFloat(ri3) + parseFloat(ri4)).toFixed(2);
  var rit = document.getElementById("totalri").innerHTML;



  var c0 = document.getElementById("thisc").innerHTML;
  var c1 = document.getElementById("onec").innerHTML;
  var c2 = document.getElementById("twoc").innerHTML;
  var c3 = document.getElementById("threec").innerHTML;
  var c4 = document.getElementById("fourc").innerHTML;
  document.getElementById("totalc").innerHTML = parseFloat(parseFloat(c0) + parseFloat(c1) + parseFloat(c2) + parseFloat(c3) + parseFloat(c4)).toFixed(2);
  var ct = document.getElementById("totalc").innerHTML;

  if (parseFloat(c0) > 0) { document.getElementById("b").style.display = 'block'; }


  var ci0 = document.getElementById("thisci").innerHTML;
  var ci1 = document.getElementById("oneci").innerHTML;
  var ci2 = document.getElementById("twoci").innerHTML;
  var ci3 = document.getElementById("threeci").innerHTML;
  var ci4 = document.getElementById("fourci").innerHTML;
  document.getElementById("totalci").innerHTML = parseFloat(parseFloat(ci1) + parseFloat(ci2) + parseFloat(ci3) + parseFloat(ci4)).toFixed(2);
  var cit = document.getElementById("totalci").innerHTML;





  var f0 = document.getElementById("thisf").innerHTML;
  var f1 = document.getElementById("onef").innerHTML;
  var f2 = document.getElementById("twof").innerHTML;
  var f3 = document.getElementById("threef").innerHTML;
  var f4 = document.getElementById("fourf").innerHTML;
  document.getElementById("totalf").innerHTML = parseFloat(parseFloat(f0) + parseFloat(f1) + parseFloat(f2) + parseFloat(f3) + parseFloat(f4)).toFixed(2);
  var ft = document.getElementById("totalf").innerHTML;

  if (parseFloat(f0) > 0) { document.getElementById("c").style.display = 'block'; }


  var fi0 = document.getElementById("thisfi").innerHTML;
  var fi1 = document.getElementById("onefi").innerHTML;
  var fi2 = document.getElementById("twofi").innerHTML;
  var fi3 = document.getElementById("threefi").innerHTML;
  var fi4 = document.getElementById("fourfi").innerHTML;
  document.getElementById("totalfi").innerHTML = parseFloat(parseFloat(fi1) + parseFloat(fi2) + parseFloat(fi3) + parseFloat(fi4)).toFixed(2);
  var fit = document.getElementById("totalfi").innerHTML;

  document.getElementById("onexi").innerHTML = parseFloat(parseFloat(ri1) + parseFloat(ci1) + parseFloat(fi1)).toFixed(2);
  document.getElementById("twoxi").innerHTML = parseFloat(parseFloat(ri2) + parseFloat(ci2) + parseFloat(fi2)).toFixed(2);
  document.getElementById("threexi").innerHTML = parseFloat(parseFloat(ri3) + parseFloat(ci3) + parseFloat(fi3)).toFixed(2);
  document.getElementById("fourxi").innerHTML = parseFloat(parseFloat(ri4) + parseFloat(ci4) + parseFloat(fi4)).toFixed(2);
  document.getElementById("totalxi").innerHTML = parseFloat(parseFloat(rit) + parseFloat(cit) + parseFloat(fit)).toFixed(2);

  var s0 = document.getElementById("thiss").innerHTML;
  var s1 = document.getElementById("ones").innerHTML;
  var s2 = document.getElementById("twos").innerHTML;
  var s3 = document.getElementById("threes").innerHTML;
  var s4 = document.getElementById("fours").innerHTML;
  document.getElementById("totals").innerHTML = parseFloat(parseFloat(s0) + parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4)).toFixed(2);
  var st = document.getElementById("totals").innerHTML;

  if (parseFloat(s0) > 0) { document.getElementById("d").style.display = 'block'; }


  var si0 = document.getElementById("thissi").innerHTML;
  var si1 = document.getElementById("onesi").innerHTML;
  var si2 = document.getElementById("twosi").innerHTML;
  var si3 = document.getElementById("threesi").innerHTML;
  var si4 = document.getElementById("foursi").innerHTML;
  document.getElementById("totalsi").innerHTML = parseFloat(parseFloat(si1) + parseFloat(si2) + parseFloat(si3) + parseFloat(si4)).toFixed(2);
  var sit = document.getElementById("totalsi").innerHTML;



  document.getElementById("t4").innerHTML =
    (parseFloat(r4) + parseFloat(ri4) + parseFloat(c4) + parseFloat(ci4) + parseFloat(f4) + parseFloat(fi4) + parseFloat(s4) + parseFloat(si4)).toFixed(2);

  document.getElementById("t3").innerHTML =
    (parseFloat(r3) + parseFloat(ri3) + parseFloat(c3) + parseFloat(ci3) + parseFloat(f3) + parseFloat(fi3) + parseFloat(s3) + parseFloat(si3)).toFixed(2);

  document.getElementById("t2").innerHTML =
    (parseFloat(r2) + parseFloat(ri2) + parseFloat(c2) + parseFloat(ci2) + parseFloat(f2) + parseFloat(fi2) + parseFloat(s2) + parseFloat(si2)).toFixed(2);

  document.getElementById("t1").innerHTML =
    (parseFloat(r1) + parseFloat(ri1) + parseFloat(c1) + parseFloat(ci1) + parseFloat(f1) + parseFloat(fi1) + parseFloat(s1) + parseFloat(si1)).toFixed(2);

  document.getElementById("t0").innerHTML = (parseFloat(r0) + parseFloat(c0) + parseFloat(f0) + parseFloat(s0)).toFixed(2);


  document.getElementById("tt").innerHTML = (parseFloat(rt) + parseFloat(rit) + parseFloat(ft) + parseFloat(fit) + parseFloat(ct) + parseFloat(cit) + parseFloat(st) + parseFloat(sit)).toFixed(2);

  document.getElementById("div1").style.display = 'none';
}

function cle() {
  window.location.href = window.location;
}

function zero() {

  var tor = document.getElementById("totalr").innerHTML;
  var rc0 = document.getElementById("thisr").innerHTML;
  var to0 = document.getElementById("t0").innerHTML;
  var gtt = document.getElementById("tt").innerHTML;
  document.getElementById("totalr").innerHTML = (parseFloat(tor) - parseFloat(rc0)).toFixed(2);
  document.getElementById("t0").innerHTML = (parseFloat(to0) - parseFloat(rc0)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(rc0)).toFixed(2);
  document.getElementById("thisr").innerHTML = 0;
}

function czero() {
  var gtt = document.getElementById("tt").innerHTML;
  var toc = document.getElementById("totalc").innerHTML;
  var cc0 = document.getElementById("thisc").innerHTML;
  var to0 = document.getElementById("t0").innerHTML;
  document.getElementById("totalc").innerHTML = (parseFloat(toc) - parseFloat(cc0)).toFixed(2);
  document.getElementById("t0").innerHTML = (parseFloat(to0) - parseFloat(cc0)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(cc0)).toFixed(2);
  document.getElementById("thisc").innerHTML = 0;
}

function fzero() {
  var gtt = document.getElementById("tt").innerHTML;
  var tof = document.getElementById("totalf").innerHTML;
  var fc0 = document.getElementById("thisf").innerHTML;
  var to0 = document.getElementById("t0").innerHTML;
  document.getElementById("totalf").innerHTML = (parseFloat(tof) - parseFloat(fc0)).toFixed(2);
  document.getElementById("t0").innerHTML = (parseFloat(to0) - parseFloat(fc0)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(fc0)).toFixed(2);
  document.getElementById("thisf").innerHTML = 0;
}

function szero() {
  var gtt = document.getElementById("tt").innerHTML;
  var tos = document.getElementById("totals").innerHTML;
  var sc0 = document.getElementById("thiss").innerHTML;
  var to0 = document.getElementById("t0").innerHTML;
  document.getElementById("totals").innerHTML = (parseFloat(tos) - parseFloat(sc0)).toFixed(2);
  document.getElementById("t0").innerHTML = (parseFloat(to0) - parseFloat(sc0)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(sc0)).toFixed(2);
  document.getElementById("thiss").innerHTML = 0;
}

function zero1() {
  var gtt = document.getElementById("tt").innerHTML;
  var tor = document.getElementById("totalr").innerHTML;
  var rc1 = document.getElementById("oner").innerHTML;
  var to1 = document.getElementById("t1").innerHTML;
  var tori = document.getElementById("totalri").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var ric1 = document.getElementById("oneri").innerHTML;
  var x1 = document.getElementById("onexi").innerHTML;
  document.getElementById("totalr").innerHTML = (parseFloat(tor) - parseFloat(rc1)).toFixed(2);
  document.getElementById("totalri").innerHTML = (parseFloat(tori) - parseFloat(ric1)).toFixed(2);
  document.getElementById("t1").innerHTML = (parseFloat(to1) - parseFloat(ric1) - parseFloat(rc1)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(ric1) - parseFloat(rc1)).toFixed(2);
  document.getElementById("onexi").innerHTML = (parseFloat(x1) - parseFloat(ric1)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(ric1)).toFixed(2);
  document.getElementById("oner").innerHTML = 0;
  document.getElementById("oneri").innerHTML = 0;
}

function czero1() {
  var gtt = document.getElementById("tt").innerHTML;
  var toc = document.getElementById("totalc").innerHTML;
  var cc1 = document.getElementById("onec").innerHTML;
  var to1 = document.getElementById("t1").innerHTML;
  var toci = document.getElementById("totalci").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var cic1 = document.getElementById("oneci").innerHTML;
  var x1 = document.getElementById("onexi").innerHTML;
  document.getElementById("totalc").innerHTML = (parseFloat(toc) - parseFloat(cc1)).toFixed(2);
  document.getElementById("totalci").innerHTML = (parseFloat(toci) - parseFloat(cic1)).toFixed(2);
  document.getElementById("t1").innerHTML = (parseFloat(to1) - parseFloat(cic1) - parseFloat(cc1)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(cic1) - parseFloat(cc1)).toFixed(2);
  document.getElementById("onexi").innerHTML = (parseFloat(x1) - parseFloat(cic1)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(cic1)).toFixed(2);
  document.getElementById("onec").innerHTML = 0;
  document.getElementById("oneci").innerHTML = 0;
}

function fzero1() {
  var gtt = document.getElementById("tt").innerHTML;
  var tof = document.getElementById("totalf").innerHTML;
  var fc1 = document.getElementById("onef").innerHTML;
  var to1 = document.getElementById("t1").innerHTML;
  var tofi = document.getElementById("totalfi").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var fic1 = document.getElementById("onefi").innerHTML;
  var x1 = document.getElementById("onexi").innerHTML;

  document.getElementById("totalf").innerHTML = (parseFloat(tof) - parseFloat(fc1)).toFixed(2);
  document.getElementById("totalfi").innerHTML = (parseFloat(tofi) - parseFloat(fic1)).toFixed(2);
  document.getElementById("t1").innerHTML = (parseFloat(to1) - parseFloat(fic1) - parseFloat(fc1)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(fic1) - parseFloat(fc1)).toFixed(2);
  document.getElementById("onexi").innerHTML = (parseFloat(x1) - parseFloat(fic1)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(fic1)).toFixed(2);
  document.getElementById("onef").innerHTML = 0;
  document.getElementById("onefi").innerHTML = 0;
}

function szero1() {
  var gtt = document.getElementById("tt").innerHTML;

  var tos = document.getElementById("totals").innerHTML;
  var sc1 = document.getElementById("ones").innerHTML;
  var to1 = document.getElementById("t1").innerHTML;
  var tosi = document.getElementById("totalsi").innerHTML;
  var sic1 = document.getElementById("onesi").innerHTML;
  document.getElementById("totals").innerHTML = (parseFloat(tos) - parseFloat(sc1)).toFixed(2);
  document.getElementById("totalsi").innerHTML = (parseFloat(tosi) - parseFloat(sic1)).toFixed(2);
  document.getElementById("t1").innerHTML = (parseFloat(to1) - parseFloat(sic1) - parseFloat(sc1)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(sic1) - parseFloat(sc1)).toFixed(2);
  document.getElementById("ones").innerHTML = 0;
  document.getElementById("onesi").innerHTML = 0;
}

function zero2() {
  var gtt = document.getElementById("tt").innerHTML;
  var tor = document.getElementById("totalr").innerHTML;
  var rc2 = document.getElementById("twor").innerHTML;
  var to2 = document.getElementById("t2").innerHTML;
  var tori = document.getElementById("totalri").innerHTML;
  var ric2 = document.getElementById("twori").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var x2 = document.getElementById("twoxi").innerHTML;
  document.getElementById("totalr").innerHTML = (parseFloat(tor) - parseFloat(rc2)).toFixed(2);
  document.getElementById("totalri").innerHTML = (parseFloat(tori) - parseFloat(ric2)).toFixed(2);
  document.getElementById("t2").innerHTML = (parseFloat(to2) - parseFloat(ric2) - parseFloat(rc2)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(ric2) - parseFloat(rc2)).toFixed(2);
  document.getElementById("twoxi").innerHTML = (parseFloat(x2) - parseFloat(ric2)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(ric2)).toFixed(2);
  document.getElementById("twor").innerHTML = 0;
  document.getElementById("twori").innerHTML = 0;
}

function czero2() {
  var gtt = document.getElementById("tt").innerHTML;
  var toc = document.getElementById("totalc").innerHTML;
  var cc2 = document.getElementById("twoc").innerHTML;
  var to2 = document.getElementById("t2").innerHTML;
  var toci = document.getElementById("totalci").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var cic2 = document.getElementById("twoci").innerHTML;
  var x2 = document.getElementById("twoxi").innerHTML;
  document.getElementById("totalc").innerHTML = (parseFloat(toc) - parseFloat(cc2)).toFixed(2);
  document.getElementById("totalci").innerHTML = (parseFloat(toci) - parseFloat(cic2)).toFixed(2);
  document.getElementById("t2").innerHTML = (parseFloat(to2) - parseFloat(cic2) - parseFloat(cc2)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(cic2) - parseFloat(cc2)).toFixed(2);
  document.getElementById("twoxi").innerHTML = (parseFloat(x2) - parseFloat(cic2)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(cic2)).toFixed(2);
  document.getElementById("twoc").innerHTML = 0;
  document.getElementById("twoci").innerHTML = 0;
}

function fzero2() {
  var gtt = document.getElementById("tt").innerHTML;
  var tof = document.getElementById("totalf").innerHTML;
  var fc2 = document.getElementById("twof").innerHTML;
  var to2 = document.getElementById("t2").innerHTML;
  var tofi = document.getElementById("totalfi").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var fic2 = document.getElementById("twofi").innerHTML;
  var x2 = document.getElementById("twoxi").innerHTML;
  document.getElementById("totalf").innerHTML = (parseFloat(tof) - parseFloat(fc2)).toFixed(2);
  document.getElementById("totalfi").innerHTML = (parseFloat(tofi) - parseFloat(fic2)).toFixed(2);
  document.getElementById("t2").innerHTML = (parseFloat(to2) - parseFloat(fic2) - parseFloat(fc2)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(fic2) - parseFloat(fc2)).toFixed(2);
  document.getElementById("twoxi").innerHTML = (parseFloat(x2) - parseFloat(fic2)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(fic2)).toFixed(2);
  document.getElementById("twof").innerHTML = 0;
  document.getElementById("twofi").innerHTML = 0;
}

function szero2() {
  var gtt = document.getElementById("tt").innerHTML;
  var tos = document.getElementById("totals").innerHTML;
  var sc2 = document.getElementById("twos").innerHTML;
  var to2 = document.getElementById("t2").innerHTML;
  var tosi = document.getElementById("totalsi").innerHTML;
  var sic2 = document.getElementById("twosi").innerHTML;
  document.getElementById("totals").innerHTML = (parseFloat(tos) - parseFloat(sc2)).toFixed(2);
  document.getElementById("totalsi").innerHTML = (parseFloat(tosi) - parseFloat(sic2)).toFixed(2);
  document.getElementById("t2").innerHTML = (parseFloat(to2) - parseFloat(sic2) - parseFloat(sc2)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(sic2) - parseFloat(sc2)).toFixed(2);
  document.getElementById("twos").innerHTML = 0;
  document.getElementById("twosi").innerHTML = 0;
}

function zero3() {
  var gtt = document.getElementById("tt").innerHTML;
  var tor = document.getElementById("totalr").innerHTML;
  var rc3 = document.getElementById("threer").innerHTML;
  var to3 = document.getElementById("t3").innerHTML;
  var tori = document.getElementById("totalri").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var ric3 = document.getElementById("threeri").innerHTML;
  var x3 = document.getElementById("threexi").innerHTML;
  document.getElementById("totalr").innerHTML = (parseFloat(tor) - parseFloat(rc3)).toFixed(2);
  document.getElementById("totalri").innerHTML = (parseFloat(tori) - parseFloat(ric3)).toFixed(2);
  document.getElementById("t3").innerHTML = (parseFloat(to3) - parseFloat(ric3) - parseFloat(rc3)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(ric3) - parseFloat(rc3)).toFixed(2);
  document.getElementById("threexi").innerHTML = (parseFloat(x3) - parseFloat(ric3)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(ric3)).toFixed(2);
  document.getElementById("threer").innerHTML = 0;
  document.getElementById("threeri").innerHTML = 0;
}

function czero3() {
  var gtt = document.getElementById("tt").innerHTML;
  var toc = document.getElementById("totalc").innerHTML;
  var cc3 = document.getElementById("threec").innerHTML;
  var to3 = document.getElementById("t3").innerHTML;
  var toci = document.getElementById("totalci").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var cic3 = document.getElementById("threeci").innerHTML;
  var x3 = document.getElementById("threexi").innerHTML;
  document.getElementById("totalc").innerHTML = (parseFloat(toc) - parseFloat(cc3)).toFixed(2);
  document.getElementById("totalci").innerHTML = (parseFloat(toci) - parseFloat(cic3)).toFixed(2);
  document.getElementById("t3").innerHTML = (parseFloat(to3) - parseFloat(cic3) - parseFloat(cc3)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(cic3) - parseFloat(cc3)).toFixed(2);
  document.getElementById("threexi").innerHTML = (parseFloat(x3) - parseFloat(cic3)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(cic3)).toFixed(2);
  document.getElementById("threec").innerHTML = 0;
  document.getElementById("threeci").innerHTML = 0;
}

function fzero3() {
  var gtt = document.getElementById("tt").innerHTML;
  var tof = document.getElementById("totalf").innerHTML;
  var fc3 = document.getElementById("threef").innerHTML;
  var to3 = document.getElementById("t3").innerHTML;
  var tofi = document.getElementById("totalfi").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var fic3 = document.getElementById("threefi").innerHTML;
  var x3 = document.getElementById("threexi").innerHTML;
  document.getElementById("totalf").innerHTML = (parseFloat(tof) - parseFloat(fc3)).toFixed(2);
  document.getElementById("totalfi").innerHTML = (parseFloat(tofi) - parseFloat(fic3)).toFixed(2);
  document.getElementById("t3").innerHTML = (parseFloat(to3) - parseFloat(fic3) - parseFloat(fc3)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(fic3) - parseFloat(fc3)).toFixed(2);
  document.getElementById("threexi").innerHTML = (parseFloat(x3) - parseFloat(fic3)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(fic3)).toFixed(2);
  document.getElementById("threef").innerHTML = 0;
  document.getElementById("threefi").innerHTML = 0;
}

function szero3() {
  var gtt = document.getElementById("tt").innerHTML;
  var tos = document.getElementById("totals").innerHTML;
  var sc3 = document.getElementById("threes").innerHTML;
  var to3 = document.getElementById("t3").innerHTML;
  var tosi = document.getElementById("totalsi").innerHTML;
  var sic3 = document.getElementById("threesi").innerHTML;
  document.getElementById("totals").innerHTML = (parseFloat(tos) - parseFloat(sc3)).toFixed(2);
  document.getElementById("totalsi").innerHTML = (parseFloat(tosi) - parseFloat(sic3)).toFixed(2);
  document.getElementById("t3").innerHTML = (parseFloat(to3) - parseFloat(sic3) - parseFloat(sc3)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(sic3) - parseFloat(sc3)).toFixed(2);
  document.getElementById("threes").innerHTML = 0;
  document.getElementById("threesi").innerHTML = 0;
}

function zero4() {
  var gtt = document.getElementById("tt").innerHTML;
  var tor = document.getElementById("totalr").innerHTML;
  var rc4 = document.getElementById("fourr").innerHTML;
  var to4 = document.getElementById("t4").innerHTML;
  var tori = document.getElementById("totalri").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var ric4 = document.getElementById("fourri").innerHTML;
  var x4 = document.getElementById("fourxi").innerHTML;
  document.getElementById("totalr").innerHTML = (parseFloat(tor) - parseFloat(rc4)).toFixed(2);
  document.getElementById("totalri").innerHTML = (parseFloat(tori) - parseFloat(ric4)).toFixed(2);
  document.getElementById("t4").innerHTML = (parseFloat(to4) - parseFloat(ric4) - parseFloat(rc4)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(ric4) - parseFloat(rc4)).toFixed(2);
  document.getElementById("fourxi").innerHTML = (parseFloat(x4) - parseFloat(ric4)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(ric4)).toFixed(2);
  document.getElementById("fourr").innerHTML = 0;
  document.getElementById("fourri").innerHTML = 0;
}

function czero4() {
  var gtt = document.getElementById("tt").innerHTML;
  var toc = document.getElementById("totalc").innerHTML;
  var cc4 = document.getElementById("fourc").innerHTML;
  var to4 = document.getElementById("t4").innerHTML;
  var toci = document.getElementById("totalci").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var cic4 = document.getElementById("fourci").innerHTML;
  var x4 = document.getElementById("fourxi").innerHTML;
  document.getElementById("totalc").innerHTML = (parseFloat(toc) - parseFloat(cc4)).toFixed(2);
  document.getElementById("totalci").innerHTML = (parseFloat(toci) - parseFloat(cic4)).toFixed(2);
  document.getElementById("t4").innerHTML = (parseFloat(to4) - parseFloat(cic4) - parseFloat(cc4)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(cic4) - parseFloat(cc4)).toFixed(2);
  document.getElementById("fourxi").innerHTML = (parseFloat(x4) - parseFloat(cic4)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(cic4)).toFixed(2);
  document.getElementById("fourc").innerHTML = 0;
  document.getElementById("fourci").innerHTML = 0;
}

function fzero4() {
  var gtt = document.getElementById("tt").innerHTML;
  var tof = document.getElementById("totalf").innerHTML;
  var fc4 = document.getElementById("fourf").innerHTML;
  var to4 = document.getElementById("t4").innerHTML;
  var tofi = document.getElementById("totalfi").innerHTML;
  var toxi = document.getElementById("totalxi").innerHTML;
  var fic4 = document.getElementById("fourfi").innerHTML;
  var x4 = document.getElementById("fourxi").innerHTML;
  document.getElementById("totalf").innerHTML = (parseFloat(tof) - parseFloat(fc4)).toFixed(2);
  document.getElementById("totalfi").innerHTML = (parseFloat(tofi) - parseFloat(fic4)).toFixed(2);

  document.getElementById("t4").innerHTML = (parseFloat(to4) - parseFloat(fic4) - parseFloat(fc4)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(fic4) - parseFloat(fc4)).toFixed(2);
  document.getElementById("fourxi").innerHTML = (parseFloat(x4) - parseFloat(fic4)).toFixed(2);
  document.getElementById("totalxi").innerHTML = (parseFloat(toxi) - parseFloat(fic4)).toFixed(2);
  document.getElementById("fourf").innerHTML = 0;
  document.getElementById("fourfi").innerHTML = 0;
}

function szero4() {
  var gtt = document.getElementById("tt").innerHTML;
  var tos = document.getElementById("totals").innerHTML;
  var sc4 = document.getElementById("fours").innerHTML;
  var to4 = document.getElementById("t4").innerHTML;
  var tosi = document.getElementById("totalsi").innerHTML;
  var sic4 = document.getElementById("foursi").innerHTML;
  document.getElementById("totals").innerHTML = (parseFloat(tos) - parseFloat(sc4)).toFixed(2);
  document.getElementById("totalsi").innerHTML = (parseFloat(tosi) - parseFloat(sic4)).toFixed(2);
  document.getElementById("t4").innerHTML = (parseFloat(to4) - parseFloat(sic4) - parseFloat(sc4)).toFixed(2);
  document.getElementById("tt").innerHTML = (parseFloat(gtt) - parseFloat(sic4) - parseFloat(sc4)).toFixed(2);
  document.getElementById("fours").innerHTML = 0;
  document.getElementById("foursi").innerHTML = 0;
}
var count = 0;

function show() {
  if (count % 2 == 0) {
    document.getElementById("gayab").style.display = 'none';
    document.getElementById("gayab1").style.display = 'none';
    document.getElementById("gayab2").style.display = 'none';
    document.getElementById("gayab3").style.display = 'none';
    document.getElementById("ccol").style.display = 'table-row';
    count = count + 1;
  } else {
    document.getElementById("gayab").style.display = 'table-row';
    document.getElementById("gayab1").style.display = 'table-row';
    document.getElementById("gayab2").style.display = 'table-row';
    document.getElementById("gayab3").style.display = 'none';
    document.getElementById("ccol").style.display = 'none';
    count = count + 1;
  }
}
