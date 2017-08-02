/*
 * 处理点击事件回调、和点击播放音效
 */

cc.Class({
    extends: cc.Button,

    editor: CC_EDITOR && {
        inspector: "packages://custom-button/Custom-button-inspector.js",
        executeInEditMode: true
    },

    properties: {
        audio: {
            default: false,
            tooltip: '按钮点击是否触发音效'
        },
        soundEffect: {
            default: null,
            tooltip: '点击事件要触发的音效',
            url: cc.AudioClip,
            // visible () {
            //     return this.audio;
            // }
        },
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, event => this.touchCallBack(), this);
    },

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, event => this.touchCallBack(), this);
    },

    /*
     * 点击事件回调
     */
    touchCallBack() {
        this.playSoundEffect();
    },

    /*
     * 播放设置的音效
     */
    playSoundEffect() {
        this.interactable && this.soundEffect && cc.audioEngine.play(this.soundEffect);
    }
});