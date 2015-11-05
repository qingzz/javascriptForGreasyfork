// ==UserScript==
// @name         Webpages Control Tool Bar
// @namespace    http://amani.5z5d.com
// @version      0.1
// @description  A tool bar for web pages control, GoToMainPage, RefreshPage, GoToTop, GoToBottom, GoPreviousPage, GoNextPage, CloseCurrentPage. A button can control to hide or show the tool bar.
// @author       Jason Chung-mjasonchung@gmail.com
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

if (window.top.document.getElementById('idTop') == null)
{
    var ttop = window.top.document.createElement('div');
    ttop.style.cssText="position:fixed;z-index:100000;right:50px;bottom:20px;";
    ttop.setAttribute("id","idTop");

    // Control to hide or show
    var dhideshow=window.top.document.createElement('div');
    var nodehideshow = window.top.document.createElement("img");
    nodehideshow.setAttribute("src","http://www.iconpng.com/png/metrize/list75.png");
    nodehideshow.setAttribute("style","height:36px;width:36px;");
    nodehideshow.setAttribute("onmouseover","style.cursor='pointer'");
    nodehideshow.setAttribute("onclick","document.getElementById('idNav').style.visibility=='hidden'?document.getElementById('idNav').style.visibility='visible':document.getElementById('idNav').style.visibility='hidden'");
    dhideshow.appendChild(nodehideshow);
    ttop.appendChild(dhideshow);

    var ontop = window.top.document.createElement('div');
    ontop.setAttribute("id","idNav");

    // GoToMainPage
    var dmain=window.top.document.createElement('div');
    var amain = window.top.document.createElement('a');
    var nodemain = window.top.document.createElement("img");
    nodemain.setAttribute("src","http://icon.mobanwang.com/UploadFiles_8971/200806/20080602162122867.png");
    nodemain.setAttribute("style","height:36px;width:36px;");
    nodemain.setAttribute("target","_self");
    amain.appendChild(nodemain);
    amain.setAttribute("href","http://amani.5z5d.com");// Set Main page here
    dmain.appendChild(amain);
    ontop.appendChild(dmain);

    // RefreshPage
    var dreload=window.top.document.createElement('div');
    var nodereload = window.top.document.createElement("img");
    nodereload.setAttribute("src","http://www.msqq.com/d/file/icon/2014-04-01/bf17b8bfb194fcda4c1d1ee81c37b0fc.png");
    nodereload.setAttribute("style","height:36px;width:36px;");
    nodereload.setAttribute("onmouseover","style.cursor='pointer'");
    nodereload.setAttribute("onclick","window.location.reload()");
    dreload.appendChild(nodereload);
    ontop.appendChild(dreload);

    // GoToTop
    var dtop=window.top.document.createElement('div');
    var atop = window.top.document.createElement('a');
    var nodetop = window.top.document.createElement("img");
    nodetop.setAttribute("src","http://www.msqq.com/d/file/icon/2014-04-01/1723042234dc9d9d1165c50df7dd87ae.png");
    nodetop.setAttribute("style","height:36px;width:36px;");
    atop.appendChild(nodetop);
    atop.setAttribute("onmouseover","style.cursor='pointer'");
    atop.setAttribute("onclick","window.top.scroll(0,0)");
    dtop.appendChild(atop);
    ontop.appendChild(dtop);

    // GoToBottom
    var dbottom=window.top.document.createElement('div');
    var abottom = window.top.document.createElement('a');
    var nodebottom = window.top.document.createElement("img");
    nodebottom.setAttribute("src","http://www.msqq.com/d/file/icon/2014-04-01/0c8eaeb956f9c9b5b7d031b88c471124.png");
    nodebottom.setAttribute("style","height:36px;width:36px;");
    abottom.appendChild(nodebottom);
    abottom.setAttribute("onmouseover","style.cursor='pointer'");
    abottom.setAttribute("onclick","window.top.scrollTo(0,document.body.scrollHeight)");
    dbottom.appendChild(abottom);
    ontop.appendChild(dbottom);

    // GoPreviousPage
    var dback=window.top.document.createElement('div');
    var nodeback = window.top.document.createElement("img");
    nodeback.setAttribute("src","http://www.iconpng.com/png/vista-common/undo_d.png");
    nodeback.setAttribute("style","height:36px;width:36px;");
    nodeback.setAttribute("onmouseover","style.cursor='pointer'");
    nodeback.setAttribute("onclick","window.history.back()");
    dback.appendChild(nodeback);
    ontop.appendChild(dback);

    // GoNextPage
    var dforward=window.top.document.createElement('div');
    var nodeforward = window.top.document.createElement("img");
    nodeforward.setAttribute("src","http://www.iconpng.com/png/vista-common/arrow_right_d.png");
    nodeforward.setAttribute("style","height:36px;width:36px;");
    nodeforward.setAttribute("onmouseover","style.cursor='pointer'");
    nodeforward.setAttribute("onclick","window.history.forward()");
    dforward.appendChild(nodeforward);
    ontop.appendChild(dforward);

    // CloseCurrentPage
    var dclose=window.top.document.createElement('div');
    var nodeclose = window.top.document.createElement("img");
    nodeclose.setAttribute("src","http://ico.58pic.com/iconset01/Nouve-Gnome-Gray-icons/gif/166760.gif");
    nodeclose.setAttribute("style","height:36px;width:36px;");
    nodeclose.setAttribute("onmouseover","style.cursor='pointer'");
    nodeclose.setAttribute("onclick","window.close()");
    dclose.appendChild(nodeclose);
    ontop.appendChild(dclose);

    ttop.appendChild(ontop);

    window.top.document.body.appendChild(ttop);// window.top prevent the tool bar show in iframes!
}
