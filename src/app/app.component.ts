import { Component } from '@angular/core';
import './app.component.css';
import { log } from 'util';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    numArr = [0];
    inputNum = 1;
    changeNum(e) {
        e = e || window.event;
        let oldNum = this.inputNum || 0, nowNum = parseInt(e.target.value);
        //input可能是個空值，所以 || 0，target.value可能是str，str與str比大小會出現脫離常識的結果，所以parseInt
        this.inputNum = nowNum;

        //使用陣列渲染畫面開始
        if (nowNum > oldNum) {//新數據比舊數據多
            for (let i = oldNum; i < nowNum; i++) {
                this.numArr[i] = i;
            }
            // console.log('新增');
            return;
        }
        if (nowNum < oldNum) {//新數據比舊數據少
            let vNum = oldNum - nowNum;
            for (let i = 0; i < vNum; i++) {
                this.numArr.pop();
            }
            // console.log('刪除');
            return;
        }


        //使用陣列渲染畫面結束
    }
}
