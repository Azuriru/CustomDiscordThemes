var backgrounds = [
    'https://cdn.discordapp.com/attachments/490757015673634817/492944944869277696/unknown_1.png', 
    'https://cdn.discordapp.com/attachments/490757015673634817/492944945666326528/unknown_2.png'
	],
    randomize = backgrounds[Math.floor(Math.random() * backgrounds.length)],
    customBackground = `
.appMount-3lHmkl {
    background: linear-gradient(to right, rgba(44, 19, 62, 0.8), rgba(44, 19, 62, 0.8)), url(` + randomize + `) center top / cover no-repeat fixed;
}
.anchor-3Z-8Bb {
    color: #00b0f4;
}
.wrapper-1prNyd {
    background-size: cover;
}
.image-3zK3Wt {
    background-size: 100% 100%;
}
.themeLight-2aS1dz {
    background-position: 50% 0;
    color: #3f225a
}
.themeLight-2aS1dz .note-450gs3 {
    color: #9e9e9e
}
.themeDark-3Ap_7i {
    background-color: #331f44;
    color: #f6f6f7
}
.themeDark-3Ap_7i .note-450gs3 {
    color: #b9bbbe
}
@-webkit-keyframes spinner-wandering-cubes-1eyF3t {
    25% {
    }
    }
@keyframes spinner-wandering-cubes-1eyF3t {
    25% {
    }
    }
@-webkit-keyframes spinner-chasing-dots-rotate-1WX_VU {
    to {
    }
}
@keyframes spinner-chasing-dots-rotate-1WX_VU {
    to {
    }
}
@-webkit-keyframes spinner-chasing-dots-bounce-39u8Kf {
    0%,to {
    }
    }
@keyframes spinner-chasing-dots-bounce-39u8Kf {
    0%,to {
    }
    }
@-webkit-keyframes spinner-pulsing-ellipsis-1qRxRG {
    0% {
    }
    }
@keyframes spinner-pulsing-ellipsis-1qRxRG {
    0% {
    }
    }
@-webkit-keyframes spinner-spinning-circle-rotate-1-ejtM {
    to {
    }
}
@keyframes spinner-spinning-circle-rotate-1-ejtM {
    to {
    }
}
@-webkit-keyframes spinner-spinning-circle-dash-3G9Wwf {
    0% {
    }
    }
@keyframes spinner-spinning-circle-dash-3G9Wwf {
    0% {
    }
    }
.wanderingCubesItem-WPXqao {
    background-color: #3a2648;
}
.chasingDotsItem-2DVNUn {
    background-color: #3a2648;
}
.pulsingEllipsisItem-32hhWL {
    background-color: #f8f9f9;
}
.button-38aScr {
    background: none;
}
.lookFilled-1Gx00P.colorBrand-3pXr91 {
    background-color: #3a2648;
    color: #fff
}
.lookFilled-1Gx00P.colorBrand-3pXr91:hover {
    background-color: #a02f7b
}
.lookFilled-1Gx00P.colorBrand-3pXr91:active {
    background-color: #5b6eae
}
.lookFilled-1Gx00P.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorBrand-3pXr91:disabled {
    background-color: #3a2648
}
.lookInverted-2D7oAl.colorBrand-3pXr91 {
    background-color: #fff;
    color: #3a2648
}
.lookInverted-2D7oAl.colorBrand-3pXr91:hover {
    background-color: #f8f9fd
}
.lookInverted-2D7oAl.colorBrand-3pXr91:active {
    background-color: #e3e7f8
}
.lookInverted-2D7oAl.colorBrand-3pXr91:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.lookOutlined-3sRXeN.colorBrand-3pXr91 {
    border-color: rgba(172, 79, 149, 0.3);
    color: #af5091
}
.lookOutlined-3sRXeN.colorBrand-3pXr91:hover {
    border-color: rgba(114,137,218,.6)
}
.lookOutlined-3sRXeN.colorBrand-3pXr91:active {
    background-color: rgba(114,137,218,.1);
    border-color: #3a2648
}
.lookOutlined-3sRXeN.colorBrand-3pXr91:disabled {
    background-color: transparent;
    border-color: rgba(172, 79, 149, 0.3)
}
.lookOutlined-3sRXeN.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.lookGhost-2Fn_0-.colorBrand-3pXr91 {
    background-color: rgba(114,137,218,.1);
    color: #3a2648
}
.lookGhost-2Fn_0-.colorBrand-3pXr91:active {
    background-color: rgba(114,137,218,.15)
}
.lookGhost-2Fn_0-.colorBrand-3pXr91:disabled {
    background-color: rgba(114,137,218,.1)
}
.lookGhost-2Fn_0-.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.lookLink-9FtZy-.colorBrand-3pXr91 {
    color: #3a2648
}
.lookLink-9FtZy-.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.theme-dark .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: #a02f7b;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
    background-color: #f8f9fd;
    color: #3a2648
}
.theme-dark .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: #e3e7f8;
    color: #3a2648
}
.theme-dark .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
    border-color: rgba(114,137,218,.6);
    color: #3a2648
}
.theme-dark .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: rgba(114,137,218,.1);
    border-color: #3a2648;
    color: #3a2648
}
.theme-dark .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: rgba(114,137,218,.15);
    color: #3a2648
}
.theme-dark .lookLink-9FtZy-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #3a2648
}
.lookFilled-1Gx00P.colorGrey-2DXtkV {
    background-color: #747f8d;
    color: #fff
}
.lookFilled-1Gx00P.colorGrey-2DXtkV:hover {
    background-color: #68727f
}
.lookFilled-1Gx00P.colorGrey-2DXtkV:active {
    background-color: #5d6671
}
.lookFilled-1Gx00P.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorGrey-2DXtkV:disabled {
    background-color: #747f8d
}
.lookInverted-2D7oAl.colorGrey-2DXtkV {
    background-color: #fff;
    color: #747f8d
}
.lookInverted-2D7oAl.colorGrey-2DXtkV:hover {
    background-color: #f8f9f9
}
.lookInverted-2D7oAl.colorGrey-2DXtkV:active {
    background-color: #e3e5e8
}
.lookInverted-2D7oAl.colorGrey-2DXtkV:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV {
    border-color: rgba(116,127,141,.3);
    color: #747f8d
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV:hover {
    border-color: rgba(116,127,141,.6)
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV:active {
    background-color: rgba(116,127,141,.1);
    border-color: #747f8d
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV:disabled {
    background-color: transparent;
    border-color: rgba(116,127,141,.3)
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV {
    background-color: rgba(116,127,141,.1);
    color: #747f8d
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV:active {
    background-color: rgba(116,127,141,.15)
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV:disabled {
    background-color: rgba(116,127,141,.1)
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.lookLink-9FtZy-.colorGrey-2DXtkV {
    color: #747f8d
}
.lookLink-9FtZy-.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-dark .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:hover {
    background-color: #747f8d;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: #68727f;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:hover {
    background-color: #f8f9f9;
    color: #747f8d
}
.theme-dark .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: #e3e5e8;
    color: #747f8d
}
.theme-dark .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:hover {
    border-color: rgba(116,127,141,.6);
    color: #747f8d
}
.theme-dark .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.1);
    border-color: #747f8d;
    color: #747f8d
}
.theme-dark .lookGhost-2Fn_0-.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.15);
    color: #747f8d
}
.theme-dark .lookLink-9FtZy-.hoverGrey-2CBXu0.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverGrey-2CBXu0.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #747f8d
}
.lookFilled-1Gx00P.colorRed-1TFJan {
    background-color: #f04747;
    color: #fff
}
.lookFilled-1Gx00P.colorRed-1TFJan:hover {
    background-color: #d84040
}
.lookFilled-1Gx00P.colorRed-1TFJan:active {
    background-color: #c03939
}
.lookFilled-1Gx00P.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorRed-1TFJan:disabled {
    background-color: #f04747
}
.lookInverted-2D7oAl.colorRed-1TFJan {
    background-color: #fff;
    color: #f04747
}
.lookInverted-2D7oAl.colorRed-1TFJan:hover {
    background-color: #fef6f6
}
.lookInverted-2D7oAl.colorRed-1TFJan:active {
    background-color: #fcdada
}
.lookInverted-2D7oAl.colorRed-1TFJan:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.lookOutlined-3sRXeN.colorRed-1TFJan {
    border-color: rgba(240,71,71,.3);
    color: #f04747
}
.lookOutlined-3sRXeN.colorRed-1TFJan:hover {
    border-color: rgba(240,71,71,.6)
}
.lookOutlined-3sRXeN.colorRed-1TFJan:active {
    background-color: rgba(240,71,71,.1);
    border-color: #f04747
}
.lookOutlined-3sRXeN.colorRed-1TFJan:disabled {
    background-color: transparent;
    border-color: rgba(240,71,71,.3)
}
.lookOutlined-3sRXeN.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.lookGhost-2Fn_0-.colorRed-1TFJan {
    background-color: rgba(240,71,71,.1);
    color: #f04747
}
.lookGhost-2Fn_0-.colorRed-1TFJan:active {
    background-color: rgba(240,71,71,.15)
}
.lookGhost-2Fn_0-.colorRed-1TFJan:disabled {
    background-color: rgba(240,71,71,.1)
}
.lookGhost-2Fn_0-.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.lookLink-9FtZy-.colorRed-1TFJan {
    color: #f04747
}
.lookLink-9FtZy-.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.theme-dark .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:hover {
    background-color: #f04747;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: #d84040;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:hover {
    background-color: #fef6f6;
    color: #f04747
}
.theme-dark .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: #fcdada;
    color: #f04747
}
.theme-dark .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:hover {
    border-color: rgba(240,71,71,.6);
    color: #f04747
}
.theme-dark .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: rgba(240,71,71,.1);
    border-color: #f04747;
    color: #f04747
}
.theme-dark .lookGhost-2Fn_0-.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: rgba(240,71,71,.15);
    color: #f04747
}
.theme-dark .lookLink-9FtZy-.hoverRed-2NoOXI.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverRed-2NoOXI.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #f04747
}
.lookFilled-1Gx00P.colorGreen-29iAKY {
    background-color: #43b581;
    color: #fff
}
.lookFilled-1Gx00P.colorGreen-29iAKY:hover {
    background-color: #3ca374
}
.lookFilled-1Gx00P.colorGreen-29iAKY:active {
    background-color: #369167
}
.lookFilled-1Gx00P.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorGreen-29iAKY:disabled {
    background-color: #43b581
}
.lookInverted-2D7oAl.colorGreen-29iAKY {
    background-color: #fff;
    color: #43b581
}
.lookInverted-2D7oAl.colorGreen-29iAKY:hover {
    background-color: #f6fbf9
}
.lookInverted-2D7oAl.colorGreen-29iAKY:active {
    background-color: #d9f0e6
}
.lookInverted-2D7oAl.colorGreen-29iAKY:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.lookOutlined-3sRXeN.colorGreen-29iAKY {
    border-color: rgba(67,181,129,.3);
    color: #43b581
}
.lookOutlined-3sRXeN.colorGreen-29iAKY:hover {
    border-color: rgba(67,181,129,.6)
}
.lookOutlined-3sRXeN.colorGreen-29iAKY:active {
    background-color: rgba(67,181,129,.1);
    border-color: #43b581
}
.lookOutlined-3sRXeN.colorGreen-29iAKY:disabled {
    background-color: transparent;
    border-color: rgba(67,181,129,.3)
}
.lookOutlined-3sRXeN.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.lookGhost-2Fn_0-.colorGreen-29iAKY {
    background-color: rgba(67,181,129,.1);
    color: #43b581
}
.lookGhost-2Fn_0-.colorGreen-29iAKY:active {
    background-color: rgba(67,181,129,.15)
}
.lookGhost-2Fn_0-.colorGreen-29iAKY:disabled {
    background-color: rgba(67,181,129,.1)
}
.lookGhost-2Fn_0-.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.lookLink-9FtZy-.colorGreen-29iAKY {
    color: #43b581
}
.lookLink-9FtZy-.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.theme-dark .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:hover {
    background-color: #43b581;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: #3ca374;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:hover {
    background-color: #f6fbf9;
    color: #43b581
}
.theme-dark .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: #d9f0e6;
    color: #43b581
}
.theme-dark .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:hover {
    border-color: rgba(67,181,129,.6);
    color: #43b581
}
.theme-dark .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: rgba(67,181,129,.1);
    border-color: #43b581;
    color: #43b581
}
.theme-dark .lookGhost-2Fn_0-.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: rgba(67,181,129,.15);
    color: #43b581
}
.theme-dark .lookLink-9FtZy-.hoverGreen-1gjdJc.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverGreen-1gjdJc.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #43b581
}
.lookFilled-1Gx00P.colorYellow-2JqYwt {
    background-color: #faa61a;
    color: #fff
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:hover {
    background-color: #e19517
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:active {
    background-color: #c88515
}
.lookFilled-1Gx00P.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:disabled {
    background-color: #faa61a
}
.lookInverted-2D7oAl.colorYellow-2JqYwt {
    background-color: #fff;
    color: #faa61a
}
.lookInverted-2D7oAl.colorYellow-2JqYwt:hover {
    background-color: #fffbf4
}
.lookInverted-2D7oAl.colorYellow-2JqYwt:active {
    background-color: #feedd1
}
.lookInverted-2D7oAl.colorYellow-2JqYwt:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt {
    border-color: rgba(250,166,26,.3);
    color: #faa61a
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt:hover {
    border-color: rgba(250,166,26,.6)
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt:active {
    background-color: rgba(250,166,26,.1);
    border-color: #faa61a
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt:disabled {
    background-color: transparent;
    border-color: rgba(250,166,26,.3)
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt {
    background-color: rgba(250,166,26,.1);
    color: #faa61a
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt:active {
    background-color: rgba(250,166,26,.15)
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt:disabled {
    background-color: rgba(250,166,26,.1)
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.lookLink-9FtZy-.colorYellow-2JqYwt {
    color: #faa61a
}
.lookLink-9FtZy-.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.theme-dark .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:hover {
    background-color: #faa61a;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: #e19517;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:hover {
    background-color: #fffbf4;
    color: #faa61a
}
.theme-dark .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: #feedd1;
    color: #faa61a
}
.theme-dark .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:hover {
    border-color: rgba(250,166,26,.6);
    color: #faa61a
}
.theme-dark .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: rgba(250,166,26,.1);
    border-color: #faa61a;
    color: #faa61a
}
.theme-dark .lookGhost-2Fn_0-.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: rgba(250,166,26,.15);
    color: #faa61a
}
.theme-dark .lookLink-9FtZy-.hoverYellow-171chs.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverYellow-171chs.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #faa61a
}
.lookFilled-1Gx00P.colorLink-35jkBc {
    background-color: #00b0f4;
    color: #fff
}
.lookFilled-1Gx00P.colorLink-35jkBc:hover {
    background-color: #009edc
}
.lookFilled-1Gx00P.colorLink-35jkBc:active {
    background-color: #008dc3
}
.lookFilled-1Gx00P.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorLink-35jkBc:disabled {
    background-color: #00b0f4
}
.lookInverted-2D7oAl.colorLink-35jkBc {
    background-color: #fff;
    color: #00b0f4
}
.lookInverted-2D7oAl.colorLink-35jkBc:hover {
    background-color: #f2fbfe
}
.lookInverted-2D7oAl.colorLink-35jkBc:active {
    background-color: #cceffd
}
.lookInverted-2D7oAl.colorLink-35jkBc:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.lookOutlined-3sRXeN.colorLink-35jkBc {
    border-color: rgba(0,176,244,.3);
    color: #00b0f4
}
.lookOutlined-3sRXeN.colorLink-35jkBc:hover {
    border-color: rgba(0,176,244,.6)
}
.lookOutlined-3sRXeN.colorLink-35jkBc:active {
    background-color: rgba(0,176,244,.1);
    border-color: #00b0f4
}
.lookOutlined-3sRXeN.colorLink-35jkBc:disabled {
    background-color: transparent;
    border-color: rgba(0,176,244,.3)
}
.lookOutlined-3sRXeN.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.lookGhost-2Fn_0-.colorLink-35jkBc {
    background-color: rgba(0,176,244,.1);
    color: #00b0f4
}
.lookGhost-2Fn_0-.colorLink-35jkBc:active {
    background-color: rgba(0,176,244,.15)
}
.lookGhost-2Fn_0-.colorLink-35jkBc:disabled {
    background-color: rgba(0,176,244,.1)
}
.lookGhost-2Fn_0-.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.lookLink-9FtZy-.colorLink-35jkBc {
    color: #00b0f4
}
.lookLink-9FtZy-.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.theme-dark .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:hover {
    background-color: #00b0f4;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: #009edc;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:hover {
    background-color: #f2fbfe;
    color: #00b0f4
}
.theme-dark .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: #cceffd;
    color: #00b0f4
}
.theme-dark .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:hover {
    border-color: rgba(0,176,244,.6);
    color: #00b0f4
}
.theme-dark .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: rgba(0,176,244,.1);
    border-color: #00b0f4;
    color: #00b0f4
}
.theme-dark .lookGhost-2Fn_0-.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: rgba(0,176,244,.15);
    color: #00b0f4
}
.theme-dark .lookLink-9FtZy-.hoverLink-i1fEKS.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverLink-i1fEKS.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #00b0f4
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ {
    background-color: #fff;
    color: #3f225a
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ:hover {
    background-color: #e6e6e6
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ:active {
    background-color: #ccc
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ {
    background-color: #3f225a;
    color: #fff
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ:active,.lookInverted-2D7oAl.colorWhite-rEQuAQ:hover {
    background-color: #fff
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ:disabled {
    background-color: #3f225a
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ {
    border-color: hsla(0,0%,100%,.3);
    color: #fff
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {
    border-color: hsla(0,0%,100%,.6)
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #fff
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:disabled {
    background-color: transparent;
    border-color: hsla(0,0%,100%,.3)
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ {
    background-color: hsla(0,0%,100%,.1);
    color: #fff
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ:active {
    background-color: hsla(0,0%,100%,.15)
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ:disabled {
    background-color: hsla(0,0%,100%,.1)
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookLink-9FtZy-.colorWhite-rEQuAQ {
    color: #fff
}
.lookLink-9FtZy-.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:hover {
    background-color: #fff;
    color: #3f225a
}
.theme-dark .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:active {
    background-color: #e6e6e6;
    color: #3f225a
}
.theme-dark .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-dark .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:hover {
    background-color: #fff;
    color: #fff
}
.theme-dark .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:hover {
    border-color: hsla(0,0%,100%,.6);
    color: #fff
}
.theme-dark .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #fff;
    color: #fff
}
.theme-dark .lookGhost-2Fn_0-.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverWhite-2uUmXw.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.15);
    color: #fff
}
.theme-dark .lookLink-9FtZy-.hoverWhite-2uUmXw.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverWhite-2uUmXw.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #fff
}
.lookFilled-1Gx00P.colorBlack-1jwPVL {
    background-color: #040405;
    color: #fff
}
.lookFilled-1Gx00P.colorBlack-1jwPVL:hover {
    background-color: #18191c
}
.lookFilled-1Gx00P.colorBlack-1jwPVL:active {
    background-color: #221035
}
.lookFilled-1Gx00P.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorBlack-1jwPVL:disabled {
    background-color: #040405
}
.lookInverted-2D7oAl.colorBlack-1jwPVL {
    background-color: #fff;
    color: #040405
}
.lookInverted-2D7oAl.colorBlack-1jwPVL:hover {
    background-color: #18191c
}
.lookInverted-2D7oAl.colorBlack-1jwPVL:active {
    background-color: #221035
}
.lookInverted-2D7oAl.colorBlack-1jwPVL:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL {
    border-color: rgba(4,4,5,.3);
    color: #040405
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL:hover {
    border-color: rgba(4,4,5,.6)
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL:active {
    background-color: rgba(4,4,5,.1);
    border-color: #040405
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL:disabled {
    background-color: transparent;
    border-color: rgba(4,4,5,.3)
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL {
    background-color: rgba(4,4,5,.1);
    color: #040405
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL:active {
    background-color: rgba(4,4,5,.15)
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL:disabled {
    background-color: rgba(4,4,5,.1)
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.lookLink-9FtZy-.colorBlack-1jwPVL {
    color: #040405
}
.lookLink-9FtZy-.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.theme-dark .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:hover {
    background-color: #040405;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: #18191c;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:hover {
    background-color: #18191c;
    color: #040405
}
.theme-dark .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: #221035;
    color: #040405
}
.theme-dark .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:hover {
    border-color: rgba(4,4,5,.6);
    color: #040405
}
.theme-dark .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: rgba(4,4,5,.1);
    border-color: #040405;
    color: #040405
}
.theme-dark .lookGhost-2Fn_0-.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: rgba(4,4,5,.15);
    color: #040405
}
.theme-dark .lookLink-9FtZy-.hoverBlack-3jULb8.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverBlack-3jULb8.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #040405
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:active,.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:hover {
    background-color: #94367c
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:disabled {
    background-color: #3f225a
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6 {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6:hover {
    background-color: #f6f6f7
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6:active {
    background-color: #dcddde
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6:disabled {
    background-color: #f6f6f7
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6 {
    border-color: hsla(0,0%,100%,.3);
    color: #fff
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6:hover {
    border-color: hsla(0,0%,100%,.6)
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #fff
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6:disabled {
    background-color: transparent;
    border-color: hsla(0,0%,100%,.3)
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6 {
    background-color: hsla(0,0%,100%,.1);
    color: #fff
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6:active {
    background-color: hsla(0,0%,100%,.15)
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6:disabled {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .lookLink-9FtZy-.colorPrimary-3b3xI6 {
    color: #fff
}
.theme-dark .lookLink-9FtZy-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #9e9e9e;
    color: #f6f6f7
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #dcddde;
    color: #3f225a
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    border-color: hsla(0,0%,100%,.6);
    color: #fff
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #3f225a;
    color: #fff
}
.theme-dark .theme-dark .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.15);
    color: #fff
}
.theme-dark .theme-dark .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-dark .theme-light .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9 {
    background-color: hsla(0,0%,100%,.1);
    color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9:hover {
    background-color: hsla(0,0%,100%,.05)
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9:active {
    background-color: hsla(0,0%,100%,.01)
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9:disabled {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9 {
    background-color: #f6f6f7;
    color: hsla(0,0%,100%,.1)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9:hover {
    background-color: hsla(0,0%,100%,.05)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9:active {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9:disabled {
    background-color: #f6f6f7
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9 {
    border-color: rgba(220,221,222,.3);
    color: #dcddde
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9:hover {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9:active {
    background-color: rgba(220,221,222,.1);
    border-color: #dcddde
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9:disabled {
    background-color: transparent;
    border-color: rgba(220,221,222,.3)
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #dcddde
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9 {
    background-color: rgba(220,221,222,.1);
    color: #dcddde
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9:active {
    background-color: rgba(220,221,222,.15)
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9:disabled {
    background-color: rgba(220,221,222,.1)
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #dcddde
}
.theme-dark .lookLink-9FtZy-.colorTransparent-1ewNp9 {
    color: #dcddde
}
.theme-dark .lookLink-9FtZy-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #dcddde
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: hsla(0,0%,100%,.1);
    color: #f6f6f7
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.05);
    color: #f6f6f7
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: hsla(0,0%,100%,.05);
    color: hsla(0,0%,100%,.1)
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.1);
    color: hsla(0,0%,100%,.1)
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    border-color: rgba(220,221,222,.6);
    color: #dcddde
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(220,221,222,.1);
    border-color: hsla(0,0%,100%,.1);
    color: #dcddde
}
.theme-dark .theme-dark .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(220,221,222,.15);
    color: #dcddde
}
.theme-dark .theme-dark .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-dark .theme-light .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #dcddde
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
    background-color: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6:active,.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6:hover {
    background-color: #dcddde
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6:disabled {
    background-color: rgba(220,221,222,.6)
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6 {
    background-color: #3f225a;
    color: rgba(220,221,222,.6)
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6:hover {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6:active {
    background-color: #221035
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6:disabled {
    background-color: #3f225a
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: rgba(220,221,222,.6)
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6 {
    border-color: rgba(116,127,141,.3);
    color: #747f8d
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6:hover {
    border-color: rgba(116,127,141,.6)
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6:active {
    background-color: rgba(116,127,141,.1);
    border-color: #747f8d
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6:disabled {
    background-color: transparent;
    border-color: rgba(116,127,141,.3)
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6 {
    background-color: rgba(116,127,141,.1);
    color: #747f8d
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6:active {
    background-color: rgba(116,127,141,.15)
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6:disabled {
    background-color: rgba(116,127,141,.1)
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-light .lookLink-9FtZy-.colorPrimary-3b3xI6 {
    color: #747f8d
}
.theme-light .lookLink-9FtZy-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-light .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #dcddde;
    color: #3f225a
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-light .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: rgba(57, 37, 74, 0.6);
    color: rgba(220,221,222,.6)
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #221035;
    color: rgba(220,221,222,.6)
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-light .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    border-color: rgba(116,127,141,.6);
    color: #747f8d
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.1);
    border-color: rgba(220,221,222,.6);
    color: #747f8d
}
.theme-light .theme-dark .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.15);
    color: #747f8d
}
.theme-light .theme-dark .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .theme-light .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #747f8d
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9 {
    background-color: rgba(79,84,92,.01);
    color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9:hover {
    background-color: rgba(79,84,92,.2)
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.25)
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9:disabled {
    background-color: rgba(79,84,92,.01)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9 {
    background-color: #3f225a;
    color: rgba(79,84,92,.01)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9:hover {
    background-color: rgba(79,84,92,.2)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.25)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9:disabled {
    background-color: #3f225a
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: rgba(79,84,92,.01)
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9 {
    border-color: rgb(57, 37, 74, 0.3);
    color: #3f225a
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9:hover {
    border-color: rgb(57, 37, 74, 0.4)
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.1);
    border-color: #3f225a
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9:disabled {
    background-color: transparent;
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9 {
    background-color: rgba(79,84,92,.1);
    color: #3f225a
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.15)
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9:disabled {
    background-color: rgba(79,84,92,.1)
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookLink-9FtZy-.colorTransparent-1ewNp9 {
    color: #3f225a
}
.theme-light .lookLink-9FtZy-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-light .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: rgba(79,84,92,.01);
    color: #3f225a
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.2);
    color: #3f225a
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-light .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: rgba(79,84,92,.2);
    color: rgba(79,84,92,.01)
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.25);
    color: rgba(79,84,92,.01)
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-light .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    border-color: rgb(57, 37, 74, 0.4);
    color: #3f225a
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.1);
    border-color: rgba(79,84,92,.01);
    color: #3f225a
}
.theme-light .theme-dark .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.15);
    color: #3f225a
}
.theme-light .theme-dark .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .theme-light .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #3f225a
}
.lookBlank-3eh9lL {
    background: transparent;
    color: currentColor;
}
@media (-ms-high-contrast:active),(-ms-high-contrast:none) {
    .lookFilled-1Gx00P .contents-18-Yxp,.lookInverted-2D7oAl .contents-18-Yxp,.lookLink-9FtZy- .contents-18-Yxp,.lookOutlined-3sRXeN .contents-18-Yxp {
    }
}
.themeDark-3BOwlz {
    background-color: #331f44;
    color: #f6f6f7
}
.themeLight-Hp2h58 {
    background-color: #f6f6f7;
    color: #3f225a
}
.winButtonMinMax-PBQ2gm:hover {
    background-color: hsla(0,0%,100%,.05)
}
.winButtonClose-1HsbF-:hover {
    background-color: #f04747
}
.macButtonMaximize-2FMHAO {
    background-color: #34c749
}
.macButtonMaximize-2FMHAO:active {
    background-color: #2a9f3a
}
.macButtonMinimize-3EJ6wo {
    background-color: #fdbc40
}
.macButtonMinimize-3EJ6wo:active {
    background-color: #ca9633
}
.macButtonClose-MwZ2nf {
    background-color: #fc615d
}
.macButtonClose-MwZ2nf:active {
    background-color: #ca4e4a
}
.unfocused-1QsMU3 .macButtonClose-MwZ2nf,.unfocused-1QsMU3 .macButtonMaximize-2FMHAO,.unfocused-1QsMU3 .macButtonMinimize-3EJ6wo {
    background-color: #dcdcdc;
    border-color: #d1d1d1;
}
.flyingFocus-1dpIRc {
    background: transparent;
}
.scroller-2FKFPG::-webkit-scrollbar-thumb,.scroller-2FKFPG::-webkit-scrollbar-track {
    background-clip: padding-box;
}
.track-1JN30G {
    background-color: transparent;
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-light .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: #3a2648;
    border-color: transparent
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
    border-color: transparent
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL,.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .pad-29zQak,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .pad-29zQak,.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL,.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL .pad-29zQak {
    background-color: #fff
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: #3a2648
}
.scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent
}
.scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-light .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G {
    background-color: transparent
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: #221035;
    border-color: transparent
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
    border-color: transparent
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL,.scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .pad-29zQak,.theme-dark .scrollerWrap-2lJEkd .scrollbar-2rkZSL,.theme-dark .scrollerWrap-2lJEkd .scrollbar-2rkZSL .pad-29zQak,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .pad-29zQak {
    background-color: rgba(57, 37, 74, 0.6)
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .thumb-2JwNFC,.theme-dark .scrollerWrap-2lJEkd .scrollbar-2rkZSL .thumb-2JwNFC,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: #221035
}
.scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: #331f44
}
.scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G {
    background-color: #331f44
}
.scrollerThemed-2oenus.themeGhost-28MSn0 .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4);
    border-color: transparent;
}
.scrollerThemed-2oenus.themeGhost-28MSn0 .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
    border-color: transparent
}
.scrollerThemed-2oenus.themeGhost-28MSn0 .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgba(0,0,0,.4)
}
.scrollerThemed-2oenus.themeGhost-28MSn0.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
}
.scrollerThemed-2oenus.themeGhost-28MSn0.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G {
    background-color: rgba(0,0,0,.1)
}
.scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-corner,.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scroller-2FKFPG::-webkit-scrollbar-corner {
    background-color: transparent
}
.scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-track,.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
}
.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4)
}
.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-light .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-light .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgb(57, 37, 74, 0.3)
}
.scrollbar-3dvm_9::-webkit-scrollbar-corner {
    background: none;
}
.scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb,.scrollbarDefault-3COgCQ::-webkit-scrollbar-track {
    background-clip: padding-box;
}
.scrollbarGhost-2F9Zj2::-webkit-scrollbar-thumb,.scrollbarGhost-2F9Zj2::-webkit-scrollbar-track {
    background-clip: padding-box;
}
.scrollbarGhost-2F9Zj2::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.4);
    border-color: transparent
}
.scrollbarGhost-2F9Zj2::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,.1);
    border-color: transparent;
}
.scrollbarGhostHairline-1mSOM1::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4);
}
.scrollbarGhostHairline-1mSOM1::-webkit-scrollbar-track {
    background-color: transparent;
}
.theme-light .scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb {
    background-color: #3a2648;
    border-color: transparent
}
.theme-light .scrollbarDefault-3COgCQ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-color: transparent
}
.theme-dark .scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb {
    background-color: #221035;
    border-color: transparent
}
.theme-dark .scrollbarDefault-3COgCQ::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,.1);
    border-color: transparent
}
.wrapper-3Q5DdO {
    background: -webkit-gradient(linear,right top,left bottom,from(#3d4046),to(#1e1e23));
    background: linear-gradient(to left bottom,#3d4046,#1e1e23);
}
@media (min-width: 486px) {
    .wrapper-3Q5DdO {
        background:#331f44;
    }
    }
@media (min-width: 1080px) {
    .wrapper-3Q5DdO {
        background:repeat 108% 103% url(/assets/8eba753f8b6d02be1013c5e659b0fc2f.png)
    }
    }
.theme-dark .modal-3HD5ck {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .footer-2yfCgX {
    background-color: #331f44;
}
.theme-dark .close-18n9bP {
    color: #dcddde
}
.theme-dark .close-18n9bP:hover {
    background-color: rgba(220,221,222,.05)
}
.theme-light .modal-3HD5ck {
    background: #fff;
}
.theme-light .footer-2yfCgX {
    background-color: #f6f6f7;
}
.theme-light .close-18n9bP {
    color: #9e9e9e
}
.theme-light .close-18n9bP:hover {
    background-color: rgba(114,118,125,.05)
}
@media (max-width: 485px) {
    .sizeLarge-3clvAM,.sizeMedium-1fwIF2,.sizeSmall-Sf4iOi {
    }
}
.theme-dark .primary-jw0I4K {
    color: #dcddde
}
.theme-light .primary-jw0I4K {
    color: #9e9e9e
}
.white-2qwKC7,.white100-1kM2ad,.white200-3zgO-Z,.white300-9aRwFJ,.white400-18yif1,.white500-2pqdDy {
    color: #fff
}
.white600-11KClF {
    color: #adadad
}
.white700-1nH1cV {
    color: #666
}
.white800-2lRvci {
    color: #4d4d4d
}
.white900-2IvFbU {
    color: #0d0d0d
}
.black-3ZppAL {
    color: #fff
}
.black100-ebiD1f {
    color: #f2f2f2
}
.black200-SRU1nn {
    color: #ccc
}
.black300-2WwYX5 {
    color: #999
}
.black400-2Ca2WI {
    color: #333
}
.black500-33a0Ji,.black600-1uqz03,.black700-34pr70,.black800-1MBqq_,.black900-37_sCH {
    color: #000
}
.primary-2eADX4 {
    color: #3f225a
}
.primary100-NYxuUw {
    color: #f6f6f7
}
.primary200-9BaJ5z {
    color: #dcddde
}
.primary300-yKYmL9 {
    color: #b9bbbe
}
.primary400-hm0Rav {
    color: #9e9e9e
}
.primary500-wK_SoU {
    color: #3f225a
}
.primary600-2R4IzX {
    color: rgba(57, 37, 74, 0.6)
}
.primary700-2GKfND {
    color: #221035
}
.primary800-2mHx_W {
    color: #18191c
}
.primary900-2HGQCF {
    color: #040405
}
.brand-2LE5lQ {
    color: #3a2648
}
.brand100-3jKef2 {
    color: #f8f9fd
}
.brand200-3DFhWp {
    color: #e3e7f8
}
.brand300-1y8sjG {
    color: #fdecff
}
.brand400-2m4nFC {
    color: #8ea1e1
}
.brand500-14kFyd {
    color: #3a2648
}
.brand600-MLizIW {
    color: #4e5d94
}
.brand700-18nVdB {
    color: #2e3757
}
.brand800-38wrMi {
    color: #222941
}
.brand900-1MlMSM {
    color: #06070b
}
.statusRed-21U8Tp {
    color: #f04747
}
.statusRed100-TwlPw1 {
    color: #fef6f6
}
.statusRed200-xsrQMf {
    color: #fcdada
}
.statusRed300-1J8Thg {
    color: #f9b5b5
}
.statusRed400-3gJpDq {
    color: #f36c6c
}
.statusRed500-1aGPvR {
    color: #f04747
}
.statusRed600-1W1VGW {
    color: #a33030
}
.statusRed700-1NN0mD {
    color: #601c1c
}
.statusRed800-1Lcfl_ {
    color: #481515
}
.statusRed900-2xtwCw {
    color: #0c0404
}
.statusYellow-2f2HqU {
    color: #faa61a
}
.statusYellow100-1nMcXd {
    color: #fffbf4
}
.statusYellow200-3i9lAw {
    color: #feedd1
}
.statusYellow300-3V5Kq8 {
    color: #fddba3
}
.statusYellow400-3Y-MiO {
    color: #fbb848
}
.statusYellow500-3wKbiF {
    color: #faa61a
}
.statusYellow600-1G7jQl {
    color: #aa7112
}
.statusYellow700-2JMLCu {
    color: #64420a
}
.statusYellow800-3qanlx {
    color: #4b3208
}
.statusYellow900-1RnH8w {
    color: #0d0801
}
.statusGreen-pvYWjA {
    color: #43b581
}
.statusGreen100-3vETxm {
    color: #f6fbf9
}
.statusGreen200-3WYRuW {
    color: #d9f0e6
}
.statusGreen300-gUvg9Y {
    color: #b4e1cd
}
.statusGreen400-2Nkqrf {
    color: #69c49a
}
.statusGreen500-3bo2cw {
    color: #43b581
}
.statusGreen600-rE45Mq {
    color: #2e7b58
}
.statusGreen700-3cmZtt {
    color: #1b4834
}
.statusGreen800-1CCKNc {
    color: #143627
}
.statusGreen900-2PKGG8 {
    color: #030906
}
.statusGrey-3kBjBr {
    color: #747f8d
}
.statusGrey100-2v3HbE {
    color: #f8f9f9
}
.statusGrey200-1aSzEs {
    color: #e3e5e8
}
.statusGrey300-rS3XGM {
    color: #c7ccd1
}
.statusGrey400-2GJcPk {
    color: #9099a4
}
.statusGrey500-Cz7Olr {
    color: #747f8d
}
.statusGrey600-11Gxjo {
    color: #4f5660
}
.statusGrey700-1_KM9c {
    color: #331f44
}
.statusGrey800-3XPuT9 {
    color: #23262a
}
.statusGrey900-1CYxgG {
    color: #060607
}
.link-3qjLc0 {
    color: #00b0f4
}
.link100-3L2hHF {
    color: #f2fbfe
}
.link200-2cbJsF {
    color: #cceffd
}
.link300-2MKH0C {
    color: #99dffb
}
.link400-1L-A31 {
    color: #33c0f6
}
.link500-ECMy-U {
    color: #00b0f4
}
.link600-1pUBrp {
    color: #0078a6
}
.link700-3TpgS2 {
    color: #004662
}
.link800-Y2QbyE {
    color: #003549
}
.link900-2RMblN {
    color: #00090c
}
.theme-light .defaultColor-1_ajX0 {
    color: #3f225a
}
.theme-light .h5-18_1nd {
    color: #9e9e9e
}
.theme-light .faded-3bns_w {
    color: rgba(114,118,125,.6)
}
.theme-light .error-25JxNp {
    color: #f04747
}
.theme-dark .defaultColor-1_ajX0 {
    color: #f6f6f7
}
.theme-dark .h5-18_1nd {
    color: #b9bbbe
}
.theme-dark .faded-3bns_w {
    color: rgba(220,221,222,.3)
}
.theme-dark .error-25JxNp {
    color: #f04747
}
.focused-1mmYsC {
    border-color: #3a2648;
}
.theme-light .input-cIJ7To {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3);
    color: #3f225a
}
.theme-light .input-cIJ7To::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light .input-cIJ7To:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light .input-cIJ7To::placeholder {
    color: #b9bbbe
}
.theme-light .input-cIJ7To:hover {
    border-color: #b9bbbe
}
.theme-light .input-cIJ7To:focus {
    border-color: #3a2648
}
.theme-light .input-cIJ7To.disabled-2BKQFm {
    border-color: #dcddde
}
.theme-light .input-cIJ7To.error-2O5WFJ {
    border-color: #f04747
}
.theme-light .input-cIJ7To.focused-1mmYsC {
    border-color: #3a2648
}
.theme-light .input-cIJ7To.success-2-F980 {
    border-color: #43b581
}
.theme-light .inputPrefix-2VAOGg {
    color: #b9bbbe
}
.theme-light .input-cIJ7To.editable-2UkCu4 {
    background-color: transparent;
    border-color: transparent
}
.theme-dark .input-cIJ7To {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3);
    color: #f6f6f7
}
.theme-dark .input-cIJ7To::-webkit-input-placeholder {
    color: #9e9e9e
}
.theme-dark .input-cIJ7To:-ms-input-placeholder {
    color: #9e9e9e
}
.theme-dark .input-cIJ7To::placeholder {
    color: #9e9e9e
}
.theme-dark .input-cIJ7To:hover {
    border-color: #040405
}
.theme-dark .input-cIJ7To:focus {
    border-color: #3a2648
}
.theme-dark .input-cIJ7To.disabled-2BKQFm {
    border-color: #221035
}
.theme-dark .input-cIJ7To.error-2O5WFJ {
    border-color: #f04747
}
.theme-dark .input-cIJ7To.focused-1mmYsC {
    border-color: #3a2648
}
.theme-dark .input-cIJ7To.success-2-F980 {
    border-color: #43b581
}
.theme-dark .inputPrefix-2VAOGg {
    color: #dcddde;
}
.theme-dark .input-cIJ7To.editable-2UkCu4 {
    background-color: transparent;
    border-color: transparent
}
.cardDanger-ZurOv3 {
    background-color: #f04747
}
.cardDanger-ZurOv3,.cardDangerOutline-3t0Do9 {
    border-color: #f04747
}
.cardWarning-2yPNAa {
    background-color: #e19517;
    border-color: #e19517
}
.cardWarningOutline-1cs56O {
    border-color: #faa61a
}
.cardSuccess-3uEYjj {
    background-color: #43b581
}
.cardSuccess-3uEYjj,.cardSuccessOutline-1Su_ab {
    border-color: #43b581
}
.cardBrand-39zmMQ {
    background-color: #3a2648
}
.cardBrand-39zmMQ,.cardBrandOutline-3jvFfo {
    border-color: #3a2648
}
.theme-light .cardBrand-39zmMQ a,.theme-light .cardDanger-ZurOv3 a,.theme-light .cardSuccess-3uEYjj a,.theme-light .cardWarning-2yPNAa a {
    color: #fff
}
.theme-light .cardPrimary-1Hv-to {
    background-color: #f8f9f9;
    border-color: #dcddde
}
.theme-light .cardPrimary-1Hv-to a {
    color: #3f225a
}
.theme-light .cardPrimaryEditable-3KtE4g {
    background-color: rgba(246,246,247,.6);
    border-color: #dcddde
}
.theme-light .cardPrimaryOutline-29Ujqw {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .card-3Qj_Yx a {
    color: #fff
}
.theme-dark .cardPrimary-1Hv-to {
    background: rgb(57, 37, 74, 0.4);
    border-color: #221035
}
.theme-dark .cardPrimaryEditable-3KtE4g {
    border-color: rgb(139, 38, 113);
    background-color: rgb(139, 38, 113);
}
.theme-dark .cardPrimaryOutline-29Ujqw {
    border-color: rgb(57, 37, 74, 0.4)
}
.gameIcon-gg34Dz {
    background-size: 100%;
}
.theme-light .placeholder-1lCpWK {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .description-3_Ncsb,.theme-light .labelDescriptor-1PqHgD {
    color: rgba(114,118,125,.6)
}
.theme-dark .placeholder-1lCpWK {
    color: rgba(246,246,247,.3)
}
.theme-dark .description-3_Ncsb,.theme-dark .labelDescriptor-1PqHgD {
    color: #9e9e9e
}
.theme-dark .whiteText-2PPsRK,.theme-dark .whiteText-2PPsRK a,.theme-light .whiteText-2PPsRK,.theme-light .whiteText-2PPsRK a {
    color: #fff
}
.theme-light .divider-3573oO {
    background-color: rgba(185,187,190,.3)
}
.theme-dark .divider-3573oO {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .expandIconBGHovered-2qIR0q {
    background-color: rgba(220,221,222,.05)
}
.theme-light .expandIconBGHovered-2qIR0q {
    background-color: rgba(114,118,125,.05)
}
.theme-light .checkbox-1ix_J3 {
    border-color: #b9bbbe
}
.theme-light .checked-3_4uQ9 {
    background: #fff
}
.theme-dark .checkbox-1ix_J3 {
    border-color: #9e9e9e
}
.theme-dark .checked-3_4uQ9 {
    background-color: #fff;
    border-color: #fff
}
.theme-light .select-1Pkeg4 {
    color: #3f225a
}
.theme-light .placeholder-2zzSd_ {
    color: #b9bbbe
}
.theme-light .popout-2sKjHu {
    background: #fff;
    border-color: #b9bbbe;
}
.theme-light .optionNormal-12VR9V {
    color: #3f225a
}
.theme-light .optionNormal-12VR9V:hover {
    background-color: #f6f6f7
}
.theme-light .optionActive-KkAdqq {
    background-color: #dcddde
}
.theme-light .optionFocused-8MflSE {
    background-color: #f6f6f7
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4 {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4:hover {
    border-color: #b9bbbe
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4:hover .arrow-2KJjTM,.theme-light .lookFilled-1h1y05.selectOpen-hQuR6b .arrow-2KJjTM {
    color: #3f225a
}
.theme-light .lookFilled-1h1y05 .arrow-2KJjTM {
    color: #dcddde
}
.theme-light .lookMinimal-2OMO3G.select-1Pkeg4 {
    background-color: transparent
}
.theme-light .lookMinimal-2OMO3G .arrow-2KJjTM {
    color: #dcddde
}
.theme-light .lookMinimal-2OMO3G.select-1Pkeg4:hover .arrow-2KJjTM {
    color: #3f225a
}
.theme-light .lookMinimalLine-2p4HjI .selectLabel-2ltwlE {
    border-color: #dcddde
}
.theme-light .lookMinimalLine-2p4HjI.select-1Pkeg4:hover .selectLabel-2ltwlE {
    border-color: #3f225a
}
.theme-light .lookMinimalLine-2p4HjI.select-1Pkeg4:hover.selectOpen-hQuR6b .selectLabel-2ltwlE,.theme-light .lookMinimalLine-2p4HjI.selectOpen-hQuR6b .selectLabel-2ltwlE {
    border-color: transparent
}
.theme-dark .select-1Pkeg4 {
    color: #f6f6f7
}
.theme-dark .placeholder-2zzSd_ {
    color: #9e9e9e
}
.theme-dark .popout-2sKjHu {
    background: #303237;
    border-color: #221035;
}
.theme-dark .optionNormal-12VR9V {
    color: #f6f6f7
}
.theme-dark .optionNormal-12VR9V:hover {
    background-color: rgba(0,0,0,.1)
}
.theme-dark .optionActive-KkAdqq {
    background: rgba(0,0,0,.2);
    color: #f6f6f7
}
.theme-dark .optionFocused-8MflSE {
    background-color: rgba(0,0,0,.1);
    color: #f6f6f7
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4 {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover {
    border-color: #040405
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover.selectOpen-hQuR6b,.theme-dark .lookFilled-1h1y05.selectOpen-hQuR6b {
    border-color: #040405 #040405 rgba(0,0,0,.3)
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover .arrow-2KJjTM,.theme-dark .lookFilled-1h1y05.selectOpen-hQuR6b .arrow-2KJjTM {
    color: #f6f6f7
}
.theme-dark .lookFilled-1h1y05 .arrow-2KJjTM {
    color: #9e9e9e
}
.theme-dark .lookMinimal-2OMO3G.select-1Pkeg4 {
    background-color: transparent
}
.theme-dark .lookMinimal-2OMO3G .arrow-2KJjTM {
    color: #b9bbbe
}
.theme-dark .lookMinimal-2OMO3G.select-1Pkeg4:hover .arrow-2KJjTM {
    color: #f6f6f7
}
.theme-dark .lookMinimalLine-2p4HjI .selectLabel-2ltwlE {
    border-color: #b9bbbe
}
.theme-dark .lookMinimalLine-2p4HjI.select-1Pkeg4:hover .selectLabel-2ltwlE {
    border-color: #f6f6f7
}
.theme-dark .lookMinimalLine-2p4HjI.select-1Pkeg4:hover.selectOpen-hQuR6b .selectLabel-2ltwlE,.theme-dark .lookMinimalLine-2p4HjI.selectOpen-hQuR6b .selectLabel-2ltwlE {
    border-color: transparent
}
.error-3iVqOt {
    color: #f04747;
}
.splash-9yPB5w {
    background-position: 50%;
    background-size: cover;
}
.theme-dark .gameName-3S4nBI {
    color: #dcddde
}
.theme-dark .installSize-1eXbBX {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .divider-38zUJA {
    background-color: rgba(47,49,54,.6)
}
.theme-dark .premiumTerms-QoMVGx {
    color: #dcddde
}
.theme-light .wrapper-3WhCwL {
    background-color: #f1f3fb;
    color: #3a2648
}
.theme-light .wrapperHover-1GktnT:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .wrapper-3WhCwL {
    background-color: rgba(114,137,218,.1);
    color: #d163aa
}
.theme-dark .wrapperHover-1GktnT:hover {
    background-color: rgba(114,137,218,.7);
    color: #fff
}
.botTagRegular-2HEhHi {
    background: #3a2648;
    color: #fff
}
.botTagInvert-18-95s {
    background: #fff;
    color: #3a2648
}
.imageWrapperBackground-E_M6Nu {
    background: rgba(0,0,0,.05)
}
.imageError-2OefUi {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.imagePlaceholderOverlay-ETNjpn {
    background-color: rgba(0,0,0,.6)
}
.wrapper-129saQ {
    background-color: rgba(0,0,0,.6);
    color: #fff;
}
.wrapper-129saQ a:link,.wrapper-129saQ a:visited {
    color: #fff!important;
}
.embedPill-1Zntps {
    background-color: #cacbce;
}
.embedInner-1-fpTo {
    background: hsla(0,0%,97.6%,.3);
}
.embedProvider-3k5pfl {
    color: #87909c!important;
}
.embedAuthorName-3mnTWj {
    color: #3f225a!important;
}
.embedTitle-3OXDkz {
    color: #3f225a;
}
.embedTitleLink-1Zla9e {
    color: #00b0f4
}
.embedDescription-1Cuq9a {
    color: rgba(79,83,91,.9);
}
.embedVideo-3nf0O9 {
    background-color: rgba(0,0,0,.05);
}
.embedVideoAction-2BIhKO {
    background: none;
    background-size: 24px 24px;
}
.embedFooterText-28V_Wb {
    color: rgba(79,83,91,.6);
}
.embedFooterSeparator-3klTIQ {
    color: #cacbce;
}
.embedFields-2IPs5Z {
    color: rgba(57, 37, 74, 0.6);
}
.theme-dark .embedPill-1Zntps {
    background-color: #3f225a
}
.theme-dark .embedInner-1-fpTo {
    background-color: rgba(56, 26, 85, 0.3);
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .embedDescription-1Cuq9a,.theme-dark .embedFieldValue-nELq2s,.theme-dark .embedFooterText-28V_Wb,.theme-dark .embedProvider-3k5pfl {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .embedAuthorName-3mnTWj,.theme-dark .embedFieldName-NFrena,.theme-dark .embedTitle-3OXDkz {
    color: #fff!important
}
.theme-dark .embedTitleLink-1Zla9e {
    color: #0096cf!important
}
.theme-dark .embedFooterSeparator-3klTIQ {
    color: #3f225a
}
.theme-light .markup-2BOw-j {
    color: #747f8d
}
.theme-light .markup-2BOw-j a {
    color: #00b0f4
}
.theme-light .markup-2BOw-j pre {
    background: #f8f9f9;
    border-color: rgba(227,229,232,.6)
}
.theme-light .markup-2BOw-j code,.theme-light .markup-2BOw-j code.inline {
    background: #f8f9f9
}
.theme-dark .markup-2BOw-j {
    color: #dcddde
}
.theme-dark .markup-2BOw-j a {
    color: #0096cf
}
.theme-dark .markup-2BOw-j pre {
    background: rgb(57, 37, 74, 0.5);
    border-color: rgba(82, 18, 66, 0.8);
}
.theme-dark .markup-2BOw-j code, .theme-dark .markup-2BOw-j code.inline {
    background: rgb(57, 37, 74, 0.5);
}
.arrowHitbox-2_hxtQ {
    background: transparent;
}
.arrow-vOpU7R {
    color: #fff;
}
.dot-2Q_mMZ {
    background-color: #fff;
}
.theme-dark .themedPagination-3v0Dnu .arrow-vOpU7R {
    color: #fff
}
.theme-dark .themedPagination-3v0Dnu .dot-2Q_mMZ {
    background-color: #fff
}
.theme-light .themedPagination-3v0Dnu .arrow-vOpU7R {
    color: #3f225a
}
.theme-light .themedPagination-3v0Dnu .dot-2Q_mMZ {
    background-color: #3f225a
}
.image-33JSyf {
    background-clip: padding-box;
    background-color: none;
    background-position: 50%;
    background-size: 100%;
}
.status-oxiHuE {
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.online-2S838R {
    background-color: #43b581
}
.idle-3DEnRT {
    background-color: #faa61a
}
.dnd-1_xrcq {
    background-color: #f04747
}
.invisible-1kp8Z0,.offline-3qoTek,.unknown-Ms2zdV {
    background-color: #747f8d
}
.streaming-2_dnHe {
    background-color: #593695
}
.statusProfile-3ynqtt {
    background-size: 12px;
}
.statusProfile-3ynqtt.invisible-1kp8Z0,.statusProfile-3ynqtt.offline-3qoTek,.statusProfile-3ynqtt.unknown-Ms2zdV {
    background-size: 22px;
}
.typingSpinnerItem-35chrT {
    background-color: #fff;
}
.icon-2s94H- {
    color: #b9bbbe;
}
.emptyUser-3FRJaF {
    background: #3f225a;
}
.moreUsers-1s5Her {
    background-color: #3f225a;
    color: #b9bbbe;
}
.newsLink-38Naqi:hover {
    background-color: #18191c;
}
.splash-iEbXaB {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover
}
.splashBackup-2UWHIS {
    background-repeat: repeat;
    background-size: 300px
}
.title-1oZsbs {
    color: #dcddde;
}
.description-13oVu5 {
    color: #b9bbbe;
}
.subtitle-rPfx7J {
    color: #9e9e9e;
}
@-webkit-keyframes progressBarPulse-31PNyj {
    0% {
    }
    }
@keyframes progressBarPulse-31PNyj {
    0% {
    }
    }
.progressBarGlow-I1k7GJ {
    background-color: transparent;
}
.buttonShine-1CSUM8 {
    color: hsla(0,0%,100%,.1)
}
.shine-2f1uEU,.shineInner-fWUhvE {
    background-color: currentColor
}
@-webkit-keyframes Shine-2sIJ1p {
    0% {
    }
    }
@keyframes Shine-2sIJ1p {
    0% {
    }
    }
.cardIcon-3U4mwZ:before {
    background-size: 100% 100%;
}
.cardIcon-3U4mwZ:after {
    background: url(/assets/7d1147d903beea4a0654d2b60837a1d6.svg);
    background-size: 100% 100%;
}
.theme-dark .paypalInput-3MddcM,.theme-dark .paypalInput-3MddcM:focus,.theme-dark .paypalInput-3MddcM:hover,.theme-light .paypalInput-3MddcM,.theme-light .paypalInput-3MddcM:focus,.theme-light .paypalInput-3MddcM:hover {
    border-color: rgba(0,0,0,.3)
}
.Select.is-disabled>.Select-control {
    background-color: #f9f9f9
}
.Select-control {
    background-color: #fff;
    color: #333;
}
.is-open>.Select-control {
    background: #fff;
    border-color: #b3b3b3 #ccc #d9d9d9
}
.is-open>.Select-control .Select-arrow {
    border-color: transparent transparent #999;
}
.is-focused:not(.is-open)>.Select-control {
    border-color: #007eff;
}
.Select--single>.Select-control .Select-value,.Select-placeholder {
    color: #aaa;
}
.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.has-value.Select--single>.Select-control .Select-value .Select-value-label {
    color: #333
}
.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover {
    color: #007eff;
}
.Select-input>input {
    background: none transparent;
}
.Select-loading {
    border-right-color: #333;
}
.Select-clear-zone {
    color: #999;
}
.Select-clear-zone:hover {
    color: #d0021b
}
.Select-arrow {
    border-color: #999 transparent transparent;
}
.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow {
    border-top-color: #666
}
@-webkit-keyframes Select-animation-fadeIn {
    0% {
    }
    }
@keyframes Select-animation-fadeIn {
    0% {
    }
    }
.Select-menu-outer {
    background-color: #fff;
    border-top-color: #e6e6e6;
}
.Select-option {
    background-color: #fff;
    color: #666;
}
.Select-option.is-selected {
    background-color: #f5faff;
    background-color: rgba(0,126,255,.04);
    color: #333
}
.Select-option.is-focused {
    background-color: #ebf5ff;
    background-color: rgba(0,126,255,.08);
    color: #333
}
.Select-option.is-disabled {
    color: #ccc;
}
.Select-noresults {
    color: #999;
}
.Select--multi .Select-value {
    background-color: #ebf5ff;
    background-color: rgba(0,126,255,.08);
    color: #007eff;
}
.Select--multi a.Select-value-label {
    color: #007eff;
}
.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover {
    background-color: #d8eafd;
    background-color: rgba(0,113,230,.08);
    color: #0071e6
}
.Select--multi .Select-value-icon:active {
    background-color: #c2e0ff;
    background-color: rgba(0,126,255,.24)
}
.Select--multi.is-disabled .Select-value {
    background-color: #fcfcfc;
    color: #333
}
.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover {
    background-color: #fcfcfc
}
@keyframes Select-animation-spin {
    to {
    }
}
@-webkit-keyframes Select-animation-spin {
    to {
    }
}
.select-2TCrqx.error-3S-7y9 .Select .Select-control {
    border-color: #f04747
}
.select-2TCrqx.error-3S-7y9 .errorMessage-1Y9q-X {
    color: #f04747;
}
.theme-light .select-2TCrqx .has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.theme-light .select-2TCrqx .has-value.Select--single>.Select-control .Select-value .Select-value-label,.theme-light .select-2TCrqx .Select-value-label {
    color: #3f225a
}
.theme-light .select-2TCrqx .Select-control {
    background: rgba(79,84,92,.02);
}
.theme-light .select-2TCrqx .Select-control .Select-placeholder {
    color: #b9bbbe
}
.theme-light .select-2TCrqx .Select-control .Select-arrow {
    border-color: #dcddde transparent transparent
}
.theme-light .select-2TCrqx .Select-control:hover {
    border-color: #b9bbbe
}
.theme-light .select-2TCrqx .Select-control:hover .Select-arrow {
    border-color: #3f225a transparent transparent
}
.theme-light .select-2TCrqx .is-focused .Select-control {
    border-color: #b9bbbe
}
.theme-light .select-2TCrqx .is-focused .Select-control .Select-arrow {
    border-color: #3f225a transparent transparent
}
.theme-light .select-2TCrqx .is-open .Select-control {
    background: rgba(246,246,247,.3)
}
.theme-light .select-2TCrqx .is-open .Select-control .Select-arrow {
    border-color: transparent transparent #9e9e9e
}
.theme-light .select-2TCrqx .is-disabled .Select-control {
    border-color: #dcddde
}
.theme-light .select-2TCrqx .is-disabled .Select-control:hover .Select-arrow {
    border-color: #dcddde transparent transparent
}
.theme-light .select-2TCrqx .Select-menu-outer {
    border-color: #b9bbbe;
}
.theme-light .select-2TCrqx .Select-option {
    background: rgba(246,246,247,.3)
}
.theme-light .select-2TCrqx .Select-option.is-focused,.theme-light .select-2TCrqx .Select-option:hover {
    background: #f6f6f7
}
.theme-light .select-2TCrqx .Select-option.is-selected {
    background: #dcddde
}
.theme-light .select-2TCrqx .Select-input input {
    color: #3f225a
}
.theme-dark .select-2TCrqx .has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.theme-dark .select-2TCrqx .has-value.Select--single>.Select-control .Select-value .Select-value-label {
    color: #f6f6f7
}
.theme-dark .select-2TCrqx .Select-control {
    background: rgba(0,0,0,.1);
}
.theme-dark .select-2TCrqx .Select-control .Select-placeholder {
    color: #9e9e9e
}
.theme-dark .select-2TCrqx .Select-control .Select-value>.Select-value-label {
    color: #f6f6f7
}
.theme-dark .select-2TCrqx .Select-control .Select-arrow {
    border-color: #9e9e9e transparent transparent
}
.theme-dark .select-2TCrqx .Select-control:hover {
    border-color: #040405
}
.theme-dark .select-2TCrqx .Select-control:hover .Select-arrow {
    border-color: #f6f6f7 transparent transparent
}
.theme-dark .select-2TCrqx .is-focused .Select-control {
    border-color: rgba(0,0,0,.6)
}
.theme-dark .select-2TCrqx .is-focused .Select-control .Select-arrow {
    border-color: #f6f6f7 transparent transparent
}
.theme-dark .select-2TCrqx .is-open .Select-control .Select-arrow {
    border-color: transparent transparent #f6f6f7
}
.theme-dark .select-2TCrqx .is-disabled .Select-control {
    background: rgba(0,0,0,.1);
    border-color: #221035
}
.theme-dark .select-2TCrqx .is-disabled .Select-control:hover .Select-arrow {
    border-color: #9e9e9e transparent transparent
}
.theme-dark .select-2TCrqx .Select-menu-outer {
    background: #303237;
    border-color: #221035;
}
.theme-dark .select-2TCrqx .Select-menu::-webkit-scrollbar-thumb,.theme-dark .select-2TCrqx .Select-menu::-webkit-scrollbar-track-piece {
    background-clip: padding-box;
    background-color: rgba(0,0,0,.4);
    border-color: transparent;
}
.theme-dark .select-2TCrqx .Select-menu::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent
}
.theme-dark .select-2TCrqx .Select-option {
    background-color: transparent;
    color: #f6f6f7
}
.theme-dark .select-2TCrqx .Select-option.is-focused,.theme-dark .select-2TCrqx .Select-option:hover {
    background: rgba(0,0,0,.1)
}
.theme-dark .select-2TCrqx .Select-option.is-selected {
    background: rgba(0,0,0,.2)
}
.theme-dark .select-2TCrqx .Select-input input {
    color: #f6f6f7
}
.error-2YUmia a {
    color: #fff;
}
.theme-dark .error-2YUmia,.theme-light .error-2YUmia {
    background-color: #f04747;
    color: #fff
}
.colorWarning-2efEE- {
    color: #faa61a
}
.colorError-2vGbJj {
    color: #f04747
}
.theme-dark .colorPrimary-3hws2f,.theme-light .colorPrimary-3hws2f {
    color: #b9bbbe
}
.theme-dark .divider-1que2t {
    border-color: #331f44
}
.theme-dark .backButtonColor-N09dXJ {
    color: #fff
}
.theme-dark .checkboxLabel-3WoD3k {
    color: #b9bbbe
}
.theme-dark .subscriptionLegal-Bv3Hj1 {
    color: #9e9e9e
}
.theme-light .divider-1que2t {
    border-color: rgba(220,221,222,.6)
}
.theme-light .backButtonColor-N09dXJ {
    color: #3f225a
}
.theme-light .checkboxLabel-3WoD3k,.theme-light .subscriptionLegal-Bv3Hj1 {
    color: #b9bbbe
}
.theme-light .breadcrumbWrapper-WmDjgG {
    color: #b9bbbe
}
.theme-light .activeBreadcrumb-p6aw-F {
    color: #3f225a
}
.theme-dark .breadcrumbWrapper-WmDjgG {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .activeBreadcrumb-p6aw-F {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .confirmTitle-1eRa8n {
    color: #fff
}
.theme-dark .confirmBlurb-1x48XS,.theme-dark .storeTerms-3G4Jo7 {
    color: #b9bbbe
}
.theme-dark .divider-2rujXH {
    background-color: rgba(47,49,54,.6)
}
.theme-light .confirmTitle-1eRa8n {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .confirmBlurb-1x48XS,.theme-light .storeTerms-3G4Jo7 {
    color: #9e9e9e
}
.theme-light .divider-2rujXH {
    background-color: rgba(220,221,222,.6)
}
.backgroundImage-1oEgm4 {
    background-position: bottom;
    background-size: cover;
}
.theme-dark .applicationName-2QbFHn {
    color: #dcddde
}
.theme-dark .price-1ynJAt {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-light .applicationName-2QbFHn {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .price-1ynJAt {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .purchaseError-wX0KJl,.theme-light .purchaseError-wX0KJl {
    color: #f04747
}
.itemSubMenu-1vN_Yn.itemSubMenuHasScroller-1J2hmF {
    background-position-x: 149px;
}
.item-1Yvehc.danger-2dXSTE {
    color: #f04747!important
}
.item-1Yvehc.danger-2dXSTE:hover {
    color: #c73b3b!important
}
.item-1Yvehc.brand-3igrJY {
    color: #3a2648!important
}
.item-1Yvehc.brand-3igrJY:hover {
    color: #5f72b5!important
}
.item-1Yvehc.disabled-2xniQf:hover {
    background: transparent!important;
}
.theme-dark.contextMenu-HLZMGh {
    background: #18191c;
}
.theme-dark .item-1Yvehc {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .item-1Yvehc:hover {
    background: #040405;
    color: #fff
}
.theme-dark .item-1Yvehc.disabled-2xniQf {
    color: grey
}
.theme-dark .itemGroup-1tL0uz {
    border-color: hsla(0,0%,96.1%,.08)
}
.theme-dark .itemSubMenu-1vN_Yn {
    background: transparent url(/assets/1988164a7c55346d32117b151f4e319d.svg) no-repeat 155px 50%
}
.theme-dark .itemSubMenu-1vN_Yn:hover {
    background: #040405 url(/assets/e4afe52f6863408a35654a6e5fd69ba9.svg) no-repeat 155px 50%
}
.theme-light.contextMenu-HLZMGh {
    background: #fff;
}
.theme-light .item-1Yvehc {
    color: #9099a4
}
.theme-light .item-1Yvehc:hover {
    background: #f6f6f7;
    color: #747f8d
}
.theme-light .item-1Yvehc.disabled-2xniQf {
    color: #cdcdcd
}
.theme-light .itemGroup-1tL0uz {
    border-color: #f5f5f5
}
.theme-light .itemSubMenu-1vN_Yn {
    background: transparent url(/assets/1988164a7c55346d32117b151f4e319d.svg) no-repeat 155px 50%
}
.theme-light .itemSubMenu-1vN_Yn:hover {
    background: #f6f6f7 url(/assets/48072c077a73774c670f5752a21d2c5b.svg) no-repeat 155px 50%
}
.disabledButtonColor-RDvfEC {
    background-color: rgba(24,25,28,.5);
    color: rgba(246,246,247,.5);
}
.arrowSeparator-3E66m7 {
    background-color: currentColor;
}
.news-2KwXHF {
    background-color: #221035;
}
.info-P9dFwH {
    background-color: #331f44;
}
.splash-2zOS_Q {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover
}
.splashBackup-1SNkdx {
    background-repeat: repeat;
    background-size: 300px
}
.summary-2pfBY6 {
    color: rgba(246,246,247,.8);
}
.disabledButton-3apIHo {
    background-color: rgba(79,84,92,.5);
    color: rgba(246,246,247,.5);
}
.theme-dark .gamePreview-9weYR2 {
    background-color: #221035;
}
.theme-dark .gameName-1W6Ym- {
    color: #dcddde
}
.theme-dark .publisher-2ZxPEd {
    color: #9e9e9e
}
.theme-dark .body-1SVoBw {
    background-color: #331f44
}
.theme-dark .playersHeader-3xUYAQ {
    color: #b9bbbe
}
.theme-dark .playersHeaderLine-2luL7r {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .playerOverflow-3X56UI {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-light .gamePreview-9weYR2 {
    background-color: #fff;
}
.theme-light .gameName-1W6Ym- {
    color: #3f225a
}
.theme-light .publisher-2ZxPEd {
    color: #3f225a
}
.theme-light .body-1SVoBw {
    background-color: #f6f6f7
}
.theme-light .playersHeader-3xUYAQ {
    color: #9e9e9e
}
.theme-light .playersHeaderLine-2luL7r {
    background-color: #dcddde
}
.theme-light .playerOverflow-3X56UI {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.inner-2Y6JuD {
    background-color: transparent;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 36px 36px;
}
.inner-2Y6JuD:hover {
    background-color: rgba(153,170,181,.3);
    border-color: transparent;
}
.spinnerItem-3JjAoz {
    background-color: #3f225a
}
.listenAlongIcon-2WbU7U {
    color: #fff;
}
.text-AOoUen {
    color: hsla(0,0%,100%,.8)
}
.bar-3urHkF {
    background-color: hsla(0, 0%, 100%, 0.35);
}
.barInner-3NDaY_ {
    background-color: hsla(0,0%,100%,.6);
}
.activityName-1IaRLn {
    color: hsla(0,0%,100%,.8)
}
.twitchImageContainer-hVw_dv {
    background: #18191c;
}
.streamUsername-eO7oss {
    color: #dcddde;
}
.streamName-1q4JEo {
    color: #b9bbbe;
}
.streamGame-2odMhn {
    color: #9e9e9e;
}
.theme-light .activityActivityFeed-3xysim .content-3JfFJh,.theme-light .activityActivityFeed-3xysim .details-38sfDr {
    color: #3f225a
}
.theme-dark .activityActivityFeed-3xysim .content-3JfFJh,.theme-dark .activityActivityFeed-3xysim .details-38sfDr {
    color: #dcddde
}
.theme-dark .activityProfile-2bJRaP .headerText-1HLrL7,.theme-dark .activityUserPopout-2yItg2 .headerText-1HLrL7,.theme-light .activityProfile-2bJRaP .headerText-1HLrL7,.theme-light .activityUserPopout-2yItg2 .headerText-1HLrL7 {
    color: #fff
}
.theme-dark .activityProfile-2bJRaP .content-3JfFJh,.theme-dark .activityProfile-2bJRaP .details-38sfDr,.theme-dark .activityProfile-2bJRaP .name-29ETJS,.theme-dark .activityUserPopout-2yItg2 .content-3JfFJh,.theme-dark .activityUserPopout-2yItg2 .details-38sfDr,.theme-dark .activityUserPopout-2yItg2 .name-29ETJS,.theme-light .activityProfile-2bJRaP .content-3JfFJh,.theme-light .activityProfile-2bJRaP .details-38sfDr,.theme-light .activityProfile-2bJRaP .name-29ETJS,.theme-light .activityUserPopout-2yItg2 .content-3JfFJh,.theme-light .activityUserPopout-2yItg2 .details-38sfDr,.theme-light .activityUserPopout-2yItg2 .name-29ETJS {
    color: hsla(0,0%,100%,.8)
}
.image-3mN4FI {
    background-position: 50%;
    background-repeat: no-repeat;
}
.theme-dark .title-yz6amd {
    color: #f6f6f7
}
.theme-dark .body-2OD0kB {
    color: #dcddde
}
.theme-light .title-yz6amd {
    color: #3f225a
}
.theme-light .body-2OD0kB {
    color: #9e9e9e
}
.downloadApps-wbBFdZ .header-nJMe-Q {
    color: #737f8d;
}
.downloadApps-wbBFdZ .footer-1nkeBm {
    color: #99aab5;
}
.downloadApps-wbBFdZ .footer-1nkeBm a {
    color: #3a2648;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236 .icon-2Pk7pb {
    background-repeat: no-repeat;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236 p {
    color: #99aab5;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236 .downloadButton-1bWXpg {
    background-color: #99aab5;
    color: #fff;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ {
    border-color: #3a2648;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ p {
    color: #3a2648
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ .downloadButton-1bWXpg {
    background-color: #3a2648
}
.note-3kmerW textarea {
    background: transparent;
}
.note-3kmerW textarea::-moz-selection {
    background: #3a2648;
    color: #fff
}
.note-3kmerW textarea::selection {
    background: #3a2648;
    color: #fff
}
.theme-dark .note-3kmerW textarea {
    color: #b9bbbe
}
.theme-dark .note-3kmerW textarea:focus {
    background-color: #221035
}
.theme-light .note-3kmerW textarea {
    color: #87909c
}
.theme-light .note-3kmerW textarea:focus {
    background: #f3f3f3
}
.theme-dark .everyonePopout-nEbJY3 {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .header-3_S6dz {
    color: #fff
}
.theme-dark .body-2iXqIL {
    color: #b9bbbe
}
.theme-dark .buttonHint-2OxJB8 {
    color: #9e9e9e
}
.theme-dark .buttonHint-2OxJB8 strong {
    color: #b9bbbe
}
.theme-dark .footer-2aTx0s {
    background-color: rgba(32,34,37,.4);
    color: #9e9e9e
}
.theme-dark .footer-2aTx0s strong {
    color: #b9bbbe
}
.theme-light .everyonePopout-nEbJY3 {
    background-color: #fff;
}
.theme-light .header-3_S6dz {
    color: #3f225a
}
.theme-light .body-2iXqIL,.theme-light .buttonHint-2OxJB8,.theme-light .buttonHint-2OxJB8 strong {
    color: #9e9e9e
}
.theme-light .footer-2aTx0s {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .footer-2aTx0s strong {
    color: #9e9e9e
}
.quickMessage-2XpSaN {
    background: #fbfbfb;
}
.quickMessage-2XpSaN.isBlocked-3gLeZQ {
    background: #eceeef
}
#autocomplete-popout ::-webkit-input-placeholder {
    color: #dadddf;
}
#autocomplete-popout header {
    background-color: transparent;
}
#autocomplete-popout input[type=text] {
    background: none;
}
.theme-dark #autocomplete-popout .autocomplete-arrow,.theme-dark #autocomplete-popout .autocomplete-header-background {
    background-color: #221035
}
.theme-dark #autocomplete-popout h3 {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout input[type=text] {
    color: #f6f6f7
}
.theme-dark #autocomplete-popout input[type=text]::-webkit-input-placeholder {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout input[type=text]:-ms-input-placeholder {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout input[type=text]::placeholder {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout section {
    background-color: #331f44;
    color: #9e9e9e
}
.theme-dark #autocomplete-popout .row,.theme-dark #autocomplete-popout .row span {
    color: #b9bbbe
}
.theme-dark #autocomplete-popout .row.selected {
    background: -webkit-gradient(linear,left top,right top,from(rgba(40,43,48,.8)),to(#331f44));
    background: linear-gradient(90deg,rgba(40,43,48,.8),#331f44)
}
.theme-dark #autocomplete-popout .row.selected span,.theme-dark #autocomplete-popout .row:hover span {
    color: #f6f6f7
}
.theme-dark #autocomplete-popout .empty h4 {
    color: #b9bbbe
}
.theme-dark #autocomplete-popout .empty p {
    color: #9e9e9e
}
.theme-light #autocomplete-popout .autocomplete-arrow,.theme-light #autocomplete-popout .autocomplete-header-background {
    background-color: #f6f6f7
}
.theme-light #autocomplete-popout h3 {
    color: #b9bbbe
}
.theme-light #autocomplete-popout input[type=text] {
    color: #3f225a
}
.theme-light #autocomplete-popout input[type=text]::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light #autocomplete-popout input[type=text]:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light #autocomplete-popout input[type=text]::placeholder {
    color: #b9bbbe
}
.theme-light #autocomplete-popout section {
    background-color: #fff;
    color: #9e9e9e
}
.theme-light #autocomplete-popout .row,.theme-light #autocomplete-popout .row span {
    color: #9e9e9e
}
.theme-light #autocomplete-popout .row.selected {
    background: -webkit-gradient(linear,left top,right top,from(rgba(246,246,247,.8)),to(#fff));
    background: linear-gradient(90deg,rgba(246,246,247,.8),#fff)
}
.theme-light #autocomplete-popout .row.selected span,.theme-light #autocomplete-popout .row:hover span {
    color: #3f225a
}
.theme-light #autocomplete-popout .empty h4 {
    color: #9e9e9e
}
.theme-light #autocomplete-popout .empty p {
    color: #b9bbbe
}
.actionButton-VzECiy {
    background: transparent;
}
.overflowRolesPopoutHeaderText-1SW-y3 {
    color: #9e9e9e;
}
.theme-dark .actionButton-VzECiy {
    border-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .overflowRolesPopout-140n9i {
    color: hsla(0,0%,100%,.8)
}
.theme-dark .overflowRolesPopout-140n9i,.theme-dark .overflowRolesPopoutArrow-2O66oH {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-light .actionButton-VzECiy {
    border-color: #b9bbbe;
    color: #3f225a
}
.theme-light .overflowRolesPopout-140n9i {
    color: rgba(79,84,92,.8)
}
.theme-light .overflowRolesPopout-140n9i,.theme-light .overflowRolesPopoutArrow-2O66oH {
    background-color: #fff;
}
@-webkit-keyframes live-pulse-3GAxuT {
    0% {
    }
    }
@keyframes live-pulse-3GAxuT {
    0% {
    }
    }
.header-2BwW8b {
    color: #fff;
}
.headerStreaming-2FjmGz {
    background: #593695
}
.headerSpotify-zpWxgT {
    background: #1db954
}
.headerXbox-3G-4PF {
    background: #107c10
}
.headerPlaying-j0WQBV {
    background: #3a2648
}
.headerName-fajvi9,.headerTagUsernameNoNickname-2_H881 {
    color: #fff
}
.headerTag-2pZJzA {
    color: hsla(0,0%,100%,.6);
}
.headerActivityText-gcopRr {
    color: hsla(0,0%,100%,.6);
}
.headerLive-172YLb {
    color: #fff;
}
.headerLive-172YLb .headerLiveText-2NrUq_ {
    color: #fff
}
.headerLive-172YLb:hover {
    background-color: #503186
}
.headerLiveIcon-3ASKA7 {
    background-color: #f04747;
}
.activity-11LB_k {
    background-color: rgba(0,0,0,.05);
}
.body-3iLsc4 {
    background-color: #f6f6f7;
}
.bodyTitle-Y0qMQz {
    color: #9e9e9e;
}
.wumpusTooltip-65YlMT:after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
}
.theme-dark .headerNormal-T_seeN {
    background-color: #221035
}
.theme-dark .body-3iLsc4,.theme-dark .footer-1fjuF6 {
    background-color: #331f44;
    color: hsla(0,0%,100%,.8)
}
.theme-dark .footer-1fjuF6 {
    border-color: rgba(32,34,37,.3)
}
.theme-dark .quickMessage-1yeL4E {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: #23262a;
    color: hsla(0,0%,100%,.7)
}
.theme-dark .wumpusTooltip-65YlMT {
    background: #fff;
    color: #3f225a
}
.theme-dark .wumpusTooltip-65YlMT:after {
    border-right-color: #fff
}
.theme-dark .protip-YaFfgO {
    color: #b9bbbe
}
.theme-light .headerNormal-T_seeN {
    background-color: #f6f6f7
}
.theme-light .headerNormal-T_seeN .headerTag-2pZJzA {
    color: #b9bbbe
}
.theme-light .headerNormal-T_seeN .headerName-fajvi9,.theme-light .headerNormal-T_seeN .headerTagUsernameNoNickname-2_H881 {
    color: #3f225a
}
.theme-light .body-3iLsc4,.theme-light .footer-1fjuF6 {
    background-color: #fff;
    color: rgba(79,84,92,.8)
}
.theme-light .footer-1fjuF6 {
    border-color: rgba(185,187,190,.3)
}
.theme-light .wumpusTooltip-65YlMT {
    background: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .wumpusTooltip-65YlMT:after {
    border-right-color: rgba(220,221,222,.6)
}
.theme-light .protip-YaFfgO {
    color: #9099a4
}
.checkbox .checkbox-inner input[type=checkbox]:checked+span {
    background-color: #3a2648;
    border-color: #3a2648
}
.checkbox .checkbox-inner input[type=checkbox]:checked+span:after {
    border-color: #fff;
}
.checkbox .checkbox-inner input[type=checkbox]:disabled+span {
    background-color: #f3f3f3;
    border-color: #cdcdcd;
}
.checkbox .checkbox-inner input[type=checkbox]:checked:disabled+span {
    background-color: #fdecff;
    border-color: #fdecff
}
.checkbox .checkbox-inner.alt input[type=checkbox]+span {
    background: #fff;
    border-color: #fff
}
.checkbox .checkbox-inner.alt input[type=checkbox]:checked+span:after {
    border-color: #3a2648
}
.theme-dark .checkbox .checkbox-inner span {
    border-color: hsla(0, 0%, 100%, 0.35)
}
.mediaHint-2uAG3H {
    color: #fff;
}
.mediaHint-2uAG3H:after {
    background: url(/assets/5bac8a5909510f58c12ee6ae724eecbb.svg) 50% no-repeat;
    background-size: 126px 76px;
}
.barFill-23-gu- {
    background: #3a2648;
}
.grabber-3mFHz2 {
    background-color: #fff;
}
.bubble-3we2di {
    color: #f6f6f7;
}
.theme-light .bar-2Qqk5Z {
    background: #dcddde
}
.theme-light .markValue-2DwdXI {
    color: #b9bbbe
}
.theme-light .markDash-3hAolZ {
    background: #dcddde
}
.theme-light .bubble-3we2di {
    background-color: #3f225a
}
.theme-light .bubble-3we2di:before {
    border-top-color: #3f225a
}
.theme-dark .bar-2Qqk5Z {
    background: #3f225a
}
.theme-dark .markValue-2DwdXI {
    color: #9e9e9e
}
.theme-dark .markDash-3hAolZ {
    background: #3f225a
}
.theme-dark .bubble-3we2di {
    background-color: #9e9e9e
}
.theme-dark .bubble-3we2di:before {
    border-top-color: #9e9e9e
}
.maxLength-39QFBo {
    color: #9e9e9e;
}
.size-3rFEHg:after {
    background-color: #fff;
}
.size-3rFEHg:active:after {
    background-color: #f6f6f7
}
.themeDefault-24hCdX {
    background-color: #9e9e9e
}
.themeDefault-24hCdX:before {
    background-color: #000
}
.themeDefault-24hCdX.valueChecked-m-4IJZ {
    background-color: #3a2648
}
.themeClear-1EjkE4 {
    background: transparent
}
.themeClear-1EjkE4.valueChecked-m-4IJZ {
    background-color: #3a2648
}
.themeClear-1EjkE4.valueUnchecked-2lU_20 {
    background-color: transparent
}
.theme-dark .title-31JmR4 {
    color: #f6f6f7
}
.theme-light .title-31JmR4 {
    color: #3f225a
}
.avatar-large,.avatar-profile,.avatar-small,.avatar-xlarge,.avatar-xsmall,.avatar-xxlarge {
    background-clip: padding-box;
    background-color: none;
    background-position: 50%;
}
.avatar-large .status,.avatar-profile .status,.avatar-small .status,.avatar-xlarge .status,.avatar-xsmall .status,.avatar-xxlarge .status {
    background-clip: padding-box;
}
.avatar-profile {
    background-size: 128px 128px;
}
.avatar-popout {
    background-size: 90px 90px;
}
.avatar-xxxlarge {
    background-size: 128px 128px;
}
.avatar-xxlarge {
    background-size: 100px 100px;
}
.avatar-xxlarge .status {
    background-clip: border-box;
}
.avatar-xlarge {
    background-size: 60px 60px;
}
.avatar-large {
    background-size: 40px 40px;
}
.avatar-xsmall {
    background-size: 20px 20px;
}
.avatar-small {
    background-size: 30px 30px;
}
.fromToWrapper-LEJK5w {
    background: no-repeat 50% 0;
}
.theme-dark .to-2819fF {
    background-color: #331f44;
}
.theme-light .to-2819fF {
    background-color: #f6f6f7;
}
.theme-light .hljs {
    background: #fdf6e3;
    color: #657b83;
}
.theme-light .hljs-comment,.theme-light .hljs-quote {
    color: #586e75
}
.theme-light .hljs-addition,.theme-light .hljs-keyword,.theme-light .hljs-selector-tag {
    color: #859900
}
.theme-light .hljs-doctag,.theme-light .hljs-literal,.theme-light .hljs-meta .hljs-meta-string,.theme-light .hljs-number,.theme-light .hljs-regexp,.theme-light .hljs-string {
    color: #2aa198
}
.theme-light .hljs-name,.theme-light .hljs-section,.theme-light .hljs-selector-class,.theme-light .hljs-selector-id,.theme-light .hljs-title {
    color: #268bd2
}
.theme-light .hljs-attr,.theme-light .hljs-attribute,.theme-light .hljs-class .hljs-title,.theme-light .hljs-template-variable,.theme-light .hljs-type,.theme-light .hljs-variable {
    color: #b58900
}
.theme-light .hljs-bullet,.theme-light .hljs-link,.theme-light .hljs-meta,.theme-light .hljs-meta .hljs-keyword,.theme-light .hljs-selector-attr,.theme-light .hljs-selector-pseudo,.theme-light .hljs-subst,.theme-light .hljs-symbol {
    color: #cb4b16
}
.theme-light .hljs-built_in,.theme-light .hljs-deletion {
    color: #dc322f
}
.theme-light .hljs-formula {
    background: #073642
}
.theme-dark .hljs-comment,.theme-dark .hljs-quote {
    color: #586e75
}
.theme-dark .hljs-addition,.theme-dark .hljs-keyword,.theme-dark .hljs-selector-tag {
    color: #859900
}
.theme-dark .hljs-doctag,.theme-dark .hljs-literal,.theme-dark .hljs-meta .hljs-meta-string,.theme-dark .hljs-number,.theme-dark .hljs-regexp,.theme-dark .hljs-string {
    color: #2aa198
}
.theme-dark .hljs-name,.theme-dark .hljs-section,.theme-dark .hljs-selector-class,.theme-dark .hljs-selector-id,.theme-dark .hljs-title {
    color: #268bd2
}
.theme-dark .hljs-attr,.theme-dark .hljs-attribute,.theme-dark .hljs-class .hljs-title,.theme-dark .hljs-template-variable,.theme-dark .hljs-type,.theme-dark .hljs-variable {
    color: #b58900
}
.theme-dark .hljs-bullet,.theme-dark .hljs-link,.theme-dark .hljs-meta,.theme-dark .hljs-meta .hljs-keyword,.theme-dark .hljs-selector-attr,.theme-dark .hljs-selector-pseudo,.theme-dark .hljs-subst,.theme-dark .hljs-symbol {
    color: #cb4b16
}
.theme-dark .hljs-built_in,.theme-dark .hljs-deletion {
    color: #dc322f
}
.theme-dark .hljs-formula {
    background: #073642
}
.scroller-wrap .scroller::-webkit-scrollbar-thumb,.scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-clip: padding-box;
    background-color: #3a2648;
}
.scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-color: #f3f3f3
}
.scroller-wrap .scrollbar {
    background-color: #fff;
}
.scroller-wrap .scrollbar:after {
    background-color: #fff;
}
.scroller-wrap .scrollbar .track {
    background: #f3f3f3;
}
.scroller-wrap .scrollbar .thumb {
    background-color: #fff;
}
.scroller-wrap .scrollbar .thumb:after {
    background-color: #3a2648;
}
.scroller-wrap.dark .scroller::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.4);
    border-color: transparent
}
.scroller-wrap.dark .scroller::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent
}
.scroller-wrap.dark .scrollbar,.scroller-wrap.dark .scrollbar:after {
    background-color: #331f44
}
.scroller-wrap.dark .scrollbar .track {
    background-color: transparent
}
.scroller-wrap.dark .scrollbar .thumb {
    background-color: #331f44
}
.scroller-wrap.dark .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.scroller-wrap.light .scroller::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.4);
    border-color: transparent
}
.scroller-wrap.light .scroller::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent
}
.scroller-wrap.light .scrollbar,.scroller-wrap.light .scrollbar:after {
    background-color: #f3f3f3
}
.scroller-wrap.light .scrollbar .track {
    background-color: transparent
}
.scroller-wrap.light .scrollbar .thumb {
    background-color: #f3f3f3
}
.scroller-wrap.light .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.spinner-wandering-cubes .spinner-item {
    background-color: #3a2648;
}
@-webkit-keyframes spinner-wandering-cubes {
    25% {
    }
    }
@keyframes spinner-wandering-cubes {
    25% {
    }
    }
.spinner-chasing-dots .spinner-item {
    background-color: #3a2648;
}
@-webkit-keyframes spinner-chasing-dots-rotate {
    to {
    }
}
@keyframes spinner-chasing-dots-rotate {
    to {
    }
}
@-webkit-keyframes spinner-chasing-dots-bounce {
    0%,to {
    }
    }
@keyframes spinner-chasing-dots-bounce {
    0%,to {
    }
    }
.spinner-pulsing-ellipsis .spinner-item {
    background-color: #99aab5;
}
@-webkit-keyframes spinner-ellipsis {
    0% {
    }
    }
@keyframes spinner-ellipsis {
    0% {
    }
    }
@-webkit-keyframes spinner-spinning-circle-rotate {
    to {
    }
}
@keyframes spinner-spinning-circle-rotate {
    to {
    }
}
@-webkit-keyframes spinner-spinning-circle-dash {
    0% {
    }
    }
@keyframes spinner-spinning-circle-dash {
    0% {
    }
    }
#oauth2-message {
    background-color: #581743;
}
#oauth2-message .oauth2-message-icon {
    background-position: 50%;
    background-repeat: no-repeat;
}
#oauth2-message .oauth2-message-icon-x {
    background-size: 92px 92px;
}
#oauth2-message .oauth2-message-icon-check {
    background-size: 158px 130px;
}
#oauth2-message .oauth2-message-text {
    color: #fff;
}
#oauth2-message .oauth2-message-subtext {
    color: hsla(0,0%,100%,.4);
}
#oauth2-authorize {
    background-color: #581743;
}
#oauth2-authorize .authorize-inner {
    background: #35383c;
}
#oauth2-authorize .authorize-inner:before {
    background: url(/assets/5c5bb53489a0a9f602df0a24c5981523.svg) 50% no-repeat;
}
#oauth2-authorize .authorize-inner header {
    background: #3a2648;
}
#oauth2-authorize .authorize-inner header .application-name>:first-child {
    color: hsla(0,0%,100%,.4);
}
#oauth2-authorize .authorize-inner header .application-name>:last-child {
    color: #fff;
}
#oauth2-authorize .authorize-inner header .application-icon {
    background: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner header .application-icon .application-icon-inner {
    background: url(/assets/1afb8f8e80a200ef3aa11131c0c07934.png) 50% no-repeat;
    background-size: 92px;
}
#oauth2-authorize .authorize-inner .captcha label {
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes label {
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-check {
    background: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-check .scope-check-inner {
    background-color: #747f8d;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 13px;
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-inner .scope-name {
    color: #fff;
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-inner .scope-description {
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-inner .scope-error {
    color: #f04747
}
#oauth2-authorize .authorize-inner .scopes .scope.allow .scope-check-inner {
    background-color: #43b581;
}
#oauth2-authorize .authorize-inner .security-notice {
    background: #494b4f;
    color: hsla(0,0%,100%,.6);
}
#oauth2-authorize .authorize-inner .security-notice .security-notice-icon {
    background: url(/assets/070055737be7cc01fb3d27820574133e.png) 50% no-repeat;
    background-size: 9px 12px;
}
#oauth2-authorize .authorize-inner footer button {
    background: none;
    color: #fff;
}
#oauth2-authorize .authorize-inner footer button.primary {
    background: #3a2648;
}
#oauth2-authorize .authorize-inner footer button.primary:hover {
    background: #4e5d94;
}
#oauth2-authorize .select select {
    background: #35383c;
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .select select:active,#oauth2-authorize .select select:focus {
    border-color: #3a2648
}
#oauth2-authorize .select:after {
    border-top-color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .select.focus:after {
    border-top-color: #3a2648
}
#oauth2-authorize .select.has-value select {
    color: #fff
}
#oauth2-authorize .scope-bot .avatar-large {
    background-color: #3a2648;
    color: #fff;
}
#oauth2-authorize .bot-permissions ul li {
    color: #fff;
}
#oauth2-authorize .bot-permissions ul li.disallowed {
    color: hsla(0,0%,100%,.3);
}
#oauth2-authorize .bot-permissions ul li.disallowed .checkbox-inner span {
    border-color: hsla(0,0%,100%,.6)
}
@media only screen and (max-width: 500px) {
    #oauth2-authorize .authorize-inner {
    }
    }
#oauth2-authorize.no-background,#oauth2-authorize.no-background .authorize-inner:before {
    background: none
}
a {
    color: #00b0f4;
}
body {
    background: transparent;
}
#unsupported-browser {
    background: #1b242b;
}
#unsupported-browser h1 {
    color: #fff;
}
#unsupported-browser p {
    color: #949494;
}
#unsupported-browser li {
    color: #fff;
}
#unsupported-browser li:hover {
    border-color: #3a2648;
}
#unsupported-browser li:hover .browser {
    background-position-y: 100px
}
#unsupported-browser li:hover .btn {
    background-color: #3a2648;
    border-color: #3a2648;
    color: #fff
}
#unsupported-browser .browser {
    background: url(/assets/5d57632291e09c5bc2b5d6a0b20179fa.png);
    background-size: 400px 200px;
}
#unsupported-browser .browser.browser-discord {
    background-position-x: 0
}
#unsupported-browser .browser.browser-opera {
    background-position-x: 100px
}
#unsupported-browser .browser.browser-firefox {
    background-position-x: 200px
}
#unsupported-browser .browser.browser-chrome {
    background-position-x: 300px
}
#unsupported-browser .btn {
    background: transparent;
    color: #fff;
}
.popout-3sVMXz header {
    background-color: rgba(115,139,215,.98);
    color: #fff;
}
.popout-3sVMXz section {
    background-color: hsla(0,0%,100%,.98);
}
.popout-3sVMXz p {
    color: #8a8e94;
}
.popoutLeft-30WmrD header:before {
    border-left-color: #3a2648;
}
.popoutRight-2ZVwL- header:before {
    border-right-color: #3a2648;
}
.popoutBottom-1YbShG header:before,.popoutBottomLeft-JehOp2 header:before,.popoutBottomRight-2JrySt header:before {
    border-bottom-color: #3a2648;
}
.popoutTopRight-3BzFIE section:before,.popoutTop-3uu9vG section:before {
    border-top-color: rgba(0,0,0,.08);
}
.popoutTopRight-3BzFIE section:after,.popoutTop-3uu9vG section:after {
    border-top-color: #fff;
}
.popoutTopLeft-b5Eb3O section:before {
    border-top-color: rgba(0,0,0,.08);
}
.popoutTopLeft-b5Eb3O section:after {
    border-top-color: #fff;
}
.popoutInvert-3UdKhn:not(.popoutBottom-1YbShG).popoutTop-3uu9vG header:before,.popoutInvert-3UdKhn:not(.popoutBottom-1YbShG).popoutTopRight-3BzFIE header:before {
    border-top-color: #3a2648;
}
.themedPopout-25DgLi {
    background-color: #fff;
}
.themedPopout-25DgLi .header-SsaQ8X .title-23FrqZ {
    color: #737f8d;
}
.themedPopout-25DgLi .header-SsaQ8X .subtitle-37ivwK {
    color: rgba(115,127,141,.3);
}
.themedPopout-25DgLi .footer-SRC48P {
    background-color: rgba(153,170,181,.1);
}
.themedPopout-25DgLi .footer-SRC48P .tip-2WErbi .body-1CHPZz {
    color: hsla(0,0%,100%,.6)
}
.tooltip {
    color: #dcddde;
}
.tooltip.tooltip-black {
    background-color: #2a163c;
}
.tooltip.tooltip-black.tooltip-top:after {
    border-top-color: #2a163c
}
.tooltip.tooltip-black.tooltip-bottom:after {
    border-bottom-color: #2a163c
}
.tooltip.tooltip-black.tooltip-left:after {
    border-left-color: #2a163c
}
.tooltip.tooltip-black.tooltip-right:after {
    border-right-color: #2a163c
}
.tooltip.tooltip-brand {
    background-color: #3a2648;
    color: #f8f9fd
}
.tooltip.tooltip-brand.tooltip-top:after {
    border-top-color: #3a2648
}
.tooltip.tooltip-brand.tooltip-bottom:after {
    border-bottom-color: #3a2648
}
.tooltip.tooltip-brand.tooltip-left:after {
    border-left-color: #3a2648
}
.tooltip.tooltip-brand.tooltip-right:after {
    border-right-color: #3a2648
}
.tooltip.tooltip-red {
    background-color: #f04747;
    color: #fef6f6
}
.tooltip.tooltip-red.tooltip-top:after {
    border-top-color: #f04747
}
.tooltip.tooltip-red.tooltip-bottom:after {
    border-bottom-color: #f04747
}
.tooltip.tooltip-red.tooltip-left:after {
    border-left-color: #f04747
}
.tooltip.tooltip-red.tooltip-right:after {
    border-right-color: #f04747
}
.tooltip.tooltip-green {
    background-color: #43b581;
    color: #f6fbf9
}
.tooltip.tooltip-green.tooltip-top:after {
    border-top-color: #43b581
}
.tooltip.tooltip-green.tooltip-bottom:after {
    border-bottom-color: #43b581
}
.tooltip.tooltip-green.tooltip-left:after {
    border-left-color: #43b581
}
.tooltip.tooltip-green.tooltip-right:after {
    border-right-color: #43b581
}
.tooltip.tooltip-yellow {
    background-color: #faa61a;
    color: #fffbf4
}
.tooltip.tooltip-yellow.tooltip-top:after {
    border-top-color: #faa61a
}
.tooltip.tooltip-yellow.tooltip-bottom:after {
    border-bottom-color: #faa61a
}
.tooltip.tooltip-yellow.tooltip-left:after {
    border-left-color: #faa61a
}
.tooltip.tooltip-yellow.tooltip-right:after {
    border-right-color: #faa61a
}
.verifyConnectedAccount-3WFmtE {
    background: url(/assets/d20e43cdcadf850cfd8d4e953df0f3b4.png) 0 0 repeat;
    background-color: #581743;
    color: #fff;
}
.verifyConnectedAccount-3WFmtE .logos-pt9vV6 .logosDivider-2K41nn {
    background-size: 28px 28px;
}
.verifyConnectedAccount-3WFmtE .logos-pt9vV6 .logo-TOCUPc {
    background-size: 88px 88px;
}
.verifyConnectedAccount-3WFmtE .message-bWw5KR.error-2hdVlS {
    color: #f04747
}
.verifyConnectedAccount-3WFmtE .btn-3HQv6W .spinnerItem-3hBt_K {
    background-color: #fff;
}
.verifyConnectedAccount-3WFmtE .btn-3HQv6W:disabled {
    background-color: #331f44;
}
.container-16j22k {
    background-color: #331f44;
}
.problems-3mgf6w {
    color: #fff;
}
.problemsText-1Yx-Kl {
    color: #9e9e9e;
}
.twitterLink-3NsWMp:before {
    background: url(/assets/31dd73caae6b4f9011d95f5b3efc15a1.svg) 50% no-repeat;
    background-size: 16px 12px;
}
.statusLink-gFXhrL:before {
    background: url(/assets/3c1cec05bfad03b1495eccf72c38b10c.svg) 50% no-repeat;
    background-size: 14px 14px;
}
.contentBase-11jeVK {
    color: #9e9e9e;
}
.attribution-aTC3hS a {
    color: hsla(0,0%,100%,.6);
}
.quote-3aooyW {
    color: #fff;
}
@media (max-width: 900px) {
    .personalizationNoticeButtons-2s7soE {
    }
    }
.theme-dark .personalizationNotice-2HTAH2 {
    background-color: rgb(57, 37, 74, 0.3);
    border-color: #331f44;
    color: #b9bbbe
}
.theme-light .personalizationNotice-2HTAH2 {
    background-color: #fff;
    border-color: #dcddde;
    color: #3f225a
}
.headerButtonColor-G7_f-V {
    background: #3f225a;
    color: #fff
}
.coverArtPosition-1EkmxA {
    background-position-x: 50%;
    background-position-y: 40%;
    background-repeat: no-repeat;
    background-size: cover;
}
.theme-dark .card-7JP0BX {
    background-color: rgba(57, 37, 74, 0.6);
    color: #f6f6f7
}
.theme-dark .header-1RC2Wb {
    background-color: #331f44
}
.theme-dark .header-1RC2Wb:hover {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .body-SKIE6r {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-light .card-7JP0BX {
    background-color: #f6f6f7;
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .header-1RC2Wb {
    background-color: rgba(220,221,222,.6)
}
.theme-light .header-1RC2Wb:hover {
    background-color: #dcddde
}
.theme-light .body-SKIE6r {
    background-color: #fff
}
.theme-dark .sectionTitle-1snBOS {
    color: #b9bbbe
}
.theme-dark .sectionLine-JjseS9 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .sectionTitle-1snBOS {
    color: #9e9e9e
}
.theme-light .sectionLine-JjseS9 {
    background-color: rgba(220,221,222,.6)
}
.theme-dark .userList-1kLH8B {
    border-color: #221035
}
.theme-dark .userList-1kLH8B:before {
    background-color: #331f44;
    border-bottom-color: #221035;
    border-right-color: #221035
}
.theme-dark .header-2B7Ri8 {
    background-color: #221035;
    color: #fff
}
.theme-dark .content-2KAjC9 {
    background-color: #331f44
}
.theme-dark .username-2lEtrk {
    color: #dcddde
}
.theme-dark .discriminator-1fGEDN {
    color: #9e9e9e
}
.theme-light .userList-1kLH8B {
    border-color: #f6f6f7
}
.theme-light .userList-1kLH8B:before {
    background-color: #fff;
    border-bottom-color: #f6f6f7;
    border-right-color: #f6f6f7
}
.theme-light .header-2B7Ri8 {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-light .content-2KAjC9 {
    background-color: #fff
}
.theme-light .username-2lEtrk {
    color: #3f225a
}
.theme-light .discriminator-1fGEDN {
    color: #b9bbbe
}
.theme-light .ui-standard-sidebar-view {
    background: #fff
}
.theme-light .ui-standard-sidebar-view .sidebar-region {
    background: #f3f3f4
}
.theme-light .ui-standard-sidebar-view .content-region {
    background: #fff
}
.theme-dark .ui-standard-sidebar-view {
    background: rgba(57, 37, 74, 0.6)
}
.theme-dark .ui-standard-sidebar-view .sidebar-region {
    background: #331f44
}
.theme-dark .ui-standard-sidebar-view .content-region {
    background: rgba(57, 37, 74, 0.6)
}
.theme-light .keybind-KpFkfr {
    color: #dcddde
}
.theme-light .closeButton-1tv5uR {
    border-color: #dcddde
}
.theme-light .closeButton-1tv5uR:hover {
    background-color: #f6f6f7
}
.theme-dark .keybind-KpFkfr {
    color: #9e9e9e
}
.theme-dark .closeButton-1tv5uR {
    border-color: #9e9e9e
}
.theme-dark .closeButton-1tv5uR:hover {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .keybindBold-1942Wp {
    color: #b9bbbe
}
.theme-dark .closeButtonBold-8kKURP {
    border-color: #b9bbbe
}
.theme-dark .closeButtonBold-8kKURP:hover {
    background-color: rgba(185,187,190,.3)
}
.theme-light .header-2RyJ0Y {
    color: #b9bbbe
}
.theme-dark .header-2RyJ0Y {
    color: #9e9e9e
}
.theme-light .itemDefault-3Jdr52,.theme-light .itemHover-EnbcjT {
    color: #9e9e9e
}
.theme-dark .itemDefault-3Jdr52,.theme-dark .itemHover-EnbcjT {
    color: #b9bbbe
}
.theme-light .separator-gCa7yv {
    background-color: rgba(185,187,190,.3)
}
.theme-dark .separator-gCa7yv {
    background-color: rgba(114,118,125,.3)
}
.theme-light .side-8zPYf6 .itemDefault-3Jdr52:hover,.theme-light .side-8zPYf6 .itemHover-EnbcjT:hover {
    background-color: rgba(79,84,92,.1);
    color: #3f225a
}
.theme-dark .side-8zPYf6 .itemDefault-3Jdr52:hover,.theme-dark .side-8zPYf6 .itemHover-EnbcjT:hover {
    background-color: rgba(185,187,190,.1);
    color: #f6f6f7
}
.side-8zPYf6 .itemSelected-1qLhcL {
    background-color: #3a2648;
    color: #fff
}
.theme-light .top-28JiJ- .itemDefault-3Jdr52:hover,.theme-light .top-28JiJ- .itemHover-EnbcjT:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark .top-28JiJ- .itemDefault-3Jdr52:hover,.theme-dark .top-28JiJ- .itemHover-EnbcjT:hover {
    color: #fff
}
.theme-dark .top-28JiJ- .itemSelected-1qLhcL {
    border-bottom-color: #fff;
    color: #fff
}
.theme-light .top-28JiJ- .itemSelected-1qLhcL {
    border-bottom-color: rgba(57, 37, 74, 0.6);
    color: rgba(57, 37, 74, 0.6)
}
@-webkit-keyframes uploadIconAnimateInLeft-lEUOPh {
    0% {
    }
    }
@keyframes uploadIconAnimateInLeft-lEUOPh {
    0% {
    }
    }
@-webkit-keyframes uploadIconAnimateInMiddle-3DqCs3 {
    0% {
    }
    }
@keyframes uploadIconAnimateInMiddle-3DqCs3 {
    0% {
    }
    }
@-webkit-keyframes uploadIconAnimateInRight-KUAMIW {
    0% {
    }
    }
@keyframes uploadIconAnimateInRight-KUAMIW {
    0% {
    }
    }
@-webkit-keyframes uploadModalShake-1PBhUb {
    10%,90% {
    }
    }
@keyframes uploadModalShake-1PBhUb {
    10%,90% {
    }
    }
@-webkit-keyframes uploadTextFadeIn-3vkVkM {
    0%,8.334% {
    }
    }
@keyframes uploadTextFadeIn-3vkVkM {
    0%,8.334% {
    }
    }
@-webkit-keyframes uploadModalBounceTransition-2UbjF9 {
    0% {
    }
    }
@keyframes uploadModalBounceTransition-2UbjF9 {
    0% {
    }
    }
@-webkit-keyframes uploadModalBounce-30cglS {
    0% {
    }
    }
@keyframes uploadModalBounce-30cglS {
    0% {
    }
    }
.uploadArea-3QgLtW {
    background: rgba(0,0,0,.8);
    color: #fff;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2 {
    background-color: #f04747;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2 a {
    color: hsla(0,0%,100%,.7);
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2 a:hover {
    color: #fff
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc {
    background: #3a2648;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo {
    color: #fff;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo .instructions-2Du9gG {
    color: hsla(0,0%,100%,.6);
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo .icon-kyxXVr {
    border: 2px solid #852379;
}
.uploadModal-2ifh8j {
    background-color: #3a2648;
}
.uploadModal-2ifh8j .inner-3nWsbo {
    border: 2px dashed #882575;
}
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr {
    background-position: 50%;
    background-repeat: no-repeat;
}
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.image-2yrs5j {
    border: 2px solid #882575;
}
.uploadModal-2ifh8j .footer-3mqk7D {
    background-color: #6f1357;
}
.uploadModal-2ifh8j .footer-3mqk7D .button {
    background-color: #4a0f49;
}
.uploadModal-2ifh8j .footer-3mqk7D .button-primary {
    background-color: #fff0ff;
    color: #882575;
}
.content-P4SiGI {
    color: #fff;
}
.avatar-uploader .size-info {
    color: #87909c;
}
.avatar-uploader-inner {
    background-color: #3a2648;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 128px 128px;
}
.avatar-uploader-inner>* {
    color: #fff;
}
.avatar-uploader-indicator {
    background-position: 50%;
    background-repeat: no-repeat;
}
.theme-light .avatar-uploader .remove-button {
    color: #b9bbbe
}
.theme-light .avatar-uploader .remove-button:hover {
    color: #9e9e9e
}
.theme-light .avatar-uploader-indicator {
    background-color: #fff;
}
.theme-dark .avatar-uploader .remove-button {
    color: #b9bbbe
}
.theme-dark .avatar-uploader .remove-button:hover {
    color: #9e9e9e
}
.theme-dark .avatar-uploader-indicator {
    background-color: #dcddde;
}
.regionSelect-3lf4eE {
    background-color: transparent;
}
.regionSelect-3lf4eE button {
    background-color: transparent;
    color: #3a2648;
}
.regionSelect-3lf4eE:hover .regionSelectInner-24f4Ce,.regionSelect-3lf4eE:hover button {
    border-color: #3a2648
}
.regionSelect-3lf4eE:hover button {
    background-color: #3a2648;
    color: #fff
}
.regionSelectFlag-3uwFtG {
    background-color: #3a2648;
    background-size: 44px 30px;
}
.vip-1SuRbe:after {
    background: #3a2648;
    color: #fff;
}
.regionSelectName-2-2FWh {
    color: #99aab5;
}
.regionSelectModal-12e-57 {
    background: #fff;
}
.regionSelectModal-12e-57 .regionSelectModalHeader-21khC1 {
    color: #3a2648;
}
.regionSelectModal-12e-57 .regionSelectModalFooter-20C5iA {
    color: #87909c;
}
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3 {
    background-color: #fff;
}
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3:hover {
    border-color: #3a2648;
}
.colorConnectedText-1c_uzY,.colorConnectedVoice-3kyvUN,.colorDefaultText-oas-QM,.colorDefaultVoice-3wYlhb,.colorHoveredText-OZnAgu,.colorHoveredVoice-1kucsK,.colorLockedText-1VRkPt,.colorLockedVoice-2UlBjl,.colorSelectedText-1y4Wvs,.colorSelectedVoice-Xcb_9R,.colorUnreadText-2t7XRb,.colorUnreadVoice-137o4S {
    color: #b9bbbe
}
.colorMutedText-36M8WR,.colorMutedVoice-3ghIuw {
    color: #9e9e9e
}
.contentConnectedVoice-qL-YrL:active,.contentHoveredText-2D9B-x,.contentHoveredVoice-3p_NEO:active,.contentSelectedVoice-1WDIBM:active {
    background-color: rgba(57, 37, 74, 0.6)
}
.contentSelectedText-3wUhMi,.contentSelectedVoice-1WDIBM {
    background-color: rgb(57, 37, 74, 0.4)
}
.nameDefaultText-24KCy5,.nameDefaultVoice-3WUH7s,.nameLockedText-3pqQcL,.nameLockedVoice-26MhB1 {
    color: #9e9e9e
}
.nameMutedText-3Vj4bM,.nameMutedVoice-3oxyQZ {
    color: ##757575;
}
.nameHoveredText-1uO31y {
    color: #b9bbbe
}
.nameHoveredVoice-YJ1Vfd {
    color: #f6f6f7
}
.nameUnreadText-DfkrI4,.nameUnreadVoice-EVo-wI {
    color: #dcddde
}
.nameConnectedText-3CzNQn,.nameConnectedVoice-MHUX5F,.nameSelectedText-sp_EUw,.nameSelectedVoice-1qSph5 {
    color: #f6f6f7
}
.unread-1Dp-OI {
    background-color: hsla(0,0%,100%,.6);
}
.theme-light .notice-2mjo_8 {
    background-color: rgba(248,249,249,.95)
}
.theme-dark .notice-2mjo_8 {
    background: rgba(32,34,37,.95)
}
.theme-dark .message-c9-HCF {
    color: #fff
}
.theme-light .radioGroup-1GBvlr {
    color: #3f225a
}
.theme-light .desc-2Dttbk {
    color: #b9bbbe
}
.theme-light .descChecked-XkfPsU,.theme-light .titleChecked-2wg0pd {
    color: #fff
}
.theme-dark .radioGroup-1GBvlr {
    color: #f6f6f7
}
.theme-dark .desc-2Dttbk {
    color: #9e9e9e
}
.theme-dark .descChecked-XkfPsU,.theme-dark .titleChecked-2wg0pd {
    color: #fff
}
.base-96ewKC {
    background-color: transparent;
}
.theme-light .container-1nZlH6 {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-1UhAnY {
    color: #3f225a
}
.theme-light .input-1UhAnY::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-1UhAnY:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-1UhAnY::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .container-1nZlH6 {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .input-1UhAnY {
    color: #f6f6f7
}
.theme-dark .input-1UhAnY::-webkit-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .input-1UhAnY:-ms-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .input-1UhAnY::placeholder {
    color: rgba(246,246,247,.3)
}
.container-1s4HBn.error-3TKm5F,.container-1s4HBn.error-3TKm5F:hover {
    border-color: #f04747
}
.flag-16iIBd {
    background-size: cover;
}
.vip-3pFIN8:after {
    background: #3a2648;
    color: #fff;
}
.theme-dark .container-1s4HBn.hover-2AGf5p {
    border-color: #040405
}
.theme-dark .flag-16iIBd.vip-3pFIN8:after {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-light .container-1s4HBn.hover-2AGf5p {
    border-color: #b9bbbe
}
.theme-light .flag-16iIBd.vip-3pFIN8:after {
    border-color: #fff
}
.guildSettingsBaseSection-3XBkfG .avatar-uploader-inner {
    background-size: 100% 100%;
}
.guildSettingsSplashSection-2ilKBA .avatar-uploader-inner {
    background-size: cover;
}
.theme-dark .guildSettingsOverviewNotice-2VluqV {
    background-color: rgba(32,34,37,.95)
}
.theme-light .guildSettingsOverviewNotice-2VluqV {
    background-color: rgba(246,246,247,.95)
}
.streamerModeEnabledImage-3vynUz {
    background-size: 100% 100%;
}
.streamerModeEnabledBtn-2ZJ2eq {
    background-color: #593695;
    color: #fff;
}
.streamerModeEnabledBtn-2ZJ2eq:hover {
    background-color: #5a3796
}
.streamerModeEnabledBtn-2ZJ2eq.disabled-1X7fxl {
    background-color: #643da7;
}
.divider-1pnAR2 {
    background: green;
}
.typeCreate-1kfBMl {
    color: #69c49a
}
.typeDelete-bTXOuk {
    color: #f36c6c
}
.typeUpdate-2bwuHy {
    color: #fbb848
}
.typeCreate-1kfBMl:after {
    background: url(/assets/9d5a0ed6004593447a865df0f7eb149e.svg)
}
.typeDelete-bTXOuk:after {
    background: url(/assets/38bba2d1bd82fd0b60d33367adccf8b7.svg)
}
.typeUpdate-2bwuHy:after {
    background: url(/assets/fd7c3b7bb65f185a5d91f5302f30ac0c.svg)
}
.theme-light .auditLog-3jNbM6 {
    border-color: #b9bbbe;
    color: #9e9e9e
}
.theme-light .auditLog-3jNbM6 strong {
    color: #3f225a
}
.theme-light .headerClickable-2IVFo9,.theme-light .headerDefault-1wrJcN {
    background-color: rgba(246,246,247,.3)
}
.theme-light .headerExpanded-CUEwZ5 {
    background-color: #f6f6f7
}
.theme-light .divider-1pnAR2 {
    background-color: #b9bbbe
}
.theme-light .userHook-3AdCBF {
    color: #3f225a
}
.theme-light .timestamp-1mruiI {
    color: #9e9e9e
}
.theme-light .changeDetails-bk98pu {
    background-color: rgba(246,246,247,.3)
}
.theme-dark .auditLog-3jNbM6 {
    border-color: #221035;
    color: #9e9e9e
}
.theme-dark .auditLog-3jNbM6 strong {
    color: #f6f6f7
}
.theme-dark .headerClickable-2IVFo9,.theme-dark .headerDefault-1wrJcN {
    background-color: rgba(32,34,37,.3);
    color: #b9bbbe
}
.theme-dark .headerExpanded-CUEwZ5 {
    background-color: rgb(57, 37, 74, 0.4);
    color: #b9bbbe
}
.theme-dark .divider-1pnAR2 {
    background-color: #221035
}
.theme-dark .userHook-3AdCBF {
    color: #f6f6f7
}
.theme-dark .timestamp-1mruiI {
    color: #9e9e9e
}
.theme-dark .changeDetails-bk98pu {
    background-color: rgba(32,34,37,.3)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetAll-13V3n6,.theme-light .icon-RTGJu3.targetAll-13V3n6 {
    background: url(/assets/2cff836e7866cfd41cf71752ed033f1c.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetBan-3mbIPL,.theme-light .icon-RTGJu3.targetBan-3mbIPL {
    background: url(/assets/b5db5aa26e85a4239c15f10eab2031c0.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetChannel-TrRFlx,.theme-light .icon-RTGJu3.targetChannel-TrRFlx {
    background: url(/assets/b5061d752abdcf5f44d6f1a217cd0853.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetGuild-mDWfAV,.theme-light .icon-RTGJu3.targetGuild-mDWfAV {
    background: url(/assets/601c3d0141413d8eea298446d32ca099.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetEmoji-3vhPhM,.theme-light .icon-RTGJu3.targetEmoji-3vhPhM {
    background: url(/assets/53947b826826947323199b1a83733067.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetInvite-1RQBlr,.theme-light .icon-RTGJu3.targetInvite-1RQBlr {
    background: url(/assets/c428699bc4a1e93837f27f90b12c09e3.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetMemberRole-jowY3I,.theme-light .icon-RTGJu3.targetMemberRole-jowY3I {
    background: url(/assets/b4c2db8382a5bfd5dd7155ed1bdbb3b8.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetMember-2iuwxX,.theme-light .icon-RTGJu3.targetMember-2iuwxX {
    background: url(/assets/a8bd496e2e9ca833d249a7b18f41efdd.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetPermission-ZRUN5n,.theme-light .icon-RTGJu3.targetPermission-ZRUN5n {
    background: url(/assets/22955365220abc3015256c85523bf98e.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetRole-2MoUny,.theme-light .icon-RTGJu3.targetRole-2MoUny {
    background: url(/assets/1c1c67aae5a734eecf7a911cc5fde2de.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetVanityUrl-3OpsYX,.theme-light .icon-RTGJu3.targetVanityUrl-3OpsYX {
    background: url(/assets/436a2bee259beb0347ee31bb238eb1aa.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetWebhook-1xS7Z7,.theme-light .icon-RTGJu3.targetWebhook-1xS7Z7 {
    background: url(/assets/bbb590c56a4598276e5ff9270b6c382a.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetWidget-3hFVSM,.theme-light .icon-RTGJu3.targetWidget-3hFVSM {
    background: url(/assets/94eccecad8658fe53d1cd37fab50940d.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetMessage-2kBYMT,.theme-light .icon-RTGJu3.targetMessage-2kBYMT {
    background: url(/assets/f38704754b1f737d5fa7bf4545bc5bba.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetAll-13V3n6,.theme-dark .icon-RTGJu3.targetAll-13V3n6 {
    background: url(/assets/fc3f5f9be1a4db14b02336b7cb02e6ce.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetBan-3mbIPL,.theme-dark .icon-RTGJu3.targetBan-3mbIPL {
    background: url(/assets/edb23a53ea40ac60f212ebae66e5c5c7.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetChannel-TrRFlx,.theme-dark .icon-RTGJu3.targetChannel-TrRFlx {
    background: url(/assets/343c9ff4c775c66a7d4af1f8691c34e0.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetGuild-mDWfAV,.theme-dark .icon-RTGJu3.targetGuild-mDWfAV {
    background: url(/assets/30af96a386520760ad107c5b77ba002a.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetEmoji-3vhPhM,.theme-dark .icon-RTGJu3.targetEmoji-3vhPhM {
    background: url(/assets/7a9bf92329dad473ef0383ae75367215.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetInvite-1RQBlr,.theme-dark .icon-RTGJu3.targetInvite-1RQBlr {
    background: url(/assets/4b33371531a1a89f99296a73fc9ef588.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetMemberRole-jowY3I,.theme-dark .icon-RTGJu3.targetMemberRole-jowY3I {
    background: url(/assets/a9098042cb36b955c5021259f1d48f91.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetMember-2iuwxX,.theme-dark .icon-RTGJu3.targetMember-2iuwxX {
    background: url(/assets/af043346e036ef7b1aac1cf42cd1e699.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetPermission-ZRUN5n,.theme-dark .icon-RTGJu3.targetPermission-ZRUN5n {
    background: url(/assets/2a37995eb832bae805190a93ba043857.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetRole-2MoUny,.theme-dark .icon-RTGJu3.targetRole-2MoUny {
    background: url(/assets/0176a91b4c44ed05c05af68784e78da8.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetVanityUrl-3OpsYX,.theme-dark .icon-RTGJu3.targetVanityUrl-3OpsYX {
    background: url(/assets/84215a5fec3d9de9960a225143238d74.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetWebhook-1xS7Z7,.theme-dark .icon-RTGJu3.targetWebhook-1xS7Z7 {
    background: url(/assets/a6975850d800aa86162b4aa5f18c41ac.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetWidget-3hFVSM,.theme-dark .icon-RTGJu3.targetWidget-3hFVSM {
    background: url(/assets/4ac0e382cc7b8aa0cb1d6d074b0e8ba5.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetMessage-2kBYMT,.theme-dark .icon-RTGJu3.targetMessage-2kBYMT {
    background: url(/assets/8c85e30795486caa8caacd829703459d.svg)
}
.image-1GzsFd {
    background-size: 100% 100%
}
.theme-light .text-GwUZgS,.theme-light .title-2BxgL2 {
    color: rgba(185,187,190,.9)
}
.theme-dark .text-GwUZgS,.theme-dark .title-2BxgL2 {
    color: #9e9e9e
}
.theme-light .selectableItem-1MP3MQ {
    color: #3f225a
}
.theme-light .selectableItem-1MP3MQ:hover {
    background-color: #dcddde
}
.theme-dark .selectableItem-1MP3MQ {
    color: #f6f6f7
}
.theme-dark .selectableItem-1MP3MQ:hover {
    background-color: rgb(57, 37, 74, 0.4)
}
.quickSelectPopoutOption-opKBx9.selected-3RZo5I {
    background-color: inherit;
}
.theme-light .quickSelect-3BxO0K {
    color: #3f225a
}
.theme-light .quickSelectArrow-1QublR {
    background: url(/assets/8b86f90154cbe38507a14fdd34367f17.svg) 50% no-repeat
}
.theme-light .quickSelectPopout-X1hvgV {
    background-color: #fff;
    color: #3f225a
}
.theme-light .quickSelectPopoutOption-opKBx9:hover {
    background-color: #f6f6f7
}
.theme-dark .quickSelect-3BxO0K {
    color: #f6f6f7
}
.theme-dark .quickSelectArrow-1QublR {
    background: url(/assets/f58cf3b8fc79e9d671ab649ab37651a9.svg) 50% no-repeat
}
.theme-dark .quickSelectPopout-X1hvgV {
    background: #331f44;
    color: #f6f6f7
}
.theme-dark .quickSelectPopoutOption-opKBx9:hover {
    background-color: rgb(57, 37, 74, 0.3)
}
.searchBar-1MOL6S {
    color: #fff;
}
.searchBar-1MOL6S .input-3Xdcic {
    background-color: transparent;
}
.searchBarIcon-18QaPq .icon-1S6UIr {
    background-repeat: no-repeat;
}
.theme-light .searchBar-1MOL6S {
    background-color: rgba(220,221,222,.6)
}
.theme-light .searchBar-1MOL6S .input-3Xdcic {
    color: #3f225a
}
.theme-light .searchBar-1MOL6S .input-3Xdcic::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .searchBar-1MOL6S .input-3Xdcic:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .searchBar-1MOL6S .input-3Xdcic::placeholder {
    color: rgb(57, 37, 74, 0.4)
}
.theme-dark .searchBar-1MOL6S {
    background-color: #3f225a
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic {
    color: #f6f6f7
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-light .popoutList-T9CKZQ {
    background: #fff
}
.theme-light .popoutListEmpty-voOEBJ {
    color: #3f225a
}
.theme-dark .popoutList-T9CKZQ {
    background: rgba(57, 37, 74, 0.6)
}
.theme-dark .popoutListEmpty-voOEBJ {
    color: #f6f6f7
}
.search-bar-tag {
    background: #4a1037;
    color: #fff;
}
.search-bar-tag .close {
    background: url(/assets/487cd366952d47eb8b7033369d3cdc98.svg) 50% no-repeat;
}
.search-bar-icon .icon {
    background-repeat: no-repeat;
}
.search-bar-light .search-bar-tag {
    background: #fff;
    color: #3f225a
}
.search-bar {
    background-color: #331f44;
}
.search-bar .search-bar-inner {
    background: rgba(0,0,0,.2);
}
.search-bar input {
    background: transparent;
    color: #fff;
}
.search-bar ::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, 0.35)
}
.search-bar.search-bar-light {
    background-color: transparent;
}
.search-bar.search-bar-light .search-bar-inner {
    background-color: rgba(199,209,216,.3);
}
.search-bar.search-bar-light input {
    background: transparent;
    color: #737f8d;
}
.search-bar.search-bar-light input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
}
.search-bar.search-bar-light input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
}
.search-bar.search-bar-light input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}
.no-search-results {
    color: hsla(0,0%,100%,.3);
}
.theme-light .inviteRow-2L02ae:hover {
    background-color: #f6f6f7
}
.theme-light .footer-1FPmkC {
    background-color: #fff
}
.theme-light .content-3CCvMx:before {
    background-color: rgba(54,57,63,.1)
}
.theme-light .copied-e3U5bd {
    border-color: #43b581
}
.theme-light .checkBoxLabel-4PWfpk,.theme-light .inviteRowName-1tVaxu,.theme-light .subText-bCySlS {
    color: #3f225a
}
.theme-dark .inviteRow-2L02ae:hover {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-dark .inviteRowName-1tVaxu {
    color: #f6f6f7
}
.theme-dark .footer-1FPmkC {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .content-3CCvMx:before {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .copied-e3U5bd {
    border-color: #43b581
}
.theme-dark .checkBoxLabel-4PWfpk,.theme-dark .footerText-2a7NxZ,.theme-dark .subText-bCySlS {
    color: #b9bbbe
}
.prefixInputInput-cqxbLV {
    background: transparent;
}
.theme-light .prefixInput-14nUik {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .prefixInput-14nUik:hover {
    border-color: rgb(57, 37, 74, 0.4)
}
.theme-light .prefixInput-14nUik.focused-2QzoMt {
    border-color: #3a2648
}
.theme-light .prefixInput-14nUik.error-6_-E9g {
    border-color: #f04747
}
.theme-light .prefixInputInput-cqxbLV {
    color: #3f225a
}
.theme-light .prefixInputInput-cqxbLV::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light .prefixInputInput-cqxbLV:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light .prefixInputInput-cqxbLV::placeholder {
    color: #b9bbbe
}
.theme-light .prefixInputPrefix-2IUJ4X {
    color: rgba(114,118,125,.6)
}
.theme-dark .prefixInput-14nUik {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .prefixInput-14nUik:hover {
    border-color: rgba(0,0,0,.6)
}
.theme-dark .prefixInput-14nUik.focused-2QzoMt {
    border-color: #3a2648
}
.theme-dark .prefixInput-14nUik.error-6_-E9g {
    border-color: #f04747
}
.theme-dark .prefixInputInput-cqxbLV {
    color: #f6f6f7
}
.theme-dark .prefixInputInput-cqxbLV::-webkit-input-placeholder {
    color: #9e9e9e
}
.theme-dark .prefixInputInput-cqxbLV:-ms-input-placeholder {
    color: #9e9e9e
}
.theme-dark .prefixInputInput-cqxbLV::placeholder {
    color: #9e9e9e
}
.theme-dark .prefixInputPrefix-2IUJ4X {
    color: #9e9e9e
}
.headerText-3F6XtG {
    color: #fff!important;
}
.headerText-3F6XtG .style-description {
    color: hsla(0,0%,100%,.6);
}
.headerSync-2bdVc0 {
    color: #fff
}
.forceSync-LKCGuq {
    background-color: transparent;
}
.forceSync-LKCGuq:before {
    background-color: transparent;
    background-position: 3px 3px;
    background-repeat: no-repeat;
}
.theme-light .syncedRoleLink-1uYY6a {
    color: #000
}
.theme-dark .syncedRoleLink-1uYY6a {
    color: #fff
}
@-webkit-keyframes spin-28Tl9- {
    0% {
    }
    }
@keyframes spin-28Tl9- {
    0% {
    }
    }
.theme-dark .card-FDVird:before {
    background-color: #33363c;
    border-color: #2b2e32
}
.theme-light .card-FDVird:before {
    background-color: #f6f6f7;
    border-color: #e2e2e3
}
.button-mM-y8i {
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.theme-light .button-mM-y8i {
    background-color: #fff;
}
.theme-light .button-mM-y8i:hover {
    background-color: #f5f5f5;
}
.theme-dark .button-mM-y8i {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .button-mM-y8i:hover {
    background-color: #44474c;
}
.emoji-row .emoji-image {
    background-position: 0 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.theme-dark .emoji-alias-input .emoji-input {
    background-color: #2d2f32
}
.theme-dark .emoji-alias-placeholder {
    color: #fff
}
.theme-light .emoji-alias-input .emoji-input {
    background-color: #efeff0
}
.theme-dark .guild-settings-banned-user .username {
    color: #fff
}
.theme-dark .guild-settings-banned-user-modal .reason,.theme-dark .guild-settings-banned-user-modal .user-discrim,.theme-dark .guild-settings-banned-user .username .discrim {
    color: #9e9e9e
}
.theme-dark .guild-settings-banned-user-modal .reason-header {
    color: #dcddde
}
.theme-light .guild-settings-banned-user .username {
    color: #3f225a
}
.theme-light .guild-settings-banned-user .username .discrim {
    color: #b9bbbe
}
.theme-light .guild-settings-banned-user-modal .reason,.theme-light .guild-settings-banned-user-modal .user-discrim {
    color: #9e9e9e
}
.theme-light .guild-settings-banned-user-modal .reason-header {
    color: #3f225a
}
.copyInputError-WlP8ke {
    border-color: #f04747
}
.copyInputSuccess-XZc7BO {
    border-color: #43b581
}
.hiddenMessage-1iiFV5,.input-31cgnL {
    background-color: transparent;
}
.inputError-reIyaS {
    color: #f04747
}
.inputSuccess-3U9sNd {
    color: #43b581
}
.theme-light .copyInputDefault-21sXtF {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .inputDefault-A2ud2y {
    color: #3f225a
}
.theme-light .inputDefault-A2ud2y::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .inputDefault-A2ud2y:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .inputDefault-A2ud2y::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .copyInputDefault-21sXtF {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .inputDefault-A2ud2y {
    color: #f6f6f7
}
.theme-dark .inputDefault-A2ud2y::-webkit-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .inputDefault-A2ud2y:-ms-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .inputDefault-A2ud2y::placeholder {
    color: rgba(246,246,247,.3)
}
.button-2Nu6xU {
    border-color: #2e3757;
}
.theme-dark .invite-settings-invite-row {
    color: #f6f6f7
}
.theme-light .invite-settings-invite-row {
    color: #3f225a
}
.container-QYD8zO .avatar-uploader-inner {
    background-size: 100% 100%;
}
.iconButton-3V4WS5 {
    background-color: transparent;
}
.theme-light .pruneLink-3V7wes {
    color: #f04747
}
.theme-light .member-1q7VfX .name-8yzEIY {
    color: #3f225a;
}
.theme-light .member-1q7VfX .tag-1YGWN9 {
    color: #dcddde;
}
.theme-light .member-1q7VfX .roleWrapper-1Hde_V {
    color: rgba(79,84,92,.8)
}
.theme-dark .pruneLink-3V7wes {
    color: #f04747
}
.theme-dark .member-1q7VfX .name-8yzEIY {
    color: #f6f6f7;
}
.theme-dark .member-1q7VfX .tag-1YGWN9 {
    color: #9e9e9e;
}
.theme-dark .member-1q7VfX .roleWrapper-1Hde_V {
    color: hsla(0,0%,100%,.8)
}
.dragged-2XvZ89 {
    background-size: 100% 100%;
}
.colorPickerSwatch-5GX3Ve {
    background-color: transparent;
}
.theme-dark .colorPickerSwatch-5GX3Ve.noColor-1pdBDm {
    border-color: hsla(0,0%,100%,.1)
}
.theme-dark .colorPickerCustom-2CWBn2 {
    background: rgba(57, 37, 74, 0.6);
    border-color: #221035
}
.theme-light .colorPickerSwatch-5GX3Ve.noColor-1pdBDm {
    border-color: rgba(79,84,92,.1)
}
.theme-light .colorPickerCustom-2CWBn2 {
    background: #fff;
    border-color: #dcddde
}
.item-3T2z1R {
    background: transparent;
}
.theme-light .item-3T2z1R {
    border-color: #dcddde
}
.theme-dark .item-3T2z1R {
    border-color: #18191c
}
.denySelected-1mh2mZ {
    background: #f04747
}
.allowSelected-25S_i5 {
    background: #43b581
}
.theme-light .denySelected-1mh2mZ {
    border-color: #f04747
}
.theme-light .passthroughSelected-1Eq0Kl {
    background: #dcddde
}
.theme-light .allowSelected-25S_i5 {
    border-color: #43b581
}
.theme-dark .denySelected-1mh2mZ {
    border-color: #f04747
}
.theme-dark .passthroughSelected-1Eq0Kl {
    background: #747f8d
}
.theme-dark .allowSelected-25S_i5 {
    border-color: #43b581
}
.news-2GDtLJ {
    background-color: #221035;
}
.theme-dark .overflowUserOverflow-19NUHm {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .player-1kJMbj {
    border-bottom-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .tag-10JqWu {
    color: #dcddde
}
.theme-dark .discriminator-pIKHPn,.theme-dark .playTime-1laRtO {
    color: #9e9e9e
}
.theme-light .overflowUserOverflow-19NUHm {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .player-1kJMbj {
    border-bottom-color: rgba(220,221,222,.6)
}
.theme-light .tag-10JqWu {
    color: #3f225a
}
.theme-light .discriminator-pIKHPn,.theme-light .playTime-1laRtO {
    color: #b9bbbe
}
.emptyImage-3JcMno {
    background-position: 50%;
    background-repeat: no-repeat;
}
.theme-dark .headerManageIcon-3fX3Jq {
    color: #9e9e9e
}
.theme-dark .headerManageIcon-3fX3Jq:hover {
    color: #b9bbbe
}
.theme-dark .headerManageIcon-3fX3Jq:active {
    color: #dcddde
}
.theme-dark .headerText-2niCs_ {
    border-top-color: rgba(47,49,54,.6);
    color: #dcddde
}
.theme-dark .sectionTitle-1hpoH7 {
    color: #dcddde
}
.theme-dark .sectionBlurb-3WAfU0,.theme-light .headerManageIcon-3fX3Jq {
    color: #9e9e9e
}
.theme-light .headerManageIcon-3fX3Jq:hover {
    color: #3f225a
}
.theme-light .headerManageIcon-3fX3Jq:active {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .headerText-2niCs_ {
    border-top-color: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .sectionTitle-1hpoH7 {
    color: #3f225a
}
.theme-light .sectionBlurb-3WAfU0 {
    color: #9e9e9e
}
.emptyImage-1Y1gHr {
    background-position: 50%;
    background-repeat: no-repeat;
}
.icon-3o6xvg {
    background-clip: padding-box;
    background-color: none;
    background-position: 50%;
    background-size: 100% 100%;
}
.noIcon-1a_FrS {
    background-color: #331f44;
    color: #fff;
}
.theme-dark .partyMemberOverflow-3VhFIX {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .partyMemberBackground-aSF9mc {
    background-color: #3f225a
}
.theme-dark .partyMemberUnknownIcon-2zv8ar {
    color: #9e9e9e
}
.theme-light .partyMemberOverflow-3VhFIX {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .partyMemberBackground-aSF9mc {
    background-color: #f6f6f7
}
.theme-light .partyMemberUnknownIcon-2zv8ar {
    color: #b9bbbe
}
.headerGroupIconBackground-xfEZPb {
    background-color: #3a2648;
}
.headerGroupIcon-289QoN {
    color: #fff;
}
.gameIcon-1oKIfq {
    background-size: 100%;
}
.theme-dark .headerTitle-PE3TuN {
    color: #dcddde
}
.theme-dark .headerSubtitle-3mUZXH {
    color: #9e9e9e
}
.theme-dark .username-XRo90I {
    color: #dcddde
}
.theme-dark .discriminator-1Kma2g {
    color: #9e9e9e
}
.theme-dark .overflowMenu-3mlkvt {
    color: #fff
}
.theme-dark .bottomSeparator-3cIFah {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .gameName-wzJptK {
    color: #dcddde
}
.theme-dark .playTime-2SuPqW {
    color: #9e9e9e
}
.theme-dark .guildIconEmptyBackground-14tfYf {
    background-color: #3f225a
}
.theme-dark .guildIconEmptyIcon-rSyLPf,.theme-dark .voiceChannelIcon-17tW8N {
    color: #b9bbbe
}
.theme-dark .channelName-2rTyk5 {
    color: #dcddde
}
.theme-light .headerTitle-PE3TuN {
    color: #3f225a
}
.theme-light .headerSubtitle-3mUZXH {
    color: #9e9e9e
}
.theme-light .username-XRo90I {
    color: #3f225a
}
.theme-light .discriminator-1Kma2g {
    color: #b9bbbe
}
.theme-light .overflowMenu-3mlkvt {
    color: #3f225a
}
.theme-light .bottomSeparator-3cIFah {
    border-color: rgba(220,221,222,.6)
}
.theme-light .gameName-wzJptK {
    color: #3f225a
}
.theme-light .playTime-2SuPqW {
    color: #9e9e9e
}
.theme-light .guildIconEmptyBackground-14tfYf {
    background-color: #f6f6f7
}
.theme-light .channelName-2rTyk5,.theme-light .guildIconEmptyIcon-rSyLPf,.theme-light .voiceChannelIcon-17tW8N {
    color: #9e9e9e
}
.need-help-modal.form.deprecated a {
    color: #00b0f4;
}
.need-help-modal.form.deprecated a:hover {
    color: #009edc
}
.need-help-modal.form.deprecated .header {
    background-color: #3a2648;
}
.need-help-modal.form.deprecated .header h1 {
    color: #fff;
}
.need-help-modal.form.deprecated .header input[type=text] {
    background-color: #fff;
    color: #555;
}
.need-help-modal.form.deprecated .header input[type=text]::-webkit-input-placeholder {
    color: #c2ccd3
}
.need-help-modal.form.deprecated .form-inner .failed .poop {
    background-repeat: no-repeat;
    background-size: 78px 79px;
}
.need-help-modal.form.deprecated .form-inner .failed p {
    color: #dbdde1;
}
.need-help-modal.form.deprecated .footer {
    background-color: #fff;
    color: #99aab5;
}
.coverImage-3cjWkd {
    background-repeat: no-repeat;
    background-size: 100%;
}
.artworkSpotifySessionEnded-11d_If {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%
}
.theme-dark .invite-18yqGF {
    background: rgba(47,49,54,.6);
    border-color: rgba(47,49,54,.9)
}
.theme-dark .header-Hg_qNF {
    color: #9e9e9e
}
.theme-dark .name-GG2Mcs,.theme-dark .partyStatus-6AjDud {
    color: #fff
}
.theme-dark .moreUsers-1sZP3U {
    background-color: #3f225a
}
.theme-dark .partyMemberEmpty-2iyh5g {
    background: #3f225a
}
.theme-dark .helpIcon-2EyVTp {
    background-color: #fff
}
.theme-dark .textLink-3aPthL,.theme-dark .message-group .textLink-3aPthL {
    color: #fff
}
.theme-light .invite-18yqGF {
    background: rgba(246,246,247,.6);
    border-color: rgba(220,221,222,.3)
}
.theme-light .header-Hg_qNF {
    color: #9e9e9e
}
.theme-light .name-GG2Mcs,.theme-light .partyStatus-6AjDud {
    color: #3f225a
}
.theme-light .moreUsers-1sZP3U {
    background-color: #dcddde
}
.theme-light .partyMemberEmpty-2iyh5g {
    background: #dcddde
}
.theme-light .helpIcon-2EyVTp {
    background-color: #3f225a
}
.theme-light .textLink-3aPthL,.theme-light .message-group .textLink-3aPthL {
    color: #3f225a
}
.theme-dark .subHeader-27gFHC {
    color: #9e9e9e
}
.theme-dark .preview-yX6Nx7 {
    border-color: #221035
}
.theme-light .subHeader-27gFHC {
    color: #9e9e9e
}
.theme-light .preview-yX6Nx7 {
    border-color: #dcddde
}
.theme-light .autocomplete-1vrmpx {
    background-color: #fff
}
.theme-light .autocompleteInner-zh20B_ {
    background-color: rgba(220,221,222,.6)
}
.theme-light .divider-23swzi,.theme-light .selectorSelected-1_M1WV {
    background-color: #dcddde
}
.theme-light .contentTitle-2tG_sM {
    color: #9e9e9e
}
.theme-light .contentTitle-2tG_sM strong {
    color: #3f225a
}
.theme-light .content-Qb0rXO {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .description-11DmNu,.theme-light .descriptionUsername-J_75O8 {
    color: #9e9e9e
}
.theme-light .descriptionDiscriminator-3vUOCc {
    color: rgba(114,118,125,.6)
}
.theme-light .avatarStatus-3jMZl_ {
    border-color: #f6f6f7
}
.theme-dark .autocomplete-1vrmpx {
    background-color: rgba(39, 20, 56, 0.8);
}
.theme-dark .selectorSelected-1_M1WV {
    background-color: rgb(57, 37, 74, 0.4);
}
.theme-dark .divider-23swzi {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .contentTitle-2tG_sM {
    color: #9e9e9e
}
.theme-dark .contentTitle-2tG_sM strong {
    color: #fff
}
.theme-dark .content-Qb0rXO {
    color: #f6f6f7
}
.theme-dark .description-11DmNu,.theme-dark .descriptionUsername-J_75O8 {
    color: #9e9e9e
}
.theme-dark .descriptionDiscriminator-3vUOCc {
    color: rgba(114,118,125,.6)
}
.theme-dark .avatarStatus-3jMZl_ {
    border-color: #331f44
}
.theme-brand .autocomplete-1vrmpx {
    background-color: #f6f6f7
}
.theme-brand .selectorSelected-1_M1WV {
    background-color: rgba(199,208,240,.6)
}
.theme-brand .divider-23swzi {
    background-color: rgba(220,221,222,.6)
}
.theme-brand .contentTitle-2tG_sM {
    color: #9e9e9e
}
.theme-brand .contentTitle-2tG_sM strong {
    color: #3f225a
}
.theme-brand .content-Qb0rXO {
    color: rgba(57, 37, 74, 0.6)
}
.theme-brand .description-11DmNu,.theme-brand .descriptionUsername-J_75O8 {
    color: #9e9e9e
}
.theme-brand .descriptionDiscriminator-3vUOCc {
    color: rgba(114,118,125,.6)
}
.theme-brand .avatarStatus-3jMZl_ {
    border-color: #f6f6f7
}
.sprite-2iCowe {
    background-position: 50%;
    background-repeat: no-repeat;
}
.attachButtonPlay-ZnFdQr {
    color: #43b581
}
.textArea-2Spzkt {
    background-color: transparent;
}
.theme-dark .inner-zqa7da {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .textArea-2Spzkt {
    color: hsla(0,0%,100%,.7)
}
.theme-dark .textArea-2Spzkt::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .textArea-2Spzkt:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .textArea-2Spzkt::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .attachPopout-1n-ZKM {
    background-color: #331f44
}
.theme-dark .attachPopoutRow-KrE-f6:hover {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .attachPopoutRowText-1tIocA {
    color: #fff
}
.theme-dark .attachButtonDivider-3Glu60 {
    background-color: hsla(0,0%,100%,.1)
}
.theme-light .inner-zqa7da {
    background-color: #f6f6f7
}
.theme-light .textArea-2Spzkt {
    color: #737f8d
}
.theme-light .textArea-2Spzkt::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light .textArea-2Spzkt:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light .textArea-2Spzkt::placeholder {
    color: #b9bbbe
}
.theme-light .attachPopout-1n-ZKM {
    background-color: #f6f6f7;
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .attachPopoutRow-KrE-f6:hover {
    background-color: rgba(220,221,222,.6)
}
.theme-light .attachPopoutRowText-1tIocA {
    color: #3f225a
}
.theme-light .attachButtonDivider-3Glu60 {
    background-color: rgba(114,118,125,.1)
}
.theme-brand .inner-zqa7da {
    background-color: #6c125a;
}
.theme-brand .textArea-2Spzkt {
    color: hsla(0,0%,100%,.7)
}
.theme-brand .textArea-2Spzkt::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-brand .textArea-2Spzkt:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-brand .textArea-2Spzkt::placeholder {
    color: hsla(0,0%,100%,.3)
}
.diversitySelector-tmmMv0 .popout-2nUePc {
    background: #fff;
}
.diversitySelector-tmmMv0 .popout-2nUePc .item-16cXuq:hover {
    background-color: rgba(153,170,181,.1)
}
.diversitySelector-tmmMv0 .item-16cXuq {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 22px 22px;
}
.emojiPicker-3m1S-j {
    background-color: rgba(45, 7, 40, 0.6);
}
.emojiPicker-3m1S-j .dimmer-3iH-5D {
    background-color: transparent;
}
.emojiPicker-3m1S-j .dimmer-3iH-5D.visible-3k45bQ {
    background-color: hsla(0,0%,100%,.6);
}
.emojiPicker-3m1S-j .stickyHeader-1SS0JU {
    background: transparent;
}
.emojiPicker-3m1S-j .no-search-results {
    color: #99aab5;
}
.emojiPicker-3m1S-j .no-search-results .sad-discord {
    background-size: 90px 90px;
}
.emojiPicker-3m1S-j .category-2U57w6 {
    color: #98aab6;
}
.emojiPicker-3m1S-j .scroller-3vODG7 .emojiItem-109bjA {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.emojiPicker-3m1S-j .scroller-3vODG7 .emojiItem-109bjA.selected-39BZ4S {
    background-color: rgba(127, 37, 106, 0.6);
}
.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 22px 22px;
}
.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.selected-39BZ4S {
    border-bottom-color: #3a2648
}
.premiumPromo-yVfLiA {
    background-color: hsla(0,0%,100%,.95);
}
.premiumPromoClose-2sqoIR {
    background: url(/assets/f815a774c2b98d3109293a4e2afb733c.svg) 50% 50% no-repeat;
}
.premiumPromoTitle-1SQQfF {
    color: #3f225a;
}
.premiumPromoDescription-2Mn515 {
    color: #747f8d;
}
.isMentionedCozy-3isp7y:after {
    background: rgba(250,166,26,.2);
}
.theme-dark .isMentioned-N-h9aa {
    background: rgba(250,166,26,.1)
}
.theme-light .isMentioned-N-h9aa {
    background: rgba(250,166,26,.2)
}
.theme-dark .isMentioned-N-h9aa .mention,.theme-light .isMentioned-N-h9aa .mention {
    background: transparent!important
}
.theme-dark .isMentioned-N-h9aa .mention:hover,.theme-light .isMentioned-N-h9aa .mention:hover {
    background: transparent;
    color: #3a2648;
}
.isFailed-19WM0A,.isFailed-19WM0A .hljs,.isFailed-19WM0A a,.isFailed-19WM0A code.inline,.theme-dark .isFailed-19WM0A,.theme-light .isFailed-19WM0A {
    color: #f04747
}
.theme-dark .edited-DL9ECl {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .edited-DL9ECl {
    color: #99aab5
}
.theme-light .dividerEnabled-2TTlcf {
    border-bottom-color: #eceeef
}
.theme-dark .dividerEnabled-2TTlcf {
    border-bottom-color: hsla(0,0%,100%,.04)
}
.theme-dark .-38G0P0 {
    border-color: transparent;
    color: hsla(0,0%,97.6%,.3)
}
.theme-dark .isLocalBot-38G0P0 {
    background-image: linear-gradient(90deg,rgba(88, 10, 70, 0.2) 80%,#580a46);
    box-shadow: -20px 0 #580a46, 20px 0 #580a46, -20px -1px 0 0 #580a46, -20px 1px 0 #580a46, 20px 1px 0 #580a46, 20px -1px 0 #580a46;
}
.theme-light .headerCozyMeta-rdohGq {
    color: #99aab5
}
.theme-dark .headerCozyMeta-rdohGq {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .timestampCozy-2hLAPV {
    color: #99aab5
}
.theme-dark .timestampCozy-2hLAPV {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .timestampCompact-MHgFLv {
    color: #d1d9de
}
.theme-light .timestampCompactIsMentioned-cQaQoQ {
    color: #b3bfc8
}
.theme-light .messageCompact-kQa7ES:hover .timestampCompactBase-26h38e {
    color: #99aab5
}
.theme-light .messageCozy-2JPAPA:hover .timestampVisibleOnHover-276OMc {
    color: #d1d9de
}
.theme-dark .timestampCompact-MHgFLv {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .timestampCompactIsMentioned-cQaQoQ {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .messageCompact-kQa7ES:hover .timestampCompactBase-26h38e {
    color: #99aab5
}
.theme-dark .messageCozy-2JPAPA:hover .timestampVisibleOnHover-276OMc {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .timestampVisibleOnHover-276OMc,.theme-light .timestampVisibleOnHover-276OMc {
    color: transparent
}
.theme-light .username-_4ZSMR {
    color: #23262a
}
.theme-dark .username-_4ZSMR {
    color: #fff
}
.separator-1xUax1 {
    color: #99aab5;
}
.icon-2Po-VO {
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
}
.theme-dark .container-3-pyIM {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .container-3-pyIM .content-2M3n_H a {
    color: #fff
}
.theme-dark .container-3-pyIM .content-2M3n_H .actionAnchor-gzc_5z {
    color: #00b0f4
}
.theme-dark .timestamp-1E3uAL {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .container-3-pyIM {
    color: rgba(47,49,54,.6)
}
.theme-light .container-3-pyIM .content-2M3n_H a {
    color: #331f44
}
.theme-light .container-3-pyIM .content-2M3n_H .actionAnchor-gzc_5z {
    color: #00b0f4
}
.theme-light .timestamp-1E3uAL {
    color: #99aab5
}
.theme-dark .channelNameChange-1wTsWB strong {
    color: #fff
}
.theme-light .channelNameChange-1wTsWB strong {
    color: #331f44
}
.reactionBtn-2na4rd {
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-light .reaction-1ELvT8 {
    background: rgba(220,221,222,.3)
}
.theme-light .reaction-1ELvT8.reactionMe-23mbRf {
    background: rgba(227,231,248,.6)
}
.theme-light .reaction-1ELvT8.reactionMe-23mbRf .reactionCount-2ddRoS {
    color: #3a2648
}
.theme-light .reactionCount-2ddRoS {
    color: #9e9e9e
}
.theme-dark .reaction-1ELvT8 {
    background: hsla(0,0%,100%,.04)
}
.theme-dark .reaction-1ELvT8.reactionMe-23mbRf {
    background: rgba(92,106,158,.3)
}
.theme-dark .reaction-1ELvT8.reactionMe-23mbRf .reactionCount-2ddRoS {
    color: #3a2648
}
.theme-dark .reactionCount-2ddRoS {
    color: hsla(0,0%,100%,.3)
}
.metadata-3WGS0M {
    color: #9e9e9e;
}
.progress-3Rbvu0 {
    background-color: rgba(114,118,125,.3)
}
.cancelButton-3hVEV6,.downloadButton-23tKQp {
    color: #ffecfa;
}
.cancelButton-3hVEV6:hover, .downloadButton-23tKQp:hover {
    color: rgba(255, 236, 250, 0.6);
}
.theme-light .attachment-33OFj0 {
    border-color: #f6f6f7
}
.theme-light .filename-3eBB_v {
    color: #3f225a
}
.theme-light .filenameLinkWrapper-1-14c5 {
    color: #00b0f4
}
.theme-light .size-1Arx_I {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .attachment-33OFj0 {
    background-color: rgb(57, 37, 74, 0.4);
    border-color: rgba(117, 0, 68, 0.7);
}
.theme-dark .filename-3eBB_v {
    color: #fff
}
.theme-dark .filenameLinkWrapper-1-14c5 {
    color: rgba(0,176,244,.85)
}
.theme-dark .size-1Arx_I {
    color: rgba(246,246,247,.3)
}
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN {
    background-color: #8ea1e1;
}
.mediaBarInteractionDragging-2QurIZ .mediaBarGrabber-1FqnbN {
    background-color: #8ea1e1;
}
.mediaBarInteractionVolume-3QZqYd {
    background-color: rgba(0,0,0,.7);
}
.buffer-26XPkd,.buffer-26XPkd:after,.buffer-26XPkd:before {
    background-color: #fff
}
.mediaBarWrapper-3D7r67,.mediaBarWrapper-3D7r67:after,.mediaBarWrapper-3D7r67:before {
    background-color: rgba(185,187,190,.3)
}
.mediaBarPreview-1jfyFs,.mediaBarPreview-1jfyFs:after,.mediaBarPreview-1jfyFs:before {
    background-color: #fff
}
.mediaBarGrabber-1FqnbN,.mediaBarProgress-1xaPtl,.mediaBarProgress-1xaPtl:after,.mediaBarProgress-1xaPtl:before {
    background-color: #3a2648
}
.bubble-3qRl2J {
    background-color: #000;
    color: #f6f6f7;
}
.bubble-3qRl2J:before {
    border-top-color: #000;
}
.wrapper-2TxpI8 {
    color: #fff;
}
.audioControls-2HsaU6,.videoControls-2kcYic {
    background-color: rgba(0,0,0,.6);
}
.audioSoundBar-i0hfo6 {
    background-color: rgba(0,0,0,.7);
}
.audioMetadata-3zOuGv .metadataIcon-2FyCKU {
    color: #3f225a
}
.audioMetadata-3zOuGv .metadataIcon-2FyCKU:hover {
    color: #9e9e9e;
}
.audioMetadata-3zOuGv .metadataSize-2UOOLK {
    color: #9e9e9e;
}
.metadataIcon-2FyCKU {
    color: #fff;
}
.playPausePop-RnpJoM {
    background-color: rgba(0,0,0,.6);
    color: #fff;
}
.theme-dark .wrapper-2TxpI8 {
    background-color: #221035
}
.theme-dark .wrapperAudio-1jDe0Q {
    background-color: rgba(47,49,54,.3);
    border-color: rgba(47,49,54,.6)
}
.theme-light .wrapper-2TxpI8 {
    background-color: #f6f6f7
}
.theme-light .wrapperAudio-1jDe0Q {
    background-color: #fff;
    border-color: #f6f6f7
}
.downloadLink-1ywL9o {
    color: #fff!important;
}
.statusOnline-8PnF5L {
    background-color: #43b581
}
.statusOffline-37RKt7 {
    background-color: #747f8d
}
.guildIconExpired-2Qcq05 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 50px 26px;
}
.guildNameExpired-2Hp80V {
    color: #f04747;
}
@-webkit-keyframes invite-button-resolving-366-1w {
    0% {
    }
    }
@keyframes invite-button-resolving-366-1w {
    0% {
    }
    }
.theme-light .wrapper-35wsBm {
    background: rgba(246,246,247,.6);
    border-color: rgba(220,221,222,.3)
}
.theme-light .guildIcon-lQ0uiM {
    background-color: #3a2648
}
.theme-light .guildIconImage-3qTk45 {
    background-color: #fff
}
.theme-light .guildIconExpired-2Qcq05 {
    background-color: rgba(220,221,222,.3);
}
.theme-light .guildName-2hvnt_ {
    color: #3f225a
}
.theme-light .guildDetail-1nRKNE {
    color: #9e9e9e
}
.theme-dark .wrapper-35wsBm {
    background: rgb(57, 37, 74, 0.4);
    border-color: rgba(139, 38, 113, 0.9);
}
.theme-dark .guildIcon-lQ0uiM {
    background-color: #3a2648
}
.theme-dark .guildIconImage-3qTk45 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .guildIconExpired-2Qcq05 {
    background-color: rgba(142, 39, 110, 0.7);
}
.theme-dark .guildName-2hvnt_ {
    color: #f6f6f7
}
.theme-dark .guildDetail-1nRKNE {
    color: #9e9e9e
}
.theme-dark .message-2qRu38 {
    background-color: rgba(57, 37, 74, 0.6);
    box-shadow: 0 0 0 1px rgb(76, 22, 60), 0 2px 10px 0 rgba(0,0,0,.2);
}
.theme-light .message-2qRu38 {
    background-color: #fff;
}
.theme-dark .container-1If-HZ,.theme-dark .reactors-Blmlhw {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .remove-3V-yj8 {
    color: #b9bbbe
}
.theme-dark .remove-3V-yj8:hover {
    background-color: rgba(185,187,190,.1)
}
.theme-dark .sidebar-1-SQro {
    background: #331f44
}
.theme-dark .reactionSelected-1pqISm {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-dark .reactionDefault-GBA58K:hover {
    background-color: rgba(79,84,92,.1)
}
.theme-dark .discriminator-byOsvi {
    color: #9e9e9e
}
.theme-light .container-1If-HZ,.theme-light .reactors-Blmlhw {
    background-color: #fff
}
.theme-light .remove-3V-yj8 {
    color: #9e9e9e
}
.theme-light .remove-3V-yj8:hover {
    background-color: rgba(114,118,125,.1)
}
.theme-light .sidebar-1-SQro {
    background: #f3f3f4
}
.theme-light .reactionSelected-1pqISm {
    background-color: #dcddde
}
.theme-light .reactionDefault-GBA58K:hover {
    background-color: rgba(220,221,222,.3)
}
.theme-light .discriminator-byOsvi {
    color: #b9bbbe
}
.button-3Jq0g9 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-light .container-3cGP6G {
    background: #fff
}
.theme-dark .container-3cGP6G {
    background: #18191c
}
.item-2J1YMK {
    background: transparent;
}
.theme-light .item-2J1YMK {
    color: #9099a4
}
.theme-light .item-2J1YMK:active,.theme-light .item-2J1YMK:hover {
    background-color: #f6f6f7;
    color: #747f8d
}
.theme-dark .item-2J1YMK {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .item-2J1YMK:active,.theme-dark .item-2J1YMK:hover {
    background-color: #040405;
    color: #fff
}
.operations-36ENbA>a {
    color: #3a2648;
}
.theme-dark .operations-36ENbA {
    color: hsla(0,0%,100%,.3)
}
.theme-light .operations-36ENbA {
    color: #9099a4
}
.image-2JDb81 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 94px 120px;
}
.guildName-1Bc3Ta {
    color: rgb(57, 37, 74, 0.3);
}
.actionButtons-1sUUug {
    background-color: transparent;
}
.closeButton-17RIVZ {
    background-position: 50%;
    background-size: 16px 16px;
}
.theme-light .hasMoreButton-1MELpI {
    background: #fcfcfc;
    border-color: #e3e5e7;
    color: #3a2648
}
.theme-light .messageGroupWrapper-o-Zw7G {
    border-color: rgba(28,36,43,.06)
}
.theme-light .messageGroupWrapper-o-Zw7G:hover {
    border-color: rgba(28,36,43,.12)
}
.theme-light .messageGroupWrapper-o-Zw7G:hover .actionButtons-1sUUug {
    background-color: #fff;
}
.theme-light .body-bvcIjN {
    color: #737f8d
}
.theme-light .channelName-3kBz6H {
    color: #3f225a
}
.theme-light .guildName-1Bc3Ta {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .jumpButton-3DTcS_ {
    background-color: #ebebeb;
    color: rgba(115,127,141,.6)
}
.theme-light .jumpButton-3DTcS_:hover {
    color: #737f8d
}
.theme-dark .messagesPopoutWrap-1MQ1bW {
    background-color: rgba(39, 20, 56, 0.8);
    border-color: rgb(72, 16, 57, 0.6);
}
.theme-dark .header-ykumBX {
    background-color: rgba(74, 16, 55, 0.8);
}
.theme-dark .header-ykumBX .title-3pkaKd {
    color: #fff
}
.theme-dark .footer-1kmXd4 {
    background-color: #481039;
}
.theme-dark .footer-1kmXd4 .tip-31--sZ .body-bvcIjN {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .hasMoreButton-1MELpI {
    background: #32353b;
    border-color: #331f44;
    color: #3a2648
}
.theme-dark .channelName-3kBz6H {
    color: #fff
}
.theme-dark .guildName-1Bc3Ta {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .emptyPlaceholder-1zh-Eu .body-bvcIjN {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .messageGroupWrapper-o-Zw7G {
    background-color: rgba(65, 12, 54, 0.8);
    border-color: rgb(72, 16, 57, 0.6);
}
.theme-dark .messageGroupWrapper-o-Zw7G:hover {
    border-color: #481039;
}
.theme-dark .messageGroupWrapper-o-Zw7G:hover .actionButtons-1sUUug {
    background-color: rgba(32, 8, 40, 0);
    box-shadow: 0 0 6px 4px #651b4c00;
}
.theme-dark .jumpButton-3DTcS_ {
    background-color: #4a0f49;
    color: hsla(0,0%,100%,.6)
}
.theme-dark .jumpButton-3DTcS_:hover {
    color: #fff
}
.tab-bar.TOP .tab-bar-item {
    color: #87909c;
}
.tab-bar.TOP .tab-bar-item.selected {
    color: #3a2648
}
.tab-bar.SIDE .tab-bar-header {
    color: #fff;
}
.tab-bar.SIDE .tab-bar-item {
    color: hsla(0,0%,100%,.3);
}
.tab-bar.SIDE .tab-bar-item.selected,.tab-bar.SIDE .tab-bar-item:hover {
    color: #fff
}
.headerTabBarWrapper-27xBDe .tab-bar.TOP {
    border-bottom-color: transparent;
}
.headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item {
    color: rgba(115,127,141,.3);
}
.headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item.selected {
    border-bottom-color: #737f8d;
    color: #737f8d
}
.mentionFilter-1PQ6ey {
    background-position: right 6px;
    background-repeat: no-repeat;
    background-size: 9px 5px;
    color: rgba(115,127,141,.3);
}
.mentionFilter-1PQ6ey .value-2k8Drt {
    color: #737f8d;
}
.theme-dark .mentionFilter-1PQ6ey {
    color: #fff
}
.theme-dark .mentionFilter-1PQ6ey .label-12YslM {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .mentionFilter-1PQ6ey .value-2k8Drt {
    color: #fff
}
.theme-dark .headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item.selected {
    border-bottom-color: #fff;
    color: #fff
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow:before {
    border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before {
    border-bottom-color: #f0f0f0;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before {
    border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow:before {
    border-top-color: #fff
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow:before {
    border-top-color: #aeaeae;
}
.react-datepicker {
    background-color: #fff;
    color: #000;
}
.react-datepicker__header {
    background-color: #f0f0f0;
}
.react-datepicker__current-month {
    color: #000;
}
.react-datepicker__navigation--previous {
    border-right-color: #ccc;
}
.react-datepicker__navigation--previous:hover {
    border-right-color: #b3b2b2
}
.react-datepicker__navigation--next {
    border-left-color: #ccc;
}
.react-datepicker__navigation--next:hover {
    border-left-color: #b3b2b2
}
.react-datepicker__navigation--years-previous {
    border-top-color: #ccc;
}
.react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b2b2
}
.react-datepicker__navigation--years-upcoming {
    border-bottom-color: #ccc;
}
.react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b2b2
}
.react-datepicker__week-number {
    color: #ccc;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    background-color: #f0f0f0;
}
.react-datepicker__day,.react-datepicker__day-name {
    color: #000;
}
.react-datepicker__day:hover {
    background-color: #f0f0f0;
}
.react-datepicker__day--highlighted {
    background-color: #3dcc4a;
    color: #fff
}
.react-datepicker__day--highlighted:hover {
    background-color: #32be3f
}
.react-datepicker__day--highlighted-custom-1 {
    color: #f0f
}
.react-datepicker__day--highlighted-custom-2 {
    color: green
}
.react-datepicker__day--in-range,.react-datepicker__day--in-selecting-range,.react-datepicker__day--selected {
    background-color: #216ba5;
    color: #fff
}
.react-datepicker__day--in-range:hover,.react-datepicker__day--in-selecting-range:hover,.react-datepicker__day--selected:hover {
    background-color: #1d5d90
}
.react-datepicker__day--keyboard-selected {
    background-color: #2a87d0;
    color: #fff
}
.react-datepicker__day--keyboard-selected:hover {
    background-color: #1d5d90
}
.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(33,107,165,.5)
}
.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: #f0f0f0;
    color: #000
}
.react-datepicker__day--disabled {
    color: #ccc;
}
.react-datepicker__day--disabled:hover {
    background-color: transparent
}
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow {
    border-top-color: #b3b2b2
}
.react-datepicker__month-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow {
    border-top-color: #ccc;
}
.react-datepicker__month-dropdown,.react-datepicker__year-dropdown {
    background-color: #f0f0f0;
}
.react-datepicker__month-option:hover,.react-datepicker__year-option:hover {
    background-color: #ccc
}
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b2b2
}
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b2b2
}
.react-datepicker__close-icon {
    background-color: transparent;
}
.react-datepicker__close-icon:after {
    background-color: #216ba5;
    color: #fff;
}
.react-datepicker__today-button {
    background: #f0f0f0;
}
.react-datepicker__portal {
    background-color: rgba(0,0,0,.8);
}
@media (max-height: 550px),(max-width:400px) {
    .react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__day-name {
    }
}
.react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc
}
.react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b2b2
}
.react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc
}
.react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b2b2
}
.calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next,.calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 6px 12px;
}
.calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected {
    background: none;
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker {
    background-color: #fff
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__header {
    background-color: #fff;
    border-color: rgba(220,221,222,.2)
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__current-month {
    border-bottom-color: rgba(220,221,222,.2);
    color: #3f225a
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next,.theme-light .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous {
    border-color: #dcddde
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__week:last-of-type .react-datepicker__day {
    border-bottom-color: #dcddde
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__week .react-datepicker__day:last-of-type {
    border-right-color: #dcddde
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day-name {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day {
    border-left-color: #dcddde;
    border-top-color: #dcddde;
    color: #3f225a
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover,.theme-light .calendarPicker-2yf6Ci .react-datepicker__day:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled,.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled:hover {
    background-color: rgba(0,0,0,.05);
    color: rgba(0,0,0,.2)
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:after {
    background-color: #3a2648
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day--disabled,.theme-light .calendarPicker-2yf6Ci .react-datepicker__day--outside-month {
    background-color: #f6f6f7;
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__header {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgba(24,25,28,.2)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__current-month {
    border-bottom-color: rgba(24,25,28,.3);
    color: #f6f6f7
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous {
    border-color: #18191c
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__week:last-of-type .react-datepicker__day {
    border-bottom-color: #18191c
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__week .react-datepicker__day:last-of-type {
    border-right-color: #18191c
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day-name {
    color: rgba(246,246,247,.6)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day {
    border-left-color: #18191c;
    border-top-color: #18191c;
    color: #f6f6f7
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled:hover {
    background-color: #331f44;
    color: rgba(246,246,247,.3)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:after {
    background-color: #3a2648
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day--disabled,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day--outside-month {
    background-color: #331f44;
    color: rgba(246,246,247,.3)
}
.theme-light .keybindShortcut-1BD6Z1 {
    color: #3f225a
}
.theme-light .keybindShortcut-1BD6Z1 span:active {
    color: #000
}
.theme-light .dim-1l4L4y span {
    background-color: #fff;
    color: #95989d
}
.theme-light .dim-1l4L4y span:active {
    color: #777a7e
}
.theme-light .dark-2P8byF span {
    background-color: #3f225a;
    border-color: #221035;
    color: #95989d
}
.theme-light .dark-2P8byF span:active {
    color: #777a7e
}
.theme-light .keybindShortcutTipsSelect-HDyfe8:last-of-type:before {
    background-color: #dfe0e2
}
.theme-dark .keybindShortcut-1BD6Z1 {
    color: #f6f6f7
}
.theme-dark .keybindShortcut-1BD6Z1 span {
    background-color: #9e9e9e;
    color: #f6f6f7
}
.theme-dark .keybindShortcut-1BD6Z1 span:active {
    color: #c5c5c6
}
.theme-dark .dim-1l4L4y span {
    background-color: #9e9e9e;
    color: #b9bbbe
}
.theme-dark .dim-1l4L4y span:active {
    color: #949698
}
.theme-dark .keybindShortcutTipsSelect-HDyfe8:last-of-type:before {
    background-color: #3f225a
}
.theme-dark .popout-3sVMXz {
    background-color: rgba(39, 20, 56, 0.8);
    border: 1px solid rgba(64, 7, 61, 0.9);
}
.theme-dark .resultsGroup-r_nuzN .header-2N-gMV {
    color: #cacbce
}
.theme-dark .resultsGroup-r_nuzN .searchLearnMore-3SQUAj {
    background: url(/assets/9d54895f1d48ef22ffcb1dae14e76bdf.svg) no-repeat 50% 50%
}
.theme-dark .resultsGroup-r_nuzN .searchClearHistory-2cSSMO {
    background: url(/assets/8be8e7c66c7035a51f294dee367aea0a.svg) no-repeat 50% 50%
}
.theme-dark .option-96V44q.selected-rZcOL- {
    background-color: rgb(57, 37, 74, 0.5);
}
.theme-dark .option-96V44q.selected-rZcOL-:after {
    background: linear-gradient(90deg,rgba(35,38,42,0),rgb(57, 37, 74, 0.5));
}
.theme-dark .option-96V44q.selected-rZcOL-:before {
    background: url(/assets/4a6f43b5cd1e641841b4141045c0e82d.svg) no-repeat 0 50%
}
.theme-dark .option-96V44q .answer-1n6g43,.theme-dark .option-96V44q .nonText-3CRkO0,.theme-dark .option-96V44q strong {
    color: #caccce
}
.theme-dark .option-96V44q .filter-3Y_im- {
    color: #9e9e9e
}
.theme-dark .option-96V44q.user-O3Czj0 .displayedNick-3xxvzU {
    color: #caccce
}
.theme-dark .option-96V44q.user-O3Czj0 .displayUsername-Qekxml {
    color: #5e636a
}
.theme-dark .searchOption-zQ-1l6 .filter-3Y_im- {
    color: #caccce
}
.theme-dark .searchOption-zQ-1l6 .answer-1n6g43 {
    color: #9e9e9e
}
.theme-dark .searchQuery-1B7rtx {
    color: #caccce
}
.theme-dark .searchQuery-1B7rtx.selected-rZcOL- {
    background-color: #331f44
}
.theme-dark .searchQuery-1B7rtx .searchFor-3W5Vad strong {
    color: #9e9e9e
}
.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hint-165cR4 {
    color: #caccce
}
.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z:hover {
    background-color: #a02f7b
}
.theme-dark .searchResultChannelCategory-1l0lSn,.theme-dark .searchResultChannelIcon-1DnTme {
    color: #9e9e9e
}
.theme-light .popout-3sVMXz {
    background-color: #fff
}
.theme-light .resultsGroup-r_nuzN .header-2N-gMV {
    color: #cacbce
}
.theme-light .resultsGroup-r_nuzN .searchLearnMore-3SQUAj {
    background: url(/assets/9d54895f1d48ef22ffcb1dae14e76bdf.svg) no-repeat 50% 50%
}
.theme-light .resultsGroup-r_nuzN .searchClearHistory-2cSSMO {
    background: url(/assets/8be8e7c66c7035a51f294dee367aea0a.svg) no-repeat 50% 50%
}
.theme-light .option-96V44q:after {
    background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(80%,#fff));
    background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 80%)
}
.theme-light .option-96V44q.selected-rZcOL- {
    background-color: #f3f3f3
}
.theme-light .option-96V44q.selected-rZcOL-:before {
    background: url(/assets/4a6f43b5cd1e641841b4141045c0e82d.svg) no-repeat 0 50%
}
.theme-light .option-96V44q.selected-rZcOL-:after {
    background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,95.3%,0)),color-stop(50%,#f3f3f3));
    background: linear-gradient(90deg,hsla(0,0%,95.3%,0),#f3f3f3 50%)
}
.theme-light .option-96V44q .nonText-3CRkO0 {
    color: #5e636a
}
.theme-light .option-96V44q .filter-3Y_im- {
    color: #caccce
}
.theme-light .option-96V44q .answer-1n6g43,.theme-light .option-96V44q strong {
    color: #3f225a
}
.theme-light .option-96V44q.user-O3Czj0 .displayedNick-3xxvzU {
    color: #5e636a
}
.theme-light .option-96V44q.user-O3Czj0 .displayUsername-Qekxml {
    color: #caccce
}
.theme-light .searchOption-zQ-1l6 .filter-3Y_im- {
    color: #3f225a
}
.theme-light .searchOption-zQ-1l6 .answer-1n6g43 {
    color: #caccce
}
.theme-light .searchQuery-1B7rtx {
    color: #caccce
}
.theme-light .searchQuery-1B7rtx.selected-rZcOL- {
    background-color: #f9f9f9
}
.theme-light .searchQuery-1B7rtx .searchFor-3W5Vad strong {
    color: #3f225a
}
.theme-light .datePicker--XZbmJ .datePickerHint-3Q1Udw .hint-165cR4 {
    color: #caccce
}
.theme-light .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z {
    background-color: #3a2648;
    color: #fff
}
.theme-light .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z:hover {
    background-color: #a02f7b
}
.theme-light .searchResultChannelCategory-1l0lSn,.theme-light .searchResultChannelIcon-1DnTme {
    color: #b9bbbe
}
.searchAnswer-3Dz2-q,.searchFilter-2ESiM3 {
    color: #fff;
}
.theme-light .searchAnswer-3Dz2-q,.theme-light .searchFilter-2ESiM3 {
    background-color: #9e9e9e
}
.theme-dark .searchAnswer-3Dz2-q,.theme-dark .searchFilter-2ESiM3 {
    background-color: #581743
}
.DraftEditor-editorContainer {
    background-color: hsla(0,0%,100%,0);
}
.public-DraftEditorPlaceholder-root {
    color: #9197a3;
}
.public-DraftEditorPlaceholder-hasFocus {
    color: #bdc1c9
}
.search .search-bar {
    background-color: rgba(246,246,247,.6);
}
.search .DraftEditor-root {
    color: rgba(57, 37, 74, 0.6);
}
.search .DraftEditor-root .public-DraftEditorPlaceholder-root {
    color: rgb(57, 37, 74, 0.3);
}
.theme-dark .search .search-bar {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .search .search-bar .public-DraftEditorPlaceholder-root {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .search .search-bar .search-bar-clear {
    background-color: #9a9da0
}
.theme-dark .search .search-bar .search-bar-clear:before {
    background-color: #63666a
}
.theme-dark .search .search-bar .search-bar-clear:after {
    background-color: #9a9da0
}
.theme-dark .search .search-bar .search-bar-clear.active {
    background: #d6d7d8
}
.theme-dark .search .search-bar .search-bar-clear.active:after,.theme-dark .search .search-bar .search-bar-clear.active:before {
    background-color: #63666a
}
.theme-dark .search .search-bar .search-bar-clear.active:hover {
    background: #fff
}
.theme-dark .search .DraftEditor-root {
    color: #fff
}
.title-1aVOXw {
    color: #3f225a;
}
.iconBadge-2dji3k {
    background-color: #f04747;
}
.theme-light .headerBar-UHpsPw {
    background: #fff;
}
.theme-light .iconForeground-3y9f0B,.theme-light .title-1aVOXw {
    color: #3f225a
}
.theme-light .iconBadge-2dji3k {
    border-color: #fff
}
.theme-light .divider-2PMBlV {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .iconForeground-3y9f0B,.theme-dark .title-1aVOXw {
    color: #fff
}
.theme-dark .iconBadge-2dji3k {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .divider-2PMBlV {
    background: hsla(0,0%,84.7%,.1)
}
.article-3kb3qm {
    background-color: #221035;
}
.background-1ri_HN {
    background-position: top
}
.background-1ri_HN,.storePromotionBackground-3DvkVd {
    background-repeat: no-repeat;
    background-size: cover;
}
.storePromotionBackground-3DvkVd {
    background-position: 50%
}
.gameArea-2c59Um {
    color: #b9bbbe;
}
.gameName-2XIejT {
    color: #b9bbbe;
}
.title-3gWYEg {
    color: #dcddde;
}
.simpleTitle-1om7yj {
    color: #f6f6f7;
}
.description-1CCuDd {
    color: #b9bbbe;
}
.timestamp-JB3BQ5 {
    color: #9e9e9e;
}
.arrowContainer-10m4Cy {
    color: #f6f6f7;
}
@media (max-width: 600px) {
    .prevButtonContainer-Rc83MJ {
    }
    }
.carousel-JbsNzL {
    background-color: #221035;
}
.paginationItem-3-MBTL {
    background: #18191c;
}
.paginationItem-3-MBTL:before {
    background: #fff;
}
.paginationItem-3-MBTL:after {
    background: -webkit-gradient(linear,right top,left top,from(transparent),to(#221035));
    background: linear-gradient(270deg,transparent 0,#221035);
    background-blend-mode: color;
}
.paginationItem-3-MBTL:hover {
    background: #221035
}
.selectedPage-2JQS2s {
    background: #221035;
}
.paginationTitle-1XtEga {
    color: #f6f6f7;
}
.paginationSubtitle-bqhkei {
    color: #9e9e9e;
}
.promotionBackground-2urB7- {
    background-position: 50%;
}
.arrow-1-DaGi {
    color: #9e9e9e;
}
.dot-22bIa4 {
    background-color: #fff;
}
.dockIcon-1aEfsH {
    background-size: 100%;
}
.theme-light .dockItemText-3qYREY {
    color: #3f225a
}
.theme-light .dockItem-2kQDqg:hover {
    background-color: #dcddde
}
.theme-dark .dockItemText-3qYREY {
    color: #dcddde
}
.theme-dark .dockItem-2kQDqg:hover {
    background-color: #221035
}
.theme-light .addButton-3s8Y-Y {
    color: #3f225a
}
.theme-light .emptyState-N8MHmB {
    border-color: rgba(220,221,222,.6);
    color: #b9bbbe
}
.theme-dark .addButton-3s8Y-Y {
    color: #dcddde
}
.theme-dark .emptyState-N8MHmB {
    border-color: rgba(47,49,54,.6);
    color: #9e9e9e
}
.theme-light .emptyState-2-sT0o {
    background-color: #fff;
    border-color: #dcddde
}
.theme-light .title-1LheRD {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .subtitle-nN6eXt {
    color: #9e9e9e
}
.theme-dark .emptyState-2-sT0o {
    background-color: rgb(57, 37, 74, 0.3);
    border-color: #331f44
}
.theme-dark .title-1LheRD {
    color: #dcddde
}
.theme-dark .subtitle-nN6eXt {
    color: #9e9e9e
}
.theme-dark .activityFeed-28jde9 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .activityFeed-28jde9 {
    background-color: #f6f6f7
}
.theme-dark .icon-2oIyBi {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .clearIcon-2z4ymv:hover {
    color: #f6f6f7
}
.theme-dark .libraryFilterInput-3JzqZD {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .libraryFilterInput-3JzqZD::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .libraryFilterInput-3JzqZD:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .libraryFilterInput-3JzqZD::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-light .icon-2oIyBi {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .clearIcon-2z4ymv:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .libraryFilterInput-3JzqZD {
    background-color: rgba(246,246,247,.6)
}
.theme-light .libraryFilterInput-3JzqZD::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .libraryFilterInput-3JzqZD:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .libraryFilterInput-3JzqZD::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.title-1rXJ86 {
    color: currentColor;
}
.theme-dark .rate-1Gat8e {
    color: #9e9e9e
}
.theme-dark .headerCellSorted-1JR4Ny {
    color: #fff
}
.theme-light .headerCellSorted-1JR4Ny {
    color: #3f225a
}
.diskProgress-37-Sik {
    color: #00b0f4
}
.networkProgress-2auspD {
    color: #43b581
}
.theme-dark .gameUpdates-2GPqBU {
    background-color: #221035
}
.theme-dark .row-2X_kYI {
    border-bottom-color: hsla(0,0%,100%,.1)
}
.theme-dark .nameCellText-Ubz8FY {
    color: #f6f6f7
}
.theme-dark .progressCellText-3avmMz {
    color: #9e9e9e
}
.theme-light .gameUpdates-2GPqBU {
    background-color: #f6f6f7
}
.theme-light .row-2X_kYI {
    border-bottom-color: rgba(220,221,222,.6)
}
.theme-light .nameCellText-Ubz8FY {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .progressCellText-3avmMz {
    color: #9e9e9e
}
.rowWrapperActive-2L7i9f .row-ZLfFhY {
    border-top-color: transparent
}
.rowBackground-3MeNoN {
    background-repeat: no-repeat;
    background-size: cover;
}
.nameCellNew-3SokLB {
    color: #faa61a;
}
.theme-dark .header-39GIC8 {
    background-color: rgba(57, 37, 74, 0.6);
    border-bottom-color: hsla(0,0%,100%,.1);
    color: hsla(0,0%,100%,.3)
}
.theme-dark .headerCell-3L6rFG {
    border-left-color: rgba(246,246,247,.1)
}
.theme-dark .headerCellSorted-3a5AzJ {
    color: #fff
}
.theme-dark .headerCell-3L6rFG:hover:not(.headerCellSorted-3a5AzJ) {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .row-ZLfFhY {
    color: #f6f6f7
}
.theme-dark .rowWrapperActive-2L7i9f {
    background-color: rgb(57, 37, 74, 0.3);
}
.theme-dark .rowWrapper-2fB6P0+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: rgba(246,246,247,.1)
}
.theme-dark .rowWrapper-2fB6P0+.rowWrapperActive-2L7i9f .row-ZLfFhY,.theme-dark .rowWrapperActive-2L7i9f+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: transparent
}
.theme-dark .actionIconBase-2L-mPj {
    color: #fff
}
.theme-dark .emptyStateSmall-2Ttdgm {
    border-top-color: rgba(246,246,247,.1)
}
.theme-dark .emptyStateHeader-3CJtAy {
    color: #f6f6f7
}
.theme-dark .emptyStateDescription-2IePen {
    color: #b9bbbe
}
.theme-dark .emptyWumpus-12J3jI {
    background: url(/assets/131dcaaa628405e6d0ebee7708111c7a.svg)
}
.theme-light .header-39GIC8 {
    background-color: #fff;
    border-bottom-color: rgba(220,221,222,.6);
    color: #b9bbbe
}
.theme-light .headerCell-3L6rFG {
    border-left-color: #f6f6f7
}
.theme-light .headerCellSorted-3a5AzJ {
    color: #3f225a
}
.theme-light .headerCell-3L6rFG:hover:not(.headerCellSorted-3a5AzJ) {
    color: #9e9e9e
}
.theme-light .row-ZLfFhY {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .rowWrapper-2fB6P0+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: rgba(220,221,222,.6)
}
.theme-light .rowWrapper-2fB6P0+.rowWrapperActive-2L7i9f .row-ZLfFhY,.theme-light .rowWrapperActive-2L7i9f+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: transparent
}
.theme-light .emptyStateSmall-2Ttdgm {
    border-top-color: rgba(220,221,222,.6)
}
.theme-light .emptyStateHeader-3CJtAy {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .emptyStateDescription-2IePen {
    color: #9e9e9e
}
.theme-light .emptyWumpus-12J3jI {
    background: url(/assets/d0320d29cdef93b8e2baf889a28d32e0.svg)
}
@media (max-width: 1200px) {
    .settingIcons-3QYa5E {
    }
    }
@media (max-width: 980px) {
    .platformCell-XyBBs6 {
    }
}
@media (max-width: 860px) {
    .lastPlayedCell-2arbtc {
    }
}
@media (max-width: 780px) {
    .rowWrapper-2fB6P0 {
    }
    }
.theme-dark .gameLibrary-TTDw4Y {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .gameLibrary-TTDw4Y {
    background-color: #f6f6f7
}
.friendsIcon-2I7J-e {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 32px 28px;
}
.guild-1EfMGQ .avatar-small {
    background-repeat: no-repeat;
    background-size: 50px 50px;
}
.guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,.guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px;
}
.guildSeparator-1X4GQ1 {
    background: none;
}
.theme-light .guildsWrapper-5TJh6A {
    background-color: #221035
}
.theme-light .homeIcon-1FoKUJ {
    color: #fff
}
.theme-light .guildPlaceholder-1ioaid {
    border-color: #4a0f49
}
.theme-light .guild-1EfMGQ.unread-qLkInr:before {
    background: #8a8e94
}
.theme-light .guild-1EfMGQ.selected-ML3OIq:before {
    background: #fff
}
.theme-light .guild-1EfMGQ .guildInner-3DSoA4 {
    background: #331f44
}
.theme-light .guild-1EfMGQ .guildInner-3DSoA4 a {
    color: #fff
}
.theme-light .guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,.theme-light .guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
    background-color: #221035
}
.theme-light .guild-1EfMGQ .guildIcon-CT-ZDq {
    background-color: transparent
}
.theme-light .guildSeparator-1X4GQ1:after {
    background: #331f44
}
.theme-light .guildsError-3cFMtY {
    background: #413338;
    border-color: #f04747;
    color: #fff
}
.theme-light .guildsError-3cFMtY:hover {
    background-color: #f04747
}
.theme-light .guildsAdd-21_IdK {
    background: #221035;
    border-color: #4a0f49;
    color: #4a0f49
}
.theme-light .guildsAdd-21_IdK:hover {
    border-color: hsla(0,0%,100%,.75);
    color: hsla(0,0%,100%,.75)
}
.theme-light .downloadAppButton-3EFlA6 {
    background-color: transparent;
    color: hsla(0,0%,100%,.3)
}
.theme-light .downloadAppButton-3EFlA6:hover {
    color: hsla(0,0%,100%,.5)
}
.theme-light .downloadAppButton-3EFlA6:after {
    background-color: #4b4d4f
}
.theme-dark .guildsWrapper-5TJh6A {
    background-color: #221035
}
.theme-dark .homeIcon-1FoKUJ {
    color: #fff
}
.theme-dark .guildPlaceholder-1ioaid {
    border-color: #4a0f49
}
.theme-dark .guild-1EfMGQ.unread-qLkInr:before {
    background: #8a8e94
}
.theme-dark .guild-1EfMGQ.selected-ML3OIq:before {
    background: #fff
}
.theme-dark .guild-1EfMGQ .guildInner-3DSoA4 {
    background: #3a2648 !important;
}
.theme-dark .guild-1EfMGQ .guildInner-3DSoA4 a {
    color: #fff
}
.theme-dark .guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,.theme-dark .guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
    background-color: #221035
}
.theme-dark .guild-1EfMGQ .guildIcon-CT-ZDq {
    background-color: transparent
}
.theme-dark .guildSeparator-1X4GQ1:after {
    background: #331f44
}
.theme-dark .guildsError-3cFMtY {
    background: #413338;
    border-color: #f04747;
    color: #fff
}
.theme-dark .guildsError-3cFMtY:hover {
    background-color: #f04747
}
.theme-dark .guildsAdd-21_IdK {
    background: #221035;
    border-color: #4a0f49;
    color: #4a0f49
}
.theme-dark .guildsAdd-21_IdK:hover {
    border-color: hsla(0,0%,100%,.75);
    color: hsla(0,0%,100%,.75)
}
.theme-dark .downloadAppButton-3EFlA6 {
    background-color: transparent;
    color: hsla(0,0%,100%,.3)
}
.theme-dark .downloadAppButton-3EFlA6:hover {
    color: hsla(0,0%,100%,.5)
}
.theme-dark .downloadAppButton-3EFlA6:after {
    background-color: #4b4d4f
}
.wrapper-232cHJ {
    background-clip: padding-box;
    background-color: #f04747;
    color: #fff;
}
.downloadIcon-3TWA3B {
    color: #fff
}
.theme-dark .friendsOnline-_wi_fM,.theme-light .friendsOnline-_wi_fM {
    color: hsla(0,0%,100%,.3)
}
.bar-30k2ka {
    color: #fff;
}
.unread-1xRYoj {
    background-color: rgba(88, 23, 67, 0.8);
}
.unread-1xRYoj:hover {
    background-color: rgba(88, 23, 67);
}
.unread-1xRYoj:active {
    background-color: rgba(88, 23, 67);
}
.mention-1f5kbO {
    background-color: rgba(240,71,71,.9)
}
.mention-1f5kbO:hover {
    background-color: #f04747
}
.mention-1f5kbO:active {
    background-color: #d84040
}
.icon-2aINcz {
    color: #fff;
}
.icon-2doZ3q {
    background-position: 50%;
    background-repeat: no-reapeat;
}
.theme-light .menu-Sp6bN1 {
    background: #fff;
}
.theme-light .item-1GzJrl {
    color: #99aab5
}
.theme-light .item-1GzJrl:hover {
    background-color: #f9f9f9;
    color: #737f8d;
}
.theme-light .item-1GzJrl:hover.invite-271nFU {
    color: #a02f7b
}
.theme-light .item-1GzJrl.invite-271nFU {
    color: #3a2648
}
.theme-light .item-1GzJrl.leave-1DRJfn {
    color: #f04747
}
.theme-light .separator-2zcjq8 {
    border-bottom-color: #f5f5f5
}
.theme-light .alt-3btY0e .helper-2c73HK {
    color: rgba(153,170,181,.8)
}
.theme-dark .menu-Sp6bN1 {
    background: #581743;
}
.theme-dark .item-1GzJrl {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .item-1GzJrl:hover {
    background-color: #500d3e;
    color: #fff;
}
.theme-dark .item-1GzJrl:hover.invite-271nFU {
    color: #a02f7b
}
.theme-dark .item-1GzJrl.invite-271nFU {
    color: #3a2648
}
.theme-dark .item-1GzJrl.leave-1DRJfn {
    color: #f04747
}
.theme-dark .separator-2zcjq8 {
    border-bottom-color: hsla(0,0%,96.1%,.08)
}
.theme-dark .alt-3btY0e .helper-2c73HK {
    color: rgba(153,170,181,.8)
}
.header-2o-2hj {
    color: #fff;
}
.header-2o-2hj:hover {
    background-color: rgba(0,0,0,.1)
}
.popout-open .header-2o-2hj {
    background-color: rgba(0,0,0,.1)
}
.containerDragAfter-1F4fgZ:after,.containerDragBefore-31UGCO:before {
    background-color: #43b581;
}
.containerUserOver-1U5YnL:after {
    background-color: rgba(67,181,129,.1);
}
.actionIcon-2Hi9ZG {
    color: #fff;
}
.message-15tBk4 strong {
    background-color: rgba(114,137,218,.1);
    color: #3a2648
}
.wrapper-2NJDcI {
    background-color: rgba(57, 37, 74, 0.6);
    color: #9e9e9e;
}
.userHovered-2_fT4Z:active {
    background-color: rgb(57, 37, 74, 0.3);
}
.avatarDefault-35WC3R,.avatarSpeaking-1wJCNq {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
.nameDefault-2s3kbY {
    color: #9e9e9e
}
.nameHovered-21k1eo,.nameSpeaking-3UhoEZ {
    color: #f6f6f7
}
.priority-1tfmlB {
    background-color: #9e9e9e;
}
.prioritySpeaking-3pMeFb {
    background-color: #43b581
}
.iconCollapsed-3hFp_8,.iconDefault-3Gr8d2,.nameCollapsed-34uFWo,.nameDefault-2DI02H {
    color: #9e9e9e;
}
.iconMuted-1HVBGH,.nameMuted-1MCOt4 {
    color: #3f225a
}
.iconHovered-2L3-fB,.iconHoveredCollapsed-3caIIZ,.nameHovered-1gxhWH,.nameHoveredCollapsed-2orEWB {
    color: #b9bbbe
}
.iconUnread-2eGkvX,.nameUnread-njOjIS {
    color: #dcddde
}
.containerDragAfter-3TEhpe:before,.containerDragBefore-3Dzc5x:before {
    background-color: #43b581;
}
.containerUserOver-1Tcb7l:after {
    background-color: rgba(67,181,129,.1);
}
.channelNotices-41mJbj .channelNotice-1-XFjC.guildMFAWarning-3GEzs8 {
    background: #581743 url(/assets/916a384814e3bbd2a84e2a1b352a17c3.svg) no-repeat center 20px
}
.channelNotices-41mJbj .channelNotice-1-XFjC.invite-OjTXrW {
    background: #581743 url(/assets/bf625d222187f542b9d7179109422e2c.svg) no-repeat center 20px
}
.channelNotices-41mJbj .channelNotice-1-XFjC.quickswitcher-35bYg4 {
    background: #581743 url(/assets/8fdb69b7684b8e1ecb3fdde909daca41.svg) no-repeat center 35px;
}
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R {
    background: url(/assets/eb69ec9fdd30653a3ade1ab501a7cd3d.svg);
}
.channelNotices-41mJbj .channelNotice-1-XFjC .message-3SOT5P {
    color: hsla(0,0%,100%,.6);
}
.channelNotices-41mJbj .channelNotice-1-XFjC .message-3SOT5P .btn-11C5_u {
    background-color: rgba(57, 37, 74, 0.6);
    color: #fff;
}
.channelNotices-41mJbj .channelNotice-1-XFjC .message-3SOT5P .btn-11C5_u:active {
    background-color: #313339
}
.container-PNkimc {
    background-color: #331f44;
}
.button-3i182Z {
    background-color: transparent;
}
.buttonContents-7fe2l0 {
    background: transparent;
    color: #fff;
}
.buttonInner-1stGzH {
    background-color: #221035;
}
.button-3i182Z:active .buttonInner-1stGzH {
    background-color: rgba(57, 37, 74, 0.6)
}
@-webkit-keyframes RotateGradient-BBKm-Y {
    0% {
    }
    }
@keyframes RotateGradient-BBKm-Y {
    0% {
    }
    }
.notice-RSKmnp {
    background-color: #221035;
    color: #fff;
}
.gameBackground-3YC6EB {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.gameIcon-2gaRLz {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.theme-dark .body-3AvtFJ {
    color: #dcddde
}
.theme-dark .errorLabel-7OAe-A {
    color: #b9bbbe
}
.theme-dark .errorDetails-qKU8eS {
    background: #331f44;
    border-color: rgba(32,34,37,.3);
    color: #fff
}
.theme-dark .closeLink-2MRAUp {
    color: #fff
}
.theme-light .body-3AvtFJ {
    color: #3f225a
}
.theme-light .errorLabel-7OAe-A {
    color: #9e9e9e
}
.theme-light .errorDetails-qKU8eS {
    background: #f8f9f9;
    border-color: rgba(227,229,232,.6);
    color: #747f8d
}
.theme-light .closeLink-2MRAUp {
    color: #3a2648
}
.noticeDefault-362Ko2 {
    background-color: #f26522;
    color: #fff
}
.noticeDefault-362Ko2 .button-1MICoQ:hover {
    color: #f26522
}
.noticePremium-12Zvj9 {
    background-color: #221035;
    color: #fff
}
.noticePremium-12Zvj9 .button-1MICoQ:hover {
    color: #221035
}
.noticeInfo-3_iTE1 {
    background-color: #4a90e2;
    color: #fff
}
.noticeInfo-3_iTE1 .button-1MICoQ:hover {
    color: #4a90e2
}
.noticeSuccess-3Y62ob {
    background-color: #43b581;
    color: #fff
}
.noticeSuccess-3Y62ob .button-1MICoQ:hover {
    color: #43b581
}
.noticeDanger-7u-yT9 {
    background-color: #f04747;
    color: #fff
}
.noticeDanger-7u-yT9 .button-1MICoQ:hover {
    color: #f04747
}
.noticeStreamerMode-2TSQpg {
    background-color: #593695;
    color: #fff
}
.noticeStreamerMode-2TSQpg .button-1MICoQ:hover {
    color: #593695
}
.noticeFacebook-3equ5g {
    background-color: #355089;
    color: #fff
}
.noticeFacebook-3equ5g .button-1MICoQ:hover {
    color: #355089
}
.noticeSpotify-27dhr0 {
    background-color: #1db954;
    color: #fff
}
.noticeSpotify-27dhr0 .button-1MICoQ:hover {
    color: #1db954
}
.noticeBrand-3nQBC_ {
    background-color: #3a2648;
    color: #fff
}
.noticeBrand-3nQBC_ .button-1MICoQ:hover {
    color: #3a2648
}
.dismiss-SCAH9H {
    background: url(/assets/7731c77d99babca1a8faec204d98c380.svg) no-repeat;
    background-position: 50% 55%;
    background-size: 10px 10px;
}
.button-1MICoQ {
    background-color: transparent;
    color: #fff;
}
.button-1MICoQ:hover {
    background: #fff;
    border-color: #fff
}
.textLink-27KAGV {
    color: #fff;
}
.premiumLogo-30dge3 {
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-dark .subHeader-3TFIST {
    color: #b9bbbe
}
.theme-light .subHeader-3TFIST {
    color: #9e9e9e
}
.phoneField-38N1bJ .plusSign-15Cgdh {
    color: #9e9e9e;
}
.theme-light .phoneField-38N1bJ {
    background-color: #fff
}
.theme-light .phoneField-38N1bJ .countryButton-3xq3Ts {
    background-color: #f6f6f7
}
.theme-light .phoneField-38N1bJ .countryButton-3xq3Ts:hover {
    background-color: #ddddde
}
.theme-light .phoneField-38N1bJ .countryCode-2TeNMX {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .phoneField-38N1bJ .inputField-aNPXsv {
    background-color: #fff;
    color: #3f225a
}
.theme-light .phoneFieldPopout-h7c9mt .countryName-3dA1Xv {
    color: #9e9e9e
}
.theme-light .phoneFieldPopout-h7c9mt .countryCode-2TeNMX {
    color: #3f225a
}
.theme-dark .phoneField-38N1bJ {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .phoneField-38N1bJ .countryButton-3xq3Ts {
    background-color: #3f225a
}
.theme-dark .phoneField-38N1bJ .countryButton-3xq3Ts:hover {
    background-color: #474c53
}
.theme-dark .phoneField-38N1bJ .countryCode-2TeNMX {
    color: #f6f6f7
}
.theme-dark .phoneField-38N1bJ .inputField-aNPXsv {
    background-color: rgba(57, 37, 74, 0.6);
    color: #f6f6f7
}
.theme-dark .phoneFieldPopout-h7c9mt .countryName-3dA1Xv {
    color: #b9bbbe
}
.theme-dark .phoneFieldPopout-h7c9mt .countryCode-2TeNMX {
    color: #f6f6f7
}
.theme-light .input-3yHnCz {
    background-color: #e3e5e8;
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark .input-3yHnCz {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-light .phoneVerificationModal-OzcDc3 .title-3qNdae {
    color: #3f225a
}
.theme-light .phoneVerificationModal-OzcDc3 .description-3JBgvQ {
    color: #9e9e9e
}
.theme-light .phoneVerificationModal-OzcDc3 .description-3JBgvQ.error-1E-Ycl {
    color: #f04747
}
.theme-dark .phoneVerificationModal-OzcDc3 .title-3qNdae {
    color: #f6f6f7
}
.theme-dark .phoneVerificationModal-OzcDc3 .description-3JBgvQ {
    color: #9e9e9e
}
.theme-dark .phoneVerificationModal-OzcDc3 .description-3JBgvQ.error-1E-Ycl {
    color: #f04747
}
.theme-dark .sectionBody-DUrZPU,.theme-dark .subHeader-3FXnUc {
    color: #b9bbbe
}
.theme-light .sectionBody-DUrZPU,.theme-light .subHeader-3FXnUc {
    color: #9e9e9e
}
.userSettingsAccount-2eMFVR .danger-16OpjC {
    border-color: #f04747;
}
.userSettingsAccount-2eMFVR .warning--Ek9es {
    border-color: #faa61a;
}
.userSettingsAccount-2eMFVR .avatar-uploader-inner {
    background-size: 100% 100%;
}
@media (max-width: 840px) {
    .userSettingsSecurityImage-21pI_Q {
    }
}
.userSettingsSecurity-3IYeMF .isEnabled-24g9qA {
    color: #43b581
}
.questionMark-CWEQZn .icon-3a_Jgd {
    color: #f6f6f7;
}
.theme-light .userSettingsAccount-2eMFVR .viewBody-2Qz-jg,.theme-light .userSettingsSecurity-3IYeMF .codeCheckbox-1T0TTy {
    color: #3f225a
}
.theme-light .questionMark-CWEQZn {
    background-color: #3a2648
}
.theme-light .questionMark-CWEQZn:hover {
    background-color: #8ea1e1
}
.theme-light .questionMark-CWEQZn:hover .icon-3a_Jgd {
    color: #f6f6f7
}
.theme-light .multiInputLast-1aQ3YA:before {
    border-right-color: #9e9e9e
}
.theme-dark .userSettingsAccount-2eMFVR .viewBody-2Qz-jg {
    color: #b9bbbe
}
.theme-dark .userSettingsSecurity-3IYeMF .codeCheckbox-1T0TTy {
    color: #dcddde
}
.theme-dark .questionMark-CWEQZn {
    background-color: #3a2648
}
.theme-dark .questionMark-CWEQZn:hover {
    background-color: #8ea1e1
}
.theme-dark .multiInputLast-1aQ3YA:before {
    border-right-color: #fff
}
.theme-dark .codebox-1FquOa,.theme-light .codebox-1FquOa {
    background: none;
}
.connectionHeader-2MDqhu {
    background: rgba(0,0,0,.1);
}
.connectionHeader-2MDqhu .connectionAccountValue-3VdBGs {
    color: #fff;
}
.connectionOptionsWrapper-3KIj1Z .connectionOptionSwitch-3KNn-E h3 {
    color: #fff;
}
.integrationsWrapper-VkM_zO a {
    color: #fff;
}
.integration-3kMeY4 {
    background: rgba(0,0,0,.1);
}
.integrationInner-3SUFBs .channelLink-2TxEu3 {
    color: hsla(0,0%,100%,.3);
}
.integrationInner-3SUFBs .integrationName-2tSCoY {
    color: #fff
}
.warning-1XxEC9 {
    color: #faa61a
}
.connectionDelete-2Odoln {
    color: transparent;
}
.connectionDelete-2Odoln:after,.connectionDelete-2Odoln:before {
    background-color: #fff;
}
.theme-light .accountBtnInner-sj5jLs {
    background-color: #fff;
    border-color: #dcddde
}
.theme-light .accountBtnInner-sj5jLs:hover {
    background-color: #fff;
    border-color: #9e9e9e
}
.theme-dark .accountBtnInner-sj5jLs {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: #221035
}
.theme-dark .accountBtnInner-sj5jLs:hover {
    background-color: #3f225a;
    border-color: #040405
}
.theme-light .fontScaleLarge-3xtq7i,.theme-light .fontScaleSmall-368quy {
    color: #3f225a
}
.theme-dark .fontScaleLarge-3xtq7i,.theme-dark .fontScaleSmall-368quy {
    color: #f6f6f7
}
.container-CpszHS:not(.disabled-29eJ21):hover {
    border-color: rgba(240,71,71,.3)
}
.container-CpszHS.recording-1H2dS7 {
    border-color: rgba(240,71,71,.6);
    color: #f04747
}
.container-CpszHS.recording-1H2dS7 .button-34kXw5 {
    background-color: rgba(240,71,71,.1);
    color: #f04747
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i {
    color: #f04747
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i::-webkit-input-placeholder {
    color: transparent
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i:-ms-input-placeholder {
    color: transparent
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i::placeholder {
    color: transparent
}
@-webkit-keyframes shadowPulse-2kjgqQ {
    0% {
    }
    }
@keyframes shadowPulse-2kjgqQ {
    0% {
    }
    }
.ghostPill-2-KUPM {
    background-color: rgba(250,166,26,.1);
    color: #faa61a;
}
@media (max-width: 900px) {
    .container-1-STTv .noticeIcon-1phvR2 {
    }
}
.permissionCheckmark-1SeKr2 {
    background: url(/assets/119de0e66a41e5a39d17f2699b34b3f2.svg) no-repeat;
    background-size: 18px 18px;
}
.user-settings-games .game-input {
    background: none;
    color: #fff;
}
.user-settings-games .now-playing-add .link:hover {
    color: #00b0f4
}
.user-settings-games .game-verified-icon {
    background: url(/assets/c2667513479f3542e40dc0bc320f9816.svg) no-repeat;
}
.user-settings-games .game-name-input {
    background-color: transparent;
}
.user-settings-games .last-played {
    color: #9e9e9e;
}
.user-settings-games .overlay-warning-icon {
    background: url(/assets/afc17a02f2ea7406b0ee518c28414f7c.svg) no-repeat;
}
.theme-light .user-settings-games .now-playing-add {
    color: #b9bbbe
}
.theme-light .user-settings-games .game-name {
    color: #3f225a
}
.theme-light .user-settings-games .game-name-input:focus,.theme-light .user-settings-games .game-name-input:hover {
    background-color: #fff;
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .user-settings-games .last-played {
    color: #9e9e9e
}
.theme-light .user-settings-games .overlay-status-text {
    color: #b9bbbe
}
.theme-light .user-settings-games .divider-vertical {
    background-color: #dcddde
}
.theme-light .add-game-popout {
    background-color: #fff
}
.theme-dark .user-settings-games .now-playing-add {
    color: #9e9e9e
}
.theme-dark .user-settings-games .game-name {
    color: #f6f6f7
}
.theme-dark .user-settings-games .game-name-input:focus,.theme-dark .user-settings-games .game-name-input:hover {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-dark .user-settings-games .last-played,.theme-dark .user-settings-games .overlay-status-text {
    color: #9e9e9e
}
.theme-dark .user-settings-games .divider-vertical {
    background-color: #3f225a
}
.theme-dark .add-game-popout {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .add-game-popout .cancel-button {
    color: #fff
}
.theme-dark .user-settings-games .now-playing-add,.theme-light .user-settings-games .now-playing-add {
    color: #b9bbbe
}
.theme-dark .user-settings-games .now-playing,.theme-light .user-settings-games .now-playing {
    background-color: #43b581
}
.theme-dark .user-settings-games .now-playing .game-name,.theme-light .user-settings-games .now-playing .game-name {
    color: #f6fbf9
}
.theme-dark .user-settings-games .now-playing .game-name-input:focus,.theme-dark .user-settings-games .now-playing .game-name-input:hover,.theme-light .user-settings-games .now-playing .game-name-input:focus,.theme-light .user-settings-games .now-playing .game-name-input:hover {
    background-color: rgba(27,72,52,.3);
    border-color: #1b4834
}
.theme-dark .user-settings-games .now-playing .last-played,.theme-dark .user-settings-games .now-playing .overlay-status-text,.theme-light .user-settings-games .now-playing .last-played,.theme-light .user-settings-games .now-playing .overlay-status-text {
    color: #b4e1cd
}
.theme-dark .user-settings-games .not-detected,.theme-light .user-settings-games .not-detected {
    background-color: #747f8d
}
.theme-dark .user-settings-games .not-detected .game-name,.theme-light .user-settings-games .not-detected .game-name {
    color: #f8f9f9
}
.theme-dark .user-settings-games .not-detected .last-played,.theme-light .user-settings-games .not-detected .last-played {
    color: #c7ccd1
}
.theme-dark .usageInfo-2WQAwr {
    color: #b9bbbe
}
.theme-light .usageInfo-2WQAwr {
    color: #3f225a
}
.theme-dark .rowTitle-3xCiqy {
    color: #dcddde
}
.theme-dark .rowBody-10yI-R {
    color: #9e9e9e
}
.theme-dark .separator-2V0h65 {
    background: rgba(114,118,125,.3)
}
.theme-dark .defaultLocationCheckbox-26R_PI {
    color: #f6f6f7
}
.theme-dark .defaultIndicator-2X8Auf {
    background-color: #3f225a;
    color: #fff
}
.theme-light .rowTitle-3xCiqy {
    color: #3f225a
}
.theme-light .rowBody-10yI-R {
    color: rgba(114,118,125,.6)
}
.theme-light .separator-2V0h65 {
    background: rgba(114,118,125,.3)
}
.theme-light .defaultLocationCheckbox-26R_PI {
    color: #3f225a
}
.theme-light .defaultIndicator-2X8Auf {
    background-color: #3f225a;
    color: #fff
}
.hiddenLibraryApplication-2esFER:last-of-type:hover {
    border-bottom-color: transparent
}
.theme-dark .applicationName-2ulL5W {
    color: #f6f6f7
}
.theme-dark .applicationSubText-3NQxV7 {
    color: #9e9e9e
}
.theme-dark .hiddenLibraryApplication-2esFER {
    border-color: #3f225a
}
.theme-dark .hiddenLibraryApplication-2esFER:first-of-type,.theme-dark .hiddenLibraryApplication-2esFER:hover,.theme-dark .hiddenLibraryApplication-2esFER:hover+.hiddenLibraryApplication-2esFER {
    border-top-color: transparent
}
.theme-dark .hiddenLibraryApplication-2esFER:before {
    background: rgba(32,34,37,.3);
    border-color: #221035
}
.theme-dark .restoreButton-22-SIW {
    background: rgba(57, 37, 74, 0.6);
}
.theme-dark .restoreButton-22-SIW:hover {
    background: #331f44;
}
.theme-dark .restoreIcon-2YLu1X {
    color: #f04747
}
.theme-light .applicationName-2ulL5W {
    color: #3f225a
}
.theme-light .applicationSubText-3NQxV7 {
    color: rgba(114,118,125,.6)
}
.theme-light .hiddenLibraryApplication-2esFER {
    border-color: rgba(185,187,190,.3)
}
.theme-light .hiddenLibraryApplication-2esFER:first-of-type,.theme-light .hiddenLibraryApplication-2esFER:hover,.theme-light .hiddenLibraryApplication-2esFER:hover+.hiddenLibraryApplication-2esFER {
    border-top-color: transparent
}
.theme-light .hiddenLibraryApplication-2esFER:before {
    background-color: rgba(246,246,247,.6);
    border-color: #dcddde
}
.theme-light .restoreButton-22-SIW {
    background: #fff;
}
.theme-light .restoreButton-22-SIW:hover {
    background: #f6f6f7;
}
.theme-light .restoreIcon-2YLu1X {
    color: #f04747
}
.notificationsSoundIcon-3PkO7b:before {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.theme-dark .sound-2QlACh {
    color: #f6f6f7
}
.theme-light .sound-2QlACh {
    color: #3f225a
}
.userSettingsVoice-iwdUCU .sliderBar-3DezvM.speaking-2bFhO4 {
    background-color: #69c49a
}
.userSettingsVoice-iwdUCU .inputSensitivityToggle-2LKb8o.manual-36Evg9 .microphone-2rtdHw {
    background-color: transparent;
}
.userSettingsVoice-iwdUCU .inputSensitivityToggle-2LKb8o.manual-36Evg9 .microphone-2rtdHw .fill-3eUagR {
    background-color: rgba(0,0,0,.25);
}
.userSettingsVoice-iwdUCU .pttToolsMessage-3uc-Td.pttToolsWarning-7imHBv {
    color: #f04747
}
.userSettingsVoice-iwdUCU .pttToolsMessage-3uc-Td.pttToolsWarning-7imHBv a {
    color: #f04747;
}
.userSettingsVoice-iwdUCU .inputDisabledWarning-3vvc9B {
    color: #f04747
}
.userSettingsVoice-iwdUCU .inputDisabledWarning-3vvc9B a {
    color: #f04747;
}
.userSettingsVoice-iwdUCU .media-engine-video {
    background-color: #000;
}
.theme-light .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC {
    background-color: #f6f6f7;
    border-color: #dcddde
}
.theme-light .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC.dismiss-3tPbRc {
    background-color: transparent
}
.theme-dark .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC {
    background-color: #331f44;
    border-color: #221035
}
.theme-dark .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC.dismiss-3tPbRc {
    background-color: transparent
}
.wrapper-3jrx9n {
    background-color: rgba(0,0,0,.1);
}
.keyboardMode .wrapper-3jrx9n.hasFocus-2ksn_h {
    border-color: transparent;
}
.option-n0icdO {
    background-color: #9e9e9e;
}
.option-n0icdO:hover {
    background-color: #3a2648;
}
.disabled-3I9jyo {
    color: #9e9e9e;
}
.disabled-3I9jyo:hover {
    color: #f04747;
}
.selected-mKYnfr.option-n0icdO {
    background-color: #3a2648;
    border-color: #3a2648;
}
.selected-mKYnfr.disabled-3I9jyo {
    color: #f04747;
}
.theme-dark .requestNoteColor-1c4OfD,.theme-light .requestNoteColor-1c4OfD {
    color: #9e9e9e
}
.image-3bKszV {
    background: none 50%/contain no-repeat;
}
.theme-dark .header-13Xrkb {
    color: #fff
}
.theme-dark .blurb-2oPZU1 {
    color: #c7ccd1
}
.theme-dark .promo-1rGOJF {
    color: #b9bbbe
}
.theme-light .header-13Xrkb {
    color: #3f225a
}
.theme-light .blurb-2oPZU1,.theme-light .promo-1rGOJF {
    color: #9099a4
}
.icon-3j1dJB {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.theme-dark .title-PMZpEi {
    color: #fff
}
.theme-dark .description-1W0DiL {
    color: #9e9e9e
}
.theme-dark .featureBorder-7j4v58 {
    border-color: hsla(0,0%,100%,.06)
}
.theme-light .title-PMZpEi {
    color: #3f225a
}
.theme-light .description-1W0DiL {
    color: #9e9e9e
}
.theme-light .featureBorder-7j4v58 {
    border-color: #f6f6f7
}
.theme-dark .betaTag-1tngRx,.theme-light .betaTag-1tngRx {
    background-color: #fff;
    color: #3a2648
}
.premium-39U29H:before {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.theme-dark .carousel-tQMSVK:before,.theme-light .carousel-tQMSVK:before {
    background: -webkit-gradient(linear,left top,right top,from(#7d93f7),color-stop(10%,transparent),color-stop(90%,transparent),to(#7d93f7));
    background: linear-gradient(90deg,#7d93f7 0,transparent 10%,transparent 90%,#7d93f7)
}
.theme-dark .premiumHeader-3SwLEp,.theme-light .premiumHeader-3SwLEp {
    color: #fff
}
.theme-dark .premiumSubheader-15Q0Z6,.theme-light .premiumSubheader-15Q0Z6 {
    color: #f6f6f7
}
.theme-dark .carouselGameBlurb-2CViiR,.theme-light .carouselGameBlurb-2CViiR {
    color: #fff
}
.theme-dark .arrow-1QsYio,.theme-light .arrow-1QsYio {
    background-color: #f8f9fd;
    color: #3a2648
}
.theme-dark .learnMoreButton-1OUyxs,.theme-light .learnMoreButton-1OUyxs {
    background-color: #fff;
    color: #3a2648
}
.titleContainer-15sRy5 {
    color: #fff;
}
.muteContainer-dXWpxM {
    background: rgba(0,0,0,.3);
}
.mute-3sDXC3 {
    color: #fff;
}
.theme-dark .tileMedia-24cT6_ {
    background-color: #221035
}
.theme-dark .loadingContainer-138F59 {
    background-color: rgba(0,0,0,.4)
}
.theme-light .tileMedia-24cT6_ {
    background-color: #dcddde
}
.theme-light .loadingContainer-138F59 {
    background-color: hsla(0,0%,100%,.4)
}
.theme-light .spinnerItem-3RXrSb {
    background-color: #18191c
}
.theme-dark .purchaseUnitOperatingSystem-cnbJPz,.theme-light .purchaseUnitOperatingSystem-cnbJPz {
    color: #3f225a
}
.blog-2nw4E8 {
    background: -webkit-gradient(linear,left top,right top,from(#3a2648),to(#748ef5));
    background: linear-gradient(-270deg,#3a2648,#748ef5);
}
.blog-2nw4E8:before {
    background: url(/assets/1048c978e4a3db5d426b5aedbc37d75c.jpg);
    background-size: cover;
}
.theme-dark .mediaDescription-31GsyQ {
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(45%,rgba(32,34,37,.75)),to(#221035));
    background: linear-gradient(180deg,transparent,rgba(32,34,37,.75) 45%,#221035)
}
.theme-dark .mediaFade-4Pqtcc {
    background: -webkit-gradient(linear,left top,left bottom,color-stop(90%,transparent),to(#221035));
    background: linear-gradient(180deg,transparent 90%,#221035);
}
.theme-dark .description-1eVELi {
    color: #fff
}
.theme-dark .tagline-LsAYEH {
    color: #b9bbbe
}
.theme-dark .blog-2nw4E8,.theme-dark .freeWithNitro-Ya7UUr,.theme-dark .inLibrary-2-7ptY {
    color: #fff
}
.theme-light .mediaDescription-31GsyQ {
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(45%,rgba(79,84,92,.7)),to(#3f225a));
    background: linear-gradient(180deg,transparent,rgba(79,84,92,.7) 45%,#3f225a)
}
.theme-light .mediaSplashContainer-2t7arR {
    background: #9e9e9e
}
.theme-light .mediaFade-4Pqtcc {
    background: -webkit-gradient(linear,left top,left bottom,color-stop(90%,transparent),to(#9e9e9e));
    background: linear-gradient(180deg,transparent 90%,#9e9e9e);
}
.theme-light .description-1eVELi {
    color: #221035
}
.theme-light .tagline-LsAYEH {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .freeWithNitro-Ya7UUr,.theme-light .inLibrary-2-7ptY {
    color: #3f225a
}
.theme-light .blog-2nw4E8,.theme-light .tileMedia-2POU7V .description-1eVELi {
    color: #fff
}
.theme-light .tileMedia-2POU7V .freeWithNitro-Ya7UUr,.theme-light .tileMedia-2POU7V .inLibrary-2-7ptY,.theme-light .tileMedia-2POU7V .tagline-LsAYEH {
    color: #dcddde
}
.theme-light .tileMedia-2POU7V .osIcon-1FTRZ3 {
    color: #f6f6f7
}
.theme-dark .tile-2H4MQG {
    background-color: #221035;
}
.theme-dark .tile-2H4MQG:hover {
    background-color: #191b1d;
}
.theme-dark .emptyWumpus-3Gagum {
    background: url(/assets/131dcaaa628405e6d0ebee7708111c7a.svg)
}
.theme-dark .noMatches-2myGbP {
    color: #f6f6f7
}
.theme-dark .noMatchesDescription-1jZ4Wi {
    color: #b9bbbe
}
.theme-light .tile-2H4MQG {
    background-color: #fff;
}
.theme-light .emptyWumpus-3Gagum {
    background: url(/assets/d0320d29cdef93b8e2baf889a28d32e0.svg)
}
.theme-light .noMatches-2myGbP {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .noMatchesDescription-1jZ4Wi {
    color: #9e9e9e
}
@media (min-width: 800px) {
    .tileRegular-2ZMczj {
    }
    }
@media (min-width: 1300px) {
    .tile-2H4MQG {
    }
    }
.theme-dark .icon-1iRNyO {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .clearIcon-33XhWd:hover {
    color: #f6f6f7
}
.theme-dark .browseSearchInput-Jt8kg0 {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .browseSearchInput-Jt8kg0::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .browseSearchInput-Jt8kg0:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .browseSearchInput-Jt8kg0::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-light .icon-1iRNyO {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .clearIcon-33XhWd:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .browseSearchInput-Jt8kg0 {
    background-color: rgba(246,246,247,.6)
}
.theme-light .browseSearchInput-Jt8kg0::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .browseSearchInput-Jt8kg0:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .browseSearchInput-Jt8kg0::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .itemDescription-1ATOQr,.theme-dark .title-36Rug1,.theme-light .title-36Rug1 {
    color: #fff
}
.theme-light .itemDescription-1ATOQr {
    color: rgba(57, 37, 74, 0.6)
}
@media (min-width: 980px) {
    .itemDescription-1ATOQr {
    }
    }
.freeWithNitro-2shAdz {
    color: #fff;
}
.theme-dark .itemDescription-1_B4j2,.theme-dark .title-RcZEhJ {
    color: #fff
}
.theme-dark .featuredGame-ia1yht {
    color: #dcddde
}
.theme-dark .applicationMedia-1PPJ39 {
    background-color: #000;
}
.theme-light .featuredGame-ia1yht,.theme-light .itemDescription-1_B4j2,.theme-light .title-RcZEhJ {
    color: #3f225a
}
.theme-light .applicationMedia-1PPJ39 {
    background-color: #000;
}
.theme-light .learnMoreButton-1VrFxX {
    border-color: rgb(57, 37, 74, 0.4);
    color: #3f225a
}
.theme-light .learnMoreButton-1VrFxX:hover {
    border-color: #3f225a
}
@media (min-width: 980px) {
    .itemDescription-1_B4j2 {
    }
    }
.itemBackground-1jfD8p {
    background-size: cover;
}
.theme-dark .overlappingBorder-1ysb12 {
    border-color: #3a2648
}
.theme-dark .itemBackground-1jfD8p {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .itemBackground-1jfD8p:before {
    background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),-webkit-gradient(linear,left top,right top,from(rgba(57, 37, 74, 0.6)),color-stop(40%,transparent),color-stop(60%,transparent),to(rgba(57, 37, 74, 0.6))),-webkit-gradient(linear,left bottom,left top,color-stop(10%,rgba(57, 37, 74, 0.6)),color-stop(70%,transparent));
    background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),linear-gradient(90deg,rgba(57, 37, 74, 0.6) 0,transparent 40%,transparent 60%,rgba(57, 37, 74, 0.6)),linear-gradient(0deg,rgba(57, 37, 74, 0.6) 10%,transparent 70%)
}
.theme-light .overlappingBorder-1ysb12 {
    border-color: #3a2648
}
.theme-light .itemBackground-1jfD8p {
    background-color: #f6f6f7
}
.theme-light .itemBackground-1jfD8p:before {
    background: radial-gradient(ellipse at top,transparent,#f6f6f7),-webkit-gradient(linear,left top,right top,from(#f6f6f7),color-stop(40%,transparent),color-stop(60%,transparent),to(#f6f6f7)),-webkit-gradient(linear,left bottom,left top,color-stop(10%,#f6f6f7),color-stop(70%,transparent));
    background: radial-gradient(ellipse at top,transparent,#f6f6f7),linear-gradient(90deg,#f6f6f7 0,transparent 40%,transparent 60%,#f6f6f7),linear-gradient(0deg,#f6f6f7 10%,transparent 70%)
}
@media (min-width: 980px) {
    .itemDescriptionContainer-1DOZz3 {
    }
    .theme-light .itemBackground-1jfD8p:before {
        background: radial-gradient(ellipse at top,transparent,#f6f6f7),-webkit-gradient(linear,left top,right top,from(#f6f6f7),color-stop(40%,transparent),color-stop(60%,transparent),to(#f6f6f7)),-webkit-gradient(linear,left bottom,left top,from(#f6f6f7),color-stop(25%,transparent));
        background: radial-gradient(ellipse at top,transparent,#f6f6f7),linear-gradient(90deg,#f6f6f7 0,transparent 40%,transparent 60%,#f6f6f7),linear-gradient(0deg,#f6f6f7 0,transparent 25%)
    }
    .theme-dark .itemBackground-1jfD8p:before {
        background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),-webkit-gradient(linear,left top,right top,from(rgba(57, 37, 74, 0.6)),color-stop(40%,transparent),color-stop(60%,transparent),to(rgba(57, 37, 74, 0.6))),-webkit-gradient(linear,left bottom,left top,from(rgba(57, 37, 74, 0.6)),color-stop(25%,transparent));
        background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),linear-gradient(90deg,rgba(57, 37, 74, 0.6) 0,transparent 40%,transparent 60%,rgba(57, 37, 74, 0.6)),linear-gradient(0deg,rgba(57, 37, 74, 0.6) 0,transparent 25%)
    }
}
@media (min-width: 720px) {
    .paginationItemContainer-2q8AX7 {
    }
}
.nextArrow-_BbNud,.prevArrow-GBsQ1m {
    color: #9e9e9e;
}
.nextArrow-_BbNud:hover,.prevArrow-GBsQ1m:hover {
    color: #dcddde
}
@media (min-width: 980px) {
    .heroCarousel-k7LeGl {
    }
    }
@media (min-width: 720px) {
    .nextArrow-_BbNud,.prevArrow-GBsQ1m {
    }
}
.distributionApplicationsSort-2_uq5y {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
}
.theme-dark .footer-3oZnEF {
    background: url(/assets/72e1fd085e240aecf005e642e655c0f4.svg) no-repeat bottom,url(/assets/c6eb507b58cfbeb2ad068318a4ec2fee.svg) no-repeat bottom/100%
}
.theme-dark .selectedSort-2JSohJ {
    border-color: #fff
}
.theme-dark .footerMain-Z8i6ST {
    color: #b9bbbe
}
.theme-dark .footerSub-1Jedbi {
    color: #9e9e9e
}
.theme-dark .distributionApplicationsActions-3D2_kD,.theme-dark .premiumApplicationsHeader-Zmkm5e {
    border-color: #3f225a;
    color: #fff
}
.theme-dark .announcingNitro-3Ptg6m {
    border-color: #3f225a;
    color: #3a2648
}
.theme-dark .announcingNitro-3Ptg6m:hover {
    color: #fdecff
}
.theme-light .footer-3oZnEF {
    background: url(/assets/20c89307efca994238349e95669b9cc8.svg) no-repeat bottom,url(/assets/902931f7a800a99f226b57478ed88a3e.svg) no-repeat bottom/100%
}
.theme-light .selectedSort-2JSohJ {
    border-color: #000
}
.theme-light .footerMain-Z8i6ST {
    color: #3f225a
}
.theme-light .footerSub-1Jedbi {
    color: #9e9e9e
}
.theme-light .distributionApplicationsActions-3D2_kD,.theme-light .premiumApplicationsHeader-Zmkm5e {
    border-color: #3f225a;
    color: #000
}
.theme-light .announcingNitro-3Ptg6m {
    border-color: #3f225a;
    color: #3a2648
}
.theme-light .announcingNitro-3Ptg6m:hover {
    color: #fdecff
}
.premium-33BYwD:before {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.arcadeImage-1oQgXQ {
    background-size: cover;
}
.premiumHeader-29chIr,.premiumSubheader-3wX8Bc {
    color: #fff
}
.theme-dark .premiumHeader-29chIr,.theme-light .premiumHeader-29chIr {
    color: #fff
}
.theme-dark .premiumSubheader-3wX8Bc,.theme-light .premiumSubheader-3wX8Bc {
    color: #f6f6f7
}
.videoWrapper-3YdgHH {
    background-color: #000;
}
.icon-2WZ46g {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.theme-dark .featureHeader-1mvRn1 {
    color: #fff
}
.theme-light .featureHeader-1mvRn1 {
    color: #3f225a
}
.card-icon:before {
    background-size: 100% 100%;
}
.premium-settings .premium-settings-background {
    background-repeat: no-repeat;
}
.premium-settings .payment-subhead {
    color: #3f225a;
}
.premium-settings .premium-header.splash {
    background: no-repeat 100% 0;
}
.premium-settings .premium-header .premium-logo {
    background: url(/assets/8c2ee0198f752b71b9653a68de2a6983.svg) no-repeat;
}
.premium-settings .premium-header.disabled .premium-description {
    background-color: #f9f9f9;
}
.premium-settings .premium-header .intro-subtitle {
    color: #737f8d;
}
.premium-settings .premium-header .premium-free-months {
    color: #43b581;
}
.premium-settings .premium-header .disabled-message {
    color: #00aff7;
}
.premium-settings .premium-header .disabled-message:hover {
    color: #000;
    color: #009ede
}
.premium-settings .premium-header .premium-footnote {
    color: #737f8d;
}
.premium-settings .payment-source.invalid .card-description,.premium-settings .payment-source.invalid .card-description strong,.premium-settings .payment-source.invalid .card-details {
    color: #f04747!important
}
.premium-settings .payment-source.invalid .btn-stroked {
    border-color: #f04747;
    color: #f04747!important
}
.premium-settings .payment-source.invalid .btn-stroked:hover {
    background-color: rgba(240,71,71,.1)
}
.premium-settings .subscription {
    background: url(/assets/5400d116a897ce9fe428bd6e4a651356.svg);
    color: #fff;
}
.premium-settings .subscription.active {
    background: url(/assets/6920e2fda70c33c31f54b42f30b4aa96.svg)
}
.premium-settings .subscription.past-due {
    background: url(/assets/a65d13e614f02aa710776c3c1ccb5723.svg)
}
.premium-settings .subscription:before {
    background-size: 100% 100%;
}
.premium-settings .subscription .premium-details .premium-title {
    background: url(/assets/9328a2df4b542ac8725b57010a52f73b.svg) no-repeat 0 0;
}
.premium-settings .billing-history-list li .refunded-amount {
    color: #43b581
}
.premium-settings .billing-history-list li .billing-label {
    background-color: #43b581;
    color: #fff;
}
.premium-settings .billing-history-list li.refunded .amount {
    color: #43b581
}
.premium-settings .billing-history-list li.failed .amount,.premium-settings .billing-history-list li.reversed .amount {
    color: #f04747
}
.premium-settings .billing-history-list li.failed .billing-label,.premium-settings .billing-history-list li.reversed .billing-label {
    background-color: #f04747
}
.theme-light .premium-settings .card-description {
    color: #b9bbbe
}
.theme-light .premium-settings .card-description strong {
    color: #040405
}
.theme-light .premium-settings .premium-header.splash {
    border-bottom-color: #e1e9f4
}
.theme-dark .premium-settings .card-description {
    color: #b9bbbe
}
.theme-dark .premium-settings .card-description strong {
    color: #fff
}
.theme-dark .premium-settings .premium-header.splash {
    border-bottom-color: #282b32
}
@media (max-width: 950px) {
    .premium-settings .premium-splash-wumpus {
    }
}
.theme-light .description-HxwDO4,.theme-light .descriptionWrapper-1YBY_J {
    color: #9e9e9e
}
.theme-light .defaultIndicator-G3c16x {
    background-color: #3f225a;
    color: #fff
}
.theme-light .premiumIndicator-1XvbfM {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .description-HxwDO4 {
    color: #dcddde
}
.theme-dark .descriptionWrapper-1YBY_J {
    color: #9e9e9e
}
.theme-dark .defaultIndicator-G3c16x {
    background-color: #3f225a;
    color: #fff
}
.theme-dark .premiumIndicator-1XvbfM {
    background-color: #3a2648;
    color: #fff
}
.theme-light .sectionHeader-1068cF {
    color: #9e9e9e
}
.theme-light .subText-1Lf-cY {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .sectionHeader-1068cF {
    color: #b9bbbe
}
.theme-dark .subText-1Lf-cY {
    color: hsla(0,0%,100%,.3)
}
.theme-light .divider-3WKGWk {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .divider-3WKGWk {
    border-color: #331f44
}
.theme-dark .subText-2Zhkkh,.theme-light .subText-2Zhkkh {
    color: #9e9e9e
}
.theme-light .pageIndicator-1gAbyA {
    border-color: #3f225a;
    color: #3f225a
}
.theme-light .pageButtonNext-V2kUq0,.theme-light .pageButtonPrev-1Y-47D {
    border-color: #9e9e9e
}
.theme-light .pageButtonNext-V2kUq0:hover,.theme-light .pageButtonPrev-1Y-47D:hover {
    border-color: rgba(57, 37, 74, 0.6);
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .disabled-BrLY9Y:hover {
    border-color: #9e9e9e;
    color: #9e9e9e
}
.theme-dark .paginator-2CA79G {
    color: #9e9e9e
}
.theme-dark .pageIndicator-1gAbyA {
    border-color: #3f225a;
    color: #dcddde
}
.theme-dark .pageButtonNext-V2kUq0,.theme-dark .pageButtonPrev-1Y-47D {
    border-color: #3f225a
}
.theme-dark .pageButtonNext-V2kUq0:hover,.theme-dark .pageButtonPrev-1Y-47D:hover {
    border-color: #dcddde;
    color: #dcddde
}
.theme-dark .disabled-BrLY9Y:hover {
    border-color: #3f225a;
    color: #9e9e9e
}
.statusTag-22YO6d {
    color: #fff;
}
.statusTagGreen-1YzpdX {
    background-color: #43b581
}
.statusTagRed-2Xg3v3 {
    background-color: #f04747
}
.statusTagGrey-2_qq8q {
    background-color: #747f8d
}
@media (max-width: 800px) {
    .refundCriteria-o9V-c2 {
    }
}
.theme-light .summaryInfo-2QFKUg {
    color: #3f225a
}
.theme-light .payment-xT17Mq {
    background-color: #f6f6f7
}
.theme-light .paymentHeader-3QlZQi {
    border-color: #3f225a
}
.theme-light .expandedInfo-3kfShd {
    background-color: #dcddde
}
.theme-light .paymentText-2vaF7U {
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark .summaryInfo-2QFKUg {
    color: #f6f6f7
}
.theme-dark .payment-xT17Mq {
    background-color: #331f44;
    color: #b9bbbe
}
.theme-dark .hoverablePayment-Yc6mK7:hover {
    background-color: #23262a
}
.theme-dark .paymentHeader-3QlZQi {
    border-color: #3f225a;
    color: #fff
}
.theme-dark .expandedInfo-3kfShd {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .paymentText-2vaF7U {
    color: #b9bbbe
}
.theme-light .paymentPane-3bwJ6A {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-light .paginator-166-09 {
    background: #f6f6f7;
    color: #3f225a
}
.theme-dark .paymentPane-3bwJ6A {
    background-color: #331f44;
    color: #f6f6f7
}
.theme-dark .paginator-166-09 {
    background: #331f44
}
.theme-dark .tab-1kx2RU {
    color: #9e9e9e
}
.confirmBackgroundImage-2lmx3s {
    background-position: bottom;
    background-size: cover;
}
.theme-dark .inputPrompt-3hUneE {
    color: #dcddde
}
.theme-dark .confirmTitle-1K9S8K {
    color: #fff
}
.theme-dark .confirmBlurb-2LiLkM {
    color: #b9bbbe
}
.theme-light .inputPrompt-3hUneE {
    color: #9e9e9e
}
.theme-light .confirmTitle-1K9S8K {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .confirmBlurb-2LiLkM {
    color: #9e9e9e
}
.perkIcon-2bvvgO {
    background-position: 50%;
    background-size: contain
}
.separator-PE-_y1 {
    background-color: #4f5660;
}
.theme-light .prompt-kcCNXs {
    color: #040405
}
.theme-light .selectYourAnswer-2lDJj_ {
    color: #9099a4
}
.theme-light .separator-PE-_y1 {
    background-color: #e3e5e8
}
.theme-dark .prompt-kcCNXs {
    color: #fff
}
.theme-dark .selectYourAnswer-2lDJj_ {
    color: #9099a4
}
.theme-dark .separator-PE-_y1 {
    background-color: #4f5660
}
.membershipDialog-rVL-t_:after {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
}
.membershipDialogSwitchHousesAction-2a3eDg {
    color: hsla(0,0%,100%,.7);
}
.membershipDialogSwitchHousesAction-2a3eDg:hover {
    color: #fff
}
.membershipDialogHouse1-3KhKE- {
    background-color: #9c84ef
}
.membershipDialogHouse2-35h9SY {
    background-color: #f47b67
}
.membershipDialogHouse3-15OBIQ {
    background-color: #45ddc0
}
.houseLogoWrapper-3XZ6yo {
    background: #fff;
}
.quizResultLogoWrapperHouse1-3FV1ry {
    background-color: #9c84ef
}
.quizResultLogoWrapperHouse2-3yrRO9 {
    background-color: #f47b67
}
.quizResultLogoWrapperHouse3-2oQS9n {
    background-color: #45ddc0
}
.error-2netMa {
    color: #f04747;
}
.attendeeCTA-3ZZQWt {
    color: #9e9e9e;
}
.theme-dark .introHeader-4MPach {
    color: #fff
}
.theme-dark .introBlurb-3gFgTQ {
    color: #c7ccd1
}
.theme-light .introHeader-4MPach {
    color: #3f225a
}
.theme-light .introBlurb-3gFgTQ {
    color: #9099a4
}
.container-2Thooq {
    color: #fff;
}
.theme-dark .container-2Thooq,.theme-light .container-2Thooq {
    background: rgba(32,34,37,.3)
}
.theme-dark .button-2b6hmh:hover,.theme-light .button-2b6hmh:hover {
    background-color: rgba(24,25,28,.3)
}
.theme-dark .hasBuildOverride-rIAgfT,.theme-light .hasBuildOverride-rIAgfT {
    background-color: #331f44;
}
@-webkit-keyframes placeholderPulse-Pjh1nT {
    0% {
    }
    }
@keyframes placeholderPulse-Pjh1nT {
    0% {
    }
    }
.placeholderUsername-236yYU {
    background: #9e9e9e;
}
.placeholderAvatar-uzH8f6 {
    background: #9e9e9e;
}
.status-2s6iDp {
    background-clip: padding-box;
}
.theme-light .activity-1IYsbk {
    color: rgba(88, 23, 67, 0.8)
}
.theme-light .memberOnline-1CIh-0 {
    color: #9e9e9e
}
.theme-light .memberOffline-2lN7gt {
    color: rgba(88, 23, 67, 0.8)
}
.theme-light .member-3W1lQa.popout-open .content-OzHfo4,.theme-light .member-3W1lQa.popout-open:hover .content-OzHfo4 {
    background-color: rgba(220,221,222,.6);
    color: #000
}
.theme-light .member-3W1lQa.popout-open .content-OzHfo4 .status-2s6iDp,.theme-light .member-3W1lQa.popout-open:hover .content-OzHfo4 .status-2s6iDp {
    border-color: #e6e7e8
}
.theme-light .member-3W1lQa:hover .content-OzHfo4 {
    background-color: rgba(220,221,222,.3);
    color: #000
}
.theme-light .member-3W1lQa:hover .content-OzHfo4 .status-2s6iDp {
    border-color: #eeefef
}
.theme-dark .activity-1IYsbk {
    color: rgba(185,187,190,.6)
}
.theme-dark .memberOnline-1CIh-0 {
    color: #b9bbbe
}
.theme-dark .memberOffline-2lN7gt {
    color: rgba(185,187,190,.9)
}
.theme-dark .member-3W1lQa.popout-open .content-OzHfo4,.theme-dark .member-3W1lQa.popout-open:hover .content-OzHfo4 {
    background-color: rgb(57, 37, 74, 0.4);
    color: #fff
}
.theme-dark .member-3W1lQa.popout-open .content-OzHfo4 .status-2s6iDp,.theme-dark .member-3W1lQa.popout-open:hover .content-OzHfo4 .status-2s6iDp {
    border-color: #42464d
}
.theme-dark .member-3W1lQa:hover .content-OzHfo4 {
    background-color: rgba(57, 37, 74, 0.6);
    color: #fff
}
.theme-dark .member-3W1lQa:hover .content-OzHfo4 .status-2s6iDp {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .status-2s6iDp {
    border-color: #331f44
}
.members-1998pB {
    background-color: #f3f3f3;
}
.membersGroup-v9BXpm {
    color: #99aab5;
}
@-webkit-keyframes placeholderPulse-2rZrru {
    0% {
    }
    }
@keyframes placeholderPulse-2rZrru {
    0% {
    }
    }
.memberGroupsPlaceholder-3mwPub {
    background: #9e9e9e;
}
.theme-dark .members-1998pB {
    background-color: #331f44
}
.theme-dark .membersGroup-v9BXpm {
    color: hsla(0,0%,100%,.4)
}
.base-34jWEe {
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat,no-repeat;
    background-size: 192px 80px,216px 64px;
}
.chat .base-34jWEe h1 {
    color: #949494;
}
.base-34jWEe h1 {
    color: #949494;
}
.theme-light .base-34jWEe {
    border-color: #eceeef
}
.theme-dark .base-34jWEe {
    border-color: hsla(0,0%,100%,.02)
}
.app .welcomeMessage-3_Mcht h1 {
    color: #3a2648;
}
.welcomeMessage-3_Mcht p {
    color: #87909c;
}
.welcomeMessage-3_Mcht a {
    color: #00b0f4;
}
.exclamation-1mi7Vi {
    background: url(/assets/7616be62f9b90270b5a2e1fe9d2ece4f.svg) 50% no-repeat
}
.share-1EA-d2 {
    background: url(/assets/07778297eb1e1e3d9bd3cd302920d5fb.svg) 50% no-repeat
}
.apps-22T4uu {
    background: url(/assets/db7900a7a191ecf1949f15dd20dce2b2.svg) 50% no-repeat
}
.mobile-3_KEmF {
    background: url(/assets/83d501f2b7dd2987302ce29b321f4494.svg) 50% no-repeat
}
.twitter-1TN3uJ {
    background: url(/assets/326d79eb53886c88437e99a3754b1cd0.svg) 50% no-repeat
}
.theme-dark .welcomeMessage-3_Mcht a {
    color: #0096cf
}
.jumpToPresentBar-9P20AM {
    color: hsla(0,0%,100%,.6);
}
.jumpToPresentBar-9P20AM .spinner .spinner-item {
    background-color: #fff
}
.jumpToPresentBar-9P20AM button {
    background: none;
    color: #fff;
}
.jumpToPresentBar-9P20AM button:last-child {
    color: hsla(0,0%,100%,.6);
}
.jumpToPresentBar-9P20AM button:last-child:hover {
    color: #fff
}
.newMessagesBar-mujexs {
    background-color: #391b52;
    color: #fff;
}
.newMessagesBar-mujexs button {
    background: none;
    color: #fff;
}
.newMessagesBar-mujexs button:last-child {
    color: #fdecff;
}
.newMessagesBar-mujexs button:last-child:hover {
    color: #fff
}
.newMessagesBar-mujexs:hover {
    background-color: #3a2648
}
.hasMore-3e72_v button {
    color: #fff;
}
.theme-light .messageGroupBlocked-3wrQQX {
    background: #fcfcfc;
    color: #99aab5
}
.theme-light .messageGroupBlocked-3wrQQX.revealed-1_RKsf {
    background: #fafafa;
}
.theme-light .messageGroupBlocked-3wrQQX:hover {
    background: #f2f2f2
}
.theme-light .hasMore-3e72_v button {
    background: #fcfcfc
}
.theme-dark .jumpToPresentBar-9P20AM {
    background-color: #391b52;
}
.theme-dark .jumpToPresentBar-9P20AM:hover {
    background-color: #3a2648;
}
.theme-light .divider-3gKybi,.theme-light .divider-3gKybi:before {
    background-color: #fff
}
.theme-light .divider-3gKybi>span {
    background-color: #fff;
    color: #99aab5
}
.theme-light .divider-3gKybi>div {
    background: #eceeef
}
.theme-light .divider-3gKybi.dividerRed-MKoLlr>span {
    color: #f04747;
}
.theme-light .divider-3gKybi.dividerRed-MKoLlr>div {
    background: #f04747;
}
.theme-dark .messageGroupBlocked-3wrQQX {
    background: transparent;
    border-color: #331f44;
}
.theme-dark .messageGroupBlocked-3wrQQX.revealed-1_RKsf {
    background: rgb(57, 37, 74, 0.4);
    border-color: #331f44;
}
.theme-dark .messageGroupBlocked-3wrQQX .messageGroupBlockedBtn-1PBBh- {
    background: rgb(57, 37, 74, 0.4);
    color: #d2aecf;
}
.theme-dark .messageGroupBlocked-3wrQQX .messageGroupBlockedBtn-1PBBh-:hover {
    background: rgba(112, 33, 79, 0.6);
}
.theme-dark .hasMore-3e72_v button {
    background: rgba(57, 37, 74, 0.6);
    border: 1px solid #391b52;
}
.theme-dark .divider-3gKybi:before, .theme-dark .divider-3gKybi span {
    background-color: transparent;
}
.theme-dark .divider-3gKybi:not(.red-1YQ4s7) span {
    color: rgba(210, 174, 207, 0.5)
}
.theme-dark .divider-3gKybi:not(.red-1YQ4s7) div {
    background: #906b8e
}
.theme-dark .divider-3gKybi.dividerRed-MKoLlr>span {
    color: rgba(240,71,71,.8)
}
.theme-dark .divider-3gKybi.dividerRed-MKoLlr>div {
    background: #f04747;
}
.highlight {
    background: rgba(250,166,26,.3)
}
.theme-dark .messagesWrapper-3lZDfY {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar,.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar:after,.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb {
    background-color: #331f44
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .track {
    background-color: transparent
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap ::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4);
    border-color: transparent;
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap ::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent;
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar,.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar:after {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: #221035
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .track {
    background-color: #331f44;
    border-color: rgba(57, 37, 74, 0.6)
}
.activityInviteEducationArrow-3DEpKU {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 12px 10px;
}
.theme-dark .typing-2GQL18 .ellipsis-19qdx6 div {
    background-color: hsla(0,0%,100%,.8)
}
.theme-dark .typing-2GQL18 span {
    color: hsla(0,0%,100%,.8)
}
.theme-light .typing-2GQL18 {
    background-color: hsla(0,0%,100%,.8);
    color: #737f8d
}
.theme-dark .typing-2GQL18 {
    background:transparent !important;
}
.theme-dark .countdown-1t3uBk {
    color: #fff
}
.theme-dark .number-3ceIrJ {
    background: rgba(57, 37, 74, 0.6);
    border-color: hsla(0,0%,100%,.04);
}
.theme-light .countdown-1t3uBk {
    color: #737f8d
}
.theme-light .number-3ceIrJ {
    background: #fff;
    border-color: hsla(0,0%,100%,.04);
}
.wrapper-39oAo3 {
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat,no-repeat;
    background-size: 187px 39px;
}
.theme-dark .wrapper-39oAo3 {
    color: hsla(0,0%,100%,.3)
}
.theme-light .wrapper-39oAo3 {
    color: #99aab5
}
.title-3qD0b- .input-autosize-input,.titleCall-_b9o8P .input-autosize-input {
    background: transparent;
}
.title-3qD0b- .input-autosize-input:focus,.titleCall-_b9o8P .input-autosize-input:focus {
    color: #3f225a
}
.titleText-3X-zRE {
    color: #3f225a;
}
.channelIcon-MsmKOO {
    color: #8a8e94;
}
.aka-1mqp34 {
    background: #9e9e9e;
    color: #fff;
}
.theme-light .chat-3bRxxu {
    background-color: #fff;
    color: #fff
}
.theme-light .chat-3bRxxu ::-webkit-input-placeholder {
    color: #dadddf
}
.theme-light .content-yTz4x3,.theme-light .noChannel-Z1DQK7 {
    background: #fff
}
.theme-light .title-3qD0b- {
    background: #fff;
}
.theme-light .channelName-3stJzi,.theme-light .groupDM-3qU0Ks .channelName-3stJzi,.theme-light .groupDMManaged-1GyXtq .channelName-3stJzi,.theme-light .input-autosize-input {
    color: #3f225a
}
.theme-light .input-autosize-input:focus {
    background-color: #f6f6f7
}
.theme-light .topic-2QX7LI {
    color: rgba(114,118,125,.6)
}
.theme-light .topic-2QX7LI:before {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .chat-3bRxxu,.theme-dark .chat-3bRxxu form,.theme-dark .content-yTz4x3 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .noChannel-Z1DQK7 {
    background: rgba(57, 37, 74, 0.6)
}
.theme-dark .title-3qD0b- {
    background: rgba(57, 37, 74, 0.6);
}
.theme-dark .channelName-3stJzi,.theme-dark .groupDM-3qU0Ks .channelName-3stJzi,.theme-dark .groupDMManaged-1GyXtq .channelName-3stJzi,.theme-dark .input-autosize-input,.theme-dark .input-autosize-input:focus {
    color: #fff
}
.theme-dark .input-autosize-input:focus {
    background-color: #331f44
}
.theme-dark .topic-2QX7LI {
    color: rgba(246,246,247,.6)
}
.theme-dark .topic-2QX7LI a {
    color: #0096cf
}
.theme-dark .topic-2QX7LI:before {
    background-color: rgba(246,246,247,.1)
}
.subtitleWarning-FYRaDh {
    color: #f04747!important
}
.errorStateIcon-p5L_DQ {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}
.theme-dark .subtitle-2iWJ5y {
    color: #b9bbbe
}
.theme-dark .errorState-3QMR6P {
    color: #9e9e9e
}
.theme-dark .friend-2PO6ke {
    color: #b9bbbe
}
.theme-dark .friend-2PO6ke .status {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .friendSelected--wQP3f {
    background-color: rgb(57, 37, 74, 0.3);
    color: #fff
}
.theme-dark .friendSelected--wQP3f .status {
    border-color: #3e4147
}
.theme-dark .footerText-1PbhKm {
    color: #b9bbbe
}
.theme-light .subtitle-2iWJ5y {
    color: #9e9e9e
}
.theme-light .errorState-3QMR6P {
    color: rgba(185,187,190,.9)
}
.theme-light .friend-2PO6ke {
    color: #9e9e9e
}
.theme-light .friend-2PO6ke .status {
    border-color: #fff
}
.theme-light .friendSelected--wQP3f {
    background-color: rgba(220,221,222,.3);
    color: #000
}
.theme-light .friendSelected--wQP3f .status {
    border-color: #f4f5f5
}
.theme-light .footerText-1PbhKm {
    color: #9e9e9e
}
.video-1FfuMD {
    background-color: #221035;
    background-position: 50%;
    background-size: 100%;
}
.theme-light .video-1FfuMD.minimum-1pRSEN {
    background-color: #dcddde
}
.video-1kutKI {
    background-color: #000;
}
.spinner-2UBgbJ {
    background-color: rgba(0,0,0,.8);
}
.backgroundBlur-dazcBE {
    background-position: 50%;
    background-size: 114%;
}
.backgroundBlurOverlay-1JS5RF {
    background-color: rgba(0,0,0,.6)
}
@-webkit-keyframes outgoing-call-pulse-MDA9-S {
    0% {
    }
    }
@keyframes outgoing-call-pulse-MDA9-S {
    0% {
    }
    }
.callAvatar-v-u4BM {
    background-clip: padding-box;
    background-color: none;
    background-size: 100%;
}
.callAvatar-v-u4BM .callAvatarStatus-3y6S04 {
    background-clip: padding-box;
}
.callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
    background-color: #f04747;
}
.callAvatar-v-u4BM.video-3GgX2M {
    background-position: 50%;
}
.callAvatar-v-u4BM.video-3GgX2M .callAvatarStatus-3y6S04 {
    background-color: rgba(0,0,0,.3);
}
.callAvatarOverlay-33Xeat {
    background-color: rgba(0,0,0,.8);
}
.callAvatarOverlay-33Xeat .poorConnectionIcon-1D_YMH {
    background-color: #f04747;
}
.theme-light .callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
    border-color: #dcddde
}
.theme-light .callAvatarWrapper-TICyxO .ripple-16ZT2p {
    background-color: #3f225a
}
.theme-dark .callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
    border-color: #221035
}
.theme-dark .callAvatarWrapper-TICyxO .ripple-16ZT2p {
    background-color: #fff
}
.base-18fc34 {
    background-position: 0;
}
.sparkle-1TdrlZ {
    background-position: -731px;
    background-size: 774px 43px;
}
.pop-B2HebP {
    background-position: -816px;
    background-size: 840px 24px;
}
.light-1RsqT- {
    background-size: 620px 20px;
}
.cross-AT1Amb,.light-1RsqT- {
    background-position: -600px
}
.cross-AT1Amb {
    background-size: 625px 25px;
}
@-webkit-keyframes sparkle-1TdrlZ {
    0% {
        background-position: 0
    }
    40% {
        background-position: -731px
    }
    to {
        background-position: -731px
    }
}
@keyframes sparkle-1TdrlZ {
    0% {
        background-position: 0
    }
    40% {
        background-position: -731px
    }
    to {
        background-position: -731px
    }
}
@-webkit-keyframes pop-B2HebP {
    0% {
        background-position: 0
    }
    40% {
        background-position: -816px
    }
    to {
        background-position: -816px
    }
}
@keyframes pop-B2HebP {
    0% {
        background-position: 0
    }
    40% {
        background-position: -816px
    }
    to {
        background-position: -816px
    }
}
@-webkit-keyframes light-1RsqT- {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
@keyframes light-1RsqT- {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
@-webkit-keyframes cross-AT1Amb {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
@keyframes cross-AT1Amb {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
.joinVideoCallButton-beESDO {
    background-color: #43b581;
}
.joinVideoCallButton-beESDO .buttonText-2eeTb9 {
    color: #f6f6f7;
}
.joinVideoCallButton-beESDO .underlay-3pibKJ {
    background-color: #69c49a;
}
.joinVideoCallButton-beESDO .callDivider-231Syj {
    background-color: #69c49a;
}
.wrapper-3eE7AX {
    background-color: #000;
}
.overlay-3Sc3Tv {
    background-color: rgba(0,0,0,.8);
}
.poorConnection-1aAwgU {
    background-color: #f04747;
}
.status-XPjB1X {
    background-color: rgba(0,0,0,.3);
}
.theme-light .title-Ic5R7V {
    color: #3f225a
}
.theme-light .description-2waT7u {
    color: #9e9e9e
}
.theme-light .footer-2VgWkh {
    background-color: #f6f6f7
}
.theme-dark .title-Ic5R7V {
    color: #f6f6f7
}
.theme-dark .description-2waT7u {
    color: #dcddde
}
.theme-dark .footer-2VgWkh {
    background-color: #331f44
}
.check-2by_h9 {
    background: url(/assets/6acb20d5e709b34b6a7f36ec13648666.svg);
}
.regionSelectFlag-1htPow {
    background-color: #3a2648;
    background-size: cover;
}
.theme-light .regionSelectName-c5qL8O {
    color: #9e9e9e
}
.theme-dark .regionSelectName-c5qL8O {
    color: #b9bbbe
}
.wrapper-29NfPK.fullScreen-3DKbL8 .actions-2vadYq .center-1Vp33r,.wrapper-29NfPK.fullScreen-3DKbL8 .actions-2vadYq .side-kO0bwV,.wrapper-29NfPK.noChat-2qlG4B .center-1Vp33r,.wrapper-29NfPK.noChat-2qlG4B .side-kO0bwV,.wrapper-29NfPK.normal-2GSW0u .center-1Vp33r,.wrapper-29NfPK.normal-2GSW0u .side-kO0bwV {
    background-color: rgba(0,0,0,.8);
    border-color: rgba(0,0,0,.9)
}
.videoBackgroundWrapper-2dCt49 {
    background-color: #000;
}
.theme-light .wrapper-29NfPK {
    background-color: #dcddde
}
.theme-light .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .side-kO0bwV {
    background-color: rgba(246,246,247,.3);
    border-color: rgba(246,246,247,.6)
}
.theme-light .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .center-1Vp33r {
    background-color: #f6f6f7;
    border-color: #f6f6f7
}
.theme-dark .wrapper-29NfPK {
    background-color: #221035
}
.theme-dark .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .side-kO0bwV {
    background-color: rgba(24,25,28,.3);
    border-color: #18191c
}
.theme-dark .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .center-1Vp33r {
    background-color: #18191c;
    border-color: #18191c
}
.search-results-wrap {
    background-color: #f1f1f1;
}
.search-results-wrap .search-result:before, .theme-dark .search-results-wrap .search-result:after {
    background-image: linear-gradient(0deg,rgba(47,49,54,0),#3c073a) !important;
}
.search-results-wrap .search-header {
    color: #737f8d;
}
.search-results-wrap .search-header a {
    color: #737f8d
}
.search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-color: #dbdde1!important
}
.search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-thumb {
    background-color: #3a2648!important;
}
.search-results-wrap .error-wrap,.search-results-wrap .spinner-wrap {
    color: #737f8d;
}
.search-results-wrap .channel-separator .channel-name {
    background-color: #f1f1f1;
    color: #3f225a;
}
.search-results-wrap .search-result .search-result-message {
    background-color: transparent;
}
.search-results-wrap .search-result .search-result-message.hit {
    background-color: #fff;
}
.search-results-wrap .search-result.expanded .search-result-message {
    background-color: transparent;
}
.search-results-wrap .search-result.expanded .search-result-message.hit {
    background-color: #fff;
}
.search-results-wrap .action-buttons {
    background-color: transparent;
}
.search-results-wrap .action-buttons .jump-button {
    background-color: #ebebeb;
    color: rgba(115,127,141,.6);
}
.search-results-wrap .action-buttons .jump-button:hover {
    color: #737f8d
}
.search-results-wrap .pagination {
    color: #737f8d;
}
.search-results-wrap .pagination .pagination-next,.search-results-wrap .pagination .pagination-previous {
    background: url(/assets/425c04911bfea22eaaed168b8ff19634.svg) 50% 50% no-repeat;
    background-position: 50%;
    background-size: 6px 12px;
}
.search-results-wrap .results-blocked {
    background-color: transparent;
    color: rgb(57, 37, 74, 0.4);
}
.search-results-wrap .results-blocked:hover {
    background-color: rgba(79,84,92,.06)
}
.search-results-wrap .empty-results-wrap {
    color: #737f8d;
}
.search-results-wrap .empty-results-wrap .error-image {
    background: url(/assets/a96ad48450382ff5df965439222d1459.svg);
}
.theme-dark .search-results-wrap {
    background-color: rgba(39, 20, 56, 0.8);
}
.theme-dark .search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-color: #581743!important
}
.theme-dark .search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-thumb {
    background-color: #221035!important;
}
.theme-dark .search-results-wrap .search-header {
    background-color: transparent;
}
.theme-dark .search-results-wrap .search-header a {
    color: #fff
}
.theme-dark .search-results-wrap .search-header .border {
    background-color: hsla(0,0%,100%,.3)
}
.theme-dark .search-results-wrap .search-header .tab,.theme-dark .search-results-wrap .search-header .total-results {
    color: #fff
}
.theme-dark .search-results-wrap .channel-separator:before {
    border-color: hsla(0,0%,100%,.1)
}
.theme-dark .search-results-wrap .channel-separator .channel-name {
    background-color: transparent;
    color: #fff
}
.theme-dark .search-results-wrap .search-result .hit {
    border: 2px solid rgba(45, 7, 40, 0.9) !important;
    background-color: rgba(39, 20, 56, 0.8);
    box-shadow: 0 0 10px 6px #3c073a;
}
.theme-dark .search-results-wrap .search-result.expanded {
    border: 2px solid rgb(82, 15, 61);
}
.theme-dark .search-results-wrap .search-result.expanded .search-result-message {
    background-color: transparent;
}
.theme-dark .search-results-wrap .search-result.expanded .search-result-message.hit {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .search-results-wrap .action-buttons .jump-button {
    background-color: #4a0f49;
    color: hsla(0,0%,100%,.6)
}
.theme-dark .search-results-wrap .action-buttons .jump-button:hover {
    color: #fff
}
.theme-dark .search-results-wrap .pagination {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .search-results-wrap .results-blocked {
    border-color: #221035;
    color: hsla(0,0%,100%,.3)
}
.theme-dark .search-results-wrap .results-blocked:hover {
    background-color: rgba(32,34,37,.3)
}
.theme-dark .search-results-wrap .empty-results-wrap,.theme-dark .search-results-wrap .error-wrap {
    color: hsla(0,0%,100%,.3)
}
.content-8biNdB a {
    color: #00b0f4;
}
.theme-dark .content-8biNdB p,.theme-dark .content-8biNdB ul li {
    color: #b9bbbe
}
.theme-dark .content-8biNdB ul li:before {
    background-color: #dcddde
}
.theme-light .content-8biNdB p,.theme-light .content-8biNdB ul li {
    color: #9e9e9e
}
.theme-light .content-8biNdB ul li:before {
    background-color: #9e9e9e
}
.image-2LqJex {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.separator-2IZ9ro {
    background-color: #3f225a;
}
.actionRed-gYn8D3 {
    background-color: #a33030;
    color: #fff
}
.actionRed-gYn8D3:hover {
    background-color: #932b2b
}
.actionRed-gYn8D3:active {
    background-color: #822626
}
.theme-light .title-1VcOOr {
    color: #3f225a
}
.theme-light .description-2ydcYn {
    color: #9e9e9e
}
.theme-dark .title-1VcOOr {
    color: #fff
}
.theme-dark .description-2ydcYn {
    color: #b9bbbe
}
.wrapper-1cBijl {
    background-color: hsla(0,0%,100%,.06);
}
.wrapper-1cBijl .btn:disabled {
    background-color: #3a2648;
    color: #fff;
}
.addFriendInput-4bcerK {
    background-color: transparent;
    color: #737f8d;
}
.addFriendInput-4bcerK::-webkit-input-placeholder {
    color: #dadddf
}
.addFriendHint-3Y70FX {
    background-color: transparent;
    color: #dadddf;
}
.theme-dark .wrapper-1cBijl {
    background-color: rgba(36,39,43,.2);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .wrapper-1cBijl .addFriendInput-4bcerK {
    color: #fff
}
.theme-dark .wrapper-1cBijl .addFriendInput-4bcerK::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .wrapper-1cBijl .addFriendHint-3Y70FX {
    color: hsla(0, 0%, 100%, 0.35)
}
#friends {
    background-color: #fff;
}
#friends .tab-bar .tab-bar-item {
    color: #99aab5;
}
#friends .tab-bar .tab-bar-item.tab-bar-item-primary {
    background-color: #3a2648;
    color: #fff
}
#friends .tab-bar .tab-bar-item.tab-bar-item-primary .badge {
    background-color: #fff;
    color: #3a2648
}
#friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) {
    background-color: #6a7fcb
}
#friends .tab-bar .tab-bar-item .badge {
    background-color: #99aab5;
    color: #fff;
}
#friends .tab-bar .tab-bar-item.selected {
    background-color: #99aab5;
    color: #fff;
}
#friends .tab-bar .tab-bar-item.selected .badge {
    background-color: #fff;
    color: #99aab5
}
#friends .tab-bar .tab-bar-item:hover:not(.selected) {
    background-color: rgba(153,170,181,.2)
}
#friends .tab-bar-separator {
    background-color: #e9e7e7;
}
#friends .friends-table .friend-table-add-wrapper h2 {
    color: #737f8d;
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-description {
    color: rgba(153,170,181,.9);
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.error {
    color: #f04747!important
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.success {
    color: #43b581!important
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-header {
    background: -webkit-gradient(linear,left top,left bottom,color-stop(3%,#fff),to(hsla(0,0%,92.2%,.21)));
    background: linear-gradient(-180deg,#fff 3%,hsla(0,0%,92.2%,.21));
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts h3 {
    color: rgba(153,170,181,.9);
}
@media (max-width: 1220px) {
    #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts {
    }
}
#friends .friends-table .friends-table-header .friends-column {
    color: #99aab5;
}
#friends .friends-table .friends-table-header .friends-column-separator {
    background-color: #e9e7e7;
}
#friends .friends-table .friends-row .friends-suggestion-inner .friends-suggestion-info {
    color: #737f8d;
}
#friends .friends-table .friends-row .friends-suggestion-inner .friends-suggestion-info .friends-suggestion-platforms .friends-suggestion-platform-name {
    color: #737f8d;
}
#friends .friends-table .friends-row .friends-column-name {
    color: #737f8d
}
#friends .friends-table .friends-row .friends-column-status {
    color: rgba(115,127,141,.6);
}
#friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn {
    color: rgba(0,0,0,.6);
}
#friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn:hover {
    border-color: rgba(0,0,0,.6);
    color: #000
}
#friends .friends-table .friends-row .friends-column-actions .friends-action {
    background-color: #99aab5;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 24px;
}
#friends .friends-table .friends-row .friends-column-actions .friends-action:hover {
    background-color: #8a99a3
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-add:hover {
    background-color: #43b581!important
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-remove:hover {
    background-color: #f04747!important
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-accept:hover {
    background-color: #43b581!important
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-cancel:hover {
    background-color: #f04747!important
}
#friends .friends-table .friends-row:hover+.friends-row {
    border-color: transparent
}
#friends .friends-table .friends-row:hover {
    background: rgba(153,170,181,.2);
    border-color: transparent;
}
@media (max-width: 1300px) {
    #friends .friends-table .friends-column-name {
    }
}
@media (max-width: 1300px) {
    #friends .friends-table .friends-column-status {
    }
}
@media (max-width: 1300px) {
    #friends .friends-table .friends-column-guilds {
    }
    }
#friends .friends-empty .empty-state-image {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
#friends .friends-empty p {
    color: rgba(0,0,0,.4);
}
.theme-dark #friends .tab-bar .tab-bar-item {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .tab-bar .tab-bar-item .badge {
    background-color: hsla(0,0%,100%,.6);
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .tab-bar .tab-bar-item.selected {
    background-color: #fff;
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .tab-bar .tab-bar-item.selected .badge {
    background-color: #3a2648;
    color: #fff
}
.theme-dark #friends .tab-bar .tab-bar-item:hover:not(.selected) {
    background-color: #331f44
}
.theme-dark #friends .tab-bar .tab-bar-item:hover:not(.selected) .badge {
    color: #331f44
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary {
    background-color: #3a2648;
    color: #fff
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary .badge {
    background-color: #fff;
    color: #3a2648
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) {
    background-color: #391b52
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) .badge {
    color: #391b52
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected {
    background-color: #fff;
    color: #3a2648
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected .badge {
    background-color: #3a2648;
    color: #fff
}
.theme-dark #friends .tab-bar .tab-bar-separator {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark #friends .friends-table .friend-table-add-wrapper h2 {
    color: #fff
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(54,57,63,.3)),to(rgba(47,49,54,.3)));
    background: linear-gradient(-180deg,rgba(54,57,63,.3),rgba(47,49,54,.3));
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts h3 {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts .connect-account-btn-inner {
    border-color: hsla(0,0%,100%,.1)
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts .connect-account-btn-inner:hover {
    background-color: hsla(0,0%,100%,.1);
    border-color: transparent
}
.theme-dark #friends .friends-table .friend-table-add-description {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friends-table-header .friends-column {
    color: hsla(0,0%,100%,.3)
}
.theme-dark #friends .friends-table .friends-table-header .friends-column-separator {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark #friends .friends-table .friends-row .friends-column-name {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friends-row .friends-column-status {
    color: hsla(0,0%,100%,.4)
}
.theme-dark #friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn {
    border-color: hsla(0,0%,100%,.1);
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn:hover {
    border-color: hsla(0,0%,100%,.6);
    color: #fff
}
.theme-dark #friends .friends-table .friends-row .friends-column-actions .friends-action {
    background-color: #331f44
}
.theme-dark #friends .friends-table .friends-row .friends-column-actions .friends-action:hover {
    background-color: #3f225a
}
.theme-dark #friends .friends-table .friends-row .friends-suggestion-info,.theme-dark #friends .friends-table .friends-row .friends-suggestion-info .friends-suggestion-platform .friends-suggestion-platform-name {
    color: #fff
}
.theme-dark #friends .friends-table .friends-row:hover {
    background: rgb(57, 37, 74, 0.3);
    border-color: transparent
}
.theme-dark #friends .friends-table .friends-row:hover+.friends-row {
    border-color: transparent
}
.theme-dark #friends .friends-empty p {
    color: hsla(0,0%,100%,.4)
}
.theme-dark #friends {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar,.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb,.theme-dark #friends .scroller-wrap.polyfill .scrollbar:after {
    background-color: #331f44
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .track {
    background-color: transparent
}
.theme-dark #friends .scroller-wrap ::-webkit-scrollbar-thumb {
    background-color: #221035;
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap ::-webkit-scrollbar-track-piece {
    background-color: #331f44;
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar,.theme-dark #friends .scroller-wrap.polyfill .scrollbar:after {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: #221035
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .track {
    background-color: #331f44;
    border-color: rgba(57, 37, 74, 0.6)
}
.empty-388osJ {
    background-position: 0 0;
    background-repeat: no-repeat;
}
.theme-dark .row-35Mhio {
    color: #f6f6f7
}
.theme-dark .row-35Mhio:after {
    background-color: hsla(0,0%,100%,.04)
}
.theme-light .row-35Mhio {
    color: #3f225a
}
.theme-light .row-35Mhio:after {
    background-color: rgba(79,84,92,.04)
}
.channel-2QD9_O {
    color: #fff;
}
.channel-2QD9_O a {
    color: #fff;
}
.channel-2QD9_O.selected-1HYmZZ,.channel-2QD9_O:hover {
    color: #fff
}
.channel-2QD9_O.selected-1HYmZZ a,.channel-2QD9_O:hover a {
    background-color: rgba(57, 37, 74, 0.6);
    color: #fff
}
.channel-2QD9_O.selected-1HYmZZ .name-2WpE7M,.channel-2QD9_O:hover .name-2WpE7M {
    color: #fff;
}
.channel-2QD9_O.selected-1HYmZZ .activity-525YDR,.channel-2QD9_O:hover .activity-525YDR {
    color: #fff
}
.channel-2QD9_O:hover .status {
    border-color: rgba(57, 37, 74, 0.6)
}
.channel-2QD9_O.selected-1HYmZZ a {
    background-color: rgb(57, 37, 74, 0.4)
}
.channel-2QD9_O.selected-1HYmZZ .status {
    border-color: #42464d
}
.close-3hZ5Ni {
    background: url(/assets/9cc98e0a595df904b11a7824bb421778.svg) 50% no-repeat;
    background-size: 18px 18px;
}
.name-2WpE7M {
    color: #f6f6f7;
}
.activity-525YDR {
    color: #b9bbbe;
}
.privateChannels-1nO12o header {
    color: #fff;
}
.secured-1Yihly:before {
    background: url(/assets/0c89a0b25036b406bcbcf37701ec738f.svg) 50% no-repeat;
    background-size: 9px 12px;
}
.theme-light .container-2x5lvQ section p {
    color: #8a8e94
}
.theme-light .container-2x5lvQ section a {
    color: #00b0f4
}
.theme-light .debugButton-1Zec0y {
    color: #99aab5
}
.theme-light .secured-1Yihly {
    color: #43b581
}
.theme-dark [class*="container"] section {  
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark [class*="container"] section p {
    color: hsla(0,0%,100%,.4)
}
.theme-dark .container-3ayLPN {
    background-color: transparent;
}
.theme-dark .option-96V44q:after {
    background: linear-gradient(90deg,rgba(54,57,63,0),#36393f00 80%);
}
.theme-dark .container-2x5lvQ section strong {
    color: #b9bbbe
}
.theme-dark .container-2x5lvQ section a {
    color: #00b0f4
}
.theme-dark [class*="container"] section:after {
    border-top-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .debugButton-1Zec0y {
    color: #99aab5
}
.theme-dark .secured-1Yihly {
    color: #43b581
}
.container-1UB9sr {
    background: rgba(75, 21, 64, 0.3);
    color: #fff;
    border-bottom: transparent;
}
.inner-btChU7 .rtc-connection-status .ping {
    background: url(/assets/ebca02c11904a3812be7212755e6261f.svg) 50% no-repeat;
    background-size: 11px 12px;
}
.inner-btChU7 .channel-SEolQq {
    color: #fff;
}
.inner-btChU7 .rtc-connection-status-connected {
    color: #43b581
}
.inner-btChU7 .rtc-connection-status-connecting {
    color: #faa61a
}
.inner-btChU7 .rtc-connection-status-error {
    color: #f04747
}
.inner-btChU7 .rtc-connection-quality-average {
    color: #faa61a
}
.inner-btChU7 .rtc-connection-quality-bad {
    color: #f04747
}
.channel-SEolQq {
    color: #fff;
}
.theme-light .listeningAlong-2UPsxf {
    background-color: rgba(32,34,37,.3)
}
.theme-light .title-223e2Y {
    color: #fff
}
.theme-light .subtitle-Qv5s8c {
    color: hsla(0,0%,100%,.4)
}
.theme-light .actionIcon-h73Pge {
    color: #fff;
}
.theme-light .actionIcon-h73Pge:hover {
    background-color: rgba(24,25,28,.3);
}
.theme-dark .listeningAlong-2UPsxf {
    background-color: rgba(32,34,37,.3)
}
.theme-dark .title-223e2Y {
    color: #fff
}
.theme-dark .subtitle-Qv5s8c {
    color: hsla(0,0%,100%,.4)
}
.theme-dark .actionIcon-h73Pge {
    color: #fff;
}
.theme-dark .actionIcon-h73Pge:hover {
    background-color: rgba(24,25,28,.3);
}
.container-2lgZY8 {
    background-color: #221035
}
.channels-Ie2l6A {
    background-color: #331f44;
}
@media (max-width: 760px) {
    .hiddenOnMobileStore-1DIxbw {
    }
}
.button {
    background-color: #3a2648;
    color: #fff;
}
.button:hover {
    background-color: #4e5d94
}
.tutorial-indicators .indicator .animation-container .top {
    background: url(/assets/e1969c99c7929450baa3c88fab8e244c.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-indicators .indicator .animation-container .bottom {
    background: url(/assets/91efb70de850b7180044d04def863f07.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-indicators .indicator .animation-container .inner-circle {
    background: url(/assets/5d7b0c4b2a82d63d829b6ea591853c22.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-indicators .indicator .animation-container .outer-circle {
    background: url(/assets/2cf1ec0c044e0a2bdf7d818a1c8a7101.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-popout header {
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 400px 60px;
}
.tutorial-popout .button-area .skip-tips {
    color: #99aab5;
}
.tutorial-popout .button-area .skip-tips a {
    color: #3a2648;
}
@-webkit-keyframes exclaim-loop {
    0% {
    }
    }
@keyframes exclaim-loop {
    0% {
    }
    }
@-webkit-keyframes dot-loop {
    0% {
    }
    }
@keyframes dot-loop {
    0% {
    }
    }
@-webkit-keyframes inner-circle-loop {
    0% {
    }
    }
@keyframes inner-circle-loop {
    0% {
    }
    }
@-webkit-keyframes outer-circle-loop {
    0% {
    }
    }
@keyframes outer-circle-loop {
    0% {
    }
    }
@-webkit-keyframes inner-circle-loop-high-priority {
    0% {
    }
    }
@keyframes inner-circle-loop-high-priority {
    0% {
    }
    }
@-webkit-keyframes outer-circle-loop-high-priority {
    0% {
    }
    }
@keyframes outer-circle-loop-high-priority {
    0% {
    }
    }
@-webkit-keyframes quick-fade-out {
    to {
    }
}
@keyframes quick-fade-out {
    to {
    }
}
.subtitle-1H8FPn {
    color: #9e9e9e;
}
.theme-dark .incomingCallInner-2VmFiR {
    background: #221035;
    border-color: #18191c
}
.theme-dark .members-2BNiuX {
    color: #fff
}
.theme-light .incomingCallInner-2VmFiR {
    background: #f6f6f7;
    border-color: #dcddde
}
.theme-light .members-2BNiuX {
    color: #3f225a
}
.video-3alTtx {
    background-color: #000;
}
.channel-2-6Ybo {
    color: #fff;
}
.theme-light .pictureInPictureVideo-20ZvXn {
    background-color: #dcddde
}
.theme-dark .pictureInPictureVideo-20ZvXn {
    background-color: #221035
}
.theme-dark .item-30Gz8g {
    color: #f6f6f7
}
.theme-dark .itemValue-JNy0LV {
    color: #b9bbbe
}
.theme-light .item-30Gz8g {
    color: #3f225a
}
.theme-light .itemValue-JNy0LV {
    color: #9e9e9e
}
.theme-dark .videoPreview-22khDR {
    background-color: #331f44;
}
.theme-light .videoPreview-22khDR {
    background-color: #f6f6f7;
}
.image-2LVZ_j {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 80%;
}
.verificationBlock-1Chfpc .image-2LVZ_j {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 80%;
}
.theme-light .verification-3RfWYC .title-wZCcDo {
    color: #3f225a
}
.theme-light .verification-3RfWYC .body-3ROqbj,.theme-light .verification-3RfWYC .footer-1eZumv {
    color: #9e9e9e
}
.theme-light .verificationBlock-1Chfpc:hover {
    background-color: #f6f6f7
}
.theme-light .verificationBlock-1Chfpc .body-3ROqbj {
    color: #9e9e9e
}
.theme-dark .verification-3RfWYC .title-wZCcDo {
    color: #fff
}
.theme-dark .verification-3RfWYC .body-3ROqbj,.theme-dark .verification-3RfWYC .footer-1eZumv {
    color: #b9bbbe
}
.theme-dark .verificationBlock-1Chfpc:hover {
    background-color: #221035
}
.theme-dark .verificationBlock-1Chfpc .body-3ROqbj {
    color: #b9bbbe
}
.theme-light .layer-3QrUeG,.theme-light .layers-3iHuyZ {
    background: #fff
}
.theme-dark .layer-3QrUeG,.theme-dark .layers-3iHuyZ {
    background: rgba(57, 37, 74, 0.6)
}
.added-e1Pp41 {
    color: #43b581
}
.added-e1Pp41:after {
    background-color: #43b581
}
.fixed-22Vcez {
    color: #f04747
}
.fixed-22Vcez:after {
    background-color: #f04747
}
.progress-1fjoBz {
    color: #faa61a
}
.progress-1fjoBz:after {
    background-color: #faa61a
}
.improved-1F5LIN {
    color: #3a2648
}
.improved-1F5LIN:after {
    background-color: #3a2648
}
.theme-dark .date-2WJGyu {
    color: #b9bbbe
}
.theme-light .date-2WJGyu {
    color: #9e9e9e
}
.create-guild-container.deprecated {
    background-color: #fff;
}
.create-guild-container.deprecated .form-actions .btn-default {
    color: #99aab5;
}
.create-guild-container.deprecated .form-actions .btn-default:before {
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 18px,12px;
}
.create-guild-container.deprecated p {
    color: #99aab5;
}
.create-guild-container.deprecated h5 {
    color: #3a2648;
}
.create-guild-container.deprecated .join-server h5 {
    color: #43b581
}
.create-guild-container.deprecated .join-server .btn-primary {
    background-color: #43b581;
}
.create-guild-container.deprecated .join-server .btn-primary:hover {
    background-color: #3ca374
}
.create-guild-container.deprecated .join-server .error {
    color: #f04747
}
.create-guild-container.deprecated .join-server .sample-link {
    color: #3a2648;
}
.create-guild-container.deprecated .join-server .link-container input.error {
    border-color: #f04747
}
.create-guild-container.deprecated .join-server .link-container label {
    color: #99aab5;
}
.create-guild-container.deprecated .create-guild .guild-form .control-group input[disabled] {
    background-color: transparent;
}
.create-guild-container.deprecated .create-or-join .form-inner {
    background-color: #fff;
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat;
    background-size: 155px auto,75px auto;
}
.create-guild-container.deprecated .create-or-join .actions .or {
    background-position: 50%,50%;
    background-repeat: no-repeat;
    background-size: 52px,52px;
    color: #99aab5;
}
.create-guild-container.deprecated .action {
    background: hsla(0,0%,100%,.75);
}
.create-guild-container.deprecated .action:hover.join .btn {
    background-color: #369368!important
}
.create-guild-container.deprecated .action:hover.create .btn {
    background-color: #a02f7b
}
.create-guild-container.deprecated .action .action-body {
    color: #99aab5;
}
.create-guild-container.deprecated .action.create .action-header {
    color: #3a2648
}
.create-guild-container.deprecated .action.create .action-icon {
    background: url(/assets/845d431ebfc24e13a0b31f7e64fc612b.png) 50% no-repeat;
    background-size: 112px 78px;
}
.create-guild-container.deprecated .action.join .action-header {
    color: #3ca374
}
.create-guild-container.deprecated .action.join .action-icon {
    background: url(/assets/8fb52ec5260dfe6c5b93d211d3b6ecde.png) 50% no-repeat;
    background-size: 178.5px 78px;
}
.create-guild-container.deprecated .action.join .btn {
    background-color: #3ca374
}
.form-deprecated .form-header,.form.deprecated .form-header {
    background: #fff;
    color: #3a2648;
}
.form-deprecated .form-inner,.form.deprecated .form-inner {
    background-color: #fff;
}
.form-deprecated input::-webkit-input-placeholder,.form-deprecated textarea::-webkit-input-placeholder,.form.deprecated input::-webkit-input-placeholder,.form.deprecated textarea::-webkit-input-placeholder {
    color: #dadddf;
}
.form-deprecated header,.form.deprecated header {
    color: #3a2648;
}
.form-deprecated .control-group label,.form.deprecated .control-group label {
    color: #87909c;
}
.form-deprecated .control-group label a,.form.deprecated .control-group label a {
    color: #3a2648;
}
.form-deprecated .control-group label a:hover,.form.deprecated .control-group label a:hover {
    color: #4e5d94
}
.form-deprecated .control-group.error label,.form.deprecated .control-group.error label {
    color: #f04747
}
.form-deprecated .control-group input[type=email],.form-deprecated .control-group input[type=number],.form-deprecated .control-group input[type=password],.form-deprecated .control-group input[type=text],.form-deprecated .control-group textarea,.form.deprecated .control-group input[type=email],.form.deprecated .control-group input[type=number],.form.deprecated .control-group input[type=password],.form.deprecated .control-group input[type=text],.form.deprecated .control-group textarea {
    color: #331f44;
}
.form-deprecated .control-group input[type=email]:disabled,.form-deprecated .control-group input[type=number]:disabled,.form-deprecated .control-group input[type=password]:disabled,.form-deprecated .control-group input[type=text]:disabled,.form-deprecated .control-group textarea:disabled,.form.deprecated .control-group input[type=email]:disabled,.form.deprecated .control-group input[type=number]:disabled,.form.deprecated .control-group input[type=password]:disabled,.form.deprecated .control-group input[type=text]:disabled,.form.deprecated .control-group textarea:disabled {
    background: transparent;
}
.form-deprecated .control-group select,.form.deprecated .control-group select {
    background: url(/assets/cb1c737673cd98f0e796d6a646ec512c.svg) 98% no-repeat;
    background-color: #fff;
    background-size: 20px 10px;
    color: #331f44;
}
.form-deprecated .control-group .help-text,.form.deprecated .control-group .help-text {
    color: #87909c;
}
.form-deprecated .control-group .help-text.error,.form-deprecated .control-group .help-text.error a,.form.deprecated .control-group .help-text.error,.form.deprecated .control-group .help-text.error a {
    color: #f04747
}
.form-deprecated .Select.is-disabled .Select-control:hover,.form-deprecated .Select.is-open .Select-control:hover,.form.deprecated .Select.is-disabled .Select-control:hover,.form.deprecated .Select.is-open .Select-control:hover {
    border-color: #cdcdcd
}
.form-deprecated .Select-placeholder,.form.deprecated .Select-placeholder {
    color: #cdcdcd;
}
.form-deprecated .has-value .Select-placeholder,.form.deprecated .has-value .Select-placeholder {
    color: #331f44
}
.form-deprecated .Select-control:hover,.form.deprecated .Select-control:hover {
    border-color: #bbb
}
.form-deprecated .Select-option,.form.deprecated .Select-option {
    color: #331f44
}
.form-deprecated .Select-option.is-focused,.form.deprecated .Select-option.is-focused {
    background: #f7f7f7;
    color: #331f44
}
.form-deprecated .form-actions,.form.deprecated .form-actions {
    background-color: #f9f9f9;
}
.form-deprecated .btn.red,.form.deprecated .btn.red {
    background-color: #f36c6c
}
.form-deprecated .btn.red:hover,.form.deprecated .btn.red:hover {
    background-color: #f04747
}
.form-deprecated .btn.green,.form.deprecated .btn.green {
    background-color: #43b581
}
.form-deprecated .btn.green:hover,.form.deprecated .btn.green:hover {
    background-color: #3ca374
}
.form-deprecated .btn.disabled,.form-deprecated .btn:disabled,.form.deprecated .btn.disabled,.form.deprecated .btn:disabled {
    background-color: #949494;
    color: #ddd;
}
.form-deprecated .btn.disabled.btn-saving,.form-deprecated .btn:disabled.btn-saving,.form.deprecated .btn.disabled.btn-saving,.form.deprecated .btn:disabled.btn-saving {
    color: transparent
}
.form-deprecated .btn.disabled .spinner .spinner-item,.form-deprecated .btn:disabled .spinner .spinner-item,.form.deprecated .btn.disabled .spinner .spinner-item,.form.deprecated .btn:disabled .spinner .spinner-item {
    background-color: #fff
}
.form-deprecated .btn.disabled:hover,.form-deprecated .btn:disabled:hover,.form.deprecated .btn.disabled:hover,.form.deprecated .btn:disabled:hover {
    background-color: #949494
}
.form-deprecated .btn-primary,.form.deprecated .btn-primary {
    background-color: #3a2648;
    color: #fff
}
.form-deprecated .btn-primary:hover,.form.deprecated .btn-primary:hover {
    background-color: #4e5d94
}
.form-deprecated .btn-default,.form.deprecated .btn-default {
    background-color: #f9f9f9;
    color: #949494;
}
.btn-confirm .icon {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px 16px;
}
.btn-confirm .btn {
    background-color: transparent;
    color: #fff;
}
.btn-confirm:not(.reverse-slide) .btn:first-of-type:hover {
    background-color: #f04747;
    color: #fff
}
.btn-confirm:not(.reverse-slide).active .btn:last-of-type:not(:first-of-type) {
    background-color: #f36c6c;
}
.btn-confirm:not(.reverse-slide).active .btn:last-of-type:not(:first-of-type):hover {
    background-color: #f04747
}
.btn-confirm.reverse-slide .btn:last-of-type:not(:first-of-type):hover {
    background-color: #f04747;
    color: #fff
}
.btn-confirm.reverse-slide.active .btn:first-of-type {
    background-color: #f36c6c;
}
.btn-confirm.active .btn,.btn-confirm.reverse-slide.active .btn:first-of-type:hover {
    background-color: #f04747
}
.theme-dark .cloneInfo-1OC_Ee strong,.theme-dark .subtitle-3csUrC {
    color: #b9bbbe
}
.theme-light .cloneInfo-1OC_Ee strong {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .subtitle-3csUrC {
    color: #9e9e9e
}
.checkboxMute-14hTGS:before {
    background-color: rgba(0,0,0,.1);
}
.theme-dark .channelName-28iMRJ {
    color: #f6f6f7
}
.theme-dark .guildName-3WI6ml,.theme-dark .override-2YgiXd,.theme-dark .overrideHighlight-YPcBxt {
    color: #b9bbbe
}
.theme-dark .override-2YgiXd:hover {
    background-color: rgba(32,34,37,.1)
}
.theme-dark .overrideHighlight-YPcBxt,.theme-dark .overrideHighlight-YPcBxt:hover {
    background-color: rgba(32,34,37,.3)
}
.theme-dark .checkboxContainer-2vV9zd:before {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-light .channelName-28iMRJ {
    color: #3f225a
}
.theme-light .guildName-3WI6ml,.theme-light .override-2YgiXd,.theme-light .overrideHighlight-YPcBxt {
    color: #9e9e9e
}
.theme-light .override-2YgiXd:hover {
    background-color: rgba(246,246,247,.1)
}
.theme-light .overrideHighlight-YPcBxt,.theme-light .overrideHighlight-YPcBxt:hover {
    background-color: rgba(246,246,247,.3)
}
.theme-light .checkboxContainer-2vV9zd:before {
    background-color: rgba(220,221,222,.6)
}
.modal-new-user>.steps {
    background: #fff;
}
.modal-new-user>.steps .step-1 {
    background: url(/assets/0c78ea6377b186e6675fed771165efc0.png) no-repeat bottom
}
.modal-new-user>.steps .step-2 .guild-form .control-group input[disabled] {
    background-color: transparent;
}
.modal-new-user p {
    color: #99aab5;
}
.modal-new-user h5 {
    color: #3a2648;
}
.modal-new-user .steps-wrap .steps .divider {
    background-color: #dbdde1;
}
.modal-new-user .steps-wrap .steps li {
    background-color: #dbdde1;
}
.modal-new-user .steps-wrap .steps li.on,.modal-new-user .steps-wrap .steps li.on+.divider,.modal-new-user .steps-wrap .steps li.on:before {
    background-color: #3a2648
}
.modal-new-user .steps-wrap .steps li.active {
    background-color: #3a2648;
}
.modal-new-user .steps-wrap .steps li.active+.divider {
    background-color: #dbdde1
}
.topSectionStreaming-1Tpf5X {
    background: #593695
}
.topSectionSpotify-1lI0-P {
    background: #1db954
}
.topSectionXbox-3fWLjS {
    background: #107c10
}
.topSectionPlaying-1J5E4n {
    background: #3a2648
}
.username-3gJmXY {
    color: #fff;
}
.discriminator-xUhQkU {
    color: hsla(0,0%,100%,.6);
}
.profileBadge-2BqF-Z {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.buttonInvertedPurple-WtBglX {
    background-color: #f8f9fd;
    color: #593695
}
.buttonInvertedPurple-WtBglX:active {
    background-color: #e3e7f8
}
.headerFill-adLl4x {
    background-color: rgba(0,0,0,.05)
}
.additionalActionsIcon-1FoUlE {
    background: url(/assets/c75b049cb25ec007efd22d608a0c9c0a.svg) no-repeat 50%;
}
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP {
    color: hsla(0,0%,100%,.6);
}
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP:hover {
    border-bottom-color: hsla(0, 0%, 100%, 0.35)
}
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected {
    border-bottom-color: #fff;
    color: #fff
}
.userInfoSectionHeader-CBvMDh {
    color: #9e9e9e;
}
.note-QfFU8y textarea,.note-QfFU8y textarea::-webkit-input-placeholder {
    color: #b9bbbe
}
.note-QfFU8y textarea,.note-QfFU8y textarea:-ms-input-placeholder {
    color: #b9bbbe
}
.note-QfFU8y textarea,.note-QfFU8y textarea::placeholder {
    color: #b9bbbe
}
.connectedAccountName-f8AEe2 {
    color: #b9bbbe;
}
.connectedAccountOpenIcon-2cNbq5 {
    background: url(/assets/84591cd2a7c7aca2aca6871b28ad8f8b.svg) no-repeat 50%;
}
.listAvatar-1NlAhb {
    color: #fff;
}
.guildAvatarWithoutIcon-1sTmE_ {
    background-color: #3a2648
}
.guildNick-3uAm3i {
    color: #9099a4;
}
.emptyIcon-pGTAhd {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.emptyText-6tYmO5 {
    color: #9e9e9e;
}
.theme-dark .topSectionNormal-2-vo2m {
    background-color: #221035
}
.theme-dark .body-3ND3kc {
    background-color: #331f44
}
.theme-dark .connectedAccount-36nQx7,.theme-dark .userInfoSection-2acyCx+.userInfoSection-2acyCx {
    border-color: #221035
}
.theme-dark .listRow-hutiT_ {
    color: #b9bbbe
}
.theme-dark .listRow-hutiT_:hover {
    background: -webkit-gradient(linear,left top,right top,color-stop(90%,hsla(0,0%,100%,.05)),to(hsla(0,0%,100%,0)));
    background: linear-gradient(90deg,hsla(0,0%,100%,.05) 90%,hsla(0,0%,100%,0));
    color: #b9bbbe
}
.theme-dark .root-SR8cQa .note-QfFU8y textarea:focus {
    background-color: #221035
}
.theme-light .topSectionNormal-2-vo2m {
    background-color: #f6f6f7
}
.theme-light .topSectionNormal-2-vo2m .username-3gJmXY {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .topSectionNormal-2-vo2m .discriminator-xUhQkU {
    color: rgba(185,187,190,.6)
}
.theme-light .topSectionNormal-2-vo2m .profileBadgeText-1JgCcU,.theme-light .topSectionNormal-2-vo2m .tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP {
    color: rgba(54,57,63,.6)
}
.theme-light .topSectionNormal-2-vo2m .tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP:hover {
    border-bottom-color: rgba(54,57,63,.2)
}
.theme-light .topSectionNormal-2-vo2m .tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected {
    border-bottom-color: rgba(57, 37, 74, 0.6);
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .body-3ND3kc {
    background-color: #fff
}
.theme-light .userInfoSection-2acyCx+.userInfoSection-2acyCx {
    border-top-color: #dcddde
}
.theme-light .connectedAccount-36nQx7 {
    border-color: #dcddde
}
.theme-light .connectedAccountName-f8AEe2 {
    color: #9e9e9e
}
.theme-light .emptyText-6tYmO5 {
    color: #b9bbbe
}
.theme-light .listRow-hutiT_ {
    color: #9e9e9e
}
.theme-light .listRow-hutiT_:hover {
    background: -webkit-gradient(linear,left top,right top,color-stop(90%,rgba(185,187,190,.05)),to(rgba(185,187,190,0)));
    background: linear-gradient(90deg,rgba(185,187,190,.05) 90%,rgba(185,187,190,0));
    color: rgba(57, 37, 74, 0.6)
}
.coloredHeader-N84M0L {
    background-color: #3a2648;
}
.headerIcon-2O31Jq {
    color: #fff;
}
.price-2IU94K {
    background-color: #fff;
    color: #3a2648;
}
.theme-dark .confirmationBlurb-2pUik2 {
    color: #b9bbbe
}
.theme-dark .activated-KjWeLP {
    border-color: hsla(0,0%,100%,.3);
    color: #fff
}
.theme-dark .activatedShine-3JgAvN {
    color: hsla(0,0%,100%,.5)
}
.theme-light .confirmationBlurb-2pUik2 {
    color: #9e9e9e
}
.theme-light .activated-KjWeLP {
    border-color: rgba(172, 79, 149, 0.3);
    color: #3a2648
}
.theme-light .activatedShine-3JgAvN {
    color: rgba(114,137,218,.2)
}
.theme-light .header-37u8Mj .closeIcon-_awJDU {
    color: #fff
}
.authBox-hW6HRx {
    background: rgba(57, 37, 74, 0.6);
    color: #9e9e9e;
}
.authBox-hW6HRx a {
    color: #3a2648
}
@media (max-width: 485px) {
    .authBox-hW6HRx {
        background: -webkit-gradient(linear,right top,left bottom,from(#3d4046),to(#1e1e23));
        background: linear-gradient(to left bottom,#3d4046,#1e1e23);
    }
    .authBox-hW6HRx:before {
        background: url(/assets/4f004ac9be168ac6ee18fc442a52ab53.svg) no-repeat;
    }
}
.theme-light .title-jXR8lp {
    color: #3f225a
}
.subTitle-3TUjmF {
    color: #9e9e9e;
}
.subTitle-3TUjmF strong {
    color: rgba(185,187,190,.9);
}
.subText-1XkjIB {
    color: #9e9e9e
}
.theme-light .verified-2-ja4L {
    color: #3f225a
}
.theme-dark .pill-1dHPfk {
    background-color: rgba(32,34,37,.3)
}
.theme-light .pill-1dHPfk {
    background-color: rgba(185,187,190,.3)
}
.theme-dark .pillMessage-1btqlx {
    color: #b9bbbe
}
.theme-light .pillMessage-1btqlx {
    color: #9e9e9e
}
.pillIconTotal-1BqTcA {
    background-color: #9e9e9e
}
.pillIconOnline-2JGlqR {
    background-color: #43b581
}
.spinnerText-lNRnYJ {
    color: #fff;
}
.inviteIcon-DSd8cG {
    background-color: #3a2648;
    color: #fff;
}
.inviteLargeIcon-HrAH61 {
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-dark .inputError-1PrjdI,.theme-dark .inputError-1PrjdI:focus,.theme-dark .inputError-1PrjdI:hover,.theme-light .inputError-1PrjdI,.theme-light .inputError-1PrjdI:focus,.theme-light .inputError-1PrjdI:hover {
    border-color: #f04747
}
@media (max-height: 600px) {
    .container-2Yth53 {
    }
}
@media (max-width: 720px) {
    .contentWrapper-3WC1ID {
    }
}
.theme-dark .contentWrapper-3WC1ID {
    background: rgba(57, 37, 74, 0.6)
}
.theme-light .contentWrapper-3WC1ID {
    background: #f6f6f7
}
.inviteSplash-40aHus {
    background-position: 100%;
    background-size: cover;
}
@media (max-width: 940px) {
    .inviteSplash-40aHus {
    }
}
@media (max-width: 720px) {
    .inviteSplash-40aHus {
    }
}
.dmIconContainer-2yFeX3 .guildIcon-Ripiyt,.guildIconContainer-1M95yt .guildIcon-Ripiyt {
    background-size: 100% 100%;
}
.theme-dark .resultFocused-3aIoYe {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .resultFocused-3aIoYe .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #221035;
}
.theme-dark .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #331f44;
}
.theme-dark .contentUnread-3gTHvA {
    color: #fff
}
.theme-dark .contentUnread-3gTHvA .note-S--UP5 {
    color: #9e9e9e
}
.theme-dark .contentDefault-16dKSY {
    color: #b9bbbe
}
.theme-dark .contentDefault-16dKSY .note-S--UP5 {
    color: #9e9e9e
}
.theme-dark .icon-30q1Or {
    color: #b9bbbe
}
.theme-dark .dmIconContainer-2yFeX3 .guildIcon-Ripiyt,.theme-dark .guildIconContainer-1M95yt .guildIcon-Ripiyt {
    background-color: rgba(0,0,0,.3);
    color: #9e9e9e
}
.theme-dark .header-13MUnb {
    color: #b9bbbe
}
.theme-light .resultFocused-3aIoYe {
    background-color: #fff
}
.theme-light .resultFocused-3aIoYe .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #fff;
}
.theme-light .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #f6f6f7;
}
.theme-light .contentUnread-3gTHvA,.theme-light .contentUnread-3gTHvA .note-S--UP5 {
    color: #3f225a
}
.theme-light .contentDefault-16dKSY,.theme-light .contentDefault-16dKSY .note-S--UP5 {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .icon-30q1Or {
    color: #9e9e9e
}
.theme-light .dmIconContainer-2yFeX3 .guildIcon-Ripiyt,.theme-light .guildIconContainer-1M95yt .guildIcon-Ripiyt {
    background-color: #fff;
    color: #9e9e9e
}
.qs-tutorial-messages {
    color: #fff;
}
@-webkit-keyframes arrow-pulse {
    0%,to {
    }
    }
@keyframes arrow-pulse {
    0%,to {
    }
    }
.emptyState-2gL-9T {
    background: no-repeat 50% 20px;
}
.theme-dark .quickswitcher-3JagVE {
    background-color: #331f44;
    color: #dcddde
}
.theme-dark .input-2VB9rf {
    background-color: #9e9e9e;
    color: #fff
}
.theme-dark .input-2VB9rf::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .input-2VB9rf::-moz-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .input-2VB9rf:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .input-2VB9rf:-moz-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .emptyStateNote-ZYTetQ {
    color: #9e9e9e
}
.theme-dark .tipsWithoutResults-lGY-De,.theme-dark .tipsWithResults-HhTE9b {
    border-color: rgb(57, 37, 74, 0.3);
    color: #9e9e9e
}
.theme-dark .miscContainer-2ptJ_C .avatar-xsmall {
    background-color: rgba(0,0,0,.3)
}
.theme-light .quickswitcher-3JagVE {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .input-2VB9rf {
    background-color: #fff;
    color: #3f225a
}
.theme-light .input-2VB9rf::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-2VB9rf::-moz-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-2VB9rf:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-2VB9rf:-moz-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .emptyStateNote-ZYTetQ {
    color: #828385
}
.theme-light .miscContainer-2ptJ_C .avatar-xsmall {
    background-color: rgba(0,0,0,.1)
}
.theme-dark .container-OI6I9q {
    color: #9e9e9e
}
.theme-dark .selected-P8xTeN {
    color: #f6f6f7
}
.theme-light .container-OI6I9q {
    color: #b9bbbe
}
.theme-light .selected-P8xTeN {
    color: #3f225a
}
.selectorButtonSelected-1j4DmC {
    background-color: #3a2648
}
.selectorTextSelected-3m1dO_ {
    color: #f6f6f7
}
.theme-dark .tiles-2aXG_k {
    background-color: #331f44;
}
.theme-dark .tile-2QWaFv {
    color: #b9bbbe
}
.theme-dark .titleSelected-1UkXLp {
    color: #f6f6f7
}
.theme-dark .selectorText-9iPrCS {
    color: #b9bbbe
}
.theme-light .tiles-2aXG_k {
    background-color: #f6f6f7;
}
.theme-light .tile-2QWaFv {
    color: #9e9e9e
}
.theme-light .titleSelected-1UkXLp {
    color: #3f225a
}
.theme-light .selectorText-9iPrCS {
    color: #9e9e9e
}
.theme-light .emailVerificationModal-3cfLjL .title-38uBel {
    color: #3f225a
}
.theme-light .emailVerificationModal-3cfLjL .body-1_Foxn {
    color: #9e9e9e
}
.theme-light .emailVerificationModal-3cfLjL .body-1_Foxn.error-MUeDOy {
    color: #f04747
}
.theme-dark .emailVerificationModal-3cfLjL .title-38uBel {
    color: #f6f6f7
}
.theme-dark .emailVerificationModal-3cfLjL .body-1_Foxn {
    color: #9e9e9e
}
.theme-dark .emailVerificationModal-3cfLjL .body-1_Foxn.error-MUeDOy {
    color: #f04747
}
.switch-1bkg5j .slider-2-A75I {
    background-color: transparent;
}
.switch-1bkg5j .slider-2-A75I:before {
    background-color: #fff;
}
.switch-1bkg5j input:checked+.slider-2-A75I {
    background-color: #43b581
}
.detected-platform-accounts-modal .icons {
    background-position: top;
    background-repeat: no-repeat;
}
.detected-platform-accounts-modal .body {
    color: hsla(0,0%,100%,.6);
}
.detected-platform-accounts-modal .body strong {
    color: #fff
}
.detected-platform-accounts-modal .btn-group .btn-default {
    background-color: transparent;
    color: #fff;
}
.detected-platform-accounts-modal .btn-group .btn-primary {
    background-color: #3a2648;
    color: #fff;
}
.detected-platform-accounts-modal .btn-group .btn-primary:hover:not(:disabled) {
    background-color: #4e5d94
}
.detected-platform-accounts-modal .divider {
    background: #f5f5f5;
}
.detected-platform-accounts-modal .detected-accounts .detected-account .detected-account-details h3 {
    color: #fff;
}
.detected-platform-accounts-modal .detected-accounts .detected-account .detected-account-details h4 {
    color: hsla(0,0%,100%,.4);
}
.detected-platform-accounts-modal .privacy {
    color: hsla(0,0%,100%,.3);
}
.detected-platform-accounts-modal .privacy a {
    color: rgba(0,176,244,.6);
}
.modal-DRZfgq {
    background-color: #fff;
}
.title-3Fa4Po {
    color: #3a2648;
}
.ack-2yIUvY {
    color: #3f225a
}
.buttonContainer-3S_miP {
    background-color: #f9f9f9;
}
.theme-dark .title-rv8Fft {
    color: #fff
}
.theme-light .title-rv8Fft {
    color: #3f225a
}
.image-2lEAkj {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-dark .title-3CgDLA {
    color: #fff
}
.theme-dark .appPromotion-2PUSOL {
    color: #b9bbbe
}
.theme-light .title-3CgDLA {
    color: #3f225a
}
.theme-light .appPromotion-2PUSOL {
    color: #9e9e9e
}
.ragingDemon-bDcoXE {
    color: #fff;
}
.symbolBackground-1w6i-M {
    background-color: #fff;
}
@-webkit-keyframes symbolFadeIn-wkjQKf {
    0% {
    }
    }
@keyframes symbolFadeIn-wkjQKf {
    0% {
    }
    }
@-webkit-keyframes symbolBgFadeOut-YosnTk {
    0% {
    }
    }
@keyframes symbolBgFadeOut-YosnTk {
    0% {
    }
    }
@-webkit-keyframes explCircleInner-4eTA27 {
    0% {
    }
    }
@keyframes explCircleInner-4eTA27 {
    0% {
    }
    }
@-webkit-keyframes explCircleOuter-20lecN {
    0% {
    }
    }
@keyframes explCircleOuter-20lecN {
    0% {
    }
    }
@-webkit-keyframes explLinesSecondary-1Eag-K {
    0% {
    }
    }
@keyframes explLinesSecondary-1Eag-K {
    0% {
    }
    }
@-webkit-keyframes explLinesMain-1D2qvD {
    0% {
    }
    }
@keyframes explLinesMain-1D2qvD {
    0% {
    }
    }
.ddrArrows-lSnH7P .arrow-2enltQ.active-2X6Ewx {
    background-position: 0 -100px
}
.theme-dark .keyboardShortcutsModal-3piNz7 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .modalTitle-37O4n6 {
    color: #fff
}
.theme-dark .modalSubtitle-1Pj5nv {
    color: #dcddde
}
.theme-dark .keyboardShortcutList-13cQ-8 .keybindGroup--6Qp-w .keybindDescription-2RDbC2 {
    color: #b9bbbe;
}
.theme-light .keyboardShortcutsModal-3piNz7 {
    background-color: #fff
}
.theme-light .modalTitle-37O4n6 {
    color: #3f225a
}
.theme-light .modalSubtitle-1Pj5nv {
    color: #737f8d
}
.theme-light .keyboardShortcutList-13cQ-8 .keybindGroup--6Qp-w .keybindDescription-2RDbC2 {
    color: #3f225a
}
@-webkit-keyframes arrow-2enltQ {
    0% {
        background-position: 0 -50px
    }
    to {
        background-position: 0 -150px
    }
}
@keyframes arrow-2enltQ {
    0% {
        background-position: 0 -50px
    }
    to {
        background-position: 0 -150px
    }
}
.theme-dark .text-261YYq,.theme-dark .title-iQAIhu {
    color: #fff
}
.theme-light .text-261YYq,.theme-light .title-iQAIhu {
    color: #9e9e9e
}
.resultWrapper-2g7r2D {
    color: #b9bbbe;
}
.resultWrapperSelected-3v78W2 {
    background-color: rgb(57, 37, 74, 0.3);
    color: #fff
}
.noResults-3LFG4E {
    background: url(/assets/0b298968e0a756e25677771fd6b58b34.svg) no-repeat 50% 40%;
}
.gamepadButtonText-3oiVZ3 {
    color: #fff;
}
.sectionTitle-337Owh {
    color: #fff;
}
.sectionSubtitle-3oof5F {
    color: #fff;
}
@media (max-height: 720px) {
    .sectionTitle-337Owh {
    }
    }
.errorMessageContainer-3tPaYl {
    background-color: #f6f6f7;
}
.errorMessage-3H97Nb {
    color: #3f225a
}
.errorMessageIcon-1ToWng {
    color: #f04747;
}
@media (max-height: 720px) {
    .logo-2apZa6 {
    }
    }
@media (max-height: 720px) {
    .pinNumber-2Y-fxV {
    }
    }
.card-1YzUI1 {
    background: #221035;
    border-color: #221035;
}
@media (max-width: 485px) {
    .wrapper-6URcxg {
    }
}
@media (min-width: 486px) {
    .wrapper-6URcxg {
    }
}
@media (min-width: 1080px) {
    .wrapper-6URcxg {
    }
}
@media (min-width: 486px) {
    .logo-2iEHEq {
        background:url(/assets/4f004ac9be168ac6ee18fc442a52ab53.svg) no-repeat;
    }
}
@media (min-width: 1080px) {
    .logo-2iEHEq {
    }
}
.platform-win .splashBackground-1FRCko:before {
    background: rgba(0,0,0,.3);
}
.platform-win .splashBackground-1FRCko.loggingIn-3Hi-BU:before {
    background: transparent
}
.wrapper-1V4Ofx {
    background: repeat 108% 103% url(/assets/8eba753f8b6d02be1013c5e659b0fc2f.png);
    background-color: #221035;
}
.widget-3Jf1UK {
    color: #fff;
}
.widget-3Jf1UK.default-2DEBb2 {
    background-color: #331f44
}
.widget-3Jf1UK.unpinned-27g8oz {
    background-color: rgba(57, 37, 74, 0.6)
}
.bar-3DMj4v {
    color: #fff;
}
.bar-3DMj4v.default-2DEBb2 {
    background-color: #581743
}
.bar-3DMj4v.unpinned-27g8oz {
    background-color: rgba(57, 37, 74, 0.6)
}
.bar-3DMj4v.pinned-XAtPII {
    background-color: rgba(54,57,63,.85)
}
.body-1dRqZe {
    color: #fff;
}
.body-1dRqZe.default-2DEBb2 {
    background-color: #331f44
}
.body-1dRqZe.unpinned-27g8oz {
    background-color: rgba(57, 37, 74, 0.6)
}
.body-1dRqZe.pinned-XAtPII {
    background-color: rgba(54,57,63,.6)
}
.body-1dRqZe.inGame-1_RaeF {
    background-color: hsla(0,0%,100%,0)
}
.icon-1napVC {
    color: #fff;
}
.empty-1_GBzR {
    background: url(/assets/46e8d571c6c9410efbda9433cbaca51d.svg);
    background-position: 50% 40%;
    background-repeat: no-repeat;
    background-size: 200px auto;
}
.emptyMessage-3LUEw8 {
    color: #9e9e9e;
}
.controls-2NrGNJ {
    background: #581743;
    color: #fff;
}
.header-2ZdCft {
    background-color: #331f44!important;
}
.key-3j3-mG {
    background-color: #3a2648;
    color: #fff;
}
.container-fEIfjO {
    color: #fff;
}
.footer-29jAtw {
    color: #b9bbbe;
}
.themePrimary-18HFsc.container-fEIfjO {
    background-color: rgba(54,57,63,.9)
}
.themePrimary-18HFsc.clickable-2NoTM3:hover {
    background-color: rgba(57, 37, 74, 0.6)
}
.themePrimary-18HFsc .body-3iVSWA {
    color: #b9bbbe
}
.themePrimary-18HFsc .divider-2SJIXw {
    background-color: #3f225a
}
.themePrimary-18HFsc .closeButton-29JYDb {
    background-color: rgba(54,57,63,.8);
}
.themeBrand-2qTyWV.container-fEIfjO {
    background-color: rgba(142,161,225,.9)
}
.themeBrand-2qTyWV.clickable-2NoTM3:hover {
    background-color: #8ea1e1
}
.themeBrand-2qTyWV .body-3iVSWA {
    color: #fdecff
}
.themeBrand-2qTyWV .footer-29jAtw {
    color: #fff;
}
.themeBrand-2qTyWV .divider-2SJIXw {
    background-color: #3a2648
}
.themeBrand-2qTyWV .closeButton-29JYDb {
    background-color: rgba(142,161,225,.8);
}
.themeDanger-2d-qs2.container-fEIfjO {
    background-color: rgba(240,71,71,.9)
}
.themeDanger-2d-qs2.clickable-2NoTM3:hover {
    background-color: #f04747
}
.themeDanger-2d-qs2 .body-3iVSWA {
    color: #fcdada
}
.themeDanger-2d-qs2 .footer-29jAtw {
    color: #fff;
}
.themeDanger-2d-qs2 .divider-2SJIXw {
    background-color: #f36c6c
}
.themeDanger-2d-qs2 .closeButton-29JYDb {
    background-color: rgba(240,71,71,.8);
}
.themeDanger-2d-qs2 .closeButton-29JYDb .closeIcon-2Uo05m {
    color: #fff;
}
.newsNudge-36MYW3 {
    background-color: #3a2648
}
.newsNudgeKey-m9PmvF {
    background-color: #fff;
    color: #3a2648
}
.stackedNotification-2stwHR {
    background-color: rgba(54,57,63,.8);
}
.resizeIcon-zw5Ldi {
    background-repeat: no-repeat;
    background-size: 16px;
}
.widgetDefault-3p24ip {
    background-color: #331f44
}
.headerDefault-3pVr2F {
    background-color: #331f44;
}
.headerPinnedLight-33jGuJ {
    background-color: rgba(114,118,125,.6);
}
.headerPinnedDark-2c8shx {
    background-color: rgba(57, 37, 74, 0.6);
}
.bodyPinnedDark-15y5Fl {
    background-color: rgba(57, 37, 74, 0.6)
}
.bodyTransparent-NFgPYn {
    background-color: transparent
}
.footerDefault-2zxhV8 {
    background-color: #221035
}
.footerPinnedLight-1K1eUk {
    background-color: rgba(114,118,125,.6)
}
.footerPinnedDark-3qPqV1 {
    background-color: rgba(57, 37, 74, 0.6)
}
.icon-15v2QJ {
    color: #fff;
}
.channelNameWrapper-2vQGWw {
    color: #f6f6f7;
}
.titleIcon-2ciH3G {
    color: #8a8e94;
}
.dragIcon-2JTLdo {
    color: #8a8e94;
}
.theme-dark .activeCallIcon-37ETG9:after {
    background-color: #43b581;
}
.headerDefault-1qHUFF {
    background-color: rgba(57, 37, 74, 0.6)
}
.headerPinned-93Uwgl {
    background-color: rgba(54,57,63,.3)
}
.solidBackground-3741fr {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesPinned-1-onfA {
    background-color: rgba(54,57,63,.3)
}
.footerContent-2Hkx-f {
    background-color: rgba(57, 37, 74, 0.6)
}
.footerContent-2Hkx-f:before {
    background-color: hsla(0,0%,100%,.04)
}
.footerContentPinned-2M6JEM {
    background-color: rgba(54,57,63,.3)
}
.username-2FGs2B {
    color: #fff;
}
.locked-3PIhFd {
    background-color: rgba(0,0,0,.4);
}
.priority-20RaiF {
    background-color: #9e9e9e;
}
.prioritySpeaking-2lsGo- {
    background-color: #43b581
}
.overlay-2zxlBT {
    color: #fff;
}
.overlayActive-1zNgFQ {
    background-color: rgba(79,86,96,.8);
}
@-webkit-keyframes spin-3elCWT {
    0% {
    }
    }
@keyframes spin-3elCWT {
    0% {
    }
    }
.carouselButtonsContainer-Rba2-D {
    color: #f6f6f7;
}
.arrow-3jRqK8 {
    background-color: #18191c;
}
.video-38qD3Y {
    background: #000
}
.theme-dark .item-3V15ea,.theme-light .item-3V15ea {
    background-color: #000
}
.theme-light .divider-21LyPb {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .divider-21LyPb {
    border-color: rgba(47,49,54,.6)
}
.theme-dark h1.title-3KTIjF,.theme-dark h2.title-3KTIjF {
    color: #fff
}
.theme-dark h3.title-3KTIjF {
    color: #dcddde
}
.theme-dark h4.title-3KTIjF,.theme-dark h5.title-3KTIjF,.theme-dark h6.title-3KTIjF {
    color: #b9bbbe
}
.theme-light h1.title-3KTIjF,.theme-light h2.title-3KTIjF {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light h3.title-3KTIjF,.theme-light h4.title-3KTIjF,.theme-light h5.title-3KTIjF,.theme-light h6.title-3KTIjF {
    color: #9e9e9e
}
.smallCarousel-2e0IQc {
    background-color: #000;
}
.embedContainer-26S24y {
    background-color: #18191c;
}
.theme-light .hljs {
    background: #fdf6e3;
    color: #657b83;
}
.theme-light .hljs-comment,.theme-light .hljs-quote {
    color: #586e75
}
.theme-light .hljs-addition,.theme-light .hljs-keyword,.theme-light .hljs-selector-tag {
    color: #859900
}
.theme-light .hljs-doctag,.theme-light .hljs-literal,.theme-light .hljs-meta .hljs-meta-string,.theme-light .hljs-number,.theme-light .hljs-regexp,.theme-light .hljs-string {
    color: #2aa198
}
.theme-light .hljs-name,.theme-light .hljs-section,.theme-light .hljs-selector-class,.theme-light .hljs-selector-id,.theme-light .hljs-title {
    color: #268bd2
}
.theme-light .hljs-attr,.theme-light .hljs-attribute,.theme-light .hljs-class .hljs-title,.theme-light .hljs-template-variable,.theme-light .hljs-type,.theme-light .hljs-variable {
    color: #b58900
}
.theme-light .hljs-bullet,.theme-light .hljs-link,.theme-light .hljs-meta,.theme-light .hljs-meta .hljs-keyword,.theme-light .hljs-selector-attr,.theme-light .hljs-selector-pseudo,.theme-light .hljs-subst,.theme-light .hljs-symbol {
    color: #cb4b16
}
.theme-light .hljs-built_in,.theme-light .hljs-deletion {
    color: #dc322f
}
.theme-light .hljs-formula {
    background: #073642
}
.theme-dark .hljs {
    background: #002b36;
    color: #a5a5a5;
}
.theme-dark .hljs-comment,.theme-dark .hljs-quote {
    color: #586e75
}
.theme-dark .hljs-addition,.theme-dark .hljs-keyword,.theme-dark .hljs-selector-tag {
    color: #859900
}
.theme-dark .hljs-doctag,.theme-dark .hljs-literal,.theme-dark .hljs-meta .hljs-meta-string,.theme-dark .hljs-number,.theme-dark .hljs-regexp,.theme-dark .hljs-string {
    color: #2aa198
}
.theme-dark .hljs-name,.theme-dark .hljs-section,.theme-dark .hljs-selector-class,.theme-dark .hljs-selector-id,.theme-dark .hljs-title {
    color: #268bd2
}
.theme-dark .hljs-attr,.theme-dark .hljs-attribute,.theme-dark .hljs-class .hljs-title,.theme-dark .hljs-template-variable,.theme-dark .hljs-type,.theme-dark .hljs-variable {
    color: #b58900
}
.theme-dark .hljs-bullet,.theme-dark .hljs-link,.theme-dark .hljs-meta,.theme-dark .hljs-meta .hljs-keyword,.theme-dark .hljs-selector-attr,.theme-dark .hljs-selector-pseudo,.theme-dark .hljs-subst,.theme-dark .hljs-symbol {
    color: #cb4b16
}
.theme-dark .hljs-built_in,.theme-dark .hljs-deletion {
    color: #dc322f
}
.theme-dark .hljs-formula {
    background: #073642
}
.theme-dark .markdown-11q6EU {
    color: #b9bbbe
}
.theme-dark .markdown-11q6EU th {
    background-color: #221035;
    border-color: #3f225a;
    color: #fff
}
.theme-dark .markdown-11q6EU td {
    border-color: #3f225a
}
.theme-dark .markdown-11q6EU tr {
    border-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .markdown-11q6EU tr:nth-child(2n) {
    background-color: #331f44
}
.theme-dark .markdown-11q6EU .blockquote-2-nEPK {
    border-left-color: #3f225a
}
.theme-dark .markdown-11q6EU code {
    background-color: #331f44
}
.theme-dark .markdown-11q6EU .codeInline-1FHKS7 {
    color: #dcddde
}
.theme-dark .blurb-1iBKJy {
    color: #dcddde
}
.theme-dark .description-1AwRKJ {
    color: #b9bbbe
}
.theme-dark .assetWrapper-2Qw_5D {
    background-color: #221035
}
.theme-light .blurb-1iBKJy {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .description-1AwRKJ {
    color: #9e9e9e
}
.theme-light .assetWrapper-2Qw_5D {
    background-color: #221035
}
.theme-dark .row-1bU71H {
    border-bottom-color: #331f44;
    color: #b9bbbe
}
.theme-light .row-1bU71H {
    border-bottom-color: #dcddde;
    color: #9e9e9e
}
.splash-_cddR3 {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover
}
.splashBackup-3iACes {
    background-repeat: repeat;
    background-size: 300px
}
.theme-dark .item-2yFVoY {
    background-color: #331f44
}
.theme-dark .timestamp-1Rokaa {
    color: #9e9e9e
}
.theme-dark .openBody-1HeDPG {
    background-color: rgba(32,34,37,.8)
}
.theme-dark .collapsedTitle-uWuaaU,.theme-dark .openTitle-3jCXI1 {
    color: #fff
}
.theme-dark .openDescription-2XUOH3 {
    color: #b9bbbe;
}
.theme-light .item-2yFVoY {
    background-color: #fff
}
.theme-light .timestamp-1Rokaa {
    color: #9e9e9e
}
.theme-light .openBody-1HeDPG {
    background-color: hsla(0,0%,100%,.8)
}
.theme-light .collapsedTitle-uWuaaU, .theme-light .openTitle-3jCXI1 {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .openDescription-2XUOH3 {
    color: #9e9e9e
}
.theme-dark .headerTitle-15Wgi- {
    color: #fff
}
.theme-dark .headerSubtitle-1YBE3w {
    color: #fff;
}
.theme-dark .item-1JiIvn {
    border-bottom-color: #331f44
}
.theme-dark .timestamp-1U6ga8 {
    color: #9e9e9e
}
.theme-dark .title-2XqtQs {
    color: #fff
}
.theme-dark .description-2IFeqo {
    color: #dcddde
}
.theme-light .label-13UUcd {
    color: #b9bbbe
}
.theme-dark .label-13UUcd,.theme-light .info-1Emy1X {
    color: #9e9e9e
}
.theme-dark .info-1Emy1X {
    color: #dcddde
}
.contentRating-vVpg2G {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}
.theme-dark .content-1zhNsr {
    color: #9e9e9e
}
.theme-light .content-1zhNsr {
    color: #b9bbbe
}
.theme-dark .content-3FEARf {
    color: #9e9e9e
}
.theme-light .content-3FEARf {
    color: #b9bbbe
}
.noticeGreen-1B4fdM {
    border-color: #43b581
}
.noticeGreen-1B4fdM .title-3tihLb {
    color: #43b581
}
.noticeYellow-eQ0PQJ {
    border-color: #faa61a
}
.noticeYellow-eQ0PQJ .title-3tihLb {
    color: #faa61a
}
.noticeRed-1pqAWj {
    border-color: #f04747
}
.noticeRed-1pqAWj .title-3tihLb {
    color: #f04747
}
.theme-dark .body-2AIBCD {
    color: #b9bbbe
}
.theme-dark .title-2xCQKy,.theme-light .title-2xCQKy {
    border-top-color: rgba(57, 37, 74, 0.6);
    color: #f6f6f7
}
.theme-dark .skuNormal-3h1es-,.theme-light .skuNormal-3h1es- {
    border-bottom-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .sku-epQEb_:hover .name-u2zgy7,.theme-light .sku-epQEb_:hover .name-u2zgy7 {
    color: #f6f6f7
}
.theme-dark .name-u2zgy7,.theme-light .name-u2zgy7 {
    color: #b9bbbe
}
.theme-dark .price-NUANu6,.theme-light .price-NUANu6 {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .entitledHeader-3LRNDT,.theme-light .entitledHeader-3LRNDT {
    background-color: #3f225a;
    color: #fff
}
.theme-dark .body-1CAT0-,.theme-light .body-1CAT0- {
    background-color: #221035
}
.theme-dark .actionText-3EKWER,.theme-light .actionText-3EKWER {
    color: #dcddde
}
.theme-dark .price-4PDWNj,.theme-light .price-4PDWNj {
    color: #f6f6f7
}
.theme-light .applicationRecommendationActivity-8Vsc1o {
    color: #9e9e9e
}
.theme-light .playerOverflow-2Hf77M {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-dark .applicationRecommendationActivity-8Vsc1o {
    color: #b9bbbe
}
.theme-dark .playerOverflow-2Hf77M {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .bubble-1gL_TN,.theme-light .bubble-1gL_TN {
    background-color: #3f225a
}
.theme-dark .bubble-1gL_TN:after,.theme-light .bubble-1gL_TN:after {
    border-top-color: #3f225a
}
.star-1-1ULn {
    color: #dcddde
}
.emptyStar-1v4WHI {
    color: #9e9e9e
}
.theme-dark .reviewContent-2sGcOc,.theme-light .reviewContent-2sGcOc {
    color: #dcddde
}
.theme-dark .reviewAuthor-h_z6TM,.theme-light .reviewAuthor-h_z6TM {
    color: #b9bbbe
}
.dotOnline-3qrf96 {
    background-color: #43b581
}
.theme-dark .content-35aVm0 {
    background-color: #221035
}
.theme-dark .name-3TBxUq {
    color: #b9bbbe
}
.theme-dark .memberInfo-1TAaKC {
    color: #9e9e9e
}
.theme-dark .dotOffline-1PVTuj {
    background-color: #9e9e9e
}
.theme-light .content-35aVm0 {
    background-color: #fff
}
.theme-light .name-3TBxUq {
    color: #9e9e9e
}
.theme-light .memberInfo-1TAaKC {
    color: #b9bbbe
}
.theme-light .dotOffline-1PVTuj {
    background-color: #9e9e9e
}
.theme-dark .separator-1tvx79 {
    background-color: rgba(47,49,54,.6)
}
.theme-dark .tabNotSelectedColor-3P16F- {
    color: #b9bbbe
}
.theme-dark .tabNotSelectedColor-3P16F-:hover,.theme-dark .tabSelectedColor-2b3xO9 {
    color: #fff
}
.theme-dark .tabSelected-3IK-Xf {
    border-bottom-color: #fff
}
.theme-dark .sectionTitle-Zi_w7u {
    color: #b9bbbe
}
.theme-dark .requirementKey-14DT2D {
    color: #9e9e9e
}
.theme-dark .requirements-dEriwm {
    color: #dcddde
}
.theme-light .separator-1tvx79 {
    background-color: rgba(220,221,222,.6)
}
.theme-light .tabNotSelectedColor-3P16F- {
    color: #9e9e9e
}
.theme-light .tabNotSelectedColor-3P16F-:hover,.theme-light .tabSelectedColor-2b3xO9 {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .tabSelected-3IK-Xf {
    border-bottom-color: rgba(57, 37, 74, 0.6)
}
.theme-light .sectionTitle-Zi_w7u {
    color: #9e9e9e
}
.theme-light .requirementKey-14DT2D {
    color: #b9bbbe
}
.theme-light .requirements-dEriwm {
    color: #9e9e9e
}
.score-3d03_j {
    color: #fff;
}
.theme-dark .card-NB61oR {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .verdict-1JnQka {
    color: #fff
}
.theme-light .card-NB61oR {
    background-color: #fff;
    color: #9e9e9e
}
.theme-light .verdict-1JnQka {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .matureListing-3tyHbV {
    background-color: #fff
}
.marketingHeader-3in4BD {
    background-color: #221035
}
@media (max-width: 900px) {
    .headerPurchase-2z_nch {
    }
}
.theme-light .headerBar-3iCFJx {
    color: #3f225a
}
.theme-light .listing-2nUQ4d {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .reviewHeader-n1LSrF {
    color: #f6f6f7
}
.theme-light .link-2T7oYD {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .staffNotes-3qPLn- {
    color: #dcddde
}
.theme-light .titleName-2Z2SHw {
    color: #3f225a
}
.theme-light .headerPurchase-2z_nch {
    border-right-color: #3f225a
}
.theme-dark .headerBar-3iCFJx {
    color: #fff
}
.theme-dark .link-2T7oYD,.theme-dark .listing-2nUQ4d,.theme-dark .reviewHeader-n1LSrF {
    color: #f6f6f7
}
.theme-dark .staffNotes-3qPLn- {
    color: #dcddde
}
.theme-dark .headerPurchase-2z_nch {
    border-right-color: #3f225a
}
.btnHamburger-3grAP3 {
    background: transparent;
}
.btnHamburger-3grAP3 span {
    background: #fff;
}
.line-eyazOv {
    background-color: hsla(0, 0%, 100%, 0.35);
}
.localeList-4Zmfi9 {
    background-color: #fff;
}
.localeBase-27bssN {
    color: #9099a4;
}
.localeBase-27bssN a {
    color: inherit
}
.localeBase-27bssN:hover {
    background-color: #f2f2f2;
}
@media screen and (max-width: 848px) {
    .line-eyazOv {
    }
    .select-3Go1Du {
        background-color: transparent;
    }
    }
.moreList-29ir-q {
    background: #fff;
}
.moreListItem-2_Z3Je {
    background-color: #fff;
}
.moreListItemInactive-1v7PjS .moreListLink-3U23th {
    color: #9099a4
}
.moreListItemActive-MIosDj .moreListLink-3U23th {
    color: #3f225a
}
.moreListLink-3U23th:hover .moreListLinkCopy-1NEMj_ {
    background-color: #f2f2f2;
    color: #3f225a
}
@media screen and (max-width: 848px) {
    .moreList-29ir-q {
    }
}
.subListItemActive-2nnyFs .subListItemLink-qR-Pa1 {
    color: #fff
}
.subListItemInactive-2wcecZ .subListItemLink-qR-Pa1 {
    color: #dcddde
}
.subListItemLink-qR-Pa1 {
    background-color: #18191c;
    color: #dcddde;
}
.subListItemLink-qR-Pa1:hover {
    background-color: #221035;
    color: #f6f6f7
}
.desktopMenuMore-351jZB {
    color: #fff;
}
.header-3aRurq {
    color: #fff;
}
.headerNav-QStAAj {
    background-color: #000;
}
.mainNavLink-1SwQrC {
    color: #dcddde;
}
.mainNavLink-1SwQrC:hover {
    color: #f6f6f7
}
@media screen and (max-width: 1024px) {
    .type-1G6S2n {
    }
}
.header-1Zm1at {
    color: #fff;
}
.navLink-DPGG6D {
    color: #fff;
}
.appButton-3GZ9-9 {
    color: #fff;
}
.desktopMenuMore-vBoGnq {
    color: #fff;
}
@media screen and (max-width: 1024px) {
    .listItemSocialMedia-RWHjN1 {
    }
}
@media (max-width: 848px) {
    .mobileHeader-2xB92D {
    }
    }
.footerPrimary-KxrtlY {
    background: #18191c
}
.navigationHeader-2Vp4n_ {
    color: #fff;
}
.route-MFNjyu {
    color: hsla(0,0%,100%,.6);
}
.route-MFNjyu:hover {
    color: #fff
}
.separator-xZsY5U {
    background: url(/assets/ffa0a8d74568beaa8ec72dd51951685c.svg);
}
.readyToJoin-3kZFcp {
    color: #fff;
}
.joinOtherPlayers-370EmJ {
    color: hsla(0,0%,100%,.6);
}
.buttonPrimary-3RahU_ {
    background-color: #3a2648;
    color: #fff
}
.buttonPrimary-3RahU_:hover {
    color: #fff
}
.buttonBlurple-1kuusH {
    background: #fff;
    color: #3a2648
}
.footerBlurple-1BSoUN {
    background: #3a2648
}
@media screen and (max-width: 848px) {
    .footer-je22K2 {
    }
    .button-2A8AGi {
        background-color: #fff;
    }
    .button-2A8AGi,.button-2A8AGi:hover {
        color: #3a2648
    }
}
@-webkit-keyframes footer-blob-animation-_I95Dt {
    0% {
    }
    }
@keyframes footer-blob-animation-_I95Dt {
    0% {
    }
    }
@media (min-width: 1300px) {
    .filterAndSort-gLX1Ym,.hideGames-zMTyGl {
    }
}
.filterBackground-QanGTJ:before {
    background-size: cover;
}
.filterByTitleInput-2U3yVW {
    background-color: transparent;
}
.theme-light .filterByTitleInput-2U3yVW,.theme-light .headerBar-gowPQ3 {
    color: #3f225a
}
.theme-light .filterByTitleInput-2U3yVW:placeholder {
    color: rgba(79,84,92,.8)
}
.theme-light .filterByTitleInput-2U3yVW:focus,.theme-light .filterByTitleInputActive-zbB9zC {
    border-bottom-color: #3a2648
}
.theme-light .filterBrowsingHeaderType-3HE41M {
    border-color: #000
}
.theme-light .sortFilterBar-3hePOV {
    border-bottom-color: #3a2648;
    color: #000
}
.theme-light .filterLabel-31xlfq {
    color: #b9bbbe
}
.theme-light .hideGames-zMTyGl {
    color: #f6f6f7
}
.theme-dark .headerBar-gowPQ3 {
    color: #fff
}
.theme-dark .filterByTitleInput-2U3yVW {
    color: #f6f6f7
}
.theme-dark .filterByTitleInput-2U3yVW::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .filterByTitleInput-2U3yVW:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .filterByTitleInput-2U3yVW::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .filterByTitleInput-2U3yVW:focus,.theme-dark .filterByTitleInputActive-zbB9zC {
    border-bottom-color: #fff
}
.theme-dark .filterBrowsingHeader-36gP-i {
    color: #fff
}
.theme-dark .filterBrowsingHeaderType-3HE41M {
    border-color: #fff
}
.theme-dark .sortFilterBar-3hePOV {
    border-color: #3f225a;
    color: #fff
}
.theme-dark .filterLabel-31xlfq {
    color: #b9bbbe
}
.theme-dark .hideGames-zMTyGl {
    color: #f6f6f7
}
.theme-dark .icon-3hGscC {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .clearIcon-fcGbhl:hover {
    color: #f6f6f7
}
.theme-dark .searchIconActive-PkUHAi {
    color: #fff
}
.theme-light .filterBrowsingHeader-36gP-i,.theme-light .filterLabel-31xlfq {
    color: #000
}
.theme-light .icon-3hGscC {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .hideGames-zMTyGl {
    color: #000
}
.theme-light .clearIcon-fcGbhl:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .searchIconActive-PkUHAi {
    color: #000
}
.theme-dark .applicationStore-1pNvnv {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .applicationStore-1pNvnv {
    background-color: #f6f6f7
}
.theme-dark .layer-3QrUeG, .theme-dark .layers-3iHuyZ, .container-2lgZY8, .theme-dark .guildsWrapper-5TJh6A, .channels-Ie2l6A, .theme-dark .chat-3bRxxu, .theme-dark .chat-3bRxxu form, .theme-dark .content-yTz4x3, .theme-dark .title-3qD0b-, .theme-dark .messagesWrapper-3lZDfY, .container-PNkimc, .theme-dark .members-1998pB, .theme-dark #friends, .theme-dark .activityFeed-28jde9, .theme-dark .headerBar-UHpsPw, .typing-2GQL18{
    background: transparent !important;


/* Dropdowns and stuff */
.Select-menu {
    background: #54113b;
}

#app-mount .Select-control {
    border-color: #52083e;
}

#app-mount [class*="divider"] {
    background: transparent;
    color: rgba(210, 174, 207, 0.5);
}

/* Guild dropdown invite */
#app-mount .menu-Sp6bN1 .invite-271nFU {
    color: rgba(255, 255, 255, .6);
}

/* For the rounded boxes in options */

#app-mount [class*="card"]::before {
    background: #3a2648;
    border-color: #411130;
}

/* For the petty rounded boxes in options that uses inline styles */
/* Remove the actual color in the selector if you want the Privacy & Safety to be styled aswell */
#app-mount .item-26Dhrx[style*="border-color: rgb(114, 137, 218);"] {
    background: #3a2648 !important; /* fuck inline styles lol */
    border-color: #3a2648 !important;
}

/* For the checkboxes in the options that also use inline styles */
.checkbox-1ix_J3 {
    background-color: #500a36 !important; /* FUCK */
    border: #500a36;
}

/* For the X button in the options */
#app-mount .button-mM-y8i:hover {
    background-color: #5f1a48;
}

/* For literally every checkbox */
svg[name="Checkmark"] polyline {
    stroke: white; /* because I can't find anything better */
}

/* Not seeing your game? I can't see shit */
.theme-dark .add-game-popout {
    background-color: rgb(110, 31, 80); /* solid is better */
}

/* Menu at the side of messages */
#app-mount .item-2J1YMK,
#app-mount .container-3cGP6G {
    background-color: #411130;
    margin: 0;
    width: 100%;
}


/* Tooltips when hovering over shit */
#app-mount .item-2J1YMK:hover {
    background-color: #27031a
}

#app-mount .tooltip {
    background: #411130;
}

#app-mount .tooltip-top::after {
    border-top-color: #411130
}

#app-mount .tooltip-bottom::after {
    border-bottom-color: #411130;
}

#app-mount .tooltip-left::after {
    border-left-color: #411130;
}

#app-mount .tooltip-right::after {
    border-right-color: #411130;
}

/* For the tooltip when sliding over the slider thing */
.theme-dark .bubble-3we2di {
    background-top-color: #411130;
}

.theme-dark .bubble-3we2di::before {
    border-top-color: #411130;
}

/* For hovering over context menu options */
.theme-dark .item-1Yvehc:hover {
    background-color: rgba(65, 17, 48, .4);
}

/* No need to have them different, silly */
#app-mount .channel-2QD9_O:hover a,
#app-mount .member-3W1lQa:hover .content-OzHfo4,
#app-mount .contentHoveredText-2D9B-x {
    background-color: rgb(57, 37, 74, 0.4);
}

/* It's just better this way */
#app-mount [class*="card"],
#app-mount .quickMessage-2XpSaN,
#app-mount .userInfoSection-2acyCx + .userInfoSection-2acyCx, /* #notmyselector */
#app-mount .userPopout-3XzG_A .footer-1fjuF6,
#app-mount .need-help-modal .footer,
#app-mount .accountBtnInner-sj5jLs {
    border-color: transparent;
}

#app-mount .connectedAccount-36nQx7 {
    box-shadow: 0 0 5px #842a82;
    border-color: transparent;
}

/* Make the upload module bearable */
#app-mount .uploadModal-2ifh8j .button-primary {
    min-height: 36px;
    margin-left: 10px;
    background-color: #af20a3;
    color: white;
}

#app-mount .uploadModal-2ifh8j .button:not(.button-primary) {
    transition: background-color 200ms ease;
}

#app-mount .uploadModal-2ifh8j .button:not(.button-primary):hover {
    text-decoration: none;
    background-color: #651364;
}

/* help modal */
#app-mount .need-help-modal .form-inner,
#app-mount .need-help-modal .footer {
    background-color: #8c2666;
}

#app-mount .need-help-modal .form-inner {
    padding-bottom: 0;
}

.messageCozy-2JPAPA + .divider-32i8lo {
    display: none;
}

.containerCozyBounded-1rKFAn {
    padding-bottom: 15px;
    padding-top: 15px;
}

.containerCozyBounded-1rKFAn:last-of-type {
    padding-bottom: 20px;
}
/* TODO: Create guild modal */
.anchor-3Z-8Bb {
    color: #00b0f4;
}
.wrapper-1prNyd {
    background-size: cover;
}
.image-3zK3Wt {
    background-size: 100% 100%;
}
.themeLight-2aS1dz {
    background-position: 50% 0;
    color: #3f225a
}
.themeLight-2aS1dz .note-450gs3 {
    color: #9e9e9e
}
.themeDark-3Ap_7i {
    background-color: #331f44;
    color: #f6f6f7
}
.themeDark-3Ap_7i .note-450gs3 {
    color: #b9bbbe
}
@-webkit-keyframes spinner-wandering-cubes-1eyF3t {
    25% {
    }
    }
@keyframes spinner-wandering-cubes-1eyF3t {
    25% {
    }
    }
@-webkit-keyframes spinner-chasing-dots-rotate-1WX_VU {
    to {
    }
}
@keyframes spinner-chasing-dots-rotate-1WX_VU {
    to {
    }
}
@-webkit-keyframes spinner-chasing-dots-bounce-39u8Kf {
    0%,to {
    }
    }
@keyframes spinner-chasing-dots-bounce-39u8Kf {
    0%,to {
    }
    }
@-webkit-keyframes spinner-pulsing-ellipsis-1qRxRG {
    0% {
    }
    }
@keyframes spinner-pulsing-ellipsis-1qRxRG {
    0% {
    }
    }
@-webkit-keyframes spinner-spinning-circle-rotate-1-ejtM {
    to {
    }
}
@keyframes spinner-spinning-circle-rotate-1-ejtM {
    to {
    }
}
@-webkit-keyframes spinner-spinning-circle-dash-3G9Wwf {
    0% {
    }
    }
@keyframes spinner-spinning-circle-dash-3G9Wwf {
    0% {
    }
    }
.wanderingCubesItem-WPXqao {
    background-color: #3a2648;
}
.chasingDotsItem-2DVNUn {
    background-color: #3a2648;
}
.pulsingEllipsisItem-32hhWL {
    background-color: #f8f9f9;
}
.button-38aScr {
    background: none;
}
.lookFilled-1Gx00P.colorBrand-3pXr91 {
    background-color: #3a2648;
    color: #fff
}
.lookFilled-1Gx00P.colorBrand-3pXr91:hover {
    background-color: #a02f7b
}
.lookFilled-1Gx00P.colorBrand-3pXr91:active {
    background-color: #5b6eae
}
.lookFilled-1Gx00P.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorBrand-3pXr91:disabled {
    background-color: #3a2648
}
.lookInverted-2D7oAl.colorBrand-3pXr91 {
    background-color: #fff;
    color: #3a2648
}
.lookInverted-2D7oAl.colorBrand-3pXr91:hover {
    background-color: #f8f9fd
}
.lookInverted-2D7oAl.colorBrand-3pXr91:active {
    background-color: #e3e7f8
}
.lookInverted-2D7oAl.colorBrand-3pXr91:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.lookOutlined-3sRXeN.colorBrand-3pXr91 {
    border-color: rgba(172, 79, 149, 0.3);
    color: #af5091
}
.lookOutlined-3sRXeN.colorBrand-3pXr91:hover {
    border-color: rgba(114,137,218,.6)
}
.lookOutlined-3sRXeN.colorBrand-3pXr91:active {
    background-color: rgba(114,137,218,.1);
    border-color: #3a2648
}
.lookOutlined-3sRXeN.colorBrand-3pXr91:disabled {
    background-color: transparent;
    border-color: rgba(172, 79, 149, 0.3)
}
.lookOutlined-3sRXeN.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.lookGhost-2Fn_0-.colorBrand-3pXr91 {
    background-color: rgba(114,137,218,.1);
    color: #3a2648
}
.lookGhost-2Fn_0-.colorBrand-3pXr91:active {
    background-color: rgba(114,137,218,.15)
}
.lookGhost-2Fn_0-.colorBrand-3pXr91:disabled {
    background-color: rgba(114,137,218,.1)
}
.lookGhost-2Fn_0-.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.lookLink-9FtZy-.colorBrand-3pXr91 {
    color: #3a2648
}
.lookLink-9FtZy-.colorBrand-3pXr91 .spinnerItem-3GlVyU {
    background-color: #3a2648
}
.theme-dark .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: #a02f7b;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
    background-color: #f8f9fd;
    color: #3a2648
}
.theme-dark .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: #e3e7f8;
    color: #3a2648
}
.theme-dark .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
    border-color: rgba(114,137,218,.6);
    color: #3a2648
}
.theme-dark .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: rgba(114,137,218,.1);
    border-color: #3a2648;
    color: #3a2648
}
.theme-dark .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
    background-color: rgba(114,137,218,.15);
    color: #3a2648
}
.theme-dark .lookLink-9FtZy-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #3a2648
}
.lookFilled-1Gx00P.colorGrey-2DXtkV {
    background-color: #747f8d;
    color: #fff
}
.lookFilled-1Gx00P.colorGrey-2DXtkV:hover {
    background-color: #68727f
}
.lookFilled-1Gx00P.colorGrey-2DXtkV:active {
    background-color: #5d6671
}
.lookFilled-1Gx00P.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorGrey-2DXtkV:disabled {
    background-color: #747f8d
}
.lookInverted-2D7oAl.colorGrey-2DXtkV {
    background-color: #fff;
    color: #747f8d
}
.lookInverted-2D7oAl.colorGrey-2DXtkV:hover {
    background-color: #f8f9f9
}
.lookInverted-2D7oAl.colorGrey-2DXtkV:active {
    background-color: #e3e5e8
}
.lookInverted-2D7oAl.colorGrey-2DXtkV:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV {
    border-color: rgba(116,127,141,.3);
    color: #747f8d
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV:hover {
    border-color: rgba(116,127,141,.6)
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV:active {
    background-color: rgba(116,127,141,.1);
    border-color: #747f8d
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV:disabled {
    background-color: transparent;
    border-color: rgba(116,127,141,.3)
}
.lookOutlined-3sRXeN.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV {
    background-color: rgba(116,127,141,.1);
    color: #747f8d
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV:active {
    background-color: rgba(116,127,141,.15)
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV:disabled {
    background-color: rgba(116,127,141,.1)
}
.lookGhost-2Fn_0-.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.lookLink-9FtZy-.colorGrey-2DXtkV {
    color: #747f8d
}
.lookLink-9FtZy-.colorGrey-2DXtkV .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-dark .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:hover {
    background-color: #747f8d;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: #68727f;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:hover {
    background-color: #f8f9f9;
    color: #747f8d
}
.theme-dark .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: #e3e5e8;
    color: #747f8d
}
.theme-dark .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:hover {
    border-color: rgba(116,127,141,.6);
    color: #747f8d
}
.theme-dark .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.1);
    border-color: #747f8d;
    color: #747f8d
}
.theme-dark .lookGhost-2Fn_0-.hoverGrey-2CBXu0.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverGrey-2CBXu0.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.15);
    color: #747f8d
}
.theme-dark .lookLink-9FtZy-.hoverGrey-2CBXu0.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverGrey-2CBXu0.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #747f8d
}
.lookFilled-1Gx00P.colorRed-1TFJan {
    background-color: #f04747;
    color: #fff
}
.lookFilled-1Gx00P.colorRed-1TFJan:hover {
    background-color: #d84040
}
.lookFilled-1Gx00P.colorRed-1TFJan:active {
    background-color: #c03939
}
.lookFilled-1Gx00P.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorRed-1TFJan:disabled {
    background-color: #f04747
}
.lookInverted-2D7oAl.colorRed-1TFJan {
    background-color: #fff;
    color: #f04747
}
.lookInverted-2D7oAl.colorRed-1TFJan:hover {
    background-color: #fef6f6
}
.lookInverted-2D7oAl.colorRed-1TFJan:active {
    background-color: #fcdada
}
.lookInverted-2D7oAl.colorRed-1TFJan:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.lookOutlined-3sRXeN.colorRed-1TFJan {
    border-color: rgba(240,71,71,.3);
    color: #f04747
}
.lookOutlined-3sRXeN.colorRed-1TFJan:hover {
    border-color: rgba(240,71,71,.6)
}
.lookOutlined-3sRXeN.colorRed-1TFJan:active {
    background-color: rgba(240,71,71,.1);
    border-color: #f04747
}
.lookOutlined-3sRXeN.colorRed-1TFJan:disabled {
    background-color: transparent;
    border-color: rgba(240,71,71,.3)
}
.lookOutlined-3sRXeN.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.lookGhost-2Fn_0-.colorRed-1TFJan {
    background-color: rgba(240,71,71,.1);
    color: #f04747
}
.lookGhost-2Fn_0-.colorRed-1TFJan:active {
    background-color: rgba(240,71,71,.15)
}
.lookGhost-2Fn_0-.colorRed-1TFJan:disabled {
    background-color: rgba(240,71,71,.1)
}
.lookGhost-2Fn_0-.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.lookLink-9FtZy-.colorRed-1TFJan {
    color: #f04747
}
.lookLink-9FtZy-.colorRed-1TFJan .spinnerItem-3GlVyU {
    background-color: #f04747
}
.theme-dark .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:hover {
    background-color: #f04747;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: #d84040;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:hover {
    background-color: #fef6f6;
    color: #f04747
}
.theme-dark .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: #fcdada;
    color: #f04747
}
.theme-dark .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:hover {
    border-color: rgba(240,71,71,.6);
    color: #f04747
}
.theme-dark .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: rgba(240,71,71,.1);
    border-color: #f04747;
    color: #f04747
}
.theme-dark .lookGhost-2Fn_0-.hoverRed-2NoOXI.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverRed-2NoOXI.hasHover-3X1-zV:active {
    background-color: rgba(240,71,71,.15);
    color: #f04747
}
.theme-dark .lookLink-9FtZy-.hoverRed-2NoOXI.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverRed-2NoOXI.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #f04747
}
.lookFilled-1Gx00P.colorGreen-29iAKY {
    background-color: #43b581;
    color: #fff
}
.lookFilled-1Gx00P.colorGreen-29iAKY:hover {
    background-color: #3ca374
}
.lookFilled-1Gx00P.colorGreen-29iAKY:active {
    background-color: #369167
}
.lookFilled-1Gx00P.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorGreen-29iAKY:disabled {
    background-color: #43b581
}
.lookInverted-2D7oAl.colorGreen-29iAKY {
    background-color: #fff;
    color: #43b581
}
.lookInverted-2D7oAl.colorGreen-29iAKY:hover {
    background-color: #f6fbf9
}
.lookInverted-2D7oAl.colorGreen-29iAKY:active {
    background-color: #d9f0e6
}
.lookInverted-2D7oAl.colorGreen-29iAKY:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.lookOutlined-3sRXeN.colorGreen-29iAKY {
    border-color: rgba(67,181,129,.3);
    color: #43b581
}
.lookOutlined-3sRXeN.colorGreen-29iAKY:hover {
    border-color: rgba(67,181,129,.6)
}
.lookOutlined-3sRXeN.colorGreen-29iAKY:active {
    background-color: rgba(67,181,129,.1);
    border-color: #43b581
}
.lookOutlined-3sRXeN.colorGreen-29iAKY:disabled {
    background-color: transparent;
    border-color: rgba(67,181,129,.3)
}
.lookOutlined-3sRXeN.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.lookGhost-2Fn_0-.colorGreen-29iAKY {
    background-color: rgba(67,181,129,.1);
    color: #43b581
}
.lookGhost-2Fn_0-.colorGreen-29iAKY:active {
    background-color: rgba(67,181,129,.15)
}
.lookGhost-2Fn_0-.colorGreen-29iAKY:disabled {
    background-color: rgba(67,181,129,.1)
}
.lookGhost-2Fn_0-.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.lookLink-9FtZy-.colorGreen-29iAKY {
    color: #43b581
}
.lookLink-9FtZy-.colorGreen-29iAKY .spinnerItem-3GlVyU {
    background-color: #43b581
}
.theme-dark .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:hover {
    background-color: #43b581;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: #3ca374;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:hover {
    background-color: #f6fbf9;
    color: #43b581
}
.theme-dark .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: #d9f0e6;
    color: #43b581
}
.theme-dark .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:hover {
    border-color: rgba(67,181,129,.6);
    color: #43b581
}
.theme-dark .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: rgba(67,181,129,.1);
    border-color: #43b581;
    color: #43b581
}
.theme-dark .lookGhost-2Fn_0-.hoverGreen-1gjdJc.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverGreen-1gjdJc.hasHover-3X1-zV:active {
    background-color: rgba(67,181,129,.15);
    color: #43b581
}
.theme-dark .lookLink-9FtZy-.hoverGreen-1gjdJc.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverGreen-1gjdJc.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #43b581
}
.lookFilled-1Gx00P.colorYellow-2JqYwt {
    background-color: #faa61a;
    color: #fff
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:hover {
    background-color: #e19517
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:active {
    background-color: #c88515
}
.lookFilled-1Gx00P.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:disabled {
    background-color: #faa61a
}
.lookInverted-2D7oAl.colorYellow-2JqYwt {
    background-color: #fff;
    color: #faa61a
}
.lookInverted-2D7oAl.colorYellow-2JqYwt:hover {
    background-color: #fffbf4
}
.lookInverted-2D7oAl.colorYellow-2JqYwt:active {
    background-color: #feedd1
}
.lookInverted-2D7oAl.colorYellow-2JqYwt:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt {
    border-color: rgba(250,166,26,.3);
    color: #faa61a
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt:hover {
    border-color: rgba(250,166,26,.6)
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt:active {
    background-color: rgba(250,166,26,.1);
    border-color: #faa61a
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt:disabled {
    background-color: transparent;
    border-color: rgba(250,166,26,.3)
}
.lookOutlined-3sRXeN.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt {
    background-color: rgba(250,166,26,.1);
    color: #faa61a
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt:active {
    background-color: rgba(250,166,26,.15)
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt:disabled {
    background-color: rgba(250,166,26,.1)
}
.lookGhost-2Fn_0-.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.lookLink-9FtZy-.colorYellow-2JqYwt {
    color: #faa61a
}
.lookLink-9FtZy-.colorYellow-2JqYwt .spinnerItem-3GlVyU {
    background-color: #faa61a
}
.theme-dark .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:hover {
    background-color: #faa61a;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: #e19517;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:hover {
    background-color: #fffbf4;
    color: #faa61a
}
.theme-dark .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: #feedd1;
    color: #faa61a
}
.theme-dark .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:hover {
    border-color: rgba(250,166,26,.6);
    color: #faa61a
}
.theme-dark .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: rgba(250,166,26,.1);
    border-color: #faa61a;
    color: #faa61a
}
.theme-dark .lookGhost-2Fn_0-.hoverYellow-171chs.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverYellow-171chs.hasHover-3X1-zV:active {
    background-color: rgba(250,166,26,.15);
    color: #faa61a
}
.theme-dark .lookLink-9FtZy-.hoverYellow-171chs.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverYellow-171chs.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #faa61a
}
.lookFilled-1Gx00P.colorLink-35jkBc {
    background-color: #00b0f4;
    color: #fff
}
.lookFilled-1Gx00P.colorLink-35jkBc:hover {
    background-color: #009edc
}
.lookFilled-1Gx00P.colorLink-35jkBc:active {
    background-color: #008dc3
}
.lookFilled-1Gx00P.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorLink-35jkBc:disabled {
    background-color: #00b0f4
}
.lookInverted-2D7oAl.colorLink-35jkBc {
    background-color: #fff;
    color: #00b0f4
}
.lookInverted-2D7oAl.colorLink-35jkBc:hover {
    background-color: #f2fbfe
}
.lookInverted-2D7oAl.colorLink-35jkBc:active {
    background-color: #cceffd
}
.lookInverted-2D7oAl.colorLink-35jkBc:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.lookOutlined-3sRXeN.colorLink-35jkBc {
    border-color: rgba(0,176,244,.3);
    color: #00b0f4
}
.lookOutlined-3sRXeN.colorLink-35jkBc:hover {
    border-color: rgba(0,176,244,.6)
}
.lookOutlined-3sRXeN.colorLink-35jkBc:active {
    background-color: rgba(0,176,244,.1);
    border-color: #00b0f4
}
.lookOutlined-3sRXeN.colorLink-35jkBc:disabled {
    background-color: transparent;
    border-color: rgba(0,176,244,.3)
}
.lookOutlined-3sRXeN.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.lookGhost-2Fn_0-.colorLink-35jkBc {
    background-color: rgba(0,176,244,.1);
    color: #00b0f4
}
.lookGhost-2Fn_0-.colorLink-35jkBc:active {
    background-color: rgba(0,176,244,.15)
}
.lookGhost-2Fn_0-.colorLink-35jkBc:disabled {
    background-color: rgba(0,176,244,.1)
}
.lookGhost-2Fn_0-.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.lookLink-9FtZy-.colorLink-35jkBc {
    color: #00b0f4
}
.lookLink-9FtZy-.colorLink-35jkBc .spinnerItem-3GlVyU {
    background-color: #00b0f4
}
.theme-dark .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:hover {
    background-color: #00b0f4;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: #009edc;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:hover {
    background-color: #f2fbfe;
    color: #00b0f4
}
.theme-dark .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: #cceffd;
    color: #00b0f4
}
.theme-dark .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:hover {
    border-color: rgba(0,176,244,.6);
    color: #00b0f4
}
.theme-dark .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: rgba(0,176,244,.1);
    border-color: #00b0f4;
    color: #00b0f4
}
.theme-dark .lookGhost-2Fn_0-.hoverLink-i1fEKS.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverLink-i1fEKS.hasHover-3X1-zV:active {
    background-color: rgba(0,176,244,.15);
    color: #00b0f4
}
.theme-dark .lookLink-9FtZy-.hoverLink-i1fEKS.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverLink-i1fEKS.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #00b0f4
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ {
    background-color: #fff;
    color: #3f225a
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ:hover {
    background-color: #e6e6e6
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ:active {
    background-color: #ccc
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.lookFilled-1Gx00P.colorWhite-rEQuAQ:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ {
    background-color: #3f225a;
    color: #fff
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ:active,.lookInverted-2D7oAl.colorWhite-rEQuAQ:hover {
    background-color: #fff
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ:disabled {
    background-color: #3f225a
}
.lookInverted-2D7oAl.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ {
    border-color: hsla(0,0%,100%,.3);
    color: #fff
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {
    border-color: hsla(0,0%,100%,.6)
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #fff
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:disabled {
    background-color: transparent;
    border-color: hsla(0,0%,100%,.3)
}
.lookOutlined-3sRXeN.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ {
    background-color: hsla(0,0%,100%,.1);
    color: #fff
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ:active {
    background-color: hsla(0,0%,100%,.15)
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ:disabled {
    background-color: hsla(0,0%,100%,.1)
}
.lookGhost-2Fn_0-.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookLink-9FtZy-.colorWhite-rEQuAQ {
    color: #fff
}
.lookLink-9FtZy-.colorWhite-rEQuAQ .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:hover {
    background-color: #fff;
    color: #3f225a
}
.theme-dark .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverWhite-2uUmXw.hasHover-3X1-zV:active {
    background-color: #e6e6e6;
    color: #3f225a
}
.theme-dark .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-dark .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverWhite-2uUmXw.hasHover-3X1-zV:hover {
    background-color: #fff;
    color: #fff
}
.theme-dark .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:hover {
    border-color: hsla(0,0%,100%,.6);
    color: #fff
}
.theme-dark .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverWhite-2uUmXw.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #fff;
    color: #fff
}
.theme-dark .lookGhost-2Fn_0-.hoverWhite-2uUmXw.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverWhite-2uUmXw.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.15);
    color: #fff
}
.theme-dark .lookLink-9FtZy-.hoverWhite-2uUmXw.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverWhite-2uUmXw.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #fff
}
.lookFilled-1Gx00P.colorBlack-1jwPVL {
    background-color: #040405;
    color: #fff
}
.lookFilled-1Gx00P.colorBlack-1jwPVL:hover {
    background-color: #18191c
}
.lookFilled-1Gx00P.colorBlack-1jwPVL:active {
    background-color: #221035
}
.lookFilled-1Gx00P.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #fff
}
.lookFilled-1Gx00P.colorBlack-1jwPVL:disabled {
    background-color: #040405
}
.lookInverted-2D7oAl.colorBlack-1jwPVL {
    background-color: #fff;
    color: #040405
}
.lookInverted-2D7oAl.colorBlack-1jwPVL:hover {
    background-color: #18191c
}
.lookInverted-2D7oAl.colorBlack-1jwPVL:active {
    background-color: #221035
}
.lookInverted-2D7oAl.colorBlack-1jwPVL:disabled {
    background-color: #fff
}
.lookInverted-2D7oAl.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL {
    border-color: rgba(4,4,5,.3);
    color: #040405
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL:hover {
    border-color: rgba(4,4,5,.6)
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL:active {
    background-color: rgba(4,4,5,.1);
    border-color: #040405
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL:disabled {
    background-color: transparent;
    border-color: rgba(4,4,5,.3)
}
.lookOutlined-3sRXeN.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL {
    background-color: rgba(4,4,5,.1);
    color: #040405
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL:active {
    background-color: rgba(4,4,5,.15)
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL:disabled {
    background-color: rgba(4,4,5,.1)
}
.lookGhost-2Fn_0-.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.lookLink-9FtZy-.colorBlack-1jwPVL {
    color: #040405
}
.lookLink-9FtZy-.colorBlack-1jwPVL .spinnerItem-3GlVyU {
    background-color: #040405
}
.theme-dark .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:hover,.theme-light .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:hover {
    background-color: #040405;
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookFilled-1Gx00P.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: #18191c;
    color: #fff
}
.theme-dark .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:hover,.theme-light .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:hover {
    background-color: #18191c;
    color: #040405
}
.theme-dark .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookInverted-2D7oAl.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: #221035;
    color: #040405
}
.theme-dark .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:hover,.theme-light .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:hover {
    border-color: rgba(4,4,5,.6);
    color: #040405
}
.theme-dark .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookOutlined-3sRXeN.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: rgba(4,4,5,.1);
    border-color: #040405;
    color: #040405
}
.theme-dark .lookGhost-2Fn_0-.hoverBlack-3jULb8.hasHover-3X1-zV:active,.theme-light .lookGhost-2Fn_0-.hoverBlack-3jULb8.hasHover-3X1-zV:active {
    background-color: rgba(4,4,5,.15);
    color: #040405
}
.theme-dark .lookLink-9FtZy-.hoverBlack-3jULb8.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .lookLink-9FtZy-.hoverBlack-3jULb8.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #040405
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:active,.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:hover {
    background-color: #94367c
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:disabled {
    background-color: #3f225a
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6 {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6:hover {
    background-color: #f6f6f7
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6:active {
    background-color: #dcddde
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6:disabled {
    background-color: #f6f6f7
}
.theme-dark .lookInverted-2D7oAl.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6 {
    border-color: hsla(0,0%,100%,.3);
    color: #fff
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6:hover {
    border-color: hsla(0,0%,100%,.6)
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #fff
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6:disabled {
    background-color: transparent;
    border-color: hsla(0,0%,100%,.3)
}
.theme-dark .lookOutlined-3sRXeN.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6 {
    background-color: hsla(0,0%,100%,.1);
    color: #fff
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6:active {
    background-color: hsla(0,0%,100%,.15)
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6:disabled {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookGhost-2Fn_0-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .lookLink-9FtZy-.colorPrimary-3b3xI6 {
    color: #fff
}
.theme-dark .lookLink-9FtZy-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #fff
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #9e9e9e;
    color: #f6f6f7
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #dcddde;
    color: #3f225a
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    border-color: hsla(0,0%,100%,.6);
    color: #fff
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.1);
    border-color: #3f225a;
    color: #fff
}
.theme-dark .theme-dark .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-dark .theme-light .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.15);
    color: #fff
}
.theme-dark .theme-dark .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-dark .theme-light .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #fff
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9 {
    background-color: hsla(0,0%,100%,.1);
    color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9:hover {
    background-color: hsla(0,0%,100%,.05)
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9:active {
    background-color: hsla(0,0%,100%,.01)
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #f6f6f7
}
.theme-dark .lookFilled-1Gx00P.colorTransparent-1ewNp9:disabled {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9 {
    background-color: #f6f6f7;
    color: hsla(0,0%,100%,.1)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9:hover {
    background-color: hsla(0,0%,100%,.05)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9:active {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9:disabled {
    background-color: #f6f6f7
}
.theme-dark .lookInverted-2D7oAl.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9 {
    border-color: rgba(220,221,222,.3);
    color: #dcddde
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9:hover {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9:active {
    background-color: rgba(220,221,222,.1);
    border-color: #dcddde
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9:disabled {
    background-color: transparent;
    border-color: rgba(220,221,222,.3)
}
.theme-dark .lookOutlined-3sRXeN.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #dcddde
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9 {
    background-color: rgba(220,221,222,.1);
    color: #dcddde
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9:active {
    background-color: rgba(220,221,222,.15)
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9:disabled {
    background-color: rgba(220,221,222,.1)
}
.theme-dark .lookGhost-2Fn_0-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #dcddde
}
.theme-dark .lookLink-9FtZy-.colorTransparent-1ewNp9 {
    color: #dcddde
}
.theme-dark .lookLink-9FtZy-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #dcddde
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: hsla(0,0%,100%,.1);
    color: #f6f6f7
}
.theme-dark .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.05);
    color: #f6f6f7
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: hsla(0,0%,100%,.05);
    color: hsla(0,0%,100%,.1)
}
.theme-dark .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: hsla(0,0%,100%,.1);
    color: hsla(0,0%,100%,.1)
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    border-color: rgba(220,221,222,.6);
    color: #dcddde
}
.theme-dark .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(220,221,222,.1);
    border-color: hsla(0,0%,100%,.1);
    color: #dcddde
}
.theme-dark .theme-dark .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-dark .theme-light .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(220,221,222,.15);
    color: #dcddde
}
.theme-dark .theme-dark .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-dark .theme-light .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #dcddde
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
    background-color: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6:active,.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6:hover {
    background-color: #dcddde
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6:disabled {
    background-color: rgba(220,221,222,.6)
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6 {
    background-color: #3f225a;
    color: rgba(220,221,222,.6)
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6:hover {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6:active {
    background-color: #221035
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6:disabled {
    background-color: #3f225a
}
.theme-light .lookInverted-2D7oAl.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: rgba(220,221,222,.6)
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6 {
    border-color: rgba(116,127,141,.3);
    color: #747f8d
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6:hover {
    border-color: rgba(116,127,141,.6)
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6:active {
    background-color: rgba(116,127,141,.1);
    border-color: #747f8d
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6:disabled {
    background-color: transparent;
    border-color: rgba(116,127,141,.3)
}
.theme-light .lookOutlined-3sRXeN.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6 {
    background-color: rgba(116,127,141,.1);
    color: #747f8d
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6:active {
    background-color: rgba(116,127,141,.15)
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6:disabled {
    background-color: rgba(116,127,141,.1)
}
.theme-light .lookGhost-2Fn_0-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-light .lookLink-9FtZy-.colorPrimary-3b3xI6 {
    color: #747f8d
}
.theme-light .lookLink-9FtZy-.colorPrimary-3b3xI6 .spinnerItem-3GlVyU {
    background-color: #747f8d
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-light .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookFilled-1Gx00P.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #dcddde;
    color: #3f225a
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-light .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    background-color: rgba(57, 37, 74, 0.6);
    color: rgba(220,221,222,.6)
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookInverted-2D7oAl.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: #221035;
    color: rgba(220,221,222,.6)
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover,.theme-light .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover {
    border-color: rgba(116,127,141,.6);
    color: #747f8d
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookOutlined-3sRXeN.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.1);
    border-color: rgba(220,221,222,.6);
    color: #747f8d
}
.theme-light .theme-dark .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active,.theme-light .theme-light .lookGhost-2Fn_0-.hoverPrimary-2D1j2r.hasHover-3X1-zV:active {
    background-color: rgba(116,127,141,.15);
    color: #747f8d
}
.theme-light .theme-dark .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .theme-light .lookLink-9FtZy-.hoverPrimary-2D1j2r.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #747f8d
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9 {
    background-color: rgba(79,84,92,.01);
    color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9:hover {
    background-color: rgba(79,84,92,.2)
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.25)
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookFilled-1Gx00P.colorTransparent-1ewNp9:disabled {
    background-color: rgba(79,84,92,.01)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9 {
    background-color: #3f225a;
    color: rgba(79,84,92,.01)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9:hover {
    background-color: rgba(79,84,92,.2)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.25)
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9:disabled {
    background-color: #3f225a
}
.theme-light .lookInverted-2D7oAl.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: rgba(79,84,92,.01)
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9 {
    border-color: rgb(57, 37, 74, 0.3);
    color: #3f225a
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9:hover {
    border-color: rgb(57, 37, 74, 0.4)
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.1);
    border-color: #3f225a
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9:disabled {
    background-color: transparent;
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .lookOutlined-3sRXeN.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9 {
    background-color: rgba(79,84,92,.1);
    color: #3f225a
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9:active {
    background-color: rgba(79,84,92,.15)
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9:disabled {
    background-color: rgba(79,84,92,.1)
}
.theme-light .lookGhost-2Fn_0-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .lookLink-9FtZy-.colorTransparent-1ewNp9 {
    color: #3f225a
}
.theme-light .lookLink-9FtZy-.colorTransparent-1ewNp9 .spinnerItem-3GlVyU {
    background-color: #3f225a
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-light .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: rgba(79,84,92,.01);
    color: #3f225a
}
.theme-light .theme-dark .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookFilled-1Gx00P.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.2);
    color: #3f225a
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-light .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    background-color: rgba(79,84,92,.2);
    color: rgba(79,84,92,.01)
}
.theme-light .theme-dark .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookInverted-2D7oAl.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.25);
    color: rgba(79,84,92,.01)
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover,.theme-light .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover {
    border-color: rgb(57, 37, 74, 0.4);
    color: #3f225a
}
.theme-light .theme-dark .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookOutlined-3sRXeN.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.1);
    border-color: rgba(79,84,92,.01);
    color: #3f225a
}
.theme-light .theme-dark .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active,.theme-light .theme-light .lookGhost-2Fn_0-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:active {
    background-color: rgba(79,84,92,.15);
    color: #3f225a
}
.theme-light .theme-dark .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp,.theme-light .theme-light .lookLink-9FtZy-.hoverTransparent-2Lz5CN.hasHover-3X1-zV:hover .contents-18-Yxp {
    color: #3f225a
}
.lookBlank-3eh9lL {
    background: transparent;
    color: currentColor;
}
@media (-ms-high-contrast:active),(-ms-high-contrast:none) {
    .lookFilled-1Gx00P .contents-18-Yxp,.lookInverted-2D7oAl .contents-18-Yxp,.lookLink-9FtZy- .contents-18-Yxp,.lookOutlined-3sRXeN .contents-18-Yxp {
    }
}
.themeDark-3BOwlz {
    background-color: #331f44;
    color: #f6f6f7
}
.themeLight-Hp2h58 {
    background-color: #f6f6f7;
    color: #3f225a
}
.winButtonMinMax-PBQ2gm:hover {
    background-color: hsla(0,0%,100%,.05)
}
.winButtonClose-1HsbF-:hover {
    background-color: #f04747
}
.macButtonMaximize-2FMHAO {
    background-color: #34c749
}
.macButtonMaximize-2FMHAO:active {
    background-color: #2a9f3a
}
.macButtonMinimize-3EJ6wo {
    background-color: #fdbc40
}
.macButtonMinimize-3EJ6wo:active {
    background-color: #ca9633
}
.macButtonClose-MwZ2nf {
    background-color: #fc615d
}
.macButtonClose-MwZ2nf:active {
    background-color: #ca4e4a
}
.unfocused-1QsMU3 .macButtonClose-MwZ2nf,.unfocused-1QsMU3 .macButtonMaximize-2FMHAO,.unfocused-1QsMU3 .macButtonMinimize-3EJ6wo {
    background-color: #dcdcdc;
    border-color: #d1d1d1;
}
.flyingFocus-1dpIRc {
    background: transparent;
}
.scroller-2FKFPG::-webkit-scrollbar-thumb,.scroller-2FKFPG::-webkit-scrollbar-track {
    background-clip: padding-box;
}
.track-1JN30G {
    background-color: transparent;
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-light .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: #3a2648;
    border-color: transparent
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
    border-color: transparent
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL,.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .pad-29zQak,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .pad-29zQak,.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL,.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL .pad-29zQak {
    background-color: #fff
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: #3a2648
}
.scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent
}
.scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-light .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G {
    background-color: transparent
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: #221035;
    border-color: transparent
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
    border-color: transparent
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL,.scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .pad-29zQak,.theme-dark .scrollerWrap-2lJEkd .scrollbar-2rkZSL,.theme-dark .scrollerWrap-2lJEkd .scrollbar-2rkZSL .pad-29zQak,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .pad-29zQak {
    background-color: rgba(57, 37, 74, 0.6)
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .thumb-2JwNFC,.theme-dark .scrollerWrap-2lJEkd .scrollbar-2rkZSL .thumb-2JwNFC,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: #221035
}
.scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: #331f44
}
.scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G,.theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G {
    background-color: #331f44
}
.scrollerThemed-2oenus.themeGhost-28MSn0 .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4);
    border-color: transparent;
}
.scrollerThemed-2oenus.themeGhost-28MSn0 .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
    border-color: transparent
}
.scrollerThemed-2oenus.themeGhost-28MSn0 .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgba(0,0,0,.4)
}
.scrollerThemed-2oenus.themeGhost-28MSn0.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
}
.scrollerThemed-2oenus.themeGhost-28MSn0.scrollerTrack-1ZIpsv>.scrollbar-2rkZSL>.track-1JN30G {
    background-color: rgba(0,0,0,.1)
}
.scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-corner,.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scroller-2FKFPG::-webkit-scrollbar-corner {
    background-color: transparent
}
.scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-track,.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scroller-2FKFPG::-webkit-scrollbar-track {
    background-color: transparent;
}
.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4)
}
.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_ .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-light .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scroller-2FKFPG::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-light .scrollerThemed-2oenus.themeGhostHairline-DBD-2d .scrollbar-2rkZSL .thumb-2JwNFC {
    background-color: rgb(57, 37, 74, 0.3)
}
.scrollbar-3dvm_9::-webkit-scrollbar-corner {
    background: none;
}
.scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb,.scrollbarDefault-3COgCQ::-webkit-scrollbar-track {
    background-clip: padding-box;
}
.scrollbarGhost-2F9Zj2::-webkit-scrollbar-thumb,.scrollbarGhost-2F9Zj2::-webkit-scrollbar-track {
    background-clip: padding-box;
}
.scrollbarGhost-2F9Zj2::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.4);
    border-color: transparent
}
.scrollbarGhost-2F9Zj2::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,.1);
    border-color: transparent;
}
.scrollbarGhostHairline-1mSOM1::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4);
}
.scrollbarGhostHairline-1mSOM1::-webkit-scrollbar-track {
    background-color: transparent;
}
.theme-light .scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb {
    background-color: #3a2648;
    border-color: transparent
}
.theme-light .scrollbarDefault-3COgCQ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-color: transparent
}
.theme-dark .scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb {
    background-color: #221035;
    border-color: transparent
}
.theme-dark .scrollbarDefault-3COgCQ::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,.1);
    border-color: transparent
}
.wrapper-3Q5DdO {
    background: -webkit-gradient(linear,right top,left bottom,from(#3d4046),to(#1e1e23));
    background: linear-gradient(to left bottom,#3d4046,#1e1e23);
}
@media (min-width: 486px) {
    .wrapper-3Q5DdO {
        background:#331f44;
    }
    }
@media (min-width: 1080px) {
    .wrapper-3Q5DdO {
        background:repeat 108% 103% url(/assets/8eba753f8b6d02be1013c5e659b0fc2f.png)
    }
    }
.theme-dark .modal-3HD5ck {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .footer-2yfCgX {
    background-color: #331f44;
}
.theme-dark .close-18n9bP {
    color: #dcddde
}
.theme-dark .close-18n9bP:hover {
    background-color: rgba(220,221,222,.05)
}
.theme-light .modal-3HD5ck {
    background: #fff;
}
.theme-light .footer-2yfCgX {
    background-color: #f6f6f7;
}
.theme-light .close-18n9bP {
    color: #9e9e9e
}
.theme-light .close-18n9bP:hover {
    background-color: rgba(114,118,125,.05)
}
@media (max-width: 485px) {
    .sizeLarge-3clvAM,.sizeMedium-1fwIF2,.sizeSmall-Sf4iOi {
    }
}
.theme-dark .primary-jw0I4K {
    color: #dcddde
}
.theme-light .primary-jw0I4K {
    color: #9e9e9e
}
.white-2qwKC7,.white100-1kM2ad,.white200-3zgO-Z,.white300-9aRwFJ,.white400-18yif1,.white500-2pqdDy {
    color: #fff
}
.white600-11KClF {
    color: #adadad
}
.white700-1nH1cV {
    color: #666
}
.white800-2lRvci {
    color: #4d4d4d
}
.white900-2IvFbU {
    color: #0d0d0d
}
.black-3ZppAL {
    color: #fff
}
.black100-ebiD1f {
    color: #f2f2f2
}
.black200-SRU1nn {
    color: #ccc
}
.black300-2WwYX5 {
    color: #999
}
.black400-2Ca2WI {
    color: #333
}
.black500-33a0Ji,.black600-1uqz03,.black700-34pr70,.black800-1MBqq_,.black900-37_sCH {
    color: #000
}
.primary-2eADX4 {
    color: #3f225a
}
.primary100-NYxuUw {
    color: #f6f6f7
}
.primary200-9BaJ5z {
    color: #dcddde
}
.primary300-yKYmL9 {
    color: #b9bbbe
}
.primary400-hm0Rav {
    color: #9e9e9e
}
.primary500-wK_SoU {
    color: #3f225a
}
.primary600-2R4IzX {
    color: rgba(57, 37, 74, 0.6)
}
.primary700-2GKfND {
    color: #221035
}
.primary800-2mHx_W {
    color: #18191c
}
.primary900-2HGQCF {
    color: #040405
}
.brand-2LE5lQ {
    color: #3a2648
}
.brand100-3jKef2 {
    color: #f8f9fd
}
.brand200-3DFhWp {
    color: #e3e7f8
}
.brand300-1y8sjG {
    color: #fdecff
}
.brand400-2m4nFC {
    color: #8ea1e1
}
.brand500-14kFyd {
    color: #3a2648
}
.brand600-MLizIW {
    color: #4e5d94
}
.brand700-18nVdB {
    color: #2e3757
}
.brand800-38wrMi {
    color: #222941
}
.brand900-1MlMSM {
    color: #06070b
}
.statusRed-21U8Tp {
    color: #f04747
}
.statusRed100-TwlPw1 {
    color: #fef6f6
}
.statusRed200-xsrQMf {
    color: #fcdada
}
.statusRed300-1J8Thg {
    color: #f9b5b5
}
.statusRed400-3gJpDq {
    color: #f36c6c
}
.statusRed500-1aGPvR {
    color: #f04747
}
.statusRed600-1W1VGW {
    color: #a33030
}
.statusRed700-1NN0mD {
    color: #601c1c
}
.statusRed800-1Lcfl_ {
    color: #481515
}
.statusRed900-2xtwCw {
    color: #0c0404
}
.statusYellow-2f2HqU {
    color: #faa61a
}
.statusYellow100-1nMcXd {
    color: #fffbf4
}
.statusYellow200-3i9lAw {
    color: #feedd1
}
.statusYellow300-3V5Kq8 {
    color: #fddba3
}
.statusYellow400-3Y-MiO {
    color: #fbb848
}
.statusYellow500-3wKbiF {
    color: #faa61a
}
.statusYellow600-1G7jQl {
    color: #aa7112
}
.statusYellow700-2JMLCu {
    color: #64420a
}
.statusYellow800-3qanlx {
    color: #4b3208
}
.statusYellow900-1RnH8w {
    color: #0d0801
}
.statusGreen-pvYWjA {
    color: #43b581
}
.statusGreen100-3vETxm {
    color: #f6fbf9
}
.statusGreen200-3WYRuW {
    color: #d9f0e6
}
.statusGreen300-gUvg9Y {
    color: #b4e1cd
}
.statusGreen400-2Nkqrf {
    color: #69c49a
}
.statusGreen500-3bo2cw {
    color: #43b581
}
.statusGreen600-rE45Mq {
    color: #2e7b58
}
.statusGreen700-3cmZtt {
    color: #1b4834
}
.statusGreen800-1CCKNc {
    color: #143627
}
.statusGreen900-2PKGG8 {
    color: #030906
}
.statusGrey-3kBjBr {
    color: #747f8d
}
.statusGrey100-2v3HbE {
    color: #f8f9f9
}
.statusGrey200-1aSzEs {
    color: #e3e5e8
}
.statusGrey300-rS3XGM {
    color: #c7ccd1
}
.statusGrey400-2GJcPk {
    color: #9099a4
}
.statusGrey500-Cz7Olr {
    color: #747f8d
}
.statusGrey600-11Gxjo {
    color: #4f5660
}
.statusGrey700-1_KM9c {
    color: #331f44
}
.statusGrey800-3XPuT9 {
    color: #23262a
}
.statusGrey900-1CYxgG {
    color: #060607
}
.link-3qjLc0 {
    color: #00b0f4
}
.link100-3L2hHF {
    color: #f2fbfe
}
.link200-2cbJsF {
    color: #cceffd
}
.link300-2MKH0C {
    color: #99dffb
}
.link400-1L-A31 {
    color: #33c0f6
}
.link500-ECMy-U {
    color: #00b0f4
}
.link600-1pUBrp {
    color: #0078a6
}
.link700-3TpgS2 {
    color: #004662
}
.link800-Y2QbyE {
    color: #003549
}
.link900-2RMblN {
    color: #00090c
}
.theme-light .defaultColor-1_ajX0 {
    color: #3f225a
}
.theme-light .h5-18_1nd {
    color: #9e9e9e
}
.theme-light .faded-3bns_w {
    color: rgba(114,118,125,.6)
}
.theme-light .error-25JxNp {
    color: #f04747
}
.theme-dark .defaultColor-1_ajX0 {
    color: #f6f6f7
}
.theme-dark .h5-18_1nd {
    color: #b9bbbe
}
.theme-dark .faded-3bns_w {
    color: rgba(220,221,222,.3)
}
.theme-dark .error-25JxNp {
    color: #f04747
}
.focused-1mmYsC {
    border-color: #3a2648;
}
.theme-light .input-cIJ7To {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3);
    color: #3f225a
}
.theme-light .input-cIJ7To::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light .input-cIJ7To:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light .input-cIJ7To::placeholder {
    color: #b9bbbe
}
.theme-light .input-cIJ7To:hover {
    border-color: #b9bbbe
}
.theme-light .input-cIJ7To:focus {
    border-color: #3a2648
}
.theme-light .input-cIJ7To.disabled-2BKQFm {
    border-color: #dcddde
}
.theme-light .input-cIJ7To.error-2O5WFJ {
    border-color: #f04747
}
.theme-light .input-cIJ7To.focused-1mmYsC {
    border-color: #3a2648
}
.theme-light .input-cIJ7To.success-2-F980 {
    border-color: #43b581
}
.theme-light .inputPrefix-2VAOGg {
    color: #b9bbbe
}
.theme-light .input-cIJ7To.editable-2UkCu4 {
    background-color: transparent;
    border-color: transparent
}
.theme-dark .input-cIJ7To {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3);
    color: #f6f6f7
}
.theme-dark .input-cIJ7To::-webkit-input-placeholder {
    color: #9e9e9e
}
.theme-dark .input-cIJ7To:-ms-input-placeholder {
    color: #9e9e9e
}
.theme-dark .input-cIJ7To::placeholder {
    color: #9e9e9e
}
.theme-dark .input-cIJ7To:hover {
    border-color: #040405
}
.theme-dark .input-cIJ7To:focus {
    border-color: #3a2648
}
.theme-dark .input-cIJ7To.disabled-2BKQFm {
    border-color: #221035
}
.theme-dark .input-cIJ7To.error-2O5WFJ {
    border-color: #f04747
}
.theme-dark .input-cIJ7To.focused-1mmYsC {
    border-color: #3a2648
}
.theme-dark .input-cIJ7To.success-2-F980 {
    border-color: #43b581
}
.theme-dark .inputPrefix-2VAOGg {
    color: #dcddde;
}
.theme-dark .input-cIJ7To.editable-2UkCu4 {
    background-color: transparent;
    border-color: transparent
}
.cardDanger-ZurOv3 {
    background-color: #f04747
}
.cardDanger-ZurOv3,.cardDangerOutline-3t0Do9 {
    border-color: #f04747
}
.cardWarning-2yPNAa {
    background-color: #e19517;
    border-color: #e19517
}
.cardWarningOutline-1cs56O {
    border-color: #faa61a
}
.cardSuccess-3uEYjj {
    background-color: #43b581
}
.cardSuccess-3uEYjj,.cardSuccessOutline-1Su_ab {
    border-color: #43b581
}
.cardBrand-39zmMQ {
    background-color: #3a2648
}
.cardBrand-39zmMQ,.cardBrandOutline-3jvFfo {
    border-color: #3a2648
}
.theme-light .cardBrand-39zmMQ a,.theme-light .cardDanger-ZurOv3 a,.theme-light .cardSuccess-3uEYjj a,.theme-light .cardWarning-2yPNAa a {
    color: #fff
}
.theme-light .cardPrimary-1Hv-to {
    background-color: #f8f9f9;
    border-color: #dcddde
}
.theme-light .cardPrimary-1Hv-to a {
    color: #3f225a
}
.theme-light .cardPrimaryEditable-3KtE4g {
    background-color: rgba(246,246,247,.6);
    border-color: #dcddde
}
.theme-light .cardPrimaryOutline-29Ujqw {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .card-3Qj_Yx a {
    color: #fff
}
.theme-dark .cardPrimary-1Hv-to {
    background: rgb(57, 37, 74, 0.4);
    border-color: #221035
}
.theme-dark .cardPrimaryEditable-3KtE4g {
    border-color: rgb(139, 38, 113);
    background-color: rgb(139, 38, 113);
}
.theme-dark .cardPrimaryOutline-29Ujqw {
    border-color: rgb(57, 37, 74, 0.4)
}
.gameIcon-gg34Dz {
    background-size: 100%;
}
.theme-light .placeholder-1lCpWK {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .description-3_Ncsb,.theme-light .labelDescriptor-1PqHgD {
    color: rgba(114,118,125,.6)
}
.theme-dark .placeholder-1lCpWK {
    color: rgba(246,246,247,.3)
}
.theme-dark .description-3_Ncsb,.theme-dark .labelDescriptor-1PqHgD {
    color: #9e9e9e
}
.theme-dark .whiteText-2PPsRK,.theme-dark .whiteText-2PPsRK a,.theme-light .whiteText-2PPsRK,.theme-light .whiteText-2PPsRK a {
    color: #fff
}
.theme-light .divider-3573oO {
    background-color: rgba(185,187,190,.3)
}
.theme-dark .divider-3573oO {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .expandIconBGHovered-2qIR0q {
    background-color: rgba(220,221,222,.05)
}
.theme-light .expandIconBGHovered-2qIR0q {
    background-color: rgba(114,118,125,.05)
}
.theme-light .checkbox-1ix_J3 {
    border-color: #b9bbbe
}
.theme-light .checked-3_4uQ9 {
    background: #fff
}
.theme-dark .checkbox-1ix_J3 {
    border-color: #9e9e9e
}
.theme-dark .checked-3_4uQ9 {
    background-color: #fff;
    border-color: #fff
}
.theme-light .select-1Pkeg4 {
    color: #3f225a
}
.theme-light .placeholder-2zzSd_ {
    color: #b9bbbe
}
.theme-light .popout-2sKjHu {
    background: #fff;
    border-color: #b9bbbe;
}
.theme-light .optionNormal-12VR9V {
    color: #3f225a
}
.theme-light .optionNormal-12VR9V:hover {
    background-color: #f6f6f7
}
.theme-light .optionActive-KkAdqq {
    background-color: #dcddde
}
.theme-light .optionFocused-8MflSE {
    background-color: #f6f6f7
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4 {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4:hover {
    border-color: #b9bbbe
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4:hover .arrow-2KJjTM,.theme-light .lookFilled-1h1y05.selectOpen-hQuR6b .arrow-2KJjTM {
    color: #3f225a
}
.theme-light .lookFilled-1h1y05 .arrow-2KJjTM {
    color: #dcddde
}
.theme-light .lookMinimal-2OMO3G.select-1Pkeg4 {
    background-color: transparent
}
.theme-light .lookMinimal-2OMO3G .arrow-2KJjTM {
    color: #dcddde
}
.theme-light .lookMinimal-2OMO3G.select-1Pkeg4:hover .arrow-2KJjTM {
    color: #3f225a
}
.theme-light .lookMinimalLine-2p4HjI .selectLabel-2ltwlE {
    border-color: #dcddde
}
.theme-light .lookMinimalLine-2p4HjI.select-1Pkeg4:hover .selectLabel-2ltwlE {
    border-color: #3f225a
}
.theme-light .lookMinimalLine-2p4HjI.select-1Pkeg4:hover.selectOpen-hQuR6b .selectLabel-2ltwlE,.theme-light .lookMinimalLine-2p4HjI.selectOpen-hQuR6b .selectLabel-2ltwlE {
    border-color: transparent
}
.theme-dark .select-1Pkeg4 {
    color: #f6f6f7
}
.theme-dark .placeholder-2zzSd_ {
    color: #9e9e9e
}
.theme-dark .popout-2sKjHu {
    background: #303237;
    border-color: #221035;
}
.theme-dark .optionNormal-12VR9V {
    color: #f6f6f7
}
.theme-dark .optionNormal-12VR9V:hover {
    background-color: rgba(0,0,0,.1)
}
.theme-dark .optionActive-KkAdqq {
    background: rgba(0,0,0,.2);
    color: #f6f6f7
}
.theme-dark .optionFocused-8MflSE {
    background-color: rgba(0,0,0,.1);
    color: #f6f6f7
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4 {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover {
    border-color: #040405
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover.selectOpen-hQuR6b,.theme-dark .lookFilled-1h1y05.selectOpen-hQuR6b {
    border-color: #040405 #040405 rgba(0,0,0,.3)
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover .arrow-2KJjTM,.theme-dark .lookFilled-1h1y05.selectOpen-hQuR6b .arrow-2KJjTM {
    color: #f6f6f7
}
.theme-dark .lookFilled-1h1y05 .arrow-2KJjTM {
    color: #9e9e9e
}
.theme-dark .lookMinimal-2OMO3G.select-1Pkeg4 {
    background-color: transparent
}
.theme-dark .lookMinimal-2OMO3G .arrow-2KJjTM {
    color: #b9bbbe
}
.theme-dark .lookMinimal-2OMO3G.select-1Pkeg4:hover .arrow-2KJjTM {
    color: #f6f6f7
}
.theme-dark .lookMinimalLine-2p4HjI .selectLabel-2ltwlE {
    border-color: #b9bbbe
}
.theme-dark .lookMinimalLine-2p4HjI.select-1Pkeg4:hover .selectLabel-2ltwlE {
    border-color: #f6f6f7
}
.theme-dark .lookMinimalLine-2p4HjI.select-1Pkeg4:hover.selectOpen-hQuR6b .selectLabel-2ltwlE,.theme-dark .lookMinimalLine-2p4HjI.selectOpen-hQuR6b .selectLabel-2ltwlE {
    border-color: transparent
}
.error-3iVqOt {
    color: #f04747;
}
.splash-9yPB5w {
    background-position: 50%;
    background-size: cover;
}
.theme-dark .gameName-3S4nBI {
    color: #dcddde
}
.theme-dark .installSize-1eXbBX {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .divider-38zUJA {
    background-color: rgba(47,49,54,.6)
}
.theme-dark .premiumTerms-QoMVGx {
    color: #dcddde
}
.theme-light .wrapper-3WhCwL {
    background-color: #f1f3fb;
    color: #3a2648
}
.theme-light .wrapperHover-1GktnT:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .wrapper-3WhCwL {
    background-color: rgba(114,137,218,.1);
    color: #d163aa
}
.theme-dark .wrapperHover-1GktnT:hover {
    background-color: rgba(114,137,218,.7);
    color: #fff
}
.botTagRegular-2HEhHi {
    background: #3a2648;
    color: #fff
}
.botTagInvert-18-95s {
    background: #fff;
    color: #3a2648
}
.imageWrapperBackground-E_M6Nu {
    background: rgba(0,0,0,.05)
}
.imageError-2OefUi {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.imagePlaceholderOverlay-ETNjpn {
    background-color: rgba(0,0,0,.6)
}
.wrapper-129saQ {
    background-color: rgba(0,0,0,.6);
    color: #fff;
}
.wrapper-129saQ a:link,.wrapper-129saQ a:visited {
    color: #fff!important;
}
.embedPill-1Zntps {
    background-color: #cacbce;
}
.embedInner-1-fpTo {
    background: hsla(0,0%,97.6%,.3);
}
.embedProvider-3k5pfl {
    color: #87909c!important;
}
.embedAuthorName-3mnTWj {
    color: #3f225a!important;
}
.embedTitle-3OXDkz {
    color: #3f225a;
}
.embedTitleLink-1Zla9e {
    color: #00b0f4
}
.embedDescription-1Cuq9a {
    color: rgba(79,83,91,.9);
}
.embedVideo-3nf0O9 {
    background-color: rgba(0,0,0,.05);
}
.embedVideoAction-2BIhKO {
    background: none;
    background-size: 24px 24px;
}
.embedFooterText-28V_Wb {
    color: rgba(79,83,91,.6);
}
.embedFooterSeparator-3klTIQ {
    color: #cacbce;
}
.embedFields-2IPs5Z {
    color: rgba(57, 37, 74, 0.6);
}
.theme-dark .embedPill-1Zntps {
    background-color: #3f225a
}
.theme-dark .embedInner-1-fpTo {
    background-color: rgba(56, 26, 85, 0.3);
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .embedDescription-1Cuq9a,.theme-dark .embedFieldValue-nELq2s,.theme-dark .embedFooterText-28V_Wb,.theme-dark .embedProvider-3k5pfl {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .embedAuthorName-3mnTWj,.theme-dark .embedFieldName-NFrena,.theme-dark .embedTitle-3OXDkz {
    color: #fff!important
}
.theme-dark .embedTitleLink-1Zla9e {
    color: #0096cf!important
}
.theme-dark .embedFooterSeparator-3klTIQ {
    color: #3f225a
}
.theme-light .markup-2BOw-j {
    color: #747f8d
}
.theme-light .markup-2BOw-j a {
    color: #00b0f4
}
.theme-light .markup-2BOw-j pre {
    background: #f8f9f9;
    border-color: rgba(227,229,232,.6)
}
.theme-light .markup-2BOw-j code,.theme-light .markup-2BOw-j code.inline {
    background: #f8f9f9
}
.theme-dark .markup-2BOw-j {
    color: #dcddde
}
.theme-dark .markup-2BOw-j a {
    color: #0096cf
}
.theme-dark .markup-2BOw-j pre {
    background: rgb(57, 37, 74, 0.5);
    border-color: rgba(82, 18, 66, 0.8);
}
.theme-dark .markup-2BOw-j code, .theme-dark .markup-2BOw-j code.inline {
    background: rgb(57, 37, 74, 0.5);
}
.arrowHitbox-2_hxtQ {
    background: transparent;
}
.arrow-vOpU7R {
    color: #fff;
}
.dot-2Q_mMZ {
    background-color: #fff;
}
.theme-dark .themedPagination-3v0Dnu .arrow-vOpU7R {
    color: #fff
}
.theme-dark .themedPagination-3v0Dnu .dot-2Q_mMZ {
    background-color: #fff
}
.theme-light .themedPagination-3v0Dnu .arrow-vOpU7R {
    color: #3f225a
}
.theme-light .themedPagination-3v0Dnu .dot-2Q_mMZ {
    background-color: #3f225a
}
.image-33JSyf {
    background-clip: padding-box;
    background-color: none;
    background-position: 50%;
    background-size: 100%;
}
.status-oxiHuE {
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.online-2S838R {
    background-color: #43b581
}
.idle-3DEnRT {
    background-color: #faa61a
}
.dnd-1_xrcq {
    background-color: #f04747
}
.invisible-1kp8Z0,.offline-3qoTek,.unknown-Ms2zdV {
    background-color: #747f8d
}
.streaming-2_dnHe {
    background-color: #593695
}
.statusProfile-3ynqtt {
    background-size: 12px;
}
.statusProfile-3ynqtt.invisible-1kp8Z0,.statusProfile-3ynqtt.offline-3qoTek,.statusProfile-3ynqtt.unknown-Ms2zdV {
    background-size: 22px;
}
.typingSpinnerItem-35chrT {
    background-color: #fff;
}
.icon-2s94H- {
    color: #b9bbbe;
}
.emptyUser-3FRJaF {
    background: #3f225a;
}
.moreUsers-1s5Her {
    background-color: #3f225a;
    color: #b9bbbe;
}
.newsLink-38Naqi:hover {
    background-color: #18191c;
}
.splash-iEbXaB {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover
}
.splashBackup-2UWHIS {
    background-repeat: repeat;
    background-size: 300px
}
.title-1oZsbs {
    color: #dcddde;
}
.description-13oVu5 {
    color: #b9bbbe;
}
.subtitle-rPfx7J {
    color: #9e9e9e;
}
@-webkit-keyframes progressBarPulse-31PNyj {
    0% {
    }
    }
@keyframes progressBarPulse-31PNyj {
    0% {
    }
    }
.progressBarGlow-I1k7GJ {
    background-color: transparent;
}
.buttonShine-1CSUM8 {
    color: hsla(0,0%,100%,.1)
}
.shine-2f1uEU,.shineInner-fWUhvE {
    background-color: currentColor
}
@-webkit-keyframes Shine-2sIJ1p {
    0% {
    }
    }
@keyframes Shine-2sIJ1p {
    0% {
    }
    }
.cardIcon-3U4mwZ:before {
    background-size: 100% 100%;
}
.cardIcon-3U4mwZ:after {
    background: url(/assets/7d1147d903beea4a0654d2b60837a1d6.svg);
    background-size: 100% 100%;
}
.theme-dark .paypalInput-3MddcM,.theme-dark .paypalInput-3MddcM:focus,.theme-dark .paypalInput-3MddcM:hover,.theme-light .paypalInput-3MddcM,.theme-light .paypalInput-3MddcM:focus,.theme-light .paypalInput-3MddcM:hover {
    border-color: rgba(0,0,0,.3)
}
.Select.is-disabled>.Select-control {
    background-color: #f9f9f9
}
.Select-control {
    background-color: #fff;
    color: #333;
}
.is-open>.Select-control {
    background: #fff;
    border-color: #b3b3b3 #ccc #d9d9d9
}
.is-open>.Select-control .Select-arrow {
    border-color: transparent transparent #999;
}
.is-focused:not(.is-open)>.Select-control {
    border-color: #007eff;
}
.Select--single>.Select-control .Select-value,.Select-placeholder {
    color: #aaa;
}
.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.has-value.Select--single>.Select-control .Select-value .Select-value-label {
    color: #333
}
.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover {
    color: #007eff;
}
.Select-input>input {
    background: none transparent;
}
.Select-loading {
    border-right-color: #333;
}
.Select-clear-zone {
    color: #999;
}
.Select-clear-zone:hover {
    color: #d0021b
}
.Select-arrow {
    border-color: #999 transparent transparent;
}
.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow {
    border-top-color: #666
}
@-webkit-keyframes Select-animation-fadeIn {
    0% {
    }
    }
@keyframes Select-animation-fadeIn {
    0% {
    }
    }
.Select-menu-outer {
    background-color: #fff;
    border-top-color: #e6e6e6;
}
.Select-option {
    background-color: #fff;
    color: #666;
}
.Select-option.is-selected {
    background-color: #f5faff;
    background-color: rgba(0,126,255,.04);
    color: #333
}
.Select-option.is-focused {
    background-color: #ebf5ff;
    background-color: rgba(0,126,255,.08);
    color: #333
}
.Select-option.is-disabled {
    color: #ccc;
}
.Select-noresults {
    color: #999;
}
.Select--multi .Select-value {
    background-color: #ebf5ff;
    background-color: rgba(0,126,255,.08);
    color: #007eff;
}
.Select--multi a.Select-value-label {
    color: #007eff;
}
.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover {
    background-color: #d8eafd;
    background-color: rgba(0,113,230,.08);
    color: #0071e6
}
.Select--multi .Select-value-icon:active {
    background-color: #c2e0ff;
    background-color: rgba(0,126,255,.24)
}
.Select--multi.is-disabled .Select-value {
    background-color: #fcfcfc;
    color: #333
}
.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover {
    background-color: #fcfcfc
}
@keyframes Select-animation-spin {
    to {
    }
}
@-webkit-keyframes Select-animation-spin {
    to {
    }
}
.select-2TCrqx.error-3S-7y9 .Select .Select-control {
    border-color: #f04747
}
.select-2TCrqx.error-3S-7y9 .errorMessage-1Y9q-X {
    color: #f04747;
}
.theme-light .select-2TCrqx .has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.theme-light .select-2TCrqx .has-value.Select--single>.Select-control .Select-value .Select-value-label,.theme-light .select-2TCrqx .Select-value-label {
    color: #3f225a
}
.theme-light .select-2TCrqx .Select-control {
    background: rgba(79,84,92,.02);
}
.theme-light .select-2TCrqx .Select-control .Select-placeholder {
    color: #b9bbbe
}
.theme-light .select-2TCrqx .Select-control .Select-arrow {
    border-color: #dcddde transparent transparent
}
.theme-light .select-2TCrqx .Select-control:hover {
    border-color: #b9bbbe
}
.theme-light .select-2TCrqx .Select-control:hover .Select-arrow {
    border-color: #3f225a transparent transparent
}
.theme-light .select-2TCrqx .is-focused .Select-control {
    border-color: #b9bbbe
}
.theme-light .select-2TCrqx .is-focused .Select-control .Select-arrow {
    border-color: #3f225a transparent transparent
}
.theme-light .select-2TCrqx .is-open .Select-control {
    background: rgba(246,246,247,.3)
}
.theme-light .select-2TCrqx .is-open .Select-control .Select-arrow {
    border-color: transparent transparent #9e9e9e
}
.theme-light .select-2TCrqx .is-disabled .Select-control {
    border-color: #dcddde
}
.theme-light .select-2TCrqx .is-disabled .Select-control:hover .Select-arrow {
    border-color: #dcddde transparent transparent
}
.theme-light .select-2TCrqx .Select-menu-outer {
    border-color: #b9bbbe;
}
.theme-light .select-2TCrqx .Select-option {
    background: rgba(246,246,247,.3)
}
.theme-light .select-2TCrqx .Select-option.is-focused,.theme-light .select-2TCrqx .Select-option:hover {
    background: #f6f6f7
}
.theme-light .select-2TCrqx .Select-option.is-selected {
    background: #dcddde
}
.theme-light .select-2TCrqx .Select-input input {
    color: #3f225a
}
.theme-dark .select-2TCrqx .has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.theme-dark .select-2TCrqx .has-value.Select--single>.Select-control .Select-value .Select-value-label {
    color: #f6f6f7
}
.theme-dark .select-2TCrqx .Select-control {
    background: rgba(0,0,0,.1);
}
.theme-dark .select-2TCrqx .Select-control .Select-placeholder {
    color: #9e9e9e
}
.theme-dark .select-2TCrqx .Select-control .Select-value>.Select-value-label {
    color: #f6f6f7
}
.theme-dark .select-2TCrqx .Select-control .Select-arrow {
    border-color: #9e9e9e transparent transparent
}
.theme-dark .select-2TCrqx .Select-control:hover {
    border-color: #040405
}
.theme-dark .select-2TCrqx .Select-control:hover .Select-arrow {
    border-color: #f6f6f7 transparent transparent
}
.theme-dark .select-2TCrqx .is-focused .Select-control {
    border-color: rgba(0,0,0,.6)
}
.theme-dark .select-2TCrqx .is-focused .Select-control .Select-arrow {
    border-color: #f6f6f7 transparent transparent
}
.theme-dark .select-2TCrqx .is-open .Select-control .Select-arrow {
    border-color: transparent transparent #f6f6f7
}
.theme-dark .select-2TCrqx .is-disabled .Select-control {
    background: rgba(0,0,0,.1);
    border-color: #221035
}
.theme-dark .select-2TCrqx .is-disabled .Select-control:hover .Select-arrow {
    border-color: #9e9e9e transparent transparent
}
.theme-dark .select-2TCrqx .Select-menu-outer {
    background: #303237;
    border-color: #221035;
}
.theme-dark .select-2TCrqx .Select-menu::-webkit-scrollbar-thumb,.theme-dark .select-2TCrqx .Select-menu::-webkit-scrollbar-track-piece {
    background-clip: padding-box;
    background-color: rgba(0,0,0,.4);
    border-color: transparent;
}
.theme-dark .select-2TCrqx .Select-menu::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent
}
.theme-dark .select-2TCrqx .Select-option {
    background-color: transparent;
    color: #f6f6f7
}
.theme-dark .select-2TCrqx .Select-option.is-focused,.theme-dark .select-2TCrqx .Select-option:hover {
    background: rgba(0,0,0,.1)
}
.theme-dark .select-2TCrqx .Select-option.is-selected {
    background: rgba(0,0,0,.2)
}
.theme-dark .select-2TCrqx .Select-input input {
    color: #f6f6f7
}
.error-2YUmia a {
    color: #fff;
}
.theme-dark .error-2YUmia,.theme-light .error-2YUmia {
    background-color: #f04747;
    color: #fff
}
.colorWarning-2efEE- {
    color: #faa61a
}
.colorError-2vGbJj {
    color: #f04747
}
.theme-dark .colorPrimary-3hws2f,.theme-light .colorPrimary-3hws2f {
    color: #b9bbbe
}
.theme-dark .divider-1que2t {
    border-color: #331f44
}
.theme-dark .backButtonColor-N09dXJ {
    color: #fff
}
.theme-dark .checkboxLabel-3WoD3k {
    color: #b9bbbe
}
.theme-dark .subscriptionLegal-Bv3Hj1 {
    color: #9e9e9e
}
.theme-light .divider-1que2t {
    border-color: rgba(220,221,222,.6)
}
.theme-light .backButtonColor-N09dXJ {
    color: #3f225a
}
.theme-light .checkboxLabel-3WoD3k,.theme-light .subscriptionLegal-Bv3Hj1 {
    color: #b9bbbe
}
.theme-light .breadcrumbWrapper-WmDjgG {
    color: #b9bbbe
}
.theme-light .activeBreadcrumb-p6aw-F {
    color: #3f225a
}
.theme-dark .breadcrumbWrapper-WmDjgG {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .activeBreadcrumb-p6aw-F {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .confirmTitle-1eRa8n {
    color: #fff
}
.theme-dark .confirmBlurb-1x48XS,.theme-dark .storeTerms-3G4Jo7 {
    color: #b9bbbe
}
.theme-dark .divider-2rujXH {
    background-color: rgba(47,49,54,.6)
}
.theme-light .confirmTitle-1eRa8n {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .confirmBlurb-1x48XS,.theme-light .storeTerms-3G4Jo7 {
    color: #9e9e9e
}
.theme-light .divider-2rujXH {
    background-color: rgba(220,221,222,.6)
}
.backgroundImage-1oEgm4 {
    background-position: bottom;
    background-size: cover;
}
.theme-dark .applicationName-2QbFHn {
    color: #dcddde
}
.theme-dark .price-1ynJAt {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-light .applicationName-2QbFHn {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .price-1ynJAt {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .purchaseError-wX0KJl,.theme-light .purchaseError-wX0KJl {
    color: #f04747
}
.itemSubMenu-1vN_Yn.itemSubMenuHasScroller-1J2hmF {
    background-position-x: 149px;
}
.item-1Yvehc.danger-2dXSTE {
    color: #f04747!important
}
.item-1Yvehc.danger-2dXSTE:hover {
    color: #c73b3b!important
}
.item-1Yvehc.brand-3igrJY {
    color: #3a2648!important
}
.item-1Yvehc.brand-3igrJY:hover {
    color: #5f72b5!important
}
.item-1Yvehc.disabled-2xniQf:hover {
    background: transparent!important;
}
.theme-dark.contextMenu-HLZMGh {
    background: #18191c;
}
.theme-dark .item-1Yvehc {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .item-1Yvehc:hover {
    background: #040405;
    color: #fff
}
.theme-dark .item-1Yvehc.disabled-2xniQf {
    color: grey
}
.theme-dark .itemGroup-1tL0uz {
    border-color: hsla(0,0%,96.1%,.08)
}
.theme-dark .itemSubMenu-1vN_Yn {
    background: transparent url(/assets/1988164a7c55346d32117b151f4e319d.svg) no-repeat 155px 50%
}
.theme-dark .itemSubMenu-1vN_Yn:hover {
    background: #040405 url(/assets/e4afe52f6863408a35654a6e5fd69ba9.svg) no-repeat 155px 50%
}
.theme-light.contextMenu-HLZMGh {
    background: #fff;
}
.theme-light .item-1Yvehc {
    color: #9099a4
}
.theme-light .item-1Yvehc:hover {
    background: #f6f6f7;
    color: #747f8d
}
.theme-light .item-1Yvehc.disabled-2xniQf {
    color: #cdcdcd
}
.theme-light .itemGroup-1tL0uz {
    border-color: #f5f5f5
}
.theme-light .itemSubMenu-1vN_Yn {
    background: transparent url(/assets/1988164a7c55346d32117b151f4e319d.svg) no-repeat 155px 50%
}
.theme-light .itemSubMenu-1vN_Yn:hover {
    background: #f6f6f7 url(/assets/48072c077a73774c670f5752a21d2c5b.svg) no-repeat 155px 50%
}
.disabledButtonColor-RDvfEC {
    background-color: rgba(24,25,28,.5);
    color: rgba(246,246,247,.5);
}
.arrowSeparator-3E66m7 {
    background-color: currentColor;
}
.news-2KwXHF {
    background-color: #221035;
}
.info-P9dFwH {
    background-color: #331f44;
}
.splash-2zOS_Q {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover
}
.splashBackup-1SNkdx {
    background-repeat: repeat;
    background-size: 300px
}
.summary-2pfBY6 {
    color: rgba(246,246,247,.8);
}
.disabledButton-3apIHo {
    background-color: rgba(79,84,92,.5);
    color: rgba(246,246,247,.5);
}
.theme-dark .gamePreview-9weYR2 {
    background-color: #221035;
}
.theme-dark .gameName-1W6Ym- {
    color: #dcddde
}
.theme-dark .publisher-2ZxPEd {
    color: #9e9e9e
}
.theme-dark .body-1SVoBw {
    background-color: #331f44
}
.theme-dark .playersHeader-3xUYAQ {
    color: #b9bbbe
}
.theme-dark .playersHeaderLine-2luL7r {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .playerOverflow-3X56UI {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-light .gamePreview-9weYR2 {
    background-color: #fff;
}
.theme-light .gameName-1W6Ym- {
    color: #3f225a
}
.theme-light .publisher-2ZxPEd {
    color: #3f225a
}
.theme-light .body-1SVoBw {
    background-color: #f6f6f7
}
.theme-light .playersHeader-3xUYAQ {
    color: #9e9e9e
}
.theme-light .playersHeaderLine-2luL7r {
    background-color: #dcddde
}
.theme-light .playerOverflow-3X56UI {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.inner-2Y6JuD {
    background-color: transparent;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 36px 36px;
}
.inner-2Y6JuD:hover {
    background-color: rgba(153,170,181,.3);
    border-color: transparent;
}
.spinnerItem-3JjAoz {
    background-color: #3f225a
}
.listenAlongIcon-2WbU7U {
    color: #fff;
}
.text-AOoUen {
    color: hsla(0,0%,100%,.8)
}
.bar-3urHkF {
    background-color: hsla(0, 0%, 100%, 0.35);
}
.barInner-3NDaY_ {
    background-color: hsla(0,0%,100%,.6);
}
.activityName-1IaRLn {
    color: hsla(0,0%,100%,.8)
}
.twitchImageContainer-hVw_dv {
    background: #18191c;
}
.streamUsername-eO7oss {
    color: #dcddde;
}
.streamName-1q4JEo {
    color: #b9bbbe;
}
.streamGame-2odMhn {
    color: #9e9e9e;
}
.theme-light .activityActivityFeed-3xysim .content-3JfFJh,.theme-light .activityActivityFeed-3xysim .details-38sfDr {
    color: #3f225a
}
.theme-dark .activityActivityFeed-3xysim .content-3JfFJh,.theme-dark .activityActivityFeed-3xysim .details-38sfDr {
    color: #dcddde
}
.theme-dark .activityProfile-2bJRaP .headerText-1HLrL7,.theme-dark .activityUserPopout-2yItg2 .headerText-1HLrL7,.theme-light .activityProfile-2bJRaP .headerText-1HLrL7,.theme-light .activityUserPopout-2yItg2 .headerText-1HLrL7 {
    color: #fff
}
.theme-dark .activityProfile-2bJRaP .content-3JfFJh,.theme-dark .activityProfile-2bJRaP .details-38sfDr,.theme-dark .activityProfile-2bJRaP .name-29ETJS,.theme-dark .activityUserPopout-2yItg2 .content-3JfFJh,.theme-dark .activityUserPopout-2yItg2 .details-38sfDr,.theme-dark .activityUserPopout-2yItg2 .name-29ETJS,.theme-light .activityProfile-2bJRaP .content-3JfFJh,.theme-light .activityProfile-2bJRaP .details-38sfDr,.theme-light .activityProfile-2bJRaP .name-29ETJS,.theme-light .activityUserPopout-2yItg2 .content-3JfFJh,.theme-light .activityUserPopout-2yItg2 .details-38sfDr,.theme-light .activityUserPopout-2yItg2 .name-29ETJS {
    color: hsla(0,0%,100%,.8)
}
.image-3mN4FI {
    background-position: 50%;
    background-repeat: no-repeat;
}
.theme-dark .title-yz6amd {
    color: #f6f6f7
}
.theme-dark .body-2OD0kB {
    color: #dcddde
}
.theme-light .title-yz6amd {
    color: #3f225a
}
.theme-light .body-2OD0kB {
    color: #9e9e9e
}
.downloadApps-wbBFdZ .header-nJMe-Q {
    color: #737f8d;
}
.downloadApps-wbBFdZ .footer-1nkeBm {
    color: #99aab5;
}
.downloadApps-wbBFdZ .footer-1nkeBm a {
    color: #3a2648;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236 .icon-2Pk7pb {
    background-repeat: no-repeat;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236 p {
    color: #99aab5;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236 .downloadButton-1bWXpg {
    background-color: #99aab5;
    color: #fff;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ {
    border-color: #3a2648;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ p {
    color: #3a2648
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ .downloadButton-1bWXpg {
    background-color: #3a2648
}
.note-3kmerW textarea {
    background: transparent;
}
.note-3kmerW textarea::-moz-selection {
    background: #3a2648;
    color: #fff
}
.note-3kmerW textarea::selection {
    background: #3a2648;
    color: #fff
}
.theme-dark .note-3kmerW textarea {
    color: #b9bbbe
}
.theme-dark .note-3kmerW textarea:focus {
    background-color: #221035
}
.theme-light .note-3kmerW textarea {
    color: #87909c
}
.theme-light .note-3kmerW textarea:focus {
    background: #f3f3f3
}
.theme-dark .everyonePopout-nEbJY3 {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .header-3_S6dz {
    color: #fff
}
.theme-dark .body-2iXqIL {
    color: #b9bbbe
}
.theme-dark .buttonHint-2OxJB8 {
    color: #9e9e9e
}
.theme-dark .buttonHint-2OxJB8 strong {
    color: #b9bbbe
}
.theme-dark .footer-2aTx0s {
    background-color: rgba(32,34,37,.4);
    color: #9e9e9e
}
.theme-dark .footer-2aTx0s strong {
    color: #b9bbbe
}
.theme-light .everyonePopout-nEbJY3 {
    background-color: #fff;
}
.theme-light .header-3_S6dz {
    color: #3f225a
}
.theme-light .body-2iXqIL,.theme-light .buttonHint-2OxJB8,.theme-light .buttonHint-2OxJB8 strong {
    color: #9e9e9e
}
.theme-light .footer-2aTx0s {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .footer-2aTx0s strong {
    color: #9e9e9e
}
.quickMessage-2XpSaN {
    background: #fbfbfb;
}
.quickMessage-2XpSaN.isBlocked-3gLeZQ {
    background: #eceeef
}
#autocomplete-popout ::-webkit-input-placeholder {
    color: #dadddf;
}
#autocomplete-popout header {
    background-color: transparent;
}
#autocomplete-popout input[type=text] {
    background: none;
}
.theme-dark #autocomplete-popout .autocomplete-arrow,.theme-dark #autocomplete-popout .autocomplete-header-background {
    background-color: #221035
}
.theme-dark #autocomplete-popout h3 {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout input[type=text] {
    color: #f6f6f7
}
.theme-dark #autocomplete-popout input[type=text]::-webkit-input-placeholder {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout input[type=text]:-ms-input-placeholder {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout input[type=text]::placeholder {
    color: #9e9e9e
}
.theme-dark #autocomplete-popout section {
    background-color: #331f44;
    color: #9e9e9e
}
.theme-dark #autocomplete-popout .row,.theme-dark #autocomplete-popout .row span {
    color: #b9bbbe
}
.theme-dark #autocomplete-popout .row.selected {
    background: -webkit-gradient(linear,left top,right top,from(rgba(40,43,48,.8)),to(#331f44));
    background: linear-gradient(90deg,rgba(40,43,48,.8),#331f44)
}
.theme-dark #autocomplete-popout .row.selected span,.theme-dark #autocomplete-popout .row:hover span {
    color: #f6f6f7
}
.theme-dark #autocomplete-popout .empty h4 {
    color: #b9bbbe
}
.theme-dark #autocomplete-popout .empty p {
    color: #9e9e9e
}
.theme-light #autocomplete-popout .autocomplete-arrow,.theme-light #autocomplete-popout .autocomplete-header-background {
    background-color: #f6f6f7
}
.theme-light #autocomplete-popout h3 {
    color: #b9bbbe
}
.theme-light #autocomplete-popout input[type=text] {
    color: #3f225a
}
.theme-light #autocomplete-popout input[type=text]::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light #autocomplete-popout input[type=text]:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light #autocomplete-popout input[type=text]::placeholder {
    color: #b9bbbe
}
.theme-light #autocomplete-popout section {
    background-color: #fff;
    color: #9e9e9e
}
.theme-light #autocomplete-popout .row,.theme-light #autocomplete-popout .row span {
    color: #9e9e9e
}
.theme-light #autocomplete-popout .row.selected {
    background: -webkit-gradient(linear,left top,right top,from(rgba(246,246,247,.8)),to(#fff));
    background: linear-gradient(90deg,rgba(246,246,247,.8),#fff)
}
.theme-light #autocomplete-popout .row.selected span,.theme-light #autocomplete-popout .row:hover span {
    color: #3f225a
}
.theme-light #autocomplete-popout .empty h4 {
    color: #9e9e9e
}
.theme-light #autocomplete-popout .empty p {
    color: #b9bbbe
}
.actionButton-VzECiy {
    background: transparent;
}
.overflowRolesPopoutHeaderText-1SW-y3 {
    color: #9e9e9e;
}
.theme-dark .actionButton-VzECiy {
    border-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .overflowRolesPopout-140n9i {
    color: hsla(0,0%,100%,.8)
}
.theme-dark .overflowRolesPopout-140n9i,.theme-dark .overflowRolesPopoutArrow-2O66oH {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-light .actionButton-VzECiy {
    border-color: #b9bbbe;
    color: #3f225a
}
.theme-light .overflowRolesPopout-140n9i {
    color: rgba(79,84,92,.8)
}
.theme-light .overflowRolesPopout-140n9i,.theme-light .overflowRolesPopoutArrow-2O66oH {
    background-color: #fff;
}
@-webkit-keyframes live-pulse-3GAxuT {
    0% {
    }
    }
@keyframes live-pulse-3GAxuT {
    0% {
    }
    }
.header-2BwW8b {
    color: #fff;
}
.headerStreaming-2FjmGz {
    background: #593695
}
.headerSpotify-zpWxgT {
    background: #1db954
}
.headerXbox-3G-4PF {
    background: #107c10
}
.headerPlaying-j0WQBV {
    background: #3a2648
}
.headerName-fajvi9,.headerTagUsernameNoNickname-2_H881 {
    color: #fff
}
.headerTag-2pZJzA {
    color: hsla(0,0%,100%,.6);
}
.headerActivityText-gcopRr {
    color: hsla(0,0%,100%,.6);
}
.headerLive-172YLb {
    color: #fff;
}
.headerLive-172YLb .headerLiveText-2NrUq_ {
    color: #fff
}
.headerLive-172YLb:hover {
    background-color: #503186
}
.headerLiveIcon-3ASKA7 {
    background-color: #f04747;
}
.activity-11LB_k {
    background-color: rgba(0,0,0,.05);
}
.body-3iLsc4 {
    background-color: #f6f6f7;
}
.bodyTitle-Y0qMQz {
    color: #9e9e9e;
}
.wumpusTooltip-65YlMT:after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
}
.theme-dark .headerNormal-T_seeN {
    background-color: #221035
}
.theme-dark .body-3iLsc4,.theme-dark .footer-1fjuF6 {
    background-color: #331f44;
    color: hsla(0,0%,100%,.8)
}
.theme-dark .footer-1fjuF6 {
    border-color: rgba(32,34,37,.3)
}
.theme-dark .quickMessage-1yeL4E {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: #23262a;
    color: hsla(0,0%,100%,.7)
}
.theme-dark .wumpusTooltip-65YlMT {
    background: #fff;
    color: #3f225a
}
.theme-dark .wumpusTooltip-65YlMT:after {
    border-right-color: #fff
}
.theme-dark .protip-YaFfgO {
    color: #b9bbbe
}
.theme-light .headerNormal-T_seeN {
    background-color: #f6f6f7
}
.theme-light .headerNormal-T_seeN .headerTag-2pZJzA {
    color: #b9bbbe
}
.theme-light .headerNormal-T_seeN .headerName-fajvi9,.theme-light .headerNormal-T_seeN .headerTagUsernameNoNickname-2_H881 {
    color: #3f225a
}
.theme-light .body-3iLsc4,.theme-light .footer-1fjuF6 {
    background-color: #fff;
    color: rgba(79,84,92,.8)
}
.theme-light .footer-1fjuF6 {
    border-color: rgba(185,187,190,.3)
}
.theme-light .wumpusTooltip-65YlMT {
    background: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .wumpusTooltip-65YlMT:after {
    border-right-color: rgba(220,221,222,.6)
}
.theme-light .protip-YaFfgO {
    color: #9099a4
}
.checkbox .checkbox-inner input[type=checkbox]:checked+span {
    background-color: #3a2648;
    border-color: #3a2648
}
.checkbox .checkbox-inner input[type=checkbox]:checked+span:after {
    border-color: #fff;
}
.checkbox .checkbox-inner input[type=checkbox]:disabled+span {
    background-color: #f3f3f3;
    border-color: #cdcdcd;
}
.checkbox .checkbox-inner input[type=checkbox]:checked:disabled+span {
    background-color: #fdecff;
    border-color: #fdecff
}
.checkbox .checkbox-inner.alt input[type=checkbox]+span {
    background: #fff;
    border-color: #fff
}
.checkbox .checkbox-inner.alt input[type=checkbox]:checked+span:after {
    border-color: #3a2648
}
.theme-dark .checkbox .checkbox-inner span {
    border-color: hsla(0, 0%, 100%, 0.35)
}
.mediaHint-2uAG3H {
    color: #fff;
}
.mediaHint-2uAG3H:after {
    background: url(/assets/5bac8a5909510f58c12ee6ae724eecbb.svg) 50% no-repeat;
    background-size: 126px 76px;
}
.barFill-23-gu- {
    background: #3a2648;
}
.grabber-3mFHz2 {
    background-color: #fff;
}
.bubble-3we2di {
    color: #f6f6f7;
}
.theme-light .bar-2Qqk5Z {
    background: #dcddde
}
.theme-light .markValue-2DwdXI {
    color: #b9bbbe
}
.theme-light .markDash-3hAolZ {
    background: #dcddde
}
.theme-light .bubble-3we2di {
    background-color: #3f225a
}
.theme-light .bubble-3we2di:before {
    border-top-color: #3f225a
}
.theme-dark .bar-2Qqk5Z {
    background: #3f225a
}
.theme-dark .markValue-2DwdXI {
    color: #9e9e9e
}
.theme-dark .markDash-3hAolZ {
    background: #3f225a
}
.theme-dark .bubble-3we2di {
    background-color: #9e9e9e
}
.theme-dark .bubble-3we2di:before {
    border-top-color: #9e9e9e
}
.maxLength-39QFBo {
    color: #9e9e9e;
}
.size-3rFEHg:after {
    background-color: #fff;
}
.size-3rFEHg:active:after {
    background-color: #f6f6f7
}
.themeDefault-24hCdX {
    background-color: #9e9e9e
}
.themeDefault-24hCdX:before {
    background-color: #000
}
.themeDefault-24hCdX.valueChecked-m-4IJZ {
    background-color: #3a2648
}
.themeClear-1EjkE4 {
    background: transparent
}
.themeClear-1EjkE4.valueChecked-m-4IJZ {
    background-color: #3a2648
}
.themeClear-1EjkE4.valueUnchecked-2lU_20 {
    background-color: transparent
}
.theme-dark .title-31JmR4 {
    color: #f6f6f7
}
.theme-light .title-31JmR4 {
    color: #3f225a
}
.avatar-large,.avatar-profile,.avatar-small,.avatar-xlarge,.avatar-xsmall,.avatar-xxlarge {
    background-clip: padding-box;
    background-color: none;
    background-position: 50%;
}
.avatar-large .status,.avatar-profile .status,.avatar-small .status,.avatar-xlarge .status,.avatar-xsmall .status,.avatar-xxlarge .status {
    background-clip: padding-box;
}
.avatar-profile {
    background-size: 128px 128px;
}
.avatar-popout {
    background-size: 90px 90px;
}
.avatar-xxxlarge {
    background-size: 128px 128px;
}
.avatar-xxlarge {
    background-size: 100px 100px;
}
.avatar-xxlarge .status {
    background-clip: border-box;
}
.avatar-xlarge {
    background-size: 60px 60px;
}
.avatar-large {
    background-size: 40px 40px;
}
.avatar-xsmall {
    background-size: 20px 20px;
}
.avatar-small {
    background-size: 30px 30px;
}
.fromToWrapper-LEJK5w {
    background: no-repeat 50% 0;
}
.theme-dark .to-2819fF {
    background-color: #331f44;
}
.theme-light .to-2819fF {
    background-color: #f6f6f7;
}
.theme-light .hljs {
    background: #fdf6e3;
    color: #657b83;
}
.theme-light .hljs-comment,.theme-light .hljs-quote {
    color: #586e75
}
.theme-light .hljs-addition,.theme-light .hljs-keyword,.theme-light .hljs-selector-tag {
    color: #859900
}
.theme-light .hljs-doctag,.theme-light .hljs-literal,.theme-light .hljs-meta .hljs-meta-string,.theme-light .hljs-number,.theme-light .hljs-regexp,.theme-light .hljs-string {
    color: #2aa198
}
.theme-light .hljs-name,.theme-light .hljs-section,.theme-light .hljs-selector-class,.theme-light .hljs-selector-id,.theme-light .hljs-title {
    color: #268bd2
}
.theme-light .hljs-attr,.theme-light .hljs-attribute,.theme-light .hljs-class .hljs-title,.theme-light .hljs-template-variable,.theme-light .hljs-type,.theme-light .hljs-variable {
    color: #b58900
}
.theme-light .hljs-bullet,.theme-light .hljs-link,.theme-light .hljs-meta,.theme-light .hljs-meta .hljs-keyword,.theme-light .hljs-selector-attr,.theme-light .hljs-selector-pseudo,.theme-light .hljs-subst,.theme-light .hljs-symbol {
    color: #cb4b16
}
.theme-light .hljs-built_in,.theme-light .hljs-deletion {
    color: #dc322f
}
.theme-light .hljs-formula {
    background: #073642
}
.theme-dark .hljs-comment,.theme-dark .hljs-quote {
    color: #586e75
}
.theme-dark .hljs-addition,.theme-dark .hljs-keyword,.theme-dark .hljs-selector-tag {
    color: #859900
}
.theme-dark .hljs-doctag,.theme-dark .hljs-literal,.theme-dark .hljs-meta .hljs-meta-string,.theme-dark .hljs-number,.theme-dark .hljs-regexp,.theme-dark .hljs-string {
    color: #2aa198
}
.theme-dark .hljs-name,.theme-dark .hljs-section,.theme-dark .hljs-selector-class,.theme-dark .hljs-selector-id,.theme-dark .hljs-title {
    color: #268bd2
}
.theme-dark .hljs-attr,.theme-dark .hljs-attribute,.theme-dark .hljs-class .hljs-title,.theme-dark .hljs-template-variable,.theme-dark .hljs-type,.theme-dark .hljs-variable {
    color: #b58900
}
.theme-dark .hljs-bullet,.theme-dark .hljs-link,.theme-dark .hljs-meta,.theme-dark .hljs-meta .hljs-keyword,.theme-dark .hljs-selector-attr,.theme-dark .hljs-selector-pseudo,.theme-dark .hljs-subst,.theme-dark .hljs-symbol {
    color: #cb4b16
}
.theme-dark .hljs-built_in,.theme-dark .hljs-deletion {
    color: #dc322f
}
.theme-dark .hljs-formula {
    background: #073642
}
.scroller-wrap .scroller::-webkit-scrollbar-thumb,.scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-clip: padding-box;
    background-color: #3a2648;
}
.scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-color: #f3f3f3
}
.scroller-wrap .scrollbar {
    background-color: #fff;
}
.scroller-wrap .scrollbar:after {
    background-color: #fff;
}
.scroller-wrap .scrollbar .track {
    background: #f3f3f3;
}
.scroller-wrap .scrollbar .thumb {
    background-color: #fff;
}
.scroller-wrap .scrollbar .thumb:after {
    background-color: #3a2648;
}
.scroller-wrap.dark .scroller::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.4);
    border-color: transparent
}
.scroller-wrap.dark .scroller::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent
}
.scroller-wrap.dark .scrollbar,.scroller-wrap.dark .scrollbar:after {
    background-color: #331f44
}
.scroller-wrap.dark .scrollbar .track {
    background-color: transparent
}
.scroller-wrap.dark .scrollbar .thumb {
    background-color: #331f44
}
.scroller-wrap.dark .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.scroller-wrap.light .scroller::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.4);
    border-color: transparent
}
.scroller-wrap.light .scroller::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent
}
.scroller-wrap.light .scrollbar,.scroller-wrap.light .scrollbar:after {
    background-color: #f3f3f3
}
.scroller-wrap.light .scrollbar .track {
    background-color: transparent
}
.scroller-wrap.light .scrollbar .thumb {
    background-color: #f3f3f3
}
.scroller-wrap.light .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.spinner-wandering-cubes .spinner-item {
    background-color: #3a2648;
}
@-webkit-keyframes spinner-wandering-cubes {
    25% {
    }
    }
@keyframes spinner-wandering-cubes {
    25% {
    }
    }
.spinner-chasing-dots .spinner-item {
    background-color: #3a2648;
}
@-webkit-keyframes spinner-chasing-dots-rotate {
    to {
    }
}
@keyframes spinner-chasing-dots-rotate {
    to {
    }
}
@-webkit-keyframes spinner-chasing-dots-bounce {
    0%,to {
    }
    }
@keyframes spinner-chasing-dots-bounce {
    0%,to {
    }
    }
.spinner-pulsing-ellipsis .spinner-item {
    background-color: #99aab5;
}
@-webkit-keyframes spinner-ellipsis {
    0% {
    }
    }
@keyframes spinner-ellipsis {
    0% {
    }
    }
@-webkit-keyframes spinner-spinning-circle-rotate {
    to {
    }
}
@keyframes spinner-spinning-circle-rotate {
    to {
    }
}
@-webkit-keyframes spinner-spinning-circle-dash {
    0% {
    }
    }
@keyframes spinner-spinning-circle-dash {
    0% {
    }
    }
#oauth2-message {
    background-color: #581743;
}
#oauth2-message .oauth2-message-icon {
    background-position: 50%;
    background-repeat: no-repeat;
}
#oauth2-message .oauth2-message-icon-x {
    background-size: 92px 92px;
}
#oauth2-message .oauth2-message-icon-check {
    background-size: 158px 130px;
}
#oauth2-message .oauth2-message-text {
    color: #fff;
}
#oauth2-message .oauth2-message-subtext {
    color: hsla(0,0%,100%,.4);
}
#oauth2-authorize {
    background-color: #581743;
}
#oauth2-authorize .authorize-inner {
    background: #35383c;
}
#oauth2-authorize .authorize-inner:before {
    background: url(/assets/5c5bb53489a0a9f602df0a24c5981523.svg) 50% no-repeat;
}
#oauth2-authorize .authorize-inner header {
    background: #3a2648;
}
#oauth2-authorize .authorize-inner header .application-name>:first-child {
    color: hsla(0,0%,100%,.4);
}
#oauth2-authorize .authorize-inner header .application-name>:last-child {
    color: #fff;
}
#oauth2-authorize .authorize-inner header .application-icon {
    background: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner header .application-icon .application-icon-inner {
    background: url(/assets/1afb8f8e80a200ef3aa11131c0c07934.png) 50% no-repeat;
    background-size: 92px;
}
#oauth2-authorize .authorize-inner .captcha label {
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes label {
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-check {
    background: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-check .scope-check-inner {
    background-color: #747f8d;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 13px;
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-inner .scope-name {
    color: #fff;
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-inner .scope-description {
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .authorize-inner .scopes .scope .scope-inner .scope-error {
    color: #f04747
}
#oauth2-authorize .authorize-inner .scopes .scope.allow .scope-check-inner {
    background-color: #43b581;
}
#oauth2-authorize .authorize-inner .security-notice {
    background: #494b4f;
    color: hsla(0,0%,100%,.6);
}
#oauth2-authorize .authorize-inner .security-notice .security-notice-icon {
    background: url(/assets/070055737be7cc01fb3d27820574133e.png) 50% no-repeat;
    background-size: 9px 12px;
}
#oauth2-authorize .authorize-inner footer button {
    background: none;
    color: #fff;
}
#oauth2-authorize .authorize-inner footer button.primary {
    background: #3a2648;
}
#oauth2-authorize .authorize-inner footer button.primary:hover {
    background: #4e5d94;
}
#oauth2-authorize .select select {
    background: #35383c;
    color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .select select:active,#oauth2-authorize .select select:focus {
    border-color: #3a2648
}
#oauth2-authorize .select:after {
    border-top-color: hsla(0, 0%, 100%, 0.35);
}
#oauth2-authorize .select.focus:after {
    border-top-color: #3a2648
}
#oauth2-authorize .select.has-value select {
    color: #fff
}
#oauth2-authorize .scope-bot .avatar-large {
    background-color: #3a2648;
    color: #fff;
}
#oauth2-authorize .bot-permissions ul li {
    color: #fff;
}
#oauth2-authorize .bot-permissions ul li.disallowed {
    color: hsla(0,0%,100%,.3);
}
#oauth2-authorize .bot-permissions ul li.disallowed .checkbox-inner span {
    border-color: hsla(0,0%,100%,.6)
}
@media only screen and (max-width: 500px) {
    #oauth2-authorize .authorize-inner {
    }
    }
#oauth2-authorize.no-background,#oauth2-authorize.no-background .authorize-inner:before {
    background: none
}
a {
    color: #00b0f4;
}
body {
    background: transparent;
}
.appMount-3VJmYg {
    background-color: #221035;
}
@supports (-moz-appearance: none) {
    .keyboardMode a:focus {
    }
}
#unsupported-browser {
    background: #1b242b;
}
#unsupported-browser h1 {
    color: #fff;
}
#unsupported-browser p {
    color: #949494;
}
#unsupported-browser li {
    color: #fff;
}
#unsupported-browser li:hover {
    border-color: #3a2648;
}
#unsupported-browser li:hover .browser {
    background-position-y: 100px
}
#unsupported-browser li:hover .btn {
    background-color: #3a2648;
    border-color: #3a2648;
    color: #fff
}
#unsupported-browser .browser {
    background: url(/assets/5d57632291e09c5bc2b5d6a0b20179fa.png);
    background-size: 400px 200px;
}
#unsupported-browser .browser.browser-discord {
    background-position-x: 0
}
#unsupported-browser .browser.browser-opera {
    background-position-x: 100px
}
#unsupported-browser .browser.browser-firefox {
    background-position-x: 200px
}
#unsupported-browser .browser.browser-chrome {
    background-position-x: 300px
}
#unsupported-browser .btn {
    background: transparent;
    color: #fff;
}
.popout-3sVMXz header {
    background-color: rgba(115,139,215,.98);
    color: #fff;
}
.popout-3sVMXz section {
    background-color: hsla(0,0%,100%,.98);
}
.popout-3sVMXz p {
    color: #8a8e94;
}
.popoutLeft-30WmrD header:before {
    border-left-color: #3a2648;
}
.popoutRight-2ZVwL- header:before {
    border-right-color: #3a2648;
}
.popoutBottom-1YbShG header:before,.popoutBottomLeft-JehOp2 header:before,.popoutBottomRight-2JrySt header:before {
    border-bottom-color: #3a2648;
}
.popoutTopRight-3BzFIE section:before,.popoutTop-3uu9vG section:before {
    border-top-color: rgba(0,0,0,.08);
}
.popoutTopRight-3BzFIE section:after,.popoutTop-3uu9vG section:after {
    border-top-color: #fff;
}
.popoutTopLeft-b5Eb3O section:before {
    border-top-color: rgba(0,0,0,.08);
}
.popoutTopLeft-b5Eb3O section:after {
    border-top-color: #fff;
}
.popoutInvert-3UdKhn:not(.popoutBottom-1YbShG).popoutTop-3uu9vG header:before,.popoutInvert-3UdKhn:not(.popoutBottom-1YbShG).popoutTopRight-3BzFIE header:before {
    border-top-color: #3a2648;
}
.themedPopout-25DgLi {
    background-color: #fff;
}
.themedPopout-25DgLi .header-SsaQ8X .title-23FrqZ {
    color: #737f8d;
}
.themedPopout-25DgLi .header-SsaQ8X .subtitle-37ivwK {
    color: rgba(115,127,141,.3);
}
.themedPopout-25DgLi .footer-SRC48P {
    background-color: rgba(153,170,181,.1);
}
.themedPopout-25DgLi .footer-SRC48P .tip-2WErbi .body-1CHPZz {
    color: hsla(0,0%,100%,.6)
}
.tooltip {
    color: #dcddde;
}
.tooltip.tooltip-black {
    background-color: #2a163c;
}
.tooltip.tooltip-black.tooltip-top:after {
    border-top-color: #000
}
.tooltip.tooltip-black.tooltip-bottom:after {
    border-bottom-color: #000
}
.tooltip.tooltip-black.tooltip-left:after {
    border-left-color: #000
}
.tooltip.tooltip-black.tooltip-right:after {
    border-right-color: #000
}
.tooltip.tooltip-brand {
    background-color: #3a2648;
    color: #f8f9fd
}
.tooltip.tooltip-brand.tooltip-top:after {
    border-top-color: #3a2648
}
.tooltip.tooltip-brand.tooltip-bottom:after {
    border-bottom-color: #3a2648
}
.tooltip.tooltip-brand.tooltip-left:after {
    border-left-color: #3a2648
}
.tooltip.tooltip-brand.tooltip-right:after {
    border-right-color: #3a2648
}
.tooltip.tooltip-red {
    background-color: #f04747;
    color: #fef6f6
}
.tooltip.tooltip-red.tooltip-top:after {
    border-top-color: #f04747
}
.tooltip.tooltip-red.tooltip-bottom:after {
    border-bottom-color: #f04747
}
.tooltip.tooltip-red.tooltip-left:after {
    border-left-color: #f04747
}
.tooltip.tooltip-red.tooltip-right:after {
    border-right-color: #f04747
}
.tooltip.tooltip-green {
    background-color: #43b581;
    color: #f6fbf9
}
.tooltip.tooltip-green.tooltip-top:after {
    border-top-color: #43b581
}
.tooltip.tooltip-green.tooltip-bottom:after {
    border-bottom-color: #43b581
}
.tooltip.tooltip-green.tooltip-left:after {
    border-left-color: #43b581
}
.tooltip.tooltip-green.tooltip-right:after {
    border-right-color: #43b581
}
.tooltip.tooltip-yellow {
    background-color: #faa61a;
    color: #fffbf4
}
.tooltip.tooltip-yellow.tooltip-top:after {
    border-top-color: #faa61a
}
.tooltip.tooltip-yellow.tooltip-bottom:after {
    border-bottom-color: #faa61a
}
.tooltip.tooltip-yellow.tooltip-left:after {
    border-left-color: #faa61a
}
.tooltip.tooltip-yellow.tooltip-right:after {
    border-right-color: #faa61a
}
.verifyConnectedAccount-3WFmtE {
    background: url(/assets/d20e43cdcadf850cfd8d4e953df0f3b4.png) 0 0 repeat;
    background-color: #581743;
    color: #fff;
}
.verifyConnectedAccount-3WFmtE .logos-pt9vV6 .logosDivider-2K41nn {
    background-size: 28px 28px;
}
.verifyConnectedAccount-3WFmtE .logos-pt9vV6 .logo-TOCUPc {
    background-size: 88px 88px;
}
.verifyConnectedAccount-3WFmtE .message-bWw5KR.error-2hdVlS {
    color: #f04747
}
.verifyConnectedAccount-3WFmtE .btn-3HQv6W .spinnerItem-3hBt_K {
    background-color: #fff;
}
.verifyConnectedAccount-3WFmtE .btn-3HQv6W:disabled {
    background-color: #331f44;
}
.container-16j22k {
    background-color: #331f44;
}
.problems-3mgf6w {
    color: #fff;
}
.problemsText-1Yx-Kl {
    color: #9e9e9e;
}
.twitterLink-3NsWMp:before {
    background: url(/assets/31dd73caae6b4f9011d95f5b3efc15a1.svg) 50% no-repeat;
    background-size: 16px 12px;
}
.statusLink-gFXhrL:before {
    background: url(/assets/3c1cec05bfad03b1495eccf72c38b10c.svg) 50% no-repeat;
    background-size: 14px 14px;
}
.contentBase-11jeVK {
    color: #9e9e9e;
}
.attribution-aTC3hS a {
    color: hsla(0,0%,100%,.6);
}
.quote-3aooyW {
    color: #fff;
}
@media (max-width: 900px) {
    .personalizationNoticeButtons-2s7soE {
    }
    }
.theme-dark .personalizationNotice-2HTAH2 {
    background-color: rgb(57, 37, 74, 0.3);
    border-color: #331f44;
    color: #b9bbbe
}
.theme-light .personalizationNotice-2HTAH2 {
    background-color: #fff;
    border-color: #dcddde;
    color: #3f225a
}
.headerButtonColor-G7_f-V {
    background: #3f225a;
    color: #fff
}
.coverArtPosition-1EkmxA {
    background-position-x: 50%;
    background-position-y: 40%;
    background-repeat: no-repeat;
    background-size: cover;
}
.theme-dark .card-7JP0BX {
    background-color: rgba(57, 37, 74, 0.6);
    color: #f6f6f7
}
.theme-dark .header-1RC2Wb {
    background-color: #331f44
}
.theme-dark .header-1RC2Wb:hover {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .body-SKIE6r {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-light .card-7JP0BX {
    background-color: #f6f6f7;
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .header-1RC2Wb {
    background-color: rgba(220,221,222,.6)
}
.theme-light .header-1RC2Wb:hover {
    background-color: #dcddde
}
.theme-light .body-SKIE6r {
    background-color: #fff
}
.theme-dark .sectionTitle-1snBOS {
    color: #b9bbbe
}
.theme-dark .sectionLine-JjseS9 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .sectionTitle-1snBOS {
    color: #9e9e9e
}
.theme-light .sectionLine-JjseS9 {
    background-color: rgba(220,221,222,.6)
}
.theme-dark .userList-1kLH8B {
    border-color: #221035
}
.theme-dark .userList-1kLH8B:before {
    background-color: #331f44;
    border-bottom-color: #221035;
    border-right-color: #221035
}
.theme-dark .header-2B7Ri8 {
    background-color: #221035;
    color: #fff
}
.theme-dark .content-2KAjC9 {
    background-color: #331f44
}
.theme-dark .username-2lEtrk {
    color: #dcddde
}
.theme-dark .discriminator-1fGEDN {
    color: #9e9e9e
}
.theme-light .userList-1kLH8B {
    border-color: #f6f6f7
}
.theme-light .userList-1kLH8B:before {
    background-color: #fff;
    border-bottom-color: #f6f6f7;
    border-right-color: #f6f6f7
}
.theme-light .header-2B7Ri8 {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-light .content-2KAjC9 {
    background-color: #fff
}
.theme-light .username-2lEtrk {
    color: #3f225a
}
.theme-light .discriminator-1fGEDN {
    color: #b9bbbe
}
.theme-light .ui-standard-sidebar-view {
    background: #fff
}
.theme-light .ui-standard-sidebar-view .sidebar-region {
    background: #f3f3f4
}
.theme-light .ui-standard-sidebar-view .content-region {
    background: #fff
}
.theme-dark .ui-standard-sidebar-view {
    background: rgba(57, 37, 74, 0.6)
}
.theme-dark .ui-standard-sidebar-view .sidebar-region {
    background: #331f44
}
.theme-dark .ui-standard-sidebar-view .content-region {
    background: rgba(57, 37, 74, 0.6)
}
.theme-light .keybind-KpFkfr {
    color: #dcddde
}
.theme-light .closeButton-1tv5uR {
    border-color: #dcddde
}
.theme-light .closeButton-1tv5uR:hover {
    background-color: #f6f6f7
}
.theme-dark .keybind-KpFkfr {
    color: #9e9e9e
}
.theme-dark .closeButton-1tv5uR {
    border-color: #9e9e9e
}
.theme-dark .closeButton-1tv5uR:hover {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .keybindBold-1942Wp {
    color: #b9bbbe
}
.theme-dark .closeButtonBold-8kKURP {
    border-color: #b9bbbe
}
.theme-dark .closeButtonBold-8kKURP:hover {
    background-color: rgba(185,187,190,.3)
}
.theme-light .header-2RyJ0Y {
    color: #b9bbbe
}
.theme-dark .header-2RyJ0Y {
    color: #9e9e9e
}
.theme-light .itemDefault-3Jdr52,.theme-light .itemHover-EnbcjT {
    color: #9e9e9e
}
.theme-dark .itemDefault-3Jdr52,.theme-dark .itemHover-EnbcjT {
    color: #b9bbbe
}
.theme-light .separator-gCa7yv {
    background-color: rgba(185,187,190,.3)
}
.theme-dark .separator-gCa7yv {
    background-color: rgba(114,118,125,.3)
}
.theme-light .side-8zPYf6 .itemDefault-3Jdr52:hover,.theme-light .side-8zPYf6 .itemHover-EnbcjT:hover {
    background-color: rgba(79,84,92,.1);
    color: #3f225a
}
.theme-dark .side-8zPYf6 .itemDefault-3Jdr52:hover,.theme-dark .side-8zPYf6 .itemHover-EnbcjT:hover {
    background-color: rgba(185,187,190,.1);
    color: #f6f6f7
}
.side-8zPYf6 .itemSelected-1qLhcL {
    background-color: #3a2648;
    color: #fff
}
.theme-light .top-28JiJ- .itemDefault-3Jdr52:hover,.theme-light .top-28JiJ- .itemHover-EnbcjT:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark .top-28JiJ- .itemDefault-3Jdr52:hover,.theme-dark .top-28JiJ- .itemHover-EnbcjT:hover {
    color: #fff
}
.theme-dark .top-28JiJ- .itemSelected-1qLhcL {
    border-bottom-color: #fff;
    color: #fff
}
.theme-light .top-28JiJ- .itemSelected-1qLhcL {
    border-bottom-color: rgba(57, 37, 74, 0.6);
    color: rgba(57, 37, 74, 0.6)
}
@-webkit-keyframes uploadIconAnimateInLeft-lEUOPh {
    0% {
    }
    }
@keyframes uploadIconAnimateInLeft-lEUOPh {
    0% {
    }
    }
@-webkit-keyframes uploadIconAnimateInMiddle-3DqCs3 {
    0% {
    }
    }
@keyframes uploadIconAnimateInMiddle-3DqCs3 {
    0% {
    }
    }
@-webkit-keyframes uploadIconAnimateInRight-KUAMIW {
    0% {
    }
    }
@keyframes uploadIconAnimateInRight-KUAMIW {
    0% {
    }
    }
@-webkit-keyframes uploadModalShake-1PBhUb {
    10%,90% {
    }
    }
@keyframes uploadModalShake-1PBhUb {
    10%,90% {
    }
    }
@-webkit-keyframes uploadTextFadeIn-3vkVkM {
    0%,8.334% {
    }
    }
@keyframes uploadTextFadeIn-3vkVkM {
    0%,8.334% {
    }
    }
@-webkit-keyframes uploadModalBounceTransition-2UbjF9 {
    0% {
    }
    }
@keyframes uploadModalBounceTransition-2UbjF9 {
    0% {
    }
    }
@-webkit-keyframes uploadModalBounce-30cglS {
    0% {
    }
    }
@keyframes uploadModalBounce-30cglS {
    0% {
    }
    }
.uploadArea-3QgLtW {
    background: rgba(0,0,0,.8);
    color: #fff;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2 {
    background-color: #f04747;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2 a {
    color: hsla(0,0%,100%,.7);
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2 a:hover {
    color: #fff
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc {
    background: #3a2648;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo {
    color: #fff;
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo .instructions-2Du9gG {
    color: hsla(0,0%,100%,.6);
}
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo .icon-kyxXVr {
    border: 2px solid #852379;
}
.uploadModal-2ifh8j {
    background-color: #3a2648;
}
.uploadModal-2ifh8j .inner-3nWsbo {
    border: 2px dashed #882575;
}
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr {
    background-position: 50%;
    background-repeat: no-repeat;
}
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.image-2yrs5j {
    border: 2px solid #882575;
}
.uploadModal-2ifh8j .footer-3mqk7D {
    background-color: #6f1357;
}
.uploadModal-2ifh8j .footer-3mqk7D .button {
    background-color: #4a0f49;
}
.uploadModal-2ifh8j .footer-3mqk7D .button-primary {
    background-color: #fff0ff;
    color: #882575;
}
.content-P4SiGI {
    color: #fff;
}
.avatar-uploader .size-info {
    color: #87909c;
}
.avatar-uploader-inner {
    background-color: #3a2648;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 128px 128px;
}
.avatar-uploader-inner>* {
    color: #fff;
}
.avatar-uploader-indicator {
    background-position: 50%;
    background-repeat: no-repeat;
}
.theme-light .avatar-uploader .remove-button {
    color: #b9bbbe
}
.theme-light .avatar-uploader .remove-button:hover {
    color: #9e9e9e
}
.theme-light .avatar-uploader-indicator {
    background-color: #fff;
}
.theme-dark .avatar-uploader .remove-button {
    color: #b9bbbe
}
.theme-dark .avatar-uploader .remove-button:hover {
    color: #9e9e9e
}
.theme-dark .avatar-uploader-indicator {
    background-color: #dcddde;
}
.regionSelect-3lf4eE {
    background-color: transparent;
}
.regionSelect-3lf4eE button {
    background-color: transparent;
    color: #3a2648;
}
.regionSelect-3lf4eE:hover .regionSelectInner-24f4Ce,.regionSelect-3lf4eE:hover button {
    border-color: #3a2648
}
.regionSelect-3lf4eE:hover button {
    background-color: #3a2648;
    color: #fff
}
.regionSelectFlag-3uwFtG {
    background-color: #3a2648;
    background-size: 44px 30px;
}
.vip-1SuRbe:after {
    background: #3a2648;
    color: #fff;
}
.regionSelectName-2-2FWh {
    color: #99aab5;
}
.regionSelectModal-12e-57 {
    background: #fff;
}
.regionSelectModal-12e-57 .regionSelectModalHeader-21khC1 {
    color: #3a2648;
}
.regionSelectModal-12e-57 .regionSelectModalFooter-20C5iA {
    color: #87909c;
}
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3 {
    background-color: #fff;
}
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3:hover {
    border-color: #3a2648;
}
.colorConnectedText-1c_uzY,.colorConnectedVoice-3kyvUN,.colorDefaultText-oas-QM,.colorDefaultVoice-3wYlhb,.colorHoveredText-OZnAgu,.colorHoveredVoice-1kucsK,.colorLockedText-1VRkPt,.colorLockedVoice-2UlBjl,.colorSelectedText-1y4Wvs,.colorSelectedVoice-Xcb_9R,.colorUnreadText-2t7XRb,.colorUnreadVoice-137o4S {
    color: #b9bbbe
}
.colorMutedText-36M8WR,.colorMutedVoice-3ghIuw {
    color: #9e9e9e
}
.contentConnectedVoice-qL-YrL:active,.contentHoveredText-2D9B-x,.contentHoveredVoice-3p_NEO:active,.contentSelectedVoice-1WDIBM:active {
    background-color: rgba(57, 37, 74, 0.6)
}
.contentSelectedText-3wUhMi,.contentSelectedVoice-1WDIBM {
    background-color: rgb(57, 37, 74, 0.4)
}
.nameDefaultText-24KCy5,.nameDefaultVoice-3WUH7s,.nameLockedText-3pqQcL,.nameLockedVoice-26MhB1 {
    color: #9e9e9e
}
.nameMutedText-3Vj4bM,.nameMutedVoice-3oxyQZ {
    color: ##757575;
}
.nameHoveredText-1uO31y {
    color: #b9bbbe
}
.nameHoveredVoice-YJ1Vfd {
    color: #f6f6f7
}
.nameUnreadText-DfkrI4,.nameUnreadVoice-EVo-wI {
    color: #dcddde
}
.nameConnectedText-3CzNQn,.nameConnectedVoice-MHUX5F,.nameSelectedText-sp_EUw,.nameSelectedVoice-1qSph5 {
    color: #f6f6f7
}
.unread-1Dp-OI {
    background-color: hsla(0,0%,100%,.6);
}
.theme-light .notice-2mjo_8 {
    background-color: rgba(248,249,249,.95)
}
.theme-dark .notice-2mjo_8 {
    background: rgba(32,34,37,.95)
}
.theme-dark .message-c9-HCF {
    color: #fff
}
.theme-light .radioGroup-1GBvlr {
    color: #3f225a
}
.theme-light .desc-2Dttbk {
    color: #b9bbbe
}
.theme-light .descChecked-XkfPsU,.theme-light .titleChecked-2wg0pd {
    color: #fff
}
.theme-dark .radioGroup-1GBvlr {
    color: #f6f6f7
}
.theme-dark .desc-2Dttbk {
    color: #9e9e9e
}
.theme-dark .descChecked-XkfPsU,.theme-dark .titleChecked-2wg0pd {
    color: #fff
}
.base-96ewKC {
    background-color: transparent;
}
.theme-light .container-1nZlH6 {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-1UhAnY {
    color: #3f225a
}
.theme-light .input-1UhAnY::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-1UhAnY:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-1UhAnY::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .container-1nZlH6 {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .input-1UhAnY {
    color: #f6f6f7
}
.theme-dark .input-1UhAnY::-webkit-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .input-1UhAnY:-ms-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .input-1UhAnY::placeholder {
    color: rgba(246,246,247,.3)
}
.container-1s4HBn.error-3TKm5F,.container-1s4HBn.error-3TKm5F:hover {
    border-color: #f04747
}
.flag-16iIBd {
    background-size: cover;
}
.vip-3pFIN8:after {
    background: #3a2648;
    color: #fff;
}
.theme-dark .container-1s4HBn.hover-2AGf5p {
    border-color: #040405
}
.theme-dark .flag-16iIBd.vip-3pFIN8:after {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-light .container-1s4HBn.hover-2AGf5p {
    border-color: #b9bbbe
}
.theme-light .flag-16iIBd.vip-3pFIN8:after {
    border-color: #fff
}
.guildSettingsBaseSection-3XBkfG .avatar-uploader-inner {
    background-size: 100% 100%;
}
.guildSettingsSplashSection-2ilKBA .avatar-uploader-inner {
    background-size: cover;
}
.theme-dark .guildSettingsOverviewNotice-2VluqV {
    background-color: rgba(32,34,37,.95)
}
.theme-light .guildSettingsOverviewNotice-2VluqV {
    background-color: rgba(246,246,247,.95)
}
.streamerModeEnabledImage-3vynUz {
    background-size: 100% 100%;
}
.streamerModeEnabledBtn-2ZJ2eq {
    background-color: #593695;
    color: #fff;
}
.streamerModeEnabledBtn-2ZJ2eq:hover {
    background-color: #5a3796
}
.streamerModeEnabledBtn-2ZJ2eq.disabled-1X7fxl {
    background-color: #643da7;
}
.divider-1pnAR2 {
    background: green;
}
.typeCreate-1kfBMl {
    color: #69c49a
}
.typeDelete-bTXOuk {
    color: #f36c6c
}
.typeUpdate-2bwuHy {
    color: #fbb848
}
.typeCreate-1kfBMl:after {
    background: url(/assets/9d5a0ed6004593447a865df0f7eb149e.svg)
}
.typeDelete-bTXOuk:after {
    background: url(/assets/38bba2d1bd82fd0b60d33367adccf8b7.svg)
}
.typeUpdate-2bwuHy:after {
    background: url(/assets/fd7c3b7bb65f185a5d91f5302f30ac0c.svg)
}
.theme-light .auditLog-3jNbM6 {
    border-color: #b9bbbe;
    color: #9e9e9e
}
.theme-light .auditLog-3jNbM6 strong {
    color: #3f225a
}
.theme-light .headerClickable-2IVFo9,.theme-light .headerDefault-1wrJcN {
    background-color: rgba(246,246,247,.3)
}
.theme-light .headerExpanded-CUEwZ5 {
    background-color: #f6f6f7
}
.theme-light .divider-1pnAR2 {
    background-color: #b9bbbe
}
.theme-light .userHook-3AdCBF {
    color: #3f225a
}
.theme-light .timestamp-1mruiI {
    color: #9e9e9e
}
.theme-light .changeDetails-bk98pu {
    background-color: rgba(246,246,247,.3)
}
.theme-dark .auditLog-3jNbM6 {
    border-color: #221035;
    color: #9e9e9e
}
.theme-dark .auditLog-3jNbM6 strong {
    color: #f6f6f7
}
.theme-dark .headerClickable-2IVFo9,.theme-dark .headerDefault-1wrJcN {
    background-color: rgba(32,34,37,.3);
    color: #b9bbbe
}
.theme-dark .headerExpanded-CUEwZ5 {
    background-color: rgb(57, 37, 74, 0.4);
    color: #b9bbbe
}
.theme-dark .divider-1pnAR2 {
    background-color: #221035
}
.theme-dark .userHook-3AdCBF {
    color: #f6f6f7
}
.theme-dark .timestamp-1mruiI {
    color: #9e9e9e
}
.theme-dark .changeDetails-bk98pu {
    background-color: rgba(32,34,37,.3)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetAll-13V3n6,.theme-light .icon-RTGJu3.targetAll-13V3n6 {
    background: url(/assets/2cff836e7866cfd41cf71752ed033f1c.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetBan-3mbIPL,.theme-light .icon-RTGJu3.targetBan-3mbIPL {
    background: url(/assets/b5db5aa26e85a4239c15f10eab2031c0.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetChannel-TrRFlx,.theme-light .icon-RTGJu3.targetChannel-TrRFlx {
    background: url(/assets/b5061d752abdcf5f44d6f1a217cd0853.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetGuild-mDWfAV,.theme-light .icon-RTGJu3.targetGuild-mDWfAV {
    background: url(/assets/601c3d0141413d8eea298446d32ca099.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetEmoji-3vhPhM,.theme-light .icon-RTGJu3.targetEmoji-3vhPhM {
    background: url(/assets/53947b826826947323199b1a83733067.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetInvite-1RQBlr,.theme-light .icon-RTGJu3.targetInvite-1RQBlr {
    background: url(/assets/c428699bc4a1e93837f27f90b12c09e3.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetMemberRole-jowY3I,.theme-light .icon-RTGJu3.targetMemberRole-jowY3I {
    background: url(/assets/b4c2db8382a5bfd5dd7155ed1bdbb3b8.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetMember-2iuwxX,.theme-light .icon-RTGJu3.targetMember-2iuwxX {
    background: url(/assets/a8bd496e2e9ca833d249a7b18f41efdd.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetPermission-ZRUN5n,.theme-light .icon-RTGJu3.targetPermission-ZRUN5n {
    background: url(/assets/22955365220abc3015256c85523bf98e.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetRole-2MoUny,.theme-light .icon-RTGJu3.targetRole-2MoUny {
    background: url(/assets/1c1c67aae5a734eecf7a911cc5fde2de.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetVanityUrl-3OpsYX,.theme-light .icon-RTGJu3.targetVanityUrl-3OpsYX {
    background: url(/assets/436a2bee259beb0347ee31bb238eb1aa.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetWebhook-1xS7Z7,.theme-light .icon-RTGJu3.targetWebhook-1xS7Z7 {
    background: url(/assets/bbb590c56a4598276e5ff9270b6c382a.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetWidget-3hFVSM,.theme-light .icon-RTGJu3.targetWidget-3hFVSM {
    background: url(/assets/94eccecad8658fe53d1cd37fab50940d.svg)
}
.themeOverrideLight-3bx_5B.icon-RTGJu3.targetMessage-2kBYMT,.theme-light .icon-RTGJu3.targetMessage-2kBYMT {
    background: url(/assets/f38704754b1f737d5fa7bf4545bc5bba.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetAll-13V3n6,.theme-dark .icon-RTGJu3.targetAll-13V3n6 {
    background: url(/assets/fc3f5f9be1a4db14b02336b7cb02e6ce.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetBan-3mbIPL,.theme-dark .icon-RTGJu3.targetBan-3mbIPL {
    background: url(/assets/edb23a53ea40ac60f212ebae66e5c5c7.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetChannel-TrRFlx,.theme-dark .icon-RTGJu3.targetChannel-TrRFlx {
    background: url(/assets/343c9ff4c775c66a7d4af1f8691c34e0.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetGuild-mDWfAV,.theme-dark .icon-RTGJu3.targetGuild-mDWfAV {
    background: url(/assets/30af96a386520760ad107c5b77ba002a.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetEmoji-3vhPhM,.theme-dark .icon-RTGJu3.targetEmoji-3vhPhM {
    background: url(/assets/7a9bf92329dad473ef0383ae75367215.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetInvite-1RQBlr,.theme-dark .icon-RTGJu3.targetInvite-1RQBlr {
    background: url(/assets/4b33371531a1a89f99296a73fc9ef588.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetMemberRole-jowY3I,.theme-dark .icon-RTGJu3.targetMemberRole-jowY3I {
    background: url(/assets/a9098042cb36b955c5021259f1d48f91.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetMember-2iuwxX,.theme-dark .icon-RTGJu3.targetMember-2iuwxX {
    background: url(/assets/af043346e036ef7b1aac1cf42cd1e699.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetPermission-ZRUN5n,.theme-dark .icon-RTGJu3.targetPermission-ZRUN5n {
    background: url(/assets/2a37995eb832bae805190a93ba043857.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetRole-2MoUny,.theme-dark .icon-RTGJu3.targetRole-2MoUny {
    background: url(/assets/0176a91b4c44ed05c05af68784e78da8.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetVanityUrl-3OpsYX,.theme-dark .icon-RTGJu3.targetVanityUrl-3OpsYX {
    background: url(/assets/84215a5fec3d9de9960a225143238d74.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetWebhook-1xS7Z7,.theme-dark .icon-RTGJu3.targetWebhook-1xS7Z7 {
    background: url(/assets/a6975850d800aa86162b4aa5f18c41ac.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetWidget-3hFVSM,.theme-dark .icon-RTGJu3.targetWidget-3hFVSM {
    background: url(/assets/4ac0e382cc7b8aa0cb1d6d074b0e8ba5.svg)
}
.themeOverrideDark-1u5Vo0.icon-RTGJu3.targetMessage-2kBYMT,.theme-dark .icon-RTGJu3.targetMessage-2kBYMT {
    background: url(/assets/8c85e30795486caa8caacd829703459d.svg)
}
.image-1GzsFd {
    background-size: 100% 100%
}
.theme-light .text-GwUZgS,.theme-light .title-2BxgL2 {
    color: rgba(185,187,190,.9)
}
.theme-dark .text-GwUZgS,.theme-dark .title-2BxgL2 {
    color: #9e9e9e
}
.theme-light .selectableItem-1MP3MQ {
    color: #3f225a
}
.theme-light .selectableItem-1MP3MQ:hover {
    background-color: #dcddde
}
.theme-dark .selectableItem-1MP3MQ {
    color: #f6f6f7
}
.theme-dark .selectableItem-1MP3MQ:hover {
    background-color: rgb(57, 37, 74, 0.4)
}
.quickSelectPopoutOption-opKBx9.selected-3RZo5I {
    background-color: inherit;
}
.theme-light .quickSelect-3BxO0K {
    color: #3f225a
}
.theme-light .quickSelectArrow-1QublR {
    background: url(/assets/8b86f90154cbe38507a14fdd34367f17.svg) 50% no-repeat
}
.theme-light .quickSelectPopout-X1hvgV {
    background-color: #fff;
    color: #3f225a
}
.theme-light .quickSelectPopoutOption-opKBx9:hover {
    background-color: #f6f6f7
}
.theme-dark .quickSelect-3BxO0K {
    color: #f6f6f7
}
.theme-dark .quickSelectArrow-1QublR {
    background: url(/assets/f58cf3b8fc79e9d671ab649ab37651a9.svg) 50% no-repeat
}
.theme-dark .quickSelectPopout-X1hvgV {
    background: #331f44;
    color: #f6f6f7
}
.theme-dark .quickSelectPopoutOption-opKBx9:hover {
    background-color: rgb(57, 37, 74, 0.3)
}
.searchBar-1MOL6S {
    color: #fff;
}
.searchBar-1MOL6S .input-3Xdcic {
    background-color: transparent;
}
.searchBarIcon-18QaPq .icon-1S6UIr {
    background-repeat: no-repeat;
}
.theme-light .searchBar-1MOL6S {
    background-color: rgba(220,221,222,.6)
}
.theme-light .searchBar-1MOL6S .input-3Xdcic {
    color: #3f225a
}
.theme-light .searchBar-1MOL6S .input-3Xdcic::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .searchBar-1MOL6S .input-3Xdcic:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .searchBar-1MOL6S .input-3Xdcic::placeholder {
    color: rgb(57, 37, 74, 0.4)
}
.theme-dark .searchBar-1MOL6S {
    background-color: #3f225a
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic {
    color: #f6f6f7
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .searchBar-1MOL6S .input-3Xdcic::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-light .popoutList-T9CKZQ {
    background: #fff
}
.theme-light .popoutListEmpty-voOEBJ {
    color: #3f225a
}
.theme-dark .popoutList-T9CKZQ {
    background: rgba(57, 37, 74, 0.6)
}
.theme-dark .popoutListEmpty-voOEBJ {
    color: #f6f6f7
}
.search-bar-tag {
    background: #4a1037;
    color: #fff;
}
.search-bar-tag .close {
    background: url(/assets/487cd366952d47eb8b7033369d3cdc98.svg) 50% no-repeat;
}
.search-bar-icon .icon {
    background-repeat: no-repeat;
}
.search-bar-light .search-bar-tag {
    background: #fff;
    color: #3f225a
}
.search-bar {
    background-color: #331f44;
}
.search-bar .search-bar-inner {
    background: rgba(0,0,0,.2);
}
.search-bar input {
    background: transparent;
    color: #fff;
}
.search-bar ::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, 0.35)
}
.search-bar.search-bar-light {
    background-color: transparent;
}
.search-bar.search-bar-light .search-bar-inner {
    background-color: rgba(199,209,216,.3);
}
.search-bar.search-bar-light input {
    background: transparent;
    color: #737f8d;
}
.search-bar.search-bar-light input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
}
.search-bar.search-bar-light input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
}
.search-bar.search-bar-light input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}
.no-search-results {
    color: hsla(0,0%,100%,.3);
}
.theme-light .inviteRow-2L02ae:hover {
    background-color: #f6f6f7
}
.theme-light .footer-1FPmkC {
    background-color: #fff
}
.theme-light .content-3CCvMx:before {
    background-color: rgba(54,57,63,.1)
}
.theme-light .copied-e3U5bd {
    border-color: #43b581
}
.theme-light .checkBoxLabel-4PWfpk,.theme-light .inviteRowName-1tVaxu,.theme-light .subText-bCySlS {
    color: #3f225a
}
.theme-dark .inviteRow-2L02ae:hover {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-dark .inviteRowName-1tVaxu {
    color: #f6f6f7
}
.theme-dark .footer-1FPmkC {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .content-3CCvMx:before {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .copied-e3U5bd {
    border-color: #43b581
}
.theme-dark .checkBoxLabel-4PWfpk,.theme-dark .footerText-2a7NxZ,.theme-dark .subText-bCySlS {
    color: #b9bbbe
}
.prefixInputInput-cqxbLV {
    background: transparent;
}
.theme-light .prefixInput-14nUik {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .prefixInput-14nUik:hover {
    border-color: rgb(57, 37, 74, 0.4)
}
.theme-light .prefixInput-14nUik.focused-2QzoMt {
    border-color: #3a2648
}
.theme-light .prefixInput-14nUik.error-6_-E9g {
    border-color: #f04747
}
.theme-light .prefixInputInput-cqxbLV {
    color: #3f225a
}
.theme-light .prefixInputInput-cqxbLV::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light .prefixInputInput-cqxbLV:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light .prefixInputInput-cqxbLV::placeholder {
    color: #b9bbbe
}
.theme-light .prefixInputPrefix-2IUJ4X {
    color: rgba(114,118,125,.6)
}
.theme-dark .prefixInput-14nUik {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .prefixInput-14nUik:hover {
    border-color: rgba(0,0,0,.6)
}
.theme-dark .prefixInput-14nUik.focused-2QzoMt {
    border-color: #3a2648
}
.theme-dark .prefixInput-14nUik.error-6_-E9g {
    border-color: #f04747
}
.theme-dark .prefixInputInput-cqxbLV {
    color: #f6f6f7
}
.theme-dark .prefixInputInput-cqxbLV::-webkit-input-placeholder {
    color: #9e9e9e
}
.theme-dark .prefixInputInput-cqxbLV:-ms-input-placeholder {
    color: #9e9e9e
}
.theme-dark .prefixInputInput-cqxbLV::placeholder {
    color: #9e9e9e
}
.theme-dark .prefixInputPrefix-2IUJ4X {
    color: #9e9e9e
}
.headerText-3F6XtG {
    color: #fff!important;
}
.headerText-3F6XtG .style-description {
    color: hsla(0,0%,100%,.6);
}
.headerSync-2bdVc0 {
    color: #fff
}
.forceSync-LKCGuq {
    background-color: transparent;
}
.forceSync-LKCGuq:before {
    background-color: transparent;
    background-position: 3px 3px;
    background-repeat: no-repeat;
}
.theme-light .syncedRoleLink-1uYY6a {
    color: #000
}
.theme-dark .syncedRoleLink-1uYY6a {
    color: #fff
}
@-webkit-keyframes spin-28Tl9- {
    0% {
    }
    }
@keyframes spin-28Tl9- {
    0% {
    }
    }
.theme-dark .card-FDVird:before {
    background-color: #33363c;
    border-color: #2b2e32
}
.theme-light .card-FDVird:before {
    background-color: #f6f6f7;
    border-color: #e2e2e3
}
.button-mM-y8i {
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.theme-light .button-mM-y8i {
    background-color: #fff;
}
.theme-light .button-mM-y8i:hover {
    background-color: #f5f5f5;
}
.theme-dark .button-mM-y8i {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .button-mM-y8i:hover {
    background-color: #44474c;
}
.emoji-row .emoji-image {
    background-position: 0 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.theme-dark .emoji-alias-input .emoji-input {
    background-color: #2d2f32
}
.theme-dark .emoji-alias-placeholder {
    color: #fff
}
.theme-light .emoji-alias-input .emoji-input {
    background-color: #efeff0
}
.theme-dark .guild-settings-banned-user .username {
    color: #fff
}
.theme-dark .guild-settings-banned-user-modal .reason,.theme-dark .guild-settings-banned-user-modal .user-discrim,.theme-dark .guild-settings-banned-user .username .discrim {
    color: #9e9e9e
}
.theme-dark .guild-settings-banned-user-modal .reason-header {
    color: #dcddde
}
.theme-light .guild-settings-banned-user .username {
    color: #3f225a
}
.theme-light .guild-settings-banned-user .username .discrim {
    color: #b9bbbe
}
.theme-light .guild-settings-banned-user-modal .reason,.theme-light .guild-settings-banned-user-modal .user-discrim {
    color: #9e9e9e
}
.theme-light .guild-settings-banned-user-modal .reason-header {
    color: #3f225a
}
.copyInputError-WlP8ke {
    border-color: #f04747
}
.copyInputSuccess-XZc7BO {
    border-color: #43b581
}
.hiddenMessage-1iiFV5,.input-31cgnL {
    background-color: transparent;
}
.inputError-reIyaS {
    color: #f04747
}
.inputSuccess-3U9sNd {
    color: #43b581
}
.theme-light .copyInputDefault-21sXtF {
    background-color: rgba(79,84,92,.02);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .inputDefault-A2ud2y {
    color: #3f225a
}
.theme-light .inputDefault-A2ud2y::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .inputDefault-A2ud2y:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .inputDefault-A2ud2y::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .copyInputDefault-21sXtF {
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .inputDefault-A2ud2y {
    color: #f6f6f7
}
.theme-dark .inputDefault-A2ud2y::-webkit-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .inputDefault-A2ud2y:-ms-input-placeholder {
    color: rgba(246,246,247,.3)
}
.theme-dark .inputDefault-A2ud2y::placeholder {
    color: rgba(246,246,247,.3)
}
.button-2Nu6xU {
    border-color: #2e3757;
}
.theme-dark .invite-settings-invite-row {
    color: #f6f6f7
}
.theme-light .invite-settings-invite-row {
    color: #3f225a
}
.container-QYD8zO .avatar-uploader-inner {
    background-size: 100% 100%;
}
.iconButton-3V4WS5 {
    background-color: transparent;
}
.theme-light .pruneLink-3V7wes {
    color: #f04747
}
.theme-light .member-1q7VfX .name-8yzEIY {
    color: #3f225a;
}
.theme-light .member-1q7VfX .tag-1YGWN9 {
    color: #dcddde;
}
.theme-light .member-1q7VfX .roleWrapper-1Hde_V {
    color: rgba(79,84,92,.8)
}
.theme-dark .pruneLink-3V7wes {
    color: #f04747
}
.theme-dark .member-1q7VfX .name-8yzEIY {
    color: #f6f6f7;
}
.theme-dark .member-1q7VfX .tag-1YGWN9 {
    color: #9e9e9e;
}
.theme-dark .member-1q7VfX .roleWrapper-1Hde_V {
    color: hsla(0,0%,100%,.8)
}
.dragged-2XvZ89 {
    background-size: 100% 100%;
}
.colorPickerSwatch-5GX3Ve {
    background-color: transparent;
}
.theme-dark .colorPickerSwatch-5GX3Ve.noColor-1pdBDm {
    border-color: hsla(0,0%,100%,.1)
}
.theme-dark .colorPickerCustom-2CWBn2 {
    background: rgba(57, 37, 74, 0.6);
    border-color: #221035
}
.theme-light .colorPickerSwatch-5GX3Ve.noColor-1pdBDm {
    border-color: rgba(79,84,92,.1)
}
.theme-light .colorPickerCustom-2CWBn2 {
    background: #fff;
    border-color: #dcddde
}
.item-3T2z1R {
    background: transparent;
}
.theme-light .item-3T2z1R {
    border-color: #dcddde
}
.theme-dark .item-3T2z1R {
    border-color: #18191c
}
.denySelected-1mh2mZ {
    background: #f04747
}
.allowSelected-25S_i5 {
    background: #43b581
}
.theme-light .denySelected-1mh2mZ {
    border-color: #f04747
}
.theme-light .passthroughSelected-1Eq0Kl {
    background: #dcddde
}
.theme-light .allowSelected-25S_i5 {
    border-color: #43b581
}
.theme-dark .denySelected-1mh2mZ {
    border-color: #f04747
}
.theme-dark .passthroughSelected-1Eq0Kl {
    background: #747f8d
}
.theme-dark .allowSelected-25S_i5 {
    border-color: #43b581
}
.news-2GDtLJ {
    background-color: #221035;
}
.theme-dark .overflowUserOverflow-19NUHm {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .player-1kJMbj {
    border-bottom-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .tag-10JqWu {
    color: #dcddde
}
.theme-dark .discriminator-pIKHPn,.theme-dark .playTime-1laRtO {
    color: #9e9e9e
}
.theme-light .overflowUserOverflow-19NUHm {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .player-1kJMbj {
    border-bottom-color: rgba(220,221,222,.6)
}
.theme-light .tag-10JqWu {
    color: #3f225a
}
.theme-light .discriminator-pIKHPn,.theme-light .playTime-1laRtO {
    color: #b9bbbe
}
.emptyImage-3JcMno {
    background-position: 50%;
    background-repeat: no-repeat;
}
.theme-dark .headerManageIcon-3fX3Jq {
    color: #9e9e9e
}
.theme-dark .headerManageIcon-3fX3Jq:hover {
    color: #b9bbbe
}
.theme-dark .headerManageIcon-3fX3Jq:active {
    color: #dcddde
}
.theme-dark .headerText-2niCs_ {
    border-top-color: rgba(47,49,54,.6);
    color: #dcddde
}
.theme-dark .sectionTitle-1hpoH7 {
    color: #dcddde
}
.theme-dark .sectionBlurb-3WAfU0,.theme-light .headerManageIcon-3fX3Jq {
    color: #9e9e9e
}
.theme-light .headerManageIcon-3fX3Jq:hover {
    color: #3f225a
}
.theme-light .headerManageIcon-3fX3Jq:active {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .headerText-2niCs_ {
    border-top-color: rgba(220,221,222,.6);
    color: #3f225a
}
.theme-light .sectionTitle-1hpoH7 {
    color: #3f225a
}
.theme-light .sectionBlurb-3WAfU0 {
    color: #9e9e9e
}
.emptyImage-1Y1gHr {
    background-position: 50%;
    background-repeat: no-repeat;
}
.icon-3o6xvg {
    background-clip: padding-box;
    background-color: none;
    background-position: 50%;
    background-size: 100% 100%;
}
.noIcon-1a_FrS {
    background-color: #331f44;
    color: #fff;
}
.theme-dark .partyMemberOverflow-3VhFIX {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .partyMemberBackground-aSF9mc {
    background-color: #3f225a
}
.theme-dark .partyMemberUnknownIcon-2zv8ar {
    color: #9e9e9e
}
.theme-light .partyMemberOverflow-3VhFIX {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .partyMemberBackground-aSF9mc {
    background-color: #f6f6f7
}
.theme-light .partyMemberUnknownIcon-2zv8ar {
    color: #b9bbbe
}
.headerGroupIconBackground-xfEZPb {
    background-color: #3a2648;
}
.headerGroupIcon-289QoN {
    color: #fff;
}
.gameIcon-1oKIfq {
    background-size: 100%;
}
.theme-dark .headerTitle-PE3TuN {
    color: #dcddde
}
.theme-dark .headerSubtitle-3mUZXH {
    color: #9e9e9e
}
.theme-dark .username-XRo90I {
    color: #dcddde
}
.theme-dark .discriminator-1Kma2g {
    color: #9e9e9e
}
.theme-dark .overflowMenu-3mlkvt {
    color: #fff
}
.theme-dark .bottomSeparator-3cIFah {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .gameName-wzJptK {
    color: #dcddde
}
.theme-dark .playTime-2SuPqW {
    color: #9e9e9e
}
.theme-dark .guildIconEmptyBackground-14tfYf {
    background-color: #3f225a
}
.theme-dark .guildIconEmptyIcon-rSyLPf,.theme-dark .voiceChannelIcon-17tW8N {
    color: #b9bbbe
}
.theme-dark .channelName-2rTyk5 {
    color: #dcddde
}
.theme-light .headerTitle-PE3TuN {
    color: #3f225a
}
.theme-light .headerSubtitle-3mUZXH {
    color: #9e9e9e
}
.theme-light .username-XRo90I {
    color: #3f225a
}
.theme-light .discriminator-1Kma2g {
    color: #b9bbbe
}
.theme-light .overflowMenu-3mlkvt {
    color: #3f225a
}
.theme-light .bottomSeparator-3cIFah {
    border-color: rgba(220,221,222,.6)
}
.theme-light .gameName-wzJptK {
    color: #3f225a
}
.theme-light .playTime-2SuPqW {
    color: #9e9e9e
}
.theme-light .guildIconEmptyBackground-14tfYf {
    background-color: #f6f6f7
}
.theme-light .channelName-2rTyk5,.theme-light .guildIconEmptyIcon-rSyLPf,.theme-light .voiceChannelIcon-17tW8N {
    color: #9e9e9e
}
.need-help-modal.form.deprecated a {
    color: #00b0f4;
}
.need-help-modal.form.deprecated a:hover {
    color: #009edc
}
.need-help-modal.form.deprecated .header {
    background-color: #3a2648;
}
.need-help-modal.form.deprecated .header h1 {
    color: #fff;
}
.need-help-modal.form.deprecated .header input[type=text] {
    background-color: #fff;
    color: #555;
}
.need-help-modal.form.deprecated .header input[type=text]::-webkit-input-placeholder {
    color: #c2ccd3
}
.need-help-modal.form.deprecated .form-inner .failed .poop {
    background-repeat: no-repeat;
    background-size: 78px 79px;
}
.need-help-modal.form.deprecated .form-inner .failed p {
    color: #dbdde1;
}
.need-help-modal.form.deprecated .footer {
    background-color: #fff;
    color: #99aab5;
}
.coverImage-3cjWkd {
    background-repeat: no-repeat;
    background-size: 100%;
}
.artworkSpotifySessionEnded-11d_If {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%
}
.theme-dark .invite-18yqGF {
    background: rgba(47,49,54,.6);
    border-color: rgba(47,49,54,.9)
}
.theme-dark .header-Hg_qNF {
    color: #9e9e9e
}
.theme-dark .name-GG2Mcs,.theme-dark .partyStatus-6AjDud {
    color: #fff
}
.theme-dark .moreUsers-1sZP3U {
    background-color: #3f225a
}
.theme-dark .partyMemberEmpty-2iyh5g {
    background: #3f225a
}
.theme-dark .helpIcon-2EyVTp {
    background-color: #fff
}
.theme-dark .textLink-3aPthL,.theme-dark .message-group .textLink-3aPthL {
    color: #fff
}
.theme-light .invite-18yqGF {
    background: rgba(246,246,247,.6);
    border-color: rgba(220,221,222,.3)
}
.theme-light .header-Hg_qNF {
    color: #9e9e9e
}
.theme-light .name-GG2Mcs,.theme-light .partyStatus-6AjDud {
    color: #3f225a
}
.theme-light .moreUsers-1sZP3U {
    background-color: #dcddde
}
.theme-light .partyMemberEmpty-2iyh5g {
    background: #dcddde
}
.theme-light .helpIcon-2EyVTp {
    background-color: #3f225a
}
.theme-light .textLink-3aPthL,.theme-light .message-group .textLink-3aPthL {
    color: #3f225a
}
.theme-dark .subHeader-27gFHC {
    color: #9e9e9e
}
.theme-dark .preview-yX6Nx7 {
    border-color: #221035
}
.theme-light .subHeader-27gFHC {
    color: #9e9e9e
}
.theme-light .preview-yX6Nx7 {
    border-color: #dcddde
}
.theme-light .autocomplete-1vrmpx {
    background-color: #fff
}
.theme-light .autocompleteInner-zh20B_ {
    background-color: rgba(220,221,222,.6)
}
.theme-light .divider-23swzi,.theme-light .selectorSelected-1_M1WV {
    background-color: #dcddde
}
.theme-light .contentTitle-2tG_sM {
    color: #9e9e9e
}
.theme-light .contentTitle-2tG_sM strong {
    color: #3f225a
}
.theme-light .content-Qb0rXO {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .description-11DmNu,.theme-light .descriptionUsername-J_75O8 {
    color: #9e9e9e
}
.theme-light .descriptionDiscriminator-3vUOCc {
    color: rgba(114,118,125,.6)
}
.theme-light .avatarStatus-3jMZl_ {
    border-color: #f6f6f7
}
.theme-dark .autocomplete-1vrmpx {
    background-color: rgba(39, 20, 56, 0.8);
}
.theme-dark .selectorSelected-1_M1WV {
    background-color: rgb(57, 37, 74, 0.4);
}
.theme-dark .divider-23swzi {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .contentTitle-2tG_sM {
    color: #9e9e9e
}
.theme-dark .contentTitle-2tG_sM strong {
    color: #fff
}
.theme-dark .content-Qb0rXO {
    color: #f6f6f7
}
.theme-dark .description-11DmNu,.theme-dark .descriptionUsername-J_75O8 {
    color: #9e9e9e
}
.theme-dark .descriptionDiscriminator-3vUOCc {
    color: rgba(114,118,125,.6)
}
.theme-dark .avatarStatus-3jMZl_ {
    border-color: #331f44
}
.theme-brand .autocomplete-1vrmpx {
    background-color: #f6f6f7
}
.theme-brand .selectorSelected-1_M1WV {
    background-color: rgba(199,208,240,.6)
}
.theme-brand .divider-23swzi {
    background-color: rgba(220,221,222,.6)
}
.theme-brand .contentTitle-2tG_sM {
    color: #9e9e9e
}
.theme-brand .contentTitle-2tG_sM strong {
    color: #3f225a
}
.theme-brand .content-Qb0rXO {
    color: rgba(57, 37, 74, 0.6)
}
.theme-brand .description-11DmNu,.theme-brand .descriptionUsername-J_75O8 {
    color: #9e9e9e
}
.theme-brand .descriptionDiscriminator-3vUOCc {
    color: rgba(114,118,125,.6)
}
.theme-brand .avatarStatus-3jMZl_ {
    border-color: #f6f6f7
}
.sprite-2iCowe {
    background-position: 50%;
    background-repeat: no-repeat;
}
.attachButtonPlay-ZnFdQr {
    color: #43b581
}
.textArea-2Spzkt {
    background-color: transparent;
}
.theme-dark .inner-zqa7da {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .textArea-2Spzkt {
    color: hsla(0,0%,100%,.7)
}
.theme-dark .textArea-2Spzkt::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .textArea-2Spzkt:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .textArea-2Spzkt::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .attachPopout-1n-ZKM {
    background-color: #331f44
}
.theme-dark .attachPopoutRow-KrE-f6:hover {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .attachPopoutRowText-1tIocA {
    color: #fff
}
.theme-dark .attachButtonDivider-3Glu60 {
    background-color: hsla(0,0%,100%,.1)
}
.theme-light .inner-zqa7da {
    background-color: #f6f6f7
}
.theme-light .textArea-2Spzkt {
    color: #737f8d
}
.theme-light .textArea-2Spzkt::-webkit-input-placeholder {
    color: #b9bbbe
}
.theme-light .textArea-2Spzkt:-ms-input-placeholder {
    color: #b9bbbe
}
.theme-light .textArea-2Spzkt::placeholder {
    color: #b9bbbe
}
.theme-light .attachPopout-1n-ZKM {
    background-color: #f6f6f7;
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .attachPopoutRow-KrE-f6:hover {
    background-color: rgba(220,221,222,.6)
}
.theme-light .attachPopoutRowText-1tIocA {
    color: #3f225a
}
.theme-light .attachButtonDivider-3Glu60 {
    background-color: rgba(114,118,125,.1)
}
.theme-brand .inner-zqa7da {
    background-color: #6c125a;
}
.theme-brand .textArea-2Spzkt {
    color: hsla(0,0%,100%,.7)
}
.theme-brand .textArea-2Spzkt::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-brand .textArea-2Spzkt:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-brand .textArea-2Spzkt::placeholder {
    color: hsla(0,0%,100%,.3)
}
.diversitySelector-tmmMv0 .popout-2nUePc {
    background: #fff;
}
.diversitySelector-tmmMv0 .popout-2nUePc .item-16cXuq:hover {
    background-color: rgba(153,170,181,.1)
}
.diversitySelector-tmmMv0 .item-16cXuq {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 22px 22px;
}
.emojiPicker-3m1S-j {
    background-color: rgba(45, 7, 40, 0.6);
}
.emojiPicker-3m1S-j .dimmer-3iH-5D {
    background-color: transparent;
}
.emojiPicker-3m1S-j .dimmer-3iH-5D.visible-3k45bQ {
    background-color: hsla(0,0%,100%,.6);
}
.emojiPicker-3m1S-j .stickyHeader-1SS0JU {
    background: transparent;
}
.emojiPicker-3m1S-j .no-search-results {
    color: #99aab5;
}
.emojiPicker-3m1S-j .no-search-results .sad-discord {
    background-size: 90px 90px;
}
.emojiPicker-3m1S-j .category-2U57w6 {
    color: #98aab6;
}
.emojiPicker-3m1S-j .scroller-3vODG7 .emojiItem-109bjA {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.emojiPicker-3m1S-j .scroller-3vODG7 .emojiItem-109bjA.selected-39BZ4S {
    background-color: rgba(127, 37, 106, 0.6);
}
.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 22px 22px;
}
.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.selected-39BZ4S {
    border-bottom-color: #3a2648
}
.premiumPromo-yVfLiA {
    background-color: hsla(0,0%,100%,.95);
}
.premiumPromoClose-2sqoIR {
    background: url(/assets/f815a774c2b98d3109293a4e2afb733c.svg) 50% 50% no-repeat;
}
.premiumPromoTitle-1SQQfF {
    color: #3f225a;
}
.premiumPromoDescription-2Mn515 {
    color: #747f8d;
}
.isMentionedCozy-3isp7y:after {
    background: rgba(250,166,26,.2);
}
.theme-dark .isMentioned-N-h9aa {
    background: rgba(250,166,26,.1)
}
.theme-light .isMentioned-N-h9aa {
    background: rgba(250,166,26,.2)
}
.theme-dark .isMentioned-N-h9aa .mention,.theme-light .isMentioned-N-h9aa .mention {
    background: transparent!important
}
.theme-dark .isMentioned-N-h9aa .mention:hover,.theme-light .isMentioned-N-h9aa .mention:hover {
    background: transparent;
    color: #3a2648;
}
.isFailed-19WM0A,.isFailed-19WM0A .hljs,.isFailed-19WM0A a,.isFailed-19WM0A code.inline,.theme-dark .isFailed-19WM0A,.theme-light .isFailed-19WM0A {
    color: #f04747
}
.theme-dark .edited-DL9ECl {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .edited-DL9ECl {
    color: #99aab5
}
.theme-light .dividerEnabled-2TTlcf {
    border-bottom-color: #eceeef
}
.theme-dark .dividerEnabled-2TTlcf {
    border-bottom-color: hsla(0,0%,100%,.04)
}
.theme-dark .-38G0P0 {
    border-color: transparent;
    color: hsla(0,0%,97.6%,.3)
}
.theme-dark .isLocalBot-38G0P0 {
    background-image: linear-gradient(90deg,rgba(88, 10, 70, 0.2) 80%,#580a46);
    box-shadow: -20px 0 #580a46, 20px 0 #580a46, -20px -1px 0 0 #580a46, -20px 1px 0 #580a46, 20px 1px 0 #580a46, 20px -1px 0 #580a46;
}
.theme-light .headerCozyMeta-rdohGq {
    color: #99aab5
}
.theme-dark .headerCozyMeta-rdohGq {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .timestampCozy-2hLAPV {
    color: #99aab5
}
.theme-dark .timestampCozy-2hLAPV {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .timestampCompact-MHgFLv {
    color: #d1d9de
}
.theme-light .timestampCompactIsMentioned-cQaQoQ {
    color: #b3bfc8
}
.theme-light .messageCompact-kQa7ES:hover .timestampCompactBase-26h38e {
    color: #99aab5
}
.theme-light .messageCozy-2JPAPA:hover .timestampVisibleOnHover-276OMc {
    color: #d1d9de
}
.theme-dark .timestampCompact-MHgFLv {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .timestampCompactIsMentioned-cQaQoQ {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .messageCompact-kQa7ES:hover .timestampCompactBase-26h38e {
    color: #99aab5
}
.theme-dark .messageCozy-2JPAPA:hover .timestampVisibleOnHover-276OMc {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .timestampVisibleOnHover-276OMc,.theme-light .timestampVisibleOnHover-276OMc {
    color: transparent
}
.theme-light .username-_4ZSMR {
    color: #23262a
}
.theme-dark .username-_4ZSMR {
    color: #fff
}
.separator-1xUax1 {
    color: #99aab5;
}
.icon-2Po-VO {
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
}
.theme-dark .container-3-pyIM {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .container-3-pyIM .content-2M3n_H a {
    color: #fff
}
.theme-dark .container-3-pyIM .content-2M3n_H .actionAnchor-gzc_5z {
    color: #00b0f4
}
.theme-dark .timestamp-1E3uAL {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-light .container-3-pyIM {
    color: rgba(47,49,54,.6)
}
.theme-light .container-3-pyIM .content-2M3n_H a {
    color: #331f44
}
.theme-light .container-3-pyIM .content-2M3n_H .actionAnchor-gzc_5z {
    color: #00b0f4
}
.theme-light .timestamp-1E3uAL {
    color: #99aab5
}
.theme-dark .channelNameChange-1wTsWB strong {
    color: #fff
}
.theme-light .channelNameChange-1wTsWB strong {
    color: #331f44
}
.reactionBtn-2na4rd {
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-light .reaction-1ELvT8 {
    background: rgba(220,221,222,.3)
}
.theme-light .reaction-1ELvT8.reactionMe-23mbRf {
    background: rgba(227,231,248,.6)
}
.theme-light .reaction-1ELvT8.reactionMe-23mbRf .reactionCount-2ddRoS {
    color: #3a2648
}
.theme-light .reactionCount-2ddRoS {
    color: #9e9e9e
}
.theme-dark .reaction-1ELvT8 {
    background: hsla(0,0%,100%,.04)
}
.theme-dark .reaction-1ELvT8.reactionMe-23mbRf {
    background: rgba(92,106,158,.3)
}
.theme-dark .reaction-1ELvT8.reactionMe-23mbRf .reactionCount-2ddRoS {
    color: #3a2648
}
.theme-dark .reactionCount-2ddRoS {
    color: hsla(0,0%,100%,.3)
}
.metadata-3WGS0M {
    color: #9e9e9e;
}
.progress-3Rbvu0 {
    background-color: rgba(114,118,125,.3)
}
.cancelButton-3hVEV6,.downloadButton-23tKQp {
    color: #ffecfa;
}
.cancelButton-3hVEV6:hover, .downloadButton-23tKQp:hover {
    color: rgba(255, 236, 250, 0.6);
}
.theme-light .attachment-33OFj0 {
    border-color: #f6f6f7
}
.theme-light .filename-3eBB_v {
    color: #3f225a
}
.theme-light .filenameLinkWrapper-1-14c5 {
    color: #00b0f4
}
.theme-light .size-1Arx_I {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .attachment-33OFj0 {
    background-color: rgb(57, 37, 74, 0.4);
    border-color: rgba(117, 0, 68, 0.7);
}
.theme-dark .filename-3eBB_v {
    color: #fff
}
.theme-dark .filenameLinkWrapper-1-14c5 {
    color: rgba(0,176,244,.85)
}
.theme-dark .size-1Arx_I {
    color: rgba(246,246,247,.3)
}
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN {
    background-color: #8ea1e1;
}
.mediaBarInteractionDragging-2QurIZ .mediaBarGrabber-1FqnbN {
    background-color: #8ea1e1;
}
.mediaBarInteractionVolume-3QZqYd {
    background-color: rgba(0,0,0,.7);
}
.buffer-26XPkd,.buffer-26XPkd:after,.buffer-26XPkd:before {
    background-color: #fff
}
.mediaBarWrapper-3D7r67,.mediaBarWrapper-3D7r67:after,.mediaBarWrapper-3D7r67:before {
    background-color: rgba(185,187,190,.3)
}
.mediaBarPreview-1jfyFs,.mediaBarPreview-1jfyFs:after,.mediaBarPreview-1jfyFs:before {
    background-color: #fff
}
.mediaBarGrabber-1FqnbN,.mediaBarProgress-1xaPtl,.mediaBarProgress-1xaPtl:after,.mediaBarProgress-1xaPtl:before {
    background-color: #3a2648
}
.bubble-3qRl2J {
    background-color: #000;
    color: #f6f6f7;
}
.bubble-3qRl2J:before {
    border-top-color: #000;
}
.wrapper-2TxpI8 {
    color: #fff;
}
.audioControls-2HsaU6,.videoControls-2kcYic {
    background-color: rgba(0,0,0,.6);
}
.audioSoundBar-i0hfo6 {
    background-color: rgba(0,0,0,.7);
}
.audioMetadata-3zOuGv .metadataIcon-2FyCKU {
    color: #3f225a
}
.audioMetadata-3zOuGv .metadataIcon-2FyCKU:hover {
    color: #9e9e9e;
}
.audioMetadata-3zOuGv .metadataSize-2UOOLK {
    color: #9e9e9e;
}
.metadataIcon-2FyCKU {
    color: #fff;
}
.playPausePop-RnpJoM {
    background-color: rgba(0,0,0,.6);
    color: #fff;
}
.theme-dark .wrapper-2TxpI8 {
    background-color: #221035
}
.theme-dark .wrapperAudio-1jDe0Q {
    background-color: rgba(47,49,54,.3);
    border-color: rgba(47,49,54,.6)
}
.theme-light .wrapper-2TxpI8 {
    background-color: #f6f6f7
}
.theme-light .wrapperAudio-1jDe0Q {
    background-color: #fff;
    border-color: #f6f6f7
}
.downloadLink-1ywL9o {
    color: #fff!important;
}
.statusOnline-8PnF5L {
    background-color: #43b581
}
.statusOffline-37RKt7 {
    background-color: #747f8d
}
.guildIconExpired-2Qcq05 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 50px 26px;
}
.guildNameExpired-2Hp80V {
    color: #f04747;
}
@-webkit-keyframes invite-button-resolving-366-1w {
    0% {
    }
    }
@keyframes invite-button-resolving-366-1w {
    0% {
    }
    }
.theme-light .wrapper-35wsBm {
    background: rgba(246,246,247,.6);
    border-color: rgba(220,221,222,.3)
}
.theme-light .guildIcon-lQ0uiM {
    background-color: #3a2648
}
.theme-light .guildIconImage-3qTk45 {
    background-color: #fff
}
.theme-light .guildIconExpired-2Qcq05 {
    background-color: rgba(220,221,222,.3);
}
.theme-light .guildName-2hvnt_ {
    color: #3f225a
}
.theme-light .guildDetail-1nRKNE {
    color: #9e9e9e
}
.theme-dark .wrapper-35wsBm {
    background: rgb(57, 37, 74, 0.4);
    border-color: rgba(139, 38, 113, 0.9);
}
.theme-dark .guildIcon-lQ0uiM {
    background-color: #3a2648
}
.theme-dark .guildIconImage-3qTk45 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .guildIconExpired-2Qcq05 {
    background-color: rgba(142, 39, 110, 0.7);
}
.theme-dark .guildName-2hvnt_ {
    color: #f6f6f7
}
.theme-dark .guildDetail-1nRKNE {
    color: #9e9e9e
}
.theme-dark .message-2qRu38 {
    background-color: rgba(57, 37, 74, 0.6);
    box-shadow: 0 0 0 1px rgb(76, 22, 60), 0 2px 10px 0 rgba(0,0,0,.2);
}
.theme-light .message-2qRu38 {
    background-color: #fff;
}
.theme-dark .container-1If-HZ,.theme-dark .reactors-Blmlhw {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .remove-3V-yj8 {
    color: #b9bbbe
}
.theme-dark .remove-3V-yj8:hover {
    background-color: rgba(185,187,190,.1)
}
.theme-dark .sidebar-1-SQro {
    background: #331f44
}
.theme-dark .reactionSelected-1pqISm {
    background-color: rgb(57, 37, 74, 0.3)
}
.theme-dark .reactionDefault-GBA58K:hover {
    background-color: rgba(79,84,92,.1)
}
.theme-dark .discriminator-byOsvi {
    color: #9e9e9e
}
.theme-light .container-1If-HZ,.theme-light .reactors-Blmlhw {
    background-color: #fff
}
.theme-light .remove-3V-yj8 {
    color: #9e9e9e
}
.theme-light .remove-3V-yj8:hover {
    background-color: rgba(114,118,125,.1)
}
.theme-light .sidebar-1-SQro {
    background: #f3f3f4
}
.theme-light .reactionSelected-1pqISm {
    background-color: #dcddde
}
.theme-light .reactionDefault-GBA58K:hover {
    background-color: rgba(220,221,222,.3)
}
.theme-light .discriminator-byOsvi {
    color: #b9bbbe
}
.button-3Jq0g9 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-light .container-3cGP6G {
    background: #fff
}
.theme-dark .container-3cGP6G {
    background: #18191c
}
.item-2J1YMK {
    background: transparent;
}
.theme-light .item-2J1YMK {
    color: #9099a4
}
.theme-light .item-2J1YMK:active,.theme-light .item-2J1YMK:hover {
    background-color: #f6f6f7;
    color: #747f8d
}
.theme-dark .item-2J1YMK {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .item-2J1YMK:active,.theme-dark .item-2J1YMK:hover {
    background-color: #040405;
    color: #fff
}
.operations-36ENbA>a {
    color: #3a2648;
}
.theme-dark .operations-36ENbA {
    color: hsla(0,0%,100%,.3)
}
.theme-light .operations-36ENbA {
    color: #9099a4
}
.image-2JDb81 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 94px 120px;
}
.guildName-1Bc3Ta {
    color: rgb(57, 37, 74, 0.3);
}
.actionButtons-1sUUug {
    background-color: transparent;
}
.closeButton-17RIVZ {
    background-position: 50%;
    background-size: 16px 16px;
}
.theme-light .hasMoreButton-1MELpI {
    background: #fcfcfc;
    border-color: #e3e5e7;
    color: #3a2648
}
.theme-light .messageGroupWrapper-o-Zw7G {
    border-color: rgba(28,36,43,.06)
}
.theme-light .messageGroupWrapper-o-Zw7G:hover {
    border-color: rgba(28,36,43,.12)
}
.theme-light .messageGroupWrapper-o-Zw7G:hover .actionButtons-1sUUug {
    background-color: #fff;
}
.theme-light .body-bvcIjN {
    color: #737f8d
}
.theme-light .channelName-3kBz6H {
    color: #3f225a
}
.theme-light .guildName-1Bc3Ta {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .jumpButton-3DTcS_ {
    background-color: #ebebeb;
    color: rgba(115,127,141,.6)
}
.theme-light .jumpButton-3DTcS_:hover {
    color: #737f8d
}
.theme-dark .messagesPopoutWrap-1MQ1bW {
    background-color: rgba(39, 20, 56, 0.8);
    border-color: rgb(72, 16, 57, 0.6);
}
.theme-dark .header-ykumBX {
    background-color: rgba(74, 16, 55, 0.8);
}
.theme-dark .header-ykumBX .title-3pkaKd {
    color: #fff
}
.theme-dark .footer-1kmXd4 {
    background-color: #481039;
}
.theme-dark .footer-1kmXd4 .tip-31--sZ .body-bvcIjN {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .hasMoreButton-1MELpI {
    background: #32353b;
    border-color: #331f44;
    color: #3a2648
}
.theme-dark .channelName-3kBz6H {
    color: #fff
}
.theme-dark .guildName-1Bc3Ta {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .emptyPlaceholder-1zh-Eu .body-bvcIjN {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .messageGroupWrapper-o-Zw7G {
    background-color: rgba(65, 12, 54, 0.8);
    border-color: rgb(72, 16, 57, 0.6);
}
.theme-dark .messageGroupWrapper-o-Zw7G:hover {
    border-color: #481039;
}
.theme-dark .messageGroupWrapper-o-Zw7G:hover .actionButtons-1sUUug {
    background-color: rgba(32, 8, 40, 0);
    box-shadow: 0 0 6px 4px #651b4c00;
}
.theme-dark .jumpButton-3DTcS_ {
    background-color: #4a0f49;
    color: hsla(0,0%,100%,.6)
}
.theme-dark .jumpButton-3DTcS_:hover {
    color: #fff
}
.tab-bar.TOP .tab-bar-item {
    color: #87909c;
}
.tab-bar.TOP .tab-bar-item.selected {
    color: #3a2648
}
.tab-bar.SIDE .tab-bar-header {
    color: #fff;
}
.tab-bar.SIDE .tab-bar-item {
    color: hsla(0,0%,100%,.3);
}
.tab-bar.SIDE .tab-bar-item.selected,.tab-bar.SIDE .tab-bar-item:hover {
    color: #fff
}
.headerTabBarWrapper-27xBDe .tab-bar.TOP {
    border-bottom-color: transparent;
}
.headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item {
    color: rgba(115,127,141,.3);
}
.headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item.selected {
    border-bottom-color: #737f8d;
    color: #737f8d
}
.mentionFilter-1PQ6ey {
    background-position: right 6px;
    background-repeat: no-repeat;
    background-size: 9px 5px;
    color: rgba(115,127,141,.3);
}
.mentionFilter-1PQ6ey .value-2k8Drt {
    color: #737f8d;
}
.theme-dark .mentionFilter-1PQ6ey {
    color: #fff
}
.theme-dark .mentionFilter-1PQ6ey .label-12YslM {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .mentionFilter-1PQ6ey .value-2k8Drt {
    color: #fff
}
.theme-dark .headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .headerTabBarWrapper-27xBDe .tab-bar.TOP .tab-bar-item.selected {
    border-bottom-color: #fff;
    color: #fff
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow:before {
    border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before {
    border-bottom-color: #f0f0f0;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before {
    border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow:before {
    border-top-color: #fff
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow:before {
    border-top-color: #aeaeae;
}
.react-datepicker {
    background-color: #fff;
    color: #000;
}
.react-datepicker__header {
    background-color: #f0f0f0;
}
.react-datepicker__current-month {
    color: #000;
}
.react-datepicker__navigation--previous {
    border-right-color: #ccc;
}
.react-datepicker__navigation--previous:hover {
    border-right-color: #b3b2b2
}
.react-datepicker__navigation--next {
    border-left-color: #ccc;
}
.react-datepicker__navigation--next:hover {
    border-left-color: #b3b2b2
}
.react-datepicker__navigation--years-previous {
    border-top-color: #ccc;
}
.react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b2b2
}
.react-datepicker__navigation--years-upcoming {
    border-bottom-color: #ccc;
}
.react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b2b2
}
.react-datepicker__week-number {
    color: #ccc;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    background-color: #f0f0f0;
}
.react-datepicker__day,.react-datepicker__day-name {
    color: #000;
}
.react-datepicker__day:hover {
    background-color: #f0f0f0;
}
.react-datepicker__day--highlighted {
    background-color: #3dcc4a;
    color: #fff
}
.react-datepicker__day--highlighted:hover {
    background-color: #32be3f
}
.react-datepicker__day--highlighted-custom-1 {
    color: #f0f
}
.react-datepicker__day--highlighted-custom-2 {
    color: green
}
.react-datepicker__day--in-range,.react-datepicker__day--in-selecting-range,.react-datepicker__day--selected {
    background-color: #216ba5;
    color: #fff
}
.react-datepicker__day--in-range:hover,.react-datepicker__day--in-selecting-range:hover,.react-datepicker__day--selected:hover {
    background-color: #1d5d90
}
.react-datepicker__day--keyboard-selected {
    background-color: #2a87d0;
    color: #fff
}
.react-datepicker__day--keyboard-selected:hover {
    background-color: #1d5d90
}
.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(33,107,165,.5)
}
.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: #f0f0f0;
    color: #000
}
.react-datepicker__day--disabled {
    color: #ccc;
}
.react-datepicker__day--disabled:hover {
    background-color: transparent
}
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow {
    border-top-color: #b3b2b2
}
.react-datepicker__month-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow {
    border-top-color: #ccc;
}
.react-datepicker__month-dropdown,.react-datepicker__year-dropdown {
    background-color: #f0f0f0;
}
.react-datepicker__month-option:hover,.react-datepicker__year-option:hover {
    background-color: #ccc
}
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b2b2
}
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b2b2
}
.react-datepicker__close-icon {
    background-color: transparent;
}
.react-datepicker__close-icon:after {
    background-color: #216ba5;
    color: #fff;
}
.react-datepicker__today-button {
    background: #f0f0f0;
}
.react-datepicker__portal {
    background-color: rgba(0,0,0,.8);
}
@media (max-height: 550px),(max-width:400px) {
    .react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__day-name {
    }
}
.react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc
}
.react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b2b2
}
.react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc
}
.react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b2b2
}
.calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next,.calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 6px 12px;
}
.calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected {
    background: none;
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker {
    background-color: #fff
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__header {
    background-color: #fff;
    border-color: rgba(220,221,222,.2)
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__current-month {
    border-bottom-color: rgba(220,221,222,.2);
    color: #3f225a
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next,.theme-light .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous {
    border-color: #dcddde
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__week:last-of-type .react-datepicker__day {
    border-bottom-color: #dcddde
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__week .react-datepicker__day:last-of-type {
    border-right-color: #dcddde
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day-name {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day {
    border-left-color: #dcddde;
    border-top-color: #dcddde;
    color: #3f225a
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover,.theme-light .calendarPicker-2yf6Ci .react-datepicker__day:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled,.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled:hover {
    background-color: rgba(0,0,0,.05);
    color: rgba(0,0,0,.2)
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:after {
    background-color: #3a2648
}
.theme-light .calendarPicker-2yf6Ci .react-datepicker__day--disabled,.theme-light .calendarPicker-2yf6Ci .react-datepicker__day--outside-month {
    background-color: #f6f6f7;
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__header {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgba(24,25,28,.2)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__current-month {
    border-bottom-color: rgba(24,25,28,.3);
    color: #f6f6f7
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous {
    border-color: #18191c
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__week:last-of-type .react-datepicker__day {
    border-bottom-color: #18191c
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__week .react-datepicker__day:last-of-type {
    border-right-color: #18191c
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day-name {
    color: rgba(246,246,247,.6)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day {
    border-left-color: #18191c;
    border-top-color: #18191c;
    color: #f6f6f7
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day:hover {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled:hover {
    background-color: #331f44;
    color: rgba(246,246,247,.3)
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:after {
    background-color: #3a2648
}
.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day--disabled,.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day--outside-month {
    background-color: #331f44;
    color: rgba(246,246,247,.3)
}
.theme-light .keybindShortcut-1BD6Z1 {
    color: #3f225a
}
.theme-light .keybindShortcut-1BD6Z1 span:active {
    color: #000
}
.theme-light .dim-1l4L4y span {
    background-color: #fff;
    color: #95989d
}
.theme-light .dim-1l4L4y span:active {
    color: #777a7e
}
.theme-light .dark-2P8byF span {
    background-color: #3f225a;
    border-color: #221035;
    color: #95989d
}
.theme-light .dark-2P8byF span:active {
    color: #777a7e
}
.theme-light .keybindShortcutTipsSelect-HDyfe8:last-of-type:before {
    background-color: #dfe0e2
}
.theme-dark .keybindShortcut-1BD6Z1 {
    color: #f6f6f7
}
.theme-dark .keybindShortcut-1BD6Z1 span {
    background-color: #9e9e9e;
    color: #f6f6f7
}
.theme-dark .keybindShortcut-1BD6Z1 span:active {
    color: #c5c5c6
}
.theme-dark .dim-1l4L4y span {
    background-color: #9e9e9e;
    color: #b9bbbe
}
.theme-dark .dim-1l4L4y span:active {
    color: #949698
}
.theme-dark .keybindShortcutTipsSelect-HDyfe8:last-of-type:before {
    background-color: #3f225a
}
.theme-dark .popout-3sVMXz {
    background-color: rgba(39, 20, 56, 0.8);
    border: 1px solid rgba(64, 7, 61, 0.9);
}
.theme-dark .resultsGroup-r_nuzN .header-2N-gMV {
    color: #cacbce
}
.theme-dark .resultsGroup-r_nuzN .searchLearnMore-3SQUAj {
    background: url(/assets/9d54895f1d48ef22ffcb1dae14e76bdf.svg) no-repeat 50% 50%
}
.theme-dark .resultsGroup-r_nuzN .searchClearHistory-2cSSMO {
    background: url(/assets/8be8e7c66c7035a51f294dee367aea0a.svg) no-repeat 50% 50%
}
.theme-dark .option-96V44q.selected-rZcOL- {
    background-color: rgb(57, 37, 74, 0.5);
}
.theme-dark .option-96V44q.selected-rZcOL-:after {
    background: linear-gradient(90deg,rgba(35,38,42,0),rgb(57, 37, 74, 0.5));
}
.theme-dark .option-96V44q.selected-rZcOL-:before {
    background: url(/assets/4a6f43b5cd1e641841b4141045c0e82d.svg) no-repeat 0 50%
}
.theme-dark .option-96V44q .answer-1n6g43,.theme-dark .option-96V44q .nonText-3CRkO0,.theme-dark .option-96V44q strong {
    color: #caccce
}
.theme-dark .option-96V44q .filter-3Y_im- {
    color: #9e9e9e
}
.theme-dark .option-96V44q.user-O3Czj0 .displayedNick-3xxvzU {
    color: #caccce
}
.theme-dark .option-96V44q.user-O3Czj0 .displayUsername-Qekxml {
    color: #5e636a
}
.theme-dark .searchOption-zQ-1l6 .filter-3Y_im- {
    color: #caccce
}
.theme-dark .searchOption-zQ-1l6 .answer-1n6g43 {
    color: #9e9e9e
}
.theme-dark .searchQuery-1B7rtx {
    color: #caccce
}
.theme-dark .searchQuery-1B7rtx.selected-rZcOL- {
    background-color: #331f44
}
.theme-dark .searchQuery-1B7rtx .searchFor-3W5Vad strong {
    color: #9e9e9e
}
.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hint-165cR4 {
    color: #caccce
}
.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z:hover {
    background-color: #a02f7b
}
.theme-dark .searchResultChannelCategory-1l0lSn,.theme-dark .searchResultChannelIcon-1DnTme {
    color: #9e9e9e
}
.theme-light .popout-3sVMXz {
    background-color: #fff
}
.theme-light .resultsGroup-r_nuzN .header-2N-gMV {
    color: #cacbce
}
.theme-light .resultsGroup-r_nuzN .searchLearnMore-3SQUAj {
    background: url(/assets/9d54895f1d48ef22ffcb1dae14e76bdf.svg) no-repeat 50% 50%
}
.theme-light .resultsGroup-r_nuzN .searchClearHistory-2cSSMO {
    background: url(/assets/8be8e7c66c7035a51f294dee367aea0a.svg) no-repeat 50% 50%
}
.theme-light .option-96V44q:after {
    background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(80%,#fff));
    background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 80%)
}
.theme-light .option-96V44q.selected-rZcOL- {
    background-color: #f3f3f3
}
.theme-light .option-96V44q.selected-rZcOL-:before {
    background: url(/assets/4a6f43b5cd1e641841b4141045c0e82d.svg) no-repeat 0 50%
}
.theme-light .option-96V44q.selected-rZcOL-:after {
    background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,95.3%,0)),color-stop(50%,#f3f3f3));
    background: linear-gradient(90deg,hsla(0,0%,95.3%,0),#f3f3f3 50%)
}
.theme-light .option-96V44q .nonText-3CRkO0 {
    color: #5e636a
}
.theme-light .option-96V44q .filter-3Y_im- {
    color: #caccce
}
.theme-light .option-96V44q .answer-1n6g43,.theme-light .option-96V44q strong {
    color: #3f225a
}
.theme-light .option-96V44q.user-O3Czj0 .displayedNick-3xxvzU {
    color: #5e636a
}
.theme-light .option-96V44q.user-O3Czj0 .displayUsername-Qekxml {
    color: #caccce
}
.theme-light .searchOption-zQ-1l6 .filter-3Y_im- {
    color: #3f225a
}
.theme-light .searchOption-zQ-1l6 .answer-1n6g43 {
    color: #caccce
}
.theme-light .searchQuery-1B7rtx {
    color: #caccce
}
.theme-light .searchQuery-1B7rtx.selected-rZcOL- {
    background-color: #f9f9f9
}
.theme-light .searchQuery-1B7rtx .searchFor-3W5Vad strong {
    color: #3f225a
}
.theme-light .datePicker--XZbmJ .datePickerHint-3Q1Udw .hint-165cR4 {
    color: #caccce
}
.theme-light .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z {
    background-color: #3a2648;
    color: #fff
}
.theme-light .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z:hover {
    background-color: #a02f7b
}
.theme-light .searchResultChannelCategory-1l0lSn,.theme-light .searchResultChannelIcon-1DnTme {
    color: #b9bbbe
}
.searchAnswer-3Dz2-q,.searchFilter-2ESiM3 {
    color: #fff;
}
.theme-light .searchAnswer-3Dz2-q,.theme-light .searchFilter-2ESiM3 {
    background-color: #9e9e9e
}
.theme-dark .searchAnswer-3Dz2-q,.theme-dark .searchFilter-2ESiM3 {
    background-color: #581743
}
.DraftEditor-editorContainer {
    background-color: hsla(0,0%,100%,0);
}
.public-DraftEditorPlaceholder-root {
    color: #9197a3;
}
.public-DraftEditorPlaceholder-hasFocus {
    color: #bdc1c9
}
.search .search-bar {
    background-color: rgba(246,246,247,.6);
}
.search .DraftEditor-root {
    color: rgba(57, 37, 74, 0.6);
}
.search .DraftEditor-root .public-DraftEditorPlaceholder-root {
    color: rgb(57, 37, 74, 0.3);
}
.theme-dark .search .search-bar {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .search .search-bar .public-DraftEditorPlaceholder-root {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .search .search-bar .search-bar-clear {
    background-color: #9a9da0
}
.theme-dark .search .search-bar .search-bar-clear:before {
    background-color: #63666a
}
.theme-dark .search .search-bar .search-bar-clear:after {
    background-color: #9a9da0
}
.theme-dark .search .search-bar .search-bar-clear.active {
    background: #d6d7d8
}
.theme-dark .search .search-bar .search-bar-clear.active:after,.theme-dark .search .search-bar .search-bar-clear.active:before {
    background-color: #63666a
}
.theme-dark .search .search-bar .search-bar-clear.active:hover {
    background: #fff
}
.theme-dark .search .DraftEditor-root {
    color: #fff
}
.title-1aVOXw {
    color: #3f225a;
}
.iconBadge-2dji3k {
    background-color: #f04747;
}
.theme-light .headerBar-UHpsPw {
    background: #fff;
}
.theme-light .iconForeground-3y9f0B,.theme-light .title-1aVOXw {
    color: #3f225a
}
.theme-light .iconBadge-2dji3k {
    border-color: #fff
}
.theme-light .divider-2PMBlV {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .iconForeground-3y9f0B,.theme-dark .title-1aVOXw {
    color: #fff
}
.theme-dark .iconBadge-2dji3k {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .divider-2PMBlV {
    background: hsla(0,0%,84.7%,.1)
}
.article-3kb3qm {
    background-color: #221035;
}
.background-1ri_HN {
    background-position: top
}
.background-1ri_HN,.storePromotionBackground-3DvkVd {
    background-repeat: no-repeat;
    background-size: cover;
}
.storePromotionBackground-3DvkVd {
    background-position: 50%
}
.gameArea-2c59Um {
    color: #b9bbbe;
}
.gameName-2XIejT {
    color: #b9bbbe;
}
.title-3gWYEg {
    color: #dcddde;
}
.simpleTitle-1om7yj {
    color: #f6f6f7;
}
.description-1CCuDd {
    color: #b9bbbe;
}
.timestamp-JB3BQ5 {
    color: #9e9e9e;
}
.arrowContainer-10m4Cy {
    color: #f6f6f7;
}
@media (max-width: 600px) {
    .prevButtonContainer-Rc83MJ {
    }
    }
.carousel-JbsNzL {
    background-color: #221035;
}
.paginationItem-3-MBTL {
    background: #18191c;
}
.paginationItem-3-MBTL:before {
    background: #fff;
}
.paginationItem-3-MBTL:after {
    background: -webkit-gradient(linear,right top,left top,from(transparent),to(#221035));
    background: linear-gradient(270deg,transparent 0,#221035);
    background-blend-mode: color;
}
.paginationItem-3-MBTL:hover {
    background: #221035
}
.selectedPage-2JQS2s {
    background: #221035;
}
.paginationTitle-1XtEga {
    color: #f6f6f7;
}
.paginationSubtitle-bqhkei {
    color: #9e9e9e;
}
.promotionBackground-2urB7- {
    background-position: 50%;
}
.arrow-1-DaGi {
    color: #9e9e9e;
}
.dot-22bIa4 {
    background-color: #fff;
}
.dockIcon-1aEfsH {
    background-size: 100%;
}
.theme-light .dockItemText-3qYREY {
    color: #3f225a
}
.theme-light .dockItem-2kQDqg:hover {
    background-color: #dcddde
}
.theme-dark .dockItemText-3qYREY {
    color: #dcddde
}
.theme-dark .dockItem-2kQDqg:hover {
    background-color: #221035
}
.theme-light .addButton-3s8Y-Y {
    color: #3f225a
}
.theme-light .emptyState-N8MHmB {
    border-color: rgba(220,221,222,.6);
    color: #b9bbbe
}
.theme-dark .addButton-3s8Y-Y {
    color: #dcddde
}
.theme-dark .emptyState-N8MHmB {
    border-color: rgba(47,49,54,.6);
    color: #9e9e9e
}
.theme-light .emptyState-2-sT0o {
    background-color: #fff;
    border-color: #dcddde
}
.theme-light .title-1LheRD {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .subtitle-nN6eXt {
    color: #9e9e9e
}
.theme-dark .emptyState-2-sT0o {
    background-color: rgb(57, 37, 74, 0.3);
    border-color: #331f44
}
.theme-dark .title-1LheRD {
    color: #dcddde
}
.theme-dark .subtitle-nN6eXt {
    color: #9e9e9e
}
.theme-dark .activityFeed-28jde9 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .activityFeed-28jde9 {
    background-color: #f6f6f7
}
.theme-dark .icon-2oIyBi {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .clearIcon-2z4ymv:hover {
    color: #f6f6f7
}
.theme-dark .libraryFilterInput-3JzqZD {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .libraryFilterInput-3JzqZD::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .libraryFilterInput-3JzqZD:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .libraryFilterInput-3JzqZD::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-light .icon-2oIyBi {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .clearIcon-2z4ymv:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .libraryFilterInput-3JzqZD {
    background-color: rgba(246,246,247,.6)
}
.theme-light .libraryFilterInput-3JzqZD::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .libraryFilterInput-3JzqZD:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .libraryFilterInput-3JzqZD::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.title-1rXJ86 {
    color: currentColor;
}
.theme-dark .rate-1Gat8e {
    color: #9e9e9e
}
.theme-dark .headerCellSorted-1JR4Ny {
    color: #fff
}
.theme-light .headerCellSorted-1JR4Ny {
    color: #3f225a
}
.diskProgress-37-Sik {
    color: #00b0f4
}
.networkProgress-2auspD {
    color: #43b581
}
.theme-dark .gameUpdates-2GPqBU {
    background-color: #221035
}
.theme-dark .row-2X_kYI {
    border-bottom-color: hsla(0,0%,100%,.1)
}
.theme-dark .nameCellText-Ubz8FY {
    color: #f6f6f7
}
.theme-dark .progressCellText-3avmMz {
    color: #9e9e9e
}
.theme-light .gameUpdates-2GPqBU {
    background-color: #f6f6f7
}
.theme-light .row-2X_kYI {
    border-bottom-color: rgba(220,221,222,.6)
}
.theme-light .nameCellText-Ubz8FY {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .progressCellText-3avmMz {
    color: #9e9e9e
}
.rowWrapperActive-2L7i9f .row-ZLfFhY {
    border-top-color: transparent
}
.rowBackground-3MeNoN {
    background-repeat: no-repeat;
    background-size: cover;
}
.nameCellNew-3SokLB {
    color: #faa61a;
}
.theme-dark .header-39GIC8 {
    background-color: rgba(57, 37, 74, 0.6);
    border-bottom-color: hsla(0,0%,100%,.1);
    color: hsla(0,0%,100%,.3)
}
.theme-dark .headerCell-3L6rFG {
    border-left-color: rgba(246,246,247,.1)
}
.theme-dark .headerCellSorted-3a5AzJ {
    color: #fff
}
.theme-dark .headerCell-3L6rFG:hover:not(.headerCellSorted-3a5AzJ) {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .row-ZLfFhY {
    color: #f6f6f7
}
.theme-dark .rowWrapperActive-2L7i9f {
    background-color: rgb(57, 37, 74, 0.3);
}
.theme-dark .rowWrapper-2fB6P0+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: rgba(246,246,247,.1)
}
.theme-dark .rowWrapper-2fB6P0+.rowWrapperActive-2L7i9f .row-ZLfFhY,.theme-dark .rowWrapperActive-2L7i9f+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: transparent
}
.theme-dark .actionIconBase-2L-mPj {
    color: #fff
}
.theme-dark .emptyStateSmall-2Ttdgm {
    border-top-color: rgba(246,246,247,.1)
}
.theme-dark .emptyStateHeader-3CJtAy {
    color: #f6f6f7
}
.theme-dark .emptyStateDescription-2IePen {
    color: #b9bbbe
}
.theme-dark .emptyWumpus-12J3jI {
    background: url(/assets/131dcaaa628405e6d0ebee7708111c7a.svg)
}
.theme-light .header-39GIC8 {
    background-color: #fff;
    border-bottom-color: rgba(220,221,222,.6);
    color: #b9bbbe
}
.theme-light .headerCell-3L6rFG {
    border-left-color: #f6f6f7
}
.theme-light .headerCellSorted-3a5AzJ {
    color: #3f225a
}
.theme-light .headerCell-3L6rFG:hover:not(.headerCellSorted-3a5AzJ) {
    color: #9e9e9e
}
.theme-light .row-ZLfFhY {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .rowWrapper-2fB6P0+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: rgba(220,221,222,.6)
}
.theme-light .rowWrapper-2fB6P0+.rowWrapperActive-2L7i9f .row-ZLfFhY,.theme-light .rowWrapperActive-2L7i9f+.rowWrapper-2fB6P0 .row-ZLfFhY {
    border-top-color: transparent
}
.theme-light .emptyStateSmall-2Ttdgm {
    border-top-color: rgba(220,221,222,.6)
}
.theme-light .emptyStateHeader-3CJtAy {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .emptyStateDescription-2IePen {
    color: #9e9e9e
}
.theme-light .emptyWumpus-12J3jI {
    background: url(/assets/d0320d29cdef93b8e2baf889a28d32e0.svg)
}
@media (max-width: 1200px) {
    .settingIcons-3QYa5E {
    }
    }
@media (max-width: 980px) {
    .platformCell-XyBBs6 {
    }
}
@media (max-width: 860px) {
    .lastPlayedCell-2arbtc {
    }
}
@media (max-width: 780px) {
    .rowWrapper-2fB6P0 {
    }
    }
.theme-dark .gameLibrary-TTDw4Y {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .gameLibrary-TTDw4Y {
    background-color: #f6f6f7
}
.friendsIcon-2I7J-e {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 32px 28px;
}
.guild-1EfMGQ .avatar-small {
    background-repeat: no-repeat;
    background-size: 50px 50px;
}
.guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,.guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px;
}
.guildSeparator-1X4GQ1 {
    background: none;
}
.theme-light .guildsWrapper-5TJh6A {
    background-color: #221035
}
.theme-light .homeIcon-1FoKUJ {
    color: #fff
}
.theme-light .guildPlaceholder-1ioaid {
    border-color: #4a0f49
}
.theme-light .guild-1EfMGQ.unread-qLkInr:before {
    background: #8a8e94
}
.theme-light .guild-1EfMGQ.selected-ML3OIq:before {
    background: #fff
}
.theme-light .guild-1EfMGQ .guildInner-3DSoA4 {
    background: #331f44
}
.theme-light .guild-1EfMGQ .guildInner-3DSoA4 a {
    color: #fff
}
.theme-light .guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,.theme-light .guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
    background-color: #221035
}
.theme-light .guild-1EfMGQ .guildIcon-CT-ZDq {
    background-color: transparent
}
.theme-light .guildSeparator-1X4GQ1:after {
    background: #331f44
}
.theme-light .guildsError-3cFMtY {
    background: #413338;
    border-color: #f04747;
    color: #fff
}
.theme-light .guildsError-3cFMtY:hover {
    background-color: #f04747
}
.theme-light .guildsAdd-21_IdK {
    background: #221035;
    border-color: #4a0f49;
    color: #4a0f49
}
.theme-light .guildsAdd-21_IdK:hover {
    border-color: hsla(0,0%,100%,.75);
    color: hsla(0,0%,100%,.75)
}
.theme-light .downloadAppButton-3EFlA6 {
    background-color: transparent;
    color: hsla(0,0%,100%,.3)
}
.theme-light .downloadAppButton-3EFlA6:hover {
    color: hsla(0,0%,100%,.5)
}
.theme-light .downloadAppButton-3EFlA6:after {
    background-color: #4b4d4f
}
.theme-dark .guildsWrapper-5TJh6A {
    background-color: #221035
}
.theme-dark .homeIcon-1FoKUJ {
    color: #fff
}
.theme-dark .guildPlaceholder-1ioaid {
    border-color: #4a0f49
}
.theme-dark .guild-1EfMGQ.unread-qLkInr:before {
    background: #8a8e94
}
.theme-dark .guild-1EfMGQ.selected-ML3OIq:before {
    background: #fff
}
.theme-dark .guild-1EfMGQ .guildInner-3DSoA4 {
    background: #3a2648 !important;
}
.theme-dark .guild-1EfMGQ .guildInner-3DSoA4 a {
    color: #fff
}
.theme-dark .guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,.theme-dark .guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
    background-color: #221035
}
.theme-dark .guild-1EfMGQ .guildIcon-CT-ZDq {
    background-color: transparent
}
.theme-dark .guildSeparator-1X4GQ1:after {
    background: #331f44
}
.theme-dark .guildsError-3cFMtY {
    background: #413338;
    border-color: #f04747;
    color: #fff
}
.theme-dark .guildsError-3cFMtY:hover {
    background-color: #f04747
}
.theme-dark .guildsAdd-21_IdK {
    background: #221035;
    border-color: #4a0f49;
    color: #4a0f49
}
.theme-dark .guildsAdd-21_IdK:hover {
    border-color: hsla(0,0%,100%,.75);
    color: hsla(0,0%,100%,.75)
}
.theme-dark .downloadAppButton-3EFlA6 {
    background-color: transparent;
    color: hsla(0,0%,100%,.3)
}
.theme-dark .downloadAppButton-3EFlA6:hover {
    color: hsla(0,0%,100%,.5)
}
.theme-dark .downloadAppButton-3EFlA6:after {
    background-color: #4b4d4f
}
.wrapper-232cHJ {
    background-clip: padding-box;
    background-color: #f04747;
    color: #fff;
}
.downloadIcon-3TWA3B {
    color: #fff
}
.theme-dark .friendsOnline-_wi_fM,.theme-light .friendsOnline-_wi_fM {
    color: hsla(0,0%,100%,.3)
}
.bar-30k2ka {
    color: #fff;
}
.unread-1xRYoj {
    background-color: rgba(88, 23, 67, 0.8);
}
.unread-1xRYoj:hover {
    background-color: rgba(88, 23, 67);
}
.unread-1xRYoj:active {
    background-color: rgba(88, 23, 67);
}
.mention-1f5kbO {
    background-color: rgba(240,71,71,.9)
}
.mention-1f5kbO:hover {
    background-color: #f04747
}
.mention-1f5kbO:active {
    background-color: #d84040
}
.icon-2aINcz {
    color: #fff;
}
.icon-2doZ3q {
    background-position: 50%;
    background-repeat: no-reapeat;
}
.theme-light .menu-Sp6bN1 {
    background: #fff;
}
.theme-light .item-1GzJrl {
    color: #99aab5
}
.theme-light .item-1GzJrl:hover {
    background-color: #f9f9f9;
    color: #737f8d;
}
.theme-light .item-1GzJrl:hover.invite-271nFU {
    color: #a02f7b
}
.theme-light .item-1GzJrl.invite-271nFU {
    color: #3a2648
}
.theme-light .item-1GzJrl.leave-1DRJfn {
    color: #f04747
}
.theme-light .separator-2zcjq8 {
    border-bottom-color: #f5f5f5
}
.theme-light .alt-3btY0e .helper-2c73HK {
    color: rgba(153,170,181,.8)
}
.theme-dark .menu-Sp6bN1 {
    background: #581743;
}
.theme-dark .item-1GzJrl {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .item-1GzJrl:hover {
    background-color: #500d3e;
    color: #fff;
}
.theme-dark .item-1GzJrl:hover.invite-271nFU {
    color: #a02f7b
}
.theme-dark .item-1GzJrl.invite-271nFU {
    color: #3a2648
}
.theme-dark .item-1GzJrl.leave-1DRJfn {
    color: #f04747
}
.theme-dark .separator-2zcjq8 {
    border-bottom-color: hsla(0,0%,96.1%,.08)
}
.theme-dark .alt-3btY0e .helper-2c73HK {
    color: rgba(153,170,181,.8)
}
.header-2o-2hj {
    color: #fff;
}
.header-2o-2hj:hover {
    background-color: rgba(0,0,0,.1)
}
.popout-open .header-2o-2hj {
    background-color: rgba(0,0,0,.1)
}
.containerDragAfter-1F4fgZ:after,.containerDragBefore-31UGCO:before {
    background-color: #43b581;
}
.containerUserOver-1U5YnL:after {
    background-color: rgba(67,181,129,.1);
}
.actionIcon-2Hi9ZG {
    color: #fff;
}
.message-15tBk4 strong {
    background-color: rgba(114,137,218,.1);
    color: #3a2648
}
.wrapper-2NJDcI {
    background-color: rgba(57, 37, 74, 0.6);
    color: #9e9e9e;
}
.userHovered-2_fT4Z:active {
    background-color: rgb(57, 37, 74, 0.3);
}
.avatarDefault-35WC3R,.avatarSpeaking-1wJCNq {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
.nameDefault-2s3kbY {
    color: #9e9e9e
}
.nameHovered-21k1eo,.nameSpeaking-3UhoEZ {
    color: #f6f6f7
}
.priority-1tfmlB {
    background-color: #9e9e9e;
}
.prioritySpeaking-3pMeFb {
    background-color: #43b581
}
.iconCollapsed-3hFp_8,.iconDefault-3Gr8d2,.nameCollapsed-34uFWo,.nameDefault-2DI02H {
    color: #9e9e9e;
}
.iconMuted-1HVBGH,.nameMuted-1MCOt4 {
    color: #3f225a
}
.iconHovered-2L3-fB,.iconHoveredCollapsed-3caIIZ,.nameHovered-1gxhWH,.nameHoveredCollapsed-2orEWB {
    color: #b9bbbe
}
.iconUnread-2eGkvX,.nameUnread-njOjIS {
    color: #dcddde
}
.containerDragAfter-3TEhpe:before,.containerDragBefore-3Dzc5x:before {
    background-color: #43b581;
}
.containerUserOver-1Tcb7l:after {
    background-color: rgba(67,181,129,.1);
}
.channelNotices-41mJbj .channelNotice-1-XFjC.guildMFAWarning-3GEzs8 {
    background: #581743 url(/assets/916a384814e3bbd2a84e2a1b352a17c3.svg) no-repeat center 20px
}
.channelNotices-41mJbj .channelNotice-1-XFjC.invite-OjTXrW {
    background: #581743 url(/assets/bf625d222187f542b9d7179109422e2c.svg) no-repeat center 20px
}
.channelNotices-41mJbj .channelNotice-1-XFjC.quickswitcher-35bYg4 {
    background: #581743 url(/assets/8fdb69b7684b8e1ecb3fdde909daca41.svg) no-repeat center 35px;
}
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R {
    background: url(/assets/eb69ec9fdd30653a3ade1ab501a7cd3d.svg);
}
.channelNotices-41mJbj .channelNotice-1-XFjC .message-3SOT5P {
    color: hsla(0,0%,100%,.6);
}
.channelNotices-41mJbj .channelNotice-1-XFjC .message-3SOT5P .btn-11C5_u {
    background-color: rgba(57, 37, 74, 0.6);
    color: #fff;
}
.channelNotices-41mJbj .channelNotice-1-XFjC .message-3SOT5P .btn-11C5_u:active {
    background-color: #313339
}
.container-PNkimc {
    background-color: #331f44;
}
.button-3i182Z {
    background-color: transparent;
}
.buttonContents-7fe2l0 {
    background: transparent;
    color: #fff;
}
.buttonInner-1stGzH {
    background-color: #221035;
}
.button-3i182Z:active .buttonInner-1stGzH {
    background-color: rgba(57, 37, 74, 0.6)
}
@-webkit-keyframes RotateGradient-BBKm-Y {
    0% {
    }
    }
@keyframes RotateGradient-BBKm-Y {
    0% {
    }
    }
.notice-RSKmnp {
    background-color: #221035;
    color: #fff;
}
.gameBackground-3YC6EB {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.gameIcon-2gaRLz {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.theme-dark .body-3AvtFJ {
    color: #dcddde
}
.theme-dark .errorLabel-7OAe-A {
    color: #b9bbbe
}
.theme-dark .errorDetails-qKU8eS {
    background: #331f44;
    border-color: rgba(32,34,37,.3);
    color: #fff
}
.theme-dark .closeLink-2MRAUp {
    color: #fff
}
.theme-light .body-3AvtFJ {
    color: #3f225a
}
.theme-light .errorLabel-7OAe-A {
    color: #9e9e9e
}
.theme-light .errorDetails-qKU8eS {
    background: #f8f9f9;
    border-color: rgba(227,229,232,.6);
    color: #747f8d
}
.theme-light .closeLink-2MRAUp {
    color: #3a2648
}
.noticeDefault-362Ko2 {
    background-color: #f26522;
    color: #fff
}
.noticeDefault-362Ko2 .button-1MICoQ:hover {
    color: #f26522
}
.noticePremium-12Zvj9 {
    background-color: #221035;
    color: #fff
}
.noticePremium-12Zvj9 .button-1MICoQ:hover {
    color: #221035
}
.noticeInfo-3_iTE1 {
    background-color: #4a90e2;
    color: #fff
}
.noticeInfo-3_iTE1 .button-1MICoQ:hover {
    color: #4a90e2
}
.noticeSuccess-3Y62ob {
    background-color: #43b581;
    color: #fff
}
.noticeSuccess-3Y62ob .button-1MICoQ:hover {
    color: #43b581
}
.noticeDanger-7u-yT9 {
    background-color: #f04747;
    color: #fff
}
.noticeDanger-7u-yT9 .button-1MICoQ:hover {
    color: #f04747
}
.noticeStreamerMode-2TSQpg {
    background-color: #593695;
    color: #fff
}
.noticeStreamerMode-2TSQpg .button-1MICoQ:hover {
    color: #593695
}
.noticeFacebook-3equ5g {
    background-color: #355089;
    color: #fff
}
.noticeFacebook-3equ5g .button-1MICoQ:hover {
    color: #355089
}
.noticeSpotify-27dhr0 {
    background-color: #1db954;
    color: #fff
}
.noticeSpotify-27dhr0 .button-1MICoQ:hover {
    color: #1db954
}
.noticeBrand-3nQBC_ {
    background-color: #3a2648;
    color: #fff
}
.noticeBrand-3nQBC_ .button-1MICoQ:hover {
    color: #3a2648
}
.dismiss-SCAH9H {
    background: url(/assets/7731c77d99babca1a8faec204d98c380.svg) no-repeat;
    background-position: 50% 55%;
    background-size: 10px 10px;
}
.button-1MICoQ {
    background-color: transparent;
    color: #fff;
}
.button-1MICoQ:hover {
    background: #fff;
    border-color: #fff
}
.textLink-27KAGV {
    color: #fff;
}
.premiumLogo-30dge3 {
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-dark .subHeader-3TFIST {
    color: #b9bbbe
}
.theme-light .subHeader-3TFIST {
    color: #9e9e9e
}
.phoneField-38N1bJ .plusSign-15Cgdh {
    color: #9e9e9e;
}
.theme-light .phoneField-38N1bJ {
    background-color: #fff
}
.theme-light .phoneField-38N1bJ .countryButton-3xq3Ts {
    background-color: #f6f6f7
}
.theme-light .phoneField-38N1bJ .countryButton-3xq3Ts:hover {
    background-color: #ddddde
}
.theme-light .phoneField-38N1bJ .countryCode-2TeNMX {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .phoneField-38N1bJ .inputField-aNPXsv {
    background-color: #fff;
    color: #3f225a
}
.theme-light .phoneFieldPopout-h7c9mt .countryName-3dA1Xv {
    color: #9e9e9e
}
.theme-light .phoneFieldPopout-h7c9mt .countryCode-2TeNMX {
    color: #3f225a
}
.theme-dark .phoneField-38N1bJ {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .phoneField-38N1bJ .countryButton-3xq3Ts {
    background-color: #3f225a
}
.theme-dark .phoneField-38N1bJ .countryButton-3xq3Ts:hover {
    background-color: #474c53
}
.theme-dark .phoneField-38N1bJ .countryCode-2TeNMX {
    color: #f6f6f7
}
.theme-dark .phoneField-38N1bJ .inputField-aNPXsv {
    background-color: rgba(57, 37, 74, 0.6);
    color: #f6f6f7
}
.theme-dark .phoneFieldPopout-h7c9mt .countryName-3dA1Xv {
    color: #b9bbbe
}
.theme-dark .phoneFieldPopout-h7c9mt .countryCode-2TeNMX {
    color: #f6f6f7
}
.theme-light .input-3yHnCz {
    background-color: #e3e5e8;
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark .input-3yHnCz {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-light .phoneVerificationModal-OzcDc3 .title-3qNdae {
    color: #3f225a
}
.theme-light .phoneVerificationModal-OzcDc3 .description-3JBgvQ {
    color: #9e9e9e
}
.theme-light .phoneVerificationModal-OzcDc3 .description-3JBgvQ.error-1E-Ycl {
    color: #f04747
}
.theme-dark .phoneVerificationModal-OzcDc3 .title-3qNdae {
    color: #f6f6f7
}
.theme-dark .phoneVerificationModal-OzcDc3 .description-3JBgvQ {
    color: #9e9e9e
}
.theme-dark .phoneVerificationModal-OzcDc3 .description-3JBgvQ.error-1E-Ycl {
    color: #f04747
}
.theme-dark .sectionBody-DUrZPU,.theme-dark .subHeader-3FXnUc {
    color: #b9bbbe
}
.theme-light .sectionBody-DUrZPU,.theme-light .subHeader-3FXnUc {
    color: #9e9e9e
}
.userSettingsAccount-2eMFVR .danger-16OpjC {
    border-color: #f04747;
}
.userSettingsAccount-2eMFVR .warning--Ek9es {
    border-color: #faa61a;
}
.userSettingsAccount-2eMFVR .avatar-uploader-inner {
    background-size: 100% 100%;
}
@media (max-width: 840px) {
    .userSettingsSecurityImage-21pI_Q {
    }
}
.userSettingsSecurity-3IYeMF .isEnabled-24g9qA {
    color: #43b581
}
.questionMark-CWEQZn .icon-3a_Jgd {
    color: #f6f6f7;
}
.theme-light .userSettingsAccount-2eMFVR .viewBody-2Qz-jg,.theme-light .userSettingsSecurity-3IYeMF .codeCheckbox-1T0TTy {
    color: #3f225a
}
.theme-light .questionMark-CWEQZn {
    background-color: #3a2648
}
.theme-light .questionMark-CWEQZn:hover {
    background-color: #8ea1e1
}
.theme-light .questionMark-CWEQZn:hover .icon-3a_Jgd {
    color: #f6f6f7
}
.theme-light .multiInputLast-1aQ3YA:before {
    border-right-color: #9e9e9e
}
.theme-dark .userSettingsAccount-2eMFVR .viewBody-2Qz-jg {
    color: #b9bbbe
}
.theme-dark .userSettingsSecurity-3IYeMF .codeCheckbox-1T0TTy {
    color: #dcddde
}
.theme-dark .questionMark-CWEQZn {
    background-color: #3a2648
}
.theme-dark .questionMark-CWEQZn:hover {
    background-color: #8ea1e1
}
.theme-dark .multiInputLast-1aQ3YA:before {
    border-right-color: #fff
}
.theme-dark .codebox-1FquOa,.theme-light .codebox-1FquOa {
    background: none;
}
.connectionHeader-2MDqhu {
    background: rgba(0,0,0,.1);
}
.connectionHeader-2MDqhu .connectionAccountValue-3VdBGs {
    color: #fff;
}
.connectionOptionsWrapper-3KIj1Z .connectionOptionSwitch-3KNn-E h3 {
    color: #fff;
}
.integrationsWrapper-VkM_zO a {
    color: #fff;
}
.integration-3kMeY4 {
    background: rgba(0,0,0,.1);
}
.integrationInner-3SUFBs .channelLink-2TxEu3 {
    color: hsla(0,0%,100%,.3);
}
.integrationInner-3SUFBs .integrationName-2tSCoY {
    color: #fff
}
.warning-1XxEC9 {
    color: #faa61a
}
.connectionDelete-2Odoln {
    color: transparent;
}
.connectionDelete-2Odoln:after,.connectionDelete-2Odoln:before {
    background-color: #fff;
}
.theme-light .accountBtnInner-sj5jLs {
    background-color: #fff;
    border-color: #dcddde
}
.theme-light .accountBtnInner-sj5jLs:hover {
    background-color: #fff;
    border-color: #9e9e9e
}
.theme-dark .accountBtnInner-sj5jLs {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: #221035
}
.theme-dark .accountBtnInner-sj5jLs:hover {
    background-color: #3f225a;
    border-color: #040405
}
.theme-light .fontScaleLarge-3xtq7i,.theme-light .fontScaleSmall-368quy {
    color: #3f225a
}
.theme-dark .fontScaleLarge-3xtq7i,.theme-dark .fontScaleSmall-368quy {
    color: #f6f6f7
}
.container-CpszHS:not(.disabled-29eJ21):hover {
    border-color: rgba(240,71,71,.3)
}
.container-CpszHS.recording-1H2dS7 {
    border-color: rgba(240,71,71,.6);
    color: #f04747
}
.container-CpszHS.recording-1H2dS7 .button-34kXw5 {
    background-color: rgba(240,71,71,.1);
    color: #f04747
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i {
    color: #f04747
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i::-webkit-input-placeholder {
    color: transparent
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i:-ms-input-placeholder {
    color: transparent
}
.container-CpszHS.recording-1H2dS7 .input-1G2o7i::placeholder {
    color: transparent
}
@-webkit-keyframes shadowPulse-2kjgqQ {
    0% {
    }
    }
@keyframes shadowPulse-2kjgqQ {
    0% {
    }
    }
.ghostPill-2-KUPM {
    background-color: rgba(250,166,26,.1);
    color: #faa61a;
}
@media (max-width: 900px) {
    .container-1-STTv .noticeIcon-1phvR2 {
    }
}
.permissionCheckmark-1SeKr2 {
    background: url(/assets/119de0e66a41e5a39d17f2699b34b3f2.svg) no-repeat;
    background-size: 18px 18px;
}
.user-settings-games .game-input {
    background: none;
    color: #fff;
}
.user-settings-games .now-playing-add .link:hover {
    color: #00b0f4
}
.user-settings-games .game-verified-icon {
    background: url(/assets/c2667513479f3542e40dc0bc320f9816.svg) no-repeat;
}
.user-settings-games .game-name-input {
    background-color: transparent;
}
.user-settings-games .last-played {
    color: #9e9e9e;
}
.user-settings-games .overlay-warning-icon {
    background: url(/assets/afc17a02f2ea7406b0ee518c28414f7c.svg) no-repeat;
}
.theme-light .user-settings-games .now-playing-add {
    color: #b9bbbe
}
.theme-light .user-settings-games .game-name {
    color: #3f225a
}
.theme-light .user-settings-games .game-name-input:focus,.theme-light .user-settings-games .game-name-input:hover {
    background-color: #fff;
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-light .user-settings-games .last-played {
    color: #9e9e9e
}
.theme-light .user-settings-games .overlay-status-text {
    color: #b9bbbe
}
.theme-light .user-settings-games .divider-vertical {
    background-color: #dcddde
}
.theme-light .add-game-popout {
    background-color: #fff
}
.theme-dark .user-settings-games .now-playing-add {
    color: #9e9e9e
}
.theme-dark .user-settings-games .game-name {
    color: #f6f6f7
}
.theme-dark .user-settings-games .game-name-input:focus,.theme-dark .user-settings-games .game-name-input:hover {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgb(57, 37, 74, 0.3)
}
.theme-dark .user-settings-games .last-played,.theme-dark .user-settings-games .overlay-status-text {
    color: #9e9e9e
}
.theme-dark .user-settings-games .divider-vertical {
    background-color: #3f225a
}
.theme-dark .add-game-popout {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .add-game-popout .cancel-button {
    color: #fff
}
.theme-dark .user-settings-games .now-playing-add,.theme-light .user-settings-games .now-playing-add {
    color: #b9bbbe
}
.theme-dark .user-settings-games .now-playing,.theme-light .user-settings-games .now-playing {
    background-color: #43b581
}
.theme-dark .user-settings-games .now-playing .game-name,.theme-light .user-settings-games .now-playing .game-name {
    color: #f6fbf9
}
.theme-dark .user-settings-games .now-playing .game-name-input:focus,.theme-dark .user-settings-games .now-playing .game-name-input:hover,.theme-light .user-settings-games .now-playing .game-name-input:focus,.theme-light .user-settings-games .now-playing .game-name-input:hover {
    background-color: rgba(27,72,52,.3);
    border-color: #1b4834
}
.theme-dark .user-settings-games .now-playing .last-played,.theme-dark .user-settings-games .now-playing .overlay-status-text,.theme-light .user-settings-games .now-playing .last-played,.theme-light .user-settings-games .now-playing .overlay-status-text {
    color: #b4e1cd
}
.theme-dark .user-settings-games .not-detected,.theme-light .user-settings-games .not-detected {
    background-color: #747f8d
}
.theme-dark .user-settings-games .not-detected .game-name,.theme-light .user-settings-games .not-detected .game-name {
    color: #f8f9f9
}
.theme-dark .user-settings-games .not-detected .last-played,.theme-light .user-settings-games .not-detected .last-played {
    color: #c7ccd1
}
.theme-dark .usageInfo-2WQAwr {
    color: #b9bbbe
}
.theme-light .usageInfo-2WQAwr {
    color: #3f225a
}
.theme-dark .rowTitle-3xCiqy {
    color: #dcddde
}
.theme-dark .rowBody-10yI-R {
    color: #9e9e9e
}
.theme-dark .separator-2V0h65 {
    background: rgba(114,118,125,.3)
}
.theme-dark .defaultLocationCheckbox-26R_PI {
    color: #f6f6f7
}
.theme-dark .defaultIndicator-2X8Auf {
    background-color: #3f225a;
    color: #fff
}
.theme-light .rowTitle-3xCiqy {
    color: #3f225a
}
.theme-light .rowBody-10yI-R {
    color: rgba(114,118,125,.6)
}
.theme-light .separator-2V0h65 {
    background: rgba(114,118,125,.3)
}
.theme-light .defaultLocationCheckbox-26R_PI {
    color: #3f225a
}
.theme-light .defaultIndicator-2X8Auf {
    background-color: #3f225a;
    color: #fff
}
.hiddenLibraryApplication-2esFER:last-of-type:hover {
    border-bottom-color: transparent
}
.theme-dark .applicationName-2ulL5W {
    color: #f6f6f7
}
.theme-dark .applicationSubText-3NQxV7 {
    color: #9e9e9e
}
.theme-dark .hiddenLibraryApplication-2esFER {
    border-color: #3f225a
}
.theme-dark .hiddenLibraryApplication-2esFER:first-of-type,.theme-dark .hiddenLibraryApplication-2esFER:hover,.theme-dark .hiddenLibraryApplication-2esFER:hover+.hiddenLibraryApplication-2esFER {
    border-top-color: transparent
}
.theme-dark .hiddenLibraryApplication-2esFER:before {
    background: rgba(32,34,37,.3);
    border-color: #221035
}
.theme-dark .restoreButton-22-SIW {
    background: rgba(57, 37, 74, 0.6);
}
.theme-dark .restoreButton-22-SIW:hover {
    background: #331f44;
}
.theme-dark .restoreIcon-2YLu1X {
    color: #f04747
}
.theme-light .applicationName-2ulL5W {
    color: #3f225a
}
.theme-light .applicationSubText-3NQxV7 {
    color: rgba(114,118,125,.6)
}
.theme-light .hiddenLibraryApplication-2esFER {
    border-color: rgba(185,187,190,.3)
}
.theme-light .hiddenLibraryApplication-2esFER:first-of-type,.theme-light .hiddenLibraryApplication-2esFER:hover,.theme-light .hiddenLibraryApplication-2esFER:hover+.hiddenLibraryApplication-2esFER {
    border-top-color: transparent
}
.theme-light .hiddenLibraryApplication-2esFER:before {
    background-color: rgba(246,246,247,.6);
    border-color: #dcddde
}
.theme-light .restoreButton-22-SIW {
    background: #fff;
}
.theme-light .restoreButton-22-SIW:hover {
    background: #f6f6f7;
}
.theme-light .restoreIcon-2YLu1X {
    color: #f04747
}
.notificationsSoundIcon-3PkO7b:before {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.theme-dark .sound-2QlACh {
    color: #f6f6f7
}
.theme-light .sound-2QlACh {
    color: #3f225a
}
.userSettingsVoice-iwdUCU .sliderBar-3DezvM.speaking-2bFhO4 {
    background-color: #69c49a
}
.userSettingsVoice-iwdUCU .inputSensitivityToggle-2LKb8o.manual-36Evg9 .microphone-2rtdHw {
    background-color: transparent;
}
.userSettingsVoice-iwdUCU .inputSensitivityToggle-2LKb8o.manual-36Evg9 .microphone-2rtdHw .fill-3eUagR {
    background-color: rgba(0,0,0,.25);
}
.userSettingsVoice-iwdUCU .pttToolsMessage-3uc-Td.pttToolsWarning-7imHBv {
    color: #f04747
}
.userSettingsVoice-iwdUCU .pttToolsMessage-3uc-Td.pttToolsWarning-7imHBv a {
    color: #f04747;
}
.userSettingsVoice-iwdUCU .inputDisabledWarning-3vvc9B {
    color: #f04747
}
.userSettingsVoice-iwdUCU .inputDisabledWarning-3vvc9B a {
    color: #f04747;
}
.userSettingsVoice-iwdUCU .media-engine-video {
    background-color: #000;
}
.theme-light .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC {
    background-color: #f6f6f7;
    border-color: #dcddde
}
.theme-light .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC.dismiss-3tPbRc {
    background-color: transparent
}
.theme-dark .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC {
    background-color: #331f44;
    border-color: #221035
}
.theme-dark .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC.dismiss-3tPbRc {
    background-color: transparent
}
.wrapper-3jrx9n {
    background-color: rgba(0,0,0,.1);
}
.keyboardMode .wrapper-3jrx9n.hasFocus-2ksn_h {
    border-color: transparent;
}
.option-n0icdO {
    background-color: #9e9e9e;
}
.option-n0icdO:hover {
    background-color: #3a2648;
}
.disabled-3I9jyo {
    color: #9e9e9e;
}
.disabled-3I9jyo:hover {
    color: #f04747;
}
.selected-mKYnfr.option-n0icdO {
    background-color: #3a2648;
    border-color: #3a2648;
}
.selected-mKYnfr.disabled-3I9jyo {
    color: #f04747;
}
.theme-dark .requestNoteColor-1c4OfD,.theme-light .requestNoteColor-1c4OfD {
    color: #9e9e9e
}
.image-3bKszV {
    background: none 50%/contain no-repeat;
}
.theme-dark .header-13Xrkb {
    color: #fff
}
.theme-dark .blurb-2oPZU1 {
    color: #c7ccd1
}
.theme-dark .promo-1rGOJF {
    color: #b9bbbe
}
.theme-light .header-13Xrkb {
    color: #3f225a
}
.theme-light .blurb-2oPZU1,.theme-light .promo-1rGOJF {
    color: #9099a4
}
.icon-3j1dJB {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.theme-dark .title-PMZpEi {
    color: #fff
}
.theme-dark .description-1W0DiL {
    color: #9e9e9e
}
.theme-dark .featureBorder-7j4v58 {
    border-color: hsla(0,0%,100%,.06)
}
.theme-light .title-PMZpEi {
    color: #3f225a
}
.theme-light .description-1W0DiL {
    color: #9e9e9e
}
.theme-light .featureBorder-7j4v58 {
    border-color: #f6f6f7
}
.theme-dark .betaTag-1tngRx,.theme-light .betaTag-1tngRx {
    background-color: #fff;
    color: #3a2648
}
.premium-39U29H:before {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.theme-dark .carousel-tQMSVK:before,.theme-light .carousel-tQMSVK:before {
    background: -webkit-gradient(linear,left top,right top,from(#7d93f7),color-stop(10%,transparent),color-stop(90%,transparent),to(#7d93f7));
    background: linear-gradient(90deg,#7d93f7 0,transparent 10%,transparent 90%,#7d93f7)
}
.theme-dark .premiumHeader-3SwLEp,.theme-light .premiumHeader-3SwLEp {
    color: #fff
}
.theme-dark .premiumSubheader-15Q0Z6,.theme-light .premiumSubheader-15Q0Z6 {
    color: #f6f6f7
}
.theme-dark .carouselGameBlurb-2CViiR,.theme-light .carouselGameBlurb-2CViiR {
    color: #fff
}
.theme-dark .arrow-1QsYio,.theme-light .arrow-1QsYio {
    background-color: #f8f9fd;
    color: #3a2648
}
.theme-dark .learnMoreButton-1OUyxs,.theme-light .learnMoreButton-1OUyxs {
    background-color: #fff;
    color: #3a2648
}
.titleContainer-15sRy5 {
    color: #fff;
}
.muteContainer-dXWpxM {
    background: rgba(0,0,0,.3);
}
.mute-3sDXC3 {
    color: #fff;
}
.theme-dark .tileMedia-24cT6_ {
    background-color: #221035
}
.theme-dark .loadingContainer-138F59 {
    background-color: rgba(0,0,0,.4)
}
.theme-light .tileMedia-24cT6_ {
    background-color: #dcddde
}
.theme-light .loadingContainer-138F59 {
    background-color: hsla(0,0%,100%,.4)
}
.theme-light .spinnerItem-3RXrSb {
    background-color: #18191c
}
.theme-dark .purchaseUnitOperatingSystem-cnbJPz,.theme-light .purchaseUnitOperatingSystem-cnbJPz {
    color: #3f225a
}
.blog-2nw4E8 {
    background: -webkit-gradient(linear,left top,right top,from(#3a2648),to(#748ef5));
    background: linear-gradient(-270deg,#3a2648,#748ef5);
}
.blog-2nw4E8:before {
    background: url(/assets/1048c978e4a3db5d426b5aedbc37d75c.jpg);
    background-size: cover;
}
.theme-dark .mediaDescription-31GsyQ {
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(45%,rgba(32,34,37,.75)),to(#221035));
    background: linear-gradient(180deg,transparent,rgba(32,34,37,.75) 45%,#221035)
}
.theme-dark .mediaFade-4Pqtcc {
    background: -webkit-gradient(linear,left top,left bottom,color-stop(90%,transparent),to(#221035));
    background: linear-gradient(180deg,transparent 90%,#221035);
}
.theme-dark .description-1eVELi {
    color: #fff
}
.theme-dark .tagline-LsAYEH {
    color: #b9bbbe
}
.theme-dark .blog-2nw4E8,.theme-dark .freeWithNitro-Ya7UUr,.theme-dark .inLibrary-2-7ptY {
    color: #fff
}
.theme-light .mediaDescription-31GsyQ {
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(45%,rgba(79,84,92,.7)),to(#3f225a));
    background: linear-gradient(180deg,transparent,rgba(79,84,92,.7) 45%,#3f225a)
}
.theme-light .mediaSplashContainer-2t7arR {
    background: #9e9e9e
}
.theme-light .mediaFade-4Pqtcc {
    background: -webkit-gradient(linear,left top,left bottom,color-stop(90%,transparent),to(#9e9e9e));
    background: linear-gradient(180deg,transparent 90%,#9e9e9e);
}
.theme-light .description-1eVELi {
    color: #221035
}
.theme-light .tagline-LsAYEH {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .freeWithNitro-Ya7UUr,.theme-light .inLibrary-2-7ptY {
    color: #3f225a
}
.theme-light .blog-2nw4E8,.theme-light .tileMedia-2POU7V .description-1eVELi {
    color: #fff
}
.theme-light .tileMedia-2POU7V .freeWithNitro-Ya7UUr,.theme-light .tileMedia-2POU7V .inLibrary-2-7ptY,.theme-light .tileMedia-2POU7V .tagline-LsAYEH {
    color: #dcddde
}
.theme-light .tileMedia-2POU7V .osIcon-1FTRZ3 {
    color: #f6f6f7
}
.theme-dark .tile-2H4MQG {
    background-color: #221035;
}
.theme-dark .tile-2H4MQG:hover {
    background-color: #191b1d;
}
.theme-dark .emptyWumpus-3Gagum {
    background: url(/assets/131dcaaa628405e6d0ebee7708111c7a.svg)
}
.theme-dark .noMatches-2myGbP {
    color: #f6f6f7
}
.theme-dark .noMatchesDescription-1jZ4Wi {
    color: #b9bbbe
}
.theme-light .tile-2H4MQG {
    background-color: #fff;
}
.theme-light .emptyWumpus-3Gagum {
    background: url(/assets/d0320d29cdef93b8e2baf889a28d32e0.svg)
}
.theme-light .noMatches-2myGbP {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .noMatchesDescription-1jZ4Wi {
    color: #9e9e9e
}
@media (min-width: 800px) {
    .tileRegular-2ZMczj {
    }
    }
@media (min-width: 1300px) {
    .tile-2H4MQG {
    }
    }
.theme-dark .icon-1iRNyO {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .clearIcon-33XhWd:hover {
    color: #f6f6f7
}
.theme-dark .browseSearchInput-Jt8kg0 {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark .browseSearchInput-Jt8kg0::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .browseSearchInput-Jt8kg0:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .browseSearchInput-Jt8kg0::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-light .icon-1iRNyO {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .clearIcon-33XhWd:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .browseSearchInput-Jt8kg0 {
    background-color: rgba(246,246,247,.6)
}
.theme-light .browseSearchInput-Jt8kg0::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .browseSearchInput-Jt8kg0:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .browseSearchInput-Jt8kg0::placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-dark .itemDescription-1ATOQr,.theme-dark .title-36Rug1,.theme-light .title-36Rug1 {
    color: #fff
}
.theme-light .itemDescription-1ATOQr {
    color: rgba(57, 37, 74, 0.6)
}
@media (min-width: 980px) {
    .itemDescription-1ATOQr {
    }
    }
.freeWithNitro-2shAdz {
    color: #fff;
}
.theme-dark .itemDescription-1_B4j2,.theme-dark .title-RcZEhJ {
    color: #fff
}
.theme-dark .featuredGame-ia1yht {
    color: #dcddde
}
.theme-dark .applicationMedia-1PPJ39 {
    background-color: #000;
}
.theme-light .featuredGame-ia1yht,.theme-light .itemDescription-1_B4j2,.theme-light .title-RcZEhJ {
    color: #3f225a
}
.theme-light .applicationMedia-1PPJ39 {
    background-color: #000;
}
.theme-light .learnMoreButton-1VrFxX {
    border-color: rgb(57, 37, 74, 0.4);
    color: #3f225a
}
.theme-light .learnMoreButton-1VrFxX:hover {
    border-color: #3f225a
}
@media (min-width: 980px) {
    .itemDescription-1_B4j2 {
    }
    }
.itemBackground-1jfD8p {
    background-size: cover;
}
.theme-dark .overlappingBorder-1ysb12 {
    border-color: #3a2648
}
.theme-dark .itemBackground-1jfD8p {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .itemBackground-1jfD8p:before {
    background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),-webkit-gradient(linear,left top,right top,from(rgba(57, 37, 74, 0.6)),color-stop(40%,transparent),color-stop(60%,transparent),to(rgba(57, 37, 74, 0.6))),-webkit-gradient(linear,left bottom,left top,color-stop(10%,rgba(57, 37, 74, 0.6)),color-stop(70%,transparent));
    background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),linear-gradient(90deg,rgba(57, 37, 74, 0.6) 0,transparent 40%,transparent 60%,rgba(57, 37, 74, 0.6)),linear-gradient(0deg,rgba(57, 37, 74, 0.6) 10%,transparent 70%)
}
.theme-light .overlappingBorder-1ysb12 {
    border-color: #3a2648
}
.theme-light .itemBackground-1jfD8p {
    background-color: #f6f6f7
}
.theme-light .itemBackground-1jfD8p:before {
    background: radial-gradient(ellipse at top,transparent,#f6f6f7),-webkit-gradient(linear,left top,right top,from(#f6f6f7),color-stop(40%,transparent),color-stop(60%,transparent),to(#f6f6f7)),-webkit-gradient(linear,left bottom,left top,color-stop(10%,#f6f6f7),color-stop(70%,transparent));
    background: radial-gradient(ellipse at top,transparent,#f6f6f7),linear-gradient(90deg,#f6f6f7 0,transparent 40%,transparent 60%,#f6f6f7),linear-gradient(0deg,#f6f6f7 10%,transparent 70%)
}
@media (min-width: 980px) {
    .itemDescriptionContainer-1DOZz3 {
    }
    .theme-light .itemBackground-1jfD8p:before {
        background: radial-gradient(ellipse at top,transparent,#f6f6f7),-webkit-gradient(linear,left top,right top,from(#f6f6f7),color-stop(40%,transparent),color-stop(60%,transparent),to(#f6f6f7)),-webkit-gradient(linear,left bottom,left top,from(#f6f6f7),color-stop(25%,transparent));
        background: radial-gradient(ellipse at top,transparent,#f6f6f7),linear-gradient(90deg,#f6f6f7 0,transparent 40%,transparent 60%,#f6f6f7),linear-gradient(0deg,#f6f6f7 0,transparent 25%)
    }
    .theme-dark .itemBackground-1jfD8p:before {
        background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),-webkit-gradient(linear,left top,right top,from(rgba(57, 37, 74, 0.6)),color-stop(40%,transparent),color-stop(60%,transparent),to(rgba(57, 37, 74, 0.6))),-webkit-gradient(linear,left bottom,left top,from(rgba(57, 37, 74, 0.6)),color-stop(25%,transparent));
        background: radial-gradient(ellipse at top,transparent,rgba(57, 37, 74, 0.6)),linear-gradient(90deg,rgba(57, 37, 74, 0.6) 0,transparent 40%,transparent 60%,rgba(57, 37, 74, 0.6)),linear-gradient(0deg,rgba(57, 37, 74, 0.6) 0,transparent 25%)
    }
}
@media (min-width: 720px) {
    .paginationItemContainer-2q8AX7 {
    }
}
.nextArrow-_BbNud,.prevArrow-GBsQ1m {
    color: #9e9e9e;
}
.nextArrow-_BbNud:hover,.prevArrow-GBsQ1m:hover {
    color: #dcddde
}
@media (min-width: 980px) {
    .heroCarousel-k7LeGl {
    }
    }
@media (min-width: 720px) {
    .nextArrow-_BbNud,.prevArrow-GBsQ1m {
    }
}
.distributionApplicationsSort-2_uq5y {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
}
.theme-dark .footer-3oZnEF {
    background: url(/assets/72e1fd085e240aecf005e642e655c0f4.svg) no-repeat bottom,url(/assets/c6eb507b58cfbeb2ad068318a4ec2fee.svg) no-repeat bottom/100%
}
.theme-dark .selectedSort-2JSohJ {
    border-color: #fff
}
.theme-dark .footerMain-Z8i6ST {
    color: #b9bbbe
}
.theme-dark .footerSub-1Jedbi {
    color: #9e9e9e
}
.theme-dark .distributionApplicationsActions-3D2_kD,.theme-dark .premiumApplicationsHeader-Zmkm5e {
    border-color: #3f225a;
    color: #fff
}
.theme-dark .announcingNitro-3Ptg6m {
    border-color: #3f225a;
    color: #3a2648
}
.theme-dark .announcingNitro-3Ptg6m:hover {
    color: #fdecff
}
.theme-light .footer-3oZnEF {
    background: url(/assets/20c89307efca994238349e95669b9cc8.svg) no-repeat bottom,url(/assets/902931f7a800a99f226b57478ed88a3e.svg) no-repeat bottom/100%
}
.theme-light .selectedSort-2JSohJ {
    border-color: #000
}
.theme-light .footerMain-Z8i6ST {
    color: #3f225a
}
.theme-light .footerSub-1Jedbi {
    color: #9e9e9e
}
.theme-light .distributionApplicationsActions-3D2_kD,.theme-light .premiumApplicationsHeader-Zmkm5e {
    border-color: #3f225a;
    color: #000
}
.theme-light .announcingNitro-3Ptg6m {
    border-color: #3f225a;
    color: #3a2648
}
.theme-light .announcingNitro-3Ptg6m:hover {
    color: #fdecff
}
.premium-33BYwD:before {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.arcadeImage-1oQgXQ {
    background-size: cover;
}
.premiumHeader-29chIr,.premiumSubheader-3wX8Bc {
    color: #fff
}
.theme-dark .premiumHeader-29chIr,.theme-light .premiumHeader-29chIr {
    color: #fff
}
.theme-dark .premiumSubheader-3wX8Bc,.theme-light .premiumSubheader-3wX8Bc {
    color: #f6f6f7
}
.videoWrapper-3YdgHH {
    background-color: #000;
}
.icon-2WZ46g {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.theme-dark .featureHeader-1mvRn1 {
    color: #fff
}
.theme-light .featureHeader-1mvRn1 {
    color: #3f225a
}
.card-icon:before {
    background-size: 100% 100%;
}
.premium-settings .premium-settings-background {
    background-repeat: no-repeat;
}
.premium-settings .payment-subhead {
    color: #3f225a;
}
.premium-settings .premium-header.splash {
    background: no-repeat 100% 0;
}
.premium-settings .premium-header .premium-logo {
    background: url(/assets/8c2ee0198f752b71b9653a68de2a6983.svg) no-repeat;
}
.premium-settings .premium-header.disabled .premium-description {
    background-color: #f9f9f9;
}
.premium-settings .premium-header .intro-subtitle {
    color: #737f8d;
}
.premium-settings .premium-header .premium-free-months {
    color: #43b581;
}
.premium-settings .premium-header .disabled-message {
    color: #00aff7;
}
.premium-settings .premium-header .disabled-message:hover {
    color: #000;
    color: #009ede
}
.premium-settings .premium-header .premium-footnote {
    color: #737f8d;
}
.premium-settings .payment-source.invalid .card-description,.premium-settings .payment-source.invalid .card-description strong,.premium-settings .payment-source.invalid .card-details {
    color: #f04747!important
}
.premium-settings .payment-source.invalid .btn-stroked {
    border-color: #f04747;
    color: #f04747!important
}
.premium-settings .payment-source.invalid .btn-stroked:hover {
    background-color: rgba(240,71,71,.1)
}
.premium-settings .subscription {
    background: url(/assets/5400d116a897ce9fe428bd6e4a651356.svg);
    color: #fff;
}
.premium-settings .subscription.active {
    background: url(/assets/6920e2fda70c33c31f54b42f30b4aa96.svg)
}
.premium-settings .subscription.past-due {
    background: url(/assets/a65d13e614f02aa710776c3c1ccb5723.svg)
}
.premium-settings .subscription:before {
    background-size: 100% 100%;
}
.premium-settings .subscription .premium-details .premium-title {
    background: url(/assets/9328a2df4b542ac8725b57010a52f73b.svg) no-repeat 0 0;
}
.premium-settings .billing-history-list li .refunded-amount {
    color: #43b581
}
.premium-settings .billing-history-list li .billing-label {
    background-color: #43b581;
    color: #fff;
}
.premium-settings .billing-history-list li.refunded .amount {
    color: #43b581
}
.premium-settings .billing-history-list li.failed .amount,.premium-settings .billing-history-list li.reversed .amount {
    color: #f04747
}
.premium-settings .billing-history-list li.failed .billing-label,.premium-settings .billing-history-list li.reversed .billing-label {
    background-color: #f04747
}
.theme-light .premium-settings .card-description {
    color: #b9bbbe
}
.theme-light .premium-settings .card-description strong {
    color: #040405
}
.theme-light .premium-settings .premium-header.splash {
    border-bottom-color: #e1e9f4
}
.theme-dark .premium-settings .card-description {
    color: #b9bbbe
}
.theme-dark .premium-settings .card-description strong {
    color: #fff
}
.theme-dark .premium-settings .premium-header.splash {
    border-bottom-color: #282b32
}
@media (max-width: 950px) {
    .premium-settings .premium-splash-wumpus {
    }
}
.theme-light .description-HxwDO4,.theme-light .descriptionWrapper-1YBY_J {
    color: #9e9e9e
}
.theme-light .defaultIndicator-G3c16x {
    background-color: #3f225a;
    color: #fff
}
.theme-light .premiumIndicator-1XvbfM {
    background-color: #3a2648;
    color: #fff
}
.theme-dark .description-HxwDO4 {
    color: #dcddde
}
.theme-dark .descriptionWrapper-1YBY_J {
    color: #9e9e9e
}
.theme-dark .defaultIndicator-G3c16x {
    background-color: #3f225a;
    color: #fff
}
.theme-dark .premiumIndicator-1XvbfM {
    background-color: #3a2648;
    color: #fff
}
.theme-light .sectionHeader-1068cF {
    color: #9e9e9e
}
.theme-light .subText-1Lf-cY {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .sectionHeader-1068cF {
    color: #b9bbbe
}
.theme-dark .subText-1Lf-cY {
    color: hsla(0,0%,100%,.3)
}
.theme-light .divider-3WKGWk {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .divider-3WKGWk {
    border-color: #331f44
}
.theme-dark .subText-2Zhkkh,.theme-light .subText-2Zhkkh {
    color: #9e9e9e
}
.theme-light .pageIndicator-1gAbyA {
    border-color: #3f225a;
    color: #3f225a
}
.theme-light .pageButtonNext-V2kUq0,.theme-light .pageButtonPrev-1Y-47D {
    border-color: #9e9e9e
}
.theme-light .pageButtonNext-V2kUq0:hover,.theme-light .pageButtonPrev-1Y-47D:hover {
    border-color: rgba(57, 37, 74, 0.6);
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .disabled-BrLY9Y:hover {
    border-color: #9e9e9e;
    color: #9e9e9e
}
.theme-dark .paginator-2CA79G {
    color: #9e9e9e
}
.theme-dark .pageIndicator-1gAbyA {
    border-color: #3f225a;
    color: #dcddde
}
.theme-dark .pageButtonNext-V2kUq0,.theme-dark .pageButtonPrev-1Y-47D {
    border-color: #3f225a
}
.theme-dark .pageButtonNext-V2kUq0:hover,.theme-dark .pageButtonPrev-1Y-47D:hover {
    border-color: #dcddde;
    color: #dcddde
}
.theme-dark .disabled-BrLY9Y:hover {
    border-color: #3f225a;
    color: #9e9e9e
}
.statusTag-22YO6d {
    color: #fff;
}
.statusTagGreen-1YzpdX {
    background-color: #43b581
}
.statusTagRed-2Xg3v3 {
    background-color: #f04747
}
.statusTagGrey-2_qq8q {
    background-color: #747f8d
}
@media (max-width: 800px) {
    .refundCriteria-o9V-c2 {
    }
}
.theme-light .summaryInfo-2QFKUg {
    color: #3f225a
}
.theme-light .payment-xT17Mq {
    background-color: #f6f6f7
}
.theme-light .paymentHeader-3QlZQi {
    border-color: #3f225a
}
.theme-light .expandedInfo-3kfShd {
    background-color: #dcddde
}
.theme-light .paymentText-2vaF7U {
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark .summaryInfo-2QFKUg {
    color: #f6f6f7
}
.theme-dark .payment-xT17Mq {
    background-color: #331f44;
    color: #b9bbbe
}
.theme-dark .hoverablePayment-Yc6mK7:hover {
    background-color: #23262a
}
.theme-dark .paymentHeader-3QlZQi {
    border-color: #3f225a;
    color: #fff
}
.theme-dark .expandedInfo-3kfShd {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .paymentText-2vaF7U {
    color: #b9bbbe
}
.theme-light .paymentPane-3bwJ6A {
    background-color: #f6f6f7;
    color: #3f225a
}
.theme-light .paginator-166-09 {
    background: #f6f6f7;
    color: #3f225a
}
.theme-dark .paymentPane-3bwJ6A {
    background-color: #331f44;
    color: #f6f6f7
}
.theme-dark .paginator-166-09 {
    background: #331f44
}
.theme-dark .tab-1kx2RU {
    color: #9e9e9e
}
.confirmBackgroundImage-2lmx3s {
    background-position: bottom;
    background-size: cover;
}
.theme-dark .inputPrompt-3hUneE {
    color: #dcddde
}
.theme-dark .confirmTitle-1K9S8K {
    color: #fff
}
.theme-dark .confirmBlurb-2LiLkM {
    color: #b9bbbe
}
.theme-light .inputPrompt-3hUneE {
    color: #9e9e9e
}
.theme-light .confirmTitle-1K9S8K {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .confirmBlurb-2LiLkM {
    color: #9e9e9e
}
.perkIcon-2bvvgO {
    background-position: 50%;
    background-size: contain
}
.separator-PE-_y1 {
    background-color: #4f5660;
}
.theme-light .prompt-kcCNXs {
    color: #040405
}
.theme-light .selectYourAnswer-2lDJj_ {
    color: #9099a4
}
.theme-light .separator-PE-_y1 {
    background-color: #e3e5e8
}
.theme-dark .prompt-kcCNXs {
    color: #fff
}
.theme-dark .selectYourAnswer-2lDJj_ {
    color: #9099a4
}
.theme-dark .separator-PE-_y1 {
    background-color: #4f5660
}
.membershipDialog-rVL-t_:after {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
}
.membershipDialogSwitchHousesAction-2a3eDg {
    color: hsla(0,0%,100%,.7);
}
.membershipDialogSwitchHousesAction-2a3eDg:hover {
    color: #fff
}
.membershipDialogHouse1-3KhKE- {
    background-color: #9c84ef
}
.membershipDialogHouse2-35h9SY {
    background-color: #f47b67
}
.membershipDialogHouse3-15OBIQ {
    background-color: #45ddc0
}
.houseLogoWrapper-3XZ6yo {
    background: #fff;
}
.quizResultLogoWrapperHouse1-3FV1ry {
    background-color: #9c84ef
}
.quizResultLogoWrapperHouse2-3yrRO9 {
    background-color: #f47b67
}
.quizResultLogoWrapperHouse3-2oQS9n {
    background-color: #45ddc0
}
.error-2netMa {
    color: #f04747;
}
.attendeeCTA-3ZZQWt {
    color: #9e9e9e;
}
.theme-dark .introHeader-4MPach {
    color: #fff
}
.theme-dark .introBlurb-3gFgTQ {
    color: #c7ccd1
}
.theme-light .introHeader-4MPach {
    color: #3f225a
}
.theme-light .introBlurb-3gFgTQ {
    color: #9099a4
}
.container-2Thooq {
    color: #fff;
}
.theme-dark .container-2Thooq,.theme-light .container-2Thooq {
    background: rgba(32,34,37,.3)
}
.theme-dark .button-2b6hmh:hover,.theme-light .button-2b6hmh:hover {
    background-color: rgba(24,25,28,.3)
}
.theme-dark .hasBuildOverride-rIAgfT,.theme-light .hasBuildOverride-rIAgfT {
    background-color: #331f44;
}
@-webkit-keyframes placeholderPulse-Pjh1nT {
    0% {
    }
    }
@keyframes placeholderPulse-Pjh1nT {
    0% {
    }
    }
.placeholderUsername-236yYU {
    background: #9e9e9e;
}
.placeholderAvatar-uzH8f6 {
    background: #9e9e9e;
}
.status-2s6iDp {
    background-clip: padding-box;
}
.theme-light .activity-1IYsbk {
    color: rgba(88, 23, 67, 0.8)
}
.theme-light .memberOnline-1CIh-0 {
    color: #9e9e9e
}
.theme-light .memberOffline-2lN7gt {
    color: rgba(88, 23, 67, 0.8)
}
.theme-light .member-3W1lQa.popout-open .content-OzHfo4,.theme-light .member-3W1lQa.popout-open:hover .content-OzHfo4 {
    background-color: rgba(220,221,222,.6);
    color: #000
}
.theme-light .member-3W1lQa.popout-open .content-OzHfo4 .status-2s6iDp,.theme-light .member-3W1lQa.popout-open:hover .content-OzHfo4 .status-2s6iDp {
    border-color: #e6e7e8
}
.theme-light .member-3W1lQa:hover .content-OzHfo4 {
    background-color: rgba(220,221,222,.3);
    color: #000
}
.theme-light .member-3W1lQa:hover .content-OzHfo4 .status-2s6iDp {
    border-color: #eeefef
}
.theme-dark .activity-1IYsbk {
    color: rgba(185,187,190,.6)
}
.theme-dark .memberOnline-1CIh-0 {
    color: #b9bbbe
}
.theme-dark .memberOffline-2lN7gt {
    color: rgba(185,187,190,.9)
}
.theme-dark .member-3W1lQa.popout-open .content-OzHfo4,.theme-dark .member-3W1lQa.popout-open:hover .content-OzHfo4 {
    background-color: rgb(57, 37, 74, 0.4);
    color: #fff
}
.theme-dark .member-3W1lQa.popout-open .content-OzHfo4 .status-2s6iDp,.theme-dark .member-3W1lQa.popout-open:hover .content-OzHfo4 .status-2s6iDp {
    border-color: #42464d
}
.theme-dark .member-3W1lQa:hover .content-OzHfo4 {
    background-color: rgba(57, 37, 74, 0.6);
    color: #fff
}
.theme-dark .member-3W1lQa:hover .content-OzHfo4 .status-2s6iDp {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .status-2s6iDp {
    border-color: #331f44
}
.members-1998pB {
    background-color: #f3f3f3;
}
.membersGroup-v9BXpm {
    color: #99aab5;
}
@-webkit-keyframes placeholderPulse-2rZrru {
    0% {
    }
    }
@keyframes placeholderPulse-2rZrru {
    0% {
    }
    }
.memberGroupsPlaceholder-3mwPub {
    background: #9e9e9e;
}
.theme-dark .members-1998pB {
    background-color: #331f44
}
.theme-dark .membersGroup-v9BXpm {
    color: hsla(0,0%,100%,.4)
}
.base-34jWEe {
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat,no-repeat;
    background-size: 192px 80px,216px 64px;
}
.chat .base-34jWEe h1 {
    color: #949494;
}
.base-34jWEe h1 {
    color: #949494;
}
.theme-light .base-34jWEe {
    border-color: #eceeef
}
.theme-dark .base-34jWEe {
    border-color: hsla(0,0%,100%,.02)
}
.app .welcomeMessage-3_Mcht h1 {
    color: #3a2648;
}
.welcomeMessage-3_Mcht p {
    color: #87909c;
}
.welcomeMessage-3_Mcht a {
    color: #00b0f4;
}
.exclamation-1mi7Vi {
    background: url(/assets/7616be62f9b90270b5a2e1fe9d2ece4f.svg) 50% no-repeat
}
.share-1EA-d2 {
    background: url(/assets/07778297eb1e1e3d9bd3cd302920d5fb.svg) 50% no-repeat
}
.apps-22T4uu {
    background: url(/assets/db7900a7a191ecf1949f15dd20dce2b2.svg) 50% no-repeat
}
.mobile-3_KEmF {
    background: url(/assets/83d501f2b7dd2987302ce29b321f4494.svg) 50% no-repeat
}
.twitter-1TN3uJ {
    background: url(/assets/326d79eb53886c88437e99a3754b1cd0.svg) 50% no-repeat
}
.theme-dark .welcomeMessage-3_Mcht a {
    color: #0096cf
}
.jumpToPresentBar-9P20AM {
    color: hsla(0,0%,100%,.6);
}
.jumpToPresentBar-9P20AM .spinner .spinner-item {
    background-color: #fff
}
.jumpToPresentBar-9P20AM button {
    background: none;
    color: #fff;
}
.jumpToPresentBar-9P20AM button:last-child {
    color: hsla(0,0%,100%,.6);
}
.jumpToPresentBar-9P20AM button:last-child:hover {
    color: #fff
}
.newMessagesBar-mujexs {
    background-color: #391b52;
    color: #fff;
}
.newMessagesBar-mujexs button {
    background: none;
    color: #fff;
}
.newMessagesBar-mujexs button:last-child {
    color: #fdecff;
}
.newMessagesBar-mujexs button:last-child:hover {
    color: #fff
}
.newMessagesBar-mujexs:hover {
    background-color: #3a2648
}
.hasMore-3e72_v button {
    color: #fff;
}
.theme-light .messageGroupBlocked-3wrQQX {
    background: #fcfcfc;
    color: #99aab5
}
.theme-light .messageGroupBlocked-3wrQQX.revealed-1_RKsf {
    background: #fafafa;
}
.theme-light .messageGroupBlocked-3wrQQX:hover {
    background: #f2f2f2
}
.theme-light .hasMore-3e72_v button {
    background: #fcfcfc
}
.theme-dark .jumpToPresentBar-9P20AM {
    background-color: #391b52;
}
.theme-dark .jumpToPresentBar-9P20AM:hover {
    background-color: #3a2648;
}
.theme-light .divider-3gKybi,.theme-light .divider-3gKybi:before {
    background-color: #fff
}
.theme-light .divider-3gKybi>span {
    background-color: #fff;
    color: #99aab5
}
.theme-light .divider-3gKybi>div {
    background: #eceeef
}
.theme-light .divider-3gKybi.dividerRed-MKoLlr>span {
    color: #f04747;
}
.theme-light .divider-3gKybi.dividerRed-MKoLlr>div {
    background: #f04747;
}
.theme-dark .messageGroupBlocked-3wrQQX {
    background: transparent;
    border-color: #331f44;
}
.theme-dark .messageGroupBlocked-3wrQQX.revealed-1_RKsf {
    background: rgb(57, 37, 74, 0.4);
    border-color: #331f44;
}
.theme-dark .messageGroupBlocked-3wrQQX .messageGroupBlockedBtn-1PBBh- {
    background: rgb(57, 37, 74, 0.4);
    color: #d2aecf;
}
.theme-dark .messageGroupBlocked-3wrQQX .messageGroupBlockedBtn-1PBBh-:hover {
    background: rgba(112, 33, 79, 0.6);
}
.theme-dark .hasMore-3e72_v button {
    background: rgba(57, 37, 74, 0.6);
    border: 1px solid #391b52;
}
.theme-dark .divider-3gKybi:before, .theme-dark .divider-3gKybi span {
    background-color: transparent;
}
.theme-dark .divider-3gKybi:not(.red-1YQ4s7) span {
    color: rgba(210, 174, 207, 0.5)
}
.theme-dark .divider-3gKybi:not(.red-1YQ4s7) div {
    background: #906b8e
}
.theme-dark .divider-3gKybi.dividerRed-MKoLlr>span {
    color: rgba(240,71,71,.8)
}
.theme-dark .divider-3gKybi.dividerRed-MKoLlr>div {
    background: #f04747;
}
.highlight {
    background: rgba(250,166,26,.3)
}
.theme-dark .messagesWrapper-3lZDfY {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar,.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar:after,.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb {
    background-color: #331f44
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .track {
    background-color: transparent
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap ::-webkit-scrollbar-thumb {
    background-color: rgb(57, 37, 74, 0.4);
    border-color: transparent;
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap ::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-color: transparent;
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar,.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar:after {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: #221035
}
.theme-dark .messagesWrapper-3lZDfY .scroller-wrap.polyfill .scrollbar .track {
    background-color: #331f44;
    border-color: rgba(57, 37, 74, 0.6)
}
.activityInviteEducationArrow-3DEpKU {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 12px 10px;
}
.theme-dark .typing-2GQL18 .ellipsis-19qdx6 div {
    background-color: hsla(0,0%,100%,.8)
}
.theme-dark .typing-2GQL18 span {
    color: hsla(0,0%,100%,.8)
}
.theme-light .typing-2GQL18 {
    background-color: hsla(0,0%,100%,.8);
    color: #737f8d
}
.theme-dark .typing-2GQL18 {
    background:transparent !important;
}
.theme-dark .countdown-1t3uBk {
    color: #fff
}
.theme-dark .number-3ceIrJ {
    background: rgba(57, 37, 74, 0.6);
    border-color: hsla(0,0%,100%,.04);
}
.theme-light .countdown-1t3uBk {
    color: #737f8d
}
.theme-light .number-3ceIrJ {
    background: #fff;
    border-color: hsla(0,0%,100%,.04);
}
.wrapper-39oAo3 {
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat,no-repeat;
    background-size: 187px 39px;
}
.theme-dark .wrapper-39oAo3 {
    color: hsla(0,0%,100%,.3)
}
.theme-light .wrapper-39oAo3 {
    color: #99aab5
}
.title-3qD0b- .input-autosize-input,.titleCall-_b9o8P .input-autosize-input {
    background: transparent;
}
.title-3qD0b- .input-autosize-input:focus,.titleCall-_b9o8P .input-autosize-input:focus {
    color: #3f225a
}
.titleText-3X-zRE {
    color: #3f225a;
}
.channelIcon-MsmKOO {
    color: #8a8e94;
}
.aka-1mqp34 {
    background: #9e9e9e;
    color: #fff;
}
.theme-light .chat-3bRxxu {
    background-color: #fff;
    color: #fff
}
.theme-light .chat-3bRxxu ::-webkit-input-placeholder {
    color: #dadddf
}
.theme-light .content-yTz4x3,.theme-light .noChannel-Z1DQK7 {
    background: #fff
}
.theme-light .title-3qD0b- {
    background: #fff;
}
.theme-light .channelName-3stJzi,.theme-light .groupDM-3qU0Ks .channelName-3stJzi,.theme-light .groupDMManaged-1GyXtq .channelName-3stJzi,.theme-light .input-autosize-input {
    color: #3f225a
}
.theme-light .input-autosize-input:focus {
    background-color: #f6f6f7
}
.theme-light .topic-2QX7LI {
    color: rgba(114,118,125,.6)
}
.theme-light .topic-2QX7LI:before {
    background-color: rgba(114,118,125,.3)
}
.theme-dark .chat-3bRxxu,.theme-dark .chat-3bRxxu form,.theme-dark .content-yTz4x3 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .noChannel-Z1DQK7 {
    background: rgba(57, 37, 74, 0.6)
}
.theme-dark .title-3qD0b- {
    background: rgba(57, 37, 74, 0.6);
}
.theme-dark .channelName-3stJzi,.theme-dark .groupDM-3qU0Ks .channelName-3stJzi,.theme-dark .groupDMManaged-1GyXtq .channelName-3stJzi,.theme-dark .input-autosize-input,.theme-dark .input-autosize-input:focus {
    color: #fff
}
.theme-dark .input-autosize-input:focus {
    background-color: #331f44
}
.theme-dark .topic-2QX7LI {
    color: rgba(246,246,247,.6)
}
.theme-dark .topic-2QX7LI a {
    color: #0096cf
}
.theme-dark .topic-2QX7LI:before {
    background-color: rgba(246,246,247,.1)
}
.subtitleWarning-FYRaDh {
    color: #f04747!important
}
.errorStateIcon-p5L_DQ {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}
.theme-dark .subtitle-2iWJ5y {
    color: #b9bbbe
}
.theme-dark .errorState-3QMR6P {
    color: #9e9e9e
}
.theme-dark .friend-2PO6ke {
    color: #b9bbbe
}
.theme-dark .friend-2PO6ke .status {
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .friendSelected--wQP3f {
    background-color: rgb(57, 37, 74, 0.3);
    color: #fff
}
.theme-dark .friendSelected--wQP3f .status {
    border-color: #3e4147
}
.theme-dark .footerText-1PbhKm {
    color: #b9bbbe
}
.theme-light .subtitle-2iWJ5y {
    color: #9e9e9e
}
.theme-light .errorState-3QMR6P {
    color: rgba(185,187,190,.9)
}
.theme-light .friend-2PO6ke {
    color: #9e9e9e
}
.theme-light .friend-2PO6ke .status {
    border-color: #fff
}
.theme-light .friendSelected--wQP3f {
    background-color: rgba(220,221,222,.3);
    color: #000
}
.theme-light .friendSelected--wQP3f .status {
    border-color: #f4f5f5
}
.theme-light .footerText-1PbhKm {
    color: #9e9e9e
}
.video-1FfuMD {
    background-color: #221035;
    background-position: 50%;
    background-size: 100%;
}
.theme-light .video-1FfuMD.minimum-1pRSEN {
    background-color: #dcddde
}
.video-1kutKI {
    background-color: #000;
}
.spinner-2UBgbJ {
    background-color: rgba(0,0,0,.8);
}
.backgroundBlur-dazcBE {
    background-position: 50%;
    background-size: 114%;
}
.backgroundBlurOverlay-1JS5RF {
    background-color: rgba(0,0,0,.6)
}
@-webkit-keyframes outgoing-call-pulse-MDA9-S {
    0% {
    }
    }
@keyframes outgoing-call-pulse-MDA9-S {
    0% {
    }
    }
.callAvatar-v-u4BM {
    background-clip: padding-box;
    background-color: none;
    background-size: 100%;
}
.callAvatar-v-u4BM .callAvatarStatus-3y6S04 {
    background-clip: padding-box;
}
.callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
    background-color: #f04747;
}
.callAvatar-v-u4BM.video-3GgX2M {
    background-position: 50%;
}
.callAvatar-v-u4BM.video-3GgX2M .callAvatarStatus-3y6S04 {
    background-color: rgba(0,0,0,.3);
}
.callAvatarOverlay-33Xeat {
    background-color: rgba(0,0,0,.8);
}
.callAvatarOverlay-33Xeat .poorConnectionIcon-1D_YMH {
    background-color: #f04747;
}
.theme-light .callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
    border-color: #dcddde
}
.theme-light .callAvatarWrapper-TICyxO .ripple-16ZT2p {
    background-color: #3f225a
}
.theme-dark .callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
    border-color: #221035
}
.theme-dark .callAvatarWrapper-TICyxO .ripple-16ZT2p {
    background-color: #fff
}
.base-18fc34 {
    background-position: 0;
}
.sparkle-1TdrlZ {
    background-position: -731px;
    background-size: 774px 43px;
}
.pop-B2HebP {
    background-position: -816px;
    background-size: 840px 24px;
}
.light-1RsqT- {
    background-size: 620px 20px;
}
.cross-AT1Amb,.light-1RsqT- {
    background-position: -600px
}
.cross-AT1Amb {
    background-size: 625px 25px;
}
@-webkit-keyframes sparkle-1TdrlZ {
    0% {
        background-position: 0
    }
    40% {
        background-position: -731px
    }
    to {
        background-position: -731px
    }
}
@keyframes sparkle-1TdrlZ {
    0% {
        background-position: 0
    }
    40% {
        background-position: -731px
    }
    to {
        background-position: -731px
    }
}
@-webkit-keyframes pop-B2HebP {
    0% {
        background-position: 0
    }
    40% {
        background-position: -816px
    }
    to {
        background-position: -816px
    }
}
@keyframes pop-B2HebP {
    0% {
        background-position: 0
    }
    40% {
        background-position: -816px
    }
    to {
        background-position: -816px
    }
}
@-webkit-keyframes light-1RsqT- {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
@keyframes light-1RsqT- {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
@-webkit-keyframes cross-AT1Amb {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
@keyframes cross-AT1Amb {
    0% {
        background-position: 0
    }
    40% {
        background-position: -600px
    }
    to {
        background-position: -600px
    }
}
.joinVideoCallButton-beESDO {
    background-color: #43b581;
}
.joinVideoCallButton-beESDO .buttonText-2eeTb9 {
    color: #f6f6f7;
}
.joinVideoCallButton-beESDO .underlay-3pibKJ {
    background-color: #69c49a;
}
.joinVideoCallButton-beESDO .callDivider-231Syj {
    background-color: #69c49a;
}
.wrapper-3eE7AX {
    background-color: #000;
}
.overlay-3Sc3Tv {
    background-color: rgba(0,0,0,.8);
}
.poorConnection-1aAwgU {
    background-color: #f04747;
}
.status-XPjB1X {
    background-color: rgba(0,0,0,.3);
}
.theme-light .title-Ic5R7V {
    color: #3f225a
}
.theme-light .description-2waT7u {
    color: #9e9e9e
}
.theme-light .footer-2VgWkh {
    background-color: #f6f6f7
}
.theme-dark .title-Ic5R7V {
    color: #f6f6f7
}
.theme-dark .description-2waT7u {
    color: #dcddde
}
.theme-dark .footer-2VgWkh {
    background-color: #331f44
}
.check-2by_h9 {
    background: url(/assets/6acb20d5e709b34b6a7f36ec13648666.svg);
}
.regionSelectFlag-1htPow {
    background-color: #3a2648;
    background-size: cover;
}
.theme-light .regionSelectName-c5qL8O {
    color: #9e9e9e
}
.theme-dark .regionSelectName-c5qL8O {
    color: #b9bbbe
}
.wrapper-29NfPK.fullScreen-3DKbL8 .actions-2vadYq .center-1Vp33r,.wrapper-29NfPK.fullScreen-3DKbL8 .actions-2vadYq .side-kO0bwV,.wrapper-29NfPK.noChat-2qlG4B .center-1Vp33r,.wrapper-29NfPK.noChat-2qlG4B .side-kO0bwV,.wrapper-29NfPK.normal-2GSW0u .center-1Vp33r,.wrapper-29NfPK.normal-2GSW0u .side-kO0bwV {
    background-color: rgba(0,0,0,.8);
    border-color: rgba(0,0,0,.9)
}
.videoBackgroundWrapper-2dCt49 {
    background-color: #000;
}
.theme-light .wrapper-29NfPK {
    background-color: #dcddde
}
.theme-light .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .side-kO0bwV {
    background-color: rgba(246,246,247,.3);
    border-color: rgba(246,246,247,.6)
}
.theme-light .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .center-1Vp33r {
    background-color: #f6f6f7;
    border-color: #f6f6f7
}
.theme-dark .wrapper-29NfPK {
    background-color: #221035
}
.theme-dark .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .side-kO0bwV {
    background-color: rgba(24,25,28,.3);
    border-color: #18191c
}
.theme-dark .wrapper-29NfPK.minimum-2d6zH6 .actions-2vadYq .center-1Vp33r {
    background-color: #18191c;
    border-color: #18191c
}
.search-results-wrap {
    background-color: #f1f1f1;
}
.search-results-wrap .search-result:before, .theme-dark .search-results-wrap .search-result:after {
    background-image: linear-gradient(0deg,rgba(47,49,54,0),#3c073a) !important;
}
.search-results-wrap .search-header {
    color: #737f8d;
}
.search-results-wrap .search-header a {
    color: #737f8d
}
.search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-color: #dbdde1!important
}
.search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-thumb {
    background-color: #3a2648!important;
}
.search-results-wrap .error-wrap,.search-results-wrap .spinner-wrap {
    color: #737f8d;
}
.search-results-wrap .channel-separator .channel-name {
    background-color: #f1f1f1;
    color: #3f225a;
}
.search-results-wrap .search-result .search-result-message {
    background-color: transparent;
}
.search-results-wrap .search-result .search-result-message.hit {
    background-color: #fff;
}
.search-results-wrap .search-result.expanded .search-result-message {
    background-color: transparent;
}
.search-results-wrap .search-result.expanded .search-result-message.hit {
    background-color: #fff;
}
.search-results-wrap .action-buttons {
    background-color: transparent;
}
.search-results-wrap .action-buttons .jump-button {
    background-color: #ebebeb;
    color: rgba(115,127,141,.6);
}
.search-results-wrap .action-buttons .jump-button:hover {
    color: #737f8d
}
.search-results-wrap .pagination {
    color: #737f8d;
}
.search-results-wrap .pagination .pagination-next,.search-results-wrap .pagination .pagination-previous {
    background: url(/assets/425c04911bfea22eaaed168b8ff19634.svg) 50% 50% no-repeat;
    background-position: 50%;
    background-size: 6px 12px;
}
.search-results-wrap .results-blocked {
    background-color: transparent;
    color: rgb(57, 37, 74, 0.4);
}
.search-results-wrap .results-blocked:hover {
    background-color: rgba(79,84,92,.06)
}
.search-results-wrap .empty-results-wrap {
    color: #737f8d;
}
.search-results-wrap .empty-results-wrap .error-image {
    background: url(/assets/a96ad48450382ff5df965439222d1459.svg);
}
.theme-dark .search-results-wrap {
    background-color: rgba(39, 20, 56, 0.8);
}
.theme-dark .search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-track-piece {
    background-color: #581743!important
}
.theme-dark .search-results-wrap .scroller-wrap .scroller::-webkit-scrollbar-thumb {
    background-color: #221035!important;
}
.theme-dark .search-results-wrap .search-header {
    background-color: transparent;
}
.theme-dark .search-results-wrap .search-header a {
    color: #fff
}
.theme-dark .search-results-wrap .search-header .border {
    background-color: hsla(0,0%,100%,.3)
}
.theme-dark .search-results-wrap .search-header .tab,.theme-dark .search-results-wrap .search-header .total-results {
    color: #fff
}
.theme-dark .search-results-wrap .channel-separator:before {
    border-color: hsla(0,0%,100%,.1)
}
.theme-dark .search-results-wrap .channel-separator .channel-name {
    background-color: transparent;
    color: #fff
}
.theme-dark .search-results-wrap .search-result .hit {
    border: 2px solid rgba(45, 7, 40, 0.9) !important;
    background-color: rgba(39, 20, 56, 0.8);
    box-shadow: 0 0 10px 6px #3c073a;
}
.theme-dark .search-results-wrap .search-result.expanded {
    border: 2px solid rgb(82, 15, 61);
}
.theme-dark .search-results-wrap .search-result.expanded .search-result-message {
    background-color: transparent;
}
.theme-dark .search-results-wrap .search-result.expanded .search-result-message.hit {
    background-color: rgba(57, 37, 74, 0.6);
}
.theme-dark .search-results-wrap .action-buttons .jump-button {
    background-color: #4a0f49;
    color: hsla(0,0%,100%,.6)
}
.theme-dark .search-results-wrap .action-buttons .jump-button:hover {
    color: #fff
}
.theme-dark .search-results-wrap .pagination {
    color: hsla(0,0%,100%,.6)
}
.theme-dark .search-results-wrap .results-blocked {
    border-color: #221035;
    color: hsla(0,0%,100%,.3)
}
.theme-dark .search-results-wrap .results-blocked:hover {
    background-color: rgba(32,34,37,.3)
}
.theme-dark .search-results-wrap .empty-results-wrap,.theme-dark .search-results-wrap .error-wrap {
    color: hsla(0,0%,100%,.3)
}
.content-8biNdB a {
    color: #00b0f4;
}
.theme-dark .content-8biNdB p,.theme-dark .content-8biNdB ul li {
    color: #b9bbbe
}
.theme-dark .content-8biNdB ul li:before {
    background-color: #dcddde
}
.theme-light .content-8biNdB p,.theme-light .content-8biNdB ul li {
    color: #9e9e9e
}
.theme-light .content-8biNdB ul li:before {
    background-color: #9e9e9e
}
.image-2LqJex {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.separator-2IZ9ro {
    background-color: #3f225a;
}
.actionRed-gYn8D3 {
    background-color: #a33030;
    color: #fff
}
.actionRed-gYn8D3:hover {
    background-color: #932b2b
}
.actionRed-gYn8D3:active {
    background-color: #822626
}
.theme-light .title-1VcOOr {
    color: #3f225a
}
.theme-light .description-2ydcYn {
    color: #9e9e9e
}
.theme-dark .title-1VcOOr {
    color: #fff
}
.theme-dark .description-2ydcYn {
    color: #b9bbbe
}
.wrapper-1cBijl {
    background-color: hsla(0,0%,100%,.06);
}
.wrapper-1cBijl .btn:disabled {
    background-color: #3a2648;
    color: #fff;
}
.addFriendInput-4bcerK {
    background-color: transparent;
    color: #737f8d;
}
.addFriendInput-4bcerK::-webkit-input-placeholder {
    color: #dadddf
}
.addFriendHint-3Y70FX {
    background-color: transparent;
    color: #dadddf;
}
.theme-dark .wrapper-1cBijl {
    background-color: rgba(36,39,43,.2);
    border-color: rgba(0,0,0,.3)
}
.theme-dark .wrapper-1cBijl .addFriendInput-4bcerK {
    color: #fff
}
.theme-dark .wrapper-1cBijl .addFriendInput-4bcerK::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, 0.35)
}
.theme-dark .wrapper-1cBijl .addFriendHint-3Y70FX {
    color: hsla(0, 0%, 100%, 0.35)
}
#friends {
    background-color: #fff;
}
#friends .tab-bar .tab-bar-item {
    color: #99aab5;
}
#friends .tab-bar .tab-bar-item.tab-bar-item-primary {
    background-color: #3a2648;
    color: #fff
}
#friends .tab-bar .tab-bar-item.tab-bar-item-primary .badge {
    background-color: #fff;
    color: #3a2648
}
#friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) {
    background-color: #6a7fcb
}
#friends .tab-bar .tab-bar-item .badge {
    background-color: #99aab5;
    color: #fff;
}
#friends .tab-bar .tab-bar-item.selected {
    background-color: #99aab5;
    color: #fff;
}
#friends .tab-bar .tab-bar-item.selected .badge {
    background-color: #fff;
    color: #99aab5
}
#friends .tab-bar .tab-bar-item:hover:not(.selected) {
    background-color: rgba(153,170,181,.2)
}
#friends .tab-bar-separator {
    background-color: #e9e7e7;
}
#friends .friends-table .friend-table-add-wrapper h2 {
    color: #737f8d;
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-description {
    color: rgba(153,170,181,.9);
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.error {
    color: #f04747!important
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.success {
    color: #43b581!important
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-header {
    background: -webkit-gradient(linear,left top,left bottom,color-stop(3%,#fff),to(hsla(0,0%,92.2%,.21)));
    background: linear-gradient(-180deg,#fff 3%,hsla(0,0%,92.2%,.21));
}
#friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts h3 {
    color: rgba(153,170,181,.9);
}
@media (max-width: 1220px) {
    #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts {
    }
}
#friends .friends-table .friends-table-header .friends-column {
    color: #99aab5;
}
#friends .friends-table .friends-table-header .friends-column-separator {
    background-color: #e9e7e7;
}
#friends .friends-table .friends-row .friends-suggestion-inner .friends-suggestion-info {
    color: #737f8d;
}
#friends .friends-table .friends-row .friends-suggestion-inner .friends-suggestion-info .friends-suggestion-platforms .friends-suggestion-platform-name {
    color: #737f8d;
}
#friends .friends-table .friends-row .friends-column-name {
    color: #737f8d
}
#friends .friends-table .friends-row .friends-column-status {
    color: rgba(115,127,141,.6);
}
#friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn {
    color: rgba(0,0,0,.6);
}
#friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn:hover {
    border-color: rgba(0,0,0,.6);
    color: #000
}
#friends .friends-table .friends-row .friends-column-actions .friends-action {
    background-color: #99aab5;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 24px;
}
#friends .friends-table .friends-row .friends-column-actions .friends-action:hover {
    background-color: #8a99a3
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-add:hover {
    background-color: #43b581!important
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-remove:hover {
    background-color: #f04747!important
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-accept:hover {
    background-color: #43b581!important
}
#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-cancel:hover {
    background-color: #f04747!important
}
#friends .friends-table .friends-row:hover+.friends-row {
    border-color: transparent
}
#friends .friends-table .friends-row:hover {
    background: rgba(153,170,181,.2);
    border-color: transparent;
}
@media (max-width: 1300px) {
    #friends .friends-table .friends-column-name {
    }
}
@media (max-width: 1300px) {
    #friends .friends-table .friends-column-status {
    }
}
@media (max-width: 1300px) {
    #friends .friends-table .friends-column-guilds {
    }
    }
#friends .friends-empty .empty-state-image {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
#friends .friends-empty p {
    color: rgba(0,0,0,.4);
}
.theme-dark #friends .tab-bar .tab-bar-item {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .tab-bar .tab-bar-item .badge {
    background-color: hsla(0,0%,100%,.6);
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .tab-bar .tab-bar-item.selected {
    background-color: #fff;
    color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .tab-bar .tab-bar-item.selected .badge {
    background-color: #3a2648;
    color: #fff
}
.theme-dark #friends .tab-bar .tab-bar-item:hover:not(.selected) {
    background-color: #331f44
}
.theme-dark #friends .tab-bar .tab-bar-item:hover:not(.selected) .badge {
    color: #331f44
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary {
    background-color: #3a2648;
    color: #fff
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary .badge {
    background-color: #fff;
    color: #3a2648
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) {
    background-color: #391b52
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) .badge {
    color: #391b52
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected {
    background-color: #fff;
    color: #3a2648
}
.theme-dark #friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected .badge {
    background-color: #3a2648;
    color: #fff
}
.theme-dark #friends .tab-bar .tab-bar-separator {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark #friends .friends-table .friend-table-add-wrapper h2 {
    color: #fff
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(54,57,63,.3)),to(rgba(47,49,54,.3)));
    background: linear-gradient(-180deg,rgba(54,57,63,.3),rgba(47,49,54,.3));
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts h3 {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts .connect-account-btn-inner {
    border-color: hsla(0,0%,100%,.1)
}
.theme-dark #friends .friends-table .friend-table-add-wrapper .friend-table-add-header .connect-accounts .connect-account-btn-inner:hover {
    background-color: hsla(0,0%,100%,.1);
    border-color: transparent
}
.theme-dark #friends .friends-table .friend-table-add-description {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friends-table-header .friends-column {
    color: hsla(0,0%,100%,.3)
}
.theme-dark #friends .friends-table .friends-table-header .friends-column-separator {
    background-color: hsla(0,0%,100%,.1)
}
.theme-dark #friends .friends-table .friends-row .friends-column-name {
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friends-row .friends-column-status {
    color: hsla(0,0%,100%,.4)
}
.theme-dark #friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn {
    border-color: hsla(0,0%,100%,.1);
    color: hsla(0,0%,100%,.6)
}
.theme-dark #friends .friends-table .friends-row .friends-column-guilds .more-mutual-guilds-btn:hover {
    border-color: hsla(0,0%,100%,.6);
    color: #fff
}
.theme-dark #friends .friends-table .friends-row .friends-column-actions .friends-action {
    background-color: #331f44
}
.theme-dark #friends .friends-table .friends-row .friends-column-actions .friends-action:hover {
    background-color: #3f225a
}
.theme-dark #friends .friends-table .friends-row .friends-suggestion-info,.theme-dark #friends .friends-table .friends-row .friends-suggestion-info .friends-suggestion-platform .friends-suggestion-platform-name {
    color: #fff
}
.theme-dark #friends .friends-table .friends-row:hover {
    background: rgb(57, 37, 74, 0.3);
    border-color: transparent
}
.theme-dark #friends .friends-table .friends-row:hover+.friends-row {
    border-color: transparent
}
.theme-dark #friends .friends-empty p {
    color: hsla(0,0%,100%,.4)
}
.theme-dark #friends {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar,.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb,.theme-dark #friends .scroller-wrap.polyfill .scrollbar:after {
    background-color: #331f44
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: rgba(0,0,0,.4)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .track {
    background-color: transparent
}
.theme-dark #friends .scroller-wrap ::-webkit-scrollbar-thumb {
    background-color: #221035;
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap ::-webkit-scrollbar-track-piece {
    background-color: #331f44;
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar,.theme-dark #friends .scroller-wrap.polyfill .scrollbar:after {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb {
    background-color: rgba(57, 37, 74, 0.6);
    border-color: rgba(57, 37, 74, 0.6)
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .thumb:after {
    background-color: #221035
}
.theme-dark #friends .scroller-wrap.polyfill .scrollbar .track {
    background-color: #331f44;
    border-color: rgba(57, 37, 74, 0.6)
}
.empty-388osJ {
    background-position: 0 0;
    background-repeat: no-repeat;
}
.theme-dark .row-35Mhio {
    color: #f6f6f7
}
.theme-dark .row-35Mhio:after {
    background-color: hsla(0,0%,100%,.04)
}
.theme-light .row-35Mhio {
    color: #3f225a
}
.theme-light .row-35Mhio:after {
    background-color: rgba(79,84,92,.04)
}
.channel-2QD9_O {
    color: #fff;
}
.channel-2QD9_O a {
    color: #fff;
}
.channel-2QD9_O.selected-1HYmZZ,.channel-2QD9_O:hover {
    color: #fff
}
.channel-2QD9_O.selected-1HYmZZ a,.channel-2QD9_O:hover a {
    background-color: rgba(57, 37, 74, 0.6);
    color: #fff
}
.channel-2QD9_O.selected-1HYmZZ .name-2WpE7M,.channel-2QD9_O:hover .name-2WpE7M {
    color: #fff;
}
.channel-2QD9_O.selected-1HYmZZ .activity-525YDR,.channel-2QD9_O:hover .activity-525YDR {
    color: #fff
}
.channel-2QD9_O:hover .status {
    border-color: rgba(57, 37, 74, 0.6)
}
.channel-2QD9_O.selected-1HYmZZ a {
    background-color: rgb(57, 37, 74, 0.4)
}
.channel-2QD9_O.selected-1HYmZZ .status {
    border-color: #42464d
}
.close-3hZ5Ni {
    background: url(/assets/9cc98e0a595df904b11a7824bb421778.svg) 50% no-repeat;
    background-size: 18px 18px;
}
.name-2WpE7M {
    color: #f6f6f7;
}
.activity-525YDR {
    color: #b9bbbe;
}
.privateChannels-1nO12o header {
    color: #fff;
}
.secured-1Yihly:before {
    background: url(/assets/0c89a0b25036b406bcbcf37701ec738f.svg) 50% no-repeat;
    background-size: 9px 12px;
}
.theme-light .container-2x5lvQ section p {
    color: #8a8e94
}
.theme-light .container-2x5lvQ section a {
    color: #00b0f4
}
.theme-light .debugButton-1Zec0y {
    color: #99aab5
}
.theme-light .secured-1Yihly {
    color: #43b581
}
.theme-dark [class*="container"] section {  
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark [class*="container"] section p {
    color: hsla(0,0%,100%,.4)
}
.theme-dark .container-3ayLPN {
    background-color: transparent;
}
.theme-dark .option-96V44q:after {
    background: linear-gradient(90deg,rgba(54,57,63,0),#36393f00 80%);
}
.theme-dark .container-2x5lvQ section strong {
    color: #b9bbbe
}
.theme-dark .container-2x5lvQ section a {
    color: #00b0f4
}
.theme-dark [class*="container"] section:after {
    border-top-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .debugButton-1Zec0y {
    color: #99aab5
}
.theme-dark .secured-1Yihly {
    color: #43b581
}
.container-1UB9sr {
    background: rgba(75, 21, 64, 0.3);
    color: #fff;
    border-bottom: transparent;
}
.inner-btChU7 .rtc-connection-status .ping {
    background: url(/assets/ebca02c11904a3812be7212755e6261f.svg) 50% no-repeat;
    background-size: 11px 12px;
}
.inner-btChU7 .channel-SEolQq {
    color: #fff;
}
.inner-btChU7 .rtc-connection-status-connected {
    color: #43b581
}
.inner-btChU7 .rtc-connection-status-connecting {
    color: #faa61a
}
.inner-btChU7 .rtc-connection-status-error {
    color: #f04747
}
.inner-btChU7 .rtc-connection-quality-average {
    color: #faa61a
}
.inner-btChU7 .rtc-connection-quality-bad {
    color: #f04747
}
.channel-SEolQq {
    color: #fff;
}
.theme-light .listeningAlong-2UPsxf {
    background-color: rgba(32,34,37,.3)
}
.theme-light .title-223e2Y {
    color: #fff
}
.theme-light .subtitle-Qv5s8c {
    color: hsla(0,0%,100%,.4)
}
.theme-light .actionIcon-h73Pge {
    color: #fff;
}
.theme-light .actionIcon-h73Pge:hover {
    background-color: rgba(24,25,28,.3);
}
.theme-dark .listeningAlong-2UPsxf {
    background-color: rgba(32,34,37,.3)
}
.theme-dark .title-223e2Y {
    color: #fff
}
.theme-dark .subtitle-Qv5s8c {
    color: hsla(0,0%,100%,.4)
}
.theme-dark .actionIcon-h73Pge {
    color: #fff;
}
.theme-dark .actionIcon-h73Pge:hover {
    background-color: rgba(24,25,28,.3);
}
.container-2lgZY8 {
    background-color: #221035
}
.channels-Ie2l6A {
    background-color: #331f44;
}
@media (max-width: 760px) {
    .hiddenOnMobileStore-1DIxbw {
    }
}
.button {
    background-color: #3a2648;
    color: #fff;
}
.button:hover {
    background-color: #4e5d94
}
.tutorial-indicators .indicator .animation-container .top {
    background: url(/assets/e1969c99c7929450baa3c88fab8e244c.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-indicators .indicator .animation-container .bottom {
    background: url(/assets/91efb70de850b7180044d04def863f07.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-indicators .indicator .animation-container .inner-circle {
    background: url(/assets/5d7b0c4b2a82d63d829b6ea591853c22.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-indicators .indicator .animation-container .outer-circle {
    background: url(/assets/2cf1ec0c044e0a2bdf7d818a1c8a7101.svg) 50% no-repeat;
    background-size: contain;
}
.tutorial-popout header {
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 400px 60px;
}
.tutorial-popout .button-area .skip-tips {
    color: #99aab5;
}
.tutorial-popout .button-area .skip-tips a {
    color: #3a2648;
}
@-webkit-keyframes exclaim-loop {
    0% {
    }
    }
@keyframes exclaim-loop {
    0% {
    }
    }
@-webkit-keyframes dot-loop {
    0% {
    }
    }
@keyframes dot-loop {
    0% {
    }
    }
@-webkit-keyframes inner-circle-loop {
    0% {
    }
    }
@keyframes inner-circle-loop {
    0% {
    }
    }
@-webkit-keyframes outer-circle-loop {
    0% {
    }
    }
@keyframes outer-circle-loop {
    0% {
    }
    }
@-webkit-keyframes inner-circle-loop-high-priority {
    0% {
    }
    }
@keyframes inner-circle-loop-high-priority {
    0% {
    }
    }
@-webkit-keyframes outer-circle-loop-high-priority {
    0% {
    }
    }
@keyframes outer-circle-loop-high-priority {
    0% {
    }
    }
@-webkit-keyframes quick-fade-out {
    to {
    }
}
@keyframes quick-fade-out {
    to {
    }
}
.subtitle-1H8FPn {
    color: #9e9e9e;
}
.theme-dark .incomingCallInner-2VmFiR {
    background: #221035;
    border-color: #18191c
}
.theme-dark .members-2BNiuX {
    color: #fff
}
.theme-light .incomingCallInner-2VmFiR {
    background: #f6f6f7;
    border-color: #dcddde
}
.theme-light .members-2BNiuX {
    color: #3f225a
}
.video-3alTtx {
    background-color: #000;
}
.channel-2-6Ybo {
    color: #fff;
}
.theme-light .pictureInPictureVideo-20ZvXn {
    background-color: #dcddde
}
.theme-dark .pictureInPictureVideo-20ZvXn {
    background-color: #221035
}
.theme-dark .item-30Gz8g {
    color: #f6f6f7
}
.theme-dark .itemValue-JNy0LV {
    color: #b9bbbe
}
.theme-light .item-30Gz8g {
    color: #3f225a
}
.theme-light .itemValue-JNy0LV {
    color: #9e9e9e
}
.theme-dark .videoPreview-22khDR {
    background-color: #331f44;
}
.theme-light .videoPreview-22khDR {
    background-color: #f6f6f7;
}
.image-2LVZ_j {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 80%;
}
.verificationBlock-1Chfpc .image-2LVZ_j {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 80%;
}
.theme-light .verification-3RfWYC .title-wZCcDo {
    color: #3f225a
}
.theme-light .verification-3RfWYC .body-3ROqbj,.theme-light .verification-3RfWYC .footer-1eZumv {
    color: #9e9e9e
}
.theme-light .verificationBlock-1Chfpc:hover {
    background-color: #f6f6f7
}
.theme-light .verificationBlock-1Chfpc .body-3ROqbj {
    color: #9e9e9e
}
.theme-dark .verification-3RfWYC .title-wZCcDo {
    color: #fff
}
.theme-dark .verification-3RfWYC .body-3ROqbj,.theme-dark .verification-3RfWYC .footer-1eZumv {
    color: #b9bbbe
}
.theme-dark .verificationBlock-1Chfpc:hover {
    background-color: #221035
}
.theme-dark .verificationBlock-1Chfpc .body-3ROqbj {
    color: #b9bbbe
}
.theme-light .layer-3QrUeG,.theme-light .layers-3iHuyZ {
    background: #fff
}
.theme-dark .layer-3QrUeG,.theme-dark .layers-3iHuyZ {
    background: rgba(57, 37, 74, 0.6)
}
.added-e1Pp41 {
    color: #43b581
}
.added-e1Pp41:after {
    background-color: #43b581
}
.fixed-22Vcez {
    color: #f04747
}
.fixed-22Vcez:after {
    background-color: #f04747
}
.progress-1fjoBz {
    color: #faa61a
}
.progress-1fjoBz:after {
    background-color: #faa61a
}
.improved-1F5LIN {
    color: #3a2648
}
.improved-1F5LIN:after {
    background-color: #3a2648
}
.theme-dark .date-2WJGyu {
    color: #b9bbbe
}
.theme-light .date-2WJGyu {
    color: #9e9e9e
}
.create-guild-container.deprecated {
    background-color: #fff;
}
.create-guild-container.deprecated .form-actions .btn-default {
    color: #99aab5;
}
.create-guild-container.deprecated .form-actions .btn-default:before {
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 18px,12px;
}
.create-guild-container.deprecated p {
    color: #99aab5;
}
.create-guild-container.deprecated h5 {
    color: #3a2648;
}
.create-guild-container.deprecated .join-server h5 {
    color: #43b581
}
.create-guild-container.deprecated .join-server .btn-primary {
    background-color: #43b581;
}
.create-guild-container.deprecated .join-server .btn-primary:hover {
    background-color: #3ca374
}
.create-guild-container.deprecated .join-server .error {
    color: #f04747
}
.create-guild-container.deprecated .join-server .sample-link {
    color: #3a2648;
}
.create-guild-container.deprecated .join-server .link-container input.error {
    border-color: #f04747
}
.create-guild-container.deprecated .join-server .link-container label {
    color: #99aab5;
}
.create-guild-container.deprecated .create-guild .guild-form .control-group input[disabled] {
    background-color: transparent;
}
.create-guild-container.deprecated .create-or-join .form-inner {
    background-color: #fff;
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat;
    background-size: 155px auto,75px auto;
}
.create-guild-container.deprecated .create-or-join .actions .or {
    background-position: 50%,50%;
    background-repeat: no-repeat;
    background-size: 52px,52px;
    color: #99aab5;
}
.create-guild-container.deprecated .action {
    background: hsla(0,0%,100%,.75);
}
.create-guild-container.deprecated .action:hover.join .btn {
    background-color: #369368!important
}
.create-guild-container.deprecated .action:hover.create .btn {
    background-color: #a02f7b
}
.create-guild-container.deprecated .action .action-body {
    color: #99aab5;
}
.create-guild-container.deprecated .action.create .action-header {
    color: #3a2648
}
.create-guild-container.deprecated .action.create .action-icon {
    background: url(/assets/845d431ebfc24e13a0b31f7e64fc612b.png) 50% no-repeat;
    background-size: 112px 78px;
}
.create-guild-container.deprecated .action.join .action-header {
    color: #3ca374
}
.create-guild-container.deprecated .action.join .action-icon {
    background: url(/assets/8fb52ec5260dfe6c5b93d211d3b6ecde.png) 50% no-repeat;
    background-size: 178.5px 78px;
}
.create-guild-container.deprecated .action.join .btn {
    background-color: #3ca374
}
.form-deprecated .form-header,.form.deprecated .form-header {
    background: #fff;
    color: #3a2648;
}
.form-deprecated .form-inner,.form.deprecated .form-inner {
    background-color: #fff;
}
.form-deprecated input::-webkit-input-placeholder,.form-deprecated textarea::-webkit-input-placeholder,.form.deprecated input::-webkit-input-placeholder,.form.deprecated textarea::-webkit-input-placeholder {
    color: #dadddf;
}
.form-deprecated header,.form.deprecated header {
    color: #3a2648;
}
.form-deprecated .control-group label,.form.deprecated .control-group label {
    color: #87909c;
}
.form-deprecated .control-group label a,.form.deprecated .control-group label a {
    color: #3a2648;
}
.form-deprecated .control-group label a:hover,.form.deprecated .control-group label a:hover {
    color: #4e5d94
}
.form-deprecated .control-group.error label,.form.deprecated .control-group.error label {
    color: #f04747
}
.form-deprecated .control-group input[type=email],.form-deprecated .control-group input[type=number],.form-deprecated .control-group input[type=password],.form-deprecated .control-group input[type=text],.form-deprecated .control-group textarea,.form.deprecated .control-group input[type=email],.form.deprecated .control-group input[type=number],.form.deprecated .control-group input[type=password],.form.deprecated .control-group input[type=text],.form.deprecated .control-group textarea {
    color: #331f44;
}
.form-deprecated .control-group input[type=email]:disabled,.form-deprecated .control-group input[type=number]:disabled,.form-deprecated .control-group input[type=password]:disabled,.form-deprecated .control-group input[type=text]:disabled,.form-deprecated .control-group textarea:disabled,.form.deprecated .control-group input[type=email]:disabled,.form.deprecated .control-group input[type=number]:disabled,.form.deprecated .control-group input[type=password]:disabled,.form.deprecated .control-group input[type=text]:disabled,.form.deprecated .control-group textarea:disabled {
    background: transparent;
}
.form-deprecated .control-group select,.form.deprecated .control-group select {
    background: url(/assets/cb1c737673cd98f0e796d6a646ec512c.svg) 98% no-repeat;
    background-color: #fff;
    background-size: 20px 10px;
    color: #331f44;
}
.form-deprecated .control-group .help-text,.form.deprecated .control-group .help-text {
    color: #87909c;
}
.form-deprecated .control-group .help-text.error,.form-deprecated .control-group .help-text.error a,.form.deprecated .control-group .help-text.error,.form.deprecated .control-group .help-text.error a {
    color: #f04747
}
.form-deprecated .Select.is-disabled .Select-control:hover,.form-deprecated .Select.is-open .Select-control:hover,.form.deprecated .Select.is-disabled .Select-control:hover,.form.deprecated .Select.is-open .Select-control:hover {
    border-color: #cdcdcd
}
.form-deprecated .Select-placeholder,.form.deprecated .Select-placeholder {
    color: #cdcdcd;
}
.form-deprecated .has-value .Select-placeholder,.form.deprecated .has-value .Select-placeholder {
    color: #331f44
}
.form-deprecated .Select-control:hover,.form.deprecated .Select-control:hover {
    border-color: #bbb
}
.form-deprecated .Select-option,.form.deprecated .Select-option {
    color: #331f44
}
.form-deprecated .Select-option.is-focused,.form.deprecated .Select-option.is-focused {
    background: #f7f7f7;
    color: #331f44
}
.form-deprecated .form-actions,.form.deprecated .form-actions {
    background-color: #f9f9f9;
}
.form-deprecated .btn.red,.form.deprecated .btn.red {
    background-color: #f36c6c
}
.form-deprecated .btn.red:hover,.form.deprecated .btn.red:hover {
    background-color: #f04747
}
.form-deprecated .btn.green,.form.deprecated .btn.green {
    background-color: #43b581
}
.form-deprecated .btn.green:hover,.form.deprecated .btn.green:hover {
    background-color: #3ca374
}
.form-deprecated .btn.disabled,.form-deprecated .btn:disabled,.form.deprecated .btn.disabled,.form.deprecated .btn:disabled {
    background-color: #949494;
    color: #ddd;
}
.form-deprecated .btn.disabled.btn-saving,.form-deprecated .btn:disabled.btn-saving,.form.deprecated .btn.disabled.btn-saving,.form.deprecated .btn:disabled.btn-saving {
    color: transparent
}
.form-deprecated .btn.disabled .spinner .spinner-item,.form-deprecated .btn:disabled .spinner .spinner-item,.form.deprecated .btn.disabled .spinner .spinner-item,.form.deprecated .btn:disabled .spinner .spinner-item {
    background-color: #fff
}
.form-deprecated .btn.disabled:hover,.form-deprecated .btn:disabled:hover,.form.deprecated .btn.disabled:hover,.form.deprecated .btn:disabled:hover {
    background-color: #949494
}
.form-deprecated .btn-primary,.form.deprecated .btn-primary {
    background-color: #3a2648;
    color: #fff
}
.form-deprecated .btn-primary:hover,.form.deprecated .btn-primary:hover {
    background-color: #4e5d94
}
.form-deprecated .btn-default,.form.deprecated .btn-default {
    background-color: #f9f9f9;
    color: #949494;
}
.btn-confirm .icon {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px 16px;
}
.btn-confirm .btn {
    background-color: transparent;
    color: #fff;
}
.btn-confirm:not(.reverse-slide) .btn:first-of-type:hover {
    background-color: #f04747;
    color: #fff
}
.btn-confirm:not(.reverse-slide).active .btn:last-of-type:not(:first-of-type) {
    background-color: #f36c6c;
}
.btn-confirm:not(.reverse-slide).active .btn:last-of-type:not(:first-of-type):hover {
    background-color: #f04747
}
.btn-confirm.reverse-slide .btn:last-of-type:not(:first-of-type):hover {
    background-color: #f04747;
    color: #fff
}
.btn-confirm.reverse-slide.active .btn:first-of-type {
    background-color: #f36c6c;
}
.btn-confirm.active .btn,.btn-confirm.reverse-slide.active .btn:first-of-type:hover {
    background-color: #f04747
}
.theme-dark .cloneInfo-1OC_Ee strong,.theme-dark .subtitle-3csUrC {
    color: #b9bbbe
}
.theme-light .cloneInfo-1OC_Ee strong {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .subtitle-3csUrC {
    color: #9e9e9e
}
.checkboxMute-14hTGS:before {
    background-color: rgba(0,0,0,.1);
}
.theme-dark .channelName-28iMRJ {
    color: #f6f6f7
}
.theme-dark .guildName-3WI6ml,.theme-dark .override-2YgiXd,.theme-dark .overrideHighlight-YPcBxt {
    color: #b9bbbe
}
.theme-dark .override-2YgiXd:hover {
    background-color: rgba(32,34,37,.1)
}
.theme-dark .overrideHighlight-YPcBxt,.theme-dark .overrideHighlight-YPcBxt:hover {
    background-color: rgba(32,34,37,.3)
}
.theme-dark .checkboxContainer-2vV9zd:before {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-light .channelName-28iMRJ {
    color: #3f225a
}
.theme-light .guildName-3WI6ml,.theme-light .override-2YgiXd,.theme-light .overrideHighlight-YPcBxt {
    color: #9e9e9e
}
.theme-light .override-2YgiXd:hover {
    background-color: rgba(246,246,247,.1)
}
.theme-light .overrideHighlight-YPcBxt,.theme-light .overrideHighlight-YPcBxt:hover {
    background-color: rgba(246,246,247,.3)
}
.theme-light .checkboxContainer-2vV9zd:before {
    background-color: rgba(220,221,222,.6)
}
.modal-new-user>.steps {
    background: #fff;
}
.modal-new-user>.steps .step-1 {
    background: url(/assets/0c78ea6377b186e6675fed771165efc0.png) no-repeat bottom
}
.modal-new-user>.steps .step-2 .guild-form .control-group input[disabled] {
    background-color: transparent;
}
.modal-new-user p {
    color: #99aab5;
}
.modal-new-user h5 {
    color: #3a2648;
}
.modal-new-user .steps-wrap .steps .divider {
    background-color: #dbdde1;
}
.modal-new-user .steps-wrap .steps li {
    background-color: #dbdde1;
}
.modal-new-user .steps-wrap .steps li.on,.modal-new-user .steps-wrap .steps li.on+.divider,.modal-new-user .steps-wrap .steps li.on:before {
    background-color: #3a2648
}
.modal-new-user .steps-wrap .steps li.active {
    background-color: #3a2648;
}
.modal-new-user .steps-wrap .steps li.active+.divider {
    background-color: #dbdde1
}
.topSectionStreaming-1Tpf5X {
    background: #593695
}
.topSectionSpotify-1lI0-P {
    background: #1db954
}
.topSectionXbox-3fWLjS {
    background: #107c10
}
.topSectionPlaying-1J5E4n {
    background: #3a2648
}
.username-3gJmXY {
    color: #fff;
}
.discriminator-xUhQkU {
    color: hsla(0,0%,100%,.6);
}
.profileBadge-2BqF-Z {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.buttonInvertedPurple-WtBglX {
    background-color: #f8f9fd;
    color: #593695
}
.buttonInvertedPurple-WtBglX:active {
    background-color: #e3e7f8
}
.headerFill-adLl4x {
    background-color: rgba(0,0,0,.05)
}
.additionalActionsIcon-1FoUlE {
    background: url(/assets/c75b049cb25ec007efd22d608a0c9c0a.svg) no-repeat 50%;
}
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP {
    color: hsla(0,0%,100%,.6);
}
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP:hover {
    border-bottom-color: hsla(0, 0%, 100%, 0.35)
}
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected {
    border-bottom-color: #fff;
    color: #fff
}
.userInfoSectionHeader-CBvMDh {
    color: #9e9e9e;
}
.note-QfFU8y textarea,.note-QfFU8y textarea::-webkit-input-placeholder {
    color: #b9bbbe
}
.note-QfFU8y textarea,.note-QfFU8y textarea:-ms-input-placeholder {
    color: #b9bbbe
}
.note-QfFU8y textarea,.note-QfFU8y textarea::placeholder {
    color: #b9bbbe
}
.connectedAccountName-f8AEe2 {
    color: #b9bbbe;
}
.connectedAccountOpenIcon-2cNbq5 {
    background: url(/assets/84591cd2a7c7aca2aca6871b28ad8f8b.svg) no-repeat 50%;
}
.listAvatar-1NlAhb {
    color: #fff;
}
.guildAvatarWithoutIcon-1sTmE_ {
    background-color: #3a2648
}
.guildNick-3uAm3i {
    color: #9099a4;
}
.emptyIcon-pGTAhd {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.emptyText-6tYmO5 {
    color: #9e9e9e;
}
.theme-dark .topSectionNormal-2-vo2m {
    background-color: #221035
}
.theme-dark .body-3ND3kc {
    background-color: #331f44
}
.theme-dark .connectedAccount-36nQx7,.theme-dark .userInfoSection-2acyCx+.userInfoSection-2acyCx {
    border-color: #221035
}
.theme-dark .listRow-hutiT_ {
    color: #b9bbbe
}
.theme-dark .listRow-hutiT_:hover {
    background: -webkit-gradient(linear,left top,right top,color-stop(90%,hsla(0,0%,100%,.05)),to(hsla(0,0%,100%,0)));
    background: linear-gradient(90deg,hsla(0,0%,100%,.05) 90%,hsla(0,0%,100%,0));
    color: #b9bbbe
}
.theme-dark .root-SR8cQa .note-QfFU8y textarea:focus {
    background-color: #221035
}
.theme-light .topSectionNormal-2-vo2m {
    background-color: #f6f6f7
}
.theme-light .topSectionNormal-2-vo2m .username-3gJmXY {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .topSectionNormal-2-vo2m .discriminator-xUhQkU {
    color: rgba(185,187,190,.6)
}
.theme-light .topSectionNormal-2-vo2m .profileBadgeText-1JgCcU,.theme-light .topSectionNormal-2-vo2m .tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP {
    color: rgba(54,57,63,.6)
}
.theme-light .topSectionNormal-2-vo2m .tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP:hover {
    border-bottom-color: rgba(54,57,63,.2)
}
.theme-light .topSectionNormal-2-vo2m .tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected {
    border-bottom-color: rgba(57, 37, 74, 0.6);
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .body-3ND3kc {
    background-color: #fff
}
.theme-light .userInfoSection-2acyCx+.userInfoSection-2acyCx {
    border-top-color: #dcddde
}
.theme-light .connectedAccount-36nQx7 {
    border-color: #dcddde
}
.theme-light .connectedAccountName-f8AEe2 {
    color: #9e9e9e
}
.theme-light .emptyText-6tYmO5 {
    color: #b9bbbe
}
.theme-light .listRow-hutiT_ {
    color: #9e9e9e
}
.theme-light .listRow-hutiT_:hover {
    background: -webkit-gradient(linear,left top,right top,color-stop(90%,rgba(185,187,190,.05)),to(rgba(185,187,190,0)));
    background: linear-gradient(90deg,rgba(185,187,190,.05) 90%,rgba(185,187,190,0));
    color: rgba(57, 37, 74, 0.6)
}
.coloredHeader-N84M0L {
    background-color: #3a2648;
}
.headerIcon-2O31Jq {
    color: #fff;
}
.price-2IU94K {
    background-color: #fff;
    color: #3a2648;
}
.theme-dark .confirmationBlurb-2pUik2 {
    color: #b9bbbe
}
.theme-dark .activated-KjWeLP {
    border-color: hsla(0,0%,100%,.3);
    color: #fff
}
.theme-dark .activatedShine-3JgAvN {
    color: hsla(0,0%,100%,.5)
}
.theme-light .confirmationBlurb-2pUik2 {
    color: #9e9e9e
}
.theme-light .activated-KjWeLP {
    border-color: rgba(172, 79, 149, 0.3);
    color: #3a2648
}
.theme-light .activatedShine-3JgAvN {
    color: rgba(114,137,218,.2)
}
.theme-light .header-37u8Mj .closeIcon-_awJDU {
    color: #fff
}
.authBox-hW6HRx {
    background: rgba(57, 37, 74, 0.6);
    color: #9e9e9e;
}
.authBox-hW6HRx a {
    color: #3a2648
}
@media (max-width: 485px) {
    .authBox-hW6HRx {
        background: -webkit-gradient(linear,right top,left bottom,from(#3d4046),to(#1e1e23));
        background: linear-gradient(to left bottom,#3d4046,#1e1e23);
    }
    .authBox-hW6HRx:before {
        background: url(/assets/4f004ac9be168ac6ee18fc442a52ab53.svg) no-repeat;
    }
}
.theme-light .title-jXR8lp {
    color: #3f225a
}
.subTitle-3TUjmF {
    color: #9e9e9e;
}
.subTitle-3TUjmF strong {
    color: rgba(185,187,190,.9);
}
.subText-1XkjIB {
    color: #9e9e9e
}
.theme-light .verified-2-ja4L {
    color: #3f225a
}
.theme-dark .pill-1dHPfk {
    background-color: rgba(32,34,37,.3)
}
.theme-light .pill-1dHPfk {
    background-color: rgba(185,187,190,.3)
}
.theme-dark .pillMessage-1btqlx {
    color: #b9bbbe
}
.theme-light .pillMessage-1btqlx {
    color: #9e9e9e
}
.pillIconTotal-1BqTcA {
    background-color: #9e9e9e
}
.pillIconOnline-2JGlqR {
    background-color: #43b581
}
.spinnerText-lNRnYJ {
    color: #fff;
}
.inviteIcon-DSd8cG {
    background-color: #3a2648;
    color: #fff;
}
.inviteLargeIcon-HrAH61 {
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-dark .inputError-1PrjdI,.theme-dark .inputError-1PrjdI:focus,.theme-dark .inputError-1PrjdI:hover,.theme-light .inputError-1PrjdI,.theme-light .inputError-1PrjdI:focus,.theme-light .inputError-1PrjdI:hover {
    border-color: #f04747
}
@media (max-height: 600px) {
    .container-2Yth53 {
    }
}
@media (max-width: 720px) {
    .contentWrapper-3WC1ID {
    }
}
.theme-dark .contentWrapper-3WC1ID {
    background: rgba(57, 37, 74, 0.6)
}
.theme-light .contentWrapper-3WC1ID {
    background: #f6f6f7
}
.inviteSplash-40aHus {
    background-position: 100%;
    background-size: cover;
}
@media (max-width: 940px) {
    .inviteSplash-40aHus {
    }
}
@media (max-width: 720px) {
    .inviteSplash-40aHus {
    }
}
.dmIconContainer-2yFeX3 .guildIcon-Ripiyt,.guildIconContainer-1M95yt .guildIcon-Ripiyt {
    background-size: 100% 100%;
}
.theme-dark .resultFocused-3aIoYe {
    background-color: rgb(57, 37, 74, 0.4)
}
.theme-dark .resultFocused-3aIoYe .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #221035;
}
.theme-dark .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #331f44;
}
.theme-dark .contentUnread-3gTHvA {
    color: #fff
}
.theme-dark .contentUnread-3gTHvA .note-S--UP5 {
    color: #9e9e9e
}
.theme-dark .contentDefault-16dKSY {
    color: #b9bbbe
}
.theme-dark .contentDefault-16dKSY .note-S--UP5 {
    color: #9e9e9e
}
.theme-dark .icon-30q1Or {
    color: #b9bbbe
}
.theme-dark .dmIconContainer-2yFeX3 .guildIcon-Ripiyt,.theme-dark .guildIconContainer-1M95yt .guildIcon-Ripiyt {
    background-color: rgba(0,0,0,.3);
    color: #9e9e9e
}
.theme-dark .header-13MUnb {
    color: #b9bbbe
}
.theme-light .resultFocused-3aIoYe {
    background-color: #fff
}
.theme-light .resultFocused-3aIoYe .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #fff;
}
.theme-light .voiceStates-2IBs4e .avatar-2GNw6c {
    background-color: #f6f6f7;
}
.theme-light .contentUnread-3gTHvA,.theme-light .contentUnread-3gTHvA .note-S--UP5 {
    color: #3f225a
}
.theme-light .contentDefault-16dKSY,.theme-light .contentDefault-16dKSY .note-S--UP5 {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .icon-30q1Or {
    color: #9e9e9e
}
.theme-light .dmIconContainer-2yFeX3 .guildIcon-Ripiyt,.theme-light .guildIconContainer-1M95yt .guildIcon-Ripiyt {
    background-color: #fff;
    color: #9e9e9e
}
.qs-tutorial-messages {
    color: #fff;
}
@-webkit-keyframes arrow-pulse {
    0%,to {
    }
    }
@keyframes arrow-pulse {
    0%,to {
    }
    }
.emptyState-2gL-9T {
    background: no-repeat 50% 20px;
}
.theme-dark .quickswitcher-3JagVE {
    background-color: #331f44;
    color: #dcddde
}
.theme-dark .input-2VB9rf {
    background-color: #9e9e9e;
    color: #fff
}
.theme-dark .input-2VB9rf::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .input-2VB9rf::-moz-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .input-2VB9rf:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .input-2VB9rf:-moz-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .emptyStateNote-ZYTetQ {
    color: #9e9e9e
}
.theme-dark .tipsWithoutResults-lGY-De,.theme-dark .tipsWithResults-HhTE9b {
    border-color: rgb(57, 37, 74, 0.3);
    color: #9e9e9e
}
.theme-dark .miscContainer-2ptJ_C .avatar-xsmall {
    background-color: rgba(0,0,0,.3)
}
.theme-light .quickswitcher-3JagVE {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-light .input-2VB9rf {
    background-color: #fff;
    color: #3f225a
}
.theme-light .input-2VB9rf::-webkit-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-2VB9rf::-moz-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-2VB9rf:-ms-input-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .input-2VB9rf:-moz-placeholder {
    color: rgb(57, 37, 74, 0.3)
}
.theme-light .emptyStateNote-ZYTetQ {
    color: #828385
}
.theme-light .miscContainer-2ptJ_C .avatar-xsmall {
    background-color: rgba(0,0,0,.1)
}
.theme-dark .container-OI6I9q {
    color: #9e9e9e
}
.theme-dark .selected-P8xTeN {
    color: #f6f6f7
}
.theme-light .container-OI6I9q {
    color: #b9bbbe
}
.theme-light .selected-P8xTeN {
    color: #3f225a
}
.selectorButtonSelected-1j4DmC {
    background-color: #3a2648
}
.selectorTextSelected-3m1dO_ {
    color: #f6f6f7
}
.theme-dark .tiles-2aXG_k {
    background-color: #331f44;
}
.theme-dark .tile-2QWaFv {
    color: #b9bbbe
}
.theme-dark .titleSelected-1UkXLp {
    color: #f6f6f7
}
.theme-dark .selectorText-9iPrCS {
    color: #b9bbbe
}
.theme-light .tiles-2aXG_k {
    background-color: #f6f6f7;
}
.theme-light .tile-2QWaFv {
    color: #9e9e9e
}
.theme-light .titleSelected-1UkXLp {
    color: #3f225a
}
.theme-light .selectorText-9iPrCS {
    color: #9e9e9e
}
.theme-light .emailVerificationModal-3cfLjL .title-38uBel {
    color: #3f225a
}
.theme-light .emailVerificationModal-3cfLjL .body-1_Foxn {
    color: #9e9e9e
}
.theme-light .emailVerificationModal-3cfLjL .body-1_Foxn.error-MUeDOy {
    color: #f04747
}
.theme-dark .emailVerificationModal-3cfLjL .title-38uBel {
    color: #f6f6f7
}
.theme-dark .emailVerificationModal-3cfLjL .body-1_Foxn {
    color: #9e9e9e
}
.theme-dark .emailVerificationModal-3cfLjL .body-1_Foxn.error-MUeDOy {
    color: #f04747
}
.switch-1bkg5j .slider-2-A75I {
    background-color: transparent;
}
.switch-1bkg5j .slider-2-A75I:before {
    background-color: #fff;
}
.switch-1bkg5j input:checked+.slider-2-A75I {
    background-color: #43b581
}
.detected-platform-accounts-modal .icons {
    background-position: top;
    background-repeat: no-repeat;
}
.detected-platform-accounts-modal .body {
    color: hsla(0,0%,100%,.6);
}
.detected-platform-accounts-modal .body strong {
    color: #fff
}
.detected-platform-accounts-modal .btn-group .btn-default {
    background-color: transparent;
    color: #fff;
}
.detected-platform-accounts-modal .btn-group .btn-primary {
    background-color: #3a2648;
    color: #fff;
}
.detected-platform-accounts-modal .btn-group .btn-primary:hover:not(:disabled) {
    background-color: #4e5d94
}
.detected-platform-accounts-modal .divider {
    background: #f5f5f5;
}
.detected-platform-accounts-modal .detected-accounts .detected-account .detected-account-details h3 {
    color: #fff;
}
.detected-platform-accounts-modal .detected-accounts .detected-account .detected-account-details h4 {
    color: hsla(0,0%,100%,.4);
}
.detected-platform-accounts-modal .privacy {
    color: hsla(0,0%,100%,.3);
}
.detected-platform-accounts-modal .privacy a {
    color: rgba(0,176,244,.6);
}
.modal-DRZfgq {
    background-color: #fff;
}
.title-3Fa4Po {
    color: #3a2648;
}
.ack-2yIUvY {
    color: #3f225a
}
.buttonContainer-3S_miP {
    background-color: #f9f9f9;
}
.theme-dark .title-rv8Fft {
    color: #fff
}
.theme-light .title-rv8Fft {
    color: #3f225a
}
.image-2lEAkj {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
}
.theme-dark .title-3CgDLA {
    color: #fff
}
.theme-dark .appPromotion-2PUSOL {
    color: #b9bbbe
}
.theme-light .title-3CgDLA {
    color: #3f225a
}
.theme-light .appPromotion-2PUSOL {
    color: #9e9e9e
}
.ragingDemon-bDcoXE {
    color: #fff;
}
.symbolBackground-1w6i-M {
    background-color: #fff;
}
@-webkit-keyframes symbolFadeIn-wkjQKf {
    0% {
    }
    }
@keyframes symbolFadeIn-wkjQKf {
    0% {
    }
    }
@-webkit-keyframes symbolBgFadeOut-YosnTk {
    0% {
    }
    }
@keyframes symbolBgFadeOut-YosnTk {
    0% {
    }
    }
@-webkit-keyframes explCircleInner-4eTA27 {
    0% {
    }
    }
@keyframes explCircleInner-4eTA27 {
    0% {
    }
    }
@-webkit-keyframes explCircleOuter-20lecN {
    0% {
    }
    }
@keyframes explCircleOuter-20lecN {
    0% {
    }
    }
@-webkit-keyframes explLinesSecondary-1Eag-K {
    0% {
    }
    }
@keyframes explLinesSecondary-1Eag-K {
    0% {
    }
    }
@-webkit-keyframes explLinesMain-1D2qvD {
    0% {
    }
    }
@keyframes explLinesMain-1D2qvD {
    0% {
    }
    }
.ddrArrows-lSnH7P .arrow-2enltQ.active-2X6Ewx {
    background-position: 0 -100px
}
.theme-dark .keyboardShortcutsModal-3piNz7 {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .modalTitle-37O4n6 {
    color: #fff
}
.theme-dark .modalSubtitle-1Pj5nv {
    color: #dcddde
}
.theme-dark .keyboardShortcutList-13cQ-8 .keybindGroup--6Qp-w .keybindDescription-2RDbC2 {
    color: #b9bbbe;
}
.theme-light .keyboardShortcutsModal-3piNz7 {
    background-color: #fff
}
.theme-light .modalTitle-37O4n6 {
    color: #3f225a
}
.theme-light .modalSubtitle-1Pj5nv {
    color: #737f8d
}
.theme-light .keyboardShortcutList-13cQ-8 .keybindGroup--6Qp-w .keybindDescription-2RDbC2 {
    color: #3f225a
}
@-webkit-keyframes arrow-2enltQ {
    0% {
        background-position: 0 -50px
    }
    to {
        background-position: 0 -150px
    }
}
@keyframes arrow-2enltQ {
    0% {
        background-position: 0 -50px
    }
    to {
        background-position: 0 -150px
    }
}
.theme-dark .text-261YYq,.theme-dark .title-iQAIhu {
    color: #fff
}
.theme-light .text-261YYq,.theme-light .title-iQAIhu {
    color: #9e9e9e
}
.resultWrapper-2g7r2D {
    color: #b9bbbe;
}
.resultWrapperSelected-3v78W2 {
    background-color: rgb(57, 37, 74, 0.3);
    color: #fff
}
.noResults-3LFG4E {
    background: url(/assets/0b298968e0a756e25677771fd6b58b34.svg) no-repeat 50% 40%;
}
.gamepadButtonText-3oiVZ3 {
    color: #fff;
}
.sectionTitle-337Owh {
    color: #fff;
}
.sectionSubtitle-3oof5F {
    color: #fff;
}
@media (max-height: 720px) {
    .sectionTitle-337Owh {
    }
    }
.errorMessageContainer-3tPaYl {
    background-color: #f6f6f7;
}
.errorMessage-3H97Nb {
    color: #3f225a
}
.errorMessageIcon-1ToWng {
    color: #f04747;
}
@media (max-height: 720px) {
    .logo-2apZa6 {
    }
    }
@media (max-height: 720px) {
    .pinNumber-2Y-fxV {
    }
    }
.card-1YzUI1 {
    background: #221035;
    border-color: #221035;
}
@media (max-width: 485px) {
    .wrapper-6URcxg {
    }
}
@media (min-width: 486px) {
    .wrapper-6URcxg {
    }
}
@media (min-width: 1080px) {
    .wrapper-6URcxg {
    }
}
@media (min-width: 486px) {
    .logo-2iEHEq {
        background:url(/assets/4f004ac9be168ac6ee18fc442a52ab53.svg) no-repeat;
    }
}
@media (min-width: 1080px) {
    .logo-2iEHEq {
    }
}
.platform-win .splashBackground-1FRCko:before {
    background: rgba(0,0,0,.3);
}
.platform-win .splashBackground-1FRCko.loggingIn-3Hi-BU:before {
    background: transparent
}
.wrapper-1V4Ofx {
    background: repeat 108% 103% url(/assets/8eba753f8b6d02be1013c5e659b0fc2f.png);
    background-color: #221035;
}
.widget-3Jf1UK {
    color: #fff;
}
.widget-3Jf1UK.default-2DEBb2 {
    background-color: #331f44
}
.widget-3Jf1UK.unpinned-27g8oz {
    background-color: rgba(57, 37, 74, 0.6)
}
.bar-3DMj4v {
    color: #fff;
}
.bar-3DMj4v.default-2DEBb2 {
    background-color: #581743
}
.bar-3DMj4v.unpinned-27g8oz {
    background-color: rgba(57, 37, 74, 0.6)
}
.bar-3DMj4v.pinned-XAtPII {
    background-color: rgba(54,57,63,.85)
}
.body-1dRqZe {
    color: #fff;
}
.body-1dRqZe.default-2DEBb2 {
    background-color: #331f44
}
.body-1dRqZe.unpinned-27g8oz {
    background-color: rgba(57, 37, 74, 0.6)
}
.body-1dRqZe.pinned-XAtPII {
    background-color: rgba(54,57,63,.6)
}
.body-1dRqZe.inGame-1_RaeF {
    background-color: hsla(0,0%,100%,0)
}
.icon-1napVC {
    color: #fff;
}
.empty-1_GBzR {
    background: url(/assets/46e8d571c6c9410efbda9433cbaca51d.svg);
    background-position: 50% 40%;
    background-repeat: no-repeat;
    background-size: 200px auto;
}
.emptyMessage-3LUEw8 {
    color: #9e9e9e;
}
.controls-2NrGNJ {
    background: #581743;
    color: #fff;
}
.header-2ZdCft {
    background-color: #331f44!important;
}
.key-3j3-mG {
    background-color: #3a2648;
    color: #fff;
}
.container-fEIfjO {
    color: #fff;
}
.footer-29jAtw {
    color: #b9bbbe;
}
.themePrimary-18HFsc.container-fEIfjO {
    background-color: rgba(54,57,63,.9)
}
.themePrimary-18HFsc.clickable-2NoTM3:hover {
    background-color: rgba(57, 37, 74, 0.6)
}
.themePrimary-18HFsc .body-3iVSWA {
    color: #b9bbbe
}
.themePrimary-18HFsc .divider-2SJIXw {
    background-color: #3f225a
}
.themePrimary-18HFsc .closeButton-29JYDb {
    background-color: rgba(54,57,63,.8);
}
.themeBrand-2qTyWV.container-fEIfjO {
    background-color: rgba(142,161,225,.9)
}
.themeBrand-2qTyWV.clickable-2NoTM3:hover {
    background-color: #8ea1e1
}
.themeBrand-2qTyWV .body-3iVSWA {
    color: #fdecff
}
.themeBrand-2qTyWV .footer-29jAtw {
    color: #fff;
}
.themeBrand-2qTyWV .divider-2SJIXw {
    background-color: #3a2648
}
.themeBrand-2qTyWV .closeButton-29JYDb {
    background-color: rgba(142,161,225,.8);
}
.themeDanger-2d-qs2.container-fEIfjO {
    background-color: rgba(240,71,71,.9)
}
.themeDanger-2d-qs2.clickable-2NoTM3:hover {
    background-color: #f04747
}
.themeDanger-2d-qs2 .body-3iVSWA {
    color: #fcdada
}
.themeDanger-2d-qs2 .footer-29jAtw {
    color: #fff;
}
.themeDanger-2d-qs2 .divider-2SJIXw {
    background-color: #f36c6c
}
.themeDanger-2d-qs2 .closeButton-29JYDb {
    background-color: rgba(240,71,71,.8);
}
.themeDanger-2d-qs2 .closeButton-29JYDb .closeIcon-2Uo05m {
    color: #fff;
}
.newsNudge-36MYW3 {
    background-color: #3a2648
}
.newsNudgeKey-m9PmvF {
    background-color: #fff;
    color: #3a2648
}
.stackedNotification-2stwHR {
    background-color: rgba(54,57,63,.8);
}
.resizeIcon-zw5Ldi {
    background-repeat: no-repeat;
    background-size: 16px;
}
.widgetDefault-3p24ip {
    background-color: #331f44
}
.headerDefault-3pVr2F {
    background-color: #331f44;
}
.headerPinnedLight-33jGuJ {
    background-color: rgba(114,118,125,.6);
}
.headerPinnedDark-2c8shx {
    background-color: rgba(57, 37, 74, 0.6);
}
.bodyPinnedDark-15y5Fl {
    background-color: rgba(57, 37, 74, 0.6)
}
.bodyTransparent-NFgPYn {
    background-color: transparent
}
.footerDefault-2zxhV8 {
    background-color: #221035
}
.footerPinnedLight-1K1eUk {
    background-color: rgba(114,118,125,.6)
}
.footerPinnedDark-3qPqV1 {
    background-color: rgba(57, 37, 74, 0.6)
}
.icon-15v2QJ {
    color: #fff;
}
.channelNameWrapper-2vQGWw {
    color: #f6f6f7;
}
.titleIcon-2ciH3G {
    color: #8a8e94;
}
.dragIcon-2JTLdo {
    color: #8a8e94;
}
.theme-dark .activeCallIcon-37ETG9:after {
    background-color: #43b581;
}
.headerDefault-1qHUFF {
    background-color: rgba(57, 37, 74, 0.6)
}
.headerPinned-93Uwgl {
    background-color: rgba(54,57,63,.3)
}
.solidBackground-3741fr {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .messagesPinned-1-onfA {
    background-color: rgba(54,57,63,.3)
}
.footerContent-2Hkx-f {
    background-color: rgba(57, 37, 74, 0.6)
}
.footerContent-2Hkx-f:before {
    background-color: hsla(0,0%,100%,.04)
}
.footerContentPinned-2M6JEM {
    background-color: rgba(54,57,63,.3)
}
.username-2FGs2B {
    color: #fff;
}
.locked-3PIhFd {
    background-color: rgba(0,0,0,.4);
}
.priority-20RaiF {
    background-color: #9e9e9e;
}
.prioritySpeaking-2lsGo- {
    background-color: #43b581
}
.overlay-2zxlBT {
    color: #fff;
}
.overlayActive-1zNgFQ {
    background-color: rgba(79,86,96,.8);
}
@-webkit-keyframes spin-3elCWT {
    0% {
    }
    }
@keyframes spin-3elCWT {
    0% {
    }
    }
.carouselButtonsContainer-Rba2-D {
    color: #f6f6f7;
}
.arrow-3jRqK8 {
    background-color: #18191c;
}
.video-38qD3Y {
    background: #000
}
.theme-dark .item-3V15ea,.theme-light .item-3V15ea {
    background-color: #000
}
.theme-light .divider-21LyPb {
    border-color: rgba(220,221,222,.6)
}
.theme-dark .divider-21LyPb {
    border-color: rgba(47,49,54,.6)
}
.theme-dark h1.title-3KTIjF,.theme-dark h2.title-3KTIjF {
    color: #fff
}
.theme-dark h3.title-3KTIjF {
    color: #dcddde
}
.theme-dark h4.title-3KTIjF,.theme-dark h5.title-3KTIjF,.theme-dark h6.title-3KTIjF {
    color: #b9bbbe
}
.theme-light h1.title-3KTIjF,.theme-light h2.title-3KTIjF {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light h3.title-3KTIjF,.theme-light h4.title-3KTIjF,.theme-light h5.title-3KTIjF,.theme-light h6.title-3KTIjF {
    color: #9e9e9e
}
.smallCarousel-2e0IQc {
    background-color: #000;
}
.embedContainer-26S24y {
    background-color: #18191c;
}
.theme-light .hljs {
    background: #fdf6e3;
    color: #657b83;
}
.theme-light .hljs-comment,.theme-light .hljs-quote {
    color: #586e75
}
.theme-light .hljs-addition,.theme-light .hljs-keyword,.theme-light .hljs-selector-tag {
    color: #859900
}
.theme-light .hljs-doctag,.theme-light .hljs-literal,.theme-light .hljs-meta .hljs-meta-string,.theme-light .hljs-number,.theme-light .hljs-regexp,.theme-light .hljs-string {
    color: #2aa198
}
.theme-light .hljs-name,.theme-light .hljs-section,.theme-light .hljs-selector-class,.theme-light .hljs-selector-id,.theme-light .hljs-title {
    color: #268bd2
}
.theme-light .hljs-attr,.theme-light .hljs-attribute,.theme-light .hljs-class .hljs-title,.theme-light .hljs-template-variable,.theme-light .hljs-type,.theme-light .hljs-variable {
    color: #b58900
}
.theme-light .hljs-bullet,.theme-light .hljs-link,.theme-light .hljs-meta,.theme-light .hljs-meta .hljs-keyword,.theme-light .hljs-selector-attr,.theme-light .hljs-selector-pseudo,.theme-light .hljs-subst,.theme-light .hljs-symbol {
    color: #cb4b16
}
.theme-light .hljs-built_in,.theme-light .hljs-deletion {
    color: #dc322f
}
.theme-light .hljs-formula {
    background: #073642
}
.theme-dark .hljs {
    background: #002b36;
    color: #a5a5a5;
}
.theme-dark .hljs-comment,.theme-dark .hljs-quote {
    color: #586e75
}
.theme-dark .hljs-addition,.theme-dark .hljs-keyword,.theme-dark .hljs-selector-tag {
    color: #859900
}
.theme-dark .hljs-doctag,.theme-dark .hljs-literal,.theme-dark .hljs-meta .hljs-meta-string,.theme-dark .hljs-number,.theme-dark .hljs-regexp,.theme-dark .hljs-string {
    color: #2aa198
}
.theme-dark .hljs-name,.theme-dark .hljs-section,.theme-dark .hljs-selector-class,.theme-dark .hljs-selector-id,.theme-dark .hljs-title {
    color: #268bd2
}
.theme-dark .hljs-attr,.theme-dark .hljs-attribute,.theme-dark .hljs-class .hljs-title,.theme-dark .hljs-template-variable,.theme-dark .hljs-type,.theme-dark .hljs-variable {
    color: #b58900
}
.theme-dark .hljs-bullet,.theme-dark .hljs-link,.theme-dark .hljs-meta,.theme-dark .hljs-meta .hljs-keyword,.theme-dark .hljs-selector-attr,.theme-dark .hljs-selector-pseudo,.theme-dark .hljs-subst,.theme-dark .hljs-symbol {
    color: #cb4b16
}
.theme-dark .hljs-built_in,.theme-dark .hljs-deletion {
    color: #dc322f
}
.theme-dark .hljs-formula {
    background: #073642
}
.theme-dark .markdown-11q6EU {
    color: #b9bbbe
}
.theme-dark .markdown-11q6EU th {
    background-color: #221035;
    border-color: #3f225a;
    color: #fff
}
.theme-dark .markdown-11q6EU td {
    border-color: #3f225a
}
.theme-dark .markdown-11q6EU tr {
    border-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .markdown-11q6EU tr:nth-child(2n) {
    background-color: #331f44
}
.theme-dark .markdown-11q6EU .blockquote-2-nEPK {
    border-left-color: #3f225a
}
.theme-dark .markdown-11q6EU code {
    background-color: #331f44
}
.theme-dark .markdown-11q6EU .codeInline-1FHKS7 {
    color: #dcddde
}
.theme-dark .blurb-1iBKJy {
    color: #dcddde
}
.theme-dark .description-1AwRKJ {
    color: #b9bbbe
}
.theme-dark .assetWrapper-2Qw_5D {
    background-color: #221035
}
.theme-light .blurb-1iBKJy {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .description-1AwRKJ {
    color: #9e9e9e
}
.theme-light .assetWrapper-2Qw_5D {
    background-color: #221035
}
.theme-dark .row-1bU71H {
    border-bottom-color: #331f44;
    color: #b9bbbe
}
.theme-light .row-1bU71H {
    border-bottom-color: #dcddde;
    color: #9e9e9e
}
.splash-_cddR3 {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover
}
.splashBackup-3iACes {
    background-repeat: repeat;
    background-size: 300px
}
.theme-dark .item-2yFVoY {
    background-color: #331f44
}
.theme-dark .timestamp-1Rokaa {
    color: #9e9e9e
}
.theme-dark .openBody-1HeDPG {
    background-color: rgba(32,34,37,.8)
}
.theme-dark .collapsedTitle-uWuaaU,.theme-dark .openTitle-3jCXI1 {
    color: #fff
}
.theme-dark .openDescription-2XUOH3 {
    color: #b9bbbe;
}
.theme-light .item-2yFVoY {
    background-color: #fff
}
.theme-light .timestamp-1Rokaa {
    color: #9e9e9e
}
.theme-light .openBody-1HeDPG {
    background-color: hsla(0,0%,100%,.8)
}
.theme-light .collapsedTitle-uWuaaU, .theme-light .openTitle-3jCXI1 {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .openDescription-2XUOH3 {
    color: #9e9e9e
}
.theme-dark .headerTitle-15Wgi- {
    color: #fff
}
.theme-dark .headerSubtitle-1YBE3w {
    color: #fff;
}
.theme-dark .item-1JiIvn {
    border-bottom-color: #331f44
}
.theme-dark .timestamp-1U6ga8 {
    color: #9e9e9e
}
.theme-dark .title-2XqtQs {
    color: #fff
}
.theme-dark .description-2IFeqo {
    color: #dcddde
}
.theme-light .label-13UUcd {
    color: #b9bbbe
}
.theme-dark .label-13UUcd,.theme-light .info-1Emy1X {
    color: #9e9e9e
}
.theme-dark .info-1Emy1X {
    color: #dcddde
}
.contentRating-vVpg2G {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}
.theme-dark .content-1zhNsr {
    color: #9e9e9e
}
.theme-light .content-1zhNsr {
    color: #b9bbbe
}
.theme-dark .content-3FEARf {
    color: #9e9e9e
}
.theme-light .content-3FEARf {
    color: #b9bbbe
}
.noticeGreen-1B4fdM {
    border-color: #43b581
}
.noticeGreen-1B4fdM .title-3tihLb {
    color: #43b581
}
.noticeYellow-eQ0PQJ {
    border-color: #faa61a
}
.noticeYellow-eQ0PQJ .title-3tihLb {
    color: #faa61a
}
.noticeRed-1pqAWj {
    border-color: #f04747
}
.noticeRed-1pqAWj .title-3tihLb {
    color: #f04747
}
.theme-dark .body-2AIBCD {
    color: #b9bbbe
}
.theme-dark .title-2xCQKy,.theme-light .title-2xCQKy {
    border-top-color: rgba(57, 37, 74, 0.6);
    color: #f6f6f7
}
.theme-dark .skuNormal-3h1es-,.theme-light .skuNormal-3h1es- {
    border-bottom-color: rgba(57, 37, 74, 0.6)
}
.theme-dark .sku-epQEb_:hover .name-u2zgy7,.theme-light .sku-epQEb_:hover .name-u2zgy7 {
    color: #f6f6f7
}
.theme-dark .name-u2zgy7,.theme-light .name-u2zgy7 {
    color: #b9bbbe
}
.theme-dark .price-NUANu6,.theme-light .price-NUANu6 {
    background-color: #3f225a;
    color: #f6f6f7
}
.theme-dark .entitledHeader-3LRNDT,.theme-light .entitledHeader-3LRNDT {
    background-color: #3f225a;
    color: #fff
}
.theme-dark .body-1CAT0-,.theme-light .body-1CAT0- {
    background-color: #221035
}
.theme-dark .actionText-3EKWER,.theme-light .actionText-3EKWER {
    color: #dcddde
}
.theme-dark .price-4PDWNj,.theme-light .price-4PDWNj {
    color: #f6f6f7
}
.theme-light .applicationRecommendationActivity-8Vsc1o {
    color: #9e9e9e
}
.theme-light .playerOverflow-2Hf77M {
    background-color: #f6f6f7;
    color: #9e9e9e
}
.theme-dark .applicationRecommendationActivity-8Vsc1o {
    color: #b9bbbe
}
.theme-dark .playerOverflow-2Hf77M {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .bubble-1gL_TN,.theme-light .bubble-1gL_TN {
    background-color: #3f225a
}
.theme-dark .bubble-1gL_TN:after,.theme-light .bubble-1gL_TN:after {
    border-top-color: #3f225a
}
.star-1-1ULn {
    color: #dcddde
}
.emptyStar-1v4WHI {
    color: #9e9e9e
}
.theme-dark .reviewContent-2sGcOc,.theme-light .reviewContent-2sGcOc {
    color: #dcddde
}
.theme-dark .reviewAuthor-h_z6TM,.theme-light .reviewAuthor-h_z6TM {
    color: #b9bbbe
}
.dotOnline-3qrf96 {
    background-color: #43b581
}
.theme-dark .content-35aVm0 {
    background-color: #221035
}
.theme-dark .name-3TBxUq {
    color: #b9bbbe
}
.theme-dark .memberInfo-1TAaKC {
    color: #9e9e9e
}
.theme-dark .dotOffline-1PVTuj {
    background-color: #9e9e9e
}
.theme-light .content-35aVm0 {
    background-color: #fff
}
.theme-light .name-3TBxUq {
    color: #9e9e9e
}
.theme-light .memberInfo-1TAaKC {
    color: #b9bbbe
}
.theme-light .dotOffline-1PVTuj {
    background-color: #9e9e9e
}
.theme-dark .separator-1tvx79 {
    background-color: rgba(47,49,54,.6)
}
.theme-dark .tabNotSelectedColor-3P16F- {
    color: #b9bbbe
}
.theme-dark .tabNotSelectedColor-3P16F-:hover,.theme-dark .tabSelectedColor-2b3xO9 {
    color: #fff
}
.theme-dark .tabSelected-3IK-Xf {
    border-bottom-color: #fff
}
.theme-dark .sectionTitle-Zi_w7u {
    color: #b9bbbe
}
.theme-dark .requirementKey-14DT2D {
    color: #9e9e9e
}
.theme-dark .requirements-dEriwm {
    color: #dcddde
}
.theme-light .separator-1tvx79 {
    background-color: rgba(220,221,222,.6)
}
.theme-light .tabNotSelectedColor-3P16F- {
    color: #9e9e9e
}
.theme-light .tabNotSelectedColor-3P16F-:hover,.theme-light .tabSelectedColor-2b3xO9 {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .tabSelected-3IK-Xf {
    border-bottom-color: rgba(57, 37, 74, 0.6)
}
.theme-light .sectionTitle-Zi_w7u {
    color: #9e9e9e
}
.theme-light .requirementKey-14DT2D {
    color: #b9bbbe
}
.theme-light .requirements-dEriwm {
    color: #9e9e9e
}
.score-3d03_j {
    color: #fff;
}
.theme-dark .card-NB61oR {
    background-color: #3f225a;
    color: #b9bbbe
}
.theme-dark .verdict-1JnQka {
    color: #fff
}
.theme-light .card-NB61oR {
    background-color: #fff;
    color: #9e9e9e
}
.theme-light .verdict-1JnQka {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .matureListing-3tyHbV {
    background-color: #fff
}
.marketingHeader-3in4BD {
    background-color: #221035
}
@media (max-width: 900px) {
    .headerPurchase-2z_nch {
    }
}
.theme-light .headerBar-3iCFJx {
    color: #3f225a
}
.theme-light .listing-2nUQ4d {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .reviewHeader-n1LSrF {
    color: #f6f6f7
}
.theme-light .link-2T7oYD {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .staffNotes-3qPLn- {
    color: #dcddde
}
.theme-light .titleName-2Z2SHw {
    color: #3f225a
}
.theme-light .headerPurchase-2z_nch {
    border-right-color: #3f225a
}
.theme-dark .headerBar-3iCFJx {
    color: #fff
}
.theme-dark .link-2T7oYD,.theme-dark .listing-2nUQ4d,.theme-dark .reviewHeader-n1LSrF {
    color: #f6f6f7
}
.theme-dark .staffNotes-3qPLn- {
    color: #dcddde
}
.theme-dark .headerPurchase-2z_nch {
    border-right-color: #3f225a
}
.btnHamburger-3grAP3 {
    background: transparent;
}
.btnHamburger-3grAP3 span {
    background: #fff;
}
.line-eyazOv {
    background-color: hsla(0, 0%, 100%, 0.35);
}
.localeList-4Zmfi9 {
    background-color: #fff;
}
.localeBase-27bssN {
    color: #9099a4;
}
.localeBase-27bssN a {
    color: inherit
}
.localeBase-27bssN:hover {
    background-color: #f2f2f2;
}
@media screen and (max-width: 848px) {
    .line-eyazOv {
    }
    .select-3Go1Du {
        background-color: transparent;
    }
    }
.moreList-29ir-q {
    background: #fff;
}
.moreListItem-2_Z3Je {
    background-color: #fff;
}
.moreListItemInactive-1v7PjS .moreListLink-3U23th {
    color: #9099a4
}
.moreListItemActive-MIosDj .moreListLink-3U23th {
    color: #3f225a
}
.moreListLink-3U23th:hover .moreListLinkCopy-1NEMj_ {
    background-color: #f2f2f2;
    color: #3f225a
}
@media screen and (max-width: 848px) {
    .moreList-29ir-q {
    }
}
.subListItemActive-2nnyFs .subListItemLink-qR-Pa1 {
    color: #fff
}
.subListItemInactive-2wcecZ .subListItemLink-qR-Pa1 {
    color: #dcddde
}
.subListItemLink-qR-Pa1 {
    background-color: #18191c;
    color: #dcddde;
}
.subListItemLink-qR-Pa1:hover {
    background-color: #221035;
    color: #f6f6f7
}
.desktopMenuMore-351jZB {
    color: #fff;
}
.header-3aRurq {
    color: #fff;
}
.headerNav-QStAAj {
    background-color: #000;
}
.mainNavLink-1SwQrC {
    color: #dcddde;
}
.mainNavLink-1SwQrC:hover {
    color: #f6f6f7
}
@media screen and (max-width: 1024px) {
    .type-1G6S2n {
    }
}
.header-1Zm1at {
    color: #fff;
}
.navLink-DPGG6D {
    color: #fff;
}
.appButton-3GZ9-9 {
    color: #fff;
}
.desktopMenuMore-vBoGnq {
    color: #fff;
}
@media screen and (max-width: 1024px) {
    .listItemSocialMedia-RWHjN1 {
    }
}
@media (max-width: 848px) {
    .mobileHeader-2xB92D {
    }
    }
.footerPrimary-KxrtlY {
    background: #18191c
}
.navigationHeader-2Vp4n_ {
    color: #fff;
}
.route-MFNjyu {
    color: hsla(0,0%,100%,.6);
}
.route-MFNjyu:hover {
    color: #fff
}
.separator-xZsY5U {
    background: url(/assets/ffa0a8d74568beaa8ec72dd51951685c.svg);
}
.readyToJoin-3kZFcp {
    color: #fff;
}
.joinOtherPlayers-370EmJ {
    color: hsla(0,0%,100%,.6);
}
.buttonPrimary-3RahU_ {
    background-color: #3a2648;
    color: #fff
}
.buttonPrimary-3RahU_:hover {
    color: #fff
}
.buttonBlurple-1kuusH {
    background: #fff;
    color: #3a2648
}
.footerBlurple-1BSoUN {
    background: #3a2648
}
@media screen and (max-width: 848px) {
    .footer-je22K2 {
    }
    .button-2A8AGi {
        background-color: #fff;
    }
    .button-2A8AGi,.button-2A8AGi:hover {
        color: #3a2648
    }
}
@-webkit-keyframes footer-blob-animation-_I95Dt {
    0% {
    }
    }
@keyframes footer-blob-animation-_I95Dt {
    0% {
    }
    }
@media (min-width: 1300px) {
    .filterAndSort-gLX1Ym,.hideGames-zMTyGl {
    }
}
.filterBackground-QanGTJ:before {
    background-size: cover;
}
.filterByTitleInput-2U3yVW {
    background-color: transparent;
}
.theme-light .filterByTitleInput-2U3yVW,.theme-light .headerBar-gowPQ3 {
    color: #3f225a
}
.theme-light .filterByTitleInput-2U3yVW:placeholder {
    color: rgba(79,84,92,.8)
}
.theme-light .filterByTitleInput-2U3yVW:focus,.theme-light .filterByTitleInputActive-zbB9zC {
    border-bottom-color: #3a2648
}
.theme-light .filterBrowsingHeaderType-3HE41M {
    border-color: #000
}
.theme-light .sortFilterBar-3hePOV {
    border-bottom-color: #3a2648;
    color: #000
}
.theme-light .filterLabel-31xlfq {
    color: #b9bbbe
}
.theme-light .hideGames-zMTyGl {
    color: #f6f6f7
}
.theme-dark .headerBar-gowPQ3 {
    color: #fff
}
.theme-dark .filterByTitleInput-2U3yVW {
    color: #f6f6f7
}
.theme-dark .filterByTitleInput-2U3yVW::-webkit-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .filterByTitleInput-2U3yVW:-ms-input-placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .filterByTitleInput-2U3yVW::placeholder {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .filterByTitleInput-2U3yVW:focus,.theme-dark .filterByTitleInputActive-zbB9zC {
    border-bottom-color: #fff
}
.theme-dark .filterBrowsingHeader-36gP-i {
    color: #fff
}
.theme-dark .filterBrowsingHeaderType-3HE41M {
    border-color: #fff
}
.theme-dark .sortFilterBar-3hePOV {
    border-color: #3f225a;
    color: #fff
}
.theme-dark .filterLabel-31xlfq {
    color: #b9bbbe
}
.theme-dark .hideGames-zMTyGl {
    color: #f6f6f7
}
.theme-dark .icon-3hGscC {
    color: hsla(0,0%,100%,.3)
}
.theme-dark .clearIcon-fcGbhl:hover {
    color: #f6f6f7
}
.theme-dark .searchIconActive-PkUHAi {
    color: #fff
}
.theme-light .filterBrowsingHeader-36gP-i,.theme-light .filterLabel-31xlfq {
    color: #000
}
.theme-light .icon-3hGscC {
    color: rgb(57, 37, 74, 0.4)
}
.theme-light .hideGames-zMTyGl {
    color: #000
}
.theme-light .clearIcon-fcGbhl:hover {
    color: rgba(57, 37, 74, 0.6)
}
.theme-light .searchIconActive-PkUHAi {
    color: #000
}
.theme-dark .applicationStore-1pNvnv {
    background-color: rgba(57, 37, 74, 0.6)
}
.theme-light .applicationStore-1pNvnv {
    background-color: #f6f6f7
}
.theme-dark .layer-3QrUeG, .theme-dark .layers-3iHuyZ, .container-2lgZY8, .theme-dark .guildsWrapper-5TJh6A, .channels-Ie2l6A, .theme-dark .chat-3bRxxu, .theme-dark .chat-3bRxxu form, .theme-dark .content-yTz4x3, .theme-dark .title-3qD0b-, .theme-dark .messagesWrapper-3lZDfY, .container-PNkimc, .theme-dark .members-1998pB, .theme-dark #friends, .theme-dark .activityFeed-28jde9, .theme-dark .headerBar-UHpsPw, .typing-2GQL18{
    background: transparent !important;
}

/* Dropdowns and stuff */
.Select-menu {
    background: #54113b;
}

#app-mount .Select-control {
    border-color: #52083e;
}

#app-mount [class*="divider"] {
    background: transparent;
    color: rgba(210, 174, 207, 0.5);
}

/* Guild dropdown invite */
#app-mount .menu-Sp6bN1 .invite-271nFU {
    color: rgba(255, 255, 255, .6);
}

/* For the rounded boxes in options */

#app-mount [class*="card"]::before {
    background: #3a2648;
    border-color: #411130;
}

/* For the petty rounded boxes in options that uses inline styles */
/* Remove the actual color in the selector if you want the Privacy & Safety to be styled aswell */
#app-mount .item-26Dhrx[style*="border-color: rgb(114, 137, 218);"] {
    background: #3a2648 !important; /* fuck inline styles lol */
    border-color: #3a2648 !important;
}

/* For the checkboxes in the options that also use inline styles */
.checkbox-1ix_J3 {
    background-color: #500a36 !important; /* FUCK */
    border: #500a36;
}

/* For the X button in the options */
#app-mount .button-mM-y8i:hover {
    background-color: #5f1a48;
}

/* For literally every checkbox */
svg[name="Checkmark"] polyline {
    stroke: white; /* because I can't find anything better */
}

/* Not seeing your game? I can't see shit */
.theme-dark .add-game-popout {
    background-color: rgb(110, 31, 80); /* solid is better */
}

/* Menu at the side of messages */
#app-mount .item-2J1YMK,
#app-mount .container-3cGP6G {
    background-color: #411130;
    margin: 0;
    width: 100%;
}


/* Tooltips when hovering over shit */
#app-mount .item-2J1YMK:hover {
    background-color: #27031a
}

#app-mount .tooltip {
    background: #411130;
}

#app-mount .tooltip-top::after {
    border-top-color: #411130
}

#app-mount .tooltip-bottom::after {
    border-bottom-color: #411130;
}

#app-mount .tooltip-left::after {
    border-left-color: #411130;
}

#app-mount .tooltip-right::after {
    border-right-color: #411130;
}

/* For the tooltip when sliding over the slider thing */
.theme-dark .bubble-3we2di {
    background-top-color: #411130;
}

.theme-dark .bubble-3we2di::before {
    border-top-color: #411130;
}

/* For hovering over context menu options */
.theme-dark .item-1Yvehc:hover {
    background-color: rgba(65, 17, 48, .4);
}

/* No need to have them different, silly */
#app-mount .channel-2QD9_O:hover a,
#app-mount .member-3W1lQa:hover .content-OzHfo4,
#app-mount .contentHoveredText-2D9B-x {
    background-color: rgb(57, 37, 74, 0.4);
}

/* It's just better this way */
#app-mount [class*="card"],
#app-mount .quickMessage-2XpSaN,
#app-mount .userInfoSection-2acyCx + .userInfoSection-2acyCx, /* #notmyselector */
#app-mount .userPopout-3XzG_A .footer-1fjuF6,
#app-mount .need-help-modal .footer,
#app-mount .accountBtnInner-sj5jLs {
    border-color: transparent;
}

#app-mount .connectedAccount-36nQx7 {
    box-shadow: 0 0 5px #842a82;
    border-color: transparent;
}

/* Make the upload module bearable */
#app-mount .uploadModal-2ifh8j .button-primary {
    min-height: 36px;
    margin-left: 10px;
    background-color: #af20a3;
    color: white;
}

#app-mount .uploadModal-2ifh8j .button:not(.button-primary) {
    transition: background-color 200ms ease;
}

#app-mount .uploadModal-2ifh8j .button:not(.button-primary):hover {
    text-decoration: none;
    background-color: #651364;
}

/* help modal */
#app-mount .need-help-modal .form-inner,
#app-mount .need-help-modal .footer {
    background-color: #8c2666;
}

#app-mount .need-help-modal .form-inner {
    padding-bottom: 0;
}

.messageCozy-2JPAPA + .divider-32i8lo {
    display: none;
}

.containerCozyBounded-1rKFAn {
    padding-bottom: 15px;
    padding-top: 15px;
}

.containerCozyBounded-1rKFAn:last-of-type {
    padding-bottom: 20px;
}
/* TODO: Create guild modal */
`;
    css = document.createElement('style');
    css.innerHTML = customBackground;
    document.body.appendChild(css);
