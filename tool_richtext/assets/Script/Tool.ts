// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Tool extends cc.Component {

    @property(cc.EditBox)
    editbox: cc.EditBox = null;

    @property(cc.RichText)
    result: cc.RichText = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.result.string = this.editbox.string.replace(/\\n/g, "\n");
        let textarea = document.getElementsByTagName("textarea")[0];
        textarea.setAttribute('autocomplete', 'false');
        textarea.setAttribute('autocorrect', 'false');
        textarea.setAttribute('autocapitalize', 'false');
        textarea.setAttribute('spellcheck', 'false');
        textarea.style.lineHeight = '40px';
    }

    onEditboxChange() {
        this.result.string = this.editbox.string.replace(/\\n/g, "\n");
    }

    // update (dt) {}
}
