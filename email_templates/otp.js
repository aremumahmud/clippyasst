const otpEmail = ({ otp, instagram, twitter, linkedin }) => {
    `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <!--[if gte mso 15]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>*|MC:SUBJECT|*</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans:400,400i,700,700i,900,900i" />
        <style>
            img {
                -ms-interpolation-mode: bicubic;
            }
            
            table,
            td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
            
            .mceStandardButton,
            .mceStandardButton td,
            .mceStandardButton td a {
                mso-hide: all !important;
            }
            
            p,
            a,
            li,
            td,
            blockquote {
                mso-line-height-rule: exactly;
            }
            
            p,
            a,
            li,
            td,
            body,
            table,
            blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
            
            @media only screen and (max-width: 480px) {
                body,
                table,
                td,
                p,
                a,
                li,
                blockquote {
                    -webkit-text-size-adjust: none !important;
                }
            }
            
            .mcnPreviewText {
                display: none !important;
            }
            
            .bodyCell {
                margin: 0 auto;
                padding: 0;
                width: 100%;
            }
            
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass td,
            .ExternalClass div,
            .ExternalClass span,
            .ExternalClass font {
                line-height: 100%;
            }
            
            .ReadMsgBody {
                width: 100%;
            }
            
            .ExternalClass {
                width: 100%;
            }
            
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
            
            body {
                height: 100%;
                margin: 0;
                padding: 0;
                width: 100%;
                background: #ffffff;
            }
            
            p {
                margin: 0;
                padding: 0;
            }
            
            table {
                border-collapse: collapse;
            }
            
            td,
            p,
            a {
                word-break: break-word;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                display: block;
                margin: 0;
                padding: 0;
            }
            
            img,
            a img {
                border: 0;
                height: auto;
                outline: none;
                text-decoration: none;
            }
            
            a[href^="tel"],
            a[href^="sms"] {
                color: inherit;
                cursor: default;
                text-decoration: none;
            }
            
            li p {
                margin: 0 !important;
            }
            
            .ProseMirror a {
                pointer-events: none;
            }
            
            @media only screen and (max-width: 640px) {
                .mceClusterLayout td {
                    padding: 4px !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                body {
                    width: 100% !important;
                    min-width: 100% !important;
                }
                body.mobile-native {
                    -webkit-user-select: none;
                    user-select: none;
                    transition: transform 0.2s ease-in;
                    transform-origin: top center;
                }
                body.mobile-native.selection-allowed a,
                body.mobile-native.selection-allowed .ProseMirror {
                    user-select: auto;
                    -webkit-user-select: auto;
                }
                colgroup {
                    display: none;
                }
                img {
                    height: auto !important;
                }
                .mceWidthContainer {
                    max-width: 660px !important;
                }
                .mceColumn {
                    display: block !important;
                    width: 100% !important;
                }
                .mceColumn-forceSpan {
                    display: table-cell !important;
                    width: auto !important;
                }
                .mceColumn-forceSpan .mceButton a {
                    min-width: 0 !important;
                }
                .mceBlockContainer {
                    padding-right: 16px !important;
                    padding-left: 16px !important;
                }
                .mceBlockContainerE2E {
                    padding-right: 0px;
                    padding-left: 0px;
                }
                .mceSpacing-24 {
                    padding-right: 16px !important;
                    padding-left: 16px !important;
                }
                .mceImage,
                .mceLogo {
                    width: 100% !important;
                    height: auto !important;
                }
                .mceFooterSection .mceText,
                .mceFooterSection .mceText p {
                    font-size: 16px !important;
                    line-height: 140% !important;
                }
            }
            
            div[contenteditable="true"] {
                outline: 0;
            }
            
            .ProseMirror .empty-node,
            .ProseMirror:empty {
                position: relative;
            }
            
            .ProseMirror .empty-node::before,
            .ProseMirror:empty::before {
                position: absolute;
                left: 0;
                right: 0;
                color: rgba(0, 0, 0, 0.2);
                cursor: text;
            }
            
            .ProseMirror .empty-node:hover::before,
            .ProseMirror:empty:hover::before {
                color: rgba(0, 0, 0, 0.3);
            }
            
            .ProseMirror h1.empty-node:only-child::before,
            .ProseMirror h2.empty-node:only-child::before,
            .ProseMirror h3.empty-node:only-child::before,
            .ProseMirror h4.empty-node:only-child::before {
                content: 'Heading';
            }
            
            .ProseMirror p.empty-node:only-child::before,
            .ProseMirror:empty::before {
                content: 'Start typing...';
            }
            
            a .ProseMirror p.empty-node::before,
            a .ProseMirror:empty::before {
                content: '';
            }
            
            .mceText,
            .ProseMirror {
                white-space: pre-wrap;
            }
            
            .mceImageBorder {
                display: inline-block;
            }
            
            .mceImageBorder img {
                border: 0 !important;
            }
            
            body,
            #bodyTable {
                background-color: rgb(244, 244, 244);
            }
            
            .mceText,
            .mceLabel {
                font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
            }
            
            .mceText,
            .mceLabel {
                color: rgb(0, 0, 0);
            }
            
            .mceText h1 {
                margin-bottom: 0px;
            }
            
            .mceText p {
                margin-bottom: 0px;
            }
            
            .mceText label {
                margin-bottom: 0px;
            }
            
            .mceText input {
                margin-bottom: 0px;
            }
            
            .mceSpacing-24 .mceInput+.mceErrorMessage {
                margin-top: -12px;
            }
            
            .mceText h1 {
                margin-bottom: 0px;
            }
            
            .mceText p {
                margin-bottom: 0px;
            }
            
            .mceText label {
                margin-bottom: 0px;
            }
            
            .mceText input {
                margin-bottom: 0px;
            }
            
            .mceSpacing-12 .mceInput+.mceErrorMessage {
                margin-top: -6px;
            }
            
            .mceText h1 {
                margin-bottom: 0px;
            }
            
            .mceText p {
                margin-bottom: 0px;
            }
            
            .mceText label {
                margin-bottom: 0px;
            }
            
            .mceText input {
                margin-bottom: 0px;
            }
            
            .mceSpacing-48 .mceInput+.mceErrorMessage {
                margin-top: -24px;
            }
            
            .mceInput {
                background-color: transparent;
                border: 2px solid rgb(208, 208, 208);
                width: 60%;
                color: rgb(77, 77, 77);
                display: block;
            }
            
            .mceInput[type="radio"],
            .mceInput[type="checkbox"] {
                float: left;
                margin-right: 12px;
                display: inline;
                width: auto !important;
            }
            
            .mceLabel>.mceInput {
                margin-bottom: 0px;
                margin-top: 2px;
            }
            
            .mceLabel {
                display: block;
            }
            
            .mceText p {
                color: rgb(0, 0, 0);
                font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
                font-size: 16px;
                font-weight: normal;
                line-height: 1.5;
                text-align: center;
                direction: ltr;
            }
            
            .mceText h1 {
                color: rgb(0, 0, 0);
                font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
                font-size: 31px;
                font-weight: bold;
                line-height: 1.5;
                text-align: center;
                direction: ltr;
            }
            
            .mceText a {
                color: rgb(0, 0, 0);
                font-style: normal;
                font-weight: normal;
                text-decoration: underline;
                direction: ltr;
            }
            
            @media only screen and (max-width: 480px) {
                .mceText p {
                    font-size: 16px !important;
                    line-height: 1.5 !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .mceText h1 {
                    font-size: 31px !important;
                    line-height: 1.5 !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .mceBlockContainer {
                    padding-left: 16px !important;
                    padding-right: 16px !important;
                }
            }
            
            #dataBlockId-9 p,
            #dataBlockId-9 h1,
            #dataBlockId-9 h2,
            #dataBlockId-9 h3,
            #dataBlockId-9 h4,
            #dataBlockId-9 ul {
                text-align: center;
            }
            
            @media only screen and (max-width: 480px) {
                .mobileClass-92 {
                    padding-left: 12 !important;
                    padding-top: 0 !important;
                    padding-right: 12 !important;
                }
                .mobileClass-92 {
                    padding-left: 12 !important;
                    padding-top: 0 !important;
                    padding-right: 12 !important;
                }
                .mobileClass-92 {
                    padding-left: 12 !important;
                    padding-top: 0 !important;
                    padding-right: 12 !important;
                }
            }
        </style>
        <script>
            ! function() {
                function o(n, i) {
                    if (n && i)
                        for (var r in i) i.hasOwnProperty(r) && (void 0 === n[r] ? n[r] = i[r] : n[r].constructor === Object && i[r].constructor === Object ? o(n[r], i[r]) : n[r] = i[r])
                }
                try {
                    var n = decodeURIComponent("%7B%0A%22ResourceTiming%22%3A%7B%0A%22comment%22%3A%20%22Clear%20RT%20Buffer%20on%20mPulse%20beacon%22%2C%0A%22clearOnBeacon%22%3A%20true%0A%7D%2C%0A%22AutoXHR%22%3A%7B%0A%22comment%22%3A%20%22Monitor%20XHRs%20requested%20using%20FETCH%22%2C%0A%22monitorFetch%22%3A%20true%2C%0A%22comment%22%3A%20%22Start%20Monitoring%20SPAs%20from%20Click%22%2C%0A%22spaStartFromClick%22%3A%20true%0A%7D%2C%0A%22PageParams%22%3A%7B%0A%22comment%22%3A%20%22Monitor%20all%20SPA%20XHRs%22%2C%0A%22spaXhr%22%3A%20%22all%22%0A%7D%0A%7D");
                    if (n.length > 0 && window.JSON && "function" == typeof window.JSON.parse) {
                        var i = JSON.parse(n);
                        void 0 !== window.BOOMR_config ? o(window.BOOMR_config, i) : window.BOOMR_config = i
                    }
                } catch (r) {
                    window.console && "function" == typeof window.console.error && console.error("mPulse: Could not parse configuration", r)
                }
            }();
        </script>
        <script>
            ! function(a) {
                var e = "https://s.go-mpulse.net/boomerang/",
                    t = "addEventListener";
                if ("True" == "True") a.BOOMR_config = a.BOOMR_config || {}, a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {}, a.BOOMR_config.PageParams.pci = !0, e = "https://s2.go-mpulse.net/boomerang/";
                if (window.BOOMR_API_key = "QAT5G-9HZLF-7EDMX-YMVCJ-QZJDA", function() {
                        function n(e) {
                            a.BOOMR_onload = e && e.timeStamp || (new Date).getTime()
                        }
                        if (!a.BOOMR || !a.BOOMR.version && !a.BOOMR.snippetExecuted) {
                            a.BOOMR = a.BOOMR || {}, a.BOOMR.snippetExecuted = !0;
                            var i, _, o, r = document.createElement("iframe");
                            if (a[t]) a[t]("load", n, !1);
                            else if (a.attachEvent) a.attachEvent("onload", n);
                            r.src = "javascript:void(0)", r.title = "", r.role = "presentation", (r.frameElement || r).style.cssText = "width:0;height:0;border:0;display:none;", o = document.getElementsByTagName("script")[0], o.parentNode.insertBefore(r, o);
                            try {
                                _ = r.contentWindow.document
                            } catch (O) {
                                i = document.domain, r.src = "javascript:var d=document.open();d.domain='" + i + "';void(0);", _ = r.contentWindow.document
                            }
                            _.open()._l = function() {
                                var a = this.createElement("script");
                                if (i) this.domain = i;
                                a.id = "boomr-if-as", a.src = e + "QAT5G-9HZLF-7EDMX-YMVCJ-QZJDA", BOOMR_lstart = (new Date).getTime(), this.body.appendChild(a)
                            }, _.write("<bo" + 'dy onload="document._l();">'), _.close()
                        }
                    }(), "400".length > 0)
                    if (a && "performance" in a && a.performance && "function" == typeof a.performance.setResourceTimingBufferSize) a.performance.setResourceTimingBufferSize(400);
                    ! function() {
                    if (BOOMR = a.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) {
                        var e = "" == "true" ? 1 : 0,
                            t = "",
                            n = "mzmrpvyxeauzgzsblvea-f-a0368df74-clientnsv4-s.akamaihd.net",
                            i = "false" == "true" ? 2 : 1,
                            _ = {
                                "ak.v": "37",
                                "ak.cp": "1513051",
                                "ak.ai": parseInt("963350", 10),
                                "ak.ol": "0",
                                "ak.cr": 184,
                                "ak.ipv": 4,
                                "ak.proto": "h2",
                                "ak.rid": "19a0731c",
                                "ak.r": 41449,
                                "ak.a2": e,
                                "ak.m": "x",
                                "ak.n": "essl",
                                "ak.bpcip": "102.89.23.0",
                                "ak.cport": 42905,
                                "ak.gh": "95.101.237.46",
                                "ak.quicv": "",
                                "ak.tlsv": "tls1.3",
                                "ak.0rtt": "",
                                "ak.csrc": "-",
                                "ak.acc": "",
                                "ak.t": "1715559752",
                                "ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==+k4pV5NGoBM89p77W9/p7uDriqt4jtzr1/FO6NK89flLwZ+fvry/I7Z7CvXdGDFEclbaVCuvVV5l0aCsXtSFpMtnklW/oLNlaXzsssLeuYhxO29mFTMPHZnV2f1Uo1rMfAH0quPZf/Mr4gnMP90PXrjgd5VxkS/++XXnlb4OaR7dRswq5xk7CZ2L9KhiDKFJll9Se+8eRZNlmJ3ksCoAZgKaXjIlQaI16yOBk7+26aMRI6E1VoqXEGFg9PrnBqH/KppsTfcDFQjQ8O0NmzGcflM0TD2EdOfhmX/5XijcouOT+j+U+cxVgb/AQgfa9hnvF/fUDpLcA7lxB336lE3MdMig+byCVdpRHXYiLmn40Q6RL0be0Zqjjwc2yYhil0UsWDCXxO04JtWhY6Ufd1BLq4KlCBdcJSpfTowNH3/i5oE=",
                                "ak.pv": "33",
                                "ak.dpoabenc": "",
                                "ak.tf": i
                            };
                        if ("" !== t) _["ak.ruds"] = t;
                        var o = {
                            i: !1,
                            av: function(e) {
                                var t = "http.initiator";
                                if (e && (!e[t] || "spa_hard" === e[t])) _["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0, BOOMR.addVar(_)
                            },
                            rv: function() {
                                var a = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.r", "ak.acc", "ak.t", "ak.tf"];
                                BOOMR.removeVar(a)
                            }
                        };
                        BOOMR.plugins.AK = {
                            akVars: _,
                            akDNSPreFetchDomain: n,
                            init: function() {
                                if (!o.i) {
                                    var a = BOOMR.subscribe;
                                    a("before_beacon", o.av, null, null), a("onbeacon", o.rv, null, null), o.i = !0
                                }
                                return this
                            },
                            is_complete: function() {
                                return !0
                            }
                        }
                    }
                }()
            }(window);
        </script>
    </head>
    
    <body>
        <!--*|IF:MC_PREVIEW_TEXT|*-->
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
        <!--<![endif]-->
        <!--*|END:IF|*-->
        <center>
            <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(244, 244, 244);">
                <tbody>
                    <tr>
                        <td class="bodyCell" align="center" valign="top">
                            <table id="root" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody data-block-id="13" class="mceWrapper">
                                    <tr>
                                        <td align="center" valign="top" class="mceWrapperOuter">
                                            <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation">
                                                <tbody>
                                                    <tr>
                                                        <td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover" class="mceWrapperInner" valign="top">
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="12">
                                                                <tbody>
                                                                    <tr class="mceRow">
                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="padding-top:0;padding-bottom:0" class="mceColumn" data-block-id="-10" valign="top" colspan="12" width="100%">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                <tbody>
                                                                                        
                                                                                                    <tr>
                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="2" width="378.99999999999994" height="auto" style="width:378.99999999999994px;height:auto;max-width:379px !important;display:block" alt="Logo" src="https://mcusercontent.com/3fa4feddfb9944e6eb72a8e87/images/19e7054d-45ef-9ad8-6c51-44d3d570d15b.png" class="mceLogo"/></span></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px" class="mceBlockContainer" valign="top">
                                                                                                            <div data-block-id="3" class="mceText" id="dataBlockId-3" style="width:100%">
                                                                                                                <h1><span style="font-family: 'Work Sans', sans-serif">Just checking to be sure you’re you.</span></h1>
                                                                                                                <p class="last-child"><span style="font-family: 'Work Sans', sans-serif">Please copy and paste the following code into the Verification Code field.<br/></span><strong><span style="font-family: 'Work Sans', sans-serif">${otp}</span></strong></p>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="4" width="564" height="auto" style="width:564px;height:auto;max-width:1191px !important;display:block" alt="" src="https://mcusercontent.com/3fa4feddfb9944e6eb72a8e87/images/70dd963d-3305-67a5-7080-f8dca171b1d6.png" role="presentation" class="imageDropZone mceImage"/></span></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="background-color:transparent;padding-top:20px;padding-bottom:20px;padding-right:24px;padding-left:24px" class="mceBlockContainer" valign="top">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent" role="presentation" data-block-id="6">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style="min-width:100%;border-top:2px solid #000000" valign="top"></td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceLayoutContainer" valign="top">
                                                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="7">
                                                                                                                <tbody>
                                                                                                                    <tr class="mceRow">
                                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                                                                                                            <table border="0" cellpadding="0" cellspacing="24" width="100%" role="presentation">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td style="margin-bottom:24px" class="mceColumn" data-block-id="-9" valign="top" colspan="12" width="100%">
                                                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td align="center" valign="top">
                                                                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="" role="presentation" class="mceClusterLayout" data-block-id="-8">
                                                                                                                                                                <tbody>
                                                                                                                                                                    <tr>
                                                                                                                                                                        <td style="padding-left:24px;padding-top:0;padding-right:24px" data-breakpoint="92" valign="top" class="mobileClass-92"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><a href="${linkedin}"><img data-block-id="-5" width="40" height="auto" style="width:40px;height:auto;max-width:40px !important;display:block" alt="Facebook icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/linkedin-filled-dark-40.png" class="mceImage"/></a></span></td>
                                                                                                                                                                        <td style="padding-left:24px;padding-top:0;padding-right:24px" data-breakpoint="92" valign="top" class="mobileClass-92"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><a href="${instagram}"><img data-block-id="-6" width="40" height="auto" style="width:40px;height:auto;max-width:40px !important;display:block" alt="Instagram icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/instagram-filled-dark-40.png" class="mceImage"/></a></span></td>
                                                                                                                                                                        <td style="padding-left:24px;padding-top:0;padding-right:24px" data-breakpoint="92" valign="top" class="mobileClass-92"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><a href="${twitter}"><img data-block-id="-7" width="40" height="auto" style="width:40px;height:auto;max-width:40px !important;display:block" alt="Twitter icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/twitter-filled-dark-40.png" class="mceImage"/></a></span></td>
                                                                                                                                                                    </tr>
                                                                                                                                                                </tbody>
                                                                                                                                                            </table>
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="padding-top:8px;padding-bottom:8px;padding-right:8px;padding-left:8px" class="mceLayoutContainer" valign="top">
                                                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="11" id="section_dc0811fbbe9deb060cc1fe14b60f5242" class="mceFooterSection">
                                                                                                                <tbody>
                                                                                                                    <tr class="mceRow">
                                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                                                                                                            <table border="0" cellpadding="0" cellspacing="12" width="100%" role="presentation">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td style="padding-top:0;padding-bottom:0;margin-bottom:12px" class="mceColumn" data-block-id="-3" valign="top" colspan="12" width="100%">
                                                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="8" width="129.99999999999997" height="auto" style="width:129.99999999999997px;height:auto;max-width:130px !important;display:block" alt="Logo" src="https://mcusercontent.com/3fa4feddfb9944e6eb72a8e87/images/19e7054d-45ef-9ad8-6c51-44d3d570d15b.png" class="mceLogo"/></span></td>
                                                                                                                                                    </tr>
                                                                                                                                                    <tr>
                                                                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px" class="mceBlockContainer" align="center" valign="top">
                                                                                                                                                            <div data-block-id="9" class="mceText" id="dataBlockId-9" style="display:inline-block;width:100%">
                                                                                                                                                                <p class="last-child"><em><span style="font-size: 12px">Copyright (C) 2024 Clippyasst. All rights reserved.</span></em><br/>
                                                                                                                                                            </div>
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
    
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>
        <script type="text/javascript" src="/U6a1NE/Bxlak/R1Cij/_Q/Q1c5G2frSfc5/Fhk5Ag/dlRGE2N/qTQIB"></script>
    </body>
    
    </html>`
}

module.exports = otpEmail